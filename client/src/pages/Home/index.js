import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {registerUser} from '../../api'
import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp'

export default function Home(props) {
    const [state,  setState] = useState(true);

    const [data,setData] = useState();

    const navigate = useNavigate();

    const [error, setError] = useState(null);
    useEffect(() => {
      if(data) {
        registerUser(data)
        .then(result =>{
         navigate('/tasks');
         props.sendUser(result)
        })
        .catch(err=> {
          setError(err)
        })
      
        return () => {
          
        }
      }
    }, [data])
    

    const btnHandler = () =>{
        setState(state => !state);
    }

    const getData = (userData) =>{
      setData(userData);
    }

    const textButton = state? 'SignUp'  : 'SignIn';

  return (
  <>
    <header><button onClick={btnHandler}>{textButton}</button></header>
       <main>{state ? <SignIn sendData={getData}/> : <SignUp sendData={getData}/>}</main> 
       {error && <div>{error}</div>}
       </>
  )
}
