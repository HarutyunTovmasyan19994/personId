import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import CustomInput from "../customInpust/customInput";
import { Radio } from "antd";
import {ADD_PERSON} from "../../redux/action/action"
import "./create.css";
const CreateId = () => {
  const navigation = useNavigate()
  const {
    control,
    handleSubmit,
    reset
  } = useForm();
  const dispatch = useDispatch();

  const createHandle = (data) => {
    console.log(data);
    reset()
    dispatch({type:ADD_PERSON,payload:{...data,id:new Date().getTime()}})
    navigation("/personId")
   
  };
  return (
    <div className="createDiv">
      <div className="common">
        <div className="inputs">
          <span className="spanCreate">Create Id</span>
        </div>
        <div className="form">
          <CustomInput
            control={control}
            name="name"
            placeholder="Name"
            type="text"
            label="Name"
          />
          <CustomInput
            control={control}
            name="surname"
            placeholder="Surname"
            type="text"
            label="Surname"
          />
          <CustomInput
            control={control}
            name="email"
            placeholder="Email"
            type="email"
            label="Email"
          />
          <CustomInput
            control={control}
            name="phone"
            placeholder="Phone"
            type="text"
            label="Phone"
          />
          <div className="gender">
            {" "}
            <p style={{ marginRight: 20 }}>Gender</p>
            <Controller
              control={control}
              name="AntdRadio"
              render={({ field: { onChange, value } }) => (
                <Radio.Group
                  value={value}
                  onChange={(e) => onChange(e.target.value)}
                >
                  <Radio value="Male">Male</Radio>
                  <Radio value="Female">Female</Radio>
                </Radio.Group>
              )}
            />
          </div>
          <br />
          <button className="btn" onClick={handleSubmit(createHandle)}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateId;
