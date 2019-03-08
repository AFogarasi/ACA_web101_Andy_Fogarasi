// Remove Box Function
function removeBox() {
    var storedbox = document.getElementById("BoxStyle");
      storedbox.parentNode.removeChild(storedbox); 
    }
    
     function addBox() {
       var boxes = document.getElementById("BoxStyle");
       var clone = boxes.cloneNode();
       boxes.append(clone);
       
    }


 
        // var p = document.createElement("p");

