import React from 'react'
import data from "./api.json"

function chartPattern() {

const [search,setSearch] = React.useState("")
const [old,setOldData] = React.useState(data)
const [filter,setData] = React.useState(data)


const imgClick = (id) =>{

  var modal = document.getElementById("myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById("myImg"+id);
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    var a = document.getElementById("modal_a");


    // img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = img.src;
      captionText.innerHTML = img.alt;
      a.href = "/chart/"+id
      // }
    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    } 


}

const handleSearch = (event) =>{
  setSearch(event.target.value)
let value = event.target.value.toLowerCase()

  let result =  [];

try{


  result = old.filter((d)=>{

return d.name.toLowerCase().search(value)    != -1;

  });

  setData(result)


}catch(e){
  console.log(e)
}

}


    return (
        <div>


<div>
  <nav className="search_nav">
<input placeholder="Search Chart Pattern" className="input" value={search} onChange={(e)=> handleSearch(e)} />
 </nav>
 </div> 


 
<div style={{ paddingTop: '3rem'}}>
            Chart
           {filter.map((chart,index) =>(




<div className="card" key={index}>

<img src={chart.img} id={"myImg"+chart.id}  style={{width:'100%'}} className="myImg" alt={chart.name} onClick={()=> imgClick(chart.id)}/>

<h3 className="card_title">{chart.name}</h3>
</div>

           ))} 

           </div> 
            


      
<div id="myModal" className="modal">

  <span className="close">&times;</span>

  <img className="modalContent" id="img01" />

  <div id="caption" className="caption"></div>
<a href="#" id="modal_a" style={{width: '100%',display: 'flex',justifyContent: 'center'}}>

<button className="button_61">
More Info
  </button>

</a>
</div>


        </div>

)
}

export default chartPattern
