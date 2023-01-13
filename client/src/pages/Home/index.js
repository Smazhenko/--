import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';
import styles from './Home.module.css'

export default function Home(props) {
    const [state,  setState] = useState(true);

    const navigate = useNavigate();

    const [error, setError] = useState(null);

    const btnHandler = () =>{
        setState(state => !state);
    }

    const getData = ({callback, values}) =>{
      callback(values)
      .then(result =>{
        navigate('/tasks');
        props.sendUser(result.data)
       })
       .catch(err=> {
         setError(err)
       })
    }

    const textButton = state? 'SignUp'  : 'SignIn';

  return (
  <div className={styles.container}>
    <header><button onClick={btnHandler}>{textButton}</button></header>
       <main className={styles['form-wrapper']}>{state ? <SignIn sendData={getData}/> : <SignUp sendData={getData}/>}
       {error && <div className={styles.error}>{error.message}</div>}
       </main> 
       </div>
  )
}
