// Save data to local storage
function saveData() {
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    
    let data = localStorage.getItem("data");
    if (data == null) {
      data = [];
    } else {
      data = JSON.parse(data);
    }
  
    if (id == "") {
      let newData = {
        id: new Date().getTime(),
        name: name,
        age: age
      };
      data.push(newData);
    } else {
      for (let i in data) {
        if (data[i].id == id) {
          data[i].name = name;
          data[i].age = age;
          break;
        }
      }
    }
    localStorage.setItem("data", JSON.stringify(data));
    showData();
    clearForm();
  }
  
  // Display data from local storage
  function showData() {
    let data = localStorage.getItem("data");
    if (data == null) {
      data = [];
    } else {
      data = JSON.parse(data);
    }
    let dataTable = document.getElementById("dataTable");
    dataTable.innerHTML =
      "<tr>" +
      "<th>ID</th>" +
      "<th>Name</th>" +
      "<th>Age</th>" +
      "<th>Action</th>" +
      "</tr>";
    for (let i in data) {
      data
  