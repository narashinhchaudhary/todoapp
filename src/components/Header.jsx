import React, {useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addnote } from '../Store/CartReducer';



function Header() {


  const dispatch=useDispatch();
  const [Fromvalue,setFromvalue]=useState({
    "id":"",
    "Title":"",
    "Description":"",
    "type":undefined,
  });
  console.log('from',Fromvalue.type);
   

  const [error,setError]=useState({});

    let id = "id" + Math.random().toString(16).slice(2);
    
    

  const ChangeHandle = (e)=>{
   
    setFromvalue({ ...Fromvalue,id:id,time: new Date().toLocaleString(),[e.target.name]:e.target.value});
    console.log("type",Fromvalue.type);

  };
  

  

  
  
  
 
  function Validation (){
        var res = true;
       
     if (Fromvalue.Title === "") {
        setError({ "title":"title is empty"})
         res=false;
         return false;
     };
     if (Fromvalue.Description === "") {
       setError({ "Description":"title is empty"})
      
         res= false;
         return false;
     };
     if (Fromvalue.type === undefined ) {
         setError({ "type":"title is empty"})
         res= false;
         return false;
     };
     setError({})
       return res;
  };



  const SubmitHandle =  (e) =>{
    e.preventDefault();
    if (Validation()) {
      const removeExtraSpace = (Fromvalue) =>{ 
        for (const key in Fromvalue) {
          const value = Fromvalue[key];
          Fromvalue[key] = value.replace(/  +/g, " "); // Remove extra spaces
      }    
    } 
     
    removeExtraSpace(Fromvalue)
      dispatch(addnote(Fromvalue))
     setFromvalue({ ...Fromvalue,id:'', time:'',Title:'',Description:'',type:''});
     
    } 
    


    };

  return (
    <>
   

  

   
    <div className="page-content container note-has-grid  " >




    <nav class="navbar navbar-expand-lg navbar-light bg-{theme}">
     <div class="container-fluid">
    <div class="hello" to="/">NoteApp</div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav  d-flex justify-content-around mb-2 mb-lg-0">
        <li class="nav-item">
        <NavLink to="/" className="nav-link" >
          <i className="icon-layers mr-1" /><span className="d-md-block">All Notes</span>
        </NavLink>
         </li>
        <li class="nav-item">
        <NavLink to="/Business" className="nav-link " >
          <i className="icon-layers mr-1" /><span className="d-md-block">Business</span>
        </NavLink>
        </li>
        <li class="nav-item">
        <NavLink to="/Social" className="nav-link" >
          <i className="icon-layers mr-1" /><span className="d-md-block">Social</span>
        </NavLink>
        </li>
        <li class="nav-item">
        <NavLink to="/Important" className="nav-link" >
          <i className="icon-layers mr-1" /><span className="d-md-block">Important</span>
        </NavLink>
        </li>
        <li class="nav-item">
        <NavLink to="/" className="nav-link"   type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal" > <i className="icon-layers mr-1" /><span className="d-md-block font-14">Add Notes</span> </NavLink>
     
        </li>
        
        
      </ul>
     
    </div>
    
 </div>
</nav>


      
    </div>






  
<div class="container">
  <div class="modal fade" id="exampleModal" role="dialog" >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal"  aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <div className="notes-box">
              <div className="notes-content">
                <form action="" method="post" onSubmit={SubmitHandle} >
                  <div className="row">
                    <div className="col-md-12 mb-3">
                      <div className="note-title">
                        <label>Note Title</label>
                        <input type="text" id="note-has-title"  value={Fromvalue.Title} onChange={ChangeHandle} name="Title" className="form-control" minLength={5} placeholder="Title" />
                       {error.title && <p style={{color:"red"}}>title is empty</p>}
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="note-description">
                        <label>Note Description</label>
                        <textarea id="note-has-description" value={Fromvalue.Description} onChange={ChangeHandle} name="Description" className="form-control" minLength={6} placeholder="Description" rows={3} defaultValue={""} />
                        {error.Description && <p style={{color:"red"}}>Description is empty</p>}
                      </div>
                    </div>
                    <div className="col-md-12 mb-3">
                      <div className="note-title">
                        <label>Note type</label>
                         <select name="type"  onChange={ChangeHandle}  >
                         <option  disabled selected>{Fromvalue.type}</option>
                           <option value="Business">Business</option>
                           <option value="Important">Important</option>
                           <option value="Social">Social</option>
                          </select>
                          {error.type && <p style={{color:"red"}}>type is empty</p>}
                         </div>
                    </div>
                    
                  </div>
                  <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="submit" className="btn btn-primary">Submit</button>
                                
         
        </div>
                </form>
              </div>
            </div>
        </div>
        
      </div>
    </div>
  </div>
</div>
</>
  )
}

export default Header