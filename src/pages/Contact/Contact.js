import "./Contact.css";
import { FaLinkedin, FaInstagram, FaGithub, FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useEffect, useState } from "react";
import emailjs from 'emailjs-com';
import ScrambleText from "../../components/ScrambleText";

function Contact() {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    const timer = setTimeout(() => {
      document.body.style.overflowY = "auto";
    }, 500);
    return () => {
      document.body.style.overflowY = "auto";
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
        <ScrambleText text={"💬 Contact Me"} duration={1000} />
      </h2>
      <p className="contact-subtitle">
        Let's connect! Whether you have a project idea or a question, I'm always
        open to new opportunities and collaborations.
      </p>

      <div className="contact-wrapper">
        <form
          className="contact-form"
          onSubmit={sendEmail}
          method="POST"
          encType="text/plain"
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
          />
          <button type="submit">Send</button>
        </form>

        <div className="contact-socials">
          <div className="email-copy-wrapper">
            <button onClick={handleCopyEmail} className="copy-btn" title="Copy e-mail" >
              <MdEmail />
            </button>
            {copied && <span className="copied-msg">📋 Copied!</span>}
          </div>
          <a
            href="https://www.linkedin.com/in/mustafa-mustafa-/"
            target="https://www.linkedin.com/in/mustafa-mustafa-/"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/_mustafa_mstf/"
            target="https://www.instagram.com/_mustafa_mstf/"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/FTMustafa"
            target="https://github.com/FTMustafa"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.facebook.com/mustafailyas.mustafa"
            target="https://www.facebook.com/mustafailyas.mustafa"
            rel="noreferrer"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
