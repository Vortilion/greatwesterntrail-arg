var QE=Object.defineProperty,YE=Object.defineProperties;var KE=Object.getOwnPropertyDescriptors;var wl=Object.getOwnPropertySymbols;var ev=Object.prototype.hasOwnProperty,tv=Object.prototype.propertyIsEnumerable;var J_=(t,n,e)=>n in t?QE(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,_=(t,n)=>{for(var e in n||={})ev.call(n,e)&&J_(t,e,n[e]);if(wl)for(var e of wl(n))tv.call(n,e)&&J_(t,e,n[e]);return t},Q=(t,n)=>YE(t,KE(n));var kf=(t,n)=>{var e={};for(var i in t)ev.call(t,i)&&n.indexOf(i)<0&&(e[i]=t[i]);if(t!=null&&wl)for(var i of wl(t))n.indexOf(i)<0&&tv.call(t,i)&&(e[i]=t[i]);return e};var Ct=null,Cl=!1,Rf=1,ZE=null,et=Symbol("SIGNAL");function K(t){let n=Ct;return Ct=t,n}function Il(){return Ct}var Ki={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Zi(t){if(Cl)throw new Error("");if(Ct===null)return;Ct.consumerOnSignalRead(t);let n=Ct.producersTail;if(n!==void 0&&n.producer===t)return;let e,i=Ct.recomputing;if(i&&(e=n!==void 0?n.nextProducer:Ct.producers,e!==void 0&&e.producer===t)){Ct.producersTail=e,e.lastReadVersion=t.version;return}let r=t.consumersTail;if(r!==void 0&&r.consumer===Ct&&(!i||JE(r,Ct)))return;let o=Zr(Ct),s={producer:t,consumer:Ct,nextProducer:e,prevConsumer:r,lastReadVersion:t.version,nextConsumer:void 0};Ct.producersTail=s,n!==void 0?n.nextProducer=s:Ct.producers=s,o&&ov(t,s)}function nv(){Rf++}function Sl(t){if(!(Zr(t)&&!t.dirty)&&!(!t.dirty&&t.lastCleanEpoch===Rf)){if(!t.producerMustRecompute(t)&&!Kr(t)){El(t);return}t.producerRecomputeValue(t),El(t)}}function Af(t){if(t.consumers===void 0)return;let n=Cl;Cl=!0;try{for(let e=t.consumers;e!==void 0;e=e.nextConsumer){let i=e.consumer;i.dirty||XE(i)}}finally{Cl=n}}function Of(){return Ct?.consumerAllowSignalWrites!==!1}function XE(t){t.dirty=!0,Af(t),t.consumerMarkedDirty?.(t)}function El(t){t.dirty=!1,t.lastCleanEpoch=Rf}function pi(t){return t&&iv(t),K(t)}function iv(t){t.producersTail=void 0,t.recomputing=!0}function Xi(t,n){K(n),t&&rv(t)}function rv(t){t.recomputing=!1;let n=t.producersTail,e=n!==void 0?n.nextProducer:t.producers;if(e!==void 0){if(Zr(t))do e=Nf(e);while(e!==void 0);n!==void 0?n.nextProducer=void 0:t.producers=void 0}}function Kr(t){for(let n=t.producers;n!==void 0;n=n.nextProducer){let e=n.producer,i=n.lastReadVersion;if(i!==e.version||(Sl(e),i!==e.version))return!0}return!1}function gi(t){if(Zr(t)){let n=t.producers;for(;n!==void 0;)n=Nf(n)}t.producers=void 0,t.producersTail=void 0,t.consumers=void 0,t.consumersTail=void 0}function ov(t,n){let e=t.consumersTail,i=Zr(t);if(e!==void 0?(n.nextConsumer=e.nextConsumer,e.nextConsumer=n):(n.nextConsumer=void 0,t.consumers=n),n.prevConsumer=e,t.consumersTail=n,!i)for(let r=t.producers;r!==void 0;r=r.nextProducer)ov(r.producer,r)}function Nf(t){let n=t.producer,e=t.nextProducer,i=t.nextConsumer,r=t.prevConsumer;if(t.nextConsumer=void 0,t.prevConsumer=void 0,i!==void 0?i.prevConsumer=r:n.consumersTail=r,r!==void 0)r.nextConsumer=i;else if(n.consumers=i,!Zr(n)){let o=n.producers;for(;o!==void 0;)o=Nf(o)}return e}function Zr(t){return t.consumerIsAlwaysLive||t.consumers!==void 0}function Ml(t){ZE?.(t)}function JE(t,n){let e=n.producersTail;if(e!==void 0){let i=n.producers;do{if(i===t)return!0;if(i===e)break;i=i.nextProducer}while(i!==void 0)}return!1}function Tl(t,n){return Object.is(t,n)}function ys(t,n){let e=Object.create(eI);e.computation=t,n!==void 0&&(e.equal=n);let i=()=>{if(Sl(e),Zi(e),e.value===bs)throw e.error;return e.value};return i[et]=e,Ml(e),i}var Dl=Symbol("UNSET"),xl=Symbol("COMPUTING"),bs=Symbol("ERRORED"),eI=Q(_({},Ki),{value:Dl,dirty:!0,error:null,equal:Tl,kind:"computed",producerMustRecompute(t){return t.value===Dl||t.value===xl},producerRecomputeValue(t){if(t.value===xl)throw new Error("");let n=t.value;t.value=xl;let e=pi(t),i,r=!1;try{i=t.computation(),K(null),r=n!==Dl&&n!==bs&&i!==bs&&t.equal(n,i)}catch(o){i=bs,t.error=o}finally{Xi(t,e)}if(r){t.value=n;return}t.value=i,t.version++}});function tI(){throw new Error}var sv=tI;function av(t){sv(t)}function Ff(t){sv=t}var nI=null;function Pf(t,n){let e=Object.create(ws);e.value=t,n!==void 0&&(e.equal=n);let i=()=>lv(e);return i[et]=e,Ml(e),[i,s=>Xr(e,s),s=>Lf(e,s)]}function lv(t){return Zi(t),t.value}function Xr(t,n){Of()||av(t),t.equal(t.value,n)||(t.value=n,iI(t))}function Lf(t,n){Of()||av(t),Xr(t,n(t.value))}var ws=Q(_({},Ki),{equal:Tl,value:void 0,kind:"signal"});function iI(t){t.version++,nv(),Af(t),nI?.(t)}var Bf=Q(_({},Ki),{consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,dirty:!0,kind:"effect"});function jf(t){if(t.dirty=!1,t.version>0&&!Kr(t))return;t.version++;let n=pi(t);try{t.cleanup(),t.fn()}finally{Xi(t,n)}}function fe(t){return typeof t=="function"}function Jr(t){let e=t(i=>{Error.call(i),i.stack=new Error().stack});return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var kl=Jr(t=>function(e){t(this),this.message=e?`${e.length} errors occurred during unsubscription:
${e.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=e});function Ji(t,n){if(t){let e=t.indexOf(n);0<=e&&t.splice(e,1)}}var pe=class t{constructor(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let n;if(!this.closed){this.closed=!0;let{_parentage:e}=this;if(e)if(this._parentage=null,Array.isArray(e))for(let o of e)o.remove(this);else e.remove(this);let{initialTeardown:i}=this;if(fe(i))try{i()}catch(o){n=o instanceof kl?o.errors:[o]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let o of r)try{cv(o)}catch(s){n=n??[],s instanceof kl?n=[...n,...s.errors]:n.push(s)}}if(n)throw new kl(n)}}add(n){var e;if(n&&n!==this)if(this.closed)cv(n);else{if(n instanceof t){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(n)}}_hasParent(n){let{_parentage:e}=this;return e===n||Array.isArray(e)&&e.includes(n)}_addParent(n){let{_parentage:e}=this;this._parentage=Array.isArray(e)?(e.push(n),e):e?[e,n]:n}_removeParent(n){let{_parentage:e}=this;e===n?this._parentage=null:Array.isArray(e)&&Ji(e,n)}remove(n){let{_finalizers:e}=this;e&&Ji(e,n),n instanceof t&&n._removeParent(this)}};pe.EMPTY=(()=>{let t=new pe;return t.closed=!0,t})();var Vf=pe.EMPTY;function Rl(t){return t instanceof pe||t&&"closed"in t&&fe(t.remove)&&fe(t.add)&&fe(t.unsubscribe)}function cv(t){fe(t)?t():t.unsubscribe()}var dn={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var eo={setTimeout(t,n,...e){let{delegate:i}=eo;return i?.setTimeout?i.setTimeout(t,n,...e):setTimeout(t,n,...e)},clearTimeout(t){let{delegate:n}=eo;return(n?.clearTimeout||clearTimeout)(t)},delegate:void 0};function Al(t){eo.setTimeout(()=>{let{onUnhandledError:n}=dn;if(n)n(t);else throw t})}function er(){}var dv=Hf("C",void 0,void 0);function uv(t){return Hf("E",void 0,t)}function fv(t){return Hf("N",t,void 0)}function Hf(t,n,e){return{kind:t,value:n,error:e}}var tr=null;function to(t){if(dn.useDeprecatedSynchronousErrorHandling){let n=!tr;if(n&&(tr={errorThrown:!1,error:null}),t(),n){let{errorThrown:e,error:i}=tr;if(tr=null,e)throw i}}else t()}function mv(t){dn.useDeprecatedSynchronousErrorHandling&&tr&&(tr.errorThrown=!0,tr.error=t)}var nr=class extends pe{constructor(n){super(),this.isStopped=!1,n?(this.destination=n,Rl(n)&&n.add(this)):this.destination=sI}static create(n,e,i){return new Un(n,e,i)}next(n){this.isStopped?Uf(fv(n),this):this._next(n)}error(n){this.isStopped?Uf(uv(n),this):(this.isStopped=!0,this._error(n))}complete(){this.isStopped?Uf(dv,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(n){this.destination.next(n)}_error(n){try{this.destination.error(n)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},rI=Function.prototype.bind;function zf(t,n){return rI.call(t,n)}var $f=class{constructor(n){this.partialObserver=n}next(n){let{partialObserver:e}=this;if(e.next)try{e.next(n)}catch(i){Ol(i)}}error(n){let{partialObserver:e}=this;if(e.error)try{e.error(n)}catch(i){Ol(i)}else Ol(n)}complete(){let{partialObserver:n}=this;if(n.complete)try{n.complete()}catch(e){Ol(e)}}},Un=class extends nr{constructor(n,e,i){super();let r;if(fe(n)||!n)r={next:n??void 0,error:e??void 0,complete:i??void 0};else{let o;this&&dn.useDeprecatedNextContext?(o=Object.create(n),o.unsubscribe=()=>this.unsubscribe(),r={next:n.next&&zf(n.next,o),error:n.error&&zf(n.error,o),complete:n.complete&&zf(n.complete,o)}):r=n}this.destination=new $f(r)}};function Ol(t){dn.useDeprecatedSynchronousErrorHandling?mv(t):Al(t)}function oI(t){throw t}function Uf(t,n){let{onStoppedNotification:e}=dn;e&&eo.setTimeout(()=>e(t,n))}var sI={closed:!0,next:er,error:oI,complete:er};var no=typeof Symbol=="function"&&Symbol.observable||"@@observable";function Mt(t){return t}function Gf(...t){return Wf(t)}function Wf(t){return t.length===0?Mt:t.length===1?t[0]:function(e){return t.reduce((i,r)=>r(i),e)}}var X=(()=>{class t{constructor(e){e&&(this._subscribe=e)}lift(e){let i=new t;return i.source=this,i.operator=e,i}subscribe(e,i,r){let o=lI(e)?e:new Un(e,i,r);return to(()=>{let{operator:s,source:a}=this;o.add(s?s.call(o,a):a?this._subscribe(o):this._trySubscribe(o))}),o}_trySubscribe(e){try{return this._subscribe(e)}catch(i){e.error(i)}}forEach(e,i){return i=hv(i),new i((r,o)=>{let s=new Un({next:a=>{try{e(a)}catch(l){o(l),s.unsubscribe()}},error:o,complete:r});this.subscribe(s)})}_subscribe(e){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(e)}[no](){return this}pipe(...e){return Wf(e)(this)}toPromise(e){return e=hv(e),new e((i,r)=>{let o;this.subscribe(s=>o=s,s=>r(s),()=>i(o))})}}return t.create=n=>new t(n),t})();function hv(t){var n;return(n=t??dn.Promise)!==null&&n!==void 0?n:Promise}function aI(t){return t&&fe(t.next)&&fe(t.error)&&fe(t.complete)}function lI(t){return t&&t instanceof nr||aI(t)&&Rl(t)}function cI(t){return fe(t?.lift)}function ae(t){return n=>{if(cI(n))return n.lift(function(e){try{return t(e,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function le(t,n,e,i,r){return new qf(t,n,e,i,r)}var qf=class extends nr{constructor(n,e,i,r,o,s){super(n),this.onFinalize=o,this.shouldUnsubscribe=s,this._next=e?function(a){try{e(a)}catch(l){n.error(l)}}:super._next,this._error=r?function(a){try{r(a)}catch(l){n.error(l)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(a){n.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:e}=this;super.unsubscribe(),!e&&((n=this.onFinalize)===null||n===void 0||n.call(this))}}};var pv=Jr(t=>function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var C=(()=>{class t extends X{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(e){let i=new Nl(this,this);return i.operator=e,i}_throwIfClosed(){if(this.closed)throw new pv}next(e){to(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(e)}})}error(e){to(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=e;let{observers:i}=this;for(;i.length;)i.shift().error(e)}})}complete(){to(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:e}=this;for(;e.length;)e.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var e;return((e=this.observers)===null||e===void 0?void 0:e.length)>0}_trySubscribe(e){return this._throwIfClosed(),super._trySubscribe(e)}_subscribe(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)}_innerSubscribe(e){let{hasError:i,isStopped:r,observers:o}=this;return i||r?Vf:(this.currentObservers=null,o.push(e),new pe(()=>{this.currentObservers=null,Ji(o,e)}))}_checkFinalizedStatuses(e){let{hasError:i,thrownError:r,isStopped:o}=this;i?e.error(r):o&&e.complete()}asObservable(){let e=new X;return e.source=this,e}}return t.create=(n,e)=>new Nl(n,e),t})(),Nl=class extends C{constructor(n,e){super(),this.destination=n,this.source=e}next(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.next)===null||i===void 0||i.call(e,n)}error(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.error)===null||i===void 0||i.call(e,n)}complete(){var n,e;(e=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||e===void 0||e.call(n)}_subscribe(n){var e,i;return(i=(e=this.source)===null||e===void 0?void 0:e.subscribe(n))!==null&&i!==void 0?i:Vf}};var $e=class extends C{constructor(n){super(),this._value=n}get value(){return this.getValue()}_subscribe(n){let e=super._subscribe(n);return!e.closed&&n.next(this._value),e}getValue(){let{hasError:n,thrownError:e,_value:i}=this;if(n)throw e;return this._throwIfClosed(),i}next(n){super.next(this._value=n)}};var Cs={now(){return(Cs.delegate||Date).now()},delegate:void 0};var _i=class extends C{constructor(n=1/0,e=1/0,i=Cs){super(),this._bufferSize=n,this._windowTime=e,this._timestampProvider=i,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=e===1/0,this._bufferSize=Math.max(1,n),this._windowTime=Math.max(1,e)}next(n){let{isStopped:e,_buffer:i,_infiniteTimeWindow:r,_timestampProvider:o,_windowTime:s}=this;e||(i.push(n),!r&&i.push(o.now()+s)),this._trimBuffer(),super.next(n)}_subscribe(n){this._throwIfClosed(),this._trimBuffer();let e=this._innerSubscribe(n),{_infiniteTimeWindow:i,_buffer:r}=this,o=r.slice();for(let s=0;s<o.length&&!n.closed;s+=i?1:2)n.next(o[s]);return this._checkFinalizedStatuses(n),e}_trimBuffer(){let{_bufferSize:n,_timestampProvider:e,_buffer:i,_infiniteTimeWindow:r}=this,o=(r?1:2)*n;if(n<1/0&&o<i.length&&i.splice(0,i.length-o),!r){let s=e.now(),a=0;for(let l=1;l<i.length&&i[l]<=s;l+=2)a=l;a&&i.splice(0,a+1)}}};var Fl=class extends pe{constructor(n,e){super()}schedule(n,e=0){return this}};var Ds={setInterval(t,n,...e){let{delegate:i}=Ds;return i?.setInterval?i.setInterval(t,n,...e):setInterval(t,n,...e)},clearInterval(t){let{delegate:n}=Ds;return(n?.clearInterval||clearInterval)(t)},delegate:void 0};var Pl=class extends Fl{constructor(n,e){super(n,e),this.scheduler=n,this.work=e,this.pending=!1}schedule(n,e=0){var i;if(this.closed)return this;this.state=n;let r=this.id,o=this.scheduler;return r!=null&&(this.id=this.recycleAsyncId(o,r,e)),this.pending=!0,this.delay=e,this.id=(i=this.id)!==null&&i!==void 0?i:this.requestAsyncId(o,this.id,e),this}requestAsyncId(n,e,i=0){return Ds.setInterval(n.flush.bind(n,this),i)}recycleAsyncId(n,e,i=0){if(i!=null&&this.delay===i&&this.pending===!1)return e;e!=null&&Ds.clearInterval(e)}execute(n,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;let i=this._execute(n,e);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(n,e){let i=!1,r;try{this.work(n)}catch(o){i=!0,r=o||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){let{id:n,scheduler:e}=this,{actions:i}=e;this.work=this.state=this.scheduler=null,this.pending=!1,Ji(i,this),n!=null&&(this.id=this.recycleAsyncId(e,n,null)),this.delay=null,super.unsubscribe()}}};var io=class t{constructor(n,e=t.now){this.schedulerActionCtor=n,this.now=e}schedule(n,e=0,i){return new this.schedulerActionCtor(this,n).schedule(i,e)}};io.now=Cs.now;var Ll=class extends io{constructor(n,e=io.now){super(n,e),this.actions=[],this._active=!1}flush(n){let{actions:e}=this;if(this._active){e.push(n);return}let i;this._active=!0;do if(i=n.execute(n.state,n.delay))break;while(n=e.shift());if(this._active=!1,i){for(;n=e.shift();)n.unsubscribe();throw i}}};var xs=new Ll(Pl),gv=xs;var Ge=new X(t=>t.complete());function Bl(t){return t&&fe(t.schedule)}function Qf(t){return t[t.length-1]}function jl(t){return fe(Qf(t))?t.pop():void 0}function In(t){return Bl(Qf(t))?t.pop():void 0}function _v(t,n){return typeof Qf(t)=="number"?t.pop():n}function bv(t,n,e,i){function r(o){return o instanceof e?o:new e(function(s){s(o)})}return new(e||(e=Promise))(function(o,s){function a(u){try{c(i.next(u))}catch(f){s(f)}}function l(u){try{c(i.throw(u))}catch(f){s(f)}}function c(u){u.done?o(u.value):r(u.value).then(a,l)}c((i=i.apply(t,n||[])).next())})}function vv(t){var n=typeof Symbol=="function"&&Symbol.iterator,e=n&&t[n],i=0;if(e)return e.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function ir(t){return this instanceof ir?(this.v=t,this):new ir(t)}function yv(t,n,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=e.apply(t,n||[]),r,o=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",s),r[Symbol.asyncIterator]=function(){return this},r;function s(h){return function(y){return Promise.resolve(y).then(h,f)}}function a(h,y){i[h]&&(r[h]=function(S){return new Promise(function(k,B){o.push([h,S,k,B])>1||l(h,S)})},y&&(r[h]=y(r[h])))}function l(h,y){try{c(i[h](y))}catch(S){m(o[0][3],S)}}function c(h){h.value instanceof ir?Promise.resolve(h.value.v).then(u,f):m(o[0][2],h)}function u(h){l("next",h)}function f(h){l("throw",h)}function m(h,y){h(y),o.shift(),o.length&&l(o[0][0],o[0][1])}}function wv(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=t[Symbol.asyncIterator],e;return n?n.call(t):(t=typeof vv=="function"?vv(t):t[Symbol.iterator](),e={},i("next"),i("throw"),i("return"),e[Symbol.asyncIterator]=function(){return this},e);function i(o){e[o]=t[o]&&function(s){return new Promise(function(a,l){s=t[o](s),r(a,l,s.done,s.value)})}}function r(o,s,a,l){Promise.resolve(l).then(function(c){o({value:c,done:a})},s)}}var Vl=t=>t&&typeof t.length=="number"&&typeof t!="function";function Hl(t){return fe(t?.then)}function zl(t){return fe(t[no])}function Ul(t){return Symbol.asyncIterator&&fe(t?.[Symbol.asyncIterator])}function $l(t){return new TypeError(`You provided ${t!==null&&typeof t=="object"?"an invalid object":`'${t}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function dI(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Gl=dI();function Wl(t){return fe(t?.[Gl])}function ql(t){return yv(this,arguments,function*(){let e=t.getReader();try{for(;;){let{value:i,done:r}=yield ir(e.read());if(r)return yield ir(void 0);yield yield ir(i)}}finally{e.releaseLock()}})}function Ql(t){return fe(t?.getReader)}function Se(t){if(t instanceof X)return t;if(t!=null){if(zl(t))return uI(t);if(Vl(t))return fI(t);if(Hl(t))return mI(t);if(Ul(t))return Cv(t);if(Wl(t))return hI(t);if(Ql(t))return pI(t)}throw $l(t)}function uI(t){return new X(n=>{let e=t[no]();if(fe(e.subscribe))return e.subscribe(n);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function fI(t){return new X(n=>{for(let e=0;e<t.length&&!n.closed;e++)n.next(t[e]);n.complete()})}function mI(t){return new X(n=>{t.then(e=>{n.closed||(n.next(e),n.complete())},e=>n.error(e)).then(null,Al)})}function hI(t){return new X(n=>{for(let e of t)if(n.next(e),n.closed)return;n.complete()})}function Cv(t){return new X(n=>{gI(t,n).catch(e=>n.error(e))})}function pI(t){return Cv(ql(t))}function gI(t,n){var e,i,r,o;return bv(this,void 0,void 0,function*(){try{for(e=wv(t);i=yield e.next(),!i.done;){let s=i.value;if(n.next(s),n.closed)return}}catch(s){r={error:s}}finally{try{i&&!i.done&&(o=e.return)&&(yield o.call(e))}finally{if(r)throw r.error}}n.complete()})}function Ft(t,n,e,i=0,r=!1){let o=n.schedule(function(){e(),r?t.add(this.schedule(null,i)):this.unsubscribe()},i);if(t.add(o),!r)return o}function Yl(t,n=0){return ae((e,i)=>{e.subscribe(le(i,r=>Ft(i,t,()=>i.next(r),n),()=>Ft(i,t,()=>i.complete(),n),r=>Ft(i,t,()=>i.error(r),n)))})}function Kl(t,n=0){return ae((e,i)=>{i.add(t.schedule(()=>e.subscribe(i),n))})}function Dv(t,n){return Se(t).pipe(Kl(n),Yl(n))}function xv(t,n){return Se(t).pipe(Kl(n),Yl(n))}function Ev(t,n){return new X(e=>{let i=0;return n.schedule(function(){i===t.length?e.complete():(e.next(t[i++]),e.closed||this.schedule())})})}function Iv(t,n){return new X(e=>{let i;return Ft(e,n,()=>{i=t[Gl](),Ft(e,n,()=>{let r,o;try{({value:r,done:o}=i.next())}catch(s){e.error(s);return}o?e.complete():e.next(r)},0,!0)}),()=>fe(i?.return)&&i.return()})}function Zl(t,n){if(!t)throw new Error("Iterable cannot be null");return new X(e=>{Ft(e,n,()=>{let i=t[Symbol.asyncIterator]();Ft(e,n,()=>{i.next().then(r=>{r.done?e.complete():e.next(r.value)})},0,!0)})})}function Sv(t,n){return Zl(ql(t),n)}function Mv(t,n){if(t!=null){if(zl(t))return Dv(t,n);if(Vl(t))return Ev(t,n);if(Hl(t))return xv(t,n);if(Ul(t))return Zl(t,n);if(Wl(t))return Iv(t,n);if(Ql(t))return Sv(t,n)}throw $l(t)}function Ae(t,n){return n?Mv(t,n):Se(t)}function V(...t){let n=In(t);return Ae(t,n)}function Es(t,n){let e=fe(t)?t:()=>t,i=r=>r.error(e());return new X(n?r=>n.schedule(i,0,r):i)}function Is(t){return!!t&&(t instanceof X||fe(t.lift)&&fe(t.subscribe))}var rr=Jr(t=>function(){t(this),this.name="EmptyError",this.message="no elements in sequence"});function Tv(t){return t instanceof Date&&!isNaN(t)}function N(t,n){return ae((e,i)=>{let r=0;e.subscribe(le(i,o=>{i.next(t.call(n,o,r++))}))})}var{isArray:_I}=Array;function vI(t,n){return _I(n)?t(...n):t(n)}function Xl(t){return N(n=>vI(t,n))}var{isArray:bI}=Array,{getPrototypeOf:yI,prototype:wI,keys:CI}=Object;function Jl(t){if(t.length===1){let n=t[0];if(bI(n))return{args:n,keys:null};if(DI(n)){let e=CI(n);return{args:e.map(i=>n[i]),keys:e}}}return{args:t,keys:null}}function DI(t){return t&&typeof t=="object"&&yI(t)===wI}function ec(t,n){return t.reduce((e,i,r)=>(e[i]=n[r],e),{})}function or(...t){let n=In(t),e=jl(t),{args:i,keys:r}=Jl(t);if(i.length===0)return Ae([],n);let o=new X(xI(i,n,r?s=>ec(r,s):Mt));return e?o.pipe(Xl(e)):o}function xI(t,n,e=Mt){return i=>{kv(n,()=>{let{length:r}=t,o=new Array(r),s=r,a=r;for(let l=0;l<r;l++)kv(n,()=>{let c=Ae(t[l],n),u=!1;c.subscribe(le(i,f=>{o[l]=f,u||(u=!0,a--),a||i.next(e(o.slice()))},()=>{--s||i.complete()}))},i)},i)}}function kv(t,n,e){t?Ft(e,t,n):n()}function Rv(t,n,e,i,r,o,s,a){let l=[],c=0,u=0,f=!1,m=()=>{f&&!l.length&&!c&&n.complete()},h=S=>c<i?y(S):l.push(S),y=S=>{o&&n.next(S),c++;let k=!1;Se(e(S,u++)).subscribe(le(n,B=>{r?.(B),o?h(B):n.next(B)},()=>{k=!0},void 0,()=>{if(k)try{for(c--;l.length&&c<i;){let B=l.shift();s?Ft(n,s,()=>y(B)):y(B)}m()}catch(B){n.error(B)}}))};return t.subscribe(le(n,h,()=>{f=!0,m()})),()=>{a?.()}}function Tt(t,n,e=1/0){return fe(n)?Tt((i,r)=>N((o,s)=>n(i,o,r,s))(Se(t(i,r))),e):(typeof n=="number"&&(e=n),ae((i,r)=>Rv(i,r,t,e)))}function tc(t=1/0){return Tt(Mt,t)}function Av(){return tc(1)}function vi(...t){return Av()(Ae(t,In(t)))}function sr(t){return new X(n=>{Se(t()).subscribe(n)})}function $n(...t){let n=jl(t),{args:e,keys:i}=Jl(t),r=new X(o=>{let{length:s}=e;if(!s){o.complete();return}let a=new Array(s),l=s,c=s;for(let u=0;u<s;u++){let f=!1;Se(e[u]).subscribe(le(o,m=>{f||(f=!0,c--),a[u]=m},()=>l--,void 0,()=>{(!l||!f)&&(c||o.next(i?ec(i,a):a),o.complete())}))}});return n?r.pipe(Xl(n)):r}function nc(t=0,n,e=gv){let i=-1;return n!=null&&(Bl(n)?e=n:i=n),new X(r=>{let o=Tv(t)?+t-e.now():t;o<0&&(o=0);let s=0;return e.schedule(function(){r.closed||(r.next(s++),0<=i?this.schedule(void 0,i):r.complete())},o)})}function Ut(...t){let n=In(t),e=_v(t,1/0),i=t;return i.length?i.length===1?Se(i[0]):tc(e)(Ae(i,n)):Ge}var Gn=new X(er);function he(t,n){return ae((e,i)=>{let r=0;e.subscribe(le(i,o=>t.call(n,o,r++)&&i.next(o)))})}function Ov(t){return ae((n,e)=>{let i=!1,r=null,o=null,s=!1,a=()=>{if(o?.unsubscribe(),o=null,i){i=!1;let c=r;r=null,e.next(c)}s&&e.complete()},l=()=>{o=null,s&&e.complete()};n.subscribe(le(e,c=>{i=!0,r=c,o||Se(t(c)).subscribe(o=le(e,a,l))},()=>{s=!0,(!i||!o||o.closed)&&e.complete()}))})}function ic(t,n=xs){return Ov(()=>nc(t,n))}function Sn(t){return ae((n,e)=>{let i=null,r=!1,o;i=n.subscribe(le(e,void 0,void 0,s=>{o=Se(t(s,Sn(t)(n))),i?(i.unsubscribe(),i=null,o.subscribe(e)):r=!0})),r&&(i.unsubscribe(),i=null,o.subscribe(e))})}function ro(t,n){return fe(n)?Tt(t,n,1):Tt(t,1)}function ar(t,n=xs){return ae((e,i)=>{let r=null,o=null,s=null,a=()=>{if(r){r.unsubscribe(),r=null;let c=o;o=null,i.next(c)}};function l(){let c=s+t,u=n.now();if(u<c){r=this.schedule(void 0,c-u),i.add(r);return}a()}e.subscribe(le(i,c=>{o=c,s=n.now(),r||(r=n.schedule(l,t),i.add(r))},()=>{a(),i.complete()},void 0,()=>{o=r=null}))})}function Nv(t){return ae((n,e)=>{let i=!1;n.subscribe(le(e,r=>{i=!0,e.next(r)},()=>{i||e.next(t),e.complete()}))})}function Me(t){return t<=0?()=>Ge:ae((n,e)=>{let i=0;n.subscribe(le(e,r=>{++i<=t&&(e.next(r),t<=i&&e.complete())}))})}function rc(t){return N(()=>t)}function oc(t,n=Mt){return t=t??EI,ae((e,i)=>{let r,o=!0;e.subscribe(le(i,s=>{let a=n(s);(o||!t(r,a))&&(o=!1,r=a,i.next(s))}))})}function EI(t,n){return t===n}function Fv(t=II){return ae((n,e)=>{let i=!1;n.subscribe(le(e,r=>{i=!0,e.next(r)},()=>i?e.complete():e.error(t())))})}function II(){return new rr}function bi(t){return ae((n,e)=>{try{n.subscribe(e)}finally{e.add(t)}})}function Wn(t,n){let e=arguments.length>=2;return i=>i.pipe(t?he((r,o)=>t(r,o,i)):Mt,Me(1),e?Nv(n):Fv(()=>new rr))}function sc(t){return t<=0?()=>Ge:ae((n,e)=>{let i=[];n.subscribe(le(e,r=>{i.push(r),t<i.length&&i.shift()},()=>{for(let r of i)e.next(r);e.complete()},void 0,()=>{i=null}))})}function ac(){return ae((t,n)=>{let e,i=!1;t.subscribe(le(n,r=>{let o=e;e=r,i&&n.next([o,r]),i=!0}))})}function Yf(t=1/0){let n;t&&typeof t=="object"?n=t:n={count:t};let{count:e=1/0,delay:i,resetOnSuccess:r=!1}=n;return e<=0?Mt:ae((o,s)=>{let a=0,l,c=()=>{let u=!1;l=o.subscribe(le(s,f=>{r&&(a=0),s.next(f)},void 0,f=>{if(a++<e){let m=()=>{l?(l.unsubscribe(),l=null,c()):u=!0};if(i!=null){let h=typeof i=="number"?nc(i):Se(i(f,a)),y=le(s,()=>{y.unsubscribe(),m()},()=>{s.complete()});h.subscribe(y)}else m()}else s.error(f)})),u&&(l.unsubscribe(),l=null,c())};c()})}function Ss(t={}){let{connector:n=()=>new C,resetOnError:e=!0,resetOnComplete:i=!0,resetOnRefCountZero:r=!0}=t;return o=>{let s,a,l,c=0,u=!1,f=!1,m=()=>{a?.unsubscribe(),a=void 0},h=()=>{m(),s=l=void 0,u=f=!1},y=()=>{let S=s;h(),S?.unsubscribe()};return ae((S,k)=>{c++,!f&&!u&&m();let B=l=l??n();k.add(()=>{c--,c===0&&!f&&!u&&(a=Kf(y,r))}),B.subscribe(k),!s&&c>0&&(s=new Un({next:we=>B.next(we),error:we=>{f=!0,m(),a=Kf(h,e,we),B.error(we)},complete:()=>{u=!0,m(),a=Kf(h,i),B.complete()}}),Se(S).subscribe(s))})(o)}}function Kf(t,n,...e){if(n===!0){t();return}if(n===!1)return;let i=new Un({next:()=>{i.unsubscribe(),t()}});return Se(n(...e)).subscribe(i)}function lr(t,n,e){let i,r=!1;return t&&typeof t=="object"?{bufferSize:i=1/0,windowTime:n=1/0,refCount:r=!1,scheduler:e}=t:i=t??1/0,Ss({connector:()=>new _i(i,n,e),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:r})}function Ms(t){return he((n,e)=>t<=e)}function Ze(...t){let n=In(t);return ae((e,i)=>{(n?vi(t,e,n):vi(t,e)).subscribe(i)})}function ye(t,n){return ae((e,i)=>{let r=null,o=0,s=!1,a=()=>s&&!r&&i.complete();e.subscribe(le(i,l=>{r?.unsubscribe();let c=0,u=o++;Se(t(l,u)).subscribe(r=le(i,f=>i.next(n?n(l,f,u,c++):f),()=>{r=null,a()}))},()=>{s=!0,a()}))})}function ce(t){return ae((n,e)=>{Se(t).subscribe(le(e,()=>e.complete(),er)),!e.closed&&n.subscribe(e)})}function Zf(t,n=!1){return ae((e,i)=>{let r=0;e.subscribe(le(i,o=>{let s=t(o,r++);(s||n)&&i.next(o),!s&&i.complete()}))})}function We(t,n,e){let i=fe(t)||n||e?{next:t,error:n,complete:e}:t;return i?ae((r,o)=>{var s;(s=i.subscribe)===null||s===void 0||s.call(i);let a=!0;r.subscribe(le(o,l=>{var c;(c=i.next)===null||c===void 0||c.call(i,l),o.next(l)},()=>{var l;a=!1,(l=i.complete)===null||l===void 0||l.call(i),o.complete()},l=>{var c;a=!1,(c=i.error)===null||c===void 0||c.call(i,l),o.error(l)},()=>{var l,c;a&&((l=i.unsubscribe)===null||l===void 0||l.call(i)),(c=i.finalize)===null||c===void 0||c.call(i)}))}):Mt}var Xf;function lc(){return Xf}function Mn(t){let n=Xf;return Xf=t,n}var Pv=Symbol("NotFound");function oo(t){return t===Pv||t?.name==="\u0275NotFound"}function Lv(t){let n=K(null);try{return t()}finally{K(n)}}var pc="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",D=class extends Error{code;constructor(n,e){super(kn(n,e)),this.code=n}};function SI(t){return`NG0${Math.abs(t)}`}function kn(t,n){return`${SI(t)}${n?": "+n:""}`}var Di=globalThis;function De(t){for(let n in t)if(t[n]===De)return n;throw Error("")}function zv(t,n){for(let e in n)n.hasOwnProperty(e)&&!t.hasOwnProperty(e)&&(t[e]=n[e])}function Fs(t){if(typeof t=="string")return t;if(Array.isArray(t))return`[${t.map(Fs).join(", ")}]`;if(t==null)return""+t;let n=t.overriddenName||t.name;if(n)return`${n}`;let e=t.toString();if(e==null)return""+e;let i=e.indexOf(`
`);return i>=0?e.slice(0,i):e}function gc(t,n){return t?n?`${t} ${n}`:t:n||""}var MI=De({__forward_ref__:De});function un(t){return t.__forward_ref__=un,t}function _t(t){return um(t)?t():t}function um(t){return typeof t=="function"&&t.hasOwnProperty(MI)&&t.__forward_ref__===un}function w(t){return{token:t.token,providedIn:t.providedIn||null,factory:t.factory,value:void 0}}function I(t){return{providers:t.providers||[],imports:t.imports||[]}}function Ps(t){return TI(t,_c)}function fm(t){return Ps(t)!==null}function TI(t,n){return t.hasOwnProperty(n)&&t[n]||null}function kI(t){let n=t?.[_c]??null;return n||null}function em(t){return t&&t.hasOwnProperty(dc)?t[dc]:null}var _c=De({\u0275prov:De}),dc=De({\u0275inj:De}),v=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(n,e){this._desc=n,this.\u0275prov=void 0,typeof e=="number"?this.__NG_ELEMENT_ID__=e:e!==void 0&&(this.\u0275prov=w({token:this,providedIn:e.providedIn||"root",factory:e.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function mm(t){return t&&!!t.\u0275providers}var Ls=De({\u0275cmp:De}),Bs=De({\u0275dir:De}),hm=De({\u0275pipe:De}),pm=De({\u0275mod:De}),ks=De({\u0275fac:De}),mr=De({__NG_ELEMENT_ID__:De}),Bv=De({__NG_ENV_ID__:De});function gm(t){return vc(t,"@NgModule"),t[pm]||null}function Qn(t){return vc(t,"@Component"),t[Ls]||null}function _m(t){return vc(t,"@Directive"),t[Bs]||null}function Uv(t){return vc(t,"@Pipe"),t[hm]||null}function vc(t,n){if(t==null)throw new D(-919,!1)}function hr(t){return typeof t=="string"?t:t==null?"":String(t)}var $v=De({ngErrorCode:De}),RI=De({ngErrorMessage:De}),AI=De({ngTokenPath:De});function vm(t,n){return Gv("",-200,n)}function bc(t,n){throw new D(-201,!1)}function Gv(t,n,e){let i=new D(n,t);return i[$v]=n,i[RI]=t,e&&(i[AI]=e),i}function OI(t){return t[$v]}var tm;function Wv(){return tm}function kt(t){let n=tm;return tm=t,n}function bm(t,n,e){let i=Ps(t);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(e&8)return null;if(n!==void 0)return n;bc(t,"")}var NI={},cr=NI,FI="__NG_DI_FLAG__",nm=class{injector;constructor(n){this.injector=n}retrieve(n,e){let i=dr(e)||0;try{return this.injector.get(n,i&8?null:cr,i)}catch(r){if(oo(r))return r;throw r}}};function PI(t,n=0){let e=lc();if(e===void 0)throw new D(-203,!1);if(e===null)return bm(t,void 0,n);{let i=LI(n),r=e.retrieve(t,i);if(oo(r)){if(i.optional)return null;throw r}return r}}function R(t,n=0){return(Wv()||PI)(_t(t),n)}function d(t,n){return R(t,dr(n))}function dr(t){return typeof t>"u"||typeof t=="number"?t:0|(t.optional&&8)|(t.host&&1)|(t.self&&2)|(t.skipSelf&&4)}function LI(t){return{optional:!!(t&8),host:!!(t&1),self:!!(t&2),skipSelf:!!(t&4)}}function im(t){let n=[];for(let e=0;e<t.length;e++){let i=_t(t[e]);if(Array.isArray(i)){if(i.length===0)throw new D(900,!1);let r,o=0;for(let s=0;s<i.length;s++){let a=i[s],l=BI(a);typeof l=="number"?l===-1?r=a.token:o|=l:r=a}n.push(R(r,o))}else n.push(R(i))}return n}function BI(t){return t[FI]}function yi(t,n){let e=t.hasOwnProperty(ks);return e?t[ks]:null}function qv(t,n,e){if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(e&&(r=e(r),o=e(o)),o!==r)return!1}return!0}function Qv(t){return t.flat(Number.POSITIVE_INFINITY)}function yc(t,n){t.forEach(e=>Array.isArray(e)?yc(e,n):n(e))}function ym(t,n,e){n>=t.length?t.push(e):t.splice(n,0,e)}function js(t,n){return n>=t.length-1?t.pop():t.splice(n,1)[0]}function Yv(t,n){let e=[];for(let i=0;i<t;i++)e.push(n);return e}function Kv(t,n,e,i){let r=t.length;if(r==n)t.push(e,i);else if(r===1)t.push(i,t[0]),t[0]=e;else{for(r--,t.push(t[r-1],t[r]);r>n;){let o=r-2;t[r]=t[o],r--}t[n]=e,t[n+1]=i}}function wc(t,n,e){let i=ao(t,n);return i>=0?t[i|1]=e:(i=~i,Kv(t,i,n,e)),i}function Cc(t,n){let e=ao(t,n);if(e>=0)return t[e|1]}function ao(t,n){return jI(t,n,1)}function jI(t,n,e){let i=0,r=t.length>>e;for(;r!==i;){let o=i+(r-i>>1),s=t[o<<e];if(n===s)return o<<e;s>n?r=o:i=o+1}return~(r<<e)}var xi={},Dt=[],pr=new v(""),wm=new v("",-1),Cm=new v(""),Rs=class{get(n,e=cr){if(e===cr){let r=Gv("",-201);throw r.name="\u0275NotFound",r}return e}};function vt(t){return{\u0275providers:t}}function Dc(...t){return{\u0275providers:Dm(!0,t),\u0275fromNgModule:!0}}function Dm(t,...n){let e=[],i=new Set,r,o=s=>{e.push(s)};return yc(n,s=>{let a=s;uc(a,o,[],i)&&(r||=[],r.push(a))}),r!==void 0&&Zv(r,o),e}function Zv(t,n){for(let e=0;e<t.length;e++){let{ngModule:i,providers:r}=t[e];xm(r,o=>{n(o,i)})}}function uc(t,n,e,i){if(t=_t(t),!t)return!1;let r=null,o=em(t),s=!o&&Qn(t);if(!o&&!s){let l=t.ngModule;if(o=em(l),o)r=l;else return!1}else{if(s&&!s.standalone)return!1;r=t}let a=i.has(r);if(s){if(a)return!1;if(i.add(r),s.dependencies){let l=typeof s.dependencies=="function"?s.dependencies():s.dependencies;for(let c of l)uc(c,n,e,i)}}else if(o){if(o.imports!=null&&!a){i.add(r);let c;yc(o.imports,u=>{uc(u,n,e,i)&&(c||=[],c.push(u))}),c!==void 0&&Zv(c,n)}if(!a){let c=yi(r)||(()=>new r);n({provide:r,useFactory:c,deps:Dt},r),n({provide:Cm,useValue:r,multi:!0},r),n({provide:pr,useValue:()=>R(r),multi:!0},r)}let l=o.providers;if(l!=null&&!a){let c=t;xm(l,u=>{n(u,c)})}}else return!1;return r!==t&&t.providers!==void 0}function xm(t,n){for(let e of t)mm(e)&&(e=e.\u0275providers),Array.isArray(e)?xm(e,n):n(e)}var VI=De({provide:String,useValue:De});function Xv(t){return t!==null&&typeof t=="object"&&VI in t}function HI(t){return!!(t&&t.useExisting)}function zI(t){return!!(t&&t.useFactory)}function ur(t){return typeof t=="function"}function Jv(t){return!!t.useClass}var Vs=new v(""),cc={},jv={},Jf;function lo(){return Jf===void 0&&(Jf=new Rs),Jf}var Te=class{},fr=class extends Te{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(n,e,i,r){super(),this.parent=e,this.source=i,this.scopes=r,om(n,s=>this.processProvider(s)),this.records.set(wm,so(void 0,this)),r.has("environment")&&this.records.set(Te,so(void 0,this));let o=this.records.get(Vs);o!=null&&typeof o.value=="string"&&this.scopes.add(o.value),this.injectorDefTypes=new Set(this.get(Cm,Dt,{self:!0}))}retrieve(n,e){let i=dr(e)||0;try{return this.get(n,cr,i)}catch(r){if(oo(r))return r;throw r}}destroy(){Ts(this),this._destroyed=!0;let n=K(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let e=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of e)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),K(n)}}onDestroy(n){return Ts(this),this._onDestroyHooks.push(n),()=>this.removeOnDestroy(n)}runInContext(n){Ts(this);let e=Mn(this),i=kt(void 0),r;try{return n()}finally{Mn(e),kt(i)}}get(n,e=cr,i){if(Ts(this),n.hasOwnProperty(Bv))return n[Bv](this);let r=dr(i),o,s=Mn(this),a=kt(void 0);try{if(!(r&4)){let c=this.records.get(n);if(c===void 0){let u=qI(n)&&Ps(n);u&&this.injectableDefInScope(u)?c=so(rm(n),cc):c=null,this.records.set(n,c)}if(c!=null)return this.hydrate(n,c,r)}let l=r&2?lo():this.parent;return e=r&8&&e===cr?null:e,l.get(n,e)}catch(l){let c=OI(l);throw c===-200||c===-201?new D(c,null):l}finally{kt(a),Mn(s)}}resolveInjectorInitializers(){let n=K(null),e=Mn(this),i=kt(void 0),r;try{let o=this.get(pr,Dt,{self:!0});for(let s of o)s()}finally{Mn(e),kt(i),K(n)}}toString(){return"R3Injector[...]"}processProvider(n){n=_t(n);let e=ur(n)?n:_t(n&&n.provide),i=$I(n);if(!ur(n)&&n.multi===!0){let r=this.records.get(e);r||(r=so(void 0,cc,!0),r.factory=()=>im(r.multi),this.records.set(e,r)),e=n,r.multi.push(n)}this.records.set(e,i)}hydrate(n,e,i){let r=K(null);try{if(e.value===jv)throw vm("");return e.value===cc&&(e.value=jv,e.value=e.factory(void 0,i)),typeof e.value=="object"&&e.value&&WI(e.value)&&this._ngOnDestroyHooks.add(e.value),e.value}finally{K(r)}}injectableDefInScope(n){if(!n.providedIn)return!1;let e=_t(n.providedIn);return typeof e=="string"?e==="any"||this.scopes.has(e):this.injectorDefTypes.has(e)}removeOnDestroy(n){let e=this._onDestroyHooks.indexOf(n);e!==-1&&this._onDestroyHooks.splice(e,1)}};function rm(t){let n=Ps(t),e=n!==null?n.factory:yi(t);if(e!==null)return e;if(t instanceof v)throw new D(-204,!1);if(t instanceof Function)return UI(t);throw new D(-204,!1)}function UI(t){if(t.length>0)throw new D(-204,!1);let e=kI(t);return e!==null?()=>e.factory(t):()=>new t}function $I(t){if(Xv(t))return so(void 0,t.useValue);{let n=Em(t);return so(n,cc)}}function Em(t,n,e){let i;if(ur(t)){let r=_t(t);return yi(r)||rm(r)}else if(Xv(t))i=()=>_t(t.useValue);else if(zI(t))i=()=>t.useFactory(...im(t.deps||[]));else if(HI(t))i=(r,o)=>R(_t(t.useExisting),o!==void 0&&o&8?8:void 0);else{let r=_t(t&&(t.useClass||t.provide));if(GI(t))i=()=>new r(...im(t.deps));else return yi(r)||rm(r)}return i}function Ts(t){if(t.destroyed)throw new D(-205,!1)}function so(t,n,e=!1){return{factory:t,value:n,multi:e?[]:void 0}}function GI(t){return!!t.deps}function WI(t){return t!==null&&typeof t=="object"&&typeof t.ngOnDestroy=="function"}function qI(t){return typeof t=="function"||typeof t=="object"&&t.ngMetadataName==="InjectionToken"}function om(t,n){for(let e of t)Array.isArray(e)?om(e,n):e&&mm(e)?om(e.\u0275providers,n):n(e)}function nt(t,n){let e;t instanceof fr?(Ts(t),e=t):e=new nm(t);let i,r=Mn(e),o=kt(void 0);try{return n()}finally{Mn(r),kt(o)}}function eb(){return Wv()!==void 0||lc()!=null}var fn=0,Y=1,ie=2,tt=3,Qt=4,Rt=5,gr=6,co=7,qe=8,Yn=9,mn=10,Oe=11,uo=12,Im=13,_r=14,At=15,Ei=16,vr=17,Rn=18,Kn=19,Sm=20,qn=21,xc=22,wi=23,$t=24,br=25,Ii=26,je=27,tb=1,Mm=6,Si=7,Hs=8,yr=9,ze=10;function Zn(t){return Array.isArray(t)&&typeof t[tb]=="object"}function hn(t){return Array.isArray(t)&&t[tb]===!0}function Tm(t){return(t.flags&4)!==0}function An(t){return t.componentOffset>-1}function fo(t){return(t.flags&1)===1}function On(t){return!!t.template}function mo(t){return(t[ie]&512)!==0}function wr(t){return(t[ie]&256)===256}var km="svg",nb="math";function Yt(t){for(;Array.isArray(t);)t=t[fn];return t}function Rm(t,n){return Yt(n[t])}function Kt(t,n){return Yt(n[t.index])}function Ec(t,n){return t.data[n]}function Am(t,n){return t[n]}function Om(t,n,e,i){e>=t.data.length&&(t.data[e]=null,t.blueprint[e]=null),n[e]=i}function Zt(t,n){let e=n[t];return Zn(e)?e:e[fn]}function ib(t){return(t[ie]&4)===4}function Ic(t){return(t[ie]&128)===128}function rb(t){return hn(t[tt])}function Gt(t,n){return n==null?null:t[n]}function Nm(t){t[vr]=0}function Fm(t){t[ie]&1024||(t[ie]|=1024,Ic(t)&&Cr(t))}function ob(t,n){for(;t>0;)n=n[_r],t--;return n}function zs(t){return!!(t[ie]&9216||t[$t]?.dirty)}function Sc(t){t[mn].changeDetectionScheduler?.notify(8),t[ie]&64&&(t[ie]|=1024),zs(t)&&Cr(t)}function Cr(t){t[mn].changeDetectionScheduler?.notify(0);let n=Ci(t);for(;n!==null&&!(n[ie]&8192||(n[ie]|=8192,!Ic(n)));)n=Ci(n)}function Pm(t,n){if(wr(t))throw new D(911,!1);t[qn]===null&&(t[qn]=[]),t[qn].push(n)}function sb(t,n){if(t[qn]===null)return;let e=t[qn].indexOf(n);e!==-1&&t[qn].splice(e,1)}function Ci(t){let n=t[tt];return hn(n)?n[tt]:n}function Lm(t){return t[co]??=[]}function Bm(t){return t.cleanup??=[]}function ab(t,n,e,i){let r=Lm(n);r.push(e),t.firstCreatePass&&Bm(t).push(i,r.length-1)}var me={lFrame:bb(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var sm=!1;function lb(){return me.lFrame.elementDepthCount}function cb(){me.lFrame.elementDepthCount++}function jm(){me.lFrame.elementDepthCount--}function Mc(){return me.bindingsEnabled}function Vm(){return me.skipHydrationRootTNode!==null}function Hm(t){return me.skipHydrationRootTNode===t}function zm(){me.skipHydrationRootTNode=null}function te(){return me.lFrame.lView}function Fe(){return me.lFrame.tView}function Pe(t){return me.lFrame.contextLView=t,t[qe]}function Le(t){return me.lFrame.contextLView=null,t}function ft(){let t=Um();for(;t!==null&&t.type===64;)t=t.parent;return t}function Um(){return me.lFrame.currentTNode}function db(){let t=me.lFrame,n=t.currentTNode;return t.isParent?n:n.parent}function ho(t,n){let e=me.lFrame;e.currentTNode=t,e.isParent=n}function $m(){return me.lFrame.isParent}function Gm(){me.lFrame.isParent=!1}function ub(){return me.lFrame.contextLView}function Wm(){return sm}function As(t){let n=sm;return sm=t,n}function qm(){let t=me.lFrame,n=t.bindingRootIndex;return n===-1&&(n=t.bindingRootIndex=t.tView.bindingStartIndex),n}function fb(){return me.lFrame.bindingIndex}function mb(t){return me.lFrame.bindingIndex=t}function Mi(){return me.lFrame.bindingIndex++}function Tc(t){let n=me.lFrame,e=n.bindingIndex;return n.bindingIndex=n.bindingIndex+t,e}function hb(){return me.lFrame.inI18n}function pb(t,n){let e=me.lFrame;e.bindingIndex=e.bindingRootIndex=t,kc(n)}function gb(){return me.lFrame.currentDirectiveIndex}function kc(t){me.lFrame.currentDirectiveIndex=t}function _b(t){let n=me.lFrame.currentDirectiveIndex;return n===-1?null:t[n]}function Rc(){return me.lFrame.currentQueryIndex}function Us(t){me.lFrame.currentQueryIndex=t}function QI(t){let n=t[Y];return n.type===2?n.declTNode:n.type===1?t[Rt]:null}function Qm(t,n,e){if(e&4){let r=n,o=t;for(;r=r.parent,r===null&&!(e&1);)if(r=QI(o),r===null||(o=o[_r],r.type&10))break;if(r===null)return!1;n=r,t=o}let i=me.lFrame=vb();return i.currentTNode=n,i.lView=t,!0}function Ac(t){let n=vb(),e=t[Y];me.lFrame=n,n.currentTNode=e.firstChild,n.lView=t,n.tView=e,n.contextLView=t,n.bindingIndex=e.bindingStartIndex,n.inI18n=!1}function vb(){let t=me.lFrame,n=t===null?null:t.child;return n===null?bb(t):n}function bb(t){let n={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:t,child:null,inI18n:!1};return t!==null&&(t.child=n),n}function yb(){let t=me.lFrame;return me.lFrame=t.parent,t.currentTNode=null,t.lView=null,t}var Ym=yb;function Oc(){let t=yb();t.isParent=!0,t.tView=null,t.selectedIndex=-1,t.contextLView=null,t.elementDepthCount=0,t.currentDirectiveIndex=-1,t.currentNamespace=null,t.bindingRootIndex=-1,t.bindingIndex=-1,t.currentQueryIndex=0}function wb(t){return(me.lFrame.contextLView=ob(t,me.lFrame.contextLView))[qe]}function Nn(){return me.lFrame.selectedIndex}function Ti(t){me.lFrame.selectedIndex=t}function $s(){let t=me.lFrame;return Ec(t.tView,t.selectedIndex)}function Lt(){me.lFrame.currentNamespace=km}function Gs(){YI()}function YI(){me.lFrame.currentNamespace=null}function Km(){return me.lFrame.currentNamespace}var Cb=!0;function Nc(){return Cb}function Ws(t){Cb=t}function am(t,n=null,e=null,i){let r=Zm(t,n,e,i);return r.resolveInjectorInitializers(),r}function Zm(t,n=null,e=null,i,r=new Set){let o=[e||Dt,Dc(t)],s;return new fr(o,n||lo(),s||null,r)}var H=class t{static THROW_IF_NOT_FOUND=cr;static NULL=new Rs;static create(n,e){if(Array.isArray(n))return am({name:""},e,n,"");{let i=n.name??"";return am({name:i},n.parent,n.providers,i)}}static \u0275prov=w({token:t,providedIn:"any",factory:()=>R(wm)});static __NG_ELEMENT_ID__=-1},z=new v(""),mt=(()=>{class t{static __NG_ELEMENT_ID__=KI;static __NG_ENV_ID__=e=>e}return t})(),fc=class extends mt{_lView;constructor(n){super(),this._lView=n}get destroyed(){return wr(this._lView)}onDestroy(n){let e=this._lView;return Pm(e,n),()=>sb(e,n)}};function KI(){return new fc(te())}var Db=!1,xb=new v(""),Xn=(()=>{class t{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new $e(!1);debugTaskTracker=d(xb,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new X(e=>{e.next(!1),e.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let e=this.taskId++;return this.pendingTasks.add(e),this.debugTaskTracker?.add(e),e}has(e){return this.pendingTasks.has(e)}remove(e){this.pendingTasks.delete(e),this.debugTaskTracker?.remove(e),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=w({token:t,providedIn:"root",factory:()=>new t})}return t})(),lm=class extends C{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(n=!1){super(),this.__isAsync=n,eb()&&(this.destroyRef=d(mt,{optional:!0})??void 0,this.pendingTasks=d(Xn,{optional:!0})??void 0)}emit(n){let e=K(null);try{super.next(n)}finally{K(e)}}subscribe(n,e,i){let r=n,o=e||(()=>null),s=i;if(n&&typeof n=="object"){let l=n;r=l.next?.bind(l),o=l.error?.bind(l),s=l.complete?.bind(l)}this.__isAsync&&(o=this.wrapInTimeout(o),r&&(r=this.wrapInTimeout(r)),s&&(s=this.wrapInTimeout(s)));let a=super.subscribe({next:r,error:o,complete:s});return n instanceof pe&&n.add(a),a}wrapInTimeout(n){return e=>{let i=this.pendingTasks?.add();setTimeout(()=>{try{n(e)}finally{i!==void 0&&this.pendingTasks?.remove(i)}})}}},q=lm;function mc(...t){}function Xm(t){let n,e;function i(){t=mc;try{e!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(e),n!==void 0&&clearTimeout(n)}catch{}}return n=setTimeout(()=>{t(),i()}),typeof requestAnimationFrame=="function"&&(e=requestAnimationFrame(()=>{t(),i()})),()=>i()}function Eb(t){return queueMicrotask(()=>t()),()=>{t=mc}}var Jm="isAngularZone",Os=Jm+"_ID",ZI=0,L=class t{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new q(!1);onMicrotaskEmpty=new q(!1);onStable=new q(!1);onError=new q(!1);constructor(n){let{enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:o=Db}=n;if(typeof Zone>"u")throw new D(908,!1);Zone.assertZonePatched();let s=this;s._nesting=0,s._outer=s._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(s._inner=s._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(s._inner=s._inner.fork(Zone.longStackTraceZoneSpec)),s.shouldCoalesceEventChangeDetection=!r&&i,s.shouldCoalesceRunChangeDetection=r,s.callbackScheduled=!1,s.scheduleInRootZone=o,eS(s)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(Jm)===!0}static assertInAngularZone(){if(!t.isInAngularZone())throw new D(909,!1)}static assertNotInAngularZone(){if(t.isInAngularZone())throw new D(909,!1)}run(n,e,i){return this._inner.run(n,e,i)}runTask(n,e,i,r){let o=this._inner,s=o.scheduleEventTask("NgZoneEvent: "+r,n,XI,mc,mc);try{return o.runTask(s,e,i)}finally{o.cancelTask(s)}}runGuarded(n,e,i){return this._inner.runGuarded(n,e,i)}runOutsideAngular(n){return this._outer.run(n)}},XI={};function eh(t){if(t._nesting==0&&!t.hasPendingMicrotasks&&!t.isStable)try{t._nesting++,t.onMicrotaskEmpty.emit(null)}finally{if(t._nesting--,!t.hasPendingMicrotasks)try{t.runOutsideAngular(()=>t.onStable.emit(null))}finally{t.isStable=!0}}}function JI(t){if(t.isCheckStableRunning||t.callbackScheduled)return;t.callbackScheduled=!0;function n(){Xm(()=>{t.callbackScheduled=!1,cm(t),t.isCheckStableRunning=!0,eh(t),t.isCheckStableRunning=!1})}t.scheduleInRootZone?Zone.root.run(()=>{n()}):t._outer.run(()=>{n()}),cm(t)}function eS(t){let n=()=>{JI(t)},e=ZI++;t._inner=t._inner.fork({name:"angular",properties:{[Jm]:!0,[Os]:e,[Os+e]:!0},onInvokeTask:(i,r,o,s,a,l)=>{if(tS(l))return i.invokeTask(o,s,a,l);try{return Vv(t),i.invokeTask(o,s,a,l)}finally{(t.shouldCoalesceEventChangeDetection&&s.type==="eventTask"||t.shouldCoalesceRunChangeDetection)&&n(),Hv(t)}},onInvoke:(i,r,o,s,a,l,c)=>{try{return Vv(t),i.invoke(o,s,a,l,c)}finally{t.shouldCoalesceRunChangeDetection&&!t.callbackScheduled&&!nS(l)&&n(),Hv(t)}},onHasTask:(i,r,o,s)=>{i.hasTask(o,s),r===o&&(s.change=="microTask"?(t._hasPendingMicrotasks=s.microTask,cm(t),eh(t)):s.change=="macroTask"&&(t.hasPendingMacrotasks=s.macroTask))},onHandleError:(i,r,o,s)=>(i.handleError(o,s),t.runOutsideAngular(()=>t.onError.emit(s)),!1)})}function cm(t){t._hasPendingMicrotasks||(t.shouldCoalesceEventChangeDetection||t.shouldCoalesceRunChangeDetection)&&t.callbackScheduled===!0?t.hasPendingMicrotasks=!0:t.hasPendingMicrotasks=!1}function Vv(t){t._nesting++,t.isStable&&(t.isStable=!1,t.onUnstable.emit(null))}function Hv(t){t._nesting--,eh(t)}var Ns=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new q;onMicrotaskEmpty=new q;onStable=new q;onError=new q;run(n,e,i){return n.apply(e,i)}runGuarded(n,e,i){return n.apply(e,i)}runOutsideAngular(n){return n()}runTask(n,e,i,r){return n.apply(e,i)}};function tS(t){return Ib(t,"__ignore_ng_zone__")}function nS(t){return Ib(t,"__scheduler_tick__")}function Ib(t,n){return!Array.isArray(t)||t.length!==1?!1:t[0]?.data?.[n]===!0}var Pt=class{_console=console;handleError(n){this._console.error("ERROR",n)}},pn=new v("",{factory:()=>{let t=d(L),n=d(Te),e;return i=>{t.runOutsideAngular(()=>{n.destroyed&&!e?setTimeout(()=>{throw i}):(e??=n.get(Pt),e.handleError(i))})}}}),Sb={provide:pr,useValue:()=>{let t=d(Pt,{optional:!0})},multi:!0};function xe(t,n){let[e,i,r]=Pf(t,n?.equal),o=e,s=o[et];return o.set=i,o.update=r,o.asReadonly=Mb.bind(o),o}function Mb(){let t=this[et];if(t.readonlyFn===void 0){let n=()=>this();n[et]=t,t.readonlyFn=n}return t.readonlyFn}var po=(()=>{class t{view;node;constructor(e,i){this.view=e,this.node=i}static __NG_ELEMENT_ID__=iS}return t})();function iS(){return new po(te(),ft())}var Tn=class{},qs=new v("",{factory:()=>!0});var th=new v(""),go=(()=>{class t{internalPendingTasks=d(Xn);scheduler=d(Tn);errorHandler=d(pn);add(){let e=this.internalPendingTasks.add();return()=>{this.internalPendingTasks.has(e)&&(this.scheduler.notify(11),this.internalPendingTasks.remove(e))}}run(e){let i=this.add();e().catch(this.errorHandler).finally(i)}static \u0275prov=w({token:t,providedIn:"root",factory:()=>new t})}return t})(),Fc=(()=>{class t{static \u0275prov=w({token:t,providedIn:"root",factory:()=>new dm})}return t})(),dm=class{dirtyEffectCount=0;queues=new Map;add(n){this.enqueue(n),this.schedule(n)}schedule(n){n.dirty&&this.dirtyEffectCount++}remove(n){let e=n.zone,i=this.queues.get(e);i.has(n)&&(i.delete(n),n.dirty&&this.dirtyEffectCount--)}enqueue(n){let e=n.zone;this.queues.has(e)||this.queues.set(e,new Set);let i=this.queues.get(e);i.has(n)||i.add(n)}flush(){for(;this.dirtyEffectCount>0;){let n=!1;for(let[e,i]of this.queues)e===null?n||=this.flushQueue(i):n||=e.run(()=>this.flushQueue(i));n||(this.dirtyEffectCount=0)}}flushQueue(n){let e=!1;for(let i of n)i.dirty&&(this.dirtyEffectCount--,e=!0,i.run());return e}},hc=class{[et];constructor(n){this[et]=n}destroy(){this[et].destroy()}};function Dr(t,n){let e=n?.injector??d(H),i=n?.manualCleanup!==!0?e.get(mt):null,r,o=e.get(po,null,{optional:!0}),s=e.get(Tn);return o!==null?(r=sS(o.view,s,t),i instanceof fc&&i._lView===o.view&&(i=null)):r=aS(t,e.get(Fc),s),r.injector=e,i!==null&&(r.onDestroyFns=[i.onDestroy(()=>r.destroy())]),new hc(r)}var Tb=Q(_({},Bf),{cleanupFns:void 0,zone:null,onDestroyFns:null,run(){let t=As(!1);try{jf(this)}finally{As(t)}},cleanup(){if(!this.cleanupFns?.length)return;let t=K(null);try{for(;this.cleanupFns.length;)this.cleanupFns.pop()()}finally{this.cleanupFns=[],K(t)}}}),rS=Q(_({},Tb),{consumerMarkedDirty(){this.scheduler.schedule(this),this.notifier.notify(12)},destroy(){if(gi(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.scheduler.remove(this)}}),oS=Q(_({},Tb),{consumerMarkedDirty(){this.view[ie]|=8192,Cr(this.view),this.notifier.notify(13)},destroy(){if(gi(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.view[wi]?.delete(this)}});function sS(t,n,e){let i=Object.create(oS);return i.view=t,i.zone=typeof Zone<"u"?Zone.current:null,i.notifier=n,i.fn=kb(i,e),t[wi]??=new Set,t[wi].add(i),i.consumerMarkedDirty(i),i}function aS(t,n,e){let i=Object.create(rS);return i.fn=kb(i,t),i.scheduler=n,i.notifier=e,i.zone=typeof Zone<"u"?Zone.current:null,i.scheduler.add(i),i.notifier.notify(12),i}function kb(t,n){return()=>{n(e=>(t.cleanupFns??=[]).push(e))}}function ia(t){return{toString:t}.toString()}function hS(t){return typeof t=="function"}function dy(t,n,e,i){n!==null?n.applyValueToInputSignal(n,i):t[e]=i}var Gc=class{previousValue;currentValue;firstChange;constructor(n,e,i){this.previousValue=n,this.currentValue=e,this.firstChange=i}isFirstChange(){return this.firstChange}},Xe=(()=>{let t=()=>uy;return t.ngInherit=!0,t})();function uy(t){return t.type.prototype.ngOnChanges&&(t.setInput=gS),pS}function pS(){let t=my(this),n=t?.current;if(n){let e=t.previous;if(e===xi)t.previous=n;else for(let i in n)e[i]=n[i];t.current=null,this.ngOnChanges(n)}}function gS(t,n,e,i,r){let o=this.declaredInputs[i],s=my(t)||_S(t,{previous:xi,current:null}),a=s.current||(s.current={}),l=s.previous,c=l[o];a[o]=new Gc(c&&c.currentValue,e,l===xi),dy(t,n,r,e)}var fy="__ngSimpleChanges__";function my(t){return t[fy]||null}function _S(t,n){return t[fy]=n}var Rb=[];var Ee=function(t,n=null,e){for(let i=0;i<Rb.length;i++){let r=Rb[i];r(t,n,e)}},_e=(function(t){return t[t.TemplateCreateStart=0]="TemplateCreateStart",t[t.TemplateCreateEnd=1]="TemplateCreateEnd",t[t.TemplateUpdateStart=2]="TemplateUpdateStart",t[t.TemplateUpdateEnd=3]="TemplateUpdateEnd",t[t.LifecycleHookStart=4]="LifecycleHookStart",t[t.LifecycleHookEnd=5]="LifecycleHookEnd",t[t.OutputStart=6]="OutputStart",t[t.OutputEnd=7]="OutputEnd",t[t.BootstrapApplicationStart=8]="BootstrapApplicationStart",t[t.BootstrapApplicationEnd=9]="BootstrapApplicationEnd",t[t.BootstrapComponentStart=10]="BootstrapComponentStart",t[t.BootstrapComponentEnd=11]="BootstrapComponentEnd",t[t.ChangeDetectionStart=12]="ChangeDetectionStart",t[t.ChangeDetectionEnd=13]="ChangeDetectionEnd",t[t.ChangeDetectionSyncStart=14]="ChangeDetectionSyncStart",t[t.ChangeDetectionSyncEnd=15]="ChangeDetectionSyncEnd",t[t.AfterRenderHooksStart=16]="AfterRenderHooksStart",t[t.AfterRenderHooksEnd=17]="AfterRenderHooksEnd",t[t.ComponentStart=18]="ComponentStart",t[t.ComponentEnd=19]="ComponentEnd",t[t.DeferBlockStateStart=20]="DeferBlockStateStart",t[t.DeferBlockStateEnd=21]="DeferBlockStateEnd",t[t.DynamicComponentStart=22]="DynamicComponentStart",t[t.DynamicComponentEnd=23]="DynamicComponentEnd",t[t.HostBindingsUpdateStart=24]="HostBindingsUpdateStart",t[t.HostBindingsUpdateEnd=25]="HostBindingsUpdateEnd",t})(_e||{});function vS(t,n,e){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:o}=n.type.prototype;if(i){let s=uy(n);(e.preOrderHooks??=[]).push(t,s),(e.preOrderCheckHooks??=[]).push(t,s)}r&&(e.preOrderHooks??=[]).push(0-t,r),o&&((e.preOrderHooks??=[]).push(t,o),(e.preOrderCheckHooks??=[]).push(t,o))}function hy(t,n){for(let e=n.directiveStart,i=n.directiveEnd;e<i;e++){let o=t.data[e].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:a,ngAfterViewInit:l,ngAfterViewChecked:c,ngOnDestroy:u}=o;s&&(t.contentHooks??=[]).push(-e,s),a&&((t.contentHooks??=[]).push(e,a),(t.contentCheckHooks??=[]).push(e,a)),l&&(t.viewHooks??=[]).push(-e,l),c&&((t.viewHooks??=[]).push(e,c),(t.viewCheckHooks??=[]).push(e,c)),u!=null&&(t.destroyHooks??=[]).push(e,u)}}function Vc(t,n,e){py(t,n,3,e)}function Hc(t,n,e,i){(t[ie]&3)===e&&py(t,n,e,i)}function nh(t,n){let e=t[ie];(e&3)===n&&(e&=16383,e+=1,t[ie]=e)}function py(t,n,e,i){let r=i!==void 0?t[vr]&65535:0,o=i??-1,s=n.length-1,a=0;for(let l=r;l<s;l++)if(typeof n[l+1]=="number"){if(a=n[l],i!=null&&a>=i)break}else n[l]<0&&(t[vr]+=65536),(a<o||o==-1)&&(bS(t,e,n,l),t[vr]=(t[vr]&4294901760)+l+2),l++}function Ab(t,n){Ee(_e.LifecycleHookStart,t,n);let e=K(null);try{n.call(t)}finally{K(e),Ee(_e.LifecycleHookEnd,t,n)}}function bS(t,n,e,i){let r=e[i]<0,o=e[i+1],s=r?-e[i]:e[i],a=t[s];r?t[ie]>>14<t[vr]>>16&&(t[ie]&3)===n&&(t[ie]+=16384,Ab(a,o)):Ab(a,o)}var vo=-1,Er=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(n,e,i,r){this.factory=n,this.name=r,this.canSeeViewProviders=e,this.injectImpl=i}};function yS(t){return(t.flags&8)!==0}function wS(t){return(t.flags&16)!==0}function CS(t,n,e){let i=0;for(;i<e.length;){let r=e[i];if(typeof r=="number"){if(r!==0)break;i++;let o=e[i++],s=e[i++],a=e[i++];t.setAttribute(n,s,a,o)}else{let o=r,s=e[++i];DS(o)?t.setProperty(n,o,s):t.setAttribute(n,o,s),i++}}return i}function gy(t){return t===3||t===4||t===6}function DS(t){return t.charCodeAt(0)===64}function bo(t,n){if(!(n===null||n.length===0))if(t===null||t.length===0)t=n.slice();else{let e=-1;for(let i=0;i<n.length;i++){let r=n[i];typeof r=="number"?e=r:e===0||(e===-1||e===2?Ob(t,e,r,null,n[++i]):Ob(t,e,r,null,null))}}return t}function Ob(t,n,e,i,r){let o=0,s=t.length;if(n===-1)s=-1;else for(;o<t.length;){let a=t[o++];if(typeof a=="number"){if(a===n){s=-1;break}else if(a>n){s=o-1;break}}}for(;o<t.length;){let a=t[o];if(typeof a=="number")break;if(a===e){r!==null&&(t[o+1]=r);return}o++,r!==null&&o++}s!==-1&&(t.splice(s,0,n),o=s+1),t.splice(o++,0,e),r!==null&&t.splice(o++,0,r)}function _y(t){return t!==vo}function Wc(t){return t&32767}function xS(t){return t>>16}function qc(t,n){let e=xS(t),i=n;for(;e>0;)i=i[_r],e--;return i}var fh=!0;function Qc(t){let n=fh;return fh=t,n}var ES=256,vy=ES-1,by=5,IS=0,Fn={};function SS(t,n,e){let i;typeof e=="string"?i=e.charCodeAt(0)||0:e.hasOwnProperty(mr)&&(i=e[mr]),i==null&&(i=e[mr]=IS++);let r=i&vy,o=1<<r;n.data[t+(r>>by)]|=o}function Yc(t,n){let e=yy(t,n);if(e!==-1)return e;let i=n[Y];i.firstCreatePass&&(t.injectorIndex=n.length,ih(i.data,t),ih(n,null),ih(i.blueprint,null));let r=Yh(t,n),o=t.injectorIndex;if(_y(r)){let s=Wc(r),a=qc(r,n),l=a[Y].data;for(let c=0;c<8;c++)n[o+c]=a[s+c]|l[s+c]}return n[o+8]=r,o}function ih(t,n){t.push(0,0,0,0,0,0,0,0,n)}function yy(t,n){return t.injectorIndex===-1||t.parent&&t.parent.injectorIndex===t.injectorIndex||n[t.injectorIndex+8]===null?-1:t.injectorIndex}function Yh(t,n){if(t.parent&&t.parent.injectorIndex!==-1)return t.parent.injectorIndex;let e=0,i=null,r=n;for(;r!==null;){if(i=Ey(r),i===null)return vo;if(e++,r=r[_r],i.injectorIndex!==-1)return i.injectorIndex|e<<16}return vo}function mh(t,n,e){SS(t,n,e)}function MS(t,n){if(n==="class")return t.classes;if(n==="style")return t.styles;let e=t.attrs;if(e){let i=e.length,r=0;for(;r<i;){let o=e[r];if(gy(o))break;if(o===0)r=r+2;else if(typeof o=="number")for(r++;r<i&&typeof e[r]=="string";)r++;else{if(o===n)return e[r+1];r=r+2}}}return null}function wy(t,n,e){if(e&8||t!==void 0)return t;bc(n,"NodeInjector")}function Cy(t,n,e,i){if(e&8&&i===void 0&&(i=null),(e&3)===0){let r=t[Yn],o=kt(void 0);try{return r?r.get(n,i,e&8):bm(n,i,e&8)}finally{kt(o)}}return wy(i,n,e)}function Dy(t,n,e,i=0,r){if(t!==null){if(n[ie]&2048&&!(i&2)){let s=AS(t,n,e,i,Fn);if(s!==Fn)return s}let o=xy(t,n,e,i,Fn);if(o!==Fn)return o}return Cy(n,e,i,r)}function xy(t,n,e,i,r){let o=kS(e);if(typeof o=="function"){if(!Qm(n,t,i))return i&1?wy(r,e,i):Cy(n,e,i,r);try{let s;if(s=o(i),s==null&&!(i&8))bc(e);else return s}finally{Ym()}}else if(typeof o=="number"){let s=null,a=yy(t,n),l=vo,c=i&1?n[At][Rt]:null;for((a===-1||i&4)&&(l=a===-1?Yh(t,n):n[a+8],l===vo||!Fb(i,!1)?a=-1:(s=n[Y],a=Wc(l),n=qc(l,n)));a!==-1;){let u=n[Y];if(Nb(o,a,u.data)){let f=TS(a,n,e,s,i,c);if(f!==Fn)return f}l=n[a+8],l!==vo&&Fb(i,n[Y].data[a+8]===c)&&Nb(o,a,n)?(s=u,a=Wc(l),n=qc(l,n)):a=-1}}return r}function TS(t,n,e,i,r,o){let s=n[Y],a=s.data[t+8],l=i==null?An(a)&&fh:i!=s&&(a.type&3)!==0,c=r&1&&o===a,u=zc(a,s,e,l,c);return u!==null?Zs(n,s,u,a,r):Fn}function zc(t,n,e,i,r){let o=t.providerIndexes,s=n.data,a=o&1048575,l=t.directiveStart,c=t.directiveEnd,u=o>>20,f=i?a:a+u,m=r?a+u:c;for(let h=f;h<m;h++){let y=s[h];if(h<l&&e===y||h>=l&&y.type===e)return h}if(r){let h=s[l];if(h&&On(h)&&h.type===e)return l}return null}function Zs(t,n,e,i,r){let o=t[e],s=n.data;if(o instanceof Er){let a=o;if(a.resolving)throw vm("");let l=Qc(a.canSeeViewProviders);a.resolving=!0;let c=s[e].type||s[e],u,f=a.injectImpl?kt(a.injectImpl):null,m=Qm(t,i,0);try{o=t[e]=a.factory(void 0,r,s,t,i),n.firstCreatePass&&e>=i.directiveStart&&vS(e,s[e],n)}finally{f!==null&&kt(f),Qc(l),a.resolving=!1,Ym()}}return o}function kS(t){if(typeof t=="string")return t.charCodeAt(0)||0;let n=t.hasOwnProperty(mr)?t[mr]:void 0;return typeof n=="number"?n>=0?n&vy:RS:n}function Nb(t,n,e){let i=1<<t;return!!(e[n+(t>>by)]&i)}function Fb(t,n){return!(t&2)&&!(t&1&&n)}var xr=class{_tNode;_lView;constructor(n,e){this._tNode=n,this._lView=e}get(n,e,i){return Dy(this._tNode,this._lView,n,dr(i),e)}};function RS(){return new xr(ft(),te())}function it(t){return ia(()=>{let n=t.prototype.constructor,e=n[ks]||hh(n),i=Object.prototype,r=Object.getPrototypeOf(t.prototype).constructor;for(;r&&r!==i;){let o=r[ks]||hh(r);if(o&&o!==e)return o;r=Object.getPrototypeOf(r)}return o=>new o})}function hh(t){return um(t)?()=>{let n=hh(_t(t));return n&&n()}:yi(t)}function AS(t,n,e,i,r){let o=t,s=n;for(;o!==null&&s!==null&&s[ie]&2048&&!mo(s);){let a=xy(o,s,e,i|2,Fn);if(a!==Fn)return a;let l=o.parent;if(!l){let c=s[Sm];if(c){let u=c.get(e,Fn,i&-5);if(u!==Fn)return u}l=Ey(s),s=s[_r]}o=l}return r}function Ey(t){let n=t[Y],e=n.type;return e===2?n.declTNode:e===1?t[Rt]:null}function Kh(t){return MS(ft(),t)}function OS(){return xo(ft(),te())}function xo(t,n){return new F(Kt(t,n))}var F=(()=>{class t{nativeElement;constructor(e){this.nativeElement=e}static __NG_ELEMENT_ID__=OS}return t})();function Iy(t){return t instanceof F?t.nativeElement:t}function NS(){return this._results[Symbol.iterator]()}var vn=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new C}constructor(n=!1){this._emitDistinctChangesOnly=n}get(n){return this._results[n]}map(n){return this._results.map(n)}filter(n){return this._results.filter(n)}find(n){return this._results.find(n)}reduce(n,e){return this._results.reduce(n,e)}forEach(n){this._results.forEach(n)}some(n){return this._results.some(n)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(n,e){this.dirty=!1;let i=Qv(n);(this._changesDetected=!qv(this._results,i,e))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(n){this._onDirty=n}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=NS};function Sy(t){return(t.flags&128)===128}var Zh=(function(t){return t[t.OnPush=0]="OnPush",t[t.Eager=1]="Eager",t[t.Default=1]="Default",t})(Zh||{}),My=new Map,FS=0;function PS(){return FS++}function LS(t){My.set(t[Kn],t)}function ph(t){My.delete(t[Kn])}var Pb="__ngContext__";function yo(t,n){Zn(n)?(t[Pb]=n[Kn],LS(n)):t[Pb]=n}function Ty(t){return Ry(t[uo])}function ky(t){return Ry(t[Qt])}function Ry(t){for(;t!==null&&!hn(t);)t=t[Qt];return t}var gh;function Xh(t){gh=t}function Ay(){if(gh!==void 0)return gh;if(typeof document<"u")return document;throw new D(210,!1)}var Ri=new v("",{factory:()=>BS}),BS="ng";var ld=new v(""),Tr=new v("",{providedIn:"platform",factory:()=>"unknown"}),ra=new v(""),kr=new v("",{factory:()=>d(z).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var Oy="r";var Ny="di";var Fy=!1,Py=new v("",{factory:()=>Fy});var Lb=new WeakMap;function jS(t,n){if(t==null||typeof t!="object")return;let e=Lb.get(t);e||(e=new WeakSet,Lb.set(t,e)),e.add(n)}var VS=(t,n,e,i)=>{};function HS(t,n,e,i){VS(t,n,e,i)}function cd(t){return(t.flags&32)===32}var zS=()=>null;function Ly(t,n,e=!1){return zS(t,n,e)}function By(t,n){let e=t.contentQueries;if(e!==null){let i=K(null);try{for(let r=0;r<e.length;r+=2){let o=e[r],s=e[r+1];if(s!==-1){let a=t.data[s];Us(o),a.contentQueries(2,n[s],s)}}}finally{K(i)}}}function _h(t,n,e){Us(0);let i=K(null);try{n(t,e)}finally{K(i)}}function Jh(t,n,e){if(Tm(n)){let i=K(null);try{let r=n.directiveStart,o=n.directiveEnd;for(let s=r;s<o;s++){let a=t.data[s];if(a.contentQueries){let l=e[s];a.contentQueries(1,l,s)}}}finally{K(i)}}}var bn=(function(t){return t[t.Emulated=0]="Emulated",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom",t[t.ExperimentalIsolatedShadowDom=4]="ExperimentalIsolatedShadowDom",t})(bn||{});var Pc;function US(){if(Pc===void 0&&(Pc=null,Di.trustedTypes))try{Pc=Di.trustedTypes.createPolicy("angular",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return Pc}function dd(t){return US()?.createHTML(t)||t}var Lc;function $S(){if(Lc===void 0&&(Lc=null,Di.trustedTypes))try{Lc=Di.trustedTypes.createPolicy("angular#unsafe-bypass",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return Lc}function Bb(t){return $S()?.createHTML(t)||t}var Jn=class{changingThisBreaksApplicationSecurity;constructor(n){this.changingThisBreaksApplicationSecurity=n}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${pc})`}},vh=class extends Jn{getTypeName(){return"HTML"}},bh=class extends Jn{getTypeName(){return"Style"}},yh=class extends Jn{getTypeName(){return"Script"}},wh=class extends Jn{getTypeName(){return"URL"}},Ch=class extends Jn{getTypeName(){return"ResourceURL"}};function wn(t){return t instanceof Jn?t.changingThisBreaksApplicationSecurity:t}function ei(t,n){let e=jy(t);if(e!=null&&e!==n){if(e==="ResourceURL"&&n==="URL")return!0;throw new Error(`Required a safe ${n}, got a ${e} (see ${pc})`)}return e===n}function jy(t){return t instanceof Jn&&t.getTypeName()||null}function ep(t){return new vh(t)}function tp(t){return new bh(t)}function np(t){return new yh(t)}function ip(t){return new wh(t)}function rp(t){return new Ch(t)}function GS(t){let n=new xh(t);return WS()?new Dh(n):n}var Dh=class{inertDocumentHelper;constructor(n){this.inertDocumentHelper=n}getInertBodyElement(n){n="<body><remove></remove>"+n;try{let e=new window.DOMParser().parseFromString(dd(n),"text/html").body;return e===null?this.inertDocumentHelper.getInertBodyElement(n):(e.firstChild?.remove(),e)}catch{return null}}},xh=class{defaultDoc;inertDocument;constructor(n){this.defaultDoc=n,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert")}getInertBodyElement(n){let e=this.inertDocument.createElement("template");return e.innerHTML=dd(n),e}};function WS(){try{return!!new window.DOMParser().parseFromString(dd(""),"text/html")}catch{return!1}}var qS=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function oa(t){return t=String(t),t.match(qS)?t:"unsafe:"+t}function ti(t){let n={};for(let e of t.split(","))n[e]=!0;return n}function sa(...t){let n={};for(let e of t)for(let i in e)e.hasOwnProperty(i)&&(n[i]=!0);return n}var Vy=ti("area,br,col,hr,img,wbr"),Hy=ti("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),zy=ti("rp,rt"),QS=sa(zy,Hy),YS=sa(Hy,ti("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),KS=sa(zy,ti("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),jb=sa(Vy,YS,KS,QS),Uy=ti("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),ZS=ti("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),XS=ti("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),JS=sa(Uy,ZS,XS),eM=ti("script,style,template"),Eh=class{sanitizedSomething=!1;buf=[];sanitizeChildren(n){let e=n.firstChild,i=!0,r=[];for(;e;){if(e.nodeType===Node.ELEMENT_NODE?i=this.startElement(e):e.nodeType===Node.TEXT_NODE?this.chars(e.nodeValue):this.sanitizedSomething=!0,i&&e.firstChild){r.push(e),e=iM(e);continue}for(;e;){e.nodeType===Node.ELEMENT_NODE&&this.endElement(e);let o=nM(e);if(o){e=o;break}e=r.pop()}}return this.buf.join("")}startElement(n){let e=Vb(n).toLowerCase();if(!jb.hasOwnProperty(e))return this.sanitizedSomething=!0,!eM.hasOwnProperty(e);this.buf.push("<"),this.buf.push(e);let i=n.attributes;for(let r=0;r<i.length;r++){let o=i.item(r),s=o.name,a=s.toLowerCase();if(!JS.hasOwnProperty(a)){this.sanitizedSomething=!0;continue}let l=o.value;Uy[a]&&(l=oa(l)),this.buf.push(" ",s,'="',Hb(l),'"')}return this.buf.push(">"),!0}endElement(n){let e=Vb(n).toLowerCase();jb.hasOwnProperty(e)&&!Vy.hasOwnProperty(e)&&(this.buf.push("</"),this.buf.push(e),this.buf.push(">"))}chars(n){this.buf.push(Hb(n))}};function tM(t,n){return(t.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY)!==Node.DOCUMENT_POSITION_CONTAINED_BY}function nM(t){let n=t.nextSibling;if(n&&t!==n.previousSibling)throw $y(n);return n}function iM(t){let n=t.firstChild;if(n&&tM(t,n))throw $y(n);return n}function Vb(t){let n=t.nodeName;return typeof n=="string"?n:"FORM"}function $y(t){return new Error(`Failed to sanitize html because the element is clobbered: ${t.outerHTML}`)}var rM=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,oM=/([^\#-~ |!])/g;function Hb(t){return t.replace(/&/g,"&amp;").replace(rM,function(n){let e=n.charCodeAt(0),i=n.charCodeAt(1);return"&#"+((e-55296)*1024+(i-56320)+65536)+";"}).replace(oM,function(n){return"&#"+n.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}var Bc;function ud(t,n){let e=null;try{Bc=Bc||GS(t);let i=n?String(n):"";e=Bc.getInertBodyElement(i);let r=5,o=i;do{if(r===0)throw new Error("Failed to sanitize html because the input is unstable");r--,i=o,o=e.innerHTML,e=Bc.getInertBodyElement(i)}while(i!==o);let a=new Eh().sanitizeChildren(zb(e)||e);return dd(a)}finally{if(e){let i=zb(e)||e;for(;i.firstChild;)i.firstChild.remove()}}}function zb(t){return"content"in t&&sM(t)?t.content:null}function sM(t){return t.nodeType===Node.ELEMENT_NODE&&t.nodeName==="TEMPLATE"}var aM=/^>|^->|<!--|-->|--!>|<!-$/g,lM=/(<|>)/g,cM="\u200B$1\u200B";function dM(t){return t.replace(aM,n=>n.replace(lM,cM))}function uM(t,n){return t.createText(n)}function fM(t,n,e){t.setValue(n,e)}function mM(t,n){return t.createComment(dM(n))}function Gy(t,n,e){return t.createElement(n,e)}function Kc(t,n,e,i,r){t.insertBefore(n,e,i,r)}function Wy(t,n,e){t.appendChild(n,e)}function Ub(t,n,e,i,r){i!==null?Kc(t,n,e,i,r):Wy(t,n,e)}function qy(t,n,e,i){t.removeChild(null,n,e,i)}function hM(t,n,e){t.setAttribute(n,"style",e)}function pM(t,n,e){e===""?t.removeAttribute(n,"class"):t.setAttribute(n,"class",e)}function Qy(t,n,e){let{mergedAttrs:i,classes:r,styles:o}=e;i!==null&&CS(t,n,i),r!==null&&pM(t,n,r),o!==null&&hM(t,n,o)}var rt=(function(t){return t[t.NONE=0]="NONE",t[t.HTML=1]="HTML",t[t.STYLE=2]="STYLE",t[t.SCRIPT=3]="SCRIPT",t[t.URL=4]="URL",t[t.RESOURCE_URL=5]="RESOURCE_URL",t[t.ATTRIBUTE_NO_BINDING=6]="ATTRIBUTE_NO_BINDING",t})(rt||{});function op(t){let n=Yy();return n?Bb(n.sanitize(rt.HTML,t)||""):ei(t,"HTML")?Bb(wn(t)):ud(Ay(),hr(t))}function sp(t){let n=Yy();return n?n.sanitize(rt.URL,t)||"":ei(t,"URL")?wn(t):oa(hr(t))}function Yy(){let t=te();return t&&t[mn].sanitizer}function Ky(t){return t instanceof Function?t():t}function gM(t,n,e){let i=t.length;for(;;){let r=t.indexOf(n,e);if(r===-1)return r;if(r===0||t.charCodeAt(r-1)<=32){let o=n.length;if(r+o===i||t.charCodeAt(r+o)<=32)return r}e=r+1}}var Zy="ng-template";function _M(t,n,e,i){let r=0;if(i){for(;r<n.length&&typeof n[r]=="string";r+=2)if(n[r]==="class"&&gM(n[r+1].toLowerCase(),e,0)!==-1)return!0}else if(ap(t))return!1;if(r=n.indexOf(1,r),r>-1){let o;for(;++r<n.length&&typeof(o=n[r])=="string";)if(o.toLowerCase()===e)return!0}return!1}function ap(t){return t.type===4&&t.value!==Zy}function vM(t,n,e){let i=t.type===4&&!e?Zy:t.value;return n===i}function bM(t,n,e){let i=4,r=t.attrs,o=r!==null?CM(r):0,s=!1;for(let a=0;a<n.length;a++){let l=n[a];if(typeof l=="number"){if(!s&&!gn(i)&&!gn(l))return!1;if(s&&gn(l))continue;s=!1,i=l|i&1;continue}if(!s)if(i&4){if(i=2|i&1,l!==""&&!vM(t,l,e)||l===""&&n.length===1){if(gn(i))return!1;s=!0}}else if(i&8){if(r===null||!_M(t,r,l,e)){if(gn(i))return!1;s=!0}}else{let c=n[++a],u=yM(l,r,ap(t),e);if(u===-1){if(gn(i))return!1;s=!0;continue}if(c!==""){let f;if(u>o?f="":f=r[u+1].toLowerCase(),i&2&&c!==f){if(gn(i))return!1;s=!0}}}}return gn(i)||s}function gn(t){return(t&1)===0}function yM(t,n,e,i){if(n===null)return-1;let r=0;if(i||!e){let o=!1;for(;r<n.length;){let s=n[r];if(s===t)return r;if(s===3||s===6)o=!0;else if(s===1||s===2){let a=n[++r];for(;typeof a=="string";)a=n[++r];continue}else{if(s===4)break;if(s===0){r+=4;continue}}r+=o?1:2}return-1}else return DM(n,t)}function Xy(t,n,e=!1){for(let i=0;i<n.length;i++)if(bM(t,n[i],e))return!0;return!1}function wM(t){let n=t.attrs;if(n!=null){let e=n.indexOf(5);if((e&1)===0)return n[e+1]}return null}function CM(t){for(let n=0;n<t.length;n++){let e=t[n];if(gy(e))return n}return t.length}function DM(t,n){let e=t.indexOf(4);if(e>-1)for(e++;e<t.length;){let i=t[e];if(typeof i=="number")return-1;if(i===n)return e;e++}return-1}function xM(t,n){e:for(let e=0;e<n.length;e++){let i=n[e];if(t.length===i.length){for(let r=0;r<t.length;r++)if(t[r]!==i[r])continue e;return!0}}return!1}function $b(t,n){return t?":not("+n.trim()+")":n}function EM(t){let n=t[0],e=1,i=2,r="",o=!1;for(;e<t.length;){let s=t[e];if(typeof s=="string")if(i&2){let a=t[++e];r+="["+s+(a.length>0?'="'+a+'"':"")+"]"}else i&8?r+="."+s:i&4&&(r+=" "+s);else r!==""&&!gn(s)&&(n+=$b(o,r),r=""),i=s,o=o||!gn(i);e++}return r!==""&&(n+=$b(o,r)),n}function IM(t){return t.map(EM).join(",")}function SM(t){let n=[],e=[],i=1,r=2;for(;i<t.length;){let o=t[i];if(typeof o=="string")r===2?o!==""&&n.push(o,t[++i]):r===8&&e.push(o);else{if(!gn(r))break;r=o}i++}return e.length&&n.push(1,...e),n}var Bt={};function lp(t,n,e,i,r,o,s,a,l,c,u){let f=je+i,m=f+r,h=MM(f,m),y=typeof c=="function"?c():c;return h[Y]={type:t,blueprint:h,template:e,queries:null,viewQuery:a,declTNode:n,data:h.slice().fill(null,f),bindingStartIndex:f,expandoStartIndex:m,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof o=="function"?o():o,pipeRegistry:typeof s=="function"?s():s,firstChild:null,schemas:l,consts:y,incompleteFirstPass:!1,ssrId:u}}function MM(t,n){let e=[];for(let i=0;i<n;i++)e.push(i<t?null:Bt);return e}function TM(t){let n=t.tView;return n===null||n.incompleteFirstPass?t.tView=lp(1,null,t.template,t.decls,t.vars,t.directiveDefs,t.pipeDefs,t.viewQuery,t.schemas,t.consts,t.id):n}function cp(t,n,e,i,r,o,s,a,l,c,u){let f=n.blueprint.slice();return f[fn]=r,f[ie]=i|4|128|8|64|1024,(c!==null||t&&t[ie]&2048)&&(f[ie]|=2048),Nm(f),f[tt]=f[_r]=t,f[qe]=e,f[mn]=s||t&&t[mn],f[Oe]=a||t&&t[Oe],f[Yn]=l||t&&t[Yn]||null,f[Rt]=o,f[Kn]=PS(),f[gr]=u,f[Sm]=c,f[At]=n.type==2?t[At]:f,f}function kM(t,n,e){let i=Kt(n,t),r=TM(e),o=t[mn].rendererFactory,s=dp(t,cp(t,r,null,Jy(e),i,n,null,o.createRenderer(i,e),null,null,null));return t[n.index]=s}function Jy(t){let n=16;return t.signals?n=4096:t.onPush&&(n=64),n}function e0(t,n,e,i){if(e===0)return-1;let r=n.length;for(let o=0;o<e;o++)n.push(i),t.blueprint.push(i),t.data.push(null);return r}function dp(t,n){return t[uo]?t[Im][Qt]=n:t[uo]=n,t[Im]=n,n}function p(t=1){t0(Fe(),te(),Nn()+t,!1)}function t0(t,n,e,i){if(!i)if((n[ie]&3)===3){let o=t.preOrderCheckHooks;o!==null&&Vc(n,o,e)}else{let o=t.preOrderHooks;o!==null&&Hc(n,o,0,e)}Ti(e)}var fd=(function(t){return t[t.None=0]="None",t[t.SignalBased=1]="SignalBased",t[t.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",t})(fd||{});function Ih(t,n,e,i){let r=K(null);try{let[o,s,a]=t.inputs[e],l=null;(s&fd.SignalBased)!==0&&(l=n[o][et]),l!==null&&l.transformFn!==void 0?i=l.transformFn(i):a!==null&&(i=a.call(n,i)),t.setInput!==null?t.setInput(n,l,i,e,o):dy(n,l,o,i)}finally{K(r)}}var yn=(function(t){return t[t.Important=1]="Important",t[t.DashCase=2]="DashCase",t})(yn||{}),RM;function up(t,n){return RM(t,n)}var O3=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";var Sh=new WeakMap,Qs=new WeakSet;function AM(t,n){let e=Sh.get(t);if(!e||e.length===0)return;let i=n.parentNode,r=n.previousSibling;for(let o=e.length-1;o>=0;o--){let s=e[o],a=s.parentNode;s===n?(e.splice(o,1),Qs.add(s),s.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}}))):(r&&s===r||a&&i&&a!==i)&&(e.splice(o,1),s.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),s.parentNode?.removeChild(s))}}function OM(t,n){let e=Sh.get(t);e?e.includes(n)||e.push(n):Sh.set(t,[n])}var Ir=new Set,md=(function(t){return t[t.CHANGE_DETECTION=0]="CHANGE_DETECTION",t[t.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",t})(md||{}),Cn=new v(""),Gb=new Set;function Ai(t){Gb.has(t)||(Gb.add(t),performance?.mark?.("mark_feature_usage",{detail:{feature:t}}))}var hd=(()=>{class t{impl=null;execute(){this.impl?.execute()}static \u0275prov=w({token:t,providedIn:"root",factory:()=>new t})}return t})(),fp=[0,1,2,3],mp=(()=>{class t{ngZone=d(L);scheduler=d(Tn);errorHandler=d(Pt,{optional:!0});sequences=new Set;deferredRegistrations=new Set;executing=!1;constructor(){d(Cn,{optional:!0})}execute(){let e=this.sequences.size>0;e&&Ee(_e.AfterRenderHooksStart),this.executing=!0;for(let i of fp)for(let r of this.sequences)if(!(r.erroredOrDestroyed||!r.hooks[i]))try{r.pipelinedValue=this.ngZone.runOutsideAngular(()=>this.maybeTrace(()=>{let o=r.hooks[i];return o(r.pipelinedValue)},r.snapshot))}catch(o){r.erroredOrDestroyed=!0,this.errorHandler?.handleError(o)}this.executing=!1;for(let i of this.sequences)i.afterRun(),i.once&&(this.sequences.delete(i),i.destroy());for(let i of this.deferredRegistrations)this.sequences.add(i);this.deferredRegistrations.size>0&&this.scheduler.notify(7),this.deferredRegistrations.clear(),e&&Ee(_e.AfterRenderHooksEnd)}register(e){let{view:i}=e;i!==void 0?((i[br]??=[]).push(e),Cr(i),i[ie]|=8192):this.executing?this.deferredRegistrations.add(e):this.addSequence(e)}addSequence(e){this.sequences.add(e),this.scheduler.notify(7)}unregister(e){this.executing&&this.sequences.has(e)?(e.erroredOrDestroyed=!0,e.pipelinedValue=void 0,e.once=!0):(this.sequences.delete(e),this.deferredRegistrations.delete(e))}maybeTrace(e,i){return i?i.run(md.AFTER_NEXT_RENDER,e):e()}static \u0275prov=w({token:t,providedIn:"root",factory:()=>new t})}return t})(),Xs=class{impl;hooks;view;once;snapshot;erroredOrDestroyed=!1;pipelinedValue=void 0;unregisterOnDestroy;constructor(n,e,i,r,o,s=null){this.impl=n,this.hooks=e,this.view=i,this.once=r,this.snapshot=s,this.unregisterOnDestroy=o?.onDestroy(()=>this.destroy())}afterRun(){this.erroredOrDestroyed=!1,this.pipelinedValue=void 0,this.snapshot?.dispose(),this.snapshot=null}destroy(){this.impl.unregister(this),this.unregisterOnDestroy?.();let n=this.view?.[br];n&&(this.view[br]=n.filter(e=>e!==this))}};function He(t,n){let e=n?.injector??d(H);return Ai("NgAfterNextRender"),FM(t,e,n,!0)}function NM(t){return t instanceof Function?[void 0,void 0,t,void 0]:[t.earlyRead,t.write,t.mixedReadWrite,t.read]}function FM(t,n,e,i){let r=n.get(hd);r.impl??=n.get(mp);let o=n.get(Cn,null,{optional:!0}),s=e?.manualCleanup!==!0?n.get(mt):null,a=n.get(po,null,{optional:!0}),l=new Xs(r.impl,NM(t),a?.view,i,s,o?.snapshot(null));return r.impl.register(l),l}var n0=new v("",{factory:()=>({queue:new Set,isScheduled:!1,scheduler:null,injector:d(Te)})});function i0(t,n,e){let i=t.get(n0);if(Array.isArray(n))for(let r of n)i.queue.add(r),e?.detachedLeaveAnimationFns?.push(r);else i.queue.add(n),e?.detachedLeaveAnimationFns?.push(n);i.scheduler&&i.scheduler(t)}function PM(t,n){let e=t.get(n0);if(n.detachedLeaveAnimationFns){for(let i of n.detachedLeaveAnimationFns)e.queue.delete(i);n.detachedLeaveAnimationFns=void 0}}function LM(t,n){for(let[e,i]of n)i0(t,i.animateFns)}function Wb(t,n,e,i){let r=t?.[Ii]?.enter;n!==null&&r&&r.has(e.index)&&LM(i,r)}function _o(t,n,e,i,r,o,s,a){if(r!=null){let l,c=!1;hn(r)?l=r:Zn(r)&&(c=!0,r=r[fn]);let u=Yt(r);t===0&&i!==null?(Wb(a,i,o,e),s==null?Wy(n,i,u):Kc(n,i,u,s||null,!0)):t===1&&i!==null?(Wb(a,i,o,e),Kc(n,i,u,s||null,!0),AM(o,u)):t===2?(a?.[Ii]?.leave?.has(o.index)&&OM(o,u),Qs.delete(u),qb(a,o,e,f=>{if(Qs.has(u)){Qs.delete(u);return}qy(n,u,c,f)})):t===3&&(Qs.delete(u),qb(a,o,e,()=>{n.destroyNode(u)})),l!=null&&QM(n,t,e,l,o,i,s)}}function BM(t,n){r0(t,n),n[fn]=null,n[Rt]=null}function jM(t,n,e,i,r,o){i[fn]=r,i[Rt]=n,gd(t,i,e,1,r,o)}function r0(t,n){n[mn].changeDetectionScheduler?.notify(9),gd(t,n,n[Oe],2,null,null)}function VM(t){let n=t[uo];if(!n)return rh(t[Y],t);for(;n;){let e=null;if(Zn(n))e=n[uo];else{let i=n[ze];i&&(e=i)}if(!e){for(;n&&!n[Qt]&&n!==t;)Zn(n)&&rh(n[Y],n),n=n[tt];n===null&&(n=t),Zn(n)&&rh(n[Y],n),e=n&&n[Qt]}n=e}}function hp(t,n){let e=t[yr],i=e.indexOf(n);e.splice(i,1)}function pd(t,n){if(wr(n))return;let e=n[Oe];e.destroyNode&&gd(t,n,e,3,null,null),VM(n)}function rh(t,n){if(wr(n))return;let e=K(null);try{n[ie]&=-129,n[ie]|=256,n[$t]&&gi(n[$t]),UM(t,n),zM(t,n),n[Y].type===1&&n[Oe].destroy();let i=n[Ei];if(i!==null&&hn(n[tt])){i!==n[tt]&&hp(i,n);let r=n[Rn];r!==null&&r.detachView(t)}ph(n)}finally{K(e)}}function qb(t,n,e,i){let r=t?.[Ii];if(r==null||r.leave==null||!r.leave.has(n.index))return i(!1);t&&Ir.add(t[Kn]),i0(e,()=>{if(r.leave&&r.leave.has(n.index)){let s=r.leave.get(n.index),a=[];if(s){for(let l=0;l<s.animateFns.length;l++){let c=s.animateFns[l],{promise:u}=c();a.push(u)}r.detachedLeaveAnimationFns=void 0}r.running=Promise.allSettled(a),HM(t,i)}else t&&Ir.delete(t[Kn]),i(!1)},r)}function HM(t,n){let e=t[Ii]?.running;if(e){e.then(()=>{t[Ii].running=void 0,Ir.delete(t[Kn]),n(!0)});return}n(!1)}function zM(t,n){let e=t.cleanup,i=n[co];if(e!==null)for(let s=0;s<e.length-1;s+=2)if(typeof e[s]=="string"){let a=e[s+3];a>=0?i[a]():i[-a].unsubscribe(),s+=2}else{let a=i[e[s+1]];e[s].call(a)}i!==null&&(n[co]=null);let r=n[qn];if(r!==null){n[qn]=null;for(let s=0;s<r.length;s++){let a=r[s];a()}}let o=n[wi];if(o!==null){n[wi]=null;for(let s of o)s.destroy()}}function UM(t,n){let e;if(t!=null&&(e=t.destroyHooks)!=null)for(let i=0;i<e.length;i+=2){let r=n[e[i]];if(!(r instanceof Er)){let o=e[i+1];if(Array.isArray(o))for(let s=0;s<o.length;s+=2){let a=r[o[s]],l=o[s+1];Ee(_e.LifecycleHookStart,a,l);try{l.call(a)}finally{Ee(_e.LifecycleHookEnd,a,l)}}else{Ee(_e.LifecycleHookStart,r,o);try{o.call(r)}finally{Ee(_e.LifecycleHookEnd,r,o)}}}}}function o0(t,n,e){return $M(t,n.parent,e)}function $M(t,n,e){let i=n;for(;i!==null&&i.type&168;)n=i,i=n.parent;if(i===null)return e[fn];if(An(i)){let{encapsulation:r}=t.data[i.directiveStart+i.componentOffset];if(r===bn.None||r===bn.Emulated)return null}return Kt(i,e)}function s0(t,n,e){return WM(t,n,e)}function GM(t,n,e){return t.type&40?Kt(t,e):null}var WM=GM,Qb;function pp(t,n,e,i){let r=o0(t,i,n),o=n[Oe],s=i.parent||n[Rt],a=s0(s,i,n);if(r!=null)if(Array.isArray(e))for(let l=0;l<e.length;l++)Ub(o,r,e[l],a,!1);else Ub(o,r,e,a,!1);Qb!==void 0&&Qb(o,i,n,e,r)}function Ys(t,n){if(n!==null){let e=n.type;if(e&3)return Kt(n,t);if(e&4)return Mh(-1,t[n.index]);if(e&8){let i=n.child;if(i!==null)return Ys(t,i);{let r=t[n.index];return hn(r)?Mh(-1,r):Yt(r)}}else{if(e&128)return Ys(t,n.next);if(e&32)return up(n,t)()||Yt(t[n.index]);{let i=a0(t,n);if(i!==null){if(Array.isArray(i))return i[0];let r=Ci(t[At]);return Ys(r,i)}else return Ys(t,n.next)}}}return null}function a0(t,n){if(n!==null){let i=t[At][Rt],r=n.projection;return i.projection[r]}return null}function Mh(t,n){let e=ze+t+1;if(e<n.length){let i=n[e],r=i[Y].firstChild;if(r!==null)return Ys(i,r)}return n[Si]}function gp(t,n,e,i,r,o,s){for(;e!=null;){let a=i[Yn];if(e.type===128){e=e.next;continue}let l=i[e.index],c=e.type;if(s&&n===0&&(l&&yo(Yt(l),i),e.flags|=2),!cd(e))if(c&8)gp(t,n,e.child,i,r,o,!1),_o(n,t,a,r,l,e,o,i);else if(c&32){let u=up(e,i),f;for(;f=u();)_o(n,t,a,r,f,e,o,i);_o(n,t,a,r,l,e,o,i)}else c&16?l0(t,n,i,e,r,o):_o(n,t,a,r,l,e,o,i);e=s?e.projectionNext:e.next}}function gd(t,n,e,i,r,o){gp(e,i,t.firstChild,n,r,o,!1)}function qM(t,n,e){let i=n[Oe],r=o0(t,e,n),o=e.parent||n[Rt],s=s0(o,e,n);l0(i,0,n,e,r,s)}function l0(t,n,e,i,r,o){let s=e[At],l=s[Rt].projection[i.projection];if(Array.isArray(l))for(let c=0;c<l.length;c++){let u=l[c];_o(n,t,e[Yn],r,u,i,o,e)}else{let c=l,u=s[tt];Sy(i)&&(c.flags|=128),gp(t,n,c,u,r,o,!0)}}function QM(t,n,e,i,r,o,s){let a=i[Si],l=Yt(i);a!==l&&_o(n,t,e,o,a,r,s);for(let c=ze;c<i.length;c++){let u=i[c];gd(u[Y],u,t,n,o,a)}}function YM(t,n,e,i,r){if(n)r?t.addClass(e,i):t.removeClass(e,i);else{let o=i.indexOf("-")===-1?void 0:yn.DashCase;r==null?t.removeStyle(e,i,o):(typeof r=="string"&&r.endsWith("!important")&&(r=r.slice(0,-10),o|=yn.Important),t.setStyle(e,i,r,o))}}function c0(t,n,e,i,r){let o=Nn(),s=i&2;try{Ti(-1),s&&n.length>je&&t0(t,n,je,!1);let a=s?_e.TemplateUpdateStart:_e.TemplateCreateStart;Ee(a,r,e),e(i,r)}finally{Ti(o);let a=s?_e.TemplateUpdateEnd:_e.TemplateCreateEnd;Ee(a,r,e)}}function _d(t,n,e){tT(t,n,e),(e.flags&64)===64&&nT(t,n,e)}function aa(t,n,e=Kt){let i=n.localNames;if(i!==null){let r=n.index+1;for(let o=0;o<i.length;o+=2){let s=i[o+1],a=s===-1?e(n,t):t[s];t[r++]=a}}}function KM(t,n,e,i){let o=i.get(Py,Fy)||e===bn.ShadowDom||e===bn.ExperimentalIsolatedShadowDom,s=t.selectRootElement(n,o);return ZM(s),s}function ZM(t){XM(t)}var XM=()=>null;function JM(t){return t==="class"?"className":t==="for"?"htmlFor":t==="formaction"?"formAction":t==="innerHtml"?"innerHTML":t==="readonly"?"readOnly":t==="tabindex"?"tabIndex":t}function eT(t,n,e,i,r,o){let s=n[Y];if(vd(t,s,n,e,i)){An(t)&&u0(n,t.index);return}t.type&3&&(e=JM(e)),d0(t,n,e,i,r,o)}function d0(t,n,e,i,r,o){if(t.type&3){let s=Kt(t,n);i=o!=null?o(i,t.value||"",e):i,r.setProperty(s,e,i)}else t.type&12}function u0(t,n){let e=Zt(n,t);e[ie]&16||(e[ie]|=64)}function tT(t,n,e){let i=e.directiveStart,r=e.directiveEnd;An(e)&&kM(n,e,t.data[i+e.componentOffset]),t.firstCreatePass||Yc(e,n);let o=e.initialInputs;for(let s=i;s<r;s++){let a=t.data[s],l=Zs(n,t,s,e);if(yo(l,n),o!==null&&oT(n,s-i,l,a,e,o),On(a)){let c=Zt(e.index,n);c[qe]=Zs(n,t,s,e)}}}function nT(t,n,e){let i=e.directiveStart,r=e.directiveEnd,o=e.index,s=gb();try{Ti(o);for(let a=i;a<r;a++){let l=t.data[a],c=n[a];kc(a),(l.hostBindings!==null||l.hostVars!==0||l.hostAttrs!==null)&&iT(l,c)}}finally{Ti(-1),kc(s)}}function iT(t,n){t.hostBindings!==null&&t.hostBindings(1,n)}function _p(t,n){let e=t.directiveRegistry,i=null;if(e)for(let r=0;r<e.length;r++){let o=e[r];Xy(n,o.selectors,!1)&&(i??=[],On(o)?i.unshift(o):i.push(o))}return i}function rT(t,n,e,i,r,o){let s=Kt(t,n);f0(n[Oe],s,o,t.value,e,i,r)}function f0(t,n,e,i,r,o,s){if(o==null)t.removeAttribute(n,r,e);else{let a=s==null?hr(o):s(o,i||"",r);t.setAttribute(n,r,a,e)}}function oT(t,n,e,i,r,o){let s=o[n];if(s!==null)for(let a=0;a<s.length;a+=2){let l=s[a],c=s[a+1];Ih(i,e,l,c)}}function vp(t,n,e,i,r){let o=je+e,s=n[Y],a=r(s,n,t,i,e);n[o]=a,ho(t,!0);let l=t.type===2;return l?(Qy(n[Oe],a,t),(lb()===0||fo(t))&&yo(a,n),cb()):yo(a,n),Nc()&&(!l||!cd(t))&&pp(s,n,a,t),t}function bp(t){let n=t;return $m()?Gm():(n=n.parent,ho(n,!1)),n}function sT(t,n){let e=t[Yn];if(!e)return;let i;try{i=e.get(pn,null)}catch{i=null}i?.(n)}function vd(t,n,e,i,r){let o=t.inputs?.[i],s=t.hostDirectiveInputs?.[i],a=!1;if(s)for(let l=0;l<s.length;l+=2){let c=s[l],u=s[l+1],f=n.data[c];Ih(f,e[c],u,r),a=!0}if(o)for(let l of o){let c=e[l],u=n.data[l];Ih(u,c,i,r),a=!0}return a}function aT(t,n){let e=Zt(n,t),i=e[Y];lT(i,e);let r=e[fn];r!==null&&e[gr]===null&&(e[gr]=Ly(r,e[Yn])),Ee(_e.ComponentStart);try{yp(i,e,e[qe])}finally{Ee(_e.ComponentEnd,e[qe])}}function lT(t,n){for(let e=n.length;e<t.blueprint.length;e++)n.push(t.blueprint[e])}function yp(t,n,e){Ac(n);try{let i=t.viewQuery;i!==null&&_h(1,i,e);let r=t.template;r!==null&&c0(t,n,r,1,e),t.firstCreatePass&&(t.firstCreatePass=!1),n[Rn]?.finishViewCreation(t),t.staticContentQueries&&By(t,n),t.staticViewQueries&&_h(2,t.viewQuery,e);let o=t.components;o!==null&&cT(n,o)}catch(i){throw t.firstCreatePass&&(t.incompleteFirstPass=!0,t.firstCreatePass=!1),i}finally{n[ie]&=-5,Oc()}}function cT(t,n){for(let e=0;e<n.length;e++)aT(t,n[e])}function la(t,n,e,i){let r=K(null);try{let o=n.tView,a=t[ie]&4096?4096:16,l=cp(t,o,e,a,null,n,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),c=t[n.index];l[Ei]=c;let u=t[Rn];return u!==null&&(l[Rn]=u.createEmbeddedView(o)),yp(o,l,e),l}finally{K(r)}}function wo(t,n){return!n||n.firstChild===null||Sy(t)}function Js(t,n,e,i,r=!1){for(;e!==null;){if(e.type===128){e=r?e.projectionNext:e.next;continue}let o=n[e.index];o!==null&&i.push(Yt(o)),hn(o)&&m0(o,i);let s=e.type;if(s&8)Js(t,n,e.child,i);else if(s&32){let a=up(e,n),l;for(;l=a();)i.push(l)}else if(s&16){let a=a0(n,e);if(Array.isArray(a))i.push(...a);else{let l=Ci(n[At]);Js(l[Y],l,a,i,!0)}}e=r?e.projectionNext:e.next}return i}function m0(t,n){for(let e=ze;e<t.length;e++){let i=t[e],r=i[Y].firstChild;r!==null&&Js(i[Y],i,r,n)}t[Si]!==t[fn]&&n.push(t[Si])}function h0(t){if(t[br]!==null){for(let n of t[br])n.impl.addSequence(n);t[br].length=0}}var p0=[];function dT(t){return t[$t]??uT(t)}function uT(t){let n=p0.pop()??Object.create(mT);return n.lView=t,n}function fT(t){t.lView[$t]!==t&&(t.lView=null,p0.push(t))}var mT=Q(_({},Ki),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{Cr(t.lView)},consumerOnSignalRead(){this.lView[$t]=this}});function hT(t){let n=t[$t]??Object.create(pT);return n.lView=t,n}var pT=Q(_({},Ki),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{let n=Ci(t.lView);for(;n&&!g0(n[Y]);)n=Ci(n);n&&Fm(n)},consumerOnSignalRead(){this.lView[$t]=this}});function g0(t){return t.type!==2}function _0(t){if(t[wi]===null)return;let n=!0;for(;n;){let e=!1;for(let i of t[wi])i.dirty&&(e=!0,i.zone===null||Zone.current===i.zone?i.run():i.zone.run(()=>i.run()));n=e&&!!(t[ie]&8192)}}var gT=100;function v0(t,n=0){let i=t[mn].rendererFactory,r=!1;r||i.begin?.();try{_T(t,n)}finally{r||i.end?.()}}function _T(t,n){let e=Wm();try{As(!0),Th(t,n);let i=0;for(;zs(t);){if(i===gT)throw new D(103,!1);i++,Th(t,1)}}finally{As(e)}}function vT(t,n,e,i){if(wr(n))return;let r=n[ie],o=!1,s=!1;Ac(n);let a=!0,l=null,c=null;o||(g0(t)?(c=dT(n),l=pi(c)):Il()===null?(a=!1,c=hT(n),l=pi(c)):n[$t]&&(gi(n[$t]),n[$t]=null));try{Nm(n),mb(t.bindingStartIndex),e!==null&&c0(t,n,e,2,i);let u=(r&3)===3;if(!o)if(u){let h=t.preOrderCheckHooks;h!==null&&Vc(n,h,null)}else{let h=t.preOrderHooks;h!==null&&Hc(n,h,0,null),nh(n,0)}if(s||bT(n),_0(n),b0(n,0),t.contentQueries!==null&&By(t,n),!o)if(u){let h=t.contentCheckHooks;h!==null&&Vc(n,h)}else{let h=t.contentHooks;h!==null&&Hc(n,h,1),nh(n,1)}wT(t,n);let f=t.components;f!==null&&w0(n,f,0);let m=t.viewQuery;if(m!==null&&_h(2,m,i),!o)if(u){let h=t.viewCheckHooks;h!==null&&Vc(n,h)}else{let h=t.viewHooks;h!==null&&Hc(n,h,2),nh(n,2)}if(t.firstUpdatePass===!0&&(t.firstUpdatePass=!1),n[xc]){for(let h of n[xc])h();n[xc]=null}o||(h0(n),n[ie]&=-73)}catch(u){throw o||Cr(n),u}finally{c!==null&&(Xi(c,l),a&&fT(c)),Oc()}}function b0(t,n){for(let e=Ty(t);e!==null;e=ky(e))for(let i=ze;i<e.length;i++){let r=e[i];y0(r,n)}}function bT(t){for(let n=Ty(t);n!==null;n=ky(n)){if(!(n[ie]&2))continue;let e=n[yr];for(let i=0;i<e.length;i++){let r=e[i];Fm(r)}}}function yT(t,n,e){Ee(_e.ComponentStart);let i=Zt(n,t);try{y0(i,e)}finally{Ee(_e.ComponentEnd,i[qe])}}function y0(t,n){Ic(t)&&Th(t,n)}function Th(t,n){let i=t[Y],r=t[ie],o=t[$t],s=!!(n===0&&r&16);if(s||=!!(r&64&&n===0),s||=!!(r&1024),s||=!!(o?.dirty&&Kr(o)),s||=!1,o&&(o.dirty=!1),t[ie]&=-9217,s)vT(i,t,i.template,t[qe]);else if(r&8192){let a=K(null);try{_0(t),b0(t,1);let l=i.components;l!==null&&w0(t,l,1),h0(t)}finally{K(a)}}}function w0(t,n,e){for(let i=0;i<n.length;i++)yT(t,n[i],e)}function wT(t,n){let e=t.hostBindingOpCodes;if(e!==null)try{for(let i=0;i<e.length;i++){let r=e[i];if(r<0)Ti(~r);else{let o=r,s=e[++i],a=e[++i];pb(s,o);let l=n[o];Ee(_e.HostBindingsUpdateStart,l);try{a(2,l)}finally{Ee(_e.HostBindingsUpdateEnd,l)}}}}finally{Ti(-1)}}function wp(t,n){let e=Wm()?64:1088;for(t[mn].changeDetectionScheduler?.notify(n);t;){t[ie]|=e;let i=Ci(t);if(mo(t)&&!i)return t;t=i}return null}function C0(t,n,e,i){return[t,!0,0,n,null,i,null,e,null,null]}function D0(t,n){let e=ze+n;if(e<t.length)return t[e]}function ca(t,n,e,i=!0){let r=n[Y];if(CT(r,n,t,e),i){let s=Mh(e,t),a=n[Oe],l=a.parentNode(t[Si]);l!==null&&jM(r,t[Rt],a,n,l,s)}let o=n[gr];o!==null&&o.firstChild!==null&&(o.firstChild=null)}function x0(t,n){let e=ea(t,n);return e!==void 0&&pd(e[Y],e),e}function ea(t,n){if(t.length<=ze)return;let e=ze+n,i=t[e];if(i){let r=i[Ei];r!==null&&r!==t&&hp(r,i),n>0&&(t[e-1][Qt]=i[Qt]);let o=js(t,ze+n);BM(i[Y],i);let s=o[Rn];s!==null&&s.detachView(o[Y]),i[tt]=null,i[Qt]=null,i[ie]&=-129}return i}function CT(t,n,e,i){let r=ze+i,o=e.length;i>0&&(e[r-1][Qt]=n),i<o-ze?(n[Qt]=e[r],ym(e,ze+i,n)):(e.push(n),n[Qt]=null),n[tt]=e;let s=n[Ei];s!==null&&e!==s&&E0(s,n);let a=n[Rn];a!==null&&a.insertView(t),Sc(n),n[ie]|=128}function E0(t,n){let e=t[yr],i=n[tt];if(Zn(i))t[ie]|=2;else{let r=i[tt][At];n[At]!==r&&(t[ie]|=2)}e===null?t[yr]=[n]:e.push(n)}var ki=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let n=this._lView,e=n[Y];return Js(e,n,e.firstChild,[])}constructor(n,e){this._lView=n,this._cdRefInjectingView=e}get context(){return this._lView[qe]}set context(n){this._lView[qe]=n}get destroyed(){return wr(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let n=this._lView[tt];if(hn(n)){let e=n[Hs],i=e?e.indexOf(this):-1;i>-1&&(ea(n,i),js(e,i))}this._attachedToViewContainer=!1}pd(this._lView[Y],this._lView)}onDestroy(n){Pm(this._lView,n)}markForCheck(){wp(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[ie]&=-129}reattach(){Sc(this._lView),this._lView[ie]|=128}detectChanges(){this._lView[ie]|=1024,v0(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new D(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let n=mo(this._lView),e=this._lView[Ei];e!==null&&!n&&hp(e,this._lView),r0(this._lView[Y],this._lView)}attachToAppRef(n){if(this._attachedToViewContainer)throw new D(902,!1);this._appRef=n;let e=mo(this._lView),i=this._lView[Ei];i!==null&&!e&&E0(i,this._lView),Sc(this._lView)}};var bt=(()=>{class t{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=DT;constructor(e,i,r){this._declarationLView=e,this._declarationTContainer=i,this.elementRef=r}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,i){return this.createEmbeddedViewImpl(e,i)}createEmbeddedViewImpl(e,i,r){let o=la(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:i,dehydratedView:r});return new ki(o)}}return t})();function DT(){return bd(ft(),te())}function bd(t,n){return t.type&4?new bt(n,t,xo(t,n)):null}function Eo(t,n,e,i,r){let o=t.data[n];if(o===null)o=xT(t,n,e,i,r),hb()&&(o.flags|=32);else if(o.type&64){o.type=e,o.value=i,o.attrs=r;let s=db();o.injectorIndex=s===null?-1:s.injectorIndex}return ho(o,!0),o}function xT(t,n,e,i,r){let o=Um(),s=$m(),a=s?o:o&&o.parent,l=t.data[n]=IT(t,a,e,n,i,r);return ET(t,l,o,s),l}function ET(t,n,e,i){t.firstChild===null&&(t.firstChild=n),e!==null&&(i?e.child==null&&n.parent!==null&&(e.child=n):e.next===null&&(e.next=n,n.prev=e))}function IT(t,n,e,i,r,o){let s=n?n.injectorIndex:-1,a=0;return Vm()&&(a|=128),{type:e,index:i,insertBeforeIndex:null,injectorIndex:s,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,controlDirectiveIndex:-1,customControlIndex:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,namespace:Km(),attrs:o,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:n,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function ST(t){let n=t[Mm]??[],i=t[tt][Oe],r=[];for(let o of n)o.data[Ny]!==void 0?r.push(o):MT(o,i);t[Mm]=r}function MT(t,n){let e=0,i=t.firstChild;if(i){let r=t.data[Oy];for(;e<r;){let o=i.nextSibling;qy(n,i,!1),i=o,e++}}}var TT=()=>null,kT=()=>null;function Zc(t,n){return TT(t,n)}function I0(t,n,e){return kT(t,n,e)}var S0=class{},yd=class{},kh=class{resolveComponentFactory(n){throw new D(917,!1)}},da=class{static NULL=new kh},ht=class{},Be=(()=>{class t{destroyNode=null;static __NG_ELEMENT_ID__=()=>RT()}return t})();function RT(){let t=te(),n=ft(),e=Zt(n.index,t);return(Zn(e)?e:t)[Oe]}var M0=(()=>{class t{static \u0275prov=w({token:t,providedIn:"root",factory:()=>null})}return t})();var Uc={},Rh=class{injector;parentInjector;constructor(n,e){this.injector=n,this.parentInjector=e}get(n,e,i){let r=this.injector.get(n,Uc,i);return r!==Uc||e===Uc?r:this.parentInjector.get(n,e,i)}};function Xc(t,n,e){let i=e?t.styles:null,r=e?t.classes:null,o=0;if(n!==null)for(let s=0;s<n.length;s++){let a=n[s];if(typeof a=="number")o=a;else if(o==1)r=gc(r,a);else if(o==2){let l=a,c=n[++s];i=gc(i,l+": "+c+";")}}e?t.styles=i:t.stylesWithoutHost=i,e?t.classes=r:t.classesWithoutHost=r}function Ve(t,n=0){let e=te();if(e===null)return R(t,n);let i=ft();return Dy(i,e,_t(t),n)}function Cp(){let t="invalid";throw new Error(t)}function T0(t,n,e,i,r){let o=i===null?null:{"":-1},s=r(t,e);if(s!==null){let a=s,l=null,c=null;for(let u of s)if(u.resolveHostDirectives!==null){[a,l,c]=u.resolveHostDirectives(s);break}NT(t,n,e,a,o,l,c)}o!==null&&i!==null&&AT(e,i,o)}function AT(t,n,e){let i=t.localNames=[];for(let r=0;r<n.length;r+=2){let o=e[n[r+1]];if(o==null)throw new D(-301,!1);i.push(n[r],o)}}function OT(t,n,e){n.componentOffset=e,(t.components??=[]).push(n.index)}function NT(t,n,e,i,r,o,s){let a=i.length,l=null;for(let m=0;m<a;m++){let h=i[m];l===null&&On(h)&&(l=h,OT(t,e,m)),mh(Yc(e,n),t,h.type)}VT(e,t.data.length,a),l?.viewProvidersResolver&&l.viewProvidersResolver(l);for(let m=0;m<a;m++){let h=i[m];h.providersResolver&&h.providersResolver(h)}let c=!1,u=!1,f=e0(t,n,a,null);a>0&&(e.directiveToIndex=new Map);for(let m=0;m<a;m++){let h=i[m];if(e.mergedAttrs=bo(e.mergedAttrs,h.hostAttrs),PT(t,e,n,f,h),jT(f,h,r),s!==null&&s.has(h)){let[S,k]=s.get(h);e.directiveToIndex.set(h.type,[f,S+e.directiveStart,k+e.directiveStart])}else(o===null||!o.has(h))&&e.directiveToIndex.set(h.type,f);h.contentQueries!==null&&(e.flags|=4),(h.hostBindings!==null||h.hostAttrs!==null||h.hostVars!==0)&&(e.flags|=64);let y=h.type.prototype;!c&&(y.ngOnChanges||y.ngOnInit||y.ngDoCheck)&&((t.preOrderHooks??=[]).push(e.index),c=!0),!u&&(y.ngOnChanges||y.ngDoCheck)&&((t.preOrderCheckHooks??=[]).push(e.index),u=!0),f++}FT(t,e,o)}function FT(t,n,e){for(let i=n.directiveStart;i<n.directiveEnd;i++){let r=t.data[i];if(e===null||!e.has(r))Yb(0,n,r,i),Yb(1,n,r,i),Zb(n,i,!1);else{let o=e.get(r);Kb(0,n,o,i),Kb(1,n,o,i),Zb(n,i,!0)}}}function Yb(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let s;t===0?s=n.inputs??={}:s=n.outputs??={},s[o]??=[],s[o].push(i),k0(n,o)}}function Kb(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let s=r[o],a;t===0?a=n.hostDirectiveInputs??={}:a=n.hostDirectiveOutputs??={},a[s]??=[],a[s].push(i,o),k0(n,s)}}function k0(t,n){n==="class"?t.flags|=8:n==="style"&&(t.flags|=16)}function Zb(t,n,e){let{attrs:i,inputs:r,hostDirectiveInputs:o}=t;if(i===null||!e&&r===null||e&&o===null||ap(t)){t.initialInputs??=[],t.initialInputs.push(null);return}let s=null,a=0;for(;a<i.length;){let l=i[a];if(l===0){a+=4;continue}else if(l===5){a+=2;continue}else if(typeof l=="number")break;if(!e&&r.hasOwnProperty(l)){let c=r[l];for(let u of c)if(u===n){s??=[],s.push(l,i[a+1]);break}}else if(e&&o.hasOwnProperty(l)){let c=o[l];for(let u=0;u<c.length;u+=2)if(c[u]===n){s??=[],s.push(c[u+1],i[a+1]);break}}a+=2}t.initialInputs??=[],t.initialInputs.push(s)}function PT(t,n,e,i,r){t.data[i]=r;let o=r.factory||(r.factory=yi(r.type,!0)),s=new Er(o,On(r),Ve,null);t.blueprint[i]=s,e[i]=s,LT(t,n,i,e0(t,e,r.hostVars,Bt),r)}function LT(t,n,e,i,r){let o=r.hostBindings;if(o){let s=t.hostBindingOpCodes;s===null&&(s=t.hostBindingOpCodes=[]);let a=~n.index;BT(s)!=a&&s.push(a),s.push(e,i,o)}}function BT(t){let n=t.length;for(;n>0;){let e=t[--n];if(typeof e=="number"&&e<0)return e}return 0}function jT(t,n,e){if(e){if(n.exportAs)for(let i=0;i<n.exportAs.length;i++)e[n.exportAs[i]]=t;On(n)&&(e[""]=t)}}function VT(t,n,e){t.flags|=1,t.directiveStart=n,t.directiveEnd=n+e,t.providerIndexes=n}function Dp(t,n,e,i,r,o,s,a){let l=n[Y],c=l.consts,u=Gt(c,s),f=Eo(l,t,e,i,u);return o&&T0(l,n,f,Gt(c,a),r),f.mergedAttrs=bo(f.mergedAttrs,f.attrs),f.attrs!==null&&Xc(f,f.attrs,!1),f.mergedAttrs!==null&&Xc(f,f.mergedAttrs,!0),l.queries!==null&&l.queries.elementStart(l,f),f}function xp(t,n){hy(t,n),Tm(n)&&t.queries.elementEnd(n)}function HT(t,n,e,i,r,o){let s=n.consts,a=Gt(s,r),l=Eo(n,t,e,i,a);if(l.mergedAttrs=bo(l.mergedAttrs,l.attrs),o!=null){let c=Gt(s,o);l.localNames=[];for(let u=0;u<c.length;u+=2)l.localNames.push(c[u],-1)}return l.attrs!==null&&Xc(l,l.attrs,!1),l.mergedAttrs!==null&&Xc(l,l.mergedAttrs,!0),n.queries!==null&&n.queries.elementStart(n,l),l}function Ep(t){return t!==null&&(typeof t=="function"||typeof t=="object")}function zT(t,n,e){return t[n]=e}function Xt(t,n,e){if(e===Bt)return!1;let i=t[n];return Object.is(i,e)?!1:(t[n]=e,!0)}function UT(t,n,e,i){let r=Xt(t,n,e);return Xt(t,n+1,i)||r}function $c(t,n,e){return function i(r){let o=i.__ngNativeEl__;o!==void 0&&jS(r,o);let s=An(t)?Zt(t.index,n):n;wp(s,5);let a=n[qe],l=Xb(n,a,e,r),c=i.__ngNextListenerFn__;for(;c;)l=Xb(n,a,c,r)&&l,c=c.__ngNextListenerFn__;return l}}function Xb(t,n,e,i){let r=K(null);try{return Ee(_e.OutputStart,n,e),e(i)!==!1}catch(o){return sT(t,o),!1}finally{Ee(_e.OutputEnd,n,e),K(r)}}function R0(t,n,e,i,r,o,s,a){let l=fo(t),c=!1,u=null;if(!i&&l&&(u=GT(n,e,o,t.index)),u!==null){let f=u.__ngLastListenerFn__||u;f.__ngNextListenerFn__=s,u.__ngLastListenerFn__=s,c=!0}else{let f=Kt(t,e),m=i?i(f):f;HS(e,m,o,a),i||(a.__ngNativeEl__=f);let h=r.listen(m,o,a);if(!$T(o)){let y=i?S=>i(Yt(S[t.index])):t.index;A0(y,n,e,o,a,h,!1)}}return c}function $T(t){return t.startsWith("animation")||t.startsWith("transition")}function GT(t,n,e,i){let r=t.cleanup;if(r!=null)for(let o=0;o<r.length-1;o+=2){let s=r[o];if(s===e&&r[o+1]===i){let a=n[co],l=r[o+2];return a&&a.length>l?a[l]:null}typeof s=="string"&&(o+=2)}return null}function A0(t,n,e,i,r,o,s){let a=n.firstCreatePass?Bm(n):null,l=Lm(e),c=l.length;l.push(r,o),a&&a.push(i,t,c,(c+1)*(s?-1:1))}function Jb(t,n,e,i,r,o){let s=n[e],a=n[Y],c=a.data[e].outputs[i],f=s[c].subscribe(o);A0(t.index,a,n,r,o,f,!0)}var Ah=Symbol("BINDING");function O0(t){return t.debugInfo?.className||t.type.name||null}var Jc=class extends da{ngModule;constructor(n){super(),this.ngModule=n}resolveComponentFactory(n){let e=Qn(n);return new Sr(e,this.ngModule)}};function WT(t){return Object.keys(t).map(n=>{let[e,i,r]=t[n],o={propName:e,templateName:n,isSignal:(i&fd.SignalBased)!==0};return r&&(o.transform=r),o})}function qT(t){return Object.keys(t).map(n=>({propName:t[n],templateName:n}))}function QT(t,n,e){let i=n instanceof Te?n:n?.injector;return i&&t.getStandaloneInjector!==null&&(i=t.getStandaloneInjector(i)||i),i?new Rh(e,i):e}function YT(t){let n=t.get(ht,null);if(n===null)throw new D(407,!1);let e=t.get(M0,null),i=t.get(Tn,null),r=t.get(Cn,null,{optional:!0});return{rendererFactory:n,sanitizer:e,changeDetectionScheduler:i,ngReflect:!1,tracingService:r}}function KT(t,n){let e=N0(t);return Gy(n,e,e==="svg"?km:e==="math"?nb:null)}function ZT(t){if(t?.toLowerCase()==="script")throw new D(905,!1)}function N0(t){return(t.selectors[0][0]||"div").toLowerCase()}var Sr=class extends yd{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=WT(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=qT(this.componentDef.outputs),this.cachedOutputs}constructor(n,e){super(),this.componentDef=n,this.ngModule=e,this.componentType=n.type,this.selector=IM(n.selectors),this.ngContentSelectors=n.ngContentSelectors??[],this.isBoundToModule=!!e}create(n,e,i,r,o,s){Ee(_e.DynamicComponentStart);let a=K(null);try{let l=this.componentDef,c=QT(l,r||this.ngModule,n),u=YT(c),f=u.tracingService;return f&&f.componentCreate?f.componentCreate(O0(l),()=>this.createComponentRef(u,c,e,i,o,s)):this.createComponentRef(u,c,e,i,o,s)}finally{K(a)}}createComponentRef(n,e,i,r,o,s){let a=this.componentDef,l=XT(r,a,s,o),c=n.rendererFactory.createRenderer(null,a),u=r?KM(c,r,a.encapsulation,e):KT(a,c);ZT(u?.tagName);let f=s?.some(ey)||o?.some(y=>typeof y!="function"&&y.bindings.some(ey)),m=cp(null,l,null,512|Jy(a),null,null,n,c,e,null,Ly(u,e,!0));m[je]=u,Ac(m);let h=null;try{let y=Dp(je,m,2,"#host",()=>l.directiveRegistry,!0,0);Qy(c,u,y),yo(u,m),_d(l,m,y),Jh(l,y,m),xp(l,y),i!==void 0&&ek(y,this.ngContentSelectors,i),h=Zt(y.index,m),m[qe]=h[qe],yp(l,m,null)}catch(y){throw h!==null&&ph(h),ph(m),y}finally{Ee(_e.DynamicComponentEnd),Oc()}return new ed(this.componentType,m,!!f)}};function XT(t,n,e,i){let r=t?["ng-version","21.2.18"]:SM(n.selectors[0]),o=null,s=null,a=0;if(e)for(let u of e)a+=u[Ah].requiredVars,u.create&&(u.targetIdx=0,(o??=[]).push(u)),u.update&&(u.targetIdx=0,(s??=[]).push(u));if(i)for(let u=0;u<i.length;u++){let f=i[u];if(typeof f!="function")for(let m of f.bindings){a+=m[Ah].requiredVars;let h=u+1;m.create&&(m.targetIdx=h,(o??=[]).push(m)),m.update&&(m.targetIdx=h,(s??=[]).push(m))}}let l=[n];if(i)for(let u of i){let f=typeof u=="function"?u:u.type,m=_m(f);l.push(m)}return lp(0,null,JT(o,s),1,a,l,null,null,null,[r],null)}function JT(t,n){return!t&&!n?null:e=>{if(e&1&&t)for(let i of t)i.create();if(e&2&&n)for(let i of n)i.update()}}function ey(t){let n=t[Ah].kind;return n==="input"||n==="twoWay"}var ed=class extends S0{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(n,e,i){super(),this._rootLView=e,this._hasInputBindings=i,this._tNode=Ec(e[Y],je),this.location=xo(this._tNode,e),this.instance=Zt(this._tNode.index,e)[qe],this.hostView=this.changeDetectorRef=new ki(e,void 0),this.componentType=n}setInput(n,e){this._hasInputBindings;let i=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(n)&&Object.is(this.previousInputValues.get(n),e))return;let r=this._rootLView,o=vd(i,r[Y],r,n,e);this.previousInputValues.set(n,e);let s=Zt(i.index,r);wp(s,1)}get injector(){return new xr(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(n){this.hostView.onDestroy(n)}};function ek(t,n,e){let i=t.projection=[];for(let r=0;r<n.length;r++){let o=e[r];i.push(o!=null&&o.length?Array.from(o):null)}}var ot=(()=>{class t{static __NG_ELEMENT_ID__=tk}return t})();function tk(){let t=ft();return F0(t,te())}var Oh=class t extends ot{_lContainer;_hostTNode;_hostLView;constructor(n,e,i){super(),this._lContainer=n,this._hostTNode=e,this._hostLView=i}get element(){return xo(this._hostTNode,this._hostLView)}get injector(){return new xr(this._hostTNode,this._hostLView)}get parentInjector(){let n=Yh(this._hostTNode,this._hostLView);if(_y(n)){let e=qc(n,this._hostLView),i=Wc(n),r=e[Y].data[i+8];return new xr(r,e)}else return new xr(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(n){let e=ty(this._lContainer);return e!==null&&e[n]||null}get length(){return this._lContainer.length-ze}createEmbeddedView(n,e,i){let r,o;typeof i=="number"?r=i:i!=null&&(r=i.index,o=i.injector);let s=Zc(this._lContainer,n.ssrId),a=n.createEmbeddedViewImpl(e||{},o,s);return this.insertImpl(a,r,wo(this._hostTNode,s)),a}createComponent(n,e,i,r,o,s,a){let l=n&&!hS(n),c;if(l)c=e;else{let k=e||{};c=k.index,i=k.injector,r=k.projectableNodes,o=k.environmentInjector||k.ngModuleRef,s=k.directives,a=k.bindings}let u=l?n:new Sr(Qn(n)),f=i||this.parentInjector;if(!o&&u.ngModule==null){let B=(l?f:this.parentInjector).get(Te,null);B&&(o=B)}let m=Qn(u.componentType??{}),h=Zc(this._lContainer,m?.id??null),y=h?.firstChild??null,S=u.create(f,r,y,o,s,a);return this.insertImpl(S.hostView,c,wo(this._hostTNode,h)),S}insert(n,e){return this.insertImpl(n,e,!0)}insertImpl(n,e,i){let r=n._lView;if(rb(r)){let a=this.indexOf(n);if(a!==-1)this.detach(a);else{let l=r[tt],c=new t(l,l[Rt],l[tt]);c.detach(c.indexOf(n))}}let o=this._adjustIndex(e),s=this._lContainer;return ca(s,r,o,i),n.attachToViewContainerRef(),ym(oh(s),o,n),n}move(n,e){return this.insert(n,e)}indexOf(n){let e=ty(this._lContainer);return e!==null?e.indexOf(n):-1}remove(n){let e=this._adjustIndex(n,-1),i=ea(this._lContainer,e);i&&(js(oh(this._lContainer),e),pd(i[Y],i))}detach(n){let e=this._adjustIndex(n,-1),i=ea(this._lContainer,e);return i&&js(oh(this._lContainer),e)!=null?new ki(i):null}_adjustIndex(n,e=0){return n??this.length+e}};function ty(t){return t[Hs]}function oh(t){return t[Hs]||(t[Hs]=[])}function F0(t,n){let e,i=n[t.index];return hn(i)?e=i:(e=C0(i,n,null,t),n[t.index]=e,dp(n,e)),ik(e,n,t,i),new Oh(e,t,n)}function nk(t,n){let e=t[Oe],i=e.createComment(""),r=Kt(n,t),o=e.parentNode(r);return Kc(e,o,i,e.nextSibling(r),!1),i}var ik=sk,rk=()=>!1;function ok(t,n,e){return rk(t,n,e)}function sk(t,n,e,i){if(t[Si])return;let r;e.type&8?r=Yt(i):r=nk(n,e),t[Si]=r}var Nh=class t{queryList;matches=null;constructor(n){this.queryList=n}clone(){return new t(this.queryList)}setDirty(){this.queryList.setDirty()}},Fh=class t{queries;constructor(n=[]){this.queries=n}createEmbeddedView(n){let e=n.queries;if(e!==null){let i=n.contentQueries!==null?n.contentQueries[0]:e.length,r=[];for(let o=0;o<i;o++){let s=e.getByIndex(o),a=this.queries[s.indexInDeclarationView];r.push(a.clone())}return new t(r)}return null}insertView(n){this.dirtyQueriesWithMatches(n)}detachView(n){this.dirtyQueriesWithMatches(n)}finishViewCreation(n){this.dirtyQueriesWithMatches(n)}dirtyQueriesWithMatches(n){for(let e=0;e<this.queries.length;e++)Sp(n,e).matches!==null&&this.queries[e].setDirty()}},td=class{flags;read;predicate;constructor(n,e,i=null){this.flags=e,this.read=i,typeof n=="string"?this.predicate=uk(n):this.predicate=n}},Ph=class t{queries;constructor(n=[]){this.queries=n}elementStart(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(n,e)}elementEnd(n){for(let e=0;e<this.queries.length;e++)this.queries[e].elementEnd(n)}embeddedTView(n){let e=null;for(let i=0;i<this.length;i++){let r=e!==null?e.length:0,o=this.getByIndex(i).embeddedTView(n,r);o&&(o.indexInDeclarationView=i,e!==null?e.push(o):e=[o])}return e!==null?new t(e):null}template(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].template(n,e)}getByIndex(n){return this.queries[n]}get length(){return this.queries.length}track(n){this.queries.push(n)}},Lh=class t{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(n,e=-1){this.metadata=n,this._declarationNodeIndex=e}elementStart(n,e){this.isApplyingToNode(e)&&this.matchTNode(n,e)}elementEnd(n){this._declarationNodeIndex===n.index&&(this._appliesToNextNode=!1)}template(n,e){this.elementStart(n,e)}embeddedTView(n,e){return this.isApplyingToNode(n)?(this.crossesNgTemplate=!0,this.addMatch(-n.index,e),new t(this.metadata)):null}isApplyingToNode(n){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let e=this._declarationNodeIndex,i=n.parent;for(;i!==null&&i.type&8&&i.index!==e;)i=i.parent;return e===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(n,e){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let o=i[r];this.matchTNodeWithReadOption(n,e,ak(e,o)),this.matchTNodeWithReadOption(n,e,zc(e,n,o,!1,!1))}else i===bt?e.type&4&&this.matchTNodeWithReadOption(n,e,-1):this.matchTNodeWithReadOption(n,e,zc(e,n,i,!1,!1))}matchTNodeWithReadOption(n,e,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===F||r===ot||r===bt&&e.type&4)this.addMatch(e.index,-2);else{let o=zc(e,n,r,!1,!1);o!==null&&this.addMatch(e.index,o)}else this.addMatch(e.index,i)}}addMatch(n,e){this.matches===null?this.matches=[n,e]:this.matches.push(n,e)}};function ak(t,n){let e=t.localNames;if(e!==null){for(let i=0;i<e.length;i+=2)if(e[i]===n)return e[i+1]}return null}function lk(t,n){return t.type&11?xo(t,n):t.type&4?bd(t,n):null}function ck(t,n,e,i){return e===-1?lk(n,t):e===-2?dk(t,n,i):Zs(t,t[Y],e,n)}function dk(t,n,e){if(e===F)return xo(n,t);if(e===bt)return bd(n,t);if(e===ot)return F0(n,t)}function P0(t,n,e,i){let r=n[Rn].queries[i];if(r.matches===null){let o=t.data,s=e.matches,a=[];for(let l=0;s!==null&&l<s.length;l+=2){let c=s[l];if(c<0)a.push(null);else{let u=o[c];a.push(ck(n,u,s[l+1],e.metadata.read))}}r.matches=a}return r.matches}function Bh(t,n,e,i){let r=t.queries.getByIndex(e),o=r.matches;if(o!==null){let s=P0(t,n,r,e);for(let a=0;a<o.length;a+=2){let l=o[a];if(l>0)i.push(s[a/2]);else{let c=o[a+1],u=n[-l];for(let f=ze;f<u.length;f++){let m=u[f];m[Ei]===m[tt]&&Bh(m[Y],m,c,i)}if(u[yr]!==null){let f=u[yr];for(let m=0;m<f.length;m++){let h=f[m];Bh(h[Y],h,c,i)}}}}}return i}function Ip(t,n){return t[Rn].queries[n].queryList}function L0(t,n,e){let i=new vn((e&4)===4);return ab(t,n,i,i.destroy),(n[Rn]??=new Fh).queries.push(new Nh(i))-1}function B0(t,n,e){let i=Fe();return i.firstCreatePass&&(V0(i,new td(t,n,e),-1),(n&2)===2&&(i.staticViewQueries=!0)),L0(i,te(),n)}function j0(t,n,e,i){let r=Fe();if(r.firstCreatePass){let o=ft();V0(r,new td(n,e,i),o.index),fk(r,t),(e&2)===2&&(r.staticContentQueries=!0)}return L0(r,te(),e)}function uk(t){return t.split(",").map(n=>n.trim())}function V0(t,n,e){t.queries===null&&(t.queries=new Ph),t.queries.track(new Lh(n,e))}function fk(t,n){let e=t.contentQueries||(t.contentQueries=[]),i=e.length?e[e.length-1]:-1;n!==i&&e.push(t.queries.length-1,n)}function Sp(t,n){return t.queries.getByIndex(n)}function H0(t,n){let e=t[Y],i=Sp(e,n);return i.crossesNgTemplate?Bh(e,t,n,[]):P0(e,t,i,n)}function z0(t,n,e){let i,r=ys(()=>{i._dirtyCounter();let o=mk(i,t);if(n&&o===void 0)throw new D(-951,!1);return o});return i=r[et],i._dirtyCounter=xe(0),i._flatValue=void 0,r}function Mp(t){return z0(!0,!1,t)}function Tp(t){return z0(!0,!0,t)}function U0(t,n){let e=t[et];e._lView=te(),e._queryIndex=n,e._queryList=Ip(e._lView,n),e._queryList.onDirty(()=>e._dirtyCounter.update(i=>i+1))}function mk(t,n){let e=t._lView,i=t._queryIndex;if(e===void 0||i===void 0||e[ie]&4)return n?void 0:Dt;let r=Ip(e,i),o=H0(e,i);return r.reset(o,Iy),n?r.first:r._changesDetected||t._flatValue===void 0?t._flatValue=r.toArray():t._flatValue}var Pn=class{},wd=class{};var nd=class extends Pn{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new Jc(this);constructor(n,e,i,r=!0){super(),this.ngModuleType=n,this._parent=e;let o=gm(n);this._bootstrapComponents=Ky(o.bootstrap),this._r3Injector=Zm(n,e,[{provide:Pn,useValue:this},{provide:da,useValue:this.componentFactoryResolver},...i],Fs(n),new Set(["environment"])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let n=this._r3Injector;!n.destroyed&&n.destroy(),this.destroyCbs.forEach(e=>e()),this.destroyCbs=null}onDestroy(n){this.destroyCbs.push(n)}},id=class extends wd{moduleType;constructor(n){super(),this.moduleType=n}create(n){return new nd(this.moduleType,n,[])}};var ta=class extends Pn{injector;componentFactoryResolver=new Jc(this);instance=null;constructor(n){super();let e=new fr([...n.providers,{provide:Pn,useValue:this},{provide:da,useValue:this.componentFactoryResolver}],n.parent||lo(),n.debugName,new Set(["environment"]));this.injector=e,n.runEnvironmentInitializers&&e.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(n){this.injector.onDestroy(n)}};function ua(t,n,e=null){return new ta({providers:t,parent:n,debugName:e,runEnvironmentInitializers:!0}).injector}var hk=(()=>{class t{_injector;cachedInjectors=new Map;constructor(e){this._injector=e}getOrCreateStandaloneInjector(e){if(!e.standalone)return null;if(!this.cachedInjectors.has(e)){let i=Dm(!1,e.type),r=i.length>0?ua([i],this._injector,""):null;this.cachedInjectors.set(e,r)}return this.cachedInjectors.get(e)}ngOnDestroy(){try{for(let e of this.cachedInjectors.values())e!==null&&e.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=w({token:t,providedIn:"environment",factory:()=>new t(R(Te))})}return t})();function E(t){return ia(()=>{let n=$0(t),e=Q(_({},n),{decls:t.decls,vars:t.vars,template:t.template,consts:t.consts||null,ngContentSelectors:t.ngContentSelectors,onPush:t.changeDetection===Zh.OnPush,directiveDefs:null,pipeDefs:null,dependencies:n.standalone&&t.dependencies||null,getStandaloneInjector:n.standalone?r=>r.get(hk).getOrCreateStandaloneInjector(e):null,getExternalStyles:null,signals:t.signals??!1,data:t.data||{},encapsulation:t.encapsulation||bn.Emulated,styles:t.styles||Dt,_:null,schemas:t.schemas||null,tView:null,id:""});n.standalone&&Ai("NgStandalone"),G0(e);let i=t.dependencies;return e.directiveDefs=ny(i,pk),e.pipeDefs=ny(i,Uv),e.id=vk(e),e})}function pk(t){return Qn(t)||_m(t)}function M(t){return ia(()=>({type:t.type,bootstrap:t.bootstrap||Dt,declarations:t.declarations||Dt,imports:t.imports||Dt,exports:t.exports||Dt,transitiveCompileScopes:null,schemas:t.schemas||null,id:t.id||null}))}function gk(t,n){if(t==null)return xi;let e={};for(let i in t)if(t.hasOwnProperty(i)){let r=t[i],o,s,a,l;Array.isArray(r)?(a=r[0],o=r[1],s=r[2]??o,l=r[3]||null):(o=r,s=r,a=fd.None,l=null),e[o]=[i,a,l],n[o]=s}return e}function _k(t){if(t==null)return xi;let n={};for(let e in t)t.hasOwnProperty(e)&&(n[t[e]]=e);return n}function j(t){return ia(()=>{let n=$0(t);return G0(n),n})}function Cd(t){return{type:t.type,name:t.name,factory:null,pure:t.pure!==!1,standalone:t.standalone??!0,onDestroy:t.type.prototype.ngOnDestroy||null}}function $0(t){let n={};return{type:t.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:t.hostBindings||null,hostVars:t.hostVars||0,hostAttrs:t.hostAttrs||null,contentQueries:t.contentQueries||null,declaredInputs:n,inputConfig:t.inputs||xi,exportAs:t.exportAs||null,standalone:t.standalone??!0,signals:t.signals===!0,selectors:t.selectors||Dt,viewQuery:t.viewQuery||null,features:t.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,controlDef:null,inputs:gk(t.inputs,n),outputs:_k(t.outputs),debugInfo:null}}function G0(t){t.features?.forEach(n=>n(t))}function ny(t,n){return t?()=>{let e=typeof t=="function"?t():t,i=[];for(let r of e){let o=n(r);o!==null&&i.push(o)}return i}:null}function vk(t){let n=0,e=typeof t.consts=="function"?"":t.consts,i=[t.selectors,t.ngContentSelectors,t.hostVars,t.hostAttrs,e,t.vars,t.decls,t.encapsulation,t.standalone,t.signals,t.exportAs,JSON.stringify(t.inputs),JSON.stringify(t.outputs),Object.getOwnPropertyNames(t.type.prototype),!!t.contentQueries,!!t.viewQuery];for(let o of i.join("|"))n=Math.imul(31,n)+o.charCodeAt(0)<<0;return n+=2147483648,"c"+n}function bk(t){return Object.getPrototypeOf(t.prototype).constructor}function ke(t){let n=bk(t.type),e=!0,i=[t];for(;n&&n!==Function.prototype&&n!==Object.prototype;){let r,o=Object.hasOwn(n,Ls)?n[Ls]:void 0,s=Object.hasOwn(n,Bs)?n[Bs]:void 0;if(On(t))r=o??s;else{if(o)throw new D(903,!1);r=s}if(r){if(e){i.push(r);let l=t;l.inputs=sh(t.inputs),l.declaredInputs=sh(t.declaredInputs),l.outputs=sh(t.outputs);let c=r.hostBindings;c&&xk(t,c);let u=r.viewQuery,f=r.contentQueries;if(u&&Ck(t,u),f&&Dk(t,f),yk(t,r),zv(t.outputs,r.outputs),On(r)&&r.data.animation){let m=t.data;m.animation=(m.animation||[]).concat(r.data.animation)}}let a=r.features;if(a)for(let l=0;l<a.length;l++){let c=a[l];c&&c.ngInherit&&c(t),c===ke&&(e=!1)}}n=Object.getPrototypeOf(n)}wk(i)}function yk(t,n){for(let e in n.inputs){if(!n.inputs.hasOwnProperty(e)||t.inputs.hasOwnProperty(e))continue;let i=n.inputs[e];i!==void 0&&(t.inputs[e]=i,t.declaredInputs[e]=n.declaredInputs[e])}}function wk(t){let n=0,e=null;for(let i=t.length-1;i>=0;i--){let r=t[i];r.hostVars=n+=r.hostVars,r.hostAttrs=bo(r.hostAttrs,e=bo(e,r.hostAttrs))}}function sh(t){return t===xi?{}:t===Dt?[]:t}function Ck(t,n){let e=t.viewQuery;e?t.viewQuery=(i,r)=>{n(i,r),e(i,r)}:t.viewQuery=n}function Dk(t,n){let e=t.contentQueries;e?t.contentQueries=(i,r,o)=>{n(i,r,o),e(i,r,o)}:t.contentQueries=n}function xk(t,n){let e=t.hostBindings;e?t.hostBindings=(i,r)=>{n(i,r),e(i,r)}:t.hostBindings=n}function W0(t,n,e,i,r,o,s,a){if(e.firstCreatePass){t.mergedAttrs=bo(t.mergedAttrs,t.attrs);let u=t.tView=lp(2,t,r,o,s,e.directiveRegistry,e.pipeRegistry,null,e.schemas,e.consts,null);e.queries!==null&&(e.queries.template(e,t),u.queries=e.queries.embeddedTView(t))}a&&(t.flags|=a),ho(t,!1);let l=Ik(e,n,t,i);Nc()&&pp(e,n,l,t),yo(l,n);let c=C0(l,n,l,t);n[i+je]=c,dp(n,c),ok(c,t,n)}function Ek(t,n,e,i,r,o,s,a,l,c,u){let f=e+je,m;return n.firstCreatePass?(m=Eo(n,f,4,s||null,a||null),Mc()&&T0(n,t,m,Gt(n.consts,c),_p),hy(n,m)):m=n.data[f],W0(m,t,n,e,i,r,o,l),fo(m)&&_d(n,t,m),c!=null&&aa(t,m,u),m}function Co(t,n,e,i,r,o,s,a,l,c,u){let f=e+je,m;if(n.firstCreatePass){if(m=Eo(n,f,4,s||null,a||null),c!=null){let h=Gt(n.consts,c);m.localNames=[];for(let y=0;y<h.length;y+=2)m.localNames.push(h[y],-1)}}else m=n.data[f];return W0(m,t,n,e,i,r,o,l),c!=null&&aa(t,m,u),m}function xt(t,n,e,i,r,o,s,a){let l=te(),c=Fe(),u=Gt(c.consts,o);return Ek(l,c,t,n,e,i,r,u,void 0,s,a),xt}function fa(t,n,e,i,r,o,s,a){let l=te(),c=Fe(),u=Gt(c.consts,o);return Co(l,c,t,n,e,i,r,u,void 0,s,a),fa}var Ik=Sk;function Sk(t,n,e,i){return Ws(!0),n[Oe].createComment("")}var Dd=(()=>{class t{log(e){console.log(e)}warn(e){console.warn(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"platform"})}return t})();function Oi(t){return typeof t=="function"&&t[et]!==void 0}var kp=new v("");function Ni(t){return!!t&&typeof t.then=="function"}function Rp(t){return!!t&&typeof t.subscribe=="function"}var xd=new v("");function Ed(t){return vt([{provide:xd,multi:!0,useValue:t}])}var Ap=(()=>{class t{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((e,i)=>{this.resolve=e,this.reject=i});appInits=d(xd,{optional:!0})??[];injector=d(H);constructor(){}runInitializers(){if(this.initialized)return;let e=[];for(let r of this.appInits){let o=nt(this.injector,r);if(Ni(o))e.push(o);else if(Rp(o)){let s=new Promise((a,l)=>{o.subscribe({complete:a,error:l})});e.push(s)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(e).then(()=>{i()}).catch(r=>{this.reject(r)}),e.length===0&&i(),this.initialized=!0}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Id=new v("");function q0(){Ff(()=>{let t="";throw new D(600,t)})}function Q0(t){return t.isBoundToModule}var Mk=10;var yt=(()=>{class t{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=d(pn);afterRenderManager=d(hd);zonelessEnabled=d(qs);rootEffectScheduler=d(Fc);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new C;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=d(Xn);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(N(e=>!e))}constructor(){d(Cn,{optional:!0})}whenStable(){let e;return new Promise(i=>{e=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{e.unsubscribe()})}_injector=d(Te);_rendererFactory=null;get injector(){return this._injector}bootstrap(e,i){return this.bootstrapImpl(e,i)}bootstrapImpl(e,i,r=H.NULL){return this._injector.get(L).run(()=>{Ee(_e.BootstrapComponentStart);let s=e instanceof yd;if(!this._injector.get(Ap).done){let y="";throw new D(405,y)}let l;s?l=e:l=this._injector.get(da).resolveComponentFactory(e),this.componentTypes.push(l.componentType);let c=Q0(l)?void 0:this._injector.get(Pn),u=i||l.selector,f=l.create(r,[],u,c),m=f.location.nativeElement,h=f.injector.get(kp,null);return h?.registerApplication(m),f.onDestroy(()=>{this.detachView(f.hostView),Ks(this.components,f),h?.unregisterApplication(m)}),this._loadComponent(f),Ee(_e.BootstrapComponentEnd,f),f})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){Ee(_e.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(md.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw Ee(_e.ChangeDetectionEnd),new D(101,!1);let e=K(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,K(e),this.afterTick.next(),Ee(_e.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(ht,null,{optional:!0}));let e=0;for(;this.dirtyFlags!==0&&e++<Mk;){Ee(_e.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{Ee(_e.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let e=!1;if(this.dirtyFlags&7){let i=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:r}of this.allViews){if(!i&&!zs(r))continue;let o=i&&!this.zonelessEnabled?0:1;v0(r,o),e=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}e||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:e})=>zs(e))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(e){let i=e;this._views.push(i),i.attachToAppRef(this)}detachView(e){let i=e;Ks(this._views,i),i.detachFromAppRef()}_loadComponent(e){this.attachView(e.hostView);try{this.tick()}catch(r){this.internalErrorHandler(r)}this.components.push(e),this._injector.get(Id,[]).forEach(r=>r(e))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(e=>e()),this._views.slice().forEach(e=>e.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(e){return this._destroyListeners.push(e),()=>Ks(this._destroyListeners,e)}destroy(){if(this._destroyed)throw new D(406,!1);let e=this._injector;e.destroy&&!e.destroyed&&e.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Ks(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function ma(t,n){let e=te(),i=Mi();if(Xt(e,i,n)){let r=Fe(),o=$s();if(vd(o,r,e,t,n))An(o)&&u0(e,o.index);else{let a=Kt(o,e);f0(e[Oe],a,null,o.value,t,n,null)}}return ma}function ne(t,n,e,i){let r=te(),o=Mi();if(Xt(r,o,n)){let s=Fe(),a=$s();rT(a,r,t,n,e,i)}return ne}var jh=class{destroy(n){}updateValue(n,e){}swap(n,e){let i=Math.min(n,e),r=Math.max(n,e),o=this.detach(r);if(r-i>1){let s=this.detach(i);this.attach(i,o),this.attach(r,s)}else this.attach(i,o)}move(n,e){this.attach(e,this.detach(n))}};function ah(t,n,e,i,r){return t===e&&Object.is(n,i)?1:Object.is(r(t,n),r(e,i))?-1:0}function Tk(t,n,e,i){let r,o,s=0,a=t.length-1,l=void 0;if(Array.isArray(n)){K(i);let c=n.length-1;for(K(null);s<=a&&s<=c;){let u=t.at(s),f=n[s],m=ah(s,u,s,f,e);if(m!==0){m<0&&t.updateValue(s,f),s++;continue}let h=t.at(a),y=n[c],S=ah(a,h,c,y,e);if(S!==0){S<0&&t.updateValue(a,y),a--,c--;continue}let k=e(s,u),B=e(a,h),we=e(s,f);if(Object.is(we,B)){let dt=e(c,y);Object.is(dt,k)?(t.swap(s,a),t.updateValue(a,y),c--,a--):t.move(a,s),t.updateValue(s,f),s++;continue}if(r??=new rd,o??=ry(t,s,a,e),Vh(t,r,s,we))t.updateValue(s,f),s++,a++;else if(o.has(we))r.set(k,t.detach(s)),a--;else{let dt=t.create(s,n[s]);t.attach(s,dt),s++,a++}}for(;s<=c;)iy(t,r,e,s,n[s]),s++}else if(n!=null){K(i);let c=n[Symbol.iterator]();K(null);let u=c.next();for(;!u.done&&s<=a;){let f=t.at(s),m=u.value,h=ah(s,f,s,m,e);if(h!==0)h<0&&t.updateValue(s,m),s++,u=c.next();else{r??=new rd,o??=ry(t,s,a,e);let y=e(s,m);if(Vh(t,r,s,y))t.updateValue(s,m),s++,a++,u=c.next();else if(!o.has(y))t.attach(s,t.create(s,m)),s++,a++,u=c.next();else{let S=e(s,f);r.set(S,t.detach(s)),a--}}}for(;!u.done;)iy(t,r,e,t.length,u.value),u=c.next()}for(;s<=a;)t.destroy(t.detach(a--));r?.forEach(c=>{t.destroy(c)})}function Vh(t,n,e,i){return n!==void 0&&n.has(i)?(t.attach(e,n.get(i)),n.delete(i),!0):!1}function iy(t,n,e,i,r){if(Vh(t,n,i,e(i,r)))t.updateValue(i,r);else{let o=t.create(i,r);t.attach(i,o)}}function ry(t,n,e,i){let r=new Set;for(let o=n;o<=e;o++)r.add(i(o,t.at(o)));return r}var rd=class{kvMap=new Map;_vMap=void 0;has(n){return this.kvMap.has(n)}delete(n){if(!this.has(n))return!1;let e=this.kvMap.get(n);return this._vMap!==void 0&&this._vMap.has(e)?(this.kvMap.set(n,this._vMap.get(e)),this._vMap.delete(e)):this.kvMap.delete(n),!0}get(n){return this.kvMap.get(n)}set(n,e){if(this.kvMap.has(n)){let i=this.kvMap.get(n);this._vMap===void 0&&(this._vMap=new Map);let r=this._vMap;for(;r.has(i);)i=r.get(i);r.set(i,e)}else this.kvMap.set(n,e)}forEach(n){for(let[e,i]of this.kvMap)if(n(i,e),this._vMap!==void 0){let r=this._vMap;for(;r.has(i);)i=r.get(i),n(i,e)}}};function G(t,n,e,i,r,o,s,a){Ai("NgControlFlow");let l=te(),c=Fe(),u=Gt(c.consts,o);return Co(l,c,t,n,e,i,r,u,256,s,a),Op}function Op(t,n,e,i,r,o,s,a){Ai("NgControlFlow");let l=te(),c=Fe(),u=Gt(c.consts,o);return Co(l,c,t,n,e,i,r,u,512,s,a),Op}function W(t,n){Ai("NgControlFlow");let e=te(),i=Mi(),r=e[i]!==Bt?e[i]:-1,o=r!==-1?od(e,je+r):void 0,s=0;if(Xt(e,i,t)){let a=K(null);try{if(o!==void 0&&x0(o,s),t!==-1){let l=je+t,c=od(e,l),u=$h(e[Y],l),f=I0(c,u,e),m=la(e,u,n,{dehydratedView:f});ca(c,m,s,wo(u,f))}}finally{K(a)}}else if(o!==void 0){let a=D0(o,s);a!==void 0&&(a[qe]=n)}}var Hh=class{lContainer;$implicit;$index;constructor(n,e,i){this.lContainer=n,this.$implicit=e,this.$index=i}get $count(){return this.lContainer.length-ze}};function Jt(t,n){return n}var zh=class{hasEmptyBlock;trackByFn;liveCollection;constructor(n,e,i){this.hasEmptyBlock=n,this.trackByFn=e,this.liveCollection=i}};function en(t,n,e,i,r,o,s,a,l,c,u,f,m){Ai("NgControlFlow");let h=te(),y=Fe(),S=l!==void 0,k=te(),B=a?s.bind(k[At][qe]):s,we=new zh(S,B);k[je+t]=we,Co(h,y,t+1,n,e,i,r,Gt(y.consts,o),256),S&&Co(h,y,t+2,l,c,u,f,Gt(y.consts,m),512)}var Uh=class extends jh{lContainer;hostLView;templateTNode;operationsCounter=void 0;needsIndexUpdate=!1;constructor(n,e,i){super(),this.lContainer=n,this.hostLView=e,this.templateTNode=i}get length(){return this.lContainer.length-ze}at(n){return this.getLView(n)[qe].$implicit}attach(n,e){let i=e[gr];this.needsIndexUpdate||=n!==this.length,ca(this.lContainer,e,n,wo(this.templateTNode,i)),kk(this.lContainer,n)}detach(n){return this.needsIndexUpdate||=n!==this.length-1,Rk(this.lContainer,n),Ak(this.lContainer,n)}create(n,e){let i=Zc(this.lContainer,this.templateTNode.tView.ssrId);return la(this.hostLView,this.templateTNode,new Hh(this.lContainer,e,n),{dehydratedView:i})}destroy(n){pd(n[Y],n)}updateValue(n,e){this.getLView(n)[qe].$implicit=e}reset(){this.needsIndexUpdate=!1}updateIndexes(){if(this.needsIndexUpdate)for(let n=0;n<this.length;n++)this.getLView(n)[qe].$index=n}getLView(n){return Ok(this.lContainer,n)}};function tn(t){let n=K(null),e=Nn();try{let i=te(),r=i[Y],o=i[e],s=e+1,a=od(i,s);if(o.liveCollection===void 0){let c=$h(r,s);o.liveCollection=new Uh(a,i,c)}else o.liveCollection.reset();let l=o.liveCollection;if(Tk(l,t,o.trackByFn,n),l.updateIndexes(),o.hasEmptyBlock){let c=Mi(),u=l.length===0;if(Xt(i,c,u)){let f=e+2,m=od(i,f);if(u){let h=$h(r,f),y=I0(m,h,i),S=la(i,h,void 0,{dehydratedView:y});ca(m,S,0,wo(h,y))}else r.firstUpdatePass&&ST(m),x0(m,0)}}}finally{K(n)}}function od(t,n){return t[n]}function kk(t,n){if(t.length<=ze)return;let e=ze+n,i=t[e],r=i?i[Ii]:void 0;if(i&&r&&r.detachedLeaveAnimationFns&&r.detachedLeaveAnimationFns.length>0){let o=i[Yn];PM(o,r),Ir.delete(i[Kn]),r.detachedLeaveAnimationFns=void 0}}function Rk(t,n){if(t.length<=ze)return;let e=ze+n,i=t[e],r=i?i[Ii]:void 0;r&&r.leave&&r.leave.size>0&&(r.detachedLeaveAnimationFns=[])}function Ak(t,n){return ea(t,n)}function Ok(t,n){return D0(t,n)}function $h(t,n){return Ec(t,n)}function J(t,n,e){let i=te(),r=Mi();if(Xt(i,r,n)){let o=Fe(),s=$s();eT(s,i,t,n,i[Oe],e)}return J}function Gh(t,n,e,i,r){vd(n,t,e,r?"class":"style",i)}function g(t,n,e,i){let r=te(),o=r[Y],s=t+je,a=o.firstCreatePass?Dp(s,r,2,n,_p,Mc(),e,i):o.data[s];if(An(a)){let l=r[mn].tracingService;if(l&&l.componentCreate){let c=o.data[a.directiveStart+a.componentOffset];return l.componentCreate(O0(c),()=>(oy(t,n,r,a,i),g))}}return oy(t,n,r,a,i),g}function oy(t,n,e,i,r){if(vp(i,e,t,n,Y0),fo(i)){let o=e[Y];_d(o,e,i),Jh(o,i,e)}r!=null&&aa(e,i)}function b(){let t=Fe(),n=ft(),e=bp(n);return t.firstCreatePass&&xp(t,e),Hm(e)&&zm(),jm(),e.classesWithoutHost!=null&&yS(e)&&Gh(t,e,te(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&wS(e)&&Gh(t,e,te(),e.stylesWithoutHost,!1),b}function se(t,n,e,i){return g(t,n,e,i),b(),se}function Qe(t,n,e,i){let r=te(),o=r[Y],s=t+je,a=o.firstCreatePass?HT(s,o,2,n,e,i):o.data[s];return vp(a,r,t,n,Y0),i!=null&&aa(r,a),Qe}function st(){let t=ft(),n=bp(t);return Hm(n)&&zm(),jm(),st}function jt(t,n,e,i){return Qe(t,n,e,i),st(),jt}var Y0=(t,n,e,i,r)=>(Ws(!0),Gy(n[Oe],i,Km()));function Io(t,n,e){let i=te(),r=i[Y],o=t+je,s=r.firstCreatePass?Dp(o,i,8,"ng-container",_p,Mc(),n,e):r.data[o];if(vp(s,i,t,"ng-container",Nk),fo(s)){let a=i[Y];_d(a,i,s),Jh(a,s,i)}return e!=null&&aa(i,s),Io}function So(){let t=Fe(),n=ft(),e=bp(n);return t.firstCreatePass&&xp(t,e),So}var Nk=(t,n,e,i,r)=>(Ws(!0),mM(n[Oe],""));function at(){return te()}function Vt(t,n,e){let i=te(),r=Mi();if(Xt(i,r,n)){let o=Fe(),s=$s();d0(s,i,t,n,i[Oe],e)}return Vt}var ha="en-US";var Fk=ha;function K0(t){typeof t=="string"&&(Fk=t.toLowerCase().replace(/_/g,"-"))}function ee(t,n,e){let i=te(),r=Fe(),o=ft();return Pk(r,i,i[Oe],o,t,n,e),ee}function Mo(t,n,e){let i=te(),r=Fe(),o=ft();return(o.type&3||e)&&R0(o,r,i,e,i[Oe],t,n,$c(o,i,n)),Mo}function Pk(t,n,e,i,r,o,s){let a=!0,l=null;if((i.type&3||s)&&(l??=$c(i,n,o),R0(i,t,n,s,e,r,o,l)&&(a=!1)),a){let c=i.outputs?.[r],u=i.hostDirectiveOutputs?.[r];if(u&&u.length)for(let f=0;f<u.length;f+=2){let m=u[f],h=u[f+1];l??=$c(i,n,o),Jb(i,n,m,h,r,l)}if(c&&c.length)for(let f of c)l??=$c(i,n,o),Jb(i,n,f,r,r,l)}}function A(t=1){return wb(t)}function Lk(t,n){let e=null,i=wM(t);for(let r=0;r<n.length;r++){let o=n[r];if(o==="*"){e=r;continue}if(i===null?Xy(t,o,!0):xM(i,o))return r}return e}function de(t){let n=te()[At][Rt];if(!n.projection){let e=t?t.length:1,i=n.projection=Yv(e,null),r=i.slice(),o=n.child;for(;o!==null;){if(o.type!==128){let s=t?Lk(o,t):0;s!==null&&(r[s]?r[s].projectionNext=o:i[s]=o,r[s]=o)}o=o.next}}}function O(t,n=0,e,i,r,o){let s=te(),a=Fe(),l=i?t+1:null;l!==null&&Co(s,a,l,i,r,o,null,e);let c=Eo(a,je+t,16,null,e||null);c.projection===null&&(c.projection=n),Gm();let f=!s[gr]||Vm();s[At][Rt].projection[c.projection]===null&&l!==null?Bk(s,a,l):f&&!cd(c)&&qM(a,s,c)}function Bk(t,n,e){let i=je+e,r=n.data[i],o=t[i],s=Zc(o,r.tView.ssrId),a=la(t,r,void 0,{dehydratedView:s});ca(o,a,0,wo(r,s))}function Ye(t,n,e,i){return j0(t,n,e,i),Ye}function Re(t,n,e){return B0(t,n,e),Re}function U(t){let n=te(),e=Fe(),i=Rc();Us(i+1);let r=Sp(e,i);if(t.dirty&&ib(n)===((r.metadata.flags&2)===2)){if(r.matches===null)t.reset([]);else{let o=H0(n,i);t.reset(o,Iy),t.notifyOnChanges()}return!0}return!1}function $(){return Ip(te(),Rc())}function Sd(t,n,e,i,r){return U0(n,j0(t,e,i,r)),Sd}function Md(t,n,e,i){return U0(t,B0(n,e,i)),Md}function Td(t=1){Us(Rc()+t)}function Et(t){let n=ub();return Am(n,je+t)}function jc(t,n){return t<<17|n<<2}function Mr(t){return t>>17&32767}function jk(t){return(t&2)==2}function Vk(t,n){return t&131071|n<<17}function Wh(t){return t|2}function Do(t){return(t&131068)>>2}function lh(t,n){return t&-131069|n<<2}function Hk(t){return(t&1)===1}function qh(t){return t|1}function zk(t,n,e,i,r,o){let s=o?n.classBindings:n.styleBindings,a=Mr(s),l=Do(s);t[i]=e;let c=!1,u;if(Array.isArray(e)){let f=e;u=f[1],(u===null||ao(f,u)>0)&&(c=!0)}else u=e;if(r)if(l!==0){let m=Mr(t[a+1]);t[i+1]=jc(m,a),m!==0&&(t[m+1]=lh(t[m+1],i)),t[a+1]=Vk(t[a+1],i)}else t[i+1]=jc(a,0),a!==0&&(t[a+1]=lh(t[a+1],i)),a=i;else t[i+1]=jc(l,0),a===0?a=i:t[l+1]=lh(t[l+1],i),l=i;c&&(t[i+1]=Wh(t[i+1])),sy(t,u,i,!0),sy(t,u,i,!1),Uk(n,u,t,i,o),s=jc(a,l),o?n.classBindings=s:n.styleBindings=s}function Uk(t,n,e,i,r){let o=r?t.residualClasses:t.residualStyles;o!=null&&typeof n=="string"&&ao(o,n)>=0&&(e[i+1]=qh(e[i+1]))}function sy(t,n,e,i){let r=t[e+1],o=n===null,s=i?Mr(r):Do(r),a=!1;for(;s!==0&&(a===!1||o);){let l=t[s],c=t[s+1];$k(l,n)&&(a=!0,t[s+1]=i?qh(c):Wh(c)),s=i?Mr(c):Do(c)}a&&(t[e+1]=i?Wh(r):qh(r))}function $k(t,n){return t===null||n==null||(Array.isArray(t)?t[1]:t)===n?!0:Array.isArray(t)&&typeof n=="string"?ao(t,n)>=0:!1}var _n={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function Gk(t){return t.substring(_n.key,_n.keyEnd)}function Wk(t){return qk(t),Z0(t,X0(t,0,_n.textEnd))}function Z0(t,n){let e=_n.textEnd;return e===n?-1:(n=_n.keyEnd=Qk(t,_n.key=n,e),X0(t,n,e))}function qk(t){_n.key=0,_n.keyEnd=0,_n.value=0,_n.valueEnd=0,_n.textEnd=t.length}function X0(t,n,e){for(;n<e&&t.charCodeAt(n)<=32;)n++;return n}function Qk(t,n,e){for(;n<e&&t.charCodeAt(n)>32;)n++;return n}function nn(t,n,e){return J0(t,n,e,!1),nn}function P(t,n){return J0(t,n,null,!0),P}function pt(t){Kk(nR,Yk,t,!0)}function Yk(t,n){for(let e=Wk(n);e>=0;e=Z0(n,e))wc(t,Gk(n),!0)}function J0(t,n,e,i){let r=te(),o=Fe(),s=Tc(2);if(o.firstUpdatePass&&tw(o,t,s,i),n!==Bt&&Xt(r,s,n)){let a=o.data[Nn()];nw(o,a,r,r[Oe],t,r[s+1]=rR(n,e),i,s)}}function Kk(t,n,e,i){let r=Fe(),o=Tc(2);r.firstUpdatePass&&tw(r,null,o,i);let s=te();if(e!==Bt&&Xt(s,o,e)){let a=r.data[Nn()];if(iw(a,i)&&!ew(r,o)){let l=i?a.classesWithoutHost:a.stylesWithoutHost;l!==null&&(e=gc(l,e||"")),Gh(r,a,s,e,i)}else iR(r,a,s,s[Oe],s[o+1],s[o+1]=tR(t,n,e),i,o)}}function ew(t,n){return n>=t.expandoStartIndex}function tw(t,n,e,i){let r=t.data;if(r[e+1]===null){let o=r[Nn()],s=ew(t,e);iw(o,i)&&n===null&&!s&&(n=!1),n=Zk(r,o,n,i),zk(r,o,n,e,s,i)}}function Zk(t,n,e,i){let r=_b(t),o=i?n.residualClasses:n.residualStyles;if(r===null)(i?n.classBindings:n.styleBindings)===0&&(e=ch(null,t,n,e,i),e=na(e,n.attrs,i),o=null);else{let s=n.directiveStylingLast;if(s===-1||t[s]!==r)if(e=ch(r,t,n,e,i),o===null){let l=Xk(t,n,i);l!==void 0&&Array.isArray(l)&&(l=ch(null,t,n,l[1],i),l=na(l,n.attrs,i),Jk(t,n,i,l))}else o=eR(t,n,i)}return o!==void 0&&(i?n.residualClasses=o:n.residualStyles=o),e}function Xk(t,n,e){let i=e?n.classBindings:n.styleBindings;if(Do(i)!==0)return t[Mr(i)]}function Jk(t,n,e,i){let r=e?n.classBindings:n.styleBindings;t[Mr(r)]=i}function eR(t,n,e){let i,r=n.directiveEnd;for(let o=1+n.directiveStylingLast;o<r;o++){let s=t[o].hostAttrs;i=na(i,s,e)}return na(i,n.attrs,e)}function ch(t,n,e,i,r){let o=null,s=e.directiveEnd,a=e.directiveStylingLast;for(a===-1?a=e.directiveStart:a++;a<s&&(o=n[a],i=na(i,o.hostAttrs,r),o!==t);)a++;return t!==null&&(e.directiveStylingLast=a),i}function na(t,n,e){let i=e?1:2,r=-1;if(n!==null)for(let o=0;o<n.length;o++){let s=n[o];typeof s=="number"?r=s:r===i&&(Array.isArray(t)||(t=t===void 0?[]:["",t]),wc(t,s,e?!0:n[++o]))}return t===void 0?null:t}function tR(t,n,e){if(e==null||e==="")return Dt;let i=[],r=wn(e);if(Array.isArray(r))for(let o=0;o<r.length;o++)t(i,r[o],!0);else if(r instanceof Set)for(let o of r)t(i,o,!0);else if(typeof r=="object")for(let o in r)r.hasOwnProperty(o)&&t(i,o,r[o]);else typeof r=="string"&&n(i,r);return i}function nR(t,n,e){let i=String(n);i!==""&&!i.includes(" ")&&wc(t,i,e)}function iR(t,n,e,i,r,o,s,a){r===Bt&&(r=Dt);let l=0,c=0,u=0<r.length?r[0]:null,f=0<o.length?o[0]:null;for(;u!==null||f!==null;){let m=l<r.length?r[l+1]:void 0,h=c<o.length?o[c+1]:void 0,y=null,S;u===f?(l+=2,c+=2,m!==h&&(y=f,S=h)):f===null||u!==null&&u<f?(l+=2,y=u):(c+=2,y=f,S=h),y!==null&&nw(t,n,e,i,y,S,s,a),u=l<r.length?r[l]:null,f=c<o.length?o[c]:null}}function nw(t,n,e,i,r,o,s,a){if(!(n.type&3))return;let l=t.data,c=l[a+1],u=Hk(c)?ay(l,n,e,r,Do(c),s):void 0;if(!sd(u)){sd(o)||jk(c)&&(o=ay(l,null,e,r,a,s));let f=Rm(Nn(),e);YM(i,s,f,r,o)}}function ay(t,n,e,i,r,o){let s=n===null,a;for(;r>0;){let l=t[r],c=Array.isArray(l),u=c?l[1]:l,f=u===null,m=e[r+1];m===Bt&&(m=f?Dt:void 0);let h=f?Cc(m,i):u===i?m:void 0;if(c&&!sd(h)&&(h=Cc(l,i)),sd(h)&&(a=h,s))return a;let y=t[r+1];r=s?Mr(y):Do(y)}if(n!==null){let l=o?n.residualClasses:n.residualStyles;l!=null&&(a=Cc(l,i))}return a}function sd(t){return t!==void 0}function rR(t,n){return t==null||t===""||(typeof n=="string"?t=t+n:typeof t=="object"&&(t=Fs(wn(t)))),t}function iw(t,n){return(t.flags&(n?8:16))!==0}function x(t,n=""){let e=te(),i=Fe(),r=t+je,o=i.firstCreatePass?Eo(i,r,1,n,null):i.data[r],s=oR(i,e,o,n);e[r]=s,Nc()&&pp(i,e,s,o),ho(o,!1)}var oR=(t,n,e,i)=>(Ws(!0),uM(n[Oe],i));function sR(t,n,e,i=""){return Xt(t,Mi(),e)?n+hr(e)+i:Bt}function aR(t,n,e,i,r,o=""){let s=fb(),a=UT(t,s,e,r);return Tc(2),a?n+hr(e)+i+hr(r)+o:Bt}function ve(t){return oe("",t),ve}function oe(t,n,e){let i=te(),r=sR(i,t,n,e);return r!==Bt&&rw(i,Nn(),r),oe}function pa(t,n,e,i,r){let o=te(),s=aR(o,t,n,e,i,r);return s!==Bt&&rw(o,Nn(),s),pa}function rw(t,n,e){let i=Rm(n,t);fM(t[Oe],i,e)}function ly(t,n,e){let i=Fe();i.firstCreatePass&&ow(n,i.data,i.blueprint,On(t),e)}function ow(t,n,e,i,r){if(t=_t(t),Array.isArray(t))for(let o=0;o<t.length;o++)ow(t[o],n,e,i,r);else{let o=Fe(),s=te(),a=ft(),l=ur(t)?t:_t(t.provide),c=Em(t),u=a.providerIndexes&1048575,f=a.directiveStart,m=a.providerIndexes>>20;if(ur(t)||!t.multi){let h=new Er(c,r,Ve,null),y=uh(l,n,r?u:u+m,f);y===-1?(mh(Yc(a,s),o,l),dh(o,t,n.length),n.push(l),a.directiveStart++,a.directiveEnd++,r&&(a.providerIndexes+=1048576),e.push(h),s.push(h)):(e[y]=h,s[y]=h)}else{let h=uh(l,n,u+m,f),y=uh(l,n,u,u+m),S=h>=0&&e[h],k=y>=0&&e[y];if(r&&!k||!r&&!S){mh(Yc(a,s),o,l);let B=dR(r?cR:lR,e.length,r,i,c,t);!r&&k&&(e[y].providerFactory=B),dh(o,t,n.length,0),n.push(l),a.directiveStart++,a.directiveEnd++,r&&(a.providerIndexes+=1048576),e.push(B),s.push(B)}else{let B=sw(e[r?y:h],c,!r&&i);dh(o,t,h>-1?h:y,B)}!r&&i&&k&&e[y].componentProviders++}}}function dh(t,n,e,i){let r=ur(n),o=Jv(n);if(r||o){let l=(o?_t(n.useClass):n).prototype.ngOnDestroy;if(l){let c=t.destroyHooks||(t.destroyHooks=[]);if(!r&&n.multi){let u=c.indexOf(e);u===-1?c.push(e,[i,l]):c[u+1].push(i,l)}else c.push(e,l)}}}function sw(t,n,e){return e&&t.componentProviders++,t.multi.push(n)-1}function uh(t,n,e,i){for(let r=e;r<i;r++)if(n[r]===t)return r;return-1}function lR(t,n,e,i,r){return Qh(this.multi,[])}function cR(t,n,e,i,r){let o=this.multi,s;if(this.providerFactory){let a=this.providerFactory.componentProviders,l=Zs(i,i[Y],this.providerFactory.index,r);s=l.slice(0,a),Qh(o,s);for(let c=a;c<l.length;c++)s.push(l[c])}else s=[],Qh(o,s);return s}function Qh(t,n){for(let e=0;e<t.length;e++){let i=t[e];n.push(i())}return n}function dR(t,n,e,i,r,o){let s=new Er(t,e,Ve,null);return s.multi=[],s.index=n,s.componentProviders=0,sw(s,r,i&&!e),s}function Ie(t,n){return e=>{e.providersResolver=(i,r)=>ly(i,r?r(t):t,!1),n&&(e.viewProvidersResolver=(i,r)=>ly(i,r?r(n):n,!0))}}function Rr(t,n,e){return aw(te(),qm(),t,n,e)}function uR(t,n){let e=t[n];return e===Bt?void 0:e}function aw(t,n,e,i,r,o){let s=n+e;return Xt(t,s,r)?zT(t,s+1,o?i.call(o,r):i(r)):uR(t,s+1)}function ni(t,n){let e=Fe(),i,r=t+je;e.firstCreatePass?(i=fR(n,e.pipeRegistry),e.data[r]=i,i.onDestroy&&(e.destroyHooks??=[]).push(r,i.onDestroy)):i=e.data[r];let o=i.factory||(i.factory=yi(i.type,!0)),s,a=kt(Ve);try{let l=Qc(!1),c=o();return Qc(l),Om(e,te(),r,c),c}finally{kt(a)}}function fR(t,n){if(n)for(let e=n.length-1;e>=0;e--){let i=n[e];if(t===i.name)return i}}function ii(t,n,e){let i=t+je,r=te(),o=Am(r,i);return mR(r,i)?aw(r,qm(),n,o.transform,e,o):o.transform(e)}function mR(t,n){return t[Y].data[n].pure}function kd(t,n){return bd(t,n)}var ad=class{ngModuleFactory;componentFactories;constructor(n,e){this.ngModuleFactory=n,this.componentFactories=e}},Np=(()=>{class t{compileModuleSync(e){return new id(e)}compileModuleAsync(e){return Promise.resolve(this.compileModuleSync(e))}compileModuleAndAllComponentsSync(e){let i=this.compileModuleSync(e),r=gm(e),o=Ky(r.declarations).reduce((s,a)=>{let l=Qn(a);return l&&s.push(new Sr(l)),s},[]);return new ad(i,o)}compileModuleAndAllComponentsAsync(e){return Promise.resolve(this.compileModuleAndAllComponentsSync(e))}clearCache(){}clearCacheFor(e){}getModuleId(e){}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var lw=(()=>{class t{applicationErrorHandler=d(pn);appRef=d(yt);taskService=d(Xn);ngZone=d(L);zonelessEnabled=d(qs);tracing=d(Cn,{optional:!0});zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new pe;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(Os):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(d(th,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let e=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(e);return}this.switchToMicrotaskScheduler(),this.taskService.remove(e)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let e=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(e)})})}notify(e){if(!this.zonelessEnabled&&e===5)return;switch(e){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2;break}case 12:{this.appRef.dirtyFlags|=16;break}case 13:{this.appRef.dirtyFlags|=2;break}case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let i=this.useMicrotaskScheduler?Eb:Xm;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>i(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>i(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(Os+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let e=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){this.applicationErrorHandler(i)}finally{this.taskService.remove(e),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let e=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function cw(){return[{provide:Tn,useExisting:lw},{provide:L,useClass:Ns},{provide:qs,useValue:!0}]}function hR(){return typeof $localize<"u"&&$localize.locale||ha}var Rd=new v("",{factory:()=>d(Rd,{optional:!0,skipSelf:!0})||hR()});function lt(t){return Lv(t)}function Ht(t,n){return ys(t,n?.equal)}var gw=Symbol("InputSignalNode#UNSET"),RR=Q(_({},ws),{transformFn:void 0,applyValueToInputSignal(t,n){Xr(t,n)}});function _w(t,n){let e=Object.create(RR);e.value=t,e.transformFn=n?.transform;function i(){if(Zi(e),e.value===gw){let r=null;throw new D(-950,r)}return e.value}return i[et]=e,i}var Dn=class{attributeName;constructor(n){this.attributeName=n}__NG_ELEMENT_ID__=()=>Kh(this.attributeName);toString(){return`HostAttributeToken ${this.attributeName}`}};function dw(t,n){return _w(t,n)}function AR(t){return _w(gw,t)}var vw=(dw.required=AR,dw);function uw(t,n){return Mp(n)}function OR(t,n){return Tp(n)}var va=(uw.required=OR,uw);function fw(t,n){return Mp(n)}function NR(t,n){return Tp(n)}var bw=(fw.required=NR,fw);var Pp=new v(""),FR=new v("");function ga(t){return!t.moduleRef}function PR(t){let n=ga(t)?t.r3Injector:t.moduleRef.injector,e=n.get(L);return e.run(()=>{ga(t)?t.r3Injector.resolveInjectorInitializers():t.moduleRef.resolveInjectorInitializers();let i=n.get(pn),r;if(e.runOutsideAngular(()=>{r=e.onError.subscribe({next:i})}),ga(t)){let o=()=>n.destroy(),s=t.platformInjector.get(Pp);s.add(o),n.onDestroy(()=>{r.unsubscribe(),s.delete(o)})}else{let o=()=>t.moduleRef.destroy(),s=t.platformInjector.get(Pp);s.add(o),t.moduleRef.onDestroy(()=>{Ks(t.allPlatformModules,t.moduleRef),r.unsubscribe(),s.delete(o)})}return BR(i,e,()=>{let o=n.get(Xn),s=o.add(),a=n.get(Ap);return a.runInitializers(),a.donePromise.then(()=>{let l=n.get(Rd,ha);if(K0(l||ha),!n.get(FR,!0))return ga(t)?n.get(yt):(t.allPlatformModules.push(t.moduleRef),t.moduleRef);if(ga(t)){let u=n.get(yt);return t.rootComponent!==void 0&&u.bootstrap(t.rootComponent),u}else return LR?.(t.moduleRef,t.allPlatformModules),t.moduleRef}).finally(()=>{o.remove(s)})})})}var LR;function BR(t,n,e){try{let i=e();return Ni(i)?i.catch(r=>{throw n.runOutsideAngular(()=>t(r)),r}):i}catch(i){throw n.runOutsideAngular(()=>t(i)),i}}var Ad=null;function jR(t=[],n){return H.create({name:n,providers:[{provide:Vs,useValue:"platform"},{provide:Pp,useValue:new Set([()=>Ad=null])},...t]})}function VR(t=[]){if(Ad)return Ad;let n=jR(t);return Ad=n,q0(),HR(n),n}function HR(t){let n=t.get(ld,null);nt(t,()=>{n?.forEach(e=>e())})}function Hp(){return!1}var zR=1e4;var O6=zR-1e3;var be=(()=>{class t{static __NG_ELEMENT_ID__=UR}return t})();function UR(t){return $R(ft(),te(),(t&16)===16)}function $R(t,n,e){if(An(t)&&!e){let i=Zt(t.index,n);return new ki(i,i)}else if(t.type&175){let i=n[At];return new ki(i,n)}return null}var Lp=class{supports(n){return n instanceof Map||Ep(n)}create(){return new Bp}},Bp=class{_records=new Map;_mapHead=null;_appendAfter=null;_previousMapHead=null;_changesHead=null;_changesTail=null;_additionsHead=null;_additionsTail=null;_removalsHead=null;get isDirty(){return this._additionsHead!==null||this._changesHead!==null||this._removalsHead!==null}forEachItem(n){let e;for(e=this._mapHead;e!==null;e=e._next)n(e)}forEachPreviousItem(n){let e;for(e=this._previousMapHead;e!==null;e=e._nextPrevious)n(e)}forEachChangedItem(n){let e;for(e=this._changesHead;e!==null;e=e._nextChanged)n(e)}forEachAddedItem(n){let e;for(e=this._additionsHead;e!==null;e=e._nextAdded)n(e)}forEachRemovedItem(n){let e;for(e=this._removalsHead;e!==null;e=e._nextRemoved)n(e)}diff(n){if(!n)n=new Map;else if(!(n instanceof Map||Ep(n)))throw new D(900,!1);return this.check(n)?this:null}check(n){this._reset();let e=this._mapHead;if(this._appendAfter=null,this._forEach(n,(i,r)=>{if(e&&e.key===r)this._maybeAddToChanges(e,i),this._appendAfter=e,e=e._next;else{let o=this._getOrCreateRecordForKey(r,i);e=this._insertBeforeOrAppend(e,o)}}),e){e._prev&&(e._prev._next=null),this._removalsHead=e;for(let i=e;i!==null;i=i._nextRemoved)i===this._mapHead&&(this._mapHead=null),this._records.delete(i.key),i._nextRemoved=i._next,i.previousValue=i.currentValue,i.currentValue=null,i._prev=null,i._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(n,e){if(n){let i=n._prev;return e._next=n,e._prev=i,n._prev=e,i&&(i._next=e),n===this._mapHead&&(this._mapHead=e),this._appendAfter=n,n}return this._appendAfter?(this._appendAfter._next=e,e._prev=this._appendAfter):this._mapHead=e,this._appendAfter=e,null}_getOrCreateRecordForKey(n,e){if(this._records.has(n)){let r=this._records.get(n);this._maybeAddToChanges(r,e);let o=r._prev,s=r._next;return o&&(o._next=s),s&&(s._prev=o),r._next=null,r._prev=null,r}let i=new jp(n);return this._records.set(n,i),i.currentValue=e,this._addToAdditions(i),i}_reset(){if(this.isDirty){let n;for(this._previousMapHead=this._mapHead,n=this._previousMapHead;n!==null;n=n._next)n._nextPrevious=n._next;for(n=this._changesHead;n!==null;n=n._nextChanged)n.previousValue=n.currentValue;for(n=this._additionsHead;n!=null;n=n._nextAdded)n.previousValue=n.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(n,e){Object.is(e,n.currentValue)||(n.previousValue=n.currentValue,n.currentValue=e,this._addToChanges(n))}_addToAdditions(n){this._additionsHead===null?this._additionsHead=this._additionsTail=n:(this._additionsTail._nextAdded=n,this._additionsTail=n)}_addToChanges(n){this._changesHead===null?this._changesHead=this._changesTail=n:(this._changesTail._nextChanged=n,this._changesTail=n)}_forEach(n,e){n instanceof Map?n.forEach(e):Object.keys(n).forEach(i=>e(n[i],i))}},jp=class{key;previousValue=null;currentValue=null;_nextPrevious=null;_next=null;_prev=null;_nextAdded=null;_nextRemoved=null;_nextChanged=null;constructor(n){this.key=n}};function mw(){return new zp([new Lp])}var zp=(()=>{class t{static \u0275prov=w({token:t,providedIn:"root",factory:mw});factories;constructor(e){this.factories=e}static create(e,i){if(i){let r=i.factories.slice();e=e.concat(r)}return new t(e)}static extend(e){return{provide:t,useFactory:()=>{let i=d(t,{optional:!0,skipSelf:!0});return t.create(e,i||mw())}}}find(e){let i=this.factories.find(r=>r.supports(e));if(i)return i;throw new D(901,!1)}}return t})();function yw(t){let{rootComponent:n,appProviders:e,platformProviders:i,platformRef:r}=t;Ee(_e.BootstrapApplicationStart);try{let o=r?.injector??VR(i),s=[cw(),Sb,...e||[]],a=new ta({providers:s,parent:o,debugName:"",runEnvironmentInitializers:!1});return PR({r3Injector:a.injector,platformInjector:o,rootComponent:n})}catch(o){return Promise.reject(o)}finally{Ee(_e.BootstrapApplicationEnd)}}function Z(t){return typeof t=="boolean"?t:t!=null&&t!=="false"}function Ot(t,n=NaN){return!isNaN(parseFloat(t))&&!isNaN(Number(t))?Number(t):n}var Fp=Symbol("NOT_SET"),ww=new Set,GR=Q(_({},ws),{kind:"afterRenderEffectPhase",consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,value:Fp,cleanup:null,consumerMarkedDirty(){if(this.sequence.impl.executing){if(this.sequence.lastPhase===null||this.sequence.lastPhase<this.phase)return;this.sequence.erroredOrDestroyed=!0}this.sequence.scheduler.notify(7)},phaseFn(t){if(this.sequence.lastPhase=this.phase,!this.dirty)return this.signal;if(this.dirty=!1,this.value!==Fp&&!Kr(this))return this.signal;try{for(let r of this.cleanup??ww)r()}finally{this.cleanup?.clear()}let n=[];t!==void 0&&n.push(t),n.push(this.registerCleanupFn);let e=pi(this),i;try{i=this.userFn.apply(null,n)}finally{Xi(this,e)}return(this.value===Fp||!this.equal(this.value,i))&&(this.value=i,this.version++),this.signal}}),Vp=class extends Xs{scheduler;lastPhase=null;nodes=[void 0,void 0,void 0,void 0];onDestroyFns=null;constructor(n,e,i,r,o,s=null){super(n,[void 0,void 0,void 0,void 0],i,!1,o.get(mt),s),this.scheduler=r;for(let a of fp){let l=e[a];if(l===void 0)continue;let c=Object.create(GR);c.sequence=this,c.phase=a,c.userFn=l,c.dirty=!0,c.signal=()=>(Zi(c),c.value),c.signal[et]=c,c.registerCleanupFn=u=>(c.cleanup??=new Set).add(u),this.nodes[a]=c,this.hooks[a]=u=>c.phaseFn(u)}}afterRun(){super.afterRun(),this.lastPhase=null}destroy(){if(this.onDestroyFns!==null)for(let n of this.onDestroyFns)n();super.destroy();for(let n of this.nodes)if(n)try{for(let e of n.cleanup??ww)e()}finally{gi(n)}}};function Cw(t,n){let e=n?.injector??d(H),i=e.get(Tn),r=e.get(hd),o=e.get(Cn,null,{optional:!0});r.impl??=e.get(mp);let s=t;typeof s=="function"&&(s={mixedReadWrite:t});let a=e.get(po,null,{optional:!0}),l=new Vp(r.impl,[s.earlyRead,s.write,s.mixedReadWrite,s.read],a?.view,i,e,o?.snapshot(null));return r.impl.register(l),l}function Nd(t,n){let e=Qn(t),i=n.elementInjector||lo();return new Sr(e).create(i,n.projectableNodes,n.hostElement,n.environmentInjector,n.directives,n.bindings)}var Dw=null;function ri(){return Dw}function Up(t){Dw??=t}var ba=class{},To=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:()=>d(xw),providedIn:"platform"})}return t})();var xw=(()=>{class t extends To{_location;_history;_doc=d(z);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return ri().getBaseHref(this._doc)}onPopState(e){let i=ri().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",e,!1),()=>i.removeEventListener("popstate",e)}onHashChange(e){let i=ri().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",e,!1),()=>i.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,i,r){this._history.pushState(e,i,r)}replaceState(e,i,r){this._history.replaceState(e,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function Sw(t,n){return t?n?t.endsWith("/")?n.startsWith("/")?t+n.slice(1):t+n:n.startsWith("/")?t+n:`${t}/${n}`:t:n}function Ew(t){let n=t.search(/#|\?|$/);return t[n-1]==="/"?t.slice(0,n-1)+t.slice(n):t}function Fi(t){return t&&t[0]!=="?"?`?${t}`:t}var Fd=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:()=>d(qR),providedIn:"root"})}return t})(),WR=new v(""),qR=(()=>{class t extends Fd{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,i){super(),this._platformLocation=e,this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??d(z).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return Sw(this._baseHref,e)}path(e=!1){let i=this._platformLocation.pathname+Fi(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${i}${r}`:i}pushState(e,i,r,o){let s=this.prepareExternalUrl(r+Fi(o));this._platformLocation.pushState(e,i,s)}replaceState(e,i,r,o){let s=this.prepareExternalUrl(r+Fi(o));this._platformLocation.replaceState(e,i,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(i){return new(i||t)(R(To),R(WR,8))};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Pi=(()=>{class t{_subject=new C;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let i=this._locationStrategy.getBaseHref();this._basePath=KR(Ew(Iw(i))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,i=""){return this.path()==this.normalize(e+Fi(i))}normalize(e){return t.stripTrailingSlash(YR(this._basePath,Iw(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,i="",r=null){this._locationStrategy.pushState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Fi(i)),r)}replaceState(e,i="",r=null){this._locationStrategy.replaceState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Fi(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",i){this._urlChangeListeners.forEach(r=>r(e,i))}subscribe(e,i,r){return this._subject.subscribe({next:e,error:i??void 0,complete:r??void 0})}static normalizeQueryParams=Fi;static joinWithSlash=Sw;static stripTrailingSlash=Ew;static \u0275fac=function(i){return new(i||t)(R(Fd))};static \u0275prov=w({token:t,factory:()=>QR(),providedIn:"root"})}return t})();function QR(){return new Pi(R(Fd))}function YR(t,n){if(!t||!n.startsWith(t))return n;let e=n.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:n}function Iw(t){return t.replace(/\/index\.html$/,"")}function KR(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var $p=/\s+/,Mw=[],Gp=(()=>{class t{_ngEl;_renderer;initialClasses=Mw;rawClass;stateMap=new Map;constructor(e,i){this._ngEl=e,this._renderer=i}set klass(e){this.initialClasses=e!=null?e.trim().split($p):Mw}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split($p):e}ngDoCheck(){for(let i of this.initialClasses)this._updateState(i,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let i of e)this._updateState(i,!0);else if(e!=null)for(let i of Object.keys(e))this._updateState(i,!!e[i]);this._applyStateDiff()}_updateState(e,i){let r=this.stateMap.get(e);r!==void 0?(r.enabled!==i&&(r.changed=!0,r.enabled=i),r.touched=!0):this.stateMap.set(e,{enabled:i,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let i=e[0],r=e[1];r.changed?(this._toggleClass(i,r.enabled),r.changed=!1):r.touched||(r.enabled&&this._toggleClass(i,!1),this.stateMap.delete(i)),r.touched=!1}}_toggleClass(e,i){e=e.trim(),e.length>0&&e.split($p).forEach(r=>{i?this._renderer.addClass(this._ngEl.nativeElement,r):this._renderer.removeClass(this._ngEl.nativeElement,r)})}static \u0275fac=function(i){return new(i||t)(Ve(F),Ve(Be))};static \u0275dir=j({type:t,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return t})();var Wp=(()=>{class t{_ngEl;_differs;_renderer;_ngStyle=null;_differ=null;constructor(e,i,r){this._ngEl=e,this._differs=i,this._renderer=r}set ngStyle(e){this._ngStyle=e,!this._differ&&e&&(this._differ=this._differs.find(e).create())}ngDoCheck(){if(this._differ){let e=this._differ.diff(this._ngStyle);e&&this._applyChanges(e)}}_setStyle(e,i){let[r,o]=e.split("."),s=r.indexOf("-")===-1?void 0:yn.DashCase;i!=null?this._renderer.setStyle(this._ngEl.nativeElement,r,o?`${i}${o}`:i,s):this._renderer.removeStyle(this._ngEl.nativeElement,r,s)}_applyChanges(e){e.forEachRemovedItem(i=>this._setStyle(i.key,null)),e.forEachAddedItem(i=>this._setStyle(i.key,i.currentValue)),e.forEachChangedItem(i=>this._setStyle(i.key,i.currentValue))}static \u0275fac=function(i){return new(i||t)(Ve(F),Ve(zp),Ve(Be))};static \u0275dir=j({type:t,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}})}return t})(),qp=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=d(H);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let i=this._viewContainerRef;if(this._viewRef&&i.remove(i.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=i.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,i,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,i,r):!1,get:(e,i,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,i,r)}})}static \u0275fac=function(i){return new(i||t)(Ve(ot))};static \u0275dir=j({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Xe]})}return t})();var ko=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=M({type:t});static \u0275inj=I({})}return t})();function ya(t,n){n=encodeURIComponent(n);for(let e of t.split(";")){let i=e.indexOf("="),[r,o]=i==-1?[e,""]:[e.slice(0,i),e.slice(i+1)];if(r.trim()===n)return decodeURIComponent(o)}return null}var Ar=class{};var Qp="browser";function Tw(t){return t===Qp}var wa=class{_doc;constructor(n){this._doc=n}manager},Pd=(()=>{class t extends wa{constructor(e){super(e)}supports(e){return!0}addEventListener(e,i,r,o){return e.addEventListener(i,r,o),()=>this.removeEventListener(e,i,r,o)}removeEventListener(e,i,r,o){return e.removeEventListener(i,r,o)}static \u0275fac=function(i){return new(i||t)(R(z))};static \u0275prov=w({token:t,factory:t.\u0275fac})}return t})(),jd=new v(""),Xp=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,i){this._zone=i,e.forEach(s=>{s.manager=this});let r=e.filter(s=>!(s instanceof Pd));this._plugins=r.slice().reverse();let o=e.find(s=>s instanceof Pd);o&&this._plugins.push(o)}addEventListener(e,i,r,o){return this._findPluginFor(i).addEventListener(e,i,r,o)}getZone(){return this._zone}_findPluginFor(e){let i=this._eventNameToPlugin.get(e);if(i)return i;if(i=this._plugins.find(o=>o.supports(e)),!i)throw new D(5101,!1);return this._eventNameToPlugin.set(e,i),i}static \u0275fac=function(i){return new(i||t)(R(jd),R(L))};static \u0275prov=w({token:t,factory:t.\u0275fac})}return t})(),Yp="ng-app-id";function kw(t){for(let n of t)n.remove()}function Rw(t,n){let e=n.createElement("style");return e.textContent=t,e}function eA(t,n,e,i){let r=t.head?.querySelectorAll(`style[${Yp}="${n}"],link[${Yp}="${n}"]`);if(r)for(let o of r)o.removeAttribute(Yp),o instanceof HTMLLinkElement?i.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function Zp(t,n){let e=n.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var Jp=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,i,r,o={}){this.doc=e,this.appId=i,this.nonce=r,eA(e,i,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,i){for(let r of e)this.addUsage(r,this.inline,Rw);i?.forEach(r=>this.addUsage(r,this.external,Zp))}removeStyles(e,i){for(let r of e)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,i,r){let o=i.get(e);o?o.usage++:i.set(e,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,r(e,this.doc)))})}removeUsage(e,i){let r=i.get(e);r&&(r.usage--,r.usage<=0&&(kw(r.elements),i.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])kw(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(e,Rw(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(e,Zp(i,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,i){return this.nonce&&i.setAttribute("nonce",this.nonce),e.appendChild(i)}static \u0275fac=function(i){return new(i||t)(R(z),R(Ri),R(kr,8),R(Tr))};static \u0275prov=w({token:t,factory:t.\u0275fac})}return t})(),Kp={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},eg=/%COMP%/g;var Ow="%COMP%",tA=`_nghost-${Ow}`,nA=`_ngcontent-${Ow}`,iA=!0,rA=new v("",{factory:()=>iA});function oA(t){return nA.replace(eg,t)}function sA(t){return tA.replace(eg,t)}function Nw(t,n){return n.map(e=>e.replace(eg,t))}var tg=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,i,r,o,s,a,l=null,c=null){this.eventManager=e,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=s,this.ngZone=a,this.nonce=l,this.tracingService=c,this.defaultRenderer=new Ca(e,s,a,this.tracingService)}createRenderer(e,i){if(!e||!i)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,i);return r instanceof Bd?r.applyToHost(e):r instanceof Da&&r.applyStyles(),r}getOrCreateRenderer(e,i){let r=this.rendererByCompId,o=r.get(i.id);if(!o){let s=this.doc,a=this.ngZone,l=this.eventManager,c=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,f=this.tracingService;switch(i.encapsulation){case bn.Emulated:o=new Bd(l,c,i,this.appId,u,s,a,f);break;case bn.ShadowDom:return new Ld(l,e,i,s,a,this.nonce,f,c);case bn.ExperimentalIsolatedShadowDom:return new Ld(l,e,i,s,a,this.nonce,f);default:o=new Da(l,c,i,u,s,a,f);break}r.set(i.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(i){return new(i||t)(R(Xp),R(Jp),R(Ri),R(rA),R(z),R(L),R(kr),R(Cn,8))};static \u0275prov=w({token:t,factory:t.\u0275fac})}return t})(),Ca=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,e,i,r){this.eventManager=n,this.doc=e,this.ngZone=i,this.tracingService=r}destroy(){}destroyNode=null;createElement(n,e){return e?this.doc.createElementNS(Kp[e]||e,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,e){(Aw(n)?n.content:n).appendChild(e)}insertBefore(n,e,i){n&&(Aw(n)?n.content:n).insertBefore(e,i)}removeChild(n,e){e.remove()}selectRootElement(n,e){let i=typeof n=="string"?this.doc.querySelector(n):n;if(!i)throw new D(-5104,!1);return e||(i.textContent=""),i}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,e,i,r){if(r){e=r+":"+e;let o=Kp[r];o?n.setAttributeNS(o,e,i):n.setAttribute(e,i)}else n.setAttribute(e,i)}removeAttribute(n,e,i){if(i){let r=Kp[i];r?n.removeAttributeNS(r,e):n.removeAttribute(`${i}:${e}`)}else n.removeAttribute(e)}addClass(n,e){n.classList.add(e)}removeClass(n,e){n.classList.remove(e)}setStyle(n,e,i,r){r&(yn.DashCase|yn.Important)?n.style.setProperty(e,i,r&yn.Important?"important":""):n.style[e]=i}removeStyle(n,e,i){i&yn.DashCase?n.style.removeProperty(e):n.style[e]=""}setProperty(n,e,i){n!=null&&(n[e]=i)}setValue(n,e){n.nodeValue=e}listen(n,e,i,r){if(typeof n=="string"&&(n=ri().getGlobalEventTarget(this.doc,n),!n))throw new D(5102,!1);let o=this.decoratePreventDefault(i);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(n,e,o)),this.eventManager.addEventListener(n,e,o,r)}decoratePreventDefault(n){return e=>{if(e==="__ngUnwrap__")return n;n(e)===!1&&e.preventDefault()}}};function Aw(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var Ld=class extends Ca{hostEl;sharedStylesHost;shadowRoot;constructor(n,e,i,r,o,s,a,l){super(n,r,o,a),this.hostEl=e,this.sharedStylesHost=l,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let c=i.styles;c=Nw(i.id,c);for(let f of c){let m=document.createElement("style");s&&m.setAttribute("nonce",s),m.textContent=f,this.shadowRoot.appendChild(m)}let u=i.getExternalStyles?.();if(u)for(let f of u){let m=Zp(f,r);s&&m.setAttribute("nonce",s),this.shadowRoot.appendChild(m)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,e){return super.appendChild(this.nodeOrShadowRoot(n),e)}insertBefore(n,e,i){return super.insertBefore(this.nodeOrShadowRoot(n),e,i)}removeChild(n,e){return super.removeChild(null,e)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},Da=class extends Ca{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,e,i,r,o,s,a,l){super(n,o,s,a),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let c=i.styles;this.styles=l?Nw(l,c):c,this.styleUrls=i.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Ir.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Bd=class extends Da{contentAttr;hostAttr;constructor(n,e,i,r,o,s,a,l){let c=r+"-"+i.id;super(n,e,i,o,s,a,l,c),this.contentAttr=oA(c),this.hostAttr=sA(c)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,e){let i=super.createElement(n,e);return super.setAttribute(i,this.contentAttr,""),i}};var Vd=class t extends ba{supportsDOMEvents=!0;static makeCurrent(){Up(new t)}onAndCancel(n,e,i,r){return n.addEventListener(e,i,r),()=>{n.removeEventListener(e,i,r)}}dispatchEvent(n,e){n.dispatchEvent(e)}remove(n){n.remove()}createElement(n,e){return e=e||this.getDefaultDocument(),e.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,e){return e==="window"?window:e==="document"?n:e==="body"?n.body:null}getBaseHref(n){let e=aA();return e==null?null:lA(e)}resetBaseElement(){xa=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return ya(document.cookie,n)}},xa=null;function aA(){return xa=xa||document.head.querySelector("base"),xa?xa.getAttribute("href"):null}function lA(t){return new URL(t,document.baseURI).pathname}var cA=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac})}return t})(),Fw=["alt","control","meta","shift"],dA={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},uA={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},Pw=(()=>{class t extends wa{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,i,r,o){let s=t.parseEventName(i),a=t.eventCallback(s.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>ri().onAndCancel(e,s.domEventName,a,o))}static parseEventName(e){let i=e.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let o=t._normalizeKey(i.pop()),s="",a=i.indexOf("code");if(a>-1&&(i.splice(a,1),s="code."),Fw.forEach(c=>{let u=i.indexOf(c);u>-1&&(i.splice(u,1),s+=c+".")}),s+=o,i.length!=0||o.length===0)return null;let l={};return l.domEventName=r,l.fullKey=s,l}static matchEventFullKeyCode(e,i){let r=dA[e.key]||e.key,o="";return i.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),Fw.forEach(s=>{if(s!==r){let a=uA[s];a(e)&&(o+=s+".")}}),o+=r,o===i)}static eventCallback(e,i,r){return o=>{t.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>i(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(i){return new(i||t)(R(z))};static \u0275prov=w({token:t,factory:t.\u0275fac})}return t})();async function ng(t,n,e){let i=_({rootComponent:t},fA(n,e));return yw(i)}function fA(t,n){return{platformRef:n?.platformRef,appProviders:[..._A,...t?.providers??[]],platformProviders:gA}}function mA(){Vd.makeCurrent()}function hA(){return new Pt}function pA(){return Xh(document),document}var gA=[{provide:Tr,useValue:Qp},{provide:ld,useValue:mA,multi:!0},{provide:z,useFactory:pA}];var _A=[{provide:Vs,useValue:"root"},{provide:Pt,useFactory:hA},{provide:jd,useClass:Pd,multi:!0},{provide:jd,useClass:Pw,multi:!0},tg,Jp,Xp,{provide:ht,useExisting:tg},{provide:Ar,useClass:cA},[]];var Li=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(e=>{let i=e.indexOf(":");if(i>0){let r=e.slice(0,i),o=e.slice(i+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((e,i)=>{this.addHeaderEntry(i,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([e,i])=>{this.setHeaderEntries(e,i)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let e=this.headers.get(n.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,e){return this.clone({name:n,value:e,op:"a"})}set(n,e){return this.clone({name:n,value:e,op:"s"})}delete(n,e){return this.clone({name:n,value:e,op:"d"})}maybeSetNormalizedName(n,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,n)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(e=>{this.headers.set(e,n.headers.get(e)),this.normalizedNames.set(e,n.normalizedNames.get(e))})}clone(n){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([n]),e}applyUpdate(n){let e=n.name.toLowerCase();switch(n.op){case"a":case"s":let i=n.value;if(typeof i=="string"&&(i=[i]),i.length===0)return;this.maybeSetNormalizedName(n.name,e);let r=(n.op==="a"?this.headers.get(e):void 0)||[];r.push(...i),this.headers.set(e,r);break;case"d":let o=n.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let s=this.headers.get(e);if(!s)return;s=s.filter(a=>o.indexOf(a)===-1),s.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,s)}break}}addHeaderEntry(n,e){let i=n.toLowerCase();this.maybeSetNormalizedName(n,i),this.headers.has(i)?this.headers.get(i).push(e):this.headers.set(i,[e])}setHeaderEntries(n,e){let i=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=n.toLowerCase();this.headers.set(r,i),this.maybeSetNormalizedName(n,r)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>n(this.normalizedNames.get(e),this.headers.get(e)))}};var zd=class{map=new Map;set(n,e){return this.map.set(n,e),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}},Ud=class{encodeKey(n){return Lw(n)}encodeValue(n){return Lw(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function vA(t,n){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[s,a]=o==-1?[n.decodeKey(r),""]:[n.decodeKey(r.slice(0,o)),n.decodeValue(r.slice(o+1))],l=e.get(s)||[];l.push(a),e.set(s,l)}),e}var bA=/%(\d[a-f0-9])/gi,yA={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Lw(t){return encodeURIComponent(t).replace(bA,(n,e)=>yA[e]??n)}function Hd(t){return`${t}`}var oi=class t{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new Ud,n.fromString){if(n.fromObject)throw new D(2805,!1);this.map=vA(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(e=>{let i=n.fromObject[e],r=Array.isArray(i)?i.map(Hd):[Hd(i)];this.map.set(e,r)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let e=this.map.get(n);return e?e[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,e){return this.clone({param:n,value:e,op:"a"})}appendAll(n){let e=[];return Object.keys(n).forEach(i=>{let r=n[i];Array.isArray(r)?r.forEach(o=>{e.push({param:i,value:o,op:"a"})}):e.push({param:i,value:r,op:"a"})}),this.clone(e)}set(n,e){return this.clone({param:n,value:e,op:"s"})}delete(n,e){return this.clone({param:n,value:e,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let e=this.encoder.encodeKey(n);return this.map.get(n).map(i=>e+"="+this.encoder.encodeValue(i)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(n),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":let e=(n.op==="a"?this.map.get(n.param):void 0)||[];e.push(Hd(n.value)),this.map.set(n.param,e);break;case"d":if(n.value!==void 0){let i=this.map.get(n.param)||[],r=i.indexOf(Hd(n.value));r!==-1&&i.splice(r,1),i.length>0?this.map.set(n.param,i):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null)}};function wA(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Bw(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function jw(t){return typeof Blob<"u"&&t instanceof Blob}function Vw(t){return typeof FormData<"u"&&t instanceof FormData}function CA(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var Hw="Content-Type",zw="Accept",$w="text/plain",Gw="application/json",DA=`${Gw}, ${$w}, */*`,Ro=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(n,e,i,r){this.url=e,this.method=n.toUpperCase();let o;if(wA(this.method)||r?(this.body=i!==void 0?i:null,o=r):o=i,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new D(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer!==void 0&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new Li,this.context??=new zd,!this.params)this.params=new oi,this.urlWithParams=e;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=e;else{let a=e.indexOf("?"),l=a===-1?"?":a<e.length-1?"&":"";this.urlWithParams=e+l+s}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Bw(this.body)||jw(this.body)||Vw(this.body)||CA(this.body)?this.body:this.body instanceof oi?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Vw(this.body)?null:jw(this.body)?this.body.type||null:Bw(this.body)?null:typeof this.body=="string"?$w:this.body instanceof oi?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?Gw:null}clone(n={}){let e=n.method||this.method,i=n.url||this.url,r=n.responseType||this.responseType,o=n.keepalive??this.keepalive,s=n.priority||this.priority,a=n.cache||this.cache,l=n.mode||this.mode,c=n.redirect||this.redirect,u=n.credentials||this.credentials,f=n.referrer??this.referrer,m=n.integrity||this.integrity,h=n.referrerPolicy||this.referrerPolicy,y=n.transferCache??this.transferCache,S=n.timeout??this.timeout,k=n.body!==void 0?n.body:this.body,B=n.withCredentials??this.withCredentials,we=n.reportProgress??this.reportProgress,dt=n.headers||this.headers,ut=n.params||this.params,_s=n.context??this.context;return n.setHeaders!==void 0&&(dt=Object.keys(n.setHeaders).reduce((vs,Yi)=>vs.set(Yi,n.setHeaders[Yi]),dt)),n.setParams&&(ut=Object.keys(n.setParams).reduce((vs,Yi)=>vs.set(Yi,n.setParams[Yi]),ut)),new t(e,i,k,{params:ut,headers:dt,context:_s,reportProgress:we,responseType:r,withCredentials:B,transferCache:y,keepalive:o,cache:a,priority:s,timeout:S,mode:l,redirect:c,credentials:u,referrer:f,integrity:m,referrerPolicy:h})}},Or=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(Or||{}),Oo=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(n,e=200,i="OK"){this.headers=n.headers||new Li,this.status=n.status!==void 0?n.status:e,this.statusText=n.statusText||i,this.url=n.url||null,this.redirected=n.redirected,this.responseType=n.responseType,this.ok=this.status>=200&&this.status<300}},$d=class t extends Oo{constructor(n={}){super(n)}type=Or.ResponseHeader;clone(n={}){return new t({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},Ea=class t extends Oo{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=Or.Response;clone(n={}){return new t({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0,redirected:n.redirected??this.redirected,responseType:n.responseType??this.responseType})}},Ao=class extends Oo{name="HttpErrorResponse";message;error;ok=!1;constructor(n){super(n,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},xA=200,EA=204;var IA=new v("");var SA=/^\)\]\}',?\n/;var rg=(()=>{class t{xhrFactory;tracingService=d(Cn,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new D(-2800,!1);let i=this.xhrFactory;return V(null).pipe(ye(()=>new X(o=>{let s=i.build();if(s.open(e.method,e.urlWithParams),e.withCredentials&&(s.withCredentials=!0),e.headers.forEach((k,B)=>s.setRequestHeader(k,B.join(","))),e.headers.has(zw)||s.setRequestHeader(zw,DA),!e.headers.has(Hw)){let k=e.detectContentTypeHeader();k!==null&&s.setRequestHeader(Hw,k)}if(e.timeout&&(s.timeout=e.timeout),e.responseType){let k=e.responseType.toLowerCase();s.responseType=k!=="json"?k:"text"}let a=e.serializeBody(),l=null,c=()=>{if(l!==null)return l;let k=s.statusText||"OK",B=new Li(s.getAllResponseHeaders()),we=s.responseURL||e.url;return l=new $d({headers:B,status:s.status,statusText:k,url:we}),l},u=this.maybePropagateTrace(()=>{let{headers:k,status:B,statusText:we,url:dt}=c(),ut=null;B!==EA&&(ut=typeof s.response>"u"?s.responseText:s.response),B===0&&(B=ut?xA:0);let _s=B>=200&&B<300;if(e.responseType==="json"&&typeof ut=="string"){let vs=ut;ut=ut.replace(SA,"");try{ut=ut!==""?JSON.parse(ut):null}catch(Yi){ut=vs,_s&&(_s=!1,ut={error:Yi,text:ut})}}_s?(o.next(new Ea({body:ut,headers:k,status:B,statusText:we,url:dt||void 0})),o.complete()):o.error(new Ao({error:ut,headers:k,status:B,statusText:we,url:dt||void 0}))}),f=this.maybePropagateTrace(k=>{let{url:B}=c(),we=new Ao({error:k,status:s.status||0,statusText:s.statusText||"Unknown Error",url:B||void 0});o.error(we)}),m=f;e.timeout&&(m=this.maybePropagateTrace(k=>{let{url:B}=c(),we=new Ao({error:new DOMException("Request timed out","TimeoutError"),status:s.status||0,statusText:s.statusText||"Request timeout",url:B||void 0});o.error(we)}));let h=!1,y=this.maybePropagateTrace(k=>{h||(o.next(c()),h=!0);let B={type:Or.DownloadProgress,loaded:k.loaded};k.lengthComputable&&(B.total=k.total),e.responseType==="text"&&s.responseText&&(B.partialText=s.responseText),o.next(B)}),S=this.maybePropagateTrace(k=>{let B={type:Or.UploadProgress,loaded:k.loaded};k.lengthComputable&&(B.total=k.total),o.next(B)});return s.addEventListener("load",u),s.addEventListener("error",f),s.addEventListener("timeout",m),s.addEventListener("abort",f),e.reportProgress&&(s.addEventListener("progress",y),a!==null&&s.upload&&s.upload.addEventListener("progress",S)),s.send(a),o.next({type:Or.Sent}),()=>{s.removeEventListener("error",f),s.removeEventListener("abort",f),s.removeEventListener("load",u),s.removeEventListener("timeout",m),e.reportProgress&&(s.removeEventListener("progress",y),a!==null&&s.upload&&s.upload.removeEventListener("progress",S)),s.readyState!==s.DONE&&s.abort()}})))}static \u0275fac=function(i){return new(i||t)(R(Ar))};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Ww(t,n){return n(t)}function MA(t,n){return(e,i)=>n.intercept(e,{handle:r=>t(r,i)})}function TA(t,n,e){return(i,r)=>nt(e,()=>n(i,o=>t(o,r)))}var qw=new v(""),og=new v("",{factory:()=>[]}),Qw=new v(""),sg=new v("",{factory:()=>!0});function kA(){let t=null;return(n,e)=>{t===null&&(t=(d(qw,{optional:!0})??[]).reduceRight(MA,Ww));let i=d(go);if(d(sg)){let o=i.add();return t(n,e).pipe(bi(o))}else return t(n,e)}}var ag=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=R(rg),r},providedIn:"root"})}return t})();var Gd=(()=>{class t{backend;injector;chain=null;pendingTasks=d(go);contributeToStability=d(sg);constructor(e,i){this.backend=e,this.injector=i}handle(e){if(this.chain===null){let i=Array.from(new Set([...this.injector.get(og),...this.injector.get(Qw,[])]));this.chain=i.reduceRight((r,o)=>TA(r,o,this.injector),Ww)}if(this.contributeToStability){let i=this.pendingTasks.add();return this.chain(e,r=>this.backend.handle(r)).pipe(bi(i))}else return this.chain(e,i=>this.backend.handle(i))}static \u0275fac=function(i){return new(i||t)(R(ag),R(Te))};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),lg=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=R(Gd),r},providedIn:"root"})}return t})();function ig(t,n){return{body:n,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,credentials:t.credentials,transferCache:t.transferCache,timeout:t.timeout,keepalive:t.keepalive,priority:t.priority,cache:t.cache,mode:t.mode,redirect:t.redirect,integrity:t.integrity,referrer:t.referrer,referrerPolicy:t.referrerPolicy}}var No=(()=>{class t{handler;constructor(e){this.handler=e}request(e,i,r={}){let o;if(e instanceof Ro)o=e;else{let l;r.headers instanceof Li?l=r.headers:l=new Li(r.headers);let c;r.params&&(r.params instanceof oi?c=r.params:c=new oi({fromObject:r.params})),o=new Ro(e,i,r.body!==void 0?r.body:null,{headers:l,context:r.context,params:c,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let s=V(o).pipe(ro(l=>this.handler.handle(l)));if(e instanceof Ro||r.observe==="events")return s;let a=s.pipe(he(l=>l instanceof Ea));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return a.pipe(N(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new D(2806,!1);return l.body}));case"blob":return a.pipe(N(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new D(2807,!1);return l.body}));case"text":return a.pipe(N(l=>{if(l.body!==null&&typeof l.body!="string")throw new D(2808,!1);return l.body}));default:return a.pipe(N(l=>l.body))}case"response":return a;default:throw new D(2809,!1)}}delete(e,i={}){return this.request("DELETE",e,i)}get(e,i={}){return this.request("GET",e,i)}head(e,i={}){return this.request("HEAD",e,i)}jsonp(e,i){return this.request("JSONP",e,{params:new oi().append(i,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,i={}){return this.request("OPTIONS",e,i)}patch(e,i,r={}){return this.request("PATCH",e,ig(r,i))}post(e,i,r={}){return this.request("POST",e,ig(r,i))}put(e,i,r={}){return this.request("PUT",e,ig(r,i))}static \u0275fac=function(i){return new(i||t)(R(lg))};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var RA=new v("",{factory:()=>!0}),AA="XSRF-TOKEN",OA=new v("",{factory:()=>AA}),NA="X-XSRF-TOKEN",FA=new v("",{factory:()=>NA}),PA=(()=>{class t{cookieName=d(OA);doc=d(z);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=ya(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Yw=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=R(PA),r},providedIn:"root"})}return t})();function LA(t,n){if(!d(RA)||t.method==="GET"||t.method==="HEAD")return n(t);try{let r=d(To).href,{origin:o}=new URL(r),{origin:s}=new URL(t.url,o);if(o!==s)return n(t)}catch{return n(t)}let e=d(Yw).getToken(),i=d(FA);return e!=null&&!t.headers.has(i)&&(t=t.clone({headers:t.headers.set(i,e)})),n(t)}var cg=(function(t){return t[t.Interceptors=0]="Interceptors",t[t.LegacyInterceptors=1]="LegacyInterceptors",t[t.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",t[t.NoXsrfProtection=3]="NoXsrfProtection",t[t.JsonpSupport=4]="JsonpSupport",t[t.RequestsMadeViaParent=5]="RequestsMadeViaParent",t[t.Fetch=6]="Fetch",t})(cg||{});function BA(t,n){return{\u0275kind:t,\u0275providers:n}}function dg(...t){let n=[No,Gd,{provide:lg,useExisting:Gd},{provide:ag,useFactory:()=>d(IA,{optional:!0})??d(rg)},{provide:og,useValue:LA,multi:!0}];for(let e of t)n.push(...e.\u0275providers);return vt(n)}var Uw=new v("");function ug(){return BA(cg.LegacyInterceptors,[{provide:Uw,useFactory:kA},{provide:og,useExisting:Uw,multi:!0}])}var Kw=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(i){return new(i||t)(R(z))};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ia=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=R(VA),r},providedIn:"root"})}return t})(),VA=(()=>{class t extends Ia{_doc;constructor(e){super(),this._doc=e}sanitize(e,i){if(i==null)return null;switch(e){case rt.NONE:return i;case rt.HTML:return ei(i,"HTML")?wn(i):ud(this._doc,String(i)).toString();case rt.STYLE:return ei(i,"Style")?wn(i):i;case rt.SCRIPT:if(ei(i,"Script"))return wn(i);throw new D(5200,!1);case rt.URL:return ei(i,"URL")?wn(i):oa(String(i));case rt.RESOURCE_URL:if(ei(i,"ResourceURL"))return wn(i);throw new D(5201,!1);default:throw new D(5202,!1)}}bypassSecurityTrustHtml(e){return ep(e)}bypassSecurityTrustStyle(e){return tp(e)}bypassSecurityTrustScript(e){return np(e)}bypassSecurityTrustUrl(e){return ip(e)}bypassSecurityTrustResourceUrl(e){return rp(e)}static \u0275fac=function(i){return new(i||t)(R(z))};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ue="primary",Va=Symbol("RouteTitle"),gg=class{params;constructor(n){this.params=n||{}}has(n){return Object.prototype.hasOwnProperty.call(this.params,n)}get(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e[0]:e}return null}getAll(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function Fr(t){return new gg(t)}function fg(t,n,e){for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(r[0]===":")e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function oC(t,n,e){let i=e.path.split("/"),r=i.indexOf("**");if(r===-1){if(i.length>t.length||e.pathMatch==="full"&&(n.hasChildren()||i.length<t.length))return null;let l={},c=t.slice(0,i.length);return fg(i,c,l)?{consumed:c,posParams:l}:null}if(r!==i.lastIndexOf("**"))return null;let o=i.slice(0,r),s=i.slice(r+1);if(o.length+s.length>t.length||e.pathMatch==="full"&&n.hasChildren()&&e.path!=="**")return null;let a={};return!fg(o,t.slice(0,o.length),a)||!fg(s,t.slice(t.length-s.length),a)?null:{consumed:t,posParams:a}}function Zd(t){return new Promise((n,e)=>{t.pipe(Wn()).subscribe({next:i=>n(i),error:i=>e(i)})})}function HA(t,n){if(t.length!==n.length)return!1;for(let e=0;e<t.length;++e)if(!Ln(t[e],n[e]))return!1;return!0}function Ln(t,n){let e=t?_g(t):void 0,i=n?_g(n):void 0;if(!e||!i||e.length!=i.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!sC(t[r],n[r]))return!1;return!0}function _g(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function sC(t,n){if(Array.isArray(t)&&Array.isArray(n)){if(t.length!==n.length)return!1;let e=[...t].sort(),i=[...n].sort();return e.every((r,o)=>i[o]===r)}else return t===n}function zA(t){return t.length>0?t[t.length-1]:null}function Br(t){return Is(t)?t:Ni(t)?Ae(Promise.resolve(t)):V(t)}function aC(t){return Is(t)?Zd(t):Promise.resolve(t)}var UA={exact:dC,subset:uC},lC={exact:$A,subset:GA,ignored:()=>!0},cC={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},vg={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function Xw(t,n,e){return UA[e.paths](t.root,n.root,e.matrixParams)&&lC[e.queryParams](t.queryParams,n.queryParams)&&!(e.fragment==="exact"&&t.fragment!==n.fragment)}function $A(t,n){return Ln(t,n)}function dC(t,n,e){if(!Nr(t.segments,n.segments)||!Qd(t.segments,n.segments,e)||t.numberOfChildren!==n.numberOfChildren)return!1;for(let i in n.children)if(!t.children[i]||!dC(t.children[i],n.children[i],e))return!1;return!0}function GA(t,n){return Object.keys(n).length<=Object.keys(t).length&&Object.keys(n).every(e=>sC(t[e],n[e]))}function uC(t,n,e){return fC(t,n,n.segments,e)}function fC(t,n,e,i){if(t.segments.length>e.length){let r=t.segments.slice(0,e.length);return!(!Nr(r,e)||n.hasChildren()||!Qd(r,e,i))}else if(t.segments.length===e.length){if(!Nr(t.segments,e)||!Qd(t.segments,e,i))return!1;for(let r in n.children)if(!t.children[r]||!uC(t.children[r],n.children[r],i))return!1;return!0}else{let r=e.slice(0,t.segments.length),o=e.slice(t.segments.length);return!Nr(t.segments,r)||!Qd(t.segments,r,i)||!t.children[ue]?!1:fC(t.children[ue],n,o,i)}}function Qd(t,n,e){return n.every((i,r)=>lC[e](t[r].parameters,i.parameters))}var on=class{root;queryParams;fragment;_queryParamMap;constructor(n=new Ce([],{}),e={},i=null){this.root=n,this.queryParams=e,this.fragment=i}get queryParamMap(){return this._queryParamMap??=Fr(this.queryParams),this._queryParamMap}toString(){return QA.serialize(this)}},Ce=class{segments;children;parent=null;constructor(n,e){this.segments=n,this.children=e,Object.values(e).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Yd(this)}},Bi=class{path;parameters;_parameterMap;constructor(n,e){this.path=n,this.parameters=e}get parameterMap(){return this._parameterMap??=Fr(this.parameters),this._parameterMap}toString(){return hC(this)}};function WA(t,n){return Nr(t,n)&&t.every((e,i)=>Ln(e.parameters,n[i].parameters))}function Nr(t,n){return t.length!==n.length?!1:t.every((e,i)=>e.path===n[i].path)}function qA(t,n){let e=[];return Object.entries(t.children).forEach(([i,r])=>{i===ue&&(e=e.concat(n(r,i)))}),Object.entries(t.children).forEach(([i,r])=>{i!==ue&&(e=e.concat(n(r,i)))}),e}var Ha=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:()=>new ji,providedIn:"root"})}return t})(),ji=class{parse(n){let e=new yg(n);return new on(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(n){let e=`/${Sa(n.root,!0)}`,i=ZA(n.queryParams),r=typeof n.fragment=="string"?`#${YA(n.fragment)}`:"";return`${e}${i}${r}`}},QA=new ji;function Yd(t){return t.segments.map(n=>hC(n)).join("/")}function Sa(t,n){if(!t.hasChildren())return Yd(t);if(n){let e=t.children[ue]?Sa(t.children[ue],!1):"",i=[];return Object.entries(t.children).forEach(([r,o])=>{r!==ue&&i.push(`${r}:${Sa(o,!1)}`)}),i.length>0?`${e}(${i.join("//")})`:e}else{let e=qA(t,(i,r)=>r===ue?[Sa(t.children[ue],!1)]:[`${r}:${Sa(i,!1)}`]);return Object.keys(t.children).length===1&&t.children[ue]!=null?`${Yd(t)}/${e[0]}`:`${Yd(t)}/(${e.join("//")})`}}function mC(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Wd(t){return mC(t).replace(/%3B/gi,";")}function YA(t){return encodeURI(t)}function bg(t){return mC(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Kd(t){return decodeURIComponent(t)}function Jw(t){return Kd(t.replace(/\+/g,"%20"))}function hC(t){return`${bg(t.path)}${KA(t.parameters)}`}function KA(t){return Object.entries(t).map(([n,e])=>`;${bg(n)}=${bg(e)}`).join("")}function ZA(t){let n=Object.entries(t).map(([e,i])=>Array.isArray(i)?i.map(r=>`${Wd(e)}=${Wd(r)}`).join("&"):`${Wd(e)}=${Wd(i)}`).filter(e=>e);return n.length?`?${n.join("&")}`:""}var XA=/^[^\/()?;#]+/;function mg(t){let n=t.match(XA);return n?n[0]:""}var JA=/^[^\/()?;=#]+/;function eO(t){let n=t.match(JA);return n?n[0]:""}var tO=/^[^=?&#]+/;function nO(t){let n=t.match(tO);return n?n[0]:""}var iO=/^[^&#]+/;function rO(t){let n=t.match(iO);return n?n[0]:""}var yg=class{url;remaining;constructor(n){this.url=n,this.remaining=n}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new Ce([],{}):new Ce([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional("?"))do this.parseQueryParam(n);while(this.consumeOptional("&"));return n}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(n=0){if(n>50)throw new D(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let i={};this.peekStartsWith("/(")&&(this.capture("/"),i=this.parseParens(!0,n));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,n)),(e.length>0||Object.keys(i).length>0)&&(r[ue]=new Ce(e,i)),r}parseSegment(){let n=mg(this.remaining);if(n===""&&this.peekStartsWith(";"))throw new D(4009,!1);return this.capture(n),new Bi(Kd(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(";");)this.parseParam(n);return n}parseParam(n){let e=eO(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let r=mg(this.remaining);r&&(i=r,this.capture(i))}n[Kd(e)]=Kd(i)}parseQueryParam(n){let e=nO(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let s=rO(this.remaining);s&&(i=s,this.capture(i))}let r=Jw(e),o=Jw(i);if(n.hasOwnProperty(r)){let s=n[r];Array.isArray(s)||(s=[s],n[r]=s),s.push(o)}else n[r]=o}parseParens(n,e){let i={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=mg(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new D(4010,!1);let s;r.indexOf(":")>-1?(s=r.slice(0,r.indexOf(":")),this.capture(s),this.capture(":")):n&&(s=ue);let a=this.parseChildren(e+1);i[s??ue]=Object.keys(a).length===1&&a[ue]?a[ue]:new Ce([],a),this.consumeOptional("//")}return i}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new D(4011,!1)}};function pC(t){return t.segments.length>0?new Ce([],{[ue]:t}):t}function gC(t){let n={};for(let[i,r]of Object.entries(t.children)){let o=gC(r);if(i===ue&&o.segments.length===0&&o.hasChildren())for(let[s,a]of Object.entries(o.children))n[s]=a;else(o.segments.length>0||o.hasChildren())&&(n[i]=o)}let e=new Ce(t.segments,n);return oO(e)}function oO(t){if(t.numberOfChildren===1&&t.children[ue]){let n=t.children[ue];return new Ce(t.segments.concat(n.segments),n.children)}return t}function Bo(t){return t instanceof on}function _C(t,n,e=null,i=null,r=new ji){let o=vC(t);return bC(o,n,e,i,r)}function vC(t){let n;function e(o){let s={};for(let l of o.children){let c=e(l);s[l.outlet]=c}let a=new Ce(o.url,s);return o===t&&(n=a),a}let i=e(t.root),r=pC(i);return n??r}function bC(t,n,e,i,r){let o=t;for(;o.parent;)o=o.parent;if(n.length===0)return hg(o,o,o,e,i,r);let s=sO(n);if(s.toRoot())return hg(o,o,new Ce([],{}),e,i,r);let a=aO(s,o,t),l=a.processChildren?Ta(a.segmentGroup,a.index,s.commands):wC(a.segmentGroup,a.index,s.commands);return hg(o,a.segmentGroup,l,e,i,r)}function Xd(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function Aa(t){return typeof t=="object"&&t!=null&&t.outlets}function eC(t,n,e){t||="\u0275";let i=new on;return i.queryParams={[t]:n},e.parse(e.serialize(i)).queryParams[t]}function hg(t,n,e,i,r,o){let s={};for(let[c,u]of Object.entries(i??{}))s[c]=Array.isArray(u)?u.map(f=>eC(c,f,o)):eC(c,u,o);let a;t===n?a=e:a=yC(t,n,e);let l=pC(gC(a));return new on(l,s,r)}function yC(t,n,e){let i={};return Object.entries(t.children).forEach(([r,o])=>{o===n?i[r]=e:i[r]=yC(o,n,e)}),new Ce(t.segments,i)}var Jd=class{isAbsolute;numberOfDoubleDots;commands;constructor(n,e,i){if(this.isAbsolute=n,this.numberOfDoubleDots=e,this.commands=i,n&&i.length>0&&Xd(i[0]))throw new D(4003,!1);let r=i.find(Aa);if(r&&r!==zA(i))throw new D(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function sO(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new Jd(!0,0,t);let n=0,e=!1,i=t.reduce((r,o,s)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let a={};return Object.entries(o.outlets).forEach(([l,c])=>{a[l]=typeof c=="string"?c.split("/"):c}),[...r,{outlets:a}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:s===0?(o.split("/").forEach((a,l)=>{l==0&&a==="."||(l==0&&a===""?e=!0:a===".."?n++:a!=""&&r.push(a))}),r):[...r,o]},[]);return new Jd(e,n,i)}var Po=class{segmentGroup;processChildren;index;constructor(n,e,i){this.segmentGroup=n,this.processChildren=e,this.index=i}};function aO(t,n,e){if(t.isAbsolute)return new Po(n,!0,0);if(!e)return new Po(n,!1,NaN);if(e.parent===null)return new Po(e,!0,0);let i=Xd(t.commands[0])?0:1,r=e.segments.length-1+i;return lO(e,r,t.numberOfDoubleDots)}function lO(t,n,e){let i=t,r=n,o=e;for(;o>r;){if(o-=r,i=i.parent,!i)throw new D(4005,!1);r=i.segments.length}return new Po(i,!1,r-o)}function cO(t){return Aa(t[0])?t[0].outlets:{[ue]:t}}function wC(t,n,e){if(t??=new Ce([],{}),t.segments.length===0&&t.hasChildren())return Ta(t,n,e);let i=dO(t,n,e),r=e.slice(i.commandIndex);if(i.match&&i.pathIndex<t.segments.length){let o=new Ce(t.segments.slice(0,i.pathIndex),{});return o.children[ue]=new Ce(t.segments.slice(i.pathIndex),t.children),Ta(o,0,r)}else return i.match&&r.length===0?new Ce(t.segments,{}):i.match&&!t.hasChildren()?wg(t,n,e):i.match?Ta(t,0,r):wg(t,n,e)}function Ta(t,n,e){if(e.length===0)return new Ce(t.segments,{});{let i=cO(e),r={};if(Object.keys(i).some(o=>o!==ue)&&t.children[ue]&&t.numberOfChildren===1&&t.children[ue].segments.length===0){let o=Ta(t.children[ue],n,e);return new Ce(t.segments,o.children)}return Object.entries(i).forEach(([o,s])=>{typeof s=="string"&&(s=[s]),s!==null&&(r[o]=wC(t.children[o],n,s))}),Object.entries(t.children).forEach(([o,s])=>{i[o]===void 0&&(r[o]=s)}),new Ce(t.segments,r)}}function dO(t,n,e){let i=0,r=n,o={match:!1,pathIndex:0,commandIndex:0};for(;r<t.segments.length;){if(i>=e.length)return o;let s=t.segments[r],a=e[i];if(Aa(a))break;let l=`${a}`,c=i<e.length-1?e[i+1]:null;if(r>0&&l===void 0)break;if(l&&c&&typeof c=="object"&&c.outlets===void 0){if(!nC(l,c,s))return o;i+=2}else{if(!nC(l,{},s))return o;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function wg(t,n,e){let i=t.segments.slice(0,n),r=0;for(;r<e.length;){let o=e[r];if(Aa(o)){let l=uO(o.outlets);return new Ce(i,l)}if(r===0&&Xd(e[0])){let l=t.segments[n];i.push(new Bi(l.path,tC(e[0]))),r++;continue}let s=Aa(o)?o.outlets[ue]:`${o}`,a=r<e.length-1?e[r+1]:null;s&&a&&Xd(a)?(i.push(new Bi(s,tC(a))),r+=2):(i.push(new Bi(s,{})),r++)}return new Ce(i,{})}function uO(t){let n={};return Object.entries(t).forEach(([e,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(n[e]=wg(new Ce([],{}),0,i))}),n}function tC(t){let n={};return Object.entries(t).forEach(([e,i])=>n[e]=`${i}`),n}function nC(t,n,e){return t==e.path&&Ln(n,e.parameters)}var ka="imperative",gt=(function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t})(gt||{}),qt=class{id;url;constructor(n,e){this.id=n,this.url=e}},Pr=class extends qt{type=gt.NavigationStart;navigationTrigger;restoredState;constructor(n,e,i="imperative",r=null){super(n,e),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},ai=class extends qt{urlAfterRedirects;type=gt.NavigationEnd;constructor(n,e,i){super(n,e),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},It=(function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t[t.Aborted=4]="Aborted",t})(It||{}),Oa=(function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t})(Oa||{}),rn=class extends qt{reason;code;type=gt.NavigationCancel;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function CC(t){return t instanceof rn&&(t.code===It.Redirect||t.code===It.SupersededByNewNavigation)}var li=class extends qt{reason;code;type=gt.NavigationSkipped;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}},Lr=class extends qt{error;target;type=gt.NavigationError;constructor(n,e,i,r){super(n,e),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Na=class extends qt{urlAfterRedirects;state;type=gt.RoutesRecognized;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},eu=class extends qt{urlAfterRedirects;state;type=gt.GuardsCheckStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},tu=class extends qt{urlAfterRedirects;state;shouldActivate;type=gt.GuardsCheckEnd;constructor(n,e,i,r,o){super(n,e),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},nu=class extends qt{urlAfterRedirects;state;type=gt.ResolveStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},iu=class extends qt{urlAfterRedirects;state;type=gt.ResolveEnd;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},ru=class{route;type=gt.RouteConfigLoadStart;constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},ou=class{route;type=gt.RouteConfigLoadEnd;constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},su=class{snapshot;type=gt.ChildActivationStart;constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},au=class{snapshot;type=gt.ChildActivationEnd;constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},lu=class{snapshot;type=gt.ActivationStart;constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},cu=class{snapshot;type=gt.ActivationEnd;constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var jo=class{},Fa=class{},Vo=class{url;navigationBehaviorOptions;constructor(n,e){this.url=n,this.navigationBehaviorOptions=e}};function fO(t){return!(t instanceof jo)&&!(t instanceof Vo)&&!(t instanceof Fa)}var du=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(n){this.rootInjector=n,this.children=new $o(this.rootInjector)}},$o=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,i){let r=this.getOrCreateContext(e);r.outlet=i,this.contexts.set(e,r)}onChildOutletDestroyed(e){let i=this.getContext(e);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let i=this.getContext(e);return i||(i=new du(this.rootInjector),this.contexts.set(e,i)),i}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(i){return new(i||t)(R(Te))};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),uu=class{_root;constructor(n){this._root=n}get root(){return this._root.value}parent(n){let e=this.pathFromRoot(n);return e.length>1?e[e.length-2]:null}children(n){let e=Cg(n,this._root);return e?e.children.map(i=>i.value):[]}firstChild(n){let e=Cg(n,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(n){let e=Dg(n,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==n)}pathFromRoot(n){return Dg(n,this._root).map(e=>e.value)}};function Cg(t,n){if(t===n.value)return n;for(let e of n.children){let i=Cg(t,e);if(i)return i}return null}function Dg(t,n){if(t===n.value)return[n];for(let e of n.children){let i=Dg(t,e);if(i.length)return i.unshift(n),i}return[]}var Wt=class{value;children;constructor(n,e){this.value=n,this.children=e}toString(){return`TreeNode(${this.value})`}};function Fo(t){let n={};return t&&t.children.forEach(e=>n[e.value.outlet]=e),n}var Pa=class extends uu{snapshot;constructor(n,e){super(n),this.snapshot=e,Ag(this,n)}toString(){return this.snapshot.toString()}};function DC(t,n){let e=mO(t,n),i=new $e([new Bi("",{})]),r=new $e({}),o=new $e({}),s=new $e({}),a=new $e(""),l=new Vi(i,r,s,a,o,ue,t,e.root);return l.snapshot=e.root,new Pa(new Wt(l,[]),e)}function mO(t,n){let e={},i={},r={},s=new Ho([],e,r,"",i,ue,t,null,{},n);return new La("",new Wt(s,[]))}var Vi=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(n,e,i,r,o,s,a,l){this.urlSubject=n,this.paramsSubject=e,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=o,this.outlet=s,this.component=a,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(N(c=>c[Va]))??V(void 0),this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(N(n=>Fr(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(N(n=>Fr(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Rg(t,n,e="emptyOnly"){let i,{routeConfig:r}=t;return n!==null&&(e==="always"||r?.path===""||!n.component&&!n.routeConfig?.loadComponent)?i={params:_(_({},n.params),t.params),data:_(_({},n.data),t.data),resolve:_(_(_(_({},t.data),n.data),r?.data),t._resolvedData)}:i={params:_({},t.params),data:_({},t.data),resolve:_(_({},t.data),t._resolvedData??{})},r&&EC(r)&&(i.resolve[Va]=r.title),i}var Ho=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[Va]}constructor(n,e,i,r,o,s,a,l,c,u){this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o,this.outlet=s,this.component=a,this.routeConfig=l,this._resolve=c,this._environmentInjector=u}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Fr(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Fr(this.queryParams),this._queryParamMap}toString(){let n=this.url.map(i=>i.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${n}', path:'${e}')`}},La=class extends uu{url;constructor(n,e){super(e),this.url=n,Ag(this,e)}toString(){return xC(this._root)}};function Ag(t,n){n.value._routerState=t,n.children.forEach(e=>Ag(t,e))}function xC(t){let n=t.children.length>0?` { ${t.children.map(xC).join(", ")} } `:"";return`${t.value}${n}`}function pg(t){if(t.snapshot){let n=t.snapshot,e=t._futureSnapshot;t.snapshot=e,Ln(n.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),n.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),Ln(n.params,e.params)||t.paramsSubject.next(e.params),HA(n.url,e.url)||t.urlSubject.next(e.url),Ln(n.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function xg(t,n){let e=Ln(t.params,n.params)&&WA(t.url,n.url),i=!t.parent!=!n.parent;return e&&!i&&(!t.parent||xg(t.parent,n.parent))}function EC(t){return typeof t.title=="string"||t.title===null}var IC=new v(""),za=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=ue;activateEvents=new q;deactivateEvents=new q;attachEvents=new q;detachEvents=new q;routerOutletData=vw();parentContexts=d($o);location=d(ot);changeDetector=d(be);inputBinder=d(pu,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:i,previousValue:r}=e.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new D(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new D(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new D(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,i){this.activated=e,this._activatedRoute=i,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,i){if(this.isActivated)throw new D(4013,!1);this._activatedRoute=e;let r=this.location,s=e.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,l=new Eg(e,a,r.injector,this.routerOutletData);this.activated=r.createComponent(s,{index:r.length,injector:l,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Xe]})}return t})(),Eg=class{route;childContexts;parent;outletData;constructor(n,e,i,r){this.route=n,this.childContexts=e,this.parent=i,this.outletData=r}get(n,e){return n===Vi?this.route:n===$o?this.childContexts:n===IC?this.outletData:this.parent.get(n,e)}},pu=new v("");var Og=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(i,r){i&1&&se(0,"router-outlet")},dependencies:[za],encapsulation:2})}return t})();function Ng(t){let n=t.children&&t.children.map(Ng),e=n?Q(_({},t),{children:n}):_({},t);return!e.component&&!e.loadComponent&&(n||e.loadChildren)&&e.outlet&&e.outlet!==ue&&(e.component=Og),e}function hO(t,n,e){let i=Ba(t,n._root,e?e._root:void 0);return new Pa(i,n)}function Ba(t,n,e){if(e&&t.shouldReuseRoute(n.value,e.value.snapshot)){let i=e.value;i._futureSnapshot=n.value;let r=pO(t,n,e);return new Wt(i,r)}else{if(t.shouldAttach(n.value)){let o=t.retrieve(n.value);if(o!==null){let s=o.route;return s.value._futureSnapshot=n.value,s.children=n.children.map(a=>Ba(t,a)),s}}let i=gO(n.value),r=n.children.map(o=>Ba(t,o));return new Wt(i,r)}}function pO(t,n,e){return n.children.map(i=>{for(let r of e.children)if(t.shouldReuseRoute(i.value,r.value.snapshot))return Ba(t,i,r);return Ba(t,i)})}function gO(t){return new Vi(new $e(t.url),new $e(t.params),new $e(t.queryParams),new $e(t.fragment),new $e(t.data),t.outlet,t.component,t)}var zo=class{redirectTo;navigationBehaviorOptions;constructor(n,e){this.redirectTo=n,this.navigationBehaviorOptions=e}},SC="ngNavigationCancelingError";function fu(t,n){let{redirectTo:e,navigationBehaviorOptions:i}=Bo(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,r=MC(!1,It.Redirect);return r.url=e,r.navigationBehaviorOptions=i,r}function MC(t,n){let e=new Error(`NavigationCancelingError: ${t||""}`);return e[SC]=!0,e.cancellationCode=n,e}function _O(t){return TC(t)&&Bo(t.url)}function TC(t){return!!t&&t[SC]}var Ig=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(n,e,i,r,o){this.routeReuseStrategy=n,this.futureState=e,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=o}activate(n){let e=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,i,n),pg(this.futureState.root),this.activateChildRoutes(e,i,n)}deactivateChildRoutes(n,e,i){let r=Fo(e);n.children.forEach(o=>{let s=o.value.outlet;this.deactivateRoutes(o,r[s],i),delete r[s]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,i)})}deactivateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(r===o)if(r.component){let s=i.getContext(r.outlet);s&&this.deactivateChildRoutes(n,e,s.children)}else this.deactivateChildRoutes(n,e,i);else o&&this.deactivateRouteAndItsChildren(e,i)}deactivateRouteAndItsChildren(n,e){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,e):this.deactivateRouteAndOutlet(n,e)}detachAndStoreRouteSubtree(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=Fo(n);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,r);if(i&&i.outlet){let s=i.outlet.detach(),a=i.children.onOutletDeactivated();this.routeReuseStrategy.store(n.value.snapshot,{componentRef:s,route:n,contexts:a})}}deactivateRouteAndOutlet(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=Fo(n);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(n,e,i){let r=Fo(e);n.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],i),this.forwardEvent(new cu(o.value.snapshot))}),n.children.length&&this.forwardEvent(new au(n.value.snapshot))}activateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(pg(r),r===o)if(r.component){let s=i.getOrCreateContext(r.outlet);this.activateChildRoutes(n,e,s.children)}else this.activateChildRoutes(n,e,i);else if(r.component){let s=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),s.children.onOutletReAttached(a.contexts),s.attachRef=a.componentRef,s.route=a.route.value,s.outlet&&s.outlet.attach(a.componentRef,a.route.value),pg(a.route.value),this.activateChildRoutes(n,null,s.children)}else s.attachRef=null,s.route=r,s.outlet&&s.outlet.activateWith(r,s.injector),this.activateChildRoutes(n,null,s.children)}else this.activateChildRoutes(n,null,i)}},mu=class{path;route;constructor(n){this.path=n,this.route=this.path[this.path.length-1]}},Lo=class{component;route;constructor(n,e){this.component=n,this.route=e}};function vO(t,n,e){let i=t._root,r=n?n._root:null;return Ma(i,r,e,[i.value])}function bO(t){let n=t.routeConfig?t.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:t,guards:n}}function Go(t,n){let e=Symbol(),i=n.get(t,e);return i===e?typeof t=="function"&&!fm(t)?t:n.get(t):i}function Ma(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=Fo(n);return t.children.forEach(s=>{yO(s,o[s.value.outlet],e,i.concat([s.value]),r),delete o[s.value.outlet]}),Object.entries(o).forEach(([s,a])=>Ra(a,e.getContext(s),r)),r}function yO(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,s=n?n.value:null,a=e?e.getContext(t.value.outlet):null;if(s&&o.routeConfig===s.routeConfig){let l=wO(s,o,o.routeConfig.runGuardsAndResolvers);l?r.canActivateChecks.push(new mu(i)):(o.data=s.data,o._resolvedData=s._resolvedData),o.component?Ma(t,n,a?a.children:null,i,r):Ma(t,n,e,i,r),l&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new Lo(a.outlet.component,s))}else s&&Ra(n,a,r),r.canActivateChecks.push(new mu(i)),o.component?Ma(t,null,a?a.children:null,i,r):Ma(t,null,e,i,r);return r}function wO(t,n,e){if(typeof e=="function")return nt(n._environmentInjector,()=>e(t,n));switch(e){case"pathParamsChange":return!Nr(t.url,n.url);case"pathParamsOrQueryParamsChange":return!Nr(t.url,n.url)||!Ln(t.queryParams,n.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!xg(t,n)||!Ln(t.queryParams,n.queryParams);default:return!xg(t,n)}}function Ra(t,n,e){let i=Fo(t),r=t.value;Object.entries(i).forEach(([o,s])=>{r.component?n?Ra(s,n.children.getContext(o),e):Ra(s,null,e):Ra(s,n,e)}),r.component?n&&n.outlet&&n.outlet.isActivated?e.canDeactivateChecks.push(new Lo(n.outlet.component,r)):e.canDeactivateChecks.push(new Lo(null,r)):e.canDeactivateChecks.push(new Lo(null,r))}function Ua(t){return typeof t=="function"}function CO(t){return typeof t=="boolean"}function DO(t){return t&&Ua(t.canLoad)}function xO(t){return t&&Ua(t.canActivate)}function EO(t){return t&&Ua(t.canActivateChild)}function IO(t){return t&&Ua(t.canDeactivate)}function SO(t){return t&&Ua(t.canMatch)}function kC(t){return t instanceof rr||t?.name==="EmptyError"}var qd=Symbol("INITIAL_VALUE");function Uo(){return ye(t=>or(t.map(n=>n.pipe(Me(1),Ze(qd)))).pipe(N(n=>{for(let e of n)if(e!==!0){if(e===qd)return qd;if(e===!1||MO(e))return e}return!0}),he(n=>n!==qd),Me(1)))}function MO(t){return Bo(t)||t instanceof zo}function RC(t){return t.aborted?V(void 0).pipe(Me(1)):new X(n=>{let e=()=>{n.next(),n.complete()};return t.addEventListener("abort",e),()=>t.removeEventListener("abort",e)})}function AC(t){return ce(RC(t))}function TO(t){return Tt(n=>{let{targetSnapshot:e,currentSnapshot:i,guards:{canActivateChecks:r,canDeactivateChecks:o}}=n;return o.length===0&&r.length===0?V(Q(_({},n),{guardsResult:!0})):kO(o,e,i).pipe(Tt(s=>s&&CO(s)?RO(e,r,t):V(s)),N(s=>Q(_({},n),{guardsResult:s})))})}function kO(t,n,e){return Ae(t).pipe(Tt(i=>PO(i.component,i.route,e,n)),Wn(i=>i!==!0,!0))}function RO(t,n,e){return Ae(n).pipe(ro(i=>vi(OO(i.route.parent,e),AO(i.route,e),FO(t,i.path),NO(t,i.route))),Wn(i=>i!==!0,!0))}function AO(t,n){return t!==null&&n&&n(new lu(t)),V(!0)}function OO(t,n){return t!==null&&n&&n(new su(t)),V(!0)}function NO(t,n){let e=n.routeConfig?n.routeConfig.canActivate:null;if(!e||e.length===0)return V(!0);let i=e.map(r=>sr(()=>{let o=n._environmentInjector,s=Go(r,o),a=xO(s)?s.canActivate(n,t):nt(o,()=>s(n,t));return Br(a).pipe(Wn())}));return V(i).pipe(Uo())}function FO(t,n){let e=n[n.length-1],r=n.slice(0,n.length-1).reverse().map(o=>bO(o)).filter(o=>o!==null).map(o=>sr(()=>{let s=o.guards.map(a=>{let l=o.node._environmentInjector,c=Go(a,l),u=EO(c)?c.canActivateChild(e,t):nt(l,()=>c(e,t));return Br(u).pipe(Wn())});return V(s).pipe(Uo())}));return V(r).pipe(Uo())}function PO(t,n,e,i){let r=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!r||r.length===0)return V(!0);let o=r.map(s=>{let a=n._environmentInjector,l=Go(s,a),c=IO(l)?l.canDeactivate(t,n,e,i):nt(a,()=>l(t,n,e,i));return Br(c).pipe(Wn())});return V(o).pipe(Uo())}function LO(t,n,e,i,r){let o=n.canLoad;if(o===void 0||o.length===0)return V(!0);let s=o.map(a=>{let l=Go(a,t),c=DO(l)?l.canLoad(n,e):nt(t,()=>l(n,e)),u=Br(c);return r?u.pipe(AC(r)):u});return V(s).pipe(Uo(),OC(i))}function OC(t){return Gf(We(n=>{if(typeof n!="boolean")throw fu(t,n)}),N(n=>n===!0))}function BO(t,n,e,i,r,o){let s=n.canMatch;if(!s||s.length===0)return V(!0);let a=s.map(l=>{let c=Go(l,t),u=SO(c)?c.canMatch(n,e,r):nt(t,()=>c(n,e,r));return Br(u).pipe(AC(o))});return V(a).pipe(Uo(),OC(i))}var si=class t extends Error{segmentGroup;constructor(n){super(),this.segmentGroup=n||null,Object.setPrototypeOf(this,t.prototype)}},ja=class t extends Error{urlTree;constructor(n){super(),this.urlTree=n,Object.setPrototypeOf(this,t.prototype)}};function jO(t){throw new D(4e3,!1)}function VO(t){throw MC(!1,It.GuardRejected)}var Sg=class{urlSerializer;urlTree;constructor(n,e){this.urlSerializer=n,this.urlTree=e}async lineralizeSegments(n,e){let i=[],r=e.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return i;if(r.numberOfChildren>1||!r.children[ue])throw jO(`${n.redirectTo}`);r=r.children[ue]}}async applyRedirectCommands(n,e,i,r,o){let s=await HO(e,r,o);if(s instanceof on)throw new ja(s);let a=this.applyRedirectCreateUrlTree(s,this.urlSerializer.parse(s),n,i);if(s[0]==="/")throw new ja(a);return a}applyRedirectCreateUrlTree(n,e,i,r){let o=this.createSegmentGroup(n,e.root,i,r);return new on(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(n,e){let i={};return Object.entries(n).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let a=o.substring(1);i[r]=e[a]}else i[r]=o}),i}createSegmentGroup(n,e,i,r){let o=this.createSegments(n,e.segments,i,r),s={};return Object.entries(e.children).forEach(([a,l])=>{s[a]=this.createSegmentGroup(n,l,i,r)}),new Ce(o,s)}createSegments(n,e,i,r){return e.map(o=>o.path[0]===":"?this.findPosParam(n,o,r):this.findOrReturn(o,i))}findPosParam(n,e,i){let r=i[e.path.substring(1)];if(!r)throw new D(4001,!1);return r}findOrReturn(n,e){let i=0;for(let r of e){if(r.path===n.path)return e.splice(i),r;i++}return n}};function HO(t,n,e){if(typeof t=="string")return Promise.resolve(t);let i=t;return Zd(Br(nt(e,()=>i(n))))}function zO(t,n){return t.providers&&!t._injector&&(t._injector=ua(t.providers,n,`Route: ${t.path}`)),t._injector??n}function xn(t){return t.outlet||ue}function UO(t,n){let e=t.filter(i=>xn(i)===n);return e.push(...t.filter(i=>xn(i)!==n)),e}var Mg={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function NC(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function $O(t,n,e,i,r,o,s){let a=FC(t,n,e);if(!a.matched)return V(a);let l=NC(o(a));return i=zO(n,i),BO(i,n,e,r,l,s).pipe(N(c=>c===!0?a:_({},Mg)))}function FC(t,n,e){if(n.path==="")return n.pathMatch==="full"&&(t.hasChildren()||e.length>0)?_({},Mg):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(n.matcher||oC)(e,t,n);if(!r)return _({},Mg);let o={};Object.entries(r.posParams??{}).forEach(([a,l])=>{o[a]=l.path});let s=r.consumed.length>0?_(_({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:s,positionalParamSegments:r.posParams??{}}}function iC(t,n,e,i,r){return e.length>0&&qO(t,e,i,r)?{segmentGroup:new Ce(n,WO(i,new Ce(e,t.children))),slicedSegments:[]}:e.length===0&&QO(t,e,i)?{segmentGroup:new Ce(t.segments,GO(t,e,i,t.children)),slicedSegments:e}:{segmentGroup:new Ce(t.segments,t.children),slicedSegments:e}}function GO(t,n,e,i){let r={};for(let o of e)if(gu(t,n,o)&&!i[xn(o)]){let s=new Ce([],{});r[xn(o)]=s}return _(_({},i),r)}function WO(t,n){let e={};e[ue]=n;for(let i of t)if(i.path===""&&xn(i)!==ue){let r=new Ce([],{});e[xn(i)]=r}return e}function qO(t,n,e,i){return e.some(r=>!gu(t,n,r)||!(xn(r)!==ue)?!1:!(i!==void 0&&xn(r)===i))}function QO(t,n,e){return e.some(i=>gu(t,n,i))}function gu(t,n,e){return(t.hasChildren()||n.length>0)&&e.pathMatch==="full"?!1:e.path===""}function YO(t,n,e){return n.length===0&&!t.children[e]}var Tg=class{};async function KO(t,n,e,i,r,o,s="emptyOnly",a){return new kg(t,n,e,i,r,s,o,a).recognize()}var ZO=31,kg=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(n,e,i,r,o,s,a,l){this.injector=n,this.configLoader=e,this.rootComponentType=i,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=s,this.urlSerializer=a,this.abortSignal=l,this.applyRedirects=new Sg(this.urlSerializer,this.urlTree)}noMatchError(n){return new D(4002,`'${n.segmentGroup}'`)}async recognize(){let n=iC(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:i}=await this.match(n),r=new Wt(i,e),o=new La("",r),s=_C(i,[],this.urlTree.queryParams,this.urlTree.fragment);return s.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(s),{state:o,tree:s}}async match(n){let e=new Ho([],Object.freeze({}),Object.freeze(_({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),ue,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,n,ue,e),rootSnapshot:e}}catch(i){if(i instanceof ja)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof si?this.noMatchError(i):i}}async processSegmentGroup(n,e,i,r,o){if(i.segments.length===0&&i.hasChildren())return this.processChildren(n,e,i,o);let s=await this.processSegment(n,e,i,i.segments,r,!0,o);return s instanceof Wt?[s]:[]}async processChildren(n,e,i,r){let o=[];for(let l of Object.keys(i.children))l==="primary"?o.unshift(l):o.push(l);let s=[];for(let l of o){let c=i.children[l],u=UO(e,l),f=await this.processSegmentGroup(n,u,c,l,r);s.push(...f)}let a=PC(s);return XO(a),a}async processSegment(n,e,i,r,o,s,a){for(let l of e)try{return await this.processSegmentAgainstRoute(l._injector??n,e,l,i,r,o,s,a)}catch(c){if(c instanceof si||kC(c))continue;throw c}if(YO(i,r,o))return new Tg;throw new si(i)}async processSegmentAgainstRoute(n,e,i,r,o,s,a,l){if(xn(i)!==s&&(s===ue||!gu(r,o,i)))throw new si(r);if(i.redirectTo===void 0)return this.matchSegmentAgainstRoute(n,r,i,o,s,l);if(this.allowRedirects&&a)return this.expandSegmentAgainstRouteUsingRedirect(n,r,e,i,o,s,l);throw new si(r)}async expandSegmentAgainstRouteUsingRedirect(n,e,i,r,o,s,a){let{matched:l,parameters:c,consumedSegments:u,positionalParamSegments:f,remainingSegments:m}=FC(e,r,o);if(!l)throw new si(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>ZO&&(this.allowRedirects=!1));let h=this.createSnapshot(n,r,o,c,a);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let y=await this.applyRedirects.applyRedirectCommands(u,r.redirectTo,f,NC(h),n),S=await this.applyRedirects.lineralizeSegments(r,y);return this.processSegment(n,i,e,S.concat(m),s,!1,a)}createSnapshot(n,e,i,r,o){let s=new Ho(i,r,Object.freeze(_({},this.urlTree.queryParams)),this.urlTree.fragment,eN(e),xn(e),e.component??e._loadedComponent??null,e,tN(e),n),a=Rg(s,o,this.paramsInheritanceStrategy);return s.params=Object.freeze(a.params),s.data=Object.freeze(a.data),s}async matchSegmentAgainstRoute(n,e,i,r,o,s){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let a=dt=>this.createSnapshot(n,i,dt.consumedSegments,dt.parameters,s),l=await Zd($O(e,i,r,n,this.urlSerializer,a,this.abortSignal));if(i.path==="**"&&(e.children={}),!l?.matched)throw new si(e);n=i._injector??n;let{routes:c}=await this.getChildConfig(n,i,r),u=i._loadedInjector??n,{parameters:f,consumedSegments:m,remainingSegments:h}=l,y=this.createSnapshot(n,i,m,f,s),{segmentGroup:S,slicedSegments:k}=iC(e,m,h,c,o);if(k.length===0&&S.hasChildren()){let dt=await this.processChildren(u,c,S,y);return new Wt(y,dt)}if(c.length===0&&k.length===0)return new Wt(y,[]);let B=xn(i)===o,we=await this.processSegment(u,c,S,k,B?ue:o,!0,y);return new Wt(y,we instanceof Wt?[we]:[])}async getChildConfig(n,e,i){if(e.children)return{routes:e.children,injector:n};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(n).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await Zd(LO(n,e,i,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(n,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw VO(e)}return{routes:[],injector:n}}};function XO(t){t.sort((n,e)=>n.value.outlet===ue?-1:e.value.outlet===ue?1:n.value.outlet.localeCompare(e.value.outlet))}function JO(t){let n=t.value.routeConfig;return n&&n.path===""}function PC(t){let n=[],e=new Set;for(let i of t){if(!JO(i)){n.push(i);continue}let r=n.find(o=>i.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...i.children),e.add(r)):n.push(i)}for(let i of e){let r=PC(i.children);n.push(new Wt(i.value,r))}return n.filter(i=>!e.has(i))}function eN(t){return t.data||{}}function tN(t){return t.resolve||{}}function nN(t,n,e,i,r,o,s){return Tt(async a=>{let{state:l,tree:c}=await KO(t,n,e,i,a.extractedUrl,r,o,s);return Q(_({},a),{targetSnapshot:l,urlAfterRedirects:c})})}function iN(t){return Tt(n=>{let{targetSnapshot:e,guards:{canActivateChecks:i}}=n;if(!i.length)return V(n);let r=new Set(i.map(a=>a.route)),o=new Set;for(let a of r)if(!o.has(a))for(let l of LC(a))o.add(l);let s=0;return Ae(o).pipe(ro(a=>r.has(a)?rN(a,e,t):(a.data=Rg(a,a.parent,t).resolve,V(void 0))),We(()=>s++),sc(1),Tt(a=>s===o.size?V(n):Ge))})}function LC(t){let n=t.children.map(e=>LC(e)).flat();return[t,...n]}function rN(t,n,e){let i=t.routeConfig,r=t._resolve;return i?.title!==void 0&&!EC(i)&&(r[Va]=i.title),sr(()=>(t.data=Rg(t,t.parent,e).resolve,oN(r,t,n).pipe(N(o=>(t._resolvedData=o,t.data=_(_({},t.data),o),null)))))}function oN(t,n,e){let i=_g(t);if(i.length===0)return V({});let r={};return Ae(i).pipe(Tt(o=>sN(t[o],n,e).pipe(Wn(),We(s=>{if(s instanceof zo)throw fu(new ji,s);r[o]=s}))),sc(1),N(()=>r),Sn(o=>kC(o)?Ge:Es(o)))}function sN(t,n,e){let i=n._environmentInjector,r=Go(t,i),o=r.resolve?r.resolve(n,e):nt(i,()=>r(n,e));return Br(o)}function rC(t){return ye(n=>{let e=t(n);return e?Ae(e).pipe(N(()=>n)):V(n)})}var Fg=(()=>{class t{buildTitle(e){let i,r=e.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(o=>o.outlet===ue);return i}getResolvedTitleForRoute(e){return e.data[Va]}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:()=>d(BC),providedIn:"root"})}return t})(),BC=(()=>{class t extends Fg{title;constructor(e){super(),this.title=e}updateTitle(e){let i=this.buildTitle(e);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||t)(R(Kw))};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),$a=new v("",{factory:()=>({})}),Ga=new v(""),jC=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=d(Np);async loadComponent(e,i){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return Promise.resolve(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await aC(nt(e,()=>i.loadComponent())),s=await zC(HC(o));return this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=s,s}finally{this.componentLoaders.delete(i)}})();return this.componentLoaders.set(i,r),r}loadChildren(e,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Promise.resolve({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await VC(i,this.compiler,e,this.onLoadEndListener);return i._loadedRoutes=o.routes,i._loadedInjector=o.injector,i._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(i)}})();return this.childrenLoaders.set(i,r),r}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();async function VC(t,n,e,i){let r=await aC(nt(e,()=>t.loadChildren())),o=await zC(HC(r)),s;o instanceof wd||Array.isArray(o)?s=o:s=await n.compileModuleAsync(o),i&&i(t);let a,l,c=!1,u;return Array.isArray(s)?(l=s,c=!0):(a=s.create(e).injector,u=s,l=a.get(Ga,[],{optional:!0,self:!0}).flat()),{routes:l.map(Ng),injector:a,factory:u}}function aN(t){return t&&typeof t=="object"&&"default"in t}function HC(t){return aN(t)?t.default:t}async function zC(t){return t}var _u=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:()=>d(lN),providedIn:"root"})}return t})(),lN=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,i){return e}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),UC=new v("");var cN=()=>{},$C=new v(""),GC=(()=>{class t{currentNavigation=xe(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=xe(null);events=new C;transitionAbortWithErrorSubject=new C;configLoader=d(jC);environmentInjector=d(Te);destroyRef=d(mt);urlSerializer=d(Ha);rootContexts=d($o);location=d(Pi);inputBindingEnabled=d(pu,{optional:!0})!==null;titleStrategy=d(Fg);options=d($a,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=d(_u);createViewTransition=d(UC,{optional:!0});navigationErrorHandler=d($C,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>V(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new ru(r)),i=r=>this.events.next(new ou(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let i=++this.navigationId;lt(()=>{this.transitions?.next(Q(_({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:i,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new $e(null),this.transitions.pipe(he(i=>i!==null),ye(i=>{let r=!1,o=new AbortController,s=()=>!r&&this.currentTransition?.id===i.id;return V(i).pipe(ye(a=>{if(this.navigationId>i.id)return this.cancelNavigationTransition(i,"",It.SupersededByNewNavigation),Ge;this.currentTransition=i;let l=this.lastSuccessfulNavigation();this.currentNavigation.set({id:a.id,initialUrl:a.rawUrl,extractedUrl:a.extractedUrl,targetBrowserUrl:typeof a.extras.browserUrl=="string"?this.urlSerializer.parse(a.extras.browserUrl):a.extras.browserUrl,trigger:a.source,extras:a.extras,previousNavigation:l?Q(_({},l),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:a.routesRecognizeHandler,beforeActivateHandler:a.beforeActivateHandler});let c=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),u=a.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!c&&u!=="reload")return this.events.next(new li(a.id,this.urlSerializer.serialize(a.rawUrl),"",Oa.IgnoredSameUrlNavigation)),a.resolve(!1),Ge;if(this.urlHandlingStrategy.shouldProcessUrl(a.rawUrl))return V(a).pipe(ye(f=>(this.events.next(new Pr(f.id,this.urlSerializer.serialize(f.extractedUrl),f.source,f.restoredState)),f.id!==this.navigationId?Ge:Promise.resolve(f))),nN(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),We(f=>{i.targetSnapshot=f.targetSnapshot,i.urlAfterRedirects=f.urlAfterRedirects,this.currentNavigation.update(m=>(m.finalUrl=f.urlAfterRedirects,m)),this.events.next(new Fa)}),ye(f=>Ae(i.routesRecognizeHandler.deferredHandle??V(void 0)).pipe(N(()=>f))),We(()=>{let f=new Na(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(f)}));if(c&&this.urlHandlingStrategy.shouldProcessUrl(a.currentRawUrl)){let{id:f,extractedUrl:m,source:h,restoredState:y,extras:S}=a,k=new Pr(f,this.urlSerializer.serialize(m),h,y);this.events.next(k);let B=DC(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=i=Q(_({},a),{targetSnapshot:B,urlAfterRedirects:m,extras:Q(_({},S),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(we=>(we.finalUrl=m,we)),V(i)}else return this.events.next(new li(a.id,this.urlSerializer.serialize(a.extractedUrl),"",Oa.IgnoredByUrlHandlingStrategy)),a.resolve(!1),Ge}),N(a=>{let l=new eu(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);return this.events.next(l),this.currentTransition=i=Q(_({},a),{guards:vO(a.targetSnapshot,a.currentSnapshot,this.rootContexts)}),i}),TO(a=>this.events.next(a)),ye(a=>{if(i.guardsResult=a.guardsResult,a.guardsResult&&typeof a.guardsResult!="boolean")throw fu(this.urlSerializer,a.guardsResult);let l=new tu(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot,!!a.guardsResult);if(this.events.next(l),!s())return Ge;if(!a.guardsResult)return this.cancelNavigationTransition(a,"",It.GuardRejected),Ge;if(a.guards.canActivateChecks.length===0)return V(a);let c=new nu(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);if(this.events.next(c),!s())return Ge;let u=!1;return V(a).pipe(iN(this.paramsInheritanceStrategy),We({next:()=>{u=!0;let f=new iu(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(f)},complete:()=>{u||this.cancelNavigationTransition(a,"",It.NoDataFromResolver)}}))}),rC(a=>{let l=u=>{let f=[];if(u.routeConfig?._loadedComponent)u.component=u.routeConfig?._loadedComponent;else if(u.routeConfig?.loadComponent){let m=u._environmentInjector;f.push(this.configLoader.loadComponent(m,u.routeConfig).then(h=>{u.component=h}))}for(let m of u.children)f.push(...l(m));return f},c=l(a.targetSnapshot.root);return c.length===0?V(a):Ae(Promise.all(c).then(()=>a))}),rC(()=>this.afterPreactivation()),ye(()=>{let{currentSnapshot:a,targetSnapshot:l}=i,c=this.createViewTransition?.(this.environmentInjector,a.root,l.root);return c?Ae(c).pipe(N(()=>i)):V(i)}),Me(1),ye(a=>{let l=hO(e.routeReuseStrategy,a.targetSnapshot,a.currentRouterState);this.currentTransition=i=a=Q(_({},a),{targetRouterState:l}),this.currentNavigation.update(u=>(u.targetRouterState=l,u)),this.events.next(new jo);let c=i.beforeActivateHandler.deferredHandle;return c?Ae(c.then(()=>a)):V(a)}),We(a=>{new Ig(e.routeReuseStrategy,i.targetRouterState,i.currentRouterState,l=>this.events.next(l),this.inputBindingEnabled).activate(this.rootContexts),s()&&(r=!0,this.currentNavigation.update(l=>(l.abort=cN,l)),this.lastSuccessfulNavigation.set(lt(this.currentNavigation)),this.events.next(new ai(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects))),this.titleStrategy?.updateTitle(a.targetRouterState.snapshot),a.resolve(!0))}),ce(RC(o.signal).pipe(he(()=>!r&&!i.targetRouterState),We(()=>{this.cancelNavigationTransition(i,o.signal.reason+"",It.Aborted)}))),We({complete:()=>{r=!0}}),ce(this.transitionAbortWithErrorSubject.pipe(We(a=>{throw a}))),bi(()=>{o.abort(),r||this.cancelNavigationTransition(i,"",It.SupersededByNewNavigation),this.currentTransition?.id===i.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),Sn(a=>{if(r=!0,this.destroyed)return i.resolve(!1),Ge;if(TC(a))this.events.next(new rn(i.id,this.urlSerializer.serialize(i.extractedUrl),a.message,a.cancellationCode)),_O(a)?this.events.next(new Vo(a.url,a.navigationBehaviorOptions)):i.resolve(!1);else{let l=new Lr(i.id,this.urlSerializer.serialize(i.extractedUrl),a,i.targetSnapshot??void 0);try{let c=nt(this.environmentInjector,()=>this.navigationErrorHandler?.(l));if(c instanceof zo){let{message:u,cancellationCode:f}=fu(this.urlSerializer,c);this.events.next(new rn(i.id,this.urlSerializer.serialize(i.extractedUrl),u,f)),this.events.next(new Vo(c.redirectTo,c.navigationBehaviorOptions))}else throw this.events.next(l),a}catch(c){this.options.resolveNavigationPromiseOnError?i.resolve(!1):i.reject(c)}}return Ge}))}))}cancelNavigationTransition(e,i,r){let o=new rn(e.id,this.urlSerializer.serialize(e.extractedUrl),i,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=lt(this.currentNavigation),r=i?.targetBrowserUrl??i?.extractedUrl;return e.toString()!==r?.toString()&&!i?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function dN(t){return t!==ka}var WC=new v("");var qC=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:()=>d(uN),providedIn:"root"})}return t})(),hu=class{shouldDetach(n){return!1}store(n,e){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,e){return n.routeConfig===e.routeConfig}shouldDestroyInjector(n){return!0}},uN=(()=>{class t extends hu{static \u0275fac=(()=>{let e;return function(r){return(e||(e=it(t)))(r||t)}})();static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Pg=(()=>{class t{urlSerializer=d(Ha);options=d($a,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=d(Pi);urlHandlingStrategy=d(_u);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new on;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:i,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,i):i,s=r??o;return s instanceof on?this.urlSerializer.serialize(s):s}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:i,initialUrl:r}){i&&e?(this.currentUrlTree=i,this.rawUrlTree=this.urlHandlingStrategy.merge(i,r),this.routerState=e):this.rawUrlTree=r}routerState=DC(null,d(Te));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:()=>d(fN),providedIn:"root"})}return t})(),fN=(()=>{class t extends Pg{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(i=>{i.type==="popstate"&&setTimeout(()=>{e(i.url,i.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,i){e instanceof Pr?this.updateStateMemento():e instanceof li?this.commitTransition(i):e instanceof Na?this.urlUpdateStrategy==="eager"&&(i.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof jo?(this.commitTransition(i),this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof rn&&!CC(e)?this.restoreHistory(i):e instanceof Lr?this.restoreHistory(i,!0):e instanceof ai&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,i){let{extras:r,id:o}=i,{replaceUrl:s,state:a}=r;if(this.location.isCurrentPathEqualTo(e)||s){let l=this.browserPageId,c=_(_({},a),this.generateNgRouterState(o,l,i));this.location.replaceState(e,"",c)}else{let l=_(_({},a),this.generateNgRouterState(o,this.browserPageId+1,i));this.location.go(e,"",l)}}restoreHistory(e,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,i,r){return this.canceledNavigationResolution==="computed"?_({navigationId:e,\u0275routerPageId:i},this.routerUrlState(r)):_({navigationId:e},this.routerUrlState(r))}static \u0275fac=(()=>{let e;return function(r){return(e||(e=it(t)))(r||t)}})();static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Lg(t,n){t.events.pipe(he(e=>e instanceof ai||e instanceof rn||e instanceof Lr||e instanceof li),N(e=>e instanceof ai||e instanceof li?0:(e instanceof rn?e.code===It.Redirect||e.code===It.SupersededByNewNavigation:!1)?2:1),he(e=>e!==2),Me(1)).subscribe(()=>{n()})}var vu=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=d(Dd);stateManager=d(Pg);options=d($a,{optional:!0})||{};pendingTasks=d(Xn);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=d(GC);urlSerializer=d(Ha);location=d(Pi);urlHandlingStrategy=d(_u);injector=d(Te);_events=new C;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=d(qC);injectorCleanup=d(WC,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=d(Ga,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!d(pu,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new pe;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,o=lt(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(i,o),i instanceof rn&&i.code!==It.Redirect&&i.code!==It.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof ai)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(i instanceof Vo){let s=i.navigationBehaviorOptions,a=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),l=_({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||dN(r.source)},s);this.scheduleNavigation(a,ka,null,l,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}fO(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),ka,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,i,r,o)=>{this.navigateToSyncWithBrowser(e,r,i,o)})}navigateToSyncWithBrowser(e,i,r,o){let s=r?.navigationId?r:null,a=r?.\u0275routerUrl??e;if(r?.\u0275routerUrl&&(o=Q(_({},o),{browserUrl:e})),r){let c=_({},r);delete c.navigationId,delete c.\u0275routerPageId,delete c.\u0275routerUrl,Object.keys(c).length!==0&&(o.state=c)}let l=this.parseUrl(a);this.scheduleNavigation(l,i,s,o).catch(c=>{this.disposed||this.injector.get(pn)(c)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return lt(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(Ng),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,i={}){let{relativeTo:r,queryParams:o,fragment:s,queryParamsHandling:a,preserveFragment:l}=i,c=l?this.currentUrlTree.fragment:s,u=null;switch(a??this.options.defaultQueryParamsHandling){case"merge":u=_(_({},this.currentUrlTree.queryParams),o);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=o||null}u!==null&&(u=this.removeEmptyProps(u));let f;try{let m=r?r.snapshot:this.routerState.snapshot.root;f=vC(m)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),f=this.currentUrlTree.root}return bC(f,e,u,c??null,this.urlSerializer)}navigateByUrl(e,i={skipLocationChange:!1}){let r=Bo(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,ka,null,i)}navigate(e,i={skipLocationChange:!1}){return mN(e),this.navigateByUrl(this.createUrlTree(e,i),i)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(kn(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,i){let r;if(i===!0?r=_({},cC):i===!1?r=_({},vg):r=_(_({},vg),i),Bo(e))return Xw(this.currentUrlTree,e,r);let o=this.parseUrl(e);return Xw(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((i,[r,o])=>(o!=null&&(i[r]=o),i),{})}scheduleNavigation(e,i,r,o,s){if(this.disposed)return Promise.resolve(!1);let a,l,c;s?(a=s.resolve,l=s.reject,c=s.promise):c=new Promise((f,m)=>{a=f,l=m});let u=this.pendingTasks.add();return Lg(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:a,reject:l,promise:c,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),c.catch(Promise.reject.bind(Promise))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function mN(t){for(let n=0;n<t.length;n++)if(t[n]==null)throw new D(4008,!1)}var gN=new v("");function Bg(t,...n){return vt([{provide:Ga,multi:!0,useValue:t},[],{provide:Vi,useFactory:_N},{provide:Id,multi:!0,useFactory:vN},n.map(e=>e.\u0275providers)])}function _N(){return d(vu).routerState.root}function vN(){let t=d(H);return n=>{let e=t.get(yt);if(n!==e.components[0])return;let i=t.get(vu),r=t.get(bN);t.get(yN)===1&&i.initialNavigation(),t.get(wN,null,{optional:!0})?.setUpPreloading(),t.get(gN,null,{optional:!0})?.init(),i.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var bN=new v("",{factory:()=>new C}),yN=new v("",{factory:()=>1});var wN=new v("");var jg="Service workers are disabled or not supported by this browser",Wo=class{serviceWorker;worker;registration;events;constructor(n,e){if(this.serviceWorker=n,!n)this.worker=this.events=this.registration=new X(i=>i.error(new D(5601,!1)));else{let i=null,r=new C;this.worker=new X(c=>(i!==null&&c.next(i),r.subscribe(u=>c.next(u))));let o=()=>{let{controller:c}=n;c!==null&&(i=c,r.next(i))};n.addEventListener("controllerchange",o),o(),this.registration=this.worker.pipe(ye(()=>n.getRegistration().then(c=>{if(!c)throw new D(5601,!1);return c})));let s=new C;this.events=s.asObservable();let a=c=>{let{data:u}=c;u?.type&&s.next(u)};n.addEventListener("message",a),e?.get(yt,null,{optional:!0})?.onDestroy(()=>{n.removeEventListener("controllerchange",o),n.removeEventListener("message",a)})}}postMessage(n,e){return new Promise(i=>{this.worker.pipe(Me(1)).subscribe(r=>{r.postMessage(_({action:n},e)),i()})})}postMessageWithOperation(n,e,i){let r=this.waitForOperationCompleted(i),o=this.postMessage(n,e);return Promise.all([o,r]).then(([,s])=>s)}generateNonce(){return Math.round(Math.random()*1e7)}eventsOfType(n){let e;return typeof n=="string"?e=i=>i.type===n:e=i=>n.includes(i.type),this.events.pipe(he(e))}nextEventOfType(n){return this.eventsOfType(n).pipe(Me(1))}waitForOperationCompleted(n){return new Promise((e,i)=>{this.eventsOfType("OPERATION_COMPLETED").pipe(he(r=>r.nonce===n),Me(1),N(r=>{if(r.result!==void 0)return r.result;throw new Error(r.error)})).subscribe({next:e,error:i})})}get isEnabled(){return!!this.serviceWorker}},YC=(()=>{class t{sw;messages;notificationClicks;notificationCloses;pushSubscriptionChanges;subscription;get isEnabled(){return this.sw.isEnabled}pushManager=null;subscriptionChanges=new C;constructor(e){if(this.sw=e,!e.isEnabled){this.messages=Gn,this.notificationClicks=Gn,this.notificationCloses=Gn,this.pushSubscriptionChanges=Gn,this.subscription=Gn;return}this.messages=this.sw.eventsOfType("PUSH").pipe(N(r=>r.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(N(r=>r.data)),this.notificationCloses=this.sw.eventsOfType("NOTIFICATION_CLOSE").pipe(N(r=>r.data)),this.pushSubscriptionChanges=this.sw.eventsOfType("PUSH_SUBSCRIPTION_CHANGE").pipe(N(r=>r.data)),this.pushManager=this.sw.registration.pipe(N(r=>r.pushManager));let i=this.pushManager.pipe(ye(r=>r.getSubscription()));this.subscription=new X(r=>{let o=i.subscribe(r),s=this.subscriptionChanges.subscribe(r);return()=>{o.unsubscribe(),s.unsubscribe()}})}requestSubscription(e){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(jg));let i={userVisibleOnly:!0},r=this.decodeBase64(e.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),o=new Uint8Array(new ArrayBuffer(r.length));for(let s=0;s<r.length;s++)o[s]=r.charCodeAt(s);return i.applicationServerKey=o,new Promise((s,a)=>{this.pushManager.pipe(ye(l=>l.subscribe(i)),Me(1)).subscribe({next:l=>{this.subscriptionChanges.next(l),s(l)},error:a})})}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(jg));let e=i=>{if(i===null)throw new D(5602,!1);return i.unsubscribe().then(r=>{if(!r)throw new D(5603,!1);this.subscriptionChanges.next(null)})};return new Promise((i,r)=>{this.subscription.pipe(Me(1),ye(e)).subscribe({next:i,error:r})})}decodeBase64(e){return atob(e)}static \u0275fac=function(i){return new(i||t)(R(Wo))};static \u0275prov=w({token:t,factory:t.\u0275fac})}return t})(),bu=(()=>{class t{sw;versionUpdates;unrecoverable;get isEnabled(){return this.sw.isEnabled}ongoingCheckForUpdate=null;constructor(e){if(this.sw=e,!e.isEnabled){this.versionUpdates=Gn,this.unrecoverable=Gn;return}this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE")}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(jg));if(this.ongoingCheckForUpdate)return this.ongoingCheckForUpdate;let e=this.sw.generateNonce();return this.ongoingCheckForUpdate=this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:e},e).finally(()=>{this.ongoingCheckForUpdate=null}),this.ongoingCheckForUpdate}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new D(5601,!1));let e=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:e},e)}static \u0275fac=function(i){return new(i||t)(R(Wo))};static \u0275prov=w({token:t,factory:t.\u0275fac})}return t})(),KC=new v("");function DN(){let t=d(Wa);if(!("serviceWorker"in navigator&&t.enabled!==!1))return;let n=d(KC),e=d(L),i=d(yt);e.runOutsideAngular(()=>{let r=navigator.serviceWorker,o=()=>r.controller?.postMessage({action:"INITIALIZE"});r.addEventListener("controllerchange",o),i.onDestroy(()=>{r.removeEventListener("controllerchange",o)})}),e.runOutsideAngular(()=>{let r,{registrationStrategy:o}=t;if(typeof o=="function")r=new Promise(s=>o().subscribe(()=>s()));else{let[s,...a]=(o||"registerWhenStable:30000").split(":");switch(s){case"registerImmediately":r=Promise.resolve();break;case"registerWithDelay":r=QC(+a[0]||0);break;case"registerWhenStable":r=Promise.race([i.whenStable(),QC(+a[0])]);break;default:throw new D(5600,!1)}}r.then(()=>{i.destroyed||navigator.serviceWorker.register(n,{scope:t.scope,updateViaCache:t.updateViaCache,type:t.type}).catch(s=>console.error(kn(5604,!1)))})})}function QC(t){return new Promise(n=>setTimeout(n,t))}function xN(){let t=d(Wa),n=d(H),e=!0;return new Wo(e&&t.enabled!==!1?navigator.serviceWorker:void 0,n)}var Wa=class{enabled;updateViaCache;type;scope;registrationStrategy};function EN(t,n={}){return vt([YC,bu,{provide:KC,useValue:t},{provide:Wa,useValue:n},{provide:Wo,useFactory:xN},Ed(DN)])}var ZC=(()=>{class t{static register(e,i={}){return{ngModule:t,providers:[EN(e,i)]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=M({type:t});static \u0275inj=I({providers:[YC,bu]})}return t})();function jr(t){return t.buttons===0||t.detail===0}function Vr(t){let n=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var Vg;function XC(){if(Vg==null){let t=typeof document<"u"?document.head:null;Vg=!!(t&&(t.createShadowRoot||t.attachShadow))}return Vg}function Hg(t){if(XC()){let n=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function wt(t){return t.composedPath?t.composedPath()[0]:t.target}var zg;try{zg=typeof Intl<"u"&&Intl.v8BreakIterator}catch{zg=!1}var ge=(()=>{class t{_platformId=d(Tr);isBrowser=this._platformId?Tw(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||zg)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var qa;function JC(){if(qa==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>qa=!0}))}finally{qa=qa||!1}return qa}function qo(t){return JC()?t:!!t.capture}function sn(t,n=0){return eD(t)?Number(t):arguments.length===2?n:0}function eD(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function Bn(t){return t instanceof F?t.nativeElement:t}var tD=new v("cdk-input-modality-detector-options"),nD={ignoreKeys:[18,17,224,91,16]},iD=650,Ug={passive:!0,capture:!0},rD=(()=>{class t{_platform=d(ge);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new $e(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(i=>i===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=wt(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<iD||(this._modality.next(jr(e)?"keyboard":"mouse"),this._mostRecentTarget=wt(e))};_onTouchstart=e=>{if(Vr(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=wt(e)};constructor(){let e=d(L),i=d(z),r=d(tD,{optional:!0});if(this._options=_(_({},nD),r),this.modalityDetected=this._modality.pipe(Ms(1)),this.modalityChanged=this.modalityDetected.pipe(oc()),this._platform.isBrowser){let o=d(ht).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(i,"keydown",this._onKeydown,Ug),o.listen(i,"mousedown",this._onMousedown,Ug),o.listen(i,"touchstart",this._onTouchstart,Ug)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Qa=(function(t){return t[t.IMMEDIATE=0]="IMMEDIATE",t[t.EVENTUAL=1]="EVENTUAL",t})(Qa||{}),oD=new v("cdk-focus-monitor-default-options"),yu=qo({passive:!0,capture:!0}),zt=(()=>{class t{_ngZone=d(L);_platform=d(ge);_inputModalityDetector=d(rD);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=d(z);_stopInputModalityDetector=new C;constructor(){let e=d(oD,{optional:!0});this._detectionMode=e?.detectionMode||Qa.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let i=wt(e);for(let r=i;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,i=!1){let r=Bn(e);if(!this._platform.isBrowser||r.nodeType!==1)return V();let o=Hg(r)||this._document,s=this._elementInfo.get(r);if(s)return i&&(s.checkChildren=!0),s.subject;let a={checkChildren:i,subject:new C,rootNode:o};return this._elementInfo.set(r,a),this._registerGlobalListeners(a),a.subject}stopMonitoring(e){let i=Bn(e),r=this._elementInfo.get(i);r&&(r.subject.complete(),this._setClasses(i),this._elementInfo.delete(i),this._removeGlobalListeners(r))}focusVia(e,i,r){let o=Bn(e),s=this._document.activeElement;o===s?this._getClosestElementsInfo(o).forEach(([a,l])=>this._originChanged(a,i,l)):(this._setOrigin(i),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,i)=>this.stopMonitoring(i))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===Qa.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,i){e.classList.toggle("cdk-focused",!!i),e.classList.toggle("cdk-touch-focused",i==="touch"),e.classList.toggle("cdk-keyboard-focused",i==="keyboard"),e.classList.toggle("cdk-mouse-focused",i==="mouse"),e.classList.toggle("cdk-program-focused",i==="program")}_setOrigin(e,i=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&i,this._detectionMode===Qa.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?iD:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,i){let r=this._elementInfo.get(i),o=wt(e);!r||!r.checkChildren&&i!==o||this._originChanged(i,this._getFocusOrigin(o),r)}_onBlur(e,i){let r=this._elementInfo.get(i);!r||r.checkChildren&&e.relatedTarget instanceof Node&&i.contains(e.relatedTarget)||(this._setClasses(i),this._emitOrigin(r,null))}_emitOrigin(e,i){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(i))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let i=e.rootNode,r=this._rootNodeFocusListenerCount.get(i)||0;r||this._ngZone.runOutsideAngular(()=>{i.addEventListener("focus",this._rootNodeFocusAndBlurListener,yu),i.addEventListener("blur",this._rootNodeFocusAndBlurListener,yu)}),this._rootNodeFocusListenerCount.set(i,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(ce(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let i=e.rootNode;if(this._rootNodeFocusListenerCount.has(i)){let r=this._rootNodeFocusListenerCount.get(i);r>1?this._rootNodeFocusListenerCount.set(i,r-1):(i.removeEventListener("focus",this._rootNodeFocusAndBlurListener,yu),i.removeEventListener("blur",this._rootNodeFocusAndBlurListener,yu),this._rootNodeFocusListenerCount.delete(i))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,i,r){this._setClasses(e,i),this._emitOrigin(r,i),this._lastFocusOrigin=i}_getClosestElementsInfo(e){let i=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&i.push([o,r])}),i}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:i,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!i||i===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let s=0;s<o.length;s++)if(o[s].contains(i))return!0}return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var wu=new WeakMap,Je=(()=>{class t{_appRef;_injector=d(H);_environmentInjector=d(Te);load(e){let i=this._appRef=this._appRef||this._injector.get(yt),r=wu.get(i);r||(r={loaders:new Set,refs:[]},wu.set(i,r),i.onDestroy(()=>{wu.get(i)?.refs.forEach(o=>o.destroy()),wu.delete(i)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(Nd(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Qo=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2,changeDetection:0})}return t})(),Cu;function IN(){if(Cu===void 0&&(Cu=null,typeof window<"u")){let t=window;t.trustedTypes!==void 0&&(Cu=t.trustedTypes.createPolicy("angular#components",{createHTML:n=>n}))}return Cu}function Hr(t){return IN()?.createHTML(t)||t}function sD(t,n,e){let i=e.sanitize(rt.HTML,n);t.innerHTML=Hr(i||"")}function Yo(t){return Array.isArray(t)?t:[t]}var aD=new Set,zr,Ko=(()=>{class t{_platform=d(ge);_nonce=d(kr,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):MN}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&SN(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function SN(t,n){if(!aD.has(t))try{zr||(zr=document.createElement("style"),n&&zr.setAttribute("nonce",n),zr.setAttribute("type","text/css"),document.head.appendChild(zr)),zr.sheet&&(zr.sheet.insertRule(`@media ${t} {body{ }}`,0),aD.add(t))}catch(e){console.error(e)}}function MN(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}var ci=(()=>{class t{_mediaMatcher=d(Ko);_zone=d(L);_queries=new Map;_destroySubject=new C;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return lD(Yo(e)).some(r=>this._registerQuery(r).mql.matches)}observe(e){let r=lD(Yo(e)).map(s=>this._registerQuery(s).observable),o=or(r);return o=vi(o.pipe(Me(1)),o.pipe(Ms(1),ar(0))),o.pipe(N(s=>{let a={matches:!1,breakpoints:{}};return s.forEach(({matches:l,query:c})=>{a.matches=a.matches||l,a.breakpoints[c]=l}),a}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let i=this._mediaMatcher.matchMedia(e),o={observable:new X(s=>{let a=l=>this._zone.run(()=>s.next(l));return i.addListener(a),()=>{i.removeListener(a)}}).pipe(Ze(i),N(({matches:s})=>({query:e,matches:s})),ce(this._destroySubject)),mql:i};return this._queries.set(e,o),o}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function lD(t){return t.map(n=>n.split(",")).reduce((n,e)=>n.concat(e)).map(n=>n.trim())}var TN=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Zo=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=M({type:t});static \u0275inj=I({providers:[TN]})}return t})();var xu=(()=>{class t{_platform=d(ge);constructor(){}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return RN(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let i=kN(jN(e));if(i&&(cD(i)===-1||!this.isVisible(i)))return!1;let r=e.nodeName.toLowerCase(),o=cD(e);return e.hasAttribute("contenteditable")?o!==-1:r==="iframe"||r==="object"||this._platform.WEBKIT&&this._platform.IOS&&!LN(e)?!1:r==="audio"?e.hasAttribute("controls")?o!==-1:!1:r==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,i){return BN(e)&&!this.isDisabled(e)&&(i?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function kN(t){try{return t.frameElement}catch{return null}}function RN(t){return!!(t.offsetWidth||t.offsetHeight||typeof t.getClientRects=="function"&&t.getClientRects().length)}function AN(t){let n=t.nodeName.toLowerCase();return n==="input"||n==="select"||n==="button"||n==="textarea"}function ON(t){return FN(t)&&t.type=="hidden"}function NN(t){return PN(t)&&t.hasAttribute("href")}function FN(t){return t.nodeName.toLowerCase()=="input"}function PN(t){return t.nodeName.toLowerCase()=="a"}function fD(t){if(!t.hasAttribute("tabindex")||t.tabIndex===void 0)return!1;let n=t.getAttribute("tabindex");return!!(n&&!isNaN(parseInt(n,10)))}function cD(t){if(!fD(t))return null;let n=parseInt(t.getAttribute("tabindex")||"",10);return isNaN(n)?-1:n}function LN(t){let n=t.nodeName.toLowerCase(),e=n==="input"&&t.type;return e==="text"||e==="password"||n==="select"||n==="textarea"}function BN(t){return ON(t)?!1:AN(t)||NN(t)||t.hasAttribute("contenteditable")||fD(t)}function jN(t){return t.ownerDocument&&t.ownerDocument.defaultView||window}var Du=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(n){this._enabled=n,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_enabled=!0;constructor(n,e,i,r,o=!1,s){this._element=n,this._checker=e,this._ngZone=i,this._document=r,this._injector=s,o||this.attachAnchors()}destroy(){let n=this._startAnchor,e=this._endAnchor;n&&(n.removeEventListener("focus",this.startAnchorListener),n.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(n)))})}focusFirstTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(n)))})}focusLastTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(n)))})}_getRegionBoundary(n){let e=this._element.querySelectorAll(`[cdk-focus-region-${n}], [cdkFocusRegion${n}], [cdk-focus-${n}]`);return n=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(n){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let i=this._getFirstTabbableElement(e);return i?.focus(n),!!i}return e.focus(n),!0}return this.focusFirstTabbableElement(n)}focusFirstTabbableElement(n){let e=this._getRegionBoundary("start");return e&&e.focus(n),!!e}focusLastTabbableElement(n){let e=this._getRegionBoundary("end");return e&&e.focus(n),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let i=0;i<e.length;i++){let r=e[i].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[i]):null;if(r)return r}return null}_getLastTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let i=e.length-1;i>=0;i--){let r=e[i].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[i]):null;if(r)return r}return null}_createAnchor(){let n=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,n),n.classList.add("cdk-visually-hidden"),n.classList.add("cdk-focus-trap-anchor"),n.setAttribute("aria-hidden","true"),n}_toggleAnchorTabIndex(n,e){n?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(n){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_executeOnStable(n){this._injector?He(n,{injector:this._injector}):setTimeout(n)}},Gg=(()=>{class t{_checker=d(xu);_ngZone=d(L);_document=d(z);_injector=d(H);constructor(){d(Je).load(Qo)}create(e,i=!1){return new Du(e,this._checker,this._ngZone,this._document,i,this._injector)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var mD=new v("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),hD=new v("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),VN=0,Ya=(()=>{class t{_ngZone=d(L);_defaultOptions=d(hD,{optional:!0});_liveElement;_document=d(z);_sanitizer=d(Ia);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=d(mD,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...i){let r=this._defaultOptions,o,s;return i.length===1&&typeof i[0]=="number"?s=i[0]:[o,s]=i,this.clear(),clearTimeout(this._previousTimeout),o||(o=r&&r.politeness?r.politeness:"polite"),s==null&&r&&(s=r.duration),this._liveElement.setAttribute("aria-live",o),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(a=>this._currentResolve=a)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:sD(this._liveElement,e,this._sanitizer),typeof s=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),s)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",i=this._document.getElementsByClassName(e),r=this._document.createElement("div");for(let o=0;o<i.length;o++)i[o].remove();return r.classList.add(e),r.classList.add("cdk-visually-hidden"),r.setAttribute("aria-atomic","true"),r.setAttribute("aria-live","polite"),r.id=`cdk-live-announcer-${VN++}`,this._document.body.appendChild(r),r}_exposeAnnouncerToModals(e){let i=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<i.length;r++){let o=i[r],s=o.getAttribute("aria-owns");s?s.indexOf(e)===-1&&o.setAttribute("aria-owns",s+" "+e):o.setAttribute("aria-owns",e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Hi=(function(t){return t[t.NONE=0]="NONE",t[t.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",t[t.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",t})(Hi||{}),dD="cdk-high-contrast-black-on-white",uD="cdk-high-contrast-white-on-black",$g="cdk-high-contrast-active",pD=(()=>{class t{_platform=d(ge);_hasCheckedHighContrastMode=!1;_document=d(z);_breakpointSubscription;constructor(){this._breakpointSubscription=d(ci).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return Hi.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let i=this._document.defaultView||window,r=i&&i.getComputedStyle?i.getComputedStyle(e):null,o=(r&&r.backgroundColor||"").replace(/ /g,"");switch(e.remove(),o){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return Hi.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return Hi.BLACK_ON_WHITE}return Hi.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove($g,dD,uD),this._hasCheckedHighContrastMode=!0;let i=this.getHighContrastMode();i===Hi.BLACK_ON_WHITE?e.add($g,dD):i===Hi.WHITE_ON_BLACK&&e.add($g,uD)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Wg=(()=>{class t{constructor(){d(pD)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(i){return new(i||t)};static \u0275mod=M({type:t});static \u0275inj=I({imports:[Zo]})}return t})();var HN=200,Eu=class{_letterKeyStream=new C;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new C;selectedItem=this._selectedItem;constructor(n,e){let i=typeof e?.debounceInterval=="number"?e.debounceInterval:HN;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(n),this._setupKeyHandler(i)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(n){this._selectedItemIndex=n}setItems(n){this._items=n}handleKey(n){let e=n.keyCode;n.key&&n.key.length===1?this._letterKeyStream.next(n.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(n){this._letterKeyStream.pipe(We(e=>this._pressedLetters.push(e)),ar(n),he(()=>this._pressedLetters.length>0),N(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let i=1;i<this._items.length+1;i++){let r=(this._selectedItemIndex+i)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function St(t,...n){return n.length?n.some(e=>t[e]):t.altKey||t.shiftKey||t.ctrlKey||t.metaKey}var Xo=class{_items;_activeItemIndex=xe(-1);_activeItem=xe(null);_wrap=!1;_typeaheadSubscription=pe.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=n=>n.disabled;constructor(n,e){this._items=n,n instanceof vn?this._itemChangesSubscription=n.changes.subscribe(i=>this._itemsChanged(i.toArray())):Oi(n)&&(this._effectRef=Dr(()=>this._itemsChanged(n()),{injector:e}))}tabOut=new C;change=new C;skipPredicate(n){return this._skipPredicateFn=n,this}withWrap(n=!0){return this._wrap=n,this}withVerticalOrientation(n=!0){return this._vertical=n,this}withHorizontalOrientation(n){return this._horizontal=n,this}withAllowedModifierKeys(n){return this._allowedModifierKeys=n,this}withTypeAhead(n=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new Eu(e,{debounceInterval:typeof n=="number"?n:void 0,skipPredicate:i=>this._skipPredicateFn(i)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(i=>{this.setActiveItem(i)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(n=!0){return this._homeAndEnd=n,this}withPageUpDown(n=!0,e=10){return this._pageUpAndDown={enabled:n,delta:e},this}setActiveItem(n){let e=this._activeItem();this.updateActiveItem(n),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(n){let e=n.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!n[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,s=this._getItemsArray().length;this._setActiveItemByIndex(o<s?o:s-1,-1);break}else return;default:(r||St(n,"shiftKey"))&&this._typeahead?.handleKey(n);return}this._typeahead?.reset(),n.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(n){let e=this._getItemsArray(),i=typeof n=="number"?n:e.indexOf(n),r=e[i];this._activeItem.set(r??null),this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(n){this._wrap?this._setActiveInWrapMode(n):this._setActiveInDefaultMode(n)}_setActiveInWrapMode(n){let e=this._getItemsArray();for(let i=1;i<=e.length;i++){let r=(this._activeItemIndex()+n*i+e.length)%e.length,o=e[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(n){this._setActiveItemByIndex(this._activeItemIndex()+n,n)}_setActiveItemByIndex(n,e){let i=this._getItemsArray();if(i[n]){for(;this._skipPredicateFn(i[n]);)if(n+=e,!i[n])return;this.setActiveItem(n)}}_getItemsArray(){return Oi(this._items)?this._items():this._items instanceof vn?this._items.toArray():this._items}_itemsChanged(n){this._typeahead?.setItems(n);let e=this._activeItem();if(e){let i=n.indexOf(e);i>-1&&i!==this._activeItemIndex()&&(this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i))}}};var el=class extends Xo{setActiveItem(n){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(n),this.activeItem&&this.activeItem.setActiveStyles()}};var tl=class extends Xo{_origin="program";setFocusOrigin(n){return this._origin=n,this}setActiveItem(n){super.setActiveItem(n),this.activeItem&&this.activeItem.focus(this._origin)}};var qg={},Ue=class t{_appId=d(Ri);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,e=!1){return this._appId!=="ng"&&(n+=this._appId),qg.hasOwnProperty(n)||(qg[n]=0),`${n}${e?t._infix+"-":""}${qg[n]++}`}static \u0275fac=function(e){return new(e||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})};var vD=" ";function Kg(t,n,e){let i=Su(t,n);e=e.trim(),!i.some(r=>r.trim()===e)&&(i.push(e),t.setAttribute(n,i.join(vD)))}function Mu(t,n,e){let i=Su(t,n);e=e.trim();let r=i.filter(o=>o!==e);r.length?t.setAttribute(n,r.join(vD)):t.removeAttribute(n)}function Su(t,n){return t.getAttribute(n)?.match(/\S+/g)??[]}var bD="cdk-describedby-message",Iu="cdk-describedby-host",Yg=0,yD=(()=>{class t{_platform=d(ge);_document=d(z);_messageRegistry=new Map;_messagesContainer=null;_id=`${Yg++}`;constructor(){d(Je).load(Qo),this._id=d(Ri)+"-"+Yg++}describe(e,i,r){if(!this._canBeDescribed(e,i))return;let o=Qg(i,r);typeof i!="string"?(_D(i,this._id),this._messageRegistry.set(o,{messageElement:i,referenceCount:0})):this._messageRegistry.has(o)||this._createMessageElement(i,r),this._isElementDescribedByMessage(e,o)||this._addMessageReference(e,o)}removeDescription(e,i,r){if(!i||!this._isElementNode(e))return;let o=Qg(i,r);if(this._isElementDescribedByMessage(e,o)&&this._removeMessageReference(e,o),typeof i=="string"){let s=this._messageRegistry.get(o);s&&s.referenceCount===0&&this._deleteMessageElement(o)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${Iu}="${this._id}"]`);for(let i=0;i<e.length;i++)this._removeCdkDescribedByReferenceIds(e[i]),e[i].removeAttribute(Iu);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,i){let r=this._document.createElement("div");_D(r,this._id),r.textContent=e,i&&r.setAttribute("role",i),this._createMessagesContainer(),this._messagesContainer.appendChild(r),this._messageRegistry.set(Qg(e,i),{messageElement:r,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e="cdk-describedby-message-container",i=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let o=0;o<i.length;o++)i[o].remove();let r=this._document.createElement("div");r.style.visibility="hidden",r.classList.add(e),r.classList.add("cdk-visually-hidden"),this._platform.isBrowser||r.setAttribute("platform","server"),this._document.body.appendChild(r),this._messagesContainer=r}_removeCdkDescribedByReferenceIds(e){let i=Su(e,"aria-describedby").filter(r=>r.indexOf(bD)!=0);e.setAttribute("aria-describedby",i.join(" "))}_addMessageReference(e,i){let r=this._messageRegistry.get(i);Kg(e,"aria-describedby",r.messageElement.id),e.setAttribute(Iu,this._id),r.referenceCount++}_removeMessageReference(e,i){let r=this._messageRegistry.get(i);r.referenceCount--,Mu(e,"aria-describedby",r.messageElement.id),e.removeAttribute(Iu)}_isElementDescribedByMessage(e,i){let r=Su(e,"aria-describedby"),o=this._messageRegistry.get(i),s=o&&o.messageElement.id;return!!s&&r.indexOf(s)!=-1}_canBeDescribed(e,i){if(!this._isElementNode(e))return!1;if(i&&typeof i=="object")return!0;let r=i==null?"":`${i}`.trim(),o=e.getAttribute("aria-label");return r?!o||o.trim()!==r:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Qg(t,n){return typeof t=="string"?`${n||""}/${t}`:t}function _D(t,n){t.id||(t.id=`${bD}-${n}-${Yg++}`)}var Jo={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};function Zg(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}function Ke(t){return t==null?"":typeof t=="string"?t:`${t}px`}var zN=new v("cdk-dir-doc",{providedIn:"root",factory:()=>d(z)}),UN=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function wD(t){let n=t?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?UN.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr"}var ct=(()=>{class t{get value(){return this.valueSignal()}valueSignal=xe("ltr");change=new q;constructor(){let e=d(zN,{optional:!0});if(e){let i=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(wD(i||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var En=(function(t){return t[t.NORMAL=0]="NORMAL",t[t.NEGATED=1]="NEGATED",t[t.INVERTED=2]="INVERTED",t})(En||{}),Tu,Ur;function ku(){if(Ur==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return Ur=!1,Ur;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)Ur=!0;else{let t=Element.prototype.scrollTo;t?Ur=!/\{\s*\[native code\]\s*\}/.test(t.toString()):Ur=!1}}return Ur}function es(){if(typeof document!="object"||!document)return En.NORMAL;if(Tu==null){let t=document.createElement("div"),n=t.style;t.dir="rtl",n.width="1px",n.overflow="auto",n.visibility="hidden",n.pointerEvents="none",n.position="absolute";let e=document.createElement("div"),i=e.style;i.width="2px",i.height="1px",t.appendChild(e),document.body.appendChild(t),Tu=En.NORMAL,t.scrollLeft===0&&(t.scrollLeft=1,Tu=t.scrollLeft===0?En.NEGATED:En.INVERTED),t.remove()}return Tu}var re=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=M({type:t});static \u0275inj=I({})}return t})();var $N=20,jn=(()=>{class t{_ngZone=d(L);_platform=d(ge);_renderer=d(ht).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new C;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let i=this.scrollContainers.get(e);i&&(i.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=$N){return this._platform.isBrowser?new X(i=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(ic(e)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):V()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(e,i){let r=this.getAncestorScrollContainers(e);return this.scrolled(i).pipe(he(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){let i=[];return this.scrollContainers.forEach((r,o)=>{this._scrollableContainsElement(o,e)&&i.push(o)}),i}_scrollableContainsElement(e,i){let r=Bn(i),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),$r=(()=>{class t{elementRef=d(F);scrollDispatcher=d(jn);ngZone=d(L);dir=d(ct,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new C;_renderer=d(Be);_cleanupScroll;_elementScrolled=new C;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let i=this.elementRef.nativeElement,r=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=r?e.end:e.start),e.right==null&&(e.right=r?e.start:e.end),e.bottom!=null&&(e.top=i.scrollHeight-i.clientHeight-e.bottom),r&&es()!=En.NORMAL?(e.left!=null&&(e.right=i.scrollWidth-i.clientWidth-e.left),es()==En.INVERTED?e.left=e.right:es()==En.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=i.scrollWidth-i.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let i=this.elementRef.nativeElement;ku()?i.scrollTo(e):(e.top!=null&&(i.scrollTop=e.top),e.left!=null&&(i.scrollLeft=e.left))}measureScrollOffset(e){let i="left",r="right",o=this.elementRef.nativeElement;if(e=="top")return o.scrollTop;if(e=="bottom")return o.scrollHeight-o.clientHeight-o.scrollTop;let s=this.dir&&this.dir.value=="rtl";return e=="start"?e=s?r:i:e=="end"&&(e=s?i:r),s&&es()==En.INVERTED?e==i?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:s&&es()==En.NEGATED?e==i?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==i?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return t})(),GN=20,ln=(()=>{class t{_platform=d(ge);_listeners;_viewportSize=null;_change=new C;_document=d(z);constructor(){let e=d(L),i=d(ht).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[i.listen("window","resize",r),i.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:i,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+i,height:r,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,i=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect(),s=-o.top||e.body?.scrollTop||i.scrollY||r.scrollTop||0,a=-o.left||e.body?.scrollLeft||i.scrollX||r.scrollLeft||0;return{top:s,left:a}}change(e=GN){return e>0?this._change.pipe(ic(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var an=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=M({type:t});static \u0275inj=I({})}return t})(),nl=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=M({type:t});static \u0275inj=I({imports:[re,an,re,an]})}return t})();var il=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}},zi=class extends il{component;viewContainerRef;injector;projectableNodes;bindings;constructor(n,e,i,r,o){super(),this.component=n,this.viewContainerRef=e,this.injector=i,this.projectableNodes=r,this.bindings=o||null}},di=class extends il{templateRef;viewContainerRef;context;injector;constructor(n,e,i,r){super(),this.templateRef=n,this.viewContainerRef=e,this.context=i,this.injector=r}get origin(){return this.templateRef.elementRef}attach(n,e=this.context){return this.context=e,super.attach(n)}detach(){return this.context=void 0,super.detach()}},Xg=class extends il{element;constructor(n){super(),this.element=n instanceof F?n.nativeElement:n}},ts=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof zi)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof di)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof Xg)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},rl=class extends ts{outletElement;_appRef;_defaultInjector;constructor(n,e,i){super(),this.outletElement=n,this._appRef=e,this._defaultInjector=i}attachComponentPortal(n){let e;if(n.viewContainerRef){let i=n.injector||n.viewContainerRef.injector,r=i.get(Pn,null,{optional:!0})||void 0;e=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:i,ngModuleRef:r,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let i=this._appRef,r=n.injector||this._defaultInjector||H.NULL,o=r.get(Te,i.injector);e=Nd(n.component,{elementInjector:r,environmentInjector:o,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),i.attachView(e.hostView),this.setDisposeFn(()=>{i.viewCount>0&&i.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=n,e}attachTemplatePortal(n){let e=n.viewContainerRef,i=e.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return i.rootNodes.forEach(r=>this.outletElement.appendChild(r)),i.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(i);r!==-1&&e.remove(r)}),this._attachedPortal=n,i}attachDomPortal=n=>{let e=n.element;e.parentNode;let i=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(i,e),this.outletElement.appendChild(e),this._attachedPortal=n,super.setDisposeFn(()=>{i.parentNode&&i.parentNode.replaceChild(e,i)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}};var Jg=(()=>{class t extends ts{_moduleRef=d(Pn,{optional:!0});_document=d(z);_viewContainerRef=d(ot);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new q;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let i=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,r=i.createComponent(e.component,{index:i.length,injector:e.injector||i.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return i!==this._viewContainerRef&&this._getRootNode().appendChild(r.hostView.rootNodes[0]),super.setDisposeFn(()=>r.destroy()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}attachTemplatePortal(e){e.setAttachedHost(this);let i=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=i,this.attached.emit(i),i}attachDomPortal=e=>{let i=e.element;i.parentNode;let r=this._document.createComment("dom-portal");e.setAttachedHost(this),i.parentNode.insertBefore(r,i),this._getRootNode().appendChild(i),this._attachedPortal=e,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(i,r)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[ke]})}return t})(),e_=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=M({type:t});static \u0275inj=I({})}return t})();var CD=ku();function TD(t){return new Ru(t.get(ln),t.get(z))}var Ru=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(n,e){this._viewportRuler=n,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||"",this._previousHTMLStyles.top=n.style.top||"",n.style.left=Ke(-this._previousScrollPosition.left),n.style.top=Ke(-this._previousScrollPosition.top),n.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let n=this._document.documentElement,e=this._document.body,i=n.style,r=e.style,o=i.scrollBehavior||"",s=r.scrollBehavior||"";this._isEnabled=!1,i.left=this._previousHTMLStyles.left,i.top=this._previousHTMLStyles.top,n.classList.remove("cdk-global-scrollblock"),CD&&(i.scrollBehavior=r.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),CD&&(i.scrollBehavior=o,r.scrollBehavior=s)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,i=this._viewportRuler.getViewportSize();return e.scrollHeight>i.height||e.scrollWidth>i.width}};function kD(t,n){return new Au(t.get(jn),t.get(L),t.get(ln),n)}var Au=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(n,e,i,r){this._scrollDispatcher=n,this._ngZone=e,this._viewportRuler=i,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(this._scrollSubscription)return;let n=this._scrollDispatcher.scrolled(0).pipe(he(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=n.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=n.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var ol=class{enable(){}disable(){}attach(){}};function t_(t,n){return n.some(e=>{let i=t.bottom<e.top,r=t.top>e.bottom,o=t.right<e.left,s=t.left>e.right;return i||r||o||s})}function DD(t,n){return n.some(e=>{let i=t.top<e.top,r=t.bottom>e.bottom,o=t.left<e.left,s=t.right>e.right;return i||r||o||s})}function fi(t,n){return new Ou(t.get(jn),t.get(ln),t.get(L),n)}var Ou=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,e,i,r){this._scrollDispatcher=n,this._viewportRuler=e,this._ngZone=i,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:i,height:r}=this._viewportRuler.getViewportSize();t_(e,[{width:i,height:r,bottom:r,right:i,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},RD=(()=>{class t{_injector=d(H);constructor(){}noop=()=>new ol;close=e=>kD(this._injector,e);block=()=>TD(this._injector);reposition=e=>fi(this._injector,e);static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ui=class{positionStrategy;scrollStrategy=new ol;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let e=Object.keys(n);for(let i of e)n[i]!==void 0&&(this[i]=n[i])}}};var Nu=class{connectionPair;scrollableViewProperties;constructor(n,e){this.connectionPair=n,this.scrollableViewProperties=e}};var AD=(()=>{class t{_attachedOverlays=[];_document=d(z);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let i=this._attachedOverlays.indexOf(e);i>-1&&this._attachedOverlays.splice(i,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,i,r){return r.observers.length<1?!1:e.eventPredicate?e.eventPredicate(i):!0}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),OD=(()=>{class t extends AD{_ngZone=d(L);_renderer=d(ht).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let i=this._attachedOverlays;for(let r=i.length-1;r>-1;r--){let o=i[r];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=it(t)))(r||t)}})();static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ND=(()=>{class t extends AD{_platform=d(ge);_ngZone=d(L);_renderer=d(ht).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let i=this._document.body,r={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(i,"pointerdown",this._pointerDownListener,r),o.listen(i,"click",this._clickListener,r),o.listen(i,"auxclick",this._clickListener,r),o.listen(i,"contextmenu",this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=i.style.cursor,i.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=wt(e)};_clickListener=e=>{let i=wt(e),r=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:i;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let s=o.length-1;s>-1;s--){let a=o[s],l=a._outsidePointerEvents;if(!(!a.hasAttached()||!this.canReceiveEvent(a,e,l))){if(xD(a.overlayElement,i)||xD(a.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>l.next(e)):l.next(e)}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=it(t)))(r||t)}})();static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function xD(t,n){let e=typeof ShadowRoot<"u"&&ShadowRoot,i=n;for(;i;){if(i===t)return!0;i=e&&i instanceof ShadowRoot?i.host:i.parentNode}return!1}var FD=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2,changeDetection:0})}return t})(),PD=(()=>{class t{_platform=d(ge);_containerElement;_document=d(z);_styleLoader=d(Je);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||Zg()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<r.length;o++)r[o].remove()}let i=this._document.createElement("div");i.classList.add(e),Zg()?i.setAttribute("platform","test"):this._platform.isBrowser||i.setAttribute("platform","server"),this._document.body.appendChild(i),this._containerElement=i}_loadStyles(){this._styleLoader.load(FD)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),n_=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,e,i,r){this._renderer=e,this._ngZone=i,this.element=n.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",r)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents="none",n.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function i_(t){return t&&t.nodeType===1}var Fu=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new C;_attachments=new C;_detachments=new C;_positionStrategy;_scrollStrategy;_locationChanges=pe.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new C;_outsidePointerEvents=new C;_afterNextRenderRef;constructor(n,e,i,r,o,s,a,l,c,u=!1,f,m){this._portalOutlet=n,this._host=e,this._pane=i,this._config=r,this._ngZone=o,this._keyboardDispatcher=s,this._document=a,this._location=l,this._outsideClickDispatcher=c,this._animationsDisabled=u,this._injector=f,this._renderer=m,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(n);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=He(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=_(_({},this._config),n),this._updateElementSize()}setDirection(n){this._config=Q(_({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n=="string"?n:n.value:"ltr"}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=Ke(this._config.width),n.height=Ke(this._config.height),n.minWidth=Ke(this._config.minWidth),n.minHeight=Ke(this._config.minHeight),n.maxWidth=Ke(this._config.maxWidth),n.maxHeight=Ke(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?"":"none"}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;i_(n)?n.after(this._host):n?.type==="parent"?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let n="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new n_(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,e,i){let r=Yo(e||[]).filter(o=>!!o);r.length&&(i?n.classList.add(...r):n.classList.remove(...r))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=He(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(e){if(n)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}},ED="cdk-overlay-connected-position-bounding-box",WN=/([A-Za-z%]+)$/;function Wr(t,n){return new Pu(n,t.get(ln),t.get(z),t.get(ge),t.get(PD))}var Pu=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new C;_resizeSubscription=pe.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,e,i,r,o){this._viewportRuler=e,this._document=i,this._platform=r,this._overlayContainer=o,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(ED),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,e=this._overlayRect,i=this._viewportRect,r=this._containerRect,o=[],s;for(let a of this._preferredPositions){let l=this._getOriginPoint(n,r,a),c=this._getOverlayPoint(l,e,a),u=this._getOverlayFit(c,e,i,a);if(u.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(a,l);return}if(this._canFitWithFlexibleDimensions(u,c,i)){o.push({position:a,origin:l,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(l,a)});continue}(!s||s.overlayFit.visibleArea<u.visibleArea)&&(s={overlayFit:u,overlayPoint:c,originPoint:l,position:a,overlayRect:e})}if(o.length){let a=null,l=-1;for(let c of o){let u=c.boundingBoxRect.width*c.boundingBoxRect.height*(c.position.weight||1);u>l&&(l=u,a=c)}this._isPushed=!1,this._applyPosition(a.position,a.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(s.position,s.originPoint);return}this._applyPosition(s.position,s.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Gr(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(ED),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof F?this._origin.nativeElement:i_(this._origin)?this._origin:null}_getOriginPoint(n,e,i){let r;if(i.originX=="center")r=n.left+n.width/2;else{let s=this._isRtl()?n.right:n.left,a=this._isRtl()?n.left:n.right;r=i.originX=="start"?s:a}e.left<0&&(r-=e.left);let o;return i.originY=="center"?o=n.top+n.height/2:o=i.originY=="top"?n.top:n.bottom,e.top<0&&(o-=e.top),{x:r,y:o}}_getOverlayPoint(n,e,i){let r;i.overlayX=="center"?r=-e.width/2:i.overlayX==="start"?r=this._isRtl()?-e.width:0:r=this._isRtl()?0:-e.width;let o;return i.overlayY=="center"?o=-e.height/2:o=i.overlayY=="top"?0:-e.height,{x:n.x+r,y:n.y+o}}_getOverlayFit(n,e,i,r){let o=SD(e),{x:s,y:a}=n,l=this._getOffset(r,"x"),c=this._getOffset(r,"y");l&&(s+=l),c&&(a+=c);let u=0-s,f=s+o.width-i.width,m=0-a,h=a+o.height-i.height,y=this._subtractOverflows(o.width,u,f),S=this._subtractOverflows(o.height,m,h),k=y*S;return{visibleArea:k,isCompletelyWithinViewport:o.width*o.height===k,fitsInViewportVertically:S===o.height,fitsInViewportHorizontally:y==o.width}}_canFitWithFlexibleDimensions(n,e,i){if(this._hasFlexibleDimensions){let r=i.bottom-e.y,o=i.right-e.x,s=ID(this._overlayRef.getConfig().minHeight),a=ID(this._overlayRef.getConfig().minWidth),l=n.fitsInViewportVertically||s!=null&&s<=r,c=n.fitsInViewportHorizontally||a!=null&&a<=o;return l&&c}return!1}_pushOverlayOnScreen(n,e,i){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let r=SD(e),o=this._viewportRect,s=Math.max(n.x+r.width-o.width,0),a=Math.max(n.y+r.height-o.height,0),l=Math.max(o.top-i.top-n.y,0),c=Math.max(o.left-i.left-n.x,0),u=0,f=0;return r.width<=o.width?u=c||-s:u=n.x<this._getViewportMarginStart()?o.left-i.left-n.x:0,r.height<=o.height?f=l||-a:f=n.y<this._getViewportMarginTop()?o.top-i.top-n.y:0,this._previousPushAmount={x:u,y:f},{x:n.x+u,y:n.y+f}}_applyPosition(n,e){if(this._setTransformOrigin(n),this._setOverlayElementStyles(e,n),this._setBoundingBoxStyles(e,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let i=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!qN(this._lastScrollVisibility,i)){let r=new Nu(n,i);this._positionChanges.next(r)}this._lastScrollVisibility=i}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),i,r=n.overlayY;n.overlayX==="center"?i="center":this._isRtl()?i=n.overlayX==="start"?"right":"left":i=n.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${i} ${r}`}_calculateBoundingBoxRect(n,e){let i=this._viewportRect,r=this._isRtl(),o,s,a;if(e.overlayY==="top")s=n.y,o=i.height-s+this._getViewportMarginBottom();else if(e.overlayY==="bottom")a=i.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=i.height-a+this._getViewportMarginTop();else{let h=Math.min(i.bottom-n.y+i.top,n.y),y=this._lastBoundingBoxSize.height;o=h*2,s=n.y-h,o>y&&!this._isInitialRender&&!this._growAfterOpen&&(s=n.y-y/2)}let l=e.overlayX==="start"&&!r||e.overlayX==="end"&&r,c=e.overlayX==="end"&&!r||e.overlayX==="start"&&r,u,f,m;if(c)m=i.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),u=n.x-this._getViewportMarginStart();else if(l)f=n.x,u=i.right-n.x-this._getViewportMarginEnd();else{let h=Math.min(i.right-n.x+i.left,n.x),y=this._lastBoundingBoxSize.width;u=h*2,f=n.x-h,u>y&&!this._isInitialRender&&!this._growAfterOpen&&(f=n.x-y/2)}return{top:s,left:f,bottom:a,right:m,width:u,height:o}}_setBoundingBoxStyles(n,e){let i=this._calculateBoundingBoxRect(n,e);!this._isInitialRender&&!this._growAfterOpen&&(i.height=Math.min(i.height,this._lastBoundingBoxSize.height),i.width=Math.min(i.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left="0",r.bottom=r.right="auto",r.maxHeight=r.maxWidth="",r.width=r.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,s=this._overlayRef.getConfig().maxWidth;r.width=Ke(i.width),r.height=Ke(i.height),r.top=Ke(i.top)||"auto",r.bottom=Ke(i.bottom)||"auto",r.left=Ke(i.left)||"auto",r.right=Ke(i.right)||"auto",e.overlayX==="center"?r.alignItems="center":r.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?r.justifyContent="center":r.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(r.maxHeight=Ke(o)),s&&(r.maxWidth=Ke(s))}this._lastBoundingBoxSize=i,Gr(this._boundingBox.style,r)}_resetBoundingBoxStyles(){Gr(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){Gr(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(n,e){let i={},r=this._hasExactPosition(),o=this._hasFlexibleDimensions,s=this._overlayRef.getConfig();if(r){let u=this._viewportRuler.getViewportScrollPosition();Gr(i,this._getExactOverlayY(e,n,u)),Gr(i,this._getExactOverlayX(e,n,u))}else i.position="static";let a="",l=this._getOffset(e,"x"),c=this._getOffset(e,"y");l&&(a+=`translateX(${l}px) `),c&&(a+=`translateY(${c}px)`),i.transform=a.trim(),s.maxHeight&&(r?i.maxHeight=Ke(s.maxHeight):o&&(i.maxHeight="")),s.maxWidth&&(r?i.maxWidth=Ke(s.maxWidth):o&&(i.maxWidth="")),Gr(this._pane.style,i)}_getExactOverlayY(n,e,i){let r={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,n);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i)),n.overlayY==="bottom"){let s=this._document.documentElement.clientHeight;r.bottom=`${s-(o.y+this._overlayRect.height)}px`}else r.top=Ke(o.y);return r}_getExactOverlayX(n,e,i){let r={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,n);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i));let s;if(this._isRtl()?s=n.overlayX==="end"?"left":"right":s=n.overlayX==="end"?"right":"left",s==="right"){let a=this._document.documentElement.clientWidth;r.right=`${a-(o.x+this._overlayRect.width)}px`}else r.left=Ke(o.x);return r}_getScrollVisibility(){let n=this._getOriginRect(),e=this._pane.getBoundingClientRect(),i=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:DD(n,i),isOriginOutsideView:t_(n,i),isOverlayClipped:DD(e,i),isOverlayOutsideView:t_(e,i)}}_subtractOverflows(n,...e){return e.reduce((i,r)=>i-Math.max(r,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,i=this._viewportRuler.getViewportScrollPosition();return{top:i.top+this._getViewportMarginTop(),left:i.left+this._getViewportMarginStart(),right:i.left+n-this._getViewportMarginEnd(),bottom:i.top+e-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,e){return e==="x"?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&Yo(n).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof F)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let e=n.width||0,i=n.height||0;return{top:n.y,bottom:n.y+i,left:n.x,right:n.x+e,height:i,width:e}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();n&&(e.style.display="block");let i=e.getBoundingClientRect();return n&&(e.style.display=""),i}};function Gr(t,n){for(let e in n)n.hasOwnProperty(e)&&(t[e]=n[e]);return t}function ID(t){if(typeof t!="number"&&t!=null){let[n,e]=t.split(WN);return!e||e==="px"?parseFloat(n):null}return t||null}function SD(t){return{top:Math.floor(t.top),right:Math.floor(t.right),bottom:Math.floor(t.bottom),left:Math.floor(t.left),width:Math.floor(t.width),height:Math.floor(t.height)}}function qN(t,n){return t===n?!0:t.isOriginClipped===n.isOriginClipped&&t.isOriginOutsideView===n.isOriginOutsideView&&t.isOverlayClipped===n.isOverlayClipped&&t.isOverlayOutsideView===n.isOverlayOutsideView}var MD="cdk-global-overlay-wrapper";function Bu(t){return new Lu}var Lu=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(n){let e=n.getConfig();this._overlayRef=n,this._width&&!e.width&&n.updateSize({width:this._width}),this._height&&!e.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(MD),this._isDisposed=!1}top(n=""){return this._bottomOffset="",this._topOffset=n,this._alignItems="flex-start",this}left(n=""){return this._xOffset=n,this._xPosition="left",this}bottom(n=""){return this._topOffset="",this._bottomOffset=n,this._alignItems="flex-end",this}right(n=""){return this._xOffset=n,this._xPosition="right",this}start(n=""){return this._xOffset=n,this._xPosition="start",this}end(n=""){return this._xOffset=n,this._xPosition="end",this}width(n=""){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this}height(n=""){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this}centerHorizontally(n=""){return this.left(n),this._xPosition="center",this}centerVertically(n=""){return this.top(n),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,i=this._overlayRef.getConfig(),{width:r,height:o,maxWidth:s,maxHeight:a}=i,l=(r==="100%"||r==="100vw")&&(!s||s==="100%"||s==="100vw"),c=(o==="100%"||o==="100vh")&&(!a||a==="100%"||a==="100vh"),u=this._xPosition,f=this._xOffset,m=this._overlayRef.getConfig().direction==="rtl",h="",y="",S="";l?S="flex-start":u==="center"?(S="center",m?y=f:h=f):m?u==="left"||u==="end"?(S="flex-end",h=f):(u==="right"||u==="start")&&(S="flex-start",y=f):u==="left"||u==="start"?(S="flex-start",h=f):(u==="right"||u==="end")&&(S="flex-end",y=f),n.position=this._cssPosition,n.marginLeft=l?"0":h,n.marginTop=c?"0":this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=l?"0":y,e.justifyContent=S,e.alignItems=c?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,i=e.style;e.classList.remove(MD),i.justifyContent=i.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position="",this._overlayRef=null,this._isDisposed=!0}},LD=(()=>{class t{_injector=d(H);constructor(){}global(){return Bu()}flexibleConnectedTo(e){return Wr(this._injector,e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),sl=new v("OVERLAY_DEFAULT_CONFIG");function mi(t,n){t.get(Je).load(FD);let e=t.get(PD),i=t.get(z),r=t.get(Ue),o=t.get(yt),s=t.get(ct),a=t.get(Be,null,{optional:!0})||t.get(ht).createRenderer(null,null),l=new ui(n),c=t.get(sl,null,{optional:!0})?.usePopover??!0;l.direction=l.direction||s.value,"showPopover"in i.body?l.usePopover=n?.usePopover??c:l.usePopover=!1;let u=i.createElement("div"),f=i.createElement("div");u.id=r.getId("cdk-overlay-"),u.classList.add("cdk-overlay-pane"),f.appendChild(u),l.usePopover&&(f.setAttribute("popover","manual"),f.classList.add("cdk-overlay-popover"));let m=l.usePopover?l.positionStrategy?.getPopoverInsertionPoint?.():null;return i_(m)?m.after(f):m?.type==="parent"?m.element.appendChild(f):e.getContainerElement().appendChild(f),new Fu(new rl(u,o,t),f,u,l,t.get(L),t.get(OD),i,t.get(Pi),t.get(ND),n?.disableAnimations??t.get(ra,null,{optional:!0})==="NoopAnimations",t.get(Te),a)}var BD=(()=>{class t{scrollStrategies=d(RD);_positionBuilder=d(LD);_injector=d(H);constructor(){}create(e){return mi(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),QN=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],YN=new v("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let t=d(H);return()=>fi(t)}}),ns=(()=>{class t{elementRef=d(F);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t,selectors:[["","cdk-overlay-origin",""],["","overlay-origin",""],["","cdkOverlayOrigin",""]],exportAs:["cdkOverlayOrigin"]})}return t})(),jD=new v("cdk-connected-overlay-default-config"),ju=(()=>{class t{_dir=d(ct,{optional:!0});_injector=d(H);_overlayRef;_templatePortal;_backdropSubscription=pe.EMPTY;_attachSubscription=pe.EMPTY;_detachSubscription=pe.EMPTY;_positionSubscription=pe.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=d(YN);_ngZone=d(L);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!="string"&&this._assignConfig(e)}backdropClick=new q;positionChange=new q;attach=new q;detach=new q;overlayKeydown=new q;overlayOutsideClick=new q;constructor(){let e=d(bt),i=d(ot),r=d(jD,{optional:!0}),o=d(sl,{optional:!0});this.usePopover=o?.usePopover===!1?null:"global",this._templatePortal=new di(e,i),this.scrollStrategy=this._scrollStrategyFactory(),r&&this._assignConfig(r)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:"ltr"}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=QN);let e=this._overlayRef=mi(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(i=>{this.overlayKeydown.next(i),i.keyCode===27&&!this.disableClose&&!St(i)&&(i.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(i=>{let r=this._getOriginElement(),o=wt(i);(!r||r!==o&&!r.contains(o))&&this.overlayOutsideClick.next(i)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),i=new ui({direction:this._dir||"ltr",positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(i.height=this.height),(this.minWidth||this.minWidth===0)&&(i.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(i.minHeight=this.minHeight),this.backdropClass&&(i.backdropClass=this.backdropClass),this.panelClass&&(i.panelClass=this.panelClass),i}_updatePositionStrategy(e){let i=this.positions.map(r=>({originX:r.originX,originY:r.originY,overlayX:r.overlayX,overlayY:r.overlayY,offsetX:r.offsetX||this.offsetX,offsetY:r.offsetY||this.offsetY,panelClass:r.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(i).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?"global":this.usePopover)}_createPositionStrategy(){let e=Wr(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof ns?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof ns?this.origin.elementRef.nativeElement:this.origin instanceof F?this.origin.nativeElement:typeof Element<"u"&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(i=>this.backdropClick.emit(i)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(Zf(()=>this.positionChange.observers.length>0)).subscribe(i=>{this._ngZone.run(()=>this.positionChange.emit(i)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth}static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t,selectors:[["","cdk-connected-overlay",""],["","connected-overlay",""],["","cdkConnectedOverlay",""]],inputs:{origin:[0,"cdkConnectedOverlayOrigin","origin"],positions:[0,"cdkConnectedOverlayPositions","positions"],positionStrategy:[0,"cdkConnectedOverlayPositionStrategy","positionStrategy"],offsetX:[0,"cdkConnectedOverlayOffsetX","offsetX"],offsetY:[0,"cdkConnectedOverlayOffsetY","offsetY"],width:[0,"cdkConnectedOverlayWidth","width"],height:[0,"cdkConnectedOverlayHeight","height"],minWidth:[0,"cdkConnectedOverlayMinWidth","minWidth"],minHeight:[0,"cdkConnectedOverlayMinHeight","minHeight"],backdropClass:[0,"cdkConnectedOverlayBackdropClass","backdropClass"],panelClass:[0,"cdkConnectedOverlayPanelClass","panelClass"],viewportMargin:[0,"cdkConnectedOverlayViewportMargin","viewportMargin"],scrollStrategy:[0,"cdkConnectedOverlayScrollStrategy","scrollStrategy"],open:[0,"cdkConnectedOverlayOpen","open"],disableClose:[0,"cdkConnectedOverlayDisableClose","disableClose"],transformOriginSelector:[0,"cdkConnectedOverlayTransformOriginOn","transformOriginSelector"],hasBackdrop:[2,"cdkConnectedOverlayHasBackdrop","hasBackdrop",Z],lockPosition:[2,"cdkConnectedOverlayLockPosition","lockPosition",Z],flexibleDimensions:[2,"cdkConnectedOverlayFlexibleDimensions","flexibleDimensions",Z],growAfterOpen:[2,"cdkConnectedOverlayGrowAfterOpen","growAfterOpen",Z],push:[2,"cdkConnectedOverlayPush","push",Z],disposeOnNavigation:[2,"cdkConnectedOverlayDisposeOnNavigation","disposeOnNavigation",Z],usePopover:[0,"cdkConnectedOverlayUsePopover","usePopover"],matchWidth:[2,"cdkConnectedOverlayMatchWidth","matchWidth",Z],_config:[0,"cdkConnectedOverlay","_config"]},outputs:{backdropClick:"backdropClick",positionChange:"positionChange",attach:"attach",detach:"detach",overlayKeydown:"overlayKeydown",overlayOutsideClick:"overlayOutsideClick"},exportAs:["cdkConnectedOverlay"],features:[Xe]})}return t})(),$i=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=M({type:t});static \u0275inj=I({providers:[BD],imports:[re,e_,nl,nl]})}return t})();var KN=new v("MATERIAL_ANIMATIONS"),VD=null;function ZN(){return d(KN,{optional:!0})?.animationsDisabled||d(ra,{optional:!0})==="NoopAnimations"?"di-disabled":(VD??=d(Ko).matchMedia("(prefers-reduced-motion)").matches,VD?"reduced-motion":"enabled")}function Ne(){return ZN()!=="enabled"}function Nt(t){return t!=null&&`${t}`!="false"}var cn=(function(t){return t[t.FADING_IN=0]="FADING_IN",t[t.VISIBLE=1]="VISIBLE",t[t.FADING_OUT=2]="FADING_OUT",t[t.HIDDEN=3]="HIDDEN",t})(cn||{}),r_=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=cn.HIDDEN;constructor(n,e,i,r=!1){this._renderer=n,this.element=e,this.config=i,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},HD=qo({passive:!0,capture:!0}),o_=class{_events=new Map;addHandler(n,e,i,r){let o=this._events.get(e);if(o){let s=o.get(i);s?s.add(r):o.set(i,new Set([r]))}else this._events.set(e,new Map([[i,new Set([r])]])),n.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,HD)})}removeHandler(n,e,i){let r=this._events.get(n);if(!r)return;let o=r.get(e);o&&(o.delete(i),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,HD)))}_delegateEventHandler=n=>{let e=wt(n);e&&this._events.get(n.type)?.forEach((i,r)=>{(r===e||r.contains(e))&&i.forEach(o=>o.handleEvent(n))})}},al={enterDuration:225,exitDuration:150},XN=800,zD=qo({passive:!0,capture:!0}),UD=["mousedown","touchstart"],$D=["mouseup","mouseleave","touchend","touchcancel"],JN=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return t})(),ll=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new o_;constructor(n,e,i,r,o){this._target=n,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=Bn(i)),o&&o.get(Je).load(JN)}fadeInRipple(n,e,i={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=_(_({},al),i.animation);i.centered&&(n=r.left+r.width/2,e=r.top+r.height/2);let s=i.radius||e1(n,e,r),a=n-r.left,l=e-r.top,c=o.enterDuration,u=document.createElement("div");u.classList.add("mat-ripple-element"),u.style.left=`${a-s}px`,u.style.top=`${l-s}px`,u.style.height=`${s*2}px`,u.style.width=`${s*2}px`,i.color!=null&&(u.style.backgroundColor=i.color),u.style.transitionDuration=`${c}ms`,this._containerElement.appendChild(u);let f=window.getComputedStyle(u),m=f.transitionProperty,h=f.transitionDuration,y=m==="none"||h==="0s"||h==="0s, 0s"||r.width===0&&r.height===0,S=new r_(this,u,i,y);u.style.transform="scale3d(1, 1, 1)",S.state=cn.FADING_IN,i.persistent||(this._mostRecentTransientRipple=S);let k=null;return!y&&(c||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let B=()=>{k&&(k.fallbackTimer=null),clearTimeout(dt),this._finishRippleTransition(S)},we=()=>this._destroyRipple(S),dt=setTimeout(we,c+100);u.addEventListener("transitionend",B),u.addEventListener("transitioncancel",we),k={onTransitionEnd:B,onTransitionCancel:we,fallbackTimer:dt}}),this._activeRipples.set(S,k),(y||!c)&&this._finishRippleTransition(S),S}fadeOutRipple(n){if(n.state===cn.FADING_OUT||n.state===cn.HIDDEN)return;let e=n.element,i=_(_({},al),n.config.animation);e.style.transitionDuration=`${i.exitDuration}ms`,e.style.opacity="0",n.state=cn.FADING_OUT,(n._animationForciblyDisabledThroughCss||!i.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let e=Bn(n);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,UD.forEach(i=>{t._eventManager.addHandler(this._ngZone,i,e,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{$D.forEach(e=>{this._triggerElement.addEventListener(e,this,zD)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===cn.FADING_IN?this._startFadeOutTransition(n):n.state===cn.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let e=n===this._mostRecentTransientRipple,{persistent:i}=n.config;n.state=cn.VISIBLE,!i&&(!e||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let e=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=cn.HIDDEN,e!==null&&(n.element.removeEventListener("transitionend",e.onTransitionEnd),n.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),n.element.remove()}_onMousedown(n){let e=jr(n),i=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+XN;!this._target.rippleDisabled&&!e&&!i&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!Vr(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=n.changedTouches;if(e)for(let i=0;i<e.length;i++)this.fadeInRipple(e[i].clientX,e[i].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let e=n.state===cn.VISIBLE||n.config.terminateOnPointerUp&&n.state===cn.FADING_IN;!n.config.persistent&&e&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(UD.forEach(e=>t._eventManager.removeHandler(e,n,this)),this._pointerUpEventsRegistered&&($D.forEach(e=>n.removeEventListener(e,this,zD)),this._pointerUpEventsRegistered=!1))}};function e1(t,n,e){let i=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),r=Math.max(Math.abs(n-e.top),Math.abs(n-e.bottom));return Math.sqrt(i*i+r*r)}var s_=new v("mat-ripple-global-options"),Gi=(()=>{class t{_elementRef=d(F);_animationsDisabled=Ne();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=d(L),i=d(ge),r=d(s_,{optional:!0}),o=d(H);this._globalOptions=r||{},this._rippleRenderer=new ll(this,e,this._elementRef,i,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:_(_(_({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,i=0,r){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,i,_(_({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,_(_({},this.rippleConfig),e))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(i,r){i&2&&P("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return t})();var t1={capture:!0},n1=["focus","mousedown","mouseenter","touchstart"],a_="mat-ripple-loader-uninitialized",l_="mat-ripple-loader-class-name",GD="mat-ripple-loader-centered",Vu="mat-ripple-loader-disabled",WD=(()=>{class t{_document=d(z);_animationsDisabled=Ne();_globalRippleOptions=d(s_,{optional:!0});_platform=d(ge);_ngZone=d(L);_injector=d(H);_eventCleanups;_hosts=new Map;constructor(){let e=d(ht).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>n1.map(i=>e.listen(this._document,i,this._onInteraction,t1)))}ngOnDestroy(){let e=this._hosts.keys();for(let i of e)this.destroyRipple(i);this._eventCleanups.forEach(i=>i())}configureRipple(e,i){e.setAttribute(a_,this._globalRippleOptions?.namespace??""),(i.className||!e.hasAttribute(l_))&&e.setAttribute(l_,i.className||""),i.centered&&e.setAttribute(GD,""),i.disabled&&e.setAttribute(Vu,"")}setDisabled(e,i){let r=this._hosts.get(e);r?(r.target.rippleDisabled=i,!i&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):i?e.setAttribute(Vu,""):e.removeAttribute(Vu)}_onInteraction=e=>{let i=wt(e);if(i instanceof HTMLElement){let r=i.closest(`[${a_}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let i=this._document.createElement("span");i.classList.add("mat-ripple",e.getAttribute(l_)),e.append(i);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??al.enterDuration,s=this._animationsDisabled?0:r?.animation?.exitDuration??al.exitDuration,a={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(Vu),rippleConfig:{centered:e.hasAttribute(GD),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:s}}},l=new ll(a,this._ngZone,i,this._platform,this._injector),c=!a.rippleDisabled;c&&l.setupTriggerEvents(e),this._hosts.set(e,{target:a,renderer:l,hasSetUpEvents:c}),e.removeAttribute(a_)}destroyRipple(e){let i=this._hosts.get(e);i&&(i.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Vn=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["structural-styles"]],decls:0,vars:0,template:function(i,r){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var i1=["mat-icon-button",""],r1=["*"],o1=new v("MAT_BUTTON_CONFIG");function qD(t){return t==null?void 0:Ot(t)}var c_=(()=>{class t{_elementRef=d(F);_ngZone=d(L);_animationsDisabled=Ne();_config=d(o1,{optional:!0});_focusMonitor=d(zt);_cleanupClick;_renderer=d(Be);_rippleLoader=d(WD);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){d(Je).load(Vn);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",i){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,i):this._elementRef.nativeElement.focus(i)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(i,r){i&2&&(ne("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),pt(r.color?"mat-"+r.color:""),P("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",Z],disabled:[2,"disabled","disabled",Z],ariaDisabled:[2,"aria-disabled","ariaDisabled",Z],disabledInteractive:[2,"disabledInteractive","disabledInteractive",Z],tabIndex:[2,"tabIndex","tabIndex",qD],_tabindex:[2,"tabindex","_tabindex",qD]}})}return t})(),qr=(()=>{class t extends c_{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[ke],attrs:i1,ngContentSelectors:r1,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(de(),jt(0,"span",0),O(1),jt(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var Hn=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=M({type:t});static \u0275inj=I({imports:[re]})}return t})();var s1=["matButton",""],a1=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],l1=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var QD=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Hu=(()=>{class t extends c_{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=c1(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let i=this._elementRef.nativeElement.classList,r=this._appearance?QD.get(this._appearance):null,o=QD.get(e);r&&i.remove(...r),i.add(...o),this._appearance=e}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[ke],attrs:s1,ngContentSelectors:l1,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(de(a1),jt(0,"span",0),O(1),Qe(2,"span",1),O(3,1),st(),O(4,2),jt(5,"span",2)(6,"span",3)),i&2&&P("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();function c1(t){return t.hasAttribute("mat-raised-button")?"elevated":t.hasAttribute("mat-stroked-button")?"outlined":t.hasAttribute("mat-flat-button")?"filled":t.hasAttribute("mat-button")?"text":null}var cl=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=M({type:t});static \u0275inj=I({imports:[Hn,re]})}return t})();function d1(t,n){if(t&1){let e=at();g(0,"div",1)(1,"button",2),ee("click",function(){Pe(e);let r=A();return Le(r.action())}),x(2),b()()}if(t&2){let e=A();p(2),oe(" ",e.data.action," ")}}var u1=["label"];function f1(t,n){}var m1=Math.pow(2,31)-1,dl=class{_overlayRef;instance;containerInstance;_afterDismissed=new C;_afterOpened=new C;_onAction=new C;_durationTimeoutId;_dismissedByAction=!1;constructor(n,e){this._overlayRef=e,this.containerInstance=n,n._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(n){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(n,m1))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},YD=new v("MatSnackBarData"),is=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},h1=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return t})(),p1=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return t})(),g1=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return t})(),_1=(()=>{class t{snackBarRef=d(dl);data=d(YD);constructor(){}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(i,r){i&1&&(g(0,"div",0),x(1),b(),G(2,d1,3,1,"div",1)),i&2&&(p(),oe(" ",r.data.message,`
`),p(),W(r.hasAction?2:-1))},dependencies:[Hu,h1,p1,g1],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2,changeDetection:0})}return t})(),u_="_mat-snack-bar-enter",f_="_mat-snack-bar-exit",v1=(()=>{class t extends ts{_ngZone=d(L);_elementRef=d(F);_changeDetectorRef=d(be);_platform=d(ge);_animationsDisabled=Ne();snackBarConfig=d(is);_document=d(z);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=d(H);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new C;_onExit=new C;_onEnter=new C;_animationState="void";_live;_label;_role;_liveElementId=d(Ue).getId("mat-snack-bar-container-live-");constructor(){super();let e=this.snackBarConfig;e.politeness==="assertive"&&!e.announcementMessage?this._live="assertive":e.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(e){this._assertNotAttached();let i=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),i}attachTemplatePortal(e){this._assertNotAttached();let i=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),i}attachDomPortal=e=>{this._assertNotAttached();let i=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),i};onAnimationEnd(e){e===f_?this._completeExit():e===u_&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?He(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(u_)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(u_)},200)))}exit(){return this._destroyed?V(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?He(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(f_)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(f_),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,i=this.snackBarConfig.panelClass;i&&(Array.isArray(i)?i.forEach(s=>e.classList.add(s)):e.classList.add(i)),this._exposeToModals();let r=this._label.nativeElement,o="mdc-snackbar__label";r.classList.toggle(o,!r.querySelector(`.${o}`))}_exposeToModals(){let e=this._liveElementId,i=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<i.length;r++){let o=i[r],s=o.getAttribute("aria-owns");this._trackedModals.add(o),s?s.indexOf(e)===-1&&o.setAttribute("aria-owns",s+" "+e):o.setAttribute("aria-owns",e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let i=e.getAttribute("aria-owns");if(i){let r=i.replace(this._liveElementId,"").trim();r.length>0?e.setAttribute("aria-owns",r):e.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,i=e.querySelector("[aria-hidden]"),r=e.querySelector("[aria-live]");if(i&&r){let o=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&i.contains(document.activeElement)&&(o=document.activeElement),i.removeAttribute("aria-hidden"),r.appendChild(i),o?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["mat-snack-bar-container"]],viewQuery:function(i,r){if(i&1&&Re(Jg,7)(u1,7),i&2){let o;U(o=$())&&(r._portalOutlet=o.first),U(o=$())&&(r._label=o.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(i,r){i&1&&ee("animationend",function(s){return r.onAnimationEnd(s.animationName)})("animationcancel",function(s){return r.onAnimationEnd(s.animationName)}),i&2&&P("mat-snack-bar-container-enter",r._animationState==="visible")("mat-snack-bar-container-exit",r._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!r._animationsDisabled)},features:[ke],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(i,r){i&1&&(g(0,"div",1)(1,"div",2,0)(3,"div",3),xt(4,f1,0,0,"ng-template",4),b(),se(5,"div"),b()()),i&2&&(p(5),ne("aria-live",r._live)("role",r._role)("id",r._liveElementId))},dependencies:[Jg],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--mat-snack-bar-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-snack-bar-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-snack-bar-container-color, var(--mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--mat-snack-bar-supporting-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-snack-bar-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-snack-bar-supporting-text-weight, var(--mat-sys-body-medium-weight));
  line-height: var(--mat-snack-bar-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--mat-snack-bar-button-color, var(--mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --mat-button-text-state-layer-color: currentColor;
  --mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2})}return t})(),b1=new v("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new is}),KD=(()=>{class t{_live=d(Ya);_injector=d(H);_breakpointObserver=d(ci);_parentSnackBar=d(t,{optional:!0,skipSelf:!0});_defaultConfig=d(b1);_animationsDisabled=Ne();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=_1;snackBarContainerComponent=v1;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}constructor(){}openFromComponent(e,i){return this._attach(e,i)}openFromTemplate(e,i){return this._attach(e,i)}open(e,i="",r){let o=_(_({},this._defaultConfig),r);return o.data={message:e,action:i},o.announcementMessage===e&&(o.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,o)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,i){let r=i&&i.viewContainerRef&&i.viewContainerRef.injector,o=H.create({parent:r||this._injector,providers:[{provide:is,useValue:i}]}),s=new zi(this.snackBarContainerComponent,i.viewContainerRef,o),a=e.attach(s);return a.instance.snackBarConfig=i,a.instance}_attach(e,i){let r=_(_(_({},new is),this._defaultConfig),i),o=this._createOverlay(r),s=this._attachSnackBarContainer(o,r),a=new dl(s,o);if(e instanceof bt){let l=new di(e,null,{$implicit:r.data,snackBarRef:a});a.instance=s.attachTemplatePortal(l)}else{let l=this._createInjector(r,a),c=new zi(e,void 0,l),u=s.attachComponentPortal(c);a.instance=u.instance}return this._breakpointObserver.observe(Jo.HandsetPortrait).pipe(ce(o.detachments())).subscribe(l=>{o.overlayElement.classList.toggle(this.handsetCssClass,l.matches)}),r.announcementMessage&&s._onAnnounce.subscribe(()=>{this._live.announce(r.announcementMessage,r.politeness)}),this._animateSnackBar(a,r),this._openedSnackBarRef=a,this._openedSnackBarRef}_animateSnackBar(e,i){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),i.announcementMessage&&this._live.clear()}),i.duration&&i.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(i.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let i=new ui;i.direction=e.direction;let r=Bu(this._injector),o=e.direction==="rtl",s=e.horizontalPosition==="left"||e.horizontalPosition==="start"&&!o||e.horizontalPosition==="end"&&o,a=!s&&e.horizontalPosition!=="center";return s?r.left("0"):a?r.right("0"):r.centerHorizontally(),e.verticalPosition==="top"?r.top("0"):r.bottom("0"),i.positionStrategy=r,i.disableAnimations=this._animationsDisabled,mi(this._injector,i)}_createInjector(e,i){let r=e&&e.viewContainerRef&&e.viewContainerRef.injector;return H.create({parent:r||this._injector,providers:[{provide:dl,useValue:i},{provide:YD,useValue:e.data}]})}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function m_(t){t||(t=d(mt));let n=new X(e=>{if(t.destroyed){e.next();return}return t.onDestroy(e.next.bind(e))});return e=>e.pipe(ce(n))}var g_=class{translations;constructor(n){this.translations=n}getTranslation(n){return V(this.translations.get(n)||{})}},JD=new v("");function h_(t,n){return t&&(Object.prototype.hasOwnProperty.call(t,n)?t[n]:n.split(".").reduce((e,i)=>e?.[i],t))}function y1(t,n,e){t=_({},t);let i=n.split("."),r=i.length-1;return i.reduce((o,s,a)=>(a===r?o[s]=e:o[s]=Array.isArray(o[s])?o[s].slice():_({},o[s]),o&&o[s]),t),t}function ex(t){return t?Array.isArray(t)?t.length:$u(t)?Object.keys(t).length:t?t.length:0:0}function w1(t){return ex(t)===0}function C1(t){return typeof t=="function"}function os(t){return typeof t=="string"}function $u(t){return!!t&&typeof t=="object"&&!Array.isArray(t)}function tx(t){return t.replace(/(?:^\w|[A-Z]|\b\w)/g,(n,e)=>e==0?n.toLowerCase():n.toUpperCase()).replace(/\s+|_|-|\//g,"")}function nx(){return typeof window<"u"}function __(t){return t==null}function ZD(t){return __(t)===!1}function ix(t){return t&&typeof t.scope=="string"}function D1(t){return t&&$u(t.loader)}function XD(t){let n={};function e(i,r){if(i===null)n[r]=null;else if($u(i))for(let[o,s]of Object.entries(i))e(s,r?`${r}.${o}`:o);else n[r]=i}return e(t,""),n}function x1(t){let n={};for(let[e,i]of Object.entries(t)){let r=e.split("."),o=n;r.forEach((s,a)=>{a===r.length-1?o[s]=i:(o[s]??={},o=o[s])})}return n}var ss=new v("",{providedIn:"root",factory:()=>rs}),rs={defaultLang:"en",reRenderOnLangChange:!1,prodMode:!1,failedRetries:2,fallbackLang:[],availableLangs:[],missingHandler:{logMissingKey:!0,useFallbackTranslation:!1,allowEmpty:!1},flatten:{aot:!1},interpolation:["{{","}}"],scopes:{keepCasing:!1}};function E1(t={}){return Q(_(_({},rs),t),{missingHandler:_(_({},rs.missingHandler),t.missingHandler),flatten:_(_({},rs.flatten),t.flatten),scopes:_(_({},rs.scopes),t.scopes)})}var rx=new v(""),I1=(()=>{class t{config=d(ss,{optional:!0})??rs;get interpolationMatcher(){return S1(this.config)}transpile({value:e,params:i={},translation:r,key:o}){if(os(e)){let s,a=e;for(;(s=this.interpolationMatcher.exec(a))!==null;){let[l,c]=s;a=a.replace(l,()=>{let u=c.trim(),f=h_(i,u);return ZD(f)?f:ZD(r[u])?this.transpile({params:i,translation:r,key:o,value:r[u]}):""})}return a}else i&&($u(e)?e=this.handleObject({value:e,params:i,translation:r,key:o}):Array.isArray(e)&&(e=this.handleArray({value:e,params:i,translation:r,key:o})));return e}handleObject({value:e,params:i={},translation:r,key:o}){let s=e;return Object.keys(i).forEach(a=>{let l=this.transpile({value:h_(s,a),params:h_(i,a),translation:r,key:o});s=y1(s,a,l)}),s}handleArray(r){var o=r,{value:e}=o,i=kf(o,["value"]);return e.map(s=>this.transpile(_({value:s},i)))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac})}return t})();function S1(t){let[n,e]=t.interpolation;return new RegExp(`${n}([^${n}${e}]*?)${e}`,"g")}var ox=new v(""),M1=(()=>{class t{handle(e,i){if(i.missingHandler.logMissingKey&&!i.prodMode){let r=`Missing translation for '${e}'`;console.warn(`%c ${r}`,"font-size: 12px; color: red")}return e}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac})}return t})(),sx=new v(""),T1=(()=>{class t{preSaveTranslation(e){return e}preSaveTranslationKey(e,i){return i}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac})}return t})(),ax=new v(""),k1=(()=>{class t{userConfig;constructor(e){this.userConfig=e}getNextLangs(){let e=this.userConfig.fallbackLang;if(!e)throw new Error("When using the default fallback, a fallback language must be provided in the config!");return Array.isArray(e)?e:[e]}static \u0275fac=function(i){return new(i||t)(R(ss))};static \u0275prov=w({token:t,factory:t.\u0275fac})}return t})();function ul(t){if(!t)return"";let n=t.split("/");return n.pop(),n.join("/")}function Wi(t){return t?t.split("/").pop():""}function v_(t,n,e="|"){if(os(t)){let i=t.split(e),r=i.pop();return r===n?[!0,i.toString()]:[!1,r]}return[!1,""]}function lx(t,n){let[e]=v_(n,"static");return e?!1:!!t.config.reRenderOnLangChange}function cx(t){return t?n=>n:Me(1)}function R1(t,n){return Object.keys(t).reduce((e,i)=>(e[`${n}/${i}`]=t[i],e),{})}function y_(t,n){return D1(t)?R1(t.loader,n):void 0}function p_(t){return{scope:ul(t)||null,langName:Wi(t)}}function dx(t){let{path:n,inlineLoader:e,mainLoader:i,data:r}=t;if(e){let o=e[n];if(C1(o)===!1)throw`You're using an inline loader but didn't provide a loader for ${n}`;return e[n]().then(s=>s.default?s.default:s)}return i.getTranslation(n,r)}function A1({mainLoader:t,path:n,data:e,fallbackPath:i,inlineLoader:r}){return(i?[n,i]:[n]).map(s=>{let a=dx({path:s,mainLoader:t,inlineLoader:r,data:e});return Ae(a).pipe(N(l=>({translation:l,lang:s})))})}var O1;var as=(()=>{class t{loader;parser;missingHandler;interceptor;fallbackStrategy;langChanges$;translations=new Map;cache=new Map;firstFallbackLang;defaultLang="";availableLangs=[];isResolvedMissingOnce=!1;lang;failedLangs=new Set;events=new C;events$=this.events.asObservable();config;destroyRef=d(mt);constructor(e,i,r,o,s,a){this.loader=e,this.parser=i,this.missingHandler=r,this.interceptor=o,this.fallbackStrategy=a,this.loader||(this.loader=new g_(this.translations)),O1=this,this.config=JSON.parse(JSON.stringify(s)),this.setAvailableLangs(this.config.availableLangs||[]),this.setFallbackLangForMissingTranslation(this.config),this.setDefaultLang(this.config.defaultLang),this.lang=new $e(this.getDefaultLang()),this.langChanges$=this.lang.asObservable(),this.events$.subscribe(l=>{l.type==="translationLoadSuccess"&&l.wasFailure&&this.setActiveLang(l.payload.langName)}),this.destroyRef.onDestroy(()=>{this.lang.complete(),this.events.complete(),this.cache.clear()})}getDefaultLang(){return this.defaultLang}setDefaultLang(e){this.defaultLang=e}getActiveLang(){return this.lang.getValue()}setActiveLang(e){return this.parser.onLangChanged?.(e),this.lang.next(e),this.events.next({type:"langChanged",payload:p_(e)}),this}setAvailableLangs(e){this.availableLangs=e}getAvailableLangs(){return this.availableLangs}load(e,i={}){let r=this.cache.get(e);if(r)return r;let o,s=this._isLangScoped(e),a;s&&(a=ul(e));let l={path:e,mainLoader:this.loader,inlineLoader:i.inlineLoader,data:s?{scope:a}:void 0};if(this.useFallbackTranslation(e)){let u=s?`${a}/${this.firstFallbackLang}`:this.firstFallbackLang,f=A1(Q(_({},l),{fallbackPath:u}));o=$n(f)}else{let u=dx(l);o=Ae(u)}let c=o.pipe(Yf(this.config.failedRetries),We(u=>{if(Array.isArray(u)){u.forEach(f=>{this.handleSuccess(f.lang,f.translation),f.lang!==e&&this.cache.set(f.lang,V({}))});return}this.handleSuccess(e,u)}),Sn(u=>(this.config.prodMode||console.error(`Error while trying to load "${e}"`,u),this.handleFailure(e,i))),lr(1),m_(this.destroyRef));return this.cache.set(e,c),c}translate(e,i={},r=this.getActiveLang()){if(!e)return e;let{scope:o,resolveLang:s}=this.resolveLangAndScope(r);if(Array.isArray(e))return e.map(c=>this.translate(o?`${o}.${c}`:c,i,s));e=o?`${o}.${e}`:e;let a=this.getTranslation(s),l=a[e];return l?this.parser.transpile({value:l,params:i,translation:a,key:e}):this._handleMissingKey(e,l,i)}selectTranslate(e,i,r,o=!1){let s,a=(c,u)=>this.load(c,u).pipe(N(()=>o?this.translateObject(e,i,c):this.translate(e,i,c)));if(__(r))return this.langChanges$.pipe(ye(c=>a(c)));if(r=Array.isArray(r)?r[0]:r,ix(r)){let c=r;r=c.scope,s=y_(c,c.scope)}if(r=r,this.isLang(r)||this.isScopeWithLang(r))return a(r);let l=r;return this.langChanges$.pipe(ye(c=>a(`${l}/${c}`,{inlineLoader:s})))}isScopeWithLang(e){return this.isLang(Wi(e))}translateObject(e,i={},r=this.getActiveLang()){if(os(e)||Array.isArray(e)){let{resolveLang:s,scope:a}=this.resolveLangAndScope(r);if(Array.isArray(e))return e.map(u=>this.translateObject(a?`${a}.${u}`:u,i,s));let l=this.getTranslation(s);e=a?`${a}.${e}`:e;let c=x1(this.getObjectByKey(l,e));return w1(c)?this.translate(e,i,r):this.parser.transpile({value:c,params:i,translation:l,key:e})}let o=[];for(let[s,a]of this.getEntries(e))o.push(this.translateObject(s,a,r));return o}selectTranslateObject(e,i,r){if(os(e)||Array.isArray(e))return this.selectTranslate(e,i,r,!0);let[[o,s],...a]=this.getEntries(e);return this.selectTranslateObject(o,s,r).pipe(N(l=>{let c=[l];for(let[u,f]of a)c.push(this.translateObject(u,f,r));return c}))}getTranslation(e){if(e){if(this.isLang(e))return this.translations.get(e)||{};{let{scope:i,resolveLang:r}=this.resolveLangAndScope(e),o=this.translations.get(r)||{};return this.getObjectByKey(o,i)}}return this.translations}selectTranslation(e){let i=this.langChanges$;if(e){let r=Wi(e)!==e;this.isLang(e)||r?i=V(e):i=this.langChanges$.pipe(N(o=>`${e}/${o}`))}return i.pipe(ye(r=>this.load(r).pipe(N(()=>this.getTranslation(r)))))}setTranslation(e,i=this.getActiveLang(),r={}){let s=_(_({},{merge:!0,emitChange:!0}),r),a=ul(i),l=e;if(a){let h=this.getMappedScope(a);l=XD({[h]:e})}let c=a?Wi(i):i,u=_(_({},s.merge&&this.getTranslation(c)),l),f=this.config.flatten.aot?u:XD(u),m=this.interceptor.preSaveTranslation(f,c);this.translations.set(c,m),s.emitChange&&this.setActiveLang(this.getActiveLang())}setTranslationKey(e,i,r={}){let o=r.lang||this.getActiveLang(),s=this.interceptor.preSaveTranslationKey(e,i,o),a={[e]:s};this.setTranslation(a,o,Q(_({},r),{merge:!0}))}setFallbackLangForMissingTranslation({fallbackLang:e}){let i=Array.isArray(e)?e[0]:e;e&&this.useFallbackTranslation(i)&&(this.firstFallbackLang=i)}_handleMissingKey(e,i,r){if(this.config.missingHandler.allowEmpty&&i==="")return"";if(!this.isResolvedMissingOnce&&this.useFallbackTranslation()){this.isResolvedMissingOnce=!0;let o=this.translate(e,r,this.firstFallbackLang);return this.isResolvedMissingOnce=!1,o}return this.missingHandler.handle(e,this.getMissingHandlerData(),r)}_isLangScoped(e){return this.getAvailableLangsIds().indexOf(e)===-1}isLang(e){return this.getAvailableLangsIds().indexOf(e)!==-1}_loadDependencies(e,i){let r=Wi(e);return this._isLangScoped(e)&&!this.isLoadedTranslation(r)?or([this.load(r),this.load(e,{inlineLoader:i})]):this.load(e,{inlineLoader:i})}_completeScopeWithLang(e){return this._isLangScoped(e)&&!this.isLang(Wi(e))?`${e}/${this.getActiveLang()}`:e}_setScopeAlias(e,i){this.config.scopeMapping||(this.config.scopeMapping={}),this.config.scopeMapping[e]=i}isLoadedTranslation(e){return ex(this.getTranslation(e))}getAvailableLangsIds(){let e=this.getAvailableLangs()[0];return os(e)?this.getAvailableLangs():this.getAvailableLangs().map(i=>i.id)}getMissingHandlerData(){return Q(_({},this.config),{activeLang:this.getActiveLang(),availableLangs:this.availableLangs,defaultLang:this.defaultLang})}useFallbackTranslation(e){return this.config.missingHandler.useFallbackTranslation&&e!==this.firstFallbackLang}handleSuccess(e,i){this.setTranslation(i,e,{emitChange:!1}),this.events.next({wasFailure:!!this.failedLangs.size,type:"translationLoadSuccess",payload:p_(e)}),this.failedLangs.forEach(r=>this.cache.delete(r)),this.failedLangs.clear()}handleFailure(e,i){__(i.failedCounter)&&(i.failedCounter=0,i.fallbackLangs||(i.fallbackLangs=this.fallbackStrategy.getNextLangs(e)));let r=e.split("/"),s=i.fallbackLangs[i.failedCounter];if(this.failedLangs.add(e),this.cache.has(s))return this.handleSuccess(s,this.getTranslation(s)),Ge;let a=s===r[r.length-1];if(!s||a){let c="Unable to load translation and all the fallback languages";throw r.length>1&&(c+=", did you misspelled the scope name?"),new Error(c)}let l=s;return r.length>1&&(r[r.length-1]=s,l=r.join("/")),i.failedCounter++,this.events.next({type:"translationLoadFailure",payload:p_(e)}),this.load(l,i)}getMappedScope(e){let{scopeMapping:i={},scopes:r={keepCasing:!1}}=this.config;return i[e]||(r.keepCasing?e:tx(e))}resolveLangAndScope(e){let i=e,r;if(this._isLangScoped(e)){let o=Wi(e),s=this.isLang(o);i=s?o:this.getActiveLang(),r=this.getMappedScope(s?ul(e):e)}return{scope:r,resolveLang:i}}getObjectByKey(e,i){let r={},o=`${i}.`;for(let s in e)s.startsWith(o)&&(r[s.replace(o,"")]=e[s]);return r}getEntries(e){return e instanceof Map?e.entries():Object.entries(e)}static \u0275fac=function(i){return new(i||t)(R(JD,8),R(rx),R(ox),R(sx),R(ss),R(ax))};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),N1=(()=>{class t{html;static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["ng-component"]],inputs:{html:"html"},decls:1,vars:1,consts:[[1,"transloco-loader-template",3,"innerHTML"]],template:function(i,r){i&1&&jt(0,"div",0),i&2&&Vt("innerHTML",r.html,op)},encapsulation:2})}return t})(),b_=class{view;vcr;constructor(n,e){this.view=n,this.vcr=e}attachView(){if(this.view instanceof bt)this.vcr.createEmbeddedView(this.view);else if(os(this.view)){let n=this.vcr.createComponent(N1);n.instance.html=this.view,n.hostView.detectChanges()}else this.vcr.createComponent(this.view)}detachView(){this.vcr.clear()}},ux=new v(""),F1=new v(""),fx=new v(""),zu=class{initialized=!1;resolve({inline:n,provider:e,active:i}){let r=i;if(this.initialized)return r=i,r;if(e){let[,o]=v_(e,"static");r=o}if(n){let[,o]=v_(n,"static");r=o}return this.initialized=!0,r}resolveLangBasedOnScope(n){return ul(n)?Wi(n):n}resolveLangPath(n,e){return e?`${e}/${n}`:n}},Uu=class{service;constructor(n){this.service=n}resolve(n){let{inline:e,provider:i}=n;if(e)return e;if(i){if(ix(i)){let{scope:r,alias:o=this.service.config.scopes.keepCasing?r:tx(r)}=i;return this.service._setScopeAlias(r,o),r}return i}}},mx=(()=>{class t{destroyRef=d(mt);service=d(as);tpl=d(bt,{optional:!0});providerLang=d(ux,{optional:!0});providerScope=d(fx,{optional:!0});providedLoadingTpl=d(F1,{optional:!0});cdr=d(be);host=d(F);vcr=d(ot);renderer=d(Be);view;memo=new Map;key;params={};inlineScope;inlineRead;prefix;inlineLang;inlineTpl;currentLang;loaderTplHandler;initialized=!1;path;langResolver=new zu;scopeResolver=new Uu(this.service);strategy=this.tpl===null?"attribute":"structural";static ngTemplateContextGuard(e,i){return!0}ngOnInit(){let e=lx(this.service,this.providerLang||this.inlineLang);if(this.service.langChanges$.pipe(ye(i=>{let r=this.langResolver.resolve({inline:this.inlineLang,provider:this.providerLang,active:i});return Array.isArray(this.providerScope)?$n(this.providerScope.map(o=>this.resolveScope(r,o))):this.resolveScope(r,this.providerScope)}),cx(e),m_(this.destroyRef)).subscribe(()=>{this.currentLang=this.langResolver.resolveLangBasedOnScope(this.path),this.strategy==="attribute"?this.attributeStrategy():this.structuralStrategy(this.currentLang,this.prefix||this.inlineRead),this.cdr.markForCheck(),this.initialized=!0}),!this.initialized){let i=this.resolveLoadingContent();i&&(this.loaderTplHandler=new b_(i,this.vcr),this.loaderTplHandler.attachView())}}ngOnChanges(e){this.strategy==="attribute"&&Object.keys(e).some(r=>!e[r].firstChange)&&this.attributeStrategy()}attributeStrategy(){this.detachLoader(),this.renderer.setProperty(this.host.nativeElement,"innerText",this.service.translate(this.key,this.params,this.currentLang))}structuralStrategy(e,i){this.memo.clear();let r=this.getTranslateFn(e,i);this.view?(this.view.context.$implicit=r,this.view.context.currentLang=this.currentLang):(this.detachLoader(),this.view=this.vcr.createEmbeddedView(this.tpl,{$implicit:r,currentLang:this.currentLang}))}getTranslateFn(e,i){return(r,o)=>{let s=i?`${i}.${r}`:r,a=o?`${s}${JSON.stringify(o)}`:s;return this.memo.has(a)||this.memo.set(a,this.service.translate(s,o,e)),this.memo.get(a)}}resolveLoadingContent(){return this.inlineTpl||this.providedLoadingTpl}ngOnDestroy(){this.memo.clear()}detachLoader(){this.loaderTplHandler?.detachView()}resolveScope(e,i){let r=this.scopeResolver.resolve({inline:this.inlineScope,provider:i});this.path=this.langResolver.resolveLangPath(e,r);let o=y_(i,r);return this.service._loadDependencies(this.path,o)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t,selectors:[["","transloco",""]],inputs:{key:[0,"transloco","key"],params:[0,"translocoParams","params"],inlineScope:[0,"translocoScope","inlineScope"],inlineRead:[0,"translocoRead","inlineRead"],prefix:[0,"translocoPrefix","prefix"],inlineLang:[0,"translocoLang","inlineLang"],inlineTpl:[0,"translocoLoadingTpl","inlineTpl"]},features:[Xe]})}return t})(),ls=(()=>{class t{service;providerScope;providerLang;cdr;subscription=null;lastValue="";lastKey;path;langResolver=new zu;scopeResolver;constructor(e,i,r,o){this.service=e,this.providerScope=i,this.providerLang=r,this.cdr=o,this.scopeResolver=new Uu(this.service)}transform(e,i,r){if(!e)return e;let o=i?`${e}${JSON.stringify(i)}`:e;if(o===this.lastKey)return this.lastValue;this.lastKey=o,this.subscription?.unsubscribe();let s=lx(this.service,this.providerLang||r);return this.subscription=this.service.langChanges$.pipe(ye(a=>{let l=this.langResolver.resolve({inline:r,provider:this.providerLang,active:a});return Array.isArray(this.providerScope)?$n(this.providerScope.map(c=>this.resolveScope(l,c))):this.resolveScope(l,this.providerScope)}),cx(s)).subscribe(()=>this.updateValue(e,i)),this.lastValue}ngOnDestroy(){this.subscription?.unsubscribe(),this.subscription=null}updateValue(e,i){let r=this.langResolver.resolveLangBasedOnScope(this.path);this.lastValue=this.service.translate(e,i,r),this.cdr.markForCheck()}resolveScope(e,i){let r=this.scopeResolver.resolve({inline:void 0,provider:i});this.path=this.langResolver.resolveLangPath(e,r);let o=y_(i,r);return this.service._loadDependencies(this.path,o)}static \u0275fac=function(i){return new(i||t)(Ve(as,16),Ve(fx,24),Ve(ux,24),Ve(be,16))};static \u0275pipe=Cd({name:"transloco",type:t,pure:!1})}return t})();var hx=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=M({type:t});static \u0275inj=I({})}return t})();function px(t){let n=[B1(I1),V1(M1),H1(T1),j1(k1)];return t.config&&n.push(P1(t.config)),t.loader&&n.push(L1(t.loader)),n}function P1(t){return vt([{provide:ss,useValue:E1(t)}])}function L1(t){return vt([{provide:JD,useClass:t}])}function B1(t){return vt([{provide:rx,useClass:t,deps:[ss]}])}function j1(t){return vt([{provide:ax,useClass:t,deps:[ss]}])}function V1(t){return vt([{provide:ox,useClass:t}])}function H1(t){return vt([{provide:sx,useClass:t}])}function gx(){let t=z1();if(!(!t||!nx()))return t.indexOf("-")!==-1&&(t=t.split("-")[0]),t.indexOf("_")!==-1&&(t=t.split("_")[0]),t}function z1(){if(!nx())return"";let t=window.navigator;return t.languages?.[0]??t.language}var Gu=class t{title="gwt-arg_randomizer";swUpdate=d(bu);snackbar=d(KD);translocoService=d(as);ngOnInit(){this.swUpdate.unrecoverable.subscribe(n=>{this.snackbar.open(`An error occurred that we cannot recover from:
`+n.reason+`

Please reload the page.`,"Reload").onAction().subscribe(()=>{window.location.reload()}),console.debug(`An error occurred that we cannot recover from:
`+n.reason+`

Please reload the page.`)}),this.swUpdate.versionUpdates.pipe(he(n=>n.type==="VERSION_DETECTED")).subscribe(()=>{this.snackbar.open(this.translocoService.translate("messages.update-available"),"Reload").onAction().subscribe(()=>{window.location.reload()})})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["app-root"]],decls:1,vars:0,template:function(e,i){e&1&&se(0,"router-outlet")},dependencies:[ko,za,hx],encapsulation:2})};var Wu=class t{http=d(No);getTranslation(n){return this.http.get(`i18n/${n}.json`)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})};var qu=class t{playerCount=new q;neutralBuildings=[{title:"A",sides:[{title:"front"}]},{title:"B",sides:[{title:"front"}]},{title:"C",sides:[{title:"front"}]},{title:"D",sides:[{title:"front"}]},{title:"E",sides:[{title:"front"}]},{title:"F",sides:[{title:"front"}]},{title:"G",sides:[{title:"front"}]},{title:"H",sides:[{title:"front"}]}];playerBuildings=[{title:"1",sides:[{title:"a"},{title:"b"}]},{title:"2",sides:[{title:"a"},{title:"b"}]},{title:"3",sides:[{title:"a"},{title:"b"}]},{title:"4",sides:[{title:"a"},{title:"b"}]},{title:"5",sides:[{title:"a"},{title:"b"}]},{title:"6",sides:[{title:"a"},{title:"b"}]},{title:"7",sides:[{title:"a"},{title:"b"}]},{title:"8",sides:[{title:"a"},{title:"b"}]},{title:"9",sides:[{title:"a"},{title:"b"}]},{title:"10",sides:[{title:"a"},{title:"b"}]}];stationMasters=[{title:"1",sides:[{title:"front",image:"img/station-master-01.png"}]},{title:"2",sides:[{title:"front",image:"img/station-master-02.png"}]},{title:"3",sides:[{title:"front",image:"img/station-master-03.png"}]},{title:"4",sides:[{title:"front",image:"img/station-master-04.png"}]},{title:"5",sides:[{title:"front",image:"img/station-master-05.png"}]},{title:"6",sides:[{title:"front",image:"img/station-master-06.png"}]},{title:"7",sides:[{title:"front",image:"img/station-master-07.png"}]},{title:"8",sides:[{title:"front",image:"img/station-master-08.png"}]}];cities=[{title:"Le Havre",sides:[{title:"a"},{title:"b"}]},{title:"Rotterdam",sides:[{title:"a"},{title:"b"}]},{title:"Liverpool",sides:[{title:"a"},{title:"b"}]}];getRandomNeutralBuildingOrder(){return this.shuffleArray(this.neutralBuildings)}getRandomStationMasters(){let n=[],e=this.shuffleArray(this.stationMasters);for(let i=0;i<5;i++)n.push(e.pop());return n}getRandomPlayerBuildings(){let n=JSON.parse(JSON.stringify(this.playerBuildings));return n.forEach(e=>{e.sides.splice(Math.floor(Math.random()*e.sides.length),1)}),n}getRandomCities(){let n=JSON.parse(JSON.stringify(this.cities));return n.forEach(e=>{e.sides.splice(Math.floor(Math.random()*e.sides.length),1)}),n}shuffleArray(n){let e=n.slice();for(let i,r,o=e.length;o;i=Math.floor(Math.random()*o),r=e[--o],e[o]=e[i],e[i]=r);return e}static \u0275fac=function(e){return new(e||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})};var Qu=class t{getNumber(n){let e=this.getString(n);if(e===null)return null;let i=Number(e);return Number.isFinite(i)?i:null}setNumber(n,e){this.setString(n,String(e))}getString(n){return this.isStorageAvailable()?localStorage.getItem(n):null}setString(n,e){this.isStorageAvailable()&&localStorage.setItem(n,e)}isStorageAvailable(){return typeof window<"u"&&typeof localStorage<"u"}static \u0275fac=function(e){return new(e||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})};var _x=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=M({type:t});static \u0275inj=I({imports:[nl]})}return t})();var fl=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new C;constructor(n=!1,e,i=!0,r){this._multiple=n,this._emitChanges=i,this.compareWith=r,e&&e.length&&(n?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...n){this._verifyValueAssignment(n),n.forEach(i=>this._markSelected(i));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...n){this._verifyValueAssignment(n),n.forEach(i=>this._unmarkSelected(i));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...n){this._verifyValueAssignment(n);let e=this.selected,i=new Set(n.map(o=>this._getConcreteValue(o)));n.forEach(o=>this._markSelected(o)),e.filter(o=>!i.has(this._getConcreteValue(o,i))).forEach(o=>this._unmarkSelected(o));let r=this._hasQueuedChanges();return this._emitChangeEvent(),r}toggle(n){return this.isSelected(n)?this.deselect(n):this.select(n)}clear(n=!0){this._unmarkAll();let e=this._hasQueuedChanges();return n&&this._emitChangeEvent(),e}isSelected(n){return this._selection.has(this._getConcreteValue(n))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(n){this._multiple&&this.selected&&this._selected.sort(n)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(n){n=this._getConcreteValue(n),this.isSelected(n)||(this._multiple||this._unmarkAll(),this.isSelected(n)||this._selection.add(n),this._emitChanges&&this._selectedToEmit.push(n))}_unmarkSelected(n){n=this._getConcreteValue(n),this.isSelected(n)&&(this._selection.delete(n),this._emitChanges&&this._deselectedToEmit.push(n))}_unmarkAll(){this.isEmpty()||this._selection.forEach(n=>this._unmarkSelected(n))}_verifyValueAssignment(n){n.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(n,e){if(this.compareWith){e=e??this._selection;for(let i of e)if(this.compareWith(n,i))return i;return n}else return n}};var w_=(()=>{class t{_listeners=[];notify(e,i){for(let r of this._listeners)r(e,i)}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(i=>e!==i)}}ngOnDestroy(){this._listeners=[]}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var vx=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=M({type:t});static \u0275inj=I({imports:[_x,re]})}return t})();var C_=class{_box;_destroyed=new C;_resizeSubject=new C;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new X(e=>{let i=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),i.unsubscribe(),this._elementObservables.delete(n)}}).pipe(he(e=>e.some(i=>i.target===n)),lr({bufferSize:1,refCount:!0}),ce(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},bx=(()=>{class t{_cleanupErrorListener;_observers=new Map;_ngZone=d(L);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,i){let r=i?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new C_(r)),this._observers.get(r).observe(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var U1=["notch"],$1=["matFormFieldNotchedOutline",""],G1=["*"],yx=["iconPrefixContainer"],wx=["textPrefixContainer"],Cx=["iconSuffixContainer"],Dx=["textSuffixContainer"],W1=["textField"],q1=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],Q1=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function Y1(t,n){t&1&&se(0,"span",21)}function K1(t,n){if(t&1&&(g(0,"label",20),O(1,1),G(2,Y1,1,0,"span",21),b()),t&2){let e=A(2);J("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),ne("for",e._control.disableAutomaticLabeling?null:e._control.id),p(2),W(!e.hideRequiredMarker&&e._control.required?2:-1)}}function Z1(t,n){if(t&1&&G(0,K1,3,5,"label",20),t&2){let e=A();W(e._hasFloatingLabel()?0:-1)}}function X1(t,n){t&1&&se(0,"div",7)}function J1(t,n){}function eF(t,n){if(t&1&&xt(0,J1,0,0,"ng-template",13),t&2){A(2);let e=Et(1);J("ngTemplateOutlet",e)}}function tF(t,n){if(t&1&&(g(0,"div",9),G(1,eF,1,1,null,13),b()),t&2){let e=A();J("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),p(),W(e._forceDisplayInfixLabel()?-1:1)}}function nF(t,n){t&1&&(g(0,"div",10,2),O(2,2),b())}function iF(t,n){t&1&&(g(0,"div",11,3),O(2,3),b())}function rF(t,n){}function oF(t,n){if(t&1&&xt(0,rF,0,0,"ng-template",13),t&2){A();let e=Et(1);J("ngTemplateOutlet",e)}}function sF(t,n){t&1&&(g(0,"div",14,4),O(2,4),b())}function aF(t,n){t&1&&(g(0,"div",15,5),O(2,5),b())}function lF(t,n){t&1&&se(0,"div",16)}function cF(t,n){t&1&&(g(0,"div",18),O(1,6),b())}function dF(t,n){if(t&1&&(g(0,"mat-hint",22),x(1),b()),t&2){let e=A(2);J("id",e._hintLabelId),p(),ve(e.hintLabel)}}function uF(t,n){if(t&1&&(g(0,"div",19),G(1,dF,2,2,"mat-hint",22),O(2,7),se(3,"div",23),O(4,8),b()),t&2){let e=A();p(),W(e.hintLabel?1:-1)}}var cs=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t,selectors:[["mat-label"]]})}return t})(),fF=new v("MatError");var Ku=(()=>{class t{align="start";id=d(Ue).getId("mat-mdc-hint-");static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(i,r){i&2&&(Vt("id",r.id),ne("align",null),P("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return t})(),mF=new v("MatPrefix");var hF=new v("MatSuffix");var kx=new v("FloatingLabelParent"),xx=(()=>{class t{_elementRef=d(F);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=d(bx);_ngZone=d(L);_parent=d(kx);_resizeSubscription=new pe;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return pF(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(i,r){i&2&&P("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return t})();function pF(t){let n=t;if(n.offsetParent!==null)return n.scrollWidth;let e=n.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let i=e.scrollWidth;return e.remove(),i}var Ex="mdc-line-ripple--active",Yu="mdc-line-ripple--deactivating",Ix=(()=>{class t{_elementRef=d(F);_cleanupTransitionEnd;constructor(){let e=d(L),i=d(Be);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=i.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Yu),e.add(Ex)}deactivate(){this._elementRef.nativeElement.classList.add(Yu)}_handleTransitionEnd=e=>{let i=this._elementRef.nativeElement.classList,r=i.contains(Yu);e.propertyName==="opacity"&&r&&i.remove(Ex,Yu)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return t})(),Sx=(()=>{class t{_elementRef=d(F);_ngZone=d(L);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,i=e.querySelector(".mdc-floating-label");i?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(i.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>i.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let i=this._notch.nativeElement;!this.open||!e?i.style.width="":i.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(i,r){if(i&1&&Re(U1,5),i&2){let o;U(o=$())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(i,r){i&2&&P("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:$1,ngContentSelectors:G1,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(i,r){i&1&&(de(),jt(0,"div",1),Qe(1,"div",2,0),O(3),st(),jt(4,"div",3))},encapsulation:2,changeDetection:0})}return t})(),D_=(()=>{class t{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t})}return t})();var x_=new v("MatFormField"),gF=new v("MAT_FORM_FIELD_DEFAULT_OPTIONS"),Mx="fill",_F="auto",Tx="fixed",vF="translateY(-50%)",Qr=(()=>{class t{_elementRef=d(F);_changeDetectorRef=d(be);_platform=d(ge);_idGenerator=d(Ue);_ngZone=d(L);_defaults=d(gF,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=va("iconPrefixContainer");_textPrefixContainerSignal=va("textPrefixContainer");_iconSuffixContainerSignal=va("iconSuffixContainer");_textSuffixContainerSignal=va("textSuffixContainer");_prefixSuffixContainers=Ht(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=bw(cs);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=Nt(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||_F}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let i=e||this._defaults?.appearance||Mx;this._appearanceSignal.set(i)}_appearanceSignal=xe(Mx);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||Tx}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||Tx}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new C;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=Ne();constructor(){let e=this._defaults,i=d(ct);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),Dr(()=>this._currentDirection=i.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=Ht(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let i=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),i.controlType&&this._elementRef.nativeElement.classList.add(r+i.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=i.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=i.stateChanges.pipe(Ze([void 0,void 0]),N(()=>[i.errorState,i.userAriaDescribedBy]),ac(),he(([[o,s],[a,l]])=>o!==a||s!==l)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),i.ngControl&&i.ngControl.valueChanges&&(this._valueChanges=i.ngControl.valueChanges.pipe(ce(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Ut(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){Cw({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=Ht(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let i=this._control?this._control.ngControl:null;return i&&i[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(a=>a.align==="start"):null,s=this._hintChildren?this._hintChildren.find(a=>a.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),s&&e.push(s.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let i=this._control.describedByIds,r;if(i){let o=this._describedByIds||e;r=e.concat(i.filter(s=>s&&!o.includes(s)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,i=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,s=e?.getBoundingClientRect().width??0,a=i?.getBoundingClientRect().width??0,l=r?.getBoundingClientRect().width??0,c=o?.getBoundingClientRect().width??0,u=this._currentDirection==="rtl"?"-1":"1",f=`${s+a}px`,h=`calc(${u} * (${f} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,y=`var(--mat-mdc-form-field-label-transform, ${vF} translateX(${h}))`,S=s+a+l+c;return[y,S]}_writeOutlinedLabelStyles(e){if(e!==null){let[i,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=i),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let i=e.getRootNode();return i&&i!==e}return document.documentElement.contains(e)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["mat-form-field"]],contentQueries:function(i,r,o){if(i&1&&(Sd(o,r._labelChild,cs,5),Ye(o,D_,5)(o,mF,5)(o,hF,5)(o,fF,5)(o,Ku,5)),i&2){Td();let s;U(s=$())&&(r._formFieldControl=s.first),U(s=$())&&(r._prefixChildren=s),U(s=$())&&(r._suffixChildren=s),U(s=$())&&(r._errorChildren=s),U(s=$())&&(r._hintChildren=s)}},viewQuery:function(i,r){if(i&1&&(Md(r._iconPrefixContainerSignal,yx,5)(r._textPrefixContainerSignal,wx,5)(r._iconSuffixContainerSignal,Cx,5)(r._textSuffixContainerSignal,Dx,5),Re(W1,5)(yx,5)(wx,5)(Cx,5)(Dx,5)(xx,5)(Sx,5)(Ix,5)),i&2){Td(4);let o;U(o=$())&&(r._textField=o.first),U(o=$())&&(r._iconPrefixContainer=o.first),U(o=$())&&(r._textPrefixContainer=o.first),U(o=$())&&(r._iconSuffixContainer=o.first),U(o=$())&&(r._textSuffixContainer=o.first),U(o=$())&&(r._floatingLabel=o.first),U(o=$())&&(r._notchedOutline=o.first),U(o=$())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(i,r){i&2&&P("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[Ie([{provide:x_,useExisting:t},{provide:kx,useExisting:t}])],ngContentSelectors:Q1,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(i,r){if(i&1&&(de(q1),xt(0,Z1,1,1,"ng-template",null,0,kd),g(2,"div",6,1),ee("click",function(s){return r._control.onContainerClick(s)}),G(4,X1,1,0,"div",7),g(5,"div",8),G(6,tF,2,2,"div",9),G(7,nF,3,0,"div",10),G(8,iF,3,0,"div",11),g(9,"div",12),G(10,oF,1,1,null,13),O(11),b(),G(12,sF,3,0,"div",14),G(13,aF,3,0,"div",15),b(),G(14,lF,1,0,"div",16),b(),g(15,"div",17),G(16,cF,2,0,"div",18)(17,uF,5,1,"div",19),b()),i&2){let o;p(2),P("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),p(2),W(!r._hasOutline()&&!r._control.disabled?4:-1),p(2),W(r._hasOutline()?6:-1),p(),W(r._hasIconPrefix?7:-1),p(),W(r._hasTextPrefix?8:-1),p(2),W(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),p(2),W(r._hasTextSuffix?12:-1),p(),W(r._hasIconSuffix?13:-1),p(),W(r._hasOutline()?-1:14),p(),P("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let s=r._getSubscriptMessageType();p(),W((o=s)==="error"?16:o==="hint"?17:-1)}},dependencies:[xx,Sx,qp,Ix,Ku],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2,changeDetection:0})}return t})();var Lx=new v("");function S_(t){return t==null||M_(t)===0}function M_(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var df=new v(""),Bx=new v(""),bF=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Xu=class{static min(n){return yF(n)}static max(n){return wF(n)}static required(n){return CF(n)}static requiredTrue(n){return DF(n)}static email(n){return xF(n)}static minLength(n){return EF(n)}static maxLength(n){return IF(n)}static pattern(n){return SF(n)}static nullValidator(n){return jx()}static compose(n){return Gx(n)}static composeAsync(n){return Wx(n)}};function yF(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e<t?{min:{min:t,actual:n.value}}:null}}function wF(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e>t?{max:{max:t,actual:n.value}}:null}}function CF(t){return S_(t.value)?{required:!0}:null}function DF(t){return t.value===!0?null:{required:!0}}function xF(t){return S_(t.value)||bF.test(t.value)?null:{email:!0}}function EF(t){return n=>{let e=n.value?.length??M_(n.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function IF(t){return n=>{let e=n.value?.length??M_(n.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function SF(t){if(!t)return jx;let n,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),n=new RegExp(e)):(e=t.toString(),n=t),i=>{if(S_(i.value))return null;let r=i.value;return n.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function jx(t){return null}function Vx(t){return t!=null}function Hx(t){return Ni(t)?Ae(t):t}function zx(t){let n={};return t.forEach(e=>{n=e!=null?_(_({},n),e):n}),Object.keys(n).length===0?null:n}function Ux(t,n){return n.map(e=>e(t))}function MF(t){return!t.validate}function $x(t){return t.map(n=>MF(n)?n:e=>n.validate(e))}function Gx(t){if(!t)return null;let n=t.filter(Vx);return n.length==0?null:function(e){return zx(Ux(e,n))}}function T_(t){return t!=null?Gx($x(t)):null}function Wx(t){if(!t)return null;let n=t.filter(Vx);return n.length==0?null:function(e){let i=Ux(e,n).map(Hx);return $n(i).pipe(N(zx))}}function k_(t){return t!=null?Wx($x(t)):null}function Rx(t,n){return t===null?[n]:Array.isArray(t)?[...t,n]:[t,n]}function qx(t){return t._rawValidators}function Qx(t){return t._rawAsyncValidators}function E_(t){return t?Array.isArray(t)?t:[t]:[]}function Ju(t,n){return Array.isArray(t)?t.includes(n):t===n}function Ax(t,n){let e=E_(n);return E_(t).forEach(r=>{Ju(e,r)||e.push(r)}),e}function Ox(t,n){return E_(n).filter(e=>!Ju(t,e))}var ef=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=T_(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=k_(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control?.reset(n)}hasError(n,e){return this.control?this.control.hasError(n,e):!1}getError(n,e){return this.control?this.control.getError(n,e):null}},fs=class extends ef{name;get formDirective(){return null}get path(){return null}},tf=class extends ef{_parent=null;name=null;valueAccessor=null};var ml="VALID",Zu="INVALID",ds="PENDING",hl="DISABLED",qi=class{},nf=class extends qi{value;source;constructor(n,e){super(),this.value=n,this.source=e}},gl=class extends qi{pristine;source;constructor(n,e){super(),this.pristine=n,this.source=e}},_l=class extends qi{touched;source;constructor(n,e){super(),this.touched=n,this.source=e}},us=class extends qi{status;source;constructor(n,e){super(),this.status=n,this.source=e}},rf=class extends qi{source;constructor(n){super(),this.source=n}},of=class extends qi{source;constructor(n){super(),this.source=n}};function Yx(t){return(uf(t)?t.validators:t)||null}function TF(t){return Array.isArray(t)?T_(t):t||null}function Kx(t,n){return(uf(n)?n.asyncValidators:t)||null}function kF(t){return Array.isArray(t)?k_(t):t||null}function uf(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function RF(t,n,e){let i=t.controls;if(!(n?Object.keys(i):i).length)throw new D(1e3,"");if(!i[e])throw new D(1001,"")}function AF(t,n,e){t._forEachChild((i,r)=>{if(e[r]===void 0)throw new D(-1002,"")})}var sf=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,e){this._assignValidators(n),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return lt(this.statusReactive)}set status(n){lt(()=>this.statusReactive.set(n))}_status=Ht(()=>this.statusReactive());statusReactive=xe(void 0);get valid(){return this.status===ml}get invalid(){return this.status===Zu}get pending(){return this.status===ds}get disabled(){return this.status===hl}get enabled(){return this.status!==hl}errors;get pristine(){return lt(this.pristineReactive)}set pristine(n){lt(()=>this.pristineReactive.set(n))}_pristine=Ht(()=>this.pristineReactive());pristineReactive=xe(!0);get dirty(){return!this.pristine}get touched(){return lt(this.touchedReactive)}set touched(n){lt(()=>this.touchedReactive.set(n))}_touched=Ht(()=>this.touchedReactive());touchedReactive=xe(!1);get untouched(){return!this.touched}_events=new C;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(Ax(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(Ax(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(Ox(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(Ox(n,this._rawAsyncValidators))}hasValidator(n){return Ju(this._rawValidators,n)}hasAsyncValidator(n){return Ju(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let e=this.touched===!1;this.touched=!0;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched(Q(_({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new _l(!0,i))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(n))}markAsUntouched(n={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:i})}),n.onlySelf||this._parent?._updateTouched(n,i),e&&n.emitEvent!==!1&&this._events.next(new _l(!1,i))}markAsDirty(n={}){let e=this.pristine===!0;this.pristine=!1;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty(Q(_({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new gl(!1,i))}markAsPristine(n={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),n.onlySelf||this._parent?._updatePristine(n,i),e&&n.emitEvent!==!1&&this._events.next(new gl(!0,i))}markAsPending(n={}){this.status=ds;let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new us(this.status,e)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending(Q(_({},n),{sourceControl:e}))}disable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=hl,this.errors=null,this._forEachChild(r=>{r.disable(Q(_({},n),{onlySelf:!0}))}),this._updateValue();let i=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new nf(this.value,i)),this._events.next(new us(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Q(_({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=ml,this._forEachChild(i=>{i.enable(Q(_({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(Q(_({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(n,e){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===ml||this.status===ds)&&this._runAsyncValidator(i,n.emitEvent)}let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new nf(this.value,e)),this._events.next(new us(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity(Q(_({},n),{sourceControl:e}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?hl:ml}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,e){if(this.asyncValidator){this.status=ds,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:n!==!1};let i=Hx(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(n){let e=n;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((i,r)=>i&&i._find(r),this)}getError(n,e){let i=e?this.get(e):this;return i?.errors?i.errors[n]:null}hasError(n,e){return!!this.getError(n,e)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,e,i){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||i)&&this._events.next(new us(this.status,e)),this._parent&&this._parent._updateControlsErrors(n,e,i)}_initObservables(){this.valueChanges=new q,this.statusChanges=new q}_calculateStatus(){return this._allControlsDisabled()?hl:this.errors?Zu:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(ds)?ds:this._anyControlsHaveStatus(Zu)?Zu:ml}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,e){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,n.onlySelf||this._parent?._updatePristine(n,e),r&&this._events.next(new gl(this.pristine,e))}_updateTouched(n={},e){this.touched=this._anyControlsTouched(),this._events.next(new _l(this.touched,e)),n.onlySelf||this._parent?._updateTouched(n,e)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){uf(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=TF(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=kF(this._rawAsyncValidators)}},af=class extends sf{constructor(n,e,i){super(Yx(e),Kx(i,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,e){return this.controls[n]?this.controls[n]:(this.controls[n]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(n,e,i={}){this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(n,e={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(n,e,i={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],e&&this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,e={}){AF(this,!0,n),Object.keys(n).forEach(i=>{RF(this,!0,i),this.controls[i].setValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(n,e={}){n!=null&&(Object.keys(n).forEach(i=>{let r=this.controls[i];r&&r.patchValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n={},e={}){this._forEachChild((i,r)=>{i.reset(n?n[r]:null,Q(_({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new of(this))}getRawValue(){return this._reduceChildren({},(n,e,i)=>(n[i]=e.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(e,i)=>i._syncPendingControls()?!0:e);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(e=>{let i=this.controls[e];i&&n(i,e)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[e,i]of Object.entries(this.controls))if(this.contains(e)&&n(i))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(e,i,r)=>((i.enabled||this.disabled)&&(e[r]=i.value),e))}_reduceChildren(n,e){let i=n;return this._forEachChild((r,o)=>{i=e(i,r,o)}),i}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}};var Zx=new v("",{factory:()=>Xx}),Xx="always";function I_(t,n,e=Xx){R_(t,n),n.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&n.valueAccessor.setDisabledState?.(t.disabled),NF(t,n),PF(t,n),FF(t,n),OF(t,n)}function Nx(t,n,e=!0){let i=()=>{};n?.valueAccessor?.registerOnChange(i),n?.valueAccessor?.registerOnTouched(i),cf(t,n),t&&(n._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function lf(t,n){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n)})}function OF(t,n){if(n.valueAccessor.setDisabledState){let e=i=>{n.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(e),n._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function R_(t,n){let e=qx(t);n.validator!==null?t.setValidators(Rx(e,n.validator)):typeof e=="function"&&t.setValidators([e]);let i=Qx(t);n.asyncValidator!==null?t.setAsyncValidators(Rx(i,n.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();lf(n._rawValidators,r),lf(n._rawAsyncValidators,r)}function cf(t,n){let e=!1;if(t!==null){if(n.validator!==null){let r=qx(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==n.validator);o.length!==r.length&&(e=!0,t.setValidators(o))}}if(n.asyncValidator!==null){let r=Qx(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==n.asyncValidator);o.length!==r.length&&(e=!0,t.setAsyncValidators(o))}}}let i=()=>{};return lf(n._rawValidators,i),lf(n._rawAsyncValidators,i),e}function NF(t,n){n.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&Jx(t,n)})}function FF(t,n){n.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&Jx(t,n),t.updateOn!=="submit"&&t.markAsTouched()})}function Jx(t,n){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function PF(t,n){let e=(i,r)=>{n.valueAccessor.writeValue(i),r&&n.viewToModelUpdate(i)};t.registerOnChange(e),n._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function eE(t,n){t==null,R_(t,n)}function LF(t,n){return cf(t,n)}function tE(t,n){t._syncPendingControls(),n.forEach(e=>{let i=e.control;i.updateOn==="submit"&&i._pendingChange&&(e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function BF(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}var jF={provide:fs,useExisting:un(()=>A_)},pl=Promise.resolve(),A_=(()=>{class t extends fs{callSetDisabledState;get submitted(){return lt(this.submittedReactive)}_submitted=Ht(()=>this.submittedReactive());submittedReactive=xe(!1);_directives=new Set;form;ngSubmit=new q;options;constructor(e,i,r){super(),this.callSetDisabledState=r,this.form=new af({},T_(e),k_(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){pl.then(()=>{let i=this._findContainer(e.path);e.control=i.registerControl(e.name,e.control),I_(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){pl.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){pl.then(()=>{let i=this._findContainer(e.path),r=new af({});eE(r,e),i.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){pl.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,i){pl.then(()=>{this.form.get(e.path).setValue(i)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),tE(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new rf(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(i){return new(i||t)(Ve(df,10),Ve(Bx,10),Ve(Zx,8))};static \u0275dir=j({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(i,r){i&1&&ee("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Ie([jF]),ke]})}return t})();function Fx(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function Px(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var VF=class extends sf{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,e,i){super(Yx(e),Kx(i,e)),this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),uf(e)&&(e.nonNullable||e.initialValueIsDefault)&&(Px(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,e={}){this.value=this._pendingValue=n,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(n,e={}){this.setValue(n,e)}reset(n=this.defaultValue,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new of(this))}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){Fx(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){Fx(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){Px(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var HF=t=>t instanceof VF;var zF=(()=>{class t extends fs{callSetDisabledState;get submitted(){return lt(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=Ht(()=>this._submittedReactive());_submittedReactive=xe(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,i,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(i)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(cf(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let i=this.form.get(e.path);return I_(i,e,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),i}getControl(e){return this.form.get(e.path)}removeControl(e){Nx(e.control||null,e,!1),BF(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,i){this.form.get(e.path).setValue(i)}onReset(){this.resetForm()}resetForm(e=void 0,i={}){this.form.reset(e,i),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,tE(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new rf(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let i=e.control,r=this.form.get(e.path);i!==r&&(Nx(i||null,e),HF(r)&&(I_(r,e,this.callSetDisabledState),e.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let i=this.form.get(e.path);eE(i,e),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let i=this.form?.get(e.path);i&&LF(i,e)&&i.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){R_(this.form,this),this._oldForm&&cf(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(i){return new(i||t)(Ve(df,10),Ve(Bx,10),Ve(Zx,8))};static \u0275dir=j({type:t,features:[ke,Xe]})}return t})();var UF={provide:fs,useExisting:un(()=>O_)},O_=(()=>{class t extends zF{form=null;ngSubmit=new q;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=it(t)))(r||t)}})();static \u0275dir=j({type:t,selectors:[["","formGroup",""]],hostBindings:function(i,r){i&1&&ee("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Ie([UF]),ke]})}return t})();var nE=(()=>{class t{_animationsDisabled=Ne();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(i,r){i&2&&P("mat-pseudo-checkbox-indeterminate",r.state==="indeterminate")("mat-pseudo-checkbox-checked",r.state==="checked")("mat-pseudo-checkbox-disabled",r.disabled)("mat-pseudo-checkbox-minimal",r.appearance==="minimal")("mat-pseudo-checkbox-full",r.appearance==="full")("_mat-animation-noopable",r._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(i,r){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2,changeDetection:0})}return t})();var $F=["text"],GF=[[["mat-icon"]],"*"],WF=["mat-icon","*"];function qF(t,n){if(t&1&&se(0,"mat-pseudo-checkbox",1),t&2){let e=A();J("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function QF(t,n){if(t&1&&se(0,"mat-pseudo-checkbox",3),t&2){let e=A();J("disabled",e.disabled)}}function YF(t,n){if(t&1&&(g(0,"span",4),x(1),b()),t&2){let e=A();p(),oe("(",e.group.label,")")}}var F_=new v("MAT_OPTION_PARENT_COMPONENT"),P_=new v("MatOptgroup");var N_=class{source;isUserInput;constructor(n,e=!1){this.source=n,this.isUserInput=e}},Qi=(()=>{class t{_element=d(F);_changeDetectorRef=d(be);_parent=d(F_,{optional:!0});group=d(P_,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=d(Ue).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=xe(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new q;_text;_stateChanges=new C;constructor(){let e=d(Je);e.load(Vn),e.load(Qo),this._signalDisableRipple=!!this._parent&&Oi(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,i){let r=this._getHostElement();typeof r.focus=="function"&&r.focus(i)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!St(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new N_(this,e))}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["mat-option"]],viewQuery:function(i,r){if(i&1&&Re($F,7),i&2){let o;U(o=$())&&(r._text=o.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(i,r){i&1&&ee("click",function(){return r._selectViaInteraction()})("keydown",function(s){return r._handleKeydown(s)}),i&2&&(Vt("id",r.id),ne("aria-selected",r.selected)("aria-disabled",r.disabled.toString()),P("mdc-list-item--selected",r.selected)("mat-mdc-option-multiple",r.multiple)("mat-mdc-option-active",r.active)("mdc-list-item--disabled",r.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",Z]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:WF,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(i,r){i&1&&(de(GF),G(0,qF,1,2,"mat-pseudo-checkbox",1),O(1),g(2,"span",2,0),O(4,1),b(),G(5,QF,1,1,"mat-pseudo-checkbox",3),G(6,YF,2,1,"span",4),se(7,"div",5)),i&2&&(W(r.multiple?0:-1),p(5),W(!r.multiple&&r.selected&&!r.hideSingleSelectionIndicator?5:-1),p(),W(r.group&&r.group._inert?6:-1),p(),J("matRippleTrigger",r._getHostElement())("matRippleDisabled",r.disabled||r.disableRipple))},dependencies:[nE,Gi],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--mat-option-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-option-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-option-label-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return t})();function iE(t,n,e){if(e.length){let i=n.toArray(),r=e.toArray(),o=0;for(let s=0;s<t+1;s++)i[s].group&&i[s].group===r[o]&&o++;return o}return 0}function rE(t,n,e,i){return t<e?t:t+n>e+i?Math.max(0,t-i+n):e}var oE=(()=>{class t{isErrorState(e,i){return!!(e&&e.invalid&&(e.touched||i&&i.submitted))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ff=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(n,e,i,r,o){this._defaultMatcher=n,this.ngControl=e,this._parentFormGroup=i,this._parentForm=r,this._stateChanges=o}updateErrorState(){let n=this.errorState,e=this._parentFormGroup||this._parentForm,i=this.matcher||this._defaultMatcher,r=this.ngControl?this.ngControl.control:null,o=i?.isErrorState(r,e)??!1;o!==n&&(this.errorState=o,this._stateChanges.next())}};var sE=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=M({type:t});static \u0275inj=I({imports:[Zo,Qr,re]})}return t})();var mf=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=M({type:t});static \u0275inj=I({imports:[re]})}return t})();var L_=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=M({type:t});static \u0275inj=I({imports:[Hn,mf,Qi,re]})}return t})();var JF=["trigger"],eP=["panel"],tP=[[["mat-select-trigger"]],"*"],nP=["mat-select-trigger","*"];function iP(t,n){if(t&1&&(g(0,"span",4),x(1),b()),t&2){let e=A();p(),ve(e.placeholder)}}function rP(t,n){t&1&&O(0)}function oP(t,n){if(t&1&&(g(0,"span",11),x(1),b()),t&2){let e=A(2);p(),ve(e.triggerValue)}}function sP(t,n){if(t&1&&(g(0,"span",5),G(1,rP,1,0)(2,oP,2,1,"span",11),b()),t&2){let e=A();p(),W(e.customTrigger?1:2)}}function aP(t,n){if(t&1){let e=at();g(0,"div",12,1),ee("keydown",function(r){Pe(e);let o=A();return Le(o._handleKeydown(r))}),O(2,1),b()}if(t&2){let e=A();pt(e.panelClass),P("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",(e._parentFormField==null?null:e._parentFormField.color)==="primary")("mat-accent",(e._parentFormField==null?null:e._parentFormField.color)==="accent")("mat-warn",(e._parentFormField==null?null:e._parentFormField.color)==="warn")("mat-undefined",!(e._parentFormField!=null&&e._parentFormField.color)),ne("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var lP=new v("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let t=d(H);return()=>fi(t)}}),cP=new v("MAT_SELECT_CONFIG"),dP=new v("MatSelectTrigger"),B_=class{source;value;constructor(n,e){this.source=n,this.value=e}},hf=(()=>{class t{_viewportRuler=d(ln);_changeDetectorRef=d(be);_elementRef=d(F);_dir=d(ct,{optional:!0});_idGenerator=d(Ue);_renderer=d(Be);_parentFormField=d(x_,{optional:!0});ngControl=d(tf,{self:!0,optional:!0});_liveAnnouncer=d(Ya);_defaultOptions=d(cP,{optional:!0});_animationsDisabled=Ne();_popoverLocation;_initialized=new C;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let i=this.options.toArray()[e];if(i){let r=this.panel.nativeElement,o=iE(e,this.options,this.optionGroups),s=i._getHostElement();e===0&&o===1?r.scrollTop=0:r.scrollTop=rE(s.offsetTop,s.offsetHeight,r.scrollTop,r.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new B_(this,e)}_scrollStrategyFactory=d(lP);_panelOpen=!1;_compareWith=(e,i)=>e===i;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new C;_errorStateTracker;stateChanges=new C;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=xe(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(Xu.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=sr(()=>{let e=this.options;return e?e.changes.pipe(Ze(e),ye(()=>Ut(...e.map(i=>i.onSelectionChange)))):this._initialized.pipe(ye(()=>this.optionSelectionChanges))});openedChange=new q;_openedStream=this.openedChange.pipe(he(e=>e),N(()=>{}));_closedStream=this.openedChange.pipe(he(e=>!e),N(()=>{}));selectionChange=new q;valueChange=new q;constructor(){let e=d(oE),i=d(A_,{optional:!0}),r=d(O_,{optional:!0}),o=d(new Dn("tabindex"),{optional:!0}),s=d(sl,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new ff(e,this.ngControl,r,i,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=o==null?0:parseInt(o)||0,this._popoverLocation=s?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new fl(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(ce(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(ce(this._destroy)).subscribe(e=>{e.added.forEach(i=>i.select()),e.removed.forEach(i=>i.deselect())}),this.options.changes.pipe(Ze(null),ce(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),i=this.ngControl;if(e!==this._triggerAriaLabelledBy){let r=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?r.setAttribute("aria-labelledby",e):r.removeAttribute("aria-labelledby")}i&&(this._previousControl!==i.control&&(this._previousControl!==void 0&&i.disabled!==null&&i.disabled!==this.disabled&&(this.disabled=i.disabled),this._previousControl=i.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe(Me(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}_trackedModal=null;_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let i=`${this.id}-panel`;this._trackedModal&&Mu(this._trackedModal,"aria-owns",i),Kg(e,"aria-owns",i),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;Mu(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{i(),clearTimeout(r),this._cleanupDetach=void 0};let e=this.panel.nativeElement,i=this._renderer.listen(e,"animationend",o=>{o.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),r=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(i=>i.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let i=e.keyCode,r=i===40||i===38||i===37||i===39,o=i===13||i===32,s=this._keyManager;if(!s.isTyping()&&o&&!St(e)||(this.multiple||e.altKey)&&r)e.preventDefault(),this.open();else if(!this.multiple){let a=this.selected;s.onKeydown(e);let l=this.selected;l&&a!==l&&this._liveAnnouncer.announce(l.viewValue,1e4)}}_handleOpenKeydown(e){let i=this._keyManager,r=e.keyCode,o=r===40||r===38,s=i.isTyping();if(o&&e.altKey)e.preventDefault(),this.close();else if(!s&&(r===13||r===32)&&i.activeItem&&!St(e))e.preventDefault(),i.activeItem._selectViaInteraction();else if(!s&&this._multiple&&r===65&&e.ctrlKey){e.preventDefault();let a=this.options.some(l=>!l.disabled&&!l.selected);this.options.forEach(l=>{l.disabled||(a?l.select():l.deselect())})}else{let a=i.activeItemIndex;i.onKeydown(e),this._multiple&&o&&e.shiftKey&&i.activeItem&&i.activeItemIndex!==a&&i.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!St(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(i=>i.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(i=>this._selectOptionByValue(i)),this._sortValues();else{let i=this._selectOptionByValue(e);i?this._keyManager.updateActiveItem(i):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let i=this.options.find(r=>{if(this._selectionModel.isSelected(r))return!1;try{return(r.value!=null||this.canSelectNullableOptions)&&this._compareWith(r.value,e)}catch{return!1}});return i&&this._selectionModel.select(i),i}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof ns?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new el(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=Ut(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(ce(e)).subscribe(i=>{this._onSelect(i.source,i.isUserInput),i.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),Ut(...this.options.map(i=>i._stateChanges)).pipe(ce(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,i){let r=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(r!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),i&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),i&&this.focus())),r!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((i,r)=>this.sortComparator?this.sortComparator(i,r,e):e.indexOf(i)-e.indexOf(r)),this.stateChanges.next()}}_propagateChanges(e){let i;this.multiple?i=this.selected.map(r=>r.value):i=this.selected?this.selected.value:e,this._value=i,this.valueChange.emit(i),this._onChange(i),this.selectionChange.emit(this._getChangeEvent(i)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let i=0;i<this.options.length;i++)if(!this.options.get(i).disabled){e=i;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,i=e?e+" ":"";return this.ariaLabelledby?i+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let i=this._elementRef.nativeElement;e.length?i.setAttribute("aria-describedby",e.join(" ")):i.removeAttribute("aria-describedby")}onContainerClick(e){let i=wt(e);i&&(i.tagName==="MAT-OPTION"||i.classList.contains("cdk-overlay-backdrop")||i.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["mat-select"]],contentQueries:function(i,r,o){if(i&1&&Ye(o,dP,5)(o,Qi,5)(o,P_,5),i&2){let s;U(s=$())&&(r.customTrigger=s.first),U(s=$())&&(r.options=s),U(s=$())&&(r.optionGroups=s)}},viewQuery:function(i,r){if(i&1&&Re(JF,5)(eP,5)(ju,5),i&2){let o;U(o=$())&&(r.trigger=o.first),U(o=$())&&(r.panel=o.first),U(o=$())&&(r._overlayDir=o.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(i,r){i&1&&ee("keydown",function(s){return r._handleKeydown(s)})("focus",function(){return r._onFocus()})("blur",function(){return r._onBlur()}),i&2&&(ne("id",r.id)("tabindex",r.disabled?-1:r.tabIndex)("aria-controls",r.panelOpen?r.id+"-panel":null)("aria-expanded",r.panelOpen)("aria-label",r.ariaLabel||null)("aria-required",r.required.toString())("aria-disabled",r.disabled.toString())("aria-invalid",r.errorState)("aria-activedescendant",r._getAriaActiveDescendant()),P("mat-mdc-select-disabled",r.disabled)("mat-mdc-select-invalid",r.errorState)("mat-mdc-select-required",r.required)("mat-mdc-select-empty",r.empty)("mat-mdc-select-multiple",r.multiple)("mat-select-open",r.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",Z],disableRipple:[2,"disableRipple","disableRipple",Z],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Ot(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",Z],placeholder:"placeholder",required:[2,"required","required",Z],multiple:[2,"multiple","multiple",Z],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",Z],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",Ot],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",Z]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[Ie([{provide:D_,useExisting:t},{provide:F_,useExisting:t}]),Xe],ngContentSelectors:nP,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(i,r){if(i&1&&(de(tP),g(0,"div",2,0),ee("click",function(){return r.open()}),g(3,"div",3),G(4,iP,2,1,"span",4)(5,sP,3,1,"span",5),b(),g(6,"div",6)(7,"div",7),Lt(),g(8,"svg",8),se(9,"path",9),b()()()(),xt(10,aP,3,16,"ng-template",10),ee("detach",function(){return r.close()})("backdropClick",function(){return r.close()})("overlayKeydown",function(s){return r._handleOverlayKeydown(s)})),i&2){let o=Et(1);p(3),ne("id",r._valueId),p(),W(r.empty?4:5),p(6),J("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",r._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",r._scrollStrategy)("cdkConnectedOverlayOrigin",r._preferredOverlayOrigin||o)("cdkConnectedOverlayPositions",r._positions)("cdkConnectedOverlayWidth",r._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",r._popoverLocation)}},dependencies:[ns,ju],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--mat-select-invalid-arrow-color, var(--mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--mat-select-focused-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--mat-select-panel-background-color, var(--mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2,changeDetection:0})}return t})();var pf=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=M({type:t});static \u0275inj=I({imports:[$i,L_,re,an,sE,L_]})}return t})();var fP=["tooltip"],mP=20;var hP=new v("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let t=d(H);return()=>fi(t,{scrollThrottle:mP})}}),pP=new v("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var aE="tooltip-panel",gP={passive:!0},_P=8,vP=8,bP=24,yP=200,lE=(()=>{class t{_elementRef=d(F);_ngZone=d(L);_platform=d(ge);_ariaDescriber=d(yD);_focusMonitor=d(zt);_dir=d(ct);_injector=d(H);_viewContainerRef=d(ot);_mediaMatcher=d(Ko);_document=d(z);_renderer=d(Be);_animationsDisabled=Ne();_defaultOptions=d(pP,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=wP;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=Nt(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let i=Nt(e);this._disabled!==i&&(this._disabled=i,i?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=sn(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=sn(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(e){let i=this._message;this._message=e!=null?String(e).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(i)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new C;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=_P}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(ce(this._destroyed)).subscribe(e=>{e?e==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(i=>i()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,"tooltip"),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,i){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let r=this._createOverlay(i);this._detach(),this._portal=this._portal||new zi(this._tooltipComponent,this._viewContainerRef);let o=this._tooltipInstance=r.attach(this._portal).instance;o._triggerElement=this._elementRef.nativeElement,o._mouseLeaveHideDelay=this._hideDelay,o.afterHidden().pipe(ce(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),o.show(e)}hide(e=this.hideDelay){let i=this._tooltipInstance;i&&(i.isVisible()?i.hide(e):(i._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let s=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&s._origin instanceof F)return this._overlayRef;this._detach()}let i=this._injector.get(jn).getAncestorScrollContainers(this._elementRef),r=`${this._cssClassPrefix}-${aE}`,o=Wr(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(i).withPopoverLocation("global");return o.positionChanges.pipe(ce(this._destroyed)).subscribe(s=>{this._updateCurrentPositionClass(s.connectionPair),this._tooltipInstance&&s.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=mi(this._injector,{direction:this._dir,positionStrategy:o,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,r]:r,scrollStrategy:this._injector.get(hP)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(ce(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(ce(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(ce(this._destroyed)).subscribe(s=>{s.preventDefault(),s.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(ce(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let i=e.getConfig().positionStrategy,r=this._getOrigin(),o=this._getOverlayPosition();i.withPositions([this._addOffset(_(_({},r.main),o.main)),this._addOffset(_(_({},r.fallback),o.fallback))])}_addOffset(e){let i=vP,r=!this._dir||this._dir.value=="ltr";return e.originY==="top"?e.offsetY=-i:e.originY==="bottom"?e.offsetY=i:e.originX==="start"?e.offsetX=r?-i:i:e.originX==="end"&&(e.offsetX=r?i:-i),e}_getOrigin(){let e=!this._dir||this._dir.value=="ltr",i=this.position,r;i=="above"||i=="below"?r={originX:"center",originY:i=="above"?"top":"bottom"}:i=="before"||i=="left"&&e||i=="right"&&!e?r={originX:"start",originY:"center"}:(i=="after"||i=="right"&&e||i=="left"&&!e)&&(r={originX:"end",originY:"center"});let{x:o,y:s}=this._invertPosition(r.originX,r.originY);return{main:r,fallback:{originX:o,originY:s}}}_getOverlayPosition(){let e=!this._dir||this._dir.value=="ltr",i=this.position,r;i=="above"?r={overlayX:"center",overlayY:"bottom"}:i=="below"?r={overlayX:"center",overlayY:"top"}:i=="before"||i=="left"&&e||i=="right"&&!e?r={overlayX:"end",overlayY:"center"}:(i=="after"||i=="right"&&e||i=="left"&&!e)&&(r={overlayX:"start",overlayY:"center"});let{x:o,y:s}=this._invertPosition(r.overlayX,r.overlayY);return{main:r,fallback:{overlayX:o,overlayY:s}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),He(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,i){return this.position==="above"||this.position==="below"?i==="top"?i="bottom":i==="bottom"&&(i="top"):e==="end"?e="start":e==="start"&&(e="end"),{x:e,y:i}}_updateCurrentPositionClass(e){let{overlayY:i,originX:r,originY:o}=e,s;if(i==="center"?this._dir&&this._dir.value==="rtl"?s=r==="end"?"left":"right":s=r==="start"?"left":"right":s=i==="bottom"&&o==="top"?"above":"below",s!==this._currentPosition){let a=this._overlayRef;if(a){let l=`${this._cssClassPrefix}-${aE}-`;a.removePanelClass(l+this._currentPosition),a.addPanelClass(l+s)}this._currentPosition=s}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",e=>{let i=e.targetTouches?.[0],r=i?{x:i.clientX,y:i.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let o=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,r)},this._defaultOptions?.touchLongPressShowDelay??o)})):this._addListener("mouseenter",e=>{this._setupPointerExitEventsIfNeeded();let i;e.x!==void 0&&e.y!==void 0&&(i=e),this.show(void 0,i)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener("mouseleave",e=>{let i=e.relatedTarget;(!i||!this._overlayRef?.overlayElement.contains(i))&&this.hide()}),this._addListener("wheel",e=>{if(this._isTooltipVisible()){let i=this._document.elementFromPoint(e.clientX,e.clientY),r=this._elementRef.nativeElement;i!==r&&!r.contains(i)&&this.hide()}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener("touchend",e),this._addListener("touchcancel",e)}}}_addListener(e,i){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,i,gP))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e=="function"?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!=="off"){let i=this._elementRef.nativeElement,r=i.style;(e==="on"||i.nodeName!=="INPUT"&&i.nodeName!=="TEXTAREA")&&(r.userSelect=r.msUserSelect=r.webkitUserSelect=r.MozUserSelect="none"),(e==="on"||!i.draggable)&&(r.webkitUserDrag="none"),r.touchAction="none",r.webkitTapHighlightColor="transparent"}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,"tooltip"),this._isDestroyed||He({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type==="keydown"?this._isTooltipVisible()&&e.keyCode===27&&!St(e):!0;static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(i,r){i&2&&P("mat-mdc-tooltip-disabled",r.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return t})(),wP=(()=>{class t{_changeDetectorRef=d(be);_elementRef=d(F);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=Ne();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new C;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";constructor(){}show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>bP&&e.width>=yP}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let i=this._tooltip.nativeElement,r=this._showAnimation,o=this._hideAnimation;if(i.classList.remove(e?o:r),i.classList.add(e?r:o),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let s=getComputedStyle(i);(s.getPropertyValue("animation-duration")==="0s"||s.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(i.classList.add("_mat-animation-noopable"),this._finalizeAnimation(e))}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["mat-tooltip-component"]],viewQuery:function(i,r){if(i&1&&Re(fP,7),i&2){let o;U(o=$())&&(r._tooltip=o.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(i,r){i&1&&ee("mouseleave",function(s){return r._handleMouseLeave(s)})},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(i,r){i&1&&(Qe(0,"div",1,0),Mo("animationend",function(s){return r._handleAnimationEnd(s)}),Qe(2,"div",2),x(3),st()()),i&2&&(pt(r.tooltipClass),P("mdc-tooltip--multiline",r._isMultiline),p(3),ve(r.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--mat-tooltip-container-color, var(--mat-sys-inverse-surface));
  color: var(--mat-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-tooltip-container-shape, var(--mat-sys-corner-extra-small));
  font-family: var(--mat-tooltip-supporting-text-font, var(--mat-sys-body-small-font));
  font-size: var(--mat-tooltip-supporting-text-size, var(--mat-sys-body-small-size));
  font-weight: var(--mat-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));
  line-height: var(--mat-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));
  letter-spacing: var(--mat-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2,changeDetection:0})}return t})();var cE=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=M({type:t});static \u0275inj=I({imports:[Wg,$i,re,an]})}return t})();function CP(t,n){if(t&1&&(g(0,"mat-option",17),x(1),b()),t&2){let e=n.$implicit;J("value",e),p(),oe(" ",e," ")}}function DP(t,n){if(t&1){let e=at();g(0,"mat-form-field",14)(1,"mat-select",16,0),ee("selectionChange",function(r){Pe(e);let o=A(2);return Le(o._changePageSize(r.value))}),en(3,CP,2,2,"mat-option",17,Jt),b(),g(5,"div",18),ee("click",function(){Pe(e);let r=Et(2);return Le(r.open())}),b()()}if(t&2){let e=A(2);J("appearance",e._formFieldAppearance)("color",e.color),p(),J("value",e.pageSize)("disabled",e.disabled),ma("aria-labelledby",e._pageSizeLabelId),J("panelClass",e.selectConfig.panelClass||"")("disableOptionCentering",e.selectConfig.disableOptionCentering),p(2),tn(e._displayedPageSizeOptions)}}function xP(t,n){if(t&1&&(g(0,"div",15),x(1),b()),t&2){let e=A(2);p(),ve(e.pageSize)}}function EP(t,n){if(t&1&&(g(0,"div",3)(1,"div",13),x(2),b(),G(3,DP,6,7,"mat-form-field",14),G(4,xP,2,1,"div",15),b()),t&2){let e=A();p(),ne("id",e._pageSizeLabelId),p(),oe(" ",e._intl.itemsPerPageLabel," "),p(),W(e._displayedPageSizeOptions.length>1?3:-1),p(),W(e._displayedPageSizeOptions.length<=1?4:-1)}}function IP(t,n){if(t&1){let e=at();g(0,"button",19),ee("click",function(){Pe(e);let r=A();return Le(r._buttonClicked(0,r._previousButtonsDisabled()))}),Lt(),g(1,"svg",8),se(2,"path",20),b()()}if(t&2){let e=A();J("matTooltip",e._intl.firstPageLabel)("matTooltipDisabled",e._previousButtonsDisabled())("disabled",e._previousButtonsDisabled())("tabindex",e._previousButtonsDisabled()?-1:null),ne("aria-label",e._intl.firstPageLabel)}}function SP(t,n){if(t&1){let e=at();g(0,"button",21),ee("click",function(){Pe(e);let r=A();return Le(r._buttonClicked(r.getNumberOfPages()-1,r._nextButtonsDisabled()))}),Lt(),g(1,"svg",8),se(2,"path",22),b()()}if(t&2){let e=A();J("matTooltip",e._intl.lastPageLabel)("matTooltipDisabled",e._nextButtonsDisabled())("disabled",e._nextButtonsDisabled())("tabindex",e._nextButtonsDisabled()?-1:null),ne("aria-label",e._intl.lastPageLabel)}}var MP=(()=>{class t{changes=new C;itemsPerPageLabel="Items per page:";nextPageLabel="Next page";previousPageLabel="Previous page";firstPageLabel="First page";lastPageLabel="Last page";getRangeLabel=(e,i,r)=>{if(r==0||i==0)return`0 of ${r}`;r=Math.max(r,0);let o=e*i,s=o<r?Math.min(o+i,r):o+i;return`${o+1} \u2013 ${s} of ${r}`};static \u0275fac=function(i){return new(i||t)};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),TP=50;var kP=new v("MAT_PAGINATOR_DEFAULT_OPTIONS"),RP=(()=>{class t{_intl=d(MP);_changeDetectorRef=d(be);_formFieldAppearance;_pageSizeLabelId=d(Ue).getId("mat-paginator-page-size-label-");_intlChanges;_isInitialized=!1;_initializedStream=new _i(1);color;get pageIndex(){return this._pageIndex}set pageIndex(e){this._pageIndex=Math.max(e||0,0),this._changeDetectorRef.markForCheck()}_pageIndex=0;get length(){return this._length}set length(e){this._length=e||0,this._changeDetectorRef.markForCheck()}_length=0;get pageSize(){return this._pageSize}set pageSize(e){this._pageSize=Math.max(e||0,0),this._updateDisplayedPageSizeOptions()}_pageSize;get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(e){this._pageSizeOptions=(e||[]).map(i=>Ot(i,0)),this._updateDisplayedPageSizeOptions()}_pageSizeOptions=[];hidePageSize=!1;showFirstLastButtons=!1;selectConfig={};disabled=!1;page=new q;_displayedPageSizeOptions;initialized=this._initializedStream;constructor(){let e=this._intl,i=d(kP,{optional:!0});if(this._intlChanges=e.changes.subscribe(()=>this._changeDetectorRef.markForCheck()),i){let{pageSize:r,pageSizeOptions:o,hidePageSize:s,showFirstLastButtons:a}=i;r!=null&&(this._pageSize=r),o!=null&&(this._pageSizeOptions=o),s!=null&&(this.hidePageSize=s),a!=null&&(this.showFirstLastButtons=a)}this._formFieldAppearance=i?.formFieldAppearance||"outline"}ngOnInit(){this._isInitialized=!0,this._updateDisplayedPageSizeOptions(),this._initializedStream.next()}ngOnDestroy(){this._initializedStream.complete(),this._intlChanges.unsubscribe()}nextPage(){this.hasNextPage()&&this._navigate(this.pageIndex+1)}previousPage(){this.hasPreviousPage()&&this._navigate(this.pageIndex-1)}firstPage(){this.hasPreviousPage()&&this._navigate(0)}lastPage(){this.hasNextPage()&&this._navigate(this.getNumberOfPages()-1)}hasPreviousPage(){return this.pageIndex>=1&&this.pageSize!=0}hasNextPage(){let e=this.getNumberOfPages()-1;return this.pageIndex<e&&this.pageSize!=0}getNumberOfPages(){return this.pageSize?Math.ceil(this.length/this.pageSize):0}_changePageSize(e){let i=this.pageIndex*this.pageSize,r=this.pageIndex;this.pageIndex=Math.floor(i/e)||0,this.pageSize=e,this._emitPageEvent(r)}_nextButtonsDisabled(){return this.disabled||!this.hasNextPage()}_previousButtonsDisabled(){return this.disabled||!this.hasPreviousPage()}_updateDisplayedPageSizeOptions(){this._isInitialized&&(this.pageSize||(this._pageSize=this.pageSizeOptions.length!=0?this.pageSizeOptions[0]:TP),this._displayedPageSizeOptions=this.pageSizeOptions.slice(),this._displayedPageSizeOptions.indexOf(this.pageSize)===-1&&this._displayedPageSizeOptions.push(this.pageSize),this._displayedPageSizeOptions.sort((e,i)=>e-i),this._changeDetectorRef.markForCheck())}_emitPageEvent(e){this.page.emit({previousPageIndex:e,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length})}_navigate(e){let i=this.pageIndex;e!==i&&(this.pageIndex=e,this._emitPageEvent(i))}_buttonClicked(e,i){i||this._navigate(e)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["mat-paginator"]],hostAttrs:["role","group",1,"mat-mdc-paginator"],inputs:{color:"color",pageIndex:[2,"pageIndex","pageIndex",Ot],length:[2,"length","length",Ot],pageSize:[2,"pageSize","pageSize",Ot],pageSizeOptions:"pageSizeOptions",hidePageSize:[2,"hidePageSize","hidePageSize",Z],showFirstLastButtons:[2,"showFirstLastButtons","showFirstLastButtons",Z],selectConfig:"selectConfig",disabled:[2,"disabled","disabled",Z]},outputs:{page:"page"},exportAs:["matPaginator"],decls:14,vars:14,consts:[["selectRef",""],[1,"mat-mdc-paginator-outer-container"],[1,"mat-mdc-paginator-container"],[1,"mat-mdc-paginator-page-size"],[1,"mat-mdc-paginator-range-actions"],["aria-atomic","true","aria-live","polite","role","status",1,"mat-mdc-paginator-range-label"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-first",3,"matTooltip","matTooltipDisabled","disabled","tabindex"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-previous",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true",1,"mat-mdc-paginator-icon"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-next",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-last",3,"matTooltip","matTooltipDisabled","disabled","tabindex"],["aria-hidden","true",1,"mat-mdc-paginator-page-size-label"],[1,"mat-mdc-paginator-page-size-select",3,"appearance","color"],[1,"mat-mdc-paginator-page-size-value"],["hideSingleSelectionIndicator","",3,"selectionChange","value","disabled","aria-labelledby","panelClass","disableOptionCentering"],[3,"value"],[1,"mat-mdc-paginator-touch-target",3,"click"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-first",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-last",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]],template:function(i,r){i&1&&(g(0,"div",1)(1,"div",2),G(2,EP,5,4,"div",3),g(3,"div",4)(4,"div",5),x(5),b(),G(6,IP,3,5,"button",6),g(7,"button",7),ee("click",function(){return r._buttonClicked(r.pageIndex-1,r._previousButtonsDisabled())}),Lt(),g(8,"svg",8),se(9,"path",9),b()(),Gs(),g(10,"button",10),ee("click",function(){return r._buttonClicked(r.pageIndex+1,r._nextButtonsDisabled())}),Lt(),g(11,"svg",8),se(12,"path",11),b()(),G(13,SP,3,5,"button",12),b()()()),i&2&&(p(2),W(r.hidePageSize?-1:2),p(3),oe(" ",r._intl.getRangeLabel(r.pageIndex,r.pageSize,r.length)," "),p(),W(r.showFirstLastButtons?6:-1),p(),J("matTooltip",r._intl.previousPageLabel)("matTooltipDisabled",r._previousButtonsDisabled())("disabled",r._previousButtonsDisabled())("tabindex",r._previousButtonsDisabled()?-1:null),ne("aria-label",r._intl.previousPageLabel),p(3),J("matTooltip",r._intl.nextPageLabel)("matTooltipDisabled",r._nextButtonsDisabled())("disabled",r._nextButtonsDisabled())("tabindex",r._nextButtonsDisabled()?-1:null),ne("aria-label",r._intl.nextPageLabel),p(3),W(r.showFirstLastButtons?13:-1))},dependencies:[Qr,hf,Qi,qr,lE],styles:[`.mat-mdc-paginator {
  display: block;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-paginator-container-text-color, var(--mat-sys-on-surface));
  background-color: var(--mat-paginator-container-background-color, var(--mat-sys-surface));
  font-family: var(--mat-paginator-container-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-paginator-container-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-paginator-container-text-size, var(--mat-sys-body-small-size));
  font-weight: var(--mat-paginator-container-text-weight, var(--mat-sys-body-small-weight));
  letter-spacing: var(--mat-paginator-container-text-tracking, var(--mat-sys-body-small-tracking));
  --mat-form-field-container-height: var(--mat-paginator-form-field-container-height, 40px);
  --mat-form-field-container-vertical-padding: var(--mat-paginator-form-field-container-vertical-padding, 8px);
}
.mat-mdc-paginator .mat-mdc-select-value {
  font-size: var(--mat-paginator-select-trigger-text-size, var(--mat-sys-body-small-size));
}
.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper {
  display: none;
}
.mat-mdc-paginator .mat-mdc-select {
  line-height: 1.5;
}

.mat-mdc-paginator-outer-container {
  display: flex;
}

.mat-mdc-paginator-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 8px;
  flex-wrap: wrap;
  width: 100%;
  min-height: var(--mat-paginator-container-size, 56px);
}

.mat-mdc-paginator-page-size {
  display: flex;
  align-items: baseline;
  margin-right: 8px;
}
[dir=rtl] .mat-mdc-paginator-page-size {
  margin-right: 0;
  margin-left: 8px;
}

.mat-mdc-paginator-page-size-label {
  margin: 0 4px;
}

.mat-mdc-paginator-page-size-select {
  margin: 0 4px;
  width: var(--mat-paginator-page-size-select-width, 84px);
}

.mat-mdc-paginator-range-label {
  margin: 0 32px 0 24px;
}

.mat-mdc-paginator-range-actions {
  display: flex;
  align-items: center;
}

.mat-mdc-paginator-icon {
  display: inline-block;
  width: 28px;
  fill: var(--mat-paginator-enabled-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon {
  fill: var(--mat-paginator-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
[dir=rtl] .mat-mdc-paginator-icon {
  transform: rotate(180deg);
}

@media (forced-colors: active) {
  .mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon,
  .mat-mdc-paginator-icon {
    fill: currentColor;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button {
    outline: solid 1px;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button[aria-disabled] {
    color: GrayText;
  }
}
.mat-mdc-paginator-touch-target {
  display: var(--mat-paginator-touch-target-display, block);
  position: absolute;
  top: 50%;
  left: 50%;
  width: var(--mat-paginator-page-size-select-width, 84px);
  height: var(--mat-paginator-page-size-select-touch-target-height, 48px);
  background-color: transparent;
  transform: translate(-50%, -50%);
  cursor: pointer;
}
`],encapsulation:2,changeDetection:0})}return t})(),dE=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=M({type:t});static \u0275inj=I({imports:[cl,pf,cE,RP]})}return t})();var AP=["*",[["mat-toolbar-row"]]],OP=["*","mat-toolbar-row"],NP=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return t})(),gf=(()=>{class t{_elementRef=d(F);_platform=d(ge);_document=d(z);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["mat-toolbar"]],contentQueries:function(i,r,o){if(i&1&&Ye(o,NP,5),i&2){let s;U(s=$())&&(r._toolbarRows=s)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(i,r){i&2&&(pt(r.color?"mat-"+r.color:""),P("mat-toolbar-multiple-rows",r._toolbarRows.length>0)("mat-toolbar-single-row",r._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:OP,decls:2,vars:0,template:function(i,r){i&1&&(de(AP),O(0),O(1,1))},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var uE=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=M({type:t});static \u0275inj=I({imports:[re]})}return t})();var mE=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=M({type:t});static \u0275inj=I({imports:[re]})}return t})();var bf=["*"],FP=["content"],PP=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],LP=["mat-drawer","mat-drawer-content","*"];function BP(t,n){if(t&1){let e=at();g(0,"div",1),ee("click",function(){Pe(e);let r=A();return Le(r._onBackdropClicked())}),b()}if(t&2){let e=A();P("mat-drawer-shown",e._isShowingBackdrop())}}function jP(t,n){t&1&&(g(0,"mat-drawer-content"),O(1,2),b())}var VP=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],HP=["mat-sidenav","mat-sidenav-content","*"];function zP(t,n){if(t&1){let e=at();g(0,"div",1),ee("click",function(){Pe(e);let r=A();return Le(r._onBackdropClicked())}),b()}if(t&2){let e=A();P("mat-drawer-shown",e._isShowingBackdrop())}}function UP(t,n){t&1&&(g(0,"mat-sidenav-content"),O(1,2),b())}var $P=`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`;var GP=new v("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),H_=new v("MAT_DRAWER_CONTAINER"),_f=(()=>{class t extends $r{_platform=d(ge);_changeDetectorRef=d(be);_container=d(V_);constructor(){let e=d(F),i=d(jn),r=d(L);super(e,i,r)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:i}=this._container;return e!=null&&e.mode!=="over"&&e.opened||i!=null&&i.mode!=="over"&&i.opened}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(i,r){i&2&&(nn("margin-left",r._container._contentMargins.left,"px")("margin-right",r._container._contentMargins.right,"px"),P("mat-drawer-content-hidden",r._shouldBeHidden()))},features:[Ie([{provide:$r,useExisting:t}]),ke],ngContentSelectors:bf,decls:1,vars:0,template:function(i,r){i&1&&(de(),O(0))},encapsulation:2,changeDetection:0})}return t})(),j_=(()=>{class t{_elementRef=d(F);_focusTrapFactory=d(Gg);_focusMonitor=d(zt);_platform=d(ge);_ngZone=d(L);_renderer=d(Be);_interactivityChecker=d(xu);_doc=d(z);_container=d(H_,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=Nt(e)}_disableClose=!1;get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=Nt(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(Nt(e))}_opened=xe(!1);_openedVia=null;_animationStarted=new C;_animationEnd=new C;openedChange=new q(!0);_openedStream=this.openedChange.pipe(he(e=>e),N(()=>{}));openedStart=this._animationStarted.pipe(he(()=>this.opened),rc(void 0));_closedStream=this.openedChange.pipe(he(e=>!e),N(()=>{}));closedStart=this._animationStarted.pipe(he(()=>!this.opened),rc(void 0));_destroyed=new C;onPositionChanged=new q;_content;_modeChanged=new C;_injector=d(H);_changeDetectorRef=d(be);constructor(){this.openedChange.pipe(ce(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,i=this._elementRef.nativeElement;return[e.listen(i,"keydown",r=>{r.keyCode===27&&!this.disableClose&&!St(r)&&this._ngZone.run(()=>{this.close(),r.stopPropagation(),r.preventDefault()})}),e.listen(i,"transitionend",this._handleTransitionEvent),e.listen(i,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(e,i){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let r=()=>{o(),s(),e.removeAttribute("tabindex")},o=this._renderer.listen(e,"blur",r),s=this._renderer.listen(e,"mousedown",r)})),e.focus(i)}_focusByCssSelector(e,i){let r=this._elementRef.nativeElement.querySelector(e);r&&this._forceFocus(r,i)}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":He(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus=="function"&&e.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(e=!this.opened,i){e&&i&&(this._openedVia=i);let r=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),r}_setOpen(e,i,r){return e===this.opened?Promise.resolve(e?"open":"close"):(this._opened.set(e),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",e),!e&&i&&this._restoreFocus(r),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(o=>{this.openedChange.pipe(Me(1)).subscribe(s=>o(s?"open":"close"))}))}_setIsAnimating(e){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",e)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let i=this._elementRef.nativeElement,r=i.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),r.insertBefore(this._anchor,i)),r.appendChild(i)):this._anchor&&this._anchor.parentNode.insertBefore(i,this._anchor)}_handleTransitionEvent=e=>{let i=this._elementRef.nativeElement;e.target===i&&this._ngZone.run(()=>{e.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["mat-drawer"]],viewQuery:function(i,r){if(i&1&&Re(FP,5),i&2){let o;U(o=$())&&(r._content=o.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(i,r){i&2&&(ne("align",null)("tabIndex",r.mode!=="side"?"-1":null),nn("visibility",!r._container&&!r.opened?"hidden":null),P("mat-drawer-end",r.position==="end")("mat-drawer-over",r.mode==="over")("mat-drawer-push",r.mode==="push")("mat-drawer-side",r.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:bf,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(i,r){i&1&&(de(),g(0,"div",1,0),O(2),b())},dependencies:[$r],encapsulation:2,changeDetection:0})}return t})(),V_=(()=>{class t{_dir=d(ct,{optional:!0});_element=d(F);_ngZone=d(L);_changeDetectorRef=d(be);_animationDisabled=Ne();_transitionsEnabled=!1;_allDrawers;_drawers=new vn;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=Nt(e)}_autosize=d(GP);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:Nt(e)}_backdropOverride=null;backdropClick=new q;_start=null;_end=null;_left=null;_right=null;_destroyed=new C;_doCheckSubject=new C;_contentMargins={left:null,right:null};_contentMarginChanges=new C;get scrollable(){return this._userContent||this._content}_injector=d(H);constructor(){let e=d(ge),i=d(ln);this._dir?.change.pipe(ce(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),i.change().pipe(ce(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(Ze(this._allDrawers),ce(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(i=>!i._container||i._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(Ze(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(ar(10),ce(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,i=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let r=this._left._getWidth();e+=r,i-=r}}if(this._right&&this._right.opened){if(this._right.mode=="side")i+=this._right._getWidth();else if(this._right.mode=="push"){let r=this._right._getWidth();i+=r,e-=r}}e=e||null,i=i||null,(e!==this._contentMargins.left||i!==this._contentMargins.right)&&(this._contentMargins={left:e,right:i},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(ce(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!=="side"&&e.openedChange.pipe(ce(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(ce(this._drawers.changes)).subscribe(()=>{He({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(ce(Ut(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let i=this._element.nativeElement.classList,r="mat-drawer-container-has-open";e?i.add(r):i.remove(r)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["mat-drawer-container"]],contentQueries:function(i,r,o){if(i&1&&Ye(o,_f,5)(o,j_,5),i&2){let s;U(s=$())&&(r._content=s.first),U(s=$())&&(r._allDrawers=s)}},viewQuery:function(i,r){if(i&1&&Re(_f,5),i&2){let o;U(o=$())&&(r._userContent=o.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(i,r){i&2&&P("mat-drawer-container-explicit-backdrop",r._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[Ie([{provide:H_,useExisting:t}])],ngContentSelectors:LP,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(i,r){i&1&&(de(PP),G(0,BP,1,2,"div",0),O(1),O(2,1),G(3,jP,2,0,"mat-drawer-content")),i&2&&(W(r.hasBackdrop?0:-1),p(3),W(r._content?-1:3))},dependencies:[_f],styles:[`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`],encapsulation:2,changeDetection:0})}return t})(),vf=(()=>{class t extends _f{static \u0275fac=(()=>{let e;return function(r){return(e||(e=it(t)))(r||t)}})();static \u0275cmp=E({type:t,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[Ie([{provide:$r,useExisting:t}]),ke],ngContentSelectors:bf,decls:1,vars:0,template:function(i,r){i&1&&(de(),O(0))},encapsulation:2,changeDetection:0})}return t})(),z_=(()=>{class t extends j_{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=Nt(e)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=sn(e)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=sn(e)}_fixedBottomGap=0;static \u0275fac=(()=>{let e;return function(r){return(e||(e=it(t)))(r||t)}})();static \u0275cmp=E({type:t,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(i,r){i&2&&(ne("tabIndex",r.mode!=="side"?"-1":null)("align",null),nn("top",r.fixedInViewport?r.fixedTopGap:null,"px")("bottom",r.fixedInViewport?r.fixedBottomGap:null,"px"),P("mat-drawer-end",r.position==="end")("mat-drawer-over",r.mode==="over")("mat-drawer-push",r.mode==="push")("mat-drawer-side",r.mode==="side")("mat-sidenav-fixed",r.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[Ie([{provide:j_,useExisting:t}]),ke],ngContentSelectors:bf,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(i,r){i&1&&(de(),g(0,"div",1,0),O(2),b())},dependencies:[$r],encapsulation:2,changeDetection:0})}return t})(),hE=(()=>{class t extends V_{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let e;return function(r){return(e||(e=it(t)))(r||t)}})();static \u0275cmp=E({type:t,selectors:[["mat-sidenav-container"]],contentQueries:function(i,r,o){if(i&1&&Ye(o,vf,5)(o,z_,5),i&2){let s;U(s=$())&&(r._content=s.first),U(s=$())&&(r._allDrawers=s)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(i,r){i&2&&P("mat-drawer-container-explicit-backdrop",r._backdropOverride)},exportAs:["matSidenavContainer"],features:[Ie([{provide:H_,useExisting:t},{provide:V_,useExisting:t}]),ke],ngContentSelectors:HP,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(i,r){i&1&&(de(VP),G(0,zP,1,2,"div",0),O(1),O(2,1),G(3,UP,2,0,"mat-sidenav-content")),i&2&&(W(r.hasBackdrop?0:-1),p(3),W(r._content?-1:3))},dependencies:[vf],styles:[$P],encapsulation:2,changeDetection:0})}return t})(),pE=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=M({type:t});static \u0275inj=I({imports:[an,re,an]})}return t})();function gE(t){return Error(`Unable to find icon with the name "${t}"`)}function qP(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function _E(t){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${t}".`)}function vE(t){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${t}".`)}var hi=class{url;svgText;options;svgElement=null;constructor(n,e,i){this.url=n,this.svgText=e,this.options=i}},yE=(()=>{class t{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,i,r,o){this._httpClient=e,this._sanitizer=i,this._errorHandler=o,this._document=r}addSvgIcon(e,i,r){return this.addSvgIconInNamespace("",e,i,r)}addSvgIconLiteral(e,i,r){return this.addSvgIconLiteralInNamespace("",e,i,r)}addSvgIconInNamespace(e,i,r,o){return this._addSvgIconConfig(e,i,new hi(r,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,i,r,o){let s=this._sanitizer.sanitize(rt.HTML,r);if(!s)throw vE(r);let a=Hr(s);return this._addSvgIconConfig(e,i,new hi("",a,o))}addSvgIconSet(e,i){return this.addSvgIconSetInNamespace("",e,i)}addSvgIconSetLiteral(e,i){return this.addSvgIconSetLiteralInNamespace("",e,i)}addSvgIconSetInNamespace(e,i,r){return this._addSvgIconSetConfig(e,new hi(i,null,r))}addSvgIconSetLiteralInNamespace(e,i,r){let o=this._sanitizer.sanitize(rt.HTML,i);if(!o)throw vE(i);let s=Hr(o);return this._addSvgIconSetConfig(e,new hi("",s,r))}registerFontClassAlias(e,i=e){return this._fontCssClassesByAlias.set(e,i),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let i=this._sanitizer.sanitize(rt.RESOURCE_URL,e);if(!i)throw _E(e);let r=this._cachedIconsByUrl.get(i);return r?V(yf(r)):this._loadSvgIconFromConfig(new hi(e,null)).pipe(We(o=>this._cachedIconsByUrl.set(i,o)),N(o=>yf(o)))}getNamedSvgIcon(e,i=""){let r=bE(i,e),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(i,e),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let s=this._iconSetConfigs.get(i);return s?this._getSvgFromIconSetConfigs(e,s):Es(gE(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?V(yf(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(N(i=>yf(i)))}_getSvgFromIconSetConfigs(e,i){let r=this._extractIconWithNameFromAnySet(e,i);if(r)return V(r);let o=i.filter(s=>!s.svgText).map(s=>this._loadSvgIconSetFromConfig(s).pipe(Sn(a=>{let c=`Loading icon set URL: ${this._sanitizer.sanitize(rt.RESOURCE_URL,s.url)} failed: ${a.message}`;return this._errorHandler.handleError(new Error(c)),V(null)})));return $n(o).pipe(N(()=>{let s=this._extractIconWithNameFromAnySet(e,i);if(!s)throw gE(e);return s}))}_extractIconWithNameFromAnySet(e,i){for(let r=i.length-1;r>=0;r--){let o=i[r];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let s=this._svgElementFromConfig(o),a=this._extractSvgIconFromSet(s,e,o.options);if(a)return a}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(We(i=>e.svgText=i),N(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?V(null):this._fetchIcon(e).pipe(We(i=>e.svgText=i))}_extractSvgIconFromSet(e,i,r){let o=e.querySelector(`[id="${i}"]`);if(!o)return null;let s=o.cloneNode(!0);if(s.removeAttribute("id"),s.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(s,r);if(s.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(s),r);let a=this._svgElementFromString(Hr("<svg></svg>"));return a.appendChild(s),this._setSvgAttributes(a,r)}_svgElementFromString(e){let i=this._document.createElement("DIV");i.innerHTML=e;let r=i.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let i=this._svgElementFromString(Hr("<svg></svg>")),r=e.attributes;for(let o=0;o<r.length;o++){let{name:s,value:a}=r[o];s!=="id"&&i.setAttribute(s,a)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&i.appendChild(e.childNodes[o].cloneNode(!0));return i}_setSvgAttributes(e,i){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),i&&i.viewBox&&e.setAttribute("viewBox",i.viewBox),e}_fetchIcon(e){let{url:i,options:r}=e,o=r?.withCredentials??!1;if(!this._httpClient)throw qP();if(i==null)throw Error(`Cannot fetch icon from URL "${i}".`);let s=this._sanitizer.sanitize(rt.RESOURCE_URL,i);if(!s)throw _E(i);let a=this._inProgressUrlFetches.get(s);if(a)return a;let l=this._httpClient.get(s,{responseType:"text",withCredentials:o}).pipe(N(c=>Hr(c)),bi(()=>this._inProgressUrlFetches.delete(s)),Ss());return this._inProgressUrlFetches.set(s,l),l}_addSvgIconConfig(e,i,r){return this._svgIconConfigs.set(bE(e,i),r),this}_addSvgIconSetConfig(e,i){let r=this._iconSetConfigs.get(e);return r?r.push(i):this._iconSetConfigs.set(e,[i]),this}_svgElementFromConfig(e){if(!e.svgElement){let i=this._svgElementFromString(e.svgText);this._setSvgAttributes(i,e.options),e.svgElement=i}return e.svgElement}_getIconConfigFromResolvers(e,i){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](i,e);if(o)return QP(o)?new hi(o.url,null,o.options):new hi(o,null)}}static \u0275fac=function(i){return new(i||t)(R(No,8),R(Ia),R(z,8),R(Pt))};static \u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function yf(t){return t.cloneNode(!0)}function bE(t,n){return t+":"+n}function QP(t){return!!(t.url&&t.options)}var YP=["*"],KP=new v("MAT_ICON_DEFAULT_OPTIONS"),ZP=new v("mat-icon-location",{providedIn:"root",factory:()=>{let t=d(z),n=t?t.location:null;return{getPathname:()=>n?n.pathname+n.search:""}}}),wE=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],XP=wE.map(t=>`[${t}]`).join(", "),JP=/^url\(['"]?#(.*?)['"]?\)$/,wf=(()=>{class t{_elementRef=d(F);_iconRegistry=d(yE);_location=d(ZP);_errorHandler=d(Pt);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let i=this._cleanupFontValue(e);i!==this._fontSet&&(this._fontSet=i,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let i=this._cleanupFontValue(e);i!==this._fontIcon&&(this._fontIcon=i,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=pe.EMPTY;constructor(){let e=d(new Dn("aria-hidden"),{optional:!0}),i=d(KP,{optional:!0});i&&(i.color&&(this.color=this._defaultColor=i.color),i.fontSet&&(this.fontSet=i.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let i=e.split(":");switch(i.length){case 1:return["",i[0]];case 2:return i;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let i=this._location.getPathname();i!==this._previousPath&&(this._previousPath=i,this._prependPathToReferences(i))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let i=this._location.getPathname();this._previousPath=i,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(i),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,i=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();i--;){let r=e.childNodes[i];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,i=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),i.forEach(r=>e.classList.add(r)),this._previousFontSetClass=i,this.fontIcon!==this._previousFontIconClass&&!i.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let i=this._elementsWithExternalReferences;i&&i.forEach((r,o)=>{r.forEach(s=>{o.setAttribute(s.name,`url('${e}#${s.value}')`)})})}_cacheChildrenWithExternalReferences(e){let i=e.querySelectorAll(XP),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<i.length;o++)wE.forEach(s=>{let a=i[o],l=a.getAttribute(s),c=l?l.match(JP):null;if(c){let u=r.get(a);u||(u=[],r.set(a,u)),u.push({name:s,value:c[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[i,r]=this._splitIconName(e);i&&(this._svgNamespace=i),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,i).pipe(Me(1)).subscribe(o=>this._setSvgElement(o),o=>{let s=`Error retrieving icon ${i}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(s))})}}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(i,r){i&2&&(ne("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),pt(r.color?"mat-"+r.color:""),P("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",Z],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:YP,decls:1,vars:0,template:function(i,r){i&1&&(de(),O(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2,changeDetection:0})}return t})(),CE=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=M({type:t});static \u0275inj=I({imports:[re]})}return t})();var U_=(()=>{class t{get vertical(){return this._vertical}set vertical(e){this._vertical=Nt(e)}_vertical=!1;get inset(){return this._inset}set inset(e){this._inset=Nt(e)}_inset=!1;static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(i,r){i&2&&(ne("aria-orientation",r.vertical?"vertical":"horizontal"),P("mat-divider-vertical",r.vertical)("mat-divider-horizontal",!r.vertical)("mat-divider-inset",r.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(i,r){},styles:[`.mat-divider {
  display: block;
  margin: 0;
  border-top-style: solid;
  border-top-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-top-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-vertical {
  border-top: 0;
  border-right-style: solid;
  border-right-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-right-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-inset {
  margin-left: 80px;
}
[dir=rtl] .mat-divider.mat-divider-inset {
  margin-left: auto;
  margin-right: 80px;
}
`],encapsulation:2,changeDetection:0})}return t})(),xE=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=M({type:t});static \u0275inj=I({imports:[re]})}return t})();var EE=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=M({type:t});static \u0275inj=I({imports:[Zo,Hn,mf,re,xE]})}return t})();var tL=["mat-internal-form-field",""],nL=["*"],Cf=(()=>{class t{labelPosition="after";static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(i,r){i&2&&P("mdc-form-field--align-end",r.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:tL,ngContentSelectors:nL,decls:1,vars:0,template:function(i,r){i&1&&(de(),O(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2,changeDetection:0})}return t})();var iL=["switch"],rL=["*"];function oL(t,n){t&1&&(g(0,"span",11),Lt(),g(1,"svg",13),se(2,"path",14),b(),g(3,"svg",15),se(4,"path",16),b()())}var sL=new v("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})}),Df=class{source;checked;constructor(n,e){this.source=n,this.checked=e}},aL=(()=>{class t{_elementRef=d(F);_focusMonitor=d(zt);_changeDetectorRef=d(be);defaults=d(sL);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new Df(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=Ne();_focused=!1;name=null;id;labelPosition="after";ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new q;toggleChange=new q;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){d(Je).load(Vn);let e=d(new Dn("tabindex"),{optional:!0}),i=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=i.color||"accent",this.id=this._uniqueId=d(Ue).getId("mat-mdc-slide-toggle-"),this.hideIcon=i.hideIcon??!1,this.disabledInteractive=i.disabledInteractive??!1,this._labelId=this._uniqueId+"-label"}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e==="keyboard"||e==="program"?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new Df(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["mat-slide-toggle"]],viewQuery:function(i,r){if(i&1&&Re(iL,5),i&2){let o;U(o=$())&&(r._switchElement=o.first)}},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:13,hostBindings:function(i,r){i&2&&(Vt("id",r.id),ne("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),pt(r.color?"mat-"+r.color:""),P("mat-mdc-slide-toggle-focused",r._focused)("mat-mdc-slide-toggle-checked",r.checked)("_mat-animation-noopable",r._noopAnimations))},inputs:{name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],required:[2,"required","required",Z],color:"color",disabled:[2,"disabled","disabled",Z],disableRipple:[2,"disableRipple","disableRipple",Z],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Ot(e)],checked:[2,"checked","checked",Z],hideIcon:[2,"hideIcon","hideIcon",Z],disabledInteractive:[2,"disabledInteractive","disabledInteractive",Z]},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[Ie([{provide:Lx,useExisting:un(()=>t),multi:!0},{provide:df,useExisting:t,multi:!0}]),Xe],ngContentSelectors:rL,decls:14,vars:27,consts:[["switch",""],["mat-internal-form-field","",3,"labelPosition"],["role","switch","type","button",1,"mdc-switch",3,"click","tabIndex","disabled"],[1,"mat-mdc-slide-toggle-touch-target"],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-switch__icons"],[1,"mdc-label",3,"click","for"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"]],template:function(i,r){if(i&1&&(de(),g(0,"div",1)(1,"button",2,0),ee("click",function(){return r._handleClick()}),se(3,"div",3)(4,"span",4),g(5,"span",5)(6,"span",6)(7,"span",7),se(8,"span",8),b(),g(9,"span",9),se(10,"span",10),b(),G(11,oL,5,0,"span",11),b()()(),g(12,"label",12),ee("click",function(s){return s.stopPropagation()}),O(13),b()()),i&2){let o=Et(2);J("labelPosition",r.labelPosition),p(),P("mdc-switch--selected",r.checked)("mdc-switch--unselected",!r.checked)("mdc-switch--checked",r.checked)("mdc-switch--disabled",r.disabled)("mat-mdc-slide-toggle-disabled-interactive",r.disabledInteractive),J("tabIndex",r.disabled&&!r.disabledInteractive?-1:r.tabIndex)("disabled",r.disabled&&!r.disabledInteractive),ne("id",r.buttonId)("name",r.name)("aria-label",r.ariaLabel)("aria-labelledby",r._getAriaLabelledBy())("aria-describedby",r.ariaDescribedby)("aria-required",r.required||null)("aria-checked",r.checked)("aria-disabled",r.disabled&&r.disabledInteractive?"true":null),p(9),J("matRippleTrigger",o)("matRippleDisabled",r.disableRipple||r.disabled)("matRippleCentered",!0),p(),W(r.hideIcon?-1:11),p(),J("for",r.buttonId),ne("id",r._labelId)}},dependencies:[Gi,Cf],styles:[`.mdc-switch {
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 0;
  position: relative;
  width: var(--mat-slide-toggle-track-width, 52px);
}
.mdc-switch.mdc-switch--disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-switch.mat-mdc-slide-toggle-disabled-interactive {
  pointer-events: auto;
}

.mdc-switch__track {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: var(--mat-slide-toggle-track-height, 32px);
  border-radius: var(--mat-slide-toggle-track-shape, var(--mat-sys-corner-full));
}
.mdc-switch--disabled.mdc-switch .mdc-switch__track {
  opacity: var(--mat-slide-toggle-disabled-track-opacity, 0.12);
}
.mdc-switch__track::before, .mdc-switch__track::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  border-width: var(--mat-slide-toggle-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-track-outline-color, var(--mat-sys-outline));
}
.mdc-switch--selected .mdc-switch__track::before, .mdc-switch--selected .mdc-switch__track::after {
  border-width: var(--mat-slide-toggle-selected-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-selected-track-outline-color, transparent);
}
.mdc-switch--disabled .mdc-switch__track::before, .mdc-switch--disabled .mdc-switch__track::after {
  border-width: var(--mat-slide-toggle-disabled-unselected-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-disabled-unselected-track-outline-color, var(--mat-sys-on-surface));
}
@media (forced-colors: active) {
  .mdc-switch__track {
    border-color: currentColor;
  }
}
.mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: translateX(0);
  background: var(--mat-slide-toggle-unselected-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before {
  transform: translateX(-100%);
}
.mdc-switch--selected .mdc-switch__track::before {
  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::before {
  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-hover-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-focus-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch:enabled:active .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-pressed-track-color, var(--mat-sys-surface-variant));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::before, .mdc-switch.mdc-switch--disabled .mdc-switch__track::before {
  background: var(--mat-slide-toggle-disabled-unselected-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch__track::after {
  transform: translateX(-100%);
  background: var(--mat-slide-toggle-selected-track-color, var(--mat-sys-primary));
}
[dir=rtl] .mdc-switch__track::after {
  transform: translateX(100%);
}
.mdc-switch--selected .mdc-switch__track::after {
  transform: translateX(0);
}
.mdc-switch--selected .mdc-switch__track::after {
  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::after {
  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-hover-track-color, var(--mat-sys-primary));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-focus-track-color, var(--mat-sys-primary));
}
.mdc-switch:enabled:active .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-pressed-track-color, var(--mat-sys-primary));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::after, .mdc-switch.mdc-switch--disabled .mdc-switch__track::after {
  background: var(--mat-slide-toggle-disabled-selected-track-color, var(--mat-sys-on-surface));
}

.mdc-switch__handle-track {
  height: 100%;
  pointer-events: none;
  position: absolute;
  top: 0;
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  left: 0;
  right: auto;
  transform: translateX(0);
  width: calc(100% - var(--mat-slide-toggle-handle-width));
}
[dir=rtl] .mdc-switch__handle-track {
  left: auto;
  right: 0;
}
.mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(-100%);
}

.mdc-switch__handle {
  display: flex;
  pointer-events: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: auto;
  transition: width 75ms cubic-bezier(0.4, 0, 0.2, 1), height 75ms cubic-bezier(0.4, 0, 0.2, 1), margin 75ms cubic-bezier(0.4, 0, 0.2, 1);
  width: var(--mat-slide-toggle-handle-width);
  height: var(--mat-slide-toggle-handle-height);
  border-radius: var(--mat-slide-toggle-handle-shape, var(--mat-sys-corner-full));
}
[dir=rtl] .mdc-switch__handle {
  left: auto;
  right: 0;
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle {
  width: var(--mat-slide-toggle-unselected-handle-size, 16px);
  height: var(--mat-slide-toggle-unselected-handle-size, 16px);
  margin: var(--mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle {
  width: var(--mat-slide-toggle-selected-handle-size, 24px);
  height: var(--mat-slide-toggle-selected-handle-size, 24px);
  margin: var(--mat-slide-toggle-selected-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons) {
  width: var(--mat-slide-toggle-with-icon-handle-size, 24px);
  height: var(--mat-slide-toggle-with-icon-handle-size, 24px);
}
.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  width: var(--mat-slide-toggle-pressed-handle-size, 28px);
  height: var(--mat-slide-toggle-pressed-handle-size, 28px);
}
.mat-mdc-slide-toggle .mdc-switch--selected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after {
  opacity: var(--mat-slide-toggle-disabled-selected-handle-opacity, 1);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after {
  opacity: var(--mat-slide-toggle-disabled-unselected-handle-opacity, 0.38);
}
.mdc-switch__handle::before, .mdc-switch__handle::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1), border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}
@media (forced-colors: active) {
  .mdc-switch__handle::before, .mdc-switch__handle::after {
    border-color: currentColor;
  }
}
.mdc-switch--selected:enabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-handle-color, var(--mat-sys-on-primary));
}
.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-hover-handle-color, var(--mat-sys-primary-container));
}
.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-focus-handle-color, var(--mat-sys-primary-container));
}
.mdc-switch--selected:enabled:active .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-pressed-handle-color, var(--mat-sys-primary-container));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:hover:not(:focus):not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:focus:not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:active .mdc-switch__handle::after, .mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-disabled-selected-handle-color, var(--mat-sys-surface));
}
.mdc-switch--unselected:enabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-handle-color, var(--mat-sys-outline));
}
.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-hover-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-focus-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected:enabled:active .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-pressed-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-disabled-unselected-handle-color, var(--mat-sys-on-surface));
}
.mdc-switch__handle::before {
  background: var(--mat-slide-toggle-handle-surface-color);
}

.mdc-switch__shadow {
  border-radius: inherit;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
.mdc-switch:enabled .mdc-switch__shadow {
  box-shadow: var(--mat-slide-toggle-handle-elevation-shadow);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__shadow, .mdc-switch.mdc-switch--disabled .mdc-switch__shadow {
  box-shadow: var(--mat-slide-toggle-disabled-handle-elevation-shadow);
}

.mdc-switch__ripple {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  width: var(--mat-slide-toggle-state-layer-size, 40px);
  height: var(--mat-slide-toggle-state-layer-size, 40px);
}
.mdc-switch__ripple::after {
  content: "";
  opacity: 0;
}
.mdc-switch--disabled .mdc-switch__ripple::after {
  display: none;
}
.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after {
  display: block;
}
.mdc-switch:hover .mdc-switch__ripple::after {
  transition: 75ms opacity cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:focus .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:active .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after, .mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-pressed-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}
.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-hover-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-focus-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mdc-switch--selected:enabled:active .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-pressed-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}

.mdc-switch__icons {
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 1;
  transform: translateZ(0);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons {
  opacity: var(--mat-slide-toggle-disabled-unselected-icon-opacity, 0.38);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons {
  opacity: var(--mat-slide-toggle-disabled-selected-icon-opacity, 0.38);
}

.mdc-switch__icon {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0;
  transition: opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1);
}
.mdc-switch--unselected .mdc-switch__icon {
  width: var(--mat-slide-toggle-unselected-icon-size, 16px);
  height: var(--mat-slide-toggle-unselected-icon-size, 16px);
  fill: var(--mat-slide-toggle-unselected-icon-color, var(--mat-sys-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--mat-slide-toggle-disabled-unselected-icon-color, var(--mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__icon {
  width: var(--mat-slide-toggle-selected-icon-size, 16px);
  height: var(--mat-slide-toggle-selected-icon-size, 16px);
  fill: var(--mat-slide-toggle-selected-icon-color, var(--mat-sys-on-primary-container));
}
.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--mat-slide-toggle-disabled-selected-icon-color, var(--mat-sys-on-surface));
}

.mdc-switch--selected .mdc-switch__icon--on,
.mdc-switch--unselected .mdc-switch__icon--off {
  opacity: 1;
  transition: opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1);
}

.mat-mdc-slide-toggle {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  -webkit-tap-highlight-color: transparent;
  outline: 0;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,
.mat-mdc-slide-toggle .mdc-switch__ripple::after {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),
.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty) {
  transform: translateZ(0);
}
.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-slide-toggle .mat-internal-form-field {
  color: var(--mat-slide-toggle-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-slide-toggle-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-slide-toggle-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-slide-toggle-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-slide-toggle-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-slide-toggle-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-slide-toggle .mat-ripple-element {
  opacity: 0.12;
}
.mat-mdc-slide-toggle .mat-focus-indicator::before {
  border-radius: 50%;
}
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after {
  transition: none;
}
.mat-mdc-slide-toggle .mdc-switch:enabled + .mdc-label {
  cursor: pointer;
}
.mat-mdc-slide-toggle .mdc-switch--disabled + label {
  color: var(--mat-slide-toggle-disabled-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-slide-toggle label:empty {
  display: none;
}

.mat-mdc-slide-toggle-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-slide-toggle-touch-target-size, 48px);
  width: 100%;
  transform: translate(-50%, -50%);
  display: var(--mat-slide-toggle-touch-target-display, block);
}
[dir=rtl] .mat-mdc-slide-toggle-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2,changeDetection:0})}return t})(),IE=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=M({type:t});static \u0275inj=I({imports:[aL,re]})}return t})();var lL=["*"];var cL=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],dL=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],uL=new v("MAT_CARD_CONFIG"),SE=(()=>{class t{appearance;constructor(){let e=d(uL,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(i,r){i&2&&P("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:lL,decls:1,vars:0,template:function(i,r){i&1&&(de(),O(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2,changeDetection:0})}return t})();var ME=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return t})();var TE=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:dL,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(i,r){i&1&&(de(cL),O(0),Qe(1,"div",0),O(2,1),st(),O(3,2))},encapsulation:2,changeDetection:0})}return t})();var kE=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=M({type:t});static \u0275inj=I({imports:[re]})}return t})();var mL=["input"],hL=["formField"],pL=["*"],$_=class{source;value;constructor(n,e){this.source=n,this.value=e}};var gL=new v("MatRadioGroup"),_L=new v("mat-radio-default-options",{providedIn:"root",factory:()=>({color:"accent",disabledInteractive:!1})});var vL=(()=>{class t{_elementRef=d(F);_changeDetector=d(be);_focusMonitor=d(zt);_radioDispatcher=d(w_);_defaultOptions=d(_L,{optional:!0});_ngZone=d(L);_renderer=d(Be);_uniqueId=d(Ue).getId("mat-radio-");_cleanupClick;id=this._uniqueId;name;ariaLabel;ariaLabelledby;ariaDescribedby;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked!==e&&(this._checked=e,e&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!e&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),e&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this.radioGroup!==null&&(this.checked||(this.checked=this.radioGroup.value===e),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||"after"}set labelPosition(e){this._labelPosition=e}_labelPosition;get disabled(){return this._disabled||this.radioGroup!==null&&this.radioGroup.disabled}set disabled(e){this._setDisabled(e)}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(e){e!==this._required&&this._changeDetector.markForCheck(),this._required=e}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._defaultOptions&&this._defaultOptions.color||"accent"}set color(e){this._color=e}_color;get disabledInteractive(){return this._disabledInteractive||this.radioGroup!==null&&this.radioGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new q;radioGroup;get inputId(){return`${this.id||this._uniqueId}-input`}_checked=!1;_disabled=!1;_required=!1;_value=null;_removeUniqueSelectionListener=()=>{};_previousTabIndex;_inputElement;_rippleTrigger;_noopAnimations=Ne();_injector=d(H);constructor(){d(Je).load(Vn);let e=d(gL,{optional:!0}),i=d(new Dn("tabindex"),{optional:!0});this.radioGroup=e,this._disabledInteractive=this._defaultOptions?.disabledInteractive??!1,i&&(this.tabIndex=Ot(i,0))}focus(e,i){i?this._focusMonitor.focusVia(this._inputElement,i,e):this._inputElement.nativeElement.focus(e)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name),this._removeUniqueSelectionListener=this._radioDispatcher.listen((e,i)=>{e!==this.id&&i===this.name&&(this.checked=!1)})}ngDoCheck(){this._updateTabIndex()}ngAfterViewInit(){this._updateTabIndex(),this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{!e&&this.radioGroup&&this.radioGroup._touch()}),this._ngZone.runOutsideAngular(()=>{this._cleanupClick=this._renderer.listen(this._inputElement.nativeElement,"click",this._onInputClick)})}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new $_(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputInteraction(e){if(e.stopPropagation(),!this.checked&&!this.disabled){let i=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),i&&this.radioGroup._emitChangeEvent())}}_onTouchTargetClick(e){this._onInputInteraction(e),(!this.disabled||this.disabledInteractive)&&this._inputElement?.nativeElement.focus()}_setDisabled(e){this._disabled!==e&&(this._disabled=e,this._changeDetector.markForCheck())}_onInputClick=e=>{this.disabled&&this.disabledInteractive&&e.preventDefault()};_updateTabIndex(){let e=this.radioGroup,i;if(!e||!e.selected||this.disabled?i=this.tabIndex:i=e.selected===this?this.tabIndex:-1,i!==this._previousTabIndex){let r=this._inputElement?.nativeElement;r&&(r.setAttribute("tabindex",i+""),this._previousTabIndex=i,He(()=>{queueMicrotask(()=>{e&&e.selected&&e.selected!==this&&document.activeElement===r&&(e.selected?._inputElement.nativeElement.focus(),document.activeElement===r&&this._inputElement.nativeElement.blur())})},{injector:this._injector}))}}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["mat-radio-button"]],viewQuery:function(i,r){if(i&1&&Re(mL,5)(hL,7,F),i&2){let o;U(o=$())&&(r._inputElement=o.first),U(o=$())&&(r._rippleTrigger=o.first)}},hostAttrs:[1,"mat-mdc-radio-button"],hostVars:19,hostBindings:function(i,r){i&1&&ee("focus",function(){return r._inputElement.nativeElement.focus()}),i&2&&(ne("id",r.id)("tabindex",null)("aria-label",null)("aria-labelledby",null)("aria-describedby",null),P("mat-primary",r.color==="primary")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("mat-mdc-radio-checked",r.checked)("mat-mdc-radio-disabled",r.disabled)("mat-mdc-radio-disabled-interactive",r.disabledInteractive)("_mat-animation-noopable",r._noopAnimations))},inputs:{id:"id",name:"name",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],disableRipple:[2,"disableRipple","disableRipple",Z],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Ot(e)],checked:[2,"checked","checked",Z],value:"value",labelPosition:"labelPosition",disabled:[2,"disabled","disabled",Z],required:[2,"required","required",Z],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",Z]},outputs:{change:"change"},exportAs:["matRadioButton"],ngContentSelectors:pL,decls:13,vars:17,consts:[["formField",""],["input",""],["mat-internal-form-field","",3,"labelPosition"],[1,"mdc-radio"],["aria-hidden","true",1,"mat-mdc-radio-touch-target",3,"click"],["type","radio","aria-invalid","false",1,"mdc-radio__native-control",3,"change","id","checked","disabled","required"],["aria-hidden","true",1,"mdc-radio__background"],[1,"mdc-radio__outer-circle"],[1,"mdc-radio__inner-circle"],["mat-ripple","","aria-hidden","true",1,"mat-radio-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mat-ripple-element","mat-radio-persistent-ripple"],[1,"mdc-label",3,"for"]],template:function(i,r){i&1&&(de(),g(0,"div",2,0)(2,"div",3)(3,"div",4),ee("click",function(s){return r._onTouchTargetClick(s)}),b(),g(4,"input",5,1),ee("change",function(s){return r._onInputInteraction(s)}),b(),g(6,"div",6),se(7,"div",7)(8,"div",8),b(),g(9,"div",9),se(10,"div",10),b()(),g(11,"label",11),O(12),b()()),i&2&&(J("labelPosition",r.labelPosition),p(2),P("mdc-radio--disabled",r.disabled),p(2),J("id",r.inputId)("checked",r.checked)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),ne("name",r.name)("value",r.value)("aria-label",r.ariaLabel)("aria-labelledby",r.ariaLabelledby)("aria-describedby",r.ariaDescribedby)("aria-disabled",r.disabled&&r.disabledInteractive?"true":null),p(5),J("matRippleTrigger",r._rippleTrigger.nativeElement)("matRippleDisabled",r._isRippleDisabled())("matRippleCentered",!0),p(2),J("for",r.inputId))},dependencies:[Gi,Cf],styles:[`.mat-mdc-radio-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-radio-button .mdc-radio {
  display: inline-block;
  position: relative;
  flex: 0 0 auto;
  box-sizing: content-box;
  width: 20px;
  height: 20px;
  cursor: pointer;
  will-change: opacity, transform, border-color, color;
  padding: calc((var(--mat-radio-state-layer-size, 40px) - 20px) / 2);
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]):not(:focus) ~ .mdc-radio__background::before {
  opacity: 0.04;
  transform: scale(1);
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]) ~ .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-hover-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-hover-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-hover-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-pressed-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-pressed-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-pressed-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__background {
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
}
.mat-mdc-radio-button .mdc-radio__background::before {
  position: absolute;
  transform: scale(0, 0);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
  content: "";
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  width: var(--mat-radio-state-layer-size, 40px);
  height: var(--mat-radio-state-layer-size, 40px);
  top: calc(-1 * (var(--mat-radio-state-layer-size, 40px) - 20px) / 2);
  left: calc(-1 * (var(--mat-radio-state-layer-size, 40px) - 20px) / 2);
}
.mat-mdc-radio-button .mdc-radio__outer-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-width: 2px;
  border-style: solid;
  border-radius: 50%;
  transition: border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-radio-button .mdc-radio__inner-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  transform: scale(0);
  border-radius: 50%;
  transition: transform 90ms cubic-bezier(0.4, 0, 0.6, 1), background-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
@media (forced-colors: active) {
  .mat-mdc-radio-button .mdc-radio__inner-circle {
    background-color: CanvasText !important;
  }
}
.mat-mdc-radio-button .mdc-radio__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  top: 0;
  right: 0;
  left: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--mat-radio-state-layer-size, 40px);
  height: var(--mat-radio-state-layer-size, 40px);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:focus + .mdc-radio__background::before {
  transform: scale(1);
  opacity: 0.12;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {
  cursor: default;
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface, currentColor));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-selected-focus-icon-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-selected-focus-icon-color, var(--mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  transform: scale(0.5);
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled {
  pointer-events: auto;
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__outer-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__inner-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface, currentColor));
  opacity: var(--mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__background::before,
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__outer-circle,
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__inner-circle {
  transition: none !important;
}
.mat-mdc-radio-button label {
  cursor: pointer;
}
.mat-mdc-radio-button label:empty {
  display: none;
}
.mat-mdc-radio-button .mdc-radio__background::before {
  background-color: var(--mat-radio-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element,
.mat-mdc-radio-button.mat-mdc-radio-checked .mdc-radio__background::before {
  background-color: var(--mat-radio-checked-ripple-color, var(--mat-sys-primary));
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mat-ripple-element,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__background::before {
  background-color: var(--mat-radio-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button .mat-internal-form-field {
  color: var(--mat-radio-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-radio-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-radio-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-radio-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-radio-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-radio-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-radio-button .mdc-radio--disabled + label {
  color: var(--mat-radio-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-radio-button .mat-radio-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: 50%;
}
.mat-mdc-radio-button .mat-radio-ripple > .mat-ripple-element {
  opacity: 0.14;
}
.mat-mdc-radio-button .mat-radio-ripple::before {
  border-radius: 50%;
}
.mat-mdc-radio-button .mdc-radio > .mdc-radio__native-control:focus:enabled:not(:checked) ~ .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--mat-radio-unselected-focus-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-radio-button.cdk-focused .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-radio-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-radio-disabled.mat-mdc-radio-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-radio-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-radio-touch-target-size, 48px);
  width: var(--mat-radio-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--mat-radio-touch-target-display, block);
}
[dir=rtl] .mat-mdc-radio-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2,changeDetection:0})}return t})(),RE=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=M({type:t});static \u0275inj=I({imports:[Hn,vL,re]})}return t})();var bL=["mat-menu-item",""],yL=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],wL=["mat-icon, [matMenuItemIcon]","*"];function CL(t,n){t&1&&(Lt(),g(0,"svg",2),se(1,"polygon",3),b())}var DL=["*"];function xL(t,n){if(t&1){let e=at();Qe(0,"div",0),Mo("click",function(){Pe(e);let r=A();return Le(r.closed.emit("click"))})("animationstart",function(r){Pe(e);let o=A();return Le(o._onAnimationStart(r.animationName))})("animationend",function(r){Pe(e);let o=A();return Le(o._onAnimationDone(r.animationName))})("animationcancel",function(r){Pe(e);let o=A();return Le(o._onAnimationDone(r.animationName))}),Qe(1,"div",1),O(2),st()()}if(t&2){let e=A();pt(e._classList),P("mat-menu-panel-animations-disabled",e._animationsDisabled)("mat-menu-panel-exit-animation",e._panelAnimationState==="void")("mat-menu-panel-animating",e._isAnimating()),Vt("id",e.panelId),ne("aria-label",e.ariaLabel||null)("aria-labelledby",e.ariaLabelledby||null)("aria-describedby",e.ariaDescribedby||null)}}var W_=new v("MAT_MENU_PANEL"),vl=(()=>{class t{_elementRef=d(F);_document=d(z);_focusMonitor=d(zt);_parentMenu=d(W_,{optional:!0});_changeDetectorRef=d(be);role="menuitem";disabled=!1;disableRipple=!1;_hovered=new C;_focused=new C;_highlighted=!1;_triggersSubmenu=!1;constructor(){d(Je).load(Vn),this._parentMenu?.addItem?.(this)}focus(e,i){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,i):this._getHostElement().focus(i),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),i=e.querySelectorAll("mat-icon, .material-icons");for(let r=0;r<i.length;r++)i[r].remove();return e.textContent?.trim()||""}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(i,r){i&1&&ee("click",function(s){return r._checkDisabled(s)})("mouseenter",function(){return r._handleMouseEnter()}),i&2&&(ne("role",r.role)("tabindex",r._getTabIndex())("aria-disabled",r.disabled)("disabled",r.disabled||null),P("mat-mdc-menu-item-highlighted",r._highlighted)("mat-mdc-menu-item-submenu-trigger",r._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",Z],disableRipple:[2,"disableRipple","disableRipple",Z]},exportAs:["matMenuItem"],attrs:bL,ngContentSelectors:wL,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(i,r){i&1&&(de(yL),O(0),g(1,"span",0),O(2,1),b(),se(3,"div",1),G(4,CL,2,0,":svg:svg",2)),i&2&&(p(3),J("matRippleDisabled",r.disableRipple||r.disabled)("matRippleTrigger",r._getHostElement()),p(),W(r._triggersSubmenu?4:-1))},dependencies:[Gi],encapsulation:2,changeDetection:0})}return t})();var EL=new v("MatMenuContent");var IL=new v("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),G_="_mat-menu-enter",xf="_mat-menu-exit",gs=(()=>{class t{_elementRef=d(F);_changeDetectorRef=d(be);_injector=d(H);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=Ne();_allItems;_directDescendantItems=new vn;_classList={};_panelAnimationState="void";_animationDone=new C;_isAnimating=xe(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;set panelClass(e){let i=this._previousPanelClass,r=_({},this._classList);i&&i.length&&i.split(" ").forEach(o=>{r[o]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(o=>{r[o]=!0}),this._elementRef.nativeElement.className=""),this._classList=r}_previousPanelClass;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new q;close=this.closed;panelId=d(Ue).getId("mat-menu-panel-");constructor(){let e=d(IL);this.overlayPanelClass=e.overlayPanelClass||"",this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new tl(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(Ze(this._directDescendantItems),ye(e=>Ut(...e.map(i=>i._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let i=this._keyManager;if(this._panelAnimationState==="enter"&&i.activeItem?._hasFocus()){let r=e.toArray(),o=Math.max(0,Math.min(r.length-1,i.activeItemIndex||0));r[o]&&!r[o].disabled?i.setActiveItem(o):i.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(Ze(this._directDescendantItems),ye(i=>Ut(...i.map(r=>r._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let i=e.keyCode,r=this._keyManager;switch(i){case 27:St(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(i===38||i===40)&&r.setFocusOrigin("keyboard"),r.onKeydown(e);return}}focusFirstItem(e="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=He(()=>{let i=this._resolvePanel();if(!i||!i.contains(document.activeElement)){let r=this._keyManager;r.setFocusOrigin(e).setFirstItemActive(),!r.activeItem&&i&&i.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,i=this.yPosition){this._classList=Q(_({},this._classList),{"mat-menu-before":e==="before","mat-menu-after":e==="after","mat-menu-above":i==="above","mat-menu-below":i==="below"}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let i=e===xf;(i||e===G_)&&(i&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(i?"void":"enter"),this._isAnimating.set(!1))}_onAnimationStart(e){(e===G_||e===xf)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?"enter":"void",e){if(this._keyManager.activeItemIndex===0){let i=this._resolvePanel();i&&(i.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(xf),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?G_:xf)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(Ze(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(i=>i._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),e}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["mat-menu"]],contentQueries:function(i,r,o){if(i&1&&Ye(o,EL,5)(o,vl,5)(o,vl,4),i&2){let s;U(s=$())&&(r.lazyContent=s.first),U(s=$())&&(r._allItems=s),U(s=$())&&(r.items=s)}},viewQuery:function(i,r){if(i&1&&Re(bt,5),i&2){let o;U(o=$())&&(r.templateRef=o.first)}},hostVars:3,hostBindings:function(i,r){i&2&&ne("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",Z],hasBackdrop:[2,"hasBackdrop","hasBackdrop",e=>e==null?null:Z(e)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[Ie([{provide:W_,useExisting:t}])],ngContentSelectors:DL,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(i,r){i&1&&(de(),fa(0,xL,3,12,"ng-template"))},styles:[`mat-menu {
  display: none;
}

.mat-mdc-menu-content {
  margin: 0;
  padding: 8px 0;
  outline: 0;
}
.mat-mdc-menu-content,
.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  flex: 1;
  white-space: normal;
  font-family: var(--mat-menu-item-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-menu-item-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-menu-item-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-menu-item-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-menu-item-label-text-weight, var(--mat-sys-label-large-weight));
}

@keyframes _mat-menu-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-menu-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-menu-panel {
  min-width: 112px;
  max-width: 280px;
  overflow: auto;
  box-sizing: border-box;
  outline: 0;
  animation: _mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);
  border-radius: var(--mat-menu-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-menu-container-color, var(--mat-sys-surface-container));
  box-shadow: var(--mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  will-change: transform, opacity;
}
.mat-mdc-menu-panel.mat-menu-panel-exit-animation {
  animation: _mat-menu-exit 100ms 25ms linear forwards;
}
.mat-mdc-menu-panel.mat-menu-panel-animations-disabled {
  animation: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating {
  pointer-events: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty) {
  display: none;
}
@media (forced-colors: active) {
  .mat-mdc-menu-panel {
    outline: solid 1px;
  }
}
.mat-mdc-menu-panel .mat-divider {
  border-top-color: var(--mat-menu-divider-color, var(--mat-sys-surface-variant));
  margin-bottom: var(--mat-menu-divider-bottom-spacing, 8px);
  margin-top: var(--mat-menu-divider-top-spacing, 8px);
}

.mat-mdc-menu-item {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  background: none;
  text-decoration: none;
  margin: 0;
  min-height: 48px;
  padding-left: var(--mat-menu-item-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-trailing-spacing, 12px);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-menu-item::-moz-focus-inner {
  border: 0;
}
[dir=rtl] .mat-mdc-menu-item {
  padding-left: var(--mat-menu-item-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-leading-spacing, 12px);
}
.mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-leading-spacing, 12px);
}
.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {
  color: var(--mat-menu-item-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-menu-item .mat-icon-no-color,
.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {
  color: var(--mat-menu-item-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-menu-item[disabled] {
  cursor: default;
  opacity: 0.38;
}
.mat-mdc-menu-item[disabled]::after {
  display: block;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.mat-mdc-menu-item:focus {
  outline: 0;
}
.mat-mdc-menu-item .mat-icon {
  flex-shrink: 0;
  margin-right: var(--mat-menu-item-spacing, 12px);
  height: var(--mat-menu-item-icon-size, 24px);
  width: var(--mat-menu-item-icon-size, 24px);
}
[dir=rtl] .mat-mdc-menu-item {
  text-align: right;
}
[dir=rtl] .mat-mdc-menu-item .mat-icon {
  margin-right: 0;
  margin-left: var(--mat-menu-item-spacing, 12px);
}
.mat-mdc-menu-item:not([disabled]):hover {
  background-color: var(--mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {
  background-color: var(--mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
@media (forced-colors: active) {
  .mat-mdc-menu-item {
    margin-top: 1px;
  }
}

.mat-mdc-menu-submenu-icon {
  width: var(--mat-menu-item-icon-size, 24px);
  height: 10px;
  fill: currentColor;
  padding-left: var(--mat-menu-item-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-submenu-icon {
  padding-right: var(--mat-menu-item-spacing, 12px);
  padding-left: 0;
}
[dir=rtl] .mat-mdc-menu-submenu-icon polygon {
  transform: scaleX(-1);
  transform-origin: center;
}
@media (forced-colors: active) {
  .mat-mdc-menu-submenu-icon {
    fill: CanvasText;
  }
}

.mat-mdc-menu-item .mat-mdc-menu-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
`],encapsulation:2,changeDetection:0})}return t})(),SL=new v("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let t=d(H);return()=>fi(t)}});var ps=new WeakMap,ML=(()=>{class t{_canHaveBackdrop;_element=d(F);_viewContainerRef=d(ot);_menuItemInstance=d(vl,{optional:!0,self:!0});_dir=d(ct,{optional:!0});_focusMonitor=d(zt);_ngZone=d(L);_injector=d(H);_scrollStrategy=d(SL);_changeDetectorRef=d(be);_animationsDisabled=Ne();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=pe.EMPTY;_menuCloseSubscription=pe.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e&&(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(i=>{this._destroyMenu(i),(i==="click"||i==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(i)})),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let i=d(W_,{optional:!0});this._parentMaterialMenu=i instanceof gs?i:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&ps.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let i=this._menu;if(this._menuOpen||!i)return;this._pendingRemoval?.unsubscribe();let r=ps.get(i);ps.set(i,this),r&&r!==this&&r._closeMenu();let o=this._createOverlay(i),s=o.getConfig(),a=s.positionStrategy;this._setPosition(i,a),this._canHaveBackdrop?s.hasBackdrop=i.hasBackdrop==null?!this._triggersSubmenu():i.hasBackdrop:s.hasBackdrop=i.hasBackdrop??!1,o.hasAttached()||(o.attach(this._getPortal(i)),i.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),i.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,i.direction=this.dir,e&&i.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0),i instanceof gs&&(i._setIsOpen(!0),i._directDescendantItems.changes.pipe(ce(i.close)).subscribe(()=>{a.withLockedPosition(!1).reapplyLastPosition(),a.withLockedPosition(!0)}))}focus(e,i){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,i):this._element.nativeElement.focus(i)}_destroyMenu(e){let i=this._overlayRef,r=this._menu;!i||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),r instanceof gs&&this._ownsMenu(r)?(this._pendingRemoval=r._animationDone.pipe(Me(1)).subscribe(()=>{i.detach(),ps.has(r)||r.lazyContent?.detach()}),r._setIsOpen(!1)):(i.detach(),r?.lazyContent?.detach()),r&&this._ownsMenu(r)&&ps.delete(r),this.restoreFocus&&(e==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let i=this._getOverlayConfig(e);this._subscribeToPositions(e,i.positionStrategy),this._overlayRef=mi(this._injector,i),this._overlayRef.keydownEvents().subscribe(r=>{this._menu instanceof gs&&this._menu._handleKeydown(r)})}return this._overlayRef}_getOverlayConfig(e){return new ui({positionStrategy:Wr(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:e.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,i){e.setPositionClasses&&i.positionChanges.subscribe(r=>{this._ngZone.run(()=>{let o=r.connectionPair.overlayX==="start"?"after":"before",s=r.connectionPair.overlayY==="top"?"below":"above";e.setPositionClasses(o,s)})})}_setPosition(e,i){let[r,o]=e.xPosition==="before"?["end","start"]:["start","end"],[s,a]=e.yPosition==="above"?["bottom","top"]:["top","bottom"],[l,c]=[s,a],[u,f]=[r,o],m=0;if(this._triggersSubmenu()){if(f=r=e.xPosition==="before"?"start":"end",o=u=r==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let h=this._parentMaterialMenu.items.first;this._parentInnerPadding=h?h._getHostElement().offsetTop:0}m=s==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(l=s==="top"?"bottom":"top",c=a==="top"?"bottom":"top");i.withPositions([{originX:r,originY:l,overlayX:u,overlayY:s,offsetY:m},{originX:o,originY:l,overlayX:f,overlayY:s,offsetY:m},{originX:r,originY:c,overlayX:u,overlayY:a,offsetY:-m},{originX:o,originY:c,overlayX:f,overlayY:a,offsetY:-m}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),i=this._overlayRef.detachments(),r=this._parentMaterialMenu?this._parentMaterialMenu.closed:V(),o=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(he(s=>this._menuOpen&&s!==this._menuItemInstance)):V();return Ut(e,r,o,i)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new di(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return ps.get(e)===this}_triggerIsAriaDisabled(){return Z(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(i){Cp()};static \u0275dir=j({type:t})}return t})(),AE=(()=>{class t extends ML{_cleanupTouchstart;_hoverSubscription=pe.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new q;onMenuOpen=this.menuOpened;menuClosed=new q;onMenuClose=this.menuClosed;constructor(){super(!0);let e=d(Be);this._cleanupTouchstart=e.listen(this._element.nativeElement,"touchstart",i=>{Vr(i)||(this._openedBy="touch")},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){jr(e)||(this._openedBy=e.button===0?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let i=e.keyCode;(i===13||i===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(i===39&&this.dir==="ltr"||i===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(!1))}))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(i,r){i&1&&ee("click",function(s){return r._handleClick(s)})("mousedown",function(s){return r._handleMousedown(s)})("keydown",function(s){return r._handleKeydown(s)}),i&2&&ne("aria-haspopup",r.menu?"menu":null)("aria-expanded",r.menuOpen)("aria-controls",r.menuOpen?r.menu==null?null:r.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[ke]})}return t})();var OE=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=M({type:t});static \u0275inj=I({imports:[Hn,$i,re,an]})}return t})();var Ef=class{tracker;columnIndex=0;rowIndex=0;get rowCount(){return this.rowIndex+1}get rowspan(){let n=Math.max(...this.tracker);return n>1?this.rowCount+n-1:this.rowCount}positions;update(n,e){this.columnIndex=0,this.rowIndex=0,this.tracker=new Array(n),this.tracker.fill(0,0,this.tracker.length),this.positions=e.map(i=>this._trackTile(i))}_trackTile(n){let e=this._findMatchingGap(n.colspan);return this._markTilePosition(e,n),this.columnIndex=e+n.colspan,new q_(this.rowIndex,e)}_findMatchingGap(n){n>this.tracker.length;let e=-1,i=-1;do{if(this.columnIndex+n>this.tracker.length){this._nextRow(),e=this.tracker.indexOf(0,this.columnIndex),i=this._findGapEndIndex(e);continue}if(e=this.tracker.indexOf(0,this.columnIndex),e==-1){this._nextRow(),e=this.tracker.indexOf(0,this.columnIndex),i=this._findGapEndIndex(e);continue}i=this._findGapEndIndex(e),this.columnIndex=e+1}while(i-e<n||i==0);return Math.max(e,0)}_nextRow(){this.columnIndex=0,this.rowIndex++;for(let n=0;n<this.tracker.length;n++)this.tracker[n]=Math.max(0,this.tracker[n]-1)}_findGapEndIndex(n){for(let e=n+1;e<this.tracker.length;e++)if(this.tracker[e]!=0)return e;return this.tracker.length}_markTilePosition(n,e){for(let i=0;i<e.colspan;i++)this.tracker[n+i]=e.rowspan}},q_=class{row;col;constructor(n,e){this.row=n,this.col=e}};var NE=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t,selectors:[["","mat-line",""],["","matLine",""]],hostAttrs:[1,"mat-line"]})}return t})();function FE(t,n,e="mat"){t.changes.pipe(Ze(t)).subscribe(({length:i})=>{bl(n,`${e}-2-line`,!1),bl(n,`${e}-3-line`,!1),bl(n,`${e}-multi-line`,!1),i===2||i===3?bl(n,`${e}-${i}-line`,!0):i>3&&bl(n,`${e}-multi-line`,!0)})}function bl(t,n,e){t.nativeElement.classList.toggle(n,e)}var Q_=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=M({type:t});static \u0275inj=I({imports:[re]})}return t})();var PE=["*"],kL=[[["","mat-grid-avatar",""],["","matGridAvatar",""]],[["","mat-line",""],["","matLine",""]],"*"],RL=["[mat-grid-avatar], [matGridAvatar]","[mat-line], [matLine]","*"],AL=`.mat-grid-list {
  display: block;
  position: relative;
}

.mat-grid-tile {
  display: block;
  position: absolute;
  overflow: hidden;
}
.mat-grid-tile .mat-grid-tile-header,
.mat-grid-tile .mat-grid-tile-footer {
  display: flex;
  align-items: center;
  height: 48px;
  color: #fff;
  background: rgba(0, 0, 0, 0.38);
  overflow: hidden;
  padding: 0 16px;
  position: absolute;
  left: 0;
  right: 0;
}
.mat-grid-tile .mat-grid-tile-header > *,
.mat-grid-tile .mat-grid-tile-footer > * {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: inherit;
}
.mat-grid-tile .mat-grid-tile-header.mat-2-line,
.mat-grid-tile .mat-grid-tile-footer.mat-2-line {
  height: 68px;
}
.mat-grid-tile .mat-grid-list-text {
  display: flex;
  flex-direction: column;
  flex: auto;
  box-sizing: border-box;
  overflow: hidden;
}
.mat-grid-tile .mat-grid-list-text > * {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: inherit;
}
.mat-grid-tile .mat-grid-list-text:empty {
  display: none;
}
.mat-grid-tile .mat-grid-tile-header {
  top: 0;
}
.mat-grid-tile .mat-grid-tile-footer {
  bottom: 0;
}
.mat-grid-tile .mat-grid-avatar {
  padding-right: 16px;
}
[dir=rtl] .mat-grid-tile .mat-grid-avatar {
  padding-right: 0;
  padding-left: 16px;
}
.mat-grid-tile .mat-grid-avatar:empty {
  display: none;
}

.mat-grid-tile-header {
  font-size: var(--mat-grid-list-tile-header-primary-text-size, var(--mat-sys-body-large));
}
.mat-grid-tile-header .mat-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  box-sizing: border-box;
}
.mat-grid-tile-header .mat-line:nth-child(n+2) {
  font-size: var(--mat-grid-list-tile-header-secondary-text-size, var(--mat-sys-body-medium));
}

.mat-grid-tile-footer {
  font-size: var(--mat-grid-list-tile-footer-primary-text-size, var(--mat-sys-body-large));
}
.mat-grid-tile-footer .mat-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  box-sizing: border-box;
}
.mat-grid-tile-footer .mat-line:nth-child(n+2) {
  font-size: var(--mat-grid-list-tile-footer-secondary-text-size, var(--mat-sys-body-medium));
}

.mat-grid-tile-content {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0;
  margin: 0;
}
`,LE=new v("MAT_GRID_LIST"),X_=(()=>{class t{_element=d(F);_gridList=d(LE,{optional:!0});_rowspan=1;_colspan=1;constructor(){}get rowspan(){return this._rowspan}set rowspan(e){this._rowspan=Math.round(sn(e))}get colspan(){return this._colspan}set colspan(e){this._colspan=Math.round(sn(e))}_setStyle(e,i){this._element.nativeElement.style[e]=i}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["mat-grid-tile"]],hostAttrs:[1,"mat-grid-tile"],hostVars:2,hostBindings:function(i,r){i&2&&ne("rowspan",r.rowspan)("colspan",r.colspan)},inputs:{rowspan:"rowspan",colspan:"colspan"},exportAs:["matGridTile"],ngContentSelectors:PE,decls:2,vars:0,consts:[[1,"mat-grid-tile-content"]],template:function(i,r){i&1&&(de(),Qe(0,"div",0),O(1),st())},styles:[`.mat-grid-list {
  display: block;
  position: relative;
}

.mat-grid-tile {
  display: block;
  position: absolute;
  overflow: hidden;
}
.mat-grid-tile .mat-grid-tile-header,
.mat-grid-tile .mat-grid-tile-footer {
  display: flex;
  align-items: center;
  height: 48px;
  color: #fff;
  background: rgba(0, 0, 0, 0.38);
  overflow: hidden;
  padding: 0 16px;
  position: absolute;
  left: 0;
  right: 0;
}
.mat-grid-tile .mat-grid-tile-header > *,
.mat-grid-tile .mat-grid-tile-footer > * {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: inherit;
}
.mat-grid-tile .mat-grid-tile-header.mat-2-line,
.mat-grid-tile .mat-grid-tile-footer.mat-2-line {
  height: 68px;
}
.mat-grid-tile .mat-grid-list-text {
  display: flex;
  flex-direction: column;
  flex: auto;
  box-sizing: border-box;
  overflow: hidden;
}
.mat-grid-tile .mat-grid-list-text > * {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: inherit;
}
.mat-grid-tile .mat-grid-list-text:empty {
  display: none;
}
.mat-grid-tile .mat-grid-tile-header {
  top: 0;
}
.mat-grid-tile .mat-grid-tile-footer {
  bottom: 0;
}
.mat-grid-tile .mat-grid-avatar {
  padding-right: 16px;
}
[dir=rtl] .mat-grid-tile .mat-grid-avatar {
  padding-right: 0;
  padding-left: 16px;
}
.mat-grid-tile .mat-grid-avatar:empty {
  display: none;
}

.mat-grid-tile-header {
  font-size: var(--mat-grid-list-tile-header-primary-text-size, var(--mat-sys-body-large));
}
.mat-grid-tile-header .mat-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  box-sizing: border-box;
}
.mat-grid-tile-header .mat-line:nth-child(n+2) {
  font-size: var(--mat-grid-list-tile-header-secondary-text-size, var(--mat-sys-body-medium));
}

.mat-grid-tile-footer {
  font-size: var(--mat-grid-list-tile-footer-primary-text-size, var(--mat-sys-body-large));
}
.mat-grid-tile-footer .mat-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  box-sizing: border-box;
}
.mat-grid-tile-footer .mat-line:nth-child(n+2) {
  font-size: var(--mat-grid-list-tile-footer-secondary-text-size, var(--mat-sys-body-medium));
}

.mat-grid-tile-content {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0;
  margin: 0;
}
`],encapsulation:2,changeDetection:0})}return t})(),BE=(()=>{class t{_element=d(F);_lines;constructor(){}ngAfterContentInit(){FE(this._lines,this._element)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["mat-grid-tile-header"],["mat-grid-tile-footer"]],contentQueries:function(i,r,o){if(i&1&&Ye(o,NE,5),i&2){let s;U(s=$())&&(r._lines=s)}},ngContentSelectors:RL,decls:4,vars:0,consts:[[1,"mat-grid-list-text"]],template:function(i,r){i&1&&(de(kL),O(0),Qe(1,"div",0),O(2,1),st(),O(3,2))},encapsulation:2,changeDetection:0})}return t})();var jE=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t,selectors:[["mat-grid-tile-header"]],hostAttrs:[1,"mat-grid-tile-header"]})}return t})();var OL=/^-?\d+((\.\d+)?[A-Za-z%$]?)+$/,yl=class{_gutterSize;_rows=0;_rowspan=0;_cols;_direction;init(n,e,i,r){this._gutterSize=VE(n),this._rows=e.rowCount,this._rowspan=e.rowspan,this._cols=i,this._direction=r}getBaseTileSize(n,e){return`(${n}% - (${this._gutterSize} * ${e}))`}getTilePosition(n,e){return e===0?"0":Yr(`(${n} + ${this._gutterSize}) * ${e}`)}getTileSize(n,e){return`(${n} * ${e}) + (${e-1} * ${this._gutterSize})`}setStyle(n,e,i){let r=100/this._cols,o=(this._cols-1)/this._cols;this.setColStyles(n,i,r,o),this.setRowStyles(n,e,r,o)}setColStyles(n,e,i,r){let o=this.getBaseTileSize(i,r),s=this._direction==="rtl"?"right":"left";n._setStyle(s,this.getTilePosition(o,e)),n._setStyle("width",Yr(this.getTileSize(o,n.colspan)))}getGutterSpan(){return`${this._gutterSize} * (${this._rowspan} - 1)`}getTileSpan(n){return`${this._rowspan} * ${this.getTileSize(n,1)}`}getComputedHeight(){return null}},Y_=class extends yl{fixedRowHeight;constructor(n){super(),this.fixedRowHeight=n}init(n,e,i,r){super.init(n,e,i,r),this.fixedRowHeight=VE(this.fixedRowHeight),OL.test(this.fixedRowHeight)}setRowStyles(n,e){n._setStyle("top",this.getTilePosition(this.fixedRowHeight,e)),n._setStyle("height",Yr(this.getTileSize(this.fixedRowHeight,n.rowspan)))}getComputedHeight(){return["height",Yr(`${this.getTileSpan(this.fixedRowHeight)} + ${this.getGutterSpan()}`)]}reset(n){n._setListStyle(["height",null]),n._tiles&&n._tiles.forEach(e=>{e._setStyle("top",null),e._setStyle("height",null)})}},K_=class extends yl{rowHeightRatio;baseTileHeight;constructor(n){super(),this._parseRatio(n)}setRowStyles(n,e,i,r){let o=i/this.rowHeightRatio;this.baseTileHeight=this.getBaseTileSize(o,r),n._setStyle("marginTop",this.getTilePosition(this.baseTileHeight,e)),n._setStyle("paddingTop",Yr(this.getTileSize(this.baseTileHeight,n.rowspan)))}getComputedHeight(){return["paddingBottom",Yr(`${this.getTileSpan(this.baseTileHeight)} + ${this.getGutterSpan()}`)]}reset(n){n._setListStyle(["paddingBottom",null]),n._tiles.forEach(e=>{e._setStyle("marginTop",null),e._setStyle("paddingTop",null)})}_parseRatio(n){let e=n.split(":");e.length,this.rowHeightRatio=parseFloat(e[0])/parseFloat(e[1])}},Z_=class extends yl{setRowStyles(n,e){let i=100/this._rowspan,r=(this._rows-1)/this._rows,o=this.getBaseTileSize(i,r);n._setStyle("top",this.getTilePosition(o,e)),n._setStyle("height",Yr(this.getTileSize(o,n.rowspan)))}reset(n){n._tiles&&n._tiles.forEach(e=>{e._setStyle("top",null),e._setStyle("height",null)})}};function Yr(t){return`calc(${t})`}function VE(t){return t.match(/([A-Za-z%]+)$/)?t:`${t}px`}var NL="fit",HE=(()=>{class t{_element=d(F);_dir=d(ct,{optional:!0});_cols;_tileCoordinator;_rowHeight;_gutter="1px";_tileStyler;_tiles;constructor(){}get cols(){return this._cols}set cols(e){this._cols=Math.max(1,Math.round(sn(e)))}get gutterSize(){return this._gutter}set gutterSize(e){this._gutter=`${e??""}`}get rowHeight(){return this._rowHeight}set rowHeight(e){let i=`${e??""}`;i!==this._rowHeight&&(this._rowHeight=i,this._setTileStyler(this._rowHeight))}ngOnInit(){this._checkCols(),this._checkRowHeight()}ngAfterContentChecked(){this._layoutTiles()}_checkCols(){this.cols}_checkRowHeight(){this._rowHeight||this._setTileStyler("1:1")}_setTileStyler(e){this._tileStyler&&this._tileStyler.reset(this),e===NL?this._tileStyler=new Z_:e&&e.indexOf(":")>-1?this._tileStyler=new K_(e):this._tileStyler=new Y_(e)}_layoutTiles(){this._tileCoordinator||(this._tileCoordinator=new Ef);let e=this._tileCoordinator,i=this._tiles.filter(o=>!o._gridList||o._gridList===this),r=this._dir?this._dir.value:"ltr";this._tileCoordinator.update(this.cols,i),this._tileStyler.init(this.gutterSize,e,this.cols,r),i.forEach((o,s)=>{let a=e.positions[s];this._tileStyler.setStyle(o,a.row,a.col)}),this._setListStyle(this._tileStyler.getComputedHeight())}_setListStyle(e){e&&(this._element.nativeElement.style[e[0]]=e[1])}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["mat-grid-list"]],contentQueries:function(i,r,o){if(i&1&&Ye(o,X_,5),i&2){let s;U(s=$())&&(r._tiles=s)}},hostAttrs:[1,"mat-grid-list"],hostVars:1,hostBindings:function(i,r){i&2&&ne("cols",r.cols)},inputs:{cols:"cols",gutterSize:"gutterSize",rowHeight:"rowHeight"},exportAs:["matGridList"],features:[Ie([{provide:LE,useExisting:t}])],ngContentSelectors:PE,decls:2,vars:0,template:function(i,r){i&1&&(de(),Qe(0,"div"),O(1),st())},styles:[AL],encapsulation:2,changeDetection:0})}return t})(),zE=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=M({type:t});static \u0275inj=I({imports:[Q_,re,Q_]})}return t})();var UE=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=M({type:t});static \u0275inj=I({})}return t})();var $E=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=M({type:t});static \u0275inj=I({imports:[UE,re]})}return t})();var zn=class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=M({type:t});static \u0275inj=I({imports:[vx,dE,uE,mE,pE,CE,EE,cl,IE,kE,RE,pf,OE,zE,$E]})};var PL=t=>({active:t}),GE=t=>({color:t});function LL(t,n){if(t&1){let e=at();g(0,"button",3),ee("click",function(){let r=Pe(e).$implicit,o=A();return Le(o.changeLanguage(r))}),g(1,"mat-icon",4),x(2," language "),b(),g(3,"span",4),x(4),ni(5,"transloco"),b()()}if(t&2){let e=n.$implicit,i=A();J("ngClass",Rr(6,PL,i.activeLang===e)),p(),J("ngStyle",Rr(8,GE,i.activeLang===e?"rgb(255 143 0)":"")),p(2),J("ngStyle",Rr(10,GE,i.activeLang===e?"rgb(255 143 0)":"")),p(),oe(" ",ii(5,4,e+"-language-label")," ")}}var If=class t{translocoService=d(as);activeLang;availableLangs;ngOnInit(){let n=gx();this.availableLangs=this.translocoService.getAvailableLangs(),n&&this.translocoService.isLang(n)?(this.activeLang=n,this.translocoService.setActiveLang(this.activeLang)):this.activeLang=this.translocoService.getDefaultLang()}changeLanguage(n){this.translocoService.setActiveLang(n),this.activeLang=this.translocoService.getActiveLang()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["app-language-selector"]],decls:10,vars:4,consts:[["menu","matMenu"],["mat-icon-button","","aria-label","Language Selection",1,"example-icon","favorite-icon",3,"matMenuTriggerFor"],["mat-menu-item","",3,"ngClass"],["mat-menu-item","",3,"click","ngClass"],[3,"ngStyle"]],template:function(e,i){if(e&1&&(g(0,"button",1)(1,"mat-icon"),x(2,"translate"),b()(),g(3,"span"),x(4),ni(5,"transloco"),b(),g(6,"mat-menu",null,0),en(8,LL,6,12,"button",2,Jt),b()),e&2){let r=Et(7);J("matMenuTriggerFor",r),p(4),ve(ii(5,2,i.activeLang+"-language-label")),p(4),tn(i.availableLangs)}},dependencies:[ko,Gp,Wp,zn,wf,qr,gs,vl,AE,ls],encapsulation:2})};function BL(t,n){t&1&&(g(0,"span"),x(1),ni(2,"transloco"),b()),t&2&&(p(),ve(ii(2,1,"app-title")))}function jL(t,n){t&1&&(g(0,"span",4),x(1),ni(2,"transloco"),b()),t&2&&(p(),ve(ii(2,1,"app-title-short")))}var Sf=class t{responsive=d(ci);sidebarHandle;isXSmall;ngOnInit(){this.responsive.observe(Jo.XSmall).subscribe(n=>{n.matches?this.isXSmall=!0:this.isXSmall=!1})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["app-page-header"]],inputs:{sidebarHandle:"sidebarHandle"},decls:10,vars:4,consts:[[1,"page-header"],[1,"main-toolbar","toolbar"],["type","button","mat-icon-button","",3,"click","hidden"],[1,"app-name","text-xl"],[1,"text-xl"],[1,"spacer"]],template:function(e,i){e&1&&(g(0,"div",0)(1,"mat-toolbar",1)(2,"button",2),ee("click",function(){return i.sidebarHandle.toggle()}),g(3,"mat-icon"),x(4,"menu"),b()(),g(5,"span",3),G(6,BL,3,3,"span")(7,jL,3,3,"span",4),b(),se(8,"span",5)(9,"app-language-selector"),b()()),e&2&&(p(),P("is-mobile",i.isXSmall),p(),J("hidden",!i.isXSmall),p(4),W(i.isXSmall?7:6))},dependencies:[zn,gf,wf,qr,If,ls],styles:[".is-mobile[_ngcontent-%COMP%]{position:fixed;z-index:2}.app-name[_ngcontent-%COMP%]{margin:0 0 0 8px}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}.mat-toolbar[_ngcontent-%COMP%]{color:var(--mat-sys-primary);background:var(--bg-color)}"]})};var Mf=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["app-page-footer"]],decls:7,vars:3,consts:[[1,"page-footer","text-xs","flex","items-center","flex-row","flex-wrap"],["color","primary",1,"page-footer"],[1,"flex","flex-1","justify-end","text-xl"],["href","https://boardgamegeek.com/user/Vortilion","target","_blank",1,"text-blue-700"]],template:function(e,i){e&1&&(g(0,"div",0)(1,"mat-toolbar",1)(2,"div",2),x(3),ni(4,"transloco"),g(5,"a",3),x(6,"Vortilion"),b()()()()),e&2&&(p(3),oe(" ",ii(4,1,"creator-prefix"),"\xA0"))},dependencies:[zn,gf,ls],styles:[".page-footer[_ngcontent-%COMP%]{color:var(--mat-sys-primary);background:var(--bg-color)}"]})};var VL=t=>({"w-full":t});function HL(t,n){if(t&1&&(g(0,"mat-option",10),x(1),g(2,"span"),x(3),b()()),t&2){let e=n.$implicit,i=A().$implicit;J("value",e.value),p(),oe(" ",e.label," "),p(2),ve(i("players-label"))}}function zL(t,n){if(t&1&&(g(0,"li",21)(1,"span"),x(2),b()()),t&2){let e=n.$implicit;p(2),ve(e.title)}}function UL(t,n){if(t&1&&(g(0,"mat-grid-tile")(1,"mat-grid-tile-header")(2,"h3")(3,"span"),x(4),b(),x(5,": "),b()(),g(6,"ul",20),en(7,zL,3,1,"li",21,Jt),b()()),t&2){let e=A().$implicit,i=A();p(4),ve(e("neutral-buildings-label")),p(3),tn(i.randomNeutralBuildings)}}function $L(t,n){if(t&1&&(g(0,"div"),se(1,"img",22),b()),t&2){let e=n.$implicit;p(),J("src",e.sides[0].image,sp)}}function GL(t,n){if(t&1&&(g(0,"mat-grid-tile")(1,"mat-grid-tile-header")(2,"h3")(3,"span"),x(4),b(),x(5,": "),b()(),g(6,"div",20),en(7,$L,2,1,"div",null,Jt),b()()),t&2){let e=A().$implicit,i=A();p(4),ve(e("station-masters-label")),p(3),tn(i.randomStationMasters)}}function WL(t,n){if(t&1&&(g(0,"span",17)(1,"span",23),x(2),b()()),t&2){let e=n.$implicit;p(2),pa("",e.title,"",e.sides[0].title," ")}}function qL(t,n){if(t&1&&(g(0,"span",17)(1,"span",23),x(2),b()()),t&2){let e=n.$implicit;p(2),pa("",e.title,": ",e.sides[0].title," ")}}function QL(t,n){if(t&1&&(g(0,"li"),x(1),b()),t&2){let e=A().$implicit;p(),oe(" ",e("further-steps-step41")," ")}}function YL(t,n){if(t&1&&(g(0,"li"),x(1),b()),t&2){let e=A().$implicit;p(),oe(" ",e("further-steps-step42")," ")}}function KL(t,n){if(t&1&&(g(0,"li"),x(1),b()),t&2){let e=A().$implicit;p(),oe(" ",e("further-steps-step43")," ")}}function ZL(t,n){if(t&1&&(g(0,"li"),x(1),b()),t&2){let e=A().$implicit;p(),oe(" ",e("further-steps-step71")," ")}}function XL(t,n){if(t&1&&(g(0,"li"),x(1),b()),t&2){let e=A().$implicit;p(),oe(" ",e("further-steps-step72")," ")}}function JL(t,n){if(t&1&&(g(0,"li"),x(1),b()),t&2){let e=A().$implicit;p(),oe(" ",e("further-steps-step73")," ")}}function eB(t,n){if(t&1&&(g(0,"li"),x(1),b()),t&2){let e=A().$implicit;p(),oe(" ",e("further-steps-step83")," ")}}function tB(t,n){if(t&1&&(g(0,"li"),x(1),b()),t&2){let e=A().$implicit;p(),oe(" ",e("further-steps-step84")," ")}}function nB(t,n){if(t&1){let e=at();Io(0),g(1,"div",2),se(2,"app-page-header",3),g(3,"mat-sidenav-container",4)(4,"mat-sidenav",5,0)(6,"div",6)(7,"h2"),x(8),b(),se(9,"mat-divider",7),g(10,"h3"),x(11),b(),g(12,"mat-form-field",8)(13,"mat-label"),x(14),b(),g(15,"mat-select",9),ee("selectionChange",function(r){Pe(e);let o=A();return Le(o.onPlayerCountChange(r))}),en(16,HL,4,3,"mat-option",10,Jt),b()()()(),g(18,"mat-sidenav-content")(19,"div",11)(20,"div",12)(21,"div",13)(22,"button",14),ee("click",function(){Pe(e);let r=A();return Le(r.randomizeSetup())}),g(23,"span"),x(24),b()()(),g(25,"mat-grid-list",15),G(26,UL,9,1,"mat-grid-tile"),G(27,GL,9,1,"mat-grid-tile"),g(28,"mat-grid-tile")(29,"mat-grid-tile-header")(30,"h3")(31,"span"),x(32),b(),x(33,": "),b()(),g(34,"div",16),en(35,WL,3,2,"span",17,Jt),b()(),g(37,"mat-grid-tile")(38,"mat-grid-tile-header")(39,"h3")(40,"span"),x(41),b(),x(42,": "),b()(),g(43,"div",16),en(44,qL,3,2,"span",17,Jt),b()()(),g(46,"mat-card")(47,"mat-card-header")(48,"h3")(49,"span"),x(50),b()()(),g(51,"mat-card-content")(52,"ol",18)(53,"li"),x(54),g(55,"ul",19)(56,"li"),x(57),b(),g(58,"li"),x(59),b(),g(60,"li"),x(61),b()()(),g(62,"li"),x(63),g(64,"ul",19)(65,"li"),x(66),b(),g(67,"li"),x(68),b(),g(69,"li"),x(70),b()()(),g(71,"li"),x(72),g(73,"ul",19)(74,"li"),x(75),b(),g(76,"li"),x(77),b(),g(78,"li"),x(79),b()()(),g(80,"li"),x(81),g(82,"ul",19),G(83,QL,2,1,"li"),G(84,YL,2,1,"li"),G(85,KL,2,1,"li"),g(86,"li"),x(87),b()()(),g(88,"li"),x(89),b(),g(90,"li")(91,"p"),x(92),b(),g(93,"p"),x(94),b(),g(95,"p"),x(96),b()(),g(97,"li"),x(98),g(99,"ul",19),G(100,ZL,2,1,"li"),G(101,XL,2,1,"li"),G(102,JL,2,1,"li"),b()(),g(103,"li"),x(104),g(105,"ul",19)(106,"li"),x(107),b(),g(108,"li"),x(109),b(),G(110,eB,2,1,"li"),G(111,tB,2,1,"li"),b()()()()()()()()(),se(112,"app-page-footer"),b(),So()}if(t&2){let e=n.$implicit,i=Et(5),r=A();p(),P("is-mobile",r.isXSmall),p(),J("sidebarHandle",i),p(),nn("padding-top",r.isXSmall?56:0,"px"),p(),J("mode",r.isXSmall?"over":"side")("fixedInViewport",r.isXSmall)("opened",r.isXSmall?"false":"opened"),p(4),oe("",e("options-label"),":"),p(3),oe("",e("player-count-label"),":"),p(3),ve(e("player-count-select-label")),p(),J("value",r.playerCount),p(),tn(r.playerCountList),p(6),pt(Rr(51,VL,r.isXSmall)),p(2),ve(e("btn-setup-label")),p(),J("cols",r.isMax1280?1:2),p(),W(r.randomNeutralBuildings.length>0?26:-1),p(),W(r.randomStationMasters&&r.randomStationMasters.length>0?27:-1),p(5),ve(e("player-buildings-label")),p(3),tn(r.randomPlayerBuildings),p(6),ve(e("cities-label")),p(3),tn(r.randomCities),p(6),ve(e("further-setup-steps-label")),p(4),oe(" ",e("further-steps-step1")," "),p(3),oe(" ",e("further-steps-step1a")," "),p(2),oe(" ",e("further-steps-step1b")," "),p(2),oe(" ",e("further-steps-step-1c")," "),p(2),oe(" ",e("further-steps-step2")," "),p(3),oe(" ",e("further-steps-step21")," "),p(2),oe(" ",e("further-steps-step22")," "),p(2),oe(" ",e("further-steps-step23")," "),p(2),oe(" ",e("further-steps-step3")," "),p(3),oe(" ",e("further-steps-step31")," "),p(2),oe(" ",e("further-steps-step32")," "),p(2),oe(" ",e("further-steps-step33")," "),p(2),oe(" ",e("further-steps-step4")," "),p(2),W(r.playerCount===2?83:-1),p(),W(r.playerCount===3?84:-1),p(),W(r.playerCount===4?85:-1),p(2),oe(" ",e("further-steps-step4b")," "),p(2),ve(e("further-steps-step5")),p(3),ve(e("further-steps-step6")),p(2),ve(e("further-steps-step6a")),p(2),ve(e("further-steps-step6b")),p(2),oe(" ",e("further-steps-step7")," "),p(2),W(r.playerCount===2?100:-1),p(),W(r.playerCount===3?101:-1),p(),W(r.playerCount===4?102:-1),p(2),oe(" ",e("further-steps-step8")," "),p(3),ve(e("further-steps-step81")),p(2),ve(e("further-steps-step82")),p(),W(r.playerCount>=3?110:-1),p(),W(r.playerCount>3?111:-1)}}var Tf=class t{applicationConfigService=d(qu);responsive=d(ci);storageService=d(Qu);randomNeutralBuildings;randomPlayerBuildings;randomStationMasters;randomCities;playerCount;playerCountList;isXSmall;isMax1280;ngOnInit(){this.playerCount=2,this.playerCountList=[{label:"2",value:2},{label:"3",value:3},{label:"4",value:4}],this.responsive.observe(Jo.XSmall).subscribe(e=>{e.matches?this.isXSmall=!0:this.isXSmall=!1}),this.responsive.observe("(max-width: 1280px)").subscribe(e=>{e.matches?this.isMax1280=!0:this.isMax1280=!1});let n=this.storageService.getNumber("rar-playerCount");n!==null?this.emitPlayerCount(n):this.storageService.setNumber("rar-playerCount",2),this.applicationConfigService.playerCount.subscribe(e=>{this.playerCount=e}),this.randomizeSetup()}emitPlayerCount(n){this.applicationConfigService.playerCount.emit(n)}onPlayerCountChange(n){let e=Number(n.value);this.storageService.setNumber("rar-playerCount",e),this.emitPlayerCount(e)}randomizeSetup(){this.randomNeutralBuildings=this.applicationConfigService.getRandomNeutralBuildingOrder(),this.randomStationMasters=this.applicationConfigService.getRandomStationMasters(),this.randomPlayerBuildings=this.applicationConfigService.getRandomPlayerBuildings(),this.randomCities=this.applicationConfigService.getRandomCities()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["app-home"]],decls:1,vars:0,consts:[["sidenav",""],[4,"transloco"],[1,"home-component","flex","flex-col"],[3,"sidebarHandle"],[1,"sidenav-container","flex-1"],["fixedTopGap","56",1,"sidenav",3,"mode","fixedInViewport","opened"],[1,"sidenav__inner","p-4"],[1,"divider","mb-4"],["appearance","fill"],[3,"selectionChange","value"],[3,"value"],[1,"sidenav-content","flex","flex-col","min-h-full"],[1,"flex-1","px-2","xSmall:px-10","py-5"],[1,"mb-4"],["mat-flat-button","","color","primary",3,"click"],["rowHeight","180px","gutterSize","5px",3,"cols"],[1,"flex","flex-wrap"],[1,"px-2","text-2xl","xSmall:text-xl","flex-1"],[1,"pl-4","list-decimal"],[1,"list-disc","pl-8","text-gray-400"],[1,"flex"],[1,"px-2","text-2xl","xSmall:text-xl"],["alt","Station Master","width","100",1,"px-1","xSmall:px-2","md:px-4",3,"src"],[1,"whitespace-nowrap"]],template:function(e,i){e&1&&xt(0,nB,113,53,"ng-container",1)},dependencies:[zn,z_,hE,vf,U_,Hu,SE,ME,TE,Qr,cs,hf,Qi,HE,X_,BE,jE,Sf,Mf,mx],styles:[`.is-mobile[_ngcontent-%COMP%]   .sidenav-container[_ngcontent-%COMP%]{flex-shrink:0;flex-grow:1;flex-basis:auto}.divider[_ngcontent-%COMP%]{margin-bottom:16px!important}
`]})};var WE=[{path:"home",component:Tf},{path:"**",redirectTo:"home",pathMatch:"full"}];var qE={providers:[Bg(WE),dg(ug()),px({config:{availableLangs:["de","en","pl"],defaultLang:"en",fallbackLang:"en",missingHandler:{useFallbackTranslation:!0},reRenderOnLangChange:!0,prodMode:!Hp()},loader:Wu}),Dc(ZC.register("ngsw-worker.js",{enabled:!Hp(),registrationStrategy:"registerWhenStable:30000"}))]};ng(Gu,qE).catch(t=>console.error(t));
