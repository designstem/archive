import * as components from "https://designstem.github.io/fachwerk/components.js";
import * as utils from "https://designstem.github.io/fachwerk/utils.js";
import { Init } from "https://designstem.github.io/fachwerk/mixins.js";

for (const name in components) {
  Vue.component(name, components[name]);
}

const FEditorButton = {
  template: `
  <span style="
    color: var(--secondary);
    font-size: calc(var(--base) * 1.5);
    font-family: var(--mono);
    cursor: pointer;
    padding: 2px;
    text-transform: uppercase;
    margin-right: var(--base);
  ">
    <slot />
  </span>
  `
};

const FMarkdownEditor = {
  props: ["value"],
  data: () => ({ editor: null }),
  methods: {
    preFormat(content) {
      const formattedContent = content
        .replace(/```\n+/g,'```\n\n')
        .replace(/([^>])\n\n/g, "$1QQQ")
        .replace(/\`\</g, "`@@@");
      return `<template>
  ${formattedContent}
</template>`;
    },
    postFormat(content) {
      return content
        .replace("<template>\n", "")
        .replace("</template>", "")
        .replace(/QQQ/g, "\n\n")
        .replace(/^  /, "")
        .replace(/\n  /g, "\n")
    },
    onFormat() {
      const doc = this.editor.getDoc();
      const { ch, line } = doc.getCursor();
      // { formatted, cursorOffset }
      const prettyVue = prettier.formatWithCursor(
        this.preFormat(this.editor.getValue()),
        {
          printWidth: 60,
          cursorOffset: ch,
          parser: "vue",
          plugins: prettierPlugins
        }
      );
      const prettyMd = prettier.formatWithCursor(
        this.postFormat(prettyVue.formatted),
        {
          printWidth: 80,
          cursorOffset: prettyVue.cursorOffset,
          parser: "markdown",
          proseWrap: "never",
          plugins: prettierPlugins
        }
      );
      this.editor.setValue(prettyMd.formatted);
      doc.setCursor({ ch: prettyMd.cursorOffset, line });
      this.editor.focus();
    }
  },
  mounted() {
    this.editor = CodeMirror(this.$refs.editor, {
      mode: "gfm",
      theme: "material",
      lineWrapping: true,
      viewportMargin: Infinity,
      tabSize: 2,
      lineNumbers: false
    });
    this.editor.setValue(this.value);
    this.editor.on("change", editor => {
      this.$emit("input", editor.getValue());
    });
  },
  template: `
  <div style="position: relative;">
    <div style="position: absolute; top: 0; right: 0; bottom: 0; left: 0;" ref="editor" />
    <f-theme theme="dark" style="z-index: 10000; background: #263238; position: absolute; padding: var(--base); right: 0; bottom: 0; left: 0;">
      <f-editor-button @click.native="onFormat">Format</f-editor-button>
    </f-theme>
  </div>
  `
};

Vue.component("FEditorButton", FEditorButton);
Vue.component("FMarkdownEditor", FMarkdownEditor);

new Vue({
  mixins: [Init],
  el: "#app",
  methods: { ...utils },
  data: {
    content: `## Spirals tutorial

First, lets draw a reference circle:
    
<f-scene grid>
  <f-circle :r="1" :opacity="0.1" />
</f-scene>
    `
  },
  template: `
  <div>
  <div class="grid" style="--gap: 0; height: 100vh;">
    <f-markdown-editor v-model="content" />
    <f-content-document :content="content" />
  </div>
  </div>
  `
});
