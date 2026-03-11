interface WeddingFooterProps {
  selectedSide: "groom" | "bride";
}

function WeddingFooter({ selectedSide }: WeddingFooterProps) {
  const groomFirst = selectedSide === "groom";
  const coupleNames = groomFirst ? "Hải Long & Xuân Mai" : "Xuân Mai & Hải Long";

  return (
    <footer className="mt-8 pt-6">
      {/* Decorative line */}
      <div className="flex justify-center items-center gap-3 mb-6">
        <div className="w-12 md:w-16 h-px bg-gradient-to-r from-transparent via-[#8B4513] to-[#8B4513]"></div>
        <span className="text-[#8B4513] text-2xl">❀</span>
        <div className="w-12 md:w-16 h-px bg-gradient-to-l from-transparent via-[#8B4513] to-[#8B4513]"></div>
      </div>

      {/* Main message */}
      <div className="text-center mb-6">
        <h2
          className="text-3xl md:text-4xl text-[#8B4513] mb-4"
          style={{ fontFamily: "'Luxurious Script', cursive", fontWeight: 550 }}
        >
          Trân trọng cảm ơn
        </h2>
        <div className="flex justify-center">
          <p
            className="text-sm sm:text-base md:text-lg lg:text-xl text-[#2f2f2f] leading-relaxed whitespace-nowrap"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 550 }}
          >
            Sự hiện diện của Quý vị là niềm vinh hạnh của chúng tôi
          </p>
        </div>
      </div>

      {/* Couple names */}
      <div className="text-center mb-6">
        <p
          className="text-lg md:text-xl text-[#8B4513]"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
        >
          {coupleNames}
        </p>
      </div>

      {/* Bottom decorative line */}
      <div className="flex justify-center items-center gap-3 mb-4">
        <div className="w-8 md:w-12 h-px bg-gradient-to-r from-transparent via-[#b5851d] to-[#b5851d]"></div>
        <span className="text-[#b5851d] text-xl">♥</span>
        <div className="w-8 md:w-12 h-px bg-gradient-to-l from-transparent via-[#b5851d] to-[#b5851d]"></div>
      </div>

      {/* Copyright */}
      <div className="text-center pb-4 mb-8">
        <p
          className="text-gray-500 text-sm"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
        >
          © 2026 - Made by{" "}
          <a
            href="https://tung-tx-dev-portfolio-fe.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8B4513] underline hover:text-[#b5851d] transition-colors duration-200"
            style={{ fontWeight: 500 }}
          >
            TungTXDev
          </a>
        </p>
      </div>
    </footer>
  );
}

export default WeddingFooter;
