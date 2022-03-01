import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getEpisodeDetail, emptyEpisodeDetail } from '../../actions';
import './EpisodeDetail.css'
const EpisodeDetail = (props) => {
  const {id} = useParams();

  useEffect(() =>{
    props.getEpisodeDetail(id);
    return function cleanUp(){
      props.emptyEpisodeDetail();
    }
  }, [])
  
  return (
    <div className='EpisodeDetail-Container'>
      EpisodeDetail
      <h2>Titulo: {props.episodesDetail.title}</h2>
      <h3>Temporada: {props.episodesDetail.season}</h3>
      <h3>Episodio: {props.episodesDetail.episode}</h3>
      <h3>Fecha de Emision: {props.episodesDetail.air_date}</h3>
      <h3>Personajes: {props.episodesDetail.characters?.join(", ")}</h3>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    ...state,
  }
}

export default  connect(mapStateToProps, {getEpisodeDetail, emptyEpisodeDetail}) (EpisodeDetail);
