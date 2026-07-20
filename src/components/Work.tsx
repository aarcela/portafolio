"use client";

import { useLocale } from "@/context/LocaleContext";

export function Work() {
  const { t } = useLocale();

  return (
    <section className="section" id="work">
      <div className="section-head">
        <h2>{t.work.title}</h2>
        <p>{t.work.subtitle}</p>
      </div>
      <ul className="work-list">
        {t.work.items.map((item) => (
          <li key={item.name} className="work-item">
            <div className="work-meta">
              <span className="work-period">{item.period}</span>
              <span className="work-role">{item.role}</span>
            </div>
            <div className="work-body">
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="work-title"
              >
                {item.name}
                <span className="work-arrow" aria-hidden>
                  ↗
                </span>
              </a>
              <p>{item.description}</p>
              <ul className="tag-list">
                {item.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
