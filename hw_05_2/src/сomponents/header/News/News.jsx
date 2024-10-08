import './News.css';
export default function News({ newsCategories, newsNames }) {
  return (
    <div className="News">
      <nav className="News-nav">
        <ul className="News-nav-menu">
          {newsCategories.map((category, index) => {
            return (
              <li
                className={`News-nav-menu__item ${index === 0 ? 'active' : ''}`}
                key={index}
              >
                <a href="#" className="News-nav-menu__item-link">
                  {category}
                </a>
              </li>
            );
          })}
        </ul>
        <span className="News-current-datetime">31 июля, среда 02:32</span>
      </nav>
      <div className="News-content">
        <ul>
          {newsNames.map((name, index) => {
            return (
              <li className="News-content__item" key={index}>
                {name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}