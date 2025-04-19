
import React from "react";
import { Trophy, Target, Sparkles, ArrowUp } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export function GamificationPreview() {
  return (
    <section className="py-16 bg-gradient-to-b from-black to-black/95">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-black/40 backdrop-blur-sm border border-primary/20 rounded-xl p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-display text-white mb-2">Your Elite Status</h3>
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-primary" />
                <span className="text-primary font-bold">Platinum Collector</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-white/70 text-sm mb-1">Next Reward at</p>
              <p className="text-2xl font-bold text-primary">2,500 pts</p>
            </div>
          </div>

          <div className="space-y-6 mb-8">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-white/70">Progress to Diamond Status</span>
                <span className="text-primary">1,850 / 2,500</span>
              </div>
              <Progress value={74} className="bg-primary/20 h-2" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-black/60 rounded-lg p-4 border border-primary/20">
                <Target className="h-5 w-5 text-primary mb-2" />
                <p className="text-sm text-white/70">Monthly Points</p>
                <p className="text-xl font-bold text-white">850</p>
              </div>
              <div className="bg-black/60 rounded-lg p-4 border border-primary/20">
                <Sparkles className="h-5 w-5 text-primary mb-2" />
                <p className="text-sm text-white/70">Rewards Used</p>
                <p className="text-xl font-bold text-white">12</p>
              </div>
              <div className="bg-black/60 rounded-lg p-4 border border-primary/20">
                <ArrowUp className="h-5 w-5 text-primary mb-2" />
                <p className="text-sm text-white/70">Current Streak</p>
                <p className="text-xl font-bold text-white">15 days</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-primary/20 text-primary hover:bg-primary/30 transition-colors px-6 py-3 rounded-lg font-medium">
              View Full Dashboard
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
