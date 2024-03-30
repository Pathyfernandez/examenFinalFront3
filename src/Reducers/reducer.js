export const reducer = (state, action) => {
  switch (action.type) {
    case "getList":
      return { ...state, list: action.payload };
    case "getDetail":
      return { ...state, detail: action.payload };
    case "addFav":
      return { ...state, favs: [...state.favs, action.payload] };
    case "toggleTheme":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    default:
      return state;
  }
};
