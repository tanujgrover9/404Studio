import { Canvas } from "@react-three/fiber";
import { Planet } from "../components/Planet";
import { Environment, Float, Lightformer } from "@react-three/drei";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col justify-end min-h-screen overflow-hidden "
    >
      {/* 🎥 Futuristic Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-50 opacity-100"
        src="/public/assets/189164-884987248_small.mp4"
      ></video>

      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,#00fff29d_0%,transparent_50%),radial-gradient(circle_at_70%_60%,#ff0077a1_0%,transparent_50%)] mix-blend-screen z-[-40]" /> */}

      {/* <div className="absolute inset-0 overflow-hidden z-[-30] opacity-[0.15] pointer-events-none">
        <div className="absolute inset-0 w-full h-full bg-[linear-gradient(90deg,transparent_95%,#00f9ff_95%),linear-gradient(0deg,transparent_95%,#ff00ff_95%)] bg-[length:40px_40px] animate-gridMove"></div>
      </div> */}

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent z-[-20]" />

      <div className="relative z-10 text-white px-6 sm:px-12 md:px-20 text-center md:text-left select-none">
        <div className="max-w-5xl mx-auto">
          {/* Subtitle */}
          <p className="text-sm sm:text-base uppercase tracking-[0.3em] text-white/60 mb-5">
            No Bugs Found
          </p>

          {/* Title */}
          <h1
            className="relative font-extrabold tracking-tight leading-[0.9] text-white text-[4rem] sm:text-[6rem] md:text-[9rem] lg:text-[11rem] xl:text-[13rem]"
            id="glitch-title"
          >
            <span className="glitch-text relative inline-block drop-shadow-[0_4px_15px_rgba(0,0,0,0.3)] cursor-pointer transition-all duration-300 hover:scale-[1.02]">
              404
            </span>{" "}
            <span className="font-light text-white/70 bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-fuchsia-400 animate-shimmer">
              Studio
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 text-base sm:text-lg md:text-xl leading-relaxed text-white/85 max-w-2xl mx-auto md:mx-0">
            I help growing brands and startups gain an unfair advantage through
            premium, results-driven websites and web apps.
          </p>

          {/* Signature */}
          <p className="mt-10 text-white/60 italic tracking-wide text-sm">
            — by Anshuman Singh
          </p>
        </div>
      </div>

      {/* ✨ Style Section */}
      <style>{`
        /* ⚡ Glitch effect */
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

        /* ✨ Shimmer on "Studio" */
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .animate-shimmer {
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
        }

        /* 🌠 Subtle flicker effect for title */
        @keyframes subtle-flicker {
          0%, 100% { opacity: 1; filter: brightness(1); }
          50% { opacity: 0.95; filter: brightness(1.15); }
        }
        #glitch-title {
          animation: subtle-flicker 8s infinite ease-in-out;
        }

        /* 🕹️ Moving neon grid background */
        @keyframes gridMove {
          0% { background-position: 0 0; }
          100% { background-position: 40px 40px; }
        }
        .animate-gridMove {
          animation: gridMove 12s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
