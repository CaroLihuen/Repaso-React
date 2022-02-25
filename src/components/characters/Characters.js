import React, { useEffect, useState } from 'react';
import { getCharacters } from '../../actions';
import { connect } from 'react-redux';
import './Characters.css'
import { Link } from 'react-router-dom';


const Characters = (props) => {
  const getCharactersEffect = async () => {
    await props.getCharacters();
  };
  const [input, setInput] = useState("");

  useEffect(() => {
    getCharactersEffect()
  }, [])
  useEffect(() =>{
    props.getCharacters(input);
  }, [input])

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className='Characters'>
      <form>
      <input type='text' placeholder='Search Characters' onChange={(e) => handleInput(e)} />
      </form>
      <div>
      {props.characters &&
        props.characters.map((character) => {
          return (
            <div className="Characters__list" key={character.char_id}>
              <Link to={`/characters/${character.char_id}`}>
                {character.name}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}



function mapStateToProps(state) {
  return {
    ...state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getCharacters: (query) => dispatch(getCharacters(query))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Characters);
