export const getThreshold = (innerHeight, innerWidth) => {
  switch (true) {
    case innerHeight > 600 && innerWidth > 1024:
    case innerHeight === 1368 && innerWidth === 912:
    case innerHeight === 1180 && innerWidth === 820:
    case innerHeight === 1024 && innerWidth === 768:
      return 0.7;
    case innerHeight > 599 && innerWidth <= 1024:
    case innerHeight < 915 && innerWidth < 413:
      return 0.4;
    default:
      return 0.4;
  }
};
