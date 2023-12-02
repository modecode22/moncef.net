import Hero from "@/components/Hero";
import CustomLink from "@/components/Link";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import UiPage from "@/components/ui/UiPage";
import { Locale } from "@/i18n.config";
import Image from "next/image";

export default function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return (
    <main>
      <Hero lang={lang} />
      <Skills lang={lang} />
      <Projects lang={lang} />
    </main>
  );
}
