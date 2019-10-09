export default {
    props: {
        speed: { default: 10000 },
        reverse: { default: false }
    },
    template: `
        <g>
            <animateTransform attributeName="transform"
                attributeType="XML"
                type="rotate"
                :from="reverse ? 360 : 0"
                :to="reverse ? 0 : 360"
                :dur="speed + 'ms'"
                repeatCount="indefinite"
            />
            <slot />
        </g>
    `
}