let pressEnter = document.getElementById('input-items');
let i = 0;

/* Event Listener when 'Enter' key is pressed */
pressEnter.addEventListener('keydown', (e)=>{
    if(e.key == 'Enter')
    {
        Add();
    }
})


/* Function to add user inputs inside list items */
function Add()
{
    /* Fetching user input when enter key is pressed */
    let userInput = document.getElementById('input-items').value;

    /* If user did not enter any value */
    if(userInput == "")
    {
        alert("ERROR : You have not entered any value");
    }

    /* If list is full and user tries to insert new value */
    else if(i==8)
    {
        alert("ERROR : List is full!\nPlease clear all your items");
    }

    /* Inserting new Todos */
    else
    {
        let listItem = document.querySelector('.added-items').getElementsByTagName('li')[i++];
        listItem.innerText = userInput;
        listItem.style.display = "block";
        listItem.style.borderStyle = "solid";
        
        document.getElementById('input-items').value = "";
        document.getElementById('input-items').focus();
        document.getElementById('btn2').style.display = "block";
    }
}


/* Function that removes everything */
function Clear()
{
    for(let j=0; j<8; j++)
    {
        document.querySelector('.added-items').getElementsByTagName('li')[j].innerText = "";
        document.querySelector('.added-items').getElementsByTagName('li')[j].style.display = "none";
        document.querySelector('.added-items').getElementsByTagName('li')[j].style.borderStyle = "initial";
    }

    document.getElementById('input-items').value = "";
    document.getElementById('input-items').focus();
    document.getElementById('btn2').style.display = "none";
    i = 0;
}