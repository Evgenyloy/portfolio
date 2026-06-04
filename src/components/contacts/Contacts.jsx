import "./contacts.scss";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

const Contacts = () => {
  return (
    <div className="contacts">
      <div className="container">
        <div className="contacts__inner">
          <h2 className="contacts__title">Контакты</h2>
          <p className="contacts__item">
            <span className="contacts__link">Телефон: 8-909-215-38-30</span>
          </p>
          <p className="contacts__item">
            <span className="contacts__link">
              Почта: eugenyloy.work@yandex.com
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
