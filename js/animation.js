gsap.registerPlugin(ScrollTrigger);

ww = window.innerWidth;
wh = window.innerHeight;

var tl = gsap.timeline({repeat:-1, yoyo: true});

tl.to('.Top-Container__TopCloud', {
  duration: 20,
  x: ww*-0.55
});

tl.to('.Top-Container__BottomCloud', {
  duration: 20,
  x: ww*0.50
}, 0);

tl.to('.Top-Container__BottomCloud2', {
  duration: 20,
  x: ww*-0.50
}, 0);

gsap.from('h1', {
  duration: 2,
  opacity: 0
}, 0);

gsap.from('.Top-Container__Description', {
  delay: 1,
  duration: 2,
  opacity: 0
}, 0);

gsap.from('p', {
  duration: 2,
  y: +50
}, 0);

if ( ww > 420 )
{
  gsap.from('.skill-row1', {
    x: -0.10*ww,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
      trigger: '.skill-row1',
      start: "center 80%",
    }
  });

  gsap.from('.skill-row2', {
    x: 0.10*ww,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
      trigger: '.skill-row2',
      start: "center 80%",
    }
  });
}
else{
  gsap.from('.skill-row1', {
    x: -0.05*ww,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
      trigger: '.skill-row1',
      start: "center 80%",
    }
  });

  gsap.from('.skill-row2', {
    x: 0.05*ww,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
      trigger: '.skill-row2',
      start: "center 80%",
    }
  });
}

gsap.from('.profile__MyImg', {
  scale: 0,
  duration: 2,
  scrollTrigger: {
    trigger: '.profile__MyImg',
    start: "center 80%",
  }
});

gsap.from('.profile__title', {
  delay: 1,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: '.profile__MyImg',
    start: "center 80%",
  }
});

gsap.from('.profile__description', {
  delay: 1.5,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: '.profile__MyImg',
    start: "center 80%",
  }
});

gsap.from('.skills__title', {
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: '.skills__title',
    start: "center 80%",
  }
});

gsap.from('.contact-me', {
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: '.skill-row2',
    start: "center center",
  }
});
