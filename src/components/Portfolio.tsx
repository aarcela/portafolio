"use client";

import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { useLocale } from "@/context/LocaleContext";

export function Portfolio() {
  const { t } = useLocale();

  useEffect(() => {
    document.title = t.meta.title;
  }, [t.meta.title]);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Work />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
