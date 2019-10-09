import Badge from './components/Badge.js'
import Render from './components/Render.js'
import Source from './components/Source.js'

Vue.prototype.$bus = new Vue()

new Vue({
    el: '#app',
    components: { Render, Source },
    template: `
        <div>
            <Render file="./text.md" />
            <Source file="./text.md" />
        </div>
    `
})
