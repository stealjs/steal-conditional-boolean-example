let __global = typeof window === 'undefined' ? global : window;

export default !__global.Intl;
