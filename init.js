document.addEventListener("DOMContentLoaded", function(e){
    const username = localStorage.getItem("user");
    const user = document.getElementById("username");
    const logOutButton = document.getElementById("logOut")
    
    if (username === null) {
      window.location.href = "login.html"
    }
  
    user.innerText = username;
  
    logOutButton.onclick = function() {
      localStorage.removeItem('user');
      localStorage.removeItem('email');
      localStorage.removeItem('profileData');
      window.location.href = "login.html";
    }
  });