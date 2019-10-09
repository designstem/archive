// export default {
//   tag: 'Data',
//   example: `
// <f-array-data :length="3">
//   <f-scene slot-scope="data">
//   <circle
//     v-for="(value,x) in data.value"
//     :key="x"
//     :cx="x - 1"
//     r="0.5"
//     :fill="value ? 'var(--red)' : 'var(--primary)'"
//     @click="data.update(1 - value, x)"
//   />
//   </f-scene>
// </f-array-data>

// <f-array-data :length="7" :dimensions="2">
//   <f-scene slot-scope="data">
//   <template v-for="(col, x) in data.value">
//   <f-box
//     v-for="(value, y) in col"
//     :key="x * y"
//     :x="x / 2 - 1.2"
//     :y="y / 2 - 1.2"
//     width="0.49"
//     height="0.49"
//     :fill="value ? 'var(--red)' : 'var(--primary)'"
//     @click.native="data.update(1 - value, x, y)"
//   />
//   </template>
//   </f-scene>
// </f-array-data>

// <f-array-data :length="3" :map="(_,i) => i">
//   <pre slot-scope="data">{{ data }}</pre>
// </f-array-data>
//   `,
//   props: {
//     length: { default: 1, type: Number },
//     dimensions: { default: 1, type: Number },
//     map: { default: (d) => d, type: Function }
//   },
//   methods: {
//     onUpdate(newValue, x, y = -1, z = -1) {
//       if (y > -1 && z > -1) {
//         this.$set(this.maxValue[x][y], z, newValue);
//       }
//       if (y > -1 && z == -1) {
//         this.$set(this.maxValue[x], y, newValue);
//       }
//       if (y == -1 && z == -1) {
//         this.$set(this.maxValue, x, newValue);
//       }
      
//     }
//   },
//   created() {
//     if (this.dimensions == 3) {
//       this.maxValue = Array.from({ length: 1000 }).map(_ =>
//         Array.from({ length: 1000 }).map(_ =>
//           Array.from({ length: 1000 }).map(_ => 0)
//         )
//       );
//     }
//     if (this.dimensions == 2) {
//       this.maxValue = Array.from({ length: 1000 }).map(_ =>
//         Array.from({ length: 1000 }).map(_ => 0)
//       );
//     }
//     if (this.dimensions == 1) {
//       this.maxValue = Array.from({ length: 1000 }).map(_ => 0)
//     }
//   },
//   computed: {
//     value() {
//       if (this.dimensions == 3) {
//         return this.maxValue.slice(0, this.length).map(x =>
//           x.slice(0, this.length).map(y =>
//             y.slice(0, this.length).map(this.map)
//           )
//         );
//       }
//       if (this.dimensions == 2) {
//         return this.maxValue.slice(0, this.length).map(x =>
//           x.slice(0, this.length).map(this.map)
//         );
//       }
//       if (this.dimensions == 1) {
//         return this.maxValue.slice(0, this.length).map(this.map);
//       }
//     }
//   },
//   data: () => ({ maxValue: [] }),
//   template: `
//     <slot :value="value" :update="onUpdate" /> 
//   `
// };


import * as components from "./framework.js";
import * as utils from "./utils.js";

for (const name in components) {
  Vue.component(name, components[name]);
}

const FBuffer = {
  props: {
    length: { default: 3, type: Number },
    map: { default: d => 0, type: Function }
  },
  methods: {
    onUpdate(value) {
      this.buffer.shift()
      this.buffer.push(value)
    }
  },
  data: function() {
    return { buffer: Array.from({ length: this.length }).map(this.map) }
  },
  template: `
    <slot :value="buffer" :update="onUpdate" /> 
  `
}

Vue.component('FBuffer',FBuffer)

// new Vue({
//   el: "#app",
//   methods: { ...utils },
//   data: { a: 0 },
//   template: `
//   <div style="padding: var(--base4);">
//     <f-buffer :length="10" :map="() => [Math.random(),Math.random()]"> 
//       <div slot-scope="data">
//         <button @click="data.update([Math.random(),Math.random()])">+1</button>
//         <f-scene>
//           <f-circle
//             v-for="(p,i) in data.value"
//             :x="scale(p[0],0,0.5,-0.5,1)"
//             :y="scale(p[1],0,-0.5,0.5,1)"
//             :fill="hsl(scale(i,0,9,0,50))"
//             stroke="none"
//             :r="scale(i,0,9,1,0.1)"
//           />
//         </f-scene>
//       </div>
//     </f-buffer>
//   </div>
//   `
// });

// const FSceneData2 = {
//   props: {
//     size: { default: 250, type: Number }
//   },
//   computed: {
//     viewBox() {
//       return `-2 -2 4 4`;
//     }
//   },
//   data: () => ({ mouseX: 0, mouseY: 0, mousePressed: false }),
//   methods: {
//     onSceneMousemove(e) {
//       let svg = this.$refs.svg;
//       let point = svg.createSVGPoint();
//       point.x = e.clientX;
//       point.y = e.clientY;
//       let ctm = this.$refs.container.getScreenCTM();
//       if ((ctm = ctm.inverse())) {
//         point = point.matrixTransform(ctm);
//       }
//       this.mouseX = point.x;
//       this.mouseY = point.y;
//     }
//   },
//   template: `
//     <svg
//         :width="size"
//         :height="size"
//         :view-box.camel="viewBox"
//         class="two"
//         @mousemove="onSceneMousemove"
//         @mousedown="mousePressed = true"
//         @mouseup="mousePressed = false"
//         ref="svg"
//     >
//       <g transform="scale(1,-1)" ref="container">
//         <slot :x="mouseX" :y="mouseY" :pressed="mousePressed" />
//       </g>
//     </svg>
//   `
// };

// Vue.component('FSceneData2',FSceneData2)

// new Vue({
//   el: "#app",
//   methods: { ...utils },
//   template: `
//     <f-scene-data2 size="500">
//       <f-buffer slot-scope="data" length="10" :map="() => [0,0]">
//         <f-group slot-scope="data2" @mousemove.native="data2.update([data.x,data.y])">
//           <f-circle
//             v-for="(p,i) in data2.value"
//             :x="p[0]"
//             :y="p[1]"
//             r="0.5"
//             stroke-width="0.1"
//             stroke="none"
//             :fill="color('red')"
//             :opacity="scale(i,0,9,0.2,0.8)"
//           />
//         </f-group>
//       </f-buffer>
//     </f-scene-data2>
//   `
// });


const FMessageData = {
  data: () => ({ value: null }),
  mounted() {
    this.$events.$on('touch', value => this.value = value )
  },
  template: `
    <slot :value="value" /> 
  `
}


Vue.component('FMessageData',FMessageData)






Vue.prototype.$events = new Vue()

new Vue({
  el: "#app",
  methods: { ...utils },
  mounted() {
    this.$events.$on('touch', () => console.log('touched'))
  },
  template: `
    <f-fetch-data url="./README.md">
      <f-content-slides slot-scope="data" :content="data.value" />
    </f-fetch-data>
  `
});