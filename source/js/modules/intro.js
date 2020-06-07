import LetterAnimation from "./letter-animation";

export default () => {
  const introMessage = document.querySelector(`.intro__message`);
  const dateLabel = document.querySelector(`.intro__label`);
  const fadeInDelay = 500;

  const animationTitle = new LetterAnimation({
    elementSelector: `.intro__title`,
    timer: fadeInDelay,
    classForActivate: `shown`,
    property: `transform`,
  });

  introMessage.style.animationDelay = `${animationTitle.timeOffset + fadeInDelay}ms`;
  dateLabel.style.animationDelay = `${animationTitle.timeOffset + fadeInDelay}ms`;

  const animationDate = new LetterAnimation({
    elementSelector: `.intro__date`,
    timer: fadeInDelay,
    classForActivate: `shown`,
    property: `transform`,
    animationDelay: animationTitle.timeOffset + fadeInDelay * 2,
  });

  window.addEventListener(`load`, () => {
    animationTitle.runAnimation();

    introMessage.style = `
      animation-delay: ${animationTitle.timeOffset + fadeInDelay}ms;
      animation-name: fade-in-top;
      animation-duration: 0.5s;
      animation-timing-function: ease-out;
    `;

    dateLabel.style = `
      animation-delay: ${animationTitle.timeOffset + fadeInDelay * 2}ms;
      animation-name: fade-in-top;
      animation-duration: 0.5s;
      animation-timing-function: ease-out;
    `;

    animationDate.runAnimation();
  });
};
