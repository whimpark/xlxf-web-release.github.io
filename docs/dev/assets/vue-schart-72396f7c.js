import{c as T}from"./_commonjsHelpers-042e6b4d.js";import{ag as k,j as S,k as M,l as C}from"./_plugin-vue_export-helper-4889436d.js";var b={},L={get exports(){return b},set exports(c){b=c}};(function(c,w){(function(p,y){c.exports=y()})(T,function(){function p(u,t){for(var i=0;i<t.length;i++){var e=t[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(u,e.key,e)}}function y(u){return function(t){if(Array.isArray(t)){for(var i=0,e=new Array(t.length);i<t.length;i++)e[i]=t[i];return e}}(u)||function(t){if(Symbol.iterator in Object(t)||Object.prototype.toString.call(t)==="[object Arguments]")return Array.from(t)}(u)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var h=window.devicePixelRatio||1,o=10*h,f=o/2;return function(){function u(t,i){(function(e,s){if(!(e instanceof s))throw new TypeError("Cannot call a class as a function")})(this,u),this.canvas=function(e){var s=document.getElementById(e),a=s.parentNode.clientWidth,l=s.parentNode.clientHeight;return s.style.width=a+"px",s.style.height=l+"px",s.width=a*h,s.height=l*h,s}(t),this.ctx=this.canvas.getContext("2d"),this.type="bar",this.showValue=!0,this.showGrid=!0,this.topPadding=60*h,this.leftPadding=50*h,this.rightPadding=10*h,this.bottomPadding=50*h,this.yEqual=5,this.yLength=0,this.xLength=0,this.ySpace=0,this.xRorate=0,this.yRorate=0,this.xRotate=0,this.yRotate=0,this.bgColor="#fff",this.axisColor="#666",this.gridColor="#eee",this.title={text:"",color:"#666",position:"top",font:"bold "+18*h+"px Arial",top:o,bottom:f},this.legend={display:!0,position:"top",color:"#666",font:14*h+"px Arial",top:45*h,bottom:15*h,textWidth:0},this.radius=100*h,this.innerRadius=60*h,this.colorList=["#4A90E2","#F5A623","#ff5858","#5e64ff","#2AC766","#743ee2","#b554ff","#199475"],this.init(i)}return function(t,i,e){i&&p(t.prototype,i),e&&p(t,e)}(u,[{key:"init",value:function(t){if(t.title=Object.assign({},this.title,t.title),t.legend=Object.assign({},this.legend,t.legend),Object.assign(this,t),!t.labels||!t.labels.length)throw new Error("缺少主要参数labels");if(!t.datasets||!t.datasets.length)throw new Error("缺少主要参数datasets");this.drawBackground(),this.type==="bar"||this.type==="line"?this.renderBarChart():this.renderPieChart(),this.drawLegend()}},{key:"renderBarChart",value:function(){this.yLength=Math.floor((this.canvas.height-this.topPadding-this.bottomPadding-o)/this.yEqual),this.xLength=Math.floor((this.canvas.width-this.leftPadding-this.rightPadding-o)/this.labels.length),this.ySpace=function(t,i){var e=t.map(function(l){return l.data.reduce(function(n,r){return r<n?n:r})}),s=Math.ceil(Math.max.apply(Math,y(e))/i),a=s.toString().length-1;return a=2<a?2:a,Math.ceil(s/Math.pow(10,a))*Math.pow(10,a)}(this.datasets,this.yEqual),this.drawXAxis(),this.drawYAxis(),this.drawBarContent()}},{key:"drawBarContent",value:function(){var t=this.ctx,i=this.datasets.length;t.beginPath();for(var e=0;e<i;e++){t.font=this.legend.font,this.legend.textWidth+=Math.ceil(t.measureText(this.datasets[e].label).width),t.fillStyle=t.strokeStyle=this.datasets[e].fillColor||this.colorList[e];for(var s=this.datasets[e].data,a=0;a<s.length;a++)if(!(a>this.labels.length-1)){var l=this.xLength/(i+1),n=this.yLength/this.ySpace,r=this.leftPadding+this.xLength*a+l*(e+.5),d=r+l,v=this.canvas.height-this.bottomPadding,g=v-s[a]*n;if(this.type==="bar")t.fillRect(r,g,d-r,v-g),this.drawValue(s[a],r+l/2,g-f);else if(this.type==="line"){var x=this.leftPadding+this.xLength*(a+.5);t.beginPath(),t.arc(x,g,3*h,0,2*Math.PI,!0),t.fill(),a!==0&&(t.beginPath(),t.strokeStyle=this.datasets[e].fillColor||this.colorList[e],t.lineWidth=2*h,t.moveTo(x-this.xLength,v-s[a-1]*n),t.lineTo(x,g),t.stroke(),t.lineWidth=1*h),this.drawValue(s[a],x,g-o)}}}t.stroke()}},{key:"renderPieChart",value:function(){for(var t=this.ctx,i=this.labels.length,e=this.datasets[0],s=e.data,a=s.reduce(function(m,P){return m+P}),l=-Math.PI/2,n=this.canvas.width/2,r=this.canvas.height/2,d=0;d<i;d++){t.font=this.legend.font,this.legend.textWidth+=Math.ceil(t.measureText(this.labels[d]).width),t.beginPath(),t.strokeStyle=t.fillStyle=e.colorList&&e.colorList[d]||this.colorList[d],t.moveTo(n,r);var v=l,g=l+=s[d]/a*2*Math.PI;t.arc(n,r,this.radius,v,g),t.closePath(),t.fill();var x=(v+g)/2;this.drawPieValue(s[d],x)}this.type==="ring"&&(t.beginPath(),t.fillStyle=this.bgColor,t.arc(n,r,this.innerRadius,0,2*Math.PI),t.closePath(),t.fill())}},{key:"drawValue",value:function(t,i,e){var s=this.ctx;this.showValue&&(s.textBaseline="middle",s.font=12*h+"px Arial",s.textAlign="center",s.fillText(t,i,e))}},{key:"drawPieValue",value:function(t,i){var e=this.ctx;if(this.showValue){var s=this.canvas.width/2,a=this.canvas.height/2,l=Math.ceil(Math.abs(this.radius*Math.cos(i))),n=Math.floor(Math.abs(this.radius*Math.sin(i)));e.textBaseline="middle",this.showValue&&(i<=0?(e.textAlign="left",e.moveTo(s+l,a-n),e.lineTo(s+l+o,a-n-o),e.moveTo(s+l+o,a-n-o),e.lineTo(s+l+3*o,a-n-o),e.stroke(),e.fillText(t,s+l+3.5*o,a-n-o)):0<i&&i<=Math.PI/2?(e.textAlign="left",e.moveTo(s+l,a+n),e.lineTo(s+l+o,a+n+o),e.moveTo(s+l+o,a+n+o),e.lineTo(s+l+3*o,a+n+o),e.stroke(),e.fillText(t,s+l+3.5*o,a+n+o)):i>Math.PI/2&&i<Math.PI?(e.textAlign="right",e.moveTo(s-l,a+n),e.lineTo(s-l-o,a+n+o),e.moveTo(s-l-o,a+n+o),e.lineTo(s-l-3*o,a+n+o),e.stroke(),e.fillText(t,s-l-3.5*o,a+n+o)):(e.textAlign="right",e.moveTo(s-l,a-n),e.lineTo(s-l-o,a-n-o),e.moveTo(s-l-o,a-n-o),e.lineTo(s-l-3*o,a-n-o),e.stroke(),e.fillText(t,s-l-3.5*o,a-n-o)))}}},{key:"drawBackground",value:function(){this.ctx.fillStyle=this.bgColor,this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.drawTitle()}},{key:"drawTitle",value:function(){var t=this.title;if(t.text){var i=this.ctx;i.beginPath(),i.font=t.font,i.textAlign="center",i.fillStyle=t.color,t.position==="top"?(i.textBaseline="top",i.fillText(t.text,this.canvas.width/2,t.top)):(i.textBaseline="bottom",i.fillText(t.text,this.canvas.width/2,this.canvas.height-t.bottom))}}},{key:"drawXAxis",value:function(){var t=this.ctx,i=this.canvas.height-this.bottomPadding+.5;t.beginPath(),t.strokeStyle=this.axisColor,t.moveTo(this.leftPadding,i),t.lineTo(this.canvas.width-this.rightPadding,i),t.stroke(),this.drawXPoint()}},{key:"drawXPoint",value:function(){var t=this.ctx;t.beginPath(),t.font=12*h+"px Microsoft YaHei",t.textAlign=this.xRorate||this.xRotate?"right":"center",t.textBaseline="top",t.fillStyle=this.axisColor;for(var i=0;i<this.labels.length;i++){var e=this.labels[i],s=this.leftPadding+this.xLength*(i+1)+.5,a=this.canvas.height-this.bottomPadding;this.showGrid?(t.strokeStyle=this.gridColor,t.moveTo(s,a),t.lineTo(s,this.topPadding+o)):(t.moveTo(s,a),t.lineTo(s,a-f)),t.stroke(),t.save(),t.translate(s-this.xLength/2,a+f),this.xRorate?t.rotate(-this.xRorate*Math.PI/180):t.rotate(-this.xRotate*Math.PI/180),t.fillText(e,0,0),t.restore()}}},{key:"drawYAxis",value:function(){var t=this.ctx;t.beginPath(),t.strokeStyle=this.axisColor,t.moveTo(this.leftPadding-.5,this.canvas.height-this.bottomPadding+.5),t.lineTo(this.leftPadding-.5,this.topPadding+.5),t.stroke(),this.drawYPoint()}},{key:"drawYPoint",value:function(){var t=this.ctx;t.font=12*h+"px Microsoft YaHei",t.textAlign="right",t.textBaseline="middle",t.beginPath();for(var i=0;i<this.yEqual;i++){var e=this.leftPadding,s=this.canvas.height-this.bottomPadding-this.yLength*(i+1)+.5;this.showGrid?(t.strokeStyle=this.gridColor,t.moveTo(e,s),t.lineTo(this.canvas.width-this.rightPadding-o,s)):(t.strokeStyle=this.axisColor,t.moveTo(e-f,s),t.lineTo(e,s)),t.stroke(),t.save(),t.fillStyle=this.axisColor,t.translate(e-o,s),this.yRorate?t.rotate(-this.yRorate*Math.PI/180):t.rotate(-this.yRotate*Math.PI/180),t.fillText(this.ySpace*(i+1),0,0),t.restore()}}},{key:"drawLegend",value:function(){var t=this.legend;if(t.display){var i=this.ctx,e=this.type==="pie"||this.type==="ring";i.beginPath(),i.font=t.font,i.textAlign="left",i.textBaseline="middle";for(var s=e?this.labels.length:this.datasets.length,a=(this.canvas.width-(this.legend.textWidth+(5*s-2)*o))/2,l=0,n=0;n<s;n++){var r=e?this.datasets[0]:this.datasets[n],d=(e?this.labels[n]:r.label)||"";i.fillStyle=r.colorList&&r.colorList[n]||r.fillColor||this.colorList[n],t.position==="top"?(this.drawLegendIcon(a+5*o*n+l,t.top-f,2*o,o),i.fillStyle=t.color,i.fillText(d,a+(5*n+3)*o+l,t.top)):t.position==="bottom"?(this.drawLegendIcon(a+5*o*n+l,this.canvas.height-t.bottom-f,2*o,o),i.fillStyle=t.color,i.fillText(d,a+(5*n+3)*o+l,this.canvas.height-t.bottom)):(i.fillRect(o,t.top+2*o*n,2*o,o),i.fillStyle=t.color,i.fillText(d,4*o,t.top+2*o*n+.5*o)),l+=Math.ceil(i.measureText(d).width)}}}},{key:"drawLegendIcon",value:function(t,i,e,s){var a=this.ctx;this.type==="line"?(a.beginPath(),a.strokeStyle=a.fillStyle,a.lineWidth=2*h,a.moveTo(t,i+f),a.lineTo(t+2*o,i+f),a.stroke(),a.lineWidth=1*h,a.arc(t+o,i+f,3*h,0,2*Math.PI,!0),a.fill()):a.fillRect(t,i,e,s)}}]),u}()})})(L);const A=b,I={props:{canvasId:{type:String,default:"",required:!0},options:{type:Object,required:!0}},mounted(){this.renderChart()},methods:{renderChart(){if(!this.checkOptions())return;const c={...this.options};new A(this.canvasId,c)},checkOptions(){const c=this.options;return!(!c.datasets||!c.datasets.length||!c.labels||!c.labels.length)}},watch:{options:{handler(c,w){this.renderChart()},deep:!0}}},R=["id"];function B(c,w,p,y,h,o){return S(),M("div",null,[C("canvas",{id:p.canvasId},null,8,R)])}const _=k(I,[["render",B]]);export{_ as S};
