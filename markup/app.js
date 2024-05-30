let lifetimeScore = 0; 

document.addEventListener('DOMContentLoaded', () => {
    const clickableElement = document.querySelector('.clickingArea');

    clickableElement.addEventListener('click', (event) => {
        const circle = document.createElement('div');
        circle.classList.add('circle');
        const x = event.clientX ;
        const y = event.clientY;
        circle.style.left = `${x}px`;
        circle.style.top = `${y}px`;

        clickableElement.appendChild(circle);

        circle.addEventListener('animationend', () => {
            circle.remove();
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    let lifeTimeCount = -1;
    let count = 500; // Start from 500
    let maxCount = 500;
    let increment = 100 / maxCount; 
    let inCooldown = false;
    let cooldownTimeLeft = 0;
    
    const clickingArea = document.querySelector(".clickingArea");
    const progress = document.querySelector('.progress');
    const progressStatus = document.querySelector('.progressStatus');
    const currentScore = document.querySelector('.current-score');
    const remainingCount = document.querySelector('.remaining-count');
    const cooldownMessage = document.querySelector('.cooldown-message');

    updateProgress(); // Update progress initially

    clickingArea.addEventListener('click', () => {
        if (inCooldown) {
            showCooldownMessage();
            return;
        }

        if (count > 0) { // Decrease count until it reaches 0
            count--;
            updateProgress();
        } else {
            startCooldown();
        }
    });

    function updateProgress() {
        lifeTimeCount++;
        const progressPercentage = (count / maxCount) * 100;
        progressStatus.innerHTML = `${count}/${maxCount}`;
        progress.style.width = `${progressPercentage}%`;
        currentScore.innerHTML = `Score: ${lifeTimeCount}`;
        remainingCount.innerHTML = `Remaining: ${count}`;
    }

    function startCooldown() {
        inCooldown = true;
        cooldownTimeLeft = 5 * 60 * 60; 
        showCooldownMessage();
        setInterval(updateCooldown, 1000);
        resetProgress();
    }

    function updateCooldown() {
        cooldownTimeLeft--;
        if (cooldownTimeLeft <= 0) {
            endCooldown();
        } else {
            showCooldownMessage();
        }
    }

    function endCooldown() {
        inCooldown = false;
        cooldownMessage.style.display = 'none';
    }

    function showCooldownMessage() {
        const hours = Math.floor(cooldownTimeLeft / 3600);
        const minutes = Math.floor((cooldownTimeLeft % 3600) / 60);
        const seconds = cooldownTimeLeft % 60;
        cooldownMessage.innerHTML = `Cooldown Time Left: ${hours}h ${minutes}m ${seconds}s`;
        cooldownMessage.style.display = 'block';
    }

    function resetProgress() {
        count = 500;
        updateProgress();
    }
});
