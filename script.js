function breakText() {
    const h1 = document.querySelector("h1")
    const text = h1.textContent;

    let splittedText = text.split("");

    var clutter = "";
    var halfVal = Math.floor(splittedText.length / 2);

    splittedText.forEach((e, index) => {
        if (index < halfVal) {
            clutter += `<span class="firstHalf">${e}</span>`;

        } else {
            clutter += `<span class="SecondHalf">${e}</span>`;

        }
    })
    h1.innerHTML = clutter;
}

breakText();


gsap.from(".firstHalf", {
    x:-70,
    duration:1,
    delay: 0.5,
    opacity:0,
    stagger:-0.15,
    scale:0
})
gsap.from(".SecondHalf", {
    x:80,
    duration:1,
    delay: 0.5,
    opacity:0,
    stagger:0.15,
    scale:0
})