import Title from '../Widgets/Title/Title';
import TVProgramsList from '../Widgets/lists/TVProgramsList'
export default function TVProgramWidget({ title, items }) {
  return (
    <div className="TV-program-widget">
      <Title title={title} />
      <TVProgramsList items={items} />
    </div>
  );
}