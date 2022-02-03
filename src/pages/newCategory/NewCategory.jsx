import "./newCategory.css";
import MultiImageInput from 'react-multiple-image-input';
import { useState } from "react";
import { FaBars } from 'react-icons/fa';
import axios from 'axios';

export default function NewCategory({handleToggleSidebar}) {

  const [imagePath, setImagePath] = useState([]);
  const [name, setName] = useState();
  const crop = {
    unit: '%',
    aspect: 4 / 3,
    width: '100'
  };

  const addCat = async () =>{
    await axios.post('https://api-kearekisa.herokuapp.com/admin/category',{name:name})
    .then(res => {
        alert("Category Added");
        setName("");

    })
    .catch(err => {
        alert(err);
    })
  }

    
  return (
    <div className="newUser">
      <div
        style={{
          width: 35,
          height: 35,
          height: 35,
          color: '#353535',
          textAlign: 'center',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 20,
          cursor: 'pointer'
        }}
        onClick={() => handleToggleSidebar(true)}>
        <FaBars />
         
      </div>
      <h1 className="newUserTitle">New Category</h1>
      <form className="newUserForm" onSubmit={(e) => e.preventDefault()}>
        <div className="newUserItem">
          <label>Title</label>
          <input type="text" placeholder="category title" value={name} onChange={(e) => setName(e.target.value)}/>
        </div>

        <button className="newUserButton" onClick={() => addCat()}>Add</button>
      </form>
    </div>
  );
}
