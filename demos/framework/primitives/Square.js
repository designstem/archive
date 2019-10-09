export default {
    props: ['size'],
    template: `
        <rect
            :x="- size / 2"
            :y="- size / 2"
            :width="size"
            :height="size"
            stroke="rgba(0,0,0,0.5)"
            fill="rgba(0,0,0,0.25)"
        />
    `
}