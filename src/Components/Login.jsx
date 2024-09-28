import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/UserSlice";
import { BASE_URL } from "../Utils/constants";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [email, setEmail] = useState("nani@gmail.com");
    const [password, setPassword] = useState("20Sravs02@");
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const res = await axios.post(BASE_URL + "/login", {
                email: email,
                password: password
            },{ withCredentials: true});
            dispatch(addUser(res.data));
            navigate('/');
        } catch(err) {
            setError(err.response.data);
        }
    }
  return (
    <div className="flex justify-center mt-20">
        <div className="card bg-base-300 w-96 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">SignIn</h2>
                <div>
                    <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Email ID</span>
                    </div>
                    <input 
                        type="text" 
                        placeholder="Type here" 
                        value={email} 
                        onChange={(e)=> setEmail(e.target.value)}
                        className="input input-bordered w-full max-w-xs" />
                    <div className="label">
                        <span className="label-text">Password</span>
                    </div>
                    <input 
                        type="text" 
                        placeholder="Type here"
                        value={password} 
                        onChange={(e)=> setPassword(e.target.value)}
                        className="input input-bordered w-full max-w-xs" />
                    </label>
                </div>
                <div className="card-actions justify-end mt-2">
                    <p className="text-red-600">{error}</p>
                    <button type="button" className="btn btn-primary" onClick={()=> handleLogin()}>Login</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login;