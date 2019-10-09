export default {
    props: {
        startNode: { default: {} },
        endNode: { default: {} }
    },
    template: `
        <g>
            <line
                :x1="startNode.x"
                :y1="startNode.y"
                :x2="endNode.x"
                :y2="endNode.y"
                stroke="hsl(0, 0%, 70%)"
            />
        </g>
    `
 }
