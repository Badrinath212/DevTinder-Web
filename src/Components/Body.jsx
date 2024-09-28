import { Outlet, useNavigate } from 'react-router-dom'
import NavBar from './NavBar'
import { useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../Utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../Utils/UserSlice';

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector(store => store.User);
  const fetchUser = async () => {
    if(userData) return;
    try {
      const res = await axios.get(BASE_URL+"/profile/view", {withCredentials: true});
      dispatch(addUser(res.data));
    } catch(err) {
      if(err.status === 401) {
        navigate('/login')
      }
      console.error(err);
    }
  }
  useEffect(()=>{
    fetchUser();
    if(userData){
      navigate('/');
    }
  },[navigate]);
  return (
    <div>
        <NavBar/>
        <Outlet/>
    </div>
  )
}

export default Body