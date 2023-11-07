// Augmented Reality
var africa_ar_btn = document.getElementById('africa-ar')
africa_ar_btn.addEventListener('click', function(e){
    videoSrc = africa_ar_btn.getAttribute('data-bs-src')
})

var turkana_btn = document.getElementById('turkana-boy')
turkana_btn.addEventListener('click', function(e){
    videoSrc = turkana_btn.getAttribute('data-bs-src')
})

var sogallo_btn = document.getElementById('sogallo-ar')
sogallo_btn.addEventListener('click', function(e){
    videoSrc = sogallo_btn.getAttribute('data-bs-src')
})

var abwao_btn = document.getElementById('abwao-kraal')
abwao_btn.addEventListener('click', function(e){
    videoSrc = abwao_btn.getAttribute('data-bs-src')
})

var earth_btn = document.getElementById('earth-ar')
earth_btn.addEventListener('click', function(e){
    videoSrc = earth_btn.getAttribute('data-bs-src')
})

var chem_btn = document.getElementById('periodic-table-ar')
chem_btn.addEventListener('click', function(e){
    videoSrc = chem_btn.getAttribute('data-bs-src')
})

// Finally! Get the link. Autoplay isn't working for all devices
var videoModal = document.getElementById('modal-youtube-videos')
var video = document.getElementById('video')
var videoSrc

basePath = "https://www.youtube.com/embed/"
extension = "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
videoModal.addEventListener('shown.bs.modal',(e)=>{
    youTubeUrl =  basePath.concat(videoSrc, extension)
    video.setAttribute('src', youTubeUrl)
    //video.setAttribute('src', videoSrc + '?autoplay=1&amp;modestbranding=1&amp;showinfo=0')
})

videoModal.addEventListener('hide.bs.modal',(e)=>{
    video.setAttribute('src', "")
})

// Close the video if the user clicks outside!
window.onclick = function(event) {
  if (event.target == videoModal) {
    videoModal.style.display = "none";
  }
}