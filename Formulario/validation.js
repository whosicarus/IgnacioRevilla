function validateForm() {
    let x = document.forms["nombreydni"].value;
    if (x == "") {
      alert("Debe tener más de 6 letras y al menos un espacio entre medio.");
      return false;
    }
  }