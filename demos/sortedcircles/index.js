new Vue({
    el: '#app',
    data: {
        complexities: [12,14,18],
        colors: [0,1,2],
        orderKeys: [['countryId', 'complexity'], ['complexity', 'countryId']],
        currentOrderKey: ['countryId', 'complexity'],
        groupSizes: [1, 3, 6, 12, 30],
        currentGroupSize: 6,
        circleCount: 30,
        circles: [],
        countries: ['E1','E2','DE','NL','PT','IT','GR','GB','FI','SL'],
        words1: ['Dynamic', 'Opportunistic', 'Linear', 'Caustic', 'Irregular', 'Causal'],
        words2: ['regressive', 'fluid', 'extrapolated', 'regular', 'ambient','',''],
        words3: ['causality', 'paradigm', 'process', 'relation', 'force', 'method'],
    },
    computed: {
        orderedCircles: function() {
          return _.orderBy(this.circles, this.currentOrderKey)
        }
    },
    methods: {
        colorValue: function(value) {
            return d3.interpolatePlasma(
                d3.scaleLinear()
                    .domain([0, this.countries.length - 1])
                    .range([0,0.9])(value)
            )
        }
    },
    mounted() {
        for (var i = 0; i < this.circleCount; i++) {
            this.circles.push({
                id: i,
                complexity: _.sample(this.complexities),
                title: [
                    _.sample(this.words1),_.sample(this.words2),_.sample(this.words3)
                ].join(' '),
                countryId: i % this.countries.length
            })
        }
    }
})