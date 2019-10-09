/*

0 360
0 10000

v = s / t
s = v * t

d = 2 pi r
r = d / 2pi

r = (v * t) / 2 pi

*/

import Wheel from './components/Wheel.js'

const vm = new Vue({
    el: '#app',
    components: { Wheel },
    data: {
        blends: [
            'multiply',
            'screen',
            'overlay',
            'darken',
            'lighten',
            'color-dodge',
            'color-burn',
            'hard-light', 
            'soft-light',
            'difference',
            'exclusion',
            'hue',
            'saturation',
            'color',
            'luminosity'
        ],
        blendIndex: 0,
        size: 500,
        rotation: 0,
        speed1: 500,
        speed2: 2000,
        speed3: 4000,
        opacity: 0.2,
        wheels: []
    },
    methods: {
        addWheel(x,y,speed) {
            this.wheels.push({x,y,speed})
        },
        transform(x,y) {
            return `translate(${x},${y})`
        }
    },
    mounted() {
        this.addWheel(this.size / 2, this.size / 2 - (this.size / 6), 500)
        this.addWheel(this.size / 2 - (this.size / 7), this.size / 1.75, 2000)
        this.addWheel(this.size / 2 + (this.size / 7), this.size / 1.75, 2000)
    },
    template: `
        <div>
        <p>Wheel 1 speed: <input type="range" v-model="speed1" min="1" max="10000" step="1"> {{ speed1}} </p>
        <p>Background opacity: <input type="range" v-model="opacity" min="0" max="1" step="0.001"> {{ opacity }} </p>
        <p>
            <span 
                v-for="(blend, i) in blends"
                @click="blendIndex = i"
                :style="{ background: i === blendIndex ? 'rgba(0,0,0,0.1)' : 'none'}"
            >
                {{ blend }}
            </span>
        </p>
        <svg :width="size" :height="size" :style="'background: rgba(0,0,0,' + opacity + ')'">
            <g
                v-for="wheel in wheels" :transform="transform(wheel.x,wheel.y)"
            >
                <Wheel :speed="wheel.speed" :size="size" :blend="blends[blendIndex]" />
            </g>
        <svg>
        </div>
    `
})