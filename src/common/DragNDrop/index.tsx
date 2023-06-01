import React, { useState } from 'react'

const DragNDrop = () => {
  const [list, setList] = useState([
    "mango",
    "apple",
    "banana"
  ]);

  const onDragStart = (event: any) => {
    console.log(event.target);
  }

  const dragEnter = (event: any) => {
    console.log(event.target);
  }

  return (
    <div className='d-flex'>
      <ul className='list-group mr-3'>
        <li className='list-group-item' draggable onDragStart={onDragStart}>List 1</li>
        <li className='list-group-item' draggable onDragStart={onDragStart}>List 2</li>
        <li className='list-group-item' draggable onDragStart={onDragStart}>List 3</li>
        <li className='list-group-item' draggable onDragStart={onDragStart}>List 4</li>
      </ul>
      <ul className='list-group ml-4' onDragEnter={dragEnter}>
        <li className='list-group-item'>List 2 1</li>
        <li className='list-group-item'>List 2 2</li>
        <li className='list-group-item'>List 2 3</li>
      </ul>
    </div>
  )
}

export default DragNDrop