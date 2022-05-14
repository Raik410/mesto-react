import React, { useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../context/CurrentUserContext";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const [avatar, setAvatar] = React.useState("");
  const userContext = React.useContext(CurrentUserContext);
  const input = React.useRef();

  function handleChangeAvatar() {
    setAvatar(input.current.value);
  }

  useEffect(() => {
    setAvatar(userContext.avatar);
  }, [userContext]);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatar,
    });
  }

  return (
    <PopupWithForm
      name="-avatar"
      title="Обновить аватар"
      isOpen={isOpen}
      button="Сохранить"
      onClose={onClose}
      onSubmit={handleSubmit}
      children={
        <>
          <input
            className="popup__input-name popup__input-name_type_user-job"
            placeholder="Ссылка на картинку"
            name="profileAvatar"
            type="url"
            required
            id="avatar-input"
            ref={input}
            onChange={handleChangeAvatar}
          />
          <span className="popup__input-error avatar-input-error"></span>
        </>
      }
    />
  );
}

export default EditAvatarPopup;
