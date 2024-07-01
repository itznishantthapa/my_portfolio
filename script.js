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

// let circles=document.querySelectorAll(".circle");
// circles.forEach((eachCircle)=>{
//     eachCircle.addEventListener("mouseover",()=>{
//         document.getElementById
//     });
// });
