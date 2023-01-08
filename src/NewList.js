
import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function NewList({onCreateList,setContent,content,show,setShow,setCategoryId,category_id,onUpdateList,listToEdit}) {

  
    

  function handleSubmit(e) {
     e.preventDefault();
    
    fetch(`http://localhost:9292/lists`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content:content,
        category_id:category_id
      }),
    })
      .then((r) => r.json())
      .then(newList=>{
        onCreateList(newList)
        setContent('')
        setCategoryId("0")
      });
  }

  function onUpdate(e){
    e.preventDefault()
    fetch(`http://localhost:9292/lists/${listToEdit.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content:content,
        category_id:category_id
      }),
    })
      .then((r) => r.json())
      .then(newInList=>{
        onUpdateList(newInList)
        setContent('')
        setCategoryId("0")
        setShow(false)
      });
      
  }
  
  

  return (
    <div style={{width:"90%",marginLeft:"5%"}}>
      {show?
      
      <Form onSubmit={onUpdate}>
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Control type="text"  placeholder="Add to lists" style={{marginBottom:"15px"}} value={content} onChange={e=>setContent(e.target.value)} />
        <Form.Select aria-label="Default select example" style={{marginBottom:"15px"}} value={category_id} onChange={e=>setCategoryId(e.target.value)} >
      <option value="0">Select category</option>
      <option value="1">Grocery shopping</option>
      <option value="2">pay bill</option>
      <option value="3">meeting</option>
      <option value="4">studying</option>
      <option value="5">exercise</option>
    </Form.Select>
    <Button  variant="primary" type="submit" style={{marginBottom:"15px",marginLeft:"5px"}} >
        Update 
    </Button>
      </Form.Group>
    </Form>
    
    :
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Control type="text"  placeholder="Add to lists" style={{marginBottom:"15px",border:"solid",height:"60px"}} value={content} onChange={e=>setContent(e.target.value)} />
        <Form.Select aria-label="Default select example" style={{marginBottom:"15px",border:"solid"}} value={category_id} onChange={e=>setCategoryId(e.target.value)} >
      <option value="0">Select category</option>
      <option value="1">grocery shopping</option>
      <option value="2">pay bill</option>
      <option value="3">meeting</option>
      <option value="4">studying</option>
      <option value="5">exercise</option>
    </Form.Select>
    <Button variant="primary" type="submit" style={{marginLeft:"5px"}} >
        Save
      </Button>
      </Form.Group>
    </Form>}
    
      
    </div>
  )
}

export default NewList