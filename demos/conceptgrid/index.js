import Node from './components/Node.js'
import Edge from './components/Edge.js'

new Vue({
    el: '#app',
    components: { Node, Edge },
    data: () => ({
        width: 1500,
        nodes: [],
        edges: [],
        svgLeft: 0,
        svgTop: 0
    }),
    computed: {
        sortedNodes() {
            return _.orderBy(this.nodes, 'active')
        }
    },
    methods: {
        onMove(e) {
            var x =e.pageX - this.svgLeft
            var y = e.pageY - this.svgTop
            var node = this.nodes.find(node => node.active)
            if (node) {
                node.x = x
                node.y = y
                node.randomX = x
                node.randomY = y
            }
        },
        toGrid() {
            this.nodes.forEach(node => {
                anime({
                    targets: node,
                    x: node.gridX,
                    y: node.gridY,
                    duration: 3000
                })
            })   
        },
        toRandom() {
            this.nodes.forEach(node => {
                anime({
                    targets: node,
                    x: node.randomX,
                    y: node.randomY,
                    duration: 3000
                })
            })   
        }
    },
    mounted() {
        fetch('./concepts_weights.json')
            .then(res => res.json())
            .then(concepts => {
                this.nodes = _.orderBy(concepts.map(concept => {
                    concept.randomX = concept.x = concept.x * 1.5
                    concept.randomY = concept.y
                    concept.active = false
                    return concept
                }), 'weight', 'desc').slice(0, 30)

                var rect = this.$refs.svg.getBoundingClientRect()
                this.svgLeft = rect.left
                this.svgTop = rect.top

                this.nodes.forEach(node => {
                    this.edges.push({
                        start: node.name,
                        end: _.sample(this.nodes).name
                    })
                })

                _.chunk(this.nodes, 5).forEach((row, rowIndex) => {
                    row.forEach((node, nodeIndex) => {
                        node.gridX = nodeIndex * 150 + 75
                        node.gridY = rowIndex * 40 + 20
                    })
                })
            })
    },
    template: `
        <div>
            
            <div style="padding: 1rem">
                <button @click="toGrid">Grid layout</button>
                <button @click="toRandom">Manual layout</button>
            </div>

            <svg ref="svg" :width="width" :height="width"
            @mousemove="onMove"
            >
                <edge
                    v-for="(edge, index) in edges"
                    :key="index"
                    :startNode="nodes.find(node => node.name === edge.start)"
                    :endNode="nodes.find(node => node.name === edge.end)"
                >
                </edge>

                <node
                    v-for="(node, index) in sortedNodes"
                    :key="index"
                    :data="node"
                    @mousedown.native="node.active = true"
                    @mouseup.native="node.active = false"
                >
                </node>
            </svg>
        </div>
    `
})