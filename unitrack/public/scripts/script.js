document.addEventListener("DOMContentLoaded", function () {
    //use script.js for general stuff that can be used in multiple pages
    
    checkLoginStatus(); //check if user logged in
    setUser(); // updates user info to match user type

});

function checkLoginStatus(){
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    
    if (!user) {
        // Redirect to login page if not logged in
        alert("Not logged in. Redirecting to login page.");
        window.location.href = "index.html";
    }
    console.log("Hello " + user.firstName +"!");

}

function setUser(){ 
    let user = JSON.parse(localStorage.getItem("loggedInUser"));
    const userType = user.role;
    let userData;
    switch (userType){
        case "student":
            const allStudents = JSON.parse(localStorage.getItem("students"));
            userData = allStudents.find(data => data.email === user.email);
            user = {...user,...userData};
            break;
        case "instructor":
            const allInstructors = JSON.parse(localStorage.getItem("instructors"));
            userData = allInstructors.find(data => data.email === user.email);
            user = {...user,...userData};
            break;
        case "admin":
            const allAdmins = JSON.parse(localStorage.getItem("admins"));
            userData = allAdmins.find(data => data.email === user.email);
            user = {...user,...userData};
            break;
        default:
            console.error("Unknown user type: " + userType);
    }
    console.log("User data: ");
    console.log(user);

    localStorage.setItem("loggedInUser", JSON.stringify(user)); 

}
