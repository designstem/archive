export default {
    props: ['name', 'value'],
    methods: {
        onClick() {
            this.$bus.$emit(this.name, { value: this.value })
        }
    },
    template: `
        <span style="
            border-bottom: 2px solid red;
            color: red;
            margin: 0 2px;
            font-weight: bold;
            cursor: pointer;
        "
        @click="onClick"
        >
        {{ value }}
        </span>
    `
}