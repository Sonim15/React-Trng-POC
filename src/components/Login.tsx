import React, {useState}from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import '../stylesheets/Login.css';

   function Login(props: { history: any }){
      const [username, setUsername] = useState("");
      const [password, setPassword] = useState("");
      var doLogin = () => {
         if(username === ""){
            alert('Please provide username and password');
         }else if(username === password ){
            props.history.push('/Welcome');
         }else{
            alert('username or password is incorrect');
         }
      }
      var onHandleChange = (e:any)=>{
         if(e.target.name === 'username'){
            setUsername(e.target.value)
         }else if (e.target.name === 'password'){
            setPassword(e.target.value)
         }
      }
      return (
         <div style={{width:'80%',margin:'10%'}}>
            <h2>DeskTop App</h2>
            <Form>
               <Form.Group controlId="formBasicUserName">
                  <Form.Label>User Name</Form.Label>
                  <Form.Control name="username" type="email" placeholder="Enter UserName "onChange={onHandleChange} value={username} />
               </Form.Group>

               <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control name="password" type="password" placeholder="Password" onChange={onHandleChange}  value={password} />
               </Form.Group>
              
               <Button  onClick={doLogin}  variant="primary" type="submit">
                  Login
               </Button>
               </Form>
         </div>
      );
   }
    export default Login;