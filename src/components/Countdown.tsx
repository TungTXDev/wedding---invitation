import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownProps {
  selectedSide: "groom" | "bride";
}

function Countdown({ selectedSide }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [intervalId, setIntervalId] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Danh sách ảnh để slider
  const images = [
    "/images/img4.jpg",
    "/images/img5.jpg",
    "/images/img6.jpg",
    "/images/img7.jpg",
    "/images/img8.jpg"
  ];

  // Function to handle smooth image transition
  const handleImageTransition = (newIndexOrFunction: number | ((prev: number) => number)) => {
    setIsTransitioning(true);

    setTimeout(() => {
      if (typeof newIndexOrFunction === 'function') {
        setCurrentImageIndex(newIndexOrFunction);
      } else {
        setCurrentImageIndex(newIndexOrFunction);
      }

      setTimeout(() => {
        setIsTransitioning(false);
      }, 50); // Short delay to ensure image loads
    }, 200); // Fade out duration
  };

  // Function to start auto slide
  const startAutoSlide = () => {
    // Clear existing interval if any
    if (intervalId) {
      clearInterval(intervalId);
    }

    // Start new interval
    const newIntervalId = setInterval(() => {
      handleImageTransition((prev) => (prev + 1) % images.length);
    }, 5000);

    setIntervalId(newIntervalId);
  };

  // Auto slide images - đơn giản hóa
  useEffect(() => {
    startAutoSlide();

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, []);

  // Function to handle manual navigation
  const handleManualNavigation = (newIndex: number) => {
    handleImageTransition(newIndex);
    startAutoSlide(); // Reset timer
  };

  useEffect(() => {
    // Nhà trai: 29/03/2026 10:30, Nhà gái: 28/03/2026 11:00
    const targetDate = selectedSide === "groom"
      ? new Date("2026-03-29T10:30:00").getTime()
      : new Date("2026-03-28T11:00:00").getTime();

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
  }, [selectedSide]);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  const TimeCard = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <span
        className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-[#8B4513] block"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        {formatNumber(value)}
      </span>
      <span
        className="text-xs md:text-sm lg:text-base xl:text-lg text-[#8B4513] mt-1 md:mt-2 font-semibold uppercase tracking-wide"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        {label}
      </span>
    </div>
  );

  return (
    <div className="w-full px-4 py-5 mt-[30px] md:mt-[30px]">
      {/* Simple Photo Slider */}
      <div className="mb-25 md:mb-12 lg:mb-25 relative w-full h-[250px] md:h-[400px] overflow-hidden rounded-xl md:rounded-2xl">
        {/* Display current image */}
        <div className="relative w-full h-full">
          <img
            src={images[currentImageIndex]}
            alt={`Wedding Photo ${currentImageIndex + 1}`}
            className={`w-full h-full object-cover transition-all duration-700 ease-in-out transform ${isTransitioning
              ? 'opacity-0 scale-105'
              : 'opacity-100 scale-100'
              }`}
            key={currentImageIndex}
          />

          {/* Loading overlay during transition */}
          {isTransitioning && (
            <div className="absolute inset-0 bg-black/10 backdrop-blur-sm transition-opacity duration-200" />
          )}
        </div>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

        {/* Navigation dots */}
        <div className="absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1.5 md:gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleManualNavigation(index)}
              disabled={isTransitioning}
              className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 transform hover:scale-110 ${index === currentImageIndex
                ? 'bg-white shadow-lg scale-110'
                : 'bg-white/50 hover:bg-white/70'
                } ${isTransitioning ? 'opacity-50 cursor-not-allowed' : ''}`}
            />
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={() => handleManualNavigation(
            currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
          )}
          disabled={isTransitioning}
          className={`absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-1.5 md:p-2 transition-all duration-300 shadow-lg z-10 hover:scale-110 ${isTransitioning ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-xl'
            }`}
        >
          <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={() => handleManualNavigation(
            currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1
          )}
          disabled={isTransitioning}
          className={`absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-1.5 md:p-2 transition-all duration-300 shadow-lg z-10 hover:scale-110 ${isTransitioning ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-xl'
            }`}
        >
          <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Countdown Title */}
      <div className="text-center mb-4 md:mb-6 mt-[-80px] md:mt-[-120px] lg:mt-[-80px]">
        <h3
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#8B4513] mb-2"
          style={{ fontFamily: "'Luxurious Script', cursive", fontWeight: 550 }}
        >
          Đếm ngược đến ngày cưới
        </h3>
      </div>

      {/* Countdown Timer */}
      <div className="flex justify-center items-start gap-2 md:gap-3 lg:gap-4 xl:gap-6 flex-wrap">
        <TimeCard value={timeLeft.days} label="Ngày" />
        <div className="flex items-center h-[1.5rem] md:h-[1.875rem] lg:h-[2.25rem] xl:h-[3rem]">
          <span
            className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#b5851d] leading-none"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            :
          </span>
        </div>
        <TimeCard value={timeLeft.hours} label="Giờ" />
        <div className="flex items-center h-[1.5rem] md:h-[1.875rem] lg:h-[2.25rem] xl:h-[3rem]">
          <span
            className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#b5851d] leading-none"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            :
          </span>
        </div>
        <TimeCard value={timeLeft.minutes} label="Phút" />
        <div className="flex items-center h-[1.5rem] md:h-[1.875rem] lg:h-[2.25rem] xl:h-[3rem]">
          <span
            className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#b5851d] leading-none"
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