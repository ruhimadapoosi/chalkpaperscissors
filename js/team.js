// profile variables + arrays/////////////////////////////////////////////
let pfp = ["#pfp", "#pfp-c", "#pfp-p", "#pfp-s"];
let namear = ["Stuffie", "chalkie2003", "Xx_papercut_xX", "magicscissorsss"];
let moodar = [">:C", "XDDDDDD", "...", "( ＾◡＾)っ✂❤"];
let themear = ["assets/teambg_01.png","assets/teambg_03.png", "assets/teambg_04.png","assets/teambg_02.png"];
let mainarr = ["assets/stuffie.png","assets/chalk.png", "assets/paper.png","assets/scissors.png"];
let textarr = ["YAYYYYY!!!!!","aliens.","WHAT ARE WE GONNA DOOOO?!!!","..................."];

let currentpfp = 0;
let previouspfp = 0;

document.getElementById("name").innerHTML = namear[currentpfp];
document.getElementById("mood").innerHTML = moodar[currentpfp];

// PROFILE STUFF //////////////////////////////////////////////////////////////
document.querySelector("#log-in").addEventListener("click", function() {
    
    document.getElementById("funsies").style.visibility = "hidden";
    document.getElementById("team-about-paragraph").innerHTML = textarr[currentpfp];
    
    pfpchange ();
    pfpold();
        
        document.querySelector(pfp[currentpfp]).style.display = "flex";
        document.querySelector(pfp[previouspfp]).style.display = "none";
        

    
    document.getElementById("name").innerHTML = namear[currentpfp];
    document.getElementById("mood").innerHTML = (moodar[currentpfp]);
    document.getElementById("team-bg2").src= themear[currentpfp];

    document.getElementById("mainphoto").src= mainarr[currentpfp];

// console.log ((pfp[currentpfp]))
// console.log((pfp[previouspfp]))

})

function pfpchange () {
    currentpfp = currentpfp + 1;
    if (currentpfp == 4) {
    currentpfp = 0;
    }
}

function pfpold () {
    previouspfp = currentpfp -1;
    if (previouspfp == -1) {
    previouspfp = 3;
    }
}


// MAIN ITEMS /////////////////////////////////////////////////////////////////

// main variables + arrays ////////////////////////////////////////////////////
let member = ["Ruhi", "Lin", "Kate", "Citlali", "Ein", "Lucas", "Cammy"];


document.querySelector("#team-ru").addEventListener("click", function() {
        document.getElementById("funsies").style.visibility = "visible";

        document.getElementById("team-port-01").src= "assets/ru-port-01.png";
        document.getElementById("team-port-02").src= "assets/ru-port-01.png";

        document.getElementById("team-about-paragraph").innerHTML = "Hiiiiii! I'm Ruhi, the director of Chalk Paper Scissors! I totally definitely 100% didn't take Stuffie. I couldn't have. I was busy taking a nap. My bed can confirm this, you just need to ask. ";

        document.getElementById("username").innerHTML = "@ruhihihi3344";
        document.getElementById("email").href = "mailto:ruhi.madapoosi@gmail.com";
        document.getElementById("insta").href = "https://www.instagram.com/mi.magni/";
        document.getElementById("portfolio").href = "https://ruhimadapoosi.github.io/";

        document.getElementById("team-mood").innerHTML = "hehehe";
        document.getElementById("team-mood-img").src = "assets/moustachio.gif";
        document.getElementById("toy").innerHTML = "my cat PERSI!!";
        document.getElementById("game").innerHTML = "animal jam";
        document.getElementById("fursona").innerHTML = "a cat with a snake tail";

        document.getElementById("mainphoto").src= "assets/ru-main.png";

        
})

document.querySelector("#team-li").addEventListener("click", function() {
        document.getElementById("funsies").style.visibility = "visible";

        document.getElementById("team-port-01").src="assets/ru-port-02.png";
        document.getElementById("team-port-02").src="assets/ru-port-02.png";

        document.getElementById("username").innerHTML = "@lyndonbjohnson";
        document.getElementById("email").href = "#";
        document.getElementById("insta").href = "https://www.instagram.com/";
        document.getElementById("portfolio").href = "#";

        document.getElementById("team-mood").innerHTML = "sad";
        // document.getElementById("team-mood-img").src = "";
        document.getElementById("toy").innerHTML = "!!";
        document.getElementById("game").innerHTML = "";
        document.getElementById("fursona").innerHTML = "";

        document.getElementById("team-about-paragraph").innerHTML = "something something";

})

document.querySelector("#team-ka").addEventListener("click", function() {
        document.getElementById("funsies").style.visibility = "visible";

        document.getElementById("team-port-01").src= "assets/ru-port-01.png";
        document.getElementById("team-port-02").src= "assets/ru-port-01.png";

        document.getElementById("team-about-paragraph").innerHTML = "lorem ipsum";

        
})

document.querySelector("#team-ci").addEventListener("click", function() {
        document.getElementById("funsies").style.visibility = "visible";

        document.getElementById("team-port-01").src="assets/ru-port-02.png";
        document.getElementById("team-port-02").src="assets/ru-port-02.png";

        document.getElementById("team-about-paragraph").innerHTML = "something something";

        document.getElementById("team-mood").innerHTML = "blarg";
        // document.getElementById("team-mood-img").src = "";
        document.getElementById("toy").innerHTML = "webkins chihuahua";
        document.getElementById("game").innerHTML = "club penguin";
        document.getElementById("fursona").innerHTML = "wolf";


})

document.querySelector("#team-ei").addEventListener("click", function() {
        document.getElementById("funsies").style.visibility = "visible";

        document.getElementById("team-port-01").src= "assets/ru-port-01.png";
        document.getElementById("team-port-02").src= "assets/ru-port-01.png";

        document.getElementById("team-about-paragraph").innerHTML = "lorem ipsum";

        
})

document.querySelector("#team-lu").addEventListener("click", function() {
        document.getElementById("funsies").style.visibility = "visible";

        document.getElementById("team-port-01").src="assets/ru-port-02.png";
        document.getElementById("team-port-02").src="assets/ru-port-02.png";

        document.getElementById("team-about-paragraph").innerHTML = "something something";

})

document.querySelector("#team-ca").addEventListener("click", function() {
        
        document.getElementById("team-port-01").src= "assets/ru-port-01.png";
        document.getElementById("team-port-02").src= "assets/ru-port-01.png";

        document.getElementById("team-about-paragraph").innerHTML = "lorem ipsum";

        
})
