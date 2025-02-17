import { registerDecorators as _registerDecorators, registerComponent as _registerComponent } from "lwc";
import _tmpl from "./test.html";

class Text {
  publicProp;
  privateProp;

  get aloneGet() {}

  get myget() {}

  set myget(x) {
    return 1;
  }

  m1() {}

  m2() {}

  static ctor = "ctor";

  static get ctorGet() {
    return 1;
  }

}

_registerDecorators(Text, {
  publicProps: {
    publicProp: {
      config: 0
    },
    aloneGet: {
      config: 1
    },
    myget: {
      config: 3
    }
  },
  publicMethods: ["m1"],
  fields: ["privateProp"]
});

export default _registerComponent(Text, {
  tmpl: _tmpl
});