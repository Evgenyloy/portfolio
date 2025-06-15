import "./contacts.scss";

import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
const Contacts = () => {
  return (
    <div className="contacts">
      <div className="container">
        <div className="contacts__inner">
          <h2 className="contacts__title">
            For any questions, <br /> you can contact me by email or phone:
          </h2>
          <p className="contacts__item">
            <HiOutlineMail className="contacts__icon" />
            <a
              href="mailto:evgenyloy@gmail.com"
              className="contacts__link"
              aria-label="Send email to Evgeny"
              rel="noopener noreferrer"
            >
              evgenyloy@gmail.com
            </a>
          </p>
          <p className="contacts__item">
            <BsTelephone className="contacts__icon" />
            <a
              href="tel:+79092153830"
              className="contacts__link"
              aria-label="Call Evgeny"
              rel="noopener noreferrer"
            >
              +7-909-215-38-30
            </a>
          </p>
          <p className="contacts__item">
            <AiFillGithub className="contacts__icon" />
            <a
              href="https://github.com/Evgenyloy"
              className="contacts__link"
              aria-label="Visit Evgeny's GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
