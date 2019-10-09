export default {
    props: ['file'],
    data: () => ({ lines: [] }),
    mounted() {
        axios(this.file).then(res => this.lines = res.data.split('\n\n'))
    },
    template: `
        <div>
            <code v-for="line in lines">{{ line }}<br><br></code>
        </div>
    `
}