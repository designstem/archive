import * as components from "https://designstem.github.io/fachwerk/components.js";
import * as utils from "https://designstem.github.io/fachwerk/utils.js";
import { Init } from "https://designstem.github.io/fachwerk/mixins.js";

for (const name in components) {
  Vue.component(name, components[name])
}

new Vue({
  mixins: [Init],
  el: "#app",
  methods: { ...utils },
  data: ({ content: `<f-artboard width="600" grid>
    <f-circle x="100" y="100" r="50" />
</f-artboard>  



























  `}),
  template: `
  <f-content-editor
    style="
      --base4: 0;
      --gap: 0px;
      height: 100vh
    "
    :content="content"
  >
    <f-content-document slot-scope="data" :content="data.content" />
  </f-content-editor>
  `
});
