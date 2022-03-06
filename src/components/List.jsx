import React from 'react'

function List(props) {
  return (
    <ul>
        <li>{props.one}</li>
        <li>{props.two}</li>
        <li>{props.three}</li>
    </ul>
  )
}

export default List