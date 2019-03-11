let containerEl = document.querySelector('.mixiup-item');

let mixer = mixitup(containerEl, {
  animation: {
    duration: 1000,
    nudge: false,
    reverseOut: false,
  }
});
