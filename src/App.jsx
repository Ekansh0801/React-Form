import { useState } from "react";
import "./App.css";

function App() {
  const[formData,setFormData] = useState({
    firstname:'',
    lastname:'',
    email:'',
    country:'India',
    street:'',
    city:'',
    state:'',
    zip:'',
    comments:false,
    candidates:false,
    offers:false,
    notification:'',

  })

  function changeHandler(event){
    const {name,value,type,checked} = event.target;
    setFormData((prevFormData) =>{
      return {
        ...prevFormData,
        [name]:type === 'checkbox' ? checked : value,
      }
    })
  }

  function submitHandler(event){
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div className="flex flex-col items-center mt-2">
    <form onSubmit={submitHandler}>
    <label htmlFor="fname">First Name </label>
      <input type="text" id="fname" placeholder="Enter First Name" name="firstname" value={formData.firstname} onChange={changeHandler} className="outline"/>
      <br/>
      <br/>
      <label htmlFor="lname">Last Name   </label>
      <input type="text" id="lname" placeholder="Enter Last Name" name="lastname" value={formData.lastname} onChange={changeHandler} className="outline"/>
      <br/>
      <br/>
      <label htmlFor="email">Email   </label>
      <input type="email" id="email" placeholder="Enter Email" name="email" value={formData.email} onChange={changeHandler} className="outline"/>
      <br/>
      <br/>
      <label htmlFor="sel">Enter Country   </label>
      <select id="sel" name="country" value={formData.country} onChange={changeHandler} className="outline">
        <option>India</option>
        <option>South Africa</option>
        <option>England</option>
        <option>New Zealand</option>
        <option>Australia</option>

      </select>
      <br/>
      <br/>
      <label htmlFor="add">Street Address   </label>
      <input type="text" id="add" placeholder="Enter street" name="street" value={formData.street} onChange={changeHandler} className="outline"/>
      <br/>
      <br/>
      <label htmlFor="city">City   </label>
      <input type="text" id="city" placeholder="Enter city" name="city" value={formData.city} onChange={changeHandler} className="outline"/>
      <br/>
      <br/>
      <label htmlFor="state">State/Province   </label>
      <input type="text" id="state" placeholder="Enter state" name="state" value={formData.state} onChange={changeHandler} className="outline"/>
      <br/>
      <br/>
      <label htmlFor="zip">ZIP/Poastal Code   </label>
      <input type="text" id="zip" placeholder="Enter poastal code" name="zip" value={formData.zip} onChange={changeHandler} className="outline"/>
      <br/>
      <br/>      
      <p>By Email</p>
      <br/>
      <label htmlFor="comment">Comments   </label>
      <input id='comment' type="checkbox" name="comments" checked={formData.comments} onChange={changeHandler} />
      <br/>
      <p>Get notified when someones posts a comment on a posting.</p>
      <br/>
      <br/>
      <label htmlFor="candidates">Candidates   </label>
      <input id='candidates' type="checkbox" name="candidates" checked={formData.candidates} onChange={changeHandler}/>
      <br/>
      <p>Get notified when a candidate applies for a job.</p>      
      <br/>
      <br/>
      <label htmlFor="offers">Offers   </label>
      <input id='offers' type="checkbox" name="offers" checked={formData.offers} onChange={changeHandler}/>
      <br/>
      <p>Get notified when a candidate accepts or rejects an offer.</p>      
      <br/>
      <br/>    
      <h1 className="font-bold">Push Notifications</h1>
      <br/>
      <p>These are delivered by your mobile sms</p>
      <br/>
      <br/>
      <label htmlFor="eve">Everything   </label>
      <input type="radio" id="eve" name="notification" value="everything" checked={formData.notification === 'everything'} onChange={changeHandler}></input>
      <br/>
      <br/>
      <label htmlFor="same">Same as Email   </label>
      <input type="radio" id="same" name="notification" value='sameasemail' checked={formData.notification === 'sameasemail'} onChange={changeHandler}></input>
      <br/>
      <br/>
      <label htmlFor="no">No Push Notifications   </label>
      <input type="radio" id="no" name="notification" value='nopush' checked={formData.notification === 'nopush'} onChange={changeHandler}></input>    
      <br/>
      <br/>
      <button className="bg-blue-500 text-white px-3 py-1 rounded-lg">SAVE</button>  
    </form>
      
    </div>
  );
}

export default App;
