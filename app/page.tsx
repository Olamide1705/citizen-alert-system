import Download from "@/components/download";
import Features from "@/components/features";
import Feedback from "@/components/feedback";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import HowItWorks from "@/components/how-it-works";
import NavBar from "@/components/navbar";

export default function Home() {
  return (
    <main className="bg-[#080A0D] min-h-screen">
      <NavBar />
      <HeroSection />
      <Features />
      <HowItWorks />
      <Feedback />
      <Download />
      <Footer />
    </main>
  );
}
