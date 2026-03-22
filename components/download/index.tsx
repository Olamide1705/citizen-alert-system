import Image from "next/image";

export default function Download() {
  return (
    <section className="bg-[#111620] py-20 px-6 md:px-10 lg:px-16">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-white text-3xl md:text-4xl lg:text-6xl font-semibold">
          Your safety <br />
          starts <span className="text-primary">today.</span>
        </h1>
        <p className="text-sm md:text-base lg:text-xl text-white/70 mt-4">
          Join thousands of Nigerians who refuse to face emergencies alone.
          Download SafeSignal NG and set up your protection in under 2 minutes.
        </p>

        <div className="flex justify-center gap-4 mt-4 lg:mt-8">
          <Image
            src="/app-store.png"
            alt="Download on App Store"
            width={160}
            height={50}
            className="w-30 h-13 lg:w-40 lg:h-13 object-contain hover:scale-105 transition"
          />

          <Image
            src="/play-store.png"
            alt="Download on Play Store"
            width={160}
            height={50}
            className="w-30 h-13 lg:w-40 lg:h-13 object-contain hover:scale-105 transition"
          />
        </div>
      </div>
    </section>
  );
}
