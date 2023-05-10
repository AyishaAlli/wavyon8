import "./Card.css";
import articles from '../../data/articles'

function ArticleCard() {
  

  return (
    <>
      <div className="articleContainer">
        <h1 className="articleMainTitle">Articles</h1>
        {articles.map((card, index) => (
          <figure className="articleFigure">
            <img className="articleImage" src={card.imageSrc} width={450} height={200} alt={card.alt} />

             <figcaption className="articleFigureCaption">
              <h3 className="articleTitle">{card.title}</h3>
              <h4 className="authorName">By {card.author}</h4>
              <p>
                {card.exert}
              </p>
              <a className="articleButton" href={card.link} target={"_blank"}>
                Read More
              </a>
            </figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}

export default ArticleCard;
