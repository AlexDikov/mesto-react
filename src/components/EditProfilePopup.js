import PopupWithForm from "./PopupWithForm";
import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function EditProfilePopup(props) {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  const currentUser = React.useContext(CurrentUserContext);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="profile-edit"
      isOpen={props.isOpen && "popup_opened"}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        className="popup__input popup__input_field_name"
        type="text"
        name="name"
        placeholder="Имя"
        required
        minLength="2"
        maxLength="40"
        value={name || ""}
        onChange={handleNameChange}
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
        value={description || ""}
        onChange={handleDescriptionChange}
      />
      <span className="popup__input-error popup__input-error_second"></span>
      <button className="popup__save-button" type="submit" onSubmit={handleSubmit}>
        Сохранить
      </button>
    </PopupWithForm>
  );
}
