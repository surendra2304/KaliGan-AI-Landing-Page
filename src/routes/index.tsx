import { createFileRoute } from "@tanstack/react-router";
import { useLenis } from "@/hooks/use-lenis";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import {
  TrustedBy,
  Employees,
  Solutions,
  HowItWorks,
  VoiceAndChat,
  Integrations,
  Testimonials,
  Pricing,
  FAQ,
  FinalCTA,
  Footer,
} from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KaliGan AI — AI Employees That Never Sleep" },
      {
        name: "description",
        content:
          "Deploy AI employees that answer calls, qualify leads, book meetings and support customers 24/7. Live in an afternoon, no coding required.",
      },
      { property: "og:title", content: "KaliGan AI — AI Employees That Never Sleep" },
      {
        property: "og:description",
        content:
          "Premium AI employees for voice, chat and back office. Human-like conversations, setup in minutes, working 24/7.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useLenis();
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Employees />
      <Solutions />
      <HowItWorks />
      <VoiceAndChat />
      <Integrations />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
