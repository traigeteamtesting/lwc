import { registerTemplate, renderApi } from "lwc";
const { h: api_element } = renderApi;
const stc0 = {
  attrs: {
    xmlns: "http://www.w3.org/2000/svg",
  },
  key: 0,
  svg: true,
};
const stc1 = {
  key: 1,
  svg: true,
};
function tmpl($api, $cmp, $slotset, $ctx) {
  return [api_element("svg", stc0, [api_element("path", stc1)])];
  /*LWC compiler vX.X.X*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];
