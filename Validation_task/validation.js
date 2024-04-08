var countryCheckbox = document.getElementById("checkCountry");
var txtname = document.getElementById("txtName");
var surname = document.getElementById("txtSurname");
var fName = document.getElementById("txtFName");
var age = document.getElementById("txtAge");
var city = document.getElementById("txtCity");
var area = document.getElementById("txtArea");
var phoneNumber = document.getElementById("txtNumber");
var mail = document.getElementById("txtMail");
var sosial = document.getElementById("txtSosial");
var subject = document.getElementById("txtMainSubject");
var apply = document.getElementById("txtApply");
var submitBtn = document.getElementById("submitBtn");
var count = document.getElementById("count")
var validationMessage = document.getElementById("genderValidationMessage");
var error = document.getElementById("MuracietValidationMessage");
var aCity = document.getElementById("Acity");
var txtolke =document.getElementById("txtOlke");


countryCheckbox.addEventListener("change", function () {
  var noneElements = document.getElementsByClassName("dNoneCountry");
  if (countryCheckbox.checked) {
    console.log(noneElements)
    for (var i = 0; i < noneElements.length; i++) {
      noneElements[i].style.display = "none"
    }
    document.getElementById("cityVisible").style.display="block"
  } 
  else {
    for (var i = 0; i < noneElements.length; i++) {
      noneElements[i].style.display = "block"
    }
    document.getElementById("cityVisible").style.display="none"
  }
})

submitBtn.addEventListener("click", function(){
  checkNull(txtname);
  checkNull(surname);
  checkNull(fName);
  checkNull(age);
  checkNull(city);
  checkNull(area);
  checkNull(phoneNumber);
  checkNull(mail);
  checkNull(sosial);
  checkNull(subject);
  checkNull(apply);
  checkNull(aCity);
  checkNull(txtolke);
  
  var gender = document.querySelectorAll('.gender')
  var check=false;
  for(var i=0;i<gender.length;i++)
  {
    if(gender[i].checked)
    {
      check = true;
      break;
    }
  }

  if(check)
  {
  validationMessage.style.display = "none";
  }
  else 
  {
  validationMessage.style.display = "block";
  }

  var muraciet =document.querySelectorAll('.muraciet')
  var check1=false;
  muraciet.forEach(element => {
    if(element.checked)
    {
    check1=true;
    }
  });

    if(check1)
    {
      error.style.display = "none";
    }
    else
    {
      error.style.display = "block";
    }

})

txtApply.addEventListener("keyup",function(){
  count.innerHTML = 500 - txtApply.value.length
})

function checkNull(htmlInput){
  if(htmlInput.value.trim()=="")
  {
    htmlInput.nextElementSibling.style.display="block"
  }
  else
  {
    htmlInput.nextElementSibling.style.display="none"
  }
}


// checkboxMale.addEventListener("change", validateGender);
// checkboxFemale.addEventListener("change", validateGender);

//         function validateGender() {
//             if (!checkboxMale.checked && !checkboxFemale.checked) {
//                 validationMessage.style.display = "block";
//             } else {
//                 validationMessage.style.display = "none";
//             }
//         }

//         // Form gönderilmeden önce validation işlemi
//         document.body.addEventListener("submit", function(event) {
//           if (!checkboxMale.checked && !checkboxFemale.checked) {
//               validationMessage.style.display = "block";
//               event.preventDefault(); // Formun gönderilmesini engeller
//           }
//       });