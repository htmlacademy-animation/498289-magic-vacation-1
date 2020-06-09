class LetterAnimation {
  constructor({
    elementSelector,
    timer,
    classForActivate,
    property,
    animationDelay = 0,
    letterDelay = 30,
  }) {
    this._TIME_SPACE = 100;

    this._elementSelector = elementSelector;
    this._timer = timer;
    this._classForActivate = classForActivate;
    this._property = property;
    this._element = document.querySelector(this._elementSelector);
    this._letterCounter = 0;
    this._letterDelay = letterDelay;
    this.timeOffset = animationDelay;

    this.prePareText();
  }

  _getTimeGap() {
    let timeGap;

    switch (this._letterCounter % 3) {
      case 2:
        timeGap = -this._letterDelay;
        break;

      case 1:
        timeGap = this._letterDelay * 2;
        break;

      case 0:
        timeGap = this._letterDelay * 2;
        break;

      default:
        timeGap = this._letterDelay;
        break;
    }

    return timeGap;
  }

  createElement(letter) {
    const span = document.createElement(`span`);
    span.textContent = letter;
    const timeGap = this._getTimeGap();

    this.timeOffset += timeGap;
    span.style.transition = `${this._property} ${
      this._timer + timeGap
    }ms ease ${this.timeOffset}ms`;

    this._letterCounter++;
    return span;
  }

  prePareText() {
    if (!this._element) {
      return;
    }
    const text = this._element.textContent
      .trim()
      .split(` `)
      .filter((letter) => letter !== ``);

    const content = text.reduce((fragmentParent, word) => {
      const wordElement = Array.from(word).reduce((fragment, letter) => {
        fragment.appendChild(this.createElement(letter));

        return fragment;
      }, document.createDocumentFragment());

      const wordContainer = document.createElement(`span`);

      wordContainer.classList.add(
          `letter-animated-word`,
          `letter-animated-word--${this._property}`
      );
      wordContainer.appendChild(wordElement);
      fragmentParent.appendChild(wordContainer);

      return fragmentParent;
    }, document.createDocumentFragment());

    this._element.innerHTML = ``;
    this._element.appendChild(content);
  }

  runAnimation() {
    if (!this._element) {
      return;
    }
    this._element.classList.add(this._classForActivate);
  }

  destroyAnimation() {
    this._element.classList.remove(this._classForActivate);
  }
}

export default LetterAnimation;
