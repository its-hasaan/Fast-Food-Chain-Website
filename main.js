const menuItems = document.getElementsByClassName("gallery");

for(let i=0;i<menuItems.length;i++){
    menuItems[i].onclick = () => {
        window.location.href = 'cart.html';
    }
}