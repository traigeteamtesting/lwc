import { registerTemplate, renderApi } from "lwc";
const { t: api_text, h: api_element } = renderApi;
const stc0 = {
  key: 0,
};
const stc1 = {
  key: 1,
};
const stc2 = {
  key: 2,
};
const stc3 = {
  key: 3,
};
function tmpl($api, $cmp, $slotset, $ctx) {
  return [
    api_element("section", stc0, [
      $cmp.isTrue ? api_element("p", stc1, [api_text("1")]) : null,
      $cmp.isTrue ? api_element("p", stc2, [api_text("2")]) : null,
      $cmp.isTrue ? api_element("p", stc3, [api_text("3")]) : null,
    ]),
  ];
  /*LWC compiler vX.X.X*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];
