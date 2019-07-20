var form = document.getElementById('frm');
form.addEventListener('submit', function (e) {
    e.preventDefault()
    let username=document.getElementById('username').value;
    //let p=new RegExp('e','gi')

    let patt = /[^a-z]/gi;
    let pattschool = /[^a-z \s]/gi;
    let msgResult = document.getElementById('usermsg');
    let scmsgResult = document.getElementById('schoolmsg');
    if (username == "" || username == null) {
        msgResult.innerHTML = "Cannot be blank"
        msgResult.style.color = "purple"
    }
    else if (username.match(patt) == null) {
        msgResult.innerHTML = ""
        msgResult.innerHTML = "user input a-z"
        msgResult.style.color = "red"
    }
    else {
        msgResult.innerHTML = ""
        msgResult.innerHTML = "user input number or other character"
        msgResult.style.color = "pink"
    }
    if (schoolname == "" || schoolname == null) {
        scmsgResult.innerHTML = "cannot be blank"
        scmsgResult.style.color = 'blue'
    }
    else if (schoolname.match(patt)==null) {
        scmsgResult.innerHTML = ""
        scmsgResult.innerHTML = "correct school name "
        scmsgResult.style.color = 'green'
    }
    else {
        scmsgResult.innerHTML = ""
        scmsgResult.innerHTML = "incorrect school name"
        scmsgResult.style.color = 'black'
    }

})