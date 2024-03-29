var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets) {
    //   console.log(dets.y)  
    crsr.style.left = dets.x+30+"px"
    crsr.style.top = dets.y+"px"
    blur.style.left = dets.x-90+"px"
    blur.style.top = dets.y-90+"px"
    
})

// document.addEventListener("mousemove",function(dets) {
//     //   console.log(dets.y)  
//     crsr.style.left = dets.x+"px"
//     crsr.style.top = dets.y+"px"
    
// })
gsap.to("#nav",{
    backgroundColor:"black",
    duration:1,
    height:"100px",
    // delay:10,
    scrollTrigger:{
        trigger:"#nav",
        scoller:"body",
        // markers:true,
        start:"top -2%",
        end:"top -4% ",
        scrub:1,
        
    }
})
 
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scoller:"body",
        // markers:true,
        start:"top -60%",
        end:"top -60%",
        scrub:2//can use true also

    }

})

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
      elem.addEventListener("mouseenter",function(){
         crsr.style.scale = 3
         crsr.style.border = "2px solid white"
         crsr.style.backgroundColor = "transparent"

      })

      elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid aqua"
        crsr.style.backgroundColor = "aqua"

     })
})
// gsap.from("scroller-in-1",{
//   y:120,
//   // scale:1.2,
//   scrollTrigger:{
//     trigger:"scroller-in-1",
//     scroller:"body",
//     // markers:true,
//     start:"top 75%",
//     end:"top 70%",
//     scrub:1

//   }
// })
gsap.from("#about-us img,#about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 50%",
        scrub:3
    } 
})

gsap.from(".card",{
    scale:0.6,
    opacity:0,
    duration:1,
    // stagger:0.4,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 75%",
        scrub:2
    } 
})

gsap.from("#aqua-div",{
    opacity:0,
    duration:2,
    scrollTrigger:{
      trigger:"#aqua-div",
      scroller:"body",
      // markers:true,
      start:"top 40%",
      end:"bottom 40%",
      scrub:2

    }
})

gsap.from("#quotation1",{
    y:-100,
    x:-100,
    delay:3,
    scrollTrigger:{
      trigger:"#quotation1",
      scroller:"body",
    //   markers:true,
      start:"top 50%",
      end:"top 40%",
      scrub:5

    }
})

gsap.from("#quotation2",{
    y:100,
    x:100,
    delay:2,
    scrollTrigger:{
      trigger:"#quotation1",
      scroller:"body",
    //   markers:true,
      start:"bottom 70%",
      end:"bottom 60%",
      scrub:5

    }
})

gsap.from("#para",{
    scale:0.8,
    opacity:0,
    duration:2.5,
    scrollTrigger:{
      trigger:"#para",
      scroller:"body",
      // markers:true,
      start:"top 50%",
      end:"top 40%",
      scrub:4

    }
})

gsap.from("#page4 h1",{
  y:40,
  // scale:1.2,
  scrollTrigger:{
    trigger:"#page4 h1",
    scroller:"body",
    // markers:true,
    start:"top 70%",
    end:"top 70%",
    scrub:5

  }
})
