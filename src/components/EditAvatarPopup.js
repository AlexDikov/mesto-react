import PopupWithForm from "./PopupWithForm";
import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function EditAvatarPopup(props) {
  const [avatar, setAvatar] = React.useState("");
  const avatarRef = React.useRef();

  const currentUser = React.useContext(CurrentUserContext);

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar(avatar);
  }

  React.useEffect(() => {
    setAvatar(currentUser.avatar);
  }, [currentUser]);

  function handleAvatarChange(e) {
    setAvatar(e.target.value);
  }

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="edit-avatar"
      isOpen={props.isOpen && "popup_opened"}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        className="popup__input popup__input_field_job"
        type="url"
        name="place-link"
        placeholder="Ссылка на фотографию"
        required
        ref={avatarRef}
        onChange={handleAvatarChange}
      />
      <span className="popup__input-error popup__input-error_second popup__input-error_second-short"></span>
      <button className="popup__save-button" type="submit" onSubmit={handleSubmit}>
        Сохранить
      </button>
    </PopupWithForm>
  );
}
