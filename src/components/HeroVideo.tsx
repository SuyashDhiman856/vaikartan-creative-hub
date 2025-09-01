const HeroVideo = () => {
  return (
    <div className="bg-white component-border p-8 flex justify-center items-center">
      <div className="relative w-full max-w-lg aspect-[9/16] bg-card border-2 border-border rounded-lg shadow-medium overflow-hidden">
        {/* Hero video with dynamic background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-red-500/30 to-purple-600/20 animate-gradient-x">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>
          <img 
            src="https://static.wixstatic.com/media/457359_85f4f8c4a10c4a108a9548d863f7dd04f000.jpg/v1/fill/w_768,h_1002,al_c,q_85,usm_0.33_1.00_0.00,enc_avif,quality_auto/457359_85f4f8c4a10c4a108a9548d863f7dd04f000.jpg"
            alt="Creative Design Hero"
            className="w-full h-full object-cover opacity-80"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroVideo;