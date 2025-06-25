import React,{useState} from 'react';
import {useEffect} from 'react';

function Counter(){
    const [count1,setCount1]=useState(0);
    const [count2,setCount2]=useState(0);


    useEffect(()=>{
        console.log('effect')
    },[])

    function handlechange1(){
        setCount1(count1+1)
    }
    function handlechange2(){
        setCount2(count2+1)
    }
    console.log('rendering')
    return(
        <>
          <div>
                <h2>Counter</h2>
                <h3>Count1: {count1}</h3>
                <h3>Count2: {count2}</h3>
                <button onClick={handlechange1}>Increment</button>
                <button onClick={handlechange2}>Decrement</button>

            </div>  
        </>
    )
}
export default Counter;