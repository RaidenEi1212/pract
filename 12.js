let header_button = document.querySelector(".mobile_icon");
header_button.addEventListener("click", function () {
    let header = document.querySelector("header");
    if (header.classList.contains("open")) {
        close_popup()
    }
    else {
        header.classList.add("open")
        header_button.querySelector("img").src = "free-icon-close-3945547.png"
    }
});

document.querySelector("#show_add_photo").addEventListener("click", function() {
    document.querySelector("#add_new_photo").classList.add("open");
})

document.querySelector("#cancel").addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector("#add_new_photo").classList.remove("open")
})
//function open_photo() {
//     let src = this.querySelector("img").src,
//         popup_photo = document.querySelector("#popup_photo");
//     popup_photo.querySelector("img").src = src;
//     popup_photo.classList.add("open");
// }
let photos = document.querySelectorAll(".photo");
for (let photo of photos) {
    photo.addEventListener("click", open_photo, false);
}

document.querySelector("#popup_photo").addEventListener("click", function () {
    this.classList.remove("open");
})





