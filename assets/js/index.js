////////////////////////////////////////////////////////////////////////
//                             variables                              //
////////////////////////////////////////////////////////////////////////

const editor_html = document.querySelector('.editor-html');
const editor_css = document.querySelector('.editor-css');
const editor_js = document.querySelector('.editor-js');
const containerView = document.querySelector('.container-view')

////////////////////////////////////////////////////////////////////////
//                               events                               //
////////////////////////////////////////////////////////////////////////

window.onclick = () => {
  convertCss();
}

editor_html.addEventListener('blur', () => {
  convertHtml();
})

////////////////////////////////////////////////////////////////////////
//                             functions                              //
////////////////////////////////////////////////////////////////////////


function convertHtml() {
  containerView.innerHTML = '';
  const htmlObject = document.createElement('article');
  const htmlValue = editor_html.value;
  htmlObject.innerHTML = htmlValue;
  containerView.appendChild(htmlObject);
}


function convertCss() {

  let lastStyleSheet = document.querySelector('style[key="0"]');
  lastStyleSheet === null ? '' : lastStyleSheet.remove();

  const style = editor_css.value;
  const styleSheet = document.createElement('style');
  styleSheet.type = "text/css";
  styleSheet.innerHTML = style;
  styleSheet.setAttribute('key', '0');
  document.head.appendChild(styleSheet);

  // let cssValue = editor_css.value
  //   .replace(/\r?\n|\r/g, '')
  //   .split(/[{;}]/)
  //   .filter(Boolean);

  // for (const element of cssValue) {
  //   let tag = '';
  //   let rule = '';
  //   if (element.includes(':')) {
  //     rule = tag;
  //   } else {
  //     tag = element;
  //   }
  // }

}
