function start() {
    if(document.getElementsByClassName("znacky")[0] != null) setInterval(animate, 1500);
    if(getFromFile("color") == "") {
        saveToFile("color", "black");
    }
    setUpColor();
}

function clickS(clicked = "") {
    clearFile("clicked");
    saveToFile("clicked", clicked);
    openWebsite("animation.html");
}

function setUpAnimation() {
    var fromFile = getFromFileByIndex("clicked", 0);
    setTimeout(openWebsiteByAnim, 500);
    if(fromFile == "Intel") {
        document.getElementsByClassName("animatedIMG")[0].innerHTML = '<img src = "images/intel.png" alt="">'
    }
    if(fromFile == "AMD") {
        document.getElementsByClassName("animatedIMG")[0].innerHTML = '<img src = "images/amd.png" alt="">'
    }
    if(fromFile == "Nvidia") {
        document.getElementsByClassName("animatedIMG")[0].innerHTML = '<img src = "images/nvidia.png" alt="">'
    }
}

function openWebsiteByAnim() {
    var fromFile = getFromFileByIndex("clicked", 0);
    if(fromFile == "Intel") {
        openWebsite("https://www.intel.com/content/www/us/en/homepage.html");
    }
    if(fromFile == "AMD") {
        openWebsite("https://www.amd.com/en.html");
    }
    if(fromFile == "Nvidia") {
        openWebsite("https://www.nvidia.com/cs-cz/");
    }
}

var status = 1;

function animate() {
    if(status == 0) {
        document.getElementsByClassName("znacky")[0].innerHTML = '<div class="animated"><div class="leftZ" onclick="' + "clickS('Intel')" + '"><img src="images/intel.png"><div>Intel</div></div><div class="midZ" onclick="' + "clickS('Nvidia')" + '"><img src="images/nvidia.png" alt=""><div>Nvidia</div></div><div class="rightZ" onclick="' + "clickS('AMD')" + '"><img src="images/amd.png" alt=""><div>AMD</div></div></div><div class="copyZ" onclick="' + "clickS('Intel')" + '"><img src="images/intel.png" alt=""><div>Intel</div></div>';
        status++;
    }
    else if(status == 1) {
        document.getElementsByClassName("znacky")[0].innerHTML = '<div class="animated"><div class="leftZ" onclick="' + "clickS('Nvidia')" + '"><img src="images/nvidia.png"><div>Nvidia</div></div><div class="midZ" onclick="' + "clickS('AMD')" + '"><img src="images/amd.png" alt=""><div>AMD</div></div><div class="rightZ" onclick="' + "clickS('Intel')" + '"><img src="images/intel.png" alt=""><div>Intel</div></div></div><div class="copyZ" onclick="' + "clickS('Nvidia')" + '"><img src="images/nvidia.png" alt=""><div>Nvidia</div></div>';
        status++;
    }
    else {
        document.getElementsByClassName("znacky")[0].innerHTML = '<div class="animated"><div class="leftZ" onclick="' + "clickS('AMD')" + '"><img src="images/amd.png"><div>AMD</div></div><div class="midZ" onclick="' + "clickS('Intel')" + '"><img src="images/intel.png" alt=""><div>Intel</div></div><div class="rightZ" onclick="' + "clickS('Nvidia')" + '"><img src="images/nvidia.png" alt=""><div>Nvidia</div></div></div><div class="copyZ" onclick="' + "clickS('AMD')" + '"><img src="images/amd.png" alt=""><div>AMD</div></div>';
        status = 0;
    }
}

function getFromFile(fileName = "") {
    var content = localStorage.getItem(fileName);
    if(content == null) content = "";
    return content;
}

function getFromFileByIndex(fileName = "", index = 0) {
    var content = getFromFile(fileName);
    return content.split("#%*")[index];
}

function clearFile(fileName = "") {
    localStorage.setItem(fileName, "");
}

function saveToFile(fileName = "", contentToAdd = "") {
    var content = getFromFile(fileName);
    content += contentToAdd + "#%*";
    localStorage.setItem(fileName, content);
}

function setUpColor() {
    var fromFile = getFromFileByIndex("color", 0);
    console.log(fromFile);
    if(fromFile == "white") {
        document.querySelector(":root").style.setProperty("--color", "rgb(230, 230, 230)");
        document.querySelector(":root").style.setProperty("--color2", "rgb(255, 255, 255)");
        document.querySelector(":root").style.setProperty("--topColor", "rgb(220, 220, 220)");
        document.querySelector(":root").style.setProperty("--topColorDarker", "rgb(210, 210, 210)");
        document.querySelector(":root").style.setProperty("--textColor", "black");
        if(document.getElementsByClassName("switcher")[0] != null) document.getElementsByClassName("switcher")[0].innerHTML = '<img src="images/moon.png" alt="">';
    }
    else {
        document.querySelector(":root").style.setProperty("--color", "rgb(19, 19, 19)");
        document.querySelector(":root").style.setProperty("--color2", "rgb(44, 44, 44)");
        document.querySelector(":root").style.setProperty("--topColor", "rgb(50, 50, 50)");
        document.querySelector(":root").style.setProperty("--topColorDarker", "rgb(40, 40, 40)");
        document.querySelector(":root").style.setProperty("--textColor", "white");
        if(document.getElementsByClassName("switcher")[0] != null) document.getElementsByClassName("switcher")[0].innerHTML = '<img src="images/sun.png" alt="">';
    }
}

function changeColor() {
    var color = getFromFileByIndex("color", 0);
    clearFile("color");
    if(color == "white") {
        saveToFile("color", "black");
    }
    else {
        saveToFile("color", "white");
    }
    setUpColor();
}

function openWebsite(website = "", samePage = true) {
    if(!samePage) window.open(website);
    else window.open(website, "_self");
}

function showDarkBackground() {
    var fromFile = getFromFileByIndex("color", 0);
    if(fromFile == "white") {
        document.querySelector(":root").style.setProperty("--color", "rgb(185, 185, 185)");
        document.querySelector(":root").style.setProperty("--color2", "rgb(210, 210, 210)");
        document.querySelector(":root").style.setProperty("--topColor", "rgb(175, 175, 175)");
        document.querySelector(":root").style.setProperty("--topColorDarker", "rgb(165, 165, 165)");
        document.querySelector(":root").style.setProperty("--textColor", "black");
    }
    else {
        document.querySelector(":root").style.setProperty("--color", "rgb(0, 0, 0)");
        document.querySelector(":root").style.setProperty("--color2", "rgb(19, 19, 19)");
        document.querySelector(":root").style.setProperty("--topColor", "rgb(25, 25, 25)");
        document.querySelector(":root").style.setProperty("--topColorDarker", "rgb(15, 15, 15)");
        document.querySelector(":root").style.setProperty("--textColor", "rgb(50, 50, 50)");
    }
}


var image = false;
var id = "";

function showImage(imageName = "", idS = "") {
    setTimeout(() => {
        image = true;
        id = idS;
        document.getElementsByClassName("biggerImg")[0].innerHTML = '<a href="images/' + imageName + '.png"><img src="images/' + imageName + '.png"></a>';
        document.getElementById(id).style.visibility = "hidden";
        document.querySelector(":root").style.setProperty("--opacity", "0.2");
        showDarkBackground();
    }, 10);
}

document.addEventListener('click', (e) => {
    if(image) {
        var found = false;
        if(e.x < document.getElementsByClassName("biggerImg")[0].getBoundingClientRect().left) {
            found = true;
        }
        if(e.x > document.getElementsByClassName("biggerImg")[0].getBoundingClientRect().right) {
            found = true;
        }
        if(e.y < document.getElementsByClassName("biggerImg")[0].getBoundingClientRect().top) {
            found = true;
        }
        if(e.y > document.getElementsByClassName("biggerImg")[0].getBoundingClientRect().bottom) {
            found = true;
        }
        if(found) {
            image = false;
            document.getElementsByClassName("biggerImg")[0].innerHTML = "";
            document.querySelector(":root").style.setProperty("--opacity", "1");
            document.getElementById(id).style.visibility = "visible";
            setUpColor();
        }
    }
})


var zdroje = false;

function hideZdroje() {
    zdroje = false;
    document.getElementsByClassName("zdrojeList")[0].style.visibility = "hidden";
    document.getElementsByClassName("zdrojeChange")[0].innerHTML = "Zobrazit zdroje";
}

function changeZdroje() {
    if(zdroje) {
        hideZdroje();
    }
    else {
        zdroje = true;
        document.getElementsByClassName("zdrojeList")[0].style.visibility = "visible";
        document.getElementsByClassName("zdrojeChange")[0].innerHTML = "Schovat zdroje";
    }
}