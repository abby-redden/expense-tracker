import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const navigate = useNavigate
  return <button onClick={() => loginWithRedirect()}>Log In</button>;
  
};

export default LoginButton;






// export default function Home(){
//     const navigate = useNavigate()

//     function landing(){
//         navigate('/')
//     }
    
//     return (
//         <>
//         <h1>Expense Hack and Track</h1>
//         <br/><br/><br/>
//         <h3>Sign in</h3>
//           <FloatingLabel
//             controlId="floatingInput"
//             label="Email address"
//             className="mb-3"
//           >
//             <Form.Control type="email" placeholder="name@example.com" />
//           </FloatingLabel>
//           <FloatingLabel controlId="floatingPassword" label="Password">
//             <Form.Control type="password" placeholder="Password" />
//           </FloatingLabel>
//           <Button variant="success">Success</Button>{' '}
//         </>
//       );
// }
