import { Phone, Mail, MessageCircle } from "lucide-react";
export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-gradient-to-br from-indigo-50 to-emerald-50 dark:from-gray-900 dark:to-gray-800"
    >
      {" "}
      <div className="max-w-4xl mx-auto text-center">
        {" "}
        {/* Heading */}{" "}
        <h2 className="text-4xl md:text-5xl font-bold mb-6"> Get In Touch </h2>{" "}
        {/* Subtext */}{" "}
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12">
          {" "}
          I'm open to opportunities, collaborations, or just a friendly hello
          👋{" "}
        </p>{" "}
        {/* Buttons */}{" "}
        <div className="flex flex-wrap justify-center gap-5">
          {" "}
          {/* Call */}{" "}
          <a
            href="tel:+917994424703"
            className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-gray-700 transition duration-300 shadow-md hover:shadow-xl"
          >
            {" "}
            <Phone size={18} /> Call{" "}
          </a>{" "}
          {/* WhatsApp */}{" "}
          <a
            href="https://wa.me/917994424703?text=Hi%20Abhiram,%20I%20visited%20your%20portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-green-400 text-white rounded-xl font-medium hover:bg-gray-700 transition duration-300 shadow-md hover:shadow-xl"
          >
            {" "}
            <MessageCircle size={18} /> WhatsApp{" "}
          </a>{" "}
          {/* Email */}{" "}
          <a
            href="mailto:abhiramkrishna286@gmail.com"
            className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-700 transition duration-300 shadow-md hover:shadow-xl"
          >
            {" "}
            <Mail size={18} /> Email{" "}
          </a>{" "}
          {/* GitHub */}{" "}
          <a
            href="https://github.com/abhiram1208/abhiram1208"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-black text-white rounded-lg font-semibold hover:bg-gray-700 transition shadow-lg"
          >
            {" "}
            GitHub{" "}
          </a>{" "}
          {/* LinkedIn */}{" "}
          <a
            href="https://www.linkedin.com/in/abhiramkrishna286/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-gray-700 transition shadow-lg"
          >
            {" "}
            LinkedIn{" "}
          </a>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
