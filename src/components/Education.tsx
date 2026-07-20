"use client";

import { useLocale } from "@/context/LocaleContext";

export function Education() {
  const { t } = useLocale();

  return (
    <section className="section" id="education">
      <div className="section-head">
        <h2>{t.education.title}</h2>
      </div>
      <ul className="edu-list">
        {t.education.items.map((item) => (
          <li key={item.degree}>
            <span className="edu-degree">{item.degree}</span>
            <span className="edu-school">
              {item.school} · {item.year}
            </span>
          </li>
        ))}
      </ul>
      <p className="edu-languages">
        <span>{t.education.languagesLabel}</span>
        {t.education.languages}
      </p>
    </section>
  );
}
