const parent = document.querySelector(".parent")
// console.log(parent.children[1]);
for (let i = 0; i < parent.children.length; i++) {
    parent.children[i].style.color = "white"
    parent.children[i].style.backgroundColor = "green"
    parent.children[i].style.cursor = "pointer"
    // parent.children[i].style.hover = "" 
}
