import * as components from "https://designstem.github.io/fachwerk/framework.js";
import * as utils from "https://designstem.github.io/fachwerk/utils.js";

for (const name in components) {
  Vue.component(name, components[name]);
}

new Vue({
  el: "#app",
  methods: { ...utils },
  template: `
    <f-content-editor autosave-id="contenteditor" />
  `
});
