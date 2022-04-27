import React, { useState } from "react";
import "./inputStyle.css";

const initState = {
  weight: "",
  pincode: "",
  delType: "",
};

const UserInputs = () => {
  const [deliveryInfo, setDeliveryInfo] = useState(initState);
  let { weight, pincode, delType } = deliveryInfo;

  const handleCheck = (e)=>{
    e.preventDefault();
    console.log(deliveryInfo);
  }



  const handleChange = (e) => {
    let { name, value } = e.target;

    let usersInfo = { ...deliveryInfo, [name]: value };

    setDeliveryInfo(usersInfo);

    console.log(name, value);
  };
  return (
    <>
      <div className="input_container">
        <div className="wt_input_div input_div">
          <input
            name="weight"
            value={weight}
            autoComplete="off"
            onChange={handleChange}
            placeholder="Enter Weight in  (KG)"
            type="Number"
          />
        </div>
        <div className="pin_input_div input_div">
          <input
            name="pincode"
            value={pincode}
            autoComplete="off"
            onChange={handleChange}
            placeholder="Enter city pincode"
            type="text"
          />
        </div>
        <div className="del_type_input_div input_div">
          <select name="delType" 
          onChange={handleChange} 
          value={delType}>
            <option value="Forward">Forward</option>
            <option value="Forward&RTO">Forward&RTO</option>
          </select>
        </div>

        <div className="submit_btn_div input_div">
         <button
         onClick={handleCheck}
          className="check_btn">Check Delivery Charges</button>
     </div>
      </div>
    </>
  );
};

export default UserInputs;
