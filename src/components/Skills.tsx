"use client";

import { useLocale } from "@/context/LocaleContext";

export function Skills() {
  const { t } = useLocale();

  return (
    <section className="section" id="skills">
      <div className="section-head">
        <h2>{t.skills.title}</h2>
        <p>{t.skills.subtitle}</p>
      </div>
      <div className="skills-grid">
        {t.skills.groups.map((group) => (
          <div key={group.label} className="skills-group">
            <h3>{group.label}</h3>
            <p>{group.items.join(" · ")}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
