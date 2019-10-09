new Vue({
    el: '#app',
    data: () => ({
        value: 0,
        rotate1: 0,
        rotate2: 0,
        innerRadius: 50,
        outerRadius: 100,
        cornerRadius: 0,
        x1: 150,
        x2: 300,
        y: 100,
        size: 1000,
        length: 90,
        wheel1: [],
        wheel2: []
    }),
    computed: {
        wheel11() {
            return this.wheel1
        },
        wheel22() {
            return this.wheel2
        },
        step1() {
            return 360 / this.wheel11.length
        },
        step2() {
            return 360 / this.wheel22.length
        }
    },
    methods: {
        r1(index) {
            return index * (360 / this.wheel11.length)
        },
        r2(index) {
            return index * (360 / this.wheel22.length) * -1
        },
        roll() {
            anime({
                targets: this,
                rotate1: this.step1 * (Math.random() * this.wheel11.length),
                duration: 5000,
                elasticity: 0
                //easing: 'easeInOutQuad'
            })
            anime({
                targets: this,
                rotate2: this.step2 * (Math.random() * this.wheel22.length),
                duration: 5000,
                elasticity: 0
                //easing: 'easeInOutQuad'
            })
        },
        color(index) {
            return ['blue','yellow','red']
                [index % 3]
        },
        arc(value) {
            var arc = d3.arc().cornerRadius(this.cornerRadius);
            return arc({
                innerRadius: this.innerRadius,
                outerRadius: this.outerRadius,
                startAngle: this.deg2rad(value),
                endAngle: this.deg2rad(value + 30),
                cornerRadius: 10
            });
        },
        deg2rad(deg) {
            return deg * (Math.PI / 180)
        }
    },
    mounted() {
        
        fetch('./concepts.json')
            .then(res => res.json())
            .then(concepts => {
                concepts
                    .filter(concept => concept.stem === '1' && concept.des === '0')
                    .forEach(concept => {
                        this.wheel1.push(concept)
                    })

                concepts
                    .filter(concept => concept.des === '1')
                    .forEach(concept => {
                        this.wheel2.push(concept)
                    })
            })
        
    },
    template: `
        <svg :width="size * 2" :height="size">
            <!--
            <g opacity="0.7" :transform="'translate('+x1+','+y+') rotate('+rotate1+')'">
                <g v-for="(deg, index) in [0,30,60,90,120,150,180,210,240,270,300,330]">
                <path :d="arc(deg)" :fill="color(index)" />
                </g>
            </g>
            <g opacity="0.7" :transform="'translate('+x2+','+y+') rotate('+rotate2+')'">
                <g v-for="(deg, index) in [0,30,60,90,120,150,180,210,240,270,300,330]">
                <path :d="arc(deg)" :fill="color(index)" />
                </g>
            </g>
            -->
            <g :transform="'translate(-305, 0) rotate('+rotate1+' '+size/2+' '+size/2+')'"
            >
                <g
                    v-for="(w1, index) in wheel11"
                    :transform="'rotate('+r1(index)+' '+size/2+' '+size/2+')'"
                >
                <rect :x="size-200" :y="size/2-15" width="210" height="30" rx="15" ry="15" fill="#eee" />
                <text alignment-baseline="middle" text-anchor="end" :x="size" :y="size/2">{{ w1.name.slice(0,28) }}</text>
                </g>
            </g>

            <g :transform="'translate(-300, 0) rotate('+rotate2*-1+' '+size*1.5+' '+size/2+')'"
            >
                <g
                    v-for="(w1, index) in wheel22"
                    :transform="'rotate('+r2(index)+' '+size*1.5+' '+size/2+')'"
                >
                <rect :x="size" :y="size/2-15" width="210" height="30" rx="15" ry="15" fill="#eee" />
                <text alignment-baseline="middle" :x="size+10" :y="size/2">{{ w1.name.slice(0,30) }}</text>
                </g>
            </g>

            <rect
                :x="size/2-30"
                :y="size/2-20"
                width="450"
                height="50"
                rx="25"
                ry="25"
                stroke="rgba(237,24,70,1)"
                fill="none"
                stroke-width="2"
            />

            <text
                :x="700"
                y="120"
                text-anchor="middle"
                alignment-baseline="middle"
                fill="rgba(237,24,70,1)"
                font-size="22px"
                @click="roll"
                cursor="pointer"
            >ROLL</text>

        </svg>
    `
})
