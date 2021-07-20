
function displayPosition(a, b, c, d) {
    if (a == "Marques Bradley") {
        let name = a;
        console.log(
            "Name: " + name.toUpperCase() + "\n" +
            "Career: " + b + "\n" +
            "Description: " + c + "\n" 
        )
    }
    else {
        console.log(
            "*" + a + "\n" +
            "*" + b + "\n" +
            "*" + c + "\n" +
            "*" + d + "\n"
        )
    }
}



displayPosition("Marques Bradley", "Full-Stack Web Development", "I'm Batman!");
console.log("My Interests:");
displayPosition("Graphic Design", "Sports", "Podcasting", "Video Games");
console.log("My Previous Experience:");
displayPosition("Spot One", "Spot Two", "Spot Three");
console.log("My Skills:");


function displaySkill(skill, isCool) {
    if(isCool == true){
        console.log("BAM: *" + skill)
    } else {
        console.log("*" + skill)
    }
}

displaySkill("Blahlblah", true);
displaySkill("Blackasdasdasdfa", false);