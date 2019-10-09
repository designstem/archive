export default {
    props: ['name'],
    data: () => ({ value : 0 }),
    mounted() {
        this.$bus.$on(this.name, payload => {
            anime({
                targets: this,
                value: payload.value,
                easing: 'linear',
                duration: 1000,
                rounded: false
            })
        })
    },
    template: `
        <h1 style="padding: 20px 0; color: red;">{{ Math.floor(value) }}</h1>
    `
}