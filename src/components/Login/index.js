import React from 'react';
import { useNavigate } from 'react-router-dom';

const appStyle = {
  height: '250px',
  display: 'flex',
};

const formStyle = {
  margin: 'auto',
  padding: '10px',
  border: '1px solid #c9c9c9',
  borderRadius: '5px',
  background: '#f5f5f5',
  width: '220px',
  display: 'block',
};

const labelStyle = {
  margin: '10px 0 5px 0',
  fontFamily: 'Arial, Helvetica, sans-serif',
  fontSize: '15px',
};

const inputStyle = {
  margin: '5px 0 10px 0',
  padding: '5px',
  border: '1px solid #bfbfbf',
  borderRadius: '3px',
  boxSizing: 'border-box',
  width: '100%',
};

const submitStyle = {
  margin: '10px 0 0 0',
  padding: '7px 10px',
  border: '1px solid #efffff',
  borderRadius: '3px',
  background: '#3085d6',
  width: '100%',
  fontSize: '15px',
  color: 'white',
  display: 'block',
};

const Form = () => {
  const usernameRef = React.useRef();
  const passwordRef = React.useRef();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };
    console.log(data);
    if (data.username === 'foo' && data.password === 'bar') {
      sessionStorage.setItem('authenticated', true);
      navigate('/Home');
    } else {
      sessionStorage.setItem('authenticated', false);
      alert('Invalid username or password');
    }
  };

  return (
    <div style={appStyle}>
      <form style={formStyle}>
        <div>
          <label style={labelStyle}>Username</label>
          <input ref={usernameRef} type="text" style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>
            Password
          </label>
          <input ref={passwordRef} type="password" style={inputStyle} />
        </div>

        <div>
          <button style={submitStyle} type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
