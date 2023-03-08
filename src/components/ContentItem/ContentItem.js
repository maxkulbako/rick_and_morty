import { useInView } from 'react-intersection-observer';

import './contentItem.scss';

export function ContentItem({ item }) {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true
  });

  if (item) {
    return (
      <div ref={ref} className="item_wrapper">
        {inView ? (
          <img src={item.image} alt={item.name} />
        ) : (
          <div className="item_wrapper_skeleton"></div>
        )}
        <p>{item.name}</p>
        <p>{item.species}</p>
      </div>
    );
  }
  return null;
}
