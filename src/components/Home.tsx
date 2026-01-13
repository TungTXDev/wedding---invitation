import InvitationForm from './InvitationForm';
import MapLocation from './MapLocation';
import WeddingFooter from './WeddingFooter';
import Countdown from './Countdown';
import WeddingHeader from './WeddingHeader';
import CoupleInfo from './CoupleInfo';
import InvitationCard from './InvitationCard';

interface HomeProps {
  selectedSide: 'groom' | 'bride';
  onBack: () => void;
}

function Home({ selectedSide, onBack }: HomeProps) {
  return (
    <div className="w-full min-h-screen bg-white pt-0">
      {/* Back button */}
      <button
        onClick={onBack}
        className="fixed top-4 left-4 z-50 bg-[#8b0102] text-white px-4 py-2 rounded-full shadow-lg hover:bg-[#6b0101] transition-all duration-200 flex items-center gap-2"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span className="hidden md:inline">Quay lại</span>
      </button>

      {/* Container mobile - một card duy nhất */}
      <div className="w-full max-w-[430px] mx-auto md:max-w-none md:w-[42%] pt-0">

        {/* Card trắng chứa tất cả */}
        <div className="bg-gradient-to-br from-amber-50/50 to-rose-50/50 rounded-3xl shadow-lg border border-gray-200 overflow-hidden">

          <WeddingHeader />

          <CoupleInfo selectedSide={selectedSide} />

          <div className="px-1">
            {/* Invitation Card */}
            <InvitationCard selectedSide={selectedSide} />
          </div>

          <Countdown />

          <div className="px-6">

            {/* Map Location */}
            <MapLocation />

            {/* Invitation form */}
            <InvitationForm selectedSide={selectedSide} />

            <WeddingFooter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;