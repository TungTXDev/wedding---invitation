import { useState } from "react";

interface FormData {
  guestName: string;
  attendees: string;
}

interface InvitationFormProps {
  selectedSide: 'groom' | 'bride';
}

function InvitationForm({ selectedSide }: InvitationFormProps) {
  const [formData, setFormData] = useState<FormData>({
    guestName: "",
    attendees: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      const appsScriptUrl = import.meta.env.VITE_APPS_SCRIPT_URL;

      const submitData = {
        side: selectedSide === 'groom' ? 'Groom' : 'Bride',
        guestName: formData.guestName,
        attendees: formData.attendees,
      };

      await fetch(appsScriptUrl, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(submitData),
      });

      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
        setFormData({ guestName: "", attendees: "" });
      }, 3000);
    } catch (err) {
      console.error(err);
      alert("Lỗi khi gửi dữ liệu");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "attendees" && value !== "" && !/^\d+$/.test(value)) return;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full relative">
      <h2
        className="text-center text-[#8B4513] text-3xl md:text-6xl mb-6"
        style={{ fontFamily: "'Luxurious Script', cursive" }}
      >
        Xác nhận tham dự
      </h2>

      {/* Overlay loading */}
      {isSubmitting && (
        <div className="absolute inset-0 bg-white/70 flex items-center justify-center z-10">
          <div className="loader border-4 border-[#8B4513] border-t-transparent rounded-full w-12 h-12 animate-spin"></div>
        </div>
      )}

      {!submitted ? (
        <form className="space-y-4" onSubmit={handleSubmit}>

          {/* Guest name */}
          <div>
            <label htmlFor="guestName" className="block text-center text-[#8B4513] font-medium mb-2 mt-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>Tên khách mời</label>
            <input type="text" id="guestName" name="guestName" value={formData.guestName} onChange={handleChange} placeholder="Nhập tên của bạn..." className="w-full px-5 py-3 border-2 border-[#8B4513] rounded-2xl text-[#8B4513] text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8B4513] bg-white" required />
          </div>

          {/* Attendees */}
          <div>
            <label htmlFor="attendees" className="block text-center text-[#8B4513] font-medium mb-2 mt-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>Số lượng tham dự</label>
            <input type="text" inputMode="numeric" id="attendees" name="attendees" value={formData.attendees} onChange={handleChange} placeholder="Nhập số người tham dự..." className="w-full px-5 py-3 border-2 border-[#8B4513] rounded-2xl text-[#8B4513] text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8B4513] bg-white" required />
          </div>

          <button type="submit" className="w-full py-4 bg-[#8b0102] text-white rounded-2xl text-lg font-medium hover:bg-[#6b0101] transition-colors mt-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>Xác nhận tham dự</button>
        </form>
      ) : (
        <div className="text-center py-10">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white text-4xl mx-auto mb-4 animate-bounce">✓</div>
          <p className="text-green-600 font-bold text-xl mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>Cảm ơn bạn!</p>
          <p className="text-[#8B4513] text-base" style={{ fontFamily: "'Montserrat', sans-serif" }}>Chúng tôi rất vui khi có bạn tham dự</p>
        </div>
      )}

      {/* Loader CSS */}
      <style>{`
        .loader {
          border-top-color: transparent;
          border-right-color: #8B4513;
          border-bottom-color: #8B4513;
          border-left-color: #8B4513;
        }
      `}</style>
    </div>
  );
}

export default InvitationForm;
