export default function FAQSection() {
  const faqs = [
    {
      question: "How do I create an account?",
      answer:
        "Simply click on 'Join Us' and fill out the registration form to get started.",
    },
    {
      question: "Can I change my savings goals?",
      answer:
        "Yes, you can update your goals anytime in your account settings.",
    },
    {
      question: "What if I forget my password?",
      answer:
        "You can reset your password by clicking on 'Forgot Password' on the login page.",
    },
    {
      question: "Is my data secure?",
      answer:
        "We prioritize your privacy and use encryption to protect your information.",
    },
    {
      question: "How can I contact support?",
      answer:
        "You can reach our support team via the contact form on the help page.",
    },
    {
      question: "Are there any fees?",
      answer:
        "No, our platform is completely free to use for tracking your savings.",
    },
  ];

  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-black">
      <div className="container m-auto px-4 md:px-6">
        {/* FAQ Header */}
        <div className="flex flex-col m-auto px-24 space-y-4 text-center">
          <h2 className="text-3xl  font-fontJakarta font-semi-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
            Frequently Asked Questions
          </h2>
          <p className="max-w-[700px] m-auto font-fontJakarta text-neutral md:text-xl">
            Find answers to common questions about our platform.
          </p>
        </div>

        {/* FAQ Content */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {faqs.map((faq, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-lg font-base text-center font-fontJakarta text-white">
                {faq.question}
              </h3>
              <p className="text-secondary text-center font-fontJakarta">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        {/* Contact section */}
        <div className="mt-24  items-start m-auto text-center px-24 space-y-4">
          <h2 className="text-2xl font-bold font-fontJakarta text-white">
            Still have questions?
          </h2>
          <p className="text-zinc-400 font-fontJakarta">
            We are here to help you with any inquiries you may have.
          </p>
          <a
            href="/contact"
            className="mt-4 font-fontJakarta inline-block text-secondary hover:text-blue-700"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
