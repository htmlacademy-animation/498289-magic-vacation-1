class LetterAnimation {
  constructor({
    elementSelector,
    timer,
    classForActivate,
    property,
    animationDelay = 0,
    letterDelay = 50,
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

  _setTimeOffset() {
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

    this.timeOffset += timeGap;
    this._letterCounter++;
  }

  createElement(letter) {
    const span = document.createElement(`span`);
    span.textContent = letter;

    this._setTimeOffset();
    span.style.transition = `${this._property} ${this._timer}ms ease ${this.timeOffset}ms`;

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

      wordContainer.classList.add(`letter-animated-word`, `letter-animated-word--${this._property}`);
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
