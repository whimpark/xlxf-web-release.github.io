import{c as m}from"./vendor-12e7d3ab8f59885f55dffca19f4bf54f-ea36b144.js";var b={},T={get exports(){return b},set exports(u){b=u}};(function(u,k){(function(y,p){u.exports=p()})(m,function(){function y(g,t){for(var i=0;i<t.length;i++){var e=t[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(g,e.key,e)}}function p(g){return function(t){if(Array.isArray(t)){for(var i=0,e=new Array(t.length);i<t.length;i++)e[i]=t[i];return e}}(g)||function(t){if(Symbol.iterator in Object(t)||Object.prototype.toString.call(t)==="[object Arguments]")return Array.from(t)}(g)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var n=window.devicePixelRatio||1,o=10*n,c=o/2;return function(){function g(t,i){(function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")})(this,g),this.canvas=function(e){var a=document.getElementById(e),s=a.parentNode.clientWidth,h=a.parentNode.clientHeight;return a.style.width=s+"px",a.style.height=h+"px",a.width=s*n,a.height=h*n,a}(t),this.ctx=this.canvas.getContext("2d"),this.type="bar",this.showValue=!0,this.showGrid=!0,this.topPadding=60*n,this.leftPadding=50*n,this.rightPadding=10*n,this.bottomPadding=50*n,this.yEqual=5,this.yLength=0,this.xLength=0,this.ySpace=0,this.xRorate=0,this.yRorate=0,this.xRotate=0,this.yRotate=0,this.bgColor="#fff",this.axisColor="#666",this.gridColor="#eee",this.title={text:"",color:"#666",position:"top",font:"bold "+18*n+"px Arial",top:o,bottom:c},this.legend={display:!0,position:"top",color:"#666",font:14*n+"px Arial",top:45*n,bottom:15*n,textWidth:0},this.radius=100*n,this.innerRadius=60*n,this.colorList=["#4A90E2","#F5A623","#ff5858","#5e64ff","#2AC766","#743ee2","#b554ff","#199475"],this.init(i)}return function(t,i,e){i&&y(t.prototype,i),e&&y(t,e)}(g,[{key:"init",value:function(t){if(t.title=Object.assign({},this.title,t.title),t.legend=Object.assign({},this.legend,t.legend),Object.assign(this,t),!t.labels||!t.labels.length)throw new Error("缺少主要参数labels");if(!t.datasets||!t.datasets.length)throw new Error("缺少主要参数datasets");this.drawBackground(),this.type==="bar"||this.type==="line"?this.renderBarChart():this.renderPieChart(),this.drawLegend()}},{key:"renderBarChart",value:function(){this.yLength=Math.floor((this.canvas.height-this.topPadding-this.bottomPadding-o)/this.yEqual),this.xLength=Math.floor((this.canvas.width-this.leftPadding-this.rightPadding-o)/this.labels.length),this.ySpace=function(t,i){var e=t.map(function(h){return h.data.reduce(function(l,r){return r<l?l:r})}),a=Math.ceil(Math.max.apply(Math,p(e))/i),s=a.toString().length-1;return s=2<s?2:s,Math.ceil(a/Math.pow(10,s))*Math.pow(10,s)}(this.datasets,this.yEqual),this.drawXAxis(),this.drawYAxis(),this.drawBarContent()}},{key:"drawBarContent",value:function(){var t=this.ctx,i=this.datasets.length;t.beginPath();for(var e=0;e<i;e++){t.font=this.legend.font,this.legend.textWidth+=Math.ceil(t.measureText(this.datasets[e].label).width),t.fillStyle=t.strokeStyle=this.datasets[e].fillColor||this.colorList[e];for(var a=this.datasets[e].data,s=0;s<a.length;s++)if(!(s>this.labels.length-1)){var h=this.xLength/(i+1),l=this.yLength/this.ySpace,r=this.leftPadding+this.xLength*s+h*(e+.5),d=r+h,x=this.canvas.height-this.bottomPadding,f=x-a[s]*l;if(this.type==="bar")t.fillRect(r,f,d-r,x-f),this.drawValue(a[s],r+h/2,f-c);else if(this.type==="line"){var v=this.leftPadding+this.xLength*(s+.5);t.beginPath(),t.arc(v,f,3*n,0,2*Math.PI,!0),t.fill(),s!==0&&(t.beginPath(),t.strokeStyle=this.datasets[e].fillColor||this.colorList[e],t.lineWidth=2*n,t.moveTo(v-this.xLength,x-a[s-1]*l),t.lineTo(v,f),t.stroke(),t.lineWidth=1*n),this.drawValue(a[s],v,f-o)}}}t.stroke()}},{key:"renderPieChart",value:function(){for(var t=this.ctx,i=this.labels.length,e=this.datasets[0],a=e.data,s=a.reduce(function(P,w){return P+w}),h=-Math.PI/2,l=this.canvas.width/2,r=this.canvas.height/2,d=0;d<i;d++){t.font=this.legend.font,this.legend.textWidth+=Math.ceil(t.measureText(this.labels[d]).width),t.beginPath(),t.strokeStyle=t.fillStyle=e.colorList&&e.colorList[d]||this.colorList[d],t.moveTo(l,r);var x=h,f=h+=a[d]/s*2*Math.PI;t.arc(l,r,this.radius,x,f),t.closePath(),t.fill();var v=(x+f)/2;this.drawPieValue(a[d],v)}this.type==="ring"&&(t.beginPath(),t.fillStyle=this.bgColor,t.arc(l,r,this.innerRadius,0,2*Math.PI),t.closePath(),t.fill())}},{key:"drawValue",value:function(t,i,e){var a=this.ctx;this.showValue&&(a.textBaseline="middle",a.font=12*n+"px Arial",a.textAlign="center",a.fillText(t,i,e))}},{key:"drawPieValue",value:function(t,i){var e=this.ctx;if(this.showValue){var a=this.canvas.width/2,s=this.canvas.height/2,h=Math.ceil(Math.abs(this.radius*Math.cos(i))),l=Math.floor(Math.abs(this.radius*Math.sin(i)));e.textBaseline="middle",this.showValue&&(i<=0?(e.textAlign="left",e.moveTo(a+h,s-l),e.lineTo(a+h+o,s-l-o),e.moveTo(a+h+o,s-l-o),e.lineTo(a+h+3*o,s-l-o),e.stroke(),e.fillText(t,a+h+3.5*o,s-l-o)):0<i&&i<=Math.PI/2?(e.textAlign="left",e.moveTo(a+h,s+l),e.lineTo(a+h+o,s+l+o),e.moveTo(a+h+o,s+l+o),e.lineTo(a+h+3*o,s+l+o),e.stroke(),e.fillText(t,a+h+3.5*o,s+l+o)):i>Math.PI/2&&i<Math.PI?(e.textAlign="right",e.moveTo(a-h,s+l),e.lineTo(a-h-o,s+l+o),e.moveTo(a-h-o,s+l+o),e.lineTo(a-h-3*o,s+l+o),e.stroke(),e.fillText(t,a-h-3.5*o,s+l+o)):(e.textAlign="right",e.moveTo(a-h,s-l),e.lineTo(a-h-o,s-l-o),e.moveTo(a-h-o,s-l-o),e.lineTo(a-h-3*o,s-l-o),e.stroke(),e.fillText(t,a-h-3.5*o,s-l-o)))}}},{key:"drawBackground",value:function(){this.ctx.fillStyle=this.bgColor,this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.drawTitle()}},{key:"drawTitle",value:function(){var t=this.title;if(t.text){var i=this.ctx;i.beginPath(),i.font=t.font,i.textAlign="center",i.fillStyle=t.color,t.position==="top"?(i.textBaseline="top",i.fillText(t.text,this.canvas.width/2,t.top)):(i.textBaseline="bottom",i.fillText(t.text,this.canvas.width/2,this.canvas.height-t.bottom))}}},{key:"drawXAxis",value:function(){var t=this.ctx,i=this.canvas.height-this.bottomPadding+.5;t.beginPath(),t.strokeStyle=this.axisColor,t.moveTo(this.leftPadding,i),t.lineTo(this.canvas.width-this.rightPadding,i),t.stroke(),this.drawXPoint()}},{key:"drawXPoint",value:function(){var t=this.ctx;t.beginPath(),t.font=12*n+"px Microsoft YaHei",t.textAlign=this.xRorate||this.xRotate?"right":"center",t.textBaseline="top",t.fillStyle=this.axisColor;for(var i=0;i<this.labels.length;i++){var e=this.labels[i],a=this.leftPadding+this.xLength*(i+1)+.5,s=this.canvas.height-this.bottomPadding;this.showGrid?(t.strokeStyle=this.gridColor,t.moveTo(a,s),t.lineTo(a,this.topPadding+o)):(t.moveTo(a,s),t.lineTo(a,s-c)),t.stroke(),t.save(),t.translate(a-this.xLength/2,s+c),this.xRorate?t.rotate(-this.xRorate*Math.PI/180):t.rotate(-this.xRotate*Math.PI/180),t.fillText(e,0,0),t.restore()}}},{key:"drawYAxis",value:function(){var t=this.ctx;t.beginPath(),t.strokeStyle=this.axisColor,t.moveTo(this.leftPadding-.5,this.canvas.height-this.bottomPadding+.5),t.lineTo(this.leftPadding-.5,this.topPadding+.5),t.stroke(),this.drawYPoint()}},{key:"drawYPoint",value:function(){var t=this.ctx;t.font=12*n+"px Microsoft YaHei",t.textAlign="right",t.textBaseline="middle",t.beginPath();for(var i=0;i<this.yEqual;i++){var e=this.leftPadding,a=this.canvas.height-this.bottomPadding-this.yLength*(i+1)+.5;this.showGrid?(t.strokeStyle=this.gridColor,t.moveTo(e,a),t.lineTo(this.canvas.width-this.rightPadding-o,a)):(t.strokeStyle=this.axisColor,t.moveTo(e-c,a),t.lineTo(e,a)),t.stroke(),t.save(),t.fillStyle=this.axisColor,t.translate(e-o,a),this.yRorate?t.rotate(-this.yRorate*Math.PI/180):t.rotate(-this.yRotate*Math.PI/180),t.fillText(this.ySpace*(i+1),0,0),t.restore()}}},{key:"drawLegend",value:function(){var t=this.legend;if(t.display){var i=this.ctx,e=this.type==="pie"||this.type==="ring";i.beginPath(),i.font=t.font,i.textAlign="left",i.textBaseline="middle";for(var a=e?this.labels.length:this.datasets.length,s=(this.canvas.width-(this.legend.textWidth+(5*a-2)*o))/2,h=0,l=0;l<a;l++){var r=e?this.datasets[0]:this.datasets[l],d=(e?this.labels[l]:r.label)||"";i.fillStyle=r.colorList&&r.colorList[l]||r.fillColor||this.colorList[l],t.position==="top"?(this.drawLegendIcon(s+5*o*l+h,t.top-c,2*o,o),i.fillStyle=t.color,i.fillText(d,s+(5*l+3)*o+h,t.top)):t.position==="bottom"?(this.drawLegendIcon(s+5*o*l+h,this.canvas.height-t.bottom-c,2*o,o),i.fillStyle=t.color,i.fillText(d,s+(5*l+3)*o+h,this.canvas.height-t.bottom)):(i.fillRect(o,t.top+2*o*l,2*o,o),i.fillStyle=t.color,i.fillText(d,4*o,t.top+2*o*l+.5*o)),h+=Math.ceil(i.measureText(d).width)}}}},{key:"drawLegendIcon",value:function(t,i,e,a){var s=this.ctx;this.type==="line"?(s.beginPath(),s.strokeStyle=s.fillStyle,s.lineWidth=2*n,s.moveTo(t,i+c),s.lineTo(t+2*o,i+c),s.stroke(),s.lineWidth=1*n,s.arc(t+o,i+c,3*n,0,2*Math.PI,!0),s.fill()):s.fillRect(t,i,e,a)}}]),g}()})})(T);const S=b;export{S};
