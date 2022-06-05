let userData = []
function resetfields() {
    document.getElementById("fname").value = ""
    document.getElementById("mail").value = ""
    document.getElementById("age").value = ""
    document.getElementById("pno").value = ""
    document.getElementById("ano").value = ""
    document.getElementById("adress").value = ""
    document.getElementById("date").value = ""
}

function validation(names, phone) {

    if (names === "") {
        document.getElementById("fname").style.border = "2px solid red";
        return false;
    }
    else {
        document.getElementById("fname").style.border = "2px solid black";

    }

    if (phone === "") {
        document.getElementById("pno").style.border = "2px solid red";
        return false
    }

    else {
        document.getElementById("pno").style.border = "2px solid black";
        return true;
    }


}

function userdatasave() {

    let names = document.getElementById("fname").value
    let mail = document.getElementById("mail").value
    let age = document.getElementById("age").value
    let phone = document.getElementById("pno").value
    let aadhar = document.getElementById("ano").value
    let adress = document.getElementById("adress").value
    let date = document.getElementById("date").value


    if (validation(names, phone, date)) {


        userData.push({
            username: names, usermail: mail, userage: age,
            userphone: phone, useraadhar: aadhar, useradress: adress, userdate: date
        })
        //    console.log("userdata", userData);



        localStorage.setItem('user', JSON.stringify(userData));
        resetfields();

        document.getElementById('hi').style.visibility = "visible";
        setTimeout(() => {
            document.getElementById("hi").style.visibility = "hidden";
        }, 5000)





    }

}
function navToAdmin() {
    window.location.href = "admin.html";
}







function mySubmitFunction(e) {
    e.preventDefault();


}


