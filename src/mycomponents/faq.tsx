import { faq } from "@/app/appconfig/config";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Faq = () => {
  return (
    <div className="flex flex-col justify-center items-center py-20 min-h-screen px-4 md:px-6 lg:px-8">
      {/* FAQ Badge */}
      <div className="text-xs sm:text-sm text-white rounded-xl h-8 w-16 border border-gray-600 flex items-center justify-center">
        FAQ
      </div>

      {/* Title */}
      <h2 className="flex text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-6 md:mt-10 text-center">
        Frequently Asked Questions
      </h2>

      <div className="text-gray-500 w-full max-w-[600px] mx-auto px-4 text-center mt-2 mb-10 text-sm md:text-base">
      Find quick answers to common questions about our services, features, and support.
      </div>

      {/* Accordion Container */}
      <div className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-2xl lg:max-w-3xl flex flex-col justify-center items-center mt-6 md:mt-10 ">
        <Accordion type="multiple" className="w-full">
          {faq.map((i, index) => (
            <AccordionItem
              key={index}
              className="bg-white bg-opacity-10 rounded-2xl  mb-2 border-white/0"
              value={`item-${index + 1}`}
            >
              <AccordionTrigger className="p-3 sm:p-4 text-sm sm:text-base text-left">
                {i.q}
              </AccordionTrigger>
              <AccordionContent className="p-3 sm:p-4 text-sm sm:text-base text-white text-opacity-50">
                {i.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};