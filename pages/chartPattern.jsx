import React from 'react'
import data from "./api.json"

function chartPattern() {

const [search,setSearch] = React.useState("")
const [old,setOldData] = React.useState(data)
const [filter,setData] = React.useState(data)
React.useEffect(() => {
   
  var modal = document.getElementById("myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById("myImg");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }
    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    } 

    

}, [])


const handleSearch = (event) =>{
  setSearch(event.target.value)
let value = event.target.value.toLowerCase()
console.log(value)
  let result =  [];

try{


  result = old.filter((d)=>{

return d.name.toLowerCase().search(value)    != -1;

  });
  console.log(result)

  setData(result)
  // let value = event.value.toLowerCase()
  // console.log(value)
console.log(filter)
console.log(old)
}catch(e){
  console.log(e)
}

}


    return (
        <div>

<div>
<input placeholder="Search Chart"  value={search} onChange={(e)=> handleSearch(e)} />
 </div> 

            Chart
           {filter.map((chart,index) =>(




<div className="card" key={index}>

<img src={chart.img} id="myImg"  style={{width:'100%'}} className="myImg" alt={chart.name}/>

<h3 className="card_title">{chart.name}</h3>
</div>

           ))} 
            
            


      
<div id="myModal" class="modal">

  <span className="close">&times;</span>

  <img className="modalContent" id="img01" />

  <div id="caption" className="caption"></div>
</div>


        </div>

)
}

export default chartPattern
