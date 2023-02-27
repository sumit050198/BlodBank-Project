
var selectedRow = null;
function onFormSubmit(e){
var formData = readFormData();
    if(selectedRow == null){
    insertNewRecord(formData);

}
else{

}
}

function readFormData(){
    var formData = {}
    formData["username"] = document.getElementById("username").value;
    formData["password"] = document.getElementById("password").value;
    return formData;
}
//insert the data
function insertNewRecord(data){
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.username;

    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.password;

    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = `<button>Edit</button> <button>Delete</button>`;
        
}












