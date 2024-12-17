window.onload = function() {
    setThemeOnLoad();
};

function setThemeOnLoad() {
    if (getCookie("theme") == "dark") {
        darkTheme();
    }
    else if (getCookie("theme") == "light") {
        lightTheme();
    }
    else 
    {
        lightThemeFirst();
    }
}