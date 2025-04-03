
import React from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

export function FAQSection() {
  return (
    <section className="section bg-jewelry-subtle">
      <div className="container mx-auto px-4">
        <SectionHeading
          subtitle="Common Questions"
          title="Frequently Asked Questions"
          description="Find answers to commonly asked questions about our products and services."
        />
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How do I care for my jewelry?</AccordionTrigger>
              <AccordionContent>
                <p>
                  We recommend storing your jewelry in a cool, dry place separate from other pieces to prevent scratches. 
                  Clean gold and platinum pieces with mild soap and warm water using a soft brush. For gemstones, 
                  use a specific cleaner appropriate for each stone type. Bring your jewelry to us once a year for 
                  professional cleaning and inspection.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>What is your shipping policy?</AccordionTrigger>
              <AccordionContent>
                <p>
                  We offer free standard shipping on all orders over $100. Standard shipping typically takes 3-5 business days. 
                  For expedited options, choose express shipping at checkout for delivery within 1-2 business days. 
                  All shipments are fully insured and require signature upon delivery for security purposes.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What is your return policy?</AccordionTrigger>
              <AccordionContent>
                <p>
                  We offer a 30-day return policy for most items in their original, unworn condition with all packaging and certificates. 
                  Custom-designed pieces are final sale. Returns will be processed for store credit or exchange; 
                  refunds to the original payment method may be subject to a 10% restocking fee.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Do you offer jewelry repair services?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Yes, we offer comprehensive repair services including ring resizing, stone replacement, chain repair, 
                  prong retipping, and cleaning. Items purchased from us receive priority service and may qualify for 
                  complimentary basic repairs within the warranty period. Please contact us for a repair evaluation and quote.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>How do I know if the jewelry is authentic?</AccordionTrigger>
              <AccordionContent>
                <p>
                  All our jewelry comes with authentication certificates and appropriate hallmarks. 
                  Our diamonds are certified by GIA or AGS, ensuring you receive exactly what you pay for. 
                  We stand behind the authenticity of every piece and offer verification services for your peace of mind.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          
          <div className="mt-8 text-center">
            <Link to="/contact" className="text-primary hover:underline font-medium">
              Have more questions? Contact our support team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
