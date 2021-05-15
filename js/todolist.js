function myFunction() {
    var inputVal = document.getElementById("myInput").value
    var para = document.createElement("P");
    para.innerText = inputVal;
    document.body.appendChild(para);


  }

function removeTask() {
  var myobj = document.querySelector("p:last-child");
  myobj.remove(myobj);
}
