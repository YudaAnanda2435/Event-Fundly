import { Camera, Video, Users, Bell, FileText, LineChart } from "lucide-react";

export default function FeaturesOverview() {
  const features = [
    {
      icon: Camera,
      title: "Goal Setting",
      description:
        "Set specific savings goals for each event you plan to attend.",
    },
    {
      icon: Video,
      title: "Progress Tracking",
      description:
        "Monitor your savings and see how close you are to reaching your goals.",
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Join a community of savers and share tips and experiences.",
    },
    {
      icon: Bell,
      title: "Notifications",
      description: "Receive reminders and updates on your savings journey.",
    },
    {
      icon: FileText,
      title: "Custom Reports",
      description: "Generate reports to analyze your savings habits over time.",
    },
    {
      icon: LineChart,
      title: "Savings Insights",
      description: "Get personalized insights based on your savings behavior.",
    },
  ];

  return (
    <section id="feature" className="bg-black py-12 md:py-24 lg:py-32 ">
      <div className="container mx-auto px-6 md:px-20">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <p className="text-[18px] font-medium font-fontJakarta text-blue-500">
            Features Overview
          </p>
          <h2 className="text-[51px] font-bold font-fontJakarta tracking-tighter sm:text-4xl md:text-5xl text-white">
            User-Friendly Interface
          </h2>
          <p className="mx-auto text-[18px] font-medium font-fontJakarta text-zinc-400">
            Easily navigate through your savings goals and track your progress.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center space-y-4"
            >
              <div className="p-3 rounded-full bg-zinc-800/80">
                <feature.icon className="w-6 h-6 text-zinc-400" />
              </div>
              <h3 className="text-[18px] font-semibold font-fontJakarta text-white">
                {feature.title}
              </h3>
              <p className="text-[14px] font-fontJakarta  text-zinc-400 text-center ">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
