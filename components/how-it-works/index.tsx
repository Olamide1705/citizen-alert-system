import { FiUsers } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { MdKeyboardVoice } from "react-icons/md";
import { TbBolt } from "react-icons/tb";

const steps = [
  {
    id: 1,
    title: "Trigger Alert",
    description:
      "Hold the SOS button for 3 seconds, or say your wake word in any language. No unlock required.",
    icon: TbBolt,
  },

  {
    id: 2,
    title: "Capture Context",
    description:
      "The app captures your GPS location, emergency type, and a voice/text description — all in under 5 seconds.",
    icon: MdKeyboardVoice,
  },

  {
    id: 3,
    title: "Alert Dispatched",
    description:
      "Your contacts receives the alert instantly, track your location, and coordinate to provide help.",
    icon: IoLocationOutline,
  },

  {
    id: 4,
    title: "Community Aware",
    description:
      "Incident appears on the community map. Nearby users are notified. Help can come from multiple directions.",
    icon: FiUsers,
  },
];
export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-[#111620] px-6 md:px-10 lg:px-16 py-20"
    >
      <div>
        <div className="w-full max-w-xl pb-5 lg:pb-10">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold text-white leading-tight">
            From panic to help in 4 steps.
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-y-10 lg:gap-7 pt-8">
          {steps.map(({ id, title, description, icon: Icon }) => (
            <div
              key={id}
              className="flex flex-col items-center justify-center space-y-1 lg:space-y-4 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="bg-[#080A0D] border border-white/20 flex items-center justify-center h-12 w-12 lg:h-16 lg:w-16 rounded-full p-1">
                <p className="text-primary font-semibold text-xl md:text-2xl lg:text-3xl">
                  {id}
                </p>
              </div>

              <div className="flex flex-col items-center space-y-1">
                <Icon className="h-8 w-8 lg:h-12 lg:w-12 text-[#4A5565]" />
                <h3 className="text-white font-bold text-[18px] lg:text-2xl">
                  {title}
                </h3>
                <p className="text-xs lg:text-sm text-white/70 text-center">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
