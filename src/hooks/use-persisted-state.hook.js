import React, { useState, useEffect } from 'react';

//for persisting across opening and reopening tab : CUSTOM HOOK which works like useState hook BUT it will also store the
//value in the localStorage on every update

// 5 methods of local storage : 

// 1. setItem() --> allows us to store a key and item to localStorag. We can only store strings ie: window.localStorage.setItem('name', 'Peter') // the name is the key and Peter is the value
//1.a To store an object we would have to convert them to string by doing JSON.stringify i.e: 
    // const person = {
    //     name: "peter",
    //     location: "montreal",
    // }
    // window,localStorage.setItem('user', JSON.stringify(person))

// 2. getItem() --> allows us access data strored in browser localSt. It access only one parameter which is the key and returns a value as a string
// window.localStorage.getItem("user") // returns "{"name": "Peter", "location":"montreal"}"
// ** to use the value we would have to convert it back to an object by doing JSON.parse
// JSON.parse(window.localStorage.getItem('user))
// 3.removeItem() will remove the key if it exist it will do nothing if the key doesnt

const usePersistedState = (name, defaultValue) => {
    const [value, setValue] =  useState(()=>{
        const persistedValue = 
        typeof window !== "undefined" && window.localStorage.getItem(name)

        return persistedValue !== null ? JSON.parse(persistedValue) : defaultValue;
    });

    useEffect(()=> {
        window.localStorage.setItem(name, JSON.stringify(value))
    }, [name, value]);
    
    return [value, setValue]
}

export default usePersistedState


// replace the  //const [numCookies, setNumCookies] = React.useState(1000); with the custom hook
// const [numCookies, setNumCookies] = usePersistedState("numCookies", 1000)