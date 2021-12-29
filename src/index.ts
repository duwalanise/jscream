import scream from "./scream";

declare global {
  interface Window {
    scream: typeof scream;
  }
}

if (window) {
  window.scream = scream;
}
