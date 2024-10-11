import { faq } from "@/app/appconfig/config";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Faq = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-32 h-screen">
      <div className="text-xs text-white rounded-xl h-8 w-16 border border-gray-600 flex items-center justify-center">
        FAQ
      </div>
      <div className="flex text-white text-5xl mt-10">
        Frequently Asked Questions
      </div>
      <div className="w-full flex flex-col justify-center items-center mt-10">
        <Accordion type="multiple">
          {faq.map((i, index) => (
            <AccordionItem
              className="bg-gray-900 rounded-2xl border-0 mb-2 w-96"
              value={`item-${index+1}`}
            >
              <AccordionTrigger className="p-4">{i.q}</AccordionTrigger>
              <AccordionContent className="p-4">
                {i.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};
