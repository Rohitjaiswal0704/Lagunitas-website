function show(){
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
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();}

show()


// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

gsap.to("#bottle",{
  rotate:-15,
  scrollTrigger:{
      trigger:"#bottle",
      scroller:"#main",
      // markers:true,
      start:"top 5%",
      end:"top -416%",
      scrub:true,
      pin:true
  }
})
gsap.to("#bottle",{
   scale: 0.5,
scrollTrigger:{
    trigger:"#page5 h1",
    scroller:"#main",
    // markers:true,
    start:"top 430%",
    end:"top -430%",
    scrub:true,
    pin:false

}
})

let t1=gsap.timeline()
t1.from("#main #page1_dog_image",{
    opacity:0,
    duration:01,
    scale:0.1,

});
t1.from("#bottle",{
  opacity:0,
  duration:1,
  scale:0.2,

});
t1.from("#nav_top>button",{
    xPercent:200,

})

gsap.from("#page2_part1>button",{
      scrollTrigger:{
        trigger:("#page2_part1>button"),
        scroller:("#main"),
        start:"top 70%",
        // markers:true
      },
      xPercent:-300,
      duration:1,
      
})

gsap.from("#part6_part2>button",{
  scrollTrigger:{
    trigger:("#part6_part2>button"),
    scroller:("#main"),
    start:"top 70%",
    // markers:true
  },
  xPercent:600,
  duration:1,
  
})
