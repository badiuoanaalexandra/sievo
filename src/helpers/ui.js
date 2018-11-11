export const getViewportWidth = () => {
  return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
}

export const getViewportHeight = () => {
 return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
}

export const tabletBreakpoint = 770;

export const mobileBreakpoint = 450;
