import { Canvas } from "@react-three/fiber";
import { Planet } from "../components/Planet";
import { Environment, Float } from "@react-three/drei";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col justify-end min-h-screen overflow-hidden bg-black z-1"
    >
      <img
        src="/assets/backgrounds/pexels-bruthethe-1910225.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover -z-50 opacity-90"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-0"></div>

      <div className="absolute left-5 top-115 -translate-y-1/2 z-20">
        <button
          onClick={() => {
            const section = document.getElementById("contact");
            section?.scrollIntoView({ behavior: "smooth" });
          }}
          className="bg-red-500 text-white font-semibold px-6 py-3 transform -rotate-90 origin-left hover:bg-yellow-400 transition-all"
        >
          Get Quote
        </button>
      </div>

      <div className="relative z-10 text-white px-6 sm:px-12 md:px-20 text-center md:text-left select-none pb-24 sm:pb-28 md:pb-32 lg:pb-36">
        <div className="max-w-5xl mx-auto">
          <h1
            className="relative font-extrabold tracking-tight leading-[0.9] text-white text-[7rem] sm:text-[6rem] md:text-[10rem] lg:text-[12rem] xl:text-[13rem] drop-shadow-[0_0_40px_rgba(0,255,255,0.3)]"
            id="glitch-title"
          >
            <span className="glitch-text relative inline-block cursor-pointer transition-all duration-300 hover:scale-[1.02]">
              404
            </span>{" "}
            <div className="font-light text-white/70 bg-clip-text bg-gradient-to-r from-red-600 via-blue-600 to-yellow-600 animate-shimmer">
              Studio
            </div>
          </h1>

          <p className="mt-8 text-base sm:text-lg md:text-xl leading-relaxed text-white/85 max-w-2xl mx-auto md:mx-0 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            I craft next-gen web experiences where design meets performance —
            blending creativity, motion, and code to help brands lead in the
            digital age.
          </p>
        </div>
      </div>

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

        @keyframes glitch-anim {
          0% { clip: rect(20px, 9999px, 85px, 0); transform: skew(0.5deg); }
          50% { clip: rect(15px, 9999px, 100px, 0); transform: skew(0.6deg); }
          100% { clip: rect(5px, 9999px, 60px, 0); transform: skew(0.2deg); }
        }
        @keyframes glitch-anim2 {
          0% { clip: rect(5px, 9999px, 60px, 0); transform: skew(0.3deg); }
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

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
