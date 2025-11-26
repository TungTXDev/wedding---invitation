import { useState, useEffect } from 'react';

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

function Countdown() {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const targetDate = new Date('2025-12-25T23:00:00').getTime();

        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance > 0) {
                setTimeLeft({
                    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
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
    }, []);

    return (
        <div className="w-full mb-8">
            {/* Couple Photos */}
            <div className="flex justify-center items-center gap-12 md:gap-40 mb-6">
                {/* Groom */}
                <div className="flex flex-col items-center">
                    <div className="w-28 h-28 md:w-40 md:h-40 rounded-full overflow-hidden mb-3 shadow-lg">
                        <img
                            src="/images/DSC09362.jpg"
                            alt="Chú rể"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <p className="text-base md:text-xl font-semibold text-red-800 mb-1">
                        Chú rể
                    </p>
                    <p
                        className="text-lg md:text-2xl text-gray-600"
                        style={{ fontFamily: "'Parisienne', cursive" }}
                    >
                        Hải Long
                    </p>
                </div>

                {/* Bride */}
                <div className="flex flex-col items-center">
                    <div className="w-28 h-28 md:w-40 md:h-40 rounded-full overflow-hidden mb-3 shadow-lg">
                        <img
                            src="/images/DSC09362.jpg"
                            alt="Cô dâu"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <p className="text-base md:text-xl font-semibold text-red-800 mb-1">
                        Cô dâu
                    </p>
                    <p
                        className="text-lg md:text-2xl text-gray-600"
                        style={{ fontFamily: "'Parisienne', cursive" }}
                    >
                        Xuân Mai
                    </p>
                </div>
            </div>

            <div className="flex justify-center items-center gap-2 mb-6">
                {/* Days */}
                <div className="flex flex-col items-center">
                    <span className="text-4xl text-red-800">
                        {timeLeft.days}
                    </span>
                    <span className="text-lg text-red-800 mt-1">
                        Ngày
                    </span>
                </div>

                <span className="text-4xl font-bold text-red-800 mb-6">:</span>

                {/* Hours */}
                <div className="flex flex-col items-center">
                    <span className="text-4xl text-red-800">
                        {timeLeft.hours}
                    </span>
                    <span className="text-lg text-red-800 mt-1">
                        Giờ
                    </span>
                </div>

                <span className="text-4xl font-bold text-red-800 mb-6">:</span>

                {/* Minutes */}
                <div className="flex flex-col items-center">
                    <span className="text-4xl text-red-800">
                        {timeLeft.minutes}
                    </span>
                    <span className="text-lg text-red-800 mt-1">
                        Phút
                    </span>
                </div>

                <span className="text-4xl font-bold text-red-800 mb-6">:</span>

                {/* Seconds */}
                <div className="flex flex-col items-center">
                    <span className="text-4xl text-red-800">
                        {timeLeft.seconds}
                    </span>
                    <span className="text-lg text-red-800 mt-1">
                        Giây
                    </span>
                </div>
            </div>

            <div>
                <img
                    src="/images/DSC09369.jpg"
                    alt="Wedding Photo"
                    className="w-full"
                />
            </div>
        </div>
    );
}

export default Countdown;
