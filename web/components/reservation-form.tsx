"use client";

import { track } from "@vercel/analytics";
import Link from "next/link";
import { useActionState, useEffect, useRef, type ReactNode } from "react";
import { reserve, type ReserveState } from "@/app/actions";
import { PACKAGES } from "@/lib/packages";
import {
  CONSENT_TEXT,
  QUESTIONS,
  QUESTION_NAMES,
  type ConsentName,
} from "@/lib/reservation/options";
import { EMPTY_VALUES, type FieldErrors, type FieldName } from "@/lib/reservation/validate";
import { usePackageChoice } from "./package-choice";
import { buttonClass, RESERVE_LABEL } from "./ui";

const INITIAL: ReserveState = { status: "idle", attempt: 0 };

const fieldId = (name: FieldName | ConsentName) => `felt-${name}`;
const errorId = (name: FieldName | ConsentName) => `feil-${name}`;

const pillInput = "peer sr-only";
const pillLabel =
  "inline-block cursor-pointer rounded-full border border-line bg-bg px-3.5 py-2 text-[15px] peer-checked:border-amber peer-checked:bg-amber-soft peer-checked:font-semibold peer-focus-visible:outline-3 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-glow";

function ErrorText({ name, errors }: { name: FieldName; errors: FieldErrors }) {
  const message = errors[name];
  return message ? (
    <p id={errorId(name)} className="text-[14px] font-semibold text-flag">
      {message}
    </p>
  ) : null;
}

function Group({
  name,
  legend,
  hint,
  errors,
  children,
}: {
  name: FieldName;
  legend: string;
  hint?: string;
  errors: FieldErrors;
  children: ReactNode;
}) {
  return (
    <fieldset
      id={fieldId(name)}
      tabIndex={-1}
      className="grid gap-2"
      aria-describedby={errors[name] ? errorId(name) : undefined}
    >
      <legend className="mb-2 font-semibold">
        {legend} {hint && <span className="font-normal text-[14px] text-muted">{hint}</span>}
      </legend>
      <div className="flex flex-wrap gap-2">{children}</div>
      <ErrorText name={name} errors={errors} />
    </fieldset>
  );
}

function ErrorSummary({ errors }: { errors: FieldErrors }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => ref.current?.focus(), []);
  return (
    <div
      ref={ref}
      tabIndex={-1}
      role="alert"
      className="grid gap-2 rounded-2xl border-2 border-flag bg-flag-soft p-4 text-ink"
    >
      <p className="font-semibold">Nokre av svara manglar eller er feil:</p>
      <ul className="grid list-disc gap-1 pl-5">
        {Object.entries(errors).map(([name, message]) => (
          <li key={name}>
            <a href={`#${fieldId(name as FieldName)}`} className="underline">
              {message}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ReservationForm() {
  const [state, formAction, pending] = useActionState(reserve, INITIAL);
  const { pakke, choose } = usePackageChoice();
  const started = useRef(false);

  const errors: FieldErrors = state.status === "error" ? state.errors : {};
  const values = state.status === "error" ? state.values : EMPTY_VALUES;
  const invalid = (name: FieldName) => ({
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? errorId(name) : undefined,
  });

  return (
    <form
      // A new key per attempt remounts the fields with the values sent back from the server.
      key={state.attempt}
      action={formAction}
      noValidate
      onFocus={() => {
        if (started.current) return;
        started.current = true;
        track("form_started");
      }}
      className="grid gap-6 rounded-[20px] border border-line bg-surface p-5 text-ink md:p-7"
    >
      {state.status === "error" && <ErrorSummary errors={errors} />}

      <Group name="pakke" legend="Kva storleik?" errors={errors}>
        {PACKAGES.map((pkg) => (
          <label key={pkg.id}>
            <input
              type="radio"
              name="pakke"
              value={pkg.id}
              checked={pakke === pkg.id}
              onChange={() => choose(pkg.id)}
              className={pillInput}
            />
            <span className={pillLabel}>Heima {pkg.size}</span>
          </label>
        ))}
      </Group>

      <div className="grid gap-1.5">
        <label htmlFor={fieldId("epost")} className="font-semibold">
          E-post
        </label>
        <input
          id={fieldId("epost")}
          name="epost"
          type="email"
          autoComplete="email"
          inputMode="email"
          required
          defaultValue={values.epost}
          placeholder="namn@døme.no"
          {...invalid("epost")}
          className="w-full rounded-xl border border-line bg-bg px-3.5 py-3 text-ink aria-invalid:border-flag"
        />
        <ErrorText name="epost" errors={errors} />
      </div>

      <div className="grid gap-1.5">
        <label htmlFor={fieldId("postnummer")} className="font-semibold">
          Postnummer{" "}
          <span className="font-normal text-[14px] text-muted">
            Så vi veit kvar i landet interessa er.
          </span>
        </label>
        <input
          id={fieldId("postnummer")}
          name="postnummer"
          inputMode="numeric"
          autoComplete="postal-code"
          pattern="[0-9]{4}"
          maxLength={4}
          required
          defaultValue={values.postnummer}
          placeholder="5003"
          {...invalid("postnummer")}
          className="w-full max-w-[10rem] rounded-xl border border-line bg-bg px-3.5 py-3 text-ink aria-invalid:border-flag"
        />
        <ErrorText name="postnummer" errors={errors} />
      </div>

      {QUESTION_NAMES.map((name) => {
        const q = QUESTIONS[name];
        const picked = values[name];
        return (
          <Group
            key={name}
            name={name}
            legend={q.legend}
            hint={"hint" in q ? q.hint : undefined}
            errors={errors}
          >
            {q.options.map((o) => (
              <label key={o.value}>
                <input
                  type={q.multiple ? "checkbox" : "radio"}
                  name={name}
                  value={o.value}
                  defaultChecked={
                    Array.isArray(picked) ? picked.includes(o.value) : picked === o.value
                  }
                  className={pillInput}
                />
                <span className={pillLabel}>{o.label}</span>
              </label>
            ))}
          </Group>
        );
      })}

      <div className="grid gap-3">
        {(Object.keys(CONSENT_TEXT) as ConsentName[]).map((name) => {
          const required = name !== "intervju";
          const error = name === "intervju" ? undefined : errors[name];
          return (
            <div key={name} className="grid gap-1">
              <label
                htmlFor={fieldId(name)}
                className="grid grid-cols-[22px_1fr] items-start gap-2.5 text-[15.5px]"
              >
                <input
                  id={fieldId(name)}
                  type="checkbox"
                  name={name}
                  value="ja"
                  defaultChecked={values[name]}
                  required={required}
                  aria-invalid={error ? true : undefined}
                  aria-describedby={error ? errorId(name) : undefined}
                  className="mt-1 size-[18px] accent-amber"
                />
                <span>
                  {CONSENT_TEXT[name]}
                  {!required && <span className="text-[14px] text-muted"> (valfritt)</span>}
                </span>
              </label>
              {name !== "intervju" && <ErrorText name={name} errors={errors} />}
            </div>
          );
        })}
      </div>

      <div className="grid gap-2.5">
        <button
          type="submit"
          disabled={pending}
          className={buttonClass("primary", "justify-self-start disabled:opacity-60")}
        >
          {RESERVE_LABEL}
        </button>
        <p className="text-[13.5px] text-muted">
          Vi lagrar berre e-posten, postnummeret og svara dine, i EU, og slettar alt automatisk
          seinast seks månader etter at vi har bestemt oss. Du kan melde deg av når som helst.{" "}
          <Link href="/personvern" className="text-amber-ink underline">
            Personvernerklæring
          </Link>
        </p>
      </div>
    </form>
  );
}
