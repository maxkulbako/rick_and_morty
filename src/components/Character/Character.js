/* eslint-disable import/no-extraneous-dependencies */
import { useEffect } from 'react';
import './character.scss';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getRickyMortyCharacter } from '../../actions';

function CharacterView({ getCharacter, activeItem }) {
  const { characterId } = useParams();

  useEffect(() => {
    getCharacter(characterId);
  }, []);

  if (!activeItem) {
    return <div>...loading</div>;
  }

  return (
    <div className="character_page_conteiner">
      <button type="button">go back</button>
      <div className="character_wrapper">
        <div className="image_wrapper">
          <img alt={activeItem.name} src={activeItem.image} />
        </div>
        <p>Information</p>
        <div className="information_title">
          <div className="info_block">
            <p className="info_title">Gender</p>
            <p className="info_child">{activeItem.gender}</p>
          </div>
          <div className="info_block">
            <p className="info_title">Status</p>
            <p className="info_child">{activeItem.status}</p>
          </div>
          <div className="info_block">
            <p className="info_title">Species</p>
            <p className="info_child">{activeItem.species}</p>
          </div>
          {/* <div className="info_block">
            <p className="info_title">Origin</p>
            <p className="info_child">{activeItem.origin.name}</p>
          </div> */}
          <div className="info_block">
            <p className="info_title">Type</p>
            <p className="info_child">{activeItem.type}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapDispatch = (dispatch) => ({
  getCharacter: (id) => dispatch(getRickyMortyCharacter(id))
});

const mapState = (state) => ({
  activeItem: state.rickandmorty.activeItem
});

export const Character = connect(mapState, mapDispatch)(CharacterView);
