const listCon = document.getElementById("listCon");
const Valuetodo = document.getElementById("todoText");
const listItems = document.getElementById("list-items");

const sortButton = document.getElementById('sortButton');

function CreateToDoData() {
    if (Valuetodo.value.trim() === "") {
        alert("Enter your message");
        Valuetodo.focus();
        return;
    }
    
    let li = document.createElement("li");
    const todoItems =
     `<div>${Valuetodo.value}</div>
        <button class="deleteButton"></button>`;
    li.innerHTML = todoItems;
    listItems.appendChild(li);
    
    Valuetodo.value = "";
    listCon.style.display = "block";
}

listItems.addEventListener('click', function(event) {
    if (event.target.classList.contains('deleteButton')) {
        const listItem = event.target.closest('li');
        listItems.removeChild(listItem);
    }
});


const addButton = document.getElementById("AddtoClick");
addButton.addEventListener("click", CreateToDoData);

let zamena = true;


function sortList() {
    const items = Array.from(listItems.children);

    sortButton.style.backgroundImage = sortButton.style.backgroundImage === 'url("/photos/image (4).png")' ? 'url("/photos/image (3).png")' : 'url("/photos/image (4).png")';
    
    console.log(sortButton.style.backgroundImage);
    
    items.sort((a, b) => {
        let aZamena = a.textContent.replace(/\s+/g, '');
        let bZamena = b.textContent.replace(/\s+/g, '');

        if (zamena) {
            return aZamena.localeCompare(bZamena);
        } else {
            return bZamena.localeCompare(aZamena); 
        }
    });
    
    while (listItems.firstChild) {
        listItems.removeChild(listItems.firstChild);
    }
    
    items.forEach(item => {
        listItems.appendChild(item);
    });
    
    zamena = !zamena;
}


sortButton.addEventListener('click', sortList);