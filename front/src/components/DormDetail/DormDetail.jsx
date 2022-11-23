import React, { useEffect } from 'react'
import { deleteFoyer, detailsFoyer } from '../../Redux/actions/foyerActions';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import EditDorm from '../EditDorm/EditDorm';

const DormDetail = ({foyer}) => {
  
    const oneFoyer = useSelector((state)=> state.foyerReducer.oneFoyer);
const {id} = useParams()
  const dispatch = useDispatch();
 useEffect(() => {
    dispatch(detailsFoyer(id)) 
  }, [])
  return (
    <div>DormDetail
        <EditDorm/>
        <button onClick={() => dispatch(deleteFoyer(id))} ><Link to="/">delete</Link></button> 
        <h1>{oneFoyer.fullname}</h1>
    </div>
  )
}

export default DormDetail