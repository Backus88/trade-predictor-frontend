import { useState, useEffect } from "react";
import authApi from "../services/authApi";


function getSavedValue(key, intialValue){
    const savedValue = JSON.parse(localStorage.getItem(key))
    if(savedValue) {
        return savedValue
    }

    if(intialValue  instanceof Function) {
        return intialValue()
    }
    return intialValue
}

export function useClearStorage(key, intialValue){
    const [value, setValue] = useState(()=>{
        return getSavedValue(key, intialValue)
    })

    useEffect(()=>{
        async function fetchData(){
            try{
                await authApi.get("/prediction/opened")
            }catch(error){
                localStorage.clear(key)
            }
        }
        fetchData()
    },[value])
    return [value,setValue]
}