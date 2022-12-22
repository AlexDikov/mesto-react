import React from "react";
import { api } from "../utils/api";
import Card from "./Card";

export default function Main(props) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getProfile().then((data) => {
      setUserName(data.name);
      setUserDescription(data.about);
      setUserAvatar(data.avatar);
    });
  }, []);

  React.useEffect(() => {
    api.getInitialCards().then((data) => {
      setCards(data);
    });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <img className="profile__avatar" src={userAvatar} alt="аватар" />
          <button
            onClick={props.onEditAvatar}
            className="profile__edit-avatar-button"
            type="button"
            aria-label="редактировать аватар"
          ></button>
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <button
              onClick={props.onEditProfile}
              className="profile__edit-button"
              type="button"
              aria-label="редактировать профиль"
            ></button>
            <p className="profile__job">{userDescription}</p>
          </div>
        </div>
        <button
          onClick={props.onAddPlace}
          className="profile__add-button"
          type="button"
          aria-label="добавить фото"
        ></button>
      </section>
      <section className="elements">
        {cards.map((card, i) => (
          <Card key={i} card={card} onCardClick={props.onCardClick} />
        ))}
      </section>
    </main>
  );
}
