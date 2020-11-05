export default class {
  constructor(specs) {
    this.selector = specs.selector;
    this.targetDate = specs.targetDate;
  }
  createTimer() {
    return new Promise((resolve, reject) => {
      const timerRef = document.querySelector(this.selector);
      timerRef && timerRef.children.length === 0
        ? resolve(timerRef)
        : reject('The timer cannot be found by ID');
    });
    const time = Date.parse(superTimer.targetDate) - Date.now();
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    /*
     * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
     * остатка % и делим его на количество миллисекунд в одном часе
     * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
     */
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    /*
     * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
     * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
     */
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

    /*
     * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
     * миллисекунд в одной секунде (1000)
     */
    const secs = Math.floor((time % (1000 * 60)) / 1000);
  }
  parseTimerHTML(timerRef) {
    timerRef.innerHTML =
      '<div class="field"><span class="value" data - value="days">11</span><span class="label">Days</span></div><div class="field"><span class="value" data-value="hours">11</span><span class="label">Hours</span></div><div class="field"><span class="value" data-value="mins">11</span><span class="label">Minutes</span></div><div class="field"><span class="value" data-value="secs">11</span><span class="label">Seconds</span></div>';
    const timerObj = {
      timerRef: timerRef,
      fieldRef: document.querySelectorAll('.field'),
      valueRef: document.querySelectorAll('.value'),
      labelRef: document.querySelectorAll('.label'),
    };
    return timerObj;
  }
  startTimer(timerObj) {
    const { timerRef, fieldRef, valueRef, labelRef } = timerObj;
    setInterval(value => {
      const time = Date.parse(this.targetDate) - Date.now();
      valueRef[0].textContent = Math.floor(time / (1000 * 60 * 60 * 24));
      valueRef[1].textContent = Math.floor(
        (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      valueRef[2].textContent = Math.floor(
        (time % (1000 * 60 * 60)) / (1000 * 60),
      );
      valueRef[3].textContent = Math.floor((time % (1000 * 60)) / 1000);
    }, 1000);
  }
  startCountdown() {
    return this.createTimer()
      .then(this.parseTimerHTML)
      .then(this.startTimer.bind(this))
      .catch(err => {
        console.warn(err);
      });
  }
}
