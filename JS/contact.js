document.getElementById("#contactForm").addEventListener("#submitbtn", function (event) {
   // Prevent the form from submitting
   event.preventDefault();


   var fname = document.getElementById('#fname').value;
   var lname = document.getElementById("#lname").value;
   var number = document.getElementById("#number").value;
   var email = document.getElementById("#email").value;
   var subject = document.getElementById("#subject").value;
   var priority = document.getElementById("#priority").value;
   var messageType = document.getElementById("#messageType").value;
   var errorMessage = document.getElementById("#errorMessage");

   if (fname === undefined || lname === undefined || number === undefined || email === undefined || subject === undefined || priority === undefined || messageType === undefined ) {
      errorMessage.style.display = "block";
      return false; // Prevent form submission
  } else {
      errorMessage.style.display = "none";
      return true; // Allow form submission
  }
});
