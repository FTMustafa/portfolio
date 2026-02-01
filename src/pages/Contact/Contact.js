import "./Contact.css";
import { FaLinkedin, FaInstagram, FaGithub, FaFacebook } from "react-icons/fa";
import { MdEmail, MdContentCopy } from "react-icons/md"; // Copy ikonu ekledim
import { useEffect, useState } from "react";
import emailjs from 'emailjs-com';
import ScrambleText from "../../components/ScrambleText";

function Contact() {
  useEffect(() => {
    // Scroll bar fix
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      document.body.style.overflow = originalStyle;
    }, 500);
    return () => {
      document.body.style.overflow = originalStyle;
      clearTimeout(timer);
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_z45de8k', 'template_zfrbyi7', e.target, 'A1mZ4PiuJDeEHO3eO')
      .then(
        () => alert("Mesaj gönderildi 🎉"),
        (error) => alert("Bir hata oluştu 😢")
      );

    e.target.reset();
  };

  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("mustafamustafatw@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="contact fade-in">
      <h2 className="contact-title">
        <ScrambleText text={"Contact Me"} duration={1000} />
      </h2>
      <p className="contact-subtitle">
        Let's connect! Whether you have a project idea or a question, I'm always
        open to new opportunities.
      </p>

      <div className="contact-wrapper">
        {/* SOL TARAF: FORM */}
        <form
          className="contact-form"
          onSubmit={sendEmail}
          method="POST"
          encType="text/plain"
        >
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message..."
            required
          />
          <button type="submit">Send Message</button>
        </form>

        {/* SAĞ TARAF: SOSYAL LİNKLER */}
        <div className="contact-socials">
          
          <div className="email-copy-wrapper">
            <button onClick={handleCopyEmail} className="copy-btn" title="Copy Email">
              <MdEmail />
              <span>mustafamustafatw@gmail.com</span>
              <MdContentCopy style={{ marginLeft: "auto", fontSize: "0.9em", opacity: 0.7 }} />
            </button>
            {copied && <span className="copied-msg">Copied!</span>}
          </div>

          <a
            href="https://www.linkedin.com/in/mustafa-mustafa-/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
          
          <a
            href="https://github.com/FTMustafa"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.instagram.com/_mustafa_mstf/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
            <span>Instagram</span>
          </a>

          <a
            href="https://www.facebook.com/mustafailyas.mustafa"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook />
            <span>Facebook</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;