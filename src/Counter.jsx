import { useState } from "react";

function Counter() {

    // let count=0;

    // function handleClick() {
    //     count = count+1;
    //     console.log("Button clicked!");
    // }

    // let arr = useState(0);
    // console.log(arr);

    // Syntax:-
    // let [stateVariable , setStateVariable] = useState(initialState);

    let [count , setCount] = useState(0);

    let incCount = () => {
        // Method - 1 :- 
        // setCount(count+2);

        // Method - 2
        setCount((count) => {
            return (count + 1);
        });
        setCount((count) => {
            return (count + 1);
        });


        console.log(count);
    }
    
    return (
        <div>
            <button onClick={incCount}>Count is {count}</button>
        </div>
    );
}

export default Counter;