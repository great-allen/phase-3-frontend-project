import React from 'react'

import Form from 'react-bootstrap/Form';

function SearchBar({sortBy,setSortBy,filterBy,setFilterBy,search,setSearch}) {

    
    

  return (
    <div>
        <Form className="d-flex" style={{width:"50%",marginBottom:"5px",marginLeft:"5%"}}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
              style={{border:"solid"}}
            />
            
            <Form.Select aria-label="Default select example" style={{marginLeft:"15px",width:"150px"}} value={filterBy} onChange={(e)=>setFilterBy(e.target.value)} >
            <option value="">Filter</option>
                <option value="grocery shopping">grocery shopping</option>
                <option value="pay bill">pay bill</option>
                <option value="meeting">meeting</option>
                <option value="studying">studying</option>
                <option value="exercise">exercise</option>
            </Form.Select>
            
            <Form.Select aria-label="Default select example" style={{marginLeft:"15px",width:"150px"}} value={sortBy} onChange={(e)=>setSortBy(e.target.value)} >
            <option value="">Sort</option>
                <option value="content A-Z">content A-Z</option>
                <option value="category">category</option>
                
            </Form.Select>
          </Form>
    </div>
  )
}

export default SearchBar