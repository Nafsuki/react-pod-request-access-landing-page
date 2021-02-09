import React from 'react';
import { SnsIconData } from './SnsIconData';
import './SnsIcons.scss';

const SnsIcons = () => {
  return (
    <div className="SnsIcons">
        {SnsIconData.map((item, index)=> {
          return(
            <a class={item.cName} href={item.url}><img key={index} src={item.src} alt={item.alt}/></a>
          );
        })}
    </div>
  )
}

export default SnsIcons;
