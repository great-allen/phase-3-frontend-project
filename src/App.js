import Header from "./Header";
import NewList from "./NewList";
import ListItems from "./ListItems"
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from "./SearchBar";


function App() {
  const [lists,setLists]=useState([])
  const [content,setContent]=useState('')
  const [category_id, setCategoryId] = useState("category_id")
  const [show,setShow]=useState(false)
  const [listToEdit,setListToEdit]=useState('')
  const [sortBy,setSortBy]=useState("")
  const [filterBy,setFilterBy]=useState("")
  const [search,setSearch]=useState('')
  
  
  useEffect(()=>{
    fetch('http://localhost:9292/lists')
    .then((r)=>r.json())
    .then((data)=>setLists(data))
    
  },[])
  
  function handleNewList(newList){
    setLists([newList,...lists])
  }

  function onDeleteList(list){
    
    const deletedList=lists.filter((subList)=>{
      return subList.id !== list.id
    })
    setLists(deletedList)
  }


  function onUpdateList(newInList){
    const editedLists=lists.map((list)=>{
      if (list.id ===newInList.id){
        return newInList
      }
      else
      return list
    })
    setLists(editedLists)
  }


  
    const displayLists=lists.filter((list)=>{
      return list.content.toLowerCase().includes(search.toLowerCase())
    })
    

  const sortedLists=displayLists.sort((list1,list2)=>{
   if(sortBy===""){
    return list1.create_at-list2.create_a
   }
     else if (sortBy==="content A-Z"){
      return list1.content.localeCompare(list2.content)
    }
    else 
      return list1.category_id-list2.category_id  
  }
  )

  const filteredLists=sortedLists.filter((list)=>{
   if (filterBy===""){
    return lists
   }
   else 
   return list.category.category===filterBy
  })
  
  
  return (
    <div className="App">
      <Header/>
      <SearchBar sortby={sortBy} setSortBy={setSortBy} filterBy={filterBy} setFilterBy={setFilterBy} search={search} setSearch={setSearch}/>
      <NewList onCreateList={handleNewList} content={content} category_id={category_id} setCategoryId={setCategoryId} setContent={setContent} show={show} setShow={setShow} listToEdit={listToEdit} onUpdateList={onUpdateList}/>
      <ListItems lists={filteredLists} onDeleteList={onDeleteList}  setContent={setContent} setShow={setShow}  setCategoryId={setCategoryId} show={show} category_id={category_id} setListToEdit={setListToEdit}/>
    </div>
  );
}

export default App;
