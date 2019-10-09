/*

- carlos
- thorsten

0 360
0 10000

v = s / t
s = v * t

d = 2 pi r
r = d / 2pi

r = (v * t) / 2 pi

*/


const vm = new Vue({
    el: '#app',
    data: {
        s: 360,
        s1: 0,
        t: 5000
    },
    mounted() {
        anime({
            targets: this,
            s1: this.s,
            easing: 'linear',
            duration: this.t,
            loop: true
        })
    },
    computed: {
        v() {
            return this.s / this.t
        },
        s2() {
            return this.s1 * 2;
        }
    },
    methods: {
        deg2rad(deg) {
          return deg * (Math.PI / 180);
        },
        x(deg, radius) {
          return Math.cos(this.deg2rad(deg)) * radius
        },
        y(deg, radius) {
          return Math.sin(this.deg2rad(deg)) * radius
        }
    },
    template: `
        <div>
        <pre>
            s1: {{ Math.round(s1) }}
            t: {{ Math.round(t) }}
            v: {{ v }} px / ms
        </pre>
        <div style="display: flex">
        <svg :width="s" :height="s" style="background: papayawhip">
            <circle 
                :cx="s1"
                :cy="s / 2"
                r="5"
                fill="none"
            />
            <circle 
                :cx="s / 2"
                :cy="s / 2"
                :r="s / 2"
                stroke="rgba(0,0,0,0.1)"
                fill="none"
            />
            <circle 
                :cx="(s / 2) + x(s1, s / 2)"
                :cy="(s / 2) + y(s1, s / 2)"
                r="5"
            />
            <circle 
                :cx="(s / 2) + x(s2, s / 2)"
                :cy="(s / 2) + y(s2, s / 2)"
                r="5"
                fill="rgba(255,0,0,0.8)"
            />
            <circle 
                :cx="s / 2"
                :cy="s / 2"
                :r="s / 4"
                stroke="rgba(0,0,0,0.1)"
                fill="none"
            />
            <circle 
                :cx="(s / 2) + x(s1, s / 4)"
                :cy="(s / 2) + y(s1, s / 4)"
                r="5"
            />
            <circle 
                :cx="(s / 2) + x(s2, s / 4)"
                :cy="(s / 2) + y(s2, s / 4)"
                r="5"
                fill="rgba(255,0,0,0.8)"
            />
        </svg>

        <svg :width="s" :height="s" style="background: papayawhip">
            
            <circle
                v-for="y in 360"
                :cx="y"
                :cy="s * 0.33 + (Math.sin(deg2rad(y)) * 36)"
                r="0.5"
                fill="rgba(0,0,0,0.2)"
            />
            <circle
                :cx="s1"
                :cy="s * 0.33 + (Math.sin(deg2rad(s1)) * 36)"
                r="5"
                fill="rgba(0,0,0,1)"
            />
            <circle
                v-for="y in (s * 2)"
                :cx="y / 2"
                :cy="s * 0.33 + (Math.sin(deg2rad(y)) * 36)"
                r="0.5"
                fill="rgba(0,0,0,0.2)"
            />
            <circle
                :cx="s2 / 2"
                :cy="s * 0.33 + (Math.sin(deg2rad(s2)) * 36)"
                r="5"
                fill="rgba(255,0,0,0.8)"
            />

            <circle
                v-for="y in 360"
                :cx="y"
                :cy="s * 0.66 + (Math.cos(deg2rad(y)) * 36)"
                r="0.5"
                fill="rgba(0,0,0,0.2)"
            />
            <circle
                :cx="s1"
                :cy="s * 0.66 + (Math.cos(deg2rad(s1)) * 36)"
                r="5"
                fill="rgba(0,0,0,1)"
            />
            <circle
                v-for="y in (s * 2)"
                :cx="y / 2"
                :cy="s * 0.66 + (Math.cos(deg2rad(y)) * 36)"
                r="0.5"
                fill="rgba(0,0,0,0.2)"
            />
            <circle
                :cx="s2 / 2"
                :cy="s * 0.66 + (Math.cos(deg2rad(s2)) * 36)"
                r="5"
                fill="rgba(255,0,0,0.8)"
            />

        </svg>

        </div>
        </div>
    `
})

