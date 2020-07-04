const btn = document.querySelector('#openOverlay');
const body = document.body;

btn.addEventListener('click', function () {

  const overlayElement = document.createElement('div');
  overlayElement.classList.add("overlay");
  overlayElement.addEventListener('click',function(event){
    
    if (!event.target.classList.contains("content")) {
      closeElement.click();
    }
  }
  )

  const containerElement = document.createElement('div');
  containerElement.classList.add("modal-container");

  const contentElement = document.createElement('div');
  contentElement.classList.add("content");
  contentElement.innerHTML = "Это мое окно";

  const closeElement = document.createElement('a');
  closeElement.classList.add("close");
  closeElement.innerHTML = "x";
  closeElement.href = "#";

  closeElement.addEventListener('click',function(event){
    event.preventDefault();

    body.removeChild(overlayElement);
  }
  )


  overlayElement.appendChild(containerElement);
  containerElement.appendChild(closeElement);
  containerElement.appendChild(contentElement);
  body.appendChild(overlayElement);
   
  
});
