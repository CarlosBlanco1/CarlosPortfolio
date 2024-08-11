import { animate, scroll } from "motion";

window.progressAnimation = function () {

  const experiencesCtn = document.getElementById("experiences-ctn");
  const experiences = experiencesCtn.querySelectorAll("div");

  document.querySelector('#progress-bar').style.transformOrigin = 'top';

  const scrollOptions = {target: experiencesCtn, offset: ["start end", "end end"]}

  scroll(animate('#progress-bar', { scaleY: [0, 1] }));

  experiences.forEach(experienceCtn => {
    scroll(animate(experienceCtn, { y: [-50, 50] }), {
      target: experienceCtn
    });

  });

};
