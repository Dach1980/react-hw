import Title from '../Widgets/Title/Title';
import DefinitionsList from '../Widgets/lists/DefinitionsList'
export default function FavoritesWidget({ title, items }) {
  return (
    <div className="Favorites-widget">
      <Title title={title} />
      <DefinitionsList items={items} />
    </div>
  );
}