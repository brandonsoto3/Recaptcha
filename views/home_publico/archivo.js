const constraints = {
    video: true,
  };
  
  const video = document.querySelector("video");
  
  navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
    //video.srcObject = stream;
    console.log('Camra funcional')
  });
  