function WeddingFooter() {
  return (
    <footer className="mt-8 pt-6 border-t border-rose-200">
      {/* Decorative hearts */}
      <div className="flex justify-center gap-3 mb-4">
        <span className="text-rose-400 text-xl animate-pulse">❤️</span>
        <span className="text-rose-300 text-sm mt-1">✦</span>
        <span className="text-rose-400 text-xl animate-pulse delay-100">💕</span>
        <span className="text-rose-300 text-sm mt-1">✦</span>
        <span className="text-rose-400 text-xl animate-pulse delay-200">❤️</span>
      </div>

      {/* Wedding date and message */}
      <div className="text-center mb-4">
        <h2 className="text-2xl font-serif text-rose-600 mb-2">
          Happy Wedding
        </h2>
        <p className="text-xl font-semibold text-rose-500 mb-3">
          31/10/2025
        </p>
        <p className="text-rose-600 italic mb-4">
          Hãy cùng nhau tạo nên những kỷ niệm đẹp trong ngày trọng đại này!
        </p>
      </div>

      {/* Thank you message */}
      <div className="text-center mb-4">
        <p className="text-gray-600 text-sm italic">
          Sự hiện diện của bạn là niềm vinh hạnh của chúng tôi
        </p>
      </div>

      {/* Contact info */}
      <div className="text-center text-gray-500 text-xs mb-4">
        <p>Liên hệ: [Số điện thoại] | [Email]</p>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 text-xs">
        <p>© 2025 - Made with love 💝</p>
      </div>
    </footer>
  );
}

export default WeddingFooter;
