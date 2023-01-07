import React, {useState} from 'react';
import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp'

export default function Home() {
    const [state,  setState] = useState(true);

    const btnHandler = () =>{
        setState(state => !state);
    }

    const textButton = state? 'SignUp'  : 'SignIn';

  return (
    <>
    <header><button onClick={btnHandler}>{textButton}</button></header>
       <main>{state ? <SignIn/> : <SignUp/>}</main> 
    </>
  )
}
