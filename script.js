document.querySelector("#github-id").addEventListener("click", () => {
    document.location.href = "https://github.com/itznishantthapa";
});
document.querySelector("#instagram-id").addEventListener("click", () => {
    document.location.href = "https://www.instagram.com/itznishantthapa?igsh=MWs3dDZraDhjdm15ZA==";
});
document.querySelector("#facebook-id").addEventListener("click", () => {
    document.location.href = "https://www.facebook.com/profile.php?id=100088960364476&mibextid=ZbWKwL";
});
document.querySelector("#twitter-id").addEventListener("click", () => {
    document.location.href = "https://x.com/itznishantthapa?s=09";
});
document.querySelector("#linked-in").addEventListener("click", () => {
    document.location.href = "https://www.linkedin.com/in/nishantthapa1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";
});
document.querySelector("#mail").addEventListener("click", () => {
    document.location.href = "mailto:itsnishantu@gmail.com";
});


















var modeTurn = false;
document.getElementById("mode").addEventListener("click", () => {
    if (!modeTurn) {
        document.body.style.backgroundColor = "rgb(222,222,222)";
        document.body.style.color = "#000814";

        let rApps = document.querySelectorAll(".R-apps");
        rApps.forEach((eachRapps) => {
            eachRapps.style.backgroundColor = "rgba(0, 20, 39, 0.2)";
        });

        let lApps = document.querySelectorAll(".L-apps");
        lApps.forEach((eachLapps) => {
            eachLapps.style.backgroundColor = "rgba(0, 20, 39, 0.2)";
        });

        document.getElementById("github").style.color = "rgb(222,222,222)";

        let downTexts = document.querySelectorAll(".down-text");
        downTexts.forEach((text) => {
            text.style.color = "#000814";
        });

        // for bar
        document.getElementById("bar").style.color = "rgba(0, 8, 20, 0.5)";
        document.getElementById("bar").style.backgroundColor = "rgba(222, 222, 222, 0.5)";

        document.getElementById("projects").style.backgroundColor= "rgba(0, 20, 39, 0.2)";
        // document.getElementById("projects").style.boxShadow = "0 4px 8px rgba(0, 20, 39, 0.3);";

        let progressBars=document.querySelectorAll(".progress-bar");
        progressBars.forEach((bar)=>{
            bar.style.backgroundColor = "rgba(0, 20, 39, 0.2)";
        });

        document.getElementById("container").style.boxShadow="rgba(17, 12, 46, 0.15) 0px 48px 100px 0px";
    

        modeTurn = true;
    }
    else {
        // Reverse the colors
        document.body.style.backgroundColor = "#000814";
        document.body.style.color = "rgb(222,222,222)";

        let rApps = document.querySelectorAll(".R-apps");
        rApps.forEach((eachRapps) => {
            eachRapps.style.backgroundColor = "#001219";
        });

        let lApps = document.querySelectorAll(".L-apps");
        lApps.forEach((eachLapps) => {
            eachLapps.style.backgroundColor = "#001219";
        });

        document.getElementById("github").style.color = "linear-gradient(to right, #0d1117, #0d1117)";

        let downTexts = document.querySelectorAll(".down-text");
        downTexts.forEach((text) => {
            text.style.color = "rgba(255, 255, 255, 0.3)";
        });

        // for bar
        document.getElementById("bar").style.color = "rgba(222, 222, 222, 0.5)";
        document.getElementById("bar").style.backgroundColor = "rgba(0, 8, 20, 0.5)";


        document.getElementById("projects").style.backgroundColor= "#051923";


        let progressBars=document.querySelectorAll(".progress-bar");
        progressBars.forEach((bar)=>{
            bar.style.backgroundColor = "#051923";
        });
        
        document.getElementById("container").style.boxShadow="-10px 0 10px rgba(0, 0, 0, 0.2),  -20px 0 20px rgba(0, 0, 0, 0.15),  -30px 0 30px rgba(0, 0, 0, 0.1),  10px 0 10px rgba(0, 0, 0, 0.2),20px 0 20px rgba(0, 0, 0, 0.15), 30px 0 30px rgba(0, 0, 0, 0.1) "

        modeTurn = false;

    }


});

document.addEventListener("scroll", () => {
    const bar = document.getElementById("bar");
    if (window.scrollY > 0) { // Change the condition based on when you want the shadow to appear
        bar.classList.add("glowing-shadow");
    } else {
        bar.classList.remove("glowing-shadow");
    }
});




document.addEventListener('DOMContentLoaded', () => {
    const nameElement = document.getElementById('name');
    const introContainer = document.getElementById('intro');
    const projectsContainer = document.getElementById('projects');
    const progressContainer = document.querySelector('.progress-container');
    const socialsContainer = document.getElementById('socials-container');
    const footerContainer = document.getElementById("main-footer");

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                if (entry.target === introContainer) {
                    nameElement.textContent = 'NISHANT THAPA';
                } else if (entry.target === projectsContainer) {
                    nameElement.textContent = 'PROJECTS';
                } else if (entry.target === progressContainer) {
                    nameElement.textContent = 'SKILLS';
                } else if (entry.target === socialsContainer) {
                    nameElement.textContent = 'SOCIAL PLATFORMS';
                }
                 else if (entry.target === footerContainer) {
                    nameElement.textContent = 'THANK YOU';
                }
                
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(introContainer);
    observer.observe(projectsContainer);
    observer.observe(progressContainer);
    observer.observe(socialsContainer);
    observer.observe(footerContainer);
});


document.addEventListener('DOMContentLoaded', function () {
    const icons = document.querySelectorAll('.info-icon');

    icons.forEach(icon => {
        icon.addEventListener('click', function () {
            const project = this.closest('.project');
            const projectDescription = project.querySelector('.project-description');

            // Hide all other project descriptions
            const allDescriptions = document.querySelectorAll('.project-description');
            allDescriptions.forEach(desc => {
                if (desc !== projectDescription) {
                    desc.style.display = 'none';
                }
            });

            // Toggle display of clicked project description
            projectDescription.style.display = projectDescription.style.display === 'block' ? 'none' : 'block';
        });
    });
});


