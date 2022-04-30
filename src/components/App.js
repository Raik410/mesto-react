import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(
    false
  );
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(
    false
  );
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(
    false
  );
  const [selectedCard, setSelectedCard] = React.useState(null);

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  };

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  };

  function handleCardClick(data) {
    setSelectedCard(data);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        name="-avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        button="Сохранить"
        onClose={closeAllPopups}
        children={
          <>
            <input
              className="popup__input-name popup__input-name_type_user-job"
              placeholder="Ссылка на картинку"
              name="profileAvatar"
              type="url"
              required
              id="avatar-input"
            />
            <span className="popup__input-error avatar-input-error"></span>
          </>
        }
      />
      <PopupWithForm
        name="_type_delete-card"
        title="Вы уверены?"
        button="Да"
        children={
          <>
          </>
        }
      />
      <PopupWithForm
        name="-image"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        button="Сохранить"
        onClose={closeAllPopups}
        children={
          <>
            <input
              autoFocus
              className="popup__input-name"
              name="text"
              placeholder="Название"
              type="text"
              minLength="2"
              maxLength="30"
              required
              id="card-name-input"
            />
            <span className="popup__input-error card-name-input-error"></span>
            <input
              className="popup__input-name popup__input-name_type_user-job"
              placeholder="Ссылка на картинку"
              name="link"
              type="url"
              required
              id="url-input"
            />
            <span className="popup__input-error url-input-error"></span>
          </>
        }
      />
      <PopupWithForm
        name="-edit"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        button="Сохранить"
        children={
          <>
            <input
              autoFocus
              className="popup__input-name"
              name="username"
              placeholder="Введите имя"
              type="text"
              minLength="2"
              maxLength="40"
              required
              id="name-input"
            />
            <span className="popup__input-error name-input-error"></span>
            <input
              className="popup__input-name popup__input-name_type_user-job"
              placeholder="Введите вашу профессию"
              name="about"
              type="text"
              minLength="2"
              maxLength="200"
              required
              id="job-input"
            />
            <span className="popup__input-error job-input-error"></span>
          </>
        }
      />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
