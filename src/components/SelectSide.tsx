import { Heart } from "lucide-react";

interface SelectSideProps {
  onSelect: (side: "groom" | "bride") => void;
}

function SelectSide({ onSelect }: SelectSideProps) {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-rose-50 via-white to-amber-50 flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-5xl">
        {/* Decorative top */}
        <div className="flex justify-center items-center gap-3 mb-6">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-rose-300 to-rose-300"></div>
          <span className="text-rose-400 text-3xl">❀</span>
          <div className="w-16 h-px bg-gradient-to-l from-transparent via-rose-300 to-rose-300"></div>
        </div>

        {/* Title */}
        <h1
          className="text-5xl md:text-7xl lg:text-8xl text-[#8b0102] text-center mb-4"
          style={{ fontFamily: "'Luxurious Script', cursive" }}
        >
          Lời mời cưới
        </h1>

        <p
          className="text-center text-gray-600 mb-8 md:mb-12 text-lg md:text-xl lg:text-2xl"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Chọn bên gia đình để xem thiệp mời
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Nhà trai Card */}
          <div
            onClick={() => onSelect("groom")}
            className="group bg-white border-2 border-[#8b0102] rounded-3xl p-6 md:p-8 cursor-pointer hover:shadow-2xl hover:border-[#8b0102] hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
          >
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
              <div className="absolute top-2 right-2 w-16 h-16 border-t-2 border-r-2 border-[#8b0102] rounded-tr-3xl"></div>
            </div>

            <div className="text-center relative z-10">
              <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300">
                <img
                  src="/images/long.jpg"
                  alt="Chú rể"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center 12%" }}
                />
              </div>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl text-[#8b0102] mb-5"
                style={{ fontFamily: "'Luxurious Script', cursive" }}
              >
                Nhà trai
              </h2>
              <div className="bg-gray-50 rounded-2xl p-5 mb-5">
                <div className="space-y-2">
                  <p
                    className="text-lg md:text-xl text-gray-700 font-semibold"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Bố:{" "}
                    <span
                      className="text-2xl md:text-3xl lg:text-4xl text-[#8b0102] font-normal"
                      style={{ fontFamily: "'Luxurious Script', cursive" }}
                    >
                      Vũ Đức Bộ
                    </span>
                  </p>
                  <p
                    className="text-lg md:text-xl text-gray-700 font-semibold"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Mẹ:{" "}
                    <span
                      className="text-2xl md:text-3xl lg:text-4xl text-[#8b0102] font-normal"
                      style={{ fontFamily: "'Luxurious Script', cursive" }}
                    >
                      Nguyễn Kim Tuyến
                    </span>
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <p
                  className="text-lg md:text-xl text-gray-500 mb-3"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Chú rể
                </p>
                <p
                  className="text-3xl md:text-4xl lg:text-5xl text-[#8b0102]"
                  style={{ fontFamily: "'Luxurious Script', cursive" }}
                >
                  Vũ Hải Long
                </p>
              </div>
            </div>
          </div>

          {/* Nhà gái Card */}
          <div
            onClick={() => onSelect("bride")}
            className="group bg-white border-2 border-[#8b0102] rounded-3xl p-6 md:p-8 cursor-pointer hover:shadow-2xl hover:border-[#8b0102] hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
          >
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
              <div className="absolute top-2 right-2 w-16 h-16 border-t-2 border-r-2 border-[#8b0102] rounded-tr-3xl"></div>
            </div>

            <div className="text-center relative z-10">
              <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-pink-50 to-pink-100 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300">
                <img
                  src="/images/mai.jpg"
                  alt="Cô dâu"
                  className="w-full h-full object-cover scale-145"
                  style={{ objectPosition: "center 21%" }}
                />
              </div>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl text-[#8b0102] mb-5"
                style={{ fontFamily: "'Luxurious Script', cursive" }}
              >
                Nhà gái
              </h2>
              <div className="bg-gray-50 rounded-2xl p-5 mb-5">
                <div className="space-y-2">
                  <p
                    className="text-lg md:text-xl text-gray-700 font-semibold"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Bố:{" "}
                    <span
                      className="text-2xl md:text-3xl lg:text-4xl text-[#8b0102] font-normal"
                      style={{ fontFamily: "'Luxurious Script', cursive" }}
                    >
                      Tạ Xuân Long
                    </span>
                  </p>
                  <p
                    className="text-lg md:text-xl text-gray-700 font-semibold"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Mẹ:{" "}
                    <span
                      className="text-2xl md:text-3xl lg:text-4xl text-[#8b0102] font-normal"
                      style={{ fontFamily: "'Luxurious Script', cursive" }}
                    >
                      Nguyễn Thị Hồng Yến
                    </span>
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <p
                  className="text-lg md:text-xl text-gray-500 mb-3"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Cô dâu
                </p>
                <p
                  className="text-3xl md:text-4xl lg:text-5xl text-[#8b0102]"
                  style={{ fontFamily: "'Luxurious Script', cursive" }}
                >
                  Tạ Xuân Mai
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative bottom */}
        <div className="flex justify-center items-center gap-3 mt-8">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-rose-300 to-rose-300"></div>
          <Heart className="text-rose-500 w-6 h-6 fill-rose-500" />
          <div className="w-16 h-px bg-gradient-to-l from-transparent via-rose-300 to-rose-300"></div>
        </div>
      </div>
    </div>
  );
}

export default SelectSide;
