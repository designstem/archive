// Utils

const cx = (deg, radius) => {
  return Math.cos((deg - 90) * (Math.PI / 180)) * radius;
};

const cy = (deg, radius) => {
  return Math.sin((deg - 90) * (Math.PI / 180)) * radius;
};

// Primitives

const Scene = {
    props: ["size"],
    computed: {
        viewBox() {
            return `-${this.size / 2} -${this.size / 2} ${this.size} ${this.size}`;
        }
    },
    template: `
        <svg
            :width="size"
            :height="size"
            style="background: papayawhip"
            :view-box.camel="viewBox"
        >
            <slot />
        </svg>
    `
};

const Box = {
    props: ["size", "fill"],
    template: `
        <rect
            :x="size / -2"
            :y="size / -2"
            :width="size"
            :height="size"
            :fill="fill"
            stroke="black"
        />
    `
}

// The main app

new Vue({
  el: "#app",
  components: { Scene, Box },
  data: () => ({
    size: 200
  }),
  template: `
        <div>
            
            <h5>Size: {{size}} px</h5>
            <input type="range" v-model="size" max="1000" />

            <Scene :size="size">
                <Box :size="size / 2" fill="none" />
            </Scene>

        </div>
    `
});