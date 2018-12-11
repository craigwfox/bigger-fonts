const CSS = `body {
  background: #efefef;
  color: #222;
}
h1, h2, h3, h4, h5, h6, p {
  color: #222;
  font-family: Georgia, serif !important;
}
p {
  font-size: 22px !important;
  line-height: 1.4 !important;
}
`;
const TITLE_APPLY = "Apply CSS";
const TITLE_REMOVE = "Remove CSS";
let bfactive = false;

browser.browserAction.onClicked.addListener(function(tab) {
  if (bfactive) {
    browser.tabs.removeCSS({ code: CSS });
    bfactive = false;
  } else {
    browser.tabs.insertCSS({ code: CSS });
    bfactive = true;
  }
});
