console.log("loaded big-font.js");

let bfstyles = document.createElement("style");
bfstyles.type = "text/css";
bfstyles.innerHTML = `p {
  font-size: 22px !important;
  font-family: Georgia, serif !important;
  line-height: 1.4 !important;
}`;

document.querySelector("body").appendChild(bfstyles);
