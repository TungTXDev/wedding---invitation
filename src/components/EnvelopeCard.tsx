import React, { useState } from 'react';

interface EnvelopeCardProps {
    imageUrl: string;
    decorativeFlower?: boolean;
}

const EnvelopeCard: React.FC<EnvelopeCardProps> = ({
    imageUrl,
    decorativeFlower = true
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <style>{`
                .envelope-container {
                    position: relative;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 600px;
                    padding: 40px;
                }
                .decorative-flower {
                    position: absolute;
                    top: 20px;
                    left: 20px;
                    width: 150px;
                    height: 150px;
                    opacity: 0.8;
                }
                .envelope {
                    position: relative;
                    width: 600px;
                    height: 400px;
                    cursor: pointer;
                    transition: all 0.6s ease;
                    transform-style: preserve-3d;
                    overflow: visible;
                }
                .envelope-body {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    background: #e8e4d9;
                    border-radius: 8px;
                    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
                    z-index: 1;
                    overflow: hidden;
                }
                .envelope-body::before,
                .envelope-body::after {
                    content: '';
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    z-index: 3;
                    pointer-events: none;
                }
                .envelope-body::before {
                    background: linear-gradient(to bottom right, transparent calc(50% - 1px), rgba(0, 0, 0, 0.12) calc(50% - 1px), rgba(0, 0, 0, 0.12) calc(50% + 1px), transparent calc(50% + 1px));
                }
                .envelope-body::after {
                    background: linear-gradient(to bottom left, transparent calc(50% - 1px), rgba(0, 0, 0, 0.12) calc(50% - 1px), rgba(0, 0, 0, 0.12) calc(50% + 1px), transparent calc(50% + 1px));
                }
                .envelope-diagonal-left,
                .envelope-diagonal-right {
                    position: absolute;
                    width: 50%;
                    height: 100%;
                    top: 0;
                    z-index: 1;
                    transition: opacity 0.6s ease;
                }
                .envelope-diagonal-left {
                    left: 0;
                    background: linear-gradient(135deg, #d4cfc0 0%, #e8e4d9 100%);
                    clip-path: polygon(0 0, 100% 100%, 0 100%);
                }
                .envelope-diagonal-right {
                    right: 0;
                    background: linear-gradient(-135deg, #d4cfc0 0%, #e8e4d9 100%);
                    clip-path: polygon(100% 0, 100% 100%, 0 0);
                }
                .envelope.open .envelope-diagonal-left,
                .envelope.open .envelope-diagonal-right {
                    opacity: 0;
                }
                .envelope-flap {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 50%;
                    background: linear-gradient(180deg, #d4cfc0 0%, #c9c4b5 100%);
                    transform-origin: top center;
                    transition: transform 0.6s ease, z-index 0s 0s;
                    z-index: 3;
                    clip-path: polygon(0 0, 100% 0, 50% 100%);
                    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
                }
                .envelope.open .envelope-flap {
                    transform: rotateX(-180deg);
                    z-index: 1;
                    transition: transform 0.6s ease, z-index 0s 0.3s;
                }
                .wax-seal {
                    position: absolute;
                    bottom: 35%;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 70px;
                    height: 70px;
                    background: linear-gradient(135deg, #8b6f47 0%, #a0825a 50%, #8b6f47 100%);
                    border-radius: 50%;
                    z-index: 4;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
                    transition: all 0.6s ease;
                }
                .envelope.open .wax-seal {
                    opacity: 0;
                    transform: translateX(-50%) scale(0.5);
                }
                .seal-design {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 50px;
                    height: 50px;
                    background-image: radial-gradient(circle, #6b5538 2px, transparent 2px);
                    background-size: 10px 10px;
                    opacity: 0.6;
                }
                .seal-design::before {
                    content: '🌿';
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    font-size: 24px;
                }
                .photo-card {
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    transform: translateX(-50%) translateY(50px);
                    width: 85%;
                    height: 280px;
                    background: white;
                    border-radius: 4px;
                    overflow: hidden;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
                    z-index: 2;
                    transition: all 0.9s cubic-bezier(0.34, 1.56, 0.64, 1);
                    opacity: 0;
                    pointer-events: none;
                }
                .envelope.open .photo-card {
                    transform: translateX(-50%) translateY(-300px);
                    opacity: 1;
                    z-index: 5;
                    pointer-events: auto;
                    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.3);
                }
                .photo-card img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                @media (max-width: 768px) {
                    .envelope {
                        width: 90vw;
                        max-width: 400px;
                        height: 280px;
                    }
                    .wax-seal {
                        width: 50px;
                        height: 50px;
                    }
                    .seal-design::before {
                        font-size: 18px;
                    }
                    .decorative-flower {
                        width: 100px;
                        height: 100px;
                    }
                    .photo-card {
                        height: 200px;
                    }
                    .envelope.open .photo-card {
                        transform: translateX(-50%) translateY(-220px);
                    }
                }
            `}</style>
            <div className="envelope-container">
                {decorativeFlower && (
                    <div className="decorative-flower">
                        <img src="/images/flower-decoration.svg" alt="" />
                    </div>
                )}
                <div className={`envelope ${isOpen ? 'open' : ''}`} onClick={handleClick}>
                    <div className="envelope-flap"></div>
                    <div className="envelope-body">
                        <div className="envelope-diagonal-left"></div>
                        <div className="envelope-diagonal-right"></div>
                        <div className="wax-seal">
                            <div className="seal-design"></div>
                        </div>
                    </div>
                    <div className="photo-card">
                        <img src={imageUrl} alt="Wedding Photo" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default EnvelopeCard;