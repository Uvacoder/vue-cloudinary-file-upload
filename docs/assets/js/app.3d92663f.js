(function(e){function t(t){for(var r,a,i=t[0],s=t[1],u=t[2],p=0,d=[];p<i.length;p++)a=i[p],l[a]&&d.push(l[a][0]),l[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);c&&c(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==l[s]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},l={app:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var c=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),l=n.n(r);l.a},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("a026"),l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("img",{attrs:{width:"5%",src:n("cf05")}}),r("HelloWorld",{attrs:{msg:"Hello Vue in CodeSandbox!"}})],1)},o=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h2",[e._v("Upload an Image to Cloudinary")]),n("form",{on:{submit:function(t){return t.preventDefault(),e.upload(t)}}},[n("label",{attrs:{for:"cloudname-input"}},[e._v("Cloud Name:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.cloudName,expression:"cloudName"}],attrs:{id:"cloudname-input",placeholder:"cloud_name"},domProps:{value:e.cloudName},on:{input:function(t){t.target.composing||(e.cloudName=t.target.value)}}}),n("label",{attrs:{for:"preset-input"}},[e._v("Preset:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.preset,expression:"preset"}],attrs:{id:"preset-input",placeholder:"preset"},domProps:{value:e.preset},on:{input:function(t){t.target.composing||(e.preset=t.target.value)}}}),n("label",{attrs:{for:"file-input"}},[e._v("Upload:")]),n("input",{attrs:{id:"file-input",type:"file",accept:"image/png, image/jpeg"},on:{change:function(t){return e.handleFileChange(t)}}}),n("button",{attrs:{type:"submit",disabled:e.filesSelected<1}},[e._v("Upload")])]),e.results&&e.results.secure_url?n("section",[n("img",{attrs:{src:e.results.secure_url,alt:e.results.public_id}})]):e._e(),n("section",[e.errors.length>0?n("ul",e._l(e.errors,(function(t,r){return n("li",{key:r},[e._v(e._s(t))])})),0):e._e()])])},i=[],s=n("bc3a"),u=n.n(s),c={name:"HelloWorld",data(){return{results:null,errors:[],file:null,filesSelected:0,cloudName:"",preset:"",tags:"browser-upload"}},methods:{handleFileChange:function(e){console.log("handlefilechange",e.target.files),this.file=e.target.files[0],this.filesSelected=e.target.files.length},upload:function(e){console.log("upload",this.file.name);let t=new FileReader;t.addEventListener("load",function(){console.log("file reader listener");let e=new FormData;e.append("upload_preset",this.preset),e.append("tags",this.tags),e.append("file",t.result);let n=`https://api.cloudinary.com/v1_1/${this.cloudName}/upload`,r={url:n,method:"POST",data:e};u()(r).then(e=>{this.results=e.data,console.log(this.results)}).catch(e=>{this.errors.push(e),console.log(this.error)})}.bind(this),!1),this.file&&this.file.name&&t.readAsDataURL(this.file)}}},p=c,d=(n("f3c6"),n("2877")),f=Object(d["a"])(p,a,i,!1,null,"7b01eb76",null),h=f.exports,m={name:"App",components:{HelloWorld:h}},g=m,v=(n("034f"),Object(d["a"])(g,l,o,!1,null,null,null)),b=v.exports;r["a"].config.productionTip=!1,new r["a"]({render:e=>e(b)}).$mount("#app")},"64a9":function(e,t,n){},ca55:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"assets/img/logo.c2a605fb.png"},f3c6:function(e,t,n){"use strict";var r=n("ca55"),l=n.n(r);l.a}});
//# sourceMappingURL=app.3d92663f.js.map