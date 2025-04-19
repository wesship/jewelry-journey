
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Trophy, Diamond, Crown, Star, Shield } from "lucide-react";

export function AchievementBadges() {
  const achievements = [
    {
      icon: <Trophy className="w-4 h-4" />,
      label: "Elite Collector",
      description: "Collected 5+ limited pieces",
      unlocked: true
    },
    {
      icon: <Diamond className="w-4 h-4" />,
      label: "Diamond Status",
      description: "Achieved highest tier",
      unlocked: true
    },
    {
      icon: <Crown className="w-4 h-4" />,
      label: "First Access",
      description: "Early collection preview",
      unlocked: false
    },
    {
      icon: <Star className="w-4 h-4" />,
      label: "Trendsetter",
      description: "Featured collection pick",
      unlocked: false
    }
  ];

  return (
    <section className="py-12 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-display text-white mb-4">Your Achievements</h3>
          <p className="text-white/70">Unlock exclusive rewards and recognition</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className={`p-4 rounded-lg border ${
                achievement.unlocked 
                  ? "border-primary/20 bg-primary/5" 
                  : "border-white/5 bg-white/5 opacity-50"
              }`}
            >
              <div className="flex flex-col items-center text-center gap-2">
                <div className={`p-2 rounded-full ${
                  achievement.unlocked ? "bg-primary/20" : "bg-white/10"
                }`}>
                  {React.cloneElement(achievement.icon, { 
                    className: `w-5 h-5 ${achievement.unlocked ? "text-primary" : "text-white/50"}`
                  })}
                </div>
                <Badge variant={achievement.unlocked ? "outline" : "secondary"} 
                  className={achievement.unlocked ? "border-primary/20 text-primary" : "text-white/50"}>
                  {achievement.label}
                </Badge>
                <p className="text-xs text-white/50">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
