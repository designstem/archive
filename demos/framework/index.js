import Scene from './utils/Scene.js'
import Grid from './utils/Grid.js'

import Rotate from './transforms/Rotate.js'
import Move from './transforms/Move.js'

import Breathe from './animators/Breathe.js'
import Spin from './animators/Spin.js'

import Circlify from './replicators/Circlify.js'
import Gridify from './replicators/Gridify.js'
import Flipify from './replicators/Flipify.js'

import Square from './primitives/Square.js'
import Disc from './primitives/Disc.js'
import Spike from './primitives/Spike.js'


new Vue({
    el: '#app',
    components: {
        Scene,
        Grid,
        Rotate,
        Move,
        Breathe,
        Spin,
        Circlify,
        Gridify,
        Flipify,
        Square,
        Disc,
        Spike
    },
    data: () => ({ size: 500 }),
    template: `
        <div>
            <Scene :size="size">
                <Grid :size="size" />

                    <!-- Background -->
                    <Breathe>
                        <Gridify :size="size">
                            <Spin reverse="true" speed="10000" slot-scope="s">
                                <Circlify :size="size / 32">
                                    <Breathe slot-scope="s">
                                    <Spin speed="2000" >
                                        <Spike  :size="size / 32" />
                                    </Spin>
                                    </Breathe>
                                </Circlify>
                            </Spin>
                        </Gridify>
                    </Breathe>

                    <!-- Foreground -->
                    <Spin>
                        <Flipify :size="size * 2">
                            <Circlify :size="size / 4" count="16" slot-scope="s">
                                <Spin slot-scope="s">
                                    <Spike :size="size / 4" />
                                </Spin>
                            </Circlify>
                        </Flipify>
                    </Spin>

            </Scene>
        </div>
    `
})