import React from 'react'
import EmailComponent from '../common/auth/emailcomponent/emailcomponent'
import Passwordcomponent from '../common/auth/passwordcomponent/passwordcomponent'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isFormValid, setIsFormValid] = useState(false); // New state variable

    const onInputEmail = e => {
        setEmail(e.target.value);
        setIsFormValid(e.target.value && password); // Update form validity
    };

    const onInputPassword = e => {
        setPassword(e.target.value);
        setIsFormValid(email && e.target.value); // Update form validity
    };

    const navigate = useNavigate();
    const handlelogin = () => {
        navigate('/')
    }


    return (
        <div className='bg-blue-800 w-full flex justify-center items-center h-full'>
            <div className='bg-white rounded-3xl pt-7 pb-7 px-10 w-[28%]'>
                <div className="  flex flex-col justify-center relative w-full">
                    <div className="w-[100%] flex flex-col">
                        <div className="cursor-pointer">
                            {/* <img src={Subtract} className="w-16 h-16" /> */}
                        </div>
                        <div className=" pt-3">
                            <div className="login-in flex flex-col items-center gap-y-3">
                                <p className="text-bgparagraph text-xl font-bold">
                                    Create Account
                                </p>
                            </div>
                            <form className="pt-6 pb-2">
                            <div className=''>
                                <label className='font-bold text-base'>Name</label><br/>
<input className='border-2 w-full text-bgparagraph px-4 py-3 border-border rounded-lg outline-0 text-sm mt-[6px] mb-2' placeholder='Enter your Email'></input>
                            </div>
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
                                <a
                                    //   href="https://2dph6qylk59.typeform.com/to/ObGGRwOt"
                                    target="_blank"
                                >
                                    <button
                                        disabled={!isFormValid} // Disable button if form is not valid
                                        className={` border-bgblue border-2 w-full py-[10px] border-border rounded-lg font-bold text-white bg-blue-900 ${isFormValid ? '' : ' '
                                            }`}
                                            onClick={handlelogin}
                                    >
                                        Sign Up
                                    </button>
                                </a>
                            </form>

                            <div className="text-sm font-semibold text-center pt-6 cursor-pointer">
                                <p>
                                    Don’t have an account?
                                    <span className="text-blue-800 pl-2 font-semibold"   onClick={handlelogin}>
                                       Login
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

export default SignUp