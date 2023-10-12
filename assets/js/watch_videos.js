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

var earth_btn = document.getElementById('earth')
earth_btn.addEventListener('click', function(e){
    videoSrc = earth_btn.getAttribute('data-bs-src')
})

var chem_btn = document.getElementById('chem-ar')
chem_btn.addEventListener('click', function(e){
    videoSrc = chem_btn.getAttribute('data-bs-src')
})

// Virtual Reality
var ndw_btn = document.getElementById('nairobi-design-week')
ndw_btn.addEventListener('click', function(e){
    videoSrc = ndw_btn.getAttribute('data-bs-src')
})

var vrfashion_btn = document.getElementById('vr-fashion')
vrfashion_btn.addEventListener('click', function(e){
    videoSrc = vrfashion_btn.getAttribute('data-bs-src')
})

var anatomy_xr_btn = document.getElementById('anatomy_xr')
anatomy_xr_btn.addEventListener('click', function(e){
    videoSrc = anatomy_xr_btn.getAttribute('data-bs-src')
})

var chem_lab_btn = document.getElementById('chem-lab-vr')
chem_lab_btn.addEventListener('click', function(e){
    videoSrc = chem_lab_btn.getAttribute('data-bs-src')
})

var anatomy_vr_btn = document.getElementById('anatomy-vr')
anatomy_vr_btn.addEventListener('click', function(e){
    videoSrc = anatomy_vr_btn.getAttribute('data-bs-src')
})


// Metaverses 
var ndw_altspace_btn = document.getElementById('ndw-altspace')
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


// Animations
var mama_otis_btn = document.getElementById('mama-otis-animation')
mama_otis_btn.addEventListener('click', function(e){
    videoSrc = mama_otis_btn.getAttribute('data-bs-src')
})

var mark_angel_btn = document.getElementById('mark-angel-comedy')
mark_angel_btn.addEventListener('click', function(e){
    videoSrc = mark_angel_btn.getAttribute('data-bs-src')
})


// Tools | Python and Blutilities for Unreal Engine 5
var python_btn = document.getElementById('python-blutilities')
python_btn.addEventListener('click', function(e){
    videoSrc = python_btn.getAttribute('data-bs-src')
})


// Finally! Get the link. Autoplay isn't working for all devices
var videoModal = document.getElementById('modal-youtube-videos')
var video = document.getElementById('video')
var videoSrc

basePath = "https://www.youtube.com/embed/"
extension = "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
videoModal.addEventListener('shown.bs.modal',(e)=>{
    youTubeUrl =  basePath.concat(videoSrc, extension)
    console.log(youTubeUrl)
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