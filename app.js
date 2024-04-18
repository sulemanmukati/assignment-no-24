// Q1
document.getElementById('signupForm').onsubmit = function(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    document.getElementById('result').innerHTML = "Name: " + name + "<br>Email: " + email;
};


// Q2
document.getElementById('readMoreBtn').onclick = function() {
    var moreText = document.getElementById("more");
    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
    } else {
        moreText.style.display = "none";
    }
};



// Q3
var currentEditRow = null;
function addStudent() {
    var name = document.getElementById('studentName').value;
    var age = document.getElementById('studentAge').value;
    if (!name || !age) {
        alert("Both fields are required.");
        return;
    }
    var table = document.getElementById('studentsTable').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow();
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    cell1.innerHTML = name;
    cell2.innerHTML = age;
    cell3.innerHTML = '<button onclick="editStudent(this)">Edit</button> <button onclick="deleteStudent(this)">Delete</button>';
    document.getElementById('studentName').value = '';
    document.getElementById('studentAge').value = '';
}
function deleteStudent(btn) {
    var row = btn.parentNode.parentNode;
    document.getElementById('studentsTable').deleteRow(row.rowIndex);
}
function editStudent(btn) {
    currentEditRow = btn.parentNode.parentNode;
    document.getElementById('editName').value = currentEditRow.cells[0].textContent;
    document.getElementById('editAge').value = currentEditRow.cells[1].textContent;
    document.getElementById('editForm').style.display = 'block';
}
function saveEdit() {
    currentEditRow.cells[0].textContent = document.getElementById('editName').value;
    currentEditRow.cells[1].textContent = document.getElementById('editAge').value;
    cancelEdit();
}
function cancelEdit() {
    document.getElementById('editForm').style.display = 'none';
}





// Q1

function showAlert() {
    alert('Hello, you clicked the link!');
}

// Q2
 function showMessage(model) {
            alert('You clicked on: ' + model);
        }




// Q3
     var students = [
            {index:0, name: "Alice", age: 20},
            {index:1, name: "Bob", age: 22},
            {index:2, name: "Charlie", age: 21},
            {index:3, name: "David", age: 23},
            {index:4, name: "Eve", age: 19},
            {index:5, name: "Fiona", age: 18},
            {index:6, name: "George", age: 20},
            {index:7, name: "Harry", age: 21},
            {index:8, name: "Ivy", age: 20},
            {index:9, name: "Mark", age: 22}
        ];
        var tableBody = document.querySelector("#studentTable tbody");
        students.forEach((student, index) => {     
            var row = tableBody.insertRow();
            row.insertCell(0).textContent = student.index;
            row.insertCell(1).textContent = student.name;
            row.insertCell(2).textContent = student.age;
            var deleteCell = row.insertCell(3);
            deleteCell.innerHTML = '<button onclick="deleteRow(this)">Delete</button>';
        });
        function deleteRow(button) {
            var row = button.parentNode.parentNode;
            row.parentNode.removeChild(row);
        }


        // Q5

    var count = 0;

        function changeCounter(amount) {
            count += amount;
            document.getElementById('count').innerText = count;
        }
