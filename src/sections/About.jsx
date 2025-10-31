import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  const text = `Passionate about clean architecture
    I build scalable, high-performance solutions
    from prototype to production`;
  const aboutText = `Fueled by design, driven by motion, and slightly obsessed with clean code—I build interfaces that *feel* alive. From smooth GSAP transitions to handcrafted React components, I make pixels move with purpose.  
When I’m not lost in a layout:
● Experimenting with new UI patterns and playful micro-interactions  
● Turning rough Figma sketches into buttery-smooth experiences  
● Sharing frontend discoveries and weird CSS tricks with the community  
● Designing to lo-fi beats while components come to life on screen`;  

  const imgRef = useRef(null);
  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });

    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });
  });
  return (
    <section id="about" className="min-h-screen bg-black rounded-b-4xl">
      <AnimatedHeaderSection
        subTitle={"Cod with purpose, Built to scale"}
        title={"About"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
     <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
  <video
    ref={imgRef}
    src="/assets/Recording 2025-10-29 093357.mp4" 
    className="w-md rounded-3xl object-cover shadow-lg"
    autoPlay
    loop
    muted
    playsInline
  />
  <AnimatedTextLines text={aboutText} className={"w-full"} />
</div>

    </section>
  );
};

export default About;
