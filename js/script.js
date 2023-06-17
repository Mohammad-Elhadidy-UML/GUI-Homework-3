/*
File: index.html
GUI Assignment: Creating an Interactive Dynamic Table
Mohammad Elhadidy, UMass Lowell Computer Science, Mohammad_Elhadidy@student.uml.edu
Description: Created an interactive dynamic table using HTML, Javascript, and CSS. Used inputs
values for rows and columns and a table is generated according to their input.
Sources: https://css-tricks.com/a-table-with-both-a-sticky-header-and-a-sticky-first-column/
https://mdbootstrap.com/docs/b4/jquery/tables/scroll/
Copyright (c) 2021 by Mohammad. All rights reserved. May be freely copied or
excerpted for educational purposes with credit to the author.
updated by ME on June 16, 2023 at 11:15 PM
*/
var form = document.getElementById('form');
const msg = document.querySelector('.msg');

form.addEventListener('submit', function(event) { /* Deals with when user clicks on "Generate Table"*/
    event.preventDefault();
    var minCol = Math.round(Number(document.getElementById('num1').value)); /* Get all inputed values */
    var maxCol = Math.round(Number(document.getElementById('num2').value));
    var minRow = Math.round(Number(document.getElementById('num3').value));
    var maxRow = Math.round(Number(document.getElementById('num4').value));

    if ((minCol > maxCol) || (minRow > maxRow)) { /* Deal with wrong user input */
        const tempMsg = document.createElement('div');
        tempMsg.classList.add('error');
        tempMsg.innerHTML = 'Min Row/Col cannot be greater than Max Row/Col';
        msg.appendChild(tempMsg);
        setTimeout(() => tempMsg.remove(), 3000);
        return;
    }

    if ((minCol < -50) || (minCol > 50)) { /* Deal with wrong user input */
        const tempMsg = document.createElement('div');
        tempMsg.classList.add('error');
        tempMsg.innerHTML = 'Min row should be no more than 50 and no less than -50';
        msg.appendChild(tempMsg);
        setTimeout(() => tempMsg.remove(), 3000);
        return;
    }

    if ((maxCol < -50) || (maxCol > 50)) { /* Deal with wrong user input */
        const tempMsg = document.createElement('div');
        tempMsg.classList.add('error');
        tempMsg.innerHTML = 'Max row should be no more than 50 and no less than -50';
        msg.appendChild(tempMsg);
        setTimeout(() => tempMsg.remove(), 3000);
        return;
    }

    if ((minRow < -50) || (minRow > 50)) { /* Deal with wrong user input */
        const tempMsg = document.createElement('div');
        tempMsg.classList.add('error');
        tempMsg.innerHTML = 'Min column should be no more than 50 and no less than -50';
        msg.appendChild(tempMsg);
        setTimeout(() => tempMsg.remove(), 3000);
        return;
    }

    if ((maxRow < -50) || (maxRow > 50)) { /* Deal with wrong user input */
        const tempMsg = document.createElement('div');
        tempMsg.classList.add('error');
        tempMsg.innerHTML = 'Max column should be no more than 50 and no less than -50';
        msg.appendChild(tempMsg);
        setTimeout(() => tempMsg.remove(), 3000);
        return;
    }

    clearBox('mtable'); /* Clear table for new table generation */

    var findTable = document.getElementById("mtable");

    for (var i = minRow; i <= maxRow; i++) { /* Deal with first row of values. Insert necessary # of cells based on input */
        if (i == minRow) {
            var row  = findTable.insertRow(-1);
            temp = row.insertCell(-1);
            if (minCol % 2 == 1) {
                temp.style.background = "lightblue";
            }
        }
        temp = row.insertCell(-1);
        temp.textContent = i;
        temp.style.color="blue";
        temp.style.position = "sticky";
        temp.style.top = "0";
        if (minCol % 2 == 1) {
            temp.style.background = "lightblue";
        }
    }

    var curCol = minCol;

    for (var i = minCol; i <= maxCol; i++) { /* Iterate through variable dealing with column and insert dynamic number of rows according to user input */
        var row  = findTable.insertRow(-1);
        for (var j = minRow; j <= maxRow; j++) {
            if (j == minRow) { /* Deal with first column */
                temp = row.insertCell(-1);
                temp.textContent = curCol;
                temp.style.color="blue";
                temp.style.position = "sticky";
                temp.style.left = "0";
                if (i % 2 == 0) {
                    temp.style.background = "lightblue";
                }
            }
            temp = row.insertCell(-1);
            temp.textContent = j * i;
            if (i % 2 == 0) {
                temp.style.background = "lightblue";
            }
        }
        curCol++;
    }
})

function clearBox(elementID) { /* Function which clears table */
    var div = document.getElementById(elementID);
      
    while(div.firstChild) {
        div.removeChild(div.firstChild);
    }
}
