### RGB

<f-rotation-data>
<f-array-data slot-scope="rData" :length="6" :dimensions="2">
  <f-scene3 slot-scope="data">
  <f-group3
      :rotation="{ y: rData.values[1], x: rData.values[0],  z: rData.values[2] }"
      :scale="{x: 0.5,y: 0.5, z: 0.5}"
    >
  <f-group3 v-for="z in 6">
  <f-group3 v-for="(col, x) in data.value">
  <f-line3
    v-for="(value, y) in col"
    :stroke="rgb(scale(x,0,5,0,255),scale(y,0,5,0,255),scale(z,0,5,0,255))"
    :stroke-width="15"
    :key="x * y"
    :points="[{ x: 4 / 6 * x - 2, y: 4 / 6 * y - 2,  z: 4 / 6 * z - 2 },{ x: 4 / 6 * x - 2, y: 4 / 6 * y - 2, z: 4 / 6 * z - 2 }]"
  />
  </f-group3>
  </f-group3>
  </f-group3>
  </f-scene3>
</f-f-array-data>
</f-rotation-data>

### HSL

<f-rotation-data>
<f-array-data slot-scope="rData" :length="6" :dimensions="2">
  <f-scene3 slot-scope="data">
  <f-group3
      :rotation="{ y: rData.values[1], x: rData.values[0],  z: rData.values[2] }"
      :scale="{x: 0.5,y: 0.5, z: 0.5}"
    >
  <f-group3 v-for="z in 6">
  <f-group3 v-for="(col, x) in data.value">
  <f-line3
    v-for="(value, y) in col"
    :stroke="hsl(scale(x,0,5,0,360),scale(y,0,5,0,100),scale(z,0,5,0,80))"
    :stroke-width="15"
    :key="x * y"
    :points="[{ x: 4 / 6 * x - 2, y: 4 / 6 * y - 2,  z: 4 / 6 * z - 2 },{ x: 4 / 6 * x - 2, y: 4 / 6 * y - 2, z: 4 / 6 * z - 2 }]"
  />
  </f-group3>
  </f-group3>
  </f-group3>
  </f-scene3>
</f-array-data>
</f-rotation-data>

<br><br><br>

### HS vs HL

<f-array-data :length="25" :dimensions="2">
  <f-scene slot-scope="data">
  <f-group v-for="(col, x) in data.value">
  <f-box
    v-for="(value, y) in col"
    :key="x * y"
    :x="4 / 25 * x - 2"
    :y="4 / 25 * y - 2"
    :width="4 / 25"
    :height="4 / 25"
    :fill="hsl(
      scale(x,0,24,0,360),
      scale(y,0,24,0,100),
    50)"
    stroke="none"
  />
  </f-group>
  </f-scene>
</f-array-data>

<f-array-data :length="25" :dimensions="2">
  <f-scene slot-scope="data">
  <f-group v-for="(col, x) in data.value">
  <f-box
    v-for="(value, y) in col"
    :key="x * y"
    :x="4 / 25 * x - 2"
    :y="4 / 25 * y - 2"
    :width="4 / 25"
    :height="4 / 25"
    :fill="hsl(
      scale(x,0,24,0,360),
      100,
      scale(y,0,24,0,100),
    50  )"
    stroke="none"
  />
  </f-group>
  </f-scene>
</f-array-data>