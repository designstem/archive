export default {
    props: { size: { default: 0 } },
    computed: {
        steps() {
            return [-0.5, -0.25, 0, 0.25, 0.5]
        }
    },
    template: `
        <g>
            <g
                v-for="step in steps"
                :transform="'translate(0, ' + (step * size) + ')'"
            >
                <g
                    v-for="step in steps"
                    :transform="'translate(' + (step * size) + ', 0)'"
                >
                    <slot Gridify />
                </g>
            </g>
        </g>
    `
}