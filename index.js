function validateForm() {
    let x = document.forms["myForm"]["firstName"].value;
    if (x == "") {
      alert("First name can't be blank");
      return false;
    }
  }