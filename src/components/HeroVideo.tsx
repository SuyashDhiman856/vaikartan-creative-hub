const HeroVideo = () => {
  return (
    <div className="bg-white component-border p-8 flex justify-center items-center">
      <div className="relative w-full max-w-lg aspect-[9/16] bg-card border-2 border-border rounded-lg shadow-medium overflow-hidden">
        {/* Placeholder for video - replace with actual video component */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-accent/20 rounded-full flex items-center justify-center">
              <div className="w-0 h-0 border-l-[12px] border-l-accent border-y-[8px] border-y-transparent ml-1"></div>
            </div>
            <p className="text-muted-foreground text-sm">Video will appear here</p>
          </div>
        </div>
        
        {/* Uncomment and update the src when you upload your video */}
        {/* <video 
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted={false}
          controls={false}
        >
          <source src="/path/to/your/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </source> */}
      </div>
    </div>
  );
};

export default HeroVideo;