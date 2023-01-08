import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';







function ListItems({lists,onDeleteList,setContent,setShow,setCategoryId,setListToEdit}) {



function handleDeleteList(list){
    fetch(`http://localhost:9292/lists/${list.id}`, {
        method: "DELETE"
      }).then(r=>r.json()).then(list=>onDeleteList(list)).catch(err=>alert(err))
}


function onEdit(list){
    setContent(list.content)
    setCategoryId(list.category_id)
    setShow(true)
    setListToEdit(list)
}


  return (
    <div>
        <Table striped bordered hover style={{width:"90%",marginLeft:"5%"}}>
            <thead style={{backgroundColor:"#04AA6D"}}>
                <tr >
                    <th>To Do Item</th>
                    <th>Category</th>
                    <th>Time Added</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody >
                {
                    lists && lists.map((list)=>(
                    
                    <tr style={{fontSize:"25px",marginBottom:"30px"}} key={list.id}>
                    <td>{list.content}</td>
                    <td>{list.category.category}</td>
                    <td>{list.created_at}</td>
                    <td>
                    <Button variant="primary" onClick={()=>onEdit(list)}>Edit</Button>{' '}
                    <Button variant="primary" onClick={()=>handleDeleteList(list)} >Delete</Button>
                    </td>
                    </tr>
                    ))
                }
            </tbody>
        </Table>
  </div>
)
}

export default ListItems