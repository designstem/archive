export default {
    props: { size: { default: 0 } },
    template: `
        <g>
            <defs>
              <clipPath id="myClip">
                <rect
                    :x="- size / 2"
                    :y="- size / 2"
                    :width="size / 2"
                    :height="size / 2"
                    stroke="black"
                />
              </clipPath>
            </defs>

            <g clip-path="url(#myClip)">
                <slot s />
            </g>
            <g transform="scale(-1,1)" clip-path="url(#myClip)">
                <slot s />
            </g>
            <g transform="scale(1,-1)" clip-path="url(#myClip)">
                <slot s />
            </g>
            <g transform="scale(-1,-1)" clip-path="url(#myClip)">
                <slot s />
            </g>

        </g>
    `
}