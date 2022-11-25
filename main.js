const REGEX_NAME =
  /[^a-z0-9A-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]/u;
const REGEX_PHONE = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;


const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const phone = document.querySelector("#phone");
const male = document.querySelector("#male");
const female = document.querySelector("#female");
var password = document.querySelector("#password");
var confirmPassword = document.querySelector("#confirm_password");



function containsSpecialChars(str) {
  const specialChars = `\`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`;

  const result = specialChars.split("").some((specialChar) => {
    if (str.includes(specialChar)) {
      return true;
    }

    return false;
  });

  return result;
}
    function showError(input, message){
        let parent = input.parentElement;
        let small = parent.querySelector('small');
        parent.classList.add('error');
        small.innerText = message
    }
    // function showSuccess(input){
    //     let parent = input.parentElement;
    //     let small = parent.querySelector('small');
    //     parent.classList.remove('error');
    //     small.innerText = '';
    // }

    // function checkEmptyError(listInput){
    //     let isEmptyError = false;
    //     listInput.forEach(input => {
    //         input.value = input.value.trim();
    //         if(!input.value){
    //             isEmptyError = true;
    //             showError(input, 'Không được để trống!')
            
    //         }else{
    //             showSuccess(input);
    //         }
    //     })
    //     return isEmptyError
    // };
    


    function checkpass(password, confirmPassword){
        if(password.value != confirmPassword.value);{
            alert(confirmPassword, 'Mat khẩu không khớp');
            return true;
        } return false;
       
    }

    // function checkLengthError(input, min, max){
    //     input.value = input.value.trim();
    //     if(input.value.length < min){
    //         showError(input, 'Phải có ít nhất ${min} ký tự');
    //         return ;
    //     }
    //     if(input.value.length > max){
    //         showError(input, 'Không được quá ${max} ký tự');
    //         return ;
    //     }else showSuccess(input) 
    //     return false ;
    // }
    
form.addEventListener("submit", (e) => {
  e.preventDefault();

  //a
  if (
    !nameInput.value.match(REGEX_NAME) ||
    containsSpecialChars(nameInput.value)
  ) {
    alert("Invalid Name");
    return;
  }
  //b
  if (!phone.value.match(REGEX_PHONE) || containsSpecialChars(phone.value)) {
    alert("Invalid Phone");
    return;
  }

  // let isnameInput = checkLengthError(nameInput, 3, 10);
  // let ispass = checkLengthError(password, 8, 20);

  // let isEmptyError = checkEmptyError([nameInput, password, confirmPassword]);
   let isCheck = checkpass(password, confirmPassword);
  


  //c



  const user = {
    name: nameInput.value,
    phone: phone.value,
    email: mail.value,
    password: password.value,
    gender: male.checked ? "Male" : "Female",
  };

  console.log(user);
  let answer = confirm('Bạn đã chắc chắn muốn đăng kí?');
  console.log(answer);
  
  if(answer == true) console.log(user);
  else alert("Bạn đã hủy đăng kí thành công!")
});

