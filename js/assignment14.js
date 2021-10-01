function checkfirstname() {
    var elMsg = document.getElementById('feedback');

    if (this.value.length < 5) {
        elMsg.textContent = "firstname must be more than 5 letters";

    } else {
        elMsg.textContent = "";
    }
}
function checklastname() {
    var elMsg0 = document.getElementById('feedback1');

    if (this.value.length < 5) {
        elMsg0.textContent = "lastname must be more than 5 letters";
    } else {
        elMsg0.textContent = "";
    }
}
function checkphoneNumber() {
    var elMsg1 = document.getElementById('feedback3');

    if (this.value.length < 10) {
        elMsg1.textContent = " Error in phone number";
    } else {
        elMsg1.textContent = "";
    }
}
var elFirstname = document.getElementById("firstname");
elFirstname.onblur = checkfirstname;

var elLastname = document.getElementById("lastname");
elLastname.onblur = checklastname;

var elPhoneNum = document.getElementById("phno");
elPhoneNum.onblur = checkphoneNumber;
