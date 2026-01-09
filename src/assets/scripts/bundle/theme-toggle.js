const forcedTheme = "light";
document.firstElementChild.setAttribute("data-theme", forcedTheme);

window.onload = () => {
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  if (metaThemeColor) {
    metaThemeColor.setAttribute("content", "{{ meta.themeLight }}");
  }
};
