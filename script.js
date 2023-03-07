// Your code here
// creates table varible and uses html table
const table = document.getElementById('table');

// fucntion to make rows
function makeRow() {
    // makes a element table row
    const tr = document.createElement('tr');
    // loop thru and add cells to the row
    for (let i = 0; i < 20; i++) {
        const td = document.createElement('td');
        tr.appendChild(td);
    }
    // add row to table
    table.appendChild(tr);
}

//invoke to add
// makeRow();
// makeRow();

const button = document.getElementById("add-row").addEventListener("click", makeRow);

table.addEventListener("click", colorize);

function colorize() {
    console.log("clicked!");
}
