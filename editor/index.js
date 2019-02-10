import * as components from 'https://designstem.github.io/fachwerk/components.js'

for (const name in components) {
  Vue.component(name, components[name])
}

import { cleanColumns } from "https://designstem.github.io/fachwerk/utils.js"

new Vue({
  el: "#app",
  data: () => ({
    content: "",
    components: [
      { title: "Slides", component: components.FContentSlides },
      { title: "Document", component: components.FContentDocument },
      { title: "Cards", component: components.FContentCards }
    ],
    samples: [
      { title: "Colors", file: './content/colors.md' },
      { title: "Finding Triangles", file: './content/triangles.md' },
      { title: "Spirals", file: './content/spirals.md' },
      { title: "Math theory", file: './content/math.md' },
      { title: "Misc experiments", file: './content/misc.md' },
      { title: "Structure", file: './content/structure.md' },
    ],
    activeComponent: 0,
    activeSample: 0,
    fullscreen: false,
    inverted: false,
    small: false
  }),
  methods: { cleanColumns },
  mounted() {
    this.$watch(
      "activeSample",
      value => {
        fetch( this.samples[value].file)
          .then(res => res.text())
          .then(content => {
            this.content = content
          })
      },
      { immediate: true }
    );
    document.addEventListener("keydown", e => {
      if (e.altKey && e.keyCode === 70) { // Alt + F
        this.fullscreen = !this.fullscreen
      }
      if (e.altKey && e.keyCode === 73) { // Alt + I
        this.inverted = !this.inverted
      }
      if (e.altKey && e.keyCode === 83) { // Alt + S
        this.small = !this.small
      }
    });
  },
  template: `
    <div>
      <header v-if="!fullscreen">
        <div>
          <a href="https://designstem.github.io/homepage">DesignSTEM</a>
        → Content editor
        </div>
        <div style="display: flex;">
          <f-buttons :buttons="components.map(c => c.title)" v-model="activeComponent"/>
          <a href="https://github.com/designstem/editor" style="margin-left: 2rem; border: none;">
            <img src="https://designstem.github.io/fachwerk/images/github_logo.svg" style="
              width: 1.75rem;
              height: 1.75rem;
              opacity: 0.7;
            " />
          </a>
        </div>
      </header>
      <f-tabs v-if="!fullscreen" :buttons="samples.map(s => s.title)" v-model="activeSample" />
      <f-theme :theme="inverted && 'dark'">
        <div
          style="display: flex; min-height: calc(100vh - 5rem - 3rem);"
        >
          <div v-if="!fullscreen" :style="{width: '500px'}">
            <f-editor style="border-radius: 0;" v-model="content" />
          </div>
          <div style="flex: 1; overflowX: auto;">
            <component
              :is="components[activeComponent].component"
              :content="activeComponent > 0 ? cleanColumns(content) : content"
              :style="{fontSize: small ? fullscreen ? '0.7em' : '0.5em' : '1em'}"
            />
          </div>
        </div>
      </f-theme>
      <div :style="{opacity: 0.4}" style="position: fixed; bottom: 1rem; right: 1rem;">
        <a style="cursor: pointer; border: none;" title="Fullsceen: Alt + F" @click.prevent="fullscreen = !fullscreen"><code>↕</code></a>
        <a style="cursor: pointer; border: none;" title="Smaller text: Alt + S" @click.prevent="small = !small"><code>±</code></a>
        <a style="cursor: pointer; border: none;" title="Invert: Alt + I" @click.prevent="inverted = !inverted"><code>◐</code></a>
      </div>
    </div>
  `
});
