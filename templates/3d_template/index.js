// Utils

const format = (obj) => {
  return Object.values(obj).join(' ')
}

// Main app config

Vue.config.ignoredElements = [
  "a-scene",
  "a-box",
  "a-sky",
];

// Main app

new Vue({
  el: "#app",
  components: {},
  data: () => ({
    rotation: 45,
    boxes: [
      { x: -1, y: 1.5, z: -2 },
      { x: 2, y: 0, z: -7 },
      { x: -0.2, y: -1, z: -7 }
    ]
  }),
  methods: { format: format },
  template: `
    <div>
      <a-scene embedded>
        <a-box
          v-for="(box,index) in boxes"
          :key="index"
          :position="format(box)"
          :rotation="format({ x: rotation, y: rotation, z: rotation})"
          color="#FE4A49"
        ></a-box>
        <a-sky color="papayawhip"></a-sky>
      </a-scene>
      <div class="controls">
        <h4>Rotation angle</h4>
        <input type="range" v-model="rotation" max="360" />
      </div>
    </div>
    `
});