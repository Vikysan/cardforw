const Card = ({ word, english, show }) => {
  if ((english && !show) || (!english && show))
    return (
      <div>
        <h1>{word.word}</h1>
        <h2>{word.pronunciation}</h2>
      </div>
    );

  return (
    <div>
      <h1 style={{ marginBottom: "92px" }}>{word.translation}</h1>
    </div>
  );
};

export default Card;
