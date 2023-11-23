/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, i as renderComponent, k as renderTransition, l as fade } from '../astro_4e2083c8.mjs';
import 'html-escaper';
import 'clsx';
import { g as getLastestLaunches, a as getLaunchesByName, $ as $$Layout } from './_id__96d9063f.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
/* empty css                          */
function IconSearch(props) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      ...props,
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        /* @__PURE__ */ jsx("circle", { cx: "11", cy: "11", r: "8" }),
        /* @__PURE__ */ jsx("path", { d: "m21 21-4.3-4.3" })
      ]
    }
  );
}

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  const onSubmitSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      window.location.href = `/search/${searchTerm}`;
    }
  };
  return /* @__PURE__ */ jsx("div", { className: "my-4 flex flex-wrap justify-center", children: /* @__PURE__ */ jsxs("form", { onSubmit: onSubmitSearch, className: "flex items-center border border-gray-300 rounded-full shadow-sm overflow-hidden", children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "seach",
        placeholder: "Buscar por nombre...",
        value: searchTerm,
        onChange: handleSearch,
        className: "px-4 py-2 focus:outline-none border-none"
      }
    ),
    /* @__PURE__ */ jsx("button", { className: "bg-blue-500 text-white px-4 py-2 transition duration-300 hover:bg-blue-600 focus:outline-none", type: "submit", children: /* @__PURE__ */ jsx(IconSearch, { className: "flex justify-center w-5" }) })
  ] }) });
};

const $$Astro$2 = createAstro();
const $$CardLaunch = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CardLaunch;
  const { success, flightNumber, img, id, name, details } = Astro2.props;
  const successText = success ? "\xC9xito" : "Fracaso";
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/launch/${id}`, "href")} class="rounded-lg border shadow lg bg-slate-300 hover:scale-105 transform transition flex flex-col"> <picture class="flex justify-center"> <img${addAttribute(img, "src")}${addAttribute(name, "alt")} class="rounded-lg my-5" height="150" width="150"${addAttribute(img, "src")}${addAttribute(`Lanzamiento ${id}`, "alt")}> </picture> <header class="p-4 flex-grow"> <span${addAttribute([
    "text-xs font-semibold mr-2 px-2.5 py-1 rounded",
    {
      "bg-green-100 text-green-800": success,
      "bg-red-100 text-red-800": !success
    }
  ], "class:list")}>${successText}</span> <h2 class="my-2 text-2xl font-bold tracking-tight text-zinc-900">Vuelo #${flightNumber}</h2> <p class="mb-4 font-light text-gray-950"> ${details !== null && details?.length > 100 ? details.slice(0, 100) + "..." : details} </p> </header> </a>`;
}, "C:/Users/root/space-x/src/components/CardLaunch.astro", void 0);

const $$Astro$1 = createAstro();
const $$Launches = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Launches;
  let list;
  const { searchedLaunch } = Astro2.props;
  const launches = await getLastestLaunches();
  if (searchedLaunch) {
    list = searchedLaunch;
  } else {
    list = launches;
  }
  return renderTemplate`${maybeRenderHead()}<div class="grid gap-8 my-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"> ${list?.map(
    ({
      id,
      name,
      details,
      flight_number: flightNumber,
      links,
      success
    }) => renderTemplate`${renderComponent($$result, "CardLaunch", $$CardLaunch, { "id": id, "name": name, "details": details, "img": links.patch.small, "flightNumber": flightNumber, "success": success })}`
  )} </div>`;
}, "C:/Users/root/space-x/src/components/Launches.astro", void 0);

const $$Astro = createAstro();
const prerender = false;
const $$search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$search;
  let launches;
  const { search } = Astro2.params;
  if (search) {
    launches = await getLaunchesByName(search);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Busqueda de Lanzamientos" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Search", Search, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/react/Search.tsx", "client:component-export": "default", "data-astro-transition-scope": renderTransition($$result2, "mnedcbqo", fade({ duration: "2s" }), "") })} ${launches.length === 0 ? renderTemplate`${maybeRenderHead()}<h1 class="text-black text-2xl my-10">No hay resultados...</h1>` : renderTemplate`${renderComponent($$result2, "Launches", $$Launches, { "searchedLaunch": launches })}`}` })}`;
}, "C:/Users/root/space-x/src/pages/search/[search].astro", "self");

const $$file = "C:/Users/root/space-x/src/pages/search/[search].astro";
const $$url = "/search/[search]";

const _search_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$search,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Launches as $, Search as S, _search_ as _ };
