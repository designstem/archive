import * as components from "https://designstem.github.io/fachwerk/framework.js";
import * as utils from "https://designstem.github.io/fachwerk/utils.js";
for (const name in components) {
  Vue.component(name, components[name]);
}

new Vue({
  el: "#app",
  data: { r: 1, g: 1, b: 1, scene: 0, rSlider: 0 },
  methods: { ...utils,
    prevScene() {
      if (this.scene >= 1) {
        this.scene--
      } 
    },
    nextScene() {
      if (this.scene < 1) {
        this.scene++
      } 
    }
  },
  template: `
  <div>

  <f-aframe width="600" height="600">

    <a-entity  position="0 0 -4" rotation="-35 0 0" scale="1.5 1.5 1.5">
      
      <!-- Scene 0 -->

      <a-entity v-if="scene == 0">
      <a-entity
        @click="r = 1 - r"
        position="-2 -0.5 -4"
      >
        <a-rounded
          radius="0.06"
          :material="{emissive: !r && !b && !g ? '#222' : '#aaa'}"
        />
        <a-text
          position="0.32 0.5 0"
          value="R"
          :color="r ? '#f00' : '#777'"
          width="10"
        />
      </a-entity>

      <a-entity
        @click="g = 1 - g"
        position="-0.5 -0.5 -4"
      >
        <a-rounded
          radius="0.06"
          :material="{emissive: !r && !b && !g ? '#222' : '#aaa'}"
        />
        <a-text
          position="0.32 0.5 0"
          value="G"
          :color="g ? '#0f0' : '#777'"
          width="10"
        />
      </a-entity>

      <a-entity
        @click="b = 1 - b"
        position="1 -0.5 -4"
      >
        <a-rounded
          radius="0.06"
          :material="{emissive: !r && !b && !g ? '#222' : '#aaa'}"
        />
        <a-text
          position="0.32 0.5 0"
          value="B"
          :color="b ? '#00f' : '#777'"
          width="10"
        />
      </a-entity>
      </a-entity>

      <!-- Scene 1 -->

        <!-- To be done -->

      <!-- Pager -->

      <a-entity
        @click="prevScene"
        position="-2 -2.5 -4"
      >
        <a-rounded
          radius="0.06"
          :material="{emissive: !r && !b && !g ? '#222' : '#aaa'}"
        />
        <a-text
          position="0.32 0.5 0"
          value="<"
          color="#777"
          width="10"
        />
      </a-entity>

      <a-entity
      position="-0.5 -2.5 -4"
      >
        <a-text
          position="0.32 0.5 0"
          :value="scene"
          color="#fff"
          width="10"
        />
      </a-entity>

      <a-entity
        @click="nextScene"
        position="1 -2.5 -4"
      >
        <a-rounded
          radius="0.06"
          :material="{emissive: !r && !b && !g ? '#222' : '#aaa'}"
        />
        <a-text
          position="0.32 0.5 0"
          value=">"
          color="#777"
          width="10"
        />
      </a-entity>

    </a-entity>

    <!-- Lights -->

    <!--a-light v-if="!(r || g || b)" position="0 5 3" :color="rgb(255,255,255)" /-->
    <!--a-light position="0 -1 1" :color="rgb(100,100,100)" /-->

    <a-light position="0 0.5 1" :color="rgb([0,255][r],[0,255][g],[0,255][b])" />

    <!-- Spheres -->

    <a-sphere position="-5 0 -20" color="rgb(255,255,0)" />
    <a-sphere position="0 0 -20" color="rgb(255,0,0)" />
    <a-sphere position="5 0 -20" color="rgb(255,190,0)" />
    <a-sphere position="10 0 -20" color="rgb(255,255,255)" />

  </f-aframe>
  </div>
  
  `
});
