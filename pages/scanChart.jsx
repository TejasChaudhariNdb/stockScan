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
        // load the model and metadata
        // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
        // or files from your local hard drive
        // Note: the pose library adds "tmImage" object to your window (window.tmImage)
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
        for (let i = 0; i < maxPredictions; i++) {
            const classPrediction =
                prediction[i].className + ": " + prediction[i].probability.toFixed(2) * 100 +"%";
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
<lable htmlFor="file">Select Chart </lable>
            <input type="file" id="file" onChange={(event)=> onFileSelected(event)}/>
<br/>
<img src="" alt="Img will here" id="myimage" height="150" width="auto"/>
<br/>
<button type="button" onClick={()=>init()}>Search</button>
{loading ? "Loading" : "NO"}
<div id="webcam-container"></div>
<div id="label-container"></div>


        </div>
    )
}

export default scanChart
