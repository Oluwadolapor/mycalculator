var operate, fValue, sValue;
var state = true;


function onoff(){
	var control = con.value;
	if (control =='OFF' && state== true){
		document.getElementById('con').value= "ON";
		state = false;
		pp.value = "";

	}
	else {
		document.getElementById('con').value= "OFF";
		state = true;
		pp.value += 0 ;
	}
	// if( control== 'ON' && state == false){
	// document.getElementById('con').value= "OFF";
	// state = true;
	// pp.value += '0';
	// }
	// else{
	// 	document.getElementById('con').value= "ON";
	// 	state = false;
	// 	pp.value = "";
	// }
}

function shownum(x)   {
	if (state == true) {
		if (pp.value == 0) {
			pp.value = x;
		} else {
			pp.value += x;
		}
	}    
 }
function operators(u){
	if (state== true){
		fValue = parseFloat(pp.value);
		pp.value = "";
		operate = u;
	}
	
}
function equal(){
	if (state == true){
		sValue = parseFloat(pp.value);
		if( operate == '+'){
			pp.value = fValue + sValue;
		}
		else if( operate == '-'){
			pp.value = fValue - sValue;
		}
		else if( operate == '*'){
			pp.value = fValue * sValue;
		}
		else if( operate == '/'){
			pp.value = fValue / sValue;
		}
		else if( operate == '%'){
			pp.value = fValue % sValue;
		}
		else if( operate == '^'){
			pp.value = Math.pow(fValue, sValue);
		}
	}
	
}
function clearm() {
	if (state == true){
		pp.value = "";
	}
	
}
function pie(){
	if (state == true){
		pp.value  = Math.PI;
	}	
}
function sqrt(){
	if (state == true){
		pp.value = Math.sqrt(pp.value);
	}	
}
function pow3(){
	if (state == true){
		pp.value = Math.pow(pp.value,2);{}
	}
}
function log(){
	if (state == true){
		pp.value = Math.log10(pp.value)
	}
}
function sin(){
	if (state == true){
		pp.value = Math.sin(pp.value * Math.PI / 180);
	}
}
function cos(){
	if (state == true){
		pp.value = Math.cos(pp.value * Math.PI / 180);
	}
}
function tan(){
	if (state == true){
		pp.value = Math.tan(pp.value * Math.PI / 180);
	}
}
function lnn(){
	if (state == true){
		pp.value = Math.LN2;
	}
}



















