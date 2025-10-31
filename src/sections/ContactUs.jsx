"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import emailjs from "@emailjs/browser";

gsap.registerPlugin(ScrollTrigger);

const ContactUs = () => {
  const sectionRef = useRef(null);
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);

  const text = `Got a project in mind or a collaboration idea?
  Let's create something that blends design and logic seamlessly.`;

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-element", {
        y: 100,
        opacity: 0,
        delay: 0.3,
        duration: 1,
        stagger: 0.25,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_o33tq6s", // your EmailJS service ID
        "template_en990t8", // your EmailJS template ID
        formRef.current,
        "jkqHB_WcxVTGFUtTO" // your EmailJS public key
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          formRef.current.reset();
          setIsSending(false);
        },
        (error) => {
          alert("❌ Something went wrong. Please try again later.");
          console.error(error);
          setIsSending(false);
        }
      );
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="flex flex-col justify-between min-h-screen bg-black text-white"
    >
      {/* Header */}
      <AnimatedHeaderSection
        subTitle={"Let's Build Something Meaningful"}
        title={"Make it"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />

      {/* Contact Form */}
      <div className="px-10 flex justify-center items-center flex-1">
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="contact-element w-full max-w-2xl flex flex-col gap-10 py-12 px-8 border border-white/20 rounded-2xl bg-black/30 backdrop-blur-md"
        >
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="user_name"
              className="uppercase tracking-widest text-sm text-white/70"
            >
              Name
            </label>
            <input
              type="text"
              name="user_name"
              id="user_name"
              required
              placeholder="Enter your name"
              className="bg-transparent border-b border-white/40 py-3 text-white focus:border-white outline-none transition-all duration-300 placeholder:text-white/40"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="user_email"
              className="uppercase tracking-widest text-sm text-white/70"
            >
              Email
            </label>
            <input
              type="email"
              name="user_email"
              id="user_email"
              required
              placeholder="Enter your email"
              className="bg-transparent border-b border-white/40 py-3 text-white focus:border-white outline-none transition-all duration-300 placeholder:text-white/40"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="uppercase tracking-widest text-sm text-white/70"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              required
              placeholder="Write your message..."
              className="bg-transparent border-b border-white/40 py-3 text-white focus:border-white outline-none transition-all duration-300 placeholder:text-white/40 resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSending}
            className={`uppercase tracking-widest text-sm border border-white/50 rounded-full py-4 mt-6 transition-all duration-300 hover:bg-white hover:text-black ${
              isSending ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

     
    </section>
  );
};

export default ContactUs;
