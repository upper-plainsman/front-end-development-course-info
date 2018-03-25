function update() {
    /* ===================
        Your code starts here
    =====================*/

    //Create new array.
    var messages=[];

    //If first name is empty. Add it to the array
if(getValue("firstName")===""){
messages.push('First Name is required');
}

    //If last name is empty. Add it to the array
if(getValue("lastName")===""){
messages.push('Last Name is required' );
}

    //Email is empty. Add it to the array

if(getValue("emailAddress")===""){
messages.push('Email is required' );
}
    //Loop through array

for(i=0;i<messages.length;i++)
getElm("error-list").innerHTML+="<div>"+messages[i]+"</div>";

    //Create javascript object for the user

var user={
firstName:getValue("firstName"),
lastName:getValue("lastName"),
email:getValue("emailAddress"),
fullName:function(){
 var fullNameValue=this.firstName+" "+ this.lastName;
 return fullNameValue;
}
};


//debugger;
//console.log(user.firstName);

    //log the user object to the console
/*person.fullName=function(){
 fullNameValue=this.firstName+" "+ this.lastName;
 return fullNameValue;
}*/

//console.log(user.fullName());
    //Check to see if everything is valid
console.log(user);
    //Create string for today's date. Remember, if you hard code this, it will be invalid tomorrow.
var submittedDate =new Date().toDateString(); //ubmittedDate = "Mon Aug 28 2017
    //Make the alert box.
alert("Submited on "+submittedDate);

    /* ===================
        Your code ends here
    =====================*/


}




var btn = document.getElementById('btnUpdate');
btn.addEventListener('click', update);

function getValue(id) {
    return getElm(id).value;
}

function getElm(id) {
    return document.getElementById(id);
}