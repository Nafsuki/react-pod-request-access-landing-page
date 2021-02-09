import React from 'react';
import './Form.scss';

const Form = () => {
  return (
    <>
      <form className="form" id="form">
        <div className="form-control">
          <input className="input" type="email" placeholder="Email address"/>
          <small>Error message</small>
          <button className="btn" id="btn" type="submit">Request access</button>
        </div>
      </form>
    </>
  )
}

export default Form
