 // Function to navigate to the respective pages
 function navigate(path) {
    window.location.href = path;
}

// Adding click event listeners to the icons
document.getElementById('home_icon').onclick = function() {
    navigate('home.html');
};
document.getElementById('about_icon').onclick = function() {
    navigate('Pages/about.html');
};
document.getElementById('history_icon').onclick = function() {
    navigate('Pages/history.html');
};
document.getElementById('psychology_icon').onclick = function() {
    navigate('Pages/psychology.html');
};

document.getElementById('history_iconh').onclick = function() {
    navigate('Pages/history.html');
};
document.getElementById('psychology_iconh').onclick = function() {
    navigate('Pages/psychology.html');
};