function WeddingHeader() {
  return (
    <div className="text-center relative">
      <div className="px-6 pt-6">
        <h1
          className="text-5xl text-black-600 tracking-wide mb-3"
          style={{ fontFamily: "'Parisienne', cursive" }}
        >
          Welcome to our wedding
        </h1>
        <p
          className="text-3xl text-rose-500 mb-6"
          style={{ fontFamily: "'Parisienne', cursive" }}
        >
          We got married
        </p>
      </div>

      {/* Wedding Photo - Full width, sát mép */}
      <div>
        <img
          src="/src/assets/images/DSC09369.jpg"
          alt="Wedding Photo"
          className="w-full rounded-lg"
        />
      </div>
    </div>
  );
}

export default WeddingHeader;
