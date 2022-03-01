import React, { useEffect, useState } from 'react';
import { getEpisodes } from '../../actions';
import { connect } from 'react-redux';
import './Episodes.css'
import { Link } from 'react-router-dom';

const Episodes = (props) => {
  
  useEffect(()=>{
    const getEpisodeEffect = async()=>{
    await props.getEpisodes();
  }
    getEpisodeEffect ();
  },[])
  
  return (
    <div className='Episodes'>
      Episodes
      { props.episodes?.filter((ep)=>ep.series === "Breaking Bad")
      .map((ep)=>{
        return(
          <div className='Episodes__list' key={ep.episode_id}>
            <Link to={`/episodes/${ep.episode_id}`} >
              {ep.title}
            </Link>
          </div>
        )
      })
      }
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
    getEpisodes: () => dispatch(getEpisodes())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Episodes);
