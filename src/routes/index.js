import Header from "../templates/Header";
import Home from "../pages/Home";
import Countries from "../pages/Countries";
import Error404 from "../pages/Error404";
import getHash from "../util/getHash";
import resolveRoutes from "../util/resolveRoutes";

const routes = {
  "/": Home,
  "/:id": Countries,
  "/contact": "Contact",
};

const router = async () => {
  const header = null || document.getElementById("header");
  const content = null || document.getElementById("content");

  header.innerHTML = await Header();

  let hash = getHash();
  console.log(hash);
  let route = await resolveRoutes(hash);
  let render = routes[route] ? routes[route] : Error404;
  console.log("the route ", routes[route]);
  content.innerHTML = await render();
};

export default router;
