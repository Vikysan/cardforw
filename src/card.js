

const Card = ({ word, english,show }) => {
  if( (english && !show) || ((!english && show)))
    return (
      <div >
        <h1>{word.word}</h1>
        <h2>{word.pronunciation}</h2>
      </div>
    );

  return (
    <div >
      <h1>{word.translation}</h1>
      <h2>{' '}</h2>
    </div>
  );
};

export default Card;
