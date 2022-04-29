function Card({ card, onCardClick }) {
    function handleCardClick() {
        onCardClick(card);
    }
  return (
    <div className="card">
      <button className="card__button-card-detele"></button>
      <img
        className="card__image"
        alt="Карачаевск"
        src={card.link}
        width="100%"
        onClick={handleCardClick}
      />
      <div className="card__container">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__heartContainer">
          <button className="card__heart" type="button"></button>
          <span className="card__heartCounter">{card.likes.length}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
