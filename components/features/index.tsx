import { FaWifi } from "react-icons/fa";
import { Card, CardContent } from "../ui/card";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { TbBolt, TbWorld } from "react-icons/tb";
import { IoLocationOutline, IoMapOutline } from "react-icons/io5";
import { MdKeyboardVoice } from "react-icons/md";
import { IoMdAlarm } from "react-icons/io";
import { FiMessageSquare, FiUsers } from "react-icons/fi";

const problems = [
  {
    id: 1,
    title: "Delayed Response",
    description:
      "Emergency services in Nigeria can take 30+ minutes to respond. People need to alert their own community first — the people who can actually help in time.",
    icon: AiOutlineExclamationCircle,
  },
  {
    id: 2,
    title: "Unreliable Internet",
    description:
      "Data connectivity is not guaranteed across Nigeria. A safety app that fails without 4G is not a safety app. It's a luxury product.",
    icon: FaWifi,
  },
  {
    id: 3,
    title: "Not everyone speaks English fluently",
    description:
      "Over 500 languages are spoken in Nigeria. Most emergency tools assume English fluency. Under stress, people revert to their mother tongue — always.",
    icon: TbWorld,
  },
  {
    id: 4,
    title: "Sharing location takes too long",
    description:
      "Manually sending your location in an emergency wastes precious seconds when every moment counts.",
    icon: IoLocationOutline,
  },
];

const features = [
  {
    id: 1,
    title: "One-Tap SOS",
    description:
      "A single, oversized panic button. Hold for 3 seconds. Your location, alert type, and message are sent to all emergency contacts instantly.",
    icon: TbBolt,
  },
  {
    id: 2,
    title: "AI Voice Alerts",
    description:
      "Speak in Yorùbá, Hausa, Igbo, or Pidgin. Our AI transcribes, translates, classifies the emergency type, and dispatches the right alert automatically.",
    icon: MdKeyboardVoice,
  },
  {
    id: 3,
    title: "Offline SMS Fallback",
    description:
      "No internet? No problem. SafeSignal automatically falls back to SMS to reach your contacts when data is unavailable. Safety doesn't require Wi-Fi.",
    icon: FiMessageSquare,
  },
  {
    id: 4,
    title: "Community Safety Map",
    description:
      "Real-time, community-reported incidents mapped near you. Filter by robbery, accident, or medical. Know what's happening in your neighborhood before you step out.",
    icon: IoMapOutline,
  },
  {
    id: 5,
    title: "Emergency Contact Chain",
    description:
      "Add up to 5 emergency contacts with priority ordering. Primary contact is called first. If unreachable, the chain continues automatically.",
    icon: FiUsers,
  },
  {
    id: 6,
    title: "False Alarm Protection",
    description:
      "A 10-second cancellation window prevents embarrassing false alarms without sacrificing emergency speed. Configurable from 5–30 seconds.",
    icon: IoMdAlarm,
  },
];
export default function Features() {
  return (
    <section id="features" className="px-6 md:px-10 lg:px-16">
      {/* Problems Section */}
      <div className="w-full max-w-xl space-y-5 pb-8">
        <h1 className="text-center lg:text-left text-white text-3xl md:text-4xl lg:text-6xl font-semibold leading-tight lg:leading-16">
          When panic hits{" "}
          <span className="text-primary">everything falls.</span>
        </h1>
        <p className="text-white/60 text-base lg:text-xl text-center lg:text-justify">
          Current emergency systems were designed for calm users with stable
          internet and fluent English. That is not Nigeria. That is not reality.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-7 pt-2 lg:pt-5 pb-15">
        {problems.map(({ id, title, description, icon: Icon }) => (
          <Card
            key={id}
            className="group bg-[#111620] border border-white/10 transition duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg hover:shadow-red-500/30 active:scale-95 active:bg-[#161c28]"
          >
            <CardContent className="space-y-1 lg:space-y-3">
              <div className="bg-[#391C20] rounded-full p-2 w-13.75 h-13.75 flex items-center justify-center">
                <Icon className="w-8 h-8 text-primary transition-transform group-hover:scale-110" />
              </div>

              <h4 className="text-white text-base lg:text-xl font-bold">
                {title}
              </h4>
              <p className="text-white/60 text-xs lg:text-sm text-justify">
                {description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Features Section */}
      <div className="flex flex-col lg:flex-row items-end gap-5 pt-8 lg:pt-15 pb-10">
        <div className="w-full max-w-md">
          <h1 className="text-white text-center lg:text-left text-3xl md:text-4xl lg:text-6xl font-semibold lg:leading-16">
            Every feature earns its <span className="text-primary">place.</span>
          </h1>
        </div>
        <div>
          <p className="text-sm lg:text-xl text-white/70 text-center lg:text-justify">
            SafeSignal NG was designed from first principles for the Nigerian
            context — not adapted from a Western template. Every decision was
            made with one question: will this work when someone&apos;s life
            depends on it?
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 pt-2 lg:pt-5 pb-15">
        {features.map(({ id, title, description, icon: Icon }) => (
          <Card
            key={id}
            className="group bg-[#111620] border border-white/10 transition duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg hover:shadow-red-500/30 active:scale-95 active:bg-[#161c28]"
          >
            <CardContent className="space-y-1 lg:space-y-3">
              <div className="bg-[#391C20] rounded-full p-2 w-13.75 h-13.75 flex items-center justify-center">
                <Icon className="w-6 h-6 text-primary transition-transform group-hover:scale-110" />
              </div>

              <h4 className="text-white text-base lg:text-xl font-bold">
                {title}
              </h4>
              <p className="text-white/60 text-xs lg:text-sm text-justify">
                {description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
