export default () => {
  const lastItem = document.querySelectorAll(`.rules__item`)[3];
  const button = document.querySelector(`.rules__link`);

  lastItem.addEventListener(`animationend`, () => {
    button.classList.remove(`rules__link--hidden`);
  });

  const onScreenChanged = (event) => {
    if (event.detail.screenName !== `rules`) {
      button.classList.add(`rules__link--hidden`);
    }
  };

  document.body.addEventListener(`screenChanged`, onScreenChanged);
};
