/* eslint-disable import/no-extraneous-dependencies */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRickyMortyData } from '../../actions/getRickyMortyData';
import { ContentItem } from '../ContentItem/ContentItem';
import './content.scss';

export function Content() {
  const dispatch = useDispatch();
  const items = useSelector((state) => {
    return state.rickandmarty.items;
  });
  useEffect(() => {
    dispatch(getRickyMortyData());
  }, [dispatch]);

  return (
    <div className="content_wrapper">
      {items.map((item) => (
        <ContentItem key={item.id} item={item} />
      ))}
    </div>
  );
}
