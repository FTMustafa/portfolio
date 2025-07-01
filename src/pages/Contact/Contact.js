import "./Contact.css";
import { useEffect } from "react";

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
  return <div className="contact fade-in">Contact Page</div>;
}

export default Contact;
