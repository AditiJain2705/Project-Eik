
gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });



var tl = gsap.timeline();
tl
.from("nav",{
    y:-50,
    opacity:0,
    duration:1,
    delay:0.5,
    
})
.from(".container>img",{
    y:200,
    opacity:0,
    duration:2
},"-0.2")
.from("#first",{
   y:10,
   opacity:0,
   duration:1
})
.from(".content>h1",{
    y:50,
    opacity:0,
    duration:1
})
.from("#last",{
    y:10,
   opacity:0,
   duration:1
})

gsap.from(".contain2>.image",{
    y:100,
    opacity:0,
    scrollTrigger:{
        scroller:"#main",
        trigger:".contain2",
        // markers:true,
        start:"top 50%"
        // end:"top 10%"
    }
})
gsap.from(".collection",{
    y:100,
    opacity:0,
    scrollTrigger:{
        scroller:"#main",
        trigger:".contain",
        // markers:true,
        start:"top 50%"
        // end:"top 10%"
    }
})
gsap.from("#fac1",{
    y:10,
    opacity:0,
    scrollTrigger:{
        scroller:"#main",
        trigger:".factory",
        // markers:true,
        start:"top 50%"
        // end:"top 10%"
    }
})
gsap.from(".factory>h1",{
    y:10,
    opacity:0,
    scrollTrigger:{
        scroller:"#main",
        trigger:".factory>h1",
       start:"top 50%",
    //    markers:true
    }
})
gsap.from("#fac2",{
    y:10,
    opacity:0,
     scrollTrigger:{
       scroller:"#main",
       trigger:"#fac2",
       start:"top 50%",
    //    markers:true
     }
})
gsap.from(".brand>h1",{
    y:10,
    opacity:0,
    scrollTrigger:{
        scroller:"#main",
        trigger:".brand>h1",
        start:"top 50%"
    }
})
gsap.from(".brand>button",{
    y:10,
    opacity:0,
    scrollTrigger:{
        scroller:"#main",
        trigger:".brand>h1",
        start:"top 40%"
    }
})


gsap.from(".along>h1",{
    y:10,
    opacity:0,
    scrollTrigger:{
        scroller:"#main",
        trigger:".along>h1",
        start:"top 50%",
        // markers:true
    }
})
gsap.from(".newletter>h1",{
    y:10,
    opacity:0,
    scrollTrigger: {
     scroller:"#main",
    trigger:".newletter>h1",
    start:"top 70%"
    }
})
gsap.from(".home>h1",{
    y:10,
    opacity:0,
    scrollTrigger:{
        scroller:"#main",
        trigger:".home>h1",
        start:"top 60%"
        
    }
})
gsap.from(".home>h1>span>i",{
    x:-1000,
    opacity:0,
    scrollTrigger:{
        scroller:"#main",
        trigger:".home>h1",
        start:"top 60%"
        
    }
})