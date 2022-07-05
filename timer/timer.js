class Timer {
  constructor(durationInput, startButton, pauseButton, callbacks) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
    }

    this.startButton.addEventListener("click", this.start);
    this.pauseButton.addEventListener("click", this.pause);
  }
  start = () => {
    // console.log(this);
    // The start method shows different values for 'this'  when invoked by eventlistener and different value when invoked by our object
    // We want our method to access all the other properties and methods in our class (the case when invoked by object)
    // SOLUTION: We will convert our start method into array function
    if (this.onStart) {
      this.onStart(this.timeRemaining);
    }
    this.tick();
    this.intervalID = setInterval(this.tick, 20);
  };
  tick = () => {
    if (this.timeRemaining <= 0) {
      this.pause();
      if (this.onComplete) {
        this.onComplete();
      }
    } else {
      this.timeRemaining = this.timeRemaining - 0.02;
      if (this.onTick) {
        this.onTick(this.timeRemaining);
      }
    }
    //   The currentTime data can be stored in two ways:
    //   Option#1: The currentTime data stores in the timer instance (New way)
    //   Option#2 THe currentTime data stores in the DOM input element (Older way) We are going with older way
    // const timeRemaining = parseFloat(this.durationInput.value);
    // this.durationInput.value = timeRemaining - 1;
    // console.log(typeof timeRemaining);
    // We can improve this code by using getter and setter methods
    // set = get - 1
  };
  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }
  set timeRemaining(time) {
    this.durationInput.value = time.toFixed(2);
  }
  pause = () => {
    clearInterval(this.intervalID);
  };
}
