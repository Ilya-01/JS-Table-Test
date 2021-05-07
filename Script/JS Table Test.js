function addRow() {
    var table = document.getElementById('data');
    var row = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    td1.innerHTML = document.getElementById('firstName').value;
    td2.innerHTML = document.getElementById('lastName').value;
    td3.innerHTML = document.getElementById('age').value;
    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    table.children[0].insertBefore(row, table.children[0].childNodes[1]);
}