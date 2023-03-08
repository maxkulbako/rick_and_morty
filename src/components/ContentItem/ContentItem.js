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
          <div className="item_img_wrapper">
            <img src={item.image} alt={item.name} />
          </div>
        ) : (
          <div className="item_img_skeleton"></div>
        )}
        <div className="item_text_block">
          <p className="text_name">{item.name}</p>
          <p className="text_species">{item.species}</p>
        </div>
      </div>
    );
  }
  return null;
}
