import React from 'react';
import '../App.css';
 function ProgressBar(props) {
  return (
    <div className="ProgressBar">
      {[...Array(props.count < 3 ? props.count+1 : 4)].map(() =>
     <div className='ProgressActiveBar'/>
      ) 
    }
      {props.count <= 3 && [...Array(3 - props.count)].map(() =>
     <div className='ProgressInActiveBar'/>
    )}
    </div>
  );
}

export default ProgressBar;