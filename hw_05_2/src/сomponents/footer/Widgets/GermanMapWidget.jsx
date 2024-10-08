import Title from '../Widgets/Title/Title';
import List from '../Widgets/lists/List'
export default function GermanMapWidget({ title, items }) {
  return (
    <div className="German-map-widget">
      <Title title={title} />
      <List items={items} />
    </div>
  );
}