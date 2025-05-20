"use client"

import { Outfit } from "next/font/google";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"

const outFit = Outfit({
  weight: "700",
  subsets: ["latin"],
});

export default function FaqSection() {
  const faqItems = [
    {
      question: "What is NutrientChain?",
      answer:
        "NutrientChain is a digital platform that supports farmers with tools, funding, and market access to improve productivity and reduce food insecurity.",
    },
    {
      question: "How do I join NutrientChain as a farmer?",
      answer:
        "To join NutrientChain as a farmer, you can register through our website or mobile app. The registration process requires basic information about your farm and farming practices.",
    },
    {
      question: "Do I need internet or a smartphone to use NutrientChain?",
      answer:
        "Yes, you need internet access to use NutrientChain. While a smartphone is recommended for the best experience, you can also access our platform through any device with internet connectivity.",
    },
    {
      question: "How does the funding or investment process work?",
      answer:
        "Our funding process connects farmers with investors through our platform. After your profile is verified, you can submit funding requests that detail your needs and projected outcomes. Investors can then choose to fund your projects.",
    },
    {
      question: "How is NutrientChain different from other platforms?",
      answer:
        "NutrientChain differentiates itself by offering an integrated approach that combines digital tools, funding opportunities, and market access in one platform, specifically designed for the unique challenges faced by farmers.",
    },
    {
      question: "Is NutrientChain safe and secure to use?",
      answer:
        "Yes, NutrientChain prioritizes security and data protection. We use industry-standard encryption and security protocols to ensure that your information remains private and secure.",
    },
  ]

  return (
    <div className="app-width flex flex-col md:flex-row gap-10 py-12 px-4">
      <h2 className={`text-2xl sm:text-3xl font-bold mb-8 w-1/3 ${outFit.className}`}>FAQs</h2>
      <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
        {faqItems.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border-b">
            <AccordionTrigger className="text-left font-medium text-gray-800 py-4">{item.question}</AccordionTrigger>
            <AccordionContent className="text-gray-600">{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
