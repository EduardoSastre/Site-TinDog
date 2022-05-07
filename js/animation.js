//--------------------Animations ---------------------

gsap.registerPlugin(ScrollTrigger);

ww = window.innerWidth;
wh = window.innerHeight;

var tl = gsap.timeline();

//-----------------title----------------------

if (innerWidth > 991) {
  tl.from('.title-description-container', {
    duration: 1.5,
    opacity: 0
  });

  tl.from('.title-image', {
    x: 0.10 * ww,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.title-image',
      start: "top center",
    }
  });

  gsap.from('.feature-description', {
    opacity: 0,
    duration: 0.75,
    stagger: 0.5,
    scrollTrigger: {
      trigger: '.feature-description',
      start: "bottom bottom",
    }
  });

  gsap.from('.pricing-column', {
    opacity: 0,
    duration: 0.75,
    stagger: 0.5,
    scrollTrigger: {
      trigger: '.row',
      start: "top center",
    }
  });

  gsap.from('.card', {
    opacity: 0,
    duration: 2,
    stagger: 0.5,
    scrollTrigger: {
      trigger: '.card',
      start: "90% bottom",
    }
  });

}
else{
  gsap.from('.title-description-container', {
    duration: 3,
    opacity: 0
  });

  gsap.from('.title-image', {
    x: 0.10 * ww,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
      trigger: '.title-image',
      start: "top center",
    }
  });

  gsap.from('.feature1', {
    x: 0.10 * ww,
    opacity: 0,
    duration: 0.75,
    scrollTrigger: {
      trigger: '.feature1',
      start: "top 75%",
    }
  });

  gsap.from('.feature2', {
    x: -0.10 * ww,
    opacity: 0,
    duration: 0.75,
    scrollTrigger: {
      trigger: '.feature2',
      start: "top 75%",
    }
  });

  gsap.from('.feature3', {
    x: 0.10 * ww,
    opacity: 0,
    duration: 0.75,
    scrollTrigger: {
      trigger: '.feature3',
      start: "top 75%",
    }
  });

  gsap.from('.card1', {
    opacity: 0,
    duration: 2,
    scrollTrigger: {
      trigger: '.card1',
      start: "90% bottom",
    }
  });

  gsap.from('.card2', {
    opacity: 0,
    duration: 2,
    scrollTrigger: {
      trigger: '.card2',
      start: "90% bottom",
    }
  });

  gsap.from('.card3', {
    opacity: 0,
    duration: 2,
    scrollTrigger: {
      trigger: '.card3',
      start: "90% bottom",
    }
  });
}
