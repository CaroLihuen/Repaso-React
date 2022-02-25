import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacterDetail, emptyCharacterDetail } from '../../actions';
import { connect } from 'react-redux';
import './CharacterDetail.css';

const CharacterDetail = (props) => {
  const {id} = useParams();

  useEffect(() =>{
    props.getCharacterDetail(id);
    return function cleanUp(){
      props.emptyCharacterDetail();
    }
  }, [])
  
    return (
      <div className='CharacterDetail'>
       <h2>Nombre: {props.characterDetail.name}</h2>
       <h3>Cumpleaños: {props.characterDetail.birthday}</h3>
       <h3>Ocupación: {props.characterDetail.occupation?.join(", ")}</h3>
       <h3>Status: {props.characterDetail.status} </h3>
       <img src={props.characterDetail.img} alt="" width="200px" height="250px"/>
      </div>
    );
  }
  
  const mapStateToProps = (state) => {
    return {
      ...state,
    }
  }

export default connect(mapStateToProps, { getCharacterDetail, emptyCharacterDetail }) (CharacterDetail);

