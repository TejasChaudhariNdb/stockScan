import React from 'react'
import Head from 'next/head'




function scanChart() {


    const [loading,setLoad] = React.useState(false);

    
    function onFileSelected(event) {
        var selectedFile = event.target.files[0];
        var reader = new FileReader();
      
        var imgtag = document.getElementById("myimage");
        imgtag.title = selectedFile.name;
      
        reader.onload = function(event) {
          imgtag.src = event.target.result;
        };
      
        reader.readAsDataURL(selectedFile);
         
    }




      
    const URL = "/";

    let model, labelContainer, maxPredictions;
    
    // Load the image model and setup the webcam
    async function init() {
        const modelURL = URL + "model.json";
        const metadataURL = URL + "metadata.json";
        console.log(modelURL)
        setLoad(true)

        model = await tmImage.load(modelURL, metadataURL);
        maxPredictions = model.getTotalClasses();

        labelContainer = document.getElementById("label-container");
       
        for (let i = 0; i < maxPredictions; i++) { // and class labels
            labelContainer.appendChild(document.createElement("div"));
        }

        loop()
    }

    async function loop() {
        await predict();
  
    }

    // run the webcam image through the image model
  

    async function predict() {
        // predict can take in an image, video or canvas html element
        // const prediction = await model.predict(webcam.canvas);
     
        const prediction = await model.predict(document.getElementById("myimage"));
        console.log(prediction)

        prediction.sort((a, b) => parseFloat(b.probability) - parseFloat(a.probability));

        console.log(prediction)

        for (let i = 0; i < maxPredictions; i++) {
            const classPrediction =
                prediction[i].className + " <div class='progress'> <div class='bar' style='width: " + prediction[i].probability.toFixed(2) * 100 +"%'><p class='percent'> " + prediction[i].probability.toFixed(2) * 100 +"%</p> </div></div> ";
            labelContainer.childNodes[i].innerHTML = classPrediction;
            console.log(classPrediction)
  
        }
    
    setLoad(false)
    }



    return (
        <div>
   <Head>
        <title>Learn Technical And Fundelmental</title>
        <link rel="icon" href="/favicon.ico" />


        
<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.3.1/dist/tf.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@teachablemachine/image@0.8/dist/teachablemachine-image.min.js"></script>
      </Head>            
      
<br/>

<div style={{display:'flex',justifyContent:'center',padding:'10px'}}>

<img src="" alt="Img will here" id="myimage"  width="auto" className="dis_img"/>
</div>
<br/>

<div className="upload_btn_wrapper">
  <button className="btn">Upload Chart</button>
  <input type="file" name="myfile" type="file" id="file" onChange={(event)=> onFileSelected(event)} />
</div>

{loading ? "Loading" : ""}

<div style={{padding:'15px'}}>
<hr/>
</div>
<div style={{display:'flex',justifyContent:'center'}}>
<button className="button_61"  type="button" onClick={()=>init()}>Scan Chart</button>
</div>


<div className="result_card">
<p className="output">Output</p>
<div id="label-container"></div>


</div>

        </div>
    )
}

export default scanChart;