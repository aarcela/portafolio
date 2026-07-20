"use client";

import { useLocale } from "@/context/LocaleContext";

export function Experience() {
  const { t } = useLocale();

  return (
    <section className="section" id="experience">
      <div className="section-head">
        <h2>{t.experience.title}</h2>
        <p>{t.experience.subtitle}</p>
      </div>
      <ul className="exp-list">
        {t.experience.items.map((item) => (
          <li key={`${item.company}-${item.period}`} className="exp-item">
            <div className="exp-meta">
              <span className="exp-period">{item.period}</span>
            </div>
            <div className="exp-body">
              <h3>{item.role}</h3>
              <p className="exp-company">{item.company}</p>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
