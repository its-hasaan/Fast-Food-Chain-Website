const homeBtn = document.getElementById('homeBtn');
const burgerBtn = document.getElementById('burgersBtn');
const pizzasBtn = document.getElementById('pizzasBtn');
const rollsBtn = document.getElementById('rollsBtn');
const drinksBtn = document.getElementById('drinksBtn');
const aboutBtn = document.getElementById('aboutBtn');
const contactBtn = document.getElementById('contactBtn');
const faqBtn = document.getElementById('faqBtn');
const cart = document.getElementById('cart');

const scrollOffset = -100;

homeBtn.onclick = () => {
    if(window.location.href != 'file:///C:/Stuff/Coding/HTML/Project/main.html')
        window.location.href = 'main.html';
    else
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
}
burgerBtn.onclick = () => {
    document.getElementById('Burgers').scrollIntoView();
    setTimeout(scroll, 700);
}
pizzasBtn.onclick = () => {
    document.getElementById('Pizzas').scrollIntoView();
    setTimeout(scroll, 700);
}
rollsBtn.onclick = () => {
    document.getElementById('Rolls').scrollIntoView();
    setTimeout(scroll, 700);
}
drinksBtn.onclick = () => {
    document.getElementById('Drinks').scrollIntoView();
    setTimeout(scroll, 700);
}
aboutBtn.onclick = () => {
    window.location.href = 'about.html';
}
contactBtn.onclick = () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
}
faqBtn.onclick = () => {
    window.location.href = 'faq.html';
}
cart.onclick = () => {
    window.location.href = 'cart.html';
}


function scroll(){
    window.scrollBy(0, scrollOffset);
}
