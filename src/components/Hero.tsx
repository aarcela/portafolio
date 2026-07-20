"use client";

import { useLocale } from "@/context/LocaleContext";
import { withBasePath } from "@/lib/site";

export function Hero() {
  const { locale, t } = useLocale();
  const cvHref = withBasePath(
    locale === "es" ? "/Andres_Arcela_CV_ES.pdf" : "/Andres_Arcela_CV_EN.pdf",
  );
  const cvName =
    locale === "es" ? "Andres_Arcela_CV_ES.pdf" : "Andres_Arcela_CV_EN.pdf";

  return (
    <section className="hero" id="top">
      <p className="hero-status reveal">{t.hero.available}</p>
      <h1 className="hero-name reveal reveal-delay-1">{t.hero.name}</h1>
      <p className="hero-role reveal reveal-delay-2">{t.hero.role}</p>
      <p className="hero-summary reveal reveal-delay-3">{t.hero.summary}</p>
      <div className="hero-ctas reveal reveal-delay-4">
        <a href="#contact" className="btn btn-primary">
          {t.hero.ctaPrimary}
        </a>
        <a href={cvHref} download={cvName} className="btn btn-secondary">
          {t.hero.ctaSecondary}
        </a>
      </div>
    </section>
  );
}
