import React, { useState } from "react";
import "./inputStyle.css";
import axios from "axios";

const rates = {
    ForwardRTO : {
        a : {
            first : 43.1,
            other : 47.2
        },
      
        b: {
            first : 53.5,
            other : 56.6
        },
        c : {
            first : 72, 
            other : 77.8
        }
        ,
        d : {
            first :86.7,
            other :89.6
        },
        e : {
            first : 107.3,
            other : 111
            
        }
    },

    Forward : {
        a : {
            first : 29.5            ,
            other : 23.6
        },
      
        b: {
            first :33            ,
            other : 28.3
        },
        c : {
            first :40.1            , 
            other : 38.9
        }
        ,
        d : {
            first :45.4            ,
            other :44.8
        },
        e : {
            first : 56.6            ,
            other :55.5
            
        }
    }
}

const initState = {
  weight: "",
  pincode: "",
  delType: "",
};

const UserInputs = () => {
  const [deliveryInfo, setDeliveryInfo] = useState(initState);
  const [address, setAddress] = useState("")
  let { weight, pincode, delType } = deliveryInfo;

  const handleCheck = (e)=>{
    e.preventDefault();
    getAddress(deliveryInfo.pincode);
    setDeliveryInfo(initState)
  }

  const getAddress =(pin)=>{
     axios.get(
        `http://localhost:2233/addresses?pin=${pin}`
    ).then((response) => {
        let data = response.data[0];
        showOutput(data.zone)
      })
      .catch((e)=>{
          alert(e)
      })
  
  
  
  }

  const showOutput = (zone)=>{
      let wt = Math.round(weight).toFixed(2);
      let type = delType;
    let val1 = (rates[delType][zone].first ) * 0.5;

    let val2 = (rates[delType][zone].other ) * (wt - 0.5)

    alert(`courier charge of this order is ${(val1 + val2).toFixed(2)}`)

     console.log(deliveryInfo);
      let firstCharge

      console.log(wt, type, zone);
  }



  const handleChange = (e) => {
    let { name, value } = e.target;

    let usersInfo = { ...deliveryInfo, [name]: value };

    setDeliveryInfo(usersInfo);

    
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
               <option value="ChooseOptions">Choose Options</option>
            <option value="Forward">Forward</option>
            <option value="ForwardRTO">Forward&RTO</option>
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
