# IGotKeys
Small Scipt to make hotkeys on webpages. Shortcut for math symbols in google docs instead of menu diving etc 


To load into browser copy following into your browser console (to open browser console Ctrl+ i)

---
const script = document.createElement("script")
script.type = "text/javascript"
script.src = "https://ghcdn.rawgit.org/torben123456/IGotKeys/master/IGotKeys.js"
integrity="sha256-DrT5NfxfbHvMHux31Lkhxg42LY6of8TaYyK50jnxRnM="
crossorigin="anonymous"
document.head.appendChild(script)

eval(script)

----


