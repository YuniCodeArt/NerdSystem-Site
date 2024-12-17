const themeButton = document.getElementById("theme-input");
const NerdSystemLogo = document.getElementById("logo");

function onChangeTheme()
{
    if (getCookie("theme") == "dark") {
        lightTheme();
    } 
    else if (getCookie("theme") == "light") {
        darkTheme();
    }
    else {
        darkTheme();
    }
}


function applyFadeInAnimation(element) {
    element.classList.remove('fade');
    // Força o reflow para reiniciar a animação
    void element.offsetWidth;
    element.classList.add('fade');
}

function lightThemeFirst() {
    themeButton.setAttribute("title", "Dark Mode");
    NerdSystemLogo.style.border = "solid #2b2b2b"
    document.body.style.backgroundColor = "#ffffff"
    document.querySelector("header").style.borderBottom = "2px solid #2b2b2b";
    document.querySelector(".namenerd").style.color = "#2b2b2b";
    document.querySelector("footer").style.borderTop = "2px solid #2b2b2b";
    const buttons = document.querySelectorAll('button');
    buttons.forEach(function callback(value, index) {
        value.childNodes[1].setAttribute("src", "images/light/" + index + ".svg");
    });
    applyFadeInAnimation(document.querySelector(".container"));
}

function lightTheme() {
    themeButton.setAttribute("title", "Dark Mode");
    setCookie("theme", "light");
    NerdSystemLogo.style.border = "solid #2b2b2b"
    document.body.style.backgroundColor = "#ffffff"
    document.querySelector("header").style.borderBottom = "2px solid #2b2b2b";
    document.querySelector(".namenerd").style.color = "#2b2b2b";
    document.querySelector("footer").style.borderTop = "2px solid #2b2b2b";
    const buttons = document.querySelectorAll('button');
    buttons.forEach(function callback(value, index) {
        value.childNodes[1].setAttribute("src", "images/light/" + index + ".svg");
    });
    applyFadeInAnimation(document.querySelector(".container"));
    document.querySelector("hr").style.backgroundColor = "#2b2b2b";
}

function darkTheme() {
    themeButton.setAttribute("title", "Light Mode");
    setCookie("theme", "dark");
    NerdSystemLogo.style.border = "solid #ffffff"
    document.body.style.backgroundColor = "#2b2b2b";
    document.querySelector("header").style.borderBottom = "2px solid #ffffff";
    document.querySelector(".namenerd").style.color = "#ffffff";
    document.querySelector("footer").style.borderTop = "2px solid #ffffff";
    const buttons = document.querySelectorAll('button');
    buttons.forEach(function callback(value, index) {
        value.childNodes[1].setAttribute("src", "images/dark/" + index + ".svg");
    });
    applyFadeInAnimation(document.querySelector(".container"));
    document.querySelector("hr").style.backgroundColor = "#ffffff";
}