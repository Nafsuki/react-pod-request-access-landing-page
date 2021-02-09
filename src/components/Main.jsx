import React from 'react';
import './Main.scss';
import Form from './Form';
import SnsIcons from './SnsIcons';

const Main = () => {
  return (
    <div className='Main'>
      <h1>Publish your podcasts <span>everywhere.</span></h1>
      <h2>Upload your audio to Pod with a single click. We’ll then distribute your podcast to Spotify, 
Apple Podcasts, Google Podcasts, Pocket Casts and more!</h2>
      <Form />
      <SnsIcons />
    </div>
  )
}

export default Main;
