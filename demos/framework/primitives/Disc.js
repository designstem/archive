export default {
    props: ['size'],
    template: `
        <circle
            :cx="0"
            :cy="0"
            :r="size / 2"
            stroke="rgba(0,0,0,0.5)"
            fill="rgba(0,0,0,0.3)"
        />
    `
}