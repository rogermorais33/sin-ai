import './index.css';
import * as React from 'react';
import Drag from '../../components/drag-and-drop';


function Home() {
  return (
    <div className='root'>
      <Drag />
    </div>
  )
}

export default Home;