let message = "Hello my favorite";

// elements.onclick = function () {
//     alert (message)
// }
let messageFunction = function () {
    alert(message)
}

elements.addEventListener('contextmenu', messageFunction);
elements.addEventListener('click', messageFunction);
elements.addEventListener('mouseover', messageFunction);