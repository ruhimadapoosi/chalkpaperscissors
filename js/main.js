        
        
        
        document.addEventListener('DOMContentLoaded', () => {
            const menuToggle = document.querySelector('.menu-toggle');
            const navLinks = document.querySelector('.nav-links');

            menuToggle.addEventListener('click', () => {
                navLinks.classList.toggle('active');
            });
        });


    document.querySelector("#key").addEventListener("click", function() {
    document.querySelector("#closed-diary").style.display = "none";
    document.querySelector("#open-diary").style.display = "flex";
    document.querySelector("#prog-01").style.display = "flex";

    document.querySelector("#key").style.display = "none";

})
