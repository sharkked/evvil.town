---
layout: main
---

<style>
#crt {
    user-select: none;
}
</style>

<img id="crt" src="/images/trinitron.png" width="512" />

[🏠 <- enter](/home)

<script>
var hitsounds = [
    new Audio("/audio/hit_1.mp3"),
    new Audio("/audio/hit_2.mp3"),
    new Audio("/audio/hit_3.mp3"),
    new Audio("/audio/hit_4.mp3"),
]

var crt = document.getElementById("crt")

function spring(x, v) {
    v = (v - x * 0.3) * 0.8
    x += v * 10

    if (Math.abs(v) <= 0.01 && Math.abs(v) <= 0.01) {
        crt.style.transform = ""
    } else {
        crt.style.transform = `translateX(${x}%)`
        anim = setTimeout(() => spring(x, v), 10)
    }
}

var anim;

crt.onclick = () => {
    let sound = hitsounds[Math.floor(Math.random() * hitsounds.length)]
    sound.currentTime = 0
    sound.play()

    anim && clearTimeout(anim)
    anim = setTimeout(() => spring(3, 0), 10)
}
</script>
