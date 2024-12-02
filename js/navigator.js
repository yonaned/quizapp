 // Function to navigate to the respective pages
 function navigate(path) {
    window.location.href = path;
}

// Adding click event listeners to the icons
document.getElementById('home_icon').onclick = function() {
    navigate('index.html');
};
document.getElementById('about_icon').onclick = function() {
    navigate('pages/about.html');
};
document.getElementById('history_icon').onclick = function() {
    navigate('pages/history.html');
};
document.getElementById('psychology_icon').onclick = function() {
    navigate('pages/psychology.html');
};

document.getElementById('history_iconh').onclick = function() {
    navigate('pages/history.html');
};
document.getElementById('psychology_iconh').onclick = function() {
    navigate('pages/psychology.html');
};
