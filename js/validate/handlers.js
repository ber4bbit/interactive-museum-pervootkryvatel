const handleInput = (input) => {
  if (input.name === "user-name") {
    USERNAME_REGEXP.test(input.value)
      ? ((input.style.color = "#545753"),
        (input.style.border = "none"),
        (errorTextArray[0].style.opacity = 0),
        input.setAttribute("data-isValid", true),
        (request.userName = input.value))
      : ((input.style.border = "1px solid red"),
        (input.style.color = "red"),
        (errorTextArray[0].style.opacity = 1),
        input.setAttribute("data-isValid", false));
  } else if (input.name === "user-phone") {
    USERPHONE_REGEXP.test(input.value)
      ? ((input.style.color = "#545753"),
        (input.style.border = "none"),
        (errorTextArray[1].style.opacity = 0),
        input.setAttribute("data-isValid", true),
        (request.userPhone = input.value))
      : ((input.style.border = "1px solid red"),
        (input.style.color = "red"),
        (errorTextArray[1].style.opacity = 1),
        input.setAttribute("data-isValid", false));
  } else if (input.name === "user-email") {
    USEREMAIL_REGEXP.test(input.value)
      ? ((input.style.color = "#545753"),
        (input.style.border = "none"),
        (errorTextArray[2].style.opacity = 0),
        input.setAttribute("data-isValid", true),
        (request.userEmail = input.value))
      : ((input.style.border = "1px solid red"),
        (input.style.color = "red"),
        (errorTextArray[2].style.opacity = 1),
        input.setAttribute("data-isValid", false));
  } else if (input.name === "accept-submit") {
    input.checked
      ? ((acceptLabel.style.border = "#5f5f5f"),
        (errorTextArray[3].style.opacity = 0),
        input.setAttribute("data-isValid", true))
      : ((acceptLabel.style.border = "1px solid red"),
        (errorTextArray[3].style.opacity = 1),
        input.setAttribute("data-isValid", false));
  }
};

feedBackForm.addEventListener("submit", (event) => {
  const isValidInputs = [];

  inputsArray.forEach((input) => {
    handleInput(input);
  });

  inputsArray.forEach((input) => {
    isValidInputs.push(input.getAttribute("data-isValid"));
  });

  if (isValidInputs.includes("false")) {
    event.preventDefault();
  } else {
    event.preventDefault();
    $.ajax({
        type: "POST",
        url: "../../connect.php",
        data: $('#feedBack-form').serialize(),
        success: function() {
            submitBtn.classList.add("form__submit-btn_submitted");
            submitBtn.setAttribute('disabled', true);
            submitBtn.innerText = "Ваша заявка успешно отправлена";
            setTimeout(() => {
              submitBtn.classList.remove("form__submit-btn_submitted");
              submitBtn.removeAttribute('disabled');
              submitBtn.innerText = "Отправить";
              inputsArray.forEach((input) => {
                if (input.name === "accept-submit") {
                  input.checked = false;
                } else input.value = "";
              });
            }, 3000);
        }
    });
    return false;
    }  
});
