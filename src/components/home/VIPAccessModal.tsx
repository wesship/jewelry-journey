
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Crown, Diamond, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export function VIPAccessModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-black/50 border-primary/20 hover:bg-black/70 text-white">
          <Crown className="w-4 h-4 mr-2" />
          Access Elite Benefits
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-black/95 border-primary/20 text-white">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Crown className="w-6 h-6 text-primary" />
            Elite Member Access
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <div className="flex items-center gap-3 bg-primary/10 p-4 rounded-lg">
            <Diamond className="w-5 h-5 text-primary" />
            <div>
              <h4 className="font-bold">Exclusive Collections</h4>
              <p className="text-sm text-white/70">Preview new items before public release</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-primary/10 p-4 rounded-lg">
            <Star className="w-5 h-5 text-primary" />
            <div>
              <h4 className="font-bold">VIP Rewards</h4>
              <p className="text-sm text-white/70">Earn 2x points on all purchases</p>
            </div>
          </div>
          <Button className="w-full bg-primary text-black hover:bg-primary/90">
            Join Elite Circle
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
