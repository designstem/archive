import { format, generateSTL } from "./utils.js";

Vue.config.ignoredElements = ["a-scene", "a-box", "a-sky"];

new Vue({
  el: "#app",
  components: {},
  data: () => ({
    deform: 0,
    rotation: 0,
    count: 5,
    angle: 45,
    stlCode: ""
  }),
  methods: {
    format,
    exportSTL() {
      console.log(this.$refs.exportable[0]);
      this.stlCode = generateSTL(this.$refs.exportable[0].object3D);
    }
  },
  computed: {
    size() {
      return Array.from({ length: 20 })
        .map((_, i) => i)
        .slice(0, this.count);
    }
  },
  template: `
    <div>
    <a-scene>
      <a-entity position="0 -0.5 7" camera look-controls></a-entity>
        <a-entity>
          <a-entity
            v-for="x in size"
            :key="x"
            :rotation="[angle,0,0].join(' ')"
          >
            <a-entity
              ref="exportable"
              v-for="z in size"
              :key="z"
              :position="format({x: x - Math.floor(count/2), y: 0, z: z - Math.floor(count/2)})"
              :rotation="[0,rotation,0].join(' ')"
              >
              <a-triangle
                color="green"
                :vertex-a="[0,deform,0].join(' ')"
                vertex-b="0 0 1"
                :vertex-c="[1,0,1].join(' ')"
                material="side: double;"
              />
              <a-triangle
                color="blue"
                :vertex-a="[0,deform,0].join(' ')"
                :vertex-b="[1,0,1].join(' ')"
                vertex-c="1 0 0"
                material="side: double;"
              />
              <!-- Base -->
              <a-triangle
                color="cyan"
                :vertex-a="[0,0,0].join(' ')"
                vertex-b="0 0 1"
                :vertex-c="[1,0,1].join(' ')"
                material="side: double;"
              />
              <a-triangle
                color="violet"
                :vertex-a="[0,0,0].join(' ')"
                :vertex-b="[1,0,1].join(' ')"
                vertex-c="1 0 0"
                material="side: double;"
              />
              <!-- Sides -->
              <a-triangle
                color="red"
                vertex-a="0 0 0"
                vertex-b="0 0 1"
                :vertex-c="[0,deform,0].join(' ')"
                material="side: double;"
              />
              <a-triangle
                color="yellow"
                vertex-a="0 0 0"
                vertex-b="1 0 0"
                :vertex-c="[0,deform,0].join(' ')"
                material="side: double;"
              />
            </a-entity>
          </a-entity>
        </a-entity>
      <a-sky color="#D6EEFF"></a-sky>
    </a-scene>

    <div class="controls">
      <h4>Item count</h4>
      <input type="range" v-model="count" min="1" max="20">
      <h4>Canvas angle</h4>
      <input type="range" v-model="angle" min="-180" max="180">
      <h4>Corner deform</h4>
      <input type="range" v-model="deform" step="0.01" min="0" max="1.5">
      <h4>Item rotations</h4>
      <input type="range" v-model="rotation" max="180">
      <button @click.prevent="exportSTL">Export STL</button>
      <textarea v-model="stlCode" rows="10" style="padding: 5px" />
    </div>

    </div>
    `
});
