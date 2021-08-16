import React from 'react';
import Lottie from 'lottie-react';
import '../stylesheets/loadingScreen_styles.css';
import animationData from '../assets/loading.json';

export default function Loading() {
  return (
    <div className='animation'>
      <Lottie animationData={animationData} />
    </div>
  );
}
