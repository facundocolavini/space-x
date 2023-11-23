import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_2361acff.mjs';

const _page0  = () => import('./chunks/generic_fe194c8b.mjs');
const _page1  = () => import('./chunks/index_ce48c567.mjs');
const _page2  = () => import('./chunks/_id__8e6b0cf9.mjs');
const _page3  = () => import('./chunks/_search__db4a5ffa.mjs');
const _page4  = () => import('./chunks/404_2fbcbf75.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/launch/[id].astro", _page2],["src/pages/search/[search].astro", _page3],["src/pages/404.astro", _page4]]);
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
