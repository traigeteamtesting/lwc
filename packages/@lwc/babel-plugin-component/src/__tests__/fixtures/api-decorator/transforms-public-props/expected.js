import { registerDecorators as _registerDecorators, registerComponent as _registerComponent } from "lwc";
import _tmpl from "./test.html";

class Test {
  test = 1;
}

_registerDecorators(Test, {
  publicProps: {
    test: {
      config: 0
    }
  }
});

export default _registerComponent(Test, {
  tmpl: _tmpl
});