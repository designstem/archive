#!/bin/bash

rm -f vendor_full.js
#curl -L https://unpkg.com/vue/dist/vue.js | npx uglifyjs >> vendor_full.js
#curl -L https://unpkg.com/katex/dist/katex.min.js >> vendor_full.js
#curl -L https://unpkg.com/marked/marked.min.js >> vendor_full.js
#curl -L https://unpkg.com/animejs/anime.min.js >> vendor_full.js
#curl -L https://unpkg.com/d3 >> vendor_full.js
#curl -L https://unpkg.com/aframe | npx uglifyjs >> vendor_full.js
#curl -L https://unpkg.com/aframe-rounded | npx uglifyjs >> vendor_full.js
curl -L https://unpkg.com/codemirror | npx uglifyjs >> vendor_full.js
curl -L https://unpkg.com/codemirror/mode/xml/xml.js | npx uglifyjs >> vendor_full.js
curl -L https://unpkg.com/codemirror/mode/css/css.js | npx uglifyjs >> vendor_full.js
curl -L https://unpkg.com/codemirror/mode/javascript/javascript.js | npx uglifyjs >> vendor_full.js
curl -L https://unpkg.com/codemirror/mode/htmlmixed/htmlmixed.js | npx uglifyjs >> vendor_full.js
curl -L https://unpkg.com/codemirror/addon/mode/overlay.js | npx uglifyjs >> vendor_full.js
curl -L https://unpkg.com/codemirror/mode/markdown/markdown.js | npx uglifyjs >> vendor_full.js
curl -L https://unpkg.com/codemirror/mode/gfm/gfm.js | npx uglifyjs >> vendor_full.js
curl -L https://unpkg.com/prettier/standalone.js | npx uglifyjs >> vendor_full.js
curl -L https://unpkg.com/prettier/parser-babylon.js | npx uglifyjs >> vendor_full.js
curl -L https://unpkg.com/prettier/parser-postcss.js | npx uglifyjs >> vendor_full.js
curl -L https://unpkg.com/prettier/parser-markdown.js | npx uglifyjs >> vendor_full.js
