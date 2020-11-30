const ESC_CODE = 27;
const html = document.querySelector('html');
const body = html.querySelector('body');
const videoPreview = body.querySelector('.spotlight__preview-wrapper');
const videoPopup = body.querySelector('.popup-video');
const video = videoPopup && videoPopup.querySelector('video');

const handlePreviewClick = () => {
  if (!video) return false;

  html.classList.add('overflow-hidden');
  body.classList.add('overflow-hidden');
  videoPopup.classList.add('popup-show');

  video.load();
  video.play();
};

const handlePopupClick = (evt) => {
  const target = evt.target;
  const isOverlay = target.classList.contains('popup-video');
  const isButtonClose = target.classList.contains('popup-video__button');
  const isSiteWrapper = target.classList.contains('site-wrapper');

  if (!isOverlay && !isSiteWrapper && !isButtonClose) return false;

  html.classList.remove('overflow-hidden');
  body.classList.remove('overflow-hidden');
  videoPopup.classList.remove('popup-show');

  video.pause();
};

const handleESCKeydown = (evt) => {
  if (evt.keyCode !== ESC_CODE) return false;

  html.classList.remove('overflow-hidden');
  body.classList.remove('overflow-hidden');
  videoPopup.classList.remove('popup-show');

  video.pause();
};

if (videoPreview && videoPopup) {
  videoPreview.addEventListener('click', handlePreviewClick);
  videoPopup.addEventListener('click', handlePopupClick);
  document.addEventListener('keydown', handleESCKeydown);
}

