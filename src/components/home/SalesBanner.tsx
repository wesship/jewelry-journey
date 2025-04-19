
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BadgeDollarSign, Timer, Sparkles, Diamond } from "lucide-react";

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
    <section className="bg-gradient-to-r from-[#9b87f5] to-[#D946EF] text-white py-8 shadow-lg relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-10"/>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <BadgeDollarSign className="h-6 w-6 text-white" strokeWidth={2.5} />
              <h3 className="text-xl font-bold">
                $1 Million AI Challenge
              </h3>
            </div>
            <div className="hidden md:flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
              <Timer className="h-4 w-4" />
              <span className="font-mono font-bold">{timeLeft}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 animate-pulse" />
            <p className="text-white text-lg">
              Early Bird: <span className="font-bold bg-white/20 px-2 py-1 rounded">MILLION23</span>
            </p>
          </div>
          <Link
            to="/collections"
            className="group bg-white text-[#9b87f5] px-8 py-3 rounded-md hover:bg-white/90 transition-all duration-300 font-bold text-base shadow-lg relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Diamond className="w-4 h-4" />
              Register Now
            </span>
            <span className="text-xs ml-2 bg-[#9b87f5]/10 px-2 py-0.5 rounded-full">
              {itemsLeft} spots left
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#9b87f5]/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"/>
          </Link>
        </div>
      </div>
    </section>
  );
}
