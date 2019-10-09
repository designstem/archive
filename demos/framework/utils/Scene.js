export default {
    props: ['size'],
    computed: {
        viewBox() {
            return `-${this.size / 2} -${this.size / 2} ${this.size} ${this.size}`
        }
    },
    template: `
        <svg
            :width="size"
            :height="size"
            style="background: papayawhip"
            :view-box.camel="viewBox"
        >
            <slot />
        </svg>
    `
}