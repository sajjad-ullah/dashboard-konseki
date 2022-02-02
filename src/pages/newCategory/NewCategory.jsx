import "./newCategory.css";
import MultiImageInput from 'react-multiple-image-input';
import { useState } from "react";
import { FaBars } from 'react-icons/fa';

export default function NewCategory({handleToggleSidebar}) {

  const [imagePath, setImagePath] = useState([]);
  const [title, setTitle] = useState();
  const crop = {
    unit: '%',
    aspect: 4 / 3,
    width: '100'
  };
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
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Title</label>
          <input type="text" placeholder="category title" />
        </div>

        <button className="newUserButton">Add</button>
      </form>
    </div>
  );
}
