function InvitationCard() {
    return (
        <div className="w-full mb-8">
            {/* Card container with border frame */}
            <div className="bg-white rounded-lg p-4 md:p-8 border-4 border-double border-amber-600 shadow-lg relative">

                {/* Corner decorations */}
                <div className="absolute top-2 left-2 w-6 h-6 md:w-8 md:h-8 border-l-2 border-t-2 border-amber-600"></div>
                <div className="absolute top-2 right-2 w-6 h-6 md:w-8 md:h-8 border-r-2 border-t-2 border-amber-600"></div>
                <div className="absolute bottom-2 left-2 w-6 h-6 md:w-8 md:h-8 border-l-2 border-b-2 border-amber-600"></div>
                <div className="absolute bottom-2 right-2 w-6 h-6 md:w-8 md:h-8 border-r-2 border-b-2 border-amber-600"></div>

                {/* Header - Nhà Gái & Nhà Trai */}
                <div className="flex justify-between mb-4 text-xs md:text-base">
                    <div className="text-left">
                        <p className="font-bold text-gray-800 mb-1">NHÀ GÁI</p>
                        <p className="text-gray-600">Bố: Tạ Xuân Long</p>
                        <p className="text-gray-600">Mẹ: Nguyễn Thị Hồng Yến</p>
                    </div>
                    <div className="text-right">
                        <p className="font-bold text-gray-800 mb-1">NHÀ TRAI</p>
                        <p className="text-gray-600">Bố: Vũ Đức Bộ</p>
                        <p className="text-gray-600">Mẹ: Nguyễn Thị Kim Tuyến</p>
                    </div>
                </div>

                {/* Main title */}
                <h2
                    className="text-center text-xl md:text-4xl font-bold text-red-800 mb-4"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                >
                    TRÂN TRỌNG KÍNH MỜI
                </h2>

                {/* Subtitle */}
                <p className="text-center text-base md:text-xl font-semibold text-gray-800 mb-3">
                    Bạn cùng gia đình
                </p>

                {/* Event description */}
                <p className="text-center text-sm md:text-base text-gray-500 italic mb-6">
                    (Tới dự Lễ Thành Hôn của chúng mình)
                </p>

                {/* Couple names with heart */}
                <div className="flex items-center justify-center gap-2 md:gap-8 mb-8">
                    <div className="text-center">
                        <p
                            className="text-xl md:text-4xl text-teal-600 font-semibold"
                            style={{ fontFamily: "'Parisienne', cursive" }}
                        >
                            Tạ
                        </p>
                        <p
                            className="text-xl md:text-4xl text-teal-600 font-semibold"
                            style={{ fontFamily: "'Parisienne', cursive" }}
                        >
                            Xuân Mai
                        </p>
                    </div>

                    <div className="text-3xl md:text-5xl">❤️</div>

                    <div className="text-center">
                        <p
                            className="text-xl md:text-4xl text-teal-600 font-semibold"
                            style={{ fontFamily: "'Parisienne', cursive" }}
                        >
                            Vũ
                        </p>
                        <p
                            className="text-xl md:text-4xl text-teal-600 font-semibold"
                            style={{ fontFamily: "'Parisienne', cursive" }}
                        >
                            Hải Long
                        </p>
                    </div>
                </div>

                {/* Time */}
                <div className="text-center mb-1">
                    <p className="text-sm md:text-xl font-semibold text-gray-800">
                        Tổ chức vào lúc 13 giờ 00
                    </p>
                </div>
                <div className="text-center mb-1">
                    <p className="text-sm md:text-xl font-semibold text-gray-800">
                        Thứ Sáu, ngày 31 tháng 10 năm 2025
                    </p>
                </div>
                <div className="text-center mb-6">
                    <p className="text-xs md:text-sm text-gray-500 italic">
                        (Tức ngày 11 tháng 09 năm Ất Tỵ.)
                    </p>
                </div>

                {/* Location */}
                <div className="text-center mb-4">
                    <p className="text-base md:text-xl font-bold text-gray-800 mb-2">
                        Tại gia đình Nhà Gái:
                    </p>
                    <p className="text-sm md:text-lg text-gray-700">
                        Số 9 - ngõ Bình Yên - Xóm 3
                    </p>
                    <p className="text-sm md:text-lg text-gray-700 mb-3">
                        Văn trại - Thường Tín - Hà Nội
                    </p>
                    <div className="w-24 md:w-32 h-px bg-rose-300 mx-auto mb-3"></div>
                </div>

                {/* Footer message */}
                <p className="text-center text-xs md:text-base text-gray-500 italic mb-6">
                    Sự hiện diện của Quý khách là niềm vinh hạnh của gia đình chúng mình!
                </p>

                {/* Decorative flowers */}
                <div className="flex justify-center gap-2 md:gap-3">
                    <span className="text-2xl md:text-3xl">🌸</span>
                    <span className="text-2xl md:text-3xl">🌼</span>
                    <span className="text-2xl md:text-3xl">🌸</span>
                </div>
            </div>
        </div>
    );
}

export default InvitationCard;
