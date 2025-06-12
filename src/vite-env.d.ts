/// <reference types="vite/client" />

declare module '*.pdf' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

type PageType = 'home' | 'foodMenu' | 'drinkMenu';

declare global {
  interface Window {
    navigateTo: (page: PageType) => void;
  }
}
