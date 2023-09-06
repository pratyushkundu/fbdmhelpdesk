import React, { useState } from 'react';

const Passwordcomponent = ({ password, onInputPassword }) => {
  const [passwordType, setPasswordType] = useState('password');
  const togglePassword = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
      return;
    }
    setPasswordType('password');
  };

  return (
    <>
      <div className="w-full pb-4">
        <label htmlFor="Password" className="text-black font-bold text-base">
          Password
        </label>
        <br />
        <div className="relative pt-2">
          <input
            placeholder="Enter your password"
            type={passwordType}
            name="password"
            value={password}
            onInput={onInputPassword}
            className="border-2 w-full text-bgparagraph px-4 py-3 border-border rounded-lg outline-0 text-sm"
          ></input>
          <div
            onClick={togglePassword}
            className="absolute right-5 top-[24px] cursor-pointer"
          >
            {/* <img src={eye} className="w-full" /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Passwordcomponent;