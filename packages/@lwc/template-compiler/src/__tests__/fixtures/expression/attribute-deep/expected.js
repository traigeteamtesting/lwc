import { registerTemplate, renderApi } from "lwc";
const { h: api_element } = renderApi;
const stc0 = {
  key: 0,
};
function tmpl($api, $cmp, $slotset, $ctx) {
  return [
    api_element("section", stc0, [
      api_element("p", {
        className: $cmp.bar.foo.baz,
        key: 1,
      }),
    ]),
  ];
  /*LWC compiler vX.X.X*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];
