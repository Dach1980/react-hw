import './List.css';
export default function TVProgramsList({ items }) {
  return (
    <ul className="Widget-list">
      {items.map(({ time, name, source }, index) => {
        return (
          <li className="Widget-list__item" key={index}>
            <span className="Widget-list__item-time">
              {time ? `${time}\u00A0\u00A0` : ''}
            </span>
            <span className="Widget-list__item-name">
              {name}
            </span>
            <span className="Widget-list__item-source">
              {source ? `\u00A0\u00A0${source}` : ''}
            </span>
          </li>
        );
      })}
    </ul>
  );
}