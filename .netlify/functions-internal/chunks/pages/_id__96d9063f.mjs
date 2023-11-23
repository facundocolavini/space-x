/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, g as addAttribute, m as maybeRenderHead, h as renderSlot, i as renderComponent, j as renderHead, k as renderTransition } from '../astro_4e2083c8.mjs';
import 'html-escaper';
import 'clsx';
/* empty css                          */
const getLaunchBy = async ({ id }) => {
  const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`);
  const launch = await res.json();
  return launch;
};
const getLaunchesByName = async (name) => {
  const res = await fetch(`https://api.spacexdata.com/v5/launches/query`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: {
        "name": { "$regex": `.*${name}.*`, "$options": "i" }
        // Búsqueda por nombre
      },
      options: {
        limit: 12
        // Limitar a un solo resultado
      }
    })
  });
  const { docs: launches } = await res.json();
  return launches;
};
const getLastestLaunches = async () => {
  const res = await fetch(
    "https://api.spacexdata.com/v5/launches/query",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query: {},
        // Búsqueda por nombre,
        options: {
          sort: {
            date_unix: "asc"
          },
          limit: 12
        }
      })
    }
  );
  const { docs: launches } = await res.json();
  return launches;
};

const $$Astro$6 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate", handleForms } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${handleForms ? renderTemplate`<meta name="astro-view-transitions-forms" content="true">` : ""}`;
}, "C:/Users/root/space-x/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$5 = createAstro();
const $$HeaderButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$HeaderButton;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} class="flex flex-row gap-1 justify-center  cursor-pointer focus:outline-none  transition-all duration-200 text-lime-600 hover:text-emerald-800"> ${renderSlot($$result, $$slots["before"])} ${renderSlot($$result, $$slots["default"], renderTemplate` texto por defecto `)} ${renderSlot($$result, $$slots["after"])} </a>`;
}, "C:/Users/root/space-x/src/components/HeaderButton.astro", void 0);

const $$Astro$4 = createAstro();
const $$Navigation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Navigation;
  return renderTemplate`${maybeRenderHead()}<nav class="flex gap-2 items-start"> ${renderComponent($$result, "HeaderButton", $$HeaderButton, { "href": "/" }, { "before": ($$result2) => renderTemplate`<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 12l-2 0l9 -9l9 9l-2 0"></path><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path></svg>`, "default": ($$result2) => renderTemplate` 
Inicio
` })} ${renderComponent($$result, "HeaderButton", $$HeaderButton, { "href": "/" }, { "default": ($$result2) => renderTemplate`
Lanzamientos
` })} </nav>`;
}, "C:/Users/root/space-x/src/layouts/Navigation.astro", void 0);

const $$Astro$3 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class=" bg-slate-100 shadow-md  py-4"> <div class="mx-auto container flex justify-between items-center"> <img src="https://matiasszpira.com.ar/img/logo.png" alt="Logo" class="w-24 h-auto"> ${renderComponent($$result, "Navigation", $$Navigation, {})} </div> </header>`;
}, "C:/Users/root/space-x/src/layouts/Header.astro", void 0);

const $$Astro$2 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  const NAME = "Matias Szpira";
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gray-200 text-center py-4" data-astro-cid-mtxgg6pp> <p class="text-sm text-gray-600" data-astro-cid-mtxgg6pp>© ${( new Date()).getFullYear()} Inmobiliaria ${NAME}</p> </footer> `;
}, "C:/Users/root/space-x/src/layouts/Footer.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta property="og:title" content=" en alquiler y venta  - Matías Szpira Bienes Raíces"><meta property="og:site_name" content="Matías Szpira Bienes Raíces"><meta name="viewport" content="width=device-width"><meta property="og:image" content="img/logo-web-compartir.jpg"><meta itemprop="image" content="img/logo-web-compartir.jpg"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, { "data-astro-cid-sckkx6r4": true })}${renderHead()}</head> <body data-astro-cid-sckkx6r4> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-sckkx6r4": true })} <main class="mx-auto container" data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-sckkx6r4": true })}  </body></html>`;
}, "C:/Users/root/space-x/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  let launch;
  if (id) {
    launch = await getLaunchBy({ id });
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Lanzamiento ${id}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class=" my-8 px-5 flex gap-y-4 flex-col"> <img class="w-52 h-auto"${addAttribute(launch?.links.patch.small, "src")}${addAttribute(launch?.name, "alt")}${addAttribute(renderTransition($$result2, "ewkegrrd", "slide", ""), "data-astro-transition-scope")}> <h2 class="text-4xl font-bold">${launch?.name}</h2> <p class="text-lg">${launch?.details}</p> </article> ` })}`;
}, "C:/Users/root/space-x/src/pages/launch/[id].astro", "self");

const $$file = "C:/Users/root/space-x/src/pages/launch/[id].astro";
const $$url = "/launch/[id]";

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _id_ as _, getLaunchesByName as a, getLastestLaunches as g };
