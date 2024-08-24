console.log("hey");
const navlinks = document.querySelectorAll('.nav-link');



navlinks.forEach(item => {
    item.addEventListener("click", () =>{
        console.log("item clicked")
    })
})