import { useState,useEffect } from "react";




function currencyInfo(currency) {

    const [data,setData]=useState({})

    let API=`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    
    useEffect(() => {
        
        fetch(API).then((res)=> res.json()).then((res)=>setData(res[currency]))
    

        console.log(data);
        return data
        

    },[currency])

}


export default currencyInfo;