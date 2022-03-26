import Home from "./views/Home.js";
import codeFestival from "./views/codeFestival.js";
import codeFestivalView from "./views/codeFestivalView.js";
import leetCode from "./views/leetCode.js";
import { u } from './lib.js';

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
  const values = match.result.slice(1);
  const keys = Array.from(
    match.route.path
      .matchAll(/:(\w+)/g))
    .map(result => result[1]
    );

  return Object.fromEntries(
    keys.map((key, i) => {
      return [
        key,
        values[i]];
    }));
};

const navigateTo = url => {
  history.pushState(null, null, url);
  router();
}

const router = async () => {
  const routes = [
    { path: u("/"), view: Home },
    { path: u("/codeFestival"), view: codeFestival },
    { path: u("/codeFestival/:id"), view: codeFestivalView },
    { path: u("/leetCode"), view: leetCode },
  ];

  const potentialMathces = routes.map((route) => {
    return {
      route, // route: route
      result: location.pathname.match(pathToRegex(route.path))
    };
  });

  let match = potentialMathces.find(potentialMatch => potentialMatch.result !== null);

  if (!match) {
    match = {
      route: routes[0],
      result: [location.pathname]
    };
  }

  const view = new match.route.view(getParams(match));

  document.querySelector("#app").innerHTML = await view.getHtml();

}

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", e => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });

  router();
})