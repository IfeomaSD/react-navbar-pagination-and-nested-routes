import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState ('');
  const navigate = useNavigate ();
  const handleSubmit = async (e) => {
    e.preventDefault ();
    if (!name || email) return;
    setUser ({name : name, email: email});
    navigate ('/');
  };
  return (
    <section>
      <form className = 'form' onSubmit = {handleSubmit}>
        <h4> Login </h4>>
        <div className = 'form-row'>
          <label htmlFor = 'name' className = 'form-label'>Name</label>
          <input type = 'text' className = 'form-input' id = 'name'
          value = {name}
          onChange = {(e) => setName (e.target.value)} />
          </div>
          <div className = 'form-row'>
          <label htmlFor = 'email' className = 'form-label'> Email </label> 
          <input type = 'text' className = 'form-input' id = 'email'
          value = {email}
          onChange = {(e) => setName (e.target.value)} /> )
          </div>
          </form>
          </section>
  );
};