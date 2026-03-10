import { useState, useEffect } from "react";
import Lottie from "lottie-react";

interface CoupleInfoProps {
  selectedSide: "groom" | "bride";
}

function CoupleInfo({ selectedSide }: CoupleInfoProps) {
  const groomFirst = selectedSide === "groom";
  const [loveAnimationData, setLoveAnimationData] = useState<any>(null);

  useEffect(() => {
    fetch("/animations/Love.json")
      .then((res) => res.json())
      .then(setLoveAnimationData)
      .catch((err) => console.error("Failed to load Love animation", err));
  }, []);

  const Groom = (
    <div className="flex flex-col items-center z-10 flex-shrink-0">
      <div className="relative mb-3 md:mb-4">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-200 to-rose-200 blur-md opacity-50 -z-10" />
        <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden shadow-xl ring-2 md:ring-4 ring-amber-100/50">
          <img
            src="/images/long.jpg"
            alt="Chú rể"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 12%" }}
          />
        </div>
      </div>
      <p
        className="text-xl md:text-4xl text-[#8B4513]"
        style={{ fontFamily: "'Luxurious Script', cursive", fontWeight: 650 }}
      >
        Vũ Hải Long
      </p>
    </div>
  );

  const Bride = (
    <div className="flex flex-col items-center z-10 flex-shrink-0">
      <div className="relative mb-3 md:mb-4">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-rose-200 to-pink-200 blur-md opacity-50 -z-10" />
        <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden shadow-xl ring-2 md:ring-4 ring-rose-100/50">
          <img
            src="/images/img2.jpg"
            alt="Cô dâu"
            className="w-full h-full object-cover scale-150"
            style={{ objectPosition: "center -15%" }}
          />
        </div>
      </div>
      <p
        className="text-xl md:text-4xl text-[#8B4513]"
        style={{ fontFamily: "'Luxurious Script', cursive", fontWeight: 650 }}
      >
        Tạ Xuân Mai
      </p>
    </div>
  );

  return (
    <div className="w-full py-4 md:py-8 px-4 md:px-6 text-center mt-5 lg:mt-13">
      {/* Lời mời */}
      <h2
        className="text-5xl md:text-6xl text-[#8B4513] mb-8 md:mb-11 mt-5"
        style={{ fontFamily: "'Luxurious Script', cursive" }}
      >
        Lời mời cưới
      </h2>
      {/* Couple section */}
      <div className="relative flex justify-center items-center gap-3 md:gap-12 lg:gap-16 mb-12 md:mb-16">
        {groomFirst ? Groom : Bride}

        {/* Heart */}
        <div
          className="flex items-center justify-center 
                w-20 h-20 
                md:w-40 md:h-40 
                lg:w-44 lg:h-44 
                z-20 flex-shrink-0"
        >
          {loveAnimationData ? (
            <Lottie
              animationData={loveAnimationData}
              loop
              autoplay
              style={{ width: "100%", height: "100%" }}
            />
          ) : (
            <div className="w-full h-full bg-rose-400 rounded-full animate-pulse" />
          )}
        </div>

        {groomFirst ? Bride : Groom}
      </div>
      {/* Poem */}
      <div className="max-w-2xl mx-auto px-2 md:px-0">
        <div className="rounded-2xl md:rounded-3xl p-4 md:p-10 shadow-lg border border-amber-100/50 bg-[#FFF7E6]">
          <div
            className="text-sm md:text-xl text-[#b5851d] leading-relaxed md:leading-relaxed italic space-y-2 md:space-y-3"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 550 }}
          >
            <p>"Giữa muôn vàn gương mặt,</p>
            <p>ánh mắt em là nơi anh muốn dừng lại,</p>
            <p>giữa muôn nghìn con đường,</p>
            <p>trái tim em là chốn anh muốn tìm về,</p>
            <p>dù chỉ một lần cũng đủ say đắm."</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoupleInfo;
