export default {
    props: { x: { default: 0 }, y: { default: 0 } },
    computed: {
        moveTransform() { return `translate(${this.x},${this.y})` }
    },
    template: `
        <g :transform="moveTransform"><slot /></g>
    `
}