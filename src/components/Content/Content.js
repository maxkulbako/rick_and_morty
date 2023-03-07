import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getRickyMortyData } from '../../actions/getRickyMortyData';
import { ContentItem } from '../ContentItem/ContentItem';
import './content.scss';

function ContentView({ items, getItems }) {
  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className="content_wrapper">
      {items.map((item) => (
        <ContentItem key={item.id} item={item} />
      ))}
    </div>
  );
}

const mapState = (state) => ({
  items: state.rickandmarty.items
});

const mapDispatch = (dispatch) => ({
  getItems: () => dispatch(getRickyMortyData())
});

export const Content = connect(mapState, mapDispatch)(ContentView);
