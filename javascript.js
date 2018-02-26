
// JavaSCript ...

// function submitData(){
//     var form =document.getElementId('myFrom');
//     google.script.run.withFailureHandler(alert).withSuccessHandler(alret)
// }

function check_info() {
    if (document.getElementById('name-id').value == "") 
    { // alert('Please enter your name');      
        return false; } else 
    
    { if (document.getElementById('email-id').value == "") 
    
    { // alert('Please enter your Email');          
        return false; } 
        else 
        
    { // alert('Thank you for your interest');    
        Alert.render('Thank you for your interest!'); 
        return true; }
    }
}
// To clear the form but not to display the message 

function CustomAlert() {
    this.render = function (dialog) {
        var winW = window.innerWidth;
        var winH = window.innerHeight;
        var dialogoverlay = document.getElementById('dialogoverlay');
        var dialogbox = document.getElementById('dialogbox');
        dialogoverlay.style.display = "block";
        dialogoverlay.style.height = winH + "px";

        // Box
        dialogbox.style.left = (winW / 2) - (550 * 0.5) + "px";
        dialogbox.style.top = "100px";
        dialogbox.style.display = "block";
        // Message
        document.getElementById('dialogboxhead').innerHTML = "Acknowledge This Message";
        document.getElementById('dialogboxbody').innerHTML = dialog;
        document.getElementById('dialogboxfoot').innerHTML = '<button class="btn btn-primary" onclick="Alert.ok()">OK</button>';
    }
    this.ok = function () {

        document.getElementById('dialogbox').style.display = "none";
        document.getElementById('dialogoverlay').style.display = "none";      
        document.getElementById('myForm').reset();
    }
}
var Alert = new CustomAlert();


