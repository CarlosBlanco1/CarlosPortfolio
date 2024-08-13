import { animate, scroll } from "motion";

window.progressAnimation = function () {

  const experiencesCtn = document.getElementById("experiences-ctn");
  const experiences = experiencesCtn.querySelectorAll("div");

  document.querySelector('#progress-bar').style.transformOrigin = 'top';

  const scrollOptions = { offset: ["start end", "end start"] }

  scroll(animate('#progress-bar', { scaleY: [0, 1] }));
  

  experiences.forEach(experienceCtn => {
    scroll(animate(experienceCtn, { opacity: [0, 1] }), { target: experienceCtn,  offset: ["start end", "end end"]});
  });

};
