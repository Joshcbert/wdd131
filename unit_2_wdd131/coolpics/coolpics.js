
const menuButton = document.querySelector(".menuButton")
const menuNav = document.querySelector(".menu")
const gallery = document.querySelector(".gallery")

function menuDisplay() {
    console.log("Clicked")
    const buttonPress = document.querySelector(".menu")
    buttonPress.classList.toggle("hide");
}

function handleResize() {
    const width = window.innerWidth;
    if (width > 1000) {
        console.log("Big Screen");
        menuNav.classList.remove("hide")
    } else {
        console.log("Small Screen"); 
        menuNav.classList.add("hide")
    }
}

function viewerTemplate(imagePath, altText){
    return`
    <div class="viewer">
        <button class="close-viewer">X</button>
        <img src="${imagePath}" alt="${altText}">
    </div>`;
}

function viewHandler(event){
    const picSelected = event.target
    if (picSelected.tagName !== "IMG") return;

    const picSrc = picSelected.getAttribute("src")
    
    const picFull = picSrc.replace("-sm", "-full");

    const addHTML = viewerTemplate(picFull,picSelected.alt);

    document.body.insertAdjacentHTML("afterbegin",addHTML);

    document.querySelector(".close-viewer").addEventListener("click",closeViewer)

}

function closeViewer(){
    document.querySelector(".viewer").remove()

}

handleResize()
menuButton.addEventListener("click", menuDisplay)
window.addEventListener("resize",handleResize)
gallery.addEventListener("click",viewHandler)



