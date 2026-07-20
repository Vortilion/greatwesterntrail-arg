var cx=Object.defineProperty,dx=Object.defineProperties;var ux=Object.getOwnPropertyDescriptors;var ll=Object.getOwnPropertySymbols;var Ov=Object.prototype.hasOwnProperty,Fv=Object.prototype.propertyIsEnumerable;var Nv=(t,n,e)=>n in t?cx(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,m=(t,n)=>{for(var e in n||={})Ov.call(n,e)&&Nv(t,e,n[e]);if(ll)for(var e of ll(n))Fv.call(n,e)&&Nv(t,e,n[e]);return t},U=(t,n)=>dx(t,ux(n));var bf=(t,n)=>{var e={};for(var r in t)Ov.call(t,r)&&n.indexOf(r)<0&&(e[r]=t[r]);if(t!=null&&ll)for(var r of ll(t))n.indexOf(r)<0&&Fv.call(t,r)&&(e[r]=t[r]);return e};var gt=null,cl=!1,_f=1,fx=null,We=Symbol("SIGNAL");function $(t){let n=gt;return gt=t,n}function hl(){return gt}var Lr={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function jr(t){if(cl)throw new Error("");if(gt===null)return;gt.consumerOnSignalRead(t);let n=gt.producersTail;if(n!==void 0&&n.producer===t)return;let e,r=gt.recomputing;if(r&&(e=n!==void 0?n.nextProducer:gt.producers,e!==void 0&&e.producer===t)){gt.producersTail=e,e.lastReadVersion=t.version;return}let i=t.consumersTail;if(i!==void 0&&i.consumer===gt&&(!r||px(i,gt)))return;let o=Vi(gt),s={producer:t,consumer:gt,nextProducer:e,prevConsumer:i,lastReadVersion:t.version,nextConsumer:void 0};gt.producersTail=s,n!==void 0?n.nextProducer=s:gt.producers=s,o&&Vv(t,s)}function Pv(){_f++}function pl(t){if(!(Vi(t)&&!t.dirty)&&!(!t.dirty&&t.lastCleanEpoch===_f)){if(!t.producerMustRecompute(t)&&!ji(t)){fl(t);return}t.producerRecomputeValue(t),fl(t)}}function wf(t){if(t.consumers===void 0)return;let n=cl;cl=!0;try{for(let e=t.consumers;e!==void 0;e=e.nextConsumer){let r=e.consumer;r.dirty||hx(r)}}finally{cl=n}}function Df(){return gt?.consumerAllowSignalWrites!==!1}function hx(t){t.dirty=!0,wf(t),t.consumerMarkedDirty?.(t)}function fl(t){t.dirty=!1,t.lastCleanEpoch=_f}function ar(t){return t&&Lv(t),$(t)}function Lv(t){t.producersTail=void 0,t.recomputing=!0}function Vr(t,n){$(n),t&&jv(t)}function jv(t){t.recomputing=!1;let n=t.producersTail,e=n!==void 0?n.nextProducer:t.producers;if(e!==void 0){if(Vi(t))do e=Cf(e);while(e!==void 0);n!==void 0?n.nextProducer=void 0:t.producers=void 0}}function ji(t){for(let n=t.producers;n!==void 0;n=n.nextProducer){let e=n.producer,r=n.lastReadVersion;if(r!==e.version||(pl(e),r!==e.version))return!0}return!1}function lr(t){if(Vi(t)){let n=t.producers;for(;n!==void 0;)n=Cf(n)}t.producers=void 0,t.producersTail=void 0,t.consumers=void 0,t.consumersTail=void 0}function Vv(t,n){let e=t.consumersTail,r=Vi(t);if(e!==void 0?(n.nextConsumer=e.nextConsumer,e.nextConsumer=n):(n.nextConsumer=void 0,t.consumers=n),n.prevConsumer=e,t.consumersTail=n,!r)for(let i=t.producers;i!==void 0;i=i.nextProducer)Vv(i.producer,i)}function Cf(t){let n=t.producer,e=t.nextProducer,r=t.nextConsumer,i=t.prevConsumer;if(t.nextConsumer=void 0,t.prevConsumer=void 0,r!==void 0?r.prevConsumer=i:n.consumersTail=i,i!==void 0)i.nextConsumer=r;else if(n.consumers=r,!Vi(n)){let o=n.producers;for(;o!==void 0;)o=Cf(o)}return e}function Vi(t){return t.consumerIsAlwaysLive||t.consumers!==void 0}function ml(t){fx?.(t)}function px(t,n){let e=n.producersTail;if(e!==void 0){let r=n.producers;do{if(r===t)return!0;if(r===e)break;r=r.nextProducer}while(r!==void 0)}return!1}function gl(t,n){return Object.is(t,n)}function cs(t,n){let e=Object.create(mx);e.computation=t,n!==void 0&&(e.equal=n);let r=()=>{if(pl(e),jr(e),e.value===ls)throw e.error;return e.value};return r[We]=e,ml(e),r}var dl=Symbol("UNSET"),ul=Symbol("COMPUTING"),ls=Symbol("ERRORED"),mx=U(m({},Lr),{value:dl,dirty:!0,error:null,equal:gl,kind:"computed",producerMustRecompute(t){return t.value===dl||t.value===ul},producerRecomputeValue(t){if(t.value===ul)throw new Error("");let n=t.value;t.value=ul;let e=ar(t),r,i=!1;try{r=t.computation(),$(null),i=n!==dl&&n!==ls&&r!==ls&&t.equal(n,r)}catch(o){r=ls,t.error=o}finally{Vr(t,e)}if(i){t.value=n;return}t.value=r,t.version++}});function gx(){throw new Error}var Bv=gx;function Hv(t){Bv(t)}function Ef(t){Bv=t}var vx=null;function xf(t,n){let e=Object.create(ds);e.value=t,n!==void 0&&(e.equal=n);let r=()=>Uv(e);return r[We]=e,ml(e),[r,s=>Bi(e,s),s=>If(e,s)]}function Uv(t){return jr(t),t.value}function Bi(t,n){Df()||Hv(t),t.equal(t.value,n)||(t.value=n,yx(t))}function If(t,n){Df()||Hv(t),Bi(t,n(t.value))}var ds=U(m({},Lr),{equal:gl,value:void 0,kind:"signal"});function yx(t){t.version++,Pv(),wf(t),vx?.(t)}var Sf=U(m({},Lr),{consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,dirty:!0,kind:"effect"});function Mf(t){if(t.dirty=!1,t.version>0&&!ji(t))return;t.version++;let n=ar(t);try{t.cleanup(),t.fn()}finally{Vr(t,n)}}function re(t){return typeof t=="function"}function Hi(t){let e=t(r=>{Error.call(r),r.stack=new Error().stack});return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var vl=Hi(t=>function(e){t(this),this.message=e?`${e.length} errors occurred during unsubscription:
${e.map((r,i)=>`${i+1}) ${r.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=e});function Br(t,n){if(t){let e=t.indexOf(n);0<=e&&t.splice(e,1)}}var de=class t{constructor(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let n;if(!this.closed){this.closed=!0;let{_parentage:e}=this;if(e)if(this._parentage=null,Array.isArray(e))for(let o of e)o.remove(this);else e.remove(this);let{initialTeardown:r}=this;if(re(r))try{r()}catch(o){n=o instanceof vl?o.errors:[o]}let{_finalizers:i}=this;if(i){this._finalizers=null;for(let o of i)try{$v(o)}catch(s){n=n??[],s instanceof vl?n=[...n,...s.errors]:n.push(s)}}if(n)throw new vl(n)}}add(n){var e;if(n&&n!==this)if(this.closed)$v(n);else{if(n instanceof t){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(n)}}_hasParent(n){let{_parentage:e}=this;return e===n||Array.isArray(e)&&e.includes(n)}_addParent(n){let{_parentage:e}=this;this._parentage=Array.isArray(e)?(e.push(n),e):e?[e,n]:n}_removeParent(n){let{_parentage:e}=this;e===n?this._parentage=null:Array.isArray(e)&&Br(e,n)}remove(n){let{_finalizers:e}=this;e&&Br(e,n),n instanceof t&&n._removeParent(this)}};de.EMPTY=(()=>{let t=new de;return t.closed=!0,t})();var Tf=de.EMPTY;function yl(t){return t instanceof de||t&&"closed"in t&&re(t.remove)&&re(t.add)&&re(t.unsubscribe)}function $v(t){re(t)?t():t.unsubscribe()}var Xt={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var Ui={setTimeout(t,n,...e){let{delegate:r}=Ui;return r?.setTimeout?r.setTimeout(t,n,...e):setTimeout(t,n,...e)},clearTimeout(t){let{delegate:n}=Ui;return(n?.clearTimeout||clearTimeout)(t)},delegate:void 0};function bl(t){Ui.setTimeout(()=>{let{onUnhandledError:n}=Xt;if(n)n(t);else throw t})}function Hr(){}var zv=Af("C",void 0,void 0);function Gv(t){return Af("E",void 0,t)}function Wv(t){return Af("N",t,void 0)}function Af(t,n,e){return{kind:t,value:n,error:e}}var Ur=null;function $i(t){if(Xt.useDeprecatedSynchronousErrorHandling){let n=!Ur;if(n&&(Ur={errorThrown:!1,error:null}),t(),n){let{errorThrown:e,error:r}=Ur;if(Ur=null,e)throw r}}else t()}function qv(t){Xt.useDeprecatedSynchronousErrorHandling&&Ur&&(Ur.errorThrown=!0,Ur.error=t)}var $r=class extends de{constructor(n){super(),this.isStopped=!1,n?(this.destination=n,yl(n)&&n.add(this)):this.destination=wx}static create(n,e,r){return new Rn(n,e,r)}next(n){this.isStopped?kf(Wv(n),this):this._next(n)}error(n){this.isStopped?kf(Gv(n),this):(this.isStopped=!0,this._error(n))}complete(){this.isStopped?kf(zv,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(n){this.destination.next(n)}_error(n){try{this.destination.error(n)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},bx=Function.prototype.bind;function Rf(t,n){return bx.call(t,n)}var Nf=class{constructor(n){this.partialObserver=n}next(n){let{partialObserver:e}=this;if(e.next)try{e.next(n)}catch(r){_l(r)}}error(n){let{partialObserver:e}=this;if(e.error)try{e.error(n)}catch(r){_l(r)}else _l(n)}complete(){let{partialObserver:n}=this;if(n.complete)try{n.complete()}catch(e){_l(e)}}},Rn=class extends $r{constructor(n,e,r){super();let i;if(re(n)||!n)i={next:n??void 0,error:e??void 0,complete:r??void 0};else{let o;this&&Xt.useDeprecatedNextContext?(o=Object.create(n),o.unsubscribe=()=>this.unsubscribe(),i={next:n.next&&Rf(n.next,o),error:n.error&&Rf(n.error,o),complete:n.complete&&Rf(n.complete,o)}):i=n}this.destination=new Nf(i)}};function _l(t){Xt.useDeprecatedSynchronousErrorHandling?qv(t):bl(t)}function _x(t){throw t}function kf(t,n){let{onStoppedNotification:e}=Xt;e&&Ui.setTimeout(()=>e(t,n))}var wx={closed:!0,next:Hr,error:_x,complete:Hr};var zi=typeof Symbol=="function"&&Symbol.observable||"@@observable";function Ct(t){return t}function Of(...t){return Ff(t)}function Ff(t){return t.length===0?Ct:t.length===1?t[0]:function(e){return t.reduce((r,i)=>i(r),e)}}var G=(()=>{class t{constructor(e){e&&(this._subscribe=e)}lift(e){let r=new t;return r.source=this,r.operator=e,r}subscribe(e,r,i){let o=Cx(e)?e:new Rn(e,r,i);return $i(()=>{let{operator:s,source:a}=this;o.add(s?s.call(o,a):a?this._subscribe(o):this._trySubscribe(o))}),o}_trySubscribe(e){try{return this._subscribe(e)}catch(r){e.error(r)}}forEach(e,r){return r=Yv(r),new r((i,o)=>{let s=new Rn({next:a=>{try{e(a)}catch(l){o(l),s.unsubscribe()}},error:o,complete:i});this.subscribe(s)})}_subscribe(e){var r;return(r=this.source)===null||r===void 0?void 0:r.subscribe(e)}[zi](){return this}pipe(...e){return Ff(e)(this)}toPromise(e){return e=Yv(e),new e((r,i)=>{let o;this.subscribe(s=>o=s,s=>i(s),()=>r(o))})}}return t.create=n=>new t(n),t})();function Yv(t){var n;return(n=t??Xt.Promise)!==null&&n!==void 0?n:Promise}function Dx(t){return t&&re(t.next)&&re(t.error)&&re(t.complete)}function Cx(t){return t&&t instanceof $r||Dx(t)&&yl(t)}function Ex(t){return re(t?.lift)}function ee(t){return n=>{if(Ex(n))return n.lift(function(e){try{return t(e,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function te(t,n,e,r,i){return new Pf(t,n,e,r,i)}var Pf=class extends $r{constructor(n,e,r,i,o,s){super(n),this.onFinalize=o,this.shouldUnsubscribe=s,this._next=e?function(a){try{e(a)}catch(l){n.error(l)}}:super._next,this._error=i?function(a){try{i(a)}catch(l){n.error(l)}finally{this.unsubscribe()}}:super._error,this._complete=r?function(){try{r()}catch(a){n.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:e}=this;super.unsubscribe(),!e&&((n=this.onFinalize)===null||n===void 0||n.call(this))}}};var Zv=Hi(t=>function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var D=(()=>{class t extends G{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(e){let r=new wl(this,this);return r.operator=e,r}_throwIfClosed(){if(this.closed)throw new Zv}next(e){$i(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let r of this.currentObservers)r.next(e)}})}error(e){$i(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=e;let{observers:r}=this;for(;r.length;)r.shift().error(e)}})}complete(){$i(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:e}=this;for(;e.length;)e.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var e;return((e=this.observers)===null||e===void 0?void 0:e.length)>0}_trySubscribe(e){return this._throwIfClosed(),super._trySubscribe(e)}_subscribe(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)}_innerSubscribe(e){let{hasError:r,isStopped:i,observers:o}=this;return r||i?Tf:(this.currentObservers=null,o.push(e),new de(()=>{this.currentObservers=null,Br(o,e)}))}_checkFinalizedStatuses(e){let{hasError:r,thrownError:i,isStopped:o}=this;r?e.error(i):o&&e.complete()}asObservable(){let e=new G;return e.source=this,e}}return t.create=(n,e)=>new wl(n,e),t})(),wl=class extends D{constructor(n,e){super(),this.destination=n,this.source=e}next(n){var e,r;(r=(e=this.destination)===null||e===void 0?void 0:e.next)===null||r===void 0||r.call(e,n)}error(n){var e,r;(r=(e=this.destination)===null||e===void 0?void 0:e.error)===null||r===void 0||r.call(e,n)}complete(){var n,e;(e=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||e===void 0||e.call(n)}_subscribe(n){var e,r;return(r=(e=this.source)===null||e===void 0?void 0:e.subscribe(n))!==null&&r!==void 0?r:Tf}};var je=class extends D{constructor(n){super(),this._value=n}get value(){return this.getValue()}_subscribe(n){let e=super._subscribe(n);return!e.closed&&n.next(this._value),e}getValue(){let{hasError:n,thrownError:e,_value:r}=this;if(n)throw e;return this._throwIfClosed(),r}next(n){super.next(this._value=n)}};var us={now(){return(us.delegate||Date).now()},delegate:void 0};var fs=class extends D{constructor(n=1/0,e=1/0,r=us){super(),this._bufferSize=n,this._windowTime=e,this._timestampProvider=r,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=e===1/0,this._bufferSize=Math.max(1,n),this._windowTime=Math.max(1,e)}next(n){let{isStopped:e,_buffer:r,_infiniteTimeWindow:i,_timestampProvider:o,_windowTime:s}=this;e||(r.push(n),!i&&r.push(o.now()+s)),this._trimBuffer(),super.next(n)}_subscribe(n){this._throwIfClosed(),this._trimBuffer();let e=this._innerSubscribe(n),{_infiniteTimeWindow:r,_buffer:i}=this,o=i.slice();for(let s=0;s<o.length&&!n.closed;s+=r?1:2)n.next(o[s]);return this._checkFinalizedStatuses(n),e}_trimBuffer(){let{_bufferSize:n,_timestampProvider:e,_buffer:r,_infiniteTimeWindow:i}=this,o=(i?1:2)*n;if(n<1/0&&o<r.length&&r.splice(0,r.length-o),!i){let s=e.now(),a=0;for(let l=1;l<r.length&&r[l]<=s;l+=2)a=l;a&&r.splice(0,a+1)}}};var Dl=class extends de{constructor(n,e){super()}schedule(n,e=0){return this}};var hs={setInterval(t,n,...e){let{delegate:r}=hs;return r?.setInterval?r.setInterval(t,n,...e):setInterval(t,n,...e)},clearInterval(t){let{delegate:n}=hs;return(n?.clearInterval||clearInterval)(t)},delegate:void 0};var Cl=class extends Dl{constructor(n,e){super(n,e),this.scheduler=n,this.work=e,this.pending=!1}schedule(n,e=0){var r;if(this.closed)return this;this.state=n;let i=this.id,o=this.scheduler;return i!=null&&(this.id=this.recycleAsyncId(o,i,e)),this.pending=!0,this.delay=e,this.id=(r=this.id)!==null&&r!==void 0?r:this.requestAsyncId(o,this.id,e),this}requestAsyncId(n,e,r=0){return hs.setInterval(n.flush.bind(n,this),r)}recycleAsyncId(n,e,r=0){if(r!=null&&this.delay===r&&this.pending===!1)return e;e!=null&&hs.clearInterval(e)}execute(n,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;let r=this._execute(n,e);if(r)return r;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(n,e){let r=!1,i;try{this.work(n)}catch(o){r=!0,i=o||new Error("Scheduled action threw falsy error")}if(r)return this.unsubscribe(),i}unsubscribe(){if(!this.closed){let{id:n,scheduler:e}=this,{actions:r}=e;this.work=this.state=this.scheduler=null,this.pending=!1,Br(r,this),n!=null&&(this.id=this.recycleAsyncId(e,n,null)),this.delay=null,super.unsubscribe()}}};var Gi=class t{constructor(n,e=t.now){this.schedulerActionCtor=n,this.now=e}schedule(n,e=0,r){return new this.schedulerActionCtor(this,n).schedule(r,e)}};Gi.now=us.now;var El=class extends Gi{constructor(n,e=Gi.now){super(n,e),this.actions=[],this._active=!1}flush(n){let{actions:e}=this;if(this._active){e.push(n);return}let r;this._active=!0;do if(r=n.execute(n.state,n.delay))break;while(n=e.shift());if(this._active=!1,r){for(;n=e.shift();)n.unsubscribe();throw r}}};var ps=new El(Cl),Kv=ps;var Ve=new G(t=>t.complete());function xl(t){return t&&re(t.schedule)}function Lf(t){return t[t.length-1]}function Il(t){return re(Lf(t))?t.pop():void 0}function pn(t){return xl(Lf(t))?t.pop():void 0}function Qv(t,n){return typeof Lf(t)=="number"?t.pop():n}function Jv(t,n,e,r){function i(o){return o instanceof e?o:new e(function(s){s(o)})}return new(e||(e=Promise))(function(o,s){function a(d){try{c(r.next(d))}catch(f){s(f)}}function l(d){try{c(r.throw(d))}catch(f){s(f)}}function c(d){d.done?o(d.value):i(d.value).then(a,l)}c((r=r.apply(t,n||[])).next())})}function Xv(t){var n=typeof Symbol=="function"&&Symbol.iterator,e=n&&t[n],r=0;if(e)return e.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function zr(t){return this instanceof zr?(this.v=t,this):new zr(t)}function ey(t,n,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=e.apply(t,n||[]),i,o=[];return i=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",s),i[Symbol.asyncIterator]=function(){return this},i;function s(p){return function(y){return Promise.resolve(y).then(p,f)}}function a(p,y){r[p]&&(i[p]=function(E){return new Promise(function(S,A){o.push([p,E,S,A])>1||l(p,E)})},y&&(i[p]=y(i[p])))}function l(p,y){try{c(r[p](y))}catch(E){h(o[0][3],E)}}function c(p){p.value instanceof zr?Promise.resolve(p.value.v).then(d,f):h(o[0][2],p)}function d(p){l("next",p)}function f(p){l("throw",p)}function h(p,y){p(y),o.shift(),o.length&&l(o[0][0],o[0][1])}}function ty(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=t[Symbol.asyncIterator],e;return n?n.call(t):(t=typeof Xv=="function"?Xv(t):t[Symbol.iterator](),e={},r("next"),r("throw"),r("return"),e[Symbol.asyncIterator]=function(){return this},e);function r(o){e[o]=t[o]&&function(s){return new Promise(function(a,l){s=t[o](s),i(a,l,s.done,s.value)})}}function i(o,s,a,l){Promise.resolve(l).then(function(c){o({value:c,done:a})},s)}}var Sl=t=>t&&typeof t.length=="number"&&typeof t!="function";function Ml(t){return re(t?.then)}function Tl(t){return re(t[zi])}function Al(t){return Symbol.asyncIterator&&re(t?.[Symbol.asyncIterator])}function Rl(t){return new TypeError(`You provided ${t!==null&&typeof t=="object"?"an invalid object":`'${t}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function xx(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var kl=xx();function Nl(t){return re(t?.[kl])}function Ol(t){return ey(this,arguments,function*(){let e=t.getReader();try{for(;;){let{value:r,done:i}=yield zr(e.read());if(i)return yield zr(void 0);yield yield zr(r)}}finally{e.releaseLock()}})}function Fl(t){return re(t?.getReader)}function Ce(t){if(t instanceof G)return t;if(t!=null){if(Tl(t))return Ix(t);if(Sl(t))return Sx(t);if(Ml(t))return Mx(t);if(Al(t))return ny(t);if(Nl(t))return Tx(t);if(Fl(t))return Ax(t)}throw Rl(t)}function Ix(t){return new G(n=>{let e=t[zi]();if(re(e.subscribe))return e.subscribe(n);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function Sx(t){return new G(n=>{for(let e=0;e<t.length&&!n.closed;e++)n.next(t[e]);n.complete()})}function Mx(t){return new G(n=>{t.then(e=>{n.closed||(n.next(e),n.complete())},e=>n.error(e)).then(null,bl)})}function Tx(t){return new G(n=>{for(let e of t)if(n.next(e),n.closed)return;n.complete()})}function ny(t){return new G(n=>{Rx(t,n).catch(e=>n.error(e))})}function Ax(t){return ny(Ol(t))}function Rx(t,n){var e,r,i,o;return Jv(this,void 0,void 0,function*(){try{for(e=ty(t);r=yield e.next(),!r.done;){let s=r.value;if(n.next(s),n.closed)return}}catch(s){i={error:s}}finally{try{r&&!r.done&&(o=e.return)&&(yield o.call(e))}finally{if(i)throw i.error}}n.complete()})}function At(t,n,e,r=0,i=!1){let o=n.schedule(function(){e(),i?t.add(this.schedule(null,r)):this.unsubscribe()},r);if(t.add(o),!i)return o}function Pl(t,n=0){return ee((e,r)=>{e.subscribe(te(r,i=>At(r,t,()=>r.next(i),n),()=>At(r,t,()=>r.complete(),n),i=>At(r,t,()=>r.error(i),n)))})}function Ll(t,n=0){return ee((e,r)=>{r.add(t.schedule(()=>e.subscribe(r),n))})}function ry(t,n){return Ce(t).pipe(Ll(n),Pl(n))}function iy(t,n){return Ce(t).pipe(Ll(n),Pl(n))}function oy(t,n){return new G(e=>{let r=0;return n.schedule(function(){r===t.length?e.complete():(e.next(t[r++]),e.closed||this.schedule())})})}function sy(t,n){return new G(e=>{let r;return At(e,n,()=>{r=t[kl](),At(e,n,()=>{let i,o;try{({value:i,done:o}=r.next())}catch(s){e.error(s);return}o?e.complete():e.next(i)},0,!0)}),()=>re(r?.return)&&r.return()})}function jl(t,n){if(!t)throw new Error("Iterable cannot be null");return new G(e=>{At(e,n,()=>{let r=t[Symbol.asyncIterator]();At(e,n,()=>{r.next().then(i=>{i.done?e.complete():e.next(i.value)})},0,!0)})})}function ay(t,n){return jl(Ol(t),n)}function ly(t,n){if(t!=null){if(Tl(t))return ry(t,n);if(Sl(t))return oy(t,n);if(Ml(t))return iy(t,n);if(Al(t))return jl(t,n);if(Nl(t))return sy(t,n);if(Fl(t))return ay(t,n)}throw Rl(t)}function Me(t,n){return n?ly(t,n):Ce(t)}function N(...t){let n=pn(t);return Me(t,n)}function ms(t,n){let e=re(t)?t:()=>t,r=i=>i.error(e());return new G(n?i=>n.schedule(r,0,i):r)}function gs(t){return!!t&&(t instanceof G||re(t.lift)&&re(t.subscribe))}var Gr=Hi(t=>function(){t(this),this.name="EmptyError",this.message="no elements in sequence"});function cy(t){return t instanceof Date&&!isNaN(t)}function I(t,n){return ee((e,r)=>{let i=0;e.subscribe(te(r,o=>{r.next(t.call(n,o,i++))}))})}var{isArray:kx}=Array;function Nx(t,n){return kx(n)?t(...n):t(n)}function Vl(t){return I(n=>Nx(t,n))}var{isArray:Ox}=Array,{getPrototypeOf:Fx,prototype:Px,keys:Lx}=Object;function Bl(t){if(t.length===1){let n=t[0];if(Ox(n))return{args:n,keys:null};if(jx(n)){let e=Lx(n);return{args:e.map(r=>n[r]),keys:e}}}return{args:t,keys:null}}function jx(t){return t&&typeof t=="object"&&Fx(t)===Px}function Hl(t,n){return t.reduce((e,r,i)=>(e[r]=n[i],e),{})}function Wr(...t){let n=pn(t),e=Il(t),{args:r,keys:i}=Bl(t);if(r.length===0)return Me([],n);let o=new G(Vx(r,n,i?s=>Hl(i,s):Ct));return e?o.pipe(Vl(e)):o}function Vx(t,n,e=Ct){return r=>{dy(n,()=>{let{length:i}=t,o=new Array(i),s=i,a=i;for(let l=0;l<i;l++)dy(n,()=>{let c=Me(t[l],n),d=!1;c.subscribe(te(r,f=>{o[l]=f,d||(d=!0,a--),a||r.next(e(o.slice()))},()=>{--s||r.complete()}))},r)},r)}}function dy(t,n,e){t?At(e,t,n):n()}function uy(t,n,e,r,i,o,s,a){let l=[],c=0,d=0,f=!1,h=()=>{f&&!l.length&&!c&&n.complete()},p=E=>c<r?y(E):l.push(E),y=E=>{o&&n.next(E),c++;let S=!1;Ce(e(E,d++)).subscribe(te(n,A=>{i?.(A),o?p(A):n.next(A)},()=>{S=!0},void 0,()=>{if(S)try{for(c--;l.length&&c<r;){let A=l.shift();s?At(n,s,()=>y(A)):y(A)}h()}catch(A){n.error(A)}}))};return t.subscribe(te(n,p,()=>{f=!0,h()})),()=>{a?.()}}function Et(t,n,e=1/0){return re(n)?Et((r,i)=>I((o,s)=>n(r,o,i,s))(Ce(t(r,i))),e):(typeof n=="number"&&(e=n),ee((r,i)=>uy(r,i,t,e)))}function Ul(t=1/0){return Et(Ct,t)}function fy(){return Ul(1)}function cr(...t){return fy()(Me(t,pn(t)))}function qr(t){return new G(n=>{Ce(t()).subscribe(n)})}function kn(...t){let n=Il(t),{args:e,keys:r}=Bl(t),i=new G(o=>{let{length:s}=e;if(!s){o.complete();return}let a=new Array(s),l=s,c=s;for(let d=0;d<s;d++){let f=!1;Ce(e[d]).subscribe(te(o,h=>{f||(f=!0,c--),a[d]=h},()=>l--,void 0,()=>{(!l||!f)&&(c||o.next(r?Hl(r,a):a),o.complete())}))}});return n?i.pipe(Vl(n)):i}function $l(t=0,n,e=Kv){let r=-1;return n!=null&&(xl(n)?e=n:r=n),new G(i=>{let o=cy(t)?+t-e.now():t;o<0&&(o=0);let s=0;return e.schedule(function(){i.closed||(i.next(s++),0<=r?this.schedule(void 0,r):i.complete())},o)})}function Pt(...t){let n=pn(t),e=Qv(t,1/0),r=t;return r.length?r.length===1?Ce(r[0]):Ul(e)(Me(r,n)):Ve}var Nn=new G(Hr);function le(t,n){return ee((e,r)=>{let i=0;e.subscribe(te(r,o=>t.call(n,o,i++)&&r.next(o)))})}function hy(t){return ee((n,e)=>{let r=!1,i=null,o=null,s=!1,a=()=>{if(o?.unsubscribe(),o=null,r){r=!1;let c=i;i=null,e.next(c)}s&&e.complete()},l=()=>{o=null,s&&e.complete()};n.subscribe(te(e,c=>{r=!0,i=c,o||Ce(t(c)).subscribe(o=te(e,a,l))},()=>{s=!0,(!r||!o||o.closed)&&e.complete()}))})}function zl(t,n=ps){return hy(()=>$l(t,n))}function mn(t){return ee((n,e)=>{let r=null,i=!1,o;r=n.subscribe(te(e,void 0,void 0,s=>{o=Ce(t(s,mn(t)(n))),r?(r.unsubscribe(),r=null,o.subscribe(e)):i=!0})),i&&(r.unsubscribe(),r=null,o.subscribe(e))})}function Wi(t,n){return re(n)?Et(t,n,1):Et(t,1)}function Yr(t,n=ps){return ee((e,r)=>{let i=null,o=null,s=null,a=()=>{if(i){i.unsubscribe(),i=null;let c=o;o=null,r.next(c)}};function l(){let c=s+t,d=n.now();if(d<c){i=this.schedule(void 0,c-d),r.add(i);return}a()}e.subscribe(te(r,c=>{o=c,s=n.now(),i||(i=n.schedule(l,t),r.add(i))},()=>{a(),r.complete()},void 0,()=>{o=i=null}))})}function py(t){return ee((n,e)=>{let r=!1;n.subscribe(te(e,i=>{r=!0,e.next(i)},()=>{r||e.next(t),e.complete()}))})}function xe(t){return t<=0?()=>Ve:ee((n,e)=>{let r=0;n.subscribe(te(e,i=>{++r<=t&&(e.next(i),t<=r&&e.complete())}))})}function Gl(t){return I(()=>t)}function Wl(t,n=Ct){return t=t??Bx,ee((e,r)=>{let i,o=!0;e.subscribe(te(r,s=>{let a=n(s);(o||!t(i,a))&&(o=!1,i=a,r.next(s))}))})}function Bx(t,n){return t===n}function my(t=Hx){return ee((n,e)=>{let r=!1;n.subscribe(te(e,i=>{r=!0,e.next(i)},()=>r?e.complete():e.error(t())))})}function Hx(){return new Gr}function dr(t){return ee((n,e)=>{try{n.subscribe(e)}finally{e.add(t)}})}function On(t,n){let e=arguments.length>=2;return r=>r.pipe(t?le((i,o)=>t(i,o,r)):Ct,xe(1),e?py(n):my(()=>new Gr))}function ql(t){return t<=0?()=>Ve:ee((n,e)=>{let r=[];n.subscribe(te(e,i=>{r.push(i),t<r.length&&r.shift()},()=>{for(let i of r)e.next(i);e.complete()},void 0,()=>{r=null}))})}function Yl(){return ee((t,n)=>{let e,r=!1;t.subscribe(te(n,i=>{let o=e;e=i,r&&n.next([o,i]),r=!0}))})}function jf(t=1/0){let n;t&&typeof t=="object"?n=t:n={count:t};let{count:e=1/0,delay:r,resetOnSuccess:i=!1}=n;return e<=0?Ct:ee((o,s)=>{let a=0,l,c=()=>{let d=!1;l=o.subscribe(te(s,f=>{i&&(a=0),s.next(f)},void 0,f=>{if(a++<e){let h=()=>{l?(l.unsubscribe(),l=null,c()):d=!0};if(r!=null){let p=typeof r=="number"?$l(r):Ce(r(f,a)),y=te(s,()=>{y.unsubscribe(),h()},()=>{s.complete()});p.subscribe(y)}else h()}else s.error(f)})),d&&(l.unsubscribe(),l=null,c())};c()})}function vs(t={}){let{connector:n=()=>new D,resetOnError:e=!0,resetOnComplete:r=!0,resetOnRefCountZero:i=!0}=t;return o=>{let s,a,l,c=0,d=!1,f=!1,h=()=>{a?.unsubscribe(),a=void 0},p=()=>{h(),s=l=void 0,d=f=!1},y=()=>{let E=s;p(),E?.unsubscribe()};return ee((E,S)=>{c++,!f&&!d&&h();let A=l=l??n();S.add(()=>{c--,c===0&&!f&&!d&&(a=Vf(y,i))}),A.subscribe(S),!s&&c>0&&(s=new Rn({next:be=>A.next(be),error:be=>{f=!0,h(),a=Vf(p,e,be),A.error(be)},complete:()=>{d=!0,h(),a=Vf(p,r),A.complete()}}),Ce(E).subscribe(s))})(o)}}function Vf(t,n,...e){if(n===!0){t();return}if(n===!1)return;let r=new Rn({next:()=>{r.unsubscribe(),t()}});return Ce(n(...e)).subscribe(r)}function Zr(t,n,e){let r,i=!1;return t&&typeof t=="object"?{bufferSize:r=1/0,windowTime:n=1/0,refCount:i=!1,scheduler:e}=t:r=t??1/0,vs({connector:()=>new fs(r,n,e),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:i})}function ys(t){return le((n,e)=>t<=e)}function $e(...t){let n=pn(t);return ee((e,r)=>{(n?cr(t,e,n):cr(t,e)).subscribe(r)})}function ve(t,n){return ee((e,r)=>{let i=null,o=0,s=!1,a=()=>s&&!i&&r.complete();e.subscribe(te(r,l=>{i?.unsubscribe();let c=0,d=o++;Ce(t(l,d)).subscribe(i=te(r,f=>r.next(n?n(l,f,d,c++):f),()=>{i=null,a()}))},()=>{s=!0,a()}))})}function ue(t){return ee((n,e)=>{Ce(t).subscribe(te(e,()=>e.complete(),Hr)),!e.closed&&n.subscribe(e)})}function Bf(t,n=!1){return ee((e,r)=>{let i=0;e.subscribe(te(r,o=>{let s=t(o,i++);(s||n)&&r.next(o),!s&&r.complete()}))})}function Be(t,n,e){let r=re(t)||n||e?{next:t,error:n,complete:e}:t;return r?ee((i,o)=>{var s;(s=r.subscribe)===null||s===void 0||s.call(r);let a=!0;i.subscribe(te(o,l=>{var c;(c=r.next)===null||c===void 0||c.call(r,l),o.next(l)},()=>{var l;a=!1,(l=r.complete)===null||l===void 0||l.call(r),o.complete()},l=>{var c;a=!1,(c=r.error)===null||c===void 0||c.call(r,l),o.error(l)},()=>{var l,c;a&&((l=r.unsubscribe)===null||l===void 0||l.call(r)),(c=r.finalize)===null||c===void 0||c.call(r)}))}):Ct}var Hf;function Zl(){return Hf}function gn(t){let n=Hf;return Hf=t,n}var gy=Symbol("NotFound");function qi(t){return t===gy||t?.name==="\u0275NotFound"}function vy(t){let n=$(null);try{return t()}finally{$(n)}}var nc="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",C=class extends Error{code;constructor(n,e){super(yn(n,e)),this.code=n}};function Ux(t){return`NG0${Math.abs(t)}`}function yn(t,n){return`${Ux(t)}${n?": "+n:""}`}var pr=globalThis;function we(t){for(let n in t)if(t[n]===we)return n;throw Error("")}function Dy(t,n){for(let e in n)n.hasOwnProperty(e)&&!t.hasOwnProperty(e)&&(t[e]=n[e])}function xs(t){if(typeof t=="string")return t;if(Array.isArray(t))return`[${t.map(xs).join(", ")}]`;if(t==null)return""+t;let n=t.overriddenName||t.name;if(n)return`${n}`;let e=t.toString();if(e==null)return""+e;let r=e.indexOf(`
`);return r>=0?e.slice(0,r):e}function rc(t,n){return t?n?`${t} ${n}`:t:n||""}var $x=we({__forward_ref__:we});function bn(t){return t.__forward_ref__=bn,t}function lt(t){return eh(t)?t():t}function eh(t){return typeof t=="function"&&t.hasOwnProperty($x)&&t.__forward_ref__===bn}function _(t){return{token:t.token,providedIn:t.providedIn||null,factory:t.factory,value:void 0}}function F(t){return{providers:t.providers||[],imports:t.imports||[]}}function Is(t){return zx(t,ic)}function th(t){return Is(t)!==null}function zx(t,n){return t.hasOwnProperty(n)&&t[n]||null}function Gx(t){let n=t?.[ic]??null;return n||null}function $f(t){return t&&t.hasOwnProperty(Ql)?t[Ql]:null}var ic=we({\u0275prov:we}),Ql=we({\u0275inj:we}),g=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(n,e){this._desc=n,this.\u0275prov=void 0,typeof e=="number"?this.__NG_ELEMENT_ID__=e:e!==void 0&&(this.\u0275prov=_({token:this,providedIn:e.providedIn||"root",factory:e.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function nh(t){return t&&!!t.\u0275providers}var Ss=we({\u0275cmp:we}),Ms=we({\u0275dir:we}),rh=we({\u0275pipe:we}),ih=we({\u0275mod:we}),_s=we({\u0275fac:we}),ei=we({__NG_ELEMENT_ID__:we}),yy=we({__NG_ENV_ID__:we});function oh(t){return oc(t,"@NgModule"),t[ih]||null}function Pn(t){return oc(t,"@Component"),t[Ss]||null}function sh(t){return oc(t,"@Directive"),t[Ms]||null}function Cy(t){return oc(t,"@Pipe"),t[rh]||null}function oc(t,n){if(t==null)throw new C(-919,!1)}function ti(t){return typeof t=="string"?t:t==null?"":String(t)}var Ey=we({ngErrorCode:we}),Wx=we({ngErrorMessage:we}),qx=we({ngTokenPath:we});function ah(t,n){return xy("",-200,n)}function sc(t,n){throw new C(-201,!1)}function xy(t,n,e){let r=new C(n,t);return r[Ey]=n,r[Wx]=t,e&&(r[qx]=e),r}function Yx(t){return t[Ey]}var zf;function Iy(){return zf}function xt(t){let n=zf;return zf=t,n}function lh(t,n,e){let r=Is(t);if(r&&r.providedIn=="root")return r.value===void 0?r.value=r.factory():r.value;if(e&8)return null;if(n!==void 0)return n;sc(t,"")}var Zx={},Kr=Zx,Kx="__NG_DI_FLAG__",Gf=class{injector;constructor(n){this.injector=n}retrieve(n,e){let r=Qr(e)||0;try{return this.injector.get(n,r&8?null:Kr,r)}catch(i){if(qi(i))return i;throw i}}};function Qx(t,n=0){let e=Zl();if(e===void 0)throw new C(-203,!1);if(e===null)return lh(t,void 0,n);{let r=Xx(n),i=e.retrieve(t,r);if(qi(i)){if(r.optional)return null;throw i}return i}}function T(t,n=0){return(Iy()||Qx)(lt(t),n)}function u(t,n){return T(t,Qr(n))}function Qr(t){return typeof t>"u"||typeof t=="number"?t:0|(t.optional&&8)|(t.host&&1)|(t.self&&2)|(t.skipSelf&&4)}function Xx(t){return{optional:!!(t&8),host:!!(t&1),self:!!(t&2),skipSelf:!!(t&4)}}function Wf(t){let n=[];for(let e=0;e<t.length;e++){let r=lt(t[e]);if(Array.isArray(r)){if(r.length===0)throw new C(900,!1);let i,o=0;for(let s=0;s<r.length;s++){let a=r[s],l=Jx(a);typeof l=="number"?l===-1?i=a.token:o|=l:i=a}n.push(T(i,o))}else n.push(T(r))}return n}function Jx(t){return t[Kx]}function ur(t,n){let e=t.hasOwnProperty(_s);return e?t[_s]:null}function Sy(t,n,e){if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++){let i=t[r],o=n[r];if(e&&(i=e(i),o=e(o)),o!==i)return!1}return!0}function My(t){return t.flat(Number.POSITIVE_INFINITY)}function ac(t,n){t.forEach(e=>Array.isArray(e)?ac(e,n):n(e))}function ch(t,n,e){n>=t.length?t.push(e):t.splice(n,0,e)}function Ts(t,n){return n>=t.length-1?t.pop():t.splice(n,1)[0]}function Ty(t,n){let e=[];for(let r=0;r<t;r++)e.push(n);return e}function Ay(t,n,e,r){let i=t.length;if(i==n)t.push(e,r);else if(i===1)t.push(r,t[0]),t[0]=e;else{for(i--,t.push(t[i-1],t[i]);i>n;){let o=i-2;t[i]=t[o],i--}t[n]=e,t[n+1]=r}}function lc(t,n,e){let r=Zi(t,n);return r>=0?t[r|1]=e:(r=~r,Ay(t,r,n,e)),r}function cc(t,n){let e=Zi(t,n);if(e>=0)return t[e|1]}function Zi(t,n){return eI(t,n,1)}function eI(t,n,e){let r=0,i=t.length>>e;for(;i!==r;){let o=r+(i-r>>1),s=t[o<<e];if(n===s)return o<<e;s>n?i=o:r=o+1}return~(i<<e)}var mr={},vt=[],ni=new g(""),dh=new g("",-1),uh=new g(""),ws=class{get(n,e=Kr){if(e===Kr){let i=xy("",-201);throw i.name="\u0275NotFound",i}return e}};function ct(t){return{\u0275providers:t}}function dc(...t){return{\u0275providers:fh(!0,t),\u0275fromNgModule:!0}}function fh(t,...n){let e=[],r=new Set,i,o=s=>{e.push(s)};return ac(n,s=>{let a=s;Xl(a,o,[],r)&&(i||=[],i.push(a))}),i!==void 0&&Ry(i,o),e}function Ry(t,n){for(let e=0;e<t.length;e++){let{ngModule:r,providers:i}=t[e];hh(i,o=>{n(o,r)})}}function Xl(t,n,e,r){if(t=lt(t),!t)return!1;let i=null,o=$f(t),s=!o&&Pn(t);if(!o&&!s){let l=t.ngModule;if(o=$f(l),o)i=l;else return!1}else{if(s&&!s.standalone)return!1;i=t}let a=r.has(i);if(s){if(a)return!1;if(r.add(i),s.dependencies){let l=typeof s.dependencies=="function"?s.dependencies():s.dependencies;for(let c of l)Xl(c,n,e,r)}}else if(o){if(o.imports!=null&&!a){r.add(i);let c;ac(o.imports,d=>{Xl(d,n,e,r)&&(c||=[],c.push(d))}),c!==void 0&&Ry(c,n)}if(!a){let c=ur(i)||(()=>new i);n({provide:i,useFactory:c,deps:vt},i),n({provide:uh,useValue:i,multi:!0},i),n({provide:ni,useValue:()=>T(i),multi:!0},i)}let l=o.providers;if(l!=null&&!a){let c=t;hh(l,d=>{n(d,c)})}}else return!1;return i!==t&&t.providers!==void 0}function hh(t,n){for(let e of t)nh(e)&&(e=e.\u0275providers),Array.isArray(e)?hh(e,n):n(e)}var tI=we({provide:String,useValue:we});function ky(t){return t!==null&&typeof t=="object"&&tI in t}function nI(t){return!!(t&&t.useExisting)}function rI(t){return!!(t&&t.useFactory)}function Xr(t){return typeof t=="function"}function Ny(t){return!!t.useClass}var As=new g(""),Kl={},by={},Uf;function Ki(){return Uf===void 0&&(Uf=new ws),Uf}var Ie=class{},Jr=class extends Ie{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(n,e,r,i){super(),this.parent=e,this.source=r,this.scopes=i,Yf(n,s=>this.processProvider(s)),this.records.set(dh,Yi(void 0,this)),i.has("environment")&&this.records.set(Ie,Yi(void 0,this));let o=this.records.get(As);o!=null&&typeof o.value=="string"&&this.scopes.add(o.value),this.injectorDefTypes=new Set(this.get(uh,vt,{self:!0}))}retrieve(n,e){let r=Qr(e)||0;try{return this.get(n,Kr,r)}catch(i){if(qi(i))return i;throw i}}destroy(){bs(this),this._destroyed=!0;let n=$(null);try{for(let r of this._ngOnDestroyHooks)r.ngOnDestroy();let e=this._onDestroyHooks;this._onDestroyHooks=[];for(let r of e)r()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),$(n)}}onDestroy(n){return bs(this),this._onDestroyHooks.push(n),()=>this.removeOnDestroy(n)}runInContext(n){bs(this);let e=gn(this),r=xt(void 0),i;try{return n()}finally{gn(e),xt(r)}}get(n,e=Kr,r){if(bs(this),n.hasOwnProperty(yy))return n[yy](this);let i=Qr(r),o,s=gn(this),a=xt(void 0);try{if(!(i&4)){let c=this.records.get(n);if(c===void 0){let d=lI(n)&&Is(n);d&&this.injectableDefInScope(d)?c=Yi(qf(n),Kl):c=null,this.records.set(n,c)}if(c!=null)return this.hydrate(n,c,i)}let l=i&2?Ki():this.parent;return e=i&8&&e===Kr?null:e,l.get(n,e)}catch(l){let c=Yx(l);throw c===-200||c===-201?new C(c,null):l}finally{xt(a),gn(s)}}resolveInjectorInitializers(){let n=$(null),e=gn(this),r=xt(void 0),i;try{let o=this.get(ni,vt,{self:!0});for(let s of o)s()}finally{gn(e),xt(r),$(n)}}toString(){return"R3Injector[...]"}processProvider(n){n=lt(n);let e=Xr(n)?n:lt(n&&n.provide),r=oI(n);if(!Xr(n)&&n.multi===!0){let i=this.records.get(e);i||(i=Yi(void 0,Kl,!0),i.factory=()=>Wf(i.multi),this.records.set(e,i)),e=n,i.multi.push(n)}this.records.set(e,r)}hydrate(n,e,r){let i=$(null);try{if(e.value===by)throw ah("");return e.value===Kl&&(e.value=by,e.value=e.factory(void 0,r)),typeof e.value=="object"&&e.value&&aI(e.value)&&this._ngOnDestroyHooks.add(e.value),e.value}finally{$(i)}}injectableDefInScope(n){if(!n.providedIn)return!1;let e=lt(n.providedIn);return typeof e=="string"?e==="any"||this.scopes.has(e):this.injectorDefTypes.has(e)}removeOnDestroy(n){let e=this._onDestroyHooks.indexOf(n);e!==-1&&this._onDestroyHooks.splice(e,1)}};function qf(t){let n=Is(t),e=n!==null?n.factory:ur(t);if(e!==null)return e;if(t instanceof g)throw new C(-204,!1);if(t instanceof Function)return iI(t);throw new C(-204,!1)}function iI(t){if(t.length>0)throw new C(-204,!1);let e=Gx(t);return e!==null?()=>e.factory(t):()=>new t}function oI(t){if(ky(t))return Yi(void 0,t.useValue);{let n=ph(t);return Yi(n,Kl)}}function ph(t,n,e){let r;if(Xr(t)){let i=lt(t);return ur(i)||qf(i)}else if(ky(t))r=()=>lt(t.useValue);else if(rI(t))r=()=>t.useFactory(...Wf(t.deps||[]));else if(nI(t))r=(i,o)=>T(lt(t.useExisting),o!==void 0&&o&8?8:void 0);else{let i=lt(t&&(t.useClass||t.provide));if(sI(t))r=()=>new i(...Wf(t.deps));else return ur(i)||qf(i)}return r}function bs(t){if(t.destroyed)throw new C(-205,!1)}function Yi(t,n,e=!1){return{factory:t,value:n,multi:e?[]:void 0}}function sI(t){return!!t.deps}function aI(t){return t!==null&&typeof t=="object"&&typeof t.ngOnDestroy=="function"}function lI(t){return typeof t=="function"||typeof t=="object"&&t.ngMetadataName==="InjectionToken"}function Yf(t,n){for(let e of t)Array.isArray(e)?Yf(e,n):e&&nh(e)?Yf(e.\u0275providers,n):n(e)}function Ye(t,n){let e;t instanceof Jr?(bs(t),e=t):e=new Gf(t);let r,i=gn(e),o=xt(void 0);try{return n()}finally{gn(i),xt(o)}}function Oy(){return Iy()!==void 0||Zl()!=null}var Jt=0,V=1,Q=2,qe=3,Ht=4,It=5,ri=6,Qi=7,He=8,Ln=9,en=10,Ae=11,Xi=12,mh=13,ii=14,St=15,gr=16,oi=17,_n=18,jn=19,gh=20,Fn=21,uc=22,fr=23,Lt=24,si=25,vr=26,Re=27,Fy=1,vh=6,yr=7,Rs=8,ai=9,Oe=10;function Vn(t){return Array.isArray(t)&&typeof t[Fy]=="object"}function tn(t){return Array.isArray(t)&&t[Fy]===!0}function yh(t){return(t.flags&4)!==0}function Bn(t){return t.componentOffset>-1}function Ji(t){return(t.flags&1)===1}function wn(t){return!!t.template}function eo(t){return(t[Q]&512)!==0}function li(t){return(t[Q]&256)===256}var bh="svg",Py="math";function Ut(t){for(;Array.isArray(t);)t=t[Jt];return t}function _h(t,n){return Ut(n[t])}function nn(t,n){return Ut(n[t.index])}function fc(t,n){return t.data[n]}function wh(t,n){return t[n]}function Dh(t,n,e,r){e>=t.data.length&&(t.data[e]=null,t.blueprint[e]=null),n[e]=r}function $t(t,n){let e=n[t];return Vn(e)?e:e[Jt]}function Ly(t){return(t[Q]&4)===4}function hc(t){return(t[Q]&128)===128}function jy(t){return tn(t[qe])}function jt(t,n){return n==null?null:t[n]}function Ch(t){t[oi]=0}function Eh(t){t[Q]&1024||(t[Q]|=1024,hc(t)&&ci(t))}function Vy(t,n){for(;t>0;)n=n[ii],t--;return n}function ks(t){return!!(t[Q]&9216||t[Lt]?.dirty)}function pc(t){t[en].changeDetectionScheduler?.notify(8),t[Q]&64&&(t[Q]|=1024),ks(t)&&ci(t)}function ci(t){t[en].changeDetectionScheduler?.notify(0);let n=hr(t);for(;n!==null&&!(n[Q]&8192||(n[Q]|=8192,!hc(n)));)n=hr(n)}function xh(t,n){if(li(t))throw new C(911,!1);t[Fn]===null&&(t[Fn]=[]),t[Fn].push(n)}function By(t,n){if(t[Fn]===null)return;let e=t[Fn].indexOf(n);e!==-1&&t[Fn].splice(e,1)}function hr(t){let n=t[qe];return tn(n)?n[qe]:n}function Ih(t){return t[Qi]??=[]}function Sh(t){return t.cleanup??=[]}function Hy(t,n,e,r){let i=Ih(n);i.push(e),t.firstCreatePass&&Sh(t).push(r,i.length-1)}var se={lFrame:Jy(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var Zf=!1;function Uy(){return se.lFrame.elementDepthCount}function $y(){se.lFrame.elementDepthCount++}function Mh(){se.lFrame.elementDepthCount--}function mc(){return se.bindingsEnabled}function Th(){return se.skipHydrationRootTNode!==null}function Ah(t){return se.skipHydrationRootTNode===t}function Rh(){se.skipHydrationRootTNode=null}function q(){return se.lFrame.lView}function ke(){return se.lFrame.tView}function Ze(t){return se.lFrame.contextLView=t,t[He]}function Ke(t){return se.lFrame.contextLView=null,t}function rt(){let t=kh();for(;t!==null&&t.type===64;)t=t.parent;return t}function kh(){return se.lFrame.currentTNode}function zy(){let t=se.lFrame,n=t.currentTNode;return t.isParent?n:n.parent}function to(t,n){let e=se.lFrame;e.currentTNode=t,e.isParent=n}function Nh(){return se.lFrame.isParent}function Oh(){se.lFrame.isParent=!1}function Gy(){return se.lFrame.contextLView}function Fh(){return Zf}function Ds(t){let n=Zf;return Zf=t,n}function Ph(){let t=se.lFrame,n=t.bindingRootIndex;return n===-1&&(n=t.bindingRootIndex=t.tView.bindingStartIndex),n}function Wy(){return se.lFrame.bindingIndex}function qy(t){return se.lFrame.bindingIndex=t}function di(){return se.lFrame.bindingIndex++}function gc(t){let n=se.lFrame,e=n.bindingIndex;return n.bindingIndex=n.bindingIndex+t,e}function Yy(){return se.lFrame.inI18n}function Zy(t,n){let e=se.lFrame;e.bindingIndex=e.bindingRootIndex=t,vc(n)}function Ky(){return se.lFrame.currentDirectiveIndex}function vc(t){se.lFrame.currentDirectiveIndex=t}function Qy(t){let n=se.lFrame.currentDirectiveIndex;return n===-1?null:t[n]}function yc(){return se.lFrame.currentQueryIndex}function Ns(t){se.lFrame.currentQueryIndex=t}function cI(t){let n=t[V];return n.type===2?n.declTNode:n.type===1?t[It]:null}function Lh(t,n,e){if(e&4){let i=n,o=t;for(;i=i.parent,i===null&&!(e&1);)if(i=cI(o),i===null||(o=o[ii],i.type&10))break;if(i===null)return!1;n=i,t=o}let r=se.lFrame=Xy();return r.currentTNode=n,r.lView=t,!0}function bc(t){let n=Xy(),e=t[V];se.lFrame=n,n.currentTNode=e.firstChild,n.lView=t,n.tView=e,n.contextLView=t,n.bindingIndex=e.bindingStartIndex,n.inI18n=!1}function Xy(){let t=se.lFrame,n=t===null?null:t.child;return n===null?Jy(t):n}function Jy(t){let n={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:t,child:null,inI18n:!1};return t!==null&&(t.child=n),n}function eb(){let t=se.lFrame;return se.lFrame=t.parent,t.currentTNode=null,t.lView=null,t}var jh=eb;function _c(){let t=eb();t.isParent=!0,t.tView=null,t.selectedIndex=-1,t.contextLView=null,t.elementDepthCount=0,t.currentDirectiveIndex=-1,t.currentNamespace=null,t.bindingRootIndex=-1,t.bindingIndex=-1,t.currentQueryIndex=0}function tb(t){return(se.lFrame.contextLView=Vy(t,se.lFrame.contextLView))[He]}function Dn(){return se.lFrame.selectedIndex}function br(t){se.lFrame.selectedIndex=t}function wc(){let t=se.lFrame;return fc(t.tView,t.selectedIndex)}function _r(){se.lFrame.currentNamespace=bh}function Vh(){return se.lFrame.currentNamespace}var nb=!0;function Dc(){return nb}function Os(t){nb=t}function Kf(t,n=null,e=null,r){let i=Bh(t,n,e,r);return i.resolveInjectorInitializers(),i}function Bh(t,n=null,e=null,r,i=new Set){let o=[e||vt,dc(t)],s;return new Jr(o,n||Ki(),s||null,i)}var z=class t{static THROW_IF_NOT_FOUND=Kr;static NULL=new ws;static create(n,e){if(Array.isArray(n))return Kf({name:""},e,n,"");{let r=n.name??"";return Kf({name:r},n.parent,n.providers,r)}}static \u0275prov=_({token:t,providedIn:"any",factory:()=>T(dh)});static __NG_ELEMENT_ID__=-1},B=new g(""),Fe=(()=>{class t{static __NG_ELEMENT_ID__=dI;static __NG_ENV_ID__=e=>e}return t})(),Jl=class extends Fe{_lView;constructor(n){super(),this._lView=n}get destroyed(){return li(this._lView)}onDestroy(n){let e=this._lView;return xh(e,n),()=>By(e,n)}};function dI(){return new Jl(q())}var rb=!1,ib=new g(""),Hn=(()=>{class t{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new je(!1);debugTaskTracker=u(ib,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new G(e=>{e.next(!1),e.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let e=this.taskId++;return this.pendingTasks.add(e),this.debugTaskTracker?.add(e),e}has(e){return this.pendingTasks.has(e)}remove(e){this.pendingTasks.delete(e),this.debugTaskTracker?.remove(e),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=_({token:t,providedIn:"root",factory:()=>new t})}return t})(),Qf=class extends D{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(n=!1){super(),this.__isAsync=n,Oy()&&(this.destroyRef=u(Fe,{optional:!0})??void 0,this.pendingTasks=u(Hn,{optional:!0})??void 0)}emit(n){let e=$(null);try{super.next(n)}finally{$(e)}}subscribe(n,e,r){let i=n,o=e||(()=>null),s=r;if(n&&typeof n=="object"){let l=n;i=l.next?.bind(l),o=l.error?.bind(l),s=l.complete?.bind(l)}this.__isAsync&&(o=this.wrapInTimeout(o),i&&(i=this.wrapInTimeout(i)),s&&(s=this.wrapInTimeout(s)));let a=super.subscribe({next:i,error:o,complete:s});return n instanceof de&&n.add(a),a}wrapInTimeout(n){return e=>{let r=this.pendingTasks?.add();setTimeout(()=>{try{n(e)}finally{r!==void 0&&this.pendingTasks?.remove(r)}})}}},W=Qf;function ec(...t){}function Hh(t){let n,e;function r(){t=ec;try{e!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(e),n!==void 0&&clearTimeout(n)}catch{}}return n=setTimeout(()=>{t(),r()}),typeof requestAnimationFrame=="function"&&(e=requestAnimationFrame(()=>{t(),r()})),()=>r()}function ob(t){return queueMicrotask(()=>t()),()=>{t=ec}}var Uh="isAngularZone",Cs=Uh+"_ID",uI=0,O=class t{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new W(!1);onMicrotaskEmpty=new W(!1);onStable=new W(!1);onError=new W(!1);constructor(n){let{enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:r=!1,shouldCoalesceRunChangeDetection:i=!1,scheduleInRootZone:o=rb}=n;if(typeof Zone>"u")throw new C(908,!1);Zone.assertZonePatched();let s=this;s._nesting=0,s._outer=s._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(s._inner=s._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(s._inner=s._inner.fork(Zone.longStackTraceZoneSpec)),s.shouldCoalesceEventChangeDetection=!i&&r,s.shouldCoalesceRunChangeDetection=i,s.callbackScheduled=!1,s.scheduleInRootZone=o,pI(s)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(Uh)===!0}static assertInAngularZone(){if(!t.isInAngularZone())throw new C(909,!1)}static assertNotInAngularZone(){if(t.isInAngularZone())throw new C(909,!1)}run(n,e,r){return this._inner.run(n,e,r)}runTask(n,e,r,i){let o=this._inner,s=o.scheduleEventTask("NgZoneEvent: "+i,n,fI,ec,ec);try{return o.runTask(s,e,r)}finally{o.cancelTask(s)}}runGuarded(n,e,r){return this._inner.runGuarded(n,e,r)}runOutsideAngular(n){return this._outer.run(n)}},fI={};function $h(t){if(t._nesting==0&&!t.hasPendingMicrotasks&&!t.isStable)try{t._nesting++,t.onMicrotaskEmpty.emit(null)}finally{if(t._nesting--,!t.hasPendingMicrotasks)try{t.runOutsideAngular(()=>t.onStable.emit(null))}finally{t.isStable=!0}}}function hI(t){if(t.isCheckStableRunning||t.callbackScheduled)return;t.callbackScheduled=!0;function n(){Hh(()=>{t.callbackScheduled=!1,Xf(t),t.isCheckStableRunning=!0,$h(t),t.isCheckStableRunning=!1})}t.scheduleInRootZone?Zone.root.run(()=>{n()}):t._outer.run(()=>{n()}),Xf(t)}function pI(t){let n=()=>{hI(t)},e=uI++;t._inner=t._inner.fork({name:"angular",properties:{[Uh]:!0,[Cs]:e,[Cs+e]:!0},onInvokeTask:(r,i,o,s,a,l)=>{if(mI(l))return r.invokeTask(o,s,a,l);try{return _y(t),r.invokeTask(o,s,a,l)}finally{(t.shouldCoalesceEventChangeDetection&&s.type==="eventTask"||t.shouldCoalesceRunChangeDetection)&&n(),wy(t)}},onInvoke:(r,i,o,s,a,l,c)=>{try{return _y(t),r.invoke(o,s,a,l,c)}finally{t.shouldCoalesceRunChangeDetection&&!t.callbackScheduled&&!gI(l)&&n(),wy(t)}},onHasTask:(r,i,o,s)=>{r.hasTask(o,s),i===o&&(s.change=="microTask"?(t._hasPendingMicrotasks=s.microTask,Xf(t),$h(t)):s.change=="macroTask"&&(t.hasPendingMacrotasks=s.macroTask))},onHandleError:(r,i,o,s)=>(r.handleError(o,s),t.runOutsideAngular(()=>t.onError.emit(s)),!1)})}function Xf(t){t._hasPendingMicrotasks||(t.shouldCoalesceEventChangeDetection||t.shouldCoalesceRunChangeDetection)&&t.callbackScheduled===!0?t.hasPendingMicrotasks=!0:t.hasPendingMicrotasks=!1}function _y(t){t._nesting++,t.isStable&&(t.isStable=!1,t.onUnstable.emit(null))}function wy(t){t._nesting--,$h(t)}var Es=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new W;onMicrotaskEmpty=new W;onStable=new W;onError=new W;run(n,e,r){return n.apply(e,r)}runGuarded(n,e,r){return n.apply(e,r)}runOutsideAngular(n){return n()}runTask(n,e,r,i){return n.apply(e,r)}};function mI(t){return sb(t,"__ignore_ng_zone__")}function gI(t){return sb(t,"__scheduler_tick__")}function sb(t,n){return!Array.isArray(t)||t.length!==1?!1:t[0]?.data?.[n]===!0}var Rt=class{_console=console;handleError(n){this._console.error("ERROR",n)}},rn=new g("",{factory:()=>{let t=u(O),n=u(Ie),e;return r=>{t.runOutsideAngular(()=>{n.destroyed&&!e?setTimeout(()=>{throw r}):(e??=n.get(Rt),e.handleError(r))})}}}),ab={provide:ni,useValue:()=>{let t=u(Rt,{optional:!0})},multi:!0};function ie(t,n){let[e,r,i]=xf(t,n?.equal),o=e,s=o[We];return o.set=r,o.update=i,o.asReadonly=lb.bind(o),o}function lb(){let t=this[We];if(t.readonlyFn===void 0){let n=()=>this();n[We]=t,t.readonlyFn=n}return t.readonlyFn}var no=(()=>{class t{view;node;constructor(e,r){this.view=e,this.node=r}static __NG_ELEMENT_ID__=vI}return t})();function vI(){return new no(q(),rt())}var vn=class{},Fs=new g("",{factory:()=>!0});var zh=new g(""),ro=(()=>{class t{internalPendingTasks=u(Hn);scheduler=u(vn);errorHandler=u(rn);add(){let e=this.internalPendingTasks.add();return()=>{this.internalPendingTasks.has(e)&&(this.scheduler.notify(11),this.internalPendingTasks.remove(e))}}run(e){let r=this.add();e().catch(this.errorHandler).finally(r)}static \u0275prov=_({token:t,providedIn:"root",factory:()=>new t})}return t})(),Cc=(()=>{class t{static \u0275prov=_({token:t,providedIn:"root",factory:()=>new Jf})}return t})(),Jf=class{dirtyEffectCount=0;queues=new Map;add(n){this.enqueue(n),this.schedule(n)}schedule(n){n.dirty&&this.dirtyEffectCount++}remove(n){let e=n.zone,r=this.queues.get(e);r.has(n)&&(r.delete(n),n.dirty&&this.dirtyEffectCount--)}enqueue(n){let e=n.zone;this.queues.has(e)||this.queues.set(e,new Set);let r=this.queues.get(e);r.has(n)||r.add(n)}flush(){for(;this.dirtyEffectCount>0;){let n=!1;for(let[e,r]of this.queues)e===null?n||=this.flushQueue(r):n||=e.run(()=>this.flushQueue(r));n||(this.dirtyEffectCount=0)}}flushQueue(n){let e=!1;for(let r of n)r.dirty&&(this.dirtyEffectCount--,e=!0,r.run());return e}},tc=class{[We];constructor(n){this[We]=n}destroy(){this[We].destroy()}};function ui(t,n){let e=n?.injector??u(z),r=n?.manualCleanup!==!0?e.get(Fe):null,i,o=e.get(no,null,{optional:!0}),s=e.get(vn);return o!==null?(i=_I(o.view,s,t),r instanceof Jl&&r._lView===o.view&&(r=null)):i=wI(t,e.get(Cc),s),i.injector=e,r!==null&&(i.onDestroyFns=[r.onDestroy(()=>i.destroy())]),new tc(i)}var cb=U(m({},Sf),{cleanupFns:void 0,zone:null,onDestroyFns:null,run(){let t=Ds(!1);try{Mf(this)}finally{Ds(t)}},cleanup(){if(!this.cleanupFns?.length)return;let t=$(null);try{for(;this.cleanupFns.length;)this.cleanupFns.pop()()}finally{this.cleanupFns=[],$(t)}}}),yI=U(m({},cb),{consumerMarkedDirty(){this.scheduler.schedule(this),this.notifier.notify(12)},destroy(){if(lr(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.scheduler.remove(this)}}),bI=U(m({},cb),{consumerMarkedDirty(){this.view[Q]|=8192,ci(this.view),this.notifier.notify(13)},destroy(){if(lr(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.view[fr]?.delete(this)}});function _I(t,n,e){let r=Object.create(bI);return r.view=t,r.zone=typeof Zone<"u"?Zone.current:null,r.notifier=n,r.fn=db(r,e),t[fr]??=new Set,t[fr].add(r),r.consumerMarkedDirty(r),r}function wI(t,n,e){let r=Object.create(yI);return r.fn=db(r,t),r.scheduler=n,r.notifier=e,r.zone=typeof Zone<"u"?Zone.current:null,r.scheduler.add(r),r.notifier.notify(12),r}function db(t,n){return()=>{n(e=>(t.cleanupFns??=[]).push(e))}}function Gs(t){return{toString:t}.toString()}function TI(t){return typeof t=="function"}function zb(t,n,e,r){n!==null?n.applyValueToInputSignal(n,r):t[e]=r}var Nc=class{previousValue;currentValue;firstChange;constructor(n,e,r){this.previousValue=n,this.currentValue=e,this.firstChange=r}isFirstChange(){return this.firstChange}},ut=(()=>{let t=()=>Gb;return t.ngInherit=!0,t})();function Gb(t){return t.type.prototype.ngOnChanges&&(t.setInput=RI),AI}function AI(){let t=qb(this),n=t?.current;if(n){let e=t.previous;if(e===mr)t.previous=n;else for(let r in n)e[r]=n[r];t.current=null,this.ngOnChanges(n)}}function RI(t,n,e,r,i){let o=this.declaredInputs[r],s=qb(t)||kI(t,{previous:mr,current:null}),a=s.current||(s.current={}),l=s.previous,c=l[o];a[o]=new Nc(c&&c.currentValue,e,l===mr),zb(t,n,i,e)}var Wb="__ngSimpleChanges__";function qb(t){return t[Wb]||null}function kI(t,n){return t[Wb]=n}var ub=[];var De=function(t,n=null,e){for(let r=0;r<ub.length;r++){let i=ub[r];i(t,n,e)}},me=(function(t){return t[t.TemplateCreateStart=0]="TemplateCreateStart",t[t.TemplateCreateEnd=1]="TemplateCreateEnd",t[t.TemplateUpdateStart=2]="TemplateUpdateStart",t[t.TemplateUpdateEnd=3]="TemplateUpdateEnd",t[t.LifecycleHookStart=4]="LifecycleHookStart",t[t.LifecycleHookEnd=5]="LifecycleHookEnd",t[t.OutputStart=6]="OutputStart",t[t.OutputEnd=7]="OutputEnd",t[t.BootstrapApplicationStart=8]="BootstrapApplicationStart",t[t.BootstrapApplicationEnd=9]="BootstrapApplicationEnd",t[t.BootstrapComponentStart=10]="BootstrapComponentStart",t[t.BootstrapComponentEnd=11]="BootstrapComponentEnd",t[t.ChangeDetectionStart=12]="ChangeDetectionStart",t[t.ChangeDetectionEnd=13]="ChangeDetectionEnd",t[t.ChangeDetectionSyncStart=14]="ChangeDetectionSyncStart",t[t.ChangeDetectionSyncEnd=15]="ChangeDetectionSyncEnd",t[t.AfterRenderHooksStart=16]="AfterRenderHooksStart",t[t.AfterRenderHooksEnd=17]="AfterRenderHooksEnd",t[t.ComponentStart=18]="ComponentStart",t[t.ComponentEnd=19]="ComponentEnd",t[t.DeferBlockStateStart=20]="DeferBlockStateStart",t[t.DeferBlockStateEnd=21]="DeferBlockStateEnd",t[t.DynamicComponentStart=22]="DynamicComponentStart",t[t.DynamicComponentEnd=23]="DynamicComponentEnd",t[t.HostBindingsUpdateStart=24]="HostBindingsUpdateStart",t[t.HostBindingsUpdateEnd=25]="HostBindingsUpdateEnd",t})(me||{});function NI(t,n,e){let{ngOnChanges:r,ngOnInit:i,ngDoCheck:o}=n.type.prototype;if(r){let s=Gb(n);(e.preOrderHooks??=[]).push(t,s),(e.preOrderCheckHooks??=[]).push(t,s)}i&&(e.preOrderHooks??=[]).push(0-t,i),o&&((e.preOrderHooks??=[]).push(t,o),(e.preOrderCheckHooks??=[]).push(t,o))}function Yb(t,n){for(let e=n.directiveStart,r=n.directiveEnd;e<r;e++){let o=t.data[e].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:a,ngAfterViewInit:l,ngAfterViewChecked:c,ngOnDestroy:d}=o;s&&(t.contentHooks??=[]).push(-e,s),a&&((t.contentHooks??=[]).push(e,a),(t.contentCheckHooks??=[]).push(e,a)),l&&(t.viewHooks??=[]).push(-e,l),c&&((t.viewHooks??=[]).push(e,c),(t.viewCheckHooks??=[]).push(e,c)),d!=null&&(t.destroyHooks??=[]).push(e,d)}}function Mc(t,n,e){Zb(t,n,3,e)}function Tc(t,n,e,r){(t[Q]&3)===e&&Zb(t,n,e,r)}function Gh(t,n){let e=t[Q];(e&3)===n&&(e&=16383,e+=1,t[Q]=e)}function Zb(t,n,e,r){let i=r!==void 0?t[oi]&65535:0,o=r??-1,s=n.length-1,a=0;for(let l=i;l<s;l++)if(typeof n[l+1]=="number"){if(a=n[l],r!=null&&a>=r)break}else n[l]<0&&(t[oi]+=65536),(a<o||o==-1)&&(OI(t,e,n,l),t[oi]=(t[oi]&4294901760)+l+2),l++}function fb(t,n){De(me.LifecycleHookStart,t,n);let e=$(null);try{n.call(t)}finally{$(e),De(me.LifecycleHookEnd,t,n)}}function OI(t,n,e,r){let i=e[r]<0,o=e[r+1],s=i?-e[r]:e[r],a=t[s];i?t[Q]>>14<t[oi]>>16&&(t[Q]&3)===n&&(t[Q]+=16384,fb(a,o)):fb(a,o)}var oo=-1,hi=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(n,e,r,i){this.factory=n,this.name=i,this.canSeeViewProviders=e,this.injectImpl=r}};function FI(t){return(t.flags&8)!==0}function PI(t){return(t.flags&16)!==0}function LI(t,n,e){let r=0;for(;r<e.length;){let i=e[r];if(typeof i=="number"){if(i!==0)break;r++;let o=e[r++],s=e[r++],a=e[r++];t.setAttribute(n,s,a,o)}else{let o=i,s=e[++r];jI(o)?t.setProperty(n,o,s):t.setAttribute(n,o,s),r++}}return r}function Kb(t){return t===3||t===4||t===6}function jI(t){return t.charCodeAt(0)===64}function so(t,n){if(!(n===null||n.length===0))if(t===null||t.length===0)t=n.slice();else{let e=-1;for(let r=0;r<n.length;r++){let i=n[r];typeof i=="number"?e=i:e===0||(e===-1||e===2?hb(t,e,i,null,n[++r]):hb(t,e,i,null,null))}}return t}function hb(t,n,e,r,i){let o=0,s=t.length;if(n===-1)s=-1;else for(;o<t.length;){let a=t[o++];if(typeof a=="number"){if(a===n){s=-1;break}else if(a>n){s=o-1;break}}}for(;o<t.length;){let a=t[o];if(typeof a=="number")break;if(a===e){i!==null&&(t[o+1]=i);return}o++,i!==null&&o++}s!==-1&&(t.splice(s,0,n),o=s+1),t.splice(o++,0,e),i!==null&&t.splice(o++,0,i)}function Qb(t){return t!==oo}function Oc(t){return t&32767}function VI(t){return t>>16}function Fc(t,n){let e=VI(t),r=n;for(;e>0;)r=r[ii],e--;return r}var tp=!0;function Pc(t){let n=tp;return tp=t,n}var BI=256,Xb=BI-1,Jb=5,HI=0,Cn={};function UI(t,n,e){let r;typeof e=="string"?r=e.charCodeAt(0)||0:e.hasOwnProperty(ei)&&(r=e[ei]),r==null&&(r=e[ei]=HI++);let i=r&Xb,o=1<<i;n.data[t+(i>>Jb)]|=o}function Lc(t,n){let e=e_(t,n);if(e!==-1)return e;let r=n[V];r.firstCreatePass&&(t.injectorIndex=n.length,Wh(r.data,t),Wh(n,null),Wh(r.blueprint,null));let i=jp(t,n),o=t.injectorIndex;if(Qb(i)){let s=Oc(i),a=Fc(i,n),l=a[V].data;for(let c=0;c<8;c++)n[o+c]=a[s+c]|l[s+c]}return n[o+8]=i,o}function Wh(t,n){t.push(0,0,0,0,0,0,0,0,n)}function e_(t,n){return t.injectorIndex===-1||t.parent&&t.parent.injectorIndex===t.injectorIndex||n[t.injectorIndex+8]===null?-1:t.injectorIndex}function jp(t,n){if(t.parent&&t.parent.injectorIndex!==-1)return t.parent.injectorIndex;let e=0,r=null,i=n;for(;i!==null;){if(r=o_(i),r===null)return oo;if(e++,i=i[ii],r.injectorIndex!==-1)return r.injectorIndex|e<<16}return oo}function np(t,n,e){UI(t,n,e)}function $I(t,n){if(n==="class")return t.classes;if(n==="style")return t.styles;let e=t.attrs;if(e){let r=e.length,i=0;for(;i<r;){let o=e[i];if(Kb(o))break;if(o===0)i=i+2;else if(typeof o=="number")for(i++;i<r&&typeof e[i]=="string";)i++;else{if(o===n)return e[i+1];i=i+2}}}return null}function t_(t,n,e){if(e&8||t!==void 0)return t;sc(n,"NodeInjector")}function n_(t,n,e,r){if(e&8&&r===void 0&&(r=null),(e&3)===0){let i=t[Ln],o=xt(void 0);try{return i?i.get(n,r,e&8):lh(n,r,e&8)}finally{xt(o)}}return t_(r,n,e)}function r_(t,n,e,r=0,i){if(t!==null){if(n[Q]&2048&&!(r&2)){let s=qI(t,n,e,r,Cn);if(s!==Cn)return s}let o=i_(t,n,e,r,Cn);if(o!==Cn)return o}return n_(n,e,r,i)}function i_(t,n,e,r,i){let o=GI(e);if(typeof o=="function"){if(!Lh(n,t,r))return r&1?t_(i,e,r):n_(n,e,r,i);try{let s;if(s=o(r),s==null&&!(r&8))sc(e);else return s}finally{jh()}}else if(typeof o=="number"){let s=null,a=e_(t,n),l=oo,c=r&1?n[St][It]:null;for((a===-1||r&4)&&(l=a===-1?jp(t,n):n[a+8],l===oo||!mb(r,!1)?a=-1:(s=n[V],a=Oc(l),n=Fc(l,n)));a!==-1;){let d=n[V];if(pb(o,a,d.data)){let f=zI(a,n,e,s,r,c);if(f!==Cn)return f}l=n[a+8],l!==oo&&mb(r,n[V].data[a+8]===c)&&pb(o,a,n)?(s=d,a=Oc(l),n=Fc(l,n)):a=-1}}return i}function zI(t,n,e,r,i,o){let s=n[V],a=s.data[t+8],l=r==null?Bn(a)&&tp:r!=s&&(a.type&3)!==0,c=i&1&&o===a,d=Ac(a,s,e,l,c);return d!==null?Vs(n,s,d,a,i):Cn}function Ac(t,n,e,r,i){let o=t.providerIndexes,s=n.data,a=o&1048575,l=t.directiveStart,c=t.directiveEnd,d=o>>20,f=r?a:a+d,h=i?a+d:c;for(let p=f;p<h;p++){let y=s[p];if(p<l&&e===y||p>=l&&y.type===e)return p}if(i){let p=s[l];if(p&&wn(p)&&p.type===e)return l}return null}function Vs(t,n,e,r,i){let o=t[e],s=n.data;if(o instanceof hi){let a=o;if(a.resolving)throw ah("");let l=Pc(a.canSeeViewProviders);a.resolving=!0;let c=s[e].type||s[e],d,f=a.injectImpl?xt(a.injectImpl):null,h=Lh(t,r,0);try{o=t[e]=a.factory(void 0,i,s,t,r),n.firstCreatePass&&e>=r.directiveStart&&NI(e,s[e],n)}finally{f!==null&&xt(f),Pc(l),a.resolving=!1,jh()}}return o}function GI(t){if(typeof t=="string")return t.charCodeAt(0)||0;let n=t.hasOwnProperty(ei)?t[ei]:void 0;return typeof n=="number"?n>=0?n&Xb:WI:n}function pb(t,n,e){let r=1<<t;return!!(e[n+(t>>Jb)]&r)}function mb(t,n){return!(t&2)&&!(t&1&&n)}var fi=class{_tNode;_lView;constructor(n,e){this._tNode=n,this._lView=e}get(n,e,r){return r_(this._tNode,this._lView,n,Qr(r),e)}};function WI(){return new fi(rt(),q())}function Mt(t){return Gs(()=>{let n=t.prototype.constructor,e=n[_s]||rp(n),r=Object.prototype,i=Object.getPrototypeOf(t.prototype).constructor;for(;i&&i!==r;){let o=i[_s]||rp(i);if(o&&o!==e)return o;i=Object.getPrototypeOf(i)}return o=>new o})}function rp(t){return eh(t)?()=>{let n=rp(lt(t));return n&&n()}:ur(t)}function qI(t,n,e,r,i){let o=t,s=n;for(;o!==null&&s!==null&&s[Q]&2048&&!eo(s);){let a=i_(o,s,e,r|2,Cn);if(a!==Cn)return a;let l=o.parent;if(!l){let c=s[gh];if(c){let d=c.get(e,Cn,r&-5);if(d!==Cn)return d}l=o_(s),s=s[ii]}o=l}return i}function o_(t){let n=t[V],e=n.type;return e===2?n.declTNode:e===1?t[It]:null}function Vp(t){return $I(rt(),t)}function YI(){return fo(rt(),q())}function fo(t,n){return new j(nn(t,n))}var j=(()=>{class t{nativeElement;constructor(e){this.nativeElement=e}static __NG_ELEMENT_ID__=YI}return t})();function s_(t){return t instanceof j?t.nativeElement:t}function ZI(){return this._results[Symbol.iterator]()}var an=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new D}constructor(n=!1){this._emitDistinctChangesOnly=n}get(n){return this._results[n]}map(n){return this._results.map(n)}filter(n){return this._results.filter(n)}find(n){return this._results.find(n)}reduce(n,e){return this._results.reduce(n,e)}forEach(n){this._results.forEach(n)}some(n){return this._results.some(n)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(n,e){this.dirty=!1;let r=My(n);(this._changesDetected=!Sy(this._results,r,e))&&(this._results=r,this.length=r.length,this.last=r[this.length-1],this.first=r[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(n){this._onDirty=n}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=ZI};function a_(t){return(t.flags&128)===128}var Bp=(function(t){return t[t.OnPush=0]="OnPush",t[t.Eager=1]="Eager",t[t.Default=1]="Default",t})(Bp||{}),l_=new Map,KI=0;function QI(){return KI++}function XI(t){l_.set(t[jn],t)}function ip(t){l_.delete(t[jn])}var gb="__ngContext__";function ao(t,n){Vn(n)?(t[gb]=n[jn],XI(n)):t[gb]=n}function c_(t){return u_(t[Xi])}function d_(t){return u_(t[Ht])}function u_(t){for(;t!==null&&!tn(t);)t=t[Ht];return t}var op;function Hp(t){op=t}function f_(){if(op!==void 0)return op;if(typeof document<"u")return document;throw new C(210,!1)}var ho=new g("",{factory:()=>JI}),JI="ng";var Kc=new g(""),vi=new g("",{providedIn:"platform",factory:()=>"unknown"}),Ws=new g(""),yi=new g("",{factory:()=>u(B).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var h_="r";var p_="di";var m_=!1,g_=new g("",{factory:()=>m_});var vb=new WeakMap;function eS(t,n){if(t==null||typeof t!="object")return;let e=vb.get(t);e||(e=new WeakSet,vb.set(t,e)),e.add(n)}var tS=(t,n,e,r)=>{};function nS(t,n,e,r){tS(t,n,e,r)}function Qc(t){return(t.flags&32)===32}var rS=()=>null;function v_(t,n,e=!1){return rS(t,n,e)}function y_(t,n){let e=t.contentQueries;if(e!==null){let r=$(null);try{for(let i=0;i<e.length;i+=2){let o=e[i],s=e[i+1];if(s!==-1){let a=t.data[s];Ns(o),a.contentQueries(2,n[s],s)}}}finally{$(r)}}}function sp(t,n,e){Ns(0);let r=$(null);try{n(t,e)}finally{$(r)}}function Up(t,n,e){if(yh(n)){let r=$(null);try{let i=n.directiveStart,o=n.directiveEnd;for(let s=i;s<o;s++){let a=t.data[s];if(a.contentQueries){let l=e[s];a.contentQueries(1,l,s)}}}finally{$(r)}}}var ln=(function(t){return t[t.Emulated=0]="Emulated",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom",t[t.ExperimentalIsolatedShadowDom=4]="ExperimentalIsolatedShadowDom",t})(ln||{});var Ec;function iS(){if(Ec===void 0&&(Ec=null,pr.trustedTypes))try{Ec=pr.trustedTypes.createPolicy("angular",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return Ec}function Xc(t){return iS()?.createHTML(t)||t}var xc;function oS(){if(xc===void 0&&(xc=null,pr.trustedTypes))try{xc=pr.trustedTypes.createPolicy("angular#unsafe-bypass",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return xc}function yb(t){return oS()?.createHTML(t)||t}var Un=class{changingThisBreaksApplicationSecurity;constructor(n){this.changingThisBreaksApplicationSecurity=n}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${nc})`}},ap=class extends Un{getTypeName(){return"HTML"}},lp=class extends Un{getTypeName(){return"Style"}},cp=class extends Un{getTypeName(){return"Script"}},dp=class extends Un{getTypeName(){return"URL"}},up=class extends Un{getTypeName(){return"ResourceURL"}};function dn(t){return t instanceof Un?t.changingThisBreaksApplicationSecurity:t}function $n(t,n){let e=b_(t);if(e!=null&&e!==n){if(e==="ResourceURL"&&n==="URL")return!0;throw new Error(`Required a safe ${n}, got a ${e} (see ${nc})`)}return e===n}function b_(t){return t instanceof Un&&t.getTypeName()||null}function $p(t){return new ap(t)}function zp(t){return new lp(t)}function Gp(t){return new cp(t)}function Wp(t){return new dp(t)}function qp(t){return new up(t)}function sS(t){let n=new hp(t);return aS()?new fp(n):n}var fp=class{inertDocumentHelper;constructor(n){this.inertDocumentHelper=n}getInertBodyElement(n){n="<body><remove></remove>"+n;try{let e=new window.DOMParser().parseFromString(Xc(n),"text/html").body;return e===null?this.inertDocumentHelper.getInertBodyElement(n):(e.firstChild?.remove(),e)}catch{return null}}},hp=class{defaultDoc;inertDocument;constructor(n){this.defaultDoc=n,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert")}getInertBodyElement(n){let e=this.inertDocument.createElement("template");return e.innerHTML=Xc(n),e}};function aS(){try{return!!new window.DOMParser().parseFromString(Xc(""),"text/html")}catch{return!1}}var lS=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function qs(t){return t=String(t),t.match(lS)?t:"unsafe:"+t}function zn(t){let n={};for(let e of t.split(","))n[e]=!0;return n}function Ys(...t){let n={};for(let e of t)for(let r in e)e.hasOwnProperty(r)&&(n[r]=!0);return n}var __=zn("area,br,col,hr,img,wbr"),w_=zn("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),D_=zn("rp,rt"),cS=Ys(D_,w_),dS=Ys(w_,zn("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),uS=Ys(D_,zn("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),bb=Ys(__,dS,uS,cS),C_=zn("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),fS=zn("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),hS=zn("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),pS=Ys(C_,fS,hS),mS=zn("script,style,template"),pp=class{sanitizedSomething=!1;buf=[];sanitizeChildren(n){let e=n.firstChild,r=!0,i=[];for(;e;){if(e.nodeType===Node.ELEMENT_NODE?r=this.startElement(e):e.nodeType===Node.TEXT_NODE?this.chars(e.nodeValue):this.sanitizedSomething=!0,r&&e.firstChild){i.push(e),e=yS(e);continue}for(;e;){e.nodeType===Node.ELEMENT_NODE&&this.endElement(e);let o=vS(e);if(o){e=o;break}e=i.pop()}}return this.buf.join("")}startElement(n){let e=_b(n).toLowerCase();if(!bb.hasOwnProperty(e))return this.sanitizedSomething=!0,!mS.hasOwnProperty(e);this.buf.push("<"),this.buf.push(e);let r=n.attributes;for(let i=0;i<r.length;i++){let o=r.item(i),s=o.name,a=s.toLowerCase();if(!pS.hasOwnProperty(a)){this.sanitizedSomething=!0;continue}let l=o.value;C_[a]&&(l=qs(l)),this.buf.push(" ",s,'="',wb(l),'"')}return this.buf.push(">"),!0}endElement(n){let e=_b(n).toLowerCase();bb.hasOwnProperty(e)&&!__.hasOwnProperty(e)&&(this.buf.push("</"),this.buf.push(e),this.buf.push(">"))}chars(n){this.buf.push(wb(n))}};function gS(t,n){return(t.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY)!==Node.DOCUMENT_POSITION_CONTAINED_BY}function vS(t){let n=t.nextSibling;if(n&&t!==n.previousSibling)throw E_(n);return n}function yS(t){let n=t.firstChild;if(n&&gS(t,n))throw E_(n);return n}function _b(t){let n=t.nodeName;return typeof n=="string"?n:"FORM"}function E_(t){return new Error(`Failed to sanitize html because the element is clobbered: ${t.outerHTML}`)}var bS=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,_S=/([^\#-~ |!])/g;function wb(t){return t.replace(/&/g,"&amp;").replace(bS,function(n){let e=n.charCodeAt(0),r=n.charCodeAt(1);return"&#"+((e-55296)*1024+(r-56320)+65536)+";"}).replace(_S,function(n){return"&#"+n.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}var Ic;function Jc(t,n){let e=null;try{Ic=Ic||sS(t);let r=n?String(n):"";e=Ic.getInertBodyElement(r);let i=5,o=r;do{if(i===0)throw new Error("Failed to sanitize html because the input is unstable");i--,r=o,o=e.innerHTML,e=Ic.getInertBodyElement(r)}while(r!==o);let a=new pp().sanitizeChildren(Db(e)||e);return Xc(a)}finally{if(e){let r=Db(e)||e;for(;r.firstChild;)r.firstChild.remove()}}}function Db(t){return"content"in t&&wS(t)?t.content:null}function wS(t){return t.nodeType===Node.ELEMENT_NODE&&t.nodeName==="TEMPLATE"}var DS=/^>|^->|<!--|-->|--!>|<!-$/g,CS=/(<|>)/g,ES="\u200B$1\u200B";function xS(t){return t.replace(DS,n=>n.replace(CS,ES))}function IS(t,n){return t.createText(n)}function SS(t,n,e){t.setValue(n,e)}function MS(t,n){return t.createComment(xS(n))}function x_(t,n,e){return t.createElement(n,e)}function jc(t,n,e,r,i){t.insertBefore(n,e,r,i)}function I_(t,n,e){t.appendChild(n,e)}function Cb(t,n,e,r,i){r!==null?jc(t,n,e,r,i):I_(t,n,e)}function S_(t,n,e,r){t.removeChild(null,n,e,r)}function TS(t,n,e){t.setAttribute(n,"style",e)}function AS(t,n,e){e===""?t.removeAttribute(n,"class"):t.setAttribute(n,"class",e)}function M_(t,n,e){let{mergedAttrs:r,classes:i,styles:o}=e;r!==null&&LI(t,n,r),i!==null&&AS(t,n,i),o!==null&&TS(t,n,o)}var Qe=(function(t){return t[t.NONE=0]="NONE",t[t.HTML=1]="HTML",t[t.STYLE=2]="STYLE",t[t.SCRIPT=3]="SCRIPT",t[t.URL=4]="URL",t[t.RESOURCE_URL=5]="RESOURCE_URL",t[t.ATTRIBUTE_NO_BINDING=6]="ATTRIBUTE_NO_BINDING",t})(Qe||{});function Yp(t){let n=T_();return n?yb(n.sanitize(Qe.HTML,t)||""):$n(t,"HTML")?yb(dn(t)):Jc(f_(),ti(t))}function Zp(t){let n=T_();return n?n.sanitize(Qe.URL,t)||"":$n(t,"URL")?dn(t):qs(ti(t))}function T_(){let t=q();return t&&t[en].sanitizer}function A_(t){return t instanceof Function?t():t}function RS(t,n,e){let r=t.length;for(;;){let i=t.indexOf(n,e);if(i===-1)return i;if(i===0||t.charCodeAt(i-1)<=32){let o=n.length;if(i+o===r||t.charCodeAt(i+o)<=32)return i}e=i+1}}var R_="ng-template";function kS(t,n,e,r){let i=0;if(r){for(;i<n.length&&typeof n[i]=="string";i+=2)if(n[i]==="class"&&RS(n[i+1].toLowerCase(),e,0)!==-1)return!0}else if(Kp(t))return!1;if(i=n.indexOf(1,i),i>-1){let o;for(;++i<n.length&&typeof(o=n[i])=="string";)if(o.toLowerCase()===e)return!0}return!1}function Kp(t){return t.type===4&&t.value!==R_}function NS(t,n,e){let r=t.type===4&&!e?R_:t.value;return n===r}function OS(t,n,e){let r=4,i=t.attrs,o=i!==null?LS(i):0,s=!1;for(let a=0;a<n.length;a++){let l=n[a];if(typeof l=="number"){if(!s&&!on(r)&&!on(l))return!1;if(s&&on(l))continue;s=!1,r=l|r&1;continue}if(!s)if(r&4){if(r=2|r&1,l!==""&&!NS(t,l,e)||l===""&&n.length===1){if(on(r))return!1;s=!0}}else if(r&8){if(i===null||!kS(t,i,l,e)){if(on(r))return!1;s=!0}}else{let c=n[++a],d=FS(l,i,Kp(t),e);if(d===-1){if(on(r))return!1;s=!0;continue}if(c!==""){let f;if(d>o?f="":f=i[d+1].toLowerCase(),r&2&&c!==f){if(on(r))return!1;s=!0}}}}return on(r)||s}function on(t){return(t&1)===0}function FS(t,n,e,r){if(n===null)return-1;let i=0;if(r||!e){let o=!1;for(;i<n.length;){let s=n[i];if(s===t)return i;if(s===3||s===6)o=!0;else if(s===1||s===2){let a=n[++i];for(;typeof a=="string";)a=n[++i];continue}else{if(s===4)break;if(s===0){i+=4;continue}}i+=o?1:2}return-1}else return jS(n,t)}function k_(t,n,e=!1){for(let r=0;r<n.length;r++)if(OS(t,n[r],e))return!0;return!1}function PS(t){let n=t.attrs;if(n!=null){let e=n.indexOf(5);if((e&1)===0)return n[e+1]}return null}function LS(t){for(let n=0;n<t.length;n++){let e=t[n];if(Kb(e))return n}return t.length}function jS(t,n){let e=t.indexOf(4);if(e>-1)for(e++;e<t.length;){let r=t[e];if(typeof r=="number")return-1;if(r===n)return e;e++}return-1}function VS(t,n){e:for(let e=0;e<n.length;e++){let r=n[e];if(t.length===r.length){for(let i=0;i<t.length;i++)if(t[i]!==r[i])continue e;return!0}}return!1}function Eb(t,n){return t?":not("+n.trim()+")":n}function BS(t){let n=t[0],e=1,r=2,i="",o=!1;for(;e<t.length;){let s=t[e];if(typeof s=="string")if(r&2){let a=t[++e];i+="["+s+(a.length>0?'="'+a+'"':"")+"]"}else r&8?i+="."+s:r&4&&(i+=" "+s);else i!==""&&!on(s)&&(n+=Eb(o,i),i=""),r=s,o=o||!on(r);e++}return i!==""&&(n+=Eb(o,i)),n}function HS(t){return t.map(BS).join(",")}function US(t){let n=[],e=[],r=1,i=2;for(;r<t.length;){let o=t[r];if(typeof o=="string")i===2?o!==""&&n.push(o,t[++r]):i===8&&e.push(o);else{if(!on(i))break;i=o}r++}return e.length&&n.push(1,...e),n}var kt={};function Qp(t,n,e,r,i,o,s,a,l,c,d){let f=Re+r,h=f+i,p=$S(f,h),y=typeof c=="function"?c():c;return p[V]={type:t,blueprint:p,template:e,queries:null,viewQuery:a,declTNode:n,data:p.slice().fill(null,f),bindingStartIndex:f,expandoStartIndex:h,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof o=="function"?o():o,pipeRegistry:typeof s=="function"?s():s,firstChild:null,schemas:l,consts:y,incompleteFirstPass:!1,ssrId:d}}function $S(t,n){let e=[];for(let r=0;r<n;r++)e.push(r<t?null:kt);return e}function zS(t){let n=t.tView;return n===null||n.incompleteFirstPass?t.tView=Qp(1,null,t.template,t.decls,t.vars,t.directiveDefs,t.pipeDefs,t.viewQuery,t.schemas,t.consts,t.id):n}function Xp(t,n,e,r,i,o,s,a,l,c,d){let f=n.blueprint.slice();return f[Jt]=i,f[Q]=r|4|128|8|64|1024,(c!==null||t&&t[Q]&2048)&&(f[Q]|=2048),Ch(f),f[qe]=f[ii]=t,f[He]=e,f[en]=s||t&&t[en],f[Ae]=a||t&&t[Ae],f[Ln]=l||t&&t[Ln]||null,f[It]=o,f[jn]=QI(),f[ri]=d,f[gh]=c,f[St]=n.type==2?t[St]:f,f}function GS(t,n,e){let r=nn(n,t),i=zS(e),o=t[en].rendererFactory,s=Jp(t,Xp(t,i,null,N_(e),r,n,null,o.createRenderer(r,e),null,null,null));return t[n.index]=s}function N_(t){let n=16;return t.signals?n=4096:t.onPush&&(n=64),n}function O_(t,n,e,r){if(e===0)return-1;let i=n.length;for(let o=0;o<e;o++)n.push(r),t.blueprint.push(r),t.data.push(null);return i}function Jp(t,n){return t[Xi]?t[mh][Ht]=n:t[Xi]=n,t[mh]=n,n}function v(t=1){F_(ke(),q(),Dn()+t,!1)}function F_(t,n,e,r){if(!r)if((n[Q]&3)===3){let o=t.preOrderCheckHooks;o!==null&&Mc(n,o,e)}else{let o=t.preOrderHooks;o!==null&&Tc(n,o,0,e)}br(e)}var ed=(function(t){return t[t.None=0]="None",t[t.SignalBased=1]="SignalBased",t[t.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",t})(ed||{});function mp(t,n,e,r){let i=$(null);try{let[o,s,a]=t.inputs[e],l=null;(s&ed.SignalBased)!==0&&(l=n[o][We]),l!==null&&l.transformFn!==void 0?r=l.transformFn(r):a!==null&&(r=a.call(n,r)),t.setInput!==null?t.setInput(n,l,r,e,o):zb(n,l,o,r)}finally{$(i)}}var En=(function(t){return t[t.Important=1]="Important",t[t.DashCase=2]="DashCase",t})(En||{}),WS;function em(t,n){return WS(t,n)}var Ez=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";var gp=new WeakMap,Ps=new WeakSet;function qS(t,n){let e=gp.get(t);if(!e||e.length===0)return;let r=n.parentNode,i=n.previousSibling;for(let o=e.length-1;o>=0;o--){let s=e[o],a=s.parentNode;s===n?(e.splice(o,1),Ps.add(s),s.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}}))):(i&&s===i||a&&r&&a!==r)&&(e.splice(o,1),s.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),s.parentNode?.removeChild(s))}}function YS(t,n){let e=gp.get(t);e?e.includes(n)||e.push(n):gp.set(t,[n])}var pi=new Set,td=(function(t){return t[t.CHANGE_DETECTION=0]="CHANGE_DETECTION",t[t.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",t})(td||{}),un=new g(""),xb=new Set;function Dr(t){xb.has(t)||(xb.add(t),performance?.mark?.("mark_feature_usage",{detail:{feature:t}}))}var nd=(()=>{class t{impl=null;execute(){this.impl?.execute()}static \u0275prov=_({token:t,providedIn:"root",factory:()=>new t})}return t})(),tm=[0,1,2,3],nm=(()=>{class t{ngZone=u(O);scheduler=u(vn);errorHandler=u(Rt,{optional:!0});sequences=new Set;deferredRegistrations=new Set;executing=!1;constructor(){u(un,{optional:!0})}execute(){let e=this.sequences.size>0;e&&De(me.AfterRenderHooksStart),this.executing=!0;for(let r of tm)for(let i of this.sequences)if(!(i.erroredOrDestroyed||!i.hooks[r]))try{i.pipelinedValue=this.ngZone.runOutsideAngular(()=>this.maybeTrace(()=>{let o=i.hooks[r];return o(i.pipelinedValue)},i.snapshot))}catch(o){i.erroredOrDestroyed=!0,this.errorHandler?.handleError(o)}this.executing=!1;for(let r of this.sequences)r.afterRun(),r.once&&(this.sequences.delete(r),r.destroy());for(let r of this.deferredRegistrations)this.sequences.add(r);this.deferredRegistrations.size>0&&this.scheduler.notify(7),this.deferredRegistrations.clear(),e&&De(me.AfterRenderHooksEnd)}register(e){let{view:r}=e;r!==void 0?((r[si]??=[]).push(e),ci(r),r[Q]|=8192):this.executing?this.deferredRegistrations.add(e):this.addSequence(e)}addSequence(e){this.sequences.add(e),this.scheduler.notify(7)}unregister(e){this.executing&&this.sequences.has(e)?(e.erroredOrDestroyed=!0,e.pipelinedValue=void 0,e.once=!0):(this.sequences.delete(e),this.deferredRegistrations.delete(e))}maybeTrace(e,r){return r?r.run(td.AFTER_NEXT_RENDER,e):e()}static \u0275prov=_({token:t,providedIn:"root",factory:()=>new t})}return t})(),Bs=class{impl;hooks;view;once;snapshot;erroredOrDestroyed=!1;pipelinedValue=void 0;unregisterOnDestroy;constructor(n,e,r,i,o,s=null){this.impl=n,this.hooks=e,this.view=r,this.once=i,this.snapshot=s,this.unregisterOnDestroy=o?.onDestroy(()=>this.destroy())}afterRun(){this.erroredOrDestroyed=!1,this.pipelinedValue=void 0,this.snapshot?.dispose(),this.snapshot=null}destroy(){this.impl.unregister(this),this.unregisterOnDestroy?.();let n=this.view?.[si];n&&(this.view[si]=n.filter(e=>e!==this))}};function ze(t,n){let e=n?.injector??u(z);return Dr("NgAfterNextRender"),KS(t,e,n,!0)}function ZS(t){return t instanceof Function?[void 0,void 0,t,void 0]:[t.earlyRead,t.write,t.mixedReadWrite,t.read]}function KS(t,n,e,r){let i=n.get(nd);i.impl??=n.get(nm);let o=n.get(un,null,{optional:!0}),s=e?.manualCleanup!==!0?n.get(Fe):null,a=n.get(no,null,{optional:!0}),l=new Bs(i.impl,ZS(t),a?.view,r,s,o?.snapshot(null));return i.impl.register(l),l}var P_=new g("",{factory:()=>({queue:new Set,isScheduled:!1,scheduler:null,injector:u(Ie)})});function L_(t,n,e){let r=t.get(P_);if(Array.isArray(n))for(let i of n)r.queue.add(i),e?.detachedLeaveAnimationFns?.push(i);else r.queue.add(n),e?.detachedLeaveAnimationFns?.push(n);r.scheduler&&r.scheduler(t)}function QS(t,n){let e=t.get(P_);if(n.detachedLeaveAnimationFns){for(let r of n.detachedLeaveAnimationFns)e.queue.delete(r);n.detachedLeaveAnimationFns=void 0}}function XS(t,n){for(let[e,r]of n)L_(t,r.animateFns)}function Ib(t,n,e,r){let i=t?.[vr]?.enter;n!==null&&i&&i.has(e.index)&&XS(r,i)}function io(t,n,e,r,i,o,s,a){if(i!=null){let l,c=!1;tn(i)?l=i:Vn(i)&&(c=!0,i=i[Jt]);let d=Ut(i);t===0&&r!==null?(Ib(a,r,o,e),s==null?I_(n,r,d):jc(n,r,d,s||null,!0)):t===1&&r!==null?(Ib(a,r,o,e),jc(n,r,d,s||null,!0),qS(o,d)):t===2?(a?.[vr]?.leave?.has(o.index)&&YS(o,d),Ps.delete(d),Sb(a,o,e,f=>{if(Ps.has(d)){Ps.delete(d);return}S_(n,d,c,f)})):t===3&&(Ps.delete(d),Sb(a,o,e,()=>{n.destroyNode(d)})),l!=null&&cM(n,t,e,l,o,r,s)}}function JS(t,n){j_(t,n),n[Jt]=null,n[It]=null}function eM(t,n,e,r,i,o){r[Jt]=i,r[It]=n,id(t,r,e,1,i,o)}function j_(t,n){n[en].changeDetectionScheduler?.notify(9),id(t,n,n[Ae],2,null,null)}function tM(t){let n=t[Xi];if(!n)return qh(t[V],t);for(;n;){let e=null;if(Vn(n))e=n[Xi];else{let r=n[Oe];r&&(e=r)}if(!e){for(;n&&!n[Ht]&&n!==t;)Vn(n)&&qh(n[V],n),n=n[qe];n===null&&(n=t),Vn(n)&&qh(n[V],n),e=n&&n[Ht]}n=e}}function rm(t,n){let e=t[ai],r=e.indexOf(n);e.splice(r,1)}function rd(t,n){if(li(n))return;let e=n[Ae];e.destroyNode&&id(t,n,e,3,null,null),tM(n)}function qh(t,n){if(li(n))return;let e=$(null);try{n[Q]&=-129,n[Q]|=256,n[Lt]&&lr(n[Lt]),iM(t,n),rM(t,n),n[V].type===1&&n[Ae].destroy();let r=n[gr];if(r!==null&&tn(n[qe])){r!==n[qe]&&rm(r,n);let i=n[_n];i!==null&&i.detachView(t)}ip(n)}finally{$(e)}}function Sb(t,n,e,r){let i=t?.[vr];if(i==null||i.leave==null||!i.leave.has(n.index))return r(!1);t&&pi.add(t[jn]),L_(e,()=>{if(i.leave&&i.leave.has(n.index)){let s=i.leave.get(n.index),a=[];if(s){for(let l=0;l<s.animateFns.length;l++){let c=s.animateFns[l],{promise:d}=c();a.push(d)}i.detachedLeaveAnimationFns=void 0}i.running=Promise.allSettled(a),nM(t,r)}else t&&pi.delete(t[jn]),r(!1)},i)}function nM(t,n){let e=t[vr]?.running;if(e){e.then(()=>{t[vr].running=void 0,pi.delete(t[jn]),n(!0)});return}n(!1)}function rM(t,n){let e=t.cleanup,r=n[Qi];if(e!==null)for(let s=0;s<e.length-1;s+=2)if(typeof e[s]=="string"){let a=e[s+3];a>=0?r[a]():r[-a].unsubscribe(),s+=2}else{let a=r[e[s+1]];e[s].call(a)}r!==null&&(n[Qi]=null);let i=n[Fn];if(i!==null){n[Fn]=null;for(let s=0;s<i.length;s++){let a=i[s];a()}}let o=n[fr];if(o!==null){n[fr]=null;for(let s of o)s.destroy()}}function iM(t,n){let e;if(t!=null&&(e=t.destroyHooks)!=null)for(let r=0;r<e.length;r+=2){let i=n[e[r]];if(!(i instanceof hi)){let o=e[r+1];if(Array.isArray(o))for(let s=0;s<o.length;s+=2){let a=i[o[s]],l=o[s+1];De(me.LifecycleHookStart,a,l);try{l.call(a)}finally{De(me.LifecycleHookEnd,a,l)}}else{De(me.LifecycleHookStart,i,o);try{o.call(i)}finally{De(me.LifecycleHookEnd,i,o)}}}}}function V_(t,n,e){return oM(t,n.parent,e)}function oM(t,n,e){let r=n;for(;r!==null&&r.type&168;)n=r,r=n.parent;if(r===null)return e[Jt];if(Bn(r)){let{encapsulation:i}=t.data[r.directiveStart+r.componentOffset];if(i===ln.None||i===ln.Emulated)return null}return nn(r,e)}function B_(t,n,e){return aM(t,n,e)}function sM(t,n,e){return t.type&40?nn(t,e):null}var aM=sM,Mb;function im(t,n,e,r){let i=V_(t,r,n),o=n[Ae],s=r.parent||n[It],a=B_(s,r,n);if(i!=null)if(Array.isArray(e))for(let l=0;l<e.length;l++)Cb(o,i,e[l],a,!1);else Cb(o,i,e,a,!1);Mb!==void 0&&Mb(o,r,n,e,i)}function Ls(t,n){if(n!==null){let e=n.type;if(e&3)return nn(n,t);if(e&4)return vp(-1,t[n.index]);if(e&8){let r=n.child;if(r!==null)return Ls(t,r);{let i=t[n.index];return tn(i)?vp(-1,i):Ut(i)}}else{if(e&128)return Ls(t,n.next);if(e&32)return em(n,t)()||Ut(t[n.index]);{let r=H_(t,n);if(r!==null){if(Array.isArray(r))return r[0];let i=hr(t[St]);return Ls(i,r)}else return Ls(t,n.next)}}}return null}function H_(t,n){if(n!==null){let r=t[St][It],i=n.projection;return r.projection[i]}return null}function vp(t,n){let e=Oe+t+1;if(e<n.length){let r=n[e],i=r[V].firstChild;if(i!==null)return Ls(r,i)}return n[yr]}function om(t,n,e,r,i,o,s){for(;e!=null;){let a=r[Ln];if(e.type===128){e=e.next;continue}let l=r[e.index],c=e.type;if(s&&n===0&&(l&&ao(Ut(l),r),e.flags|=2),!Qc(e))if(c&8)om(t,n,e.child,r,i,o,!1),io(n,t,a,i,l,e,o,r);else if(c&32){let d=em(e,r),f;for(;f=d();)io(n,t,a,i,f,e,o,r);io(n,t,a,i,l,e,o,r)}else c&16?U_(t,n,r,e,i,o):io(n,t,a,i,l,e,o,r);e=s?e.projectionNext:e.next}}function id(t,n,e,r,i,o){om(e,r,t.firstChild,n,i,o,!1)}function lM(t,n,e){let r=n[Ae],i=V_(t,e,n),o=e.parent||n[It],s=B_(o,e,n);U_(r,0,n,e,i,s)}function U_(t,n,e,r,i,o){let s=e[St],l=s[It].projection[r.projection];if(Array.isArray(l))for(let c=0;c<l.length;c++){let d=l[c];io(n,t,e[Ln],i,d,r,o,e)}else{let c=l,d=s[qe];a_(r)&&(c.flags|=128),om(t,n,c,d,i,o,!0)}}function cM(t,n,e,r,i,o,s){let a=r[yr],l=Ut(r);a!==l&&io(n,t,e,o,a,i,s);for(let c=Oe;c<r.length;c++){let d=r[c];id(d[V],d,t,n,o,a)}}function dM(t,n,e,r,i){if(n)i?t.addClass(e,r):t.removeClass(e,r);else{let o=r.indexOf("-")===-1?void 0:En.DashCase;i==null?t.removeStyle(e,r,o):(typeof i=="string"&&i.endsWith("!important")&&(i=i.slice(0,-10),o|=En.Important),t.setStyle(e,r,i,o))}}function $_(t,n,e,r,i){let o=Dn(),s=r&2;try{br(-1),s&&n.length>Re&&F_(t,n,Re,!1);let a=s?me.TemplateUpdateStart:me.TemplateCreateStart;De(a,i,e),e(r,i)}finally{br(o);let a=s?me.TemplateUpdateEnd:me.TemplateCreateEnd;De(a,i,e)}}function od(t,n,e){vM(t,n,e),(e.flags&64)===64&&yM(t,n,e)}function Zs(t,n,e=nn){let r=n.localNames;if(r!==null){let i=n.index+1;for(let o=0;o<r.length;o+=2){let s=r[o+1],a=s===-1?e(n,t):t[s];t[i++]=a}}}function uM(t,n,e,r){let o=r.get(g_,m_)||e===ln.ShadowDom||e===ln.ExperimentalIsolatedShadowDom,s=t.selectRootElement(n,o);return fM(s),s}function fM(t){hM(t)}var hM=()=>null;function pM(t){return t==="class"?"className":t==="for"?"htmlFor":t==="formaction"?"formAction":t==="innerHtml"?"innerHTML":t==="readonly"?"readOnly":t==="tabindex"?"tabIndex":t}function mM(t,n,e,r,i,o){let s=n[V];if(cm(t,s,n,e,r)){Bn(t)&&gM(n,t.index);return}t.type&3&&(e=pM(e)),z_(t,n,e,r,i,o)}function z_(t,n,e,r,i,o){if(t.type&3){let s=nn(t,n);r=o!=null?o(r,t.value||"",e):r,i.setProperty(s,e,r)}else t.type&12}function gM(t,n){let e=$t(n,t);e[Q]&16||(e[Q]|=64)}function vM(t,n,e){let r=e.directiveStart,i=e.directiveEnd;Bn(e)&&GS(n,e,t.data[r+e.componentOffset]),t.firstCreatePass||Lc(e,n);let o=e.initialInputs;for(let s=r;s<i;s++){let a=t.data[s],l=Vs(n,t,s,e);if(ao(l,n),o!==null&&DM(n,s-r,l,a,e,o),wn(a)){let c=$t(e.index,n);c[He]=Vs(n,t,s,e)}}}function yM(t,n,e){let r=e.directiveStart,i=e.directiveEnd,o=e.index,s=Ky();try{br(o);for(let a=r;a<i;a++){let l=t.data[a],c=n[a];vc(a),(l.hostBindings!==null||l.hostVars!==0||l.hostAttrs!==null)&&bM(l,c)}}finally{br(-1),vc(s)}}function bM(t,n){t.hostBindings!==null&&t.hostBindings(1,n)}function sm(t,n){let e=t.directiveRegistry,r=null;if(e)for(let i=0;i<e.length;i++){let o=e[i];k_(n,o.selectors,!1)&&(r??=[],wn(o)?r.unshift(o):r.push(o))}return r}function _M(t,n,e,r,i,o){let s=nn(t,n);wM(n[Ae],s,o,t.value,e,r,i)}function wM(t,n,e,r,i,o,s){if(o==null)t.removeAttribute(n,i,e);else{let a=s==null?ti(o):s(o,r||"",i);t.setAttribute(n,i,a,e)}}function DM(t,n,e,r,i,o){let s=o[n];if(s!==null)for(let a=0;a<s.length;a+=2){let l=s[a],c=s[a+1];mp(r,e,l,c)}}function am(t,n,e,r,i){let o=Re+e,s=n[V],a=i(s,n,t,r,e);n[o]=a,to(t,!0);let l=t.type===2;return l?(M_(n[Ae],a,t),(Uy()===0||Ji(t))&&ao(a,n),$y()):ao(a,n),Dc()&&(!l||!Qc(t))&&im(s,n,a,t),t}function lm(t){let n=t;return Nh()?Oh():(n=n.parent,to(n,!1)),n}function CM(t,n){let e=t[Ln];if(!e)return;let r;try{r=e.get(rn,null)}catch{r=null}r?.(n)}function cm(t,n,e,r,i){let o=t.inputs?.[r],s=t.hostDirectiveInputs?.[r],a=!1;if(s)for(let l=0;l<s.length;l+=2){let c=s[l],d=s[l+1],f=n.data[c];mp(f,e[c],d,i),a=!0}if(o)for(let l of o){let c=e[l],d=n.data[l];mp(d,c,r,i),a=!0}return a}function EM(t,n){let e=$t(n,t),r=e[V];xM(r,e);let i=e[Jt];i!==null&&e[ri]===null&&(e[ri]=v_(i,e[Ln])),De(me.ComponentStart);try{dm(r,e,e[He])}finally{De(me.ComponentEnd,e[He])}}function xM(t,n){for(let e=n.length;e<t.blueprint.length;e++)n.push(t.blueprint[e])}function dm(t,n,e){bc(n);try{let r=t.viewQuery;r!==null&&sp(1,r,e);let i=t.template;i!==null&&$_(t,n,i,1,e),t.firstCreatePass&&(t.firstCreatePass=!1),n[_n]?.finishViewCreation(t),t.staticContentQueries&&y_(t,n),t.staticViewQueries&&sp(2,t.viewQuery,e);let o=t.components;o!==null&&IM(n,o)}catch(r){throw t.firstCreatePass&&(t.incompleteFirstPass=!0,t.firstCreatePass=!1),r}finally{n[Q]&=-5,_c()}}function IM(t,n){for(let e=0;e<n.length;e++)EM(t,n[e])}function Ks(t,n,e,r){let i=$(null);try{let o=n.tView,a=t[Q]&4096?4096:16,l=Xp(t,o,e,a,null,n,null,null,r?.injector??null,r?.embeddedViewInjector??null,r?.dehydratedView??null),c=t[n.index];l[gr]=c;let d=t[_n];return d!==null&&(l[_n]=d.createEmbeddedView(o)),dm(o,l,e),l}finally{$(i)}}function lo(t,n){return!n||n.firstChild===null||a_(t)}function Hs(t,n,e,r,i=!1){for(;e!==null;){if(e.type===128){e=i?e.projectionNext:e.next;continue}let o=n[e.index];o!==null&&r.push(Ut(o)),tn(o)&&G_(o,r);let s=e.type;if(s&8)Hs(t,n,e.child,r);else if(s&32){let a=em(e,n),l;for(;l=a();)r.push(l)}else if(s&16){let a=H_(n,e);if(Array.isArray(a))r.push(...a);else{let l=hr(n[St]);Hs(l[V],l,a,r,!0)}}e=i?e.projectionNext:e.next}return r}function G_(t,n){for(let e=Oe;e<t.length;e++){let r=t[e],i=r[V].firstChild;i!==null&&Hs(r[V],r,i,n)}t[yr]!==t[Jt]&&n.push(t[yr])}function W_(t){if(t[si]!==null){for(let n of t[si])n.impl.addSequence(n);t[si].length=0}}var q_=[];function SM(t){return t[Lt]??MM(t)}function MM(t){let n=q_.pop()??Object.create(AM);return n.lView=t,n}function TM(t){t.lView[Lt]!==t&&(t.lView=null,q_.push(t))}var AM=U(m({},Lr),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{ci(t.lView)},consumerOnSignalRead(){this.lView[Lt]=this}});function RM(t){let n=t[Lt]??Object.create(kM);return n.lView=t,n}var kM=U(m({},Lr),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{let n=hr(t.lView);for(;n&&!Y_(n[V]);)n=hr(n);n&&Eh(n)},consumerOnSignalRead(){this.lView[Lt]=this}});function Y_(t){return t.type!==2}function Z_(t){if(t[fr]===null)return;let n=!0;for(;n;){let e=!1;for(let r of t[fr])r.dirty&&(e=!0,r.zone===null||Zone.current===r.zone?r.run():r.zone.run(()=>r.run()));n=e&&!!(t[Q]&8192)}}var NM=100;function K_(t,n=0){let r=t[en].rendererFactory,i=!1;i||r.begin?.();try{OM(t,n)}finally{i||r.end?.()}}function OM(t,n){let e=Fh();try{Ds(!0),yp(t,n);let r=0;for(;ks(t);){if(r===NM)throw new C(103,!1);r++,yp(t,1)}}finally{Ds(e)}}function FM(t,n,e,r){if(li(n))return;let i=n[Q],o=!1,s=!1;bc(n);let a=!0,l=null,c=null;o||(Y_(t)?(c=SM(n),l=ar(c)):hl()===null?(a=!1,c=RM(n),l=ar(c)):n[Lt]&&(lr(n[Lt]),n[Lt]=null));try{Ch(n),qy(t.bindingStartIndex),e!==null&&$_(t,n,e,2,r);let d=(i&3)===3;if(!o)if(d){let p=t.preOrderCheckHooks;p!==null&&Mc(n,p,null)}else{let p=t.preOrderHooks;p!==null&&Tc(n,p,0,null),Gh(n,0)}if(s||PM(n),Z_(n),Q_(n,0),t.contentQueries!==null&&y_(t,n),!o)if(d){let p=t.contentCheckHooks;p!==null&&Mc(n,p)}else{let p=t.contentHooks;p!==null&&Tc(n,p,1),Gh(n,1)}jM(t,n);let f=t.components;f!==null&&J_(n,f,0);let h=t.viewQuery;if(h!==null&&sp(2,h,r),!o)if(d){let p=t.viewCheckHooks;p!==null&&Mc(n,p)}else{let p=t.viewHooks;p!==null&&Tc(n,p,2),Gh(n,2)}if(t.firstUpdatePass===!0&&(t.firstUpdatePass=!1),n[uc]){for(let p of n[uc])p();n[uc]=null}o||(W_(n),n[Q]&=-73)}catch(d){throw o||ci(n),d}finally{c!==null&&(Vr(c,l),a&&TM(c)),_c()}}function Q_(t,n){for(let e=c_(t);e!==null;e=d_(e))for(let r=Oe;r<e.length;r++){let i=e[r];X_(i,n)}}function PM(t){for(let n=c_(t);n!==null;n=d_(n)){if(!(n[Q]&2))continue;let e=n[ai];for(let r=0;r<e.length;r++){let i=e[r];Eh(i)}}}function LM(t,n,e){De(me.ComponentStart);let r=$t(n,t);try{X_(r,e)}finally{De(me.ComponentEnd,r[He])}}function X_(t,n){hc(t)&&yp(t,n)}function yp(t,n){let r=t[V],i=t[Q],o=t[Lt],s=!!(n===0&&i&16);if(s||=!!(i&64&&n===0),s||=!!(i&1024),s||=!!(o?.dirty&&ji(o)),s||=!1,o&&(o.dirty=!1),t[Q]&=-9217,s)FM(r,t,r.template,t[He]);else if(i&8192){let a=$(null);try{Z_(t),Q_(t,1);let l=r.components;l!==null&&J_(t,l,1),W_(t)}finally{$(a)}}}function J_(t,n,e){for(let r=0;r<n.length;r++)LM(t,n[r],e)}function jM(t,n){let e=t.hostBindingOpCodes;if(e!==null)try{for(let r=0;r<e.length;r++){let i=e[r];if(i<0)br(~i);else{let o=i,s=e[++r],a=e[++r];Zy(s,o);let l=n[o];De(me.HostBindingsUpdateStart,l);try{a(2,l)}finally{De(me.HostBindingsUpdateEnd,l)}}}}finally{br(-1)}}function um(t,n){let e=Fh()?64:1088;for(t[en].changeDetectionScheduler?.notify(n);t;){t[Q]|=e;let r=hr(t);if(eo(t)&&!r)return t;t=r}return null}function ew(t,n,e,r){return[t,!0,0,n,null,r,null,e,null,null]}function tw(t,n){let e=Oe+n;if(e<t.length)return t[e]}function Qs(t,n,e,r=!0){let i=n[V];if(VM(i,n,t,e),r){let s=vp(e,t),a=n[Ae],l=a.parentNode(t[yr]);l!==null&&eM(i,t[It],a,n,l,s)}let o=n[ri];o!==null&&o.firstChild!==null&&(o.firstChild=null)}function nw(t,n){let e=Us(t,n);return e!==void 0&&rd(e[V],e),e}function Us(t,n){if(t.length<=Oe)return;let e=Oe+n,r=t[e];if(r){let i=r[gr];i!==null&&i!==t&&rm(i,r),n>0&&(t[e-1][Ht]=r[Ht]);let o=Ts(t,Oe+n);JS(r[V],r);let s=o[_n];s!==null&&s.detachView(o[V]),r[qe]=null,r[Ht]=null,r[Q]&=-129}return r}function VM(t,n,e,r){let i=Oe+r,o=e.length;r>0&&(e[i-1][Ht]=n),r<o-Oe?(n[Ht]=e[i],ch(e,Oe+r,n)):(e.push(n),n[Ht]=null),n[qe]=e;let s=n[gr];s!==null&&e!==s&&rw(s,n);let a=n[_n];a!==null&&a.insertView(t),pc(n),n[Q]|=128}function rw(t,n){let e=t[ai],r=n[qe];if(Vn(r))t[Q]|=2;else{let i=r[qe][St];n[St]!==i&&(t[Q]|=2)}e===null?t[ai]=[n]:e.push(n)}var wr=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let n=this._lView,e=n[V];return Hs(e,n,e.firstChild,[])}constructor(n,e){this._lView=n,this._cdRefInjectingView=e}get context(){return this._lView[He]}set context(n){this._lView[He]=n}get destroyed(){return li(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let n=this._lView[qe];if(tn(n)){let e=n[Rs],r=e?e.indexOf(this):-1;r>-1&&(Us(n,r),Ts(e,r))}this._attachedToViewContainer=!1}rd(this._lView[V],this._lView)}onDestroy(n){xh(this._lView,n)}markForCheck(){um(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[Q]&=-129}reattach(){pc(this._lView),this._lView[Q]|=128}detectChanges(){this._lView[Q]|=1024,K_(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new C(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let n=eo(this._lView),e=this._lView[gr];e!==null&&!n&&rm(e,this._lView),j_(this._lView[V],this._lView)}attachToAppRef(n){if(this._attachedToViewContainer)throw new C(902,!1);this._appRef=n;let e=eo(this._lView),r=this._lView[gr];r!==null&&!e&&rw(r,this._lView),pc(this._lView)}};var dt=(()=>{class t{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=BM;constructor(e,r,i){this._declarationLView=e,this._declarationTContainer=r,this.elementRef=i}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,r){return this.createEmbeddedViewImpl(e,r)}createEmbeddedViewImpl(e,r,i){let o=Ks(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:r,dehydratedView:i});return new wr(o)}}return t})();function BM(){return sd(rt(),q())}function sd(t,n){return t.type&4?new dt(n,t,fo(t,n)):null}function po(t,n,e,r,i){let o=t.data[n];if(o===null)o=HM(t,n,e,r,i),Yy()&&(o.flags|=32);else if(o.type&64){o.type=e,o.value=r,o.attrs=i;let s=zy();o.injectorIndex=s===null?-1:s.injectorIndex}return to(o,!0),o}function HM(t,n,e,r,i){let o=kh(),s=Nh(),a=s?o:o&&o.parent,l=t.data[n]=$M(t,a,e,n,r,i);return UM(t,l,o,s),l}function UM(t,n,e,r){t.firstChild===null&&(t.firstChild=n),e!==null&&(r?e.child==null&&n.parent!==null&&(e.child=n):e.next===null&&(e.next=n,n.prev=e))}function $M(t,n,e,r,i,o){let s=n?n.injectorIndex:-1,a=0;return Th()&&(a|=128),{type:e,index:r,insertBeforeIndex:null,injectorIndex:s,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,controlDirectiveIndex:-1,customControlIndex:-1,propertyBindings:null,flags:a,providerIndexes:0,value:i,namespace:Vh(),attrs:o,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:n,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function zM(t){let n=t[vh]??[],r=t[qe][Ae],i=[];for(let o of n)o.data[p_]!==void 0?i.push(o):GM(o,r);t[vh]=i}function GM(t,n){let e=0,r=t.firstChild;if(r){let i=t.data[h_];for(;e<i;){let o=r.nextSibling;S_(n,r,!1),r=o,e++}}}var WM=()=>null,qM=()=>null;function Vc(t,n){return WM(t,n)}function iw(t,n,e){return qM(t,n,e)}var ow=class{},ad=class{},bp=class{resolveComponentFactory(n){throw new C(917,!1)}},Xs=class{static NULL=new bp},it=class{},Xe=(()=>{class t{destroyNode=null;static __NG_ELEMENT_ID__=()=>YM()}return t})();function YM(){let t=q(),n=rt(),e=$t(n.index,t);return(Vn(e)?e:t)[Ae]}var sw=(()=>{class t{static \u0275prov=_({token:t,providedIn:"root",factory:()=>null})}return t})();var Rc={},_p=class{injector;parentInjector;constructor(n,e){this.injector=n,this.parentInjector=e}get(n,e,r){let i=this.injector.get(n,Rc,r);return i!==Rc||e===Rc?i:this.parentInjector.get(n,e,r)}};function Bc(t,n,e){let r=e?t.styles:null,i=e?t.classes:null,o=0;if(n!==null)for(let s=0;s<n.length;s++){let a=n[s];if(typeof a=="number")o=a;else if(o==1)i=rc(i,a);else if(o==2){let l=a,c=n[++s];r=rc(r,l+": "+c+";")}}e?t.styles=r:t.stylesWithoutHost=r,e?t.classes=i:t.classesWithoutHost=i}function Je(t,n=0){let e=q();if(e===null)return T(t,n);let r=rt();return r_(r,e,lt(t),n)}function fm(){let t="invalid";throw new Error(t)}function aw(t,n,e,r,i){let o=r===null?null:{"":-1},s=i(t,e);if(s!==null){let a=s,l=null,c=null;for(let d of s)if(d.resolveHostDirectives!==null){[a,l,c]=d.resolveHostDirectives(s);break}QM(t,n,e,a,o,l,c)}o!==null&&r!==null&&ZM(e,r,o)}function ZM(t,n,e){let r=t.localNames=[];for(let i=0;i<n.length;i+=2){let o=e[n[i+1]];if(o==null)throw new C(-301,!1);r.push(n[i],o)}}function KM(t,n,e){n.componentOffset=e,(t.components??=[]).push(n.index)}function QM(t,n,e,r,i,o,s){let a=r.length,l=null;for(let h=0;h<a;h++){let p=r[h];l===null&&wn(p)&&(l=p,KM(t,e,h)),np(Lc(e,n),t,p.type)}rT(e,t.data.length,a),l?.viewProvidersResolver&&l.viewProvidersResolver(l);for(let h=0;h<a;h++){let p=r[h];p.providersResolver&&p.providersResolver(p)}let c=!1,d=!1,f=O_(t,n,a,null);a>0&&(e.directiveToIndex=new Map);for(let h=0;h<a;h++){let p=r[h];if(e.mergedAttrs=so(e.mergedAttrs,p.hostAttrs),JM(t,e,n,f,p),nT(f,p,i),s!==null&&s.has(p)){let[E,S]=s.get(p);e.directiveToIndex.set(p.type,[f,E+e.directiveStart,S+e.directiveStart])}else(o===null||!o.has(p))&&e.directiveToIndex.set(p.type,f);p.contentQueries!==null&&(e.flags|=4),(p.hostBindings!==null||p.hostAttrs!==null||p.hostVars!==0)&&(e.flags|=64);let y=p.type.prototype;!c&&(y.ngOnChanges||y.ngOnInit||y.ngDoCheck)&&((t.preOrderHooks??=[]).push(e.index),c=!0),!d&&(y.ngOnChanges||y.ngDoCheck)&&((t.preOrderCheckHooks??=[]).push(e.index),d=!0),f++}XM(t,e,o)}function XM(t,n,e){for(let r=n.directiveStart;r<n.directiveEnd;r++){let i=t.data[r];if(e===null||!e.has(i))Tb(0,n,i,r),Tb(1,n,i,r),Rb(n,r,!1);else{let o=e.get(i);Ab(0,n,o,r),Ab(1,n,o,r),Rb(n,r,!0)}}}function Tb(t,n,e,r){let i=t===0?e.inputs:e.outputs;for(let o in i)if(i.hasOwnProperty(o)){let s;t===0?s=n.inputs??={}:s=n.outputs??={},s[o]??=[],s[o].push(r),lw(n,o)}}function Ab(t,n,e,r){let i=t===0?e.inputs:e.outputs;for(let o in i)if(i.hasOwnProperty(o)){let s=i[o],a;t===0?a=n.hostDirectiveInputs??={}:a=n.hostDirectiveOutputs??={},a[s]??=[],a[s].push(r,o),lw(n,s)}}function lw(t,n){n==="class"?t.flags|=8:n==="style"&&(t.flags|=16)}function Rb(t,n,e){let{attrs:r,inputs:i,hostDirectiveInputs:o}=t;if(r===null||!e&&i===null||e&&o===null||Kp(t)){t.initialInputs??=[],t.initialInputs.push(null);return}let s=null,a=0;for(;a<r.length;){let l=r[a];if(l===0){a+=4;continue}else if(l===5){a+=2;continue}else if(typeof l=="number")break;if(!e&&i.hasOwnProperty(l)){let c=i[l];for(let d of c)if(d===n){s??=[],s.push(l,r[a+1]);break}}else if(e&&o.hasOwnProperty(l)){let c=o[l];for(let d=0;d<c.length;d+=2)if(c[d]===n){s??=[],s.push(c[d+1],r[a+1]);break}}a+=2}t.initialInputs??=[],t.initialInputs.push(s)}function JM(t,n,e,r,i){t.data[r]=i;let o=i.factory||(i.factory=ur(i.type,!0)),s=new hi(o,wn(i),Je,null);t.blueprint[r]=s,e[r]=s,eT(t,n,r,O_(t,e,i.hostVars,kt),i)}function eT(t,n,e,r,i){let o=i.hostBindings;if(o){let s=t.hostBindingOpCodes;s===null&&(s=t.hostBindingOpCodes=[]);let a=~n.index;tT(s)!=a&&s.push(a),s.push(e,r,o)}}function tT(t){let n=t.length;for(;n>0;){let e=t[--n];if(typeof e=="number"&&e<0)return e}return 0}function nT(t,n,e){if(e){if(n.exportAs)for(let r=0;r<n.exportAs.length;r++)e[n.exportAs[r]]=t;wn(n)&&(e[""]=t)}}function rT(t,n,e){t.flags|=1,t.directiveStart=n,t.directiveEnd=n+e,t.providerIndexes=n}function hm(t,n,e,r,i,o,s,a){let l=n[V],c=l.consts,d=jt(c,s),f=po(l,t,e,r,d);return o&&aw(l,n,f,jt(c,a),i),f.mergedAttrs=so(f.mergedAttrs,f.attrs),f.attrs!==null&&Bc(f,f.attrs,!1),f.mergedAttrs!==null&&Bc(f,f.mergedAttrs,!0),l.queries!==null&&l.queries.elementStart(l,f),f}function pm(t,n){Yb(t,n),yh(n)&&t.queries.elementEnd(n)}function iT(t,n,e,r,i,o){let s=n.consts,a=jt(s,i),l=po(n,t,e,r,a);if(l.mergedAttrs=so(l.mergedAttrs,l.attrs),o!=null){let c=jt(s,o);l.localNames=[];for(let d=0;d<c.length;d+=2)l.localNames.push(c[d],-1)}return l.attrs!==null&&Bc(l,l.attrs,!1),l.mergedAttrs!==null&&Bc(l,l.mergedAttrs,!0),n.queries!==null&&n.queries.elementStart(n,l),l}function oT(t,n,e){return t[n]=e}function cn(t,n,e){if(e===kt)return!1;let r=t[n];return Object.is(r,e)?!1:(t[n]=e,!0)}function sT(t,n,e,r){let i=cn(t,n,e);return cn(t,n+1,r)||i}function kc(t,n,e){return function r(i){let o=r.__ngNativeEl__;o!==void 0&&eS(i,o);let s=Bn(t)?$t(t.index,n):n;um(s,5);let a=n[He],l=kb(n,a,e,i),c=r.__ngNextListenerFn__;for(;c;)l=kb(n,a,c,i)&&l,c=c.__ngNextListenerFn__;return l}}function kb(t,n,e,r){let i=$(null);try{return De(me.OutputStart,n,e),e(r)!==!1}catch(o){return CM(t,o),!1}finally{De(me.OutputEnd,n,e),$(i)}}function cw(t,n,e,r,i,o,s,a){let l=Ji(t),c=!1,d=null;if(!r&&l&&(d=lT(n,e,o,t.index)),d!==null){let f=d.__ngLastListenerFn__||d;f.__ngNextListenerFn__=s,d.__ngLastListenerFn__=s,c=!0}else{let f=nn(t,e),h=r?r(f):f;nS(e,h,o,a),r||(a.__ngNativeEl__=f);let p=i.listen(h,o,a);if(!aT(o)){let y=r?E=>r(Ut(E[t.index])):t.index;dw(y,n,e,o,a,p,!1)}}return c}function aT(t){return t.startsWith("animation")||t.startsWith("transition")}function lT(t,n,e,r){let i=t.cleanup;if(i!=null)for(let o=0;o<i.length-1;o+=2){let s=i[o];if(s===e&&i[o+1]===r){let a=n[Qi],l=i[o+2];return a&&a.length>l?a[l]:null}typeof s=="string"&&(o+=2)}return null}function dw(t,n,e,r,i,o,s){let a=n.firstCreatePass?Sh(n):null,l=Ih(e),c=l.length;l.push(i,o),a&&a.push(r,t,c,(c+1)*(s?-1:1))}function Nb(t,n,e,r,i,o){let s=n[e],a=n[V],c=a.data[e].outputs[r],f=s[c].subscribe(o);dw(t.index,a,n,i,o,f,!0)}var wp=Symbol("BINDING");function uw(t){return t.debugInfo?.className||t.type.name||null}var Hc=class extends Xs{ngModule;constructor(n){super(),this.ngModule=n}resolveComponentFactory(n){let e=Pn(n);return new mi(e,this.ngModule)}};function cT(t){return Object.keys(t).map(n=>{let[e,r,i]=t[n],o={propName:e,templateName:n,isSignal:(r&ed.SignalBased)!==0};return i&&(o.transform=i),o})}function dT(t){return Object.keys(t).map(n=>({propName:t[n],templateName:n}))}function uT(t,n,e){let r=n instanceof Ie?n:n?.injector;return r&&t.getStandaloneInjector!==null&&(r=t.getStandaloneInjector(r)||r),r?new _p(e,r):e}function fT(t){let n=t.get(it,null);if(n===null)throw new C(407,!1);let e=t.get(sw,null),r=t.get(vn,null),i=t.get(un,null,{optional:!0});return{rendererFactory:n,sanitizer:e,changeDetectionScheduler:r,ngReflect:!1,tracingService:i}}function hT(t,n){let e=fw(t);return x_(n,e,e==="svg"?bh:e==="math"?Py:null)}function pT(t){if(t?.toLowerCase()==="script")throw new C(905,!1)}function fw(t){return(t.selectors[0][0]||"div").toLowerCase()}var mi=class extends ad{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=cT(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=dT(this.componentDef.outputs),this.cachedOutputs}constructor(n,e){super(),this.componentDef=n,this.ngModule=e,this.componentType=n.type,this.selector=HS(n.selectors),this.ngContentSelectors=n.ngContentSelectors??[],this.isBoundToModule=!!e}create(n,e,r,i,o,s){De(me.DynamicComponentStart);let a=$(null);try{let l=this.componentDef,c=uT(l,i||this.ngModule,n),d=fT(c),f=d.tracingService;return f&&f.componentCreate?f.componentCreate(uw(l),()=>this.createComponentRef(d,c,e,r,o,s)):this.createComponentRef(d,c,e,r,o,s)}finally{$(a)}}createComponentRef(n,e,r,i,o,s){let a=this.componentDef,l=mT(i,a,s,o),c=n.rendererFactory.createRenderer(null,a),d=i?uM(c,i,a.encapsulation,e):hT(a,c);pT(d?.tagName);let f=s?.some(Ob)||o?.some(y=>typeof y!="function"&&y.bindings.some(Ob)),h=Xp(null,l,null,512|N_(a),null,null,n,c,e,null,v_(d,e,!0));h[Re]=d,bc(h);let p=null;try{let y=hm(Re,h,2,"#host",()=>l.directiveRegistry,!0,0);M_(c,d,y),ao(d,h),od(l,h,y),Up(l,y,h),pm(l,y),r!==void 0&&vT(y,this.ngContentSelectors,r),p=$t(y.index,h),h[He]=p[He],dm(l,h,null)}catch(y){throw p!==null&&ip(p),ip(h),y}finally{De(me.DynamicComponentEnd),_c()}return new Uc(this.componentType,h,!!f)}};function mT(t,n,e,r){let i=t?["ng-version","21.2.18"]:US(n.selectors[0]),o=null,s=null,a=0;if(e)for(let d of e)a+=d[wp].requiredVars,d.create&&(d.targetIdx=0,(o??=[]).push(d)),d.update&&(d.targetIdx=0,(s??=[]).push(d));if(r)for(let d=0;d<r.length;d++){let f=r[d];if(typeof f!="function")for(let h of f.bindings){a+=h[wp].requiredVars;let p=d+1;h.create&&(h.targetIdx=p,(o??=[]).push(h)),h.update&&(h.targetIdx=p,(s??=[]).push(h))}}let l=[n];if(r)for(let d of r){let f=typeof d=="function"?d:d.type,h=sh(f);l.push(h)}return Qp(0,null,gT(o,s),1,a,l,null,null,null,[i],null)}function gT(t,n){return!t&&!n?null:e=>{if(e&1&&t)for(let r of t)r.create();if(e&2&&n)for(let r of n)r.update()}}function Ob(t){let n=t[wp].kind;return n==="input"||n==="twoWay"}var Uc=class extends ow{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(n,e,r){super(),this._rootLView=e,this._hasInputBindings=r,this._tNode=fc(e[V],Re),this.location=fo(this._tNode,e),this.instance=$t(this._tNode.index,e)[He],this.hostView=this.changeDetectorRef=new wr(e,void 0),this.componentType=n}setInput(n,e){this._hasInputBindings;let r=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(n)&&Object.is(this.previousInputValues.get(n),e))return;let i=this._rootLView,o=cm(r,i[V],i,n,e);this.previousInputValues.set(n,e);let s=$t(r.index,i);um(s,1)}get injector(){return new fi(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(n){this.hostView.onDestroy(n)}};function vT(t,n,e){let r=t.projection=[];for(let i=0;i<n.length;i++){let o=e[i];r.push(o!=null&&o.length?Array.from(o):null)}}var ft=(()=>{class t{static __NG_ELEMENT_ID__=yT}return t})();function yT(){let t=rt();return hw(t,q())}var Dp=class t extends ft{_lContainer;_hostTNode;_hostLView;constructor(n,e,r){super(),this._lContainer=n,this._hostTNode=e,this._hostLView=r}get element(){return fo(this._hostTNode,this._hostLView)}get injector(){return new fi(this._hostTNode,this._hostLView)}get parentInjector(){let n=jp(this._hostTNode,this._hostLView);if(Qb(n)){let e=Fc(n,this._hostLView),r=Oc(n),i=e[V].data[r+8];return new fi(i,e)}else return new fi(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(n){let e=Fb(this._lContainer);return e!==null&&e[n]||null}get length(){return this._lContainer.length-Oe}createEmbeddedView(n,e,r){let i,o;typeof r=="number"?i=r:r!=null&&(i=r.index,o=r.injector);let s=Vc(this._lContainer,n.ssrId),a=n.createEmbeddedViewImpl(e||{},o,s);return this.insertImpl(a,i,lo(this._hostTNode,s)),a}createComponent(n,e,r,i,o,s,a){let l=n&&!TI(n),c;if(l)c=e;else{let S=e||{};c=S.index,r=S.injector,i=S.projectableNodes,o=S.environmentInjector||S.ngModuleRef,s=S.directives,a=S.bindings}let d=l?n:new mi(Pn(n)),f=r||this.parentInjector;if(!o&&d.ngModule==null){let A=(l?f:this.parentInjector).get(Ie,null);A&&(o=A)}let h=Pn(d.componentType??{}),p=Vc(this._lContainer,h?.id??null),y=p?.firstChild??null,E=d.create(f,i,y,o,s,a);return this.insertImpl(E.hostView,c,lo(this._hostTNode,p)),E}insert(n,e){return this.insertImpl(n,e,!0)}insertImpl(n,e,r){let i=n._lView;if(jy(i)){let a=this.indexOf(n);if(a!==-1)this.detach(a);else{let l=i[qe],c=new t(l,l[It],l[qe]);c.detach(c.indexOf(n))}}let o=this._adjustIndex(e),s=this._lContainer;return Qs(s,i,o,r),n.attachToViewContainerRef(),ch(Yh(s),o,n),n}move(n,e){return this.insert(n,e)}indexOf(n){let e=Fb(this._lContainer);return e!==null?e.indexOf(n):-1}remove(n){let e=this._adjustIndex(n,-1),r=Us(this._lContainer,e);r&&(Ts(Yh(this._lContainer),e),rd(r[V],r))}detach(n){let e=this._adjustIndex(n,-1),r=Us(this._lContainer,e);return r&&Ts(Yh(this._lContainer),e)!=null?new wr(r):null}_adjustIndex(n,e=0){return n??this.length+e}};function Fb(t){return t[Rs]}function Yh(t){return t[Rs]||(t[Rs]=[])}function hw(t,n){let e,r=n[t.index];return tn(r)?e=r:(e=ew(r,n,null,t),n[t.index]=e,Jp(n,e)),_T(e,n,t,r),new Dp(e,t,n)}function bT(t,n){let e=t[Ae],r=e.createComment(""),i=nn(n,t),o=e.parentNode(i);return jc(e,o,r,e.nextSibling(i),!1),r}var _T=CT,wT=()=>!1;function DT(t,n,e){return wT(t,n,e)}function CT(t,n,e,r){if(t[yr])return;let i;e.type&8?i=Ut(r):i=bT(n,e),t[yr]=i}var Cp=class t{queryList;matches=null;constructor(n){this.queryList=n}clone(){return new t(this.queryList)}setDirty(){this.queryList.setDirty()}},Ep=class t{queries;constructor(n=[]){this.queries=n}createEmbeddedView(n){let e=n.queries;if(e!==null){let r=n.contentQueries!==null?n.contentQueries[0]:e.length,i=[];for(let o=0;o<r;o++){let s=e.getByIndex(o),a=this.queries[s.indexInDeclarationView];i.push(a.clone())}return new t(i)}return null}insertView(n){this.dirtyQueriesWithMatches(n)}detachView(n){this.dirtyQueriesWithMatches(n)}finishViewCreation(n){this.dirtyQueriesWithMatches(n)}dirtyQueriesWithMatches(n){for(let e=0;e<this.queries.length;e++)gm(n,e).matches!==null&&this.queries[e].setDirty()}},$c=class{flags;read;predicate;constructor(n,e,r=null){this.flags=e,this.read=r,typeof n=="string"?this.predicate=MT(n):this.predicate=n}},xp=class t{queries;constructor(n=[]){this.queries=n}elementStart(n,e){for(let r=0;r<this.queries.length;r++)this.queries[r].elementStart(n,e)}elementEnd(n){for(let e=0;e<this.queries.length;e++)this.queries[e].elementEnd(n)}embeddedTView(n){let e=null;for(let r=0;r<this.length;r++){let i=e!==null?e.length:0,o=this.getByIndex(r).embeddedTView(n,i);o&&(o.indexInDeclarationView=r,e!==null?e.push(o):e=[o])}return e!==null?new t(e):null}template(n,e){for(let r=0;r<this.queries.length;r++)this.queries[r].template(n,e)}getByIndex(n){return this.queries[n]}get length(){return this.queries.length}track(n){this.queries.push(n)}},Ip=class t{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(n,e=-1){this.metadata=n,this._declarationNodeIndex=e}elementStart(n,e){this.isApplyingToNode(e)&&this.matchTNode(n,e)}elementEnd(n){this._declarationNodeIndex===n.index&&(this._appliesToNextNode=!1)}template(n,e){this.elementStart(n,e)}embeddedTView(n,e){return this.isApplyingToNode(n)?(this.crossesNgTemplate=!0,this.addMatch(-n.index,e),new t(this.metadata)):null}isApplyingToNode(n){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let e=this._declarationNodeIndex,r=n.parent;for(;r!==null&&r.type&8&&r.index!==e;)r=r.parent;return e===(r!==null?r.index:-1)}return this._appliesToNextNode}matchTNode(n,e){let r=this.metadata.predicate;if(Array.isArray(r))for(let i=0;i<r.length;i++){let o=r[i];this.matchTNodeWithReadOption(n,e,ET(e,o)),this.matchTNodeWithReadOption(n,e,Ac(e,n,o,!1,!1))}else r===dt?e.type&4&&this.matchTNodeWithReadOption(n,e,-1):this.matchTNodeWithReadOption(n,e,Ac(e,n,r,!1,!1))}matchTNodeWithReadOption(n,e,r){if(r!==null){let i=this.metadata.read;if(i!==null)if(i===j||i===ft||i===dt&&e.type&4)this.addMatch(e.index,-2);else{let o=Ac(e,n,i,!1,!1);o!==null&&this.addMatch(e.index,o)}else this.addMatch(e.index,r)}}addMatch(n,e){this.matches===null?this.matches=[n,e]:this.matches.push(n,e)}};function ET(t,n){let e=t.localNames;if(e!==null){for(let r=0;r<e.length;r+=2)if(e[r]===n)return e[r+1]}return null}function xT(t,n){return t.type&11?fo(t,n):t.type&4?sd(t,n):null}function IT(t,n,e,r){return e===-1?xT(n,t):e===-2?ST(t,n,r):Vs(t,t[V],e,n)}function ST(t,n,e){if(e===j)return fo(n,t);if(e===dt)return sd(n,t);if(e===ft)return hw(n,t)}function pw(t,n,e,r){let i=n[_n].queries[r];if(i.matches===null){let o=t.data,s=e.matches,a=[];for(let l=0;s!==null&&l<s.length;l+=2){let c=s[l];if(c<0)a.push(null);else{let d=o[c];a.push(IT(n,d,s[l+1],e.metadata.read))}}i.matches=a}return i.matches}function Sp(t,n,e,r){let i=t.queries.getByIndex(e),o=i.matches;if(o!==null){let s=pw(t,n,i,e);for(let a=0;a<o.length;a+=2){let l=o[a];if(l>0)r.push(s[a/2]);else{let c=o[a+1],d=n[-l];for(let f=Oe;f<d.length;f++){let h=d[f];h[gr]===h[qe]&&Sp(h[V],h,c,r)}if(d[ai]!==null){let f=d[ai];for(let h=0;h<f.length;h++){let p=f[h];Sp(p[V],p,c,r)}}}}}return r}function mm(t,n){return t[_n].queries[n].queryList}function mw(t,n,e){let r=new an((e&4)===4);return Hy(t,n,r,r.destroy),(n[_n]??=new Ep).queries.push(new Cp(r))-1}function gw(t,n,e){let r=ke();return r.firstCreatePass&&(yw(r,new $c(t,n,e),-1),(n&2)===2&&(r.staticViewQueries=!0)),mw(r,q(),n)}function vw(t,n,e,r){let i=ke();if(i.firstCreatePass){let o=rt();yw(i,new $c(n,e,r),o.index),TT(i,t),(e&2)===2&&(i.staticContentQueries=!0)}return mw(i,q(),e)}function MT(t){return t.split(",").map(n=>n.trim())}function yw(t,n,e){t.queries===null&&(t.queries=new xp),t.queries.track(new Ip(n,e))}function TT(t,n){let e=t.contentQueries||(t.contentQueries=[]),r=e.length?e[e.length-1]:-1;n!==r&&e.push(t.queries.length-1,n)}function gm(t,n){return t.queries.getByIndex(n)}function bw(t,n){let e=t[V],r=gm(e,n);return r.crossesNgTemplate?Sp(e,t,n,[]):pw(e,t,r,n)}function _w(t,n,e){let r,i=cs(()=>{r._dirtyCounter();let o=AT(r,t);if(n&&o===void 0)throw new C(-951,!1);return o});return r=i[We],r._dirtyCounter=ie(0),r._flatValue=void 0,i}function vm(t){return _w(!0,!1,t)}function ym(t){return _w(!0,!0,t)}function ww(t,n){let e=t[We];e._lView=q(),e._queryIndex=n,e._queryList=mm(e._lView,n),e._queryList.onDirty(()=>e._dirtyCounter.update(r=>r+1))}function AT(t,n){let e=t._lView,r=t._queryIndex;if(e===void 0||r===void 0||e[Q]&4)return n?void 0:vt;let i=mm(e,r),o=bw(e,r);return i.reset(o,s_),n?i.first:i._changesDetected||t._flatValue===void 0?t._flatValue=i.toArray():t._flatValue}var xn=class{},ld=class{};var zc=class extends xn{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new Hc(this);constructor(n,e,r,i=!0){super(),this.ngModuleType=n,this._parent=e;let o=oh(n);this._bootstrapComponents=A_(o.bootstrap),this._r3Injector=Bh(n,e,[{provide:xn,useValue:this},{provide:Xs,useValue:this.componentFactoryResolver},...r],xs(n),new Set(["environment"])),i&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let n=this._r3Injector;!n.destroyed&&n.destroy(),this.destroyCbs.forEach(e=>e()),this.destroyCbs=null}onDestroy(n){this.destroyCbs.push(n)}},Gc=class extends ld{moduleType;constructor(n){super(),this.moduleType=n}create(n){return new zc(this.moduleType,n,[])}};var $s=class extends xn{injector;componentFactoryResolver=new Hc(this);instance=null;constructor(n){super();let e=new Jr([...n.providers,{provide:xn,useValue:this},{provide:Xs,useValue:this.componentFactoryResolver}],n.parent||Ki(),n.debugName,new Set(["environment"]));this.injector=e,n.runEnvironmentInitializers&&e.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(n){this.injector.onDestroy(n)}};function Js(t,n,e=null){return new $s({providers:t,parent:n,debugName:e,runEnvironmentInitializers:!0}).injector}var RT=(()=>{class t{_injector;cachedInjectors=new Map;constructor(e){this._injector=e}getOrCreateStandaloneInjector(e){if(!e.standalone)return null;if(!this.cachedInjectors.has(e)){let r=fh(!1,e.type),i=r.length>0?Js([r],this._injector,""):null;this.cachedInjectors.set(e,i)}return this.cachedInjectors.get(e)}ngOnDestroy(){try{for(let e of this.cachedInjectors.values())e!==null&&e.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=_({token:t,providedIn:"environment",factory:()=>new t(T(Ie))})}return t})();function M(t){return Gs(()=>{let n=Dw(t),e=U(m({},n),{decls:t.decls,vars:t.vars,template:t.template,consts:t.consts||null,ngContentSelectors:t.ngContentSelectors,onPush:t.changeDetection===Bp.OnPush,directiveDefs:null,pipeDefs:null,dependencies:n.standalone&&t.dependencies||null,getStandaloneInjector:n.standalone?i=>i.get(RT).getOrCreateStandaloneInjector(e):null,getExternalStyles:null,signals:t.signals??!1,data:t.data||{},encapsulation:t.encapsulation||ln.Emulated,styles:t.styles||vt,_:null,schemas:t.schemas||null,tView:null,id:""});n.standalone&&Dr("NgStandalone"),Cw(e);let r=t.dependencies;return e.directiveDefs=Pb(r,kT),e.pipeDefs=Pb(r,Cy),e.id=FT(e),e})}function kT(t){return Pn(t)||sh(t)}function P(t){return Gs(()=>({type:t.type,bootstrap:t.bootstrap||vt,declarations:t.declarations||vt,imports:t.imports||vt,exports:t.exports||vt,transitiveCompileScopes:null,schemas:t.schemas||null,id:t.id||null}))}function NT(t,n){if(t==null)return mr;let e={};for(let r in t)if(t.hasOwnProperty(r)){let i=t[r],o,s,a,l;Array.isArray(i)?(a=i[0],o=i[1],s=i[2]??o,l=i[3]||null):(o=i,s=i,a=ed.None,l=null),e[o]=[r,a,l],n[o]=s}return e}function OT(t){if(t==null)return mr;let n={};for(let e in t)t.hasOwnProperty(e)&&(n[t[e]]=e);return n}function Y(t){return Gs(()=>{let n=Dw(t);return Cw(n),n})}function cd(t){return{type:t.type,name:t.name,factory:null,pure:t.pure!==!1,standalone:t.standalone??!0,onDestroy:t.type.prototype.ngOnDestroy||null}}function Dw(t){let n={};return{type:t.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:t.hostBindings||null,hostVars:t.hostVars||0,hostAttrs:t.hostAttrs||null,contentQueries:t.contentQueries||null,declaredInputs:n,inputConfig:t.inputs||mr,exportAs:t.exportAs||null,standalone:t.standalone??!0,signals:t.signals===!0,selectors:t.selectors||vt,viewQuery:t.viewQuery||null,features:t.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,controlDef:null,inputs:NT(t.inputs,n),outputs:OT(t.outputs),debugInfo:null}}function Cw(t){t.features?.forEach(n=>n(t))}function Pb(t,n){return t?()=>{let e=typeof t=="function"?t():t,r=[];for(let i of e){let o=n(i);o!==null&&r.push(o)}return r}:null}function FT(t){let n=0,e=typeof t.consts=="function"?"":t.consts,r=[t.selectors,t.ngContentSelectors,t.hostVars,t.hostAttrs,e,t.vars,t.decls,t.encapsulation,t.standalone,t.signals,t.exportAs,JSON.stringify(t.inputs),JSON.stringify(t.outputs),Object.getOwnPropertyNames(t.type.prototype),!!t.contentQueries,!!t.viewQuery];for(let o of r.join("|"))n=Math.imul(31,n)+o.charCodeAt(0)<<0;return n+=2147483648,"c"+n}function PT(t){return Object.getPrototypeOf(t.prototype).constructor}function Pe(t){let n=PT(t.type),e=!0,r=[t];for(;n&&n!==Function.prototype&&n!==Object.prototype;){let i,o=Object.hasOwn(n,Ss)?n[Ss]:void 0,s=Object.hasOwn(n,Ms)?n[Ms]:void 0;if(wn(t))i=o??s;else{if(o)throw new C(903,!1);i=s}if(i){if(e){r.push(i);let l=t;l.inputs=Zh(t.inputs),l.declaredInputs=Zh(t.declaredInputs),l.outputs=Zh(t.outputs);let c=i.hostBindings;c&&HT(t,c);let d=i.viewQuery,f=i.contentQueries;if(d&&VT(t,d),f&&BT(t,f),LT(t,i),Dy(t.outputs,i.outputs),wn(i)&&i.data.animation){let h=t.data;h.animation=(h.animation||[]).concat(i.data.animation)}}let a=i.features;if(a)for(let l=0;l<a.length;l++){let c=a[l];c&&c.ngInherit&&c(t),c===Pe&&(e=!1)}}n=Object.getPrototypeOf(n)}jT(r)}function LT(t,n){for(let e in n.inputs){if(!n.inputs.hasOwnProperty(e)||t.inputs.hasOwnProperty(e))continue;let r=n.inputs[e];r!==void 0&&(t.inputs[e]=r,t.declaredInputs[e]=n.declaredInputs[e])}}function jT(t){let n=0,e=null;for(let r=t.length-1;r>=0;r--){let i=t[r];i.hostVars=n+=i.hostVars,i.hostAttrs=so(i.hostAttrs,e=so(e,i.hostAttrs))}}function Zh(t){return t===mr?{}:t===vt?[]:t}function VT(t,n){let e=t.viewQuery;e?t.viewQuery=(r,i)=>{n(r,i),e(r,i)}:t.viewQuery=n}function BT(t,n){let e=t.contentQueries;e?t.contentQueries=(r,i,o)=>{n(r,i,o),e(r,i,o)}:t.contentQueries=n}function HT(t,n){let e=t.hostBindings;e?t.hostBindings=(r,i)=>{n(r,i),e(r,i)}:t.hostBindings=n}function Ew(t,n,e,r,i,o,s,a){if(e.firstCreatePass){t.mergedAttrs=so(t.mergedAttrs,t.attrs);let d=t.tView=Qp(2,t,i,o,s,e.directiveRegistry,e.pipeRegistry,null,e.schemas,e.consts,null);e.queries!==null&&(e.queries.template(e,t),d.queries=e.queries.embeddedTView(t))}a&&(t.flags|=a),to(t,!1);let l=$T(e,n,t,r);Dc()&&im(e,n,l,t),ao(l,n);let c=ew(l,n,l,t);n[r+Re]=c,Jp(n,c),DT(c,t,n)}function UT(t,n,e,r,i,o,s,a,l,c,d){let f=e+Re,h;return n.firstCreatePass?(h=po(n,f,4,s||null,a||null),mc()&&aw(n,t,h,jt(n.consts,c),sm),Yb(n,h)):h=n.data[f],Ew(h,t,n,e,r,i,o,l),Ji(h)&&od(n,t,h),c!=null&&Zs(t,h,d),h}function co(t,n,e,r,i,o,s,a,l,c,d){let f=e+Re,h;if(n.firstCreatePass){if(h=po(n,f,4,s||null,a||null),c!=null){let p=jt(n.consts,c);h.localNames=[];for(let y=0;y<p.length;y+=2)h.localNames.push(p[y],-1)}}else h=n.data[f];return Ew(h,t,n,e,r,i,o,l),c!=null&&Zs(t,h,d),h}function zt(t,n,e,r,i,o,s,a){let l=q(),c=ke(),d=jt(c.consts,o);return UT(l,c,t,n,e,r,i,d,void 0,s,a),zt}function dd(t,n,e,r,i,o,s,a){let l=q(),c=ke(),d=jt(c.consts,o);return co(l,c,t,n,e,r,i,d,void 0,s,a),dd}var $T=zT;function zT(t,n,e,r){return Os(!0),n[Ae].createComment("")}var ud=(()=>{class t{log(e){console.log(e)}warn(e){console.warn(e)}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"platform"})}return t})();function Cr(t){return typeof t=="function"&&t[We]!==void 0}var bm=new g("");function Er(t){return!!t&&typeof t.then=="function"}function _m(t){return!!t&&typeof t.subscribe=="function"}var fd=new g("");function hd(t){return ct([{provide:fd,multi:!0,useValue:t}])}var wm=(()=>{class t{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((e,r)=>{this.resolve=e,this.reject=r});appInits=u(fd,{optional:!0})??[];injector=u(z);constructor(){}runInitializers(){if(this.initialized)return;let e=[];for(let i of this.appInits){let o=Ye(this.injector,i);if(Er(o))e.push(o);else if(_m(o)){let s=new Promise((a,l)=>{o.subscribe({complete:a,error:l})});e.push(s)}}let r=()=>{this.done=!0,this.resolve()};Promise.all(e).then(()=>{r()}).catch(i=>{this.reject(i)}),e.length===0&&r(),this.initialized=!0}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),pd=new g("");function xw(){Ef(()=>{let t="";throw new C(600,t)})}function Iw(t){return t.isBoundToModule}var GT=10;var ht=(()=>{class t{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=u(rn);afterRenderManager=u(nd);zonelessEnabled=u(Fs);rootEffectScheduler=u(Cc);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new D;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=u(Hn);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(I(e=>!e))}constructor(){u(un,{optional:!0})}whenStable(){let e;return new Promise(r=>{e=this.isStable.subscribe({next:i=>{i&&r()}})}).finally(()=>{e.unsubscribe()})}_injector=u(Ie);_rendererFactory=null;get injector(){return this._injector}bootstrap(e,r){return this.bootstrapImpl(e,r)}bootstrapImpl(e,r,i=z.NULL){return this._injector.get(O).run(()=>{De(me.BootstrapComponentStart);let s=e instanceof ad;if(!this._injector.get(wm).done){let y="";throw new C(405,y)}let l;s?l=e:l=this._injector.get(Xs).resolveComponentFactory(e),this.componentTypes.push(l.componentType);let c=Iw(l)?void 0:this._injector.get(xn),d=r||l.selector,f=l.create(i,[],d,c),h=f.location.nativeElement,p=f.injector.get(bm,null);return p?.registerApplication(h),f.onDestroy(()=>{this.detachView(f.hostView),js(this.components,f),p?.unregisterApplication(h)}),this._loadComponent(f),De(me.BootstrapComponentEnd,f),f})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){De(me.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(td.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw De(me.ChangeDetectionEnd),new C(101,!1);let e=$(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,$(e),this.afterTick.next(),De(me.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(it,null,{optional:!0}));let e=0;for(;this.dirtyFlags!==0&&e++<GT;){De(me.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{De(me.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let e=!1;if(this.dirtyFlags&7){let r=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:i}of this.allViews){if(!r&&!ks(i))continue;let o=r&&!this.zonelessEnabled?0:1;K_(i,o),e=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}e||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:e})=>ks(e))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(e){let r=e;this._views.push(r),r.attachToAppRef(this)}detachView(e){let r=e;js(this._views,r),r.detachFromAppRef()}_loadComponent(e){this.attachView(e.hostView);try{this.tick()}catch(i){this.internalErrorHandler(i)}this.components.push(e),this._injector.get(pd,[]).forEach(i=>i(e))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(e=>e()),this._views.slice().forEach(e=>e.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(e){return this._destroyListeners.push(e),()=>js(this._destroyListeners,e)}destroy(){if(this._destroyed)throw new C(406,!1);let e=this._injector;e.destroy&&!e.destroyed&&e.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function js(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function fe(t,n,e,r){let i=q(),o=di();if(cn(i,o,n)){let s=ke(),a=wc();_M(a,i,t,n,e,r)}return fe}var Mp=class{destroy(n){}updateValue(n,e){}swap(n,e){let r=Math.min(n,e),i=Math.max(n,e),o=this.detach(i);if(i-r>1){let s=this.detach(r);this.attach(r,o),this.attach(i,s)}else this.attach(r,o)}move(n,e){this.attach(e,this.detach(n))}};function Kh(t,n,e,r,i){return t===e&&Object.is(n,r)?1:Object.is(i(t,n),i(e,r))?-1:0}function WT(t,n,e,r){let i,o,s=0,a=t.length-1,l=void 0;if(Array.isArray(n)){$(r);let c=n.length-1;for($(null);s<=a&&s<=c;){let d=t.at(s),f=n[s],h=Kh(s,d,s,f,e);if(h!==0){h<0&&t.updateValue(s,f),s++;continue}let p=t.at(a),y=n[c],E=Kh(a,p,c,y,e);if(E!==0){E<0&&t.updateValue(a,y),a--,c--;continue}let S=e(s,d),A=e(a,p),be=e(s,f);if(Object.is(be,A)){let tt=e(c,y);Object.is(tt,S)?(t.swap(s,a),t.updateValue(a,y),c--,a--):t.move(a,s),t.updateValue(s,f),s++;continue}if(i??=new Wc,o??=jb(t,s,a,e),Tp(t,i,s,be))t.updateValue(s,f),s++,a++;else if(o.has(be))i.set(S,t.detach(s)),a--;else{let tt=t.create(s,n[s]);t.attach(s,tt),s++,a++}}for(;s<=c;)Lb(t,i,e,s,n[s]),s++}else if(n!=null){$(r);let c=n[Symbol.iterator]();$(null);let d=c.next();for(;!d.done&&s<=a;){let f=t.at(s),h=d.value,p=Kh(s,f,s,h,e);if(p!==0)p<0&&t.updateValue(s,h),s++,d=c.next();else{i??=new Wc,o??=jb(t,s,a,e);let y=e(s,h);if(Tp(t,i,s,y))t.updateValue(s,h),s++,a++,d=c.next();else if(!o.has(y))t.attach(s,t.create(s,h)),s++,a++,d=c.next();else{let E=e(s,f);i.set(E,t.detach(s)),a--}}}for(;!d.done;)Lb(t,i,e,t.length,d.value),d=c.next()}for(;s<=a;)t.destroy(t.detach(a--));i?.forEach(c=>{t.destroy(c)})}function Tp(t,n,e,r){return n!==void 0&&n.has(r)?(t.attach(e,n.get(r)),n.delete(r),!0):!1}function Lb(t,n,e,r,i){if(Tp(t,n,r,e(r,i)))t.updateValue(r,i);else{let o=t.create(r,i);t.attach(r,o)}}function jb(t,n,e,r){let i=new Set;for(let o=n;o<=e;o++)i.add(r(o,t.at(o)));return i}var Wc=class{kvMap=new Map;_vMap=void 0;has(n){return this.kvMap.has(n)}delete(n){if(!this.has(n))return!1;let e=this.kvMap.get(n);return this._vMap!==void 0&&this._vMap.has(e)?(this.kvMap.set(n,this._vMap.get(e)),this._vMap.delete(e)):this.kvMap.delete(n),!0}get(n){return this.kvMap.get(n)}set(n,e){if(this.kvMap.has(n)){let r=this.kvMap.get(n);this._vMap===void 0&&(this._vMap=new Map);let i=this._vMap;for(;i.has(r);)r=i.get(r);i.set(r,e)}else this.kvMap.set(n,e)}forEach(n){for(let[e,r]of this.kvMap)if(n(r,e),this._vMap!==void 0){let i=this._vMap;for(;i.has(r);)r=i.get(r),n(r,e)}}};function X(t,n,e,r,i,o,s,a){Dr("NgControlFlow");let l=q(),c=ke(),d=jt(c.consts,o);return co(l,c,t,n,e,r,i,d,256,s,a),Dm}function Dm(t,n,e,r,i,o,s,a){Dr("NgControlFlow");let l=q(),c=ke(),d=jt(c.consts,o);return co(l,c,t,n,e,r,i,d,512,s,a),Dm}function J(t,n){Dr("NgControlFlow");let e=q(),r=di(),i=e[r]!==kt?e[r]:-1,o=i!==-1?qc(e,Re+i):void 0,s=0;if(cn(e,r,t)){let a=$(null);try{if(o!==void 0&&nw(o,s),t!==-1){let l=Re+t,c=qc(e,l),d=Np(e[V],l),f=iw(c,d,e),h=Ks(e,d,n,{dehydratedView:f});Qs(c,h,s,lo(d,f))}}finally{$(a)}}else if(o!==void 0){let a=tw(o,s);a!==void 0&&(a[He]=n)}}var Ap=class{lContainer;$implicit;$index;constructor(n,e,r){this.lContainer=n,this.$implicit=e,this.$index=r}get $count(){return this.lContainer.length-Oe}};function Gn(t,n){return n}var Rp=class{hasEmptyBlock;trackByFn;liveCollection;constructor(n,e,r){this.hasEmptyBlock=n,this.trackByFn=e,this.liveCollection=r}};function Wn(t,n,e,r,i,o,s,a,l,c,d,f,h){Dr("NgControlFlow");let p=q(),y=ke(),E=l!==void 0,S=q(),A=a?s.bind(S[St][He]):s,be=new Rp(E,A);S[Re+t]=be,co(p,y,t+1,n,e,r,i,jt(y.consts,o),256),E&&co(p,y,t+2,l,c,d,f,jt(y.consts,h),512)}var kp=class extends Mp{lContainer;hostLView;templateTNode;operationsCounter=void 0;needsIndexUpdate=!1;constructor(n,e,r){super(),this.lContainer=n,this.hostLView=e,this.templateTNode=r}get length(){return this.lContainer.length-Oe}at(n){return this.getLView(n)[He].$implicit}attach(n,e){let r=e[ri];this.needsIndexUpdate||=n!==this.length,Qs(this.lContainer,e,n,lo(this.templateTNode,r)),qT(this.lContainer,n)}detach(n){return this.needsIndexUpdate||=n!==this.length-1,YT(this.lContainer,n),ZT(this.lContainer,n)}create(n,e){let r=Vc(this.lContainer,this.templateTNode.tView.ssrId);return Ks(this.hostLView,this.templateTNode,new Ap(this.lContainer,e,n),{dehydratedView:r})}destroy(n){rd(n[V],n)}updateValue(n,e){this.getLView(n)[He].$implicit=e}reset(){this.needsIndexUpdate=!1}updateIndexes(){if(this.needsIndexUpdate)for(let n=0;n<this.length;n++)this.getLView(n)[He].$index=n}getLView(n){return KT(this.lContainer,n)}};function qn(t){let n=$(null),e=Dn();try{let r=q(),i=r[V],o=r[e],s=e+1,a=qc(r,s);if(o.liveCollection===void 0){let c=Np(i,s);o.liveCollection=new kp(a,r,c)}else o.liveCollection.reset();let l=o.liveCollection;if(WT(l,t,o.trackByFn,n),l.updateIndexes(),o.hasEmptyBlock){let c=di(),d=l.length===0;if(cn(r,c,d)){let f=e+2,h=qc(r,f);if(d){let p=Np(i,f),y=iw(h,p,r),E=Ks(r,p,void 0,{dehydratedView:y});Qs(h,E,0,lo(p,y))}else i.firstUpdatePass&&zM(h),nw(h,0)}}}finally{$(n)}}function qc(t,n){return t[n]}function qT(t,n){if(t.length<=Oe)return;let e=Oe+n,r=t[e],i=r?r[vr]:void 0;if(r&&i&&i.detachedLeaveAnimationFns&&i.detachedLeaveAnimationFns.length>0){let o=r[Ln];QS(o,i),pi.delete(r[jn]),i.detachedLeaveAnimationFns=void 0}}function YT(t,n){if(t.length<=Oe)return;let e=Oe+n,r=t[e],i=r?r[vr]:void 0;i&&i.leave&&i.leave.size>0&&(i.detachedLeaveAnimationFns=[])}function ZT(t,n){return Us(t,n)}function KT(t,n){return tw(t,n)}function Np(t,n){return fc(t,n)}function ye(t,n,e){let r=q(),i=di();if(cn(r,i,n)){let o=ke(),s=wc();mM(s,r,t,n,r[Ae],e)}return ye}function Op(t,n,e,r,i){cm(n,t,e,i?"class":"style",r)}function b(t,n,e,r){let i=q(),o=i[V],s=t+Re,a=o.firstCreatePass?hm(s,i,2,n,sm,mc(),e,r):o.data[s];if(Bn(a)){let l=i[en].tracingService;if(l&&l.componentCreate){let c=o.data[a.directiveStart+a.componentOffset];return l.componentCreate(uw(c),()=>(Vb(t,n,i,a,r),b))}}return Vb(t,n,i,a,r),b}function Vb(t,n,e,r,i){if(am(r,e,t,n,Sw),Ji(r)){let o=e[V];od(o,e,r),Up(o,r,e)}i!=null&&Zs(e,r)}function w(){let t=ke(),n=rt(),e=lm(n);return t.firstCreatePass&&pm(t,e),Ah(e)&&Rh(),Mh(),e.classesWithoutHost!=null&&FI(e)&&Op(t,e,q(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&PI(e)&&Op(t,e,q(),e.stylesWithoutHost,!1),w}function he(t,n,e,r){return b(t,n,e,r),w(),he}function ot(t,n,e,r){let i=q(),o=i[V],s=t+Re,a=o.firstCreatePass?iT(s,o,2,n,e,r):o.data[s];return am(a,i,t,n,Sw),r!=null&&Zs(i,a),ot}function pt(){let t=rt(),n=lm(t);return Ah(n)&&Rh(),Mh(),pt}function Nt(t,n,e,r){return ot(t,n,e,r),pt(),Nt}var Sw=(t,n,e,r,i)=>(Os(!0),x_(n[Ae],r,Vh()));function md(t,n,e){let r=q(),i=r[V],o=t+Re,s=i.firstCreatePass?hm(o,r,8,"ng-container",sm,mc(),n,e):i.data[o];if(am(s,r,t,"ng-container",QT),Ji(s)){let a=r[V];od(a,r,s),Up(a,s,r)}return e!=null&&Zs(r,s),md}function gd(){let t=ke(),n=rt(),e=lm(n);return t.firstCreatePass&&pm(t,e),gd}var QT=(t,n,e,r,i)=>(Os(!0),MS(n[Ae],""));function Ot(){return q()}function Gt(t,n,e){let r=q(),i=di();if(cn(r,i,n)){let o=ke(),s=wc();z_(s,r,t,n,r[Ae],e)}return Gt}var ea="en-US";var XT=ea;function Mw(t){typeof t=="string"&&(XT=t.toLowerCase().replace(/_/g,"-"))}function ge(t,n,e){let r=q(),i=ke(),o=rt();return JT(i,r,r[Ae],o,t,n,e),ge}function vd(t,n,e){let r=q(),i=ke(),o=rt();return(o.type&3||e)&&cw(o,i,r,e,r[Ae],t,n,kc(o,r,n)),vd}function JT(t,n,e,r,i,o,s){let a=!0,l=null;if((r.type&3||s)&&(l??=kc(r,n,o),cw(r,t,n,s,e,i,o,l)&&(a=!1)),a){let c=r.outputs?.[i],d=r.hostDirectiveOutputs?.[i];if(d&&d.length)for(let f=0;f<d.length;f+=2){let h=d[f],p=d[f+1];l??=kc(r,n,o),Nb(r,n,h,p,i,l)}if(c&&c.length)for(let f of c)l??=kc(r,n,o),Nb(r,n,f,i,i,l)}}function H(t=1){return tb(t)}function eA(t,n){let e=null,r=PS(t);for(let i=0;i<n.length;i++){let o=n[i];if(o==="*"){e=i;continue}if(r===null?k_(t,o,!0):VS(r,o))return i}return e}function ce(t){let n=q()[St][It];if(!n.projection){let e=t?t.length:1,r=n.projection=Ty(e,null),i=r.slice(),o=n.child;for(;o!==null;){if(o.type!==128){let s=t?eA(o,t):0;s!==null&&(i[s]?i[s].projectionNext=o:r[s]=o,i[s]=o)}o=o.next}}}function R(t,n=0,e,r,i,o){let s=q(),a=ke(),l=r?t+1:null;l!==null&&co(s,a,l,r,i,o,null,e);let c=po(a,Re+t,16,null,e||null);c.projection===null&&(c.projection=n),Oh();let f=!s[ri]||Th();s[St][It].projection[c.projection]===null&&l!==null?tA(s,a,l):f&&!Qc(c)&&lM(a,s,c)}function tA(t,n,e){let r=Re+e,i=n.data[r],o=t[r],s=Vc(o,i.tView.ssrId),a=Ks(t,i,void 0,{dehydratedView:s});Qs(o,a,0,lo(i,s))}function yt(t,n,e,r){return vw(t,n,e,r),yt}function et(t,n,e){return gw(t,n,e),et}function Z(t){let n=q(),e=ke(),r=yc();Ns(r+1);let i=gm(e,r);if(t.dirty&&Ly(n)===((i.metadata.flags&2)===2)){if(i.matches===null)t.reset([]);else{let o=bw(n,r);t.reset(o,s_),t.notifyOnChanges()}return!0}return!1}function K(){return mm(q(),yc())}function yd(t,n,e,r,i){return ww(n,vw(t,e,r,i)),yd}function bd(t,n,e,r){return ww(t,gw(n,e,r)),bd}function _d(t=1){Ns(yc()+t)}function Wt(t){let n=Gy();return wh(n,Re+t)}function Sc(t,n){return t<<17|n<<2}function gi(t){return t>>17&32767}function nA(t){return(t&2)==2}function rA(t,n){return t&131071|n<<17}function Fp(t){return t|2}function uo(t){return(t&131068)>>2}function Qh(t,n){return t&-131069|n<<2}function iA(t){return(t&1)===1}function Pp(t){return t|1}function oA(t,n,e,r,i,o){let s=o?n.classBindings:n.styleBindings,a=gi(s),l=uo(s);t[r]=e;let c=!1,d;if(Array.isArray(e)){let f=e;d=f[1],(d===null||Zi(f,d)>0)&&(c=!0)}else d=e;if(i)if(l!==0){let h=gi(t[a+1]);t[r+1]=Sc(h,a),h!==0&&(t[h+1]=Qh(t[h+1],r)),t[a+1]=rA(t[a+1],r)}else t[r+1]=Sc(a,0),a!==0&&(t[a+1]=Qh(t[a+1],r)),a=r;else t[r+1]=Sc(l,0),a===0?a=r:t[l+1]=Qh(t[l+1],r),l=r;c&&(t[r+1]=Fp(t[r+1])),Bb(t,d,r,!0),Bb(t,d,r,!1),sA(n,d,t,r,o),s=Sc(a,l),o?n.classBindings=s:n.styleBindings=s}function sA(t,n,e,r,i){let o=i?t.residualClasses:t.residualStyles;o!=null&&typeof n=="string"&&Zi(o,n)>=0&&(e[r+1]=Pp(e[r+1]))}function Bb(t,n,e,r){let i=t[e+1],o=n===null,s=r?gi(i):uo(i),a=!1;for(;s!==0&&(a===!1||o);){let l=t[s],c=t[s+1];aA(l,n)&&(a=!0,t[s+1]=r?Pp(c):Fp(c)),s=r?gi(c):uo(c)}a&&(t[e+1]=r?Fp(i):Pp(i))}function aA(t,n){return t===null||n==null||(Array.isArray(t)?t[1]:t)===n?!0:Array.isArray(t)&&typeof n=="string"?Zi(t,n)>=0:!1}var sn={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function lA(t){return t.substring(sn.key,sn.keyEnd)}function cA(t){return dA(t),Tw(t,Aw(t,0,sn.textEnd))}function Tw(t,n){let e=sn.textEnd;return e===n?-1:(n=sn.keyEnd=uA(t,sn.key=n,e),Aw(t,n,e))}function dA(t){sn.key=0,sn.keyEnd=0,sn.value=0,sn.valueEnd=0,sn.textEnd=t.length}function Aw(t,n,e){for(;n<e&&t.charCodeAt(n)<=32;)n++;return n}function uA(t,n,e){for(;n<e&&t.charCodeAt(n)>32;)n++;return n}function qt(t,n,e){return Rw(t,n,e,!1),qt}function L(t,n){return Rw(t,n,null,!0),L}function Tt(t){hA(bA,fA,t,!0)}function fA(t,n){for(let e=cA(n);e>=0;e=Tw(n,e))lc(t,lA(n),!0)}function Rw(t,n,e,r){let i=q(),o=ke(),s=gc(2);if(o.firstUpdatePass&&Nw(o,t,s,r),n!==kt&&cn(i,s,n)){let a=o.data[Dn()];Ow(o,a,i,i[Ae],t,i[s+1]=wA(n,e),r,s)}}function hA(t,n,e,r){let i=ke(),o=gc(2);i.firstUpdatePass&&Nw(i,null,o,r);let s=q();if(e!==kt&&cn(s,o,e)){let a=i.data[Dn()];if(Fw(a,r)&&!kw(i,o)){let l=r?a.classesWithoutHost:a.stylesWithoutHost;l!==null&&(e=rc(l,e||"")),Op(i,a,s,e,r)}else _A(i,a,s,s[Ae],s[o+1],s[o+1]=yA(t,n,e),r,o)}}function kw(t,n){return n>=t.expandoStartIndex}function Nw(t,n,e,r){let i=t.data;if(i[e+1]===null){let o=i[Dn()],s=kw(t,e);Fw(o,r)&&n===null&&!s&&(n=!1),n=pA(i,o,n,r),oA(i,o,n,e,s,r)}}function pA(t,n,e,r){let i=Qy(t),o=r?n.residualClasses:n.residualStyles;if(i===null)(r?n.classBindings:n.styleBindings)===0&&(e=Xh(null,t,n,e,r),e=zs(e,n.attrs,r),o=null);else{let s=n.directiveStylingLast;if(s===-1||t[s]!==i)if(e=Xh(i,t,n,e,r),o===null){let l=mA(t,n,r);l!==void 0&&Array.isArray(l)&&(l=Xh(null,t,n,l[1],r),l=zs(l,n.attrs,r),gA(t,n,r,l))}else o=vA(t,n,r)}return o!==void 0&&(r?n.residualClasses=o:n.residualStyles=o),e}function mA(t,n,e){let r=e?n.classBindings:n.styleBindings;if(uo(r)!==0)return t[gi(r)]}function gA(t,n,e,r){let i=e?n.classBindings:n.styleBindings;t[gi(i)]=r}function vA(t,n,e){let r,i=n.directiveEnd;for(let o=1+n.directiveStylingLast;o<i;o++){let s=t[o].hostAttrs;r=zs(r,s,e)}return zs(r,n.attrs,e)}function Xh(t,n,e,r,i){let o=null,s=e.directiveEnd,a=e.directiveStylingLast;for(a===-1?a=e.directiveStart:a++;a<s&&(o=n[a],r=zs(r,o.hostAttrs,i),o!==t);)a++;return t!==null&&(e.directiveStylingLast=a),r}function zs(t,n,e){let r=e?1:2,i=-1;if(n!==null)for(let o=0;o<n.length;o++){let s=n[o];typeof s=="number"?i=s:i===r&&(Array.isArray(t)||(t=t===void 0?[]:["",t]),lc(t,s,e?!0:n[++o]))}return t===void 0?null:t}function yA(t,n,e){if(e==null||e==="")return vt;let r=[],i=dn(e);if(Array.isArray(i))for(let o=0;o<i.length;o++)t(r,i[o],!0);else if(i instanceof Set)for(let o of i)t(r,o,!0);else if(typeof i=="object")for(let o in i)i.hasOwnProperty(o)&&t(r,o,i[o]);else typeof i=="string"&&n(r,i);return r}function bA(t,n,e){let r=String(n);r!==""&&!r.includes(" ")&&lc(t,r,e)}function _A(t,n,e,r,i,o,s,a){i===kt&&(i=vt);let l=0,c=0,d=0<i.length?i[0]:null,f=0<o.length?o[0]:null;for(;d!==null||f!==null;){let h=l<i.length?i[l+1]:void 0,p=c<o.length?o[c+1]:void 0,y=null,E;d===f?(l+=2,c+=2,h!==p&&(y=f,E=p)):f===null||d!==null&&d<f?(l+=2,y=d):(c+=2,y=f,E=p),y!==null&&Ow(t,n,e,r,y,E,s,a),d=l<i.length?i[l]:null,f=c<o.length?o[c]:null}}function Ow(t,n,e,r,i,o,s,a){if(!(n.type&3))return;let l=t.data,c=l[a+1],d=iA(c)?Hb(l,n,e,i,uo(c),s):void 0;if(!Yc(d)){Yc(o)||nA(c)&&(o=Hb(l,null,e,i,a,s));let f=_h(Dn(),e);dM(r,s,f,i,o)}}function Hb(t,n,e,r,i,o){let s=n===null,a;for(;i>0;){let l=t[i],c=Array.isArray(l),d=c?l[1]:l,f=d===null,h=e[i+1];h===kt&&(h=f?vt:void 0);let p=f?cc(h,r):d===r?h:void 0;if(c&&!Yc(p)&&(p=cc(l,r)),Yc(p)&&(a=p,s))return a;let y=t[i+1];i=s?gi(y):uo(y)}if(n!==null){let l=o?n.residualClasses:n.residualStyles;l!=null&&(a=cc(l,r))}return a}function Yc(t){return t!==void 0}function wA(t,n){return t==null||t===""||(typeof n=="string"?t=t+n:typeof t=="object"&&(t=xs(dn(t)))),t}function Fw(t,n){return(t.flags&(n?8:16))!==0}function x(t,n=""){let e=q(),r=ke(),i=t+Re,o=r.firstCreatePass?po(r,i,1,n,null):r.data[i],s=DA(r,e,o,n);e[i]=s,Dc()&&im(r,e,s,o),to(o,!1)}var DA=(t,n,e,r)=>(Os(!0),IS(n[Ae],r));function CA(t,n,e,r=""){return cn(t,di(),e)?n+ti(e)+r:kt}function EA(t,n,e,r,i,o=""){let s=Wy(),a=sT(t,s,e,i);return gc(2),a?n+ti(e)+r+ti(i)+o:kt}function Se(t){return ae("",t),Se}function ae(t,n,e){let r=q(),i=CA(r,t,n,e);return i!==kt&&Pw(r,Dn(),i),ae}function ta(t,n,e,r,i){let o=q(),s=EA(o,t,n,e,r,i);return s!==kt&&Pw(o,Dn(),s),ta}function Pw(t,n,e){let r=_h(n,t);SS(t[Ae],r,e)}function Ub(t,n,e){let r=ke();r.firstCreatePass&&Lw(n,r.data,r.blueprint,wn(t),e)}function Lw(t,n,e,r,i){if(t=lt(t),Array.isArray(t))for(let o=0;o<t.length;o++)Lw(t[o],n,e,r,i);else{let o=ke(),s=q(),a=rt(),l=Xr(t)?t:lt(t.provide),c=ph(t),d=a.providerIndexes&1048575,f=a.directiveStart,h=a.providerIndexes>>20;if(Xr(t)||!t.multi){let p=new hi(c,i,Je,null),y=ep(l,n,i?d:d+h,f);y===-1?(np(Lc(a,s),o,l),Jh(o,t,n.length),n.push(l),a.directiveStart++,a.directiveEnd++,i&&(a.providerIndexes+=1048576),e.push(p),s.push(p)):(e[y]=p,s[y]=p)}else{let p=ep(l,n,d+h,f),y=ep(l,n,d,d+h),E=p>=0&&e[p],S=y>=0&&e[y];if(i&&!S||!i&&!E){np(Lc(a,s),o,l);let A=SA(i?IA:xA,e.length,i,r,c,t);!i&&S&&(e[y].providerFactory=A),Jh(o,t,n.length,0),n.push(l),a.directiveStart++,a.directiveEnd++,i&&(a.providerIndexes+=1048576),e.push(A),s.push(A)}else{let A=jw(e[i?y:p],c,!i&&r);Jh(o,t,p>-1?p:y,A)}!i&&r&&S&&e[y].componentProviders++}}}function Jh(t,n,e,r){let i=Xr(n),o=Ny(n);if(i||o){let l=(o?lt(n.useClass):n).prototype.ngOnDestroy;if(l){let c=t.destroyHooks||(t.destroyHooks=[]);if(!i&&n.multi){let d=c.indexOf(e);d===-1?c.push(e,[r,l]):c[d+1].push(r,l)}else c.push(e,l)}}}function jw(t,n,e){return e&&t.componentProviders++,t.multi.push(n)-1}function ep(t,n,e,r){for(let i=e;i<r;i++)if(n[i]===t)return i;return-1}function xA(t,n,e,r,i){return Lp(this.multi,[])}function IA(t,n,e,r,i){let o=this.multi,s;if(this.providerFactory){let a=this.providerFactory.componentProviders,l=Vs(r,r[V],this.providerFactory.index,i);s=l.slice(0,a),Lp(o,s);for(let c=a;c<l.length;c++)s.push(l[c])}else s=[],Lp(o,s);return s}function Lp(t,n){for(let e=0;e<t.length;e++){let r=t[e];n.push(r())}return n}function SA(t,n,e,r,i,o){let s=new hi(t,e,Je,null);return s.multi=[],s.index=n,s.componentProviders=0,jw(s,i,r&&!e),s}function Ne(t,n){return e=>{e.providersResolver=(r,i)=>Ub(r,i?i(t):t,!1),n&&(e.viewProvidersResolver=(r,i)=>Ub(r,i?i(n):n,!0))}}function Cm(t,n,e){return Vw(q(),Ph(),t,n,e)}function MA(t,n){let e=t[n];return e===kt?void 0:e}function Vw(t,n,e,r,i,o){let s=n+e;return cn(t,s,i)?oT(t,s+1,o?r.call(o,i):r(i)):MA(t,s+1)}function Yn(t,n){let e=ke(),r,i=t+Re;e.firstCreatePass?(r=TA(n,e.pipeRegistry),e.data[i]=r,r.onDestroy&&(e.destroyHooks??=[]).push(i,r.onDestroy)):r=e.data[i];let o=r.factory||(r.factory=ur(r.type,!0)),s,a=xt(Je);try{let l=Pc(!1),c=o();return Pc(l),Dh(e,q(),i,c),c}finally{xt(a)}}function TA(t,n){if(n)for(let e=n.length-1;e>=0;e--){let r=n[e];if(t===r.name)return r}}function Zn(t,n,e){let r=t+Re,i=q(),o=wh(i,r);return AA(i,r)?Vw(i,Ph(),n,o.transform,e,o):o.transform(e)}function AA(t,n){return t[V].data[n].pure}function Em(t,n){return sd(t,n)}var Zc=class{ngModuleFactory;componentFactories;constructor(n,e){this.ngModuleFactory=n,this.componentFactories=e}},xm=(()=>{class t{compileModuleSync(e){return new Gc(e)}compileModuleAsync(e){return Promise.resolve(this.compileModuleSync(e))}compileModuleAndAllComponentsSync(e){let r=this.compileModuleSync(e),i=oh(e),o=A_(i.declarations).reduce((s,a)=>{let l=Pn(a);return l&&s.push(new mi(l)),s},[]);return new Zc(r,o)}compileModuleAndAllComponentsAsync(e){return Promise.resolve(this.compileModuleAndAllComponentsSync(e))}clearCache(){}clearCacheFor(e){}getModuleId(e){}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Bw=(()=>{class t{applicationErrorHandler=u(rn);appRef=u(ht);taskService=u(Hn);ngZone=u(O);zonelessEnabled=u(Fs);tracing=u(un,{optional:!0});zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new de;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(Cs):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(u(zh,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let e=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(e);return}this.switchToMicrotaskScheduler(),this.taskService.remove(e)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let e=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(e)})})}notify(e){if(!this.zonelessEnabled&&e===5)return;switch(e){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2;break}case 12:{this.appRef.dirtyFlags|=16;break}case 13:{this.appRef.dirtyFlags|=2;break}case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let r=this.useMicrotaskScheduler?ob:Hh;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>r(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>r(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(Cs+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let e=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(r){this.applicationErrorHandler(r)}finally{this.taskService.remove(e),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let e=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(e)}}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Hw(){return[{provide:vn,useExisting:Bw},{provide:O,useClass:Es},{provide:Fs,useValue:!0}]}function RA(){return typeof $localize<"u"&&$localize.locale||ea}var wd=new g("",{factory:()=>u(wd,{optional:!0,skipSelf:!0})||RA()});function Ge(t){return vy(t)}function bt(t,n){return cs(t,n?.equal)}var qw=Symbol("InputSignalNode#UNSET"),QA=U(m({},ds),{transformFn:void 0,applyValueToInputSignal(t,n){Bi(t,n)}});function Yw(t,n){let e=Object.create(QA);e.value=t,e.transformFn=n?.transform;function r(){if(jr(e),e.value===qw){let i=null;throw new C(-950,i)}return e.value}return r[We]=e,r}var Kn=class{attributeName;constructor(n){this.attributeName=n}__NG_ELEMENT_ID__=()=>Vp(this.attributeName);toString(){return`HostAttributeToken ${this.attributeName}`}};function Uw(t,n){return Yw(t,n)}function XA(t){return Yw(qw,t)}var Cd=(Uw.required=XA,Uw);function $w(t,n){return vm(n)}function JA(t,n){return ym(n)}var ia=($w.required=JA,$w);function zw(t,n){return vm(n)}function eR(t,n){return ym(n)}var Zw=(zw.required=eR,zw);var Sm=new g(""),tR=new g("");function na(t){return!t.moduleRef}function nR(t){let n=na(t)?t.r3Injector:t.moduleRef.injector,e=n.get(O);return e.run(()=>{na(t)?t.r3Injector.resolveInjectorInitializers():t.moduleRef.resolveInjectorInitializers();let r=n.get(rn),i;if(e.runOutsideAngular(()=>{i=e.onError.subscribe({next:r})}),na(t)){let o=()=>n.destroy(),s=t.platformInjector.get(Sm);s.add(o),n.onDestroy(()=>{i.unsubscribe(),s.delete(o)})}else{let o=()=>t.moduleRef.destroy(),s=t.platformInjector.get(Sm);s.add(o),t.moduleRef.onDestroy(()=>{js(t.allPlatformModules,t.moduleRef),i.unsubscribe(),s.delete(o)})}return iR(r,e,()=>{let o=n.get(Hn),s=o.add(),a=n.get(wm);return a.runInitializers(),a.donePromise.then(()=>{let l=n.get(wd,ea);if(Mw(l||ea),!n.get(tR,!0))return na(t)?n.get(ht):(t.allPlatformModules.push(t.moduleRef),t.moduleRef);if(na(t)){let d=n.get(ht);return t.rootComponent!==void 0&&d.bootstrap(t.rootComponent),d}else return rR?.(t.moduleRef,t.allPlatformModules),t.moduleRef}).finally(()=>{o.remove(s)})})})}var rR;function iR(t,n,e){try{let r=e();return Er(r)?r.catch(i=>{throw n.runOutsideAngular(()=>t(i)),i}):r}catch(r){throw n.runOutsideAngular(()=>t(r)),r}}var Dd=null;function oR(t=[],n){return z.create({name:n,providers:[{provide:As,useValue:"platform"},{provide:Sm,useValue:new Set([()=>Dd=null])},...t]})}function sR(t=[]){if(Dd)return Dd;let n=oR(t);return Dd=n,xw(),aR(n),n}function aR(t){let n=t.get(Kc,null);Ye(t,()=>{n?.forEach(e=>e())})}function Tm(){return!1}var lR=1e4;var E5=lR-1e3;var Te=(()=>{class t{static __NG_ELEMENT_ID__=cR}return t})();function cR(t){return dR(rt(),q(),(t&16)===16)}function dR(t,n,e){if(Bn(t)&&!e){let r=$t(t.index,n);return new wr(r,r)}else if(t.type&175){let r=n[St];return new wr(r,n)}return null}function Kw(t){let{rootComponent:n,appProviders:e,platformProviders:r,platformRef:i}=t;De(me.BootstrapApplicationStart);try{let o=i?.injector??sR(r),s=[Hw(),ab,...e||[]],a=new $s({providers:s,parent:o,debugName:"",runEnvironmentInitializers:!1});return nR({r3Injector:a.injector,platformInjector:o,rootComponent:n})}catch(o){return Promise.reject(o)}finally{De(me.BootstrapApplicationEnd)}}function oe(t){return typeof t=="boolean"?t:t!=null&&t!=="false"}function bi(t,n=NaN){return!isNaN(parseFloat(t))&&!isNaN(Number(t))?Number(t):n}var Im=Symbol("NOT_SET"),Qw=new Set,uR=U(m({},ds),{kind:"afterRenderEffectPhase",consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,value:Im,cleanup:null,consumerMarkedDirty(){if(this.sequence.impl.executing){if(this.sequence.lastPhase===null||this.sequence.lastPhase<this.phase)return;this.sequence.erroredOrDestroyed=!0}this.sequence.scheduler.notify(7)},phaseFn(t){if(this.sequence.lastPhase=this.phase,!this.dirty)return this.signal;if(this.dirty=!1,this.value!==Im&&!ji(this))return this.signal;try{for(let i of this.cleanup??Qw)i()}finally{this.cleanup?.clear()}let n=[];t!==void 0&&n.push(t),n.push(this.registerCleanupFn);let e=ar(this),r;try{r=this.userFn.apply(null,n)}finally{Vr(this,e)}return(this.value===Im||!this.equal(this.value,r))&&(this.value=r,this.version++),this.signal}}),Mm=class extends Bs{scheduler;lastPhase=null;nodes=[void 0,void 0,void 0,void 0];onDestroyFns=null;constructor(n,e,r,i,o,s=null){super(n,[void 0,void 0,void 0,void 0],r,!1,o.get(Fe),s),this.scheduler=i;for(let a of tm){let l=e[a];if(l===void 0)continue;let c=Object.create(uR);c.sequence=this,c.phase=a,c.userFn=l,c.dirty=!0,c.signal=()=>(jr(c),c.value),c.signal[We]=c,c.registerCleanupFn=d=>(c.cleanup??=new Set).add(d),this.nodes[a]=c,this.hooks[a]=d=>c.phaseFn(d)}}afterRun(){super.afterRun(),this.lastPhase=null}destroy(){if(this.onDestroyFns!==null)for(let n of this.onDestroyFns)n();super.destroy();for(let n of this.nodes)if(n)try{for(let e of n.cleanup??Qw)e()}finally{lr(n)}}};function Xw(t,n){let e=n?.injector??u(z),r=e.get(vn),i=e.get(nd),o=e.get(un,null,{optional:!0});i.impl??=e.get(nm);let s=t;typeof s=="function"&&(s={mixedReadWrite:t});let a=e.get(no,null,{optional:!0}),l=new Mm(i.impl,[s.earlyRead,s.write,s.mixedReadWrite,s.read],a?.view,r,e,o?.snapshot(null));return i.impl.register(l),l}function Ed(t,n){let e=Pn(t),r=n.elementInjector||Ki();return new mi(e).create(r,n.projectableNodes,n.hostElement,n.environmentInjector,n.directives,n.bindings)}var Jw=null;function Qn(){return Jw}function Am(t){Jw??=t}var oa=class{},mo=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:()=>u(eD),providedIn:"platform"})}return t})();var eD=(()=>{class t extends mo{_location;_history;_doc=u(B);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Qn().getBaseHref(this._doc)}onPopState(e){let r=Qn().getGlobalEventTarget(this._doc,"window");return r.addEventListener("popstate",e,!1),()=>r.removeEventListener("popstate",e)}onHashChange(e){let r=Qn().getGlobalEventTarget(this._doc,"window");return r.addEventListener("hashchange",e,!1),()=>r.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,r,i){this._history.pushState(e,r,i)}replaceState(e,r,i){this._history.replaceState(e,r,i)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function rD(t,n){return t?n?t.endsWith("/")?n.startsWith("/")?t+n.slice(1):t+n:n.startsWith("/")?t+n:`${t}/${n}`:t:n}function tD(t){let n=t.search(/#|\?|$/);return t[n-1]==="/"?t.slice(0,n-1)+t.slice(n):t}function xr(t){return t&&t[0]!=="?"?`?${t}`:t}var xd=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:()=>u(hR),providedIn:"root"})}return t})(),fR=new g(""),hR=(()=>{class t extends xd{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,r){super(),this._platformLocation=e,this._baseHref=r??this._platformLocation.getBaseHrefFromDOM()??u(B).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return rD(this._baseHref,e)}path(e=!1){let r=this._platformLocation.pathname+xr(this._platformLocation.search),i=this._platformLocation.hash;return i&&e?`${r}${i}`:r}pushState(e,r,i,o){let s=this.prepareExternalUrl(i+xr(o));this._platformLocation.pushState(e,r,s)}replaceState(e,r,i,o){let s=this.prepareExternalUrl(i+xr(o));this._platformLocation.replaceState(e,r,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(r){return new(r||t)(T(mo),T(fR,8))};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ir=(()=>{class t{_subject=new D;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let r=this._locationStrategy.getBaseHref();this._basePath=gR(tD(nD(r))),this._locationStrategy.onPopState(i=>{this._subject.next({url:this.path(!0),pop:!0,state:i.state,type:i.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,r=""){return this.path()==this.normalize(e+xr(r))}normalize(e){return t.stripTrailingSlash(mR(this._basePath,nD(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,r="",i=null){this._locationStrategy.pushState(i,"",e,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+xr(r)),i)}replaceState(e,r="",i=null){this._locationStrategy.replaceState(i,"",e,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+xr(r)),i)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(r=>{this._notifyUrlChangeListeners(r.url,r.state)}),()=>{let r=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(r,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",r){this._urlChangeListeners.forEach(i=>i(e,r))}subscribe(e,r,i){return this._subject.subscribe({next:e,error:r??void 0,complete:i??void 0})}static normalizeQueryParams=xr;static joinWithSlash=rD;static stripTrailingSlash=tD;static \u0275fac=function(r){return new(r||t)(T(xd))};static \u0275prov=_({token:t,factory:()=>pR(),providedIn:"root"})}return t})();function pR(){return new Ir(T(xd))}function mR(t,n){if(!t||!n.startsWith(t))return n;let e=n.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:n}function nD(t){return t.replace(/\/index\.html$/,"")}function gR(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var Rm=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=u(z);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let r=this._viewContainerRef;if(this._viewRef&&r.remove(r.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let i=this._createContextForwardProxy();this._viewRef=r.createEmbeddedView(this.ngTemplateOutlet,i,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,r,i)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,r,i):!1,get:(e,r,i)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,r,i)}})}static \u0275fac=function(r){return new(r||t)(Je(ft))};static \u0275dir=Y({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[ut]})}return t})();var Sr=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=P({type:t});static \u0275inj=F({})}return t})();function sa(t,n){n=encodeURIComponent(n);for(let e of t.split(";")){let r=e.indexOf("="),[i,o]=r==-1?[e,""]:[e.slice(0,r),e.slice(r+1)];if(i.trim()===n)return decodeURIComponent(o)}return null}var _i=class{};var km="browser";function iD(t){return t===km}var aa=class{_doc;constructor(n){this._doc=n}manager},Id=(()=>{class t extends aa{constructor(e){super(e)}supports(e){return!0}addEventListener(e,r,i,o){return e.addEventListener(r,i,o),()=>this.removeEventListener(e,r,i,o)}removeEventListener(e,r,i,o){return e.removeEventListener(r,i,o)}static \u0275fac=function(r){return new(r||t)(T(B))};static \u0275prov=_({token:t,factory:t.\u0275fac})}return t})(),Td=new g(""),Pm=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,r){this._zone=r,e.forEach(s=>{s.manager=this});let i=e.filter(s=>!(s instanceof Id));this._plugins=i.slice().reverse();let o=e.find(s=>s instanceof Id);o&&this._plugins.push(o)}addEventListener(e,r,i,o){return this._findPluginFor(r).addEventListener(e,r,i,o)}getZone(){return this._zone}_findPluginFor(e){let r=this._eventNameToPlugin.get(e);if(r)return r;if(r=this._plugins.find(o=>o.supports(e)),!r)throw new C(5101,!1);return this._eventNameToPlugin.set(e,r),r}static \u0275fac=function(r){return new(r||t)(T(Td),T(O))};static \u0275prov=_({token:t,factory:t.\u0275fac})}return t})(),Nm="ng-app-id";function oD(t){for(let n of t)n.remove()}function sD(t,n){let e=n.createElement("style");return e.textContent=t,e}function bR(t,n,e,r){let i=t.head?.querySelectorAll(`style[${Nm}="${n}"],link[${Nm}="${n}"]`);if(i)for(let o of i)o.removeAttribute(Nm),o instanceof HTMLLinkElement?r.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function Fm(t,n){let e=n.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var Lm=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,r,i,o={}){this.doc=e,this.appId=r,this.nonce=i,bR(e,r,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,r){for(let i of e)this.addUsage(i,this.inline,sD);r?.forEach(i=>this.addUsage(i,this.external,Fm))}removeStyles(e,r){for(let i of e)this.removeUsage(i,this.inline);r?.forEach(i=>this.removeUsage(i,this.external))}addUsage(e,r,i){let o=r.get(e);o?o.usage++:r.set(e,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,i(e,this.doc)))})}removeUsage(e,r){let i=r.get(e);i&&(i.usage--,i.usage<=0&&(oD(i.elements),r.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])oD(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[r,{elements:i}]of this.inline)i.push(this.addElement(e,sD(r,this.doc)));for(let[r,{elements:i}]of this.external)i.push(this.addElement(e,Fm(r,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,r){return this.nonce&&r.setAttribute("nonce",this.nonce),e.appendChild(r)}static \u0275fac=function(r){return new(r||t)(T(B),T(ho),T(yi,8),T(vi))};static \u0275prov=_({token:t,factory:t.\u0275fac})}return t})(),Om={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},jm=/%COMP%/g;var lD="%COMP%",_R=`_nghost-${lD}`,wR=`_ngcontent-${lD}`,DR=!0,CR=new g("",{factory:()=>DR});function ER(t){return wR.replace(jm,t)}function xR(t){return _R.replace(jm,t)}function cD(t,n){return n.map(e=>e.replace(jm,t))}var Vm=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,r,i,o,s,a,l=null,c=null){this.eventManager=e,this.sharedStylesHost=r,this.appId=i,this.removeStylesOnCompDestroy=o,this.doc=s,this.ngZone=a,this.nonce=l,this.tracingService=c,this.defaultRenderer=new la(e,s,a,this.tracingService)}createRenderer(e,r){if(!e||!r)return this.defaultRenderer;let i=this.getOrCreateRenderer(e,r);return i instanceof Md?i.applyToHost(e):i instanceof ca&&i.applyStyles(),i}getOrCreateRenderer(e,r){let i=this.rendererByCompId,o=i.get(r.id);if(!o){let s=this.doc,a=this.ngZone,l=this.eventManager,c=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,f=this.tracingService;switch(r.encapsulation){case ln.Emulated:o=new Md(l,c,r,this.appId,d,s,a,f);break;case ln.ShadowDom:return new Sd(l,e,r,s,a,this.nonce,f,c);case ln.ExperimentalIsolatedShadowDom:return new Sd(l,e,r,s,a,this.nonce,f);default:o=new ca(l,c,r,d,s,a,f);break}i.set(r.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(r){return new(r||t)(T(Pm),T(Lm),T(ho),T(CR),T(B),T(O),T(yi),T(un,8))};static \u0275prov=_({token:t,factory:t.\u0275fac})}return t})(),la=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,e,r,i){this.eventManager=n,this.doc=e,this.ngZone=r,this.tracingService=i}destroy(){}destroyNode=null;createElement(n,e){return e?this.doc.createElementNS(Om[e]||e,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,e){(aD(n)?n.content:n).appendChild(e)}insertBefore(n,e,r){n&&(aD(n)?n.content:n).insertBefore(e,r)}removeChild(n,e){e.remove()}selectRootElement(n,e){let r=typeof n=="string"?this.doc.querySelector(n):n;if(!r)throw new C(-5104,!1);return e||(r.textContent=""),r}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,e,r,i){if(i){e=i+":"+e;let o=Om[i];o?n.setAttributeNS(o,e,r):n.setAttribute(e,r)}else n.setAttribute(e,r)}removeAttribute(n,e,r){if(r){let i=Om[r];i?n.removeAttributeNS(i,e):n.removeAttribute(`${r}:${e}`)}else n.removeAttribute(e)}addClass(n,e){n.classList.add(e)}removeClass(n,e){n.classList.remove(e)}setStyle(n,e,r,i){i&(En.DashCase|En.Important)?n.style.setProperty(e,r,i&En.Important?"important":""):n.style[e]=r}removeStyle(n,e,r){r&En.DashCase?n.style.removeProperty(e):n.style[e]=""}setProperty(n,e,r){n!=null&&(n[e]=r)}setValue(n,e){n.nodeValue=e}listen(n,e,r,i){if(typeof n=="string"&&(n=Qn().getGlobalEventTarget(this.doc,n),!n))throw new C(5102,!1);let o=this.decoratePreventDefault(r);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(n,e,o)),this.eventManager.addEventListener(n,e,o,i)}decoratePreventDefault(n){return e=>{if(e==="__ngUnwrap__")return n;n(e)===!1&&e.preventDefault()}}};function aD(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var Sd=class extends la{hostEl;sharedStylesHost;shadowRoot;constructor(n,e,r,i,o,s,a,l){super(n,i,o,a),this.hostEl=e,this.sharedStylesHost=l,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let c=r.styles;c=cD(r.id,c);for(let f of c){let h=document.createElement("style");s&&h.setAttribute("nonce",s),h.textContent=f,this.shadowRoot.appendChild(h)}let d=r.getExternalStyles?.();if(d)for(let f of d){let h=Fm(f,i);s&&h.setAttribute("nonce",s),this.shadowRoot.appendChild(h)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,e){return super.appendChild(this.nodeOrShadowRoot(n),e)}insertBefore(n,e,r){return super.insertBefore(this.nodeOrShadowRoot(n),e,r)}removeChild(n,e){return super.removeChild(null,e)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},ca=class extends la{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,e,r,i,o,s,a,l){super(n,o,s,a),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=i;let c=r.styles;this.styles=l?cD(l,c):c,this.styleUrls=r.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&pi.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Md=class extends ca{contentAttr;hostAttr;constructor(n,e,r,i,o,s,a,l){let c=i+"-"+r.id;super(n,e,r,o,s,a,l,c),this.contentAttr=ER(c),this.hostAttr=xR(c)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,e){let r=super.createElement(n,e);return super.setAttribute(r,this.contentAttr,""),r}};var Ad=class t extends oa{supportsDOMEvents=!0;static makeCurrent(){Am(new t)}onAndCancel(n,e,r,i){return n.addEventListener(e,r,i),()=>{n.removeEventListener(e,r,i)}}dispatchEvent(n,e){n.dispatchEvent(e)}remove(n){n.remove()}createElement(n,e){return e=e||this.getDefaultDocument(),e.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,e){return e==="window"?window:e==="document"?n:e==="body"?n.body:null}getBaseHref(n){let e=IR();return e==null?null:SR(e)}resetBaseElement(){da=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return sa(document.cookie,n)}},da=null;function IR(){return da=da||document.head.querySelector("base"),da?da.getAttribute("href"):null}function SR(t){return new URL(t,document.baseURI).pathname}var MR=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:t.\u0275fac})}return t})(),dD=["alt","control","meta","shift"],TR={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},AR={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},uD=(()=>{class t extends aa{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,r,i,o){let s=t.parseEventName(r),a=t.eventCallback(s.fullKey,i,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Qn().onAndCancel(e,s.domEventName,a,o))}static parseEventName(e){let r=e.toLowerCase().split("."),i=r.shift();if(r.length===0||!(i==="keydown"||i==="keyup"))return null;let o=t._normalizeKey(r.pop()),s="",a=r.indexOf("code");if(a>-1&&(r.splice(a,1),s="code."),dD.forEach(c=>{let d=r.indexOf(c);d>-1&&(r.splice(d,1),s+=c+".")}),s+=o,r.length!=0||o.length===0)return null;let l={};return l.domEventName=i,l.fullKey=s,l}static matchEventFullKeyCode(e,r){let i=TR[e.key]||e.key,o="";return r.indexOf("code.")>-1&&(i=e.code,o="code."),i==null||!i?!1:(i=i.toLowerCase(),i===" "?i="space":i==="."&&(i="dot"),dD.forEach(s=>{if(s!==i){let a=AR[s];a(e)&&(o+=s+".")}}),o+=i,o===r)}static eventCallback(e,r,i){return o=>{t.matchEventFullKeyCode(o,e)&&i.runGuarded(()=>r(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(r){return new(r||t)(T(B))};static \u0275prov=_({token:t,factory:t.\u0275fac})}return t})();async function Bm(t,n,e){let r=m({rootComponent:t},RR(n,e));return Kw(r)}function RR(t,n){return{platformRef:n?.platformRef,appProviders:[...PR,...t?.providers??[]],platformProviders:FR}}function kR(){Ad.makeCurrent()}function NR(){return new Rt}function OR(){return Hp(document),document}var FR=[{provide:vi,useValue:km},{provide:Kc,useValue:kR,multi:!0},{provide:B,useFactory:OR}];var PR=[{provide:As,useValue:"root"},{provide:Rt,useFactory:NR},{provide:Td,useClass:Id,multi:!0},{provide:Td,useClass:uD,multi:!0},Vm,Lm,Pm,{provide:it,useExisting:Vm},{provide:_i,useClass:MR},[]];var Mr=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(e=>{let r=e.indexOf(":");if(r>0){let i=e.slice(0,r),o=e.slice(r+1).trim();this.addHeaderEntry(i,o)}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((e,r)=>{this.addHeaderEntry(r,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([e,r])=>{this.setHeaderEntries(e,r)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let e=this.headers.get(n.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,e){return this.clone({name:n,value:e,op:"a"})}set(n,e){return this.clone({name:n,value:e,op:"s"})}delete(n,e){return this.clone({name:n,value:e,op:"d"})}maybeSetNormalizedName(n,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,n)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(e=>{this.headers.set(e,n.headers.get(e)),this.normalizedNames.set(e,n.normalizedNames.get(e))})}clone(n){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([n]),e}applyUpdate(n){let e=n.name.toLowerCase();switch(n.op){case"a":case"s":let r=n.value;if(typeof r=="string"&&(r=[r]),r.length===0)return;this.maybeSetNormalizedName(n.name,e);let i=(n.op==="a"?this.headers.get(e):void 0)||[];i.push(...r),this.headers.set(e,i);break;case"d":let o=n.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let s=this.headers.get(e);if(!s)return;s=s.filter(a=>o.indexOf(a)===-1),s.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,s)}break}}addHeaderEntry(n,e){let r=n.toLowerCase();this.maybeSetNormalizedName(n,r),this.headers.has(r)?this.headers.get(r).push(e):this.headers.set(r,[e])}setHeaderEntries(n,e){let r=(Array.isArray(e)?e:[e]).map(o=>o.toString()),i=n.toLowerCase();this.headers.set(i,r),this.maybeSetNormalizedName(n,i)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>n(this.normalizedNames.get(e),this.headers.get(e)))}};var kd=class{map=new Map;set(n,e){return this.map.set(n,e),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}},Nd=class{encodeKey(n){return fD(n)}encodeValue(n){return fD(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function LR(t,n){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(i=>{let o=i.indexOf("="),[s,a]=o==-1?[n.decodeKey(i),""]:[n.decodeKey(i.slice(0,o)),n.decodeValue(i.slice(o+1))],l=e.get(s)||[];l.push(a),e.set(s,l)}),e}var jR=/%(\d[a-f0-9])/gi,VR={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function fD(t){return encodeURIComponent(t).replace(jR,(n,e)=>VR[e]??n)}function Rd(t){return`${t}`}var Xn=class t{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new Nd,n.fromString){if(n.fromObject)throw new C(2805,!1);this.map=LR(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(e=>{let r=n.fromObject[e],i=Array.isArray(r)?r.map(Rd):[Rd(r)];this.map.set(e,i)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let e=this.map.get(n);return e?e[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,e){return this.clone({param:n,value:e,op:"a"})}appendAll(n){let e=[];return Object.keys(n).forEach(r=>{let i=n[r];Array.isArray(i)?i.forEach(o=>{e.push({param:r,value:o,op:"a"})}):e.push({param:r,value:i,op:"a"})}),this.clone(e)}set(n,e){return this.clone({param:n,value:e,op:"s"})}delete(n,e){return this.clone({param:n,value:e,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let e=this.encoder.encodeKey(n);return this.map.get(n).map(r=>e+"="+this.encoder.encodeValue(r)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(n),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":let e=(n.op==="a"?this.map.get(n.param):void 0)||[];e.push(Rd(n.value)),this.map.set(n.param,e);break;case"d":if(n.value!==void 0){let r=this.map.get(n.param)||[],i=r.indexOf(Rd(n.value));i!==-1&&r.splice(i,1),r.length>0?this.map.set(n.param,r):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null)}};function BR(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function hD(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function pD(t){return typeof Blob<"u"&&t instanceof Blob}function mD(t){return typeof FormData<"u"&&t instanceof FormData}function HR(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var gD="Content-Type",vD="Accept",bD="text/plain",_D="application/json",UR=`${_D}, ${bD}, */*`,go=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(n,e,r,i){this.url=e,this.method=n.toUpperCase();let o;if(BR(this.method)||i?(this.body=r!==void 0?r:null,o=i):o=r,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new C(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer!==void 0&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new Mr,this.context??=new kd,!this.params)this.params=new Xn,this.urlWithParams=e;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=e;else{let a=e.indexOf("?"),l=a===-1?"?":a<e.length-1?"&":"";this.urlWithParams=e+l+s}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||hD(this.body)||pD(this.body)||mD(this.body)||HR(this.body)?this.body:this.body instanceof Xn?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||mD(this.body)?null:pD(this.body)?this.body.type||null:hD(this.body)?null:typeof this.body=="string"?bD:this.body instanceof Xn?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?_D:null}clone(n={}){let e=n.method||this.method,r=n.url||this.url,i=n.responseType||this.responseType,o=n.keepalive??this.keepalive,s=n.priority||this.priority,a=n.cache||this.cache,l=n.mode||this.mode,c=n.redirect||this.redirect,d=n.credentials||this.credentials,f=n.referrer??this.referrer,h=n.integrity||this.integrity,p=n.referrerPolicy||this.referrerPolicy,y=n.transferCache??this.transferCache,E=n.timeout??this.timeout,S=n.body!==void 0?n.body:this.body,A=n.withCredentials??this.withCredentials,be=n.reportProgress??this.reportProgress,tt=n.headers||this.headers,nt=n.params||this.params,ss=n.context??this.context;return n.setHeaders!==void 0&&(tt=Object.keys(n.setHeaders).reduce((as,Pr)=>as.set(Pr,n.setHeaders[Pr]),tt)),n.setParams&&(nt=Object.keys(n.setParams).reduce((as,Pr)=>as.set(Pr,n.setParams[Pr]),nt)),new t(e,r,S,{params:nt,headers:tt,context:ss,reportProgress:be,responseType:i,withCredentials:A,transferCache:y,keepalive:o,cache:a,priority:s,timeout:E,mode:l,redirect:c,credentials:d,referrer:f,integrity:h,referrerPolicy:p})}},wi=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(wi||{}),yo=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(n,e=200,r="OK"){this.headers=n.headers||new Mr,this.status=n.status!==void 0?n.status:e,this.statusText=n.statusText||r,this.url=n.url||null,this.redirected=n.redirected,this.responseType=n.responseType,this.ok=this.status>=200&&this.status<300}},Od=class t extends yo{constructor(n={}){super(n)}type=wi.ResponseHeader;clone(n={}){return new t({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},ua=class t extends yo{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=wi.Response;clone(n={}){return new t({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0,redirected:n.redirected??this.redirected,responseType:n.responseType??this.responseType})}},vo=class extends yo{name="HttpErrorResponse";message;error;ok=!1;constructor(n){super(n,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},$R=200,zR=204;var GR=new g("");var WR=/^\)\]\}',?\n/;var Um=(()=>{class t{xhrFactory;tracingService=u(un,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new C(-2800,!1);let r=this.xhrFactory;return N(null).pipe(ve(()=>new G(o=>{let s=r.build();if(s.open(e.method,e.urlWithParams),e.withCredentials&&(s.withCredentials=!0),e.headers.forEach((S,A)=>s.setRequestHeader(S,A.join(","))),e.headers.has(vD)||s.setRequestHeader(vD,UR),!e.headers.has(gD)){let S=e.detectContentTypeHeader();S!==null&&s.setRequestHeader(gD,S)}if(e.timeout&&(s.timeout=e.timeout),e.responseType){let S=e.responseType.toLowerCase();s.responseType=S!=="json"?S:"text"}let a=e.serializeBody(),l=null,c=()=>{if(l!==null)return l;let S=s.statusText||"OK",A=new Mr(s.getAllResponseHeaders()),be=s.responseURL||e.url;return l=new Od({headers:A,status:s.status,statusText:S,url:be}),l},d=this.maybePropagateTrace(()=>{let{headers:S,status:A,statusText:be,url:tt}=c(),nt=null;A!==zR&&(nt=typeof s.response>"u"?s.responseText:s.response),A===0&&(A=nt?$R:0);let ss=A>=200&&A<300;if(e.responseType==="json"&&typeof nt=="string"){let as=nt;nt=nt.replace(WR,"");try{nt=nt!==""?JSON.parse(nt):null}catch(Pr){nt=as,ss&&(ss=!1,nt={error:Pr,text:nt})}}ss?(o.next(new ua({body:nt,headers:S,status:A,statusText:be,url:tt||void 0})),o.complete()):o.error(new vo({error:nt,headers:S,status:A,statusText:be,url:tt||void 0}))}),f=this.maybePropagateTrace(S=>{let{url:A}=c(),be=new vo({error:S,status:s.status||0,statusText:s.statusText||"Unknown Error",url:A||void 0});o.error(be)}),h=f;e.timeout&&(h=this.maybePropagateTrace(S=>{let{url:A}=c(),be=new vo({error:new DOMException("Request timed out","TimeoutError"),status:s.status||0,statusText:s.statusText||"Request timeout",url:A||void 0});o.error(be)}));let p=!1,y=this.maybePropagateTrace(S=>{p||(o.next(c()),p=!0);let A={type:wi.DownloadProgress,loaded:S.loaded};S.lengthComputable&&(A.total=S.total),e.responseType==="text"&&s.responseText&&(A.partialText=s.responseText),o.next(A)}),E=this.maybePropagateTrace(S=>{let A={type:wi.UploadProgress,loaded:S.loaded};S.lengthComputable&&(A.total=S.total),o.next(A)});return s.addEventListener("load",d),s.addEventListener("error",f),s.addEventListener("timeout",h),s.addEventListener("abort",f),e.reportProgress&&(s.addEventListener("progress",y),a!==null&&s.upload&&s.upload.addEventListener("progress",E)),s.send(a),o.next({type:wi.Sent}),()=>{s.removeEventListener("error",f),s.removeEventListener("abort",f),s.removeEventListener("load",d),s.removeEventListener("timeout",h),e.reportProgress&&(s.removeEventListener("progress",y),a!==null&&s.upload&&s.upload.removeEventListener("progress",E)),s.readyState!==s.DONE&&s.abort()}})))}static \u0275fac=function(r){return new(r||t)(T(_i))};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function wD(t,n){return n(t)}function qR(t,n){return(e,r)=>n.intercept(e,{handle:i=>t(i,r)})}function YR(t,n,e){return(r,i)=>Ye(e,()=>n(r,o=>t(o,i)))}var DD=new g(""),$m=new g("",{factory:()=>[]}),CD=new g(""),zm=new g("",{factory:()=>!0});function ZR(){let t=null;return(n,e)=>{t===null&&(t=(u(DD,{optional:!0})??[]).reduceRight(qR,wD));let r=u(ro);if(u(zm)){let o=r.add();return t(n,e).pipe(dr(o))}else return t(n,e)}}var Gm=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:function(r){let i=null;return r?i=new(r||t):i=T(Um),i},providedIn:"root"})}return t})();var Fd=(()=>{class t{backend;injector;chain=null;pendingTasks=u(ro);contributeToStability=u(zm);constructor(e,r){this.backend=e,this.injector=r}handle(e){if(this.chain===null){let r=Array.from(new Set([...this.injector.get($m),...this.injector.get(CD,[])]));this.chain=r.reduceRight((i,o)=>YR(i,o,this.injector),wD)}if(this.contributeToStability){let r=this.pendingTasks.add();return this.chain(e,i=>this.backend.handle(i)).pipe(dr(r))}else return this.chain(e,r=>this.backend.handle(r))}static \u0275fac=function(r){return new(r||t)(T(Gm),T(Ie))};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Wm=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:function(r){let i=null;return r?i=new(r||t):i=T(Fd),i},providedIn:"root"})}return t})();function Hm(t,n){return{body:n,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,credentials:t.credentials,transferCache:t.transferCache,timeout:t.timeout,keepalive:t.keepalive,priority:t.priority,cache:t.cache,mode:t.mode,redirect:t.redirect,integrity:t.integrity,referrer:t.referrer,referrerPolicy:t.referrerPolicy}}var bo=(()=>{class t{handler;constructor(e){this.handler=e}request(e,r,i={}){let o;if(e instanceof go)o=e;else{let l;i.headers instanceof Mr?l=i.headers:l=new Mr(i.headers);let c;i.params&&(i.params instanceof Xn?c=i.params:c=new Xn({fromObject:i.params})),o=new go(e,r,i.body!==void 0?i.body:null,{headers:l,context:i.context,params:c,reportProgress:i.reportProgress,responseType:i.responseType||"json",withCredentials:i.withCredentials,transferCache:i.transferCache,keepalive:i.keepalive,priority:i.priority,cache:i.cache,mode:i.mode,redirect:i.redirect,credentials:i.credentials,referrer:i.referrer,referrerPolicy:i.referrerPolicy,integrity:i.integrity,timeout:i.timeout})}let s=N(o).pipe(Wi(l=>this.handler.handle(l)));if(e instanceof go||i.observe==="events")return s;let a=s.pipe(le(l=>l instanceof ua));switch(i.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return a.pipe(I(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new C(2806,!1);return l.body}));case"blob":return a.pipe(I(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new C(2807,!1);return l.body}));case"text":return a.pipe(I(l=>{if(l.body!==null&&typeof l.body!="string")throw new C(2808,!1);return l.body}));default:return a.pipe(I(l=>l.body))}case"response":return a;default:throw new C(2809,!1)}}delete(e,r={}){return this.request("DELETE",e,r)}get(e,r={}){return this.request("GET",e,r)}head(e,r={}){return this.request("HEAD",e,r)}jsonp(e,r){return this.request("JSONP",e,{params:new Xn().append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,r={}){return this.request("OPTIONS",e,r)}patch(e,r,i={}){return this.request("PATCH",e,Hm(i,r))}post(e,r,i={}){return this.request("POST",e,Hm(i,r))}put(e,r,i={}){return this.request("PUT",e,Hm(i,r))}static \u0275fac=function(r){return new(r||t)(T(Wm))};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var KR=new g("",{factory:()=>!0}),QR="XSRF-TOKEN",XR=new g("",{factory:()=>QR}),JR="X-XSRF-TOKEN",ek=new g("",{factory:()=>JR}),tk=(()=>{class t{cookieName=u(XR);doc=u(B);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=sa(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ED=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:function(r){let i=null;return r?i=new(r||t):i=T(tk),i},providedIn:"root"})}return t})();function nk(t,n){if(!u(KR)||t.method==="GET"||t.method==="HEAD")return n(t);try{let i=u(mo).href,{origin:o}=new URL(i),{origin:s}=new URL(t.url,o);if(o!==s)return n(t)}catch{return n(t)}let e=u(ED).getToken(),r=u(ek);return e!=null&&!t.headers.has(r)&&(t=t.clone({headers:t.headers.set(r,e)})),n(t)}var qm=(function(t){return t[t.Interceptors=0]="Interceptors",t[t.LegacyInterceptors=1]="LegacyInterceptors",t[t.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",t[t.NoXsrfProtection=3]="NoXsrfProtection",t[t.JsonpSupport=4]="JsonpSupport",t[t.RequestsMadeViaParent=5]="RequestsMadeViaParent",t[t.Fetch=6]="Fetch",t})(qm||{});function rk(t,n){return{\u0275kind:t,\u0275providers:n}}function Ym(...t){let n=[bo,Fd,{provide:Wm,useExisting:Fd},{provide:Gm,useFactory:()=>u(GR,{optional:!0})??u(Um)},{provide:$m,useValue:nk,multi:!0}];for(let e of t)n.push(...e.\u0275providers);return ct(n)}var yD=new g("");function Zm(){return rk(qm.LegacyInterceptors,[{provide:yD,useFactory:ZR},{provide:$m,useExisting:yD,multi:!0}])}var xD=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(r){return new(r||t)(T(B))};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var fa=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:function(r){let i=null;return r?i=new(r||t):i=T(ok),i},providedIn:"root"})}return t})(),ok=(()=>{class t extends fa{_doc;constructor(e){super(),this._doc=e}sanitize(e,r){if(r==null)return null;switch(e){case Qe.NONE:return r;case Qe.HTML:return $n(r,"HTML")?dn(r):Jc(this._doc,String(r)).toString();case Qe.STYLE:return $n(r,"Style")?dn(r):r;case Qe.SCRIPT:if($n(r,"Script"))return dn(r);throw new C(5200,!1);case Qe.URL:return $n(r,"URL")?dn(r):qs(String(r));case Qe.RESOURCE_URL:if($n(r,"ResourceURL"))return dn(r);throw new C(5201,!1);default:throw new C(5202,!1)}}bypassSecurityTrustHtml(e){return $p(e)}bypassSecurityTrustStyle(e){return zp(e)}bypassSecurityTrustScript(e){return Gp(e)}bypassSecurityTrustUrl(e){return Wp(e)}bypassSecurityTrustResourceUrl(e){return qp(e)}static \u0275fac=function(r){return new(r||t)(T(B))};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Tr(t){t||(t=u(Fe));let n=new G(e=>{if(t.destroyed){e.next();return}return t.onDestroy(e.next.bind(e))});return e=>e.pipe(ue(n))}function _o(t,n){let r=!n?.manualCleanup?n?.injector?.get(Fe)??u(Fe):null,i=sk(n?.equal),o;n?.requireSync?o=ie({kind:0},{equal:i}):o=ie({kind:1,value:n?.initialValue},{equal:i});let s,a=t.subscribe({next:l=>o.set({kind:1,value:l}),error:l=>{o.set({kind:2,error:l}),s?.()},complete:()=>{s?.()}});if(n?.requireSync&&o().kind===0)throw new C(601,!1);return s=r?.onDestroy(a.unsubscribe.bind(a)),bt(()=>{let l=o();switch(l.kind){case 1:return l.value;case 2:throw l.error;case 0:throw new C(601,!1)}},{equal:n?.equal})}function sk(t=Object.is){return(n,e)=>n.kind===1&&e.kind===1&&t(n.value,e.value)}var ne="primary",Ia=Symbol("RouteTitle"),eg=class{params;constructor(n){this.params=n||{}}has(n){return Object.prototype.hasOwnProperty.call(this.params,n)}get(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e[0]:e}return null}getAll(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function Ci(t){return new eg(t)}function Km(t,n,e){for(let r=0;r<t.length;r++){let i=t[r],o=n[r];if(i[0]===":")e[i.substring(1)]=o;else if(i!==o.path)return!1}return!0}function OD(t,n,e){let r=e.path.split("/"),i=r.indexOf("**");if(i===-1){if(r.length>t.length||e.pathMatch==="full"&&(n.hasChildren()||r.length<t.length))return null;let l={},c=t.slice(0,r.length);return Km(r,c,l)?{consumed:c,posParams:l}:null}if(i!==r.lastIndexOf("**"))return null;let o=r.slice(0,i),s=r.slice(i+1);if(o.length+s.length>t.length||e.pathMatch==="full"&&n.hasChildren()&&e.path!=="**")return null;let a={};return!Km(o,t.slice(0,o.length),a)||!Km(s,t.slice(t.length-s.length),a)?null:{consumed:t,posParams:a}}function Hd(t){return new Promise((n,e)=>{t.pipe(On()).subscribe({next:r=>n(r),error:r=>e(r)})})}function ak(t,n){if(t.length!==n.length)return!1;for(let e=0;e<t.length;++e)if(!In(t[e],n[e]))return!1;return!0}function In(t,n){let e=t?tg(t):void 0,r=n?tg(n):void 0;if(!e||!r||e.length!=r.length)return!1;let i;for(let o=0;o<e.length;o++)if(i=e[o],!FD(t[i],n[i]))return!1;return!0}function tg(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function FD(t,n){if(Array.isArray(t)&&Array.isArray(n)){if(t.length!==n.length)return!1;let e=[...t].sort(),r=[...n].sort();return e.every((i,o)=>r[o]===i)}else return t===n}function lk(t){return t.length>0?t[t.length-1]:null}function Ii(t){return gs(t)?t:Er(t)?Me(Promise.resolve(t)):N(t)}function PD(t){return gs(t)?Hd(t):Promise.resolve(t)}var ck={exact:VD,subset:BD},LD={exact:dk,subset:uk,ignored:()=>!0},jD={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},ng={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function SD(t,n,e){return ck[e.paths](t.root,n.root,e.matrixParams)&&LD[e.queryParams](t.queryParams,n.queryParams)&&!(e.fragment==="exact"&&t.fragment!==n.fragment)}function dk(t,n){return In(t,n)}function VD(t,n,e){if(!Di(t.segments,n.segments)||!jd(t.segments,n.segments,e)||t.numberOfChildren!==n.numberOfChildren)return!1;for(let r in n.children)if(!t.children[r]||!VD(t.children[r],n.children[r],e))return!1;return!0}function uk(t,n){return Object.keys(n).length<=Object.keys(t).length&&Object.keys(n).every(e=>FD(t[e],n[e]))}function BD(t,n,e){return HD(t,n,n.segments,e)}function HD(t,n,e,r){if(t.segments.length>e.length){let i=t.segments.slice(0,e.length);return!(!Di(i,e)||n.hasChildren()||!jd(i,e,r))}else if(t.segments.length===e.length){if(!Di(t.segments,e)||!jd(t.segments,e,r))return!1;for(let i in n.children)if(!t.children[i]||!BD(t.children[i],n.children[i],r))return!1;return!0}else{let i=e.slice(0,t.segments.length),o=e.slice(t.segments.length);return!Di(t.segments,i)||!jd(t.segments,i,r)||!t.children[ne]?!1:HD(t.children[ne],n,o,r)}}function jd(t,n,e){return n.every((r,i)=>LD[e](t[i].parameters,r.parameters))}var Zt=class{root;queryParams;fragment;_queryParamMap;constructor(n=new _e([],{}),e={},r=null){this.root=n,this.queryParams=e,this.fragment=r}get queryParamMap(){return this._queryParamMap??=Ci(this.queryParams),this._queryParamMap}toString(){return pk.serialize(this)}},_e=class{segments;children;parent=null;constructor(n,e){this.segments=n,this.children=e,Object.values(e).forEach(r=>r.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Vd(this)}},Ar=class{path;parameters;_parameterMap;constructor(n,e){this.path=n,this.parameters=e}get parameterMap(){return this._parameterMap??=Ci(this.parameters),this._parameterMap}toString(){return $D(this)}};function fk(t,n){return Di(t,n)&&t.every((e,r)=>In(e.parameters,n[r].parameters))}function Di(t,n){return t.length!==n.length?!1:t.every((e,r)=>e.path===n[r].path)}function hk(t,n){let e=[];return Object.entries(t.children).forEach(([r,i])=>{r===ne&&(e=e.concat(n(i,r)))}),Object.entries(t.children).forEach(([r,i])=>{r!==ne&&(e=e.concat(n(i,r)))}),e}var Sa=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:()=>new Rr,providedIn:"root"})}return t})(),Rr=class{parse(n){let e=new ig(n);return new Zt(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(n){let e=`/${ha(n.root,!0)}`,r=vk(n.queryParams),i=typeof n.fragment=="string"?`#${mk(n.fragment)}`:"";return`${e}${r}${i}`}},pk=new Rr;function Vd(t){return t.segments.map(n=>$D(n)).join("/")}function ha(t,n){if(!t.hasChildren())return Vd(t);if(n){let e=t.children[ne]?ha(t.children[ne],!1):"",r=[];return Object.entries(t.children).forEach(([i,o])=>{i!==ne&&r.push(`${i}:${ha(o,!1)}`)}),r.length>0?`${e}(${r.join("//")})`:e}else{let e=hk(t,(r,i)=>i===ne?[ha(t.children[ne],!1)]:[`${i}:${ha(r,!1)}`]);return Object.keys(t.children).length===1&&t.children[ne]!=null?`${Vd(t)}/${e[0]}`:`${Vd(t)}/(${e.join("//")})`}}function UD(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Pd(t){return UD(t).replace(/%3B/gi,";")}function mk(t){return encodeURI(t)}function rg(t){return UD(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Bd(t){return decodeURIComponent(t)}function MD(t){return Bd(t.replace(/\+/g,"%20"))}function $D(t){return`${rg(t.path)}${gk(t.parameters)}`}function gk(t){return Object.entries(t).map(([n,e])=>`;${rg(n)}=${rg(e)}`).join("")}function vk(t){let n=Object.entries(t).map(([e,r])=>Array.isArray(r)?r.map(i=>`${Pd(e)}=${Pd(i)}`).join("&"):`${Pd(e)}=${Pd(r)}`).filter(e=>e);return n.length?`?${n.join("&")}`:""}var yk=/^[^\/()?;#]+/;function Qm(t){let n=t.match(yk);return n?n[0]:""}var bk=/^[^\/()?;=#]+/;function _k(t){let n=t.match(bk);return n?n[0]:""}var wk=/^[^=?&#]+/;function Dk(t){let n=t.match(wk);return n?n[0]:""}var Ck=/^[^&#]+/;function Ek(t){let n=t.match(Ck);return n?n[0]:""}var ig=class{url;remaining;constructor(n){this.url=n,this.remaining=n}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new _e([],{}):new _e([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional("?"))do this.parseQueryParam(n);while(this.consumeOptional("&"));return n}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(n=0){if(n>50)throw new C(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let r={};this.peekStartsWith("/(")&&(this.capture("/"),r=this.parseParens(!0,n));let i={};return this.peekStartsWith("(")&&(i=this.parseParens(!1,n)),(e.length>0||Object.keys(r).length>0)&&(i[ne]=new _e(e,r)),i}parseSegment(){let n=Qm(this.remaining);if(n===""&&this.peekStartsWith(";"))throw new C(4009,!1);return this.capture(n),new Ar(Bd(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(";");)this.parseParam(n);return n}parseParam(n){let e=_k(this.remaining);if(!e)return;this.capture(e);let r="";if(this.consumeOptional("=")){let i=Qm(this.remaining);i&&(r=i,this.capture(r))}n[Bd(e)]=Bd(r)}parseQueryParam(n){let e=Dk(this.remaining);if(!e)return;this.capture(e);let r="";if(this.consumeOptional("=")){let s=Ek(this.remaining);s&&(r=s,this.capture(r))}let i=MD(e),o=MD(r);if(n.hasOwnProperty(i)){let s=n[i];Array.isArray(s)||(s=[s],n[i]=s),s.push(o)}else n[i]=o}parseParens(n,e){let r={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let i=Qm(this.remaining),o=this.remaining[i.length];if(o!=="/"&&o!==")"&&o!==";")throw new C(4010,!1);let s;i.indexOf(":")>-1?(s=i.slice(0,i.indexOf(":")),this.capture(s),this.capture(":")):n&&(s=ne);let a=this.parseChildren(e+1);r[s??ne]=Object.keys(a).length===1&&a[ne]?a[ne]:new _e([],a),this.consumeOptional("//")}return r}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new C(4011,!1)}};function zD(t){return t.segments.length>0?new _e([],{[ne]:t}):t}function GD(t){let n={};for(let[r,i]of Object.entries(t.children)){let o=GD(i);if(r===ne&&o.segments.length===0&&o.hasChildren())for(let[s,a]of Object.entries(o.children))n[s]=a;else(o.segments.length>0||o.hasChildren())&&(n[r]=o)}let e=new _e(t.segments,n);return xk(e)}function xk(t){if(t.numberOfChildren===1&&t.children[ne]){let n=t.children[ne];return new _e(t.segments.concat(n.segments),n.children)}return t}function Eo(t){return t instanceof Zt}function WD(t,n,e=null,r=null,i=new Rr){let o=qD(t);return YD(o,n,e,r,i)}function qD(t){let n;function e(o){let s={};for(let l of o.children){let c=e(l);s[l.outlet]=c}let a=new _e(o.url,s);return o===t&&(n=a),a}let r=e(t.root),i=zD(r);return n??i}function YD(t,n,e,r,i){let o=t;for(;o.parent;)o=o.parent;if(n.length===0)return Xm(o,o,o,e,r,i);let s=Ik(n);if(s.toRoot())return Xm(o,o,new _e([],{}),e,r,i);let a=Sk(s,o,t),l=a.processChildren?ma(a.segmentGroup,a.index,s.commands):KD(a.segmentGroup,a.index,s.commands);return Xm(o,a.segmentGroup,l,e,r,i)}function Ud(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function ya(t){return typeof t=="object"&&t!=null&&t.outlets}function TD(t,n,e){t||="\u0275";let r=new Zt;return r.queryParams={[t]:n},e.parse(e.serialize(r)).queryParams[t]}function Xm(t,n,e,r,i,o){let s={};for(let[c,d]of Object.entries(r??{}))s[c]=Array.isArray(d)?d.map(f=>TD(c,f,o)):TD(c,d,o);let a;t===n?a=e:a=ZD(t,n,e);let l=zD(GD(a));return new Zt(l,s,i)}function ZD(t,n,e){let r={};return Object.entries(t.children).forEach(([i,o])=>{o===n?r[i]=e:r[i]=ZD(o,n,e)}),new _e(t.segments,r)}var $d=class{isAbsolute;numberOfDoubleDots;commands;constructor(n,e,r){if(this.isAbsolute=n,this.numberOfDoubleDots=e,this.commands=r,n&&r.length>0&&Ud(r[0]))throw new C(4003,!1);let i=r.find(ya);if(i&&i!==lk(r))throw new C(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function Ik(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new $d(!0,0,t);let n=0,e=!1,r=t.reduce((i,o,s)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let a={};return Object.entries(o.outlets).forEach(([l,c])=>{a[l]=typeof c=="string"?c.split("/"):c}),[...i,{outlets:a}]}if(o.segmentPath)return[...i,o.segmentPath]}return typeof o!="string"?[...i,o]:s===0?(o.split("/").forEach((a,l)=>{l==0&&a==="."||(l==0&&a===""?e=!0:a===".."?n++:a!=""&&i.push(a))}),i):[...i,o]},[]);return new $d(e,n,r)}var Do=class{segmentGroup;processChildren;index;constructor(n,e,r){this.segmentGroup=n,this.processChildren=e,this.index=r}};function Sk(t,n,e){if(t.isAbsolute)return new Do(n,!0,0);if(!e)return new Do(n,!1,NaN);if(e.parent===null)return new Do(e,!0,0);let r=Ud(t.commands[0])?0:1,i=e.segments.length-1+r;return Mk(e,i,t.numberOfDoubleDots)}function Mk(t,n,e){let r=t,i=n,o=e;for(;o>i;){if(o-=i,r=r.parent,!r)throw new C(4005,!1);i=r.segments.length}return new Do(r,!1,i-o)}function Tk(t){return ya(t[0])?t[0].outlets:{[ne]:t}}function KD(t,n,e){if(t??=new _e([],{}),t.segments.length===0&&t.hasChildren())return ma(t,n,e);let r=Ak(t,n,e),i=e.slice(r.commandIndex);if(r.match&&r.pathIndex<t.segments.length){let o=new _e(t.segments.slice(0,r.pathIndex),{});return o.children[ne]=new _e(t.segments.slice(r.pathIndex),t.children),ma(o,0,i)}else return r.match&&i.length===0?new _e(t.segments,{}):r.match&&!t.hasChildren()?og(t,n,e):r.match?ma(t,0,i):og(t,n,e)}function ma(t,n,e){if(e.length===0)return new _e(t.segments,{});{let r=Tk(e),i={};if(Object.keys(r).some(o=>o!==ne)&&t.children[ne]&&t.numberOfChildren===1&&t.children[ne].segments.length===0){let o=ma(t.children[ne],n,e);return new _e(t.segments,o.children)}return Object.entries(r).forEach(([o,s])=>{typeof s=="string"&&(s=[s]),s!==null&&(i[o]=KD(t.children[o],n,s))}),Object.entries(t.children).forEach(([o,s])=>{r[o]===void 0&&(i[o]=s)}),new _e(t.segments,i)}}function Ak(t,n,e){let r=0,i=n,o={match:!1,pathIndex:0,commandIndex:0};for(;i<t.segments.length;){if(r>=e.length)return o;let s=t.segments[i],a=e[r];if(ya(a))break;let l=`${a}`,c=r<e.length-1?e[r+1]:null;if(i>0&&l===void 0)break;if(l&&c&&typeof c=="object"&&c.outlets===void 0){if(!RD(l,c,s))return o;r+=2}else{if(!RD(l,{},s))return o;r++}i++}return{match:!0,pathIndex:i,commandIndex:r}}function og(t,n,e){let r=t.segments.slice(0,n),i=0;for(;i<e.length;){let o=e[i];if(ya(o)){let l=Rk(o.outlets);return new _e(r,l)}if(i===0&&Ud(e[0])){let l=t.segments[n];r.push(new Ar(l.path,AD(e[0]))),i++;continue}let s=ya(o)?o.outlets[ne]:`${o}`,a=i<e.length-1?e[i+1]:null;s&&a&&Ud(a)?(r.push(new Ar(s,AD(a))),i+=2):(r.push(new Ar(s,{})),i++)}return new _e(r,{})}function Rk(t){let n={};return Object.entries(t).forEach(([e,r])=>{typeof r=="string"&&(r=[r]),r!==null&&(n[e]=og(new _e([],{}),0,r))}),n}function AD(t){let n={};return Object.entries(t).forEach(([e,r])=>n[e]=`${r}`),n}function RD(t,n,e){return t==e.path&&In(n,e.parameters)}var ga="imperative",st=(function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t})(st||{}),Bt=class{id;url;constructor(n,e){this.id=n,this.url=e}},Ei=class extends Bt{type=st.NavigationStart;navigationTrigger;restoredState;constructor(n,e,r="imperative",i=null){super(n,e),this.navigationTrigger=r,this.restoredState=i}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},er=class extends Bt{urlAfterRedirects;type=st.NavigationEnd;constructor(n,e,r){super(n,e),this.urlAfterRedirects=r}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},_t=(function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t[t.Aborted=4]="Aborted",t})(_t||{}),ba=(function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t})(ba||{}),Yt=class extends Bt{reason;code;type=st.NavigationCancel;constructor(n,e,r,i){super(n,e),this.reason=r,this.code=i}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function QD(t){return t instanceof Yt&&(t.code===_t.Redirect||t.code===_t.SupersededByNewNavigation)}var tr=class extends Bt{reason;code;type=st.NavigationSkipped;constructor(n,e,r,i){super(n,e),this.reason=r,this.code=i}},xi=class extends Bt{error;target;type=st.NavigationError;constructor(n,e,r,i){super(n,e),this.error=r,this.target=i}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},_a=class extends Bt{urlAfterRedirects;state;type=st.RoutesRecognized;constructor(n,e,r,i){super(n,e),this.urlAfterRedirects=r,this.state=i}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},zd=class extends Bt{urlAfterRedirects;state;type=st.GuardsCheckStart;constructor(n,e,r,i){super(n,e),this.urlAfterRedirects=r,this.state=i}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Gd=class extends Bt{urlAfterRedirects;state;shouldActivate;type=st.GuardsCheckEnd;constructor(n,e,r,i,o){super(n,e),this.urlAfterRedirects=r,this.state=i,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Wd=class extends Bt{urlAfterRedirects;state;type=st.ResolveStart;constructor(n,e,r,i){super(n,e),this.urlAfterRedirects=r,this.state=i}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},qd=class extends Bt{urlAfterRedirects;state;type=st.ResolveEnd;constructor(n,e,r,i){super(n,e),this.urlAfterRedirects=r,this.state=i}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Yd=class{route;type=st.RouteConfigLoadStart;constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Zd=class{route;type=st.RouteConfigLoadEnd;constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Kd=class{snapshot;type=st.ChildActivationStart;constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Qd=class{snapshot;type=st.ChildActivationEnd;constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Xd=class{snapshot;type=st.ActivationStart;constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Jd=class{snapshot;type=st.ActivationEnd;constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var xo=class{},wa=class{},Io=class{url;navigationBehaviorOptions;constructor(n,e){this.url=n,this.navigationBehaviorOptions=e}};function kk(t){return!(t instanceof xo)&&!(t instanceof Io)&&!(t instanceof wa)}var eu=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(n){this.rootInjector=n,this.children=new Ao(this.rootInjector)}},Ao=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,r){let i=this.getOrCreateContext(e);i.outlet=r,this.contexts.set(e,i)}onChildOutletDestroyed(e){let r=this.getContext(e);r&&(r.outlet=null,r.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let r=this.getContext(e);return r||(r=new eu(this.rootInjector),this.contexts.set(e,r)),r}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(r){return new(r||t)(T(Ie))};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),tu=class{_root;constructor(n){this._root=n}get root(){return this._root.value}parent(n){let e=this.pathFromRoot(n);return e.length>1?e[e.length-2]:null}children(n){let e=sg(n,this._root);return e?e.children.map(r=>r.value):[]}firstChild(n){let e=sg(n,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(n){let e=ag(n,this._root);return e.length<2?[]:e[e.length-2].children.map(i=>i.value).filter(i=>i!==n)}pathFromRoot(n){return ag(n,this._root).map(e=>e.value)}};function sg(t,n){if(t===n.value)return n;for(let e of n.children){let r=sg(t,e);if(r)return r}return null}function ag(t,n){if(t===n.value)return[n];for(let e of n.children){let r=ag(t,e);if(r.length)return r.unshift(n),r}return[]}var Vt=class{value;children;constructor(n,e){this.value=n,this.children=e}toString(){return`TreeNode(${this.value})`}};function wo(t){let n={};return t&&t.children.forEach(e=>n[e.value.outlet]=e),n}var Da=class extends tu{snapshot;constructor(n,e){super(n),this.snapshot=e,gg(this,n)}toString(){return this.snapshot.toString()}};function XD(t,n){let e=Nk(t,n),r=new je([new Ar("",{})]),i=new je({}),o=new je({}),s=new je({}),a=new je(""),l=new kr(r,i,s,a,o,ne,t,e.root);return l.snapshot=e.root,new Da(new Vt(l,[]),e)}function Nk(t,n){let e={},r={},i={},s=new So([],e,i,"",r,ne,t,null,{},n);return new Ca("",new Vt(s,[]))}var kr=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(n,e,r,i,o,s,a,l){this.urlSubject=n,this.paramsSubject=e,this.queryParamsSubject=r,this.fragmentSubject=i,this.dataSubject=o,this.outlet=s,this.component=a,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(I(c=>c[Ia]))??N(void 0),this.url=n,this.params=e,this.queryParams=r,this.fragment=i,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(I(n=>Ci(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(I(n=>Ci(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function mg(t,n,e="emptyOnly"){let r,{routeConfig:i}=t;return n!==null&&(e==="always"||i?.path===""||!n.component&&!n.routeConfig?.loadComponent)?r={params:m(m({},n.params),t.params),data:m(m({},n.data),t.data),resolve:m(m(m(m({},t.data),n.data),i?.data),t._resolvedData)}:r={params:m({},t.params),data:m({},t.data),resolve:m(m({},t.data),t._resolvedData??{})},i&&eC(i)&&(r.resolve[Ia]=i.title),r}var So=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[Ia]}constructor(n,e,r,i,o,s,a,l,c,d){this.url=n,this.params=e,this.queryParams=r,this.fragment=i,this.data=o,this.outlet=s,this.component=a,this.routeConfig=l,this._resolve=c,this._environmentInjector=d}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Ci(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Ci(this.queryParams),this._queryParamMap}toString(){let n=this.url.map(r=>r.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${n}', path:'${e}')`}},Ca=class extends tu{url;constructor(n,e){super(e),this.url=n,gg(this,e)}toString(){return JD(this._root)}};function gg(t,n){n.value._routerState=t,n.children.forEach(e=>gg(t,e))}function JD(t){let n=t.children.length>0?` { ${t.children.map(JD).join(", ")} } `:"";return`${t.value}${n}`}function Jm(t){if(t.snapshot){let n=t.snapshot,e=t._futureSnapshot;t.snapshot=e,In(n.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),n.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),In(n.params,e.params)||t.paramsSubject.next(e.params),ak(n.url,e.url)||t.urlSubject.next(e.url),In(n.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function lg(t,n){let e=In(t.params,n.params)&&fk(t.url,n.url),r=!t.parent!=!n.parent;return e&&!r&&(!t.parent||lg(t.parent,n.parent))}function eC(t){return typeof t.title=="string"||t.title===null}var tC=new g(""),Ma=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=ne;activateEvents=new W;deactivateEvents=new W;attachEvents=new W;detachEvents=new W;routerOutletData=Cd();parentContexts=u(Ao);location=u(ft);changeDetector=u(Te);inputBinder=u(ou,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:r,previousValue:i}=e.name;if(r)return;this.isTrackedInParentContexts(i)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(i)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new C(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new C(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new C(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,r){this.activated=e,this._activatedRoute=r,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,r){if(this.isActivated)throw new C(4013,!1);this._activatedRoute=e;let i=this.location,s=e.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,l=new cg(e,a,i.injector,this.routerOutletData);this.activated=i.createComponent(s,{index:i.length,injector:l,environmentInjector:r}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(r){return new(r||t)};static \u0275dir=Y({type:t,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[ut]})}return t})(),cg=class{route;childContexts;parent;outletData;constructor(n,e,r,i){this.route=n,this.childContexts=e,this.parent=r,this.outletData=i}get(n,e){return n===kr?this.route:n===Ao?this.childContexts:n===tC?this.outletData:this.parent.get(n,e)}},ou=new g("");var vg=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275cmp=M({type:t,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(r,i){r&1&&he(0,"router-outlet")},dependencies:[Ma],encapsulation:2})}return t})();function yg(t){let n=t.children&&t.children.map(yg),e=n?U(m({},t),{children:n}):m({},t);return!e.component&&!e.loadComponent&&(n||e.loadChildren)&&e.outlet&&e.outlet!==ne&&(e.component=vg),e}function Ok(t,n,e){let r=Ea(t,n._root,e?e._root:void 0);return new Da(r,n)}function Ea(t,n,e){if(e&&t.shouldReuseRoute(n.value,e.value.snapshot)){let r=e.value;r._futureSnapshot=n.value;let i=Fk(t,n,e);return new Vt(r,i)}else{if(t.shouldAttach(n.value)){let o=t.retrieve(n.value);if(o!==null){let s=o.route;return s.value._futureSnapshot=n.value,s.children=n.children.map(a=>Ea(t,a)),s}}let r=Pk(n.value),i=n.children.map(o=>Ea(t,o));return new Vt(r,i)}}function Fk(t,n,e){return n.children.map(r=>{for(let i of e.children)if(t.shouldReuseRoute(r.value,i.value.snapshot))return Ea(t,r,i);return Ea(t,r)})}function Pk(t){return new kr(new je(t.url),new je(t.params),new je(t.queryParams),new je(t.fragment),new je(t.data),t.outlet,t.component,t)}var Mo=class{redirectTo;navigationBehaviorOptions;constructor(n,e){this.redirectTo=n,this.navigationBehaviorOptions=e}},nC="ngNavigationCancelingError";function nu(t,n){let{redirectTo:e,navigationBehaviorOptions:r}=Eo(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,i=rC(!1,_t.Redirect);return i.url=e,i.navigationBehaviorOptions=r,i}function rC(t,n){let e=new Error(`NavigationCancelingError: ${t||""}`);return e[nC]=!0,e.cancellationCode=n,e}function Lk(t){return iC(t)&&Eo(t.url)}function iC(t){return!!t&&t[nC]}var dg=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(n,e,r,i,o){this.routeReuseStrategy=n,this.futureState=e,this.currState=r,this.forwardEvent=i,this.inputBindingEnabled=o}activate(n){let e=this.futureState._root,r=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,r,n),Jm(this.futureState.root),this.activateChildRoutes(e,r,n)}deactivateChildRoutes(n,e,r){let i=wo(e);n.children.forEach(o=>{let s=o.value.outlet;this.deactivateRoutes(o,i[s],r),delete i[s]}),Object.values(i).forEach(o=>{this.deactivateRouteAndItsChildren(o,r)})}deactivateRoutes(n,e,r){let i=n.value,o=e?e.value:null;if(i===o)if(i.component){let s=r.getContext(i.outlet);s&&this.deactivateChildRoutes(n,e,s.children)}else this.deactivateChildRoutes(n,e,r);else o&&this.deactivateRouteAndItsChildren(e,r)}deactivateRouteAndItsChildren(n,e){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,e):this.deactivateRouteAndOutlet(n,e)}detachAndStoreRouteSubtree(n,e){let r=e.getContext(n.value.outlet),i=r&&n.value.component?r.children:e,o=wo(n);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,i);if(r&&r.outlet){let s=r.outlet.detach(),a=r.children.onOutletDeactivated();this.routeReuseStrategy.store(n.value.snapshot,{componentRef:s,route:n,contexts:a})}}deactivateRouteAndOutlet(n,e){let r=e.getContext(n.value.outlet),i=r&&n.value.component?r.children:e,o=wo(n);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,i);r&&(r.outlet&&(r.outlet.deactivate(),r.children.onOutletDeactivated()),r.attachRef=null,r.route=null)}activateChildRoutes(n,e,r){let i=wo(e);n.children.forEach(o=>{this.activateRoutes(o,i[o.value.outlet],r),this.forwardEvent(new Jd(o.value.snapshot))}),n.children.length&&this.forwardEvent(new Qd(n.value.snapshot))}activateRoutes(n,e,r){let i=n.value,o=e?e.value:null;if(Jm(i),i===o)if(i.component){let s=r.getOrCreateContext(i.outlet);this.activateChildRoutes(n,e,s.children)}else this.activateChildRoutes(n,e,r);else if(i.component){let s=r.getOrCreateContext(i.outlet);if(this.routeReuseStrategy.shouldAttach(i.snapshot)){let a=this.routeReuseStrategy.retrieve(i.snapshot);this.routeReuseStrategy.store(i.snapshot,null),s.children.onOutletReAttached(a.contexts),s.attachRef=a.componentRef,s.route=a.route.value,s.outlet&&s.outlet.attach(a.componentRef,a.route.value),Jm(a.route.value),this.activateChildRoutes(n,null,s.children)}else s.attachRef=null,s.route=i,s.outlet&&s.outlet.activateWith(i,s.injector),this.activateChildRoutes(n,null,s.children)}else this.activateChildRoutes(n,null,r)}},ru=class{path;route;constructor(n){this.path=n,this.route=this.path[this.path.length-1]}},Co=class{component;route;constructor(n,e){this.component=n,this.route=e}};function jk(t,n,e){let r=t._root,i=n?n._root:null;return pa(r,i,e,[r.value])}function Vk(t){let n=t.routeConfig?t.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:t,guards:n}}function Ro(t,n){let e=Symbol(),r=n.get(t,e);return r===e?typeof t=="function"&&!th(t)?t:n.get(t):r}function pa(t,n,e,r,i={canDeactivateChecks:[],canActivateChecks:[]}){let o=wo(n);return t.children.forEach(s=>{Bk(s,o[s.value.outlet],e,r.concat([s.value]),i),delete o[s.value.outlet]}),Object.entries(o).forEach(([s,a])=>va(a,e.getContext(s),i)),i}function Bk(t,n,e,r,i={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,s=n?n.value:null,a=e?e.getContext(t.value.outlet):null;if(s&&o.routeConfig===s.routeConfig){let l=Hk(s,o,o.routeConfig.runGuardsAndResolvers);l?i.canActivateChecks.push(new ru(r)):(o.data=s.data,o._resolvedData=s._resolvedData),o.component?pa(t,n,a?a.children:null,r,i):pa(t,n,e,r,i),l&&a&&a.outlet&&a.outlet.isActivated&&i.canDeactivateChecks.push(new Co(a.outlet.component,s))}else s&&va(n,a,i),i.canActivateChecks.push(new ru(r)),o.component?pa(t,null,a?a.children:null,r,i):pa(t,null,e,r,i);return i}function Hk(t,n,e){if(typeof e=="function")return Ye(n._environmentInjector,()=>e(t,n));switch(e){case"pathParamsChange":return!Di(t.url,n.url);case"pathParamsOrQueryParamsChange":return!Di(t.url,n.url)||!In(t.queryParams,n.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!lg(t,n)||!In(t.queryParams,n.queryParams);default:return!lg(t,n)}}function va(t,n,e){let r=wo(t),i=t.value;Object.entries(r).forEach(([o,s])=>{i.component?n?va(s,n.children.getContext(o),e):va(s,null,e):va(s,n,e)}),i.component?n&&n.outlet&&n.outlet.isActivated?e.canDeactivateChecks.push(new Co(n.outlet.component,i)):e.canDeactivateChecks.push(new Co(null,i)):e.canDeactivateChecks.push(new Co(null,i))}function Ta(t){return typeof t=="function"}function Uk(t){return typeof t=="boolean"}function $k(t){return t&&Ta(t.canLoad)}function zk(t){return t&&Ta(t.canActivate)}function Gk(t){return t&&Ta(t.canActivateChild)}function Wk(t){return t&&Ta(t.canDeactivate)}function qk(t){return t&&Ta(t.canMatch)}function oC(t){return t instanceof Gr||t?.name==="EmptyError"}var Ld=Symbol("INITIAL_VALUE");function To(){return ve(t=>Wr(t.map(n=>n.pipe(xe(1),$e(Ld)))).pipe(I(n=>{for(let e of n)if(e!==!0){if(e===Ld)return Ld;if(e===!1||Yk(e))return e}return!0}),le(n=>n!==Ld),xe(1)))}function Yk(t){return Eo(t)||t instanceof Mo}function sC(t){return t.aborted?N(void 0).pipe(xe(1)):new G(n=>{let e=()=>{n.next(),n.complete()};return t.addEventListener("abort",e),()=>t.removeEventListener("abort",e)})}function aC(t){return ue(sC(t))}function Zk(t){return Et(n=>{let{targetSnapshot:e,currentSnapshot:r,guards:{canActivateChecks:i,canDeactivateChecks:o}}=n;return o.length===0&&i.length===0?N(U(m({},n),{guardsResult:!0})):Kk(o,e,r).pipe(Et(s=>s&&Uk(s)?Qk(e,i,t):N(s)),I(s=>U(m({},n),{guardsResult:s})))})}function Kk(t,n,e){return Me(t).pipe(Et(r=>nN(r.component,r.route,e,n)),On(r=>r!==!0,!0))}function Qk(t,n,e){return Me(n).pipe(Wi(r=>cr(Jk(r.route.parent,e),Xk(r.route,e),tN(t,r.path),eN(t,r.route))),On(r=>r!==!0,!0))}function Xk(t,n){return t!==null&&n&&n(new Xd(t)),N(!0)}function Jk(t,n){return t!==null&&n&&n(new Kd(t)),N(!0)}function eN(t,n){let e=n.routeConfig?n.routeConfig.canActivate:null;if(!e||e.length===0)return N(!0);let r=e.map(i=>qr(()=>{let o=n._environmentInjector,s=Ro(i,o),a=zk(s)?s.canActivate(n,t):Ye(o,()=>s(n,t));return Ii(a).pipe(On())}));return N(r).pipe(To())}function tN(t,n){let e=n[n.length-1],i=n.slice(0,n.length-1).reverse().map(o=>Vk(o)).filter(o=>o!==null).map(o=>qr(()=>{let s=o.guards.map(a=>{let l=o.node._environmentInjector,c=Ro(a,l),d=Gk(c)?c.canActivateChild(e,t):Ye(l,()=>c(e,t));return Ii(d).pipe(On())});return N(s).pipe(To())}));return N(i).pipe(To())}function nN(t,n,e,r){let i=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!i||i.length===0)return N(!0);let o=i.map(s=>{let a=n._environmentInjector,l=Ro(s,a),c=Wk(l)?l.canDeactivate(t,n,e,r):Ye(a,()=>l(t,n,e,r));return Ii(c).pipe(On())});return N(o).pipe(To())}function rN(t,n,e,r,i){let o=n.canLoad;if(o===void 0||o.length===0)return N(!0);let s=o.map(a=>{let l=Ro(a,t),c=$k(l)?l.canLoad(n,e):Ye(t,()=>l(n,e)),d=Ii(c);return i?d.pipe(aC(i)):d});return N(s).pipe(To(),lC(r))}function lC(t){return Of(Be(n=>{if(typeof n!="boolean")throw nu(t,n)}),I(n=>n===!0))}function iN(t,n,e,r,i,o){let s=n.canMatch;if(!s||s.length===0)return N(!0);let a=s.map(l=>{let c=Ro(l,t),d=qk(c)?c.canMatch(n,e,i):Ye(t,()=>c(n,e,i));return Ii(d).pipe(aC(o))});return N(a).pipe(To(),lC(r))}var Jn=class t extends Error{segmentGroup;constructor(n){super(),this.segmentGroup=n||null,Object.setPrototypeOf(this,t.prototype)}},xa=class t extends Error{urlTree;constructor(n){super(),this.urlTree=n,Object.setPrototypeOf(this,t.prototype)}};function oN(t){throw new C(4e3,!1)}function sN(t){throw rC(!1,_t.GuardRejected)}var ug=class{urlSerializer;urlTree;constructor(n,e){this.urlSerializer=n,this.urlTree=e}async lineralizeSegments(n,e){let r=[],i=e.root;for(;;){if(r=r.concat(i.segments),i.numberOfChildren===0)return r;if(i.numberOfChildren>1||!i.children[ne])throw oN(`${n.redirectTo}`);i=i.children[ne]}}async applyRedirectCommands(n,e,r,i,o){let s=await aN(e,i,o);if(s instanceof Zt)throw new xa(s);let a=this.applyRedirectCreateUrlTree(s,this.urlSerializer.parse(s),n,r);if(s[0]==="/")throw new xa(a);return a}applyRedirectCreateUrlTree(n,e,r,i){let o=this.createSegmentGroup(n,e.root,r,i);return new Zt(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(n,e){let r={};return Object.entries(n).forEach(([i,o])=>{if(typeof o=="string"&&o[0]===":"){let a=o.substring(1);r[i]=e[a]}else r[i]=o}),r}createSegmentGroup(n,e,r,i){let o=this.createSegments(n,e.segments,r,i),s={};return Object.entries(e.children).forEach(([a,l])=>{s[a]=this.createSegmentGroup(n,l,r,i)}),new _e(o,s)}createSegments(n,e,r,i){return e.map(o=>o.path[0]===":"?this.findPosParam(n,o,i):this.findOrReturn(o,r))}findPosParam(n,e,r){let i=r[e.path.substring(1)];if(!i)throw new C(4001,!1);return i}findOrReturn(n,e){let r=0;for(let i of e){if(i.path===n.path)return e.splice(r),i;r++}return n}};function aN(t,n,e){if(typeof t=="string")return Promise.resolve(t);let r=t;return Hd(Ii(Ye(e,()=>r(n))))}function lN(t,n){return t.providers&&!t._injector&&(t._injector=Js(t.providers,n,`Route: ${t.path}`)),t._injector??n}function fn(t){return t.outlet||ne}function cN(t,n){let e=t.filter(r=>fn(r)===n);return e.push(...t.filter(r=>fn(r)!==n)),e}var fg={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function cC(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function dN(t,n,e,r,i,o,s){let a=dC(t,n,e);if(!a.matched)return N(a);let l=cC(o(a));return r=lN(n,r),iN(r,n,e,i,l,s).pipe(I(c=>c===!0?a:m({},fg)))}function dC(t,n,e){if(n.path==="")return n.pathMatch==="full"&&(t.hasChildren()||e.length>0)?m({},fg):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let i=(n.matcher||OD)(e,t,n);if(!i)return m({},fg);let o={};Object.entries(i.posParams??{}).forEach(([a,l])=>{o[a]=l.path});let s=i.consumed.length>0?m(m({},o),i.consumed[i.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:i.consumed,remainingSegments:e.slice(i.consumed.length),parameters:s,positionalParamSegments:i.posParams??{}}}function kD(t,n,e,r,i){return e.length>0&&hN(t,e,r,i)?{segmentGroup:new _e(n,fN(r,new _e(e,t.children))),slicedSegments:[]}:e.length===0&&pN(t,e,r)?{segmentGroup:new _e(t.segments,uN(t,e,r,t.children)),slicedSegments:e}:{segmentGroup:new _e(t.segments,t.children),slicedSegments:e}}function uN(t,n,e,r){let i={};for(let o of e)if(su(t,n,o)&&!r[fn(o)]){let s=new _e([],{});i[fn(o)]=s}return m(m({},r),i)}function fN(t,n){let e={};e[ne]=n;for(let r of t)if(r.path===""&&fn(r)!==ne){let i=new _e([],{});e[fn(r)]=i}return e}function hN(t,n,e,r){return e.some(i=>!su(t,n,i)||!(fn(i)!==ne)?!1:!(r!==void 0&&fn(i)===r))}function pN(t,n,e){return e.some(r=>su(t,n,r))}function su(t,n,e){return(t.hasChildren()||n.length>0)&&e.pathMatch==="full"?!1:e.path===""}function mN(t,n,e){return n.length===0&&!t.children[e]}var hg=class{};async function gN(t,n,e,r,i,o,s="emptyOnly",a){return new pg(t,n,e,r,i,s,o,a).recognize()}var vN=31,pg=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(n,e,r,i,o,s,a,l){this.injector=n,this.configLoader=e,this.rootComponentType=r,this.config=i,this.urlTree=o,this.paramsInheritanceStrategy=s,this.urlSerializer=a,this.abortSignal=l,this.applyRedirects=new ug(this.urlSerializer,this.urlTree)}noMatchError(n){return new C(4002,`'${n.segmentGroup}'`)}async recognize(){let n=kD(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:r}=await this.match(n),i=new Vt(r,e),o=new Ca("",i),s=WD(r,[],this.urlTree.queryParams,this.urlTree.fragment);return s.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(s),{state:o,tree:s}}async match(n){let e=new So([],Object.freeze({}),Object.freeze(m({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),ne,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,n,ne,e),rootSnapshot:e}}catch(r){if(r instanceof xa)return this.urlTree=r.urlTree,this.match(r.urlTree.root);throw r instanceof Jn?this.noMatchError(r):r}}async processSegmentGroup(n,e,r,i,o){if(r.segments.length===0&&r.hasChildren())return this.processChildren(n,e,r,o);let s=await this.processSegment(n,e,r,r.segments,i,!0,o);return s instanceof Vt?[s]:[]}async processChildren(n,e,r,i){let o=[];for(let l of Object.keys(r.children))l==="primary"?o.unshift(l):o.push(l);let s=[];for(let l of o){let c=r.children[l],d=cN(e,l),f=await this.processSegmentGroup(n,d,c,l,i);s.push(...f)}let a=uC(s);return yN(a),a}async processSegment(n,e,r,i,o,s,a){for(let l of e)try{return await this.processSegmentAgainstRoute(l._injector??n,e,l,r,i,o,s,a)}catch(c){if(c instanceof Jn||oC(c))continue;throw c}if(mN(r,i,o))return new hg;throw new Jn(r)}async processSegmentAgainstRoute(n,e,r,i,o,s,a,l){if(fn(r)!==s&&(s===ne||!su(i,o,r)))throw new Jn(i);if(r.redirectTo===void 0)return this.matchSegmentAgainstRoute(n,i,r,o,s,l);if(this.allowRedirects&&a)return this.expandSegmentAgainstRouteUsingRedirect(n,i,e,r,o,s,l);throw new Jn(i)}async expandSegmentAgainstRouteUsingRedirect(n,e,r,i,o,s,a){let{matched:l,parameters:c,consumedSegments:d,positionalParamSegments:f,remainingSegments:h}=dC(e,i,o);if(!l)throw new Jn(e);typeof i.redirectTo=="string"&&i.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>vN&&(this.allowRedirects=!1));let p=this.createSnapshot(n,i,o,c,a);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let y=await this.applyRedirects.applyRedirectCommands(d,i.redirectTo,f,cC(p),n),E=await this.applyRedirects.lineralizeSegments(i,y);return this.processSegment(n,r,e,E.concat(h),s,!1,a)}createSnapshot(n,e,r,i,o){let s=new So(r,i,Object.freeze(m({},this.urlTree.queryParams)),this.urlTree.fragment,_N(e),fn(e),e.component??e._loadedComponent??null,e,wN(e),n),a=mg(s,o,this.paramsInheritanceStrategy);return s.params=Object.freeze(a.params),s.data=Object.freeze(a.data),s}async matchSegmentAgainstRoute(n,e,r,i,o,s){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let a=tt=>this.createSnapshot(n,r,tt.consumedSegments,tt.parameters,s),l=await Hd(dN(e,r,i,n,this.urlSerializer,a,this.abortSignal));if(r.path==="**"&&(e.children={}),!l?.matched)throw new Jn(e);n=r._injector??n;let{routes:c}=await this.getChildConfig(n,r,i),d=r._loadedInjector??n,{parameters:f,consumedSegments:h,remainingSegments:p}=l,y=this.createSnapshot(n,r,h,f,s),{segmentGroup:E,slicedSegments:S}=kD(e,h,p,c,o);if(S.length===0&&E.hasChildren()){let tt=await this.processChildren(d,c,E,y);return new Vt(y,tt)}if(c.length===0&&S.length===0)return new Vt(y,[]);let A=fn(r)===o,be=await this.processSegment(d,c,E,S,A?ne:o,!0,y);return new Vt(y,be instanceof Vt?[be]:[])}async getChildConfig(n,e,r){if(e.children)return{routes:e.children,injector:n};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(n).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await Hd(rN(n,e,r,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(n,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw sN(e)}return{routes:[],injector:n}}};function yN(t){t.sort((n,e)=>n.value.outlet===ne?-1:e.value.outlet===ne?1:n.value.outlet.localeCompare(e.value.outlet))}function bN(t){let n=t.value.routeConfig;return n&&n.path===""}function uC(t){let n=[],e=new Set;for(let r of t){if(!bN(r)){n.push(r);continue}let i=n.find(o=>r.value.routeConfig===o.value.routeConfig);i!==void 0?(i.children.push(...r.children),e.add(i)):n.push(r)}for(let r of e){let i=uC(r.children);n.push(new Vt(r.value,i))}return n.filter(r=>!e.has(r))}function _N(t){return t.data||{}}function wN(t){return t.resolve||{}}function DN(t,n,e,r,i,o,s){return Et(async a=>{let{state:l,tree:c}=await gN(t,n,e,r,a.extractedUrl,i,o,s);return U(m({},a),{targetSnapshot:l,urlAfterRedirects:c})})}function CN(t){return Et(n=>{let{targetSnapshot:e,guards:{canActivateChecks:r}}=n;if(!r.length)return N(n);let i=new Set(r.map(a=>a.route)),o=new Set;for(let a of i)if(!o.has(a))for(let l of fC(a))o.add(l);let s=0;return Me(o).pipe(Wi(a=>i.has(a)?EN(a,e,t):(a.data=mg(a,a.parent,t).resolve,N(void 0))),Be(()=>s++),ql(1),Et(a=>s===o.size?N(n):Ve))})}function fC(t){let n=t.children.map(e=>fC(e)).flat();return[t,...n]}function EN(t,n,e){let r=t.routeConfig,i=t._resolve;return r?.title!==void 0&&!eC(r)&&(i[Ia]=r.title),qr(()=>(t.data=mg(t,t.parent,e).resolve,xN(i,t,n).pipe(I(o=>(t._resolvedData=o,t.data=m(m({},t.data),o),null)))))}function xN(t,n,e){let r=tg(t);if(r.length===0)return N({});let i={};return Me(r).pipe(Et(o=>IN(t[o],n,e).pipe(On(),Be(s=>{if(s instanceof Mo)throw nu(new Rr,s);i[o]=s}))),ql(1),I(()=>i),mn(o=>oC(o)?Ve:ms(o)))}function IN(t,n,e){let r=n._environmentInjector,i=Ro(t,r),o=i.resolve?i.resolve(n,e):Ye(r,()=>i(n,e));return Ii(o)}function ND(t){return ve(n=>{let e=t(n);return e?Me(e).pipe(I(()=>n)):N(n)})}var bg=(()=>{class t{buildTitle(e){let r,i=e.root;for(;i!==void 0;)r=this.getResolvedTitleForRoute(i)??r,i=i.children.find(o=>o.outlet===ne);return r}getResolvedTitleForRoute(e){return e.data[Ia]}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:()=>u(hC),providedIn:"root"})}return t})(),hC=(()=>{class t extends bg{title;constructor(e){super(),this.title=e}updateTitle(e){let r=this.buildTitle(e);r!==void 0&&this.title.setTitle(r)}static \u0275fac=function(r){return new(r||t)(T(xD))};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Aa=new g("",{factory:()=>({})}),Ra=new g(""),pC=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=u(xm);async loadComponent(e,r){if(this.componentLoaders.get(r))return this.componentLoaders.get(r);if(r._loadedComponent)return Promise.resolve(r._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(r);let i=(async()=>{try{let o=await PD(Ye(e,()=>r.loadComponent())),s=await vC(gC(o));return this.onLoadEndListener&&this.onLoadEndListener(r),r._loadedComponent=s,s}finally{this.componentLoaders.delete(r)}})();return this.componentLoaders.set(r,i),i}loadChildren(e,r){if(this.childrenLoaders.get(r))return this.childrenLoaders.get(r);if(r._loadedRoutes)return Promise.resolve({routes:r._loadedRoutes,injector:r._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(r);let i=(async()=>{try{let o=await mC(r,this.compiler,e,this.onLoadEndListener);return r._loadedRoutes=o.routes,r._loadedInjector=o.injector,r._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(r)}})();return this.childrenLoaders.set(r,i),i}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();async function mC(t,n,e,r){let i=await PD(Ye(e,()=>t.loadChildren())),o=await vC(gC(i)),s;o instanceof ld||Array.isArray(o)?s=o:s=await n.compileModuleAsync(o),r&&r(t);let a,l,c=!1,d;return Array.isArray(s)?(l=s,c=!0):(a=s.create(e).injector,d=s,l=a.get(Ra,[],{optional:!0,self:!0}).flat()),{routes:l.map(yg),injector:a,factory:d}}function SN(t){return t&&typeof t=="object"&&"default"in t}function gC(t){return SN(t)?t.default:t}async function vC(t){return t}var au=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:()=>u(MN),providedIn:"root"})}return t})(),MN=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,r){return e}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),yC=new g("");var TN=()=>{},bC=new g(""),_C=(()=>{class t{currentNavigation=ie(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=ie(null);events=new D;transitionAbortWithErrorSubject=new D;configLoader=u(pC);environmentInjector=u(Ie);destroyRef=u(Fe);urlSerializer=u(Sa);rootContexts=u(Ao);location=u(Ir);inputBindingEnabled=u(ou,{optional:!0})!==null;titleStrategy=u(bg);options=u(Aa,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=u(au);createViewTransition=u(yC,{optional:!0});navigationErrorHandler=u(bC,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>N(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=i=>this.events.next(new Yd(i)),r=i=>this.events.next(new Zd(i));this.configLoader.onLoadEndListener=r,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let r=++this.navigationId;Ge(()=>{this.transitions?.next(U(m({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:r,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new je(null),this.transitions.pipe(le(r=>r!==null),ve(r=>{let i=!1,o=new AbortController,s=()=>!i&&this.currentTransition?.id===r.id;return N(r).pipe(ve(a=>{if(this.navigationId>r.id)return this.cancelNavigationTransition(r,"",_t.SupersededByNewNavigation),Ve;this.currentTransition=r;let l=this.lastSuccessfulNavigation();this.currentNavigation.set({id:a.id,initialUrl:a.rawUrl,extractedUrl:a.extractedUrl,targetBrowserUrl:typeof a.extras.browserUrl=="string"?this.urlSerializer.parse(a.extras.browserUrl):a.extras.browserUrl,trigger:a.source,extras:a.extras,previousNavigation:l?U(m({},l),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:a.routesRecognizeHandler,beforeActivateHandler:a.beforeActivateHandler});let c=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),d=a.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!c&&d!=="reload")return this.events.next(new tr(a.id,this.urlSerializer.serialize(a.rawUrl),"",ba.IgnoredSameUrlNavigation)),a.resolve(!1),Ve;if(this.urlHandlingStrategy.shouldProcessUrl(a.rawUrl))return N(a).pipe(ve(f=>(this.events.next(new Ei(f.id,this.urlSerializer.serialize(f.extractedUrl),f.source,f.restoredState)),f.id!==this.navigationId?Ve:Promise.resolve(f))),DN(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),Be(f=>{r.targetSnapshot=f.targetSnapshot,r.urlAfterRedirects=f.urlAfterRedirects,this.currentNavigation.update(h=>(h.finalUrl=f.urlAfterRedirects,h)),this.events.next(new wa)}),ve(f=>Me(r.routesRecognizeHandler.deferredHandle??N(void 0)).pipe(I(()=>f))),Be(()=>{let f=new _a(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(f)}));if(c&&this.urlHandlingStrategy.shouldProcessUrl(a.currentRawUrl)){let{id:f,extractedUrl:h,source:p,restoredState:y,extras:E}=a,S=new Ei(f,this.urlSerializer.serialize(h),p,y);this.events.next(S);let A=XD(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=r=U(m({},a),{targetSnapshot:A,urlAfterRedirects:h,extras:U(m({},E),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(be=>(be.finalUrl=h,be)),N(r)}else return this.events.next(new tr(a.id,this.urlSerializer.serialize(a.extractedUrl),"",ba.IgnoredByUrlHandlingStrategy)),a.resolve(!1),Ve}),I(a=>{let l=new zd(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);return this.events.next(l),this.currentTransition=r=U(m({},a),{guards:jk(a.targetSnapshot,a.currentSnapshot,this.rootContexts)}),r}),Zk(a=>this.events.next(a)),ve(a=>{if(r.guardsResult=a.guardsResult,a.guardsResult&&typeof a.guardsResult!="boolean")throw nu(this.urlSerializer,a.guardsResult);let l=new Gd(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot,!!a.guardsResult);if(this.events.next(l),!s())return Ve;if(!a.guardsResult)return this.cancelNavigationTransition(a,"",_t.GuardRejected),Ve;if(a.guards.canActivateChecks.length===0)return N(a);let c=new Wd(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);if(this.events.next(c),!s())return Ve;let d=!1;return N(a).pipe(CN(this.paramsInheritanceStrategy),Be({next:()=>{d=!0;let f=new qd(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(f)},complete:()=>{d||this.cancelNavigationTransition(a,"",_t.NoDataFromResolver)}}))}),ND(a=>{let l=d=>{let f=[];if(d.routeConfig?._loadedComponent)d.component=d.routeConfig?._loadedComponent;else if(d.routeConfig?.loadComponent){let h=d._environmentInjector;f.push(this.configLoader.loadComponent(h,d.routeConfig).then(p=>{d.component=p}))}for(let h of d.children)f.push(...l(h));return f},c=l(a.targetSnapshot.root);return c.length===0?N(a):Me(Promise.all(c).then(()=>a))}),ND(()=>this.afterPreactivation()),ve(()=>{let{currentSnapshot:a,targetSnapshot:l}=r,c=this.createViewTransition?.(this.environmentInjector,a.root,l.root);return c?Me(c).pipe(I(()=>r)):N(r)}),xe(1),ve(a=>{let l=Ok(e.routeReuseStrategy,a.targetSnapshot,a.currentRouterState);this.currentTransition=r=a=U(m({},a),{targetRouterState:l}),this.currentNavigation.update(d=>(d.targetRouterState=l,d)),this.events.next(new xo);let c=r.beforeActivateHandler.deferredHandle;return c?Me(c.then(()=>a)):N(a)}),Be(a=>{new dg(e.routeReuseStrategy,r.targetRouterState,r.currentRouterState,l=>this.events.next(l),this.inputBindingEnabled).activate(this.rootContexts),s()&&(i=!0,this.currentNavigation.update(l=>(l.abort=TN,l)),this.lastSuccessfulNavigation.set(Ge(this.currentNavigation)),this.events.next(new er(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects))),this.titleStrategy?.updateTitle(a.targetRouterState.snapshot),a.resolve(!0))}),ue(sC(o.signal).pipe(le(()=>!i&&!r.targetRouterState),Be(()=>{this.cancelNavigationTransition(r,o.signal.reason+"",_t.Aborted)}))),Be({complete:()=>{i=!0}}),ue(this.transitionAbortWithErrorSubject.pipe(Be(a=>{throw a}))),dr(()=>{o.abort(),i||this.cancelNavigationTransition(r,"",_t.SupersededByNewNavigation),this.currentTransition?.id===r.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),mn(a=>{if(i=!0,this.destroyed)return r.resolve(!1),Ve;if(iC(a))this.events.next(new Yt(r.id,this.urlSerializer.serialize(r.extractedUrl),a.message,a.cancellationCode)),Lk(a)?this.events.next(new Io(a.url,a.navigationBehaviorOptions)):r.resolve(!1);else{let l=new xi(r.id,this.urlSerializer.serialize(r.extractedUrl),a,r.targetSnapshot??void 0);try{let c=Ye(this.environmentInjector,()=>this.navigationErrorHandler?.(l));if(c instanceof Mo){let{message:d,cancellationCode:f}=nu(this.urlSerializer,c);this.events.next(new Yt(r.id,this.urlSerializer.serialize(r.extractedUrl),d,f)),this.events.next(new Io(c.redirectTo,c.navigationBehaviorOptions))}else throw this.events.next(l),a}catch(c){this.options.resolveNavigationPromiseOnError?r.resolve(!1):r.reject(c)}}return Ve}))}))}cancelNavigationTransition(e,r,i){let o=new Yt(e.id,this.urlSerializer.serialize(e.extractedUrl),r,i);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),r=Ge(this.currentNavigation),i=r?.targetBrowserUrl??r?.extractedUrl;return e.toString()!==i?.toString()&&!r?.extras.skipLocationChange}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function AN(t){return t!==ga}var wC=new g("");var DC=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:()=>u(RN),providedIn:"root"})}return t})(),iu=class{shouldDetach(n){return!1}store(n,e){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,e){return n.routeConfig===e.routeConfig}shouldDestroyInjector(n){return!0}},RN=(()=>{class t extends iu{static \u0275fac=(()=>{let e;return function(i){return(e||(e=Mt(t)))(i||t)}})();static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),_g=(()=>{class t{urlSerializer=u(Sa);options=u(Aa,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=u(Ir);urlHandlingStrategy=u(au);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Zt;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:r,targetBrowserUrl:i}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,r):r,s=i??o;return s instanceof Zt?this.urlSerializer.serialize(s):s}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:r,initialUrl:i}){r&&e?(this.currentUrlTree=r,this.rawUrlTree=this.urlHandlingStrategy.merge(r,i),this.routerState=e):this.rawUrlTree=i}routerState=XD(null,u(Ie));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:()=>u(kN),providedIn:"root"})}return t})(),kN=(()=>{class t extends _g{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(r=>{r.type==="popstate"&&setTimeout(()=>{e(r.url,r.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,r){e instanceof Ei?this.updateStateMemento():e instanceof tr?this.commitTransition(r):e instanceof _a?this.urlUpdateStrategy==="eager"&&(r.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(r),r)):e instanceof xo?(this.commitTransition(r),this.urlUpdateStrategy==="deferred"&&!r.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(r),r)):e instanceof Yt&&!QD(e)?this.restoreHistory(r):e instanceof xi?this.restoreHistory(r,!0):e instanceof er&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,r){let{extras:i,id:o}=r,{replaceUrl:s,state:a}=i;if(this.location.isCurrentPathEqualTo(e)||s){let l=this.browserPageId,c=m(m({},a),this.generateNgRouterState(o,l,r));this.location.replaceState(e,"",c)}else{let l=m(m({},a),this.generateNgRouterState(o,this.browserPageId+1,r));this.location.go(e,"",l)}}restoreHistory(e,r=!1){if(this.canceledNavigationResolution==="computed"){let i=this.browserPageId,o=this.currentPageId-i;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(r&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,r,i){return this.canceledNavigationResolution==="computed"?m({navigationId:e,\u0275routerPageId:r},this.routerUrlState(i)):m({navigationId:e},this.routerUrlState(i))}static \u0275fac=(()=>{let e;return function(i){return(e||(e=Mt(t)))(i||t)}})();static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function wg(t,n){t.events.pipe(le(e=>e instanceof er||e instanceof Yt||e instanceof xi||e instanceof tr),I(e=>e instanceof er||e instanceof tr?0:(e instanceof Yt?e.code===_t.Redirect||e.code===_t.SupersededByNewNavigation:!1)?2:1),le(e=>e!==2),xe(1)).subscribe(()=>{n()})}var lu=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=u(ud);stateManager=u(_g);options=u(Aa,{optional:!0})||{};pendingTasks=u(Hn);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=u(_C);urlSerializer=u(Sa);location=u(Ir);urlHandlingStrategy=u(au);injector=u(Ie);_events=new D;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=u(DC);injectorCleanup=u(wC,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=u(Ra,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!u(ou,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new de;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(r=>{try{let i=this.navigationTransitions.currentTransition,o=Ge(this.navigationTransitions.currentNavigation);if(i!==null&&o!==null){if(this.stateManager.handleRouterEvent(r,o),r instanceof Yt&&r.code!==_t.Redirect&&r.code!==_t.SupersededByNewNavigation)this.navigated=!0;else if(r instanceof er)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(r instanceof Io){let s=r.navigationBehaviorOptions,a=this.urlHandlingStrategy.merge(r.url,i.currentRawUrl),l=m({scroll:i.extras.scroll,browserUrl:i.extras.browserUrl,info:i.extras.info,skipLocationChange:i.extras.skipLocationChange,replaceUrl:i.extras.replaceUrl||this.urlUpdateStrategy==="eager"||AN(i.source)},s);this.scheduleNavigation(a,ga,null,l,{resolve:i.resolve,reject:i.reject,promise:i.promise})}}kk(r)&&this._events.next(r)}catch(i){this.navigationTransitions.transitionAbortWithErrorSubject.next(i)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),ga,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,r,i,o)=>{this.navigateToSyncWithBrowser(e,i,r,o)})}navigateToSyncWithBrowser(e,r,i,o){let s=i?.navigationId?i:null,a=i?.\u0275routerUrl??e;if(i?.\u0275routerUrl&&(o=U(m({},o),{browserUrl:e})),i){let c=m({},i);delete c.navigationId,delete c.\u0275routerPageId,delete c.\u0275routerUrl,Object.keys(c).length!==0&&(o.state=c)}let l=this.parseUrl(a);this.scheduleNavigation(l,r,s,o).catch(c=>{this.disposed||this.injector.get(rn)(c)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return Ge(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(yg),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,r={}){let{relativeTo:i,queryParams:o,fragment:s,queryParamsHandling:a,preserveFragment:l}=r,c=l?this.currentUrlTree.fragment:s,d=null;switch(a??this.options.defaultQueryParamsHandling){case"merge":d=m(m({},this.currentUrlTree.queryParams),o);break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=o||null}d!==null&&(d=this.removeEmptyProps(d));let f;try{let h=i?i.snapshot:this.routerState.snapshot.root;f=qD(h)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),f=this.currentUrlTree.root}return YD(f,e,d,c??null,this.urlSerializer)}navigateByUrl(e,r={skipLocationChange:!1}){let i=Eo(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(i,this.rawUrlTree);return this.scheduleNavigation(o,ga,null,r)}navigate(e,r={skipLocationChange:!1}){return NN(e),this.navigateByUrl(this.createUrlTree(e,r),r)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(yn(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,r){let i;if(r===!0?i=m({},jD):r===!1?i=m({},ng):i=m(m({},ng),r),Eo(e))return SD(this.currentUrlTree,e,i);let o=this.parseUrl(e);return SD(this.currentUrlTree,o,i)}removeEmptyProps(e){return Object.entries(e).reduce((r,[i,o])=>(o!=null&&(r[i]=o),r),{})}scheduleNavigation(e,r,i,o,s){if(this.disposed)return Promise.resolve(!1);let a,l,c;s?(a=s.resolve,l=s.reject,c=s.promise):c=new Promise((f,h)=>{a=f,l=h});let d=this.pendingTasks.add();return wg(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(d))}),this.navigationTransitions.handleNavigationRequest({source:r,restoredState:i,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:a,reject:l,promise:c,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),c.catch(Promise.reject.bind(Promise))}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function NN(t){for(let n=0;n<t.length;n++)if(t[n]==null)throw new C(4008,!1)}var PN=new g("");function Dg(t,...n){return ct([{provide:Ra,multi:!0,useValue:t},[],{provide:kr,useFactory:LN},{provide:pd,multi:!0,useFactory:jN},n.map(e=>e.\u0275providers)])}function LN(){return u(lu).routerState.root}function jN(){let t=u(z);return n=>{let e=t.get(ht);if(n!==e.components[0])return;let r=t.get(lu),i=t.get(VN);t.get(BN)===1&&r.initialNavigation(),t.get(HN,null,{optional:!0})?.setUpPreloading(),t.get(PN,null,{optional:!0})?.init(),r.resetRootComponentType(e.componentTypes[0]),i.closed||(i.next(),i.complete(),i.unsubscribe())}}var VN=new g("",{factory:()=>new D}),BN=new g("",{factory:()=>1});var HN=new g("");var Cg="Service workers are disabled or not supported by this browser",ko=class{serviceWorker;worker;registration;events;constructor(n,e){if(this.serviceWorker=n,!n)this.worker=this.events=this.registration=new G(r=>r.error(new C(5601,!1)));else{let r=null,i=new D;this.worker=new G(c=>(r!==null&&c.next(r),i.subscribe(d=>c.next(d))));let o=()=>{let{controller:c}=n;c!==null&&(r=c,i.next(r))};n.addEventListener("controllerchange",o),o(),this.registration=this.worker.pipe(ve(()=>n.getRegistration().then(c=>{if(!c)throw new C(5601,!1);return c})));let s=new D;this.events=s.asObservable();let a=c=>{let{data:d}=c;d?.type&&s.next(d)};n.addEventListener("message",a),e?.get(ht,null,{optional:!0})?.onDestroy(()=>{n.removeEventListener("controllerchange",o),n.removeEventListener("message",a)})}}postMessage(n,e){return new Promise(r=>{this.worker.pipe(xe(1)).subscribe(i=>{i.postMessage(m({action:n},e)),r()})})}postMessageWithOperation(n,e,r){let i=this.waitForOperationCompleted(r),o=this.postMessage(n,e);return Promise.all([o,i]).then(([,s])=>s)}generateNonce(){return Math.round(Math.random()*1e7)}eventsOfType(n){let e;return typeof n=="string"?e=r=>r.type===n:e=r=>n.includes(r.type),this.events.pipe(le(e))}nextEventOfType(n){return this.eventsOfType(n).pipe(xe(1))}waitForOperationCompleted(n){return new Promise((e,r)=>{this.eventsOfType("OPERATION_COMPLETED").pipe(le(i=>i.nonce===n),xe(1),I(i=>{if(i.result!==void 0)return i.result;throw new Error(i.error)})).subscribe({next:e,error:r})})}get isEnabled(){return!!this.serviceWorker}},EC=(()=>{class t{sw;messages;notificationClicks;notificationCloses;pushSubscriptionChanges;subscription;get isEnabled(){return this.sw.isEnabled}pushManager=null;subscriptionChanges=new D;constructor(e){if(this.sw=e,!e.isEnabled){this.messages=Nn,this.notificationClicks=Nn,this.notificationCloses=Nn,this.pushSubscriptionChanges=Nn,this.subscription=Nn;return}this.messages=this.sw.eventsOfType("PUSH").pipe(I(i=>i.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(I(i=>i.data)),this.notificationCloses=this.sw.eventsOfType("NOTIFICATION_CLOSE").pipe(I(i=>i.data)),this.pushSubscriptionChanges=this.sw.eventsOfType("PUSH_SUBSCRIPTION_CHANGE").pipe(I(i=>i.data)),this.pushManager=this.sw.registration.pipe(I(i=>i.pushManager));let r=this.pushManager.pipe(ve(i=>i.getSubscription()));this.subscription=new G(i=>{let o=r.subscribe(i),s=this.subscriptionChanges.subscribe(i);return()=>{o.unsubscribe(),s.unsubscribe()}})}requestSubscription(e){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(Cg));let r={userVisibleOnly:!0},i=this.decodeBase64(e.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),o=new Uint8Array(new ArrayBuffer(i.length));for(let s=0;s<i.length;s++)o[s]=i.charCodeAt(s);return r.applicationServerKey=o,new Promise((s,a)=>{this.pushManager.pipe(ve(l=>l.subscribe(r)),xe(1)).subscribe({next:l=>{this.subscriptionChanges.next(l),s(l)},error:a})})}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(Cg));let e=r=>{if(r===null)throw new C(5602,!1);return r.unsubscribe().then(i=>{if(!i)throw new C(5603,!1);this.subscriptionChanges.next(null)})};return new Promise((r,i)=>{this.subscription.pipe(xe(1),ve(e)).subscribe({next:r,error:i})})}decodeBase64(e){return atob(e)}static \u0275fac=function(r){return new(r||t)(T(ko))};static \u0275prov=_({token:t,factory:t.\u0275fac})}return t})(),cu=(()=>{class t{sw;versionUpdates;unrecoverable;get isEnabled(){return this.sw.isEnabled}ongoingCheckForUpdate=null;constructor(e){if(this.sw=e,!e.isEnabled){this.versionUpdates=Nn,this.unrecoverable=Nn;return}this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE")}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(Cg));if(this.ongoingCheckForUpdate)return this.ongoingCheckForUpdate;let e=this.sw.generateNonce();return this.ongoingCheckForUpdate=this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:e},e).finally(()=>{this.ongoingCheckForUpdate=null}),this.ongoingCheckForUpdate}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new C(5601,!1));let e=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:e},e)}static \u0275fac=function(r){return new(r||t)(T(ko))};static \u0275prov=_({token:t,factory:t.\u0275fac})}return t})(),xC=new g("");function $N(){let t=u(ka);if(!("serviceWorker"in navigator&&t.enabled!==!1))return;let n=u(xC),e=u(O),r=u(ht);e.runOutsideAngular(()=>{let i=navigator.serviceWorker,o=()=>i.controller?.postMessage({action:"INITIALIZE"});i.addEventListener("controllerchange",o),r.onDestroy(()=>{i.removeEventListener("controllerchange",o)})}),e.runOutsideAngular(()=>{let i,{registrationStrategy:o}=t;if(typeof o=="function")i=new Promise(s=>o().subscribe(()=>s()));else{let[s,...a]=(o||"registerWhenStable:30000").split(":");switch(s){case"registerImmediately":i=Promise.resolve();break;case"registerWithDelay":i=CC(+a[0]||0);break;case"registerWhenStable":i=Promise.race([r.whenStable(),CC(+a[0])]);break;default:throw new C(5600,!1)}}i.then(()=>{r.destroyed||navigator.serviceWorker.register(n,{scope:t.scope,updateViaCache:t.updateViaCache,type:t.type}).catch(s=>console.error(yn(5604,!1)))})})}function CC(t){return new Promise(n=>setTimeout(n,t))}function zN(){let t=u(ka),n=u(z),e=!0;return new ko(e&&t.enabled!==!1?navigator.serviceWorker:void 0,n)}var ka=class{enabled;updateViaCache;type;scope;registrationStrategy};function GN(t,n={}){return ct([EC,cu,{provide:xC,useValue:t},{provide:ka,useValue:n},{provide:ko,useFactory:zN},hd($N)])}var IC=(()=>{class t{static register(e,r={}){return{ngModule:t,providers:[GN(e,r)]}}static \u0275fac=function(r){return new(r||t)};static \u0275mod=P({type:t});static \u0275inj=F({providers:[EC,cu]})}return t})();function Si(t){return t.buttons===0||t.detail===0}function Mi(t){let n=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var Eg;function SC(){if(Eg==null){let t=typeof document<"u"?document.head:null;Eg=!!(t&&(t.createShadowRoot||t.attachShadow))}return Eg}function xg(t){if(SC()){let n=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function mt(t){return t.composedPath?t.composedPath()[0]:t.target}var Ig;try{Ig=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Ig=!1}var Ee=(()=>{class t{_platformId=u(vi);isBrowser=this._platformId?iD(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Ig)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Na;function MC(){if(Na==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>Na=!0}))}finally{Na=Na||!1}return Na}function No(t){return MC()?t:!!t.capture}function nr(t,n=0){return TC(t)?Number(t):arguments.length===2?n:0}function TC(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function Sn(t){return t instanceof j?t.nativeElement:t}var AC=new g("cdk-input-modality-detector-options"),RC={ignoreKeys:[18,17,224,91,16]},kC=650,Sg={passive:!0,capture:!0},NC=(()=>{class t{_platform=u(Ee);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new je(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(r=>r===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=mt(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<kC||(this._modality.next(Si(e)?"keyboard":"mouse"),this._mostRecentTarget=mt(e))};_onTouchstart=e=>{if(Mi(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=mt(e)};constructor(){let e=u(O),r=u(B),i=u(AC,{optional:!0});if(this._options=m(m({},RC),i),this.modalityDetected=this._modality.pipe(ys(1)),this.modalityChanged=this.modalityDetected.pipe(Wl()),this._platform.isBrowser){let o=u(it).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(r,"keydown",this._onKeydown,Sg),o.listen(r,"mousedown",this._onMousedown,Sg),o.listen(r,"touchstart",this._onTouchstart,Sg)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Oa=(function(t){return t[t.IMMEDIATE=0]="IMMEDIATE",t[t.EVENTUAL=1]="EVENTUAL",t})(Oa||{}),OC=new g("cdk-focus-monitor-default-options"),du=No({passive:!0,capture:!0}),Mn=(()=>{class t{_ngZone=u(O);_platform=u(Ee);_inputModalityDetector=u(NC);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=u(B);_stopInputModalityDetector=new D;constructor(){let e=u(OC,{optional:!0});this._detectionMode=e?.detectionMode||Oa.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let r=mt(e);for(let i=r;i;i=i.parentElement)e.type==="focus"?this._onFocus(e,i):this._onBlur(e,i)};monitor(e,r=!1){let i=Sn(e);if(!this._platform.isBrowser||i.nodeType!==1)return N();let o=xg(i)||this._document,s=this._elementInfo.get(i);if(s)return r&&(s.checkChildren=!0),s.subject;let a={checkChildren:r,subject:new D,rootNode:o};return this._elementInfo.set(i,a),this._registerGlobalListeners(a),a.subject}stopMonitoring(e){let r=Sn(e),i=this._elementInfo.get(r);i&&(i.subject.complete(),this._setClasses(r),this._elementInfo.delete(r),this._removeGlobalListeners(i))}focusVia(e,r,i){let o=Sn(e),s=this._document.activeElement;o===s?this._getClosestElementsInfo(o).forEach(([a,l])=>this._originChanged(a,r,l)):(this._setOrigin(r),typeof o.focus=="function"&&o.focus(i))}ngOnDestroy(){this._elementInfo.forEach((e,r)=>this.stopMonitoring(r))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===Oa.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,r){e.classList.toggle("cdk-focused",!!r),e.classList.toggle("cdk-touch-focused",r==="touch"),e.classList.toggle("cdk-keyboard-focused",r==="keyboard"),e.classList.toggle("cdk-mouse-focused",r==="mouse"),e.classList.toggle("cdk-program-focused",r==="program")}_setOrigin(e,r=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&r,this._detectionMode===Oa.IMMEDIATE){clearTimeout(this._originTimeoutId);let i=this._originFromTouchInteraction?kC:1;this._originTimeoutId=setTimeout(()=>this._origin=null,i)}})}_onFocus(e,r){let i=this._elementInfo.get(r),o=mt(e);!i||!i.checkChildren&&r!==o||this._originChanged(r,this._getFocusOrigin(o),i)}_onBlur(e,r){let i=this._elementInfo.get(r);!i||i.checkChildren&&e.relatedTarget instanceof Node&&r.contains(e.relatedTarget)||(this._setClasses(r),this._emitOrigin(i,null))}_emitOrigin(e,r){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(r))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let r=e.rootNode,i=this._rootNodeFocusListenerCount.get(r)||0;i||this._ngZone.runOutsideAngular(()=>{r.addEventListener("focus",this._rootNodeFocusAndBlurListener,du),r.addEventListener("blur",this._rootNodeFocusAndBlurListener,du)}),this._rootNodeFocusListenerCount.set(r,i+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(ue(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let r=e.rootNode;if(this._rootNodeFocusListenerCount.has(r)){let i=this._rootNodeFocusListenerCount.get(r);i>1?this._rootNodeFocusListenerCount.set(r,i-1):(r.removeEventListener("focus",this._rootNodeFocusAndBlurListener,du),r.removeEventListener("blur",this._rootNodeFocusAndBlurListener,du),this._rootNodeFocusListenerCount.delete(r))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,r,i){this._setClasses(e,r),this._emitOrigin(i,r),this._lastFocusOrigin=r}_getClosestElementsInfo(e){let r=[];return this._elementInfo.forEach((i,o)=>{(o===e||i.checkChildren&&o.contains(e))&&r.push([o,i])}),r}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:r,mostRecentModality:i}=this._inputModalityDetector;if(i!=="mouse"||!r||r===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let s=0;s<o.length;s++)if(o[s].contains(r))return!0}return!1}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var uu=new WeakMap,wt=(()=>{class t{_appRef;_injector=u(z);_environmentInjector=u(Ie);load(e){let r=this._appRef=this._appRef||this._injector.get(ht),i=uu.get(r);i||(i={loaders:new Set,refs:[]},uu.set(r,i),r.onDestroy(()=>{uu.get(r)?.refs.forEach(o=>o.destroy()),uu.delete(r)})),i.loaders.has(e)||(i.loaders.add(e),i.refs.push(Ed(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var hu=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275cmp=M({type:t,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(r,i){},styles:[`.cdk-visually-hidden {
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
`],encapsulation:2,changeDetection:0})}return t})(),fu;function WN(){if(fu===void 0&&(fu=null,typeof window<"u")){let t=window;t.trustedTypes!==void 0&&(fu=t.trustedTypes.createPolicy("angular#components",{createHTML:n=>n}))}return fu}function Ti(t){return WN()?.createHTML(t)||t}function FC(t,n,e){let r=e.sanitize(Qe.HTML,n);t.innerHTML=Ti(r||"")}function Oo(t){return Array.isArray(t)?t:[t]}var PC=new Set,Ai,pu=(()=>{class t{_platform=u(Ee);_nonce=u(yi,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):YN}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&qN(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function qN(t,n){if(!PC.has(t))try{Ai||(Ai=document.createElement("style"),n&&Ai.setAttribute("nonce",n),Ai.setAttribute("type","text/css"),document.head.appendChild(Ai)),Ai.sheet&&(Ai.sheet.insertRule(`@media ${t} {body{ }}`,0),PC.add(t))}catch(e){console.error(e)}}function YN(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}var Ri=(()=>{class t{_mediaMatcher=u(pu);_zone=u(O);_queries=new Map;_destroySubject=new D;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return LC(Oo(e)).some(i=>this._registerQuery(i).mql.matches)}observe(e){let i=LC(Oo(e)).map(s=>this._registerQuery(s).observable),o=Wr(i);return o=cr(o.pipe(xe(1)),o.pipe(ys(1),Yr(0))),o.pipe(I(s=>{let a={matches:!1,breakpoints:{}};return s.forEach(({matches:l,query:c})=>{a.matches=a.matches||l,a.breakpoints[c]=l}),a}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let r=this._mediaMatcher.matchMedia(e),o={observable:new G(s=>{let a=l=>this._zone.run(()=>s.next(l));return r.addListener(a),()=>{r.removeListener(a)}}).pipe($e(r),I(({matches:s})=>({query:e,matches:s})),ue(this._destroySubject)),mql:r};return this._queries.set(e,o),o}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function LC(t){return t.map(n=>n.split(",")).reduce((n,e)=>n.concat(e)).map(n=>n.trim())}var ZN=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var jC=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=P({type:t});static \u0275inj=F({providers:[ZN]})}return t})();var gu=(()=>{class t{_platform=u(Ee);constructor(){}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return QN(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let r=KN(oO(e));if(r&&(VC(r)===-1||!this.isVisible(r)))return!1;let i=e.nodeName.toLowerCase(),o=VC(e);return e.hasAttribute("contenteditable")?o!==-1:i==="iframe"||i==="object"||this._platform.WEBKIT&&this._platform.IOS&&!rO(e)?!1:i==="audio"?e.hasAttribute("controls")?o!==-1:!1:i==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,r){return iO(e)&&!this.isDisabled(e)&&(r?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function KN(t){try{return t.frameElement}catch{return null}}function QN(t){return!!(t.offsetWidth||t.offsetHeight||typeof t.getClientRects=="function"&&t.getClientRects().length)}function XN(t){let n=t.nodeName.toLowerCase();return n==="input"||n==="select"||n==="button"||n==="textarea"}function JN(t){return tO(t)&&t.type=="hidden"}function eO(t){return nO(t)&&t.hasAttribute("href")}function tO(t){return t.nodeName.toLowerCase()=="input"}function nO(t){return t.nodeName.toLowerCase()=="a"}function BC(t){if(!t.hasAttribute("tabindex")||t.tabIndex===void 0)return!1;let n=t.getAttribute("tabindex");return!!(n&&!isNaN(parseInt(n,10)))}function VC(t){if(!BC(t))return null;let n=parseInt(t.getAttribute("tabindex")||"",10);return isNaN(n)?-1:n}function rO(t){let n=t.nodeName.toLowerCase(),e=n==="input"&&t.type;return e==="text"||e==="password"||n==="select"||n==="textarea"}function iO(t){return JN(t)?!1:XN(t)||eO(t)||t.hasAttribute("contenteditable")||BC(t)}function oO(t){return t.ownerDocument&&t.ownerDocument.defaultView||window}var mu=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(n){this._enabled=n,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_enabled=!0;constructor(n,e,r,i,o=!1,s){this._element=n,this._checker=e,this._ngZone=r,this._document=i,this._injector=s,o||this.attachAnchors()}destroy(){let n=this._startAnchor,e=this._endAnchor;n&&(n.removeEventListener("focus",this.startAnchorListener),n.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(n)))})}focusFirstTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(n)))})}focusLastTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(n)))})}_getRegionBoundary(n){let e=this._element.querySelectorAll(`[cdk-focus-region-${n}], [cdkFocusRegion${n}], [cdk-focus-${n}]`);return n=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(n){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let r=this._getFirstTabbableElement(e);return r?.focus(n),!!r}return e.focus(n),!0}return this.focusFirstTabbableElement(n)}focusFirstTabbableElement(n){let e=this._getRegionBoundary("start");return e&&e.focus(n),!!e}focusLastTabbableElement(n){let e=this._getRegionBoundary("end");return e&&e.focus(n),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let r=0;r<e.length;r++){let i=e[r].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[r]):null;if(i)return i}return null}_getLastTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let r=e.length-1;r>=0;r--){let i=e[r].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[r]):null;if(i)return i}return null}_createAnchor(){let n=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,n),n.classList.add("cdk-visually-hidden"),n.classList.add("cdk-focus-trap-anchor"),n.setAttribute("aria-hidden","true"),n}_toggleAnchorTabIndex(n,e){n?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(n){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_executeOnStable(n){this._injector?ze(n,{injector:this._injector}):setTimeout(n)}},Mg=(()=>{class t{_checker=u(gu);_ngZone=u(O);_document=u(B);_injector=u(z);constructor(){u(wt).load(hu)}create(e,r=!1){return new mu(e,this._checker,this._ngZone,this._document,r,this._injector)}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var HC=new g("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),UC=new g("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),sO=0,Fa=(()=>{class t{_ngZone=u(O);_defaultOptions=u(UC,{optional:!0});_liveElement;_document=u(B);_sanitizer=u(fa);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=u(HC,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...r){let i=this._defaultOptions,o,s;return r.length===1&&typeof r[0]=="number"?s=r[0]:[o,s]=r,this.clear(),clearTimeout(this._previousTimeout),o||(o=i&&i.politeness?i.politeness:"polite"),s==null&&i&&(s=i.duration),this._liveElement.setAttribute("aria-live",o),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(a=>this._currentResolve=a)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:FC(this._liveElement,e,this._sanitizer),typeof s=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),s)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",r=this._document.getElementsByClassName(e),i=this._document.createElement("div");for(let o=0;o<r.length;o++)r[o].remove();return i.classList.add(e),i.classList.add("cdk-visually-hidden"),i.setAttribute("aria-atomic","true"),i.setAttribute("aria-live","polite"),i.id=`cdk-live-announcer-${sO++}`,this._document.body.appendChild(i),i}_exposeAnnouncerToModals(e){let r=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let i=0;i<r.length;i++){let o=r[i],s=o.getAttribute("aria-owns");s?s.indexOf(e)===-1&&o.setAttribute("aria-owns",s+" "+e):o.setAttribute("aria-owns",e)}}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var aO=200,vu=class{_letterKeyStream=new D;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new D;selectedItem=this._selectedItem;constructor(n,e){let r=typeof e?.debounceInterval=="number"?e.debounceInterval:aO;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(n),this._setupKeyHandler(r)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(n){this._selectedItemIndex=n}setItems(n){this._items=n}handleKey(n){let e=n.keyCode;n.key&&n.key.length===1?this._letterKeyStream.next(n.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(n){this._letterKeyStream.pipe(Be(e=>this._pressedLetters.push(e)),Yr(n),le(()=>this._pressedLetters.length>0),I(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let r=1;r<this._items.length+1;r++){let i=(this._selectedItemIndex+r)%this._items.length,o=this._items[i];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function Ft(t,...n){return n.length?n.some(e=>t[e]):t.altKey||t.shiftKey||t.ctrlKey||t.metaKey}var Fo=class{_items;_activeItemIndex=ie(-1);_activeItem=ie(null);_wrap=!1;_typeaheadSubscription=de.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=n=>n.disabled;constructor(n,e){this._items=n,n instanceof an?this._itemChangesSubscription=n.changes.subscribe(r=>this._itemsChanged(r.toArray())):Cr(n)&&(this._effectRef=ui(()=>this._itemsChanged(n()),{injector:e}))}tabOut=new D;change=new D;skipPredicate(n){return this._skipPredicateFn=n,this}withWrap(n=!0){return this._wrap=n,this}withVerticalOrientation(n=!0){return this._vertical=n,this}withHorizontalOrientation(n){return this._horizontal=n,this}withAllowedModifierKeys(n){return this._allowedModifierKeys=n,this}withTypeAhead(n=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new vu(e,{debounceInterval:typeof n=="number"?n:void 0,skipPredicate:r=>this._skipPredicateFn(r)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(r=>{this.setActiveItem(r)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(n=!0){return this._homeAndEnd=n,this}withPageUpDown(n=!0,e=10){return this._pageUpAndDown={enabled:n,delta:e},this}setActiveItem(n){let e=this._activeItem();this.updateActiveItem(n),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(n){let e=n.keyCode,i=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!n[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&i){this.setNextItemActive();break}else return;case 38:if(this._vertical&&i){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&i){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&i){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&i){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&i){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&i){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&i){let o=this._activeItemIndex()+this._pageUpAndDown.delta,s=this._getItemsArray().length;this._setActiveItemByIndex(o<s?o:s-1,-1);break}else return;default:(i||Ft(n,"shiftKey"))&&this._typeahead?.handleKey(n);return}this._typeahead?.reset(),n.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(n){let e=this._getItemsArray(),r=typeof n=="number"?n:e.indexOf(n),i=e[r];this._activeItem.set(i??null),this._activeItemIndex.set(r),this._typeahead?.setCurrentSelectedItemIndex(r)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(n){this._wrap?this._setActiveInWrapMode(n):this._setActiveInDefaultMode(n)}_setActiveInWrapMode(n){let e=this._getItemsArray();for(let r=1;r<=e.length;r++){let i=(this._activeItemIndex()+n*r+e.length)%e.length,o=e[i];if(!this._skipPredicateFn(o)){this.setActiveItem(i);return}}}_setActiveInDefaultMode(n){this._setActiveItemByIndex(this._activeItemIndex()+n,n)}_setActiveItemByIndex(n,e){let r=this._getItemsArray();if(r[n]){for(;this._skipPredicateFn(r[n]);)if(n+=e,!r[n])return;this.setActiveItem(n)}}_getItemsArray(){return Cr(this._items)?this._items():this._items instanceof an?this._items.toArray():this._items}_itemsChanged(n){this._typeahead?.setItems(n);let e=this._activeItem();if(e){let r=n.indexOf(e);r>-1&&r!==this._activeItemIndex()&&(this._activeItemIndex.set(r),this._typeahead?.setCurrentSelectedItemIndex(r))}}};var Ba=class extends Fo{setActiveItem(n){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(n),this.activeItem&&this.activeItem.setActiveStyles()}};var Ha=class extends Fo{_origin="program";setFocusOrigin(n){return this._origin=n,this}setActiveItem(n){super.setActiveItem(n),this.activeItem&&this.activeItem.focus(this._origin)}};var Tg={},at=class t{_appId=u(ho);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,e=!1){return this._appId!=="ng"&&(n+=this._appId),Tg.hasOwnProperty(n)||(Tg[n]=0),`${n}${e?t._infix+"-":""}${Tg[n]++}`}static \u0275fac=function(e){return new(e||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})};var zC=" ";function GC(t,n,e){let r=WC(t,n);e=e.trim(),!r.some(i=>i.trim()===e)&&(r.push(e),t.setAttribute(n,r.join(zC)))}function Ag(t,n,e){let r=WC(t,n);e=e.trim();let i=r.filter(o=>o!==e);i.length?t.setAttribute(n,i.join(zC)):t.removeAttribute(n)}function WC(t,n){return t.getAttribute(n)?.match(/\S+/g)??[]}var Po={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};function Rg(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}function Ue(t){return t==null?"":typeof t=="string"?t:`${t}px`}var lO=new g("cdk-dir-doc",{providedIn:"root",factory:()=>u(B)}),cO=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function qC(t){let n=t?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?cO.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr"}var Dt=(()=>{class t{get value(){return this.valueSignal()}valueSignal=ie("ltr");change=new W;constructor(){let e=u(lO,{optional:!0});if(e){let r=e.body?e.body.dir:null,i=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(qC(r||i||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var hn=(function(t){return t[t.NORMAL=0]="NORMAL",t[t.NEGATED=1]="NEGATED",t[t.INVERTED=2]="INVERTED",t})(hn||{}),yu,ki;function bu(){if(ki==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return ki=!1,ki;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)ki=!0;else{let t=Element.prototype.scrollTo;t?ki=!/\{\s*\[native code\]\s*\}/.test(t.toString()):ki=!1}}return ki}function Lo(){if(typeof document!="object"||!document)return hn.NORMAL;if(yu==null){let t=document.createElement("div"),n=t.style;t.dir="rtl",n.width="1px",n.overflow="auto",n.visibility="hidden",n.pointerEvents="none",n.position="absolute";let e=document.createElement("div"),r=e.style;r.width="2px",r.height="1px",t.appendChild(e),document.body.appendChild(t),yu=hn.NORMAL,t.scrollLeft===0&&(t.scrollLeft=1,yu=t.scrollLeft===0?hn.NEGATED:hn.INVERTED),t.remove()}return yu}var pe=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=P({type:t});static \u0275inj=F({})}return t})();var dO=20,Ni=(()=>{class t{_ngZone=u(O);_platform=u(Ee);_renderer=u(it).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new D;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let r=this.scrollContainers.get(e);r&&(r.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=dO){return this._platform.isBrowser?new G(r=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let i=e>0?this._scrolled.pipe(zl(e)).subscribe(r):this._scrolled.subscribe(r);return this._scrolledCount++,()=>{i.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):N()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,r)=>this.deregister(r)),this._scrolled.complete()}ancestorScrolled(e,r){let i=this.getAncestorScrollContainers(e);return this.scrolled(r).pipe(le(o=>!o||i.indexOf(o)>-1))}getAncestorScrollContainers(e){let r=[];return this.scrollContainers.forEach((i,o)=>{this._scrollableContainsElement(o,e)&&r.push(o)}),r}_scrollableContainsElement(e,r){let i=Sn(r),o=e.getElementRef().nativeElement;do if(i==o)return!0;while(i=i.parentElement);return!1}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),jo=(()=>{class t{elementRef=u(j);scrollDispatcher=u(Ni);ngZone=u(O);dir=u(Dt,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new D;_renderer=u(Xe);_cleanupScroll;_elementScrolled=new D;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let r=this.elementRef.nativeElement,i=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=i?e.end:e.start),e.right==null&&(e.right=i?e.start:e.end),e.bottom!=null&&(e.top=r.scrollHeight-r.clientHeight-e.bottom),i&&Lo()!=hn.NORMAL?(e.left!=null&&(e.right=r.scrollWidth-r.clientWidth-e.left),Lo()==hn.INVERTED?e.left=e.right:Lo()==hn.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=r.scrollWidth-r.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let r=this.elementRef.nativeElement;bu()?r.scrollTo(e):(e.top!=null&&(r.scrollTop=e.top),e.left!=null&&(r.scrollLeft=e.left))}measureScrollOffset(e){let r="left",i="right",o=this.elementRef.nativeElement;if(e=="top")return o.scrollTop;if(e=="bottom")return o.scrollHeight-o.clientHeight-o.scrollTop;let s=this.dir&&this.dir.value=="rtl";return e=="start"?e=s?i:r:e=="end"&&(e=s?r:i),s&&Lo()==hn.INVERTED?e==r?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:s&&Lo()==hn.NEGATED?e==r?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==r?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static \u0275fac=function(r){return new(r||t)};static \u0275dir=Y({type:t,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return t})(),uO=20,Tn=(()=>{class t{_platform=u(Ee);_listeners;_viewportSize=null;_change=new D;_document=u(B);constructor(){let e=u(O),r=u(it).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let i=o=>this._change.next(o);this._listeners=[r.listen("window","resize",i),r.listen("window","orientationchange",i)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:r,height:i}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+i,right:e.left+r,height:i,width:r}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,r=this._getWindow(),i=e.documentElement,o=i.getBoundingClientRect(),s=-o.top||e.body?.scrollTop||r.scrollY||i.scrollTop||0,a=-o.left||e.body?.scrollLeft||r.scrollX||i.scrollLeft||0;return{top:s,left:a}}change(e=uO){return e>0?this._change.pipe(zl(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var rr=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=P({type:t});static \u0275inj=F({})}return t})(),kg=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=P({type:t});static \u0275inj=F({imports:[pe,rr,pe,rr]})}return t})();var Ua=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}},Vo=class extends Ua{component;viewContainerRef;injector;projectableNodes;bindings;constructor(n,e,r,i,o){super(),this.component=n,this.viewContainerRef=e,this.injector=r,this.projectableNodes=i,this.bindings=o||null}},ir=class extends Ua{templateRef;viewContainerRef;context;injector;constructor(n,e,r,i){super(),this.templateRef=n,this.viewContainerRef=e,this.context=r,this.injector=i}get origin(){return this.templateRef.elementRef}attach(n,e=this.context){return this.context=e,super.attach(n)}detach(){return this.context=void 0,super.detach()}},Ng=class extends Ua{element;constructor(n){super(),this.element=n instanceof j?n.nativeElement:n}},Bo=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof Vo)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof ir)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof Ng)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},$a=class extends Bo{outletElement;_appRef;_defaultInjector;constructor(n,e,r){super(),this.outletElement=n,this._appRef=e,this._defaultInjector=r}attachComponentPortal(n){let e;if(n.viewContainerRef){let r=n.injector||n.viewContainerRef.injector,i=r.get(xn,null,{optional:!0})||void 0;e=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:r,ngModuleRef:i,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let r=this._appRef,i=n.injector||this._defaultInjector||z.NULL,o=i.get(Ie,r.injector);e=Ed(n.component,{elementInjector:i,environmentInjector:o,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),r.attachView(e.hostView),this.setDisposeFn(()=>{r.viewCount>0&&r.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=n,e}attachTemplatePortal(n){let e=n.viewContainerRef,r=e.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return r.rootNodes.forEach(i=>this.outletElement.appendChild(i)),r.detectChanges(),this.setDisposeFn(()=>{let i=e.indexOf(r);i!==-1&&e.remove(i)}),this._attachedPortal=n,r}attachDomPortal=n=>{let e=n.element;e.parentNode;let r=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(r,e),this.outletElement.appendChild(e),this._attachedPortal=n,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(e,r)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}};var Og=(()=>{class t extends Bo{_moduleRef=u(xn,{optional:!0});_document=u(B);_viewContainerRef=u(ft);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new W;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let r=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,i=r.createComponent(e.component,{index:r.length,injector:e.injector||r.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return r!==this._viewContainerRef&&this._getRootNode().appendChild(i.hostView.rootNodes[0]),super.setDisposeFn(()=>i.destroy()),this._attachedPortal=e,this._attachedRef=i,this.attached.emit(i),i}attachTemplatePortal(e){e.setAttachedHost(this);let r=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}attachDomPortal=e=>{let r=e.element;r.parentNode;let i=this._document.createComment("dom-portal");e.setAttachedHost(this),r.parentNode.insertBefore(i,r),this._getRootNode().appendChild(r),this._attachedPortal=e,super.setDisposeFn(()=>{i.parentNode&&i.parentNode.replaceChild(r,i)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(r){return new(r||t)};static \u0275dir=Y({type:t,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[Pe]})}return t})(),Fg=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=P({type:t});static \u0275inj=F({})}return t})();var YC=bu();function t0(t){return new _u(t.get(Tn),t.get(B))}var _u=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(n,e){this._viewportRuler=n,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||"",this._previousHTMLStyles.top=n.style.top||"",n.style.left=Ue(-this._previousScrollPosition.left),n.style.top=Ue(-this._previousScrollPosition.top),n.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let n=this._document.documentElement,e=this._document.body,r=n.style,i=e.style,o=r.scrollBehavior||"",s=i.scrollBehavior||"";this._isEnabled=!1,r.left=this._previousHTMLStyles.left,r.top=this._previousHTMLStyles.top,n.classList.remove("cdk-global-scrollblock"),YC&&(r.scrollBehavior=i.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),YC&&(r.scrollBehavior=o,i.scrollBehavior=s)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,r=this._viewportRuler.getViewportSize();return e.scrollHeight>r.height||e.scrollWidth>r.width}};function n0(t,n){return new wu(t.get(Ni),t.get(O),t.get(Tn),n)}var wu=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(n,e,r,i){this._scrollDispatcher=n,this._ngZone=e,this._viewportRuler=r,this._config=i}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(this._scrollSubscription)return;let n=this._scrollDispatcher.scrolled(0).pipe(le(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=n.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=n.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var za=class{enable(){}disable(){}attach(){}};function Pg(t,n){return n.some(e=>{let r=t.bottom<e.top,i=t.top>e.bottom,o=t.right<e.left,s=t.left>e.right;return r||i||o||s})}function ZC(t,n){return n.some(e=>{let r=t.top<e.top,i=t.bottom>e.bottom,o=t.left<e.left,s=t.right>e.right;return r||i||o||s})}function Fi(t,n){return new Du(t.get(Ni),t.get(Tn),t.get(O),n)}var Du=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,e,r,i){this._scrollDispatcher=n,this._viewportRuler=e,this._ngZone=r,this._config=i}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:r,height:i}=this._viewportRuler.getViewportSize();Pg(e,[{width:r,height:i,bottom:i,right:r,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},r0=(()=>{class t{_injector=u(z);constructor(){}noop=()=>new za;close=e=>n0(this._injector,e);block=()=>t0(this._injector);reposition=e=>Fi(this._injector,e);static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),or=class{positionStrategy;scrollStrategy=new za;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let e=Object.keys(n);for(let r of e)n[r]!==void 0&&(this[r]=n[r])}}};var Cu=class{connectionPair;scrollableViewProperties;constructor(n,e){this.connectionPair=n,this.scrollableViewProperties=e}};var i0=(()=>{class t{_attachedOverlays=[];_document=u(B);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let r=this._attachedOverlays.indexOf(e);r>-1&&this._attachedOverlays.splice(r,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,r,i){return i.observers.length<1?!1:e.eventPredicate?e.eventPredicate(r):!0}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),o0=(()=>{class t extends i0{_ngZone=u(O);_renderer=u(it).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let r=this._attachedOverlays;for(let i=r.length-1;i>-1;i--){let o=r[i];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(i){return(e||(e=Mt(t)))(i||t)}})();static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),s0=(()=>{class t extends i0{_platform=u(Ee);_ngZone=u(O);_renderer=u(it).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let r=this._document.body,i={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(r,"pointerdown",this._pointerDownListener,i),o.listen(r,"click",this._clickListener,i),o.listen(r,"auxclick",this._clickListener,i),o.listen(r,"contextmenu",this._clickListener,i)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=r.style.cursor,r.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=mt(e)};_clickListener=e=>{let r=mt(e),i=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:r;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let s=o.length-1;s>-1;s--){let a=o[s],l=a._outsidePointerEvents;if(!(!a.hasAttached()||!this.canReceiveEvent(a,e,l))){if(KC(a.overlayElement,r)||KC(a.overlayElement,i))break;this._ngZone?this._ngZone.run(()=>l.next(e)):l.next(e)}}};static \u0275fac=(()=>{let e;return function(i){return(e||(e=Mt(t)))(i||t)}})();static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function KC(t,n){let e=typeof ShadowRoot<"u"&&ShadowRoot,r=n;for(;r;){if(r===t)return!0;r=e&&r instanceof ShadowRoot?r.host:r.parentNode}return!1}var a0=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275cmp=M({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(r,i){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
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
`],encapsulation:2,changeDetection:0})}return t})(),l0=(()=>{class t{_platform=u(Ee);_containerElement;_document=u(B);_styleLoader=u(wt);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||Rg()){let i=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<i.length;o++)i[o].remove()}let r=this._document.createElement("div");r.classList.add(e),Rg()?r.setAttribute("platform","test"):this._platform.isBrowser||r.setAttribute("platform","server"),this._document.body.appendChild(r),this._containerElement=r}_loadStyles(){this._styleLoader.load(a0)}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Lg=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,e,r,i){this._renderer=e,this._ngZone=r,this.element=n.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",i)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents="none",n.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function jg(t){return t&&t.nodeType===1}var Eu=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new D;_attachments=new D;_detachments=new D;_positionStrategy;_scrollStrategy;_locationChanges=de.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new D;_outsidePointerEvents=new D;_afterNextRenderRef;constructor(n,e,r,i,o,s,a,l,c,d=!1,f,h){this._portalOutlet=n,this._host=e,this._pane=r,this._config=i,this._ngZone=o,this._keyboardDispatcher=s,this._document=a,this._location=l,this._outsideClickDispatcher=c,this._animationsDisabled=d,this._injector=f,this._renderer=h,i.scrollStrategy&&(this._scrollStrategy=i.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=i.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(n);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=ze(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=m(m({},this._config),n),this._updateElementSize()}setDirection(n){this._config=U(m({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n=="string"?n:n.value:"ltr"}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=Ue(this._config.width),n.height=Ue(this._config.height),n.minWidth=Ue(this._config.minWidth),n.minHeight=Ue(this._config.minHeight),n.maxWidth=Ue(this._config.maxWidth),n.maxHeight=Ue(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?"":"none"}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;jg(n)?n.after(this._host):n?.type==="parent"?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let n="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new Lg(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,e,r){let i=Oo(e||[]).filter(o=>!!o);i.length&&(r?n.classList.add(...i):n.classList.remove(...i))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=ze(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(e){if(n)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}},QC="cdk-overlay-connected-position-bounding-box",fO=/([A-Za-z%]+)$/;function Ga(t,n){return new xu(n,t.get(Tn),t.get(B),t.get(Ee),t.get(l0))}var xu=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new D;_resizeSubscription=de.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,e,r,i,o){this._viewportRuler=e,this._document=r,this._platform=i,this._overlayContainer=o,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(QC),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,e=this._overlayRect,r=this._viewportRect,i=this._containerRect,o=[],s;for(let a of this._preferredPositions){let l=this._getOriginPoint(n,i,a),c=this._getOverlayPoint(l,e,a),d=this._getOverlayFit(c,e,r,a);if(d.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(a,l);return}if(this._canFitWithFlexibleDimensions(d,c,r)){o.push({position:a,origin:l,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(l,a)});continue}(!s||s.overlayFit.visibleArea<d.visibleArea)&&(s={overlayFit:d,overlayPoint:c,originPoint:l,position:a,overlayRect:e})}if(o.length){let a=null,l=-1;for(let c of o){let d=c.boundingBoxRect.width*c.boundingBoxRect.height*(c.position.weight||1);d>l&&(l=d,a=c)}this._isPushed=!1,this._applyPosition(a.position,a.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(s.position,s.originPoint);return}this._applyPosition(s.position,s.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Oi(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(QC),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof j?this._origin.nativeElement:jg(this._origin)?this._origin:null}_getOriginPoint(n,e,r){let i;if(r.originX=="center")i=n.left+n.width/2;else{let s=this._isRtl()?n.right:n.left,a=this._isRtl()?n.left:n.right;i=r.originX=="start"?s:a}e.left<0&&(i-=e.left);let o;return r.originY=="center"?o=n.top+n.height/2:o=r.originY=="top"?n.top:n.bottom,e.top<0&&(o-=e.top),{x:i,y:o}}_getOverlayPoint(n,e,r){let i;r.overlayX=="center"?i=-e.width/2:r.overlayX==="start"?i=this._isRtl()?-e.width:0:i=this._isRtl()?0:-e.width;let o;return r.overlayY=="center"?o=-e.height/2:o=r.overlayY=="top"?0:-e.height,{x:n.x+i,y:n.y+o}}_getOverlayFit(n,e,r,i){let o=JC(e),{x:s,y:a}=n,l=this._getOffset(i,"x"),c=this._getOffset(i,"y");l&&(s+=l),c&&(a+=c);let d=0-s,f=s+o.width-r.width,h=0-a,p=a+o.height-r.height,y=this._subtractOverflows(o.width,d,f),E=this._subtractOverflows(o.height,h,p),S=y*E;return{visibleArea:S,isCompletelyWithinViewport:o.width*o.height===S,fitsInViewportVertically:E===o.height,fitsInViewportHorizontally:y==o.width}}_canFitWithFlexibleDimensions(n,e,r){if(this._hasFlexibleDimensions){let i=r.bottom-e.y,o=r.right-e.x,s=XC(this._overlayRef.getConfig().minHeight),a=XC(this._overlayRef.getConfig().minWidth),l=n.fitsInViewportVertically||s!=null&&s<=i,c=n.fitsInViewportHorizontally||a!=null&&a<=o;return l&&c}return!1}_pushOverlayOnScreen(n,e,r){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let i=JC(e),o=this._viewportRect,s=Math.max(n.x+i.width-o.width,0),a=Math.max(n.y+i.height-o.height,0),l=Math.max(o.top-r.top-n.y,0),c=Math.max(o.left-r.left-n.x,0),d=0,f=0;return i.width<=o.width?d=c||-s:d=n.x<this._getViewportMarginStart()?o.left-r.left-n.x:0,i.height<=o.height?f=l||-a:f=n.y<this._getViewportMarginTop()?o.top-r.top-n.y:0,this._previousPushAmount={x:d,y:f},{x:n.x+d,y:n.y+f}}_applyPosition(n,e){if(this._setTransformOrigin(n),this._setOverlayElementStyles(e,n),this._setBoundingBoxStyles(e,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let r=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!hO(this._lastScrollVisibility,r)){let i=new Cu(n,r);this._positionChanges.next(i)}this._lastScrollVisibility=r}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),r,i=n.overlayY;n.overlayX==="center"?r="center":this._isRtl()?r=n.overlayX==="start"?"right":"left":r=n.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${r} ${i}`}_calculateBoundingBoxRect(n,e){let r=this._viewportRect,i=this._isRtl(),o,s,a;if(e.overlayY==="top")s=n.y,o=r.height-s+this._getViewportMarginBottom();else if(e.overlayY==="bottom")a=r.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=r.height-a+this._getViewportMarginTop();else{let p=Math.min(r.bottom-n.y+r.top,n.y),y=this._lastBoundingBoxSize.height;o=p*2,s=n.y-p,o>y&&!this._isInitialRender&&!this._growAfterOpen&&(s=n.y-y/2)}let l=e.overlayX==="start"&&!i||e.overlayX==="end"&&i,c=e.overlayX==="end"&&!i||e.overlayX==="start"&&i,d,f,h;if(c)h=r.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),d=n.x-this._getViewportMarginStart();else if(l)f=n.x,d=r.right-n.x-this._getViewportMarginEnd();else{let p=Math.min(r.right-n.x+r.left,n.x),y=this._lastBoundingBoxSize.width;d=p*2,f=n.x-p,d>y&&!this._isInitialRender&&!this._growAfterOpen&&(f=n.x-y/2)}return{top:s,left:f,bottom:a,right:h,width:d,height:o}}_setBoundingBoxStyles(n,e){let r=this._calculateBoundingBoxRect(n,e);!this._isInitialRender&&!this._growAfterOpen&&(r.height=Math.min(r.height,this._lastBoundingBoxSize.height),r.width=Math.min(r.width,this._lastBoundingBoxSize.width));let i={};if(this._hasExactPosition())i.top=i.left="0",i.bottom=i.right="auto",i.maxHeight=i.maxWidth="",i.width=i.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,s=this._overlayRef.getConfig().maxWidth;i.width=Ue(r.width),i.height=Ue(r.height),i.top=Ue(r.top)||"auto",i.bottom=Ue(r.bottom)||"auto",i.left=Ue(r.left)||"auto",i.right=Ue(r.right)||"auto",e.overlayX==="center"?i.alignItems="center":i.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?i.justifyContent="center":i.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(i.maxHeight=Ue(o)),s&&(i.maxWidth=Ue(s))}this._lastBoundingBoxSize=r,Oi(this._boundingBox.style,i)}_resetBoundingBoxStyles(){Oi(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){Oi(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(n,e){let r={},i=this._hasExactPosition(),o=this._hasFlexibleDimensions,s=this._overlayRef.getConfig();if(i){let d=this._viewportRuler.getViewportScrollPosition();Oi(r,this._getExactOverlayY(e,n,d)),Oi(r,this._getExactOverlayX(e,n,d))}else r.position="static";let a="",l=this._getOffset(e,"x"),c=this._getOffset(e,"y");l&&(a+=`translateX(${l}px) `),c&&(a+=`translateY(${c}px)`),r.transform=a.trim(),s.maxHeight&&(i?r.maxHeight=Ue(s.maxHeight):o&&(r.maxHeight="")),s.maxWidth&&(i?r.maxWidth=Ue(s.maxWidth):o&&(r.maxWidth="")),Oi(this._pane.style,r)}_getExactOverlayY(n,e,r){let i={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,n);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,r)),n.overlayY==="bottom"){let s=this._document.documentElement.clientHeight;i.bottom=`${s-(o.y+this._overlayRect.height)}px`}else i.top=Ue(o.y);return i}_getExactOverlayX(n,e,r){let i={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,n);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,r));let s;if(this._isRtl()?s=n.overlayX==="end"?"left":"right":s=n.overlayX==="end"?"right":"left",s==="right"){let a=this._document.documentElement.clientWidth;i.right=`${a-(o.x+this._overlayRect.width)}px`}else i.left=Ue(o.x);return i}_getScrollVisibility(){let n=this._getOriginRect(),e=this._pane.getBoundingClientRect(),r=this._scrollables.map(i=>i.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:ZC(n,r),isOriginOutsideView:Pg(n,r),isOverlayClipped:ZC(e,r),isOverlayOutsideView:Pg(e,r)}}_subtractOverflows(n,...e){return e.reduce((r,i)=>r-Math.max(i,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,r=this._viewportRuler.getViewportScrollPosition();return{top:r.top+this._getViewportMarginTop(),left:r.left+this._getViewportMarginStart(),right:r.left+n-this._getViewportMarginEnd(),bottom:r.top+e-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,e){return e==="x"?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&Oo(n).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof j)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let e=n.width||0,r=n.height||0;return{top:n.y,bottom:n.y+r,left:n.x,right:n.x+e,height:r,width:e}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();n&&(e.style.display="block");let r=e.getBoundingClientRect();return n&&(e.style.display=""),r}};function Oi(t,n){for(let e in n)n.hasOwnProperty(e)&&(t[e]=n[e]);return t}function XC(t){if(typeof t!="number"&&t!=null){let[n,e]=t.split(fO);return!e||e==="px"?parseFloat(n):null}return t||null}function JC(t){return{top:Math.floor(t.top),right:Math.floor(t.right),bottom:Math.floor(t.bottom),left:Math.floor(t.left),width:Math.floor(t.width),height:Math.floor(t.height)}}function hO(t,n){return t===n?!0:t.isOriginClipped===n.isOriginClipped&&t.isOriginOutsideView===n.isOriginOutsideView&&t.isOverlayClipped===n.isOverlayClipped&&t.isOverlayOutsideView===n.isOverlayOutsideView}var e0="cdk-global-overlay-wrapper";function Su(t){return new Iu}var Iu=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(n){let e=n.getConfig();this._overlayRef=n,this._width&&!e.width&&n.updateSize({width:this._width}),this._height&&!e.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(e0),this._isDisposed=!1}top(n=""){return this._bottomOffset="",this._topOffset=n,this._alignItems="flex-start",this}left(n=""){return this._xOffset=n,this._xPosition="left",this}bottom(n=""){return this._topOffset="",this._bottomOffset=n,this._alignItems="flex-end",this}right(n=""){return this._xOffset=n,this._xPosition="right",this}start(n=""){return this._xOffset=n,this._xPosition="start",this}end(n=""){return this._xOffset=n,this._xPosition="end",this}width(n=""){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this}height(n=""){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this}centerHorizontally(n=""){return this.left(n),this._xPosition="center",this}centerVertically(n=""){return this.top(n),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,r=this._overlayRef.getConfig(),{width:i,height:o,maxWidth:s,maxHeight:a}=r,l=(i==="100%"||i==="100vw")&&(!s||s==="100%"||s==="100vw"),c=(o==="100%"||o==="100vh")&&(!a||a==="100%"||a==="100vh"),d=this._xPosition,f=this._xOffset,h=this._overlayRef.getConfig().direction==="rtl",p="",y="",E="";l?E="flex-start":d==="center"?(E="center",h?y=f:p=f):h?d==="left"||d==="end"?(E="flex-end",p=f):(d==="right"||d==="start")&&(E="flex-start",y=f):d==="left"||d==="start"?(E="flex-start",p=f):(d==="right"||d==="end")&&(E="flex-end",y=f),n.position=this._cssPosition,n.marginLeft=l?"0":p,n.marginTop=c?"0":this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=l?"0":y,e.justifyContent=E,e.alignItems=c?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,r=e.style;e.classList.remove(e0),r.justifyContent=r.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position="",this._overlayRef=null,this._isDisposed=!0}},c0=(()=>{class t{_injector=u(z);constructor(){}global(){return Su()}flexibleConnectedTo(e){return Ga(this._injector,e)}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Wa=new g("OVERLAY_DEFAULT_CONFIG");function Pi(t,n){t.get(wt).load(a0);let e=t.get(l0),r=t.get(B),i=t.get(at),o=t.get(ht),s=t.get(Dt),a=t.get(Xe,null,{optional:!0})||t.get(it).createRenderer(null,null),l=new or(n),c=t.get(Wa,null,{optional:!0})?.usePopover??!0;l.direction=l.direction||s.value,"showPopover"in r.body?l.usePopover=n?.usePopover??c:l.usePopover=!1;let d=r.createElement("div"),f=r.createElement("div");d.id=i.getId("cdk-overlay-"),d.classList.add("cdk-overlay-pane"),f.appendChild(d),l.usePopover&&(f.setAttribute("popover","manual"),f.classList.add("cdk-overlay-popover"));let h=l.usePopover?l.positionStrategy?.getPopoverInsertionPoint?.():null;return jg(h)?h.after(f):h?.type==="parent"?h.element.appendChild(f):e.getContainerElement().appendChild(f),new Eu(new $a(d,o,t),f,d,l,t.get(O),t.get(o0),r,t.get(Ir),t.get(s0),n?.disableAnimations??t.get(Ws,null,{optional:!0})==="NoopAnimations",t.get(Ie),a)}var d0=(()=>{class t{scrollStrategies=u(r0);_positionBuilder=u(c0);_injector=u(z);constructor(){}create(e){return Pi(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),pO=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],mO=new g("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let t=u(z);return()=>Fi(t)}}),Ho=(()=>{class t{elementRef=u(j);constructor(){}static \u0275fac=function(r){return new(r||t)};static \u0275dir=Y({type:t,selectors:[["","cdk-overlay-origin",""],["","overlay-origin",""],["","cdkOverlayOrigin",""]],exportAs:["cdkOverlayOrigin"]})}return t})(),u0=new g("cdk-connected-overlay-default-config"),Mu=(()=>{class t{_dir=u(Dt,{optional:!0});_injector=u(z);_overlayRef;_templatePortal;_backdropSubscription=de.EMPTY;_attachSubscription=de.EMPTY;_detachSubscription=de.EMPTY;_positionSubscription=de.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=u(mO);_ngZone=u(O);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!="string"&&this._assignConfig(e)}backdropClick=new W;positionChange=new W;attach=new W;detach=new W;overlayKeydown=new W;overlayOutsideClick=new W;constructor(){let e=u(dt),r=u(ft),i=u(u0,{optional:!0}),o=u(Wa,{optional:!0});this.usePopover=o?.usePopover===!1?null:"global",this._templatePortal=new ir(e,r),this.scrollStrategy=this._scrollStrategyFactory(),i&&this._assignConfig(i)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:"ltr"}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=pO);let e=this._overlayRef=Pi(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(r=>{this.overlayKeydown.next(r),r.keyCode===27&&!this.disableClose&&!Ft(r)&&(r.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(r=>{let i=this._getOriginElement(),o=mt(r);(!i||i!==o&&!i.contains(o))&&this.overlayOutsideClick.next(r)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),r=new or({direction:this._dir||"ltr",positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(r.height=this.height),(this.minWidth||this.minWidth===0)&&(r.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(r.minHeight=this.minHeight),this.backdropClass&&(r.backdropClass=this.backdropClass),this.panelClass&&(r.panelClass=this.panelClass),r}_updatePositionStrategy(e){let r=this.positions.map(i=>({originX:i.originX,originY:i.originY,overlayX:i.overlayX,overlayY:i.overlayY,offsetX:i.offsetX||this.offsetX,offsetY:i.offsetY||this.offsetY,panelClass:i.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(r).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?"global":this.usePopover)}_createPositionStrategy(){let e=Ga(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof Ho?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof Ho?this.origin.elementRef.nativeElement:this.origin instanceof j?this.origin.nativeElement:typeof Element<"u"&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(r=>this.backdropClick.emit(r)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(Bf(()=>this.positionChange.observers.length>0)).subscribe(r=>{this._ngZone.run(()=>this.positionChange.emit(r)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth}static \u0275fac=function(r){return new(r||t)};static \u0275dir=Y({type:t,selectors:[["","cdk-connected-overlay",""],["","connected-overlay",""],["","cdkConnectedOverlay",""]],inputs:{origin:[0,"cdkConnectedOverlayOrigin","origin"],positions:[0,"cdkConnectedOverlayPositions","positions"],positionStrategy:[0,"cdkConnectedOverlayPositionStrategy","positionStrategy"],offsetX:[0,"cdkConnectedOverlayOffsetX","offsetX"],offsetY:[0,"cdkConnectedOverlayOffsetY","offsetY"],width:[0,"cdkConnectedOverlayWidth","width"],height:[0,"cdkConnectedOverlayHeight","height"],minWidth:[0,"cdkConnectedOverlayMinWidth","minWidth"],minHeight:[0,"cdkConnectedOverlayMinHeight","minHeight"],backdropClass:[0,"cdkConnectedOverlayBackdropClass","backdropClass"],panelClass:[0,"cdkConnectedOverlayPanelClass","panelClass"],viewportMargin:[0,"cdkConnectedOverlayViewportMargin","viewportMargin"],scrollStrategy:[0,"cdkConnectedOverlayScrollStrategy","scrollStrategy"],open:[0,"cdkConnectedOverlayOpen","open"],disableClose:[0,"cdkConnectedOverlayDisableClose","disableClose"],transformOriginSelector:[0,"cdkConnectedOverlayTransformOriginOn","transformOriginSelector"],hasBackdrop:[2,"cdkConnectedOverlayHasBackdrop","hasBackdrop",oe],lockPosition:[2,"cdkConnectedOverlayLockPosition","lockPosition",oe],flexibleDimensions:[2,"cdkConnectedOverlayFlexibleDimensions","flexibleDimensions",oe],growAfterOpen:[2,"cdkConnectedOverlayGrowAfterOpen","growAfterOpen",oe],push:[2,"cdkConnectedOverlayPush","push",oe],disposeOnNavigation:[2,"cdkConnectedOverlayDisposeOnNavigation","disposeOnNavigation",oe],usePopover:[0,"cdkConnectedOverlayUsePopover","usePopover"],matchWidth:[2,"cdkConnectedOverlayMatchWidth","matchWidth",oe],_config:[0,"cdkConnectedOverlay","_config"]},outputs:{backdropClick:"backdropClick",positionChange:"positionChange",attach:"attach",detach:"detach",overlayKeydown:"overlayKeydown",overlayOutsideClick:"overlayOutsideClick"},exportAs:["cdkConnectedOverlay"],features:[ut]})}return t})(),$o=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=P({type:t});static \u0275inj=F({providers:[d0],imports:[pe,Fg,kg,kg]})}return t})();var gO=new g("MATERIAL_ANIMATIONS"),f0=null;function vO(){return u(gO,{optional:!0})?.animationsDisabled||u(Ws,{optional:!0})==="NoopAnimations"?"di-disabled":(f0??=u(pu).matchMedia("(prefers-reduced-motion)").matches,f0?"reduced-motion":"enabled")}function Le(){return vO()!=="enabled"}function Kt(t){return t!=null&&`${t}`!="false"}var Qt=(function(t){return t[t.FADING_IN=0]="FADING_IN",t[t.VISIBLE=1]="VISIBLE",t[t.FADING_OUT=2]="FADING_OUT",t[t.HIDDEN=3]="HIDDEN",t})(Qt||{}),Vg=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=Qt.HIDDEN;constructor(n,e,r,i=!1){this._renderer=n,this.element=e,this.config=r,this._animationForciblyDisabledThroughCss=i}fadeOut(){this._renderer.fadeOutRipple(this)}},h0=No({passive:!0,capture:!0}),Bg=class{_events=new Map;addHandler(n,e,r,i){let o=this._events.get(e);if(o){let s=o.get(r);s?s.add(i):o.set(r,new Set([i]))}else this._events.set(e,new Map([[r,new Set([i])]])),n.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,h0)})}removeHandler(n,e,r){let i=this._events.get(n);if(!i)return;let o=i.get(e);o&&(o.delete(r),o.size===0&&i.delete(e),i.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,h0)))}_delegateEventHandler=n=>{let e=mt(n);e&&this._events.get(n.type)?.forEach((r,i)=>{(i===e||i.contains(e))&&r.forEach(o=>o.handleEvent(n))})}},qa={enterDuration:225,exitDuration:150},yO=800,p0=No({passive:!0,capture:!0}),m0=["mousedown","touchstart"],g0=["mouseup","mouseleave","touchend","touchcancel"],bO=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275cmp=M({type:t,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(r,i){},styles:[`.mat-ripple {
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
`],encapsulation:2,changeDetection:0})}return t})(),Ya=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Bg;constructor(n,e,r,i,o){this._target=n,this._ngZone=e,this._platform=i,i.isBrowser&&(this._containerElement=Sn(r)),o&&o.get(wt).load(bO)}fadeInRipple(n,e,r={}){let i=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=m(m({},qa),r.animation);r.centered&&(n=i.left+i.width/2,e=i.top+i.height/2);let s=r.radius||_O(n,e,i),a=n-i.left,l=e-i.top,c=o.enterDuration,d=document.createElement("div");d.classList.add("mat-ripple-element"),d.style.left=`${a-s}px`,d.style.top=`${l-s}px`,d.style.height=`${s*2}px`,d.style.width=`${s*2}px`,r.color!=null&&(d.style.backgroundColor=r.color),d.style.transitionDuration=`${c}ms`,this._containerElement.appendChild(d);let f=window.getComputedStyle(d),h=f.transitionProperty,p=f.transitionDuration,y=h==="none"||p==="0s"||p==="0s, 0s"||i.width===0&&i.height===0,E=new Vg(this,d,r,y);d.style.transform="scale3d(1, 1, 1)",E.state=Qt.FADING_IN,r.persistent||(this._mostRecentTransientRipple=E);let S=null;return!y&&(c||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let A=()=>{S&&(S.fallbackTimer=null),clearTimeout(tt),this._finishRippleTransition(E)},be=()=>this._destroyRipple(E),tt=setTimeout(be,c+100);d.addEventListener("transitionend",A),d.addEventListener("transitioncancel",be),S={onTransitionEnd:A,onTransitionCancel:be,fallbackTimer:tt}}),this._activeRipples.set(E,S),(y||!c)&&this._finishRippleTransition(E),E}fadeOutRipple(n){if(n.state===Qt.FADING_OUT||n.state===Qt.HIDDEN)return;let e=n.element,r=m(m({},qa),n.config.animation);e.style.transitionDuration=`${r.exitDuration}ms`,e.style.opacity="0",n.state=Qt.FADING_OUT,(n._animationForciblyDisabledThroughCss||!r.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let e=Sn(n);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,m0.forEach(r=>{t._eventManager.addHandler(this._ngZone,r,e,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{g0.forEach(e=>{this._triggerElement.addEventListener(e,this,p0)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===Qt.FADING_IN?this._startFadeOutTransition(n):n.state===Qt.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let e=n===this._mostRecentTransientRipple,{persistent:r}=n.config;n.state=Qt.VISIBLE,!r&&(!e||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let e=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=Qt.HIDDEN,e!==null&&(n.element.removeEventListener("transitionend",e.onTransitionEnd),n.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),n.element.remove()}_onMousedown(n){let e=Si(n),r=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+yO;!this._target.rippleDisabled&&!e&&!r&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!Mi(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=n.changedTouches;if(e)for(let r=0;r<e.length;r++)this.fadeInRipple(e[r].clientX,e[r].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let e=n.state===Qt.VISIBLE||n.config.terminateOnPointerUp&&n.state===Qt.FADING_IN;!n.config.persistent&&e&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(m0.forEach(e=>t._eventManager.removeHandler(e,n,this)),this._pointerUpEventsRegistered&&(g0.forEach(e=>n.removeEventListener(e,this,p0)),this._pointerUpEventsRegistered=!1))}};function _O(t,n,e){let r=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),i=Math.max(Math.abs(n-e.top),Math.abs(n-e.bottom));return Math.sqrt(r*r+i*i)}var Hg=new g("mat-ripple-global-options"),zo=(()=>{class t{_elementRef=u(j);_animationsDisabled=Le();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=u(O),r=u(Ee),i=u(Hg,{optional:!0}),o=u(z);this._globalOptions=i||{},this._rippleRenderer=new Ya(this,e,this._elementRef,r,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:m(m(m({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,r=0,i){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,r,m(m({},this.rippleConfig),i)):this._rippleRenderer.fadeInRipple(0,0,m(m({},this.rippleConfig),e))}static \u0275fac=function(r){return new(r||t)};static \u0275dir=Y({type:t,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(r,i){r&2&&L("mat-ripple-unbounded",i.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return t})();var wO={capture:!0},DO=["focus","mousedown","mouseenter","touchstart"],Ug="mat-ripple-loader-uninitialized",$g="mat-ripple-loader-class-name",v0="mat-ripple-loader-centered",Tu="mat-ripple-loader-disabled",y0=(()=>{class t{_document=u(B);_animationsDisabled=Le();_globalRippleOptions=u(Hg,{optional:!0});_platform=u(Ee);_ngZone=u(O);_injector=u(z);_eventCleanups;_hosts=new Map;constructor(){let e=u(it).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>DO.map(r=>e.listen(this._document,r,this._onInteraction,wO)))}ngOnDestroy(){let e=this._hosts.keys();for(let r of e)this.destroyRipple(r);this._eventCleanups.forEach(r=>r())}configureRipple(e,r){e.setAttribute(Ug,this._globalRippleOptions?.namespace??""),(r.className||!e.hasAttribute($g))&&e.setAttribute($g,r.className||""),r.centered&&e.setAttribute(v0,""),r.disabled&&e.setAttribute(Tu,"")}setDisabled(e,r){let i=this._hosts.get(e);i?(i.target.rippleDisabled=r,!r&&!i.hasSetUpEvents&&(i.hasSetUpEvents=!0,i.renderer.setupTriggerEvents(e))):r?e.setAttribute(Tu,""):e.removeAttribute(Tu)}_onInteraction=e=>{let r=mt(e);if(r instanceof HTMLElement){let i=r.closest(`[${Ug}="${this._globalRippleOptions?.namespace??""}"]`);i&&this._createRipple(i)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let r=this._document.createElement("span");r.classList.add("mat-ripple",e.getAttribute($g)),e.append(r);let i=this._globalRippleOptions,o=this._animationsDisabled?0:i?.animation?.enterDuration??qa.enterDuration,s=this._animationsDisabled?0:i?.animation?.exitDuration??qa.exitDuration,a={rippleDisabled:this._animationsDisabled||i?.disabled||e.hasAttribute(Tu),rippleConfig:{centered:e.hasAttribute(v0),terminateOnPointerUp:i?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:s}}},l=new Ya(a,this._ngZone,r,this._platform,this._injector),c=!a.rippleDisabled;c&&l.setupTriggerEvents(e),this._hosts.set(e,{target:a,renderer:l,hasSetUpEvents:c}),e.removeAttribute(Ug)}destroyRipple(e){let r=this._hosts.get(e);r&&(r.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Nr=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275cmp=M({type:t,selectors:[["structural-styles"]],decls:0,vars:0,template:function(r,i){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2,changeDetection:0})}return t})();var CO=["mat-icon-button",""],EO=["*"],xO=new g("MAT_BUTTON_CONFIG");function b0(t){return t==null?void 0:bi(t)}var zg=(()=>{class t{_elementRef=u(j);_ngZone=u(O);_animationsDisabled=Le();_config=u(xO,{optional:!0});_focusMonitor=u(Mn);_cleanupClick;_renderer=u(Xe);_rippleLoader=u(y0);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){u(wt).load(Nr);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",r){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,r):this._elementRef.nativeElement.focus(r)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(r){return new(r||t)};static \u0275dir=Y({type:t,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(r,i){r&2&&(fe("disabled",i._getDisabledAttribute())("aria-disabled",i._getAriaDisabled())("tabindex",i._getTabIndex()),Tt(i.color?"mat-"+i.color:""),L("mat-mdc-button-disabled",i.disabled)("mat-mdc-button-disabled-interactive",i.disabledInteractive)("mat-unthemed",!i.color)("_mat-animation-noopable",i._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",oe],disabled:[2,"disabled","disabled",oe],ariaDisabled:[2,"aria-disabled","ariaDisabled",oe],disabledInteractive:[2,"disabledInteractive","disabledInteractive",oe],tabIndex:[2,"tabIndex","tabIndex",b0],_tabindex:[2,"tabindex","_tabindex",b0]}})}return t})(),Gg=(()=>{class t extends zg{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=M({type:t,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[Pe],attrs:CO,ngContentSelectors:EO,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(r,i){r&1&&(ce(),Nt(0,"span",0),R(1),Nt(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
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
`],encapsulation:2,changeDetection:0})}return t})();var Go=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=P({type:t});static \u0275inj=F({imports:[pe]})}return t})();var IO=["matButton",""],SO=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],MO=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var _0=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Au=(()=>{class t extends zg{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=TO(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let r=this._elementRef.nativeElement.classList,i=this._appearance?_0.get(this._appearance):null,o=_0.get(e);i&&r.remove(...i),r.add(...o),this._appearance=e}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=M({type:t,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[Pe],attrs:IO,ngContentSelectors:MO,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(r,i){r&1&&(ce(SO),Nt(0,"span",0),R(1),ot(2,"span",1),R(3,1),pt(),R(4,2),Nt(5,"span",2)(6,"span",3)),r&2&&L("mdc-button__ripple",!i._isFab)("mdc-fab__ripple",i._isFab)},styles:[`.mat-mdc-button-base {
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
`],encapsulation:2,changeDetection:0})}return t})();function TO(t){return t.hasAttribute("mat-raised-button")?"elevated":t.hasAttribute("mat-stroked-button")?"outlined":t.hasAttribute("mat-flat-button")?"filled":t.hasAttribute("mat-button")?"text":null}var Za=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=P({type:t});static \u0275inj=F({imports:[Go,pe]})}return t})();function AO(t,n){if(t&1){let e=Ot();b(0,"div",1)(1,"button",2),ge("click",function(){Ze(e);let i=H();return Ke(i.action())}),x(2),w()()}if(t&2){let e=H();v(2),ae(" ",e.data.action," ")}}var RO=["label"];function kO(t,n){}var NO=Math.pow(2,31)-1,Ka=class{_overlayRef;instance;containerInstance;_afterDismissed=new D;_afterOpened=new D;_onAction=new D;_durationTimeoutId;_dismissedByAction=!1;constructor(n,e){this._overlayRef=e,this.containerInstance=n,n._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(n){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(n,NO))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},D0=new g("MatSnackBarData"),Wo=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},OO=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275dir=Y({type:t,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return t})(),FO=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275dir=Y({type:t,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return t})(),PO=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275dir=Y({type:t,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return t})(),LO=(()=>{class t{snackBarRef=u(Ka);data=u(D0);constructor(){}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=M({type:t,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(r,i){r&1&&(b(0,"div",0),x(1),w(),X(2,AO,3,1,"div",1)),r&2&&(v(),ae(" ",i.data.message,`
`),v(),J(i.hasAction?2:-1))},dependencies:[Au,OO,FO,PO],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2,changeDetection:0})}return t})(),Wg="_mat-snack-bar-enter",qg="_mat-snack-bar-exit",jO=(()=>{class t extends Bo{_ngZone=u(O);_elementRef=u(j);_changeDetectorRef=u(Te);_platform=u(Ee);_animationsDisabled=Le();snackBarConfig=u(Wo);_document=u(B);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=u(z);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new D;_onExit=new D;_onEnter=new D;_animationState="void";_live;_label;_role;_liveElementId=u(at).getId("mat-snack-bar-container-live-");constructor(){super();let e=this.snackBarConfig;e.politeness==="assertive"&&!e.announcementMessage?this._live="assertive":e.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(e){this._assertNotAttached();let r=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),r}attachTemplatePortal(e){this._assertNotAttached();let r=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),r}attachDomPortal=e=>{this._assertNotAttached();let r=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),r};onAnimationEnd(e){e===qg?this._completeExit():e===Wg&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?ze(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Wg)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(Wg)},200)))}exit(){return this._destroyed?N(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?ze(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(qg)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(qg),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,r=this.snackBarConfig.panelClass;r&&(Array.isArray(r)?r.forEach(s=>e.classList.add(s)):e.classList.add(r)),this._exposeToModals();let i=this._label.nativeElement,o="mdc-snackbar__label";i.classList.toggle(o,!i.querySelector(`.${o}`))}_exposeToModals(){let e=this._liveElementId,r=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let i=0;i<r.length;i++){let o=r[i],s=o.getAttribute("aria-owns");this._trackedModals.add(o),s?s.indexOf(e)===-1&&o.setAttribute("aria-owns",s+" "+e):o.setAttribute("aria-owns",e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let r=e.getAttribute("aria-owns");if(r){let i=r.replace(this._liveElementId,"").trim();i.length>0?e.setAttribute("aria-owns",i):e.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,r=e.querySelector("[aria-hidden]"),i=e.querySelector("[aria-live]");if(r&&i){let o=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&r.contains(document.activeElement)&&(o=document.activeElement),r.removeAttribute("aria-hidden"),i.appendChild(r),o?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=M({type:t,selectors:[["mat-snack-bar-container"]],viewQuery:function(r,i){if(r&1&&et(Og,7)(RO,7),r&2){let o;Z(o=K())&&(i._portalOutlet=o.first),Z(o=K())&&(i._label=o.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(r,i){r&1&&ge("animationend",function(s){return i.onAnimationEnd(s.animationName)})("animationcancel",function(s){return i.onAnimationEnd(s.animationName)}),r&2&&L("mat-snack-bar-container-enter",i._animationState==="visible")("mat-snack-bar-container-exit",i._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!i._animationsDisabled)},features:[Pe],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(r,i){r&1&&(b(0,"div",1)(1,"div",2,0)(3,"div",3),zt(4,kO,0,0,"ng-template",4),w(),he(5,"div"),w()()),r&2&&(v(5),fe("aria-live",i._live)("role",i._role)("id",i._liveElementId))},dependencies:[Og],styles:[`@keyframes _mat-snack-bar-enter {
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
`],encapsulation:2})}return t})(),VO=new g("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new Wo}),C0=(()=>{class t{_live=u(Fa);_injector=u(z);_breakpointObserver=u(Ri);_parentSnackBar=u(t,{optional:!0,skipSelf:!0});_defaultConfig=u(VO);_animationsDisabled=Le();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=LO;snackBarContainerComponent=jO;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}constructor(){}openFromComponent(e,r){return this._attach(e,r)}openFromTemplate(e,r){return this._attach(e,r)}open(e,r="",i){let o=m(m({},this._defaultConfig),i);return o.data={message:e,action:r},o.announcementMessage===e&&(o.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,o)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,r){let i=r&&r.viewContainerRef&&r.viewContainerRef.injector,o=z.create({parent:i||this._injector,providers:[{provide:Wo,useValue:r}]}),s=new Vo(this.snackBarContainerComponent,r.viewContainerRef,o),a=e.attach(s);return a.instance.snackBarConfig=r,a.instance}_attach(e,r){let i=m(m(m({},new Wo),this._defaultConfig),r),o=this._createOverlay(i),s=this._attachSnackBarContainer(o,i),a=new Ka(s,o);if(e instanceof dt){let l=new ir(e,null,{$implicit:i.data,snackBarRef:a});a.instance=s.attachTemplatePortal(l)}else{let l=this._createInjector(i,a),c=new Vo(e,void 0,l),d=s.attachComponentPortal(c);a.instance=d.instance}return this._breakpointObserver.observe(Po.HandsetPortrait).pipe(ue(o.detachments())).subscribe(l=>{o.overlayElement.classList.toggle(this.handsetCssClass,l.matches)}),i.announcementMessage&&s._onAnnounce.subscribe(()=>{this._live.announce(i.announcementMessage,i.politeness)}),this._animateSnackBar(a,i),this._openedSnackBarRef=a,this._openedSnackBarRef}_animateSnackBar(e,r){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),r.announcementMessage&&this._live.clear()}),r.duration&&r.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(r.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let r=new or;r.direction=e.direction;let i=Su(this._injector),o=e.direction==="rtl",s=e.horizontalPosition==="left"||e.horizontalPosition==="start"&&!o||e.horizontalPosition==="end"&&o,a=!s&&e.horizontalPosition!=="center";return s?i.left("0"):a?i.right("0"):i.centerHorizontally(),e.verticalPosition==="top"?i.top("0"):i.bottom("0"),r.positionStrategy=i,r.disableAnimations=this._animationsDisabled,Pi(this._injector,r)}_createInjector(e,r){let i=e&&e.viewContainerRef&&e.viewContainerRef.injector;return z.create({parent:i||this._injector,providers:[{provide:Ka,useValue:r},{provide:D0,useValue:e.data}]})}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Kg=class{translations;constructor(n){this.translations=n}getTranslation(n){return N(this.translations.get(n)||{})}},I0=new g("");function Yg(t,n){return t&&(Object.prototype.hasOwnProperty.call(t,n)?t[n]:n.split(".").reduce((e,r)=>e?.[r],t))}function BO(t,n,e){t=m({},t);let r=n.split("."),i=r.length-1;return r.reduce((o,s,a)=>(a===i?o[s]=e:o[s]=Array.isArray(o[s])?o[s].slice():m({},o[s]),o&&o[s]),t),t}function S0(t){return t?Array.isArray(t)?t.length:Nu(t)?Object.keys(t).length:t?t.length:0:0}function HO(t){return S0(t)===0}function UO(t){return typeof t=="function"}function Yo(t){return typeof t=="string"}function Nu(t){return!!t&&typeof t=="object"&&!Array.isArray(t)}function M0(t){return t.replace(/(?:^\w|[A-Z]|\b\w)/g,(n,e)=>e==0?n.toLowerCase():n.toUpperCase()).replace(/\s+|_|-|\//g,"")}function T0(){return typeof window<"u"}function Qg(t){return t==null}function E0(t){return Qg(t)===!1}function A0(t){return t&&typeof t.scope=="string"}function $O(t){return t&&Nu(t.loader)}function x0(t){let n={};function e(r,i){if(r===null)n[i]=null;else if(Nu(r))for(let[o,s]of Object.entries(r))e(s,i?`${i}.${o}`:o);else n[i]=r}return e(t,""),n}function zO(t){let n={};for(let[e,r]of Object.entries(t)){let i=e.split("."),o=n;i.forEach((s,a)=>{a===i.length-1?o[s]=r:(o[s]??={},o=o[s])})}return n}var Zo=new g("",{providedIn:"root",factory:()=>qo}),qo={defaultLang:"en",reRenderOnLangChange:!1,prodMode:!1,failedRetries:2,fallbackLang:[],availableLangs:[],missingHandler:{logMissingKey:!0,useFallbackTranslation:!1,allowEmpty:!1},flatten:{aot:!1},interpolation:["{{","}}"],scopes:{keepCasing:!1}};function GO(t={}){return U(m(m({},qo),t),{missingHandler:m(m({},qo.missingHandler),t.missingHandler),flatten:m(m({},qo.flatten),t.flatten),scopes:m(m({},qo.scopes),t.scopes)})}var R0=new g(""),WO=(()=>{class t{config=u(Zo,{optional:!0})??qo;get interpolationMatcher(){return qO(this.config)}transpile({value:e,params:r={},translation:i,key:o}){if(Yo(e)){let s,a=e;for(;(s=this.interpolationMatcher.exec(a))!==null;){let[l,c]=s;a=a.replace(l,()=>{let d=c.trim(),f=Yg(r,d);return E0(f)?f:E0(i[d])?this.transpile({params:r,translation:i,key:o,value:i[d]}):""})}return a}else r&&(Nu(e)?e=this.handleObject({value:e,params:r,translation:i,key:o}):Array.isArray(e)&&(e=this.handleArray({value:e,params:r,translation:i,key:o})));return e}handleObject({value:e,params:r={},translation:i,key:o}){let s=e;return Object.keys(r).forEach(a=>{let l=this.transpile({value:Yg(s,a),params:Yg(r,a),translation:i,key:o});s=BO(s,a,l)}),s}handleArray(i){var o=i,{value:e}=o,r=bf(o,["value"]);return e.map(s=>this.transpile(m({value:s},r)))}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:t.\u0275fac})}return t})();function qO(t){let[n,e]=t.interpolation;return new RegExp(`${n}([^${n}${e}]*?)${e}`,"g")}var k0=new g(""),YO=(()=>{class t{handle(e,r){if(r.missingHandler.logMissingKey&&!r.prodMode){let i=`Missing translation for '${e}'`;console.warn(`%c ${i}`,"font-size: 12px; color: red")}return e}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:t.\u0275fac})}return t})(),N0=new g(""),ZO=(()=>{class t{preSaveTranslation(e){return e}preSaveTranslationKey(e,r){return r}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:t.\u0275fac})}return t})(),O0=new g(""),KO=(()=>{class t{userConfig;constructor(e){this.userConfig=e}getNextLangs(){let e=this.userConfig.fallbackLang;if(!e)throw new Error("When using the default fallback, a fallback language must be provided in the config!");return Array.isArray(e)?e:[e]}static \u0275fac=function(r){return new(r||t)(T(Zo))};static \u0275prov=_({token:t,factory:t.\u0275fac})}return t})();function Qa(t){if(!t)return"";let n=t.split("/");return n.pop(),n.join("/")}function Or(t){return t?t.split("/").pop():""}function Xg(t,n,e="|"){if(Yo(t)){let r=t.split(e),i=r.pop();return i===n?[!0,r.toString()]:[!1,i]}return[!1,""]}function F0(t,n){let[e]=Xg(n,"static");return e?!1:!!t.config.reRenderOnLangChange}function P0(t){return t?n=>n:xe(1)}function QO(t,n){return Object.keys(t).reduce((e,r)=>(e[`${n}/${r}`]=t[r],e),{})}function ev(t,n){return $O(t)?QO(t.loader,n):void 0}function Zg(t){return{scope:Qa(t)||null,langName:Or(t)}}function L0(t){let{path:n,inlineLoader:e,mainLoader:r,data:i}=t;if(e){let o=e[n];if(UO(o)===!1)throw`You're using an inline loader but didn't provide a loader for ${n}`;return e[n]().then(s=>s.default?s.default:s)}return r.getTranslation(n,i)}function XO({mainLoader:t,path:n,data:e,fallbackPath:r,inlineLoader:i}){return(r?[n,r]:[n]).map(s=>{let a=L0({path:s,mainLoader:t,inlineLoader:i,data:e});return Me(a).pipe(I(l=>({translation:l,lang:s})))})}var JO;var Ko=(()=>{class t{loader;parser;missingHandler;interceptor;fallbackStrategy;langChanges$;translations=new Map;cache=new Map;firstFallbackLang;defaultLang="";availableLangs=[];isResolvedMissingOnce=!1;lang;failedLangs=new Set;events=new D;events$=this.events.asObservable();config;destroyRef=u(Fe);constructor(e,r,i,o,s,a){this.loader=e,this.parser=r,this.missingHandler=i,this.interceptor=o,this.fallbackStrategy=a,this.loader||(this.loader=new Kg(this.translations)),JO=this,this.config=JSON.parse(JSON.stringify(s)),this.setAvailableLangs(this.config.availableLangs||[]),this.setFallbackLangForMissingTranslation(this.config),this.setDefaultLang(this.config.defaultLang),this.lang=new je(this.getDefaultLang()),this.langChanges$=this.lang.asObservable(),this.events$.subscribe(l=>{l.type==="translationLoadSuccess"&&l.wasFailure&&this.setActiveLang(l.payload.langName)}),this.destroyRef.onDestroy(()=>{this.lang.complete(),this.events.complete(),this.cache.clear()})}getDefaultLang(){return this.defaultLang}setDefaultLang(e){this.defaultLang=e}getActiveLang(){return this.lang.getValue()}setActiveLang(e){return this.parser.onLangChanged?.(e),this.lang.next(e),this.events.next({type:"langChanged",payload:Zg(e)}),this}setAvailableLangs(e){this.availableLangs=e}getAvailableLangs(){return this.availableLangs}load(e,r={}){let i=this.cache.get(e);if(i)return i;let o,s=this._isLangScoped(e),a;s&&(a=Qa(e));let l={path:e,mainLoader:this.loader,inlineLoader:r.inlineLoader,data:s?{scope:a}:void 0};if(this.useFallbackTranslation(e)){let d=s?`${a}/${this.firstFallbackLang}`:this.firstFallbackLang,f=XO(U(m({},l),{fallbackPath:d}));o=kn(f)}else{let d=L0(l);o=Me(d)}let c=o.pipe(jf(this.config.failedRetries),Be(d=>{if(Array.isArray(d)){d.forEach(f=>{this.handleSuccess(f.lang,f.translation),f.lang!==e&&this.cache.set(f.lang,N({}))});return}this.handleSuccess(e,d)}),mn(d=>(this.config.prodMode||console.error(`Error while trying to load "${e}"`,d),this.handleFailure(e,r))),Zr(1),Tr(this.destroyRef));return this.cache.set(e,c),c}translate(e,r={},i=this.getActiveLang()){if(!e)return e;let{scope:o,resolveLang:s}=this.resolveLangAndScope(i);if(Array.isArray(e))return e.map(c=>this.translate(o?`${o}.${c}`:c,r,s));e=o?`${o}.${e}`:e;let a=this.getTranslation(s),l=a[e];return l?this.parser.transpile({value:l,params:r,translation:a,key:e}):this._handleMissingKey(e,l,r)}selectTranslate(e,r,i,o=!1){let s,a=(c,d)=>this.load(c,d).pipe(I(()=>o?this.translateObject(e,r,c):this.translate(e,r,c)));if(Qg(i))return this.langChanges$.pipe(ve(c=>a(c)));if(i=Array.isArray(i)?i[0]:i,A0(i)){let c=i;i=c.scope,s=ev(c,c.scope)}if(i=i,this.isLang(i)||this.isScopeWithLang(i))return a(i);let l=i;return this.langChanges$.pipe(ve(c=>a(`${l}/${c}`,{inlineLoader:s})))}isScopeWithLang(e){return this.isLang(Or(e))}translateObject(e,r={},i=this.getActiveLang()){if(Yo(e)||Array.isArray(e)){let{resolveLang:s,scope:a}=this.resolveLangAndScope(i);if(Array.isArray(e))return e.map(d=>this.translateObject(a?`${a}.${d}`:d,r,s));let l=this.getTranslation(s);e=a?`${a}.${e}`:e;let c=zO(this.getObjectByKey(l,e));return HO(c)?this.translate(e,r,i):this.parser.transpile({value:c,params:r,translation:l,key:e})}let o=[];for(let[s,a]of this.getEntries(e))o.push(this.translateObject(s,a,i));return o}selectTranslateObject(e,r,i){if(Yo(e)||Array.isArray(e))return this.selectTranslate(e,r,i,!0);let[[o,s],...a]=this.getEntries(e);return this.selectTranslateObject(o,s,i).pipe(I(l=>{let c=[l];for(let[d,f]of a)c.push(this.translateObject(d,f,i));return c}))}getTranslation(e){if(e){if(this.isLang(e))return this.translations.get(e)||{};{let{scope:r,resolveLang:i}=this.resolveLangAndScope(e),o=this.translations.get(i)||{};return this.getObjectByKey(o,r)}}return this.translations}selectTranslation(e){let r=this.langChanges$;if(e){let i=Or(e)!==e;this.isLang(e)||i?r=N(e):r=this.langChanges$.pipe(I(o=>`${e}/${o}`))}return r.pipe(ve(i=>this.load(i).pipe(I(()=>this.getTranslation(i)))))}setTranslation(e,r=this.getActiveLang(),i={}){let s=m(m({},{merge:!0,emitChange:!0}),i),a=Qa(r),l=e;if(a){let p=this.getMappedScope(a);l=x0({[p]:e})}let c=a?Or(r):r,d=m(m({},s.merge&&this.getTranslation(c)),l),f=this.config.flatten.aot?d:x0(d),h=this.interceptor.preSaveTranslation(f,c);this.translations.set(c,h),s.emitChange&&this.setActiveLang(this.getActiveLang())}setTranslationKey(e,r,i={}){let o=i.lang||this.getActiveLang(),s=this.interceptor.preSaveTranslationKey(e,r,o),a={[e]:s};this.setTranslation(a,o,U(m({},i),{merge:!0}))}setFallbackLangForMissingTranslation({fallbackLang:e}){let r=Array.isArray(e)?e[0]:e;e&&this.useFallbackTranslation(r)&&(this.firstFallbackLang=r)}_handleMissingKey(e,r,i){if(this.config.missingHandler.allowEmpty&&r==="")return"";if(!this.isResolvedMissingOnce&&this.useFallbackTranslation()){this.isResolvedMissingOnce=!0;let o=this.translate(e,i,this.firstFallbackLang);return this.isResolvedMissingOnce=!1,o}return this.missingHandler.handle(e,this.getMissingHandlerData(),i)}_isLangScoped(e){return this.getAvailableLangsIds().indexOf(e)===-1}isLang(e){return this.getAvailableLangsIds().indexOf(e)!==-1}_loadDependencies(e,r){let i=Or(e);return this._isLangScoped(e)&&!this.isLoadedTranslation(i)?Wr([this.load(i),this.load(e,{inlineLoader:r})]):this.load(e,{inlineLoader:r})}_completeScopeWithLang(e){return this._isLangScoped(e)&&!this.isLang(Or(e))?`${e}/${this.getActiveLang()}`:e}_setScopeAlias(e,r){this.config.scopeMapping||(this.config.scopeMapping={}),this.config.scopeMapping[e]=r}isLoadedTranslation(e){return S0(this.getTranslation(e))}getAvailableLangsIds(){let e=this.getAvailableLangs()[0];return Yo(e)?this.getAvailableLangs():this.getAvailableLangs().map(r=>r.id)}getMissingHandlerData(){return U(m({},this.config),{activeLang:this.getActiveLang(),availableLangs:this.availableLangs,defaultLang:this.defaultLang})}useFallbackTranslation(e){return this.config.missingHandler.useFallbackTranslation&&e!==this.firstFallbackLang}handleSuccess(e,r){this.setTranslation(r,e,{emitChange:!1}),this.events.next({wasFailure:!!this.failedLangs.size,type:"translationLoadSuccess",payload:Zg(e)}),this.failedLangs.forEach(i=>this.cache.delete(i)),this.failedLangs.clear()}handleFailure(e,r){Qg(r.failedCounter)&&(r.failedCounter=0,r.fallbackLangs||(r.fallbackLangs=this.fallbackStrategy.getNextLangs(e)));let i=e.split("/"),s=r.fallbackLangs[r.failedCounter];if(this.failedLangs.add(e),this.cache.has(s))return this.handleSuccess(s,this.getTranslation(s)),Ve;let a=s===i[i.length-1];if(!s||a){let c="Unable to load translation and all the fallback languages";throw i.length>1&&(c+=", did you misspelled the scope name?"),new Error(c)}let l=s;return i.length>1&&(i[i.length-1]=s,l=i.join("/")),r.failedCounter++,this.events.next({type:"translationLoadFailure",payload:Zg(e)}),this.load(l,r)}getMappedScope(e){let{scopeMapping:r={},scopes:i={keepCasing:!1}}=this.config;return r[e]||(i.keepCasing?e:M0(e))}resolveLangAndScope(e){let r=e,i;if(this._isLangScoped(e)){let o=Or(e),s=this.isLang(o);r=s?o:this.getActiveLang(),i=this.getMappedScope(s?Qa(e):e)}return{scope:i,resolveLang:r}}getObjectByKey(e,r){let i={},o=`${r}.`;for(let s in e)s.startsWith(o)&&(i[s.replace(o,"")]=e[s]);return i}getEntries(e){return e instanceof Map?e.entries():Object.entries(e)}static \u0275fac=function(r){return new(r||t)(T(I0,8),T(R0),T(k0),T(N0),T(Zo),T(O0))};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),eF=(()=>{class t{html;static \u0275fac=function(r){return new(r||t)};static \u0275cmp=M({type:t,selectors:[["ng-component"]],inputs:{html:"html"},decls:1,vars:1,consts:[[1,"transloco-loader-template",3,"innerHTML"]],template:function(r,i){r&1&&Nt(0,"div",0),r&2&&Gt("innerHTML",i.html,Yp)},encapsulation:2})}return t})(),Jg=class{view;vcr;constructor(n,e){this.view=n,this.vcr=e}attachView(){if(this.view instanceof dt)this.vcr.createEmbeddedView(this.view);else if(Yo(this.view)){let n=this.vcr.createComponent(eF);n.instance.html=this.view,n.hostView.detectChanges()}else this.vcr.createComponent(this.view)}detachView(){this.vcr.clear()}},j0=new g(""),tF=new g(""),V0=new g(""),Ru=class{initialized=!1;resolve({inline:n,provider:e,active:r}){let i=r;if(this.initialized)return i=r,i;if(e){let[,o]=Xg(e,"static");i=o}if(n){let[,o]=Xg(n,"static");i=o}return this.initialized=!0,i}resolveLangBasedOnScope(n){return Qa(n)?Or(n):n}resolveLangPath(n,e){return e?`${e}/${n}`:n}},ku=class{service;constructor(n){this.service=n}resolve(n){let{inline:e,provider:r}=n;if(e)return e;if(r){if(A0(r)){let{scope:i,alias:o=this.service.config.scopes.keepCasing?i:M0(i)}=r;return this.service._setScopeAlias(i,o),i}return r}}},B0=(()=>{class t{destroyRef=u(Fe);service=u(Ko);tpl=u(dt,{optional:!0});providerLang=u(j0,{optional:!0});providerScope=u(V0,{optional:!0});providedLoadingTpl=u(tF,{optional:!0});cdr=u(Te);host=u(j);vcr=u(ft);renderer=u(Xe);view;memo=new Map;key;params={};inlineScope;inlineRead;prefix;inlineLang;inlineTpl;currentLang;loaderTplHandler;initialized=!1;path;langResolver=new Ru;scopeResolver=new ku(this.service);strategy=this.tpl===null?"attribute":"structural";static ngTemplateContextGuard(e,r){return!0}ngOnInit(){let e=F0(this.service,this.providerLang||this.inlineLang);if(this.service.langChanges$.pipe(ve(r=>{let i=this.langResolver.resolve({inline:this.inlineLang,provider:this.providerLang,active:r});return Array.isArray(this.providerScope)?kn(this.providerScope.map(o=>this.resolveScope(i,o))):this.resolveScope(i,this.providerScope)}),P0(e),Tr(this.destroyRef)).subscribe(()=>{this.currentLang=this.langResolver.resolveLangBasedOnScope(this.path),this.strategy==="attribute"?this.attributeStrategy():this.structuralStrategy(this.currentLang,this.prefix||this.inlineRead),this.cdr.markForCheck(),this.initialized=!0}),!this.initialized){let r=this.resolveLoadingContent();r&&(this.loaderTplHandler=new Jg(r,this.vcr),this.loaderTplHandler.attachView())}}ngOnChanges(e){this.strategy==="attribute"&&Object.keys(e).some(i=>!e[i].firstChange)&&this.attributeStrategy()}attributeStrategy(){this.detachLoader(),this.renderer.setProperty(this.host.nativeElement,"innerText",this.service.translate(this.key,this.params,this.currentLang))}structuralStrategy(e,r){this.memo.clear();let i=this.getTranslateFn(e,r);this.view?(this.view.context.$implicit=i,this.view.context.currentLang=this.currentLang):(this.detachLoader(),this.view=this.vcr.createEmbeddedView(this.tpl,{$implicit:i,currentLang:this.currentLang}))}getTranslateFn(e,r){return(i,o)=>{let s=r?`${r}.${i}`:i,a=o?`${s}${JSON.stringify(o)}`:s;return this.memo.has(a)||this.memo.set(a,this.service.translate(s,o,e)),this.memo.get(a)}}resolveLoadingContent(){return this.inlineTpl||this.providedLoadingTpl}ngOnDestroy(){this.memo.clear()}detachLoader(){this.loaderTplHandler?.detachView()}resolveScope(e,r){let i=this.scopeResolver.resolve({inline:this.inlineScope,provider:r});this.path=this.langResolver.resolveLangPath(e,i);let o=ev(r,i);return this.service._loadDependencies(this.path,o)}static \u0275fac=function(r){return new(r||t)};static \u0275dir=Y({type:t,selectors:[["","transloco",""]],inputs:{key:[0,"transloco","key"],params:[0,"translocoParams","params"],inlineScope:[0,"translocoScope","inlineScope"],inlineRead:[0,"translocoRead","inlineRead"],prefix:[0,"translocoPrefix","prefix"],inlineLang:[0,"translocoLang","inlineLang"],inlineTpl:[0,"translocoLoadingTpl","inlineTpl"]},features:[ut]})}return t})(),Qo=(()=>{class t{service;providerScope;providerLang;cdr;subscription=null;lastValue="";lastKey;path;langResolver=new Ru;scopeResolver;constructor(e,r,i,o){this.service=e,this.providerScope=r,this.providerLang=i,this.cdr=o,this.scopeResolver=new ku(this.service)}transform(e,r,i){if(!e)return e;let o=r?`${e}${JSON.stringify(r)}`:e;if(o===this.lastKey)return this.lastValue;this.lastKey=o,this.subscription?.unsubscribe();let s=F0(this.service,this.providerLang||i);return this.subscription=this.service.langChanges$.pipe(ve(a=>{let l=this.langResolver.resolve({inline:i,provider:this.providerLang,active:a});return Array.isArray(this.providerScope)?kn(this.providerScope.map(c=>this.resolveScope(l,c))):this.resolveScope(l,this.providerScope)}),P0(s)).subscribe(()=>this.updateValue(e,r)),this.lastValue}ngOnDestroy(){this.subscription?.unsubscribe(),this.subscription=null}updateValue(e,r){let i=this.langResolver.resolveLangBasedOnScope(this.path);this.lastValue=this.service.translate(e,r,i),this.cdr.markForCheck()}resolveScope(e,r){let i=this.scopeResolver.resolve({inline:void 0,provider:r});this.path=this.langResolver.resolveLangPath(e,i);let o=ev(r,i);return this.service._loadDependencies(this.path,o)}static \u0275fac=function(r){return new(r||t)(Je(Ko,16),Je(V0,24),Je(j0,24),Je(Te,16))};static \u0275pipe=cd({name:"transloco",type:t,pure:!1})}return t})();var An=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=P({type:t});static \u0275inj=F({})}return t})();function H0(t){let n=[iF(WO),sF(YO),aF(ZO),oF(KO)];return t.config&&n.push(nF(t.config)),t.loader&&n.push(rF(t.loader)),n}function nF(t){return ct([{provide:Zo,useValue:GO(t)}])}function rF(t){return ct([{provide:I0,useClass:t}])}function iF(t){return ct([{provide:R0,useClass:t,deps:[Zo]}])}function oF(t){return ct([{provide:O0,useClass:t,deps:[Zo]}])}function sF(t){return ct([{provide:k0,useClass:t}])}function aF(t){return ct([{provide:N0,useClass:t}])}function U0(){let t=lF();if(!(!t||!T0()))return t.indexOf("-")!==-1&&(t=t.split("-")[0]),t.indexOf("_")!==-1&&(t=t.split("_")[0]),t}function lF(){if(!T0())return"";let t=window.navigator;return t.languages?.[0]??t.language}var Fu=class t{title="gwt-arg_randomizer";destroyRef=u(Fe);swUpdate=u(cu);snackbar=u(C0);translocoService=u(Ko);ngOnInit(){this.swUpdate.unrecoverable.pipe(Tr(this.destroyRef)).subscribe(n=>{this.snackbar.open(`An error occurred that we cannot recover from:
`+n.reason+`

Please reload the page.`,"Reload").onAction().pipe(Tr(this.destroyRef)).subscribe(()=>{window.location.reload()}),console.debug(`An error occurred that we cannot recover from:
`+n.reason+`

Please reload the page.`)}),this.swUpdate.versionUpdates.pipe(le(n=>n.type==="VERSION_DETECTED"),Tr(this.destroyRef)).subscribe(()=>{this.snackbar.open(this.translocoService.translate("messages.update-available"),"Reload").onAction().pipe(Tr(this.destroyRef)).subscribe(()=>{window.location.reload()})})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["app-root"]],decls:1,vars:0,template:function(e,r){e&1&&he(0,"router-outlet")},dependencies:[Ma,An],encapsulation:2})};var Pu=class t{http=u(bo);getTranslation(n){return this.http.get(`i18n/${n}.json`)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})};var Z0=new g("");function rv(t){return t==null||iv(t)===0}function iv(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var Zu=new g(""),K0=new g(""),cF=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,ju=class{static min(n){return dF(n)}static max(n){return uF(n)}static required(n){return fF(n)}static requiredTrue(n){return hF(n)}static email(n){return pF(n)}static minLength(n){return mF(n)}static maxLength(n){return gF(n)}static pattern(n){return vF(n)}static nullValidator(n){return Q0()}static compose(n){return rE(n)}static composeAsync(n){return iE(n)}};function dF(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e<t?{min:{min:t,actual:n.value}}:null}}function uF(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e>t?{max:{max:t,actual:n.value}}:null}}function fF(t){return rv(t.value)?{required:!0}:null}function hF(t){return t.value===!0?null:{required:!0}}function pF(t){return rv(t.value)||cF.test(t.value)?null:{email:!0}}function mF(t){return n=>{let e=n.value?.length??iv(n.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function gF(t){return n=>{let e=n.value?.length??iv(n.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function vF(t){if(!t)return Q0;let n,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),n=new RegExp(e)):(e=t.toString(),n=t),r=>{if(rv(r.value))return null;let i=r.value;return n.test(i)?null:{pattern:{requiredPattern:e,actualValue:i}}}}function Q0(t){return null}function X0(t){return t!=null}function J0(t){return Er(t)?Me(t):t}function eE(t){let n={};return t.forEach(e=>{n=e!=null?m(m({},n),e):n}),Object.keys(n).length===0?null:n}function tE(t,n){return n.map(e=>e(t))}function yF(t){return!t.validate}function nE(t){return t.map(n=>yF(n)?n:e=>n.validate(e))}function rE(t){if(!t)return null;let n=t.filter(X0);return n.length==0?null:function(e){return eE(tE(e,n))}}function ov(t){return t!=null?rE(nE(t)):null}function iE(t){if(!t)return null;let n=t.filter(X0);return n.length==0?null:function(e){let r=tE(e,n).map(J0);return kn(r).pipe(I(eE))}}function sv(t){return t!=null?iE(nE(t)):null}function $0(t,n){return t===null?[n]:Array.isArray(t)?[...t,n]:[t,n]}function oE(t){return t._rawValidators}function sE(t){return t._rawAsyncValidators}function tv(t){return t?Array.isArray(t)?t:[t]:[]}function Vu(t,n){return Array.isArray(t)?t.includes(n):t===n}function z0(t,n){let e=tv(n);return tv(t).forEach(i=>{Vu(e,i)||e.push(i)}),e}function G0(t,n){return tv(n).filter(e=>!Vu(t,e))}var Bu=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=ov(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=sv(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control?.reset(n)}hasError(n,e){return this.control?this.control.hasError(n,e):!1}getError(n,e){return this.control?this.control.getError(n,e):null}},es=class extends Bu{name;get formDirective(){return null}get path(){return null}},Hu=class extends Bu{_parent=null;name=null;valueAccessor=null};var Xa="VALID",Lu="INVALID",Xo="PENDING",Ja="DISABLED",Fr=class{},Uu=class extends Fr{value;source;constructor(n,e){super(),this.value=n,this.source=e}},tl=class extends Fr{pristine;source;constructor(n,e){super(),this.pristine=n,this.source=e}},nl=class extends Fr{touched;source;constructor(n,e){super(),this.touched=n,this.source=e}},Jo=class extends Fr{status;source;constructor(n,e){super(),this.status=n,this.source=e}},$u=class extends Fr{source;constructor(n){super(),this.source=n}},zu=class extends Fr{source;constructor(n){super(),this.source=n}};function aE(t){return(Ku(t)?t.validators:t)||null}function bF(t){return Array.isArray(t)?ov(t):t||null}function lE(t,n){return(Ku(n)?n.asyncValidators:t)||null}function _F(t){return Array.isArray(t)?sv(t):t||null}function Ku(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function wF(t,n,e){let r=t.controls;if(!(n?Object.keys(r):r).length)throw new C(1e3,"");if(!r[e])throw new C(1001,"")}function DF(t,n,e){t._forEachChild((r,i)=>{if(e[i]===void 0)throw new C(-1002,"")})}var Gu=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,e){this._assignValidators(n),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return Ge(this.statusReactive)}set status(n){Ge(()=>this.statusReactive.set(n))}_status=bt(()=>this.statusReactive());statusReactive=ie(void 0);get valid(){return this.status===Xa}get invalid(){return this.status===Lu}get pending(){return this.status===Xo}get disabled(){return this.status===Ja}get enabled(){return this.status!==Ja}errors;get pristine(){return Ge(this.pristineReactive)}set pristine(n){Ge(()=>this.pristineReactive.set(n))}_pristine=bt(()=>this.pristineReactive());pristineReactive=ie(!0);get dirty(){return!this.pristine}get touched(){return Ge(this.touchedReactive)}set touched(n){Ge(()=>this.touchedReactive.set(n))}_touched=bt(()=>this.touchedReactive());touchedReactive=ie(!1);get untouched(){return!this.touched}_events=new D;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(z0(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(z0(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(G0(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(G0(n,this._rawAsyncValidators))}hasValidator(n){return Vu(this._rawValidators,n)}hasAsyncValidator(n){return Vu(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let e=this.touched===!1;this.touched=!0;let r=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched(U(m({},n),{sourceControl:r})),e&&n.emitEvent!==!1&&this._events.next(new nl(!0,r))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(n))}markAsUntouched(n={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let r=n.sourceControl??this;this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:r})}),n.onlySelf||this._parent?._updateTouched(n,r),e&&n.emitEvent!==!1&&this._events.next(new nl(!1,r))}markAsDirty(n={}){let e=this.pristine===!0;this.pristine=!1;let r=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty(U(m({},n),{sourceControl:r})),e&&n.emitEvent!==!1&&this._events.next(new tl(!1,r))}markAsPristine(n={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let r=n.sourceControl??this;this._forEachChild(i=>{i.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),n.onlySelf||this._parent?._updatePristine(n,r),e&&n.emitEvent!==!1&&this._events.next(new tl(!0,r))}markAsPending(n={}){this.status=Xo;let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Jo(this.status,e)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending(U(m({},n),{sourceControl:e}))}disable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Ja,this.errors=null,this._forEachChild(i=>{i.disable(U(m({},n),{onlySelf:!0}))}),this._updateValue();let r=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Uu(this.value,r)),this._events.next(new Jo(this.status,r)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(U(m({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!0))}enable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Xa,this._forEachChild(r=>{r.enable(U(m({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(U(m({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(n,e){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let r=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Xa||this.status===Xo)&&this._runAsyncValidator(r,n.emitEvent)}let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Uu(this.value,e)),this._events.next(new Jo(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity(U(m({},n),{sourceControl:e}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Ja:Xa}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,e){if(this.asyncValidator){this.status=Xo,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:n!==!1};let r=J0(this.asyncValidator(this));this._asyncValidationSubscription=r.subscribe(i=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(i,{emitEvent:e,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(n){let e=n;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((r,i)=>r&&r._find(i),this)}getError(n,e){let r=e?this.get(e):this;return r?.errors?r.errors[n]:null}hasError(n,e){return!!this.getError(n,e)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,e,r){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||r)&&this._events.next(new Jo(this.status,e)),this._parent&&this._parent._updateControlsErrors(n,e,r)}_initObservables(){this.valueChanges=new W,this.statusChanges=new W}_calculateStatus(){return this._allControlsDisabled()?Ja:this.errors?Lu:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Xo)?Xo:this._anyControlsHaveStatus(Lu)?Lu:Xa}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,e){let r=!this._anyControlsDirty(),i=this.pristine!==r;this.pristine=r,n.onlySelf||this._parent?._updatePristine(n,e),i&&this._events.next(new tl(this.pristine,e))}_updateTouched(n={},e){this.touched=this._anyControlsTouched(),this._events.next(new nl(this.touched,e)),n.onlySelf||this._parent?._updateTouched(n,e)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){Ku(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=bF(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=_F(this._rawAsyncValidators)}},Wu=class extends Gu{constructor(n,e,r){super(aE(e),lE(r,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,e){return this.controls[n]?this.controls[n]:(this.controls[n]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(n,e,r={}){this.registerControl(n,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}removeControl(n,e={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(n,e,r={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],e&&this.registerControl(n,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,e={}){DF(this,!0,n),Object.keys(n).forEach(r=>{wF(this,!0,r),this.controls[r].setValue(n[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(n,e={}){n!=null&&(Object.keys(n).forEach(r=>{let i=this.controls[r];i&&i.patchValue(n[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n={},e={}){this._forEachChild((r,i)=>{r.reset(n?n[i]:null,U(m({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new zu(this))}getRawValue(){return this._reduceChildren({},(n,e,r)=>(n[r]=e.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(e,r)=>r._syncPendingControls()?!0:e);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(e=>{let r=this.controls[e];r&&n(r,e)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[e,r]of Object.entries(this.controls))if(this.contains(e)&&n(r))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(e,r,i)=>((r.enabled||this.disabled)&&(e[i]=r.value),e))}_reduceChildren(n,e){let r=n;return this._forEachChild((i,o)=>{r=e(r,i,o)}),r}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}};var av=new g("",{factory:()=>lv}),lv="always";function nv(t,n,e=lv){cv(t,n),n.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&n.valueAccessor.setDisabledState?.(t.disabled),EF(t,n),IF(t,n),xF(t,n),CF(t,n)}function W0(t,n,e=!0){let r=()=>{};n?.valueAccessor?.registerOnChange(r),n?.valueAccessor?.registerOnTouched(r),Yu(t,n),t&&(n._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function qu(t,n){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n)})}function CF(t,n){if(n.valueAccessor.setDisabledState){let e=r=>{n.valueAccessor.setDisabledState(r)};t.registerOnDisabledChange(e),n._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function cv(t,n){let e=oE(t);n.validator!==null?t.setValidators($0(e,n.validator)):typeof e=="function"&&t.setValidators([e]);let r=sE(t);n.asyncValidator!==null?t.setAsyncValidators($0(r,n.asyncValidator)):typeof r=="function"&&t.setAsyncValidators([r]);let i=()=>t.updateValueAndValidity();qu(n._rawValidators,i),qu(n._rawAsyncValidators,i)}function Yu(t,n){let e=!1;if(t!==null){if(n.validator!==null){let i=oE(t);if(Array.isArray(i)&&i.length>0){let o=i.filter(s=>s!==n.validator);o.length!==i.length&&(e=!0,t.setValidators(o))}}if(n.asyncValidator!==null){let i=sE(t);if(Array.isArray(i)&&i.length>0){let o=i.filter(s=>s!==n.asyncValidator);o.length!==i.length&&(e=!0,t.setAsyncValidators(o))}}}let r=()=>{};return qu(n._rawValidators,r),qu(n._rawAsyncValidators,r),e}function EF(t,n){n.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&cE(t,n)})}function xF(t,n){n.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&cE(t,n),t.updateOn!=="submit"&&t.markAsTouched()})}function cE(t,n){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function IF(t,n){let e=(r,i)=>{n.valueAccessor.writeValue(r),i&&n.viewToModelUpdate(r)};t.registerOnChange(e),n._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function dE(t,n){t==null,cv(t,n)}function SF(t,n){return Yu(t,n)}function uE(t,n){t._syncPendingControls(),n.forEach(e=>{let r=e.control;r.updateOn==="submit"&&r._pendingChange&&(e.viewToModelUpdate(r._pendingValue),r._pendingChange=!1)})}function MF(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}var TF={provide:es,useExisting:bn(()=>dv)},el=Promise.resolve(),dv=(()=>{class t extends es{callSetDisabledState;get submitted(){return Ge(this.submittedReactive)}_submitted=bt(()=>this.submittedReactive());submittedReactive=ie(!1);_directives=new Set;form;ngSubmit=new W;options;constructor(e,r,i){super(),this.callSetDisabledState=i,this.form=new Wu({},ov(e),sv(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){el.then(()=>{let r=this._findContainer(e.path);e.control=r.registerControl(e.name,e.control),nv(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){el.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){el.then(()=>{let r=this._findContainer(e.path),i=new Wu({});dE(i,e),r.registerControl(e.name,i),i.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){el.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,r){el.then(()=>{this.form.get(e.path).setValue(r)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),uE(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new $u(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(r){return new(r||t)(Je(Zu,10),Je(K0,10),Je(av,8))};static \u0275dir=Y({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(r,i){r&1&&ge("submit",function(s){return i.onSubmit(s)})("reset",function(){return i.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Ne([TF]),Pe]})}return t})();function q0(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function Y0(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var AF=class extends Gu{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,e,r){super(aE(e),lE(r,e)),this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Ku(e)&&(e.nonNullable||e.initialValueIsDefault)&&(Y0(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,e={}){this.value=this._pendingValue=n,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(r=>r(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(n,e={}){this.setValue(n,e)}reset(n=this.defaultValue,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new zu(this))}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){q0(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){q0(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){Y0(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var RF=t=>t instanceof AF;var kF=(()=>{class t extends es{callSetDisabledState;get submitted(){return Ge(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=bt(()=>this._submittedReactive());_submittedReactive=ie(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,r,i){super(),this.callSetDisabledState=i,this._setValidators(e),this._setAsyncValidators(r)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(Yu(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let r=this.form.get(e.path);return nv(r,e,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),r}getControl(e){return this.form.get(e.path)}removeControl(e){W0(e.control||null,e,!1),MF(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,r){this.form.get(e.path).setValue(r)}onReset(){this.resetForm()}resetForm(e=void 0,r={}){this.form.reset(e,r),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,uE(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new $u(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let r=e.control,i=this.form.get(e.path);r!==i&&(W0(r||null,e),RF(i)&&(nv(i,e,this.callSetDisabledState),e.control=i))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let r=this.form.get(e.path);dE(r,e),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let r=this.form?.get(e.path);r&&SF(r,e)&&r.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){cv(this.form,this),this._oldForm&&Yu(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(r){return new(r||t)(Je(Zu,10),Je(K0,10),Je(av,8))};static \u0275dir=Y({type:t,features:[Pe,ut]})}return t})();var NF={provide:es,useExisting:bn(()=>uv)},uv=(()=>{class t extends kF{form=null;ngSubmit=new W;get control(){return this.form}static \u0275fac=(()=>{let e;return function(i){return(e||(e=Mt(t)))(i||t)}})();static \u0275dir=Y({type:t,selectors:[["","formGroup",""]],hostBindings:function(r,i){r&1&&ge("submit",function(s){return i.onSubmit(s)})("reset",function(){return i.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Ne([NF]),Pe]})}return t})();var OF=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=P({type:t});static \u0275inj=F({})}return t})();var fE=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:av,useValue:e.callSetDisabledState??lv}]}}static \u0275fac=function(r){return new(r||t)};static \u0275mod=P({type:t});static \u0275inj=F({imports:[OF]})}return t})();var FF=["*"];var PF=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],LF=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],jF=new g("MAT_CARD_CONFIG"),hE=(()=>{class t{appearance;constructor(){let e=u(jF,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=M({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(r,i){r&2&&L("mat-mdc-card-outlined",i.appearance==="outlined")("mdc-card--outlined",i.appearance==="outlined")("mat-mdc-card-filled",i.appearance==="filled")("mdc-card--filled",i.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:FF,decls:1,vars:0,template:function(r,i){r&1&&(ce(),R(0))},styles:[`.mat-mdc-card {
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
`],encapsulation:2,changeDetection:0})}return t})();var pE=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275dir=Y({type:t,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return t})();var mE=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275cmp=M({type:t,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:LF,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(r,i){r&1&&(ce(PF),R(0),ot(1,"div",0),R(2,1),pt(),R(3,2))},encapsulation:2,changeDetection:0})}return t})();var gE=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=P({type:t});static \u0275inj=F({imports:[pe]})}return t})();var vE=(()=>{class t{get vertical(){return this._vertical}set vertical(e){this._vertical=Kt(e)}_vertical=!1;get inset(){return this._inset}set inset(e){this._inset=Kt(e)}_inset=!1;static \u0275fac=function(r){return new(r||t)};static \u0275cmp=M({type:t,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(r,i){r&2&&(fe("aria-orientation",i.vertical?"vertical":"horizontal"),L("mat-divider-vertical",i.vertical)("mat-divider-horizontal",!i.vertical)("mat-divider-inset",i.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(r,i){},styles:[`.mat-divider {
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
`],encapsulation:2,changeDetection:0})}return t})(),yE=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=P({type:t});static \u0275inj=F({imports:[pe]})}return t})();var fv=class{_box;_destroyed=new D;_resizeSubject=new D;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new G(e=>{let r=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),r.unsubscribe(),this._elementObservables.delete(n)}}).pipe(le(e=>e.some(r=>r.target===n)),Zr({bufferSize:1,refCount:!0}),ue(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},bE=(()=>{class t{_cleanupErrorListener;_observers=new Map;_ngZone=u(O);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,r){let i=r?.box||"content-box";return this._observers.has(i)||this._observers.set(i,new fv(i)),this._observers.get(i).observe(e)}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var HF=["notch"],UF=["matFormFieldNotchedOutline",""],$F=["*"],_E=["iconPrefixContainer"],wE=["textPrefixContainer"],DE=["iconSuffixContainer"],CE=["textSuffixContainer"],zF=["textField"],GF=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],WF=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function qF(t,n){t&1&&he(0,"span",21)}function YF(t,n){if(t&1&&(b(0,"label",20),R(1,1),X(2,qF,1,0,"span",21),w()),t&2){let e=H(2);ye("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),fe("for",e._control.disableAutomaticLabeling?null:e._control.id),v(2),J(!e.hideRequiredMarker&&e._control.required?2:-1)}}function ZF(t,n){if(t&1&&X(0,YF,3,5,"label",20),t&2){let e=H();J(e._hasFloatingLabel()?0:-1)}}function KF(t,n){t&1&&he(0,"div",7)}function QF(t,n){}function XF(t,n){if(t&1&&zt(0,QF,0,0,"ng-template",13),t&2){H(2);let e=Wt(1);ye("ngTemplateOutlet",e)}}function JF(t,n){if(t&1&&(b(0,"div",9),X(1,XF,1,1,null,13),w()),t&2){let e=H();ye("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),v(),J(e._forceDisplayInfixLabel()?-1:1)}}function eP(t,n){t&1&&(b(0,"div",10,2),R(2,2),w())}function tP(t,n){t&1&&(b(0,"div",11,3),R(2,3),w())}function nP(t,n){}function rP(t,n){if(t&1&&zt(0,nP,0,0,"ng-template",13),t&2){H();let e=Wt(1);ye("ngTemplateOutlet",e)}}function iP(t,n){t&1&&(b(0,"div",14,4),R(2,4),w())}function oP(t,n){t&1&&(b(0,"div",15,5),R(2,5),w())}function sP(t,n){t&1&&he(0,"div",16)}function aP(t,n){t&1&&(b(0,"div",18),R(1,6),w())}function lP(t,n){if(t&1&&(b(0,"mat-hint",22),x(1),w()),t&2){let e=H(2);ye("id",e._hintLabelId),v(),Se(e.hintLabel)}}function cP(t,n){if(t&1&&(b(0,"div",19),X(1,lP,2,2,"mat-hint",22),R(2,7),he(3,"div",23),R(4,8),w()),t&2){let e=H();v(),J(e.hintLabel?1:-1)}}var rl=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275dir=Y({type:t,selectors:[["mat-label"]]})}return t})(),dP=new g("MatError");var hv=(()=>{class t{align="start";id=u(at).getId("mat-mdc-hint-");static \u0275fac=function(r){return new(r||t)};static \u0275dir=Y({type:t,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(r,i){r&2&&(Gt("id",i.id),fe("align",null),L("mat-mdc-form-field-hint-end",i.align==="end"))},inputs:{align:"align",id:"id"}})}return t})(),uP=new g("MatPrefix");var fP=new g("MatSuffix");var AE=new g("FloatingLabelParent"),EE=(()=>{class t{_elementRef=u(j);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=u(bE);_ngZone=u(O);_parent=u(AE);_resizeSubscription=new de;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return hP(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(r){return new(r||t)};static \u0275dir=Y({type:t,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(r,i){r&2&&L("mdc-floating-label--float-above",i.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return t})();function hP(t){let n=t;if(n.offsetParent!==null)return n.scrollWidth;let e=n.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let r=e.scrollWidth;return e.remove(),r}var xE="mdc-line-ripple--active",Qu="mdc-line-ripple--deactivating",IE=(()=>{class t{_elementRef=u(j);_cleanupTransitionEnd;constructor(){let e=u(O),r=u(Xe);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=r.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Qu),e.add(xE)}deactivate(){this._elementRef.nativeElement.classList.add(Qu)}_handleTransitionEnd=e=>{let r=this._elementRef.nativeElement.classList,i=r.contains(Qu);e.propertyName==="opacity"&&i&&r.remove(xE,Qu)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(r){return new(r||t)};static \u0275dir=Y({type:t,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return t})(),SE=(()=>{class t{_elementRef=u(j);_ngZone=u(O);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,r=e.querySelector(".mdc-floating-label");r?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(r.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>r.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let r=this._notch.nativeElement;!this.open||!e?r.style.width="":r.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=M({type:t,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(r,i){if(r&1&&et(HF,5),r&2){let o;Z(o=K())&&(i._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(r,i){r&2&&L("mdc-notched-outline--notched",i.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:UF,ngContentSelectors:$F,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(r,i){r&1&&(ce(),Nt(0,"div",1),ot(1,"div",2,0),R(3),pt(),Nt(4,"div",3))},encapsulation:2,changeDetection:0})}return t})(),pv=(()=>{class t{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(r){return new(r||t)};static \u0275dir=Y({type:t})}return t})();var mv=new g("MatFormField"),pP=new g("MAT_FORM_FIELD_DEFAULT_OPTIONS"),ME="fill",mP="auto",TE="fixed",gP="translateY(-50%)",Xu=(()=>{class t{_elementRef=u(j);_changeDetectorRef=u(Te);_platform=u(Ee);_idGenerator=u(at);_ngZone=u(O);_defaults=u(pP,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=ia("iconPrefixContainer");_textPrefixContainerSignal=ia("textPrefixContainer");_iconSuffixContainerSignal=ia("iconSuffixContainer");_textSuffixContainerSignal=ia("textSuffixContainer");_prefixSuffixContainers=bt(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=Zw(rl);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=Kt(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||mP}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let r=e||this._defaults?.appearance||ME;this._appearanceSignal.set(r)}_appearanceSignal=ie(ME);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||TE}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||TE}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new D;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=Le();constructor(){let e=this._defaults,r=u(Dt);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),ui(()=>this._currentDirection=r.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=bt(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let r=this._control,i="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(i+e.controlType),r.controlType&&this._elementRef.nativeElement.classList.add(i+r.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=r.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=r.stateChanges.pipe($e([void 0,void 0]),I(()=>[r.errorState,r.userAriaDescribedBy]),Yl(),le(([[o,s],[a,l]])=>o!==a||s!==l)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),r.ngControl&&r.ngControl.valueChanges&&(this._valueChanges=r.ngControl.valueChanges.pipe(ue(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Pt(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){Xw({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=bt(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let r=this._control?this._control.ngControl:null;return r&&r[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(a=>a.align==="start"):null,s=this._hintChildren?this._hintChildren.find(a=>a.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),s&&e.push(s.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let r=this._control.describedByIds,i;if(r){let o=this._describedByIds||e;i=e.concat(r.filter(s=>s&&!o.includes(s)))}else i=e;this._control.setDescribedByIds(i),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,r=this._textPrefixContainer?.nativeElement,i=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,s=e?.getBoundingClientRect().width??0,a=r?.getBoundingClientRect().width??0,l=i?.getBoundingClientRect().width??0,c=o?.getBoundingClientRect().width??0,d=this._currentDirection==="rtl"?"-1":"1",f=`${s+a}px`,p=`calc(${d} * (${f} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,y=`var(--mat-mdc-form-field-label-transform, ${gP} translateX(${p}))`,E=s+a+l+c;return[y,E]}_writeOutlinedLabelStyles(e){if(e!==null){let[r,i]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=r),i!==null&&this._notchedOutline?._setMaxWidth(i)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let r=e.getRootNode();return r&&r!==e}return document.documentElement.contains(e)}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=M({type:t,selectors:[["mat-form-field"]],contentQueries:function(r,i,o){if(r&1&&(yd(o,i._labelChild,rl,5),yt(o,pv,5)(o,uP,5)(o,fP,5)(o,dP,5)(o,hv,5)),r&2){_d();let s;Z(s=K())&&(i._formFieldControl=s.first),Z(s=K())&&(i._prefixChildren=s),Z(s=K())&&(i._suffixChildren=s),Z(s=K())&&(i._errorChildren=s),Z(s=K())&&(i._hintChildren=s)}},viewQuery:function(r,i){if(r&1&&(bd(i._iconPrefixContainerSignal,_E,5)(i._textPrefixContainerSignal,wE,5)(i._iconSuffixContainerSignal,DE,5)(i._textSuffixContainerSignal,CE,5),et(zF,5)(_E,5)(wE,5)(DE,5)(CE,5)(EE,5)(SE,5)(IE,5)),r&2){_d(4);let o;Z(o=K())&&(i._textField=o.first),Z(o=K())&&(i._iconPrefixContainer=o.first),Z(o=K())&&(i._textPrefixContainer=o.first),Z(o=K())&&(i._iconSuffixContainer=o.first),Z(o=K())&&(i._textSuffixContainer=o.first),Z(o=K())&&(i._floatingLabel=o.first),Z(o=K())&&(i._notchedOutline=o.first),Z(o=K())&&(i._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(r,i){r&2&&L("mat-mdc-form-field-label-always-float",i._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",i._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",i._hasIconSuffix)("mat-form-field-invalid",i._control.errorState)("mat-form-field-disabled",i._control.disabled)("mat-form-field-autofilled",i._control.autofilled)("mat-form-field-appearance-fill",i.appearance=="fill")("mat-form-field-appearance-outline",i.appearance=="outline")("mat-form-field-hide-placeholder",i._hasFloatingLabel()&&!i._shouldLabelFloat())("mat-primary",i.color!=="accent"&&i.color!=="warn")("mat-accent",i.color==="accent")("mat-warn",i.color==="warn")("ng-untouched",i._shouldForward("untouched"))("ng-touched",i._shouldForward("touched"))("ng-pristine",i._shouldForward("pristine"))("ng-dirty",i._shouldForward("dirty"))("ng-valid",i._shouldForward("valid"))("ng-invalid",i._shouldForward("invalid"))("ng-pending",i._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[Ne([{provide:mv,useExisting:t},{provide:AE,useExisting:t}])],ngContentSelectors:WF,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(r,i){if(r&1&&(ce(GF),zt(0,ZF,1,1,"ng-template",null,0,Em),b(2,"div",6,1),ge("click",function(s){return i._control.onContainerClick(s)}),X(4,KF,1,0,"div",7),b(5,"div",8),X(6,JF,2,2,"div",9),X(7,eP,3,0,"div",10),X(8,tP,3,0,"div",11),b(9,"div",12),X(10,rP,1,1,null,13),R(11),w(),X(12,iP,3,0,"div",14),X(13,oP,3,0,"div",15),w(),X(14,sP,1,0,"div",16),w(),b(15,"div",17),X(16,aP,2,0,"div",18)(17,cP,5,1,"div",19),w()),r&2){let o;v(2),L("mdc-text-field--filled",!i._hasOutline())("mdc-text-field--outlined",i._hasOutline())("mdc-text-field--no-label",!i._hasFloatingLabel())("mdc-text-field--disabled",i._control.disabled)("mdc-text-field--invalid",i._control.errorState),v(2),J(!i._hasOutline()&&!i._control.disabled?4:-1),v(2),J(i._hasOutline()?6:-1),v(),J(i._hasIconPrefix?7:-1),v(),J(i._hasTextPrefix?8:-1),v(2),J(!i._hasOutline()||i._forceDisplayInfixLabel()?10:-1),v(2),J(i._hasTextSuffix?12:-1),v(),J(i._hasIconSuffix?13:-1),v(),J(i._hasOutline()?-1:14),v(),L("mat-mdc-form-field-subscript-dynamic-size",i.subscriptSizing==="dynamic");let s=i._getSubscriptMessageType();v(),J((o=s)==="error"?16:o==="hint"?17:-1)}},dependencies:[EE,SE,Rm,IE,hv],styles:[`.mdc-text-field {
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
`],encapsulation:2,changeDetection:0})}return t})();var Ju=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=P({type:t});static \u0275inj=F({imports:[jC,Xu,pe]})}return t})();var ef=class{tracker;columnIndex=0;rowIndex=0;get rowCount(){return this.rowIndex+1}get rowspan(){let n=Math.max(...this.tracker);return n>1?this.rowCount+n-1:this.rowCount}positions;update(n,e){this.columnIndex=0,this.rowIndex=0,this.tracker=new Array(n),this.tracker.fill(0,0,this.tracker.length),this.positions=e.map(r=>this._trackTile(r))}_trackTile(n){let e=this._findMatchingGap(n.colspan);return this._markTilePosition(e,n),this.columnIndex=e+n.colspan,new gv(this.rowIndex,e)}_findMatchingGap(n){n>this.tracker.length;let e=-1,r=-1;do{if(this.columnIndex+n>this.tracker.length){this._nextRow(),e=this.tracker.indexOf(0,this.columnIndex),r=this._findGapEndIndex(e);continue}if(e=this.tracker.indexOf(0,this.columnIndex),e==-1){this._nextRow(),e=this.tracker.indexOf(0,this.columnIndex),r=this._findGapEndIndex(e);continue}r=this._findGapEndIndex(e),this.columnIndex=e+1}while(r-e<n||r==0);return Math.max(e,0)}_nextRow(){this.columnIndex=0,this.rowIndex++;for(let n=0;n<this.tracker.length;n++)this.tracker[n]=Math.max(0,this.tracker[n]-1)}_findGapEndIndex(n){for(let e=n+1;e<this.tracker.length;e++)if(this.tracker[e]!=0)return e;return this.tracker.length}_markTilePosition(n,e){for(let r=0;r<e.colspan;r++)this.tracker[n+r]=e.rowspan}},gv=class{row;col;constructor(n,e){this.row=n,this.col=e}};var RE=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275dir=Y({type:t,selectors:[["","mat-line",""],["","matLine",""]],hostAttrs:[1,"mat-line"]})}return t})();function kE(t,n,e="mat"){t.changes.pipe($e(t)).subscribe(({length:r})=>{il(n,`${e}-2-line`,!1),il(n,`${e}-3-line`,!1),il(n,`${e}-multi-line`,!1),r===2||r===3?il(n,`${e}-${r}-line`,!0):r>3&&il(n,`${e}-multi-line`,!0)})}function il(t,n,e){t.nativeElement.classList.toggle(n,e)}var vv=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=P({type:t});static \u0275inj=F({imports:[pe]})}return t})();var NE=["*"],yP=[[["","mat-grid-avatar",""],["","matGridAvatar",""]],[["","mat-line",""],["","matLine",""]],"*"],bP=["[mat-grid-avatar], [matGridAvatar]","[mat-line], [matLine]","*"],_P=`.mat-grid-list {
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
`,OE=new g("MAT_GRID_LIST"),wv=(()=>{class t{_element=u(j);_gridList=u(OE,{optional:!0});_rowspan=1;_colspan=1;constructor(){}get rowspan(){return this._rowspan}set rowspan(e){this._rowspan=Math.round(nr(e))}get colspan(){return this._colspan}set colspan(e){this._colspan=Math.round(nr(e))}_setStyle(e,r){this._element.nativeElement.style[e]=r}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=M({type:t,selectors:[["mat-grid-tile"]],hostAttrs:[1,"mat-grid-tile"],hostVars:2,hostBindings:function(r,i){r&2&&fe("rowspan",i.rowspan)("colspan",i.colspan)},inputs:{rowspan:"rowspan",colspan:"colspan"},exportAs:["matGridTile"],ngContentSelectors:NE,decls:2,vars:0,consts:[[1,"mat-grid-tile-content"]],template:function(r,i){r&1&&(ce(),ot(0,"div",0),R(1),pt())},styles:[`.mat-grid-list {
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
`],encapsulation:2,changeDetection:0})}return t})(),FE=(()=>{class t{_element=u(j);_lines;constructor(){}ngAfterContentInit(){kE(this._lines,this._element)}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=M({type:t,selectors:[["mat-grid-tile-header"],["mat-grid-tile-footer"]],contentQueries:function(r,i,o){if(r&1&&yt(o,RE,5),r&2){let s;Z(s=K())&&(i._lines=s)}},ngContentSelectors:bP,decls:4,vars:0,consts:[[1,"mat-grid-list-text"]],template:function(r,i){r&1&&(ce(yP),R(0),ot(1,"div",0),R(2,1),pt(),R(3,2))},encapsulation:2,changeDetection:0})}return t})();var PE=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275dir=Y({type:t,selectors:[["mat-grid-tile-header"]],hostAttrs:[1,"mat-grid-tile-header"]})}return t})();var wP=/^-?\d+((\.\d+)?[A-Za-z%$]?)+$/,ol=class{_gutterSize;_rows=0;_rowspan=0;_cols;_direction;init(n,e,r,i){this._gutterSize=LE(n),this._rows=e.rowCount,this._rowspan=e.rowspan,this._cols=r,this._direction=i}getBaseTileSize(n,e){return`(${n}% - (${this._gutterSize} * ${e}))`}getTilePosition(n,e){return e===0?"0":Li(`(${n} + ${this._gutterSize}) * ${e}`)}getTileSize(n,e){return`(${n} * ${e}) + (${e-1} * ${this._gutterSize})`}setStyle(n,e,r){let i=100/this._cols,o=(this._cols-1)/this._cols;this.setColStyles(n,r,i,o),this.setRowStyles(n,e,i,o)}setColStyles(n,e,r,i){let o=this.getBaseTileSize(r,i),s=this._direction==="rtl"?"right":"left";n._setStyle(s,this.getTilePosition(o,e)),n._setStyle("width",Li(this.getTileSize(o,n.colspan)))}getGutterSpan(){return`${this._gutterSize} * (${this._rowspan} - 1)`}getTileSpan(n){return`${this._rowspan} * ${this.getTileSize(n,1)}`}getComputedHeight(){return null}},yv=class extends ol{fixedRowHeight;constructor(n){super(),this.fixedRowHeight=n}init(n,e,r,i){super.init(n,e,r,i),this.fixedRowHeight=LE(this.fixedRowHeight),wP.test(this.fixedRowHeight)}setRowStyles(n,e){n._setStyle("top",this.getTilePosition(this.fixedRowHeight,e)),n._setStyle("height",Li(this.getTileSize(this.fixedRowHeight,n.rowspan)))}getComputedHeight(){return["height",Li(`${this.getTileSpan(this.fixedRowHeight)} + ${this.getGutterSpan()}`)]}reset(n){n._setListStyle(["height",null]),n._tiles&&n._tiles.forEach(e=>{e._setStyle("top",null),e._setStyle("height",null)})}},bv=class extends ol{rowHeightRatio;baseTileHeight;constructor(n){super(),this._parseRatio(n)}setRowStyles(n,e,r,i){let o=r/this.rowHeightRatio;this.baseTileHeight=this.getBaseTileSize(o,i),n._setStyle("marginTop",this.getTilePosition(this.baseTileHeight,e)),n._setStyle("paddingTop",Li(this.getTileSize(this.baseTileHeight,n.rowspan)))}getComputedHeight(){return["paddingBottom",Li(`${this.getTileSpan(this.baseTileHeight)} + ${this.getGutterSpan()}`)]}reset(n){n._setListStyle(["paddingBottom",null]),n._tiles.forEach(e=>{e._setStyle("marginTop",null),e._setStyle("paddingTop",null)})}_parseRatio(n){let e=n.split(":");e.length,this.rowHeightRatio=parseFloat(e[0])/parseFloat(e[1])}},_v=class extends ol{setRowStyles(n,e){let r=100/this._rowspan,i=(this._rows-1)/this._rows,o=this.getBaseTileSize(r,i);n._setStyle("top",this.getTilePosition(o,e)),n._setStyle("height",Li(this.getTileSize(o,n.rowspan)))}reset(n){n._tiles&&n._tiles.forEach(e=>{e._setStyle("top",null),e._setStyle("height",null)})}};function Li(t){return`calc(${t})`}function LE(t){return t.match(/([A-Za-z%]+)$/)?t:`${t}px`}var DP="fit",jE=(()=>{class t{_element=u(j);_dir=u(Dt,{optional:!0});_cols;_tileCoordinator;_rowHeight;_gutter="1px";_tileStyler;_tiles;constructor(){}get cols(){return this._cols}set cols(e){this._cols=Math.max(1,Math.round(nr(e)))}get gutterSize(){return this._gutter}set gutterSize(e){this._gutter=`${e??""}`}get rowHeight(){return this._rowHeight}set rowHeight(e){let r=`${e??""}`;r!==this._rowHeight&&(this._rowHeight=r,this._setTileStyler(this._rowHeight))}ngOnInit(){this._checkCols(),this._checkRowHeight()}ngAfterContentChecked(){this._layoutTiles()}_checkCols(){this.cols}_checkRowHeight(){this._rowHeight||this._setTileStyler("1:1")}_setTileStyler(e){this._tileStyler&&this._tileStyler.reset(this),e===DP?this._tileStyler=new _v:e&&e.indexOf(":")>-1?this._tileStyler=new bv(e):this._tileStyler=new yv(e)}_layoutTiles(){this._tileCoordinator||(this._tileCoordinator=new ef);let e=this._tileCoordinator,r=this._tiles.filter(o=>!o._gridList||o._gridList===this),i=this._dir?this._dir.value:"ltr";this._tileCoordinator.update(this.cols,r),this._tileStyler.init(this.gutterSize,e,this.cols,i),r.forEach((o,s)=>{let a=e.positions[s];this._tileStyler.setStyle(o,a.row,a.col)}),this._setListStyle(this._tileStyler.getComputedHeight())}_setListStyle(e){e&&(this._element.nativeElement.style[e[0]]=e[1])}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=M({type:t,selectors:[["mat-grid-list"]],contentQueries:function(r,i,o){if(r&1&&yt(o,wv,5),r&2){let s;Z(s=K())&&(i._tiles=s)}},hostAttrs:[1,"mat-grid-list"],hostVars:1,hostBindings:function(r,i){r&2&&fe("cols",i.cols)},inputs:{cols:"cols",gutterSize:"gutterSize",rowHeight:"rowHeight"},exportAs:["matGridList"],features:[Ne([{provide:OE,useExisting:t}])],ngContentSelectors:NE,decls:2,vars:0,template:function(r,i){r&1&&(ce(),ot(0,"div"),R(1),pt())},styles:[_P],encapsulation:2,changeDetection:0})}return t})(),VE=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=P({type:t});static \u0275inj=F({imports:[vv,pe,vv]})}return t})();var sl=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new D;constructor(n=!1,e,r=!0,i){this._multiple=n,this._emitChanges=r,this.compareWith=i,e&&e.length&&(n?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...n){this._verifyValueAssignment(n),n.forEach(r=>this._markSelected(r));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...n){this._verifyValueAssignment(n),n.forEach(r=>this._unmarkSelected(r));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...n){this._verifyValueAssignment(n);let e=this.selected,r=new Set(n.map(o=>this._getConcreteValue(o)));n.forEach(o=>this._markSelected(o)),e.filter(o=>!r.has(this._getConcreteValue(o,r))).forEach(o=>this._unmarkSelected(o));let i=this._hasQueuedChanges();return this._emitChangeEvent(),i}toggle(n){return this.isSelected(n)?this.deselect(n):this.select(n)}clear(n=!0){this._unmarkAll();let e=this._hasQueuedChanges();return n&&this._emitChangeEvent(),e}isSelected(n){return this._selection.has(this._getConcreteValue(n))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(n){this._multiple&&this.selected&&this._selected.sort(n)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(n){n=this._getConcreteValue(n),this.isSelected(n)||(this._multiple||this._unmarkAll(),this.isSelected(n)||this._selection.add(n),this._emitChanges&&this._selectedToEmit.push(n))}_unmarkSelected(n){n=this._getConcreteValue(n),this.isSelected(n)&&(this._selection.delete(n),this._emitChanges&&this._deselectedToEmit.push(n))}_unmarkAll(){this.isEmpty()||this._selection.forEach(n=>this._unmarkSelected(n))}_verifyValueAssignment(n){n.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(n,e){if(this.compareWith){e=e??this._selection;for(let r of e)if(this.compareWith(n,r))return r;return n}else return n}};var BE=(()=>{class t{_animationsDisabled=Le();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=M({type:t,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(r,i){r&2&&L("mat-pseudo-checkbox-indeterminate",i.state==="indeterminate")("mat-pseudo-checkbox-checked",i.state==="checked")("mat-pseudo-checkbox-disabled",i.disabled)("mat-pseudo-checkbox-minimal",i.appearance==="minimal")("mat-pseudo-checkbox-full",i.appearance==="full")("_mat-animation-noopable",i._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(r,i){},styles:[`.mat-pseudo-checkbox {
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
`],encapsulation:2,changeDetection:0})}return t})();var EP=["text"],xP=[[["mat-icon"]],"*"],IP=["mat-icon","*"];function SP(t,n){if(t&1&&he(0,"mat-pseudo-checkbox",1),t&2){let e=H();ye("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function MP(t,n){if(t&1&&he(0,"mat-pseudo-checkbox",3),t&2){let e=H();ye("disabled",e.disabled)}}function TP(t,n){if(t&1&&(b(0,"span",4),x(1),w()),t&2){let e=H();v(),ae("(",e.group.label,")")}}var Cv=new g("MAT_OPTION_PARENT_COMPONENT"),Ev=new g("MatOptgroup");var Dv=class{source;isUserInput;constructor(n,e=!1){this.source=n,this.isUserInput=e}},rs=(()=>{class t{_element=u(j);_changeDetectorRef=u(Te);_parent=u(Cv,{optional:!0});group=u(Ev,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=u(at).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=ie(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new W;_text;_stateChanges=new D;constructor(){let e=u(wt);e.load(Nr),e.load(hu),this._signalDisableRipple=!!this._parent&&Cr(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,r){let i=this._getHostElement();typeof i.focus=="function"&&i.focus(r)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!Ft(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new Dv(this,e))}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=M({type:t,selectors:[["mat-option"]],viewQuery:function(r,i){if(r&1&&et(EP,7),r&2){let o;Z(o=K())&&(i._text=o.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(r,i){r&1&&ge("click",function(){return i._selectViaInteraction()})("keydown",function(s){return i._handleKeydown(s)}),r&2&&(Gt("id",i.id),fe("aria-selected",i.selected)("aria-disabled",i.disabled.toString()),L("mdc-list-item--selected",i.selected)("mat-mdc-option-multiple",i.multiple)("mat-mdc-option-active",i.active)("mdc-list-item--disabled",i.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",oe]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:IP,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(r,i){r&1&&(ce(xP),X(0,SP,1,2,"mat-pseudo-checkbox",1),R(1),b(2,"span",2,0),R(4,1),w(),X(5,MP,1,1,"mat-pseudo-checkbox",3),X(6,TP,2,1,"span",4),he(7,"div",5)),r&2&&(J(i.multiple?0:-1),v(5),J(!i.multiple&&i.selected&&!i.hideSingleSelectionIndicator?5:-1),v(),J(i.group&&i.group._inert?6:-1),v(),ye("matRippleTrigger",i._getHostElement())("matRippleDisabled",i.disabled||i.disableRipple))},dependencies:[BE,zo],styles:[`.mat-mdc-option {
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
`],encapsulation:2,changeDetection:0})}return t})();function HE(t,n,e){if(e.length){let r=n.toArray(),i=e.toArray(),o=0;for(let s=0;s<t+1;s++)r[s].group&&r[s].group===i[o]&&o++;return o}return 0}function UE(t,n,e,r){return t<e?t:t+n>e+r?Math.max(0,t-r+n):e}var $E=(()=>{class t{isErrorState(e,r){return!!(e&&e.invalid&&(e.touched||r&&r.submitted))}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var tf=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(n,e,r,i,o){this._defaultMatcher=n,this.ngControl=e,this._parentFormGroup=r,this._parentForm=i,this._stateChanges=o}updateErrorState(){let n=this.errorState,e=this._parentFormGroup||this._parentForm,r=this.matcher||this._defaultMatcher,i=this.ngControl?this.ngControl.control:null,o=r?.isErrorState(i,e)??!1;o!==n&&(this.errorState=o,this._stateChanges.next())}};var zE=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=P({type:t});static \u0275inj=F({imports:[pe]})}return t})();var xv=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=P({type:t});static \u0275inj=F({imports:[Go,zE,rs,pe]})}return t})();var AP=["trigger"],RP=["panel"],kP=[[["mat-select-trigger"]],"*"],NP=["mat-select-trigger","*"];function OP(t,n){if(t&1&&(b(0,"span",4),x(1),w()),t&2){let e=H();v(),Se(e.placeholder)}}function FP(t,n){t&1&&R(0)}function PP(t,n){if(t&1&&(b(0,"span",11),x(1),w()),t&2){let e=H(2);v(),Se(e.triggerValue)}}function LP(t,n){if(t&1&&(b(0,"span",5),X(1,FP,1,0)(2,PP,2,1,"span",11),w()),t&2){let e=H();v(),J(e.customTrigger?1:2)}}function jP(t,n){if(t&1){let e=Ot();b(0,"div",12,1),ge("keydown",function(i){Ze(e);let o=H();return Ke(o._handleKeydown(i))}),R(2,1),w()}if(t&2){let e=H();Tt(e.panelClass),L("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",(e._parentFormField==null?null:e._parentFormField.color)==="primary")("mat-accent",(e._parentFormField==null?null:e._parentFormField.color)==="accent")("mat-warn",(e._parentFormField==null?null:e._parentFormField.color)==="warn")("mat-undefined",!(e._parentFormField!=null&&e._parentFormField.color)),fe("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var VP=new g("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let t=u(z);return()=>Fi(t)}}),BP=new g("MAT_SELECT_CONFIG"),HP=new g("MatSelectTrigger"),Iv=class{source;value;constructor(n,e){this.source=n,this.value=e}},GE=(()=>{class t{_viewportRuler=u(Tn);_changeDetectorRef=u(Te);_elementRef=u(j);_dir=u(Dt,{optional:!0});_idGenerator=u(at);_renderer=u(Xe);_parentFormField=u(mv,{optional:!0});ngControl=u(Hu,{self:!0,optional:!0});_liveAnnouncer=u(Fa);_defaultOptions=u(BP,{optional:!0});_animationsDisabled=Le();_popoverLocation;_initialized=new D;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let r=this.options.toArray()[e];if(r){let i=this.panel.nativeElement,o=HE(e,this.options,this.optionGroups),s=r._getHostElement();e===0&&o===1?i.scrollTop=0:i.scrollTop=UE(s.offsetTop,s.offsetHeight,i.scrollTop,i.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new Iv(this,e)}_scrollStrategyFactory=u(VP);_panelOpen=!1;_compareWith=(e,r)=>e===r;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new D;_errorStateTracker;stateChanges=new D;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=ie(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(ju.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=qr(()=>{let e=this.options;return e?e.changes.pipe($e(e),ve(()=>Pt(...e.map(r=>r.onSelectionChange)))):this._initialized.pipe(ve(()=>this.optionSelectionChanges))});openedChange=new W;_openedStream=this.openedChange.pipe(le(e=>e),I(()=>{}));_closedStream=this.openedChange.pipe(le(e=>!e),I(()=>{}));selectionChange=new W;valueChange=new W;constructor(){let e=u($E),r=u(dv,{optional:!0}),i=u(uv,{optional:!0}),o=u(new Kn("tabindex"),{optional:!0}),s=u(Wa,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new tf(e,this.ngControl,i,r,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=o==null?0:parseInt(o)||0,this._popoverLocation=s?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new sl(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(ue(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(ue(this._destroy)).subscribe(e=>{e.added.forEach(r=>r.select()),e.removed.forEach(r=>r.deselect())}),this.options.changes.pipe($e(null),ue(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),r=this.ngControl;if(e!==this._triggerAriaLabelledBy){let i=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?i.setAttribute("aria-labelledby",e):i.removeAttribute("aria-labelledby")}r&&(this._previousControl!==r.control&&(this._previousControl!==void 0&&r.disabled!==null&&r.disabled!==this.disabled&&(this.disabled=r.disabled),this._previousControl=r.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe(xe(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}_trackedModal=null;_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let r=`${this.id}-panel`;this._trackedModal&&Ag(this._trackedModal,"aria-owns",r),GC(e,"aria-owns",r),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;Ag(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{r(),clearTimeout(i),this._cleanupDetach=void 0};let e=this.panel.nativeElement,r=this._renderer.listen(e,"animationend",o=>{o.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),i=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(r=>r.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let r=e.keyCode,i=r===40||r===38||r===37||r===39,o=r===13||r===32,s=this._keyManager;if(!s.isTyping()&&o&&!Ft(e)||(this.multiple||e.altKey)&&i)e.preventDefault(),this.open();else if(!this.multiple){let a=this.selected;s.onKeydown(e);let l=this.selected;l&&a!==l&&this._liveAnnouncer.announce(l.viewValue,1e4)}}_handleOpenKeydown(e){let r=this._keyManager,i=e.keyCode,o=i===40||i===38,s=r.isTyping();if(o&&e.altKey)e.preventDefault(),this.close();else if(!s&&(i===13||i===32)&&r.activeItem&&!Ft(e))e.preventDefault(),r.activeItem._selectViaInteraction();else if(!s&&this._multiple&&i===65&&e.ctrlKey){e.preventDefault();let a=this.options.some(l=>!l.disabled&&!l.selected);this.options.forEach(l=>{l.disabled||(a?l.select():l.deselect())})}else{let a=r.activeItemIndex;r.onKeydown(e),this._multiple&&o&&e.shiftKey&&r.activeItem&&r.activeItemIndex!==a&&r.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!Ft(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(r=>r.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(r=>this._selectOptionByValue(r)),this._sortValues();else{let r=this._selectOptionByValue(e);r?this._keyManager.updateActiveItem(r):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let r=this.options.find(i=>{if(this._selectionModel.isSelected(i))return!1;try{return(i.value!=null||this.canSelectNullableOptions)&&this._compareWith(i.value,e)}catch{return!1}});return r&&this._selectionModel.select(r),r}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof Ho?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new Ba(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=Pt(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(ue(e)).subscribe(r=>{this._onSelect(r.source,r.isUserInput),r.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),Pt(...this.options.map(r=>r._stateChanges)).pipe(ue(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,r){let i=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(i!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),r&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),r&&this.focus())),i!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((r,i)=>this.sortComparator?this.sortComparator(r,i,e):e.indexOf(r)-e.indexOf(i)),this.stateChanges.next()}}_propagateChanges(e){let r;this.multiple?r=this.selected.map(i=>i.value):r=this.selected?this.selected.value:e,this._value=r,this.valueChange.emit(r),this._onChange(r),this.selectionChange.emit(this._getChangeEvent(r)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let r=0;r<this.options.length;r++)if(!this.options.get(r).disabled){e=r;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,r=e?e+" ":"";return this.ariaLabelledby?r+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let r=this._elementRef.nativeElement;e.length?r.setAttribute("aria-describedby",e.join(" ")):r.removeAttribute("aria-describedby")}onContainerClick(e){let r=mt(e);r&&(r.tagName==="MAT-OPTION"||r.classList.contains("cdk-overlay-backdrop")||r.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=M({type:t,selectors:[["mat-select"]],contentQueries:function(r,i,o){if(r&1&&yt(o,HP,5)(o,rs,5)(o,Ev,5),r&2){let s;Z(s=K())&&(i.customTrigger=s.first),Z(s=K())&&(i.options=s),Z(s=K())&&(i.optionGroups=s)}},viewQuery:function(r,i){if(r&1&&et(AP,5)(RP,5)(Mu,5),r&2){let o;Z(o=K())&&(i.trigger=o.first),Z(o=K())&&(i.panel=o.first),Z(o=K())&&(i._overlayDir=o.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(r,i){r&1&&ge("keydown",function(s){return i._handleKeydown(s)})("focus",function(){return i._onFocus()})("blur",function(){return i._onBlur()}),r&2&&(fe("id",i.id)("tabindex",i.disabled?-1:i.tabIndex)("aria-controls",i.panelOpen?i.id+"-panel":null)("aria-expanded",i.panelOpen)("aria-label",i.ariaLabel||null)("aria-required",i.required.toString())("aria-disabled",i.disabled.toString())("aria-invalid",i.errorState)("aria-activedescendant",i._getAriaActiveDescendant()),L("mat-mdc-select-disabled",i.disabled)("mat-mdc-select-invalid",i.errorState)("mat-mdc-select-required",i.required)("mat-mdc-select-empty",i.empty)("mat-mdc-select-multiple",i.multiple)("mat-select-open",i.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",oe],disableRipple:[2,"disableRipple","disableRipple",oe],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:bi(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",oe],placeholder:"placeholder",required:[2,"required","required",oe],multiple:[2,"multiple","multiple",oe],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",oe],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",bi],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",oe]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[Ne([{provide:pv,useExisting:t},{provide:Cv,useExisting:t}]),ut],ngContentSelectors:NP,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(r,i){if(r&1&&(ce(kP),b(0,"div",2,0),ge("click",function(){return i.open()}),b(3,"div",3),X(4,OP,2,1,"span",4)(5,LP,3,1,"span",5),w(),b(6,"div",6)(7,"div",7),_r(),b(8,"svg",8),he(9,"path",9),w()()()(),zt(10,jP,3,16,"ng-template",10),ge("detach",function(){return i.close()})("backdropClick",function(){return i.close()})("overlayKeydown",function(s){return i._handleOverlayKeydown(s)})),r&2){let o=Wt(1);v(3),fe("id",i._valueId),v(),J(i.empty?4:5),v(6),ye("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",i._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",i._scrollStrategy)("cdkConnectedOverlayOrigin",i._preferredOverlayOrigin||o)("cdkConnectedOverlayPositions",i._positions)("cdkConnectedOverlayWidth",i._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",i._popoverLocation)}},dependencies:[Ho,Mu],styles:[`@keyframes _mat-select-enter {
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
`],encapsulation:2,changeDetection:0})}return t})();var WE=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=P({type:t});static \u0275inj=F({imports:[$o,xv,pe,rr,Ju,xv]})}return t})();var of=["*"],$P=["content"],zP=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],GP=["mat-drawer","mat-drawer-content","*"];function WP(t,n){if(t&1){let e=Ot();b(0,"div",1),ge("click",function(){Ze(e);let i=H();return Ke(i._onBackdropClicked())}),w()}if(t&2){let e=H();L("mat-drawer-shown",e._isShowingBackdrop())}}function qP(t,n){t&1&&(b(0,"mat-drawer-content"),R(1,2),w())}var YP=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],ZP=["mat-sidenav","mat-sidenav-content","*"];function KP(t,n){if(t&1){let e=Ot();b(0,"div",1),ge("click",function(){Ze(e);let i=H();return Ke(i._onBackdropClicked())}),w()}if(t&2){let e=H();L("mat-drawer-shown",e._isShowingBackdrop())}}function QP(t,n){t&1&&(b(0,"mat-sidenav-content"),R(1,2),w())}var XP=`.mat-drawer-container {
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
`;var JP=new g("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),Tv=new g("MAT_DRAWER_CONTAINER"),nf=(()=>{class t extends jo{_platform=u(Ee);_changeDetectorRef=u(Te);_container=u(Mv);constructor(){let e=u(j),r=u(Ni),i=u(O);super(e,r,i)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:r}=this._container;return e!=null&&e.mode!=="over"&&e.opened||r!=null&&r.mode!=="over"&&r.opened}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=M({type:t,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(r,i){r&2&&(qt("margin-left",i._container._contentMargins.left,"px")("margin-right",i._container._contentMargins.right,"px"),L("mat-drawer-content-hidden",i._shouldBeHidden()))},features:[Ne([{provide:jo,useExisting:t}]),Pe],ngContentSelectors:of,decls:1,vars:0,template:function(r,i){r&1&&(ce(),R(0))},encapsulation:2,changeDetection:0})}return t})(),Sv=(()=>{class t{_elementRef=u(j);_focusTrapFactory=u(Mg);_focusMonitor=u(Mn);_platform=u(Ee);_ngZone=u(O);_renderer=u(Xe);_interactivityChecker=u(gu);_doc=u(B);_container=u(Tv,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=Kt(e)}_disableClose=!1;get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=Kt(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(Kt(e))}_opened=ie(!1);_openedVia=null;_animationStarted=new D;_animationEnd=new D;openedChange=new W(!0);_openedStream=this.openedChange.pipe(le(e=>e),I(()=>{}));openedStart=this._animationStarted.pipe(le(()=>this.opened),Gl(void 0));_closedStream=this.openedChange.pipe(le(e=>!e),I(()=>{}));closedStart=this._animationStarted.pipe(le(()=>!this.opened),Gl(void 0));_destroyed=new D;onPositionChanged=new W;_content;_modeChanged=new D;_injector=u(z);_changeDetectorRef=u(Te);constructor(){this.openedChange.pipe(ue(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,r=this._elementRef.nativeElement;return[e.listen(r,"keydown",i=>{i.keyCode===27&&!this.disableClose&&!Ft(i)&&this._ngZone.run(()=>{this.close(),i.stopPropagation(),i.preventDefault()})}),e.listen(r,"transitionend",this._handleTransitionEvent),e.listen(r,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(e,r){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let i=()=>{o(),s(),e.removeAttribute("tabindex")},o=this._renderer.listen(e,"blur",i),s=this._renderer.listen(e,"mousedown",i)})),e.focus(r)}_focusByCssSelector(e,r){let i=this._elementRef.nativeElement.querySelector(e);i&&this._forceFocus(i,r)}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":ze(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus=="function"&&e.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(e=!this.opened,r){e&&r&&(this._openedVia=r);let i=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),i}_setOpen(e,r,i){return e===this.opened?Promise.resolve(e?"open":"close"):(this._opened.set(e),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",e),!e&&r&&this._restoreFocus(i),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(o=>{this.openedChange.pipe(xe(1)).subscribe(s=>o(s?"open":"close"))}))}_setIsAnimating(e){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",e)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let r=this._elementRef.nativeElement,i=r.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),i.insertBefore(this._anchor,r)),i.appendChild(r)):this._anchor&&this._anchor.parentNode.insertBefore(r,this._anchor)}_handleTransitionEvent=e=>{let r=this._elementRef.nativeElement;e.target===r&&this._ngZone.run(()=>{e.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static \u0275fac=function(r){return new(r||t)};static \u0275cmp=M({type:t,selectors:[["mat-drawer"]],viewQuery:function(r,i){if(r&1&&et($P,5),r&2){let o;Z(o=K())&&(i._content=o.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(r,i){r&2&&(fe("align",null)("tabIndex",i.mode!=="side"?"-1":null),qt("visibility",!i._container&&!i.opened?"hidden":null),L("mat-drawer-end",i.position==="end")("mat-drawer-over",i.mode==="over")("mat-drawer-push",i.mode==="push")("mat-drawer-side",i.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:of,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(r,i){r&1&&(ce(),b(0,"div",1,0),R(2),w())},dependencies:[jo],encapsulation:2,changeDetection:0})}return t})(),Mv=(()=>{class t{_dir=u(Dt,{optional:!0});_element=u(j);_ngZone=u(O);_changeDetectorRef=u(Te);_animationDisabled=Le();_transitionsEnabled=!1;_allDrawers;_drawers=new an;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=Kt(e)}_autosize=u(JP);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:Kt(e)}_backdropOverride=null;backdropClick=new W;_start=null;_end=null;_left=null;_right=null;_destroyed=new D;_doCheckSubject=new D;_contentMargins={left:null,right:null};_contentMarginChanges=new D;get scrollable(){return this._userContent||this._content}_injector=u(z);constructor(){let e=u(Ee),r=u(Tn);this._dir?.change.pipe(ue(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),r.change().pipe(ue(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe($e(this._allDrawers),ue(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(r=>!r._container||r._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe($e(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(Yr(10),ue(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,r=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let i=this._left._getWidth();e+=i,r-=i}}if(this._right&&this._right.opened){if(this._right.mode=="side")r+=this._right._getWidth();else if(this._right.mode=="push"){let i=this._right._getWidth();r+=i,e-=i}}e=e||null,r=r||null,(e!==this._contentMargins.left||r!==this._contentMargins.right)&&(this._contentMargins={left:e,right:r},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(ue(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!=="side"&&e.openedChange.pipe(ue(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(ue(this._drawers.changes)).subscribe(()=>{ze({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(ue(Pt(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let r=this._element.nativeElement.classList,i="mat-drawer-container-has-open";e?r.add(i):r.remove(i)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=M({type:t,selectors:[["mat-drawer-container"]],contentQueries:function(r,i,o){if(r&1&&yt(o,nf,5)(o,Sv,5),r&2){let s;Z(s=K())&&(i._content=s.first),Z(s=K())&&(i._allDrawers=s)}},viewQuery:function(r,i){if(r&1&&et(nf,5),r&2){let o;Z(o=K())&&(i._userContent=o.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(r,i){r&2&&L("mat-drawer-container-explicit-backdrop",i._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[Ne([{provide:Tv,useExisting:t}])],ngContentSelectors:GP,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(r,i){r&1&&(ce(zP),X(0,WP,1,2,"div",0),R(1),R(2,1),X(3,qP,2,0,"mat-drawer-content")),r&2&&(J(i.hasBackdrop?0:-1),v(3),J(i._content?-1:3))},dependencies:[nf],styles:[`.mat-drawer-container {
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
`],encapsulation:2,changeDetection:0})}return t})(),rf=(()=>{class t extends nf{static \u0275fac=(()=>{let e;return function(i){return(e||(e=Mt(t)))(i||t)}})();static \u0275cmp=M({type:t,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[Ne([{provide:jo,useExisting:t}]),Pe],ngContentSelectors:of,decls:1,vars:0,template:function(r,i){r&1&&(ce(),R(0))},encapsulation:2,changeDetection:0})}return t})(),Av=(()=>{class t extends Sv{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=Kt(e)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=nr(e)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=nr(e)}_fixedBottomGap=0;static \u0275fac=(()=>{let e;return function(i){return(e||(e=Mt(t)))(i||t)}})();static \u0275cmp=M({type:t,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(r,i){r&2&&(fe("tabIndex",i.mode!=="side"?"-1":null)("align",null),qt("top",i.fixedInViewport?i.fixedTopGap:null,"px")("bottom",i.fixedInViewport?i.fixedBottomGap:null,"px"),L("mat-drawer-end",i.position==="end")("mat-drawer-over",i.mode==="over")("mat-drawer-push",i.mode==="push")("mat-drawer-side",i.mode==="side")("mat-sidenav-fixed",i.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[Ne([{provide:Sv,useExisting:t}]),Pe],ngContentSelectors:of,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(r,i){r&1&&(ce(),b(0,"div",1,0),R(2),w())},dependencies:[jo],encapsulation:2,changeDetection:0})}return t})(),qE=(()=>{class t extends Mv{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let e;return function(i){return(e||(e=Mt(t)))(i||t)}})();static \u0275cmp=M({type:t,selectors:[["mat-sidenav-container"]],contentQueries:function(r,i,o){if(r&1&&yt(o,rf,5)(o,Av,5),r&2){let s;Z(s=K())&&(i._content=s.first),Z(s=K())&&(i._allDrawers=s)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(r,i){r&2&&L("mat-drawer-container-explicit-backdrop",i._backdropOverride)},exportAs:["matSidenavContainer"],features:[Ne([{provide:Tv,useExisting:t},{provide:Mv,useExisting:t}]),Pe],ngContentSelectors:ZP,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(r,i){r&1&&(ce(YP),X(0,KP,1,2,"div",0),R(1),R(2,1),X(3,QP,2,0,"mat-sidenav-content")),r&2&&(J(i.hasBackdrop?0:-1),v(3),J(i._content?-1:3))},dependencies:[rf],styles:[XP],encapsulation:2,changeDetection:0})}return t})(),YE=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=P({type:t});static \u0275inj=F({imports:[rr,pe,rr]})}return t})();var t1=["mat-internal-form-field",""],n1=["*"],ZE=(()=>{class t{labelPosition="after";static \u0275fac=function(r){return new(r||t)};static \u0275cmp=M({type:t,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(r,i){r&2&&L("mdc-form-field--align-end",i.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:t1,ngContentSelectors:n1,decls:1,vars:0,template:function(r,i){r&1&&(ce(),R(0))},styles:[`.mat-internal-form-field {
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
`],encapsulation:2,changeDetection:0})}return t})();var r1=["switch"],i1=["*"];function o1(t,n){t&1&&(b(0,"span",11),_r(),b(1,"svg",13),he(2,"path",14),w(),b(3,"svg",15),he(4,"path",16),w()())}var s1=new g("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})}),sf=class{source;checked;constructor(n,e){this.source=n,this.checked=e}},a1=(()=>{class t{_elementRef=u(j);_focusMonitor=u(Mn);_changeDetectorRef=u(Te);defaults=u(s1);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new sf(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=Le();_focused=!1;name=null;id;labelPosition="after";ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new W;toggleChange=new W;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){u(wt).load(Nr);let e=u(new Kn("tabindex"),{optional:!0}),r=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=r.color||"accent",this.id=this._uniqueId=u(at).getId("mat-mdc-slide-toggle-"),this.hideIcon=r.hideIcon??!1,this.disabledInteractive=r.disabledInteractive??!1,this._labelId=this._uniqueId+"-label"}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e==="keyboard"||e==="program"?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new sf(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=M({type:t,selectors:[["mat-slide-toggle"]],viewQuery:function(r,i){if(r&1&&et(r1,5),r&2){let o;Z(o=K())&&(i._switchElement=o.first)}},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:13,hostBindings:function(r,i){r&2&&(Gt("id",i.id),fe("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),Tt(i.color?"mat-"+i.color:""),L("mat-mdc-slide-toggle-focused",i._focused)("mat-mdc-slide-toggle-checked",i.checked)("_mat-animation-noopable",i._noopAnimations))},inputs:{name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],required:[2,"required","required",oe],color:"color",disabled:[2,"disabled","disabled",oe],disableRipple:[2,"disableRipple","disableRipple",oe],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:bi(e)],checked:[2,"checked","checked",oe],hideIcon:[2,"hideIcon","hideIcon",oe],disabledInteractive:[2,"disabledInteractive","disabledInteractive",oe]},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[Ne([{provide:Z0,useExisting:bn(()=>t),multi:!0},{provide:Zu,useExisting:t,multi:!0}]),ut],ngContentSelectors:i1,decls:14,vars:27,consts:[["switch",""],["mat-internal-form-field","",3,"labelPosition"],["role","switch","type","button",1,"mdc-switch",3,"click","tabIndex","disabled"],[1,"mat-mdc-slide-toggle-touch-target"],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-switch__icons"],[1,"mdc-label",3,"click","for"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"]],template:function(r,i){if(r&1&&(ce(),b(0,"div",1)(1,"button",2,0),ge("click",function(){return i._handleClick()}),he(3,"div",3)(4,"span",4),b(5,"span",5)(6,"span",6)(7,"span",7),he(8,"span",8),w(),b(9,"span",9),he(10,"span",10),w(),X(11,o1,5,0,"span",11),w()()(),b(12,"label",12),ge("click",function(s){return s.stopPropagation()}),R(13),w()()),r&2){let o=Wt(2);ye("labelPosition",i.labelPosition),v(),L("mdc-switch--selected",i.checked)("mdc-switch--unselected",!i.checked)("mdc-switch--checked",i.checked)("mdc-switch--disabled",i.disabled)("mat-mdc-slide-toggle-disabled-interactive",i.disabledInteractive),ye("tabIndex",i.disabled&&!i.disabledInteractive?-1:i.tabIndex)("disabled",i.disabled&&!i.disabledInteractive),fe("id",i.buttonId)("name",i.name)("aria-label",i.ariaLabel)("aria-labelledby",i._getAriaLabelledBy())("aria-describedby",i.ariaDescribedby)("aria-required",i.required||null)("aria-checked",i.checked)("aria-disabled",i.disabled&&i.disabledInteractive?"true":null),v(9),ye("matRippleTrigger",o)("matRippleDisabled",i.disableRipple||i.disabled)("matRippleCentered",!0),v(),J(i.hideIcon?-1:11),v(),ye("for",i.buttonId),fe("id",i._labelId)}},dependencies:[zo,ZE],styles:[`.mdc-switch {
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
`],encapsulation:2,changeDetection:0})}return t})(),KE=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=P({type:t});static \u0275inj=F({imports:[a1,pe]})}return t})();var af=class t{_playerCount=ie(2);playerCount=this._playerCount.asReadonly();neutralBuildings=[{title:"A",sides:[{title:"front"}]},{title:"B",sides:[{title:"front"}]},{title:"C",sides:[{title:"front"}]},{title:"D",sides:[{title:"front"}]},{title:"E",sides:[{title:"front"}]},{title:"F",sides:[{title:"front"}]},{title:"G",sides:[{title:"front"}]},{title:"H",sides:[{title:"front"}]}];playerBuildings=[{title:"1",sides:[{title:"a"},{title:"b"}]},{title:"2",sides:[{title:"a"},{title:"b"}]},{title:"3",sides:[{title:"a"},{title:"b"}]},{title:"4",sides:[{title:"a"},{title:"b"}]},{title:"5",sides:[{title:"a"},{title:"b"}]},{title:"6",sides:[{title:"a"},{title:"b"}]},{title:"7",sides:[{title:"a"},{title:"b"}]},{title:"8",sides:[{title:"a"},{title:"b"}]},{title:"9",sides:[{title:"a"},{title:"b"}]},{title:"10",sides:[{title:"a"},{title:"b"}]}];stationMasters=[{title:"1",sides:[{title:"front",image:"img/station-master-01.png"}]},{title:"2",sides:[{title:"front",image:"img/station-master-02.png"}]},{title:"3",sides:[{title:"front",image:"img/station-master-03.png"}]},{title:"4",sides:[{title:"front",image:"img/station-master-04.png"}]},{title:"5",sides:[{title:"front",image:"img/station-master-05.png"}]},{title:"6",sides:[{title:"front",image:"img/station-master-06.png"}]},{title:"7",sides:[{title:"front",image:"img/station-master-07.png"}]},{title:"8",sides:[{title:"front",image:"img/station-master-08.png"}]}];cities=[{title:"Le Havre",sides:[{title:"a"},{title:"b"}]},{title:"Rotterdam",sides:[{title:"a"},{title:"b"}]},{title:"Liverpool",sides:[{title:"a"},{title:"b"}]}];setPlayerCount(n){this._playerCount.set(n)}getRandomNeutralBuildingOrder(){return this.shuffleArray(this.neutralBuildings)}getRandomStationMasters(){let n=[],e=this.shuffleArray(this.stationMasters);for(let r=0;r<5;r++)n.push(e.pop());return n}getRandomPlayerBuildings(){let n=JSON.parse(JSON.stringify(this.playerBuildings));return n.forEach(e=>{e.sides.splice(Math.floor(Math.random()*e.sides.length),1)}),n}getRandomCities(){let n=JSON.parse(JSON.stringify(this.cities));return n.forEach(e=>{e.sides.splice(Math.floor(Math.random()*e.sides.length),1)}),n}shuffleArray(n){let e=n.slice();for(let r,i,o=e.length;o;r=Math.floor(Math.random()*o),i=e[--o],e[o]=e[r],e[r]=i);return e}static \u0275fac=function(e){return new(e||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})};var lf=class t{getNumber(n){let e=this.getString(n);if(e===null)return null;let r=Number(e);return Number.isFinite(r)?r:null}setNumber(n,e){this.setString(n,String(e))}getString(n){return this.isStorageAvailable()?localStorage.getItem(n):null}setString(n,e){this.isStorageAvailable()&&localStorage.setItem(n,e)}isStorageAvailable(){return typeof window<"u"&&typeof localStorage<"u"}static \u0275fac=function(e){return new(e||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})};var l1=["*",[["mat-toolbar-row"]]],c1=["*","mat-toolbar-row"],d1=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275dir=Y({type:t,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return t})(),cf=(()=>{class t{_elementRef=u(j);_platform=u(Ee);_document=u(B);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=M({type:t,selectors:[["mat-toolbar"]],contentQueries:function(r,i,o){if(r&1&&yt(o,d1,5),r&2){let s;Z(s=K())&&(i._toolbarRows=s)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(r,i){r&2&&(Tt(i.color?"mat-"+i.color:""),L("mat-toolbar-multiple-rows",i._toolbarRows.length>0)("mat-toolbar-single-row",i._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:c1,decls:2,vars:0,template:function(r,i){r&1&&(ce(l1),R(0),R(1,1))},styles:[`.mat-toolbar {
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
`],encapsulation:2,changeDetection:0})}return t})();var df=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=P({type:t});static \u0275inj=F({imports:[pe]})}return t})();function XE(t){return Error(`Unable to find icon with the name "${t}"`)}function u1(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function JE(t){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${t}".`)}function ex(t){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${t}".`)}var sr=class{url;svgText;options;svgElement=null;constructor(n,e,r){this.url=n,this.svgText=e,this.options=r}},nx=(()=>{class t{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,r,i,o){this._httpClient=e,this._sanitizer=r,this._errorHandler=o,this._document=i}addSvgIcon(e,r,i){return this.addSvgIconInNamespace("",e,r,i)}addSvgIconLiteral(e,r,i){return this.addSvgIconLiteralInNamespace("",e,r,i)}addSvgIconInNamespace(e,r,i,o){return this._addSvgIconConfig(e,r,new sr(i,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,r,i,o){let s=this._sanitizer.sanitize(Qe.HTML,i);if(!s)throw ex(i);let a=Ti(s);return this._addSvgIconConfig(e,r,new sr("",a,o))}addSvgIconSet(e,r){return this.addSvgIconSetInNamespace("",e,r)}addSvgIconSetLiteral(e,r){return this.addSvgIconSetLiteralInNamespace("",e,r)}addSvgIconSetInNamespace(e,r,i){return this._addSvgIconSetConfig(e,new sr(r,null,i))}addSvgIconSetLiteralInNamespace(e,r,i){let o=this._sanitizer.sanitize(Qe.HTML,r);if(!o)throw ex(r);let s=Ti(o);return this._addSvgIconSetConfig(e,new sr("",s,i))}registerFontClassAlias(e,r=e){return this._fontCssClassesByAlias.set(e,r),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let r=this._sanitizer.sanitize(Qe.RESOURCE_URL,e);if(!r)throw JE(e);let i=this._cachedIconsByUrl.get(r);return i?N(uf(i)):this._loadSvgIconFromConfig(new sr(e,null)).pipe(Be(o=>this._cachedIconsByUrl.set(r,o)),I(o=>uf(o)))}getNamedSvgIcon(e,r=""){let i=tx(r,e),o=this._svgIconConfigs.get(i);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(r,e),o)return this._svgIconConfigs.set(i,o),this._getSvgFromConfig(o);let s=this._iconSetConfigs.get(r);return s?this._getSvgFromIconSetConfigs(e,s):ms(XE(i))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?N(uf(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(I(r=>uf(r)))}_getSvgFromIconSetConfigs(e,r){let i=this._extractIconWithNameFromAnySet(e,r);if(i)return N(i);let o=r.filter(s=>!s.svgText).map(s=>this._loadSvgIconSetFromConfig(s).pipe(mn(a=>{let c=`Loading icon set URL: ${this._sanitizer.sanitize(Qe.RESOURCE_URL,s.url)} failed: ${a.message}`;return this._errorHandler.handleError(new Error(c)),N(null)})));return kn(o).pipe(I(()=>{let s=this._extractIconWithNameFromAnySet(e,r);if(!s)throw XE(e);return s}))}_extractIconWithNameFromAnySet(e,r){for(let i=r.length-1;i>=0;i--){let o=r[i];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let s=this._svgElementFromConfig(o),a=this._extractSvgIconFromSet(s,e,o.options);if(a)return a}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(Be(r=>e.svgText=r),I(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?N(null):this._fetchIcon(e).pipe(Be(r=>e.svgText=r))}_extractSvgIconFromSet(e,r,i){let o=e.querySelector(`[id="${r}"]`);if(!o)return null;let s=o.cloneNode(!0);if(s.removeAttribute("id"),s.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(s,i);if(s.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(s),i);let a=this._svgElementFromString(Ti("<svg></svg>"));return a.appendChild(s),this._setSvgAttributes(a,i)}_svgElementFromString(e){let r=this._document.createElement("DIV");r.innerHTML=e;let i=r.querySelector("svg");if(!i)throw Error("<svg> tag not found");return i}_toSvgElement(e){let r=this._svgElementFromString(Ti("<svg></svg>")),i=e.attributes;for(let o=0;o<i.length;o++){let{name:s,value:a}=i[o];s!=="id"&&r.setAttribute(s,a)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&r.appendChild(e.childNodes[o].cloneNode(!0));return r}_setSvgAttributes(e,r){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),r&&r.viewBox&&e.setAttribute("viewBox",r.viewBox),e}_fetchIcon(e){let{url:r,options:i}=e,o=i?.withCredentials??!1;if(!this._httpClient)throw u1();if(r==null)throw Error(`Cannot fetch icon from URL "${r}".`);let s=this._sanitizer.sanitize(Qe.RESOURCE_URL,r);if(!s)throw JE(r);let a=this._inProgressUrlFetches.get(s);if(a)return a;let l=this._httpClient.get(s,{responseType:"text",withCredentials:o}).pipe(I(c=>Ti(c)),dr(()=>this._inProgressUrlFetches.delete(s)),vs());return this._inProgressUrlFetches.set(s,l),l}_addSvgIconConfig(e,r,i){return this._svgIconConfigs.set(tx(e,r),i),this}_addSvgIconSetConfig(e,r){let i=this._iconSetConfigs.get(e);return i?i.push(r):this._iconSetConfigs.set(e,[r]),this}_svgElementFromConfig(e){if(!e.svgElement){let r=this._svgElementFromString(e.svgText);this._setSvgAttributes(r,e.options),e.svgElement=r}return e.svgElement}_getIconConfigFromResolvers(e,r){for(let i=0;i<this._resolvers.length;i++){let o=this._resolvers[i](r,e);if(o)return f1(o)?new sr(o.url,null,o.options):new sr(o,null)}}static \u0275fac=function(r){return new(r||t)(T(bo,8),T(fa),T(B,8),T(Rt))};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function uf(t){return t.cloneNode(!0)}function tx(t,n){return t+":"+n}function f1(t){return!!(t.url&&t.options)}var h1=["*"],p1=new g("MAT_ICON_DEFAULT_OPTIONS"),m1=new g("mat-icon-location",{providedIn:"root",factory:()=>{let t=u(B),n=t?t.location:null;return{getPathname:()=>n?n.pathname+n.search:""}}}),rx=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],g1=rx.map(t=>`[${t}]`).join(", "),v1=/^url\(['"]?#(.*?)['"]?\)$/,ff=(()=>{class t{_elementRef=u(j);_iconRegistry=u(nx);_location=u(m1);_errorHandler=u(Rt);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let r=this._cleanupFontValue(e);r!==this._fontSet&&(this._fontSet=r,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let r=this._cleanupFontValue(e);r!==this._fontIcon&&(this._fontIcon=r,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=de.EMPTY;constructor(){let e=u(new Kn("aria-hidden"),{optional:!0}),r=u(p1,{optional:!0});r&&(r.color&&(this.color=this._defaultColor=r.color),r.fontSet&&(this.fontSet=r.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let r=e.split(":");switch(r.length){case 1:return["",r[0]];case 2:return r;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let r=this._location.getPathname();r!==this._previousPath&&(this._previousPath=r,this._prependPathToReferences(r))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let r=this._location.getPathname();this._previousPath=r,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(r),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,r=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();r--;){let i=e.childNodes[r];(i.nodeType!==1||i.nodeName.toLowerCase()==="svg")&&i.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,r=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(i=>i.length>0);this._previousFontSetClass.forEach(i=>e.classList.remove(i)),r.forEach(i=>e.classList.add(i)),this._previousFontSetClass=r,this.fontIcon!==this._previousFontIconClass&&!r.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let r=this._elementsWithExternalReferences;r&&r.forEach((i,o)=>{i.forEach(s=>{o.setAttribute(s.name,`url('${e}#${s.value}')`)})})}_cacheChildrenWithExternalReferences(e){let r=e.querySelectorAll(g1),i=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<r.length;o++)rx.forEach(s=>{let a=r[o],l=a.getAttribute(s),c=l?l.match(v1):null;if(c){let d=i.get(a);d||(d=[],i.set(a,d)),d.push({name:s,value:c[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[r,i]=this._splitIconName(e);r&&(this._svgNamespace=r),i&&(this._svgName=i),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(i,r).pipe(xe(1)).subscribe(o=>this._setSvgElement(o),o=>{let s=`Error retrieving icon ${r}:${i}! ${o.message}`;this._errorHandler.handleError(new Error(s))})}}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=M({type:t,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(r,i){r&2&&(fe("data-mat-icon-type",i._usingFontIcon()?"font":"svg")("data-mat-icon-name",i._svgName||i.fontIcon)("data-mat-icon-namespace",i._svgNamespace||i.fontSet)("fontIcon",i._usingFontIcon()?i.fontIcon:null),Tt(i.color?"mat-"+i.color:""),L("mat-icon-inline",i.inline)("mat-icon-no-color",i.color!=="primary"&&i.color!=="accent"&&i.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",oe],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:h1,decls:1,vars:0,template:function(r,i){r&1&&(ce(),R(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
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
`],encapsulation:2,changeDetection:0})}return t})(),hf=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=P({type:t});static \u0275inj=F({imports:[pe]})}return t})();var y1=["mat-menu-item",""],b1=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],_1=["mat-icon, [matMenuItemIcon]","*"];function w1(t,n){t&1&&(_r(),b(0,"svg",2),he(1,"polygon",3),w())}var D1=["*"];function C1(t,n){if(t&1){let e=Ot();ot(0,"div",0),vd("click",function(){Ze(e);let i=H();return Ke(i.closed.emit("click"))})("animationstart",function(i){Ze(e);let o=H();return Ke(o._onAnimationStart(i.animationName))})("animationend",function(i){Ze(e);let o=H();return Ke(o._onAnimationDone(i.animationName))})("animationcancel",function(i){Ze(e);let o=H();return Ke(o._onAnimationDone(i.animationName))}),ot(1,"div",1),R(2),pt()()}if(t&2){let e=H();Tt(e._classList),L("mat-menu-panel-animations-disabled",e._animationsDisabled)("mat-menu-panel-exit-animation",e._panelAnimationState==="void")("mat-menu-panel-animating",e._isAnimating()),Gt("id",e.panelId),fe("aria-label",e.ariaLabel||null)("aria-labelledby",e.ariaLabelledby||null)("aria-describedby",e.ariaDescribedby||null)}}var kv=new g("MAT_MENU_PANEL"),al=(()=>{class t{_elementRef=u(j);_document=u(B);_focusMonitor=u(Mn);_parentMenu=u(kv,{optional:!0});_changeDetectorRef=u(Te);role="menuitem";disabled=!1;disableRipple=!1;_hovered=new D;_focused=new D;_highlighted=!1;_triggersSubmenu=!1;constructor(){u(wt).load(Nr),this._parentMenu?.addItem?.(this)}focus(e,r){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,r):this._getHostElement().focus(r),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),r=e.querySelectorAll("mat-icon, .material-icons");for(let i=0;i<r.length;i++)r[i].remove();return e.textContent?.trim()||""}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=M({type:t,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(r,i){r&1&&ge("click",function(s){return i._checkDisabled(s)})("mouseenter",function(){return i._handleMouseEnter()}),r&2&&(fe("role",i.role)("tabindex",i._getTabIndex())("aria-disabled",i.disabled)("disabled",i.disabled||null),L("mat-mdc-menu-item-highlighted",i._highlighted)("mat-mdc-menu-item-submenu-trigger",i._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",oe],disableRipple:[2,"disableRipple","disableRipple",oe]},exportAs:["matMenuItem"],attrs:y1,ngContentSelectors:_1,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(r,i){r&1&&(ce(b1),R(0),b(1,"span",0),R(2,1),w(),he(3,"div",1),X(4,w1,2,0,":svg:svg",2)),r&2&&(v(3),ye("matRippleDisabled",i.disableRipple||i.disabled)("matRippleTrigger",i._getHostElement()),v(),J(i._triggersSubmenu?4:-1))},dependencies:[zo],encapsulation:2,changeDetection:0})}return t})();var E1=new g("MatMenuContent");var x1=new g("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),Rv="_mat-menu-enter",pf="_mat-menu-exit",os=(()=>{class t{_elementRef=u(j);_changeDetectorRef=u(Te);_injector=u(z);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=Le();_allItems;_directDescendantItems=new an;_classList={};_panelAnimationState="void";_animationDone=new D;_isAnimating=ie(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;set panelClass(e){let r=this._previousPanelClass,i=m({},this._classList);r&&r.length&&r.split(" ").forEach(o=>{i[o]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(o=>{i[o]=!0}),this._elementRef.nativeElement.className=""),this._classList=i}_previousPanelClass;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new W;close=this.closed;panelId=u(at).getId("mat-menu-panel-");constructor(){let e=u(x1);this.overlayPanelClass=e.overlayPanelClass||"",this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new Ha(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe($e(this._directDescendantItems),ve(e=>Pt(...e.map(r=>r._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let r=this._keyManager;if(this._panelAnimationState==="enter"&&r.activeItem?._hasFocus()){let i=e.toArray(),o=Math.max(0,Math.min(i.length-1,r.activeItemIndex||0));i[o]&&!i[o].disabled?r.setActiveItem(o):r.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe($e(this._directDescendantItems),ve(r=>Pt(...r.map(i=>i._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let r=e.keyCode,i=this._keyManager;switch(r){case 27:Ft(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(r===38||r===40)&&i.setFocusOrigin("keyboard"),i.onKeydown(e);return}}focusFirstItem(e="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=ze(()=>{let r=this._resolvePanel();if(!r||!r.contains(document.activeElement)){let i=this._keyManager;i.setFocusOrigin(e).setFirstItemActive(),!i.activeItem&&r&&r.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,r=this.yPosition){this._classList=U(m({},this._classList),{"mat-menu-before":e==="before","mat-menu-after":e==="after","mat-menu-above":r==="above","mat-menu-below":r==="below"}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let r=e===pf;(r||e===Rv)&&(r&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(r?"void":"enter"),this._isAnimating.set(!1))}_onAnimationStart(e){(e===Rv||e===pf)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?"enter":"void",e){if(this._keyManager.activeItemIndex===0){let r=this._resolvePanel();r&&(r.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(pf),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?Rv:pf)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe($e(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(r=>r._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),e}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=M({type:t,selectors:[["mat-menu"]],contentQueries:function(r,i,o){if(r&1&&yt(o,E1,5)(o,al,5)(o,al,4),r&2){let s;Z(s=K())&&(i.lazyContent=s.first),Z(s=K())&&(i._allItems=s),Z(s=K())&&(i.items=s)}},viewQuery:function(r,i){if(r&1&&et(dt,5),r&2){let o;Z(o=K())&&(i.templateRef=o.first)}},hostVars:3,hostBindings:function(r,i){r&2&&fe("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",oe],hasBackdrop:[2,"hasBackdrop","hasBackdrop",e=>e==null?null:oe(e)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[Ne([{provide:kv,useExisting:t}])],ngContentSelectors:D1,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(r,i){r&1&&(ce(),dd(0,C1,3,12,"ng-template"))},styles:[`mat-menu {
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
`],encapsulation:2,changeDetection:0})}return t})(),I1=new g("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let t=u(z);return()=>Fi(t)}});var is=new WeakMap,S1=(()=>{class t{_canHaveBackdrop;_element=u(j);_viewContainerRef=u(ft);_menuItemInstance=u(al,{optional:!0,self:!0});_dir=u(Dt,{optional:!0});_focusMonitor=u(Mn);_ngZone=u(O);_injector=u(z);_scrollStrategy=u(I1);_changeDetectorRef=u(Te);_animationsDisabled=Le();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=de.EMPTY;_menuCloseSubscription=de.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e&&(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(r=>{this._destroyMenu(r),(r==="click"||r==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(r)})),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let r=u(kv,{optional:!0});this._parentMaterialMenu=r instanceof os?r:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&is.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let r=this._menu;if(this._menuOpen||!r)return;this._pendingRemoval?.unsubscribe();let i=is.get(r);is.set(r,this),i&&i!==this&&i._closeMenu();let o=this._createOverlay(r),s=o.getConfig(),a=s.positionStrategy;this._setPosition(r,a),this._canHaveBackdrop?s.hasBackdrop=r.hasBackdrop==null?!this._triggersSubmenu():r.hasBackdrop:s.hasBackdrop=r.hasBackdrop??!1,o.hasAttached()||(o.attach(this._getPortal(r)),r.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),r.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,r.direction=this.dir,e&&r.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0),r instanceof os&&(r._setIsOpen(!0),r._directDescendantItems.changes.pipe(ue(r.close)).subscribe(()=>{a.withLockedPosition(!1).reapplyLastPosition(),a.withLockedPosition(!0)}))}focus(e,r){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,r):this._element.nativeElement.focus(r)}_destroyMenu(e){let r=this._overlayRef,i=this._menu;!r||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),i instanceof os&&this._ownsMenu(i)?(this._pendingRemoval=i._animationDone.pipe(xe(1)).subscribe(()=>{r.detach(),is.has(i)||i.lazyContent?.detach()}),i._setIsOpen(!1)):(r.detach(),i?.lazyContent?.detach()),i&&this._ownsMenu(i)&&is.delete(i),this.restoreFocus&&(e==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let r=this._getOverlayConfig(e);this._subscribeToPositions(e,r.positionStrategy),this._overlayRef=Pi(this._injector,r),this._overlayRef.keydownEvents().subscribe(i=>{this._menu instanceof os&&this._menu._handleKeydown(i)})}return this._overlayRef}_getOverlayConfig(e){return new or({positionStrategy:Ga(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:e.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,r){e.setPositionClasses&&r.positionChanges.subscribe(i=>{this._ngZone.run(()=>{let o=i.connectionPair.overlayX==="start"?"after":"before",s=i.connectionPair.overlayY==="top"?"below":"above";e.setPositionClasses(o,s)})})}_setPosition(e,r){let[i,o]=e.xPosition==="before"?["end","start"]:["start","end"],[s,a]=e.yPosition==="above"?["bottom","top"]:["top","bottom"],[l,c]=[s,a],[d,f]=[i,o],h=0;if(this._triggersSubmenu()){if(f=i=e.xPosition==="before"?"start":"end",o=d=i==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let p=this._parentMaterialMenu.items.first;this._parentInnerPadding=p?p._getHostElement().offsetTop:0}h=s==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(l=s==="top"?"bottom":"top",c=a==="top"?"bottom":"top");r.withPositions([{originX:i,originY:l,overlayX:d,overlayY:s,offsetY:h},{originX:o,originY:l,overlayX:f,overlayY:s,offsetY:h},{originX:i,originY:c,overlayX:d,overlayY:a,offsetY:-h},{originX:o,originY:c,overlayX:f,overlayY:a,offsetY:-h}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),r=this._overlayRef.detachments(),i=this._parentMaterialMenu?this._parentMaterialMenu.closed:N(),o=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(le(s=>this._menuOpen&&s!==this._menuItemInstance)):N();return Pt(e,i,o,r)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new ir(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return is.get(e)===this}_triggerIsAriaDisabled(){return oe(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(r){fm()};static \u0275dir=Y({type:t})}return t})(),ox=(()=>{class t extends S1{_cleanupTouchstart;_hoverSubscription=de.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new W;onMenuOpen=this.menuOpened;menuClosed=new W;onMenuClose=this.menuClosed;constructor(){super(!0);let e=u(Xe);this._cleanupTouchstart=e.listen(this._element.nativeElement,"touchstart",r=>{Mi(r)||(this._openedBy="touch")},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){Si(e)||(this._openedBy=e.button===0?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let r=e.keyCode;(r===13||r===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(r===39&&this.dir==="ltr"||r===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(!1))}))}static \u0275fac=function(r){return new(r||t)};static \u0275dir=Y({type:t,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(r,i){r&1&&ge("click",function(s){return i._handleClick(s)})("mousedown",function(s){return i._handleMousedown(s)})("keydown",function(s){return i._handleKeydown(s)}),r&2&&fe("aria-haspopup",i.menu?"menu":null)("aria-expanded",i.menuOpen)("aria-controls",i.menuOpen?i.menu==null?null:i.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[Pe]})}return t})();var sx=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=P({type:t});static \u0275inj=F({imports:[Go,$o,pe,rr]})}return t})();function T1(t,n){if(t&1){let e=Ot();b(0,"button",3),ge("click",function(){let i=Ze(e).$implicit,o=H();return Ke(o.changeLanguage(i))}),b(1,"mat-icon"),x(2," language "),w(),b(3,"span"),x(4),Yn(5,"transloco"),w()()}if(t&2){let e=n.$implicit,r=H();L("active",r.activeLang()===e),v(),qt("color",r.activeLang()===e?"rgb(255 143 0)":null),v(2),qt("color",r.activeLang()===e?"rgb(255 143 0)":null),v(),ae(" ",Zn(5,7,e+"-language-label")," ")}}var mf=class t{translocoService=u(Ko);activeLang=ie("");availableLangs=ie([]);constructor(){let n=U0(),e=this.translocoService.getAvailableLangs();if(this.availableLangs.set(e),n&&this.translocoService.isLang(n))this.activeLang.set(n),this.translocoService.getActiveLang()!==n&&ze(()=>{this.translocoService.setActiveLang(n)});else{let r=this.translocoService.getDefaultLang();this.activeLang.set(r)}}changeLanguage(n){typeof n=="string"&&(this.translocoService.setActiveLang(n),this.activeLang.set(this.translocoService.getActiveLang()))}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["app-language-selector"]],decls:10,vars:4,consts:[["menu","matMenu"],["mat-icon-button","","aria-label","Language Selection",1,"example-icon","favorite-icon",3,"matMenuTriggerFor"],["mat-menu-item","",3,"active"],["mat-menu-item","",3,"click"]],template:function(e,r){if(e&1&&(b(0,"button",1)(1,"mat-icon"),x(2,"translate"),w()(),b(3,"span"),x(4),Yn(5,"transloco"),w(),b(6,"mat-menu",null,0),Wn(8,T1,6,9,"button",2,Gn),w()),e&2){let i=Wt(7);ye("matMenuTriggerFor",i),v(4),Se(Zn(5,2,r.activeLang()+"-language-label")),v(4),qn(r.availableLangs())}},dependencies:[Sr,Za,Gg,hf,ff,sx,os,al,ox,An,Qo],encapsulation:2})};function A1(t,n){t&1&&(b(0,"span"),x(1),Yn(2,"transloco"),w()),t&2&&(v(),Se(Zn(2,1,"app-title")))}function R1(t,n){t&1&&(b(0,"span",4),x(1),Yn(2,"transloco"),w()),t&2&&(v(),Se(Zn(2,1,"app-title-short")))}var gf=class t{sidebarHandle=Cd.required();responsive=u(Ri);isXSmall=_o(this.responsive.observe(Po.XSmall).pipe(I(n=>n.matches)),{initialValue:!1});static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["app-page-header"]],inputs:{sidebarHandle:[1,"sidebarHandle"]},decls:10,vars:4,consts:[[1,"page-header"],[1,"main-toolbar","toolbar"],["type","button","mat-icon-button","",3,"click","hidden"],[1,"app-name","text-xl"],[1,"text-xl"],[1,"spacer"]],template:function(e,r){e&1&&(b(0,"div",0)(1,"mat-toolbar",1)(2,"button",2),ge("click",function(){return r.sidebarHandle().toggle()}),b(3,"mat-icon"),x(4,"menu"),w()(),b(5,"span",3),X(6,A1,3,3,"span")(7,R1,3,3,"span",4),w(),he(8,"span",5)(9,"app-language-selector"),w()()),e&2&&(v(),L("is-mobile",r.isXSmall()),v(),ye("hidden",!r.isXSmall()),v(4),J(r.isXSmall()?7:6))},dependencies:[Sr,df,cf,hf,ff,An,mf,Qo],styles:[".is-mobile[_ngcontent-%COMP%]{position:fixed;z-index:2}.app-name[_ngcontent-%COMP%]{margin:0 0 0 8px}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}.mat-toolbar[_ngcontent-%COMP%]{color:var(--mat-sys-primary);background:var(--bg-color)}"]})};var vf=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["app-page-footer"]],decls:7,vars:3,consts:[[1,"page-footer","text-xs","flex","items-center","flex-row","flex-wrap"],["color","primary",1,"page-footer"],[1,"flex","flex-1","justify-end","text-xl"],["href","https://boardgamegeek.com/user/Vortilion","target","_blank",1,"text-blue-700"]],template:function(e,r){e&1&&(b(0,"div",0)(1,"mat-toolbar",1)(2,"div",2),x(3),Yn(4,"transloco"),b(5,"a",3),x(6,"Vortilion"),w()()()()),e&2&&(v(3),ae(" ",Zn(4,1,"creator-prefix"),"\xA0"))},dependencies:[df,cf,An,Qo],styles:[".page-footer[_ngcontent-%COMP%]{color:var(--mat-sys-primary);background:var(--bg-color)}"]})};var k1=t=>({"w-full":t});function N1(t,n){if(t&1&&(b(0,"mat-option",10),x(1),b(2,"span"),x(3),w()()),t&2){let e=n.$implicit,r=H().$implicit;ye("value",e.value),v(),ae(" ",e.label," "),v(2),Se(r("players-label"))}}function O1(t,n){if(t&1&&(b(0,"li",21)(1,"span"),x(2),w()()),t&2){let e=n.$implicit;v(2),Se(e.title)}}function F1(t,n){if(t&1&&(b(0,"mat-grid-tile")(1,"mat-grid-tile-header")(2,"h3")(3,"span"),x(4),w(),x(5,": "),w()(),b(6,"ul",20),Wn(7,O1,3,1,"li",21,Gn),w()()),t&2){let e=H().$implicit,r=H();v(4),Se(e("neutral-buildings-label")),v(3),qn(r.randomNeutralBuildings())}}function P1(t,n){if(t&1&&(b(0,"div"),he(1,"img",22),w()),t&2){let e=n.$implicit;v(),ye("src",e.sides[0].image,Zp)}}function L1(t,n){if(t&1&&(b(0,"mat-grid-tile")(1,"mat-grid-tile-header")(2,"h3")(3,"span"),x(4),w(),x(5,": "),w()(),b(6,"div",20),Wn(7,P1,2,1,"div",null,Gn),w()()),t&2){let e=H().$implicit,r=H();v(4),Se(e("station-masters-label")),v(3),qn(r.randomStationMasters())}}function j1(t,n){if(t&1&&(b(0,"span",17)(1,"span",23),x(2),w()()),t&2){let e=n.$implicit;v(2),ta("",e.title,"",e.sides[0].title," ")}}function V1(t,n){if(t&1&&(b(0,"span",17)(1,"span",23),x(2),w()()),t&2){let e=n.$implicit;v(2),ta("",e.title,": ",e.sides[0].title," ")}}function B1(t,n){if(t&1&&(b(0,"li"),x(1),w()),t&2){let e=H().$implicit;v(),ae(" ",e("further-steps-step41")," ")}}function H1(t,n){if(t&1&&(b(0,"li"),x(1),w()),t&2){let e=H().$implicit;v(),ae(" ",e("further-steps-step42")," ")}}function U1(t,n){if(t&1&&(b(0,"li"),x(1),w()),t&2){let e=H().$implicit;v(),ae(" ",e("further-steps-step43")," ")}}function $1(t,n){if(t&1&&(b(0,"li"),x(1),w()),t&2){let e=H().$implicit;v(),ae(" ",e("further-steps-step71")," ")}}function z1(t,n){if(t&1&&(b(0,"li"),x(1),w()),t&2){let e=H().$implicit;v(),ae(" ",e("further-steps-step72")," ")}}function G1(t,n){if(t&1&&(b(0,"li"),x(1),w()),t&2){let e=H().$implicit;v(),ae(" ",e("further-steps-step73")," ")}}function W1(t,n){if(t&1&&(b(0,"li"),x(1),w()),t&2){let e=H().$implicit;v(),ae(" ",e("further-steps-step83")," ")}}function q1(t,n){if(t&1&&(b(0,"li"),x(1),w()),t&2){let e=H().$implicit;v(),ae(" ",e("further-steps-step84")," ")}}function Y1(t,n){if(t&1){let e=Ot();md(0),b(1,"div",2),he(2,"app-page-header",3),b(3,"mat-sidenav-container",4)(4,"mat-sidenav",5,0)(6,"div",6)(7,"h2"),x(8),w(),he(9,"mat-divider",7),b(10,"h3"),x(11),w(),b(12,"mat-form-field",8)(13,"mat-label"),x(14),w(),b(15,"mat-select",9),ge("selectionChange",function(i){Ze(e);let o=H();return Ke(o.onPlayerCountChange(i))}),Wn(16,N1,4,3,"mat-option",10,Gn),w()()()(),b(18,"mat-sidenav-content")(19,"div",11)(20,"div",12)(21,"div",13)(22,"button",14),ge("click",function(){Ze(e);let i=H();return Ke(i.randomizeSetup())}),b(23,"span"),x(24),w()()(),b(25,"mat-grid-list",15),X(26,F1,9,1,"mat-grid-tile"),X(27,L1,9,1,"mat-grid-tile"),b(28,"mat-grid-tile")(29,"mat-grid-tile-header")(30,"h3")(31,"span"),x(32),w(),x(33,": "),w()(),b(34,"div",16),Wn(35,j1,3,2,"span",17,Gn),w()(),b(37,"mat-grid-tile")(38,"mat-grid-tile-header")(39,"h3")(40,"span"),x(41),w(),x(42,": "),w()(),b(43,"div",16),Wn(44,V1,3,2,"span",17,Gn),w()()(),b(46,"mat-card")(47,"mat-card-header")(48,"h3")(49,"span"),x(50),w()()(),b(51,"mat-card-content")(52,"ol",18)(53,"li"),x(54),b(55,"ul",19)(56,"li"),x(57),w(),b(58,"li"),x(59),w(),b(60,"li"),x(61),w()()(),b(62,"li"),x(63),b(64,"ul",19)(65,"li"),x(66),w(),b(67,"li"),x(68),w(),b(69,"li"),x(70),w()()(),b(71,"li"),x(72),b(73,"ul",19)(74,"li"),x(75),w(),b(76,"li"),x(77),w(),b(78,"li"),x(79),w()()(),b(80,"li"),x(81),b(82,"ul",19),X(83,B1,2,1,"li"),X(84,H1,2,1,"li"),X(85,U1,2,1,"li"),b(86,"li"),x(87),w()()(),b(88,"li"),x(89),w(),b(90,"li")(91,"p"),x(92),w(),b(93,"p"),x(94),w(),b(95,"p"),x(96),w()(),b(97,"li"),x(98),b(99,"ul",19),X(100,$1,2,1,"li"),X(101,z1,2,1,"li"),X(102,G1,2,1,"li"),w()(),b(103,"li"),x(104),b(105,"ul",19)(106,"li"),x(107),w(),b(108,"li"),x(109),w(),X(110,W1,2,1,"li"),X(111,q1,2,1,"li"),w()()()()()()()()(),he(112,"app-page-footer"),w(),gd()}if(t&2){let e=n.$implicit,r=Wt(5),i=H();v(),L("is-mobile",i.isXSmall()),v(),ye("sidebarHandle",r),v(),qt("padding-top",i.isXSmall()?56:0,"px"),v(),ye("mode",i.isXSmall()?"over":"side")("fixedInViewport",i.isXSmall())("opened",!i.isXSmall()),v(4),ae("",e("options-label"),":"),v(3),ae("",e("player-count-label"),":"),v(3),Se(e("player-count-select-label")),v(),ye("value",i.playerCount()),v(),qn(i.playerCountList),v(6),Tt(Cm(51,k1,i.isXSmall())),v(2),Se(e("btn-setup-label")),v(),ye("cols",i.isMax1280()?1:2),v(),J(i.randomNeutralBuildings().length>0?26:-1),v(),J(i.randomStationMasters().length>0?27:-1),v(5),Se(e("player-buildings-label")),v(3),qn(i.randomPlayerBuildings()),v(6),Se(e("cities-label")),v(3),qn(i.randomCities()),v(6),Se(e("further-setup-steps-label")),v(4),ae(" ",e("further-steps-step1")," "),v(3),ae(" ",e("further-steps-step1a")," "),v(2),ae(" ",e("further-steps-step1b")," "),v(2),ae(" ",e("further-steps-step-1c")," "),v(2),ae(" ",e("further-steps-step2")," "),v(3),ae(" ",e("further-steps-step21")," "),v(2),ae(" ",e("further-steps-step22")," "),v(2),ae(" ",e("further-steps-step23")," "),v(2),ae(" ",e("further-steps-step3")," "),v(3),ae(" ",e("further-steps-step31")," "),v(2),ae(" ",e("further-steps-step32")," "),v(2),ae(" ",e("further-steps-step33")," "),v(2),ae(" ",e("further-steps-step4")," "),v(2),J(i.playerCount()===2?83:-1),v(),J(i.playerCount()===3?84:-1),v(),J(i.playerCount()===4?85:-1),v(2),ae(" ",e("further-steps-step4b")," "),v(2),Se(e("further-steps-step5")),v(3),Se(e("further-steps-step6")),v(2),Se(e("further-steps-step6a")),v(2),Se(e("further-steps-step6b")),v(2),ae(" ",e("further-steps-step7")," "),v(2),J(i.playerCount()===2?100:-1),v(),J(i.playerCount()===3?101:-1),v(),J(i.playerCount()===4?102:-1),v(2),ae(" ",e("further-steps-step8")," "),v(3),Se(e("further-steps-step81")),v(2),Se(e("further-steps-step82")),v(),J(i.playerCount()>=3?110:-1),v(),J(i.playerCount()>3?111:-1)}}var yf=class t{applicationConfigService=u(af);responsive=u(Ri);storageService=u(lf);playerCount=this.applicationConfigService.playerCount;playerCountList=[{label:"2",value:2},{label:"3",value:3},{label:"4",value:4}];isXSmall=_o(this.responsive.observe(Po.XSmall).pipe(I(n=>n.matches)),{initialValue:!1});isMax1280=_o(this.responsive.observe("(max-width: 1280px)").pipe(I(n=>n.matches)),{initialValue:!1});randomNeutralBuildings=ie([]);randomPlayerBuildings=ie([]);randomStationMasters=ie([]);randomCities=ie([]);constructor(){let n=this.storageService.getNumber("rar-playerCount");n!==null?this.updatePlayerCount(n):this.storageService.setNumber("rar-playerCount",2),this.randomizeSetup()}updatePlayerCount(n){this.applicationConfigService.setPlayerCount(n)}onPlayerCountChange(n){let e=Number(n.value);this.storageService.setNumber("rar-playerCount",e),this.updatePlayerCount(e)}randomizeSetup(){this.randomNeutralBuildings.set(this.applicationConfigService.getRandomNeutralBuildingOrder()),this.randomStationMasters.set(this.applicationConfigService.getRandomStationMasters()),this.randomPlayerBuildings.set(this.applicationConfigService.getRandomPlayerBuildings()),this.randomCities.set(this.applicationConfigService.getRandomCities())}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["app-home"]],decls:1,vars:0,consts:[["sidenav",""],[4,"transloco"],[1,"home-component","flex","flex-col"],[3,"sidebarHandle"],[1,"sidenav-container","flex-1"],["fixedTopGap","56",1,"sidenav",3,"mode","fixedInViewport","opened"],[1,"sidenav__inner","p-4"],[1,"divider","mb-4"],["appearance","fill"],[3,"selectionChange","value"],[3,"value"],[1,"sidenav-content","flex","flex-col","min-h-full"],[1,"flex-1","px-2","xSmall:px-10","py-5"],[1,"mb-4"],["mat-flat-button","","color","primary",3,"click"],["rowHeight","180px","gutterSize","5px",3,"cols"],[1,"flex","flex-wrap"],[1,"px-2","text-2xl","xSmall:text-xl","flex-1"],[1,"pl-4","list-decimal"],[1,"list-disc","pl-8","text-gray-400"],[1,"flex"],[1,"px-2","text-2xl","xSmall:text-xl"],["alt","Station Master","width","100",1,"px-1","xSmall:px-2","md:px-4",3,"src"],[1,"whitespace-nowrap"]],template:function(e,r){e&1&&zt(0,Y1,113,53,"ng-container",1)},dependencies:[Sr,fE,Za,Au,gE,hE,pE,mE,yE,vE,Ju,Xu,rl,VE,jE,wv,FE,PE,WE,GE,rs,YE,Av,qE,rf,KE,An,B0,gf,vf],styles:[`.is-mobile[_ngcontent-%COMP%]   .sidenav-container[_ngcontent-%COMP%]{flex-shrink:0;flex-grow:1;flex-basis:auto}.divider[_ngcontent-%COMP%]{margin-bottom:16px!important}
`]})};var ax=[{path:"home",component:yf},{path:"**",redirectTo:"home",pathMatch:"full"}];var lx={providers:[Dg(ax),Ym(Zm()),H0({config:{availableLangs:["de","en","pl"],defaultLang:"en",fallbackLang:"en",missingHandler:{useFallbackTranslation:!0},reRenderOnLangChange:!0,prodMode:!Tm()},loader:Pu}),dc(IC.register("ngsw-worker.js",{enabled:!Tm(),registrationStrategy:"registerWhenStable:30000"}))]};Bm(Fu,lx).catch(t=>console.error(t));
