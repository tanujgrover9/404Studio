import { Canvas } from "@react-three/fiber";
import { Planet } from "../components/Planet";
import { Environment, Float, Lightformer } from "@react-three/drei";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col justify-end min-h-screen overflow-hidden"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-50 opacity-100"
        src="/assets/856857-uhd_4096_2160_30fps.mp4"
      ></video>

      {/* 🌈 Softer background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,#00fff233_0%,transparent_60%),radial-gradient(circle_at_70%_60%,#ff007744_0%,transparent_60%)] mix-blend-screen z-[-40]" />

      {/* 🧠 Content */}
      <div className="relative z-10 text-white px-6 sm:px-12 md:px-20 text-center md:text-left select-none pb-24 sm:pb-28 md:pb-32 lg:pb-36">
        <div className="max-w-5xl mx-auto">
          {/* Subtitle */}
          <p className="relative inline-block px-5 py-2 text-base sm:text-lg md:text-xl font-medium uppercase tracking-[0.15em] text-white/90 rounded-xl mb-6 backdrop-blur-md bg-black/30 border border-white/10 shadow-[0_0_20px_rgba(0,255,242,0.15)]">
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 text-transparent bg-clip-text animate-pulse-slow drop-shadow-[0_0_8px_rgba(0,255,242,0.4)]">
              No Bugs Found
            </span>
          </p>

          {/* Title */}
          <h1
            className="relative font-extrabold tracking-tight leading-[0.9] text-white text-[7rem] sm:text-[6rem] md:text-[10rem] lg:text-[12rem] xl:text-[13rem]"
            id="glitch-title"
          >
            <span className="glitch-text relative inline-block drop-shadow-[0_4px_15px_rgba(0,0,0,0.3)] cursor-pointer transition-all duration-300 hover:scale-[1.02]">
              404
            </span>{" "}
            <span className="font-light text-white/70 bg-clip-text bg-gradient-to-r from-red-600 via-blue-600 to-yellow-600 animate-shimmer">
              Studio
            </span>
          </h1>

          {/* Description */}
         <p className="mt-8 text-base sm:text-lg md:text-xl leading-relaxed text-white/85 max-w-2xl mx-auto md:mx-0">
  I craft digital experiences that feel alive.<br />
  Every pixel, motion, and line of code has intent.<br />
  Your brand deserves more than a template — it needs a story.<br />
  I blend design, interactivity, and emotion into one.<br />
  The result? A website that actually{" "}
  <span className="relative font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-blue-300 to-violet-100 drop-shadow-[0_0_10px_rgba(0,255,242,0.4)] animate-glow-text">
    [moves people]
  </span>.
</p>



          {/* Signature */}
          <p className="mt-10 text-white/60 italic tracking-wide text-sm">
            — by Anshuman Singh
          </p>
        </div>
      </div>

      {/* 🔽 Scroll Down Indicator */}
      <div className="absolute bottom-6 sm:bottom-10 md:bottom-14 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer select-none group">
        <div className="text-white/70 text-xs sm:text-sm uppercase tracking-[0.3em] group-hover:text-white transition-colors">
          Scroll Down
        </div>
        <div className="w-[22px] h-[36px] sm:w-[26px] sm:h-[44px] md:w-[30px] md:h-[50px] border-2 border-white/50 rounded-full flex justify-center items-start overflow-hidden relative group-hover:border-white transition-all duration-300">
          <span className="absolute top-2 w-[6px] h-[6px] bg-white rounded-full animate-scrollDot"></span>
        </div>
      </div>

      {/* ✨ Styles */}
      <style>{`
        .glitch-text {
          position: relative;
          color: #fff;
        }
        .glitch-text::before,
        .glitch-text::after {
          content: "404";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          color: #fff;
          overflow: hidden;
          clip: rect(0, 900px, 0, 0);
        }
        .glitch-text::before {
          left: 2px;
          text-shadow: -2px 0 #00fff2;
          animation: glitch-anim 2.8s infinite linear alternate-reverse;
        }
        .glitch-text::after {
          left: -2px;
          text-shadow: 2px 0 #ff005c;
          animation: glitch-anim2 2.5s infinite linear alternate-reverse;
        }
        .glitch-text:hover::before,
        .glitch-text:hover::after {
          animation-duration: 0.3s;
          animation-timing-function: steps(2, end);
        }

        @keyframes glitch-anim {
          0% { clip: rect(20px, 9999px, 85px, 0); transform: skew(0.5deg); }
          20% { clip: rect(10px, 9999px, 60px, 0); transform: skew(0.2deg); }
          40% { clip: rect(30px, 9999px, 70px, 0); transform: skew(0.4deg); }
          60% { clip: rect(15px, 9999px, 100px, 0); transform: skew(0.6deg); }
          80% { clip: rect(25px, 9999px, 75px, 0); transform: skew(0.3deg); }
          100% { clip: rect(5px, 9999px, 60px, 0); transform: skew(0.2deg); }
        }
        @keyframes glitch-anim2 {
          0% { clip: rect(5px, 9999px, 60px, 0); transform: skew(0.3deg); }
          25% { clip: rect(25px, 9999px, 90px, 0); transform: skew(0.5deg); }
          50% { clip: rect(40px, 9999px, 70px, 0); transform: skew(0.4deg); }
          75% { clip: rect(10px, 9999px, 100px, 0); transform: skew(0.6deg); }
          100% { clip: rect(20px, 9999px, 80px, 0); transform: skew(0.2deg); }
        }

        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .animate-shimmer {
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
        }

        @keyframes subtle-flicker {
          0%, 100% { opacity: 1; filter: brightness(1); }
          50% { opacity: 0.95; filter: brightness(1.15); }
        }
        #glitch-title {
          animation: subtle-flicker 8s infinite ease-in-out;
        }

        @keyframes scrollDot {
          0% { transform: translateY(0); opacity: 1; }
          70% { transform: translateY(16px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-scrollDot {
          animation: scrollDot 1.8s infinite ease-in-out;
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 1; filter: brightness(1); }
          50% { opacity: 0.85; filter: brightness(1.3); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
          @keyframes glow-text {
  0%, 100% {
    filter: drop-shadow(0 0 6px rgba(0, 255, 242, 0.4))
            drop-shadow(0 0 12px rgba(255, 0, 255, 0.2));
  }
  50% {
    filter: drop-shadow(0 0 12px rgba(0, 255, 242, 0.6))
            drop-shadow(0 0 20px rgba(255, 0, 255, 0.4));
  }
}

.animate-glow-text {
  animation: glow-text 3s ease-in-out infinite;
}

      `}</style>
    </section>
  );
};

export default Hero;
