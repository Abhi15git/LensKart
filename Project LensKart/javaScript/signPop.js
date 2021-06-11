window.addEventListener("load", signup);

function signup() {
  document.getElementsByClassName(
    "floatl"
  )[0].innerHTML = `<img  src="https://static1.lenskart.com/media/desktop/img/sign-up.png" alt=" banner">`;

  document.getElementsByClassName("parent")[0].innerHTML = `<div >
                <input class="width100 details"  type="text" placeholder="First Name" name="firstname">
            </div>
            <div>
                <input class="width100 details" type="text" placeholder="Last Name" name="Lasttname">
            </div>
            <div>
                <input class="width100 details" type="number" placeholder="Mobile" name="Mobile">
            </div>
            <div>
                <input class="width100 details" type="email" placeholder="Email Address" name="EmailAddress">
            </div>
            <div>
                <input class="width100 details" type="password" placeholder="Password" name="password">
            </div>
            <div>
                <input class="refrel" type="text" name="reffrelcode" placeholder="Referal code">(Optional)
            </div>
            <button class="width100 colorg" onclick="signuplocalstorage()">Register</button><br>
            <div class="checkup floatr">
            <input type="checkbox" name="check" >Get updates on Whatsapp <img class="image " src="https://static.lenskart.com/media/desktop/img/25-July-19/whatsapp.png">
            </div>
            <br><br>
            
             <p class="p">Or Sign in Using</p><br>
            <div class="fbbtn"><button class = "fb"><img class="image1" src = "https://static.lenskart.com/media/wysiwyg/sign-register/facebook-b_n.jpg">    
                </button>
           </div>
             `;
}
function signin() {
  document.getElementsByClassName(
    "floatl"
  )[0].innerHTML = `<img  src="http://static.lenskart.com/media/wysiwyg/sign-register/sign-in-offer.jpg" alt=" banner">`;
  document.getElementsByClassName("parent")[0].innerHTML = "";
  document.getElementsByClassName("parent")[0].innerHTML = `<div>
        <form>
            <input class="width100 signemail" type="email" name="ep"  placeholder = "Mobile/Email">
            <button class="width100 colorg" onclick = "signincheck(event)">Proceed</button>
            <div class="checkup  floatr">
            <input type="checkbox" name="check" >Get updates on Whatsapp <img class="image" src="https://static.lenskart.com/media/desktop/img/25-July-19/whatsapp.png">
            </div><br>
             <p class="p">Or Sign in Using</p><br>
            <div class="fbbtn"><button class = "fb"><img class="image1" src = "https://static.lenskart.com/media/wysiwyg/sign-register/facebook-b_n.jpg">
                </button>
           </div>
            </form>
    </div>
`;
}

function signuplocalstorage() {
  var data = document.getElementsByClassName("details");
  var signupdata = {
    firstname: data[0].value,
    lastname: data[1].value,
    mobile: data[2].value,
    email: data[3].value,
    password: data[4].value,
  };
  var localsignupdata = JSON.parse(localStorage.getItem("signup"));

  if (localsignupdata) {
    localsignupdata.push(signupdata);
    localStorage.setItem("signup", JSON.stringify(localsignupdata));
    console.log("hi");
  } else {
    var arr = [];
    arr.push(signupdata);
    localStorage.setItem("signup", JSON.stringify(arr));
  }
}
function signincheck(e) {
  e.preventDefault();
  var falg = true;
  var data = JSON.parse(localStorage.getItem("signup"));
  var email = document.getElementsByClassName("signemail")[0].value;
  for (i in data) {
    if (data[i].email == email) {
      console.log("Success");
      falg = false;
    }
  }
  if (falg) {
    console.log("please signup first");
  }
}

function signPage() {
  let popUp = document.getElementById("signupPopUp");
  popUp.classList.add("pop_up_page");
}
function signPagePopOut() {
  let popUp = document.getElementById("signupPopUp");
  popUp.classList.remove("pop_up_page");
}
