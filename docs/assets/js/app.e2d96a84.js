(function(e){function t(t){for(var n,a,s=t[0],i=t[1],u=t[2],p=0,d=[];p<s.length;p++)a=s[p],l[a]&&d.push(l[a][0]),l[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);c&&c(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,s=1;s<r.length;s++){var i=r[s];0!==l[i]&&(n=!1)}n&&(o.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},l={app:0},o=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var c=i;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("64a9"),l=r.n(n);l.a},"2ecb":function(e,t,r){"use strict";var n=r("8c04"),l=r.n(n);l.a},"56d7":function(e,t,r){"use strict";r.r(t);var n=r("a026"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("img",{attrs:{width:"5%",src:r("cf05")}}),n("HelloWorld",{attrs:{msg:"Hello Vue in CodeSandbox!"}})],1)},o=[],a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("h2",[e._v("Upload an Image to Cloudinary")]),r("form",{on:{submit:function(t){return t.preventDefault(),e.upload(t)}}},[r("label",{attrs:{for:"cloudname-input"}},[e._v("Cloud Name:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.cloudName,expression:"cloudName"}],attrs:{id:"cloudname-input",placeholder:"Enter cloud_name from dashboard"},domProps:{value:e.cloudName},on:{input:function(t){t.target.composing||(e.cloudName=t.target.value)}}}),r("label",{attrs:{for:"preset-input"}},[e._v("Preset:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.preset,expression:"preset"}],attrs:{id:"preset-input",placeholder:"Enter preset from upload settings"},domProps:{value:e.preset},on:{input:function(t){t.target.composing||(e.preset=t.target.value)}}}),r("label",{attrs:{for:"file-input"}},[e._v("Upload:")]),r("input",{attrs:{id:"file-input",type:"file",accept:"image/png, image/jpeg"},on:{change:function(t){return e.handleFileChange(t)}}}),r("button",{attrs:{type:"submit",disabled:e.filesSelected<1}},[e._v("Upload")])]),e.results&&e.results.secure_url?r("section",[r("img",{attrs:{src:e.results.secure_url,alt:e.results.public_id}})]):e._e(),r("section",[e.errors.length>0?r("ul",e._l(e.errors,(function(t,n){return r("li",{key:n},[e._v(e._s(t))])})),0):e._e()])])},s=[],i=r("bc3a"),u=r.n(i),c={name:"HelloWorld",data(){return{results:null,errors:[],file:null,filesSelected:0,cloudName:"",preset:"",tags:"browser-upload"}},methods:{handleFileChange:function(e){console.log("handlefilechange",e.target.files),this.file=e.target.files[0],this.filesSelected=e.target.files.length},upload:function(e){console.log("upload",this.file.name);let t=new FileReader;t.addEventListener("load",function(){console.log("file reader listener");let e=new FormData;e.append("upload_preset",this.preset),e.append("tags",this.tags),e.append("file",t.result);let r=`https://api.cloudinary.com/v1_1/${this.cloudName}/upload`,n={url:r,method:"POST",data:e};u()(n).then(e=>{this.results=e.data,console.log(this.results)}).catch(e=>{this.errors.push(e),console.log(this.error)})}.bind(this),!1),this.file&&this.file.name&&t.readAsDataURL(this.file)}}},p=c,d=(r("2ecb"),r("2877")),f=Object(d["a"])(p,a,s,!1,null,"3cd2036d",null),h=f.exports,m={name:"App",components:{HelloWorld:h}},g=m,v=(r("034f"),Object(d["a"])(g,l,o,!1,null,null,null)),b=v.exports;n["a"].config.productionTip=!1,new n["a"]({render:e=>e(b)}).$mount("#app")},"64a9":function(e,t,r){},"8c04":function(e,t,r){},cf05:function(e,t,r){e.exports=r.p+"assets/img/logo.c2a605fb.png"}});
//# sourceMappingURL=app.e2d96a84.js.map