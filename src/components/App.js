import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import "./App.css";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleCloseAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        title="Редактировать профиль"
        name="profile-edit"
        isOpen={isEditProfilePopupOpen && "popup_opened"}
        onClose={handleCloseAllPopups}
      >
        <input
          className="popup__input popup__input_field_name"
          type="text"
          name="name"
          placeholder="Имя"
          required
          minLength="2"
          maxLength="40"
        />
        <span className="popup__input-error popup__input-error_first"></span>
        <input
          className="popup__input popup__input_field_job"
          type="text"
          name="about"
          placeholder="Профессия"
          required
          minLength="2"
          maxLength="200"
        />
        <span className="popup__input-error popup__input-error_second"></span>
        <button className="popup__save-button" type="submit">
          Сохранить
        </button>
      </PopupWithForm>
      <PopupWithForm
        title="Новое место"
        name="add-card"
        isOpen={isAddPlacePopupOpen && "popup_opened"}
        onClose={handleCloseAllPopups}
      >
        <input
          className="popup__input popup__input_field_name"
          type="text"
          name="place"
          placeholder="Название"
          required
          minLength="2"
          maxLength="40"
        />
        <span className="popup__input-error popup__input-error_first"></span>
        <input
          className="popup__input popup__input_field_job"
          type="url"
          name="link"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="popup__input-error popup__input-error_second"></span>
        <button className="popup__save-button" type="submit">
          Создать
        </button>
      </PopupWithForm>
      <PopupWithForm
        title="Обновить аватар"
        name="edit-avatar"
        isOpen={isEditAvatarPopupOpen && "popup_opened"}
        onClose={handleCloseAllPopups}
      >
        <input
          className="popup__input popup__input_field_job"
          type="url"
          name="place-link"
          placeholder="Ссылка на фотографию"
          required
        />
        <span className="popup__input-error popup__input-error_second popup__input-error_second-short"></span>
        <button className="popup__save-button" type="submit">
          Сохранить
        </button>
      </PopupWithForm>
      <PopupWithForm title="Вы уверены?" name="delete-card" btnText="Да">
        <button className="popup__save-button" type="submit">
          Да
        </button>
      </PopupWithForm>
      {selectedCard && <ImagePopup card={selectedCard} onClose={handleCloseAllPopups} />}
    </>
  );
}

export default App;
