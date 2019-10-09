export default {
    props: { speed: { default: 5000 }},
    template: `
        <g>
            <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="scale"
                values="1;0.96;1.05;1"
                :dur="speed + 'ms'"
                repeatCount="indefinite"
            />
            <slot />
        </g>
    `
}