import './App.css';
import RowHome from './RowHome'
import React,{useState, useEffect} from 'react'

const Home = () =>{
    const [data, setData] = useState([]);
    const apiCall = async () => {
        let result = await fetch("http://localhost:3001/products");
        result = await result.json();
        setData(result)
        return
    } 
    useEffect( ()=> {
        apiCall();
        return;
    },[])
    return(
        <>
        {
            data.map((item) => {
                const itemsVal = []
                item.map((inItem) =>{
                    itemsVal.push(inItem);
                })
                
                return(
                <RowHome first={itemsVal[0].imagePath} second={itemsVal[1].imagePath}/>
                );
            })
        }
        </>
    )
}

export default Home;