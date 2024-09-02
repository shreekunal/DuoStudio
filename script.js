function loco() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}

loco();

var tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page1",
        scroller: "#main",
        start: "top 30%",
        end: "bottom 45%",
        // markers: true,
        scrub: .2
    }
})

tl1.to("#page1 h1", { x: -100 }, "hero");
tl1.to("#page1 h2", { x: 100 }, "hero");
tl1.to("#page1 video", { width: "93%" }, "hero");

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page1",
        scroller: "#main",
        start: "top -120%",
        end: "top -130%",
        // markers: true,
        scrub: 3
    }
})

tl2.to("#main", { backgroundColor: "#fff" })
// tl2.to("#nav .part-2 a", { color: "#000" })


var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page3",
        scroller: "#main",
        start: "top -30%",
        end: "top -40%",
        // markers: true,
        scrub: 5
    }
})

tl3.to("#main", { backgroundColor: "#000" })

let cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
        x: dets.clientX - 9,
        y: dets.clientY - 9,
        duration: 0.1, // Adjust duration for smoothness
        ease: "power2.out"
    });
});

var videos = document.querySelectorAll("video");

videos.forEach((video) => {
    video.addEventListener("mouseenter", function () {
        cursor.innerHTML = "SOUND ON";
        cursor.classList.add("cursor-text-active");
    });

    video.addEventListener("mouseleave", function () {
        cursor.classList.remove("cursor-text-active");
        cursor.innerHTML = "";
    });
});

var images = document.querySelectorAll(".blurImg");

images.forEach((image) => {
    image.addEventListener("mouseenter", function () {
        image.style.cursor = "none";
        cursor.innerHTML = "VIEW";
        cursor.classList.add("cursor-text-active");
    });

    image.addEventListener("mouseleave", function () {
        image.style.cursor = "";
        cursor.classList.remove("cursor-text-active");
        cursor.innerHTML = "";
    });
});


var rows = document.querySelectorAll(".page5_box");

rows.forEach((row) => {
    row.addEventListener("mouseenter", function () {
        cursor.classList.add("cursor-img");
        cursor.classList.remove("mixBlend");
        var src = row.getAttribute("data-image");
        cursor.style.backgroundImage = `url(${src})`
    })

    row.addEventListener("mouseleave", function () {
        cursor.classList.add("mixBlend");
        cursor.classList.remove("cursor-img");
    })
})