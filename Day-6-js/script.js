// Alert on load + online check + URL log + clock + browser info
window.onload = function () {
    alert("Welcome to My Website");

    if (navigator.onLine) {
        alert("You are currently online.");
    } else {
        alert("You are currently offline.");
    }

    console.log("Current URL is:", window.location.href);

    setInterval(updateTime, 1000);
    showBrowserInfo();
};

// Task 3 - Add <li>
function addListItem() {
    const ul = document.getElementById('myList');
    const li = document.createElement('li');
    li.textContent = 'New Item Added By Yousef Elbaz';
    ul.appendChild(li);
}

// Task 4 - Counter
let count = 0;
function increaseCounter() {
    count++;
    document.getElementById('counterValue').textContent = count;
}

// Task 5 - Open GitHub
function openGitHub() {
    window.open("https://github.com/Yousef-elbazz", "_blank");
}

// Task 6 - Clock
function updateTime() {
    const now = new Date();
    document.getElementById('timeDisplay').textContent = now.toLocaleTimeString();
}

// Task 7 - Browser Info
function showBrowserInfo() {
    const browserInfo = `Browser: ${navigator.appName} | Version: ${navigator.appVersion}`;
    document.getElementById("browserInfo").textContent = browserInfo;
}

// Task 8 - Redirect to Google
function redirectToGoogle() {
    window.location.href = "https://www.google.com";
}

// Task 9 & 10 - History Back & Forward
function goBack() {
    window.history.back();
}
function goForward() {
    window.history.forward();
}

// Task 11 - Input click log
document.getElementById("myInput").addEventListener("click", function () {
    console.log("Input clicked");
});

// Task 12 - Hover color change
const btn = document.getElementById("hoverBtn");
btn.addEventListener("mouseover", function () {
    btn.style.backgroundColor = "lightgreen";
});
btn.addEventListener("mouseout", function () {
    btn.style.backgroundColor = "";
});

// Task 13 - preventDefault in form
document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Form submitted without page reload!");
});

// Task 14 - Event bubbling and event.target
const div = document.getElementById("outerDiv");
const innerBtn = document.getElementById("innerBtn");
div.addEventListener("click", function (event) {
    console.log("DIV clicked. Target:", event.target.tagName);
});
innerBtn.addEventListener("click", function (event) {
    console.log("BUTTON clicked. Target:", event.target.tagName);
});

// Task 15 - addEventListener and removeEventListener
const toggleBtn = document.getElementById("toggleBtn");
function handleClick() {
    alert("Button clicked!");
    toggleBtn.removeEventListener("click", handleClick);
    toggleBtn.textContent = "Event Removed!";
}
toggleBtn.addEventListener("click", handleClick);
