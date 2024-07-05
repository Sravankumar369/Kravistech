/* Burger menu starts*/
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburger.addEventListener('click', function() {
        mobileMenu.classList.toggle('show');
    });
});

/*key applications starts*/
document.addEventListener("DOMContentLoaded", function() {
    const headings = document.querySelectorAll('.heading');
    const infos = document.querySelectorAll('.info');
    const timers = document.querySelectorAll('.timer');
    const images = [
        "Mission_Readiness_img.jpg",
        "Equipment_Handling_img.jpg",
        "Operational_Efficiency_img.jpg"
    ];
    const displayImage = document.getElementById('displayImage');
    let currentIndex = 0;
    let intervalId;
    let timeoutId;

    function showInfo(index) {
        // Hide all infos and timers
        infos.forEach((info, i) => {
            info.style.display = 'none';
            timers[i].style.display = 'none';
            timers[i].style.animation = 'none';
        });

        // Update image
        displayImage.style.opacity = 0;
        setTimeout(() => {
            displayImage.src = images[index];
            displayImage.style.opacity = 1;
        }, 500);

        // Show selected info and timer
        infos[index].style.display = 'block';
        infos[index].style.opacity = 0;
        setTimeout(() => {
            infos[index].style.opacity = 1;
        }, 500);
        timers[index].style.display = 'block';
        timers[index].style.animation = 'timer 10s linear infinite';
    }

    function startInterval() {
        intervalId = setInterval(() => {
            currentIndex = (currentIndex + 1) % headings.length;
            showInfo(currentIndex);
        }, 10000);
    }

    function resetInterval() {
        clearInterval(intervalId);
        clearTimeout(timeoutId);
        startInterval();
    }

    // Add click event listeners to headings
    headings.forEach((heading, index) => {
        heading.addEventListener('click', () => {
            currentIndex = index;
            showInfo(index);
            clearInterval(intervalId);
            clearTimeout(timeoutId);
            timeoutId = setTimeout(startInterval, 10000);
        });
    });

    // Initialize first display
    showInfo(currentIndex);
    startInterval();
});