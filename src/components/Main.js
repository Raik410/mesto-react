import React, { useEffect } from "react";
import api from "../utils/Api";
import Card from "./Card";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [cards, setCards] = React.useState([]);
  const [userName, setUserName] = React.useState([]);
  const [userDescription , setUserDescription ] = React.useState([]);
  const [userAvatar, setUserAvatar] = React.useState([]);

  useEffect(() => {
    api.getProfile()
    .then((userData) => {
      setUserName(userData.name);
      setUserDescription(userData.about);
      setUserAvatar(userData.avatar);
    })
    .catch(err => console.log(`Ошибка.....: ${err}`))
  }, []);

  useEffect(() => {
    api.getInitialCards()
    .then((userData) => {
      setCards(userData);
    })
    .catch(err => console.log(`Ошибка.....: ${err}`))
  }, []);

  return (
    <main>
      <section className="profile">
        <div className="profile__container">
          <div className="profile__image-wrapper">
            <img
              className="profile__image"
              onClick={onEditAvatar}
              src={userAvatar}
              alt="Жак-Ив кусто"
            />
          </div>
          <div className="profile__intro">
            <div className="profile__box">
              <h1 className="profile__title">{userName}</h1>
              <button
                className="profile__botton-edit"
                onClick={onEditProfile}
                type="button"
              ></button>
            </div>
            <p className="profile__subtitle">{userDescription}</p>
          </div>
        </div>
        <button
          className="profile__button-full"
          onClick={onAddPlace}
          type="button"
        ></button>
      </section>
      <section className="cards">
        {cards.map((card) => (
          <Card card={card} key={card._id} onCardClick={onCardClick} />
        ))}
      </section>
    </main>
  );
}

export default Main;
