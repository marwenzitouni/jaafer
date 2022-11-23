import { useState } from 'react'
import React from "react";
import { MDBCard, MDBCardBody, MDBCardHeader, MDBCheckbox, MDBCol, MDBInput, MDBRow, MDBTextArea, MDBTypography } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addFoyer } from '../../Redux/actions/foyerActions';
const AddDorm = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [fullname, setFullname] = useState("");
  const [adresse, setAdresse] = useState("");
  const [gender, setGender] = useState("")
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData();
    
    data.append("fullname",fullname);
    data.append("adresse", adresse);
    data.append("gender",gender)
    data.append("description",description)
    dispatch(addFoyer({
      fullname : data.get("fullname"),
      adresse : data.get("adresse")
    },navigate));
  };



  
  return (
    <div className="mx-auto mt-5" style={{ maxWidth: '900px' }}>
      <MDBRow>
        <MDBCol md="8" className="mb-4">
          <MDBCard className="mb-4">
            <MDBCardHeader className="py-3">
              <MDBTypography tag="h5" className="mb-0">Complete your Dorm infos creating</MDBTypography>
            </MDBCardHeader>
            <MDBCardBody>
              <form method="POST" onSubmit={handleSubmit}>
                <MDBRow className="mb-4">
                  <MDBCol>
                    Name
                    <MDBInput name="fullname" type='text' onChange={(e) => {
                    setFullname(e.target.value);
                  }} />
                  
                  </MDBCol>
                  <MDBCol>
                    Gender
                    <MDBInput name="gender" type='text' />
                  </MDBCol>
                </MDBRow>

                Capacity<MDBInput  label='' type='text' className="mb-4" />
                Adresse<MDBInput name="adresse" onChange={(e) => {
                    setAdresse(e.target.value);
                  }} label='' type='text' className="mb-4" />
                Email<MDBInput label='' type='text' className="mb-4" />
                Phone<MDBInput label='' type='text' className="mb-4" />
                Additional information<MDBTextArea label='' rows={4} className="mb-4" />

                <div className="d-flex justify-content-center">
                  <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='Create an account?' defaultChecked />
                </div>
                <div className="d-grid gap-2 mt-3">
            <button type="submit"  className="btn btn-primary">
              Add
            </button>
          </div>
              </form>
            </MDBCardBody>
          </MDBCard>
          
        </MDBCol>
       
      </MDBRow>
    </div>

  )
}

export default AddDorm