export default {
    props: ['size'],
    computed: {
        d() {
            return `
                M ${this.size / -2 } ${this.size / -2}
                L ${ this.size / 2 } ${ this.size / 2 }
                L ${ this.size / -2 } ${ this.size / -2 + (this.size / 4 ) }
                Z
            `
        }
    },
    template: `
        <path
            :d="d"
            stroke="rgba(0,0,0,0.5)"
            fill="rgba(0,0,0,1)"
        />
    `
}