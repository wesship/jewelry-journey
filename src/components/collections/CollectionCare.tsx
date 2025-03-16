
import React from "react";
import { SectionHeading } from "@/components/ui/section-heading";

interface CollectionCareProps {
  collectionType: string;
  careInstructions: string;
}

export function CollectionCare({ collectionType, careInstructions }: CollectionCareProps) {
  return (
    <section className="py-16 bg-jewelry-subtle">
      <div className="container">
        <SectionHeading
          subtitle="Care Guide"
          title={`Caring For Your ${collectionType}`}
          description="Follow these recommendations to keep your jewelry looking beautiful for years to come."
        />
        <div className="max-w-3xl mx-auto">
          <p className="text-jewelry-muted mb-6">
            {careInstructions}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="bg-white p-6 rounded-lg shadow-subtle">
              <h3 className="text-lg font-medium mb-2">Store Properly</h3>
              <p className="text-jewelry-muted text-sm">Keep pieces separated in a jewelry box with individual compartments to prevent scratches.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-subtle">
              <h3 className="text-lg font-medium mb-2">Clean Regularly</h3>
              <p className="text-jewelry-muted text-sm">Gently polish with a soft cloth to maintain shine and remove oils from daily wear.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-subtle">
              <h3 className="text-lg font-medium mb-2">Avoid Chemicals</h3>
              <p className="text-jewelry-muted text-sm">Remove jewelry before swimming, showering, or applying cosmetics and perfumes.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
