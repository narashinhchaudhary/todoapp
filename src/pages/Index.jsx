import React, {  useState } from "react";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { addnote, removenote } from "../Store/CartReducer";
import { noteedit } from "../Store/EditReducer";


function Index() {
  const product = useSelector((state) => state.Note);
  console.log("hello",product);

  const dispatch = useDispatch();

  const [Fromvalue2, setFromvalue2] = useState({
    id: "",
    Title: "",
    Description: "",
    type:""
  });
  console.log("editform ",Fromvalue2);
  const [error,setError]=useState({});
  
 console.log("error",error);

  const ChangeHandle2 = (e)=>{
    setFromvalue2({ ...Fromvalue2, [e.target.name]:e.target.value.trim()});
    console.log("Editvelue",Fromvalue2.Title.toString().trim().length);
 
  };
 
  function Validation (){
    var res = true;
   
 if (Fromvalue2.Title.toString().trim().length < 4) {
    setError({ "title":"title is empty"})
    
     res=false;
     return false;
 };
 if (Fromvalue2.Description.toString().trim().length < 4) {
   setError({ "Description":"title is empty"})
  
     res= false;
     return false;
 };
 if (Fromvalue2.type=== undefined) {
  setError({ "type":"title is empty"})
     res= false;
     return false;
 };
 setError({})
   return res;
};


  
  const SubmitHandle2 =  (e) =>{
    e.preventDefault(); 
    if (Validation()) {
    dispatch(addnote(Fromvalue2 ))
    setFromvalue2({ ...Fromvalue2,
       id: "",
      Title: "",
      Description: "",
      type:""})
    };
  };

  const cheaker = (note) => {
    dispatch(noteedit(note));
    setFromvalue2({
      id: note.id,
      Title: note.Title,
      Description: note.Description,
      type:note.type
    });
  };

  return (
    <div>
      <Header />

      <div className="page-content container note-has-grid">
        <div className="tab-content bg-transparent">
          <div id="note-full-container" className="note-has-grid row">
            {product.map((note, index, arr) => {
              return (
                <div className="card " style={{ width: "25rem" }}>
                  <div className="card-body">
                    <h5 className="card-title"> {note.Title}</h5>
                    <h6 className="card-text mt-3 "> {note.Description}</h6>
                    <p className=" card-subtitle text-muted">{note.time}</p>
                    <button
                      onClick={() => {
                        cheaker(note);
                      }}
                      type="button"
                      className=" btn  card-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal2"
                    >
                      <i className="fa fa-star favourite-note" />
                      edit
                    </button>
                    <button
                      className="btn  card-btn "
                      onClick={() => {
                        dispatch(removenote(note.id));
                      }}
                    >
                      <i className="fa fa-trash remove-note" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div class="container">
        <div class="modal fade" id="exampleModal2" role="dialog">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div className="notes-box">
                  <div className="notes-content">
                    <form action="" method="post" onSubmit={SubmitHandle2}>
                      <div className="row">
                        <div className="col-md-12 mb-3">
                          <div className="note-title">
                            <label>Note Title</label>
                            <input
                              type="text"
                              id="note-has-title"
                              value={Fromvalue2.Title}
                              onChange={ChangeHandle2}
                              name="Title"
                              className="form-control"
                              minLength={5}
                              placeholder="Title"
                            />
                            {error.title && (
                              <p style={{ color: "red" }}>title is empty</p>
                            )}
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="note-description">
                            <label>Note Description</label>
                            <textarea
                              id="note-has-description"
                              value={Fromvalue2.Description}
                              onChange={ChangeHandle2}
                              name="Description"
                              className="form-control"
                              minLength={6}
                              placeholder="Description"
                              rows={3}
                              defaultValue={""}
                            />
                            {error.Description && (
                              <p style={{ color: "red" }}>
                                Description is empty
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="col-md-12 mb-3">
                          <div className="note-title">
                            <label>Note type</label>
                            <select name="type" onChange={ChangeHandle2}>
                              <option value= {Fromvalue2.type}  selected>
                                {Fromvalue2.type}
                              </option>
                              <option value="Business">Business</option>
                              <option value="Important">Important</option>
                              <option value="Social">Social</option>
                            </select>
                            {error.type && (
                              <p style={{ color: "red" }}>type is empty</p>
                            )}
                          </div>
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="submit" className="btn btn-primary  ">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
