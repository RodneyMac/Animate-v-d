document.addEventListener("mousemove", function(e) {
    var body = document.querySelector("body");
    var heart = document.createElement("span");
    var x = e.offsetX;
    var y = e.offsetY;
    heart.style.left = x+ "px";
    heart.style.top = y+ "px";
    var size = Math.random() * 100;
    heart.style.width = 25 + size + "px";
    heart.style.height = 25 + size + "px";
    body.appendChild(heart);

    setTimeout(function() {
        heart.remove();
    }, 2500);
});

const section = document.querySelector(".seccion-1"),
    btnClick = section.querySelector("#btn-c"),
    closeBtn = section.querySelectorAll("#close");

    btnClick.addEventListener("click", () => {
        section.classList.add("show");
        console.log("Show animate modal");
    });

    closeBtn.forEach(cBtn => {
        cBtn.addEventListener("click", () => {
            section.classList.remove("show");
        });
    });