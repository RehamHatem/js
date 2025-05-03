let current = 0;
let images = document.querySelectorAll(".slideshow img");
let interval = null;
function showSlide() {
    for ( i = 0; i < images.length; i++) {
        if (i === current) {
            images[i].style.display = "block";
        } else {
            images[i].style.display = "none";
        }
    }
}
function changeSlide(n) {
    current += n;
    if (current >= images.length) {
        current = 0;
    } else if (current < 0) {
        current = images.length - 1;
    }
    showSlide();
}
function startSlideshow() {
    if (!interval) {
        interval = setInterval(() => changeSlide(1), 1000);
        }
    }
function stopSlideshow() {
    clearInterval(interval);
        interval = null;
}
showSlide();
//--------------------------------------------------------------------------------------------------------

var tableBody = document.getElementById("studentTable").tBodies[0];
function addStudent() {
    let nameInput = document.getElementById("studentName");
    let gradeInput = document.getElementById("studentGrade");
    let dept = document.querySelector('input[name="dept"]:checked').value;
    let nameError = document.getElementById("nameError");
    let gradeError = document.getElementById("gradeError");
    nameError.style.display = "none";
    gradeError.style.display = "none";

    let name = nameInput.value;
    let grade = parseFloat(gradeInput.value);
    if (name == "") {
        nameError.textContent = "Name cannot be empty";
        nameError.style.display = "block";
        return;
    }
    name = name.charAt(0).toUpperCase() + name.substring(1).toLowerCase();

    let rows = Array.from(tableBody.children);
    let check= rows.some((elem)=>{
        return name == elem.cells[0].innerText;
    });
    if (check) return;
    
    if ( grade < 1 || grade > 100) {
        gradeError.textContent = "Grade must be between 0 and 100";
        gradeError.style.display = "block";
        return;
    }
    let row = document.createElement("tr");
    row.className = grade < 60 ? "failed" : (grade > 60 ? "success" : "");
    row.innerHTML = `
        <td>${name}</td>
        <td>${grade}</td>
        <td>${dept}</td>
        <td><span class="delete-btn" onclick="deleteRow(this)">  &#128465; </span></td>
    `;
    tableBody.appendChild(row);
    colorTable();

    nameInput.value = "";
    gradeInput.value = "";
    
}

function deleteRow(btn) {
    btn.parentElement.parentElement.remove();
}

function sortTable() {
    let sort = document.getElementById("sortSelect").value;
    let rows = Array.from(tableBody.children);
    rows.sort((a, b) => {
        let aValue, bValue;
        if (sort == "name") {
            aValue = a.children[0].textContent;
            bValue = b.children[0].textContent;
            return aValue.localeCompare(bValue);
        } else if (sort == "grade") {
            aValue = parseFloat(a.children[1].textContent);
            bValue = parseFloat(b.children[1].textContent);
            return aValue - bValue;
        }
        return 0; 
    });
    tableBody.innerHTML = "";
    rows.forEach(row => tableBody.appendChild(row));
}


let filter = document.getElementById("filterSelect");
function filterTable() {
    filter.onchange = ()=>{
        
        let rows = document.querySelectorAll("#studentTable tbody tr"); 
        for(row of rows){
            let grade = parseFloat(row.children[1].innerText);
            if (filter.value== "failed"){
                row.style.display = grade <60 ? "" : "none";
            }
            else if (filter.value== "success"){
                row.style.display = grade >60 ? "" : "none";
            }
            else if (filter.value== "all"){
                row.style.display ="";
            }
        }
    };
}

function colorTable() {
        let rows = document.querySelectorAll("#studentTable tbody tr"); 
        for(row of rows){
            let grade = parseFloat(row.children[1].innerText);
            if (grade <60 ){
                row.style.backgroundColor = "red";
            }
            else if (grade >75 ){
                row.style.backgroundColor = "green";
            }
            else if (grade <=75 && grade >60  ){
                row.style.backgroundColor = "orange";
            }
        }
}
colorTable();

//--------------------------------------------------------------------------------------------------------


let taskTableBody = document.getElementById("taskTable").tBodies[0];

        function addTask() {
            let taskInput = document.getElementById("taskInput");
            let task = taskInput.value;

            if (task=="") return;

            let rows = Array.from(taskTableBody.children);
            let check = rows.some((elem) => {
                return task == elem.cells[1].innerText;
            });
            if (check) return;

            let row = document.createElement("tr");
            row.innerHTML = `
                <td><input type="checkbox" onchange="toggleDone(this)"></td>
                <td>${task}</td>
                <td><span class="delete-btn" onclick="deleteRow(this)">&#128465;</span></td>
            `;
            taskTableBody.appendChild(row);

            taskInput.value = "";
        }

        function done(check) {
            let row = check.parentElement.parentElement;
            if (check.checked) {
                row.children[1].style.textDecoration ="line-through";
            } else {
                row.children[1].style.textDecoration =""
            }

        }



let a=1_00;
let b=2_00.5;
let c =1e2;
let d =2.4;

console.log(parseInt(Math.max(a,b,c,d)));
console.log(Math.pow(a,parseInt(d)));
console.log(parseInt(d));
console.log(Math.round(d));
console.log(Math.floor(d));
console.log(Math.trunc(d));

let z ="Elzero Web School";
console.log( z.charAt(2).toUpperCase() + z.slice(3,6));
console.log(z.slice(-4,-3).toUpperCase().repeat(8));
console.log(z.split(" ",1));
console.log(z.substr(0,6)+ z.substr(z.length-7))
console.log(z.slice(0,2).toLowerCase() + z.slice(2).toUpperCase());