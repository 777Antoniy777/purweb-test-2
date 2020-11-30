const scrollButton = document.querySelector('.intro__scroll-button');
const nextBlock = document.querySelector('.features');
let initialYCoords = 0;

const getCoords = () => {
  if (!nextBlock) return false;

  const rect = nextBlock.getBoundingClientRect();
  initialYCoords = rect.top + window.pageYOffset;
};

const handleButtonClick = () => {
  window.scroll({
    top: initialYCoords,
    left: 0,
    behavior: 'smooth',
  });

  scrollButton.blur();
};

let resizeTimeout;
function resizeThrottler() {
  // ignore resize events as long as an actualResizeHandler execution is in the queue
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(() => {
      resizeTimeout = null;
      actualResizeHandler();

      // The actualResizeHandler will execute at a rate of 15fps
    }, 66);
  }
}

function actualResizeHandler() {
  // handle the resize event
  getCoords();
}

getCoords();
scrollButton.addEventListener('click', handleButtonClick);
window.addEventListener("resize", resizeThrottler, false);
