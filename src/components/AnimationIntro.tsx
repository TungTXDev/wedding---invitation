import { useEffect, useState } from "react";
import Lottie from "lottie-react";

interface AnimationIntroProps {
  onComplete: () => void;
}

function AnimationIntro({ onComplete }: AnimationIntroProps) {
  const [animationData, setAnimationData] = useState<any>(null);
  const [heartAnimationData, setHeartAnimationData] = useState<any>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Preload images used in other components
  useEffect(() => {
    const imageUrls = [
      "/images/img1.jpg",
      "/images/img3.jpg",
      "/images/DSC09362.jpg",
      "/images/DSC09369.jpg",
    ];

    // Preload all images
    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  }, []);

  // Load animations
  useEffect(() => {
    fetch("/animations/weddingoutline.json")
      .then((res) => res.json())
      .then(setAnimationData)
      .catch(() => setTimeout(onComplete, 1000));

    // Load heart animation
    fetch("/animations/Heart%20fly%20transparent%20BG!.json")
      .then((res) => res.json())
      .then(setHeartAnimationData)
      .catch(() => console.error("Failed to load heart animation"));
  }, [onComplete]);

  // Auto complete
  useEffect(() => {
    if (!animationData) return;

    const duration = (animationData.op / animationData.fr) * 1000 + 300;

    const timer = setTimeout(onComplete, duration);
    return () => clearTimeout(timer);
  }, [animationData, onComplete]);

  // Loading
  if (!animationData) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 via-white to-amber-50">
        <p className="text-gray-600">Đang tải...</p>
      </div>
    );
  }

  return (
    <div
      className="
    w-full h-screen
    bg-gradient-to-br from-rose-50 via-white to-amber-50
    flex flex-col items-center justify-center gap-2
    -translate-y-[45px]
    md:translate-y-0
    md:relative md:block
    relative overflow-hidden
  "
    >
      {/* Heart animation background */}
      {heartAnimationData && (
        <div
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
          style={{ opacity: 0.3 }}
        >
          <Lottie
            animationData={heartAnimationData}
            loop={true}
            autoplay={true}
            className="w-full h-full"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      )}

      {/* Content with higher z-index */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center gap-2">
        {/* ===== MOBILE CENTER / DESKTOP TOP ===== */}
        <div
          className="
          text-center
          md:absolute md:top-8 md:left-1/2 md:-translate-x-1/2 md:w-full
        "
        >
          <h1
            className="text-5xl lg:text-6xl text-[#8b0102]"
            style={{ fontFamily: "'Luxurious Script', cursive" }}
          >
            Thư mời tham dự lễ cưới
          </h1>
          <p
            className="text-sm md:text-xl text-gray-600 mt-1 px-4"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Chúng tôi mong được đón tiếp bạn trong ngày cưới của mình
          </p>
        </div>

        {/* ===== MOBILE CENTER / DESKTOP CENTER ===== */}
        <div
          className="
          w-full flex justify-center
          md:absolute md:top-1/2 md:left-1/2
          md:-translate-x-1/2 md:-translate-y-1/2
        "
        >
          <Lottie
            animationData={animationData}
            loop={false}
            autoplay
            className="w-full h-auto"
            style={{
              maxWidth: "100%",
              maxHeight: isMobile ? "65vh" : "60vh",
            }}
          />
        </div>

        {/* ===== MOBILE CENTER / DESKTOP BOTTOM ===== */}
        <div
          className="
          text-center
          md:absolute md:bottom-8 md:left-1/2 md:-translate-x-1/2 md:w-full
        "
        >
          <div className="flex justify-center items-center gap-2 mb-1">
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-rose-300 to-rose-300" />
            <span className="text-rose-400">❀</span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent via-rose-300 to-rose-300" />
          </div>
          <p
            className="text-sm md:text-base text-gray-500 italic px-4"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Một khoảnh khắc đặc biệt đang được chuẩn bị...
          </p>
        </div>
      </div>
    </div>
  );
}

export default AnimationIntro;
