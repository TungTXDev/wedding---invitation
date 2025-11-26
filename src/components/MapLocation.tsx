function MapLocation() {
  const address = "Số 9, ngõ Bình Yên, xóm 3, Văn Trại, Thường Tín, Hà Nội";
  const mapUrl = "https://maps.google.com/?q=20.5801,105.8542";

  const handleOpenMap = () => {
    window.open(mapUrl, '_blank');
  };

  return (
    <div className="w-full">
      <h2 className="text-center text-red-800 font-serif text-2xl mb-4">
        Địa điểm tổ chức
      </h2>

      <p className="text-center text-lg font-semibold text-gray-800 mb-4">
        Tại Gia Đình
      </p>

      {/* Address */}
      <div className="mb-6">
        <p className="text-center text-gray-700 text-base leading-relaxed">
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
