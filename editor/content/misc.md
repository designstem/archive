# Misc experiments

## Music visualization

Inspired by https://kottke.org/17/11/classical-music-scores-as-colorful-data-visualizations

<f-scene>
  <template v-for="d in 20">
    <f-circle
      v-for="r in 20"
      :x="cx(
        scale(d,0,20,0,360),
        scale(r,0,20,0.5,1.5)
      )"
      :y="cy(
        scale(d,0,20,0,360),
        scale(r,0,20,0.5,1.5)
      )"
      :r="any(
        random(0.05,0.1,true),
        random(0.05,0.1,true),
        random(0.1,0.15,true)
      )"
      :fill="hsl(random(160,360),100,50,0.25)"
    />
  </template>
</f-scene>

---

## 2D groups and rotations

<f-animation-data :to="360">
<f-scene slot-scope="{value}">
  <f-grid />
  <!-- Group and then rotate -->
  <f-group :rotation="{ z: value } ">
    <f-box :x="x" v-for="x in [-1,0,1]" />
  </f-group>
  <!-- Rotate and then group -->
  <f-group
    v-for="x in [-1,0,1]"
    :rotation="{ z: value }"
    :position="{ x }"
  >
    <f-box fill="var(--red)" :opacity="0.5" />
  </f-group>
</f-scene>
</f-animation-data>

---

## Rotating spiral

<f-scene3>
<f-grid3 />
  <f-animation-data
    :to="deg2rad(360)"
    :duration="10000"
  >
  <f-group3
    slot-scope="{value}"
    :rotation="{x: value, y: value}"
  >
    <f-line3
      v-for="(c,i) in 100"
      :key="i"
      :points="[
        {
          x: cx(500 / 100 * c, 2),
          y: i / 150 - 1,
          z: cy(500 / 100 * c, 2)
        },
        {
          x: cx(500 / 100 * (c + 1), 1),
          y: i / 5,
          z: cy(500 / 100 * (c + 1), 1)
        }
      ]"
    />
    <f-grid3 />
  </f-group3>
  </f-animation-data>
</f-scene3>

---

## Dynamic math equations

After [killing math](http://worrydream.com/KillMath/) it is time to [bring it back alive](https://beta.observablehq.com/@mbostock/colorized-math)!

<f-slider-data>
  <f-math
    slot-scope="data"
    :update="data.value"
  >
    a = 10
    b = a^2 + \\colorbox{c}{ {{ data.value }} }
    b = 10^2 + \\colorbox{c}{ {{ data.value }} }
    b = {{ Math.pow(10,2)+parseInt(data.value) }}
  </f-math>
</f-slider-data>

---

## VR scene

<f-scene3vr>
  <f-scene3vr />
  <f-line3vr />
  <a-sphere position="0 0 0" radius="0.5" color="red" />
</f-scene3vr>
