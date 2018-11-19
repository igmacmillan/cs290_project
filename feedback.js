
/*POST form data and if successful thank the user. Otherwise log error.*/
document.getElementsByClassName('submit')[0].addEventListener('click', function(event){
  let req = new XMLHttpRequest();
  let payload = {firstName:null, lastName:null, email:null, feedback:null};
  payload.firstName = document.getElementsByName('firstName')[0].value;
  payload.lastName = document.getElementsByName('lastName')[0].value;
  payload.email = document.getElementsByName('email')[0].value;
  payload.feedback = document.getElementById('feedback').value;
  req.open('POST', 'http://httpbin.org/post', true);
  req.setRequestHeader('content-type', 'application/json');
  req.addEventListener('load', function(){
    if(req.status >=200 && req.status < 400) {
      let response = JSON.parse(req.responseText);
      document.getElementById('thanks').style.display= "block";
      document.getElementsByName('firstName')[0].value = "";
      document.getElementsByName('lastName')[0].value = "";
      document.getElementsByName('email')[0].value = "";
      document.getElementById('feedback').value = "";
      console.log(response);
    }
    else {
      console.log("error in network request: " + req.statusText);
    }
  });
  req.send(JSON.stringify(payload));
  event.preventDefault();
});
