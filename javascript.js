let Photos = [];
var image_container = document.getElementById('image_container');
var loader = document.getElementById('loader');
var countImagesLoaded = 0;
var ready = false;
var totalImages = 0;
const count = 10;
var apiKey = '3vUzAi3nySSI49-D6GTFrYyLK7vwswn7AVh1iruP4Ew'
var apiUnsplash = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}&query=girl`

let hidenLoad = () => {
    loader.setAttribute('style', 'opacity : 0; display:none');
    image_container.setAttribute('style', 'opacity : 1; transition: 0.5s');
}

let showLoading = () =>{
    loader.setAttribute('style', 'opacity : 1');
    image_container.setAttribute('style', 'opacity : 0');
}

let isCheckLoaded = () => {
    countImagesLoaded++;
    if(countImagesLoaded === totalImages)
        ready = true;
}

let showPhoto = () =>{
    totalImages = Photos.length;
    Photos.forEach(photo => {
        const div_tag = document.createElement("div");
        div_tag.classList.add("photo_container");
        const a_tag = document.createElement("a");
        a_tag.setAttribute('href', `${photo.links.html}`);
        a_tag.setAttribute('target', "_blank");
    
        const img = document.createElement("img");
        img.setAttribute('src', `${photo.urls.regular}`);
        img.setAttribute('alt', `${photo.alt_description}`);
        img.setAttribute('title', `${photo.alt_description.toUpperCase()}`);
    
        img.addEventListener("load", isCheckLoaded);
    
        a_tag.appendChild(img); // Thêm thẻ img vào trong thẻ a
        div_tag.appendChild(a_tag); // Thêm thẻ img vào trong div
        image_container.appendChild(div_tag); // Thêm thẻ div vào trong img_container
        img.addEventListener('load', isCheckLoaded);
    })
}

async function getPhoto(){
    try {
        const response = await fetch(apiUnsplash);
        Photos = await response.json();
        hidenLoad();
        showPhoto();

    } catch (error) {
        console.log("Load chua xong!___ "+error);
        apiKey = 'b1W7HIIRrZOO4tZTNaVVBLRx7L7q810zjqEjxj3OAeY';
        apiUnsplash = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}&query=girl`
        getPhoto();
    }
}

var loadMorePhoto = () =>{
    showLoading();
    setTimeout(() =>{
    getPhoto();
    }, 2000)
}

loadMorePhoto();

window.addEventListener('scroll', () => {
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready == true) // 772 + x > 1770 - 1000 = 1300
    {
        ready = false;
        countImagesLoaded = 0;
        loadMorePhoto();
    }   
})
