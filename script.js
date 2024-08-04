function validateForm() {
    let form = document.getElementById('myForm');
    let name = form["name"].value;
    let email = form["email"].value;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (name === "" || name.length < 3) {
        alert("please enter your name");
        return false;
    }
    if (email === "" || !emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }
    
    return true;
}
