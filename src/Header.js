import React from 'react'

import Badge from 'react-bootstrap/Badge';

function Header() {
  return (
    <div>
      <h1 style={{textAlign:"center",fontSize:"50px"}}>
         <Badge bg="secondary">To Do List</Badge>
      </h1>
    </div>
  )
}

export default Header