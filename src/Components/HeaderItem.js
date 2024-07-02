import React from 'react';
import '../Header.css';

function HeaderItem({name,Icon}) {
  return (
    <div className='HeaderItem'>
        <Icon/>
        <h2 className=''>{name}</h2>
    </div>
  )
}

export default HeaderItem