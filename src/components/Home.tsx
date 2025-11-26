import InvitationForm from './InvitationForm';
import MapLocation from './MapLocation';
import WeddingFooter from './WeddingFooter';
import Countdown from './Countdown';
import WeddingHeader from './WeddingHeader';
import CoupleInfo from './CoupleInfo';
import InvitationCard from './InvitationCard';
import MusicPlayer from './MusicPlayer';

function Home() {
  return (
    <div className="w-full min-h-screen bg-[#f7f7f7]">
      {/* Music Player - Fixed button */}
      <MusicPlayer />

      {/* Container mobile - một card duy nhất */}
      <div className="w-full max-w-[430px] mx-auto md:max-w-none md:w-[42%]">

        {/* Card trắng chứa tất cả */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden">

          <WeddingHeader />

          <CoupleInfo />

          <div className="px-6">
            {/* Invitation Card */}
            <InvitationCard />
          </div>

          <Countdown />

          <div className="px-6">

            {/* Map Location */}
            <MapLocation />

            {/* Invitation form */}
            <InvitationForm />

            <WeddingFooter />
          </div>

        </div>

      </div>
    </div>
  );
}

export default Home;