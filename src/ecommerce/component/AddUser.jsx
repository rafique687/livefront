
import { useNavigate } from "react-router-dom";

const AddUser = () => {



const [items, setItems] = useState([]);
    const [fname,setFname] = useState("")
    const [lname,setlname] = useState("");
    const [phone,setPhone] = useState("");
    const [email,setEmail] = useState("");
    const [dob,setDob]     = useState("");
    const [address, setAddress] =useState("");
    const [eduction,setEducation]=useState("");
    const [college,setCollege]=useState("");
    const [degree,setDegree]=useState("");
    const [startDate,setStartDate]=useState("");
    const [endDate,setEndDate] = useState("");
    const [experience,setExperience]=useState("");
    const [company,setCompany]=useState();
    const [startMonthandYear,setStartMonthAndYear]=useState("");
 

const handleSubmit = (e) => {
    e.preventDefault();
   
   console.log(formData);
    setItems([...items, formData]);

        const [formData, setFormData] = useState({   fname: "",
                                                    lname: "",
                                                    phone: "",
                                                    email: "",
                                                    dob: "",
                                                    address: "",
                                                    education: "",
                                                    college: "",
                                                    degree: "",
                                                    startDate: "",
                                                    endDate: "",
                                                    experience: "",
                                                    company: ""
                                                    });

    

    // clear input
    setInputValue(""); 
  };

    function AddEduction(){

    }

    return(
        <>
         <form  onSubmit={ handleSubmit} >
        <div className="row well border border-2 rounded-3 p-4 m-4">
          
            <div className="col-sm-4">
                <label htmlFor="fname">First Name</label>
                <input type="text" className="form-control" value={fname} onChange={(e)=>setFname(e.target.value)}/>
            </div>

            <div className="col-sm-4">
                <label htmlFor="lname">Last Name</label>
                <input type="text" className="form-control" value={lname} onChange={(e)=>setlname(e.target.value)}/>
            </div>
            <div className="col-sm-4">
                <label htmlFor="phone">Phone</label>
                <input type="text" className="form-control" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
            </div>

             <div className="col-sm-4">
                <label htmlFor="email">Email</label>
                <input type="text" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
             <div className="col-sm-4">
                <label htmlFor="dob">Date of Birth</label>
                <input type="text" className="form-control" value={dob} onChange={(e)=>setDob(e.target.value)}/>
            </div>
             <div className="col-sm-4">
                <label htmlFor="address
                ">Address</label>
                <input type="text" className="form-control" value={address} onChange={(e)=>setAddress(e.target.value)}/>
            </div>
            <div className="row border 2px solid #000" id="EducationBox" >
            <div className="col-sm-4">
                <label htmlFor="eduction
                ">Education</label>
                <input type="text" className="form-control" value={eduction} onChange={(e)=>setEducation(e.target.value)}/>
            </div>
            <div className="col-sm-4">
                <label htmlFor="college
                ">College</label>
                <input type="text" className="form-control" value={college} onChange={(e)=>setCollege(e.target.value)}/>
            </div>
            <div className="col-sm-4">
                <label htmlFor="degree
                ">Degree</label>
                <input type="text" className="form-control" value={degree} onChange={(e)=>setDegree(e.target.value)}/>
            </div>
                       <div className="col-sm-4">
                <label htmlFor="startDate
                ">Start Date</label>
                <input type="date" className="form-control" value={startDate} onChange={(e)=>setStartDate(e.target.value)}/>
            </div>
             <div className="col-sm-4">
        <label htmlFor="end">End Date</label>
                <input type="date" className="form-control" value={endDate} onChange={(e)=>setEndDate(e.target.value)}/>
            </div>
            <button className="btn btn-primary mt-3" onClick={AddEduction}>Add More</button>
            </div>
             <div className="col-sm-4">
                <label htmlFor="Experience">Experience</label>
                <input type="text" className="form-control" value={experience} onChange={(e)=>setExperience(e.target.value)}/>
            </div>
            <div className="col-sm-4">
                <label htmlFor="company">company</label>
                <input type="text" className="form-control" value={company} onChange={(e)=>setCompany(e.target.value)}/>
            </div>
            <input type="submit" className="btn btn-primary mt-3" value="Submit"/>
           
        </div>
         </form>
        </>
    )


}
export default AddUser;
