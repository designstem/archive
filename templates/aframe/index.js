import * as components from "https://designstem.github.io/fachwerk/components.js";
import * as utils from "https://designstem.github.io/fachwerk/utils.js";
import { Init } from "https://designstem.github.io/fachwerk/mixins.js";

for (const name in components) {
  Vue.component(name, components[name]);
}

import FAframe from './FAframe.js'
import FAframeButton from './FAframeButton.js'

Vue.component('FAframe', FAframe)
Vue.component('FAframeButton', FAframeButton)

new Vue({
  mixins: [Init],
  el: '#app',
  methods: { ...utils },
  data: { content: `<!--
This is a A-Frame scene with some custom components from Fachwerk framework

https://aframe.io/docs/0.8.0/introduction/
https://designstem.github.io/fachwerk

<f-aframe> is a wrapper around <a-scene> with a gaze cursor
and embedding enabled.
-->

<f-aframe width="600px" height="600px">
  <!-- 
  A custom button component that is triggered on gaze
  and uses get() and set() helpers to set a global state
  -->
  <f-aframe-button
    position="0 2 -3"
    title="Look"
    v-on:click.native="set('move',1 - get('move',1))"
  />
  <!--
  Any A-frame component works here.
  Note that we are using join() helper
  to make position attribute dynamic
  -->
  <a-sphere
    :position="join(0,0,get('move',1) ? -5 : -10)"
    color="orange"
  />
</f-aframe>


















  
  `
  },
  template: `
  <div style="background-color: #111">
 <f-keyboard
      alt
      character="e"
      v-on:keydown="set('advanced', 1 - get('advanced', 0))"
  ></f-keyboard>
  <f-content-editor style="--gap: 0px; height: 100vh" :content="content" :advanced="get('advanced',0)">
    <f-content-document style="padding: 0px;" slot-scope="{ content }" :content="content"/>
  </f-content-editor>
  </div>


  `
});
