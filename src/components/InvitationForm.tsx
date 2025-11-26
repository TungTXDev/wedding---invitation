import { useState } from "react";

interface FormData {
  side: string;
  guestName: string;
  attendees: string;
}

function InvitationForm() {
  const [formData, setFormData] = useState<FormData>({
    side: "",
    guestName: "",
    attendees: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // <-- state loading

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.side) {
      alert("Vui lòng chọn Nhà trai hoặc Nhà gái");
      return;
    }

    setIsSubmitting(true); // bắt đầu loading

    try {
      const appsScriptUrl = import.meta.env.VITE_APPS_SCRIPT_URL;

      await fetch(appsScriptUrl, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(formData),
      });

      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
        setFormData({ side: "", guestName: "", attendees: "" });
      }, 3000);
    } catch (err) {
      console.error(err);
      alert("Lỗi khi gửi dữ liệu");
    } finally {
      setIsSubmitting(false); // kết thúc loading
    }
  };

  const handleSideChange = (value: string) => {
    setFormData((prev) => ({ ...prev, side: value }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "attendees" && value !== "" && !/^\d+$/.test(value)) return;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full relative">
      <h2 className="text-center text-red-800 font-serif text-2xl mb-4">
        Xác nhận tham dự
      </h2>

      {/* Overlay loading */}
      {isSubmitting && (
        <div className="absolute inset-0 bg-white/70 flex items-center justify-center z-10">
          <div className="loader border-4 border-red-500 border-t-transparent rounded-full w-12 h-12 animate-spin"></div>
        </div>
      )}

      {!submitted ? (
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Side selection */}
          <div>
            <div className="block text-center text-red-800 font-medium mb-3">
              Bên gia đình
            </div>
            <div className="flex flex-row gap-3 justify-center">
              {/* Nhà trai */}
              <label className={`relative flex items-center gap-2 px-4 py-3 rounded-full cursor-pointer border-2 transition-all duration-200 ease-linear ${formData.side === "Groom" ? "border-rose-500 bg-rose-50 shadow-md" : "border-rose-200 bg-white hover:border-rose-300 hover:shadow-sm"}`}>
                <input type="radio" name="side" value="Groom" checked={formData.side === "Groom"} onChange={(e) => handleSideChange(e.target.value)} className="sr-only" required />
                <span className={`flex items-center justify-center w-5 h-5 rounded-full border-2 transition-all duration-100 ${formData.side === "Groom" ? "border-rose-500 bg-rose-500" : "border-gray-300 bg-white"}`}>
                  {formData.side === "Groom" && (
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 12 12">
                      <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                  )}
                </span>
                <span className={`text-base font-medium ${formData.side === "Groom" ? "text-rose-700" : "text-gray-700"}`}>🤵 Nhà trai</span>
              </label>

              {/* Nhà gái */}
              <label className={`relative flex items-center gap-2 px-4 py-3 rounded-full cursor-pointer border-2 transition-all duration-200 ease-linear ${formData.side === "Bride" ? "border-rose-500 bg-rose-50 shadow-md" : "border-rose-200 bg-white hover:border-rose-300 hover:shadow-sm"}`}>
                <input type="radio" name="side" value="Bride" checked={formData.side === "Bride"} onChange={(e) => handleSideChange(e.target.value)} className="sr-only" required />
                <span className={`flex items-center justify-center w-5 h-5 rounded-full border-2 transition-all duration-100 ${formData.side === "Bride" ? "border-rose-500 bg-rose-500" : "border-gray-300 bg-white"}`}>
                  {formData.side === "Bride" && (
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 12 12">
                      <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                  )}
                </span>
                <span className={`text-base font-medium ${formData.side === "Bride" ? "text-rose-700" : "text-gray-700"}`}>👰‍♀️ Nhà gái</span>
              </label>
            </div>
          </div>

          {/* Guest name */}
          <div>
            <label htmlFor="guestName" className="block text-center text-red-800 font-medium mb-2 mt-2">Tên khách mời</label>
            <input type="text" id="guestName" name="guestName" value={formData.guestName} onChange={handleChange} placeholder="Nhập tên của bạn..." className="w-full px-5 py-3 border border-gray-300 rounded-2xl text-gray-800 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-200" required />
          </div>

          {/* Attendees */}
          <div>
            <label htmlFor="attendees" className="block text-center text-red-800 font-medium mb-2 mt-2">Số lượng tham dự</label>
            <input type="text" inputMode="numeric" id="attendees" name="attendees" value={formData.attendees} onChange={handleChange} placeholder="Nhập số người tham dự..." className="w-full px-5 py-3 border border-gray-300 rounded-2xl text-gray-800 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-200" required />
          </div>

          <button type="submit" className="w-full py-4 bg-red-900 text-white rounded-2xl text-lg font-medium hover:bg-red-800 transition-colors mt-4">Xác nhận tham dự</button>
        </form>
      ) : (
        <div className="text-center py-10">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white text-4xl mx-auto mb-4 animate-bounce">✓</div>
          <p className="text-green-600 font-bold text-xl mb-2">Cảm ơn bạn!</p>
          <p className="text-gray-600 text-base">Chúng tôi rất vui khi có bạn tham dự</p>
        </div>
      )}

      {/* Loader CSS */}
      <style>{`
        .loader {
          border-top-color: transparent;
          border-right-color: #f87171;
          border-bottom-color: #f87171;
          border-left-color: #f87171;
        }
      `}</style>
    </div>
  );
}

export default InvitationForm;
