new Vue({
    el: '#app',
    data: { x: null, y: null },
    methods:{
        onClick(event) {
            // See https://stackoverflow.com/questions/29261304/how-to-get-the-click-coordinates-relative-to-svg-element-holding-the-onclick-lis
            const e = event.target;
            const rect = e.getBoundingClientRect();
            this.x = event.clientX - rect.left;
            this.y = event.clientY - rect.top;
        }
    },
    template: `
        <div>
            <p>x: {{ x }} y: {{ y }}</p>
            <svg
                width="300"
                height="300"
                style="background: papayawhip;"
                @click="onClick"
            >
                <circle
                    v-if="x && y"
                    :cx="x"
                    :cy="y"
                    r="10"
                    stroke="black"
                    fill="rgba(0,0,0,0)"
                />

            </svg>
        </div>
    `
})