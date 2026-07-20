"use client";

import { useLocale } from "@/context/LocaleContext";

export function Contact() {
  const { t } = useLocale();

  return (
    <section className="section contact" id="contact">
      <div className="section-head">
        <h2>{t.contact.title}</h2>
        <p>{t.contact.subtitle}</p>
      </div>
      <div className="contact-grid">
        <div>
          <p className="contact-label">{t.contact.emailLabel}</p>
          <a href={`mailto:${t.contact.email}`} className="contact-email">
            {t.contact.email}
          </a>
        </div>
        <div>
          <p className="contact-label">{t.contact.linksLabel}</p>
          <ul className="contact-links">
            <li>
              <a
                href={t.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={t.contact.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
