import Link from "next/link";
import Image from "next/image";
import { TbArrowNarrowRight } from "react-icons/tb";

const highlights = [
  "Offline SMS Fallback",
  "Panic-Friendly Design",
  "AI Voice Classification",
  "Community Safety Map",
  "One Tap Emergency Trigger",
  "Yorùbá • Hausa • Igbo",
];

export default function HeroSection() {
  return (
    <section id="about" className="w-full mx-auto pt-15 lg:pt-8 pb-16">
      <div className="px-6 md:px-10 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center lg:gap-30 space-y-12">
          {/* Text Section */}
          <div className="w-full max-w-xl text-center lg:text-justify space-y-10">
            <h1 className="text-3xl md:text-4xl lg:text-6xl text-white font-semibold lg:text-left leading-tight">
              No cry for help goes unheard.
            </h1>
            <p className="text-white/70 text-base lg:text-xl leading-relaxed">
              SafeSignal NG is an AI-powered emergency alert system built for
              Nigeria. One tap. Your Language. Your people notified. Even when
              panic sets in.
            </p>

            <div className="flex flex-col lg:flex-row gap-7">
              <Link
                href="/login"
                className="flex items-center justify-center gap-2 bg-primary hover:bg-[#b7281b] hover:scale-105 transition duration-200 rounded-xl text-[18px] px-6 py-3 w-full"
              >
                <span className="text-white font-semibold">Get Started</span>
                <TbArrowNarrowRight className="text-white h-5 w-5" />
              </Link>

              <Link
                href=""
                className="border border-[#D9D9D9] hover:scale-105 transition duration-200 rounded-xl text-[18px] px-6 py-3 w-full text-center"
              >
                <span className="text-white font-semibold">
                  See How it Works
                </span>
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1 justify-center">
            <div className="relative h-170 w-90 lg:h-120 lg:w-130">
              <Image
                src="/hero-image2.png"
                alt="SafeSignal App Interface"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* highlights section */}
      <div className="overflow-hidden w-full mt-15 bg-[#111620] py-6">
        <div className="flex gap-10 whitespace-nowrap animate-scroll">
          {[...highlights, ...highlights].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-white/60 text-sm"
            >
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
