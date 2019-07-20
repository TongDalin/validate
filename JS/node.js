let f = document.getElementById('frm');
f.addEventListener('submit', function (e) {
    e.preventDefault();
    let urs = document.getElementById('username').value;
    let school = document.getElementById('schoolName').value;
    let contactNum = document.getElementById('contact').value;
    let Information = {
        userN: urs,
        schoolN: school,
        contactN: contactNum
    }
    addToTable(Information);
})

function addToTable(Info) {
    let username = document.getElementById('username').value;
    let sname = document.getElementById('schoolName').value;
    let patt = /[^a-z]/gi;
    let pattSchool = /[^a-z \s]/gi;
    let pattContact = /[0-9]/gi;
    let msgResult = document.getElementById('username');
    let sResult = document.getElementById('username');

    let contact = document.getElementById('contact');
    let cMsg = document.getElementById('contact');

    //--------------create tr and td------------
    let row = document.createElement('tr');
    let column1 = document.createElement('td');
    let column2 = document.createElement('td');
    let column3 = document.createElement('td');
    let column4 = document.createElement('td');

    let b = document.createElement('btn');
    console.log(b);
    //------------- text to be textnode------------
    b.setAttribute("onclick", "removeInfo(this)")
    b.className = "btn btn-purple";
    let UserName = document.createTextNode(Info.userN);
    let SchoolName = document.createTextNode(Info.schoolN);
    let ContactNum = document.createTextNode(Info.contactN);
    let title = document.createTextNode('DELETE');

    //------------- append child------------------

    column1.appendChild(UserName);
    column2.appendChild(SchoolName);
    column3.appendChild(ContactNum);
    b.appendChild(title);
    column4.appendChild(b);

    //----------------------- <tr> <td>text</td> </tr> --------------
    row.appendChild(column1);
    row.appendChild(column2);
    row.appendChild(column3);
    row.appendChild(column4);

    let tbody = document.getElementsByTagName('tbody')[0];
    tbody.appendChild(row);

    // if (username.match(patt) != null) {
    //     msgResult.innerHTML = "*user input number or other character beside a -z"
    //     alert('You can Input number or character beside a-z')
    //     msgResult.style.color = 'red'
    // }
    if (username == "" || username == null) {
        alert('Username Cannot be blank')
        msgResult.style.color = 'red'
    }
    if (sname == "" || sname == null) {
        alert('Cannot be blank')
        sResult.style.color = 'Blue'
    }
    if (contact.value.length > 10 || contact.value.match(pattContact) == null) {
        // console.log('Invalid')
        alert('Invalid Contact')
        cMsg.style.color = 'purple';
    }
    if (contact.value[0] == '0') {
        contact.value =`(+855) ${ contact.value.substring(1)}`
    }
    
}
function removeInfo(btn) {
    let r = confirm('Do you want to delete?')
    if (r == true) {
        let parent = btn.parentNode.parentNode.parentNode
        let currentRow = btn.parentNode.parentNode
        parent.removeChild(currentRow)
    }
}




// var form = document.getElementById('frm');
// form.addEventListener('submit', function(e){
//     e.preventDefault()
//     let username = document.getElementById('username').value;
//     let sname = document.getElementById('school').value;
//     let patt = /[^a-z]/gi;
//     let pattSchool = /[^a-z \s]/gi;
//     let pattContact = /[0-9]/gi;
//     let msgResult = document.getElementById('usermsg');
//     let sResult = document.getElementById('smsg');

//     let contact = document.getElementById('phone');
//     let cMsg = document.getElementById('phonemsg');
    //match 
    //valiate on username text field
    // if (username.match(patt) != null){
    //     msgResult.innerHTML = "*user input number or other character beside a -z"
    //     msgResult.style.color = 'red'
    // }
    // if (username.match(patt) == null){
    //     msgResult.innerHTML = "*correct username"
    //     msgResult.style.color = 'green'
    // }
    // if (username == "" || username == null){
    //     msgResult.innerHTML = "*cannot blank"
    //     msgResult.style.color = 'red'
    // }
    //validate school name text field
    // if(sname.match(pattSchool) != null){
    //     console.log("incorrect school name")
    //     sResult.innerHTML = "*incorrect school name"
    //     sResult.style.color = 'red'
    // }
    // if (sname.match(pattSchool) == null){
    //     sResult.innerHTML = "correct school name"
    //     sResult.style.color = 'green'
    // }
    // if (sname == "" || sname == null){
    //     sResult.innerHTML = "*cannot blank school"
    //     sResult.style.color = 'red'
    // }
    // if (contact.value.length < 9 || contact.value.length > 10){
    //     cMsg.innerHTML = "*invalid contact"
    //     cMsg.style.color = 'red';
    // }
    // if (contact.value.match(pattContact) == null){
    //     cMsg.innerHTML = "*invalid contact"
    //     cMsg.style.color = 'red';
    // }
    // if (contact.value[0] == '0' && contact.value.match(pattContact) != null){
    //     contact.value = +855${contact.value.substring(1)}
    // }
