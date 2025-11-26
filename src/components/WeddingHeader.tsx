function WeddingHeader() {
  return (
    <div className="text-center relative bg-white-to-b from-rose-50 to-white pb-6">
      <div className="px-6 pt-8">
        {/* Decorative top */}
        <div className="flex justify-center items-center gap-3 mb-4">
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-rose-300 to-rose-300"></div>
          <span className="text-rose-400 text-2xl">✦</span>
          <div className="w-12 h-px bg-gradient-to-l from-transparent via-rose-300 to-rose-300"></div>
        </div>

        {/* Main title */}
        <h1
          className="text-xl md:text-4xl text-gray-800 tracking-wide mb-2 leading-tight uppercase"
          style={{ fontFamily: "'Bodoni Moda', serif" }}
        >
          Welcome to our wedding
        </h1>

        {/* Subtitle */}
        <p
          className="text-xl md:text-3xl text-rose-600 mb-4 italic uppercase"
          style={{ fontFamily: "'Bodoni Moda', serif" }}
        >
          We got married
        </p>

        {/* Date */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-rose-400 text-sm">❀</span>
          <p className="text-base md:text-lg text-gray-600 font-medium">
            31 • 10 • 2025
          </p>
          <span className="text-rose-400 text-sm">❀</span>
        </div>

        {/* Decorative bottom */}
        <div className="flex justify-center items-center gap-2 mb-6">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-rose-300 to-rose-300"></div>
          <span className="text-rose-500 text-xl">♥</span>
          <div className="w-16 h-px bg-gradient-to-l from-transparent via-rose-300 to-rose-300"></div>
        </div>
      </div>

      {/* Wedding Photo - Full width, sát mép */}
      <div className="relative">
        <img
          src="/images/DSC09369.jpg"
          alt="Wedding Photo"
          className="w-full"
        />
        {/* Overlay gradient at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </div>
    </div>
  );
}

export default WeddingHeader;
