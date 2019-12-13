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
  htmlObject.setAttribute('view', 'true');
  containerView.appendChild(htmlObject);
}


function convertCss() {

  const allViewElements = containerView.querySelectorAll('*');

  for (const element of allViewElements) {
    element.style = '';
  }

  let cssValue = editor_css.value
    .replace(/\r?\n|\r/g, '')
    .split(/[{;}]/)
    .filter(Boolean);

  let tag = '';
  let rule = '';

  for (const element of cssValue) {

    if (element.includes(':')) {
      rule += element + '; ';
    } else {
      tag = element;
      rule = '';
    }

    const tags = document.querySelectorAll(`[view="true"] ${tag}`);

    for (const tag of tags) {
      tag.style = rule;
    }

  }

}
