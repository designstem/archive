export default {
    props: ['size', 'speed', 'blend'],
    computed: {
        color() {
            return `hsla(${this.speed * 360 / 10000},100%,50%,1)`
        }
    },
    template: `
        <g>
            <animateTransform attributeName="transform"
                attributeType="XML"
                type="rotate"
                from="0"
                to="360"
                :dur="speed + 'ms'"
                repeatCount="indefinite"
            />
            <circle
                :cx="0"
                :cy="0"
                :r="size / 5"
                :fill="color"
                stroke="rgba(0,0,0,1)"
                :style="'mix-blend-mode: ' + blend"
            />
            <line
                :x1="0"
                :y1="0"
                :x2="size / 7"
                :y2="size / 7"
                stroke="rgba(0,0,0,1)"
                fill="rgba(0,0,0,0.5)"
            />
        </g>
    `
}