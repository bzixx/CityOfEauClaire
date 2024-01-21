/*function goBackButton(){ window.history.back()}

function goToHome(){window.open("https://www.ringeltech.com/","_self")}

function goToServices(){window.open("https://www.ringeltech.com/services/index.html","_self")}

<button onclick="document.getElementById('myImage').src='pic_bulboff.gif'">Turn off the light</button>

//document.getElementById("demo").style.fontSize = "35px";
//document.getElementById("demo").style.display = "block";
//document.getElementById("demo").style.display = "none";

function changeToBlue(){
    this.style.color = 'blue';
    this.style.fontStyle = 'italic';
    this.style.fontSize = '2em';
}

function changeToBlack(){
    this.style.color = 'black';
    this.style.fontStyle = 'normal';
    this.style.fontSize = '1.1em';
}

function changeThenJump(){
    for(i=0,i<5,i++){
        this.innerHTML = "Jumping in " + i ;
        
    }

}*/

function goToHotels() {
    var hotelButton = document.getElementById("HotelDivision");
    hotelButton.scrollIntoView();
}
function goToWeather() {
    var hotelButton = document.getElementById("WeatherDivision");
    hotelButton.scrollIntoView();
}
function goToFitness() {
    var hotelButton = document.getElementById("FitnessDivision");
    hotelButton.scrollIntoView();
}
function goToEntertainment() {
    var hotelButton = document.getElementById("ArtDivision");
    hotelButton.scrollIntoView();
}
function goToLinks() {
    var hotelButton = document.getElementById("LinksDivision");
    hotelButton.scrollIntoView();
}
function pageLoadedPROMPT(){
    alert("This page has loaded.  If you choose to continue browsing, you are agreeing to our Terms and Conditions. Welcome to the Visit Eau Claire Webpage.");
}

const MainImages = ["ECFlyover.jpg","ECFlyoverFall.jpg"];
const MenardsImages = ["Menards.png","Menards1.jpg"];
const BanburyImages = ["Banbury1.jpg","Banbury.jpg"];
const JAMFImages = ["JAMF.jpg","JAMF1.jpg"];
const HSHSImages = ["HSHS1.png","HSHS.jpg"];
const NestleImages = ["Nestle1.jpg","Nestle1.jpg"];
const RCUImages = ["RCU1.jpg","RCU.jpg"];
let GlobalIndex = 1;
window.setInterval("changeImagetoFall()", 5000);
window.setInterval("changeImageMenards()", 5000);
window.setInterval("changeImageBanbury()", 5000);
window.setInterval("changeImageJAMF()", 5000);
window.setInterval("changeImageHSHS()", 5000);
window.setInterval("changeImageNestle()", 5000);
window.setInterval("changeImageRCU()", 5000);

function changeImagetoFall(){
    let image = document.getElementById("MainPagePic");
    image.setAttribute("src", MainImages[GlobalIndex%2]);
    GlobalIndex++;
}
function changeImageMenards(){
    let image = document.getElementById("MainMenardsPic");
    image.setAttribute("src", MenardsImages[GlobalIndex%2]);
}
function changeImageBanbury(){
    let image = document.getElementById("MainBanburyPic");
    image.setAttribute("src", BanburyImages[GlobalIndex%2]);
}
function changeImageJAMF(){
    let image = document.getElementById("MainJAMFPic");
    image.setAttribute("src", JAMFImages[GlobalIndex%2]);
}
function changeImageHSHS(){
    let image = document.getElementById("MainHSHSPic");
    image.setAttribute("src", HSHSImages[GlobalIndex%2]);
}
function changeImageNestle(){
    let image = document.getElementById("MainNestlePic");
    image.setAttribute("src", NestleImages[GlobalIndex%2]);
}
function changeImageRCU(){
    let image = document.getElementById("MainRCUPic");
    image.setAttribute("src", RCUImages[GlobalIndex%2]);
}

/*function shakeIcon(providedElement){
    let icon = document.providedElement;
    icon.getAttribute()
}*/

let bodyObject = document.getElementById("MainBody");
bodyObject.onclick = pageLoadedPROMPT();

//let allSmallIconElements = document.getElementsByClassName("smallicon");
