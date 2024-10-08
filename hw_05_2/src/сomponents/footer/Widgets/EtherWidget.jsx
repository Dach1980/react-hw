import Title from '../Widgets/Title/Title';
import TVProgramsList from '../Widgets/lists/TVProgramsList'
export default function EtherWidget({ title, items }) {
  return (
    <div className="Ether-widget">
      <Title title={title} />
      <TVProgramsList items={items} />
    </div>
  );
}