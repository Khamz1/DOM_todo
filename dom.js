const button2 = document.getElementsByClassName('button')[0]
const input = document.getElementById('input')
const list = document.getElementById('list')

button2.addEventListener('click', (e) => {
    e.preventDefault()

    if (input.value == '') { return };

    const li = document.createElement("li");
    const removeButton = document.createElement('button');
    const checkBox = document.createElement('input');

    
    checkBox.type = 'checkbox'
    removeButton.textContent = 'X'



    removeButton.addEventListener('click', (e) => {
        e.target.parentElement.remove();
    })
    checkBox.addEventListener('click', (e) => {
        const li = e.target.parentElement
        if (checkBox.checked) { li.style.textDecoration = 'line-through' }
        else { li.style.textDecoration = 'none' }
    })



    li.textContent = input.value;
    li.append(removeButton)
    li.prepend(checkBox)
    list.append(li)
    input.value = ''

})
