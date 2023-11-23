export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./prerender_03e6fa3f.mjs').then(n => n._);

export { page };
