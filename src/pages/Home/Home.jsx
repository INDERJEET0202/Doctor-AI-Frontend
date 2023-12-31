import "./Home.css";

import { Link } from "react-router-dom";
import FAQSection from "./../../components/FAQSection/FAQSection.jsx";
// import faqData from '/src/assets/json-data/faqData.json';
import services_menu from "./../../assets/json-data/services_menu.json";
import heroImage from "./../../assets/Images/doctor-hero.svg";
import waveImg from "./../../assets/Images/wave.svg";
import gif from "./../../assets/Images/doctor-application.gif";
import Chat from "../../components/Chat/Chat";
import { useEffect, useState } from "react";
import Review from "../../components/Review/Review";

const Home = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [appointmentId, setAppointmentId] = useState(null);
  useEffect(() => {
    const appointmentId = localStorage.getItem("doctorAI_pop_up");
    if (appointmentId) {
      setAppointmentId(appointmentId);
      setIsPopupOpen(true);
    }
  }, []);

  const closePopup = () => {
    setIsPopupOpen(false);
    localStorage.removeItem("doctorAI_pop_up");
  };

  return (
    <>
      {isPopupOpen && (
        <Review onClose={closePopup} appointmentId={appointmentId} />
      )}
      <div className="home">
        {/* Top Body */}
        <div className="topBody_container">
          {/* hero section */}
          <div className="topBody">
            <img src={heroImage} alt="" />
            <div className="hero-text">
              <h1>Empowering Healthcare through Artificial Intelligence</h1>
              <p>
                Detect. Connect. Heal. Seamlessly schedule doctor meetings after
                disease detection, unlocking your path to optimal health.
              </p>
              <Link type="button" to="/appointment" className="appointment-btn">
                Make Appointment
              </Link>
            </div>
          </div>
          <img className="wave-img" src={waveImg} alt="" />
        </div>
        {/* Models Section */}
        <div className="modelSection">
          {/* Models */}
          <div>
            <p>
              <span>Health At Your FingerTips.</span> <br /> Check your health
              with our latest AI Technology
            </p>
            <img src={gif} className="gifimg" />
          </div>
          <div className="models">
            {services_menu.items.map((item, index) => {
              if (index !== services_menu.items.length - 1) {
                return (
                  <button key={index} className="CtScan">
                    <img src={item.src} />
                    <p>{item.title}</p>
                  </button>
                );
              }
            })}
          </div>
        </div>
        <hr />
        <div className="chat_container">
          <Chat />
        </div>
        <div className="bottomBody">
          {/* About */}
          <div className="faq">
            <h1>Have a question ?</h1>
            <FAQSection faqData={
              [
                {
                  "question": "What is Doctor.AI ?",
                  "answer": "Doctor.AI is a chatbot that can help you with your medical queries. It can also help you to book a appointment with India's Top Doctors."
                },
                {
                  "question": "How can I use Doctor.AI ?",
                  "answer": "You can use Doctor.AI by clicking on the services menu on top navigation bar, and choose your what disease you want to detect. Then you can upload your report image on the redirected page and get your respective output."
                },
                {
                  "question": "How can I book a appointment with a doctor ?",
                  "answer": "You can book a appointment with a doctor by clicking on the Make Appointment button, select the time, date and a doctor whom you want, to diagnose you. Then finally select Book Appointment button to book your appointment."
                }
              ]
            } />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
