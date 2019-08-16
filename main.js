var attempt =3;
function Login()
{
	var user = document.getElementById('user').value;
	var pass = document.getElementById('pass').value;
	if(user=="santo" && pass=="123")
	{
		//alert("Password benar");
		return true;
	}
	else 
	{
		attempt--;
		alert("Password salah");
		return false;
	}
}

function OnOffLamp()
{
	var lampImage = document.getElementById("myImage");
	if (lampImage.src.match("bulbon")) {
    	lampImage.src = "images/pic_bulboff.gif";
    	document.getElementById("btn_OnOffLamp").innerHTML = "Turn On Lamp";
  	} else {
    	lampImage.src = "images/pic_bulbon.gif";
    	document.getElementById("btn_OnOffLamp").innerHTML = "Turn Off Lamp";
  	}
}