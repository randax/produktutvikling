import { Flag, h2Class, Section } from "./ui";

// Legal must approve this table before publishing. Every cell needs a dated source.
// No price row: comparative advertising must compare like with like.
const COLUMNS = ["iCloud", "Google Foto", "Jottacloud", "Heima"] as const;
const UNVERIFIED = null;

const ROWS: { question: string; cells: (string | typeof UNVERIFIED)[] }[] = [
  {
    question: "Kven kan sjå bileta?",
    cells: [
      "Apple, om du ikkje har slått på «Avansert datavern»",
      "Google",
      "Jottacloud",
      "Berre familien",
    ],
  },
  {
    question: "Kvar er dei lagra?",
    cells: [
      "Hos Apple. Ikkje lova lagra i Noreg",
      "Hos Google. Kan vere utanfor Noreg",
      "Hos Jottacloud, i Noreg",
      "Heime hos deg, med ein låst kopi i Noreg",
    ],
  },
  {
    question: "Kva skjer om du sluttar å betale?",
    cells: [
      "Du går ned til 5 GB gratis lagring",
      "Du går ned til 15 GB gratis lagring",
      UNVERIFIED, // Jottacloud: not yet verified
      "Boksen verkar vidare, og alt er ditt",
    ],
  },
  { question: "Assistent for breva dine", cells: ["Nei", "Nei", "Nei", "Ja, heime hos deg"] },
];

const HEIMA = COLUMNS.length - 1;

function Cell({ value }: { value: string | null }) {
  return value ?? <Flag>⚑ Må sjekkast</Flag>;
}

export function ComparisonSection() {
  return (
    <Section id="samanlikning">
      <div className="wrap grid gap-5">
        <h2 className={h2Class}>Kven kan sjå bileta dine?</h2>
        <p>
          <Flag>Utkast: fakta må stadfestast av juridisk</Flag>
        </p>

        {/* Wide screens: a real table. */}
        <div className="hidden overflow-hidden rounded-2xl border border-line bg-surface md:block">
          <table className="w-full border-collapse text-[15px]">
            <thead>
              <tr>
                <td className="border-b border-line" />
                {COLUMNS.map((c, i) => (
                  <th
                    key={c}
                    scope="col"
                    className={`border-b border-line px-4 py-3.5 text-left font-display text-base ${i === HEIMA ? "bg-amber-soft" : ""}`}
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.question} className="border-b border-line last:border-0">
                  <th scope="row" className="w-[22%] px-4 py-3.5 text-left align-top font-semibold">
                    {row.question}
                  </th>
                  {row.cells.map((cell, i) => (
                    <td
                      key={COLUMNS[i]}
                      className={`px-4 py-3.5 align-top ${i === HEIMA ? "bg-amber-soft font-semibold" : ""}`}
                    >
                      <Cell value={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Phones: one card per question, so nothing scrolls sideways. */}
        <div className="grid gap-4 md:hidden">
          {ROWS.map((row) => (
            <section key={row.question} className="rounded-2xl border border-line bg-surface p-4">
              <h3 className="mb-3 text-lg font-bold">{row.question}</h3>
              <dl className="grid gap-2.5 text-[15px]">
                {row.cells.map((cell, i) => (
                  <div
                    key={COLUMNS[i]}
                    className={`grid grid-cols-[110px_1fr] gap-3 ${i === HEIMA ? "-mx-2 rounded-lg bg-amber-soft px-2 py-1.5 font-semibold" : ""}`}
                  >
                    <dt className="font-semibold">{COLUMNS[i]}</dt>
                    <dd className="m-0">
                      <Cell value={cell} />
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          ))}
        </div>

        <p className="text-[13.5px] text-muted">
          Prisar og vilkår per [dato]. Kjelder: [ei kjelde per påstand].
        </p>
      </div>
    </Section>
  );
}
