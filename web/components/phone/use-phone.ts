"use client";

import { track } from "@vercel/analytics";
import { useCallback, useEffect, useReducer, useRef, useSyncExternalStore } from "react";
import { initialState, phoneReducer, SCREENS, type PhoneState, type ScreenId } from "./model";

export interface PhoneController {
  state: PhoneState;
  /** User-initiated navigation (counts as interacting with the prototype). */
  go: (to: ScreenId, toast?: string) => void;
  /** Navigation the prototype does by itself (typing finished, answer ready…). */
  advance: (to: ScreenId) => void;
  toggle: (index: number) => void;
  setSheet: (open: boolean) => void;
  reset: () => void;
  /** True once the visitor has clicked anything in or around the phone. */
  hasInteracted: () => boolean;
}

/** @param page where the prototype sits, sent with the `prototype_opened` event. */
export function usePhone(start: ScreenId, page: string): PhoneController {
  const [state, dispatch] = useReducer(phoneReducer, start, initialState);
  const interacted = useRef(false);

  const interact = useCallback(() => {
    if (interacted.current) return;
    interacted.current = true;
    track("prototype_opened", { page });
  }, [page]);

  const go = useCallback(
    (to: ScreenId, toast?: string) => {
      interact();
      dispatch({ type: "go", to, toast });
    },
    [interact],
  );
  const advance = useCallback((to: ScreenId) => dispatch({ type: "go", to }), []);
  const toggle = useCallback(
    (index: number) => {
      interact();
      dispatch({ type: "toggle", index });
    },
    [interact],
  );
  const setSheet = useCallback(
    (open: boolean) => {
      interact();
      dispatch({ type: "sheet", open });
    },
    [interact],
  );
  const reset = useCallback(() => {
    interact();
    dispatch({ type: "reset", to: start });
  }, [interact, start]);
  const hasInteracted = useCallback(() => interacted.current, []);

  // Screens like «Skann koden» move on by themselves.
  useEffect(() => {
    const auto = SCREENS[state.screen].auto;
    if (!auto) return;
    const timer = setTimeout(() => dispatch({ type: "go", to: auto.to }), auto.ms);
    return () => clearTimeout(timer);
  }, [state.screen]);

  useEffect(() => {
    if (!state.toast) return;
    const timer = setTimeout(() => dispatch({ type: "clearToast" }), 2400);
    return () => clearTimeout(timer);
  }, [state.toast]);

  return { state, go, advance, toggle, setSheet, reset, hasInteracted };
}

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(onChange: () => void) {
  const query = window.matchMedia(REDUCED_MOTION);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

export function useReducedMotion(): boolean {
  return useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia(REDUCED_MOTION).matches,
    () => false,
  );
}
