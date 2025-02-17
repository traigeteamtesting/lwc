import { registerDecorators as _registerDecorators, registerComponent as _registerComponent } from "lwc";
import _tmpl from "./test.html";

class Test {
  record = {
    value: "test"
  };
}

_registerDecorators(Test, {
  track: {
    record: 1
  }
});

export default _registerComponent(Test, {
  tmpl: _tmpl
});