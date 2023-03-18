import { useEffect } from "react";
import "./character.scss";
import { useParams, useNavigate } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { getRickyMortyCharacter } from "../../actions";

function CharacterView({ getCharacter, activeItem }) {
  const { characterId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getCharacter(characterId);

    window.scroll(0, 0);
  }, []);

  const isFetching = useSelector((state) => state.rickandmorty.isFetching);

  if (isFetching) {
    return <div className="fetching" />;
  }

  return (
    <div className="character_page_conteiner">
      <button
        type="button"
        className="back_button"
        onClick={() => navigate(-1)}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
            fill="currentColor"
          />
        </svg>
        <p> go back </p>
      </button>

      {activeItem && activeItem.origin && (
        <div className="character_wrapper">
          <div className="image_wrapper">
            <img alt={activeItem.name} src={activeItem.image} />
          </div>
          <p className="character_name">{activeItem.name}</p>
          <div className="information_wrapper">
            <p className="information_title">Information</p>
            <div className="info_block">
              <p className="info_title">Gender</p>
              <p className="info_value">{activeItem.gender}</p>
              <div className="divider" />
            </div>
            <div className="info_block">
              <p className="info_title">Status</p>
              <p className="info_value">{activeItem.status}</p>
              <div className="divider" />
            </div>
            <div className="info_block">
              <p className="info_title">Species</p>
              <p className="info_value">{activeItem.species}</p>
              <div className="divider" />
            </div>
            <div className="info_block">
              <p className="info_title">Origin</p>
              <p className="info_value">{activeItem.origin}</p>
              <div className="divider" />
            </div>
            <div className="info_block">
              <p className="info_title">Type</p>
              <p className="info_value">
                {activeItem.type ? activeItem.type : "Unknown"}
              </p>
              <div className="divider" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const mapDispatch = (dispatch) => ({
  getCharacter: (id) => dispatch(getRickyMortyCharacter(id)),
});

const mapState = (state) => ({
  activeItem: state.rickandmorty.activeItem,
});

export const Character = connect(mapState, mapDispatch)(CharacterView);
