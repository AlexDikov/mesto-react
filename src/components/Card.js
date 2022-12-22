export default function Card(props) {
  const {
    card: { name, link, likes },
  } = props;

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <div className="element">
      <button className="element__delete-button" type="button" aria-label="удалить карточку"></button>
      <img className="element__image" style={{ objectFit: "cover" }} onClick={handleClick} src={link} alt={name} />
      <div className="element-place">
        <h2 className="element-place__name">{name}</h2>
        <div className="element-place__like">
          <button className="element-place__like-button" type="button" aria-label="нравится"></button>
          <p className="element-place__like-counter">{likes.length}</p>
        </div>
      </div>
    </div>
  );
}
