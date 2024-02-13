import { useState } from "react"


function App(){

const[name,setName]=useState('')
const[id,setId]=useState('')
const[city,setCity]=useState('')
const [gender, setGender] = useState('');

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log('Selected gender:', gender);
  };

  return(
    <>
    <div className="border w-25 mt-5 m-auto p-3">
      <h2 className="text-primary text-center">Form</h2>
      <div>
        <label>Name:</label>
        <input type="text" placeholder='Enter Name' className="form-control" value={name} onChange={(p)=>{setName(p.target.value)}}></input>
      </div>
        <br></br> <br></br>
      <div>
        <label>Employee ID:</label>
        <input type="text" placeholder='Enter Employee ID' className="form-control"  value={id} onChange={(p)=>{setId(p.target.value)}}></input>
      </div>

      <br></br> <br></br>
      <div>
        <label>City:</label><br></br>
      <select id="dropdown"  className="form-control"    value={city} onChange={(p)=>{setCity(p.target.value)}}>
      <option value="">-- Please select --</option>
        <option value="Newyork">New York</option>
        <option value="London">London</option>
        <option value="Tokyo">Tokyo</option>
        
      </select>
        
      </div>
      <br></br> <br></br>
      <div>
        <label>Gender:</label><br></br>




        <label>
        <input 
          type="checkbox" 
          name="gender" 
          value="male" 
          checked={gender === 'male'} 
          onChange={handleGenderChange} 
        />
        Male
      </label>
      

      <div className="">

      <label>
        <input 
          className=""
          type="checkbox" 
          name="gender" 
          value="female" 
          checked={gender === 'female'} 
          onChange={handleGenderChange} 
        />
        Female
      </label>
      </div>
      </div>
     <br></br> <br></br>

      <div >
      <button className="btn btn-primary w-100"
      
      onClick={()=>{
        
        console.log('Name:',name)
        console.log('id:',id)
        console.log('city:',city)
        console.log('gender:',gender)



      
      
      
      
      
      }}
      
      
      
      >Submit</button>
      </div>

    </div>
    
    
    </>
  )
}


export default App