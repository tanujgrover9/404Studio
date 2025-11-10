import { Canvas } from "@react-three/fiber";
import { Planet } from "../components/Planet";
import { Environment, Float } from "@react-three/drei";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

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

      <div className="absolute left-5 top-75 -translate-y-1/2 z-20">
        <button
          onClick={() => {
            const section = document.getElementById("contact");
            section?.scrollIntoView({ behavior: "smooth" });
          }}
          className="bg-red-500 text-white font-semibold px-6 py-3 transform rotate-90 origin-left hover:bg-yellow-400 transition-all"
        >
          Hire Us ➤
        </button>
      </div>

      <div className="relative z-10 text-white px-6 sm:px-12 md:px-20 text-center md:text-left select-none pb-24 sm:pb-28 md:pb-32 lg:pb-36">
        <div className="max-w-5xl mx-auto">
          <h1
            className="relative font-extrabold tracking-tight leading-[0.9] text-white text-[7rem] sm:text-[6rem] md:text-[10rem] lg:text-[12rem] xl:text-[13rem] drop-shadow-[0_0_40px_rgba(0,255,255,0.3)] mt-25"
            id="glitch-title"
          >
            <span className="glitch-text relative inline-block cursor-pointer transition-all duration-300 hover:scale-[1.02]">
              404
            </span>{" "}
            <div className="font-light text-white/70 bg-clip-text bg-gradient-to-r from-red-600 via-blue-600 to-yellow-600 animate-shimmer">
              Studio.
            </div>
          </h1>

          <p className="mt-8 text-base sm:text-lg md:text-xl leading-relaxed text-white/85 max-w-2xl mx-auto md:mx-0 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            Collaborate with 404 Studio and start your design journey
          </p>

          <div className="flex items-center justify-center md:justify-start mt-10 relative">
            <div className="flex -space-x-4">
              {[
                "https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_34.png",
                "https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_24.png",
                "https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_8.png",
                "https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_10.png",
                "https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_12.png",
              ].map((url, i) => (
                <img
                  key={i}
                  src={url}
                  alt={`User ${i + 1}`}
                  className="bg-white w-12 h-12 rounded-full border-2 border-white object-cover hover:scale-110 transition-transform duration-300"
                />
              ))}
            </div>

            <span className="ml-10 text-white/80 font-medium text-lg relative">
              Happy Collaborators
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 30"
                className="absolute -top-6 -left-12 w-16 text-pink-400"
              >
                <path
                  d="M10 20 C30 10, 70 10, 90 20"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M85 18 L90 20 L85 22"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </div>
        </div>

        <div className="absolute right-0 bottom-[-160] rotate-90 text-gray-400 text-sm tracking-widest">
          Scroll Down →
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
      `}</style>
    </section>
  );
};

export default Hero;
