export const onScroll = () => {
  const pixelsFromTop = window.scrollY;
  const documentHeight = document.body.clientHeight;
  const windowHeight = window.innerHeight;
  const difference = documentHeight - windowHeight;
  const percentage = (100 * pixelsFromTop) / difference;
  document.querySelector(".progress_bar").style.width = `${percentage}%`;
};
