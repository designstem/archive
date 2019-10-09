import * as components from "./components.js";
import * as utils from "./utils.js";
import { Init } from "./mixins.js"

for (const name in components) {
  Vue.component(name, components[name]);
}

new Vue({
  mixins: [Init],
  el: "#app",
  methods: { ...utils },
  template: `
    <f-content-editor />
  `
});
