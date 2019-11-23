(function(e){function t(t){for(var o,l,a=t[0],i=t[1],u=t[2],c=0,d=[];c<a.length;c++)l=a[c],n[l]&&d.push(n[l][0]),n[l]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);p&&p(t);while(d.length)d.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],o=!0,a=1;a<r.length;a++){var i=r[a];0!==n[i]&&(o=!1)}o&&(s.splice(t--,1),e=l(l.s=r[0]))}return e}var o={},n={app:0},s=[];function l(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=o,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(r,o,function(t){return e[t]}.bind(null,o));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var p=i;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var o=r("64a9"),n=r.n(o);n.a},"38e7":function(e,t,r){"use strict";var o=r("a201"),n=r.n(o);n.a},"56d7":function(e,t,r){"use strict";r.r(t);var o=r("a026"),n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("img",{attrs:{width:"5%",src:r("cf05")}}),o("HelloWorld",{attrs:{msg:"Hello Vue in CodeSandbox!"}})],1)},s=[],l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("h2",[e._v("Upload an Image to Cloudinary")]),r("div",{directives:[{name:"show",rawName:"v-show",value:e.showProgress,expression:"showProgress"}]},[r("progress-bar",{attrs:{options:e.options,value:e.progress}})],1),r("form",{on:{submit:function(t){return t.preventDefault(),e.upload(t)}}},[r("label",{attrs:{for:"cloudname-input"}},[e._v("Cloud Name:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.cloudName,expression:"cloudName"}],attrs:{id:"cloudname-input",placeholder:"Enter cloud_name from dashboard"},domProps:{value:e.cloudName},on:{input:function(t){t.target.composing||(e.cloudName=t.target.value)}}}),r("label",{attrs:{for:"preset-input"}},[e._v("Preset:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.preset,expression:"preset"}],attrs:{id:"preset-input",placeholder:"Enter preset from upload settings"},domProps:{value:e.preset},on:{input:function(t){t.target.composing||(e.preset=t.target.value)}}}),r("label",{attrs:{for:"file-input"}},[e._v("Upload:")]),r("input",{attrs:{id:"file-input",type:"file",accept:"image/png, image/jpeg"},on:{change:function(t){return e.handleFileChange(t)}}}),r("button",{attrs:{type:"submit",disabled:e.filesSelected<1}},[e._v("Upload")])]),e.results&&e.results.secure_url?r("section",[r("img",{attrs:{src:e.results.secure_url,alt:e.results.public_id}})]):e._e(),r("section",[e.errors.length>0?r("ul",e._l(e.errors,(function(t,o){return r("li",{key:o},[e._v(e._s(t))])})),0):e._e()])])},a=[],i=r("bc3a"),u=r.n(i),p=r("527e"),c=r.n(p),d={name:"HelloWorld",components:{ProgressBar:c.a},data(){let e={text:{shadowColor:"black",fontSize:14,fontFamily:"Helvetica",dynamicPosition:!0},progress:{color:"#E8C401",backgroundColor:"#000000"},layout:{height:35,width:140,type:"line",progressPadding:0,verticalTextAlign:63}};return{results:null,errors:[],file:null,filesSelected:0,cloudName:"",preset:"",tags:"browser-upload",progress:0,showProgress:!1,options:e}},methods:{handleFileChange:function(e){console.log("handlefilechange",e.target.files),this.file=e.target.files[0],this.filesSelected=e.target.files.length},upload:function(e){if(this.preset.length<1||this.cloudName.length<1)return void this.errors.push("You must enter a cloud name and preset to upload");this.errors=[],console.log("upload",this.file.name);let t=new FileReader;t.addEventListener("load",function(){console.log("file reader listener");let e=new FormData;e.append("upload_preset",this.preset),e.append("tags",this.tags),e.append("file",t.result);let r=`https://api.cloudinary.com/v1_1/${this.cloudName}/upload`,o={url:r,method:"POST",data:e,onUploadProgress:function(e){console.log("progress",e),this.progress=Math.round(100*e.loaded/e.total),console.log(this.progress)}.bind(this)};this.showProgress=!0,u()(o).then(e=>{this.results=e.data,console.log(this.results),console.log("public_id",this.results.public_id)}).catch(e=>{this.errors.push(e),console.log(this.error)}).finally(()=>{setTimeout(function(){this.showProgress=!1}.bind(this),1e3)})}.bind(this),!1),this.file&&this.file.name&&t.readAsDataURL(this.file)}}},f=d,h=(r("38e7"),r("2877")),g=Object(h["a"])(f,l,a,!1,null,"f30390da",null),m=g.exports,v={name:"App",components:{HelloWorld:m}},b=v,_=(r("034f"),Object(h["a"])(b,n,s,!1,null,null,null)),w=_.exports;o["default"].use(c.a),o["default"].config.productionTip=!1,new o["default"]({render:e=>e(w)}).$mount("#app")},"64a9":function(e,t,r){},a201:function(e,t,r){},cf05:function(e,t,r){e.exports=r.p+"assets/img/logo.c2a605fb.png"}});
//# sourceMappingURL=app.d6c7d196.js.map