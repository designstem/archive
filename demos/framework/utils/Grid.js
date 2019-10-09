export default {
    props: ['size'],
    template: `
        <g>
            <line
                v-for="x in [-1,-0.5,0,0.5,1]"
                :x1="size / 2 * x"
                :y1="size / 2 * -1"
                :x2="size / 2 * x"
                :y2="size / 2"
                stroke="rgba(0,0,0,0.1)"
            />
            <line
                v-for="y in [-1,-0.5,0,0.5,1]"
                :x1="size / 2 * -1"
                :y1="size / 2 * y"
                :x2="size / 2"
                :y2="size / 2 * y"
                stroke="rgba(0,0,0,0.1)"
            />
        </g>
    `
}