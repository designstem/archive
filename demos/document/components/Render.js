import Variable from '../components/Variable.js'
import Badge from '../components/Badge.js'

export default {
    props: ['file'],
    components: { Variable, Badge },
    data: () => ({ 
        render: null
    }),
    mounted() {
        axios(this.file)
            .then(res => {
                const markup = marked(res.data, { breaks: true })
                const template = Vue.compile(`<div>${markup}</div>`)
                this.render = template.render
                this.staticRenderFns = template.staticRenderFns
            })
    },
    render: function(h) {
        return this.render ? this.render() : h()
    }
}