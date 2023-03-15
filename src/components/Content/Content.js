/* eslint-disable no-nested-ternary */
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ContentItem } from '../ContentItem/ContentItem';
import './content.scss';

export function Content({ items }) {
  const isFetching = useSelector((state) => state.rickandmorty.isFetching);

  return (
    <div>
      {isFetching ? (
        <div className="fetching" />
      ) : items.length > 0 ? (
        <div className="content_wrapper">
          {items.map((item) => (
            <Link
              className="item_container"
              to={`characters/${item.id}`}
              key={item.id}
              style={{ textDecoration: 'none' }}
            >
              <ContentItem item={item} />
            </Link>
          ))}
        </div>
      ) : (
        <div className="no_results">
          No results found. Please try a different search term.
        </div>
      )}
    </div>
  );
}
