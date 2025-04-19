
import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, Clock, Crown } from 'lucide-react';
import { useEngagementTracker } from '@/hooks/useEngagementTracker';

export function PersonalizedRecommendations() {
  const { viewTime, interactions } = useEngagementTracker();
  const [showSpecialOffer, setShowSpecialOffer] = useState(false);

  useEffect(() => {
    // Show special offer after 30 seconds of engagement
    if (viewTime > 30 && interactions > 3) {
      setShowSpecialOffer(true);
    }
  }, [viewTime, interactions]);

  return (
    <section className="py-12 bg-black/95">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Crown className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-display">Curated For You</h2>
          </div>
          <div className="flex items-center gap-2 text-sm text-primary/80">
            <Clock className="h-4 w-4" />
            <span>Viewing for {viewTime}s</span>
          </div>
        </div>

        {showSpecialOffer && (
          <Card className="border-primary/20 bg-black/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="h-5 w-5 text-primary animate-pulse" />
                <h3 className="text-xl font-semibold">Exclusive VIP Offer</h3>
              </div>
              <p className="text-gray-300 mb-4">
                We've noticed your refined taste. Unlock special pricing on our Elite Collection with code:
              </p>
              <div className="bg-primary/10 text-primary font-mono p-3 rounded-md text-center text-lg font-bold">
                VIPELITE25
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
}
