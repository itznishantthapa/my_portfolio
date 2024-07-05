document.querySelector("#github-id").addEventListener("click", () => {
    document.location.href = "https://github.com/itznishantthapa";
});

var modeTurn = false;
document.getElementById("mode").addEventListener("click", () => {
    if (!modeTurn) {
        document.body.style.backgroundColor = "rgb(222,222,222)";
        document.body.style.color = "#000814";

        let rApps = document.querySelectorAll(".R-apps");
        rApps.forEach((eachRapps) => {
            eachRapps.style.backgroundColor = "#e9ecef";
        });

        let lApps = document.querySelectorAll(".L-apps");
        lApps.forEach((eachLapps) => {
            eachLapps.style.backgroundColor = "#e9ecef";
        });

        document.getElementById("github").style.color = "rgb(222,222,222)";

        let downTexts = document.querySelectorAll(".down-text");
        downTexts.forEach((text) => {
            text.style.color = "#000814";
        });

        // for bar
        document.getElementById("bar").style.color = "rgba(0, 8, 20, 0.5)";
        document.getElementById("bar").style.backgroundColor = "rgba(222, 222, 222, 0.5)";

        // for icons
        // document.querySelector("p").style.backbbbbbbbbbvgroundColor="grey";

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

    const observerOptions = {
        root:null,
        rootMargin: '20px',
        threshold: 0.5 // Adjust this value as needed
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target===introContainer){
                    nameElement.textContent='THAPA';
                }
                 else if (entry.target === projectsContainer) {
                    nameElement.textContent = 'PROJECTS';
                } else if (entry.target === progressContainer) {
                    nameElement.textContent = 'MY-SKILLS';
                } else if (entry.target === socialsContainer) {
                    nameElement.textContent = 'SOCIALS PLATTFROMS';
                }
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(introContainer);
    observer.observe(projectsContainer);
    observer.observe(progressContainer);
    observer.observe(socialsContainer);
});
document.addEventListener('DOMContentLoaded', function() {
    const icons = document.querySelectorAll('.info-icon');

    icons.forEach(icon => {
        icon.addEventListener('click', function() {
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
