let u={color:{},math:{},array:{},string:{},state:{},other:{}};const getCssVariable=(value,el=document.body)=>getComputedStyle(el).getPropertyValue(value);const setCssVariable=(key,value,el=document.body.style)=>el.setProperty(key,value);u.color.color=`\n\n\`color('name')\`\n\nReturns a color value. If \`name\` matches one of framework colors, framework color value is returned. If not, a standard CSS color name is returned.\n\n#### Example\n\n    color('red')\n    color('rebeccapurple')\n\n#### Output\n\n    {{ color('red') }}\n    {{ color('rebeccapurple')}}\n\n`;const color=name=>{const color=getCssVariable(`--${name}`);return color?color.trim():name.trim()};u.color.rgb=`\n\n\`rgb(r, g, b, a = false)\`\n\nOutputs a CSS \`rgba()\` string\n\n#### Example\n\n    rgb(50,100,50,0.5)\n    rgb(50,100,50)\n\n#### Output\n\n    {{ rgb(50,100,50,0.5) }}\n    {{ rgb(50,100,50) }}\n\n`;const rgb=(r,g,b,a=false)=>a?`rgba(${r},${g},${b},${a})`:`rgb(${r},${g},${b})`;u.color.hsl=`\n\n\`hsl(h, s = 100, l = 50, a = 1)\`\n\nOutputs a CSS \`hsla()\` string\n\n#### Example\n\n    hsl(50,100,50,0.5)\n    hsl(50,100,50)\n    hsl(50)\n\n#### Output\n\n    {{ hsl(50,100,50,0.5) }}\n    {{ hsl(50,100,50) }}\n    {{ hsl(50) }}\n\n`;const hsl=(h,s=100,l=50,a=1)=>`hsl(${h},${s}%,${l}%,${a})`;u.math.scale=`\n\n\`scale(value, start1, stop1, start2 = -2, stop2 = 2)\`\n\nScales linearily the input \`value\`\nfrom the input range between \`start1\` and \`stop1\`\nto the output range  \`start2\` and \`stop2\`.\n\n#### Example\n\n    scale(50, 0, 100, 0, 1)\n\n#### Output\n\n    {{ scale(50, 0, 100, 0, 1) }}\n\n`;const scale=(value,start1,stop1,start2=-2,stop2=2)=>{return(value-start1)/(stop1-start1)*(stop2-start2)+start2};u.math.round=`\n\n\`round(value, decimals = 0)\`\n\nRounds a number \`value\` to optional \`decimals\`.\n\nExample\n    \n    round(0.1234)\n    round(0.1234, 2)\n\nOutput\n  \n    {{ round(0.1234) }}\n    {{ round(0.1234, 2) }}\n\n`;const round=(value,decimals=0)=>{return Number(Math.round(value+"e"+decimals)+"e-"+decimals)};u.string.trunc=`\n\n\`trunc(value, count)\`\n\nTruncates a \`value\` to \`count\` characters.\n\nExample\n    \n    trunc('Hello', 4)\n    trunc(Math.PI, 4)\n\nOutput\n  \n    {{ trunc('Hello', 4) }}\n    {{ trunc(Math.PI, 4) }}\n\n`;const trunc=(value,count)=>{return String(value).slice(0,count)};u.math.random=`\n\n\`random(from, to, float = false)\`\n\nGenerates a random integer number between \`from\` and \`to\`. \nIf \`float = true\`, the output value will be floating point number.\n\nExample\n    \n    random(0, 2)\n    random(0, 2, true)\n\nOutput\n  \n    {{ random(0, 2) }}\n    {{ random(0, 2, true) }}\n`;const random=(from,to,float=false)=>{const r=from+Math.random()*(to-from);return float?r:Math.floor(r,2)};u.math.range=`\n\n\`range(from, to, step = 1)\`\n\nGenerates an array of integer numbers in between \`from\` and \`to\` with optional \`step\` parameter.\n\nExample\n\n    range(-1, 1, 0.5)\n\nOutput\n\n    {{ range(-1, 1, 0.5) }}\n\n`;const range=(from,to,step=1)=>{const length=Math.floor((to-from)/step)+1;return Array.from({length:length}).map((_,i)=>from+i*step)};u.math.polarx=`\n\n\`polarx(angle, radius = 1)\`\n\nGiven the polar coordinates \`angle radius\`, return cartesian coordinates \`x y\`.\n\n#### Example\n\n    polarx(90, 10)\n\n#### Output\n\n    {{ polarx(90, 10) }}\n\n`;const polarx=(deg=0,radius=1)=>{return Math.cos((deg-90)*(Math.PI/180))*radius};u.math.polarx=`\n\n\`polary(angle, radius = 1)\`\n\nGiven the polar coordinates \`angle radius\`, return cartesian coordinates \`x y\`.\n\n#### Example\n\n    polary(90, 10)\n\n#### Output\n\n    {{ polary(90, 10) }}\n\n`;const polary=(deg=0,radius=1)=>{return Math.sin((deg-90)*(Math.PI/180))*radius};const cx=(deg,radius)=>{return Math.cos((deg-90)*(Math.PI/180))*radius};const cy=(deg,radius)=>{return Math.sin((deg-90)*(Math.PI/180))*radius};u.math.polarpoints=`\n\n\`polarpoints(count = 6, radius = 1)\`\n\nCalculates \`count\` of \`{ x, y }\` points on the circle.\n\n#### Example\n\n    polarpoints(4,10)\n\n#### Output\n\n    {{ polarpoints(4,10) }}\n`;const polarpoints=(count=6,radius=1)=>{return Array.from({length:count}).map((p,i)=>({x:cx(360/count*i,radius),y:cy(360/count*i,radius)}))};const cpoints=(count=6,radius=1)=>{return Array.from({length:count}).map((p,i)=>({x:cx(360/count*i,radius),y:cy(360/count*i,radius)}))};u.math.deg2rad=`\n\n\`deg2rad(angle)\`\n\nConverts angle in degrees to radians.\n\n#### Example\n\n<f-math>\nradians = \\frac{degrees \\cdot \\pi}{180} = \\frac{180 \\cdot \\pi}{180} = \\pi\n</f-math>\n\n    deg2rad(180)\n\n#### Output\n\n    {{ deg2rad(180) }}\n`;const deg2rad=deg=>deg*Math.PI/180;u.math.rad2deg=`\n\n\`rad2deg(angle)\`\n\nConverts angle in radians to degrees.\n\n#### Example\n\n    rad2deg(Math.PI)\n\n#### Output\n\n    {{ rad2deg(Math.PI) }}\n`;const rad2deg=rad=>rad*180/Math.PI;u.array.shuffle=`\n\n\`shuffle(array)\`\n\nSorts the array in random order.\n\n#### Example\n\n    shuffle(range(0,3))\n\n#### Output\n\n    {{ shuffle(range(0,3)) }}\n\n`;const shuffle=arr=>arr.sort(()=>Math.random()-.5);u.array.any=`\n\n\`any(array)\`\n\nPicks a random element from the array.\nSupports both array and function argument syntax.\n\n#### Example\n\n    any([0,1,2])\n    any(0,1,2)\n\n#### Output\n\n    {{ any([0,1,2]) }}\n    {{ any(0,1,2) }}\n\n`;const any=function(arr){return arr instanceof Array?shuffle(arr)[0]:shuffle(Array.from(arguments))[0]};u.array.flatten=`\n\n\`flatten(array)\`\n\nFlattens multidimensional array\n\n#### Example\n\n    flatten([0,1,[2,[3,4]]])\n\n#### Output\n\n    {{ flatten([0,1,[2,[3,4]]]) }}\n\n`;const flatten=list=>list.reduce((a,b)=>a.concat(Array.isArray(b)?flatten(b):b),[]);u.array.chunk=`\n\n\`chunk(array, length)\`\n\nChunks array into smaller \`length\`-sizeu.arrays\n\n#### Example\n\n    chunk([0,1,2,3],2)\n\n#### Output\n\n    {{ chunk([0,1,2,3],2) }}\n\n`;const chunk=(arr,length)=>Array.from({length:Math.ceil(arr.length/length)}).map((_,n)=>arr.slice(n*length,n*length+length));u.array.unique=`\n\n\`unique(array)\`\n\nRemoves duplicates from the array\n\n#### Example\n\n    unique([0,0,1,2])\n\n#### Output\n\n    {{ unique([0,0,1,2]) }}\n\n`;const unique=arr=>[...new Set(arr)];u.string.titleCase=`\n\n\`titleCase(string)\`\n\nConverts string to **Title Case**\n\n#### Example\n\n    titleCase('das ist wunderbar')\n\n#### Output\n\n    {{ titleCase('das ist wunderbar') }}\n\n`;const titleCase=string=>string.split(" ").map(([h,...t])=>h.toUpperCase()+t.join("").toLowerCase()).join(" ");u.string.kebabCase=`\n\n\`kebabCase(string)\`\n\nConverts string to **kebab-case**\n\n#### Example\n\n    kebabCase('DonnerWetter')\n\n#### Output\n\n    {{ kebabCase('DonnerWetter') }}\n\n`;const kebabCase=string=>string.replace(/([a-zA-Z])(?=[A-Z])/g,"$1-").toLowerCase();u.string.join=`\n\n\`join(value1, value2, value3)\`\n\nJoins a set of values to a space-separated string, useful for A-Frame integration.\n\n#### Input\n\n    join([1,2,3])\n    join(4,5,6)\n\n#### Output\n\n    {{ join([1,2,3]) }}\n    {{ join(4,5,6) }}\n\n`;const join=function(arr){return arr instanceof Array?arr.join(" "):Array.from(arguments).join(" ")};u.state.send=`\n\n\`send(name, value)\`\n\nDescription to be written.\n\n`;const send=function(channel,value){if(this.$global){const v=parseFloat(value);this.$global.$emit(channel,value==NaN?value:v)}};u.state.receive=`\n\n\`receive(name, callback)\`\n\nDescription to be written.\n\n`;const receive=function(channel,callback){if(this.$global){this.$global.$on(channel,callback)}};u.state.get=`\n\n\`get(key, default = null)\`\n\nDescription to be written.\n\n`;const get=function(key,def=null){if(this.$global){const state=this.$global.$data.state[key];return state!==undefined?state:def}return null};u.state.set=`\n\n\`set(key, value)\`\n\nDescription to be written.\n\n`;const set=function(key,value){if(this.$global){const arr=Array.from(arguments);if(arr.length==1){key="value";value=arr[0]}Vue.set(this.$global.$data.state,key,parseFloat(value))}return null};u.other.debounce=`\n\n\`debounce = (fn, time)\`\n\nDescription to be written.\n\n`;const debounce=(fn,time)=>{let timeout;return function(){const functionCall=()=>fn.apply(this,arguments);clearTimeout(timeout);timeout=setTimeout(functionCall,time)}};u.other.snapToGrid=`\n\n\`snapToGrid(value, gridsize)\`\n\nReturns the value in the closest point of 2D grid.\n\n#### Input\n\n    snapToGrid(0.51,0.5)\n\n#### Output\n\n    {{ snapToGrid(0.51,0.5) }}\n`;const snapToGrid=(value,gridsize)=>{return value%gridsize<gridsize/2?value-value%gridsize:value+gridsize-value%gridsize};u.other.log=`\n\n\`log(message)\`\n\nLogs a value from a template to the console\n\n`;const log=value=>console.log(value);const parseSheet=data=>{return data.feed.entry.map(entry=>{return Object.keys(entry).map(field=>{if(field.startsWith("gsx$")){return[field.split("$")[1],entry[field].$t]}}).filter(field=>field).reduce((field,item)=>{field[item[0]]=item[1];return field},{})})};const cleanColumns=content=>{const pattern=/(\|[0-9\s]+\n)/g;return content.replace(pattern,"")};const parseColumns=slide=>{const pattern=/(\|[0-9\s]+\n)/g;const match=slide.match(pattern);if(match){const rowCount=match.length;const cols=match.map(m=>{return m.trim().replace(/\|/g,"").split("").filter(m=>!m.match(/\s+/))});const colCount=cols[0].length;const areas=cols.map(m=>`'${m.map(m=>`a${m}`).join(" ")}'`).join("\n");const content=slide.split(/\n-\n/).map(c=>c.replace(pattern,""));return{rowCount:rowCount,colCount:colCount,areas:areas,content:content}}else{const content=slide.split(/\n-\n/);return{rowCount:1,colCount:content.length,areas:`'${content.map((_,i)=>`a${i+1}`).join(" ")}'`,content:content}}};const coordsTextToArray=text=>{return text.split(",").map(t=>t.trim().replace(/\s+/g," ").split(" ").map(c=>parseFloat(c)))};const coordsArrayToObject=array=>{return array.map(a=>({x:a[0],y:a[1]||0,z:a[2]||0}))};const parseCoords=c=>{if(typeof c=="string"){return coordsArrayToObject(coordsTextToArray(c))}if(Array.isArray(c)){return coordsArrayToObject(c)}if(!Array.isArray(c)&&typeof c=="object"){return c}return null};const utilsDocs=()=>u;export{getCssVariable,setCssVariable,color,rgb,hsl,scale,round,random,range,polarx,polary,polarpoints,cx,cy,cpoints,deg2rad,rad2deg,shuffle,any,chunk,unique,flatten,snapToGrid,log,join,parseSheet,parseColumns,cleanColumns,trunc,kebabCase,titleCase,debounce,send,receive,set,get,parseCoords,utilsDocs};