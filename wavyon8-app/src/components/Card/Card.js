import "./Card.css";

import carnival from "../../images/homepage/carnival.png";
import collage from "../../images/homepage/collage-skaters.jpeg";
import skater from "../../images/homepage/skater.webp";

function ArticleCard() {
  const articles = [
    {
      imageSrc: carnival,
      alt: "article logo",
      title:
        "South London roller skaters enjoy festival spirit despite cancelled carnival",
      author: "Gabriela Jimenez - In your Area",
      exert:
        "Their carnival may have been cancelled this year, and the rainy weather and cloudy skies failed to impress, but this did not stop roller skaters last week in London from going out in striking carnival outfits and carrying flags that represent their origins...",
      link: "https://www.inyourarea.co.uk/news/south-london-roller-skaters-enjoy-festival-spirit-despite-cancelled-carnival/",
    },
    {
      imageSrc: carnival,
      alt: "article logo",
      title:
        "Skating is booming!",
      author: "Andrew Cleminson - ASBO Magazine",
      exert:
        "Did you every roller-skate when you were a kid? If you did, you may like to give it another go by joining one of the fastest growing skate groups – @wavyon8 – They deliver UK flavoured roller-skating events...",
      link: "https://www.asbomagazine.com/2022/01/31/skatings-booming/",
    },
    // {
    //   imageSrc: collage,
    //   alt: "article logo",
    //   title: "South London roller skaters seek new home",
    //   author: "Andrew Cleminson - In your Area",
    //   exert:
    //     "It’s a bright sunny Saturday, crowds have descended on Clapham Common, music is playing and everyone’s having fun. With restrictions easing, surely, there’s nothing unusual to see? In fact, there is, because @Wavyon8 have...",
    //   link: "https://www.inyourarea.co.uk/news/south-london-roller-skaters-seek-new-home/",
    // },
    {
      imageSrc: skater,
      alt: "article logo",
      title: "The London Rollerskating Scene",
      author: "Alice Zoo - Vogue Italia",
      exert:
        "Walking in the parks in London during the long months of the pandemic summer, every so often the anxious tension in the air would be cut through by the sudden rush of a group of roller skaters, zipping back and forth along the Serpentine at speed...",
      link: "https://www.vogue.it/fotografia/article/skaters-by-alice-zoo",
    },
  ];

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
