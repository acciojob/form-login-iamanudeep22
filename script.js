function getFormvalue() {
    //Write your code here
	const form1 = document.getElementById("form1");
	const fName = form1.getElementsByTagName("input")[0].value;
	const lName = form1.getElementsByTagName("input")[1].value;
	alert(`${fName} ${lName}`);
}
