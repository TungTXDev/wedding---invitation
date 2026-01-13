interface InvitationCardProps {
  selectedSide: "groom" | "bride";
}

function InvitationCard({ selectedSide }: InvitationCardProps) {
  const groomFirst = selectedSide === "groom";

  return (
    <div className="w-full mb-8 px-4">
      {/* Card container with border frame */}
      <div className="bg-white rounded-3xl p-6 md:p-10 border-4 border-double border-[#8B4513] shadow-lg relative overflow-hidden">
        {/* Decorative top elements */}
        <div className="flex justify-center items-center gap-3 mb-6">
          <div className="w-12 md:w-16 h-px bg-gradient-to-r from-transparent via-rose-300 to-rose-300"></div>
          <span className="text-rose-400 text-2xl md:text-3xl">❀</span>
          <div className="w-12 md:w-16 h-px bg-gradient-to-l from-transparent via-rose-300 to-rose-300"></div>
        </div>

        {/* Header - Nhà Trai & Nhà Gái */}
        <div
          className="flex justify-between mb-8 text-sm md:text-base"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          {groomFirst ? (
            <>
              <div className="text-left">
                <p
                  className="text-[#8B4513] mb-1"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 900,
                  }}
                >
                  Nhà trai
                </p>
                <p
                  className="text-[#8B4513]"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 550,
                  }}
                >
                  Bố: Vũ Đức Bộ
                </p>
                <p
                  className="text-[#8B4513]"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 550,
                  }}
                >
                  Mẹ: Nguyễn Kim Tuyến
                </p>
              </div>
              <div className="text-right">
                <p
                  className="text-[#8B4513] mb-1"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 900,
                  }}
                >
                  Nhà gái
                </p>
                <p
                  className="text-[#8B4513]"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 550,
                  }}
                >
                  Bố: Tạ Xuân Long
                </p>
                <p
                  className="text-[#8B4513]"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 550,
                  }}
                >
                  Mẹ: Nguyễn Thị Hồng Yến
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="text-left">
                <p
                  className="text-[#8B4513] mb-1"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 900,
                  }}
                >
                  Nhà gái
                </p>
                <p
                  className="text-[#8B4513]"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 550,
                  }}
                >
                  Bố: Tạ Xuân Long
                </p>
                <p
                  className="text-[#8B4513]"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 550,
                  }}
                >
                  Mẹ: Nguyễn Thị Hồng Yến
                </p>
              </div>
              <div className="text-right">
                <p
                  className="text-[#8B4513] mb-1"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 900,
                  }}
                >
                  Nhà trai
                </p>
                <p
                  className="text-[#8B4513]"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 550,
                  }}
                >
                  Bố: Vũ Đức Bộ
                </p>
                <p
                  className="text-[#8B4513]"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 550,
                  }}
                >
                  Mẹ: Nguyễn Kim Tuyến
                </p>
              </div>
            </>
          )}
        </div>

        {/* Main title */}
        <h2
          className="text-center text-4xl md:text-6xl lg:text-7xl text-[#8B4513] mb-6"
          style={{ fontFamily: "'Luxurious Script', cursive", fontWeight: 550 }}
        >
          Trân trọng kính mời
        </h2>

        {/* Subtitle */}
        <p
          className="text-center text-lg md:text-2xl text-[#8B4513] mb-10"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 550 }}
        >
          Bạn cùng gia đình tới dự lễ cùng chúng tôi
        </p>

        {/* Couple names with double happiness */}
        <div className="flex items-center justify-center gap-6 md:gap-12 mb-10">
          {groomFirst ? (
            <>
              <div className="text-center">
                <p
                  className="text-3xl md:text-6xl lg:text-7xl text-[#000000] mb-2"
                  style={{
                    fontFamily: "'Luxurious Script', cursive",
                    fontWeight: 550,
                  }}
                >
                  Vũ
                </p>
                <p
                  className="text-3xl md:text-6xl lg:text-7xl text-[#000000]"
                  style={{
                    fontFamily: "'Luxurious Script', cursive",
                    fontWeight: 550,
                  }}
                >
                  Hải Long
                </p>
                {/* <p
                  className="text-base md:text-lg text-[#000000] mt-2"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 550,
                  }}
                >
                  Quý nam
                </p> */}
              </div>

              <div className="text-5xl md:text-5xl lg:text-7xl text-[#8B4513] font-black">
                囍
              </div>

              <div className="text-center">
                <p
                  className="text-3xl md:text-6xl lg:text-7xl text-[#000000] mb-2"
                  style={{
                    fontFamily: "'Luxurious Script', cursive",
                    fontWeight: 550,
                  }}
                >
                  Tạ
                </p>
                <p
                  className="text-3xl md:text-6xl lg:text-7xl text-[#000000]"
                  style={{
                    fontFamily: "'Luxurious Script', cursive",
                    fontWeight: 550,
                  }}
                >
                  Xuân Mai
                </p>
                {/* <p
                  className="text-base md:text-lg text-[#000000] mt-2"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 550,
                  }}
                >
                  Quý nữ
                </p> */}
              </div>
            </>
          ) : (
            <>
              <div className="text-center">
                <p
                  className="text-3xl md:text-6xl lg:text-7xl text-[#000000] mb-2"
                  style={{
                    fontFamily: "'Luxurious Script', cursive",
                    fontWeight: 550,
                  }}
                >
                  Tạ
                </p>
                <p
                  className="text-3xl md:text-6xl lg:text-7xl text-[#000000]"
                  style={{
                    fontFamily: "'Luxurious Script', cursive",
                    fontWeight: 550,
                  }}
                >
                  Xuân Mai
                </p>
                {/* <p
                  className="text-base md:text-lg text-[#000000] mt-2"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 550,
                  }}
                >
                  Quý nữ
                </p> */}
              </div>

              <div className="text-5xl md:text-7xl lg:text-7xl text-[#8B4513] font-black">
                囍
              </div>

              <div className="text-center">
                <p
                  className="text-3xl md:text-6xl lg:text-7xl text-[#000000] mb-2"
                  style={{
                    fontFamily: "'Luxurious Script', cursive",
                    fontWeight: 550,
                  }}
                >
                  Vũ
                </p>
                <p
                  className="text-3xl md:text-6xl lg:text-7xl text-[#000000]"
                  style={{
                    fontFamily: "'Luxurious Script', cursive",
                    fontWeight: 550,
                  }}
                >
                  Hải Long
                </p>
                {/* <p
                  className="text-base md:text-lg text-[#000000] mt-2"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 550,
                  }}
                >
                  Quý nam
                </p> */}
              </div>
            </>
          )}
        </div>

        {/* Time block styled like reference */}
        <div className="text-center mb-4">
          <p
            className="text-lg md:text-2xl text-[#2f2f2f] tracking-wide uppercase"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800 }}
          >
            Được tổ chức vào lúc <span className="font-black">11 giờ 00</span>
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 md:gap-6 lg:gap-10 mb-1 md:mb-4 flex-nowrap">
          <div className="flex flex-col items-center gap-1 md:gap-1.5 flex-shrink-0 mt-0 md:mt-2">
            <div className="h-px w-12 md:w-16 lg:w-20 bg-[#2f2f2f] flex-shrink-0" />
            <span
              className="text-xs md:text-sm lg:text-lg text-[#2f2f2f] uppercase tracking-wide whitespace-nowrap flex-shrink-0"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
              }}
            >
              Thứ Bảy
            </span>
            <div className="h-px w-12 md:w-16 lg:w-20 bg-[#2f2f2f] flex-shrink-0" />
          </div>

          <div className="text-2xl md:text-3xl lg:text-5xl xl:text-6xl text-[#b5851d] font-black px-1 md:px-2 flex-shrink-0">
            28.03
          </div>

          <div className="flex flex-col items-center gap-1 md:gap-1.5 flex-shrink-0 mt-0 md:mt-2">
            <div className="h-px w-12 md:w-16 lg:w-20 bg-[#2f2f2f] flex-shrink-0" />
            <span
              className="text-xs md:text-sm lg:text-lg text-[#2f2f2f] uppercase tracking-wide whitespace-nowrap flex-shrink-0"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
              }}
            >
              Năm 2026
            </span>
            <div className="h-px w-12 md:w-16 lg:w-20 bg-[#2f2f2f] flex-shrink-0" />
          </div>
        </div>

        <div className="text-center mb-10">
          <p
            className="text-sm md:text-base text-[#2f2f2f] italic"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
          >
            (Tức ngày 10 tháng 02 năm Bính Ngọ)
          </p>
        </div>

        {/* Venue */}
        <div className="text-center mb-6">
          <p
            className="text-sm md:text-3xl text-[#b5851d] font-black uppercase"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Tại: Trống Đồng Palace
          </p>
          <p
            className="text-base md:text-lg text-[#2f2f2f] mt-2 leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
          >
            Tầng 2 Tasco Mall, 7-9 Nguyễn Văn Linh, Tổ 17, Long Biên, Hà Nội
          </p>
        </div>

        {/* Bottom title */}
        <h3
          className="text-center text-3xl md:text-5xl lg:text-6xl text-[#8B4513] mb-4"
          style={{ fontFamily: "'Luxurious Script', cursive", fontWeight: 550 }}
        >
          Rất hân hạnh được đón tiếp!
        </h3>

        {/* Decorative bottom elements */}
        <div className="flex justify-center items-center gap-3 mt-6">
          <div className="w-12 md:w-16 h-px bg-gradient-to-r from-transparent via-rose-300 to-rose-300"></div>
          <span className="text-rose-500 text-2xl md:text-3xl">♥</span>
          <div className="w-12 md:w-16 h-px bg-gradient-to-l from-transparent via-rose-300 to-rose-300"></div>
        </div>
      </div>
    </div>
  );
}

export default InvitationCard;
