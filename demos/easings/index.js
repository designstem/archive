new Vue({
    el: '#app',
    data: { 
        // AnimeJS exports a bunch of default easings
        // https://github.com/juliangarnier/anime#easing-functions
        easings: anime.easings,
        activeEasing: 'easeInCubic',
        pointCount: 50,
        svgSize: 300,
        padding: 30,
        movingX: 0,
        animation: {}, // AnimeJS instance
        paused: true
    },
    computed: {
        xPoints() {
            // We fill the array with n values between 0 and 1
            // where n is this.pointCount
            return [...Array(this.svgSize).slice(0,this.pointCount).keys()].map(v => v / this.pointCount)
        }
    },
    methods: {
        // .domain is input value range
        // .range is output value range
        calcX(x) {
            return d3
                .scaleLinear()
                .domain([0, 1])
                .range([this.padding, this.svgSize - this.padding])
                (x)
        },
        // we invert the output value range since we
        // want to start drawing from bottom of SVG
        calcY(x) {
            return d3
                .scaleLinear()
                .domain([0, 1])
                .range([this.svgSize - this.padding, this.padding])
                (this.easings[this.activeEasing](x))
        }
    },
    mounted() {
        this.animation = anime({
            targets: this,
            movingX: 1,
            duration: 3000,
            direction: 'alternate',
            loop: true,
            easing: this.activeEasing,
            autoplay: false
        })
    },
    template: `
        <div>
            <p>
                Point count:
                <input
                    type="range"
                    v-model="pointCount"
                    min="1"
                    :max="svgSize"
                >
                {{ pointCount }}
            </p>
            <p>
                MovingX:
                <input
                    type="range"
                    v-model="movingX"
                    min="0"
                    step="0.00001"
                    max="1"
                >
                <button v-if="paused" @click="animation.play(); paused = !paused">▶</button>
                <button v-else @click="animation.pause(); paused = !paused">❙❙</button>
            </p>
            <p>
                <span
                    v-for="(f, name) in easings"
                    @click="activeEasing = name"
                    :style="{padding: '0.2rem',background: activeEasing === name ? 'yellow' : ''}"
                >
                    {{ name }}
                </span>
            </p>
            <svg
                :width="svgSize"
                :height="svgSize"
                style="background: papayawhip;"
            >
                <!-- Function graph -->
                <circle
                    v-for="x in xPoints"
                    :cx="calcX(x)"
                    :cy="calcY(x)"
                    fill="rgba(0,0,0,0.5)"
                    r="1"
                />
                <!-- X axis -->
                <circle
                    v-for="x in xPoints"
                    :cx="calcX(x)"
                    :cy="calcY(0)"
                    fill="rgba(0,0,0,0.5)"
                    r="1"
                />
                <!-- Y axis -->
                <circle
                    v-for="x in xPoints"
                    :cx="calcX(0)"
                    :cy="calcY(x)"
                    fill="rgba(0,0,0,0.5)"
                    r="1"
                />
                <!-- Point moving on function graph -->
                <circle
                    :cx="calcX(movingX)"
                    :cy="calcY(movingX)"
                    fill="rgba(255,0,0,0.5)"
                    r="5"
                />
                <!-- Point moving on X axis -->
                <circle
                    :cx="calcX(movingX)"
                    :cy="calcY(0)"
                    fill="rgba(0,0,0,0.25)"
                    r="5"
                />
                <!-- Point moving on Y axis -->
                <circle
                    :cx="calcX(0)"
                    :cy="calcY(movingX)"
                    fill="rgba(0,0,0,0.25)"
                    r="5"
                />
            </svg>
        </div>
    `
})