import { registerDecorators as _registerDecorators, registerComponent as _registerComponent } from "lwc";
import _tmpl from "./test.html";
import { getFoo } from "data-service";

class Test {
  wiredMethod() {}

}

_registerDecorators(Test, {
  wire: {
    wiredMethod: {
      adapter: getFoo,
      dynamic: ["key1"],
      method: 1,
      config: function ($cmp) {
        return {
          key2: ["fixed"],
          key1: $cmp.prop1
        };
      }
    }
  }
});

export default _registerComponent(Test, {
  tmpl: _tmpl
});