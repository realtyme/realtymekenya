// Virtual Reality
var vrfashion_btn = document.getElementById('vr-fashion')
vrfashion_btn.addEventListener('click', function(e){
    videoSrc = vrfashion_btn.getAttribute('data-bs-src')
})

var ndw_btn = document.getElementById('nairobi-design-week')
ndw_btn.addEventListener('click', function(e){
    videoSrc = ndw_btn.getAttribute('data-bs-src')
})

var chem_lab_btn = document.getElementById('chem-lab-vr')
chem_lab_btn.addEventListener('click', function(e){
    videoSrc = chem_lab_btn.getAttribute('data-bs-src')
})

var archery_game_btn = document.getElementById('archery-game-vr')
archery_game_btn.addEventListener('click', function(e){
    videoSrc = archery_game_btn.getAttribute('data-bs-src')
})

var anatomy_vr_btn = document.getElementById('anatomy-vr')
anatomy_vr_btn.addEventListener('click', function(e){
    videoSrc = anatomy_vr_btn.getAttribute('data-bs-src')
})

var anatomy_xr_btn = document.getElementById('anatomy-xr')
anatomy_xr_btn.addEventListener('click', function(e){
    videoSrc = anatomy_xr_btn.getAttribute('data-bs-src')
})

var earth_vr_btn = document.getElementById('geography-vr-101')
earth_vr_btn.addEventListener('click', function(e){
    videoSrc = earth_vr_btn.getAttribute('data-bs-src')
})

// Metaverses 
var ndw_altspace_btn = document.getElementById('post-nairobi-design-week')
ndw_altspace_btn.addEventListener('click', function(e){
    videoSrc = ndw_altspace_btn.getAttribute('data-bs-src')
})

var club_metaverse_btn = document.getElementById('club-metaverse')
club_metaverse_btn.addEventListener('click', function(e){
    videoSrc = club_metaverse_btn.getAttribute('data-bs-src')
})

var rangi_btn = document.getElementById('rangi')
rangi_btn.addEventListener('click', function(e){
    videoSrc = rangi_btn.getAttribute('data-bs-src')
})

var floating_mountains_btn = document.getElementById('floating-mountains')
floating_mountains_btn.addEventListener('click', function(e){
    videoSrc = floating_mountains_btn.getAttribute('data-bs-src')
})

// Finally! Get the link. Autoplay isn't working for all devices
var videoModal = document.getElementById('modal-youtube-videos')
var video = document.getElementById('video')
var videoSrc

basePath = "https://www.youtube.com/embed/"
extension = "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
videoModal.addEventListener('shown.bs.modal',(e)=>{
    youTubeUrl =  basePath.concat(videoSrc, extension)
    //console.log(youTubeUrl)
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