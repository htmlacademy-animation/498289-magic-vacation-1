export default () => {
  const colorWall = document.querySelector(`.color-wall`);
  let currentScreenName;

  colorWall.addEventListener(`transitionend`, () => colorWall.classList.remove(`color-wall--transition`));

  const onScreenChanged = (event) => {
    if (event.detail.screenName === `prizes`) {
      const hasTransition = currentScreenName === `story`;

      colorWall.classList.toggle(`color-wall--transition`, hasTransition);
      colorWall.classList.add(`color-wall--active`);

    } else {
      colorWall.classList.remove(`color-wall--active`);
      colorWall.classList.toggle(`color-wall--transition`, false);
    }

    currentScreenName = event.detail.screenName;
  };

  document.body.addEventListener(`screenChanged`, onScreenChanged);
};
