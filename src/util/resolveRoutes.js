const resolveRoutes = (route) => {
  let validRoute = "";
  if (route.length == 1) {
    return (validRoute = route);
  } else if (route !== "about") {
    return (validRoute = route = "/:id");
  } else {
    return `/${route}`;
  }
};

export default resolveRoutes;
