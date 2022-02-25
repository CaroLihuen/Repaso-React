import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { addQuote } from '../../actions';
import './Home.css';



const Home = (props) => {
  useEffect(()=>{
    const quote = async () => {
      await props.addQuote()
    }
    quote();
  },[])
  
  return (
    <div className='Home'>
      {props.quote[0] && props.quote[0].quote}
      {props.quote[0] && props.quote[0].author}
      <div  className='Home__logo'/>
    </div>
  );
}

function mapStateToProps(state){
  return{
    ...state,
  };
}

function mapDispatchToProps(dispatch){
  return{
    addQuote: () => dispatch(addQuote()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
