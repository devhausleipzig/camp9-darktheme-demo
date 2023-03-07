import './style.css'

const themeTogglerRef = document.getElementById("theme-toggler")!;


function handleClick() {
  document.querySelector("html")?.classList.toggle("dark");
}

themeTogglerRef.onclick = handleClick;