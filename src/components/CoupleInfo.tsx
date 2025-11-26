function CoupleInfo() {
    return (
        <div className="w-full py-8 px-6 text-center bg-gray-50">
            {/* GROOM & BRIDE - Nằm ngang */}
            <div className="flex justify-center items-start gap-6 md:gap-12 mb-6">
                {/* GROOM */}
                <div className="flex-1 text-center">
                    <h2
                        className="text-3xl md:text-5xl font-bold text-red-800 mb-2"
                        style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '0.1em' }}
                    >
                        GROOM
                    </h2>
                    <p
                        className="text-xl md:text-3xl text-gray-600"
                        style={{ fontFamily: "'Parisienne', cursive" }}
                    >
                        Hải Long
                    </p>
                </div>

                {/* BRIDE */}
                <div className="flex-1 text-center">
                    <h2
                        className="text-3xl md:text-5xl font-bold text-red-800 mb-2"
                        style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '0.1em' }}
                    >
                        BRIDE
                    </h2>
                    <p
                        className="text-xl md:text-3xl text-gray-600"
                        style={{ fontFamily: "'Parisienne', cursive" }}
                    >
                        Xuân Mai
                    </p>
                </div>
            </div>

            {/* Invitation Text */}
            <div className="mb-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-2">
                    Gia đình chúng mình trân trọng kính mời
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-2">
                    Quý vị đến dự lễ thành hôn của
                </p>
                <p
                    className="text-2xl text-red-700 my-3"
                    style={{ fontFamily: "'Parisienne', cursive" }}
                >
                    Xuân Mai
                </p>
                <p className="text-lg text-gray-700">và</p>
                <p
                    className="text-2xl text-red-700 my-3"
                    style={{ fontFamily: "'Parisienne', cursive" }}
                >
                    Hải Long
                </p>
            </div>

            {/* Blessing Text */}
            <div className="mb-8">
                <p className="text-base text-gray-600 leading-relaxed">
                    Sự hiện diện và lời chúc phúc của Quý vị
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                    sẽ là niềm vinh hạnh và hạnh phúc lớn
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                    lao cho gia đình chúng mình.
                </p>
            </div>

            {/* Double Happiness Symbol */}
            <div className="flex justify-center mb-12">
                <div className="text-7xl text-red-800">囍</div>
            </div>

            {/* Time and Location */}
            <div className="flex items-start justify-center gap-3 md:gap-8 px-1 md:px-4">
                {/* Thời gian */}
                <div className="flex-1 text-center">
                    <h3 className="text-lg md:text-2xl font-semibold text-gray-800 mb-2 md:mb-3">
                        Thời gian
                    </h3>
                    <p className="text-sm md:text-lg text-gray-600 mb-1">
                        13:00 PM, Thứ Sáu
                    </p>
                    <p className="text-sm md:text-lg text-gray-600">
                        Ngày 31 tháng 10 năm 2025
                    </p>
                </div>

                {/* Divider */}
                <div className="w-px md:w-1 font-bold bg-red-800 self-stretch"></div>

                {/* Địa điểm */}
                <div className="flex-1 text-center">
                    <h3 className="text-lg md:text-2xl font-semibold text-gray-800 mb-2 md:mb-3">
                        Địa điểm
                    </h3>
                    <p className="text-sm md:text-lg text-gray-600 mb-1">
                        Tại Gia Đình
                    </p>
                    <p className="text-sm md:text-lg text-gray-600">
                        Số 9, ngõ Bình Yên, xóm 3,
                    </p>
                    <p className="text-sm md:text-lg text-gray-600">
                        Thường Tín, Hà Nội
                    </p>
                </div>
            </div>
        </div>
    );
}

export default CoupleInfo;
