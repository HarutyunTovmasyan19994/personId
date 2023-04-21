import React from "react";
import IMG from "../../img/download.jpg";
import { useSelector, useDispatch } from "react-redux";
import {DELETE_PERSON} from "../../redux/action/action"
import "./personId.css";

const PersonId = () => {
  const userId = useSelector((user)=>user.user.user)
  const dispatch =useDispatch()
  console.log(userId)
  return (
    <div className="common1">
      <div className="personId1"> 
        {
          userId.map((user)=>(
            <div className="ID">
            <div className="IDPerson">
              <div className="img">
                <img src={IMG} alt="15" />
              </div>
              <div>
                <p className="pName">Name is<span className="spanName">{user.name}</span></p>
                <p className="pLastName">LastName is <span className="spanName">{user.surname}</span></p>
                <p></p>
              </div>
              
            </div>
            <div className="editDelete">
              <button className="edit">Edit</button>
              <button className="delete" onClick={()=>dispatch({type:DELETE_PERSON,payload:user.id})}>Delete</button>
            </div>
            
          </div>
          ))
        }
        
      </div>
      <div className="personId2">46</div>
    </div>
  );
};

export default PersonId;
