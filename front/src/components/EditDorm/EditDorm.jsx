
import React, { useEffect, useState } from 'react';
import {MDBBtn,MDBModal,MDBModalDialog,MDBModalContent,MDBModalHeader,MDBModalTitle,MDBModalBody,MDBModalFooter, MDBInput, MDBTextArea} from 'mdb-react-ui-kit';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { detailsFoyer, editFoyer } from '../../Redux/actions/foyerActions';
const EditDorm = () => {

    const [staticModal, setStaticModal] = useState(false);

    const toggleShow = () => setStaticModal(!staticModal);
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const {id} = useParams();
  const oldDorm = useSelector((state)=> state.foyerReducer.oneFoyer)
  const [updatedDorm, setUpdatedDorm] = useState(oldDorm)
  
  useEffect(() => {
  dispatch(detailsFoyer(id));
  }, []);
  useEffect(() => {
    setUpdatedDorm(oldDorm);
    }, [oldDorm]);
    
  const handleSubmit = (event) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    console.log("first")
    dispatch(editFoyer(id, updatedDorm, navigate));
  };
    return (
      <>
        <MDBBtn onClick={toggleShow}>Edit</MDBBtn>
  
        <MDBModal staticBackdrop tabIndex='-1' show={staticModal} setShow={setStaticModal}>
          <MDBModalDialog>
            <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle>Modal title</MDBModalTitle>
                <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
              </MDBModalHeader>
              <MDBModalBody>
                <form method='POST' >
              Fullname<MDBInput name="fullname" value={updatedDorm.fullname} onChange={(e)=>setUpdatedDorm({...updatedDorm,fullname:e.target.value})}  label='' type='text' className="mb-4" />
                Adresse<MDBInput name="adresse" value={updatedDorm.adresse} onChange={(e)=>setUpdatedDorm({...updatedDorm,adresse:e.target.value})}  label='' type='text' className="mb-4" />
                Email<MDBInput label='' type='text' className="mb-4" />
                Phone<MDBInput label='' type='text' className="mb-4" />
                Additional information<MDBTextArea label='' rows={4} className="mb-4" />
                </form>

              </MDBModalBody>
              <MDBModalFooter>
                <MDBBtn color='secondary' onClick={toggleShow}>
                  Close
                </MDBBtn>
                <MDBBtn type="submit" onClick={(e)=>{toggleShow();handleSubmit(e)}}>Save</MDBBtn>
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
      </>
    )
}

export default EditDorm