
import React from 'react';
import { useState, useEffect } from 'react';

const EmailComponent = ({ onInputEmail, email }) => {

  return (
    <>
      <div className="w-full pb-2">
        <label htmlFor="Email" className="text-black font-bold text-base">
          Email
        </label>
        <br />
        <div className="pt-2">
          <input
            type="email"
            placeholder="cooper@example.com"
            name="email"
            value={email}
            onInput={onInputEmail}
            className="border-2 w-full text-bgparagraph px-4 py-3 border-border rounded-lg outline-0 text-sm text-bold"
          ></input>
        </div>
      </div>
    </>
  );
};

export default EmailComponent;
