import './Widgets.css';
export default function Widgets({ children }) {
  const column1 = [];
  const column2 = [];
  const column3 = [];

  children.forEach((widget, index) => {
    if (index % 3 === 0) {
      column1.push(widget);
    } else if (index % 3 === 1) {
      column2.push(widget);
    } else if (index % 3 === 2) {
      column3.push(widget);
    }
  })

  return (
    <>
      <div className="Widgets-column">
        {column1.map((widget, index) => {
          return (
            <div className="Widget-container" key={index}>
              {widget}
            </div>
          );
        })}
      </div>
      <div className="Widgets-column">
        {column2.map((widget, index) => {
          return (
            <div className="Widget-container" key={index}>
              {widget}
            </div>
          );
        })}
      </div>
      <div className="Widgets-column">
        {column3.map((widget, index) => {
          return (
            <div className="Widget-container" key={index}>
              {widget}
            </div>
          );
        })}
      </div>
    </>
  );
}