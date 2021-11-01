const workSection = document.querySelectorAll("#works .row");
const lightbox = document.querySelector(".lightbox")
const lightboxImage = document.querySelector(".lightbox-img");
const lightboxClose = document.querySelector(".lightbox-close");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let imageCount = 13;
let count = "";
for (var i = 1; i <= imageCount; i++) {
  workSection[1].innerHTML += `    <!-- Work Item Start -->
      <div class="work-item">
        <div class="work-item-inner">
          <img src="imgs/image_${i}.jpg" data-large="imgs/image_${i}" alt="work">
          <div class="overlay">
          </div>
        </div>
      </div>
      <!-- Work Item End -->`
}

let workItems = document.querySelectorAll(".work-item-inner");
const windowHeight = window.innerHeight;

workItems.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    // Parameters for lightbox
    lightbox.classList.add("open");
    lightboxImage.style.maxHeight = `${windowHeight}` + "px";
    let count = index

    // open lightbox
    openLightbox(count);

    // next listesner
    next.addEventListener("click", (e) => {
      console.log(count)
      if (count <= 11) {
        next.classList.remove("deactivate")
        count++;
        openLightbox(count);
      } else if(count === 12){
        count = 0;
        openLightbox(count);
      }
    })
    // next listesner
    prev.addEventListener("click", (e) => {
      if (count >= 1) {
        count--;
        openLightbox(count);
      } else if(count === 0){
        count = 12;
        openLightbox(count);
      }
    })
  })
});

// lightbox close
lightboxClose.addEventListener("click", (e) => {
  e.target.parentElement.parentElement.classList.remove("open")
})




// open lightbox
function openLightbox(index) {
  let image = workItems[index].children[0].getAttribute("src");
  lightboxImage.setAttribute("src", `${image}`)

}
