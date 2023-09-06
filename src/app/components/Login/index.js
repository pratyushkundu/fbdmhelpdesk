import React from 'react'
import EmailComponent from '../common/auth/emailcomponent/emailcomponent'
import Passwordcomponent from '../common/auth/passwordcomponent/passwordcomponent'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isFormValid, setIsFormValid] = useState(false); // New state variable
    const [showform, setshowform] = useState(false);
    
const navigate = useNavigate();
    const onInputEmail = e => {
        setEmail(e.target.value);
        setIsFormValid(e.target.value && password); // Update form validity
    };

    const onInputPassword = e => {
        setPassword(e.target.value);
        setIsFormValid(email && e.target.value); // Update form validity
    };
    const handlesignup = () => {
        navigate('/signup')
    }
   


    return (
        <div className='bg-blue-800 w-full flex justify-center items-center h-full'>

            
                <div className='bg-white rounded-3xl pt-9 pb-7 px-10 w-[28%]'>
                    <div className="  flex flex-col justify-center relative w-full">
                        <div className="w-[100%] flex flex-col">
                            <div className="cursor-pointer">
                            </div>
                            <div className=" pt-3">
                                <div className="login-in flex flex-col items-center gap-y-3">
                                    <p className="text-bgparagraph text-xl font-bold">
                                        Login To Your Account
                                    </p>
                                </div>
                                <form className="pt-6 pb-2">
                                    <EmailComponent onInputEmail={onInputEmail} email={email} />
                                    <Passwordcomponent
                                        password={password}
                                        onInputPassword={onInputPassword}
                                    />
                                    <div className="flex justify-between pb-8">
                                        <div className="flex gap-x-2">
                                            <input
                                                type="checkbox"
                                                className="w-5 h-5 border-border rounded-lg outline-0 "
                                            />
                                            <p className="text-bggrey font-medium text-sm">
                                                Remember me
                                            </p>
                                        </div>

                                    </div>
                                    <NavLink
                                        to="connectfb"
                                    >
                                        <button
                                            disabled={!isFormValid}
                                            className={` border-bgblue border-2 w-full py-[10px] border-border rounded-lg font-bold text-white bg-blue-900 ${isFormValid ? '' : ' '}`}
                                            // onClick={handleconnect}

                                        >
                                            Login
                                        </button>
                                    </NavLink>
                                </form>

                                <div className="text-sm font-semibold text-center pt-6 cursor-pointer">
                                    <p>
                                        Don’t have an account?
                                        <span className="text-blue-800 pl-2 font-semibold" onClick={handlesignup}>
                                            Sign up
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                
         
       

        </div>

    )
}

export default Login