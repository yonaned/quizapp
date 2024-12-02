function shareLink() {
    const message = "Use this bot to discover questions related to Psychology and History:\n \n \n👉https://t.me/Cncs_4_Practicebot " ;
    const telegramLink = `tg://msg?text=${message}`;

    // Open the Telegram link
    window.location.href = telegramLink;
}

// Add event listener to the button
document.getElementById('shareButton').addEventListener('click', function() {
    shareLink();
});