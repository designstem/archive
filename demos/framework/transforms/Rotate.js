export default {
    props: { angle: { default: 45 } },
    computed: {
        rotateTransform() { return `rotate(${this.angle})` }
    },
    template: `
        <g :transform="rotateTransform"><slot /></g>
    `
}