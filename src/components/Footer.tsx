"use client";

import { useLocale } from "@/context/LocaleContext";

export function Footer() {
  const { t } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <span>
        © {year} {t.footer.rights}
      </span>
      <span>Venezuela</span>
    </footer>
  );
}
