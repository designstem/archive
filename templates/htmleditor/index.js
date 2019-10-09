import * as components from "https://designstem.github.io/fachwerk/components.js";
import { Init } from "https://designstem.github.io/fachwerk/mixins.js";

const debounce = (fn, time) => {
  let timeout;
  return function() {
    const functionCall = () => fn.apply(this, arguments);
    clearTimeout(timeout);
    timeout = setTimeout(functionCall, time);
  };
};

for (const name in components) {
  Vue.component(name, components[name]);
}

const FPreview = {
  props: ["content"],
  template: `
  <iframe style="border-width: 0px; width: 50vw; height: 100vh;" :srcdoc="content" />
  `
};

const FEditorButton = {
  template: `
  <span style="color: var(--secondary); font-size: calc(var(--base) * 1.5); font-family: var(--mono); cursor: pointer; padding: 2px; margin-right: var(--base);">
    <slot />
  </span>
  `
};

const FHtmlEditor = {
  props: ["value"],
  data: () => ({ editor: null }),
  methods: {
    onFormat() {
      const doc = this.editor.getDoc();
      const { ch, line } = doc.getCursor();
      const { formatted, cursorOffset } = prettier.formatWithCursor(
        this.editor.getValue(),
        {
          printWidth: 60,
          cursorOffset: ch,
          parser: "html",
          plugins: prettierPlugins
        }
      );
      this.editor.setValue(formatted);
      doc.setCursor({ ch: cursorOffset, line });
      this.editor.focus();
    }
  },
  mounted() {
    this.editor = CodeMirror(this.$refs.editor, {
      mode: "htmlmixed",
      theme: "material",
      lineWrapping: true,
      viewportMargin: Infinity,
      tabSize: 2,
      lineNumbers: true
    });
    this.editor.setValue(this.value);
    this.editor.on("change", debounce(editor => {
        this.$emit("input", editor.getValue())
    }, 100));
  },
  template: `
  <div style="position: relative;">
    <div style="position: absolute; top: 0; right: 0; bottom: 0; left: 0;" ref="editor" />
    <f-theme theme="dark" style="z-index: 10000; background: #263238; position: absolute; padding: var(--base); right: 0; bottom: 0; left: 0;">
      <f-editor-button @click.native="onFormat"><kbd>Alt</kbd> <kbd>f</kbd> Format</f-editor-button>
    </f-theme>
    <f-keyboard
      alt
      character="f"
      @keydown="onFormat"
    />
  </div>
  `
};

Vue.component("FEditorButton", FEditorButton);
Vue.component("FPreview", FPreview);
Vue.component("FHtmlEditor", FHtmlEditor);

new Vue({
  mixins: [Init],
  el: "#app",
  data: {
    content: ''
  },
  template: `
  <div>
    <div class="grid" style="--gap: 0; height: 100vh;">
      <f-html-editor v-model="content" />
      <f-preview :content="content" />
    </div>
  </div>
  `
});
