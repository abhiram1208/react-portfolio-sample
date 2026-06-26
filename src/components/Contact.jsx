import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function Contact() {
  const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

 emailjs.sendForm(
  import.meta.env.VITE_SERVICE_ID,
  import.meta.env.VITE_TEMPLATE_ID,
  form.current,
  import.meta.env.VITE_PUBLIC_KEY
).then(
      () => {
        alert("Message sent successfully 🚀");
        form.current.reset(); 
      },
      (error) => {
        console.log(error.text);
        alert("Something went wrong ❌");
      }
    );
};
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-b from-[#020617] to-[#0f172a]"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* 🔥 Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-4 text-white"
        >
          Get In <span className="text-cyan-400">Touch</span>
        </motion.h2>

        <p className="text-gray-400 mb-12">
          Have a project idea or want to work together? Let’s connect 🚀
        </p>

        {/* 📩 FORM */}
     <motion.form
  ref={form}
  onSubmit={sendEmail}
  className="max-w-md mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 space-y-4"
>
  <input
    type="text"
    name="user_name"
    placeholder="Your Name"
    required
    className="w-full px-4 py-2 rounded-lg bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
  />

  <input
    type="email"
    name="user_email"
    placeholder="Your Email"
    required
    className="w-full px-4 py-2 rounded-lg bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
  />

  <textarea
    name="message"
    rows="3"
    placeholder="Your Message"
    required
    className="w-full px-4 py-2 rounded-lg bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
  ></textarea>

  <button
    type="submit"
    className="w-full flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-black font-medium py-2 rounded-lg"
  >
    <Send size={18} />
    Send Message
  </button>
</motion.form>

        {/* 🔗 SOCIAL LINKS */}
        <div className="flex justify-center gap-6 mt-10">
          <a
            href="mailto:abhiramkrishna286@gmail.com"
            className="text-gray-400 hover:text-cyan-400 transition"
          >
            <Mail size={28} />
          </a>

          <a
            href="https://github.com/abhiram1208"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>

          <a
            href="https://linkedin.com/in/abhiramkrishna286"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
        </div>
      </div>
    </section>
  );
}
