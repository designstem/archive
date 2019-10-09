    export default {
        props: {
            data: { default: {} }
        },
        data: () => ({
            width: 130,
            height: 30,
        }),
        computed: {
        },
        methods: {
            color(weight) {
                return chroma
                    .scale(['#2196f3', '#9EADBA'])
                    .domain([7, 0])
                    (weight)
            },
            darkColor(weight) {
                return chroma(chroma
                    .scale(['#2196f3', '#9EADBA'])
                    .domain([7, 0])
                    (weight))
                    .darken()
            },

        },
        template: `
            <g style="cursor: pointer">
                <rect
                    :ref="data.name"
                    :x="data.x - (width / 2)"
                    :y="data.y - (height / 2)" 
                    :width="width" 
                    :height="height"
                    :fill="data.active ? darkColor(data.weight) : color(data.weight)"
                    :rx="height / 2"
                    :ry="height / 2"
                    stroke="white"
                />
                <text
                    font-size="11"
                    fill="white"
                    :x="data.x"
                    :y="data.y"
                    text-anchor="middle"
                    alignment-baseline="middle"
                >
                {{ data.name.slice(0,20) }}
                </text>
            </g>
        `
    }