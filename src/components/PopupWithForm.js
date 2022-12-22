export default function PopupWithForm(props) {
  return (
    <div className={`popup popup_${props.name} ${props.isOpen}`}>
      <div className="popup__container">
        <h2 className="popup__title">{props.title}</h2>
        <form className="popup__form" id={props.name} noValidate>
          {props.children}
        </form>
        <button className="popup__close-button" onClick={props.onClose} type="button" aria-label="закрыть"></button>
      </div>
    </div>
  );
}