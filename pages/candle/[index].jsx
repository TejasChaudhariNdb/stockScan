import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import data from "../api.json"


function index() {
    const router = useRouter();
    console.log(router.query.index)

    const [old,setOldData] = React.useState(data)

let selectedItem;
try{


selectedItem = old.filter(item => item.id == router.query.index);

console.log(selectedItem)
}catch(e){

}

    return (
        <div>
         Tejas   


         {selectedItem.map((chart,index) =>(



<>
<div className="card" key={index}>

<img src={chart.img} id={"myImg"+chart.id}  style={{width:'100%'}} className="myImg" alt={chart.name}/>

<h3 className="card_title">{chart.name}</h3>
</div>
<h3>Trend: {chart.trend}</h3>
<p>{chart.info}</p>
</>
           ))} 
        </div>
    )
}

export default index
