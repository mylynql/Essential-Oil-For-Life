// JavaSCript goes here...

// function submitData(){
//     var form =document.getElementId('myFrom');
//     google.script.run.withFailureHandler(alert).withSuccessHandler(alret)
// }
function check_info() {

    if (document.getElementById('name-id').value == "") {
        // alert('Please enter your Name');      
        return false;
    } else {
        if (document.getElementById('email-id').value == "") {
            // alert('Please enter your Email');          
            return false;
        }
        else {

            if (document.getElementById('phone-id').value == "") {
                // alert('Please enter your Phone');          
                return false;
            }
            // alert('Thank you for your interest!');    
            Alert.render('We acknowledged your interest. Thank You!'); 
            return true;
            }
        }
    }
        
    


// It is able to clear the form but not able to display the message

function CustomAlert() {
    this.render = function (dialog) {
        var winW = window.innerWidth;
        var winH = window.innerHeight;
        var dialogoverlay = document.getElementById('dialogoverlay');
        var dialogbox = document.getElementById('dialogbox');
        dialogoverlay.style.display = "block";
        dialogoverlay.style.height = winH + "px";

        // Box
        dialogbox.style.right= (winW / 2) - (550 * 0.5) + "px";
        dialogbox.style.top = "100px";
        dialogbox.style.display = "block";
        
        // Message
        // document.getElementById('dialogboxhead').innerHTML = "Acknowledge This Message";
        document.getElementById('dialogboxbody').innerHTML = dialog;
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
