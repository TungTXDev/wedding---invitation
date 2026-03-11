interface MapLocationProps {
  selectedSide: "groom" | "bride";
}

function MapLocation({ selectedSide }: MapLocationProps) {
  const groomFirst = selectedSide === "groom";

  const address = groomFirst
    ? "Tương Chúc, Nam Phù, Hà Nội"
    : "Tầng 2 Tasco Mall, 7-9 Nguyễn Văn Linh, Tổ 17, Long Biên, Hà Nội";

  const venue = groomFirst
    ? "Tư gia nhà trai"
    : "Trống Đồng Palace";

  const mapUrl = groomFirst
    ? "https://maps.app.goo.gl/xv8xJuv9Q9kb11kX7" // Quý vị cần thay thế bằng link map thực của nhà trai
    : "https://maps.app.goo.gl/Mey7n3omcdGrSpQ66";

  const handleOpenMap = () => {
    window.open(mapUrl, '_blank');
  };

  return (
    <div className="w-full">
      <h2 className="text-center text-red-800 font-serif text-2xl mb-4">
        Địa điểm tổ chức
      </h2>

      <p className="text-center md:text-4xl text-lg font-semibold text-[#b5851d] mb-4">
        {venue}
      </p>

      {/* Address */}
      <div className="mb-6">
        <p className="text-center md:text-xl text-gray-700 text-base leading-relaxed">
          {address}
        </p>
      </div>

      {/* Map button */}
      <button
        onClick={handleOpenMap}
        className="w-full py-4 bg-red-900 text-white rounded-2xl text-lg font-medium hover:bg-red-800 transition-colors"
      >
        Xem bản đồ
      </button>

      {/* Divider */}
      <div className="my-8 border-t border-gray-200"></div>
    </div>
  );
}

export default MapLocation;