import "./contacts.scss";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import telegram from "../../image/telegram.png";
import gmail from "../../image/gmail.png";
import whatsapp from "../../image/whatsapp.png";

const Contacts = () => {
  return (
    <div className="contacts">
      <div className="container">
        <div className="contacts__inner">
          <h2 className="contacts__title">Контакты</h2>
          <p className="contacts__item">
            <img className="img-telegram" src={whatsapp} alt="telegram" />
            <span className="contacts__link">
              <span className="contacts__link-dark">Телефон/whatsApp: </span>
              8-909-215-38-30
            </span>
          </p>
          <p className="contacts__item">
            <img src={gmail} alt="telegram" />
            <span className="contacts__link">
              <span className="contacts__link-dark"> Почта: </span>
              eugenyloy.work@yandex.com
            </span>
          </p>
          <p className="contacts__item">
            <img src={telegram} alt="telegram" />
            <span className="contacts__link">
              <span className="contacts__link-dark">Telegram: </span>
              @LoyEvgeny
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
