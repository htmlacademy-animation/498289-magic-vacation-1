import LetterAnimation from "./letterAnimation";

export default () => {
  // const introMessage = document.querySelector(`.intro__message`);
  // const introMessage = document.querySelector(`.intro__message`);
  // const introMessagepppppp = document.querySelector(`.intro__message`);

  const animationTitle = new LetterAnimation({
    elementSelector: `.intro__title`,
    timer: 500,
    classForActivate: `shown`,
    property: `transform`,
  });

  const animationLabel = new LetterAnimation({
    elementSelector: `.intro__label`,
    timer: 500,
    classForActivate: `shown`,
    property: `transform`,
  });

  const animationDate = new LetterAnimation({
    elementSelector: `.intro__date`,
    timer: 500,
    classForActivate: `shown`,
    property: `transform`,
  });

  window.addEventListener(`load`, () => {
    animationTitle.runAnimation();
    animationLabel.runAnimation();
    animationDate.runAnimation();
  });
};
