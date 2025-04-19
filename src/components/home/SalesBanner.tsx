
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Clock, Sparkles, Crown, Timer } from "lucide-react";

export function SalesBanner() {
  const [timeLeft, setTimeLeft] = useState("23:59:59");
  const [itemsLeft, setItemsLeft] = useState(6);

  useEffect(() => {
    const timer = setInterval(() => {
      const [hours, minutes, seconds] = timeLeft.split(":").map(Number);
      let newSeconds = seconds - 1;
      let newMinutes = minutes;
      let newHours = hours;

      if (newSeconds < 0) {
        newSeconds = 59;
        newMinutes -= 1;
      }
      if (newMinutes < 0) {
        newMinutes = 59;
        newHours -= 1;
      }
      if (newHours < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft(`${String(newHours).padStart(2, '0')}:${String(newMinutes).padStart(2, '0')}:${String(newSeconds).padStart(2, '0')}`);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <section className="bg-primary text-black py-8 shadow-md relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6IiBzdHJva2U9InJnYmEoMCwwLDAsMC4xKSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-5"/>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Crown className="h-6 w-6 text-black/80" strokeWidth={2.5} />
              <h3 className="text-xl font-bold">
                Elite Collection Release
              </h3>
            </div>
            <div className="hidden md:flex items-center gap-2 bg-black/5 px-3 py-1 rounded-full">
              <Timer className="h-4 w-4" />
              <span className="font-mono font-bold">{timeLeft}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 animate-pulse text-black/80" />
            <p className="text-black text-lg">
              VIP Code: <span className="font-bold bg-black/10 px-2 py-1 rounded">LUXURY20</span>
            </p>
          </div>
          <Link
            to="/collections"
            className="group bg-black text-white px-8 py-3 rounded-md hover:bg-black/80 transition-all duration-300 font-bold text-base shadow-lg relative overflow-hidden"
          >
            <span className="relative z-10">Access Now</span>
            <span className="text-xs ml-2 bg-primary/20 px-2 py-0.5 rounded-full">
              {itemsLeft} spots left
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"/>
          </Link>
        </div>
      </div>
    </section>
  );
}
