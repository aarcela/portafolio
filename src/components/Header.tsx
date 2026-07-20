"use client";

import { useLocale } from "@/context/LocaleContext";
import { withBasePath } from "@/lib/site";

export function Header() {
  const { locale, setLocale, t } = useLocale();
  const cvHref = withBasePath(
    locale === "es" ? "/Andres_Arcela_CV_ES.pdf" : "/Andres_Arcela_CV_EN.pdf",
  );
  const cvName =
    locale === "es" ? "Andres_Arcela_CV_ES.pdf" : "Andres_Arcela_CV_EN.pdf";

  return (
    <header className="site-header">
      <a href="#top" className="logo">
        AA
      </a>
      <nav className="nav" aria-label="Primary">
        <a href="#work">{t.nav.work}</a>
        <a href="#experience">{t.nav.experience}</a>
        <a href="#skills">{t.nav.skills}</a>
        <a href="#contact">{t.nav.contact}</a>
      </nav>
      <div className="header-actions">
        <div className="lang-toggle" role="group" aria-label="Language">
          <button
            type="button"
            className={locale === "en" ? "active" : undefined}
            onClick={() => setLocale("en")}
            aria-pressed={locale === "en"}
          >
            EN
          </button>
          <button
            type="button"
            className={locale === "es" ? "active" : undefined}
            onClick={() => setLocale("es")}
            aria-pressed={locale === "es"}
          >
            ES
          </button>
        </div>
        <a href={cvHref} download={cvName} className="btn btn-ghost header-cv">
          {t.nav.download}
        </a>
      </div>
    </header>
  );
}
