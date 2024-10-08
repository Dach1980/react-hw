import './Title.css';
export default function Title({ title }) {
  return (
    <h3 className="Widget-title">
      <a href="#" className="Widget-title__link">
        {title}
      </a>
    </h3>
  );
}