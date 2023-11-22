import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_0029033a.mjs';

const _page0  = () => import('./chunks/generic_2f4724c2.mjs');
const _page1  = () => import('./chunks/index_1fd4e039.mjs');
const _page2  = () => import('./chunks/_id__d3c91123.mjs');
const _page3  = () => import('./chunks/404_3162fcc2.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/launch/[id].astro", _page2],["src/pages/404.astro", _page3]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
