function createStar(name) {
    const star = document.createElement("div");
    star.className = name;
    star.style.left = Math.random() * window.innerWidth + "px";
    star.style.zIndex = "-1";
    star.style.top = 40 + Math.random() * (window.innerHeight) + "px";
    document.body.appendChild(star);
    setTimeout(() => {
        star.remove();
    }, 5000);
}

function animateStars() {
    let lastTimestamp = 0;
    function animationLoop(timestamp) {
        if (timestamp - lastTimestamp >= 2000) {
            for(let i=0;i<2;i++){
                createStar("star1");
                createStar("star2");
                createStar("star3");
                createStar("star4");
                createStar("star5");
            }
        
            lastTimestamp = timestamp;
        }
        requestAnimationFrame(animationLoop);
    }
    requestAnimationFrame(animationLoop);
}

animateStars();
