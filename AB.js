var data = [
    {name: 'John', age: 23, gender: 'Male'},
    {name: 'Sara', age: 24, gender: 'Female'},
    {name: 'Tom', age: 25, gender: 'Male'},
    {name: 'Linda', age: 26, gender: 'Female'},
    {name: 'Mike', age: 27, gender: 'Male'}
];

var table = document.createElement('table');
var thead = document.createElement('thead');
var tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

document.body.appendChild(table);

var row = document.createElement('tr');
var headingCells = ['Name', 'Age', 'Gender'];

for (var i=0; i < headingCells.length; i++) {
    var headCell = document.createElement('th');
    headCell.innerHTML = headingCells[i];
    row.appendChild(headCell);
}

thead.appendChild(row);

data.forEach(function(item) {
    var row = document.createElement('tr');
    var cells = Object.keys(item).map(function(key) {
        var cell = document.createElement('td');
        cell.innerHTML = item[key];
        return cell;
    });
    cells.forEach(function(cell) {
        row.appendChild(cell);
    });
    tbody.appendChild(row);
});
function filterData(key, value) {
    var rows = tbody.rows;
    for (var i=0; i < rows.length; i++) {
        var row = rows[i];
        if (row.children[key].innerHTML === value) {
            row.className = '';
        } else {
            row.className = 'hidden';
        }
    }
}
