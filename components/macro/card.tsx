import { Article } from "@/types/user";

interface CardProps {
    article: Article;
  }
const Card: React.FC<CardProps> = ({ article }) => {
    return (
      <div className="card">
        <div className="card-image">
          <img src={article.urlToImage} alt={article.title} />
        </div>
        <div className="card-content">
          <div className="card-title">{article.title}</div>
          <div className="card-author">by {article.author}</div>
          <div className="card-description">{article.description}</div>
          <div className="card-source">
            Source: {article.source.name} ({article.publishedAt})
          </div>
          <a href={article.url} className="card-link" target="_blank" rel="noopener noreferrer">
            Read more
          </a>
        </div>
      </div>
    );
  };
  
  export default Card;