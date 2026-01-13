import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-03-28T11:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  const TimeCard = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <span
        className="text-3xl md:text-4xl lg:text-5xl font-black text-[#8B4513] block"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        {formatNumber(value)}
      </span>
      <span
        className="text-sm md:text-base lg:text-lg text-[#8B4513] mt-2 font-semibold uppercase tracking-wide"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        {label}
      </span>
    </div>
  );

  return (
    <div className="w-full px-4 py-5 md: mt-[-70px]">
      {/* Couple Photos - Overlapping Layout */}
      <div
        className="mb-12 md:mb-16 relative w-full"
        style={{ minHeight: "400px", paddingBottom: "120px" }}
      >
        {/* Large photo - right side, square-like */}
        <div className="absolute top-0 right-0 w-[55%] aspect-square z-10 translate-x-[9px] md:translate-x-[24px]">
          <img
            src="/images/img1.jpg"
            alt="Wedding Photo"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Small photo - left side, vertical, overlapping */}
        <div className="absolute bottom-0 left-0 w-[50%] aspect-[3/4] z-0 transform translate-y-[-128px] translate-x-[1px] md:translate-y-68 md:translate-x-[5px]">
          <img
            src="/images/img3.jpg"
            alt="Wedding Photo"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Countdown Title */}
      <div className="text-center mb-6 mt-[-208px] md:mt-42">
        <h3
          className="text-5xl md:text-3xl lg:text-6xl text-[#8B4513] mb-2"
          style={{ fontFamily: "'Luxurious Script', cursive", fontWeight: 550 }}
        >
          Đếm ngược đến ngày cưới
        </h3>
      </div>

      {/* Countdown Timer */}
      <div className="flex justify-center items-start gap-3 md:gap-4 lg:gap-6 mb-6 flex-wrap">
        <TimeCard value={timeLeft.days} label="Ngày" />
        <div className="flex items-center h-[1.875rem] md:h-[2.25rem] lg:h-[3rem]">
          <span
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#b5851d] leading-none"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            :
          </span>
        </div>
        <TimeCard value={timeLeft.hours} label="Giờ" />
        <div className="flex items-center h-[1.875rem] md:h-[2.25rem] lg:h-[3rem]">
          <span
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#b5851d] leading-none"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            :
          </span>
        </div>
        <TimeCard value={timeLeft.minutes} label="Phút" />
        <div className="flex items-center h-[1.875rem] md:h-[2.25rem] lg:h-[3rem]">
          <span
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#b5851d] leading-none"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            :
          </span>
        </div>
        <TimeCard value={timeLeft.seconds} label="Giây" />
      </div>
    </div>
  );
}

export default Countdown;
