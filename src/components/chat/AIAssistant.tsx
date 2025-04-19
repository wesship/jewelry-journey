
import React, { useState } from "react";
import { MessageCircle, Mic, Volume2, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-20 right-4 z-50">
      {!isOpen ? (
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-14 h-14 bg-primary text-black hover:bg-primary/90 shadow-lg"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      ) : (
        <div className="bg-black/95 border border-primary/20 rounded-lg w-[380px] h-[500px] shadow-2xl flex flex-col">
          <div className="p-4 border-b border-primary/20 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-primary" />
              <h3 className="font-bold text-white">AI Jewelry Assistant</h3>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-primary"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="text-white/70 text-center">
              Welcome to Mile High Elite! I can help you with:
              <ul className="mt-4 text-left text-sm space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  AI Challenge Registration
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  Custom Jewelry Design
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  VIP Membership Benefits
                </li>
              </ul>
            </div>
          </div>
          
          <div className="p-4 border-t border-primary/20">
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="text-primary">
                <Mic className="h-4 w-4" />
              </Button>
              <input
                type="text"
                placeholder="Ask me anything..."
                className="flex-1 bg-white/5 border border-primary/20 rounded-md px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:border-primary/40"
              />
              <Button variant="outline" size="icon" className="text-primary">
                <Volume2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
