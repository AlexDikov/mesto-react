export default function ImagePopup(props) {
  return (
    <div className="popup popup_zoom-pic popup_opened">
      <figure className="popup__figure-container">
        <img className="popup__picture" src={props.card.link} alt="" />
        <figcaption className="popup__picture-cap">{props.card.name}</figcaption>
        <button className="popup__close-button" type="button" aria-label="закрыть" onClick={props.onClose}></button>
      </figure>
    </div>
  );
}
