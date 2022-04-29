function PopupWithForm(props) {
    return (
        <>
    <div className={`popup popup${props.name} ${props.isOpen ? 'popup__open' : ''}`}>
      <div className="popup__container">
        <h2 className="popup__title">{props.title}</h2>
        <button className="popup__botton-close" onClick={props.onClose} type="button">
        </button>
        <form className="popup__form" name={`${props.name}`} noValidate>
          {props.children}
        </form>
      </div>
    </div>
    </>
    )
}

export default PopupWithForm;