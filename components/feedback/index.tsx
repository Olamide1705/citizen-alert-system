"use client";

import Image from "next/image";
import { Card, CardContent } from "../ui/card";

const cards = [
  {
    name: "Seun",
    handle: "@horluwaseun1705",
    dp: "/dp.png",
    heading: "Top-notch quality",
    review:
      "The voice feature is a miracle. I spoke in Hausa and it understood exactly what I was saying. The alert went out before I finished my sentence",
  },

  {
    name: "Seun",
    handle: "@horluwaseun1705",
    dp: "/dp.png",
    heading: "Top-notch quality",
    review:
      "The voice feature is a miracle. I spoke in Hausa and it understood exactly what I was saying. The alert went out before I finished my sentence",
  },

  {
    name: "Seun",
    handle: "@horluwaseun1705",
    dp: "/dp.png",
    heading: "Top-notch quality",
    review:
      "The voice feature is a miracle. I spoke in Hausa and it understood exactly what I was saying. The alert went out before I finished my sentence",
  },

  {
    name: "Seun",
    handle: "@horluwaseun1705",
    dp: "/dp.png",
    heading: "Top-notch quality",
    review:
      "The voice feature is a miracle. I spoke in Hausa and it understood exactly what I was saying. The alert went out before I finished my sentence",
  },

  {
    name: "Seun",
    handle: "@horluwaseun1705",
    dp: "/dp.png",
    heading: "Top-notch quality",
    review:
      "The voice feature is a miracle. I spoke in Hausa and it understood exactly what I was saying. The alert went out before I finished my sentence",
  },
];

export default function Feedback() {
  return (
    <section id="feedback" className="py-20">
      <div className="relative w-full">
        <h1 className="text-3xl md:text-5xl lg:text-6xl text-center text-white font-semibold">
          Community Feedback
        </h1>
        <div className="overflow-hidden w-full mt-15">
          <div className="flex space-x-6 px-4 scroll-row">
            {[...cards, ...cards].map((card, index) => (
              <Card
                key={index}
                className="bg-[#111620] border border-white/10 rounded-[24px] w-90 min-h-55 px-4 py-6 flex-none hover:-translate-y-1 transition-transform duration-300"
              >
                <CardContent className="">
                  <div className="flex space-x-2 items-center">
                    <Image
                      src={card.dp}
                      alt={card.name}
                      width={40}
                      height={40}
                      sizes="40px"
                      className="rounded-full"
                    />
                    <div>
                      <p className="text-white text-base font-medium">
                        {card.name}
                      </p>
                      <p className="text-white/40 text-sm">{card.handle}</p>
                    </div>
                  </div>
                  <div>
                    <p className="mt-5 text-white font-medium text-base">
                      {card.heading}
                    </p>
                    <p className="text-white/40 text-sm mt-2 text-justify">
                      {card.review}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
