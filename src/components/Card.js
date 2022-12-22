export default function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <div className="element">
      <button className="element__delete-button" type="button" aria-label="удалить карточку"></button>
      <img className="element__image" onClick={handleClick} src={props.card.link} alt="" />
      <div className="element-place">
        <h2 className="element-place__name">{props.card.name}</h2>
        <div className="element-place__like">
          <button className="element-place__like-button" type="button" aria-label="нравится"></button>
          <p className="element-place__like-counter">0</p>
        </div>
      </div>
    </div>
  );
}
