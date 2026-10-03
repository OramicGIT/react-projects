// DeletableList.jsx
import { useState } from "react";

function List() {
  const [list, changeList] = useState(['Apple', 'Banana', 'Grape', 'Orange']);

  const handleDelete = (indexToDelete) => {
    const newItems = list.filter( (list, index) => index !== indexToDelete)
    changeList(newItems);
  }

  return (
    <>
        <br></br>
        <br></br>
        <h2>List with deletable elements</h2> 
        <ul>
            {
                    list.map((item, index) => (
                        <li key={index}>
                            {item}
                            <button onClick={()=>handleDelete(index)}>
                                Delete
                            </button>
                        </li>
                    ))
            }
        </ul>
    </>
  );
}

export default List;
