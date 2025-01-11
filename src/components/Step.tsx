const steps = [
  {
    id: 1,
    title: "Step 1",
    description: "Create an account to start tracking your savings goals.",
    image: "assets/step1.png",
  },
  {
    id: 2,
    title: "Step 2",
    description: "Input your savings and set your event goals.",
    image: "../assets/britday.png",
  },
  {
    id: 3,
    title: "Step 3",
    description: "Monitor your progress and celebrate your achievements.",
    image: "../assets/time.png",
  },
];

const Step = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-6 md:px-20 text-center">
        <h2 className="md:text-[56px] text-4xl font-base mb-4 font-fontJakarta">
          How It Works
        </h2>
        <p className="text-base font-fontJakarta text-gray-400 mb-12 text-[22px]">
          Follow these simple steps to track your savings effectively.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center">
              <img
                src={step.image}
                alt={step.title}
                className="w-[360px] h-[224px] object-cover rounded-lg mb-4"
              />
              <span className="text-blue-500 text-sm font-fontJakarta">
                Step {step.id}
              </span>
              <h3 className="text-xl font-bold mt-2 font-fontJakarta">{step.title}</h3>
              <p className="text-gray-400 mt-2 font-fontJakarta">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Step;
