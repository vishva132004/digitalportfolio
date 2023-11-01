const $emailInput=document.getElementById('email');
const $nameInput=document.getElementById('name');
const $messageInput=document.getElementById('message');
const $sumbitBtn=document.getElementById('contact-submit');
var emailflag=0;
var nameflag=0;
var messageflag=0;

$sumbitBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    const emailvalue = $emailInput.value;
    const namevalue = $nameInput.value;
    const messagevalue=$messageInput.value;
    //email
    if (emailvalue==='') {
        setError($emailInput);
        emailflag=0;
    }
    else if (!isEmail(emailvalue)) {
        setError($emailInput);
        emailflag=0;
    }
    else {
        setSuccess($emailInput);
        emailflag=1;
    }
    //name
    if (namevalue==='') {
        setError($nameInput);
        nameflag=0;
    }
    else {
        setSuccess($nameInput);
        nameflag=1;
    }
    //message
    if (messagevalue==='') {
        setError($messageInput);
        messageflag=0;
    }
    else {
        setSuccess($messageInput);
        messageflag=1;
    }

})
function setError(input) {
    input.classList.add('error');
    input.classList.remove('success');
}
function setSuccess(input) {
    input.classList.add('success');
    input.classList.remove('error');
    if( emailflag==1 && nameflag==1 && messageflag==1)
    input.value='';

}
function isEmail(email) {
    return /[a-z0-9]+@[a-z]+.[a-z]{2,3}/.test(email);
}
