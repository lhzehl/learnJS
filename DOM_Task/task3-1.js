const btn1 = document.getElementById("btn-msg");

// console.log(btn1.dataset.text);
btn1.addEventListener("click", () => alert(btn1.dataset.text));

btn1.addEventListener('mouseover', ()=> btn1.classList.add('btn-danger'))
btn1.addEventListener('mouseout', ()=> btn1.classList.remove('btn-danger'))


const displayEl = document.getElementById('tag')
console.log(displayEl.textContent)

document.addEventListener('click', (e)=>displayEl.textContent = e.target.tagName)




const btn2 = document.getElementById('btn-generate');

btn2.addEventListener('click', ()=>{
    const ul = document.querySelector('ul')
    ul.insertAdjacentHTML('beforeend', `<li class="newitem">item ${ul.children.length +1} </li>` )
})