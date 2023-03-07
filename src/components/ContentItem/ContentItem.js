import './contentItem.scss';

export function ContentItem({ item }) {
  if (item) {
    return (
      <div className="item_wrapper">
        <img src={item.image} alt={item.name} />
        <p>{item.name}</p>
        <p>{item.species}</p>
      </div>
    );
  }
  return null;
}
