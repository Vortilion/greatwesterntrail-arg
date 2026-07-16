var bx=Object.defineProperty,_x=Object.defineProperties;var wx=Object.getOwnPropertyDescriptors;var al=Object.getOwnPropertySymbols;var Hv=Object.prototype.hasOwnProperty,Uv=Object.prototype.propertyIsEnumerable;var Bv=(t,n,e)=>n in t?bx(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,m=(t,n)=>{for(var e in n||={})Hv.call(n,e)&&Bv(t,e,n[e]);if(al)for(var e of al(n))Uv.call(n,e)&&Bv(t,e,n[e]);return t},U=(t,n)=>_x(t,wx(n));var vf=(t,n)=>{var e={};for(var r in t)Hv.call(t,r)&&n.indexOf(r)<0&&(e[r]=t[r]);if(t!=null&&al)for(var r of al(t))n.indexOf(r)<0&&Uv.call(t,r)&&(e[r]=t[r]);return e};var gt=null,ll=!1,yf=1,Dx=null,Ge=Symbol("SIGNAL");function $(t){let n=gt;return gt=t,n}function fl(){return gt}var Pr={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Lr(t){if(ll)throw new Error("");if(gt===null)return;gt.consumerOnSignalRead(t);let n=gt.producersTail;if(n!==void 0&&n.producer===t)return;let e,r=gt.recomputing;if(r&&(e=n!==void 0?n.nextProducer:gt.producers,e!==void 0&&e.producer===t)){gt.producersTail=e,e.lastReadVersion=t.version;return}let i=t.consumersTail;if(i!==void 0&&i.consumer===gt&&(!r||Ex(i,gt)))return;let o=Vi(gt),s={producer:t,consumer:gt,nextProducer:e,prevConsumer:i,lastReadVersion:t.version,nextConsumer:void 0};gt.producersTail=s,n!==void 0?n.nextProducer=s:gt.producers=s,o&&Wv(t,s)}function $v(){yf++}function hl(t){if(!(Vi(t)&&!t.dirty)&&!(!t.dirty&&t.lastCleanEpoch===yf)){if(!t.producerMustRecompute(t)&&!ji(t)){ul(t);return}t.producerRecomputeValue(t),ul(t)}}function bf(t){if(t.consumers===void 0)return;let n=ll;ll=!0;try{for(let e=t.consumers;e!==void 0;e=e.nextConsumer){let r=e.consumer;r.dirty||Cx(r)}}finally{ll=n}}function _f(){return gt?.consumerAllowSignalWrites!==!1}function Cx(t){t.dirty=!0,bf(t),t.consumerMarkedDirty?.(t)}function ul(t){t.dirty=!1,t.lastCleanEpoch=yf}function ar(t){return t&&zv(t),$(t)}function zv(t){t.producersTail=void 0,t.recomputing=!0}function jr(t,n){$(n),t&&Gv(t)}function Gv(t){t.recomputing=!1;let n=t.producersTail,e=n!==void 0?n.nextProducer:t.producers;if(e!==void 0){if(Vi(t))do e=wf(e);while(e!==void 0);n!==void 0?n.nextProducer=void 0:t.producers=void 0}}function ji(t){for(let n=t.producers;n!==void 0;n=n.nextProducer){let e=n.producer,r=n.lastReadVersion;if(r!==e.version||(hl(e),r!==e.version))return!0}return!1}function lr(t){if(Vi(t)){let n=t.producers;for(;n!==void 0;)n=wf(n)}t.producers=void 0,t.producersTail=void 0,t.consumers=void 0,t.consumersTail=void 0}function Wv(t,n){let e=t.consumersTail,r=Vi(t);if(e!==void 0?(n.nextConsumer=e.nextConsumer,e.nextConsumer=n):(n.nextConsumer=void 0,t.consumers=n),n.prevConsumer=e,t.consumersTail=n,!r)for(let i=t.producers;i!==void 0;i=i.nextProducer)Wv(i.producer,i)}function wf(t){let n=t.producer,e=t.nextProducer,r=t.nextConsumer,i=t.prevConsumer;if(t.nextConsumer=void 0,t.prevConsumer=void 0,r!==void 0?r.prevConsumer=i:n.consumersTail=i,i!==void 0)i.nextConsumer=r;else if(n.consumers=r,!Vi(n)){let o=n.producers;for(;o!==void 0;)o=wf(o)}return e}function Vi(t){return t.consumerIsAlwaysLive||t.consumers!==void 0}function pl(t){Dx?.(t)}function Ex(t,n){let e=n.producersTail;if(e!==void 0){let r=n.producers;do{if(r===t)return!0;if(r===e)break;r=r.nextProducer}while(r!==void 0)}return!1}function ml(t,n){return Object.is(t,n)}function ls(t,n){let e=Object.create(xx);e.computation=t,n!==void 0&&(e.equal=n);let r=()=>{if(hl(e),Lr(e),e.value===as)throw e.error;return e.value};return r[Ge]=e,pl(e),r}var cl=Symbol("UNSET"),dl=Symbol("COMPUTING"),as=Symbol("ERRORED"),xx=U(m({},Pr),{value:cl,dirty:!0,error:null,equal:ml,kind:"computed",producerMustRecompute(t){return t.value===cl||t.value===dl},producerRecomputeValue(t){if(t.value===dl)throw new Error("");let n=t.value;t.value=dl;let e=ar(t),r,i=!1;try{r=t.computation(),$(null),i=n!==cl&&n!==as&&r!==as&&t.equal(n,r)}catch(o){r=as,t.error=o}finally{jr(t,e)}if(i){t.value=n;return}t.value=r,t.version++}});function Ix(){throw new Error}var qv=Ix;function Yv(t){qv(t)}function Df(t){qv=t}var Sx=null;function Cf(t,n){let e=Object.create(cs);e.value=t,n!==void 0&&(e.equal=n);let r=()=>Zv(e);return r[Ge]=e,pl(e),[r,s=>Bi(e,s),s=>Ef(e,s)]}function Zv(t){return Lr(t),t.value}function Bi(t,n){_f()||Yv(t),t.equal(t.value,n)||(t.value=n,Mx(t))}function Ef(t,n){_f()||Yv(t),Bi(t,n(t.value))}var cs=U(m({},Pr),{equal:ml,value:void 0,kind:"signal"});function Mx(t){t.version++,$v(),bf(t),Sx?.(t)}var xf=U(m({},Pr),{consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,dirty:!0,kind:"effect"});function If(t){if(t.dirty=!1,t.version>0&&!ji(t))return;t.version++;let n=ar(t);try{t.cleanup(),t.fn()}finally{jr(t,n)}}function re(t){return typeof t=="function"}function Hi(t){let e=t(r=>{Error.call(r),r.stack=new Error().stack});return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var gl=Hi(t=>function(e){t(this),this.message=e?`${e.length} errors occurred during unsubscription:
${e.map((r,i)=>`${i+1}) ${r.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=e});function Vr(t,n){if(t){let e=t.indexOf(n);0<=e&&t.splice(e,1)}}var ce=class t{constructor(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let n;if(!this.closed){this.closed=!0;let{_parentage:e}=this;if(e)if(this._parentage=null,Array.isArray(e))for(let o of e)o.remove(this);else e.remove(this);let{initialTeardown:r}=this;if(re(r))try{r()}catch(o){n=o instanceof gl?o.errors:[o]}let{_finalizers:i}=this;if(i){this._finalizers=null;for(let o of i)try{Kv(o)}catch(s){n=n??[],s instanceof gl?n=[...n,...s.errors]:n.push(s)}}if(n)throw new gl(n)}}add(n){var e;if(n&&n!==this)if(this.closed)Kv(n);else{if(n instanceof t){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(n)}}_hasParent(n){let{_parentage:e}=this;return e===n||Array.isArray(e)&&e.includes(n)}_addParent(n){let{_parentage:e}=this;this._parentage=Array.isArray(e)?(e.push(n),e):e?[e,n]:n}_removeParent(n){let{_parentage:e}=this;e===n?this._parentage=null:Array.isArray(e)&&Vr(e,n)}remove(n){let{_finalizers:e}=this;e&&Vr(e,n),n instanceof t&&n._removeParent(this)}};ce.EMPTY=(()=>{let t=new ce;return t.closed=!0,t})();var Sf=ce.EMPTY;function vl(t){return t instanceof ce||t&&"closed"in t&&re(t.remove)&&re(t.add)&&re(t.unsubscribe)}function Kv(t){re(t)?t():t.unsubscribe()}var Qt={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var Ui={setTimeout(t,n,...e){let{delegate:r}=Ui;return r?.setTimeout?r.setTimeout(t,n,...e):setTimeout(t,n,...e)},clearTimeout(t){let{delegate:n}=Ui;return(n?.clearTimeout||clearTimeout)(t)},delegate:void 0};function yl(t){Ui.setTimeout(()=>{let{onUnhandledError:n}=Qt;if(n)n(t);else throw t})}function Br(){}var Qv=Mf("C",void 0,void 0);function Xv(t){return Mf("E",void 0,t)}function Jv(t){return Mf("N",t,void 0)}function Mf(t,n,e){return{kind:t,value:n,error:e}}var Hr=null;function $i(t){if(Qt.useDeprecatedSynchronousErrorHandling){let n=!Hr;if(n&&(Hr={errorThrown:!1,error:null}),t(),n){let{errorThrown:e,error:r}=Hr;if(Hr=null,e)throw r}}else t()}function ey(t){Qt.useDeprecatedSynchronousErrorHandling&&Hr&&(Hr.errorThrown=!0,Hr.error=t)}var Ur=class extends ce{constructor(n){super(),this.isStopped=!1,n?(this.destination=n,vl(n)&&n.add(this)):this.destination=Rx}static create(n,e,r){return new An(n,e,r)}next(n){this.isStopped?Af(Jv(n),this):this._next(n)}error(n){this.isStopped?Af(Xv(n),this):(this.isStopped=!0,this._error(n))}complete(){this.isStopped?Af(Qv,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(n){this.destination.next(n)}_error(n){try{this.destination.error(n)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},Tx=Function.prototype.bind;function Tf(t,n){return Tx.call(t,n)}var Rf=class{constructor(n){this.partialObserver=n}next(n){let{partialObserver:e}=this;if(e.next)try{e.next(n)}catch(r){bl(r)}}error(n){let{partialObserver:e}=this;if(e.error)try{e.error(n)}catch(r){bl(r)}else bl(n)}complete(){let{partialObserver:n}=this;if(n.complete)try{n.complete()}catch(e){bl(e)}}},An=class extends Ur{constructor(n,e,r){super();let i;if(re(n)||!n)i={next:n??void 0,error:e??void 0,complete:r??void 0};else{let o;this&&Qt.useDeprecatedNextContext?(o=Object.create(n),o.unsubscribe=()=>this.unsubscribe(),i={next:n.next&&Tf(n.next,o),error:n.error&&Tf(n.error,o),complete:n.complete&&Tf(n.complete,o)}):i=n}this.destination=new Rf(i)}};function bl(t){Qt.useDeprecatedSynchronousErrorHandling?ey(t):yl(t)}function Ax(t){throw t}function Af(t,n){let{onStoppedNotification:e}=Qt;e&&Ui.setTimeout(()=>e(t,n))}var Rx={closed:!0,next:Br,error:Ax,complete:Br};var zi=typeof Symbol=="function"&&Symbol.observable||"@@observable";function Dt(t){return t}function kf(...t){return Nf(t)}function Nf(t){return t.length===0?Dt:t.length===1?t[0]:function(e){return t.reduce((r,i)=>i(r),e)}}var G=(()=>{class t{constructor(e){e&&(this._subscribe=e)}lift(e){let r=new t;return r.source=this,r.operator=e,r}subscribe(e,r,i){let o=Nx(e)?e:new An(e,r,i);return $i(()=>{let{operator:s,source:a}=this;o.add(s?s.call(o,a):a?this._subscribe(o):this._trySubscribe(o))}),o}_trySubscribe(e){try{return this._subscribe(e)}catch(r){e.error(r)}}forEach(e,r){return r=ty(r),new r((i,o)=>{let s=new An({next:a=>{try{e(a)}catch(l){o(l),s.unsubscribe()}},error:o,complete:i});this.subscribe(s)})}_subscribe(e){var r;return(r=this.source)===null||r===void 0?void 0:r.subscribe(e)}[zi](){return this}pipe(...e){return Nf(e)(this)}toPromise(e){return e=ty(e),new e((r,i)=>{let o;this.subscribe(s=>o=s,s=>i(s),()=>r(o))})}}return t.create=n=>new t(n),t})();function ty(t){var n;return(n=t??Qt.Promise)!==null&&n!==void 0?n:Promise}function kx(t){return t&&re(t.next)&&re(t.error)&&re(t.complete)}function Nx(t){return t&&t instanceof Ur||kx(t)&&vl(t)}function Ox(t){return re(t?.lift)}function ee(t){return n=>{if(Ox(n))return n.lift(function(e){try{return t(e,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function te(t,n,e,r,i){return new Of(t,n,e,r,i)}var Of=class extends Ur{constructor(n,e,r,i,o,s){super(n),this.onFinalize=o,this.shouldUnsubscribe=s,this._next=e?function(a){try{e(a)}catch(l){n.error(l)}}:super._next,this._error=i?function(a){try{i(a)}catch(l){n.error(l)}finally{this.unsubscribe()}}:super._error,this._complete=r?function(){try{r()}catch(a){n.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:e}=this;super.unsubscribe(),!e&&((n=this.onFinalize)===null||n===void 0||n.call(this))}}};var ny=Hi(t=>function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var D=(()=>{class t extends G{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(e){let r=new _l(this,this);return r.operator=e,r}_throwIfClosed(){if(this.closed)throw new ny}next(e){$i(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let r of this.currentObservers)r.next(e)}})}error(e){$i(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=e;let{observers:r}=this;for(;r.length;)r.shift().error(e)}})}complete(){$i(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:e}=this;for(;e.length;)e.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var e;return((e=this.observers)===null||e===void 0?void 0:e.length)>0}_trySubscribe(e){return this._throwIfClosed(),super._trySubscribe(e)}_subscribe(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)}_innerSubscribe(e){let{hasError:r,isStopped:i,observers:o}=this;return r||i?Sf:(this.currentObservers=null,o.push(e),new ce(()=>{this.currentObservers=null,Vr(o,e)}))}_checkFinalizedStatuses(e){let{hasError:r,thrownError:i,isStopped:o}=this;r?e.error(i):o&&e.complete()}asObservable(){let e=new G;return e.source=this,e}}return t.create=(n,e)=>new _l(n,e),t})(),_l=class extends D{constructor(n,e){super(),this.destination=n,this.source=e}next(n){var e,r;(r=(e=this.destination)===null||e===void 0?void 0:e.next)===null||r===void 0||r.call(e,n)}error(n){var e,r;(r=(e=this.destination)===null||e===void 0?void 0:e.error)===null||r===void 0||r.call(e,n)}complete(){var n,e;(e=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||e===void 0||e.call(n)}_subscribe(n){var e,r;return(r=(e=this.source)===null||e===void 0?void 0:e.subscribe(n))!==null&&r!==void 0?r:Sf}};var je=class extends D{constructor(n){super(),this._value=n}get value(){return this.getValue()}_subscribe(n){let e=super._subscribe(n);return!e.closed&&n.next(this._value),e}getValue(){let{hasError:n,thrownError:e,_value:r}=this;if(n)throw e;return this._throwIfClosed(),r}next(n){super.next(this._value=n)}};var ds={now(){return(ds.delegate||Date).now()},delegate:void 0};var us=class extends D{constructor(n=1/0,e=1/0,r=ds){super(),this._bufferSize=n,this._windowTime=e,this._timestampProvider=r,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=e===1/0,this._bufferSize=Math.max(1,n),this._windowTime=Math.max(1,e)}next(n){let{isStopped:e,_buffer:r,_infiniteTimeWindow:i,_timestampProvider:o,_windowTime:s}=this;e||(r.push(n),!i&&r.push(o.now()+s)),this._trimBuffer(),super.next(n)}_subscribe(n){this._throwIfClosed(),this._trimBuffer();let e=this._innerSubscribe(n),{_infiniteTimeWindow:r,_buffer:i}=this,o=i.slice();for(let s=0;s<o.length&&!n.closed;s+=r?1:2)n.next(o[s]);return this._checkFinalizedStatuses(n),e}_trimBuffer(){let{_bufferSize:n,_timestampProvider:e,_buffer:r,_infiniteTimeWindow:i}=this,o=(i?1:2)*n;if(n<1/0&&o<r.length&&r.splice(0,r.length-o),!i){let s=e.now(),a=0;for(let l=1;l<r.length&&r[l]<=s;l+=2)a=l;a&&r.splice(0,a+1)}}};var wl=class extends ce{constructor(n,e){super()}schedule(n,e=0){return this}};var fs={setInterval(t,n,...e){let{delegate:r}=fs;return r?.setInterval?r.setInterval(t,n,...e):setInterval(t,n,...e)},clearInterval(t){let{delegate:n}=fs;return(n?.clearInterval||clearInterval)(t)},delegate:void 0};var Dl=class extends wl{constructor(n,e){super(n,e),this.scheduler=n,this.work=e,this.pending=!1}schedule(n,e=0){var r;if(this.closed)return this;this.state=n;let i=this.id,o=this.scheduler;return i!=null&&(this.id=this.recycleAsyncId(o,i,e)),this.pending=!0,this.delay=e,this.id=(r=this.id)!==null&&r!==void 0?r:this.requestAsyncId(o,this.id,e),this}requestAsyncId(n,e,r=0){return fs.setInterval(n.flush.bind(n,this),r)}recycleAsyncId(n,e,r=0){if(r!=null&&this.delay===r&&this.pending===!1)return e;e!=null&&fs.clearInterval(e)}execute(n,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;let r=this._execute(n,e);if(r)return r;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(n,e){let r=!1,i;try{this.work(n)}catch(o){r=!0,i=o||new Error("Scheduled action threw falsy error")}if(r)return this.unsubscribe(),i}unsubscribe(){if(!this.closed){let{id:n,scheduler:e}=this,{actions:r}=e;this.work=this.state=this.scheduler=null,this.pending=!1,Vr(r,this),n!=null&&(this.id=this.recycleAsyncId(e,n,null)),this.delay=null,super.unsubscribe()}}};var Gi=class t{constructor(n,e=t.now){this.schedulerActionCtor=n,this.now=e}schedule(n,e=0,r){return new this.schedulerActionCtor(this,n).schedule(r,e)}};Gi.now=ds.now;var Cl=class extends Gi{constructor(n,e=Gi.now){super(n,e),this.actions=[],this._active=!1}flush(n){let{actions:e}=this;if(this._active){e.push(n);return}let r;this._active=!0;do if(r=n.execute(n.state,n.delay))break;while(n=e.shift());if(this._active=!1,r){for(;n=e.shift();)n.unsubscribe();throw r}}};var hs=new Cl(Dl),ry=hs;var Ve=new G(t=>t.complete());function El(t){return t&&re(t.schedule)}function Ff(t){return t[t.length-1]}function xl(t){return re(Ff(t))?t.pop():void 0}function pn(t){return El(Ff(t))?t.pop():void 0}function iy(t,n){return typeof Ff(t)=="number"?t.pop():n}function sy(t,n,e,r){function i(o){return o instanceof e?o:new e(function(s){s(o)})}return new(e||(e=Promise))(function(o,s){function a(d){try{c(r.next(d))}catch(f){s(f)}}function l(d){try{c(r.throw(d))}catch(f){s(f)}}function c(d){d.done?o(d.value):i(d.value).then(a,l)}c((r=r.apply(t,n||[])).next())})}function oy(t){var n=typeof Symbol=="function"&&Symbol.iterator,e=n&&t[n],r=0;if(e)return e.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function $r(t){return this instanceof $r?(this.v=t,this):new $r(t)}function ay(t,n,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=e.apply(t,n||[]),i,o=[];return i=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",s),i[Symbol.asyncIterator]=function(){return this},i;function s(p){return function(y){return Promise.resolve(y).then(p,f)}}function a(p,y){r[p]&&(i[p]=function(E){return new Promise(function(I,A){o.push([p,E,I,A])>1||l(p,E)})},y&&(i[p]=y(i[p])))}function l(p,y){try{c(r[p](y))}catch(E){h(o[0][3],E)}}function c(p){p.value instanceof $r?Promise.resolve(p.value.v).then(d,f):h(o[0][2],p)}function d(p){l("next",p)}function f(p){l("throw",p)}function h(p,y){p(y),o.shift(),o.length&&l(o[0][0],o[0][1])}}function ly(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=t[Symbol.asyncIterator],e;return n?n.call(t):(t=typeof oy=="function"?oy(t):t[Symbol.iterator](),e={},r("next"),r("throw"),r("return"),e[Symbol.asyncIterator]=function(){return this},e);function r(o){e[o]=t[o]&&function(s){return new Promise(function(a,l){s=t[o](s),i(a,l,s.done,s.value)})}}function i(o,s,a,l){Promise.resolve(l).then(function(c){o({value:c,done:a})},s)}}var Il=t=>t&&typeof t.length=="number"&&typeof t!="function";function Sl(t){return re(t?.then)}function Ml(t){return re(t[zi])}function Tl(t){return Symbol.asyncIterator&&re(t?.[Symbol.asyncIterator])}function Al(t){return new TypeError(`You provided ${t!==null&&typeof t=="object"?"an invalid object":`'${t}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function Fx(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Rl=Fx();function kl(t){return re(t?.[Rl])}function Nl(t){return ay(this,arguments,function*(){let e=t.getReader();try{for(;;){let{value:r,done:i}=yield $r(e.read());if(i)return yield $r(void 0);yield yield $r(r)}}finally{e.releaseLock()}})}function Ol(t){return re(t?.getReader)}function Ce(t){if(t instanceof G)return t;if(t!=null){if(Ml(t))return Px(t);if(Il(t))return Lx(t);if(Sl(t))return jx(t);if(Tl(t))return cy(t);if(kl(t))return Vx(t);if(Ol(t))return Bx(t)}throw Al(t)}function Px(t){return new G(n=>{let e=t[zi]();if(re(e.subscribe))return e.subscribe(n);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function Lx(t){return new G(n=>{for(let e=0;e<t.length&&!n.closed;e++)n.next(t[e]);n.complete()})}function jx(t){return new G(n=>{t.then(e=>{n.closed||(n.next(e),n.complete())},e=>n.error(e)).then(null,yl)})}function Vx(t){return new G(n=>{for(let e of t)if(n.next(e),n.closed)return;n.complete()})}function cy(t){return new G(n=>{Hx(t,n).catch(e=>n.error(e))})}function Bx(t){return cy(Nl(t))}function Hx(t,n){var e,r,i,o;return sy(this,void 0,void 0,function*(){try{for(e=ly(t);r=yield e.next(),!r.done;){let s=r.value;if(n.next(s),n.closed)return}}catch(s){i={error:s}}finally{try{r&&!r.done&&(o=e.return)&&(yield o.call(e))}finally{if(i)throw i.error}}n.complete()})}function Tt(t,n,e,r=0,i=!1){let o=n.schedule(function(){e(),i?t.add(this.schedule(null,r)):this.unsubscribe()},r);if(t.add(o),!i)return o}function Fl(t,n=0){return ee((e,r)=>{e.subscribe(te(r,i=>Tt(r,t,()=>r.next(i),n),()=>Tt(r,t,()=>r.complete(),n),i=>Tt(r,t,()=>r.error(i),n)))})}function Pl(t,n=0){return ee((e,r)=>{r.add(t.schedule(()=>e.subscribe(r),n))})}function dy(t,n){return Ce(t).pipe(Pl(n),Fl(n))}function uy(t,n){return Ce(t).pipe(Pl(n),Fl(n))}function fy(t,n){return new G(e=>{let r=0;return n.schedule(function(){r===t.length?e.complete():(e.next(t[r++]),e.closed||this.schedule())})})}function hy(t,n){return new G(e=>{let r;return Tt(e,n,()=>{r=t[Rl](),Tt(e,n,()=>{let i,o;try{({value:i,done:o}=r.next())}catch(s){e.error(s);return}o?e.complete():e.next(i)},0,!0)}),()=>re(r?.return)&&r.return()})}function Ll(t,n){if(!t)throw new Error("Iterable cannot be null");return new G(e=>{Tt(e,n,()=>{let r=t[Symbol.asyncIterator]();Tt(e,n,()=>{r.next().then(i=>{i.done?e.complete():e.next(i.value)})},0,!0)})})}function py(t,n){return Ll(Nl(t),n)}function my(t,n){if(t!=null){if(Ml(t))return dy(t,n);if(Il(t))return fy(t,n);if(Sl(t))return uy(t,n);if(Tl(t))return Ll(t,n);if(kl(t))return hy(t,n);if(Ol(t))return py(t,n)}throw Al(t)}function Me(t,n){return n?my(t,n):Ce(t)}function N(...t){let n=pn(t);return Me(t,n)}function ps(t,n){let e=re(t)?t:()=>t,r=i=>i.error(e());return new G(n?i=>n.schedule(r,0,i):r)}function ms(t){return!!t&&(t instanceof G||re(t.lift)&&re(t.subscribe))}var zr=Hi(t=>function(){t(this),this.name="EmptyError",this.message="no elements in sequence"});function gy(t){return t instanceof Date&&!isNaN(t)}function T(t,n){return ee((e,r)=>{let i=0;e.subscribe(te(r,o=>{r.next(t.call(n,o,i++))}))})}var{isArray:Ux}=Array;function $x(t,n){return Ux(n)?t(...n):t(n)}function jl(t){return T(n=>$x(t,n))}var{isArray:zx}=Array,{getPrototypeOf:Gx,prototype:Wx,keys:qx}=Object;function Vl(t){if(t.length===1){let n=t[0];if(zx(n))return{args:n,keys:null};if(Yx(n)){let e=qx(n);return{args:e.map(r=>n[r]),keys:e}}}return{args:t,keys:null}}function Yx(t){return t&&typeof t=="object"&&Gx(t)===Wx}function Bl(t,n){return t.reduce((e,r,i)=>(e[r]=n[i],e),{})}function Gr(...t){let n=pn(t),e=xl(t),{args:r,keys:i}=Vl(t);if(r.length===0)return Me([],n);let o=new G(Zx(r,n,i?s=>Bl(i,s):Dt));return e?o.pipe(jl(e)):o}function Zx(t,n,e=Dt){return r=>{vy(n,()=>{let{length:i}=t,o=new Array(i),s=i,a=i;for(let l=0;l<i;l++)vy(n,()=>{let c=Me(t[l],n),d=!1;c.subscribe(te(r,f=>{o[l]=f,d||(d=!0,a--),a||r.next(e(o.slice()))},()=>{--s||r.complete()}))},r)},r)}}function vy(t,n,e){t?Tt(e,t,n):n()}function yy(t,n,e,r,i,o,s,a){let l=[],c=0,d=0,f=!1,h=()=>{f&&!l.length&&!c&&n.complete()},p=E=>c<r?y(E):l.push(E),y=E=>{o&&n.next(E),c++;let I=!1;Ce(e(E,d++)).subscribe(te(n,A=>{i?.(A),o?p(A):n.next(A)},()=>{I=!0},void 0,()=>{if(I)try{for(c--;l.length&&c<r;){let A=l.shift();s?Tt(n,s,()=>y(A)):y(A)}h()}catch(A){n.error(A)}}))};return t.subscribe(te(n,p,()=>{f=!0,h()})),()=>{a?.()}}function Ct(t,n,e=1/0){return re(n)?Ct((r,i)=>T((o,s)=>n(r,o,i,s))(Ce(t(r,i))),e):(typeof n=="number"&&(e=n),ee((r,i)=>yy(r,i,t,e)))}function Hl(t=1/0){return Ct(Dt,t)}function by(){return Hl(1)}function cr(...t){return by()(Me(t,pn(t)))}function Wr(t){return new G(n=>{Ce(t()).subscribe(n)})}function Rn(...t){let n=xl(t),{args:e,keys:r}=Vl(t),i=new G(o=>{let{length:s}=e;if(!s){o.complete();return}let a=new Array(s),l=s,c=s;for(let d=0;d<s;d++){let f=!1;Ce(e[d]).subscribe(te(o,h=>{f||(f=!0,c--),a[d]=h},()=>l--,void 0,()=>{(!l||!f)&&(c||o.next(r?Bl(r,a):a),o.complete())}))}});return n?i.pipe(jl(n)):i}function Ul(t=0,n,e=ry){let r=-1;return n!=null&&(El(n)?e=n:r=n),new G(i=>{let o=gy(t)?+t-e.now():t;o<0&&(o=0);let s=0;return e.schedule(function(){i.closed||(i.next(s++),0<=r?this.schedule(void 0,r):i.complete())},o)})}function Pt(...t){let n=pn(t),e=iy(t,1/0),r=t;return r.length?r.length===1?Ce(r[0]):Hl(e)(Me(r,n)):Ve}var kn=new G(Br);function ae(t,n){return ee((e,r)=>{let i=0;e.subscribe(te(r,o=>t.call(n,o,i++)&&r.next(o)))})}function _y(t){return ee((n,e)=>{let r=!1,i=null,o=null,s=!1,a=()=>{if(o?.unsubscribe(),o=null,r){r=!1;let c=i;i=null,e.next(c)}s&&e.complete()},l=()=>{o=null,s&&e.complete()};n.subscribe(te(e,c=>{r=!0,i=c,o||Ce(t(c)).subscribe(o=te(e,a,l))},()=>{s=!0,(!r||!o||o.closed)&&e.complete()}))})}function $l(t,n=hs){return _y(()=>Ul(t,n))}function mn(t){return ee((n,e)=>{let r=null,i=!1,o;r=n.subscribe(te(e,void 0,void 0,s=>{o=Ce(t(s,mn(t)(n))),r?(r.unsubscribe(),r=null,o.subscribe(e)):i=!0})),i&&(r.unsubscribe(),r=null,o.subscribe(e))})}function Wi(t,n){return re(n)?Ct(t,n,1):Ct(t,1)}function qr(t,n=hs){return ee((e,r)=>{let i=null,o=null,s=null,a=()=>{if(i){i.unsubscribe(),i=null;let c=o;o=null,r.next(c)}};function l(){let c=s+t,d=n.now();if(d<c){i=this.schedule(void 0,c-d),r.add(i);return}a()}e.subscribe(te(r,c=>{o=c,s=n.now(),i||(i=n.schedule(l,t),r.add(i))},()=>{a(),r.complete()},void 0,()=>{o=i=null}))})}function wy(t){return ee((n,e)=>{let r=!1;n.subscribe(te(e,i=>{r=!0,e.next(i)},()=>{r||e.next(t),e.complete()}))})}function xe(t){return t<=0?()=>Ve:ee((n,e)=>{let r=0;n.subscribe(te(e,i=>{++r<=t&&(e.next(i),t<=r&&e.complete())}))})}function zl(t){return T(()=>t)}function Gl(t,n=Dt){return t=t??Kx,ee((e,r)=>{let i,o=!0;e.subscribe(te(r,s=>{let a=n(s);(o||!t(i,a))&&(o=!1,i=a,r.next(s))}))})}function Kx(t,n){return t===n}function Dy(t=Qx){return ee((n,e)=>{let r=!1;n.subscribe(te(e,i=>{r=!0,e.next(i)},()=>r?e.complete():e.error(t())))})}function Qx(){return new zr}function dr(t){return ee((n,e)=>{try{n.subscribe(e)}finally{e.add(t)}})}function Nn(t,n){let e=arguments.length>=2;return r=>r.pipe(t?ae((i,o)=>t(i,o,r)):Dt,xe(1),e?wy(n):Dy(()=>new zr))}function Wl(t){return t<=0?()=>Ve:ee((n,e)=>{let r=[];n.subscribe(te(e,i=>{r.push(i),t<r.length&&r.shift()},()=>{for(let i of r)e.next(i);e.complete()},void 0,()=>{r=null}))})}function ql(){return ee((t,n)=>{let e,r=!1;t.subscribe(te(n,i=>{let o=e;e=i,r&&n.next([o,i]),r=!0}))})}function Pf(t=1/0){let n;t&&typeof t=="object"?n=t:n={count:t};let{count:e=1/0,delay:r,resetOnSuccess:i=!1}=n;return e<=0?Dt:ee((o,s)=>{let a=0,l,c=()=>{let d=!1;l=o.subscribe(te(s,f=>{i&&(a=0),s.next(f)},void 0,f=>{if(a++<e){let h=()=>{l?(l.unsubscribe(),l=null,c()):d=!0};if(r!=null){let p=typeof r=="number"?Ul(r):Ce(r(f,a)),y=te(s,()=>{y.unsubscribe(),h()},()=>{s.complete()});p.subscribe(y)}else h()}else s.error(f)})),d&&(l.unsubscribe(),l=null,c())};c()})}function gs(t={}){let{connector:n=()=>new D,resetOnError:e=!0,resetOnComplete:r=!0,resetOnRefCountZero:i=!0}=t;return o=>{let s,a,l,c=0,d=!1,f=!1,h=()=>{a?.unsubscribe(),a=void 0},p=()=>{h(),s=l=void 0,d=f=!1},y=()=>{let E=s;p(),E?.unsubscribe()};return ee((E,I)=>{c++,!f&&!d&&h();let A=l=l??n();I.add(()=>{c--,c===0&&!f&&!d&&(a=Lf(y,i))}),A.subscribe(I),!s&&c>0&&(s=new An({next:ye=>A.next(ye),error:ye=>{f=!0,h(),a=Lf(p,e,ye),A.error(ye)},complete:()=>{d=!0,h(),a=Lf(p,r),A.complete()}}),Ce(E).subscribe(s))})(o)}}function Lf(t,n,...e){if(n===!0){t();return}if(n===!1)return;let r=new An({next:()=>{r.unsubscribe(),t()}});return Ce(n(...e)).subscribe(r)}function Yr(t,n,e){let r,i=!1;return t&&typeof t=="object"?{bufferSize:r=1/0,windowTime:n=1/0,refCount:i=!1,scheduler:e}=t:r=t??1/0,gs({connector:()=>new us(r,n,e),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:i})}function vs(t){return ae((n,e)=>t<=e)}function ze(...t){let n=pn(t);return ee((e,r)=>{(n?cr(t,e,n):cr(t,e)).subscribe(r)})}function ve(t,n){return ee((e,r)=>{let i=null,o=0,s=!1,a=()=>s&&!i&&r.complete();e.subscribe(te(r,l=>{i?.unsubscribe();let c=0,d=o++;Ce(t(l,d)).subscribe(i=te(r,f=>r.next(n?n(l,f,d,c++):f),()=>{i=null,a()}))},()=>{s=!0,a()}))})}function de(t){return ee((n,e)=>{Ce(t).subscribe(te(e,()=>e.complete(),Br)),!e.closed&&n.subscribe(e)})}function jf(t,n=!1){return ee((e,r)=>{let i=0;e.subscribe(te(r,o=>{let s=t(o,i++);(s||n)&&r.next(o),!s&&r.complete()}))})}function Be(t,n,e){let r=re(t)||n||e?{next:t,error:n,complete:e}:t;return r?ee((i,o)=>{var s;(s=r.subscribe)===null||s===void 0||s.call(r);let a=!0;i.subscribe(te(o,l=>{var c;(c=r.next)===null||c===void 0||c.call(r,l),o.next(l)},()=>{var l;a=!1,(l=r.complete)===null||l===void 0||l.call(r),o.complete()},l=>{var c;a=!1,(c=r.error)===null||c===void 0||c.call(r,l),o.error(l)},()=>{var l,c;a&&((l=r.unsubscribe)===null||l===void 0||l.call(r)),(c=r.finalize)===null||c===void 0||c.call(r)}))}):Dt}var Vf;function Yl(){return Vf}function gn(t){let n=Vf;return Vf=t,n}var Cy=Symbol("NotFound");function qi(t){return t===Cy||t?.name==="\u0275NotFound"}function Ey(t){let n=$(null);try{return t()}finally{$(n)}}var tc="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",C=class extends Error{code;constructor(n,e){super(yn(n,e)),this.code=n}};function Xx(t){return`NG0${Math.abs(t)}`}function yn(t,n){return`${Xx(t)}${n?": "+n:""}`}var pr=globalThis;function _e(t){for(let n in t)if(t[n]===_e)return n;throw Error("")}function Ty(t,n){for(let e in n)n.hasOwnProperty(e)&&!t.hasOwnProperty(e)&&(t[e]=n[e])}function Es(t){if(typeof t=="string")return t;if(Array.isArray(t))return`[${t.map(Es).join(", ")}]`;if(t==null)return""+t;let n=t.overriddenName||t.name;if(n)return`${n}`;let e=t.toString();if(e==null)return""+e;let r=e.indexOf(`
`);return r>=0?e.slice(0,r):e}function nc(t,n){return t?n?`${t} ${n}`:t:n||""}var Jx=_e({__forward_ref__:_e});function bn(t){return t.__forward_ref__=bn,t}function lt(t){return Xf(t)?t():t}function Xf(t){return typeof t=="function"&&t.hasOwnProperty(Jx)&&t.__forward_ref__===bn}function _(t){return{token:t.token,providedIn:t.providedIn||null,factory:t.factory,value:void 0}}function F(t){return{providers:t.providers||[],imports:t.imports||[]}}function xs(t){return eI(t,rc)}function Jf(t){return xs(t)!==null}function eI(t,n){return t.hasOwnProperty(n)&&t[n]||null}function tI(t){let n=t?.[rc]??null;return n||null}function Hf(t){return t&&t.hasOwnProperty(Kl)?t[Kl]:null}var rc=_e({\u0275prov:_e}),Kl=_e({\u0275inj:_e}),g=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(n,e){this._desc=n,this.\u0275prov=void 0,typeof e=="number"?this.__NG_ELEMENT_ID__=e:e!==void 0&&(this.\u0275prov=_({token:this,providedIn:e.providedIn||"root",factory:e.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function eh(t){return t&&!!t.\u0275providers}var Is=_e({\u0275cmp:_e}),Ss=_e({\u0275dir:_e}),th=_e({\u0275pipe:_e}),nh=_e({\u0275mod:_e}),bs=_e({\u0275fac:_e}),Jr=_e({__NG_ELEMENT_ID__:_e}),xy=_e({__NG_ENV_ID__:_e});function rh(t){return ic(t,"@NgModule"),t[nh]||null}function Fn(t){return ic(t,"@Component"),t[Is]||null}function ih(t){return ic(t,"@Directive"),t[Ss]||null}function Ay(t){return ic(t,"@Pipe"),t[th]||null}function ic(t,n){if(t==null)throw new C(-919,!1)}function ei(t){return typeof t=="string"?t:t==null?"":String(t)}var Ry=_e({ngErrorCode:_e}),nI=_e({ngErrorMessage:_e}),rI=_e({ngTokenPath:_e});function oh(t,n){return ky("",-200,n)}function oc(t,n){throw new C(-201,!1)}function ky(t,n,e){let r=new C(n,t);return r[Ry]=n,r[nI]=t,e&&(r[rI]=e),r}function iI(t){return t[Ry]}var Uf;function Ny(){return Uf}function Et(t){let n=Uf;return Uf=t,n}function sh(t,n,e){let r=xs(t);if(r&&r.providedIn=="root")return r.value===void 0?r.value=r.factory():r.value;if(e&8)return null;if(n!==void 0)return n;oc(t,"")}var oI={},Zr=oI,sI="__NG_DI_FLAG__",$f=class{injector;constructor(n){this.injector=n}retrieve(n,e){let r=Kr(e)||0;try{return this.injector.get(n,r&8?null:Zr,r)}catch(i){if(qi(i))return i;throw i}}};function aI(t,n=0){let e=Yl();if(e===void 0)throw new C(-203,!1);if(e===null)return sh(t,void 0,n);{let r=lI(n),i=e.retrieve(t,r);if(qi(i)){if(r.optional)return null;throw i}return i}}function M(t,n=0){return(Ny()||aI)(lt(t),n)}function u(t,n){return M(t,Kr(n))}function Kr(t){return typeof t>"u"||typeof t=="number"?t:0|(t.optional&&8)|(t.host&&1)|(t.self&&2)|(t.skipSelf&&4)}function lI(t){return{optional:!!(t&8),host:!!(t&1),self:!!(t&2),skipSelf:!!(t&4)}}function zf(t){let n=[];for(let e=0;e<t.length;e++){let r=lt(t[e]);if(Array.isArray(r)){if(r.length===0)throw new C(900,!1);let i,o=0;for(let s=0;s<r.length;s++){let a=r[s],l=cI(a);typeof l=="number"?l===-1?i=a.token:o|=l:i=a}n.push(M(i,o))}else n.push(M(r))}return n}function cI(t){return t[sI]}function ur(t,n){let e=t.hasOwnProperty(bs);return e?t[bs]:null}function Oy(t,n,e){if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++){let i=t[r],o=n[r];if(e&&(i=e(i),o=e(o)),o!==i)return!1}return!0}function Fy(t){return t.flat(Number.POSITIVE_INFINITY)}function sc(t,n){t.forEach(e=>Array.isArray(e)?sc(e,n):n(e))}function ah(t,n,e){n>=t.length?t.push(e):t.splice(n,0,e)}function Ms(t,n){return n>=t.length-1?t.pop():t.splice(n,1)[0]}function Py(t,n){let e=[];for(let r=0;r<t;r++)e.push(n);return e}function Ly(t,n,e,r){let i=t.length;if(i==n)t.push(e,r);else if(i===1)t.push(r,t[0]),t[0]=e;else{for(i--,t.push(t[i-1],t[i]);i>n;){let o=i-2;t[i]=t[o],i--}t[n]=e,t[n+1]=r}}function ac(t,n,e){let r=Zi(t,n);return r>=0?t[r|1]=e:(r=~r,Ly(t,r,n,e)),r}function lc(t,n){let e=Zi(t,n);if(e>=0)return t[e|1]}function Zi(t,n){return dI(t,n,1)}function dI(t,n,e){let r=0,i=t.length>>e;for(;i!==r;){let o=r+(i-r>>1),s=t[o<<e];if(n===s)return o<<e;s>n?i=o:r=o+1}return~(i<<e)}var mr={},vt=[],ti=new g(""),lh=new g("",-1),ch=new g(""),_s=class{get(n,e=Zr){if(e===Zr){let i=ky("",-201);throw i.name="\u0275NotFound",i}return e}};function ct(t){return{\u0275providers:t}}function cc(...t){return{\u0275providers:dh(!0,t),\u0275fromNgModule:!0}}function dh(t,...n){let e=[],r=new Set,i,o=s=>{e.push(s)};return sc(n,s=>{let a=s;Ql(a,o,[],r)&&(i||=[],i.push(a))}),i!==void 0&&jy(i,o),e}function jy(t,n){for(let e=0;e<t.length;e++){let{ngModule:r,providers:i}=t[e];uh(i,o=>{n(o,r)})}}function Ql(t,n,e,r){if(t=lt(t),!t)return!1;let i=null,o=Hf(t),s=!o&&Fn(t);if(!o&&!s){let l=t.ngModule;if(o=Hf(l),o)i=l;else return!1}else{if(s&&!s.standalone)return!1;i=t}let a=r.has(i);if(s){if(a)return!1;if(r.add(i),s.dependencies){let l=typeof s.dependencies=="function"?s.dependencies():s.dependencies;for(let c of l)Ql(c,n,e,r)}}else if(o){if(o.imports!=null&&!a){r.add(i);let c;sc(o.imports,d=>{Ql(d,n,e,r)&&(c||=[],c.push(d))}),c!==void 0&&jy(c,n)}if(!a){let c=ur(i)||(()=>new i);n({provide:i,useFactory:c,deps:vt},i),n({provide:ch,useValue:i,multi:!0},i),n({provide:ti,useValue:()=>M(i),multi:!0},i)}let l=o.providers;if(l!=null&&!a){let c=t;uh(l,d=>{n(d,c)})}}else return!1;return i!==t&&t.providers!==void 0}function uh(t,n){for(let e of t)eh(e)&&(e=e.\u0275providers),Array.isArray(e)?uh(e,n):n(e)}var uI=_e({provide:String,useValue:_e});function Vy(t){return t!==null&&typeof t=="object"&&uI in t}function fI(t){return!!(t&&t.useExisting)}function hI(t){return!!(t&&t.useFactory)}function Qr(t){return typeof t=="function"}function By(t){return!!t.useClass}var Ts=new g(""),Zl={},Iy={},Bf;function Ki(){return Bf===void 0&&(Bf=new _s),Bf}var Ie=class{},Xr=class extends Ie{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(n,e,r,i){super(),this.parent=e,this.source=r,this.scopes=i,Wf(n,s=>this.processProvider(s)),this.records.set(lh,Yi(void 0,this)),i.has("environment")&&this.records.set(Ie,Yi(void 0,this));let o=this.records.get(Ts);o!=null&&typeof o.value=="string"&&this.scopes.add(o.value),this.injectorDefTypes=new Set(this.get(ch,vt,{self:!0}))}retrieve(n,e){let r=Kr(e)||0;try{return this.get(n,Zr,r)}catch(i){if(qi(i))return i;throw i}}destroy(){ys(this),this._destroyed=!0;let n=$(null);try{for(let r of this._ngOnDestroyHooks)r.ngOnDestroy();let e=this._onDestroyHooks;this._onDestroyHooks=[];for(let r of e)r()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),$(n)}}onDestroy(n){return ys(this),this._onDestroyHooks.push(n),()=>this.removeOnDestroy(n)}runInContext(n){ys(this);let e=gn(this),r=Et(void 0),i;try{return n()}finally{gn(e),Et(r)}}get(n,e=Zr,r){if(ys(this),n.hasOwnProperty(xy))return n[xy](this);let i=Kr(r),o,s=gn(this),a=Et(void 0);try{if(!(i&4)){let c=this.records.get(n);if(c===void 0){let d=yI(n)&&xs(n);d&&this.injectableDefInScope(d)?c=Yi(Gf(n),Zl):c=null,this.records.set(n,c)}if(c!=null)return this.hydrate(n,c,i)}let l=i&2?Ki():this.parent;return e=i&8&&e===Zr?null:e,l.get(n,e)}catch(l){let c=iI(l);throw c===-200||c===-201?new C(c,null):l}finally{Et(a),gn(s)}}resolveInjectorInitializers(){let n=$(null),e=gn(this),r=Et(void 0),i;try{let o=this.get(ti,vt,{self:!0});for(let s of o)s()}finally{gn(e),Et(r),$(n)}}toString(){return"R3Injector[...]"}processProvider(n){n=lt(n);let e=Qr(n)?n:lt(n&&n.provide),r=mI(n);if(!Qr(n)&&n.multi===!0){let i=this.records.get(e);i||(i=Yi(void 0,Zl,!0),i.factory=()=>zf(i.multi),this.records.set(e,i)),e=n,i.multi.push(n)}this.records.set(e,r)}hydrate(n,e,r){let i=$(null);try{if(e.value===Iy)throw oh("");return e.value===Zl&&(e.value=Iy,e.value=e.factory(void 0,r)),typeof e.value=="object"&&e.value&&vI(e.value)&&this._ngOnDestroyHooks.add(e.value),e.value}finally{$(i)}}injectableDefInScope(n){if(!n.providedIn)return!1;let e=lt(n.providedIn);return typeof e=="string"?e==="any"||this.scopes.has(e):this.injectorDefTypes.has(e)}removeOnDestroy(n){let e=this._onDestroyHooks.indexOf(n);e!==-1&&this._onDestroyHooks.splice(e,1)}};function Gf(t){let n=xs(t),e=n!==null?n.factory:ur(t);if(e!==null)return e;if(t instanceof g)throw new C(-204,!1);if(t instanceof Function)return pI(t);throw new C(-204,!1)}function pI(t){if(t.length>0)throw new C(-204,!1);let e=tI(t);return e!==null?()=>e.factory(t):()=>new t}function mI(t){if(Vy(t))return Yi(void 0,t.useValue);{let n=fh(t);return Yi(n,Zl)}}function fh(t,n,e){let r;if(Qr(t)){let i=lt(t);return ur(i)||Gf(i)}else if(Vy(t))r=()=>lt(t.useValue);else if(hI(t))r=()=>t.useFactory(...zf(t.deps||[]));else if(fI(t))r=(i,o)=>M(lt(t.useExisting),o!==void 0&&o&8?8:void 0);else{let i=lt(t&&(t.useClass||t.provide));if(gI(t))r=()=>new i(...zf(t.deps));else return ur(i)||Gf(i)}return r}function ys(t){if(t.destroyed)throw new C(-205,!1)}function Yi(t,n,e=!1){return{factory:t,value:n,multi:e?[]:void 0}}function gI(t){return!!t.deps}function vI(t){return t!==null&&typeof t=="object"&&typeof t.ngOnDestroy=="function"}function yI(t){return typeof t=="function"||typeof t=="object"&&t.ngMetadataName==="InjectionToken"}function Wf(t,n){for(let e of t)Array.isArray(e)?Wf(e,n):e&&eh(e)?Wf(e.\u0275providers,n):n(e)}function qe(t,n){let e;t instanceof Xr?(ys(t),e=t):e=new $f(t);let r,i=gn(e),o=Et(void 0);try{return n()}finally{gn(i),Et(o)}}function Hy(){return Ny()!==void 0||Yl()!=null}var Xt=0,V=1,Q=2,We=3,Ht=4,xt=5,ni=6,Qi=7,He=8,Pn=9,Jt=10,Ae=11,Xi=12,hh=13,ri=14,It=15,gr=16,ii=17,_n=18,Ln=19,ph=20,On=21,dc=22,fr=23,Lt=24,oi=25,vr=26,Re=27,Uy=1,mh=6,yr=7,As=8,si=9,Fe=10;function jn(t){return Array.isArray(t)&&typeof t[Uy]=="object"}function en(t){return Array.isArray(t)&&t[Uy]===!0}function gh(t){return(t.flags&4)!==0}function Vn(t){return t.componentOffset>-1}function Ji(t){return(t.flags&1)===1}function wn(t){return!!t.template}function eo(t){return(t[Q]&512)!==0}function ai(t){return(t[Q]&256)===256}var vh="svg",$y="math";function Ut(t){for(;Array.isArray(t);)t=t[Xt];return t}function yh(t,n){return Ut(n[t])}function tn(t,n){return Ut(n[t.index])}function uc(t,n){return t.data[n]}function bh(t,n){return t[n]}function _h(t,n,e,r){e>=t.data.length&&(t.data[e]=null,t.blueprint[e]=null),n[e]=r}function $t(t,n){let e=n[t];return jn(e)?e:e[Xt]}function zy(t){return(t[Q]&4)===4}function fc(t){return(t[Q]&128)===128}function Gy(t){return en(t[We])}function jt(t,n){return n==null?null:t[n]}function wh(t){t[ii]=0}function Dh(t){t[Q]&1024||(t[Q]|=1024,fc(t)&&li(t))}function Wy(t,n){for(;t>0;)n=n[ri],t--;return n}function Rs(t){return!!(t[Q]&9216||t[Lt]?.dirty)}function hc(t){t[Jt].changeDetectionScheduler?.notify(8),t[Q]&64&&(t[Q]|=1024),Rs(t)&&li(t)}function li(t){t[Jt].changeDetectionScheduler?.notify(0);let n=hr(t);for(;n!==null&&!(n[Q]&8192||(n[Q]|=8192,!fc(n)));)n=hr(n)}function Ch(t,n){if(ai(t))throw new C(911,!1);t[On]===null&&(t[On]=[]),t[On].push(n)}function qy(t,n){if(t[On]===null)return;let e=t[On].indexOf(n);e!==-1&&t[On].splice(e,1)}function hr(t){let n=t[We];return en(n)?n[We]:n}function Eh(t){return t[Qi]??=[]}function xh(t){return t.cleanup??=[]}function Yy(t,n,e,r){let i=Eh(n);i.push(e),t.firstCreatePass&&xh(t).push(r,i.length-1)}var oe={lFrame:sb(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var qf=!1;function Zy(){return oe.lFrame.elementDepthCount}function Ky(){oe.lFrame.elementDepthCount++}function Ih(){oe.lFrame.elementDepthCount--}function pc(){return oe.bindingsEnabled}function Sh(){return oe.skipHydrationRootTNode!==null}function Mh(t){return oe.skipHydrationRootTNode===t}function Th(){oe.skipHydrationRootTNode=null}function Y(){return oe.lFrame.lView}function ke(){return oe.lFrame.tView}function Ye(t){return oe.lFrame.contextLView=t,t[He]}function Ze(t){return oe.lFrame.contextLView=null,t}function tt(){let t=Ah();for(;t!==null&&t.type===64;)t=t.parent;return t}function Ah(){return oe.lFrame.currentTNode}function Qy(){let t=oe.lFrame,n=t.currentTNode;return t.isParent?n:n.parent}function to(t,n){let e=oe.lFrame;e.currentTNode=t,e.isParent=n}function Rh(){return oe.lFrame.isParent}function kh(){oe.lFrame.isParent=!1}function Xy(){return oe.lFrame.contextLView}function Nh(){return qf}function ws(t){let n=qf;return qf=t,n}function Oh(){let t=oe.lFrame,n=t.bindingRootIndex;return n===-1&&(n=t.bindingRootIndex=t.tView.bindingStartIndex),n}function Jy(){return oe.lFrame.bindingIndex}function eb(t){return oe.lFrame.bindingIndex=t}function ci(){return oe.lFrame.bindingIndex++}function mc(t){let n=oe.lFrame,e=n.bindingIndex;return n.bindingIndex=n.bindingIndex+t,e}function tb(){return oe.lFrame.inI18n}function nb(t,n){let e=oe.lFrame;e.bindingIndex=e.bindingRootIndex=t,gc(n)}function rb(){return oe.lFrame.currentDirectiveIndex}function gc(t){oe.lFrame.currentDirectiveIndex=t}function ib(t){let n=oe.lFrame.currentDirectiveIndex;return n===-1?null:t[n]}function vc(){return oe.lFrame.currentQueryIndex}function ks(t){oe.lFrame.currentQueryIndex=t}function bI(t){let n=t[V];return n.type===2?n.declTNode:n.type===1?t[xt]:null}function Fh(t,n,e){if(e&4){let i=n,o=t;for(;i=i.parent,i===null&&!(e&1);)if(i=bI(o),i===null||(o=o[ri],i.type&10))break;if(i===null)return!1;n=i,t=o}let r=oe.lFrame=ob();return r.currentTNode=n,r.lView=t,!0}function yc(t){let n=ob(),e=t[V];oe.lFrame=n,n.currentTNode=e.firstChild,n.lView=t,n.tView=e,n.contextLView=t,n.bindingIndex=e.bindingStartIndex,n.inI18n=!1}function ob(){let t=oe.lFrame,n=t===null?null:t.child;return n===null?sb(t):n}function sb(t){let n={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:t,child:null,inI18n:!1};return t!==null&&(t.child=n),n}function ab(){let t=oe.lFrame;return oe.lFrame=t.parent,t.currentTNode=null,t.lView=null,t}var Ph=ab;function bc(){let t=ab();t.isParent=!0,t.tView=null,t.selectedIndex=-1,t.contextLView=null,t.elementDepthCount=0,t.currentDirectiveIndex=-1,t.currentNamespace=null,t.bindingRootIndex=-1,t.bindingIndex=-1,t.currentQueryIndex=0}function lb(t){return(oe.lFrame.contextLView=Wy(t,oe.lFrame.contextLView))[He]}function Dn(){return oe.lFrame.selectedIndex}function br(t){oe.lFrame.selectedIndex=t}function _c(){let t=oe.lFrame;return uc(t.tView,t.selectedIndex)}function _r(){oe.lFrame.currentNamespace=vh}function Lh(){return oe.lFrame.currentNamespace}var cb=!0;function wc(){return cb}function Ns(t){cb=t}function Yf(t,n=null,e=null,r){let i=jh(t,n,e,r);return i.resolveInjectorInitializers(),i}function jh(t,n=null,e=null,r,i=new Set){let o=[e||vt,cc(t)],s;return new Xr(o,n||Ki(),s||null,i)}var z=class t{static THROW_IF_NOT_FOUND=Zr;static NULL=new _s;static create(n,e){if(Array.isArray(n))return Yf({name:""},e,n,"");{let r=n.name??"";return Yf({name:r},n.parent,n.providers,r)}}static \u0275prov=_({token:t,providedIn:"any",factory:()=>M(lh)});static __NG_ELEMENT_ID__=-1},B=new g(""),nt=(()=>{class t{static __NG_ELEMENT_ID__=_I;static __NG_ENV_ID__=e=>e}return t})(),Xl=class extends nt{_lView;constructor(n){super(),this._lView=n}get destroyed(){return ai(this._lView)}onDestroy(n){let e=this._lView;return Ch(e,n),()=>qy(e,n)}};function _I(){return new Xl(Y())}var db=!1,ub=new g(""),Bn=(()=>{class t{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new je(!1);debugTaskTracker=u(ub,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new G(e=>{e.next(!1),e.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let e=this.taskId++;return this.pendingTasks.add(e),this.debugTaskTracker?.add(e),e}has(e){return this.pendingTasks.has(e)}remove(e){this.pendingTasks.delete(e),this.debugTaskTracker?.remove(e),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=_({token:t,providedIn:"root",factory:()=>new t})}return t})(),Zf=class extends D{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(n=!1){super(),this.__isAsync=n,Hy()&&(this.destroyRef=u(nt,{optional:!0})??void 0,this.pendingTasks=u(Bn,{optional:!0})??void 0)}emit(n){let e=$(null);try{super.next(n)}finally{$(e)}}subscribe(n,e,r){let i=n,o=e||(()=>null),s=r;if(n&&typeof n=="object"){let l=n;i=l.next?.bind(l),o=l.error?.bind(l),s=l.complete?.bind(l)}this.__isAsync&&(o=this.wrapInTimeout(o),i&&(i=this.wrapInTimeout(i)),s&&(s=this.wrapInTimeout(s)));let a=super.subscribe({next:i,error:o,complete:s});return n instanceof ce&&n.add(a),a}wrapInTimeout(n){return e=>{let r=this.pendingTasks?.add();setTimeout(()=>{try{n(e)}finally{r!==void 0&&this.pendingTasks?.remove(r)}})}}},W=Zf;function Jl(...t){}function Vh(t){let n,e;function r(){t=Jl;try{e!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(e),n!==void 0&&clearTimeout(n)}catch{}}return n=setTimeout(()=>{t(),r()}),typeof requestAnimationFrame=="function"&&(e=requestAnimationFrame(()=>{t(),r()})),()=>r()}function fb(t){return queueMicrotask(()=>t()),()=>{t=Jl}}var Bh="isAngularZone",Ds=Bh+"_ID",wI=0,O=class t{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new W(!1);onMicrotaskEmpty=new W(!1);onStable=new W(!1);onError=new W(!1);constructor(n){let{enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:r=!1,shouldCoalesceRunChangeDetection:i=!1,scheduleInRootZone:o=db}=n;if(typeof Zone>"u")throw new C(908,!1);Zone.assertZonePatched();let s=this;s._nesting=0,s._outer=s._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(s._inner=s._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(s._inner=s._inner.fork(Zone.longStackTraceZoneSpec)),s.shouldCoalesceEventChangeDetection=!i&&r,s.shouldCoalesceRunChangeDetection=i,s.callbackScheduled=!1,s.scheduleInRootZone=o,EI(s)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(Bh)===!0}static assertInAngularZone(){if(!t.isInAngularZone())throw new C(909,!1)}static assertNotInAngularZone(){if(t.isInAngularZone())throw new C(909,!1)}run(n,e,r){return this._inner.run(n,e,r)}runTask(n,e,r,i){let o=this._inner,s=o.scheduleEventTask("NgZoneEvent: "+i,n,DI,Jl,Jl);try{return o.runTask(s,e,r)}finally{o.cancelTask(s)}}runGuarded(n,e,r){return this._inner.runGuarded(n,e,r)}runOutsideAngular(n){return this._outer.run(n)}},DI={};function Hh(t){if(t._nesting==0&&!t.hasPendingMicrotasks&&!t.isStable)try{t._nesting++,t.onMicrotaskEmpty.emit(null)}finally{if(t._nesting--,!t.hasPendingMicrotasks)try{t.runOutsideAngular(()=>t.onStable.emit(null))}finally{t.isStable=!0}}}function CI(t){if(t.isCheckStableRunning||t.callbackScheduled)return;t.callbackScheduled=!0;function n(){Vh(()=>{t.callbackScheduled=!1,Kf(t),t.isCheckStableRunning=!0,Hh(t),t.isCheckStableRunning=!1})}t.scheduleInRootZone?Zone.root.run(()=>{n()}):t._outer.run(()=>{n()}),Kf(t)}function EI(t){let n=()=>{CI(t)},e=wI++;t._inner=t._inner.fork({name:"angular",properties:{[Bh]:!0,[Ds]:e,[Ds+e]:!0},onInvokeTask:(r,i,o,s,a,l)=>{if(xI(l))return r.invokeTask(o,s,a,l);try{return Sy(t),r.invokeTask(o,s,a,l)}finally{(t.shouldCoalesceEventChangeDetection&&s.type==="eventTask"||t.shouldCoalesceRunChangeDetection)&&n(),My(t)}},onInvoke:(r,i,o,s,a,l,c)=>{try{return Sy(t),r.invoke(o,s,a,l,c)}finally{t.shouldCoalesceRunChangeDetection&&!t.callbackScheduled&&!II(l)&&n(),My(t)}},onHasTask:(r,i,o,s)=>{r.hasTask(o,s),i===o&&(s.change=="microTask"?(t._hasPendingMicrotasks=s.microTask,Kf(t),Hh(t)):s.change=="macroTask"&&(t.hasPendingMacrotasks=s.macroTask))},onHandleError:(r,i,o,s)=>(r.handleError(o,s),t.runOutsideAngular(()=>t.onError.emit(s)),!1)})}function Kf(t){t._hasPendingMicrotasks||(t.shouldCoalesceEventChangeDetection||t.shouldCoalesceRunChangeDetection)&&t.callbackScheduled===!0?t.hasPendingMicrotasks=!0:t.hasPendingMicrotasks=!1}function Sy(t){t._nesting++,t.isStable&&(t.isStable=!1,t.onUnstable.emit(null))}function My(t){t._nesting--,Hh(t)}var Cs=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new W;onMicrotaskEmpty=new W;onStable=new W;onError=new W;run(n,e,r){return n.apply(e,r)}runGuarded(n,e,r){return n.apply(e,r)}runOutsideAngular(n){return n()}runTask(n,e,r,i){return n.apply(e,r)}};function xI(t){return hb(t,"__ignore_ng_zone__")}function II(t){return hb(t,"__scheduler_tick__")}function hb(t,n){return!Array.isArray(t)||t.length!==1?!1:t[0]?.data?.[n]===!0}var At=class{_console=console;handleError(n){this._console.error("ERROR",n)}},nn=new g("",{factory:()=>{let t=u(O),n=u(Ie),e;return r=>{t.runOutsideAngular(()=>{n.destroyed&&!e?setTimeout(()=>{throw r}):(e??=n.get(At),e.handleError(r))})}}}),pb={provide:ti,useValue:()=>{let t=u(At,{optional:!0})},multi:!0};function we(t,n){let[e,r,i]=Cf(t,n?.equal),o=e,s=o[Ge];return o.set=r,o.update=i,o.asReadonly=mb.bind(o),o}function mb(){let t=this[Ge];if(t.readonlyFn===void 0){let n=()=>this();n[Ge]=t,t.readonlyFn=n}return t.readonlyFn}var no=(()=>{class t{view;node;constructor(e,r){this.view=e,this.node=r}static __NG_ELEMENT_ID__=SI}return t})();function SI(){return new no(Y(),tt())}var vn=class{},Os=new g("",{factory:()=>!0});var Uh=new g(""),ro=(()=>{class t{internalPendingTasks=u(Bn);scheduler=u(vn);errorHandler=u(nn);add(){let e=this.internalPendingTasks.add();return()=>{this.internalPendingTasks.has(e)&&(this.scheduler.notify(11),this.internalPendingTasks.remove(e))}}run(e){let r=this.add();e().catch(this.errorHandler).finally(r)}static \u0275prov=_({token:t,providedIn:"root",factory:()=>new t})}return t})(),Dc=(()=>{class t{static \u0275prov=_({token:t,providedIn:"root",factory:()=>new Qf})}return t})(),Qf=class{dirtyEffectCount=0;queues=new Map;add(n){this.enqueue(n),this.schedule(n)}schedule(n){n.dirty&&this.dirtyEffectCount++}remove(n){let e=n.zone,r=this.queues.get(e);r.has(n)&&(r.delete(n),n.dirty&&this.dirtyEffectCount--)}enqueue(n){let e=n.zone;this.queues.has(e)||this.queues.set(e,new Set);let r=this.queues.get(e);r.has(n)||r.add(n)}flush(){for(;this.dirtyEffectCount>0;){let n=!1;for(let[e,r]of this.queues)e===null?n||=this.flushQueue(r):n||=e.run(()=>this.flushQueue(r));n||(this.dirtyEffectCount=0)}}flushQueue(n){let e=!1;for(let r of n)r.dirty&&(this.dirtyEffectCount--,e=!0,r.run());return e}},ec=class{[Ge];constructor(n){this[Ge]=n}destroy(){this[Ge].destroy()}};function di(t,n){let e=n?.injector??u(z),r=n?.manualCleanup!==!0?e.get(nt):null,i,o=e.get(no,null,{optional:!0}),s=e.get(vn);return o!==null?(i=AI(o.view,s,t),r instanceof Xl&&r._lView===o.view&&(r=null)):i=RI(t,e.get(Dc),s),i.injector=e,r!==null&&(i.onDestroyFns=[r.onDestroy(()=>i.destroy())]),new ec(i)}var gb=U(m({},xf),{cleanupFns:void 0,zone:null,onDestroyFns:null,run(){let t=ws(!1);try{If(this)}finally{ws(t)}},cleanup(){if(!this.cleanupFns?.length)return;let t=$(null);try{for(;this.cleanupFns.length;)this.cleanupFns.pop()()}finally{this.cleanupFns=[],$(t)}}}),MI=U(m({},gb),{consumerMarkedDirty(){this.scheduler.schedule(this),this.notifier.notify(12)},destroy(){if(lr(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.scheduler.remove(this)}}),TI=U(m({},gb),{consumerMarkedDirty(){this.view[Q]|=8192,li(this.view),this.notifier.notify(13)},destroy(){if(lr(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.view[fr]?.delete(this)}});function AI(t,n,e){let r=Object.create(TI);return r.view=t,r.zone=typeof Zone<"u"?Zone.current:null,r.notifier=n,r.fn=vb(r,e),t[fr]??=new Set,t[fr].add(r),r.consumerMarkedDirty(r),r}function RI(t,n,e){let r=Object.create(MI);return r.fn=vb(r,t),r.scheduler=n,r.notifier=e,r.zone=typeof Zone<"u"?Zone.current:null,r.scheduler.add(r),r.notifier.notify(12),r}function vb(t,n){return()=>{n(e=>(t.cleanupFns??=[]).push(e))}}function zs(t){return{toString:t}.toString()}function VI(t){return typeof t=="function"}function Qb(t,n,e,r){n!==null?n.applyValueToInputSignal(n,r):t[e]=r}var kc=class{previousValue;currentValue;firstChange;constructor(n,e,r){this.previousValue=n,this.currentValue=e,this.firstChange=r}isFirstChange(){return this.firstChange}},ut=(()=>{let t=()=>Xb;return t.ngInherit=!0,t})();function Xb(t){return t.type.prototype.ngOnChanges&&(t.setInput=HI),BI}function BI(){let t=e_(this),n=t?.current;if(n){let e=t.previous;if(e===mr)t.previous=n;else for(let r in n)e[r]=n[r];t.current=null,this.ngOnChanges(n)}}function HI(t,n,e,r,i){let o=this.declaredInputs[r],s=e_(t)||UI(t,{previous:mr,current:null}),a=s.current||(s.current={}),l=s.previous,c=l[o];a[o]=new kc(c&&c.currentValue,e,l===mr),Qb(t,n,i,e)}var Jb="__ngSimpleChanges__";function e_(t){return t[Jb]||null}function UI(t,n){return t[Jb]=n}var yb=[];var De=function(t,n=null,e){for(let r=0;r<yb.length;r++){let i=yb[r];i(t,n,e)}},me=(function(t){return t[t.TemplateCreateStart=0]="TemplateCreateStart",t[t.TemplateCreateEnd=1]="TemplateCreateEnd",t[t.TemplateUpdateStart=2]="TemplateUpdateStart",t[t.TemplateUpdateEnd=3]="TemplateUpdateEnd",t[t.LifecycleHookStart=4]="LifecycleHookStart",t[t.LifecycleHookEnd=5]="LifecycleHookEnd",t[t.OutputStart=6]="OutputStart",t[t.OutputEnd=7]="OutputEnd",t[t.BootstrapApplicationStart=8]="BootstrapApplicationStart",t[t.BootstrapApplicationEnd=9]="BootstrapApplicationEnd",t[t.BootstrapComponentStart=10]="BootstrapComponentStart",t[t.BootstrapComponentEnd=11]="BootstrapComponentEnd",t[t.ChangeDetectionStart=12]="ChangeDetectionStart",t[t.ChangeDetectionEnd=13]="ChangeDetectionEnd",t[t.ChangeDetectionSyncStart=14]="ChangeDetectionSyncStart",t[t.ChangeDetectionSyncEnd=15]="ChangeDetectionSyncEnd",t[t.AfterRenderHooksStart=16]="AfterRenderHooksStart",t[t.AfterRenderHooksEnd=17]="AfterRenderHooksEnd",t[t.ComponentStart=18]="ComponentStart",t[t.ComponentEnd=19]="ComponentEnd",t[t.DeferBlockStateStart=20]="DeferBlockStateStart",t[t.DeferBlockStateEnd=21]="DeferBlockStateEnd",t[t.DynamicComponentStart=22]="DynamicComponentStart",t[t.DynamicComponentEnd=23]="DynamicComponentEnd",t[t.HostBindingsUpdateStart=24]="HostBindingsUpdateStart",t[t.HostBindingsUpdateEnd=25]="HostBindingsUpdateEnd",t})(me||{});function $I(t,n,e){let{ngOnChanges:r,ngOnInit:i,ngDoCheck:o}=n.type.prototype;if(r){let s=Xb(n);(e.preOrderHooks??=[]).push(t,s),(e.preOrderCheckHooks??=[]).push(t,s)}i&&(e.preOrderHooks??=[]).push(0-t,i),o&&((e.preOrderHooks??=[]).push(t,o),(e.preOrderCheckHooks??=[]).push(t,o))}function t_(t,n){for(let e=n.directiveStart,r=n.directiveEnd;e<r;e++){let o=t.data[e].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:a,ngAfterViewInit:l,ngAfterViewChecked:c,ngOnDestroy:d}=o;s&&(t.contentHooks??=[]).push(-e,s),a&&((t.contentHooks??=[]).push(e,a),(t.contentCheckHooks??=[]).push(e,a)),l&&(t.viewHooks??=[]).push(-e,l),c&&((t.viewHooks??=[]).push(e,c),(t.viewCheckHooks??=[]).push(e,c)),d!=null&&(t.destroyHooks??=[]).push(e,d)}}function Sc(t,n,e){n_(t,n,3,e)}function Mc(t,n,e,r){(t[Q]&3)===e&&n_(t,n,e,r)}function $h(t,n){let e=t[Q];(e&3)===n&&(e&=16383,e+=1,t[Q]=e)}function n_(t,n,e,r){let i=r!==void 0?t[ii]&65535:0,o=r??-1,s=n.length-1,a=0;for(let l=i;l<s;l++)if(typeof n[l+1]=="number"){if(a=n[l],r!=null&&a>=r)break}else n[l]<0&&(t[ii]+=65536),(a<o||o==-1)&&(zI(t,e,n,l),t[ii]=(t[ii]&4294901760)+l+2),l++}function bb(t,n){De(me.LifecycleHookStart,t,n);let e=$(null);try{n.call(t)}finally{$(e),De(me.LifecycleHookEnd,t,n)}}function zI(t,n,e,r){let i=e[r]<0,o=e[r+1],s=i?-e[r]:e[r],a=t[s];i?t[Q]>>14<t[ii]>>16&&(t[Q]&3)===n&&(t[Q]+=16384,bb(a,o)):bb(a,o)}var oo=-1,fi=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(n,e,r,i){this.factory=n,this.name=i,this.canSeeViewProviders=e,this.injectImpl=r}};function GI(t){return(t.flags&8)!==0}function WI(t){return(t.flags&16)!==0}function qI(t,n,e){let r=0;for(;r<e.length;){let i=e[r];if(typeof i=="number"){if(i!==0)break;r++;let o=e[r++],s=e[r++],a=e[r++];t.setAttribute(n,s,a,o)}else{let o=i,s=e[++r];YI(o)?t.setProperty(n,o,s):t.setAttribute(n,o,s),r++}}return r}function r_(t){return t===3||t===4||t===6}function YI(t){return t.charCodeAt(0)===64}function so(t,n){if(!(n===null||n.length===0))if(t===null||t.length===0)t=n.slice();else{let e=-1;for(let r=0;r<n.length;r++){let i=n[r];typeof i=="number"?e=i:e===0||(e===-1||e===2?_b(t,e,i,null,n[++r]):_b(t,e,i,null,null))}}return t}function _b(t,n,e,r,i){let o=0,s=t.length;if(n===-1)s=-1;else for(;o<t.length;){let a=t[o++];if(typeof a=="number"){if(a===n){s=-1;break}else if(a>n){s=o-1;break}}}for(;o<t.length;){let a=t[o];if(typeof a=="number")break;if(a===e){i!==null&&(t[o+1]=i);return}o++,i!==null&&o++}s!==-1&&(t.splice(s,0,n),o=s+1),t.splice(o++,0,e),i!==null&&t.splice(o++,0,i)}function i_(t){return t!==oo}function Nc(t){return t&32767}function ZI(t){return t>>16}function Oc(t,n){let e=ZI(t),r=n;for(;e>0;)r=r[ri],e--;return r}var Jh=!0;function Fc(t){let n=Jh;return Jh=t,n}var KI=256,o_=KI-1,s_=5,QI=0,Cn={};function XI(t,n,e){let r;typeof e=="string"?r=e.charCodeAt(0)||0:e.hasOwnProperty(Jr)&&(r=e[Jr]),r==null&&(r=e[Jr]=QI++);let i=r&o_,o=1<<i;n.data[t+(i>>s_)]|=o}function Pc(t,n){let e=a_(t,n);if(e!==-1)return e;let r=n[V];r.firstCreatePass&&(t.injectorIndex=n.length,zh(r.data,t),zh(n,null),zh(r.blueprint,null));let i=Pp(t,n),o=t.injectorIndex;if(i_(i)){let s=Nc(i),a=Oc(i,n),l=a[V].data;for(let c=0;c<8;c++)n[o+c]=a[s+c]|l[s+c]}return n[o+8]=i,o}function zh(t,n){t.push(0,0,0,0,0,0,0,0,n)}function a_(t,n){return t.injectorIndex===-1||t.parent&&t.parent.injectorIndex===t.injectorIndex||n[t.injectorIndex+8]===null?-1:t.injectorIndex}function Pp(t,n){if(t.parent&&t.parent.injectorIndex!==-1)return t.parent.injectorIndex;let e=0,r=null,i=n;for(;i!==null;){if(r=f_(i),r===null)return oo;if(e++,i=i[ri],r.injectorIndex!==-1)return r.injectorIndex|e<<16}return oo}function ep(t,n,e){XI(t,n,e)}function JI(t,n){if(n==="class")return t.classes;if(n==="style")return t.styles;let e=t.attrs;if(e){let r=e.length,i=0;for(;i<r;){let o=e[i];if(r_(o))break;if(o===0)i=i+2;else if(typeof o=="number")for(i++;i<r&&typeof e[i]=="string";)i++;else{if(o===n)return e[i+1];i=i+2}}}return null}function l_(t,n,e){if(e&8||t!==void 0)return t;oc(n,"NodeInjector")}function c_(t,n,e,r){if(e&8&&r===void 0&&(r=null),(e&3)===0){let i=t[Pn],o=Et(void 0);try{return i?i.get(n,r,e&8):sh(n,r,e&8)}finally{Et(o)}}return l_(r,n,e)}function d_(t,n,e,r=0,i){if(t!==null){if(n[Q]&2048&&!(r&2)){let s=rS(t,n,e,r,Cn);if(s!==Cn)return s}let o=u_(t,n,e,r,Cn);if(o!==Cn)return o}return c_(n,e,r,i)}function u_(t,n,e,r,i){let o=tS(e);if(typeof o=="function"){if(!Fh(n,t,r))return r&1?l_(i,e,r):c_(n,e,r,i);try{let s;if(s=o(r),s==null&&!(r&8))oc(e);else return s}finally{Ph()}}else if(typeof o=="number"){let s=null,a=a_(t,n),l=oo,c=r&1?n[It][xt]:null;for((a===-1||r&4)&&(l=a===-1?Pp(t,n):n[a+8],l===oo||!Db(r,!1)?a=-1:(s=n[V],a=Nc(l),n=Oc(l,n)));a!==-1;){let d=n[V];if(wb(o,a,d.data)){let f=eS(a,n,e,s,r,c);if(f!==Cn)return f}l=n[a+8],l!==oo&&Db(r,n[V].data[a+8]===c)&&wb(o,a,n)?(s=d,a=Nc(l),n=Oc(l,n)):a=-1}}return i}function eS(t,n,e,r,i,o){let s=n[V],a=s.data[t+8],l=r==null?Vn(a)&&Jh:r!=s&&(a.type&3)!==0,c=i&1&&o===a,d=Tc(a,s,e,l,c);return d!==null?js(n,s,d,a,i):Cn}function Tc(t,n,e,r,i){let o=t.providerIndexes,s=n.data,a=o&1048575,l=t.directiveStart,c=t.directiveEnd,d=o>>20,f=r?a:a+d,h=i?a+d:c;for(let p=f;p<h;p++){let y=s[p];if(p<l&&e===y||p>=l&&y.type===e)return p}if(i){let p=s[l];if(p&&wn(p)&&p.type===e)return l}return null}function js(t,n,e,r,i){let o=t[e],s=n.data;if(o instanceof fi){let a=o;if(a.resolving)throw oh("");let l=Fc(a.canSeeViewProviders);a.resolving=!0;let c=s[e].type||s[e],d,f=a.injectImpl?Et(a.injectImpl):null,h=Fh(t,r,0);try{o=t[e]=a.factory(void 0,i,s,t,r),n.firstCreatePass&&e>=r.directiveStart&&$I(e,s[e],n)}finally{f!==null&&Et(f),Fc(l),a.resolving=!1,Ph()}}return o}function tS(t){if(typeof t=="string")return t.charCodeAt(0)||0;let n=t.hasOwnProperty(Jr)?t[Jr]:void 0;return typeof n=="number"?n>=0?n&o_:nS:n}function wb(t,n,e){let r=1<<t;return!!(e[n+(t>>s_)]&r)}function Db(t,n){return!(t&2)&&!(t&1&&n)}var ui=class{_tNode;_lView;constructor(n,e){this._tNode=n,this._lView=e}get(n,e,r){return d_(this._tNode,this._lView,n,Kr(r),e)}};function nS(){return new ui(tt(),Y())}function St(t){return zs(()=>{let n=t.prototype.constructor,e=n[bs]||tp(n),r=Object.prototype,i=Object.getPrototypeOf(t.prototype).constructor;for(;i&&i!==r;){let o=i[bs]||tp(i);if(o&&o!==e)return o;i=Object.getPrototypeOf(i)}return o=>new o})}function tp(t){return Xf(t)?()=>{let n=tp(lt(t));return n&&n()}:ur(t)}function rS(t,n,e,r,i){let o=t,s=n;for(;o!==null&&s!==null&&s[Q]&2048&&!eo(s);){let a=u_(o,s,e,r|2,Cn);if(a!==Cn)return a;let l=o.parent;if(!l){let c=s[ph];if(c){let d=c.get(e,Cn,r&-5);if(d!==Cn)return d}l=f_(s),s=s[ri]}o=l}return i}function f_(t){let n=t[V],e=n.type;return e===2?n.declTNode:e===1?t[xt]:null}function Lp(t){return JI(tt(),t)}function iS(){return fo(tt(),Y())}function fo(t,n){return new P(tn(t,n))}var P=(()=>{class t{nativeElement;constructor(e){this.nativeElement=e}static __NG_ELEMENT_ID__=iS}return t})();function h_(t){return t instanceof P?t.nativeElement:t}function oS(){return this._results[Symbol.iterator]()}var sn=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new D}constructor(n=!1){this._emitDistinctChangesOnly=n}get(n){return this._results[n]}map(n){return this._results.map(n)}filter(n){return this._results.filter(n)}find(n){return this._results.find(n)}reduce(n,e){return this._results.reduce(n,e)}forEach(n){this._results.forEach(n)}some(n){return this._results.some(n)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(n,e){this.dirty=!1;let r=Fy(n);(this._changesDetected=!Oy(this._results,r,e))&&(this._results=r,this.length=r.length,this.last=r[this.length-1],this.first=r[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(n){this._onDirty=n}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=oS};function p_(t){return(t.flags&128)===128}var jp=(function(t){return t[t.OnPush=0]="OnPush",t[t.Eager=1]="Eager",t[t.Default=1]="Default",t})(jp||{}),m_=new Map,sS=0;function aS(){return sS++}function lS(t){m_.set(t[Ln],t)}function np(t){m_.delete(t[Ln])}var Cb="__ngContext__";function ao(t,n){jn(n)?(t[Cb]=n[Ln],lS(n)):t[Cb]=n}function g_(t){return y_(t[Xi])}function v_(t){return y_(t[Ht])}function y_(t){for(;t!==null&&!en(t);)t=t[Ht];return t}var rp;function Vp(t){rp=t}function b_(){if(rp!==void 0)return rp;if(typeof document<"u")return document;throw new C(210,!1)}var ho=new g("",{factory:()=>cS}),cS="ng";var Zc=new g(""),gi=new g("",{providedIn:"platform",factory:()=>"unknown"}),Gs=new g(""),vi=new g("",{factory:()=>u(B).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var __="r";var w_="di";var D_=!1,C_=new g("",{factory:()=>D_});var Eb=new WeakMap;function dS(t,n){if(t==null||typeof t!="object")return;let e=Eb.get(t);e||(e=new WeakSet,Eb.set(t,e)),e.add(n)}var uS=(t,n,e,r)=>{};function fS(t,n,e,r){uS(t,n,e,r)}function Kc(t){return(t.flags&32)===32}var hS=()=>null;function E_(t,n,e=!1){return hS(t,n,e)}function x_(t,n){let e=t.contentQueries;if(e!==null){let r=$(null);try{for(let i=0;i<e.length;i+=2){let o=e[i],s=e[i+1];if(s!==-1){let a=t.data[s];ks(o),a.contentQueries(2,n[s],s)}}}finally{$(r)}}}function ip(t,n,e){ks(0);let r=$(null);try{n(t,e)}finally{$(r)}}function Bp(t,n,e){if(gh(n)){let r=$(null);try{let i=n.directiveStart,o=n.directiveEnd;for(let s=i;s<o;s++){let a=t.data[s];if(a.contentQueries){let l=e[s];a.contentQueries(1,l,s)}}}finally{$(r)}}}var an=(function(t){return t[t.Emulated=0]="Emulated",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom",t[t.ExperimentalIsolatedShadowDom=4]="ExperimentalIsolatedShadowDom",t})(an||{});var Cc;function pS(){if(Cc===void 0&&(Cc=null,pr.trustedTypes))try{Cc=pr.trustedTypes.createPolicy("angular",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return Cc}function Qc(t){return pS()?.createHTML(t)||t}var Ec;function mS(){if(Ec===void 0&&(Ec=null,pr.trustedTypes))try{Ec=pr.trustedTypes.createPolicy("angular#unsafe-bypass",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return Ec}function xb(t){return mS()?.createHTML(t)||t}var Hn=class{changingThisBreaksApplicationSecurity;constructor(n){this.changingThisBreaksApplicationSecurity=n}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${tc})`}},op=class extends Hn{getTypeName(){return"HTML"}},sp=class extends Hn{getTypeName(){return"Style"}},ap=class extends Hn{getTypeName(){return"Script"}},lp=class extends Hn{getTypeName(){return"URL"}},cp=class extends Hn{getTypeName(){return"ResourceURL"}};function dn(t){return t instanceof Hn?t.changingThisBreaksApplicationSecurity:t}function Un(t,n){let e=I_(t);if(e!=null&&e!==n){if(e==="ResourceURL"&&n==="URL")return!0;throw new Error(`Required a safe ${n}, got a ${e} (see ${tc})`)}return e===n}function I_(t){return t instanceof Hn&&t.getTypeName()||null}function Hp(t){return new op(t)}function Up(t){return new sp(t)}function $p(t){return new ap(t)}function zp(t){return new lp(t)}function Gp(t){return new cp(t)}function gS(t){let n=new up(t);return vS()?new dp(n):n}var dp=class{inertDocumentHelper;constructor(n){this.inertDocumentHelper=n}getInertBodyElement(n){n="<body><remove></remove>"+n;try{let e=new window.DOMParser().parseFromString(Qc(n),"text/html").body;return e===null?this.inertDocumentHelper.getInertBodyElement(n):(e.firstChild?.remove(),e)}catch{return null}}},up=class{defaultDoc;inertDocument;constructor(n){this.defaultDoc=n,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert")}getInertBodyElement(n){let e=this.inertDocument.createElement("template");return e.innerHTML=Qc(n),e}};function vS(){try{return!!new window.DOMParser().parseFromString(Qc(""),"text/html")}catch{return!1}}var yS=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function Ws(t){return t=String(t),t.match(yS)?t:"unsafe:"+t}function $n(t){let n={};for(let e of t.split(","))n[e]=!0;return n}function qs(...t){let n={};for(let e of t)for(let r in e)e.hasOwnProperty(r)&&(n[r]=!0);return n}var S_=$n("area,br,col,hr,img,wbr"),M_=$n("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),T_=$n("rp,rt"),bS=qs(T_,M_),_S=qs(M_,$n("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),wS=qs(T_,$n("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),Ib=qs(S_,_S,wS,bS),A_=$n("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),DS=$n("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),CS=$n("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),ES=qs(A_,DS,CS),xS=$n("script,style,template"),fp=class{sanitizedSomething=!1;buf=[];sanitizeChildren(n){let e=n.firstChild,r=!0,i=[];for(;e;){if(e.nodeType===Node.ELEMENT_NODE?r=this.startElement(e):e.nodeType===Node.TEXT_NODE?this.chars(e.nodeValue):this.sanitizedSomething=!0,r&&e.firstChild){i.push(e),e=MS(e);continue}for(;e;){e.nodeType===Node.ELEMENT_NODE&&this.endElement(e);let o=SS(e);if(o){e=o;break}e=i.pop()}}return this.buf.join("")}startElement(n){let e=Sb(n).toLowerCase();if(!Ib.hasOwnProperty(e))return this.sanitizedSomething=!0,!xS.hasOwnProperty(e);this.buf.push("<"),this.buf.push(e);let r=n.attributes;for(let i=0;i<r.length;i++){let o=r.item(i),s=o.name,a=s.toLowerCase();if(!ES.hasOwnProperty(a)){this.sanitizedSomething=!0;continue}let l=o.value;A_[a]&&(l=Ws(l)),this.buf.push(" ",s,'="',Mb(l),'"')}return this.buf.push(">"),!0}endElement(n){let e=Sb(n).toLowerCase();Ib.hasOwnProperty(e)&&!S_.hasOwnProperty(e)&&(this.buf.push("</"),this.buf.push(e),this.buf.push(">"))}chars(n){this.buf.push(Mb(n))}};function IS(t,n){return(t.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY)!==Node.DOCUMENT_POSITION_CONTAINED_BY}function SS(t){let n=t.nextSibling;if(n&&t!==n.previousSibling)throw R_(n);return n}function MS(t){let n=t.firstChild;if(n&&IS(t,n))throw R_(n);return n}function Sb(t){let n=t.nodeName;return typeof n=="string"?n:"FORM"}function R_(t){return new Error(`Failed to sanitize html because the element is clobbered: ${t.outerHTML}`)}var TS=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,AS=/([^\#-~ |!])/g;function Mb(t){return t.replace(/&/g,"&amp;").replace(TS,function(n){let e=n.charCodeAt(0),r=n.charCodeAt(1);return"&#"+((e-55296)*1024+(r-56320)+65536)+";"}).replace(AS,function(n){return"&#"+n.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}var xc;function Xc(t,n){let e=null;try{xc=xc||gS(t);let r=n?String(n):"";e=xc.getInertBodyElement(r);let i=5,o=r;do{if(i===0)throw new Error("Failed to sanitize html because the input is unstable");i--,r=o,o=e.innerHTML,e=xc.getInertBodyElement(r)}while(r!==o);let a=new fp().sanitizeChildren(Tb(e)||e);return Qc(a)}finally{if(e){let r=Tb(e)||e;for(;r.firstChild;)r.firstChild.remove()}}}function Tb(t){return"content"in t&&RS(t)?t.content:null}function RS(t){return t.nodeType===Node.ELEMENT_NODE&&t.nodeName==="TEMPLATE"}var kS=/^>|^->|<!--|-->|--!>|<!-$/g,NS=/(<|>)/g,OS="\u200B$1\u200B";function FS(t){return t.replace(kS,n=>n.replace(NS,OS))}function PS(t,n){return t.createText(n)}function LS(t,n,e){t.setValue(n,e)}function jS(t,n){return t.createComment(FS(n))}function k_(t,n,e){return t.createElement(n,e)}function Lc(t,n,e,r,i){t.insertBefore(n,e,r,i)}function N_(t,n,e){t.appendChild(n,e)}function Ab(t,n,e,r,i){r!==null?Lc(t,n,e,r,i):N_(t,n,e)}function O_(t,n,e,r){t.removeChild(null,n,e,r)}function VS(t,n,e){t.setAttribute(n,"style",e)}function BS(t,n,e){e===""?t.removeAttribute(n,"class"):t.setAttribute(n,"class",e)}function F_(t,n,e){let{mergedAttrs:r,classes:i,styles:o}=e;r!==null&&qI(t,n,r),i!==null&&BS(t,n,i),o!==null&&VS(t,n,o)}var Ke=(function(t){return t[t.NONE=0]="NONE",t[t.HTML=1]="HTML",t[t.STYLE=2]="STYLE",t[t.SCRIPT=3]="SCRIPT",t[t.URL=4]="URL",t[t.RESOURCE_URL=5]="RESOURCE_URL",t[t.ATTRIBUTE_NO_BINDING=6]="ATTRIBUTE_NO_BINDING",t})(Ke||{});function Wp(t){let n=P_();return n?xb(n.sanitize(Ke.HTML,t)||""):Un(t,"HTML")?xb(dn(t)):Xc(b_(),ei(t))}function qp(t){let n=P_();return n?n.sanitize(Ke.URL,t)||"":Un(t,"URL")?dn(t):Ws(ei(t))}function P_(){let t=Y();return t&&t[Jt].sanitizer}function L_(t){return t instanceof Function?t():t}function HS(t,n,e){let r=t.length;for(;;){let i=t.indexOf(n,e);if(i===-1)return i;if(i===0||t.charCodeAt(i-1)<=32){let o=n.length;if(i+o===r||t.charCodeAt(i+o)<=32)return i}e=i+1}}var j_="ng-template";function US(t,n,e,r){let i=0;if(r){for(;i<n.length&&typeof n[i]=="string";i+=2)if(n[i]==="class"&&HS(n[i+1].toLowerCase(),e,0)!==-1)return!0}else if(Yp(t))return!1;if(i=n.indexOf(1,i),i>-1){let o;for(;++i<n.length&&typeof(o=n[i])=="string";)if(o.toLowerCase()===e)return!0}return!1}function Yp(t){return t.type===4&&t.value!==j_}function $S(t,n,e){let r=t.type===4&&!e?j_:t.value;return n===r}function zS(t,n,e){let r=4,i=t.attrs,o=i!==null?qS(i):0,s=!1;for(let a=0;a<n.length;a++){let l=n[a];if(typeof l=="number"){if(!s&&!rn(r)&&!rn(l))return!1;if(s&&rn(l))continue;s=!1,r=l|r&1;continue}if(!s)if(r&4){if(r=2|r&1,l!==""&&!$S(t,l,e)||l===""&&n.length===1){if(rn(r))return!1;s=!0}}else if(r&8){if(i===null||!US(t,i,l,e)){if(rn(r))return!1;s=!0}}else{let c=n[++a],d=GS(l,i,Yp(t),e);if(d===-1){if(rn(r))return!1;s=!0;continue}if(c!==""){let f;if(d>o?f="":f=i[d+1].toLowerCase(),r&2&&c!==f){if(rn(r))return!1;s=!0}}}}return rn(r)||s}function rn(t){return(t&1)===0}function GS(t,n,e,r){if(n===null)return-1;let i=0;if(r||!e){let o=!1;for(;i<n.length;){let s=n[i];if(s===t)return i;if(s===3||s===6)o=!0;else if(s===1||s===2){let a=n[++i];for(;typeof a=="string";)a=n[++i];continue}else{if(s===4)break;if(s===0){i+=4;continue}}i+=o?1:2}return-1}else return YS(n,t)}function V_(t,n,e=!1){for(let r=0;r<n.length;r++)if(zS(t,n[r],e))return!0;return!1}function WS(t){let n=t.attrs;if(n!=null){let e=n.indexOf(5);if((e&1)===0)return n[e+1]}return null}function qS(t){for(let n=0;n<t.length;n++){let e=t[n];if(r_(e))return n}return t.length}function YS(t,n){let e=t.indexOf(4);if(e>-1)for(e++;e<t.length;){let r=t[e];if(typeof r=="number")return-1;if(r===n)return e;e++}return-1}function ZS(t,n){e:for(let e=0;e<n.length;e++){let r=n[e];if(t.length===r.length){for(let i=0;i<t.length;i++)if(t[i]!==r[i])continue e;return!0}}return!1}function Rb(t,n){return t?":not("+n.trim()+")":n}function KS(t){let n=t[0],e=1,r=2,i="",o=!1;for(;e<t.length;){let s=t[e];if(typeof s=="string")if(r&2){let a=t[++e];i+="["+s+(a.length>0?'="'+a+'"':"")+"]"}else r&8?i+="."+s:r&4&&(i+=" "+s);else i!==""&&!rn(s)&&(n+=Rb(o,i),i=""),r=s,o=o||!rn(r);e++}return i!==""&&(n+=Rb(o,i)),n}function QS(t){return t.map(KS).join(",")}function XS(t){let n=[],e=[],r=1,i=2;for(;r<t.length;){let o=t[r];if(typeof o=="string")i===2?o!==""&&n.push(o,t[++r]):i===8&&e.push(o);else{if(!rn(i))break;i=o}r++}return e.length&&n.push(1,...e),n}var Rt={};function Zp(t,n,e,r,i,o,s,a,l,c,d){let f=Re+r,h=f+i,p=JS(f,h),y=typeof c=="function"?c():c;return p[V]={type:t,blueprint:p,template:e,queries:null,viewQuery:a,declTNode:n,data:p.slice().fill(null,f),bindingStartIndex:f,expandoStartIndex:h,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof o=="function"?o():o,pipeRegistry:typeof s=="function"?s():s,firstChild:null,schemas:l,consts:y,incompleteFirstPass:!1,ssrId:d}}function JS(t,n){let e=[];for(let r=0;r<n;r++)e.push(r<t?null:Rt);return e}function eM(t){let n=t.tView;return n===null||n.incompleteFirstPass?t.tView=Zp(1,null,t.template,t.decls,t.vars,t.directiveDefs,t.pipeDefs,t.viewQuery,t.schemas,t.consts,t.id):n}function Kp(t,n,e,r,i,o,s,a,l,c,d){let f=n.blueprint.slice();return f[Xt]=i,f[Q]=r|4|128|8|64|1024,(c!==null||t&&t[Q]&2048)&&(f[Q]|=2048),wh(f),f[We]=f[ri]=t,f[He]=e,f[Jt]=s||t&&t[Jt],f[Ae]=a||t&&t[Ae],f[Pn]=l||t&&t[Pn]||null,f[xt]=o,f[Ln]=aS(),f[ni]=d,f[ph]=c,f[It]=n.type==2?t[It]:f,f}function tM(t,n,e){let r=tn(n,t),i=eM(e),o=t[Jt].rendererFactory,s=Qp(t,Kp(t,i,null,B_(e),r,n,null,o.createRenderer(r,e),null,null,null));return t[n.index]=s}function B_(t){let n=16;return t.signals?n=4096:t.onPush&&(n=64),n}function H_(t,n,e,r){if(e===0)return-1;let i=n.length;for(let o=0;o<e;o++)n.push(r),t.blueprint.push(r),t.data.push(null);return i}function Qp(t,n){return t[Xi]?t[hh][Ht]=n:t[Xi]=n,t[hh]=n,n}function v(t=1){U_(ke(),Y(),Dn()+t,!1)}function U_(t,n,e,r){if(!r)if((n[Q]&3)===3){let o=t.preOrderCheckHooks;o!==null&&Sc(n,o,e)}else{let o=t.preOrderHooks;o!==null&&Mc(n,o,0,e)}br(e)}var Jc=(function(t){return t[t.None=0]="None",t[t.SignalBased=1]="SignalBased",t[t.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",t})(Jc||{});function hp(t,n,e,r){let i=$(null);try{let[o,s,a]=t.inputs[e],l=null;(s&Jc.SignalBased)!==0&&(l=n[o][Ge]),l!==null&&l.transformFn!==void 0?r=l.transformFn(r):a!==null&&(r=a.call(n,r)),t.setInput!==null?t.setInput(n,l,r,e,o):Qb(n,l,o,r)}finally{$(i)}}var ln=(function(t){return t[t.Important=1]="Important",t[t.DashCase=2]="DashCase",t})(ln||{}),nM;function Xp(t,n){return nM(t,n)}var kz=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";var pp=new WeakMap,Fs=new WeakSet;function rM(t,n){let e=pp.get(t);if(!e||e.length===0)return;let r=n.parentNode,i=n.previousSibling;for(let o=e.length-1;o>=0;o--){let s=e[o],a=s.parentNode;s===n?(e.splice(o,1),Fs.add(s),s.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}}))):(i&&s===i||a&&r&&a!==r)&&(e.splice(o,1),s.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),s.parentNode?.removeChild(s))}}function iM(t,n){let e=pp.get(t);e?e.includes(n)||e.push(n):pp.set(t,[n])}var hi=new Set,ed=(function(t){return t[t.CHANGE_DETECTION=0]="CHANGE_DETECTION",t[t.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",t})(ed||{}),un=new g(""),kb=new Set;function Dr(t){kb.has(t)||(kb.add(t),performance?.mark?.("mark_feature_usage",{detail:{feature:t}}))}var td=(()=>{class t{impl=null;execute(){this.impl?.execute()}static \u0275prov=_({token:t,providedIn:"root",factory:()=>new t})}return t})(),Jp=[0,1,2,3],em=(()=>{class t{ngZone=u(O);scheduler=u(vn);errorHandler=u(At,{optional:!0});sequences=new Set;deferredRegistrations=new Set;executing=!1;constructor(){u(un,{optional:!0})}execute(){let e=this.sequences.size>0;e&&De(me.AfterRenderHooksStart),this.executing=!0;for(let r of Jp)for(let i of this.sequences)if(!(i.erroredOrDestroyed||!i.hooks[r]))try{i.pipelinedValue=this.ngZone.runOutsideAngular(()=>this.maybeTrace(()=>{let o=i.hooks[r];return o(i.pipelinedValue)},i.snapshot))}catch(o){i.erroredOrDestroyed=!0,this.errorHandler?.handleError(o)}this.executing=!1;for(let r of this.sequences)r.afterRun(),r.once&&(this.sequences.delete(r),r.destroy());for(let r of this.deferredRegistrations)this.sequences.add(r);this.deferredRegistrations.size>0&&this.scheduler.notify(7),this.deferredRegistrations.clear(),e&&De(me.AfterRenderHooksEnd)}register(e){let{view:r}=e;r!==void 0?((r[oi]??=[]).push(e),li(r),r[Q]|=8192):this.executing?this.deferredRegistrations.add(e):this.addSequence(e)}addSequence(e){this.sequences.add(e),this.scheduler.notify(7)}unregister(e){this.executing&&this.sequences.has(e)?(e.erroredOrDestroyed=!0,e.pipelinedValue=void 0,e.once=!0):(this.sequences.delete(e),this.deferredRegistrations.delete(e))}maybeTrace(e,r){return r?r.run(ed.AFTER_NEXT_RENDER,e):e()}static \u0275prov=_({token:t,providedIn:"root",factory:()=>new t})}return t})(),Vs=class{impl;hooks;view;once;snapshot;erroredOrDestroyed=!1;pipelinedValue=void 0;unregisterOnDestroy;constructor(n,e,r,i,o,s=null){this.impl=n,this.hooks=e,this.view=r,this.once=i,this.snapshot=s,this.unregisterOnDestroy=o?.onDestroy(()=>this.destroy())}afterRun(){this.erroredOrDestroyed=!1,this.pipelinedValue=void 0,this.snapshot?.dispose(),this.snapshot=null}destroy(){this.impl.unregister(this),this.unregisterOnDestroy?.();let n=this.view?.[oi];n&&(this.view[oi]=n.filter(e=>e!==this))}};function it(t,n){let e=n?.injector??u(z);return Dr("NgAfterNextRender"),sM(t,e,n,!0)}function oM(t){return t instanceof Function?[void 0,void 0,t,void 0]:[t.earlyRead,t.write,t.mixedReadWrite,t.read]}function sM(t,n,e,r){let i=n.get(td);i.impl??=n.get(em);let o=n.get(un,null,{optional:!0}),s=e?.manualCleanup!==!0?n.get(nt):null,a=n.get(no,null,{optional:!0}),l=new Vs(i.impl,oM(t),a?.view,r,s,o?.snapshot(null));return i.impl.register(l),l}var $_=new g("",{factory:()=>({queue:new Set,isScheduled:!1,scheduler:null,injector:u(Ie)})});function z_(t,n,e){let r=t.get($_);if(Array.isArray(n))for(let i of n)r.queue.add(i),e?.detachedLeaveAnimationFns?.push(i);else r.queue.add(n),e?.detachedLeaveAnimationFns?.push(n);r.scheduler&&r.scheduler(t)}function aM(t,n){let e=t.get($_);if(n.detachedLeaveAnimationFns){for(let r of n.detachedLeaveAnimationFns)e.queue.delete(r);n.detachedLeaveAnimationFns=void 0}}function lM(t,n){for(let[e,r]of n)z_(t,r.animateFns)}function Nb(t,n,e,r){let i=t?.[vr]?.enter;n!==null&&i&&i.has(e.index)&&lM(r,i)}function io(t,n,e,r,i,o,s,a){if(i!=null){let l,c=!1;en(i)?l=i:jn(i)&&(c=!0,i=i[Xt]);let d=Ut(i);t===0&&r!==null?(Nb(a,r,o,e),s==null?N_(n,r,d):Lc(n,r,d,s||null,!0)):t===1&&r!==null?(Nb(a,r,o,e),Lc(n,r,d,s||null,!0),rM(o,d)):t===2?(a?.[vr]?.leave?.has(o.index)&&iM(o,d),Fs.delete(d),Ob(a,o,e,f=>{if(Fs.has(d)){Fs.delete(d);return}O_(n,d,c,f)})):t===3&&(Fs.delete(d),Ob(a,o,e,()=>{n.destroyNode(d)})),l!=null&&bM(n,t,e,l,o,r,s)}}function cM(t,n){G_(t,n),n[Xt]=null,n[xt]=null}function dM(t,n,e,r,i,o){r[Xt]=i,r[xt]=n,rd(t,r,e,1,i,o)}function G_(t,n){n[Jt].changeDetectionScheduler?.notify(9),rd(t,n,n[Ae],2,null,null)}function uM(t){let n=t[Xi];if(!n)return Gh(t[V],t);for(;n;){let e=null;if(jn(n))e=n[Xi];else{let r=n[Fe];r&&(e=r)}if(!e){for(;n&&!n[Ht]&&n!==t;)jn(n)&&Gh(n[V],n),n=n[We];n===null&&(n=t),jn(n)&&Gh(n[V],n),e=n&&n[Ht]}n=e}}function tm(t,n){let e=t[si],r=e.indexOf(n);e.splice(r,1)}function nd(t,n){if(ai(n))return;let e=n[Ae];e.destroyNode&&rd(t,n,e,3,null,null),uM(n)}function Gh(t,n){if(ai(n))return;let e=$(null);try{n[Q]&=-129,n[Q]|=256,n[Lt]&&lr(n[Lt]),pM(t,n),hM(t,n),n[V].type===1&&n[Ae].destroy();let r=n[gr];if(r!==null&&en(n[We])){r!==n[We]&&tm(r,n);let i=n[_n];i!==null&&i.detachView(t)}np(n)}finally{$(e)}}function Ob(t,n,e,r){let i=t?.[vr];if(i==null||i.leave==null||!i.leave.has(n.index))return r(!1);t&&hi.add(t[Ln]),z_(e,()=>{if(i.leave&&i.leave.has(n.index)){let s=i.leave.get(n.index),a=[];if(s){for(let l=0;l<s.animateFns.length;l++){let c=s.animateFns[l],{promise:d}=c();a.push(d)}i.detachedLeaveAnimationFns=void 0}i.running=Promise.allSettled(a),fM(t,r)}else t&&hi.delete(t[Ln]),r(!1)},i)}function fM(t,n){let e=t[vr]?.running;if(e){e.then(()=>{t[vr].running=void 0,hi.delete(t[Ln]),n(!0)});return}n(!1)}function hM(t,n){let e=t.cleanup,r=n[Qi];if(e!==null)for(let s=0;s<e.length-1;s+=2)if(typeof e[s]=="string"){let a=e[s+3];a>=0?r[a]():r[-a].unsubscribe(),s+=2}else{let a=r[e[s+1]];e[s].call(a)}r!==null&&(n[Qi]=null);let i=n[On];if(i!==null){n[On]=null;for(let s=0;s<i.length;s++){let a=i[s];a()}}let o=n[fr];if(o!==null){n[fr]=null;for(let s of o)s.destroy()}}function pM(t,n){let e;if(t!=null&&(e=t.destroyHooks)!=null)for(let r=0;r<e.length;r+=2){let i=n[e[r]];if(!(i instanceof fi)){let o=e[r+1];if(Array.isArray(o))for(let s=0;s<o.length;s+=2){let a=i[o[s]],l=o[s+1];De(me.LifecycleHookStart,a,l);try{l.call(a)}finally{De(me.LifecycleHookEnd,a,l)}}else{De(me.LifecycleHookStart,i,o);try{o.call(i)}finally{De(me.LifecycleHookEnd,i,o)}}}}}function W_(t,n,e){return mM(t,n.parent,e)}function mM(t,n,e){let r=n;for(;r!==null&&r.type&168;)n=r,r=n.parent;if(r===null)return e[Xt];if(Vn(r)){let{encapsulation:i}=t.data[r.directiveStart+r.componentOffset];if(i===an.None||i===an.Emulated)return null}return tn(r,e)}function q_(t,n,e){return vM(t,n,e)}function gM(t,n,e){return t.type&40?tn(t,e):null}var vM=gM,Fb;function nm(t,n,e,r){let i=W_(t,r,n),o=n[Ae],s=r.parent||n[xt],a=q_(s,r,n);if(i!=null)if(Array.isArray(e))for(let l=0;l<e.length;l++)Ab(o,i,e[l],a,!1);else Ab(o,i,e,a,!1);Fb!==void 0&&Fb(o,r,n,e,i)}function Ps(t,n){if(n!==null){let e=n.type;if(e&3)return tn(n,t);if(e&4)return mp(-1,t[n.index]);if(e&8){let r=n.child;if(r!==null)return Ps(t,r);{let i=t[n.index];return en(i)?mp(-1,i):Ut(i)}}else{if(e&128)return Ps(t,n.next);if(e&32)return Xp(n,t)()||Ut(t[n.index]);{let r=Y_(t,n);if(r!==null){if(Array.isArray(r))return r[0];let i=hr(t[It]);return Ps(i,r)}else return Ps(t,n.next)}}}return null}function Y_(t,n){if(n!==null){let r=t[It][xt],i=n.projection;return r.projection[i]}return null}function mp(t,n){let e=Fe+t+1;if(e<n.length){let r=n[e],i=r[V].firstChild;if(i!==null)return Ps(r,i)}return n[yr]}function rm(t,n,e,r,i,o,s){for(;e!=null;){let a=r[Pn];if(e.type===128){e=e.next;continue}let l=r[e.index],c=e.type;if(s&&n===0&&(l&&ao(Ut(l),r),e.flags|=2),!Kc(e))if(c&8)rm(t,n,e.child,r,i,o,!1),io(n,t,a,i,l,e,o,r);else if(c&32){let d=Xp(e,r),f;for(;f=d();)io(n,t,a,i,f,e,o,r);io(n,t,a,i,l,e,o,r)}else c&16?Z_(t,n,r,e,i,o):io(n,t,a,i,l,e,o,r);e=s?e.projectionNext:e.next}}function rd(t,n,e,r,i,o){rm(e,r,t.firstChild,n,i,o,!1)}function yM(t,n,e){let r=n[Ae],i=W_(t,e,n),o=e.parent||n[xt],s=q_(o,e,n);Z_(r,0,n,e,i,s)}function Z_(t,n,e,r,i,o){let s=e[It],l=s[xt].projection[r.projection];if(Array.isArray(l))for(let c=0;c<l.length;c++){let d=l[c];io(n,t,e[Pn],i,d,r,o,e)}else{let c=l,d=s[We];p_(r)&&(c.flags|=128),rm(t,n,c,d,i,o,!0)}}function bM(t,n,e,r,i,o,s){let a=r[yr],l=Ut(r);a!==l&&io(n,t,e,o,a,i,s);for(let c=Fe;c<r.length;c++){let d=r[c];rd(d[V],d,t,n,o,a)}}function _M(t,n,e,r,i){if(n)i?t.addClass(e,r):t.removeClass(e,r);else{let o=r.indexOf("-")===-1?void 0:ln.DashCase;i==null?t.removeStyle(e,r,o):(typeof i=="string"&&i.endsWith("!important")&&(i=i.slice(0,-10),o|=ln.Important),t.setStyle(e,r,i,o))}}function K_(t,n,e,r,i){let o=Dn(),s=r&2;try{br(-1),s&&n.length>Re&&U_(t,n,Re,!1);let a=s?me.TemplateUpdateStart:me.TemplateCreateStart;De(a,i,e),e(r,i)}finally{br(o);let a=s?me.TemplateUpdateEnd:me.TemplateCreateEnd;De(a,i,e)}}function id(t,n,e){SM(t,n,e),(e.flags&64)===64&&MM(t,n,e)}function Ys(t,n,e=tn){let r=n.localNames;if(r!==null){let i=n.index+1;for(let o=0;o<r.length;o+=2){let s=r[o+1],a=s===-1?e(n,t):t[s];t[i++]=a}}}function wM(t,n,e,r){let o=r.get(C_,D_)||e===an.ShadowDom||e===an.ExperimentalIsolatedShadowDom,s=t.selectRootElement(n,o);return DM(s),s}function DM(t){CM(t)}var CM=()=>null;function EM(t){return t==="class"?"className":t==="for"?"htmlFor":t==="formaction"?"formAction":t==="innerHtml"?"innerHTML":t==="readonly"?"readOnly":t==="tabindex"?"tabIndex":t}function xM(t,n,e,r,i,o){let s=n[V];if(am(t,s,n,e,r)){Vn(t)&&IM(n,t.index);return}t.type&3&&(e=EM(e)),Q_(t,n,e,r,i,o)}function Q_(t,n,e,r,i,o){if(t.type&3){let s=tn(t,n);r=o!=null?o(r,t.value||"",e):r,i.setProperty(s,e,r)}else t.type&12}function IM(t,n){let e=$t(n,t);e[Q]&16||(e[Q]|=64)}function SM(t,n,e){let r=e.directiveStart,i=e.directiveEnd;Vn(e)&&tM(n,e,t.data[r+e.componentOffset]),t.firstCreatePass||Pc(e,n);let o=e.initialInputs;for(let s=r;s<i;s++){let a=t.data[s],l=js(n,t,s,e);if(ao(l,n),o!==null&&kM(n,s-r,l,a,e,o),wn(a)){let c=$t(e.index,n);c[He]=js(n,t,s,e)}}}function MM(t,n,e){let r=e.directiveStart,i=e.directiveEnd,o=e.index,s=rb();try{br(o);for(let a=r;a<i;a++){let l=t.data[a],c=n[a];gc(a),(l.hostBindings!==null||l.hostVars!==0||l.hostAttrs!==null)&&TM(l,c)}}finally{br(-1),gc(s)}}function TM(t,n){t.hostBindings!==null&&t.hostBindings(1,n)}function im(t,n){let e=t.directiveRegistry,r=null;if(e)for(let i=0;i<e.length;i++){let o=e[i];V_(n,o.selectors,!1)&&(r??=[],wn(o)?r.unshift(o):r.push(o))}return r}function AM(t,n,e,r,i,o){let s=tn(t,n);RM(n[Ae],s,o,t.value,e,r,i)}function RM(t,n,e,r,i,o,s){if(o==null)t.removeAttribute(n,i,e);else{let a=s==null?ei(o):s(o,r||"",i);t.setAttribute(n,i,a,e)}}function kM(t,n,e,r,i,o){let s=o[n];if(s!==null)for(let a=0;a<s.length;a+=2){let l=s[a],c=s[a+1];hp(r,e,l,c)}}function om(t,n,e,r,i){let o=Re+e,s=n[V],a=i(s,n,t,r,e);n[o]=a,to(t,!0);let l=t.type===2;return l?(F_(n[Ae],a,t),(Zy()===0||Ji(t))&&ao(a,n),Ky()):ao(a,n),wc()&&(!l||!Kc(t))&&nm(s,n,a,t),t}function sm(t){let n=t;return Rh()?kh():(n=n.parent,to(n,!1)),n}function NM(t,n){let e=t[Pn];if(!e)return;let r;try{r=e.get(nn,null)}catch{r=null}r?.(n)}function am(t,n,e,r,i){let o=t.inputs?.[r],s=t.hostDirectiveInputs?.[r],a=!1;if(s)for(let l=0;l<s.length;l+=2){let c=s[l],d=s[l+1],f=n.data[c];hp(f,e[c],d,i),a=!0}if(o)for(let l of o){let c=e[l],d=n.data[l];hp(d,c,r,i),a=!0}return a}function OM(t,n){let e=$t(n,t),r=e[V];FM(r,e);let i=e[Xt];i!==null&&e[ni]===null&&(e[ni]=E_(i,e[Pn])),De(me.ComponentStart);try{lm(r,e,e[He])}finally{De(me.ComponentEnd,e[He])}}function FM(t,n){for(let e=n.length;e<t.blueprint.length;e++)n.push(t.blueprint[e])}function lm(t,n,e){yc(n);try{let r=t.viewQuery;r!==null&&ip(1,r,e);let i=t.template;i!==null&&K_(t,n,i,1,e),t.firstCreatePass&&(t.firstCreatePass=!1),n[_n]?.finishViewCreation(t),t.staticContentQueries&&x_(t,n),t.staticViewQueries&&ip(2,t.viewQuery,e);let o=t.components;o!==null&&PM(n,o)}catch(r){throw t.firstCreatePass&&(t.incompleteFirstPass=!0,t.firstCreatePass=!1),r}finally{n[Q]&=-5,bc()}}function PM(t,n){for(let e=0;e<n.length;e++)OM(t,n[e])}function Zs(t,n,e,r){let i=$(null);try{let o=n.tView,a=t[Q]&4096?4096:16,l=Kp(t,o,e,a,null,n,null,null,r?.injector??null,r?.embeddedViewInjector??null,r?.dehydratedView??null),c=t[n.index];l[gr]=c;let d=t[_n];return d!==null&&(l[_n]=d.createEmbeddedView(o)),lm(o,l,e),l}finally{$(i)}}function lo(t,n){return!n||n.firstChild===null||p_(t)}function Bs(t,n,e,r,i=!1){for(;e!==null;){if(e.type===128){e=i?e.projectionNext:e.next;continue}let o=n[e.index];o!==null&&r.push(Ut(o)),en(o)&&X_(o,r);let s=e.type;if(s&8)Bs(t,n,e.child,r);else if(s&32){let a=Xp(e,n),l;for(;l=a();)r.push(l)}else if(s&16){let a=Y_(n,e);if(Array.isArray(a))r.push(...a);else{let l=hr(n[It]);Bs(l[V],l,a,r,!0)}}e=i?e.projectionNext:e.next}return r}function X_(t,n){for(let e=Fe;e<t.length;e++){let r=t[e],i=r[V].firstChild;i!==null&&Bs(r[V],r,i,n)}t[yr]!==t[Xt]&&n.push(t[yr])}function J_(t){if(t[oi]!==null){for(let n of t[oi])n.impl.addSequence(n);t[oi].length=0}}var ew=[];function LM(t){return t[Lt]??jM(t)}function jM(t){let n=ew.pop()??Object.create(BM);return n.lView=t,n}function VM(t){t.lView[Lt]!==t&&(t.lView=null,ew.push(t))}var BM=U(m({},Pr),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{li(t.lView)},consumerOnSignalRead(){this.lView[Lt]=this}});function HM(t){let n=t[Lt]??Object.create(UM);return n.lView=t,n}var UM=U(m({},Pr),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{let n=hr(t.lView);for(;n&&!tw(n[V]);)n=hr(n);n&&Dh(n)},consumerOnSignalRead(){this.lView[Lt]=this}});function tw(t){return t.type!==2}function nw(t){if(t[fr]===null)return;let n=!0;for(;n;){let e=!1;for(let r of t[fr])r.dirty&&(e=!0,r.zone===null||Zone.current===r.zone?r.run():r.zone.run(()=>r.run()));n=e&&!!(t[Q]&8192)}}var $M=100;function rw(t,n=0){let r=t[Jt].rendererFactory,i=!1;i||r.begin?.();try{zM(t,n)}finally{i||r.end?.()}}function zM(t,n){let e=Nh();try{ws(!0),gp(t,n);let r=0;for(;Rs(t);){if(r===$M)throw new C(103,!1);r++,gp(t,1)}}finally{ws(e)}}function GM(t,n,e,r){if(ai(n))return;let i=n[Q],o=!1,s=!1;yc(n);let a=!0,l=null,c=null;o||(tw(t)?(c=LM(n),l=ar(c)):fl()===null?(a=!1,c=HM(n),l=ar(c)):n[Lt]&&(lr(n[Lt]),n[Lt]=null));try{wh(n),eb(t.bindingStartIndex),e!==null&&K_(t,n,e,2,r);let d=(i&3)===3;if(!o)if(d){let p=t.preOrderCheckHooks;p!==null&&Sc(n,p,null)}else{let p=t.preOrderHooks;p!==null&&Mc(n,p,0,null),$h(n,0)}if(s||WM(n),nw(n),iw(n,0),t.contentQueries!==null&&x_(t,n),!o)if(d){let p=t.contentCheckHooks;p!==null&&Sc(n,p)}else{let p=t.contentHooks;p!==null&&Mc(n,p,1),$h(n,1)}YM(t,n);let f=t.components;f!==null&&sw(n,f,0);let h=t.viewQuery;if(h!==null&&ip(2,h,r),!o)if(d){let p=t.viewCheckHooks;p!==null&&Sc(n,p)}else{let p=t.viewHooks;p!==null&&Mc(n,p,2),$h(n,2)}if(t.firstUpdatePass===!0&&(t.firstUpdatePass=!1),n[dc]){for(let p of n[dc])p();n[dc]=null}o||(J_(n),n[Q]&=-73)}catch(d){throw o||li(n),d}finally{c!==null&&(jr(c,l),a&&VM(c)),bc()}}function iw(t,n){for(let e=g_(t);e!==null;e=v_(e))for(let r=Fe;r<e.length;r++){let i=e[r];ow(i,n)}}function WM(t){for(let n=g_(t);n!==null;n=v_(n)){if(!(n[Q]&2))continue;let e=n[si];for(let r=0;r<e.length;r++){let i=e[r];Dh(i)}}}function qM(t,n,e){De(me.ComponentStart);let r=$t(n,t);try{ow(r,e)}finally{De(me.ComponentEnd,r[He])}}function ow(t,n){fc(t)&&gp(t,n)}function gp(t,n){let r=t[V],i=t[Q],o=t[Lt],s=!!(n===0&&i&16);if(s||=!!(i&64&&n===0),s||=!!(i&1024),s||=!!(o?.dirty&&ji(o)),s||=!1,o&&(o.dirty=!1),t[Q]&=-9217,s)GM(r,t,r.template,t[He]);else if(i&8192){let a=$(null);try{nw(t),iw(t,1);let l=r.components;l!==null&&sw(t,l,1),J_(t)}finally{$(a)}}}function sw(t,n,e){for(let r=0;r<n.length;r++)qM(t,n[r],e)}function YM(t,n){let e=t.hostBindingOpCodes;if(e!==null)try{for(let r=0;r<e.length;r++){let i=e[r];if(i<0)br(~i);else{let o=i,s=e[++r],a=e[++r];nb(s,o);let l=n[o];De(me.HostBindingsUpdateStart,l);try{a(2,l)}finally{De(me.HostBindingsUpdateEnd,l)}}}}finally{br(-1)}}function cm(t,n){let e=Nh()?64:1088;for(t[Jt].changeDetectionScheduler?.notify(n);t;){t[Q]|=e;let r=hr(t);if(eo(t)&&!r)return t;t=r}return null}function aw(t,n,e,r){return[t,!0,0,n,null,r,null,e,null,null]}function lw(t,n){let e=Fe+n;if(e<t.length)return t[e]}function Ks(t,n,e,r=!0){let i=n[V];if(ZM(i,n,t,e),r){let s=mp(e,t),a=n[Ae],l=a.parentNode(t[yr]);l!==null&&dM(i,t[xt],a,n,l,s)}let o=n[ni];o!==null&&o.firstChild!==null&&(o.firstChild=null)}function cw(t,n){let e=Hs(t,n);return e!==void 0&&nd(e[V],e),e}function Hs(t,n){if(t.length<=Fe)return;let e=Fe+n,r=t[e];if(r){let i=r[gr];i!==null&&i!==t&&tm(i,r),n>0&&(t[e-1][Ht]=r[Ht]);let o=Ms(t,Fe+n);cM(r[V],r);let s=o[_n];s!==null&&s.detachView(o[V]),r[We]=null,r[Ht]=null,r[Q]&=-129}return r}function ZM(t,n,e,r){let i=Fe+r,o=e.length;r>0&&(e[i-1][Ht]=n),r<o-Fe?(n[Ht]=e[i],ah(e,Fe+r,n)):(e.push(n),n[Ht]=null),n[We]=e;let s=n[gr];s!==null&&e!==s&&dw(s,n);let a=n[_n];a!==null&&a.insertView(t),hc(n),n[Q]|=128}function dw(t,n){let e=t[si],r=n[We];if(jn(r))t[Q]|=2;else{let i=r[We][It];n[It]!==i&&(t[Q]|=2)}e===null?t[si]=[n]:e.push(n)}var wr=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let n=this._lView,e=n[V];return Bs(e,n,e.firstChild,[])}constructor(n,e){this._lView=n,this._cdRefInjectingView=e}get context(){return this._lView[He]}set context(n){this._lView[He]=n}get destroyed(){return ai(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let n=this._lView[We];if(en(n)){let e=n[As],r=e?e.indexOf(this):-1;r>-1&&(Hs(n,r),Ms(e,r))}this._attachedToViewContainer=!1}nd(this._lView[V],this._lView)}onDestroy(n){Ch(this._lView,n)}markForCheck(){cm(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[Q]&=-129}reattach(){hc(this._lView),this._lView[Q]|=128}detectChanges(){this._lView[Q]|=1024,rw(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new C(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let n=eo(this._lView),e=this._lView[gr];e!==null&&!n&&tm(e,this._lView),G_(this._lView[V],this._lView)}attachToAppRef(n){if(this._attachedToViewContainer)throw new C(902,!1);this._appRef=n;let e=eo(this._lView),r=this._lView[gr];r!==null&&!e&&dw(r,this._lView),hc(this._lView)}};var dt=(()=>{class t{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=KM;constructor(e,r,i){this._declarationLView=e,this._declarationTContainer=r,this.elementRef=i}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,r){return this.createEmbeddedViewImpl(e,r)}createEmbeddedViewImpl(e,r,i){let o=Zs(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:r,dehydratedView:i});return new wr(o)}}return t})();function KM(){return od(tt(),Y())}function od(t,n){return t.type&4?new dt(n,t,fo(t,n)):null}function po(t,n,e,r,i){let o=t.data[n];if(o===null)o=QM(t,n,e,r,i),tb()&&(o.flags|=32);else if(o.type&64){o.type=e,o.value=r,o.attrs=i;let s=Qy();o.injectorIndex=s===null?-1:s.injectorIndex}return to(o,!0),o}function QM(t,n,e,r,i){let o=Ah(),s=Rh(),a=s?o:o&&o.parent,l=t.data[n]=JM(t,a,e,n,r,i);return XM(t,l,o,s),l}function XM(t,n,e,r){t.firstChild===null&&(t.firstChild=n),e!==null&&(r?e.child==null&&n.parent!==null&&(e.child=n):e.next===null&&(e.next=n,n.prev=e))}function JM(t,n,e,r,i,o){let s=n?n.injectorIndex:-1,a=0;return Sh()&&(a|=128),{type:e,index:r,insertBeforeIndex:null,injectorIndex:s,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,controlDirectiveIndex:-1,customControlIndex:-1,propertyBindings:null,flags:a,providerIndexes:0,value:i,namespace:Lh(),attrs:o,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:n,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function eT(t){let n=t[mh]??[],r=t[We][Ae],i=[];for(let o of n)o.data[w_]!==void 0?i.push(o):tT(o,r);t[mh]=i}function tT(t,n){let e=0,r=t.firstChild;if(r){let i=t.data[__];for(;e<i;){let o=r.nextSibling;O_(n,r,!1),r=o,e++}}}var nT=()=>null,rT=()=>null;function jc(t,n){return nT(t,n)}function uw(t,n,e){return rT(t,n,e)}var fw=class{},sd=class{},vp=class{resolveComponentFactory(n){throw new C(917,!1)}},Qs=class{static NULL=new vp},rt=class{},Ue=(()=>{class t{destroyNode=null;static __NG_ELEMENT_ID__=()=>iT()}return t})();function iT(){let t=Y(),n=tt(),e=$t(n.index,t);return(jn(e)?e:t)[Ae]}var hw=(()=>{class t{static \u0275prov=_({token:t,providedIn:"root",factory:()=>null})}return t})();var Ac={},yp=class{injector;parentInjector;constructor(n,e){this.injector=n,this.parentInjector=e}get(n,e,r){let i=this.injector.get(n,Ac,r);return i!==Ac||e===Ac?i:this.parentInjector.get(n,e,r)}};function Vc(t,n,e){let r=e?t.styles:null,i=e?t.classes:null,o=0;if(n!==null)for(let s=0;s<n.length;s++){let a=n[s];if(typeof a=="number")o=a;else if(o==1)i=nc(i,a);else if(o==2){let l=a,c=n[++s];r=nc(r,l+": "+c+";")}}e?t.styles=r:t.stylesWithoutHost=r,e?t.classes=i:t.classesWithoutHost=i}function Ne(t,n=0){let e=Y();if(e===null)return M(t,n);let r=tt();return d_(r,e,lt(t),n)}function dm(){let t="invalid";throw new Error(t)}function pw(t,n,e,r,i){let o=r===null?null:{"":-1},s=i(t,e);if(s!==null){let a=s,l=null,c=null;for(let d of s)if(d.resolveHostDirectives!==null){[a,l,c]=d.resolveHostDirectives(s);break}aT(t,n,e,a,o,l,c)}o!==null&&r!==null&&oT(e,r,o)}function oT(t,n,e){let r=t.localNames=[];for(let i=0;i<n.length;i+=2){let o=e[n[i+1]];if(o==null)throw new C(-301,!1);r.push(n[i],o)}}function sT(t,n,e){n.componentOffset=e,(t.components??=[]).push(n.index)}function aT(t,n,e,r,i,o,s){let a=r.length,l=null;for(let h=0;h<a;h++){let p=r[h];l===null&&wn(p)&&(l=p,sT(t,e,h)),ep(Pc(e,n),t,p.type)}hT(e,t.data.length,a),l?.viewProvidersResolver&&l.viewProvidersResolver(l);for(let h=0;h<a;h++){let p=r[h];p.providersResolver&&p.providersResolver(p)}let c=!1,d=!1,f=H_(t,n,a,null);a>0&&(e.directiveToIndex=new Map);for(let h=0;h<a;h++){let p=r[h];if(e.mergedAttrs=so(e.mergedAttrs,p.hostAttrs),cT(t,e,n,f,p),fT(f,p,i),s!==null&&s.has(p)){let[E,I]=s.get(p);e.directiveToIndex.set(p.type,[f,E+e.directiveStart,I+e.directiveStart])}else(o===null||!o.has(p))&&e.directiveToIndex.set(p.type,f);p.contentQueries!==null&&(e.flags|=4),(p.hostBindings!==null||p.hostAttrs!==null||p.hostVars!==0)&&(e.flags|=64);let y=p.type.prototype;!c&&(y.ngOnChanges||y.ngOnInit||y.ngDoCheck)&&((t.preOrderHooks??=[]).push(e.index),c=!0),!d&&(y.ngOnChanges||y.ngDoCheck)&&((t.preOrderCheckHooks??=[]).push(e.index),d=!0),f++}lT(t,e,o)}function lT(t,n,e){for(let r=n.directiveStart;r<n.directiveEnd;r++){let i=t.data[r];if(e===null||!e.has(i))Pb(0,n,i,r),Pb(1,n,i,r),jb(n,r,!1);else{let o=e.get(i);Lb(0,n,o,r),Lb(1,n,o,r),jb(n,r,!0)}}}function Pb(t,n,e,r){let i=t===0?e.inputs:e.outputs;for(let o in i)if(i.hasOwnProperty(o)){let s;t===0?s=n.inputs??={}:s=n.outputs??={},s[o]??=[],s[o].push(r),mw(n,o)}}function Lb(t,n,e,r){let i=t===0?e.inputs:e.outputs;for(let o in i)if(i.hasOwnProperty(o)){let s=i[o],a;t===0?a=n.hostDirectiveInputs??={}:a=n.hostDirectiveOutputs??={},a[s]??=[],a[s].push(r,o),mw(n,s)}}function mw(t,n){n==="class"?t.flags|=8:n==="style"&&(t.flags|=16)}function jb(t,n,e){let{attrs:r,inputs:i,hostDirectiveInputs:o}=t;if(r===null||!e&&i===null||e&&o===null||Yp(t)){t.initialInputs??=[],t.initialInputs.push(null);return}let s=null,a=0;for(;a<r.length;){let l=r[a];if(l===0){a+=4;continue}else if(l===5){a+=2;continue}else if(typeof l=="number")break;if(!e&&i.hasOwnProperty(l)){let c=i[l];for(let d of c)if(d===n){s??=[],s.push(l,r[a+1]);break}}else if(e&&o.hasOwnProperty(l)){let c=o[l];for(let d=0;d<c.length;d+=2)if(c[d]===n){s??=[],s.push(c[d+1],r[a+1]);break}}a+=2}t.initialInputs??=[],t.initialInputs.push(s)}function cT(t,n,e,r,i){t.data[r]=i;let o=i.factory||(i.factory=ur(i.type,!0)),s=new fi(o,wn(i),Ne,null);t.blueprint[r]=s,e[r]=s,dT(t,n,r,H_(t,e,i.hostVars,Rt),i)}function dT(t,n,e,r,i){let o=i.hostBindings;if(o){let s=t.hostBindingOpCodes;s===null&&(s=t.hostBindingOpCodes=[]);let a=~n.index;uT(s)!=a&&s.push(a),s.push(e,r,o)}}function uT(t){let n=t.length;for(;n>0;){let e=t[--n];if(typeof e=="number"&&e<0)return e}return 0}function fT(t,n,e){if(e){if(n.exportAs)for(let r=0;r<n.exportAs.length;r++)e[n.exportAs[r]]=t;wn(n)&&(e[""]=t)}}function hT(t,n,e){t.flags|=1,t.directiveStart=n,t.directiveEnd=n+e,t.providerIndexes=n}function um(t,n,e,r,i,o,s,a){let l=n[V],c=l.consts,d=jt(c,s),f=po(l,t,e,r,d);return o&&pw(l,n,f,jt(c,a),i),f.mergedAttrs=so(f.mergedAttrs,f.attrs),f.attrs!==null&&Vc(f,f.attrs,!1),f.mergedAttrs!==null&&Vc(f,f.mergedAttrs,!0),l.queries!==null&&l.queries.elementStart(l,f),f}function fm(t,n){t_(t,n),gh(n)&&t.queries.elementEnd(n)}function pT(t,n,e,r,i,o){let s=n.consts,a=jt(s,i),l=po(n,t,e,r,a);if(l.mergedAttrs=so(l.mergedAttrs,l.attrs),o!=null){let c=jt(s,o);l.localNames=[];for(let d=0;d<c.length;d+=2)l.localNames.push(c[d],-1)}return l.attrs!==null&&Vc(l,l.attrs,!1),l.mergedAttrs!==null&&Vc(l,l.mergedAttrs,!0),n.queries!==null&&n.queries.elementStart(n,l),l}function hm(t){return t!==null&&(typeof t=="function"||typeof t=="object")}function mT(t,n,e){return t[n]=e}function cn(t,n,e){if(e===Rt)return!1;let r=t[n];return Object.is(r,e)?!1:(t[n]=e,!0)}function gT(t,n,e,r){let i=cn(t,n,e);return cn(t,n+1,r)||i}function Rc(t,n,e){return function r(i){let o=r.__ngNativeEl__;o!==void 0&&dS(i,o);let s=Vn(t)?$t(t.index,n):n;cm(s,5);let a=n[He],l=Vb(n,a,e,i),c=r.__ngNextListenerFn__;for(;c;)l=Vb(n,a,c,i)&&l,c=c.__ngNextListenerFn__;return l}}function Vb(t,n,e,r){let i=$(null);try{return De(me.OutputStart,n,e),e(r)!==!1}catch(o){return NM(t,o),!1}finally{De(me.OutputEnd,n,e),$(i)}}function gw(t,n,e,r,i,o,s,a){let l=Ji(t),c=!1,d=null;if(!r&&l&&(d=yT(n,e,o,t.index)),d!==null){let f=d.__ngLastListenerFn__||d;f.__ngNextListenerFn__=s,d.__ngLastListenerFn__=s,c=!0}else{let f=tn(t,e),h=r?r(f):f;fS(e,h,o,a),r||(a.__ngNativeEl__=f);let p=i.listen(h,o,a);if(!vT(o)){let y=r?E=>r(Ut(E[t.index])):t.index;vw(y,n,e,o,a,p,!1)}}return c}function vT(t){return t.startsWith("animation")||t.startsWith("transition")}function yT(t,n,e,r){let i=t.cleanup;if(i!=null)for(let o=0;o<i.length-1;o+=2){let s=i[o];if(s===e&&i[o+1]===r){let a=n[Qi],l=i[o+2];return a&&a.length>l?a[l]:null}typeof s=="string"&&(o+=2)}return null}function vw(t,n,e,r,i,o,s){let a=n.firstCreatePass?xh(n):null,l=Eh(e),c=l.length;l.push(i,o),a&&a.push(r,t,c,(c+1)*(s?-1:1))}function Bb(t,n,e,r,i,o){let s=n[e],a=n[V],c=a.data[e].outputs[r],f=s[c].subscribe(o);vw(t.index,a,n,i,o,f,!0)}var bp=Symbol("BINDING");function yw(t){return t.debugInfo?.className||t.type.name||null}var Bc=class extends Qs{ngModule;constructor(n){super(),this.ngModule=n}resolveComponentFactory(n){let e=Fn(n);return new pi(e,this.ngModule)}};function bT(t){return Object.keys(t).map(n=>{let[e,r,i]=t[n],o={propName:e,templateName:n,isSignal:(r&Jc.SignalBased)!==0};return i&&(o.transform=i),o})}function _T(t){return Object.keys(t).map(n=>({propName:t[n],templateName:n}))}function wT(t,n,e){let r=n instanceof Ie?n:n?.injector;return r&&t.getStandaloneInjector!==null&&(r=t.getStandaloneInjector(r)||r),r?new yp(e,r):e}function DT(t){let n=t.get(rt,null);if(n===null)throw new C(407,!1);let e=t.get(hw,null),r=t.get(vn,null),i=t.get(un,null,{optional:!0});return{rendererFactory:n,sanitizer:e,changeDetectionScheduler:r,ngReflect:!1,tracingService:i}}function CT(t,n){let e=bw(t);return k_(n,e,e==="svg"?vh:e==="math"?$y:null)}function ET(t){if(t?.toLowerCase()==="script")throw new C(905,!1)}function bw(t){return(t.selectors[0][0]||"div").toLowerCase()}var pi=class extends sd{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=bT(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=_T(this.componentDef.outputs),this.cachedOutputs}constructor(n,e){super(),this.componentDef=n,this.ngModule=e,this.componentType=n.type,this.selector=QS(n.selectors),this.ngContentSelectors=n.ngContentSelectors??[],this.isBoundToModule=!!e}create(n,e,r,i,o,s){De(me.DynamicComponentStart);let a=$(null);try{let l=this.componentDef,c=wT(l,i||this.ngModule,n),d=DT(c),f=d.tracingService;return f&&f.componentCreate?f.componentCreate(yw(l),()=>this.createComponentRef(d,c,e,r,o,s)):this.createComponentRef(d,c,e,r,o,s)}finally{$(a)}}createComponentRef(n,e,r,i,o,s){let a=this.componentDef,l=xT(i,a,s,o),c=n.rendererFactory.createRenderer(null,a),d=i?wM(c,i,a.encapsulation,e):CT(a,c);ET(d?.tagName);let f=s?.some(Hb)||o?.some(y=>typeof y!="function"&&y.bindings.some(Hb)),h=Kp(null,l,null,512|B_(a),null,null,n,c,e,null,E_(d,e,!0));h[Re]=d,yc(h);let p=null;try{let y=um(Re,h,2,"#host",()=>l.directiveRegistry,!0,0);F_(c,d,y),ao(d,h),id(l,h,y),Bp(l,y,h),fm(l,y),r!==void 0&&ST(y,this.ngContentSelectors,r),p=$t(y.index,h),h[He]=p[He],lm(l,h,null)}catch(y){throw p!==null&&np(p),np(h),y}finally{De(me.DynamicComponentEnd),bc()}return new Hc(this.componentType,h,!!f)}};function xT(t,n,e,r){let i=t?["ng-version","21.2.18"]:XS(n.selectors[0]),o=null,s=null,a=0;if(e)for(let d of e)a+=d[bp].requiredVars,d.create&&(d.targetIdx=0,(o??=[]).push(d)),d.update&&(d.targetIdx=0,(s??=[]).push(d));if(r)for(let d=0;d<r.length;d++){let f=r[d];if(typeof f!="function")for(let h of f.bindings){a+=h[bp].requiredVars;let p=d+1;h.create&&(h.targetIdx=p,(o??=[]).push(h)),h.update&&(h.targetIdx=p,(s??=[]).push(h))}}let l=[n];if(r)for(let d of r){let f=typeof d=="function"?d:d.type,h=ih(f);l.push(h)}return Zp(0,null,IT(o,s),1,a,l,null,null,null,[i],null)}function IT(t,n){return!t&&!n?null:e=>{if(e&1&&t)for(let r of t)r.create();if(e&2&&n)for(let r of n)r.update()}}function Hb(t){let n=t[bp].kind;return n==="input"||n==="twoWay"}var Hc=class extends fw{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(n,e,r){super(),this._rootLView=e,this._hasInputBindings=r,this._tNode=uc(e[V],Re),this.location=fo(this._tNode,e),this.instance=$t(this._tNode.index,e)[He],this.hostView=this.changeDetectorRef=new wr(e,void 0),this.componentType=n}setInput(n,e){this._hasInputBindings;let r=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(n)&&Object.is(this.previousInputValues.get(n),e))return;let i=this._rootLView,o=am(r,i[V],i,n,e);this.previousInputValues.set(n,e);let s=$t(r.index,i);cm(s,1)}get injector(){return new ui(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(n){this.hostView.onDestroy(n)}};function ST(t,n,e){let r=t.projection=[];for(let i=0;i<n.length;i++){let o=e[i];r.push(o!=null&&o.length?Array.from(o):null)}}var ft=(()=>{class t{static __NG_ELEMENT_ID__=MT}return t})();function MT(){let t=tt();return _w(t,Y())}var _p=class t extends ft{_lContainer;_hostTNode;_hostLView;constructor(n,e,r){super(),this._lContainer=n,this._hostTNode=e,this._hostLView=r}get element(){return fo(this._hostTNode,this._hostLView)}get injector(){return new ui(this._hostTNode,this._hostLView)}get parentInjector(){let n=Pp(this._hostTNode,this._hostLView);if(i_(n)){let e=Oc(n,this._hostLView),r=Nc(n),i=e[V].data[r+8];return new ui(i,e)}else return new ui(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(n){let e=Ub(this._lContainer);return e!==null&&e[n]||null}get length(){return this._lContainer.length-Fe}createEmbeddedView(n,e,r){let i,o;typeof r=="number"?i=r:r!=null&&(i=r.index,o=r.injector);let s=jc(this._lContainer,n.ssrId),a=n.createEmbeddedViewImpl(e||{},o,s);return this.insertImpl(a,i,lo(this._hostTNode,s)),a}createComponent(n,e,r,i,o,s,a){let l=n&&!VI(n),c;if(l)c=e;else{let I=e||{};c=I.index,r=I.injector,i=I.projectableNodes,o=I.environmentInjector||I.ngModuleRef,s=I.directives,a=I.bindings}let d=l?n:new pi(Fn(n)),f=r||this.parentInjector;if(!o&&d.ngModule==null){let A=(l?f:this.parentInjector).get(Ie,null);A&&(o=A)}let h=Fn(d.componentType??{}),p=jc(this._lContainer,h?.id??null),y=p?.firstChild??null,E=d.create(f,i,y,o,s,a);return this.insertImpl(E.hostView,c,lo(this._hostTNode,p)),E}insert(n,e){return this.insertImpl(n,e,!0)}insertImpl(n,e,r){let i=n._lView;if(Gy(i)){let a=this.indexOf(n);if(a!==-1)this.detach(a);else{let l=i[We],c=new t(l,l[xt],l[We]);c.detach(c.indexOf(n))}}let o=this._adjustIndex(e),s=this._lContainer;return Ks(s,i,o,r),n.attachToViewContainerRef(),ah(Wh(s),o,n),n}move(n,e){return this.insert(n,e)}indexOf(n){let e=Ub(this._lContainer);return e!==null?e.indexOf(n):-1}remove(n){let e=this._adjustIndex(n,-1),r=Hs(this._lContainer,e);r&&(Ms(Wh(this._lContainer),e),nd(r[V],r))}detach(n){let e=this._adjustIndex(n,-1),r=Hs(this._lContainer,e);return r&&Ms(Wh(this._lContainer),e)!=null?new wr(r):null}_adjustIndex(n,e=0){return n??this.length+e}};function Ub(t){return t[As]}function Wh(t){return t[As]||(t[As]=[])}function _w(t,n){let e,r=n[t.index];return en(r)?e=r:(e=aw(r,n,null,t),n[t.index]=e,Qp(n,e)),AT(e,n,t,r),new _p(e,t,n)}function TT(t,n){let e=t[Ae],r=e.createComment(""),i=tn(n,t),o=e.parentNode(i);return Lc(e,o,r,e.nextSibling(i),!1),r}var AT=NT,RT=()=>!1;function kT(t,n,e){return RT(t,n,e)}function NT(t,n,e,r){if(t[yr])return;let i;e.type&8?i=Ut(r):i=TT(n,e),t[yr]=i}var wp=class t{queryList;matches=null;constructor(n){this.queryList=n}clone(){return new t(this.queryList)}setDirty(){this.queryList.setDirty()}},Dp=class t{queries;constructor(n=[]){this.queries=n}createEmbeddedView(n){let e=n.queries;if(e!==null){let r=n.contentQueries!==null?n.contentQueries[0]:e.length,i=[];for(let o=0;o<r;o++){let s=e.getByIndex(o),a=this.queries[s.indexInDeclarationView];i.push(a.clone())}return new t(i)}return null}insertView(n){this.dirtyQueriesWithMatches(n)}detachView(n){this.dirtyQueriesWithMatches(n)}finishViewCreation(n){this.dirtyQueriesWithMatches(n)}dirtyQueriesWithMatches(n){for(let e=0;e<this.queries.length;e++)mm(n,e).matches!==null&&this.queries[e].setDirty()}},Uc=class{flags;read;predicate;constructor(n,e,r=null){this.flags=e,this.read=r,typeof n=="string"?this.predicate=jT(n):this.predicate=n}},Cp=class t{queries;constructor(n=[]){this.queries=n}elementStart(n,e){for(let r=0;r<this.queries.length;r++)this.queries[r].elementStart(n,e)}elementEnd(n){for(let e=0;e<this.queries.length;e++)this.queries[e].elementEnd(n)}embeddedTView(n){let e=null;for(let r=0;r<this.length;r++){let i=e!==null?e.length:0,o=this.getByIndex(r).embeddedTView(n,i);o&&(o.indexInDeclarationView=r,e!==null?e.push(o):e=[o])}return e!==null?new t(e):null}template(n,e){for(let r=0;r<this.queries.length;r++)this.queries[r].template(n,e)}getByIndex(n){return this.queries[n]}get length(){return this.queries.length}track(n){this.queries.push(n)}},Ep=class t{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(n,e=-1){this.metadata=n,this._declarationNodeIndex=e}elementStart(n,e){this.isApplyingToNode(e)&&this.matchTNode(n,e)}elementEnd(n){this._declarationNodeIndex===n.index&&(this._appliesToNextNode=!1)}template(n,e){this.elementStart(n,e)}embeddedTView(n,e){return this.isApplyingToNode(n)?(this.crossesNgTemplate=!0,this.addMatch(-n.index,e),new t(this.metadata)):null}isApplyingToNode(n){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let e=this._declarationNodeIndex,r=n.parent;for(;r!==null&&r.type&8&&r.index!==e;)r=r.parent;return e===(r!==null?r.index:-1)}return this._appliesToNextNode}matchTNode(n,e){let r=this.metadata.predicate;if(Array.isArray(r))for(let i=0;i<r.length;i++){let o=r[i];this.matchTNodeWithReadOption(n,e,OT(e,o)),this.matchTNodeWithReadOption(n,e,Tc(e,n,o,!1,!1))}else r===dt?e.type&4&&this.matchTNodeWithReadOption(n,e,-1):this.matchTNodeWithReadOption(n,e,Tc(e,n,r,!1,!1))}matchTNodeWithReadOption(n,e,r){if(r!==null){let i=this.metadata.read;if(i!==null)if(i===P||i===ft||i===dt&&e.type&4)this.addMatch(e.index,-2);else{let o=Tc(e,n,i,!1,!1);o!==null&&this.addMatch(e.index,o)}else this.addMatch(e.index,r)}}addMatch(n,e){this.matches===null?this.matches=[n,e]:this.matches.push(n,e)}};function OT(t,n){let e=t.localNames;if(e!==null){for(let r=0;r<e.length;r+=2)if(e[r]===n)return e[r+1]}return null}function FT(t,n){return t.type&11?fo(t,n):t.type&4?od(t,n):null}function PT(t,n,e,r){return e===-1?FT(n,t):e===-2?LT(t,n,r):js(t,t[V],e,n)}function LT(t,n,e){if(e===P)return fo(n,t);if(e===dt)return od(n,t);if(e===ft)return _w(n,t)}function ww(t,n,e,r){let i=n[_n].queries[r];if(i.matches===null){let o=t.data,s=e.matches,a=[];for(let l=0;s!==null&&l<s.length;l+=2){let c=s[l];if(c<0)a.push(null);else{let d=o[c];a.push(PT(n,d,s[l+1],e.metadata.read))}}i.matches=a}return i.matches}function xp(t,n,e,r){let i=t.queries.getByIndex(e),o=i.matches;if(o!==null){let s=ww(t,n,i,e);for(let a=0;a<o.length;a+=2){let l=o[a];if(l>0)r.push(s[a/2]);else{let c=o[a+1],d=n[-l];for(let f=Fe;f<d.length;f++){let h=d[f];h[gr]===h[We]&&xp(h[V],h,c,r)}if(d[si]!==null){let f=d[si];for(let h=0;h<f.length;h++){let p=f[h];xp(p[V],p,c,r)}}}}}return r}function pm(t,n){return t[_n].queries[n].queryList}function Dw(t,n,e){let r=new sn((e&4)===4);return Yy(t,n,r,r.destroy),(n[_n]??=new Dp).queries.push(new wp(r))-1}function Cw(t,n,e){let r=ke();return r.firstCreatePass&&(xw(r,new Uc(t,n,e),-1),(n&2)===2&&(r.staticViewQueries=!0)),Dw(r,Y(),n)}function Ew(t,n,e,r){let i=ke();if(i.firstCreatePass){let o=tt();xw(i,new Uc(n,e,r),o.index),VT(i,t),(e&2)===2&&(i.staticContentQueries=!0)}return Dw(i,Y(),e)}function jT(t){return t.split(",").map(n=>n.trim())}function xw(t,n,e){t.queries===null&&(t.queries=new Cp),t.queries.track(new Ep(n,e))}function VT(t,n){let e=t.contentQueries||(t.contentQueries=[]),r=e.length?e[e.length-1]:-1;n!==r&&e.push(t.queries.length-1,n)}function mm(t,n){return t.queries.getByIndex(n)}function Iw(t,n){let e=t[V],r=mm(e,n);return r.crossesNgTemplate?xp(e,t,n,[]):ww(e,t,r,n)}function Sw(t,n,e){let r,i=ls(()=>{r._dirtyCounter();let o=BT(r,t);if(n&&o===void 0)throw new C(-951,!1);return o});return r=i[Ge],r._dirtyCounter=we(0),r._flatValue=void 0,i}function gm(t){return Sw(!0,!1,t)}function vm(t){return Sw(!0,!0,t)}function Mw(t,n){let e=t[Ge];e._lView=Y(),e._queryIndex=n,e._queryList=pm(e._lView,n),e._queryList.onDirty(()=>e._dirtyCounter.update(r=>r+1))}function BT(t,n){let e=t._lView,r=t._queryIndex;if(e===void 0||r===void 0||e[Q]&4)return n?void 0:vt;let i=pm(e,r),o=Iw(e,r);return i.reset(o,h_),n?i.first:i._changesDetected||t._flatValue===void 0?t._flatValue=i.toArray():t._flatValue}var En=class{},ad=class{};var $c=class extends En{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new Bc(this);constructor(n,e,r,i=!0){super(),this.ngModuleType=n,this._parent=e;let o=rh(n);this._bootstrapComponents=L_(o.bootstrap),this._r3Injector=jh(n,e,[{provide:En,useValue:this},{provide:Qs,useValue:this.componentFactoryResolver},...r],Es(n),new Set(["environment"])),i&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let n=this._r3Injector;!n.destroyed&&n.destroy(),this.destroyCbs.forEach(e=>e()),this.destroyCbs=null}onDestroy(n){this.destroyCbs.push(n)}},zc=class extends ad{moduleType;constructor(n){super(),this.moduleType=n}create(n){return new $c(this.moduleType,n,[])}};var Us=class extends En{injector;componentFactoryResolver=new Bc(this);instance=null;constructor(n){super();let e=new Xr([...n.providers,{provide:En,useValue:this},{provide:Qs,useValue:this.componentFactoryResolver}],n.parent||Ki(),n.debugName,new Set(["environment"]));this.injector=e,n.runEnvironmentInitializers&&e.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(n){this.injector.onDestroy(n)}};function Xs(t,n,e=null){return new Us({providers:t,parent:n,debugName:e,runEnvironmentInitializers:!0}).injector}var HT=(()=>{class t{_injector;cachedInjectors=new Map;constructor(e){this._injector=e}getOrCreateStandaloneInjector(e){if(!e.standalone)return null;if(!this.cachedInjectors.has(e)){let r=dh(!1,e.type),i=r.length>0?Xs([r],this._injector,""):null;this.cachedInjectors.set(e,i)}return this.cachedInjectors.get(e)}ngOnDestroy(){try{for(let e of this.cachedInjectors.values())e!==null&&e.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=_({token:t,providedIn:"environment",factory:()=>new t(M(Ie))})}return t})();function S(t){return zs(()=>{let n=Tw(t),e=U(m({},n),{decls:t.decls,vars:t.vars,template:t.template,consts:t.consts||null,ngContentSelectors:t.ngContentSelectors,onPush:t.changeDetection===jp.OnPush,directiveDefs:null,pipeDefs:null,dependencies:n.standalone&&t.dependencies||null,getStandaloneInjector:n.standalone?i=>i.get(HT).getOrCreateStandaloneInjector(e):null,getExternalStyles:null,signals:t.signals??!1,data:t.data||{},encapsulation:t.encapsulation||an.Emulated,styles:t.styles||vt,_:null,schemas:t.schemas||null,tView:null,id:""});n.standalone&&Dr("NgStandalone"),Aw(e);let r=t.dependencies;return e.directiveDefs=$b(r,UT),e.pipeDefs=$b(r,Ay),e.id=GT(e),e})}function UT(t){return Fn(t)||ih(t)}function L(t){return zs(()=>({type:t.type,bootstrap:t.bootstrap||vt,declarations:t.declarations||vt,imports:t.imports||vt,exports:t.exports||vt,transitiveCompileScopes:null,schemas:t.schemas||null,id:t.id||null}))}function $T(t,n){if(t==null)return mr;let e={};for(let r in t)if(t.hasOwnProperty(r)){let i=t[r],o,s,a,l;Array.isArray(i)?(a=i[0],o=i[1],s=i[2]??o,l=i[3]||null):(o=i,s=i,a=Jc.None,l=null),e[o]=[r,a,l],n[o]=s}return e}function zT(t){if(t==null)return mr;let n={};for(let e in t)t.hasOwnProperty(e)&&(n[t[e]]=e);return n}function q(t){return zs(()=>{let n=Tw(t);return Aw(n),n})}function ld(t){return{type:t.type,name:t.name,factory:null,pure:t.pure!==!1,standalone:t.standalone??!0,onDestroy:t.type.prototype.ngOnDestroy||null}}function Tw(t){let n={};return{type:t.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:t.hostBindings||null,hostVars:t.hostVars||0,hostAttrs:t.hostAttrs||null,contentQueries:t.contentQueries||null,declaredInputs:n,inputConfig:t.inputs||mr,exportAs:t.exportAs||null,standalone:t.standalone??!0,signals:t.signals===!0,selectors:t.selectors||vt,viewQuery:t.viewQuery||null,features:t.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,controlDef:null,inputs:$T(t.inputs,n),outputs:zT(t.outputs),debugInfo:null}}function Aw(t){t.features?.forEach(n=>n(t))}function $b(t,n){return t?()=>{let e=typeof t=="function"?t():t,r=[];for(let i of e){let o=n(i);o!==null&&r.push(o)}return r}:null}function GT(t){let n=0,e=typeof t.consts=="function"?"":t.consts,r=[t.selectors,t.ngContentSelectors,t.hostVars,t.hostAttrs,e,t.vars,t.decls,t.encapsulation,t.standalone,t.signals,t.exportAs,JSON.stringify(t.inputs),JSON.stringify(t.outputs),Object.getOwnPropertyNames(t.type.prototype),!!t.contentQueries,!!t.viewQuery];for(let o of r.join("|"))n=Math.imul(31,n)+o.charCodeAt(0)<<0;return n+=2147483648,"c"+n}function WT(t){return Object.getPrototypeOf(t.prototype).constructor}function Pe(t){let n=WT(t.type),e=!0,r=[t];for(;n&&n!==Function.prototype&&n!==Object.prototype;){let i,o=Object.hasOwn(n,Is)?n[Is]:void 0,s=Object.hasOwn(n,Ss)?n[Ss]:void 0;if(wn(t))i=o??s;else{if(o)throw new C(903,!1);i=s}if(i){if(e){r.push(i);let l=t;l.inputs=qh(t.inputs),l.declaredInputs=qh(t.declaredInputs),l.outputs=qh(t.outputs);let c=i.hostBindings;c&&QT(t,c);let d=i.viewQuery,f=i.contentQueries;if(d&&ZT(t,d),f&&KT(t,f),qT(t,i),Ty(t.outputs,i.outputs),wn(i)&&i.data.animation){let h=t.data;h.animation=(h.animation||[]).concat(i.data.animation)}}let a=i.features;if(a)for(let l=0;l<a.length;l++){let c=a[l];c&&c.ngInherit&&c(t),c===Pe&&(e=!1)}}n=Object.getPrototypeOf(n)}YT(r)}function qT(t,n){for(let e in n.inputs){if(!n.inputs.hasOwnProperty(e)||t.inputs.hasOwnProperty(e))continue;let r=n.inputs[e];r!==void 0&&(t.inputs[e]=r,t.declaredInputs[e]=n.declaredInputs[e])}}function YT(t){let n=0,e=null;for(let r=t.length-1;r>=0;r--){let i=t[r];i.hostVars=n+=i.hostVars,i.hostAttrs=so(i.hostAttrs,e=so(e,i.hostAttrs))}}function qh(t){return t===mr?{}:t===vt?[]:t}function ZT(t,n){let e=t.viewQuery;e?t.viewQuery=(r,i)=>{n(r,i),e(r,i)}:t.viewQuery=n}function KT(t,n){let e=t.contentQueries;e?t.contentQueries=(r,i,o)=>{n(r,i,o),e(r,i,o)}:t.contentQueries=n}function QT(t,n){let e=t.hostBindings;e?t.hostBindings=(r,i)=>{n(r,i),e(r,i)}:t.hostBindings=n}function Rw(t,n,e,r,i,o,s,a){if(e.firstCreatePass){t.mergedAttrs=so(t.mergedAttrs,t.attrs);let d=t.tView=Zp(2,t,i,o,s,e.directiveRegistry,e.pipeRegistry,null,e.schemas,e.consts,null);e.queries!==null&&(e.queries.template(e,t),d.queries=e.queries.embeddedTView(t))}a&&(t.flags|=a),to(t,!1);let l=JT(e,n,t,r);wc()&&nm(e,n,l,t),ao(l,n);let c=aw(l,n,l,t);n[r+Re]=c,Qp(n,c),kT(c,t,n)}function XT(t,n,e,r,i,o,s,a,l,c,d){let f=e+Re,h;return n.firstCreatePass?(h=po(n,f,4,s||null,a||null),pc()&&pw(n,t,h,jt(n.consts,c),im),t_(n,h)):h=n.data[f],Rw(h,t,n,e,r,i,o,l),Ji(h)&&id(n,t,h),c!=null&&Ys(t,h,d),h}function co(t,n,e,r,i,o,s,a,l,c,d){let f=e+Re,h;if(n.firstCreatePass){if(h=po(n,f,4,s||null,a||null),c!=null){let p=jt(n.consts,c);h.localNames=[];for(let y=0;y<p.length;y+=2)h.localNames.push(p[y],-1)}}else h=n.data[f];return Rw(h,t,n,e,r,i,o,l),c!=null&&Ys(t,h,d),h}function zt(t,n,e,r,i,o,s,a){let l=Y(),c=ke(),d=jt(c.consts,o);return XT(l,c,t,n,e,r,i,d,void 0,s,a),zt}function cd(t,n,e,r,i,o,s,a){let l=Y(),c=ke(),d=jt(c.consts,o);return co(l,c,t,n,e,r,i,d,void 0,s,a),cd}var JT=eA;function eA(t,n,e,r){return Ns(!0),n[Ae].createComment("")}var dd=(()=>{class t{log(e){console.log(e)}warn(e){console.warn(e)}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"platform"})}return t})();function Cr(t){return typeof t=="function"&&t[Ge]!==void 0}var ym=new g("");function Er(t){return!!t&&typeof t.then=="function"}function bm(t){return!!t&&typeof t.subscribe=="function"}var ud=new g("");function fd(t){return ct([{provide:ud,multi:!0,useValue:t}])}var _m=(()=>{class t{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((e,r)=>{this.resolve=e,this.reject=r});appInits=u(ud,{optional:!0})??[];injector=u(z);constructor(){}runInitializers(){if(this.initialized)return;let e=[];for(let i of this.appInits){let o=qe(this.injector,i);if(Er(o))e.push(o);else if(bm(o)){let s=new Promise((a,l)=>{o.subscribe({complete:a,error:l})});e.push(s)}}let r=()=>{this.done=!0,this.resolve()};Promise.all(e).then(()=>{r()}).catch(i=>{this.reject(i)}),e.length===0&&r(),this.initialized=!0}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),hd=new g("");function kw(){Df(()=>{let t="";throw new C(600,t)})}function Nw(t){return t.isBoundToModule}var tA=10;var ht=(()=>{class t{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=u(nn);afterRenderManager=u(td);zonelessEnabled=u(Os);rootEffectScheduler=u(Dc);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new D;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=u(Bn);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(T(e=>!e))}constructor(){u(un,{optional:!0})}whenStable(){let e;return new Promise(r=>{e=this.isStable.subscribe({next:i=>{i&&r()}})}).finally(()=>{e.unsubscribe()})}_injector=u(Ie);_rendererFactory=null;get injector(){return this._injector}bootstrap(e,r){return this.bootstrapImpl(e,r)}bootstrapImpl(e,r,i=z.NULL){return this._injector.get(O).run(()=>{De(me.BootstrapComponentStart);let s=e instanceof sd;if(!this._injector.get(_m).done){let y="";throw new C(405,y)}let l;s?l=e:l=this._injector.get(Qs).resolveComponentFactory(e),this.componentTypes.push(l.componentType);let c=Nw(l)?void 0:this._injector.get(En),d=r||l.selector,f=l.create(i,[],d,c),h=f.location.nativeElement,p=f.injector.get(ym,null);return p?.registerApplication(h),f.onDestroy(()=>{this.detachView(f.hostView),Ls(this.components,f),p?.unregisterApplication(h)}),this._loadComponent(f),De(me.BootstrapComponentEnd,f),f})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){De(me.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(ed.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw De(me.ChangeDetectionEnd),new C(101,!1);let e=$(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,$(e),this.afterTick.next(),De(me.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(rt,null,{optional:!0}));let e=0;for(;this.dirtyFlags!==0&&e++<tA;){De(me.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{De(me.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let e=!1;if(this.dirtyFlags&7){let r=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:i}of this.allViews){if(!r&&!Rs(i))continue;let o=r&&!this.zonelessEnabled?0:1;rw(i,o),e=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}e||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:e})=>Rs(e))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(e){let r=e;this._views.push(r),r.attachToAppRef(this)}detachView(e){let r=e;Ls(this._views,r),r.detachFromAppRef()}_loadComponent(e){this.attachView(e.hostView);try{this.tick()}catch(i){this.internalErrorHandler(i)}this.components.push(e),this._injector.get(hd,[]).forEach(i=>i(e))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(e=>e()),this._views.slice().forEach(e=>e.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(e){return this._destroyListeners.push(e),()=>Ls(this._destroyListeners,e)}destroy(){if(this._destroyed)throw new C(406,!1);let e=this._injector;e.destroy&&!e.destroyed&&e.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Ls(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function ue(t,n,e,r){let i=Y(),o=ci();if(cn(i,o,n)){let s=ke(),a=_c();AM(a,i,t,n,e,r)}return ue}var Ip=class{destroy(n){}updateValue(n,e){}swap(n,e){let r=Math.min(n,e),i=Math.max(n,e),o=this.detach(i);if(i-r>1){let s=this.detach(r);this.attach(r,o),this.attach(i,s)}else this.attach(r,o)}move(n,e){this.attach(e,this.detach(n))}};function Yh(t,n,e,r,i){return t===e&&Object.is(n,r)?1:Object.is(i(t,n),i(e,r))?-1:0}function nA(t,n,e,r){let i,o,s=0,a=t.length-1,l=void 0;if(Array.isArray(n)){$(r);let c=n.length-1;for($(null);s<=a&&s<=c;){let d=t.at(s),f=n[s],h=Yh(s,d,s,f,e);if(h!==0){h<0&&t.updateValue(s,f),s++;continue}let p=t.at(a),y=n[c],E=Yh(a,p,c,y,e);if(E!==0){E<0&&t.updateValue(a,y),a--,c--;continue}let I=e(s,d),A=e(a,p),ye=e(s,f);if(Object.is(ye,A)){let Je=e(c,y);Object.is(Je,I)?(t.swap(s,a),t.updateValue(a,y),c--,a--):t.move(a,s),t.updateValue(s,f),s++;continue}if(i??=new Gc,o??=Gb(t,s,a,e),Sp(t,i,s,ye))t.updateValue(s,f),s++,a++;else if(o.has(ye))i.set(I,t.detach(s)),a--;else{let Je=t.create(s,n[s]);t.attach(s,Je),s++,a++}}for(;s<=c;)zb(t,i,e,s,n[s]),s++}else if(n!=null){$(r);let c=n[Symbol.iterator]();$(null);let d=c.next();for(;!d.done&&s<=a;){let f=t.at(s),h=d.value,p=Yh(s,f,s,h,e);if(p!==0)p<0&&t.updateValue(s,h),s++,d=c.next();else{i??=new Gc,o??=Gb(t,s,a,e);let y=e(s,h);if(Sp(t,i,s,y))t.updateValue(s,h),s++,a++,d=c.next();else if(!o.has(y))t.attach(s,t.create(s,h)),s++,a++,d=c.next();else{let E=e(s,f);i.set(E,t.detach(s)),a--}}}for(;!d.done;)zb(t,i,e,t.length,d.value),d=c.next()}for(;s<=a;)t.destroy(t.detach(a--));i?.forEach(c=>{t.destroy(c)})}function Sp(t,n,e,r){return n!==void 0&&n.has(r)?(t.attach(e,n.get(r)),n.delete(r),!0):!1}function zb(t,n,e,r,i){if(Sp(t,n,r,e(r,i)))t.updateValue(r,i);else{let o=t.create(r,i);t.attach(r,o)}}function Gb(t,n,e,r){let i=new Set;for(let o=n;o<=e;o++)i.add(r(o,t.at(o)));return i}var Gc=class{kvMap=new Map;_vMap=void 0;has(n){return this.kvMap.has(n)}delete(n){if(!this.has(n))return!1;let e=this.kvMap.get(n);return this._vMap!==void 0&&this._vMap.has(e)?(this.kvMap.set(n,this._vMap.get(e)),this._vMap.delete(e)):this.kvMap.delete(n),!0}get(n){return this.kvMap.get(n)}set(n,e){if(this.kvMap.has(n)){let r=this.kvMap.get(n);this._vMap===void 0&&(this._vMap=new Map);let i=this._vMap;for(;i.has(r);)r=i.get(r);i.set(r,e)}else this.kvMap.set(n,e)}forEach(n){for(let[e,r]of this.kvMap)if(n(r,e),this._vMap!==void 0){let i=this._vMap;for(;i.has(r);)r=i.get(r),n(r,e)}}};function X(t,n,e,r,i,o,s,a){Dr("NgControlFlow");let l=Y(),c=ke(),d=jt(c.consts,o);return co(l,c,t,n,e,r,i,d,256,s,a),wm}function wm(t,n,e,r,i,o,s,a){Dr("NgControlFlow");let l=Y(),c=ke(),d=jt(c.consts,o);return co(l,c,t,n,e,r,i,d,512,s,a),wm}function J(t,n){Dr("NgControlFlow");let e=Y(),r=ci(),i=e[r]!==Rt?e[r]:-1,o=i!==-1?Wc(e,Re+i):void 0,s=0;if(cn(e,r,t)){let a=$(null);try{if(o!==void 0&&cw(o,s),t!==-1){let l=Re+t,c=Wc(e,l),d=Rp(e[V],l),f=uw(c,d,e),h=Zs(e,d,n,{dehydratedView:f});Ks(c,h,s,lo(d,f))}}finally{$(a)}}else if(o!==void 0){let a=lw(o,s);a!==void 0&&(a[He]=n)}}var Mp=class{lContainer;$implicit;$index;constructor(n,e,r){this.lContainer=n,this.$implicit=e,this.$index=r}get $count(){return this.lContainer.length-Fe}};function zn(t,n){return n}var Tp=class{hasEmptyBlock;trackByFn;liveCollection;constructor(n,e,r){this.hasEmptyBlock=n,this.trackByFn=e,this.liveCollection=r}};function Gn(t,n,e,r,i,o,s,a,l,c,d,f,h){Dr("NgControlFlow");let p=Y(),y=ke(),E=l!==void 0,I=Y(),A=a?s.bind(I[It][He]):s,ye=new Tp(E,A);I[Re+t]=ye,co(p,y,t+1,n,e,r,i,jt(y.consts,o),256),E&&co(p,y,t+2,l,c,d,f,jt(y.consts,h),512)}var Ap=class extends Ip{lContainer;hostLView;templateTNode;operationsCounter=void 0;needsIndexUpdate=!1;constructor(n,e,r){super(),this.lContainer=n,this.hostLView=e,this.templateTNode=r}get length(){return this.lContainer.length-Fe}at(n){return this.getLView(n)[He].$implicit}attach(n,e){let r=e[ni];this.needsIndexUpdate||=n!==this.length,Ks(this.lContainer,e,n,lo(this.templateTNode,r)),rA(this.lContainer,n)}detach(n){return this.needsIndexUpdate||=n!==this.length-1,iA(this.lContainer,n),oA(this.lContainer,n)}create(n,e){let r=jc(this.lContainer,this.templateTNode.tView.ssrId);return Zs(this.hostLView,this.templateTNode,new Mp(this.lContainer,e,n),{dehydratedView:r})}destroy(n){nd(n[V],n)}updateValue(n,e){this.getLView(n)[He].$implicit=e}reset(){this.needsIndexUpdate=!1}updateIndexes(){if(this.needsIndexUpdate)for(let n=0;n<this.length;n++)this.getLView(n)[He].$index=n}getLView(n){return sA(this.lContainer,n)}};function Wn(t){let n=$(null),e=Dn();try{let r=Y(),i=r[V],o=r[e],s=e+1,a=Wc(r,s);if(o.liveCollection===void 0){let c=Rp(i,s);o.liveCollection=new Ap(a,r,c)}else o.liveCollection.reset();let l=o.liveCollection;if(nA(l,t,o.trackByFn,n),l.updateIndexes(),o.hasEmptyBlock){let c=ci(),d=l.length===0;if(cn(r,c,d)){let f=e+2,h=Wc(r,f);if(d){let p=Rp(i,f),y=uw(h,p,r),E=Zs(r,p,void 0,{dehydratedView:y});Ks(h,E,0,lo(p,y))}else i.firstUpdatePass&&eT(h),cw(h,0)}}}finally{$(n)}}function Wc(t,n){return t[n]}function rA(t,n){if(t.length<=Fe)return;let e=Fe+n,r=t[e],i=r?r[vr]:void 0;if(r&&i&&i.detachedLeaveAnimationFns&&i.detachedLeaveAnimationFns.length>0){let o=r[Pn];aM(o,i),hi.delete(r[Ln]),i.detachedLeaveAnimationFns=void 0}}function iA(t,n){if(t.length<=Fe)return;let e=Fe+n,r=t[e],i=r?r[vr]:void 0;i&&i.leave&&i.leave.size>0&&(i.detachedLeaveAnimationFns=[])}function oA(t,n){return Hs(t,n)}function sA(t,n){return lw(t,n)}function Rp(t,n){return uc(t,n)}function fe(t,n,e){let r=Y(),i=ci();if(cn(r,i,n)){let o=ke(),s=_c();xM(s,r,t,n,r[Ae],e)}return fe}function kp(t,n,e,r,i){am(n,t,e,i?"class":"style",r)}function b(t,n,e,r){let i=Y(),o=i[V],s=t+Re,a=o.firstCreatePass?um(s,i,2,n,im,pc(),e,r):o.data[s];if(Vn(a)){let l=i[Jt].tracingService;if(l&&l.componentCreate){let c=o.data[a.directiveStart+a.componentOffset];return l.componentCreate(yw(c),()=>(Wb(t,n,i,a,r),b))}}return Wb(t,n,i,a,r),b}function Wb(t,n,e,r,i){if(om(r,e,t,n,Ow),Ji(r)){let o=e[V];id(o,e,r),Bp(o,r,e)}i!=null&&Ys(e,r)}function w(){let t=ke(),n=tt(),e=sm(n);return t.firstCreatePass&&fm(t,e),Mh(e)&&Th(),Ih(),e.classesWithoutHost!=null&&GI(e)&&kp(t,e,Y(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&WI(e)&&kp(t,e,Y(),e.stylesWithoutHost,!1),w}function he(t,n,e,r){return b(t,n,e,r),w(),he}function ot(t,n,e,r){let i=Y(),o=i[V],s=t+Re,a=o.firstCreatePass?pT(s,o,2,n,e,r):o.data[s];return om(a,i,t,n,Ow),r!=null&&Ys(i,a),ot}function pt(){let t=tt(),n=sm(t);return Mh(n)&&Th(),Ih(),pt}function kt(t,n,e,r){return ot(t,n,e,r),pt(),kt}var Ow=(t,n,e,r,i)=>(Ns(!0),k_(n[Ae],r,Lh()));function pd(t,n,e){let r=Y(),i=r[V],o=t+Re,s=i.firstCreatePass?um(o,r,8,"ng-container",im,pc(),n,e):i.data[o];if(om(s,r,t,"ng-container",aA),Ji(s)){let a=r[V];id(a,r,s),Bp(a,s,r)}return e!=null&&Ys(r,s),pd}function md(){let t=ke(),n=tt(),e=sm(n);return t.firstCreatePass&&fm(t,e),md}var aA=(t,n,e,r,i)=>(Ns(!0),jS(n[Ae],""));function Nt(){return Y()}function Gt(t,n,e){let r=Y(),i=ci();if(cn(r,i,n)){let o=ke(),s=_c();Q_(s,r,t,n,r[Ae],e)}return Gt}var Js="en-US";var lA=Js;function Fw(t){typeof t=="string"&&(lA=t.toLowerCase().replace(/_/g,"-"))}function ge(t,n,e){let r=Y(),i=ke(),o=tt();return cA(i,r,r[Ae],o,t,n,e),ge}function gd(t,n,e){let r=Y(),i=ke(),o=tt();return(o.type&3||e)&&gw(o,i,r,e,r[Ae],t,n,Rc(o,r,n)),gd}function cA(t,n,e,r,i,o,s){let a=!0,l=null;if((r.type&3||s)&&(l??=Rc(r,n,o),gw(r,t,n,s,e,i,o,l)&&(a=!1)),a){let c=r.outputs?.[i],d=r.hostDirectiveOutputs?.[i];if(d&&d.length)for(let f=0;f<d.length;f+=2){let h=d[f],p=d[f+1];l??=Rc(r,n,o),Bb(r,n,h,p,i,l)}if(c&&c.length)for(let f of c)l??=Rc(r,n,o),Bb(r,n,f,i,i,l)}}function H(t=1){return lb(t)}function dA(t,n){let e=null,r=WS(t);for(let i=0;i<n.length;i++){let o=n[i];if(o==="*"){e=i;continue}if(r===null?V_(t,o,!0):ZS(r,o))return i}return e}function le(t){let n=Y()[It][xt];if(!n.projection){let e=t?t.length:1,r=n.projection=Py(e,null),i=r.slice(),o=n.child;for(;o!==null;){if(o.type!==128){let s=t?dA(o,t):0;s!==null&&(i[s]?i[s].projectionNext=o:r[s]=o,i[s]=o)}o=o.next}}}function R(t,n=0,e,r,i,o){let s=Y(),a=ke(),l=r?t+1:null;l!==null&&co(s,a,l,r,i,o,null,e);let c=po(a,Re+t,16,null,e||null);c.projection===null&&(c.projection=n),kh();let f=!s[ni]||Sh();s[It][xt].projection[c.projection]===null&&l!==null?uA(s,a,l):f&&!Kc(c)&&yM(a,s,c)}function uA(t,n,e){let r=Re+e,i=n.data[r],o=t[r],s=jc(o,i.tView.ssrId),a=Zs(t,i,void 0,{dehydratedView:s});Ks(o,a,0,lo(i,s))}function yt(t,n,e,r){return Ew(t,n,e,r),yt}function Qe(t,n,e){return Cw(t,n,e),Qe}function Z(t){let n=Y(),e=ke(),r=vc();ks(r+1);let i=mm(e,r);if(t.dirty&&zy(n)===((i.metadata.flags&2)===2)){if(i.matches===null)t.reset([]);else{let o=Iw(n,r);t.reset(o,h_),t.notifyOnChanges()}return!0}return!1}function K(){return pm(Y(),vc())}function vd(t,n,e,r,i){return Mw(n,Ew(t,e,r,i)),vd}function yd(t,n,e,r){return Mw(t,Cw(n,e,r)),yd}function bd(t=1){ks(vc()+t)}function Wt(t){let n=Xy();return bh(n,Re+t)}function Ic(t,n){return t<<17|n<<2}function mi(t){return t>>17&32767}function fA(t){return(t&2)==2}function hA(t,n){return t&131071|n<<17}function Np(t){return t|2}function uo(t){return(t&131068)>>2}function Zh(t,n){return t&-131069|n<<2}function pA(t){return(t&1)===1}function Op(t){return t|1}function mA(t,n,e,r,i,o){let s=o?n.classBindings:n.styleBindings,a=mi(s),l=uo(s);t[r]=e;let c=!1,d;if(Array.isArray(e)){let f=e;d=f[1],(d===null||Zi(f,d)>0)&&(c=!0)}else d=e;if(i)if(l!==0){let h=mi(t[a+1]);t[r+1]=Ic(h,a),h!==0&&(t[h+1]=Zh(t[h+1],r)),t[a+1]=hA(t[a+1],r)}else t[r+1]=Ic(a,0),a!==0&&(t[a+1]=Zh(t[a+1],r)),a=r;else t[r+1]=Ic(l,0),a===0?a=r:t[l+1]=Zh(t[l+1],r),l=r;c&&(t[r+1]=Np(t[r+1])),qb(t,d,r,!0),qb(t,d,r,!1),gA(n,d,t,r,o),s=Ic(a,l),o?n.classBindings=s:n.styleBindings=s}function gA(t,n,e,r,i){let o=i?t.residualClasses:t.residualStyles;o!=null&&typeof n=="string"&&Zi(o,n)>=0&&(e[r+1]=Op(e[r+1]))}function qb(t,n,e,r){let i=t[e+1],o=n===null,s=r?mi(i):uo(i),a=!1;for(;s!==0&&(a===!1||o);){let l=t[s],c=t[s+1];vA(l,n)&&(a=!0,t[s+1]=r?Op(c):Np(c)),s=r?mi(c):uo(c)}a&&(t[e+1]=r?Np(i):Op(i))}function vA(t,n){return t===null||n==null||(Array.isArray(t)?t[1]:t)===n?!0:Array.isArray(t)&&typeof n=="string"?Zi(t,n)>=0:!1}var on={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function yA(t){return t.substring(on.key,on.keyEnd)}function bA(t){return _A(t),Pw(t,Lw(t,0,on.textEnd))}function Pw(t,n){let e=on.textEnd;return e===n?-1:(n=on.keyEnd=wA(t,on.key=n,e),Lw(t,n,e))}function _A(t){on.key=0,on.keyEnd=0,on.value=0,on.valueEnd=0,on.textEnd=t.length}function Lw(t,n,e){for(;n<e&&t.charCodeAt(n)<=32;)n++;return n}function wA(t,n,e){for(;n<e&&t.charCodeAt(n)>32;)n++;return n}function qn(t,n,e){return jw(t,n,e,!1),qn}function j(t,n){return jw(t,n,null,!0),j}function Mt(t){CA(TA,DA,t,!0)}function DA(t,n){for(let e=bA(n);e>=0;e=Pw(n,e))ac(t,yA(n),!0)}function jw(t,n,e,r){let i=Y(),o=ke(),s=mc(2);if(o.firstUpdatePass&&Bw(o,t,s,r),n!==Rt&&cn(i,s,n)){let a=o.data[Dn()];Hw(o,a,i,i[Ae],t,i[s+1]=RA(n,e),r,s)}}function CA(t,n,e,r){let i=ke(),o=mc(2);i.firstUpdatePass&&Bw(i,null,o,r);let s=Y();if(e!==Rt&&cn(s,o,e)){let a=i.data[Dn()];if(Uw(a,r)&&!Vw(i,o)){let l=r?a.classesWithoutHost:a.stylesWithoutHost;l!==null&&(e=nc(l,e||"")),kp(i,a,s,e,r)}else AA(i,a,s,s[Ae],s[o+1],s[o+1]=MA(t,n,e),r,o)}}function Vw(t,n){return n>=t.expandoStartIndex}function Bw(t,n,e,r){let i=t.data;if(i[e+1]===null){let o=i[Dn()],s=Vw(t,e);Uw(o,r)&&n===null&&!s&&(n=!1),n=EA(i,o,n,r),mA(i,o,n,e,s,r)}}function EA(t,n,e,r){let i=ib(t),o=r?n.residualClasses:n.residualStyles;if(i===null)(r?n.classBindings:n.styleBindings)===0&&(e=Kh(null,t,n,e,r),e=$s(e,n.attrs,r),o=null);else{let s=n.directiveStylingLast;if(s===-1||t[s]!==i)if(e=Kh(i,t,n,e,r),o===null){let l=xA(t,n,r);l!==void 0&&Array.isArray(l)&&(l=Kh(null,t,n,l[1],r),l=$s(l,n.attrs,r),IA(t,n,r,l))}else o=SA(t,n,r)}return o!==void 0&&(r?n.residualClasses=o:n.residualStyles=o),e}function xA(t,n,e){let r=e?n.classBindings:n.styleBindings;if(uo(r)!==0)return t[mi(r)]}function IA(t,n,e,r){let i=e?n.classBindings:n.styleBindings;t[mi(i)]=r}function SA(t,n,e){let r,i=n.directiveEnd;for(let o=1+n.directiveStylingLast;o<i;o++){let s=t[o].hostAttrs;r=$s(r,s,e)}return $s(r,n.attrs,e)}function Kh(t,n,e,r,i){let o=null,s=e.directiveEnd,a=e.directiveStylingLast;for(a===-1?a=e.directiveStart:a++;a<s&&(o=n[a],r=$s(r,o.hostAttrs,i),o!==t);)a++;return t!==null&&(e.directiveStylingLast=a),r}function $s(t,n,e){let r=e?1:2,i=-1;if(n!==null)for(let o=0;o<n.length;o++){let s=n[o];typeof s=="number"?i=s:i===r&&(Array.isArray(t)||(t=t===void 0?[]:["",t]),ac(t,s,e?!0:n[++o]))}return t===void 0?null:t}function MA(t,n,e){if(e==null||e==="")return vt;let r=[],i=dn(e);if(Array.isArray(i))for(let o=0;o<i.length;o++)t(r,i[o],!0);else if(i instanceof Set)for(let o of i)t(r,o,!0);else if(typeof i=="object")for(let o in i)i.hasOwnProperty(o)&&t(r,o,i[o]);else typeof i=="string"&&n(r,i);return r}function TA(t,n,e){let r=String(n);r!==""&&!r.includes(" ")&&ac(t,r,e)}function AA(t,n,e,r,i,o,s,a){i===Rt&&(i=vt);let l=0,c=0,d=0<i.length?i[0]:null,f=0<o.length?o[0]:null;for(;d!==null||f!==null;){let h=l<i.length?i[l+1]:void 0,p=c<o.length?o[c+1]:void 0,y=null,E;d===f?(l+=2,c+=2,h!==p&&(y=f,E=p)):f===null||d!==null&&d<f?(l+=2,y=d):(c+=2,y=f,E=p),y!==null&&Hw(t,n,e,r,y,E,s,a),d=l<i.length?i[l]:null,f=c<o.length?o[c]:null}}function Hw(t,n,e,r,i,o,s,a){if(!(n.type&3))return;let l=t.data,c=l[a+1],d=pA(c)?Yb(l,n,e,i,uo(c),s):void 0;if(!qc(d)){qc(o)||fA(c)&&(o=Yb(l,null,e,i,a,s));let f=yh(Dn(),e);_M(r,s,f,i,o)}}function Yb(t,n,e,r,i,o){let s=n===null,a;for(;i>0;){let l=t[i],c=Array.isArray(l),d=c?l[1]:l,f=d===null,h=e[i+1];h===Rt&&(h=f?vt:void 0);let p=f?lc(h,r):d===r?h:void 0;if(c&&!qc(p)&&(p=lc(l,r)),qc(p)&&(a=p,s))return a;let y=t[i+1];i=s?mi(y):uo(y)}if(n!==null){let l=o?n.residualClasses:n.residualStyles;l!=null&&(a=lc(l,r))}return a}function qc(t){return t!==void 0}function RA(t,n){return t==null||t===""||(typeof n=="string"?t=t+n:typeof t=="object"&&(t=Es(dn(t)))),t}function Uw(t,n){return(t.flags&(n?8:16))!==0}function x(t,n=""){let e=Y(),r=ke(),i=t+Re,o=r.firstCreatePass?po(r,i,1,n,null):r.data[i],s=kA(r,e,o,n);e[i]=s,wc()&&nm(r,e,s,o),to(o,!1)}var kA=(t,n,e,r)=>(Ns(!0),PS(n[Ae],r));function NA(t,n,e,r=""){return cn(t,ci(),e)?n+ei(e)+r:Rt}function OA(t,n,e,r,i,o=""){let s=Jy(),a=gT(t,s,e,i);return mc(2),a?n+ei(e)+r+ei(i)+o:Rt}function Se(t){return se("",t),Se}function se(t,n,e){let r=Y(),i=NA(r,t,n,e);return i!==Rt&&$w(r,Dn(),i),se}function ea(t,n,e,r,i){let o=Y(),s=OA(o,t,n,e,r,i);return s!==Rt&&$w(o,Dn(),s),ea}function $w(t,n,e){let r=yh(n,t);LS(t[Ae],r,e)}function Zb(t,n,e){let r=ke();r.firstCreatePass&&zw(n,r.data,r.blueprint,wn(t),e)}function zw(t,n,e,r,i){if(t=lt(t),Array.isArray(t))for(let o=0;o<t.length;o++)zw(t[o],n,e,r,i);else{let o=ke(),s=Y(),a=tt(),l=Qr(t)?t:lt(t.provide),c=fh(t),d=a.providerIndexes&1048575,f=a.directiveStart,h=a.providerIndexes>>20;if(Qr(t)||!t.multi){let p=new fi(c,i,Ne,null),y=Xh(l,n,i?d:d+h,f);y===-1?(ep(Pc(a,s),o,l),Qh(o,t,n.length),n.push(l),a.directiveStart++,a.directiveEnd++,i&&(a.providerIndexes+=1048576),e.push(p),s.push(p)):(e[y]=p,s[y]=p)}else{let p=Xh(l,n,d+h,f),y=Xh(l,n,d,d+h),E=p>=0&&e[p],I=y>=0&&e[y];if(i&&!I||!i&&!E){ep(Pc(a,s),o,l);let A=LA(i?PA:FA,e.length,i,r,c,t);!i&&I&&(e[y].providerFactory=A),Qh(o,t,n.length,0),n.push(l),a.directiveStart++,a.directiveEnd++,i&&(a.providerIndexes+=1048576),e.push(A),s.push(A)}else{let A=Gw(e[i?y:p],c,!i&&r);Qh(o,t,p>-1?p:y,A)}!i&&r&&I&&e[y].componentProviders++}}}function Qh(t,n,e,r){let i=Qr(n),o=By(n);if(i||o){let l=(o?lt(n.useClass):n).prototype.ngOnDestroy;if(l){let c=t.destroyHooks||(t.destroyHooks=[]);if(!i&&n.multi){let d=c.indexOf(e);d===-1?c.push(e,[r,l]):c[d+1].push(r,l)}else c.push(e,l)}}}function Gw(t,n,e){return e&&t.componentProviders++,t.multi.push(n)-1}function Xh(t,n,e,r){for(let i=e;i<r;i++)if(n[i]===t)return i;return-1}function FA(t,n,e,r,i){return Fp(this.multi,[])}function PA(t,n,e,r,i){let o=this.multi,s;if(this.providerFactory){let a=this.providerFactory.componentProviders,l=js(r,r[V],this.providerFactory.index,i);s=l.slice(0,a),Fp(o,s);for(let c=a;c<l.length;c++)s.push(l[c])}else s=[],Fp(o,s);return s}function Fp(t,n){for(let e=0;e<t.length;e++){let r=t[e];n.push(r())}return n}function LA(t,n,e,r,i,o){let s=new fi(t,e,Ne,null);return s.multi=[],s.index=n,s.componentProviders=0,Gw(s,i,r&&!e),s}function Oe(t,n){return e=>{e.providersResolver=(r,i)=>Zb(r,i?i(t):t,!1),n&&(e.viewProvidersResolver=(r,i)=>Zb(r,i?i(n):n,!0))}}function yi(t,n,e){return Ww(Y(),Oh(),t,n,e)}function jA(t,n){let e=t[n];return e===Rt?void 0:e}function Ww(t,n,e,r,i,o){let s=n+e;return cn(t,s,i)?mT(t,s+1,o?r.call(o,i):r(i)):jA(t,s+1)}function Yn(t,n){let e=ke(),r,i=t+Re;e.firstCreatePass?(r=VA(n,e.pipeRegistry),e.data[i]=r,r.onDestroy&&(e.destroyHooks??=[]).push(i,r.onDestroy)):r=e.data[i];let o=r.factory||(r.factory=ur(r.type,!0)),s,a=Et(Ne);try{let l=Fc(!1),c=o();return Fc(l),_h(e,Y(),i,c),c}finally{Et(a)}}function VA(t,n){if(n)for(let e=n.length-1;e>=0;e--){let r=n[e];if(t===r.name)return r}}function Zn(t,n,e){let r=t+Re,i=Y(),o=bh(i,r);return BA(i,r)?Ww(i,Oh(),n,o.transform,e,o):o.transform(e)}function BA(t,n){return t[V].data[n].pure}function Dm(t,n){return od(t,n)}var Yc=class{ngModuleFactory;componentFactories;constructor(n,e){this.ngModuleFactory=n,this.componentFactories=e}},Cm=(()=>{class t{compileModuleSync(e){return new zc(e)}compileModuleAsync(e){return Promise.resolve(this.compileModuleSync(e))}compileModuleAndAllComponentsSync(e){let r=this.compileModuleSync(e),i=rh(e),o=L_(i.declarations).reduce((s,a)=>{let l=Fn(a);return l&&s.push(new pi(l)),s},[]);return new Yc(r,o)}compileModuleAndAllComponentsAsync(e){return Promise.resolve(this.compileModuleAndAllComponentsSync(e))}clearCache(){}clearCacheFor(e){}getModuleId(e){}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var qw=(()=>{class t{applicationErrorHandler=u(nn);appRef=u(ht);taskService=u(Bn);ngZone=u(O);zonelessEnabled=u(Os);tracing=u(un,{optional:!0});zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new ce;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(Ds):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(u(Uh,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let e=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(e);return}this.switchToMicrotaskScheduler(),this.taskService.remove(e)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let e=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(e)})})}notify(e){if(!this.zonelessEnabled&&e===5)return;switch(e){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2;break}case 12:{this.appRef.dirtyFlags|=16;break}case 13:{this.appRef.dirtyFlags|=2;break}case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let r=this.useMicrotaskScheduler?fb:Vh;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>r(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>r(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(Ds+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let e=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(r){this.applicationErrorHandler(r)}finally{this.taskService.remove(e),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let e=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(e)}}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Yw(){return[{provide:vn,useExisting:qw},{provide:O,useClass:Cs},{provide:Os,useValue:!0}]}function HA(){return typeof $localize<"u"&&$localize.locale||Js}var _d=new g("",{factory:()=>u(_d,{optional:!0,skipSelf:!0})||HA()});function Xe(t){return Ey(t)}function Ot(t,n){return ls(t,n?.equal)}var tD=Symbol("InputSignalNode#UNSET"),iR=U(m({},cs),{transformFn:void 0,applyValueToInputSignal(t,n){Bi(t,n)}});function nD(t,n){let e=Object.create(iR);e.value=t,e.transformFn=n?.transform;function r(){if(Lr(e),e.value===tD){let i=null;throw new C(-950,i)}return e.value}return r[Ge]=e,r}var Kn=class{attributeName;constructor(n){this.attributeName=n}__NG_ELEMENT_ID__=()=>Lp(this.attributeName);toString(){return`HostAttributeToken ${this.attributeName}`}};function Zw(t,n){return nD(t,n)}function oR(t){return nD(tD,t)}var rD=(Zw.required=oR,Zw);function Kw(t,n){return gm(n)}function sR(t,n){return vm(n)}var ra=(Kw.required=sR,Kw);function Qw(t,n){return gm(n)}function aR(t,n){return vm(n)}var iD=(Qw.required=aR,Qw);var xm=new g(""),lR=new g("");function ta(t){return!t.moduleRef}function cR(t){let n=ta(t)?t.r3Injector:t.moduleRef.injector,e=n.get(O);return e.run(()=>{ta(t)?t.r3Injector.resolveInjectorInitializers():t.moduleRef.resolveInjectorInitializers();let r=n.get(nn),i;if(e.runOutsideAngular(()=>{i=e.onError.subscribe({next:r})}),ta(t)){let o=()=>n.destroy(),s=t.platformInjector.get(xm);s.add(o),n.onDestroy(()=>{i.unsubscribe(),s.delete(o)})}else{let o=()=>t.moduleRef.destroy(),s=t.platformInjector.get(xm);s.add(o),t.moduleRef.onDestroy(()=>{Ls(t.allPlatformModules,t.moduleRef),i.unsubscribe(),s.delete(o)})}return uR(r,e,()=>{let o=n.get(Bn),s=o.add(),a=n.get(_m);return a.runInitializers(),a.donePromise.then(()=>{let l=n.get(_d,Js);if(Fw(l||Js),!n.get(lR,!0))return ta(t)?n.get(ht):(t.allPlatformModules.push(t.moduleRef),t.moduleRef);if(ta(t)){let d=n.get(ht);return t.rootComponent!==void 0&&d.bootstrap(t.rootComponent),d}else return dR?.(t.moduleRef,t.allPlatformModules),t.moduleRef}).finally(()=>{o.remove(s)})})})}var dR;function uR(t,n,e){try{let r=e();return Er(r)?r.catch(i=>{throw n.runOutsideAngular(()=>t(i)),i}):r}catch(r){throw n.runOutsideAngular(()=>t(r)),r}}var wd=null;function fR(t=[],n){return z.create({name:n,providers:[{provide:Ts,useValue:"platform"},{provide:xm,useValue:new Set([()=>wd=null])},...t]})}function hR(t=[]){if(wd)return wd;let n=fR(t);return wd=n,kw(),pR(n),n}function pR(t){let n=t.get(Zc,null);qe(t,()=>{n?.forEach(e=>e())})}function Am(){return!1}var mR=1e4;var O5=mR-1e3;var Te=(()=>{class t{static __NG_ELEMENT_ID__=gR}return t})();function gR(t){return vR(tt(),Y(),(t&16)===16)}function vR(t,n,e){if(Vn(t)&&!e){let r=$t(t.index,n);return new wr(r,r)}else if(t.type&175){let r=n[It];return new wr(r,n)}return null}var Im=class{supports(n){return n instanceof Map||hm(n)}create(){return new Sm}},Sm=class{_records=new Map;_mapHead=null;_appendAfter=null;_previousMapHead=null;_changesHead=null;_changesTail=null;_additionsHead=null;_additionsTail=null;_removalsHead=null;get isDirty(){return this._additionsHead!==null||this._changesHead!==null||this._removalsHead!==null}forEachItem(n){let e;for(e=this._mapHead;e!==null;e=e._next)n(e)}forEachPreviousItem(n){let e;for(e=this._previousMapHead;e!==null;e=e._nextPrevious)n(e)}forEachChangedItem(n){let e;for(e=this._changesHead;e!==null;e=e._nextChanged)n(e)}forEachAddedItem(n){let e;for(e=this._additionsHead;e!==null;e=e._nextAdded)n(e)}forEachRemovedItem(n){let e;for(e=this._removalsHead;e!==null;e=e._nextRemoved)n(e)}diff(n){if(!n)n=new Map;else if(!(n instanceof Map||hm(n)))throw new C(900,!1);return this.check(n)?this:null}check(n){this._reset();let e=this._mapHead;if(this._appendAfter=null,this._forEach(n,(r,i)=>{if(e&&e.key===i)this._maybeAddToChanges(e,r),this._appendAfter=e,e=e._next;else{let o=this._getOrCreateRecordForKey(i,r);e=this._insertBeforeOrAppend(e,o)}}),e){e._prev&&(e._prev._next=null),this._removalsHead=e;for(let r=e;r!==null;r=r._nextRemoved)r===this._mapHead&&(this._mapHead=null),this._records.delete(r.key),r._nextRemoved=r._next,r.previousValue=r.currentValue,r.currentValue=null,r._prev=null,r._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(n,e){if(n){let r=n._prev;return e._next=n,e._prev=r,n._prev=e,r&&(r._next=e),n===this._mapHead&&(this._mapHead=e),this._appendAfter=n,n}return this._appendAfter?(this._appendAfter._next=e,e._prev=this._appendAfter):this._mapHead=e,this._appendAfter=e,null}_getOrCreateRecordForKey(n,e){if(this._records.has(n)){let i=this._records.get(n);this._maybeAddToChanges(i,e);let o=i._prev,s=i._next;return o&&(o._next=s),s&&(s._prev=o),i._next=null,i._prev=null,i}let r=new Mm(n);return this._records.set(n,r),r.currentValue=e,this._addToAdditions(r),r}_reset(){if(this.isDirty){let n;for(this._previousMapHead=this._mapHead,n=this._previousMapHead;n!==null;n=n._next)n._nextPrevious=n._next;for(n=this._changesHead;n!==null;n=n._nextChanged)n.previousValue=n.currentValue;for(n=this._additionsHead;n!=null;n=n._nextAdded)n.previousValue=n.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(n,e){Object.is(e,n.currentValue)||(n.previousValue=n.currentValue,n.currentValue=e,this._addToChanges(n))}_addToAdditions(n){this._additionsHead===null?this._additionsHead=this._additionsTail=n:(this._additionsTail._nextAdded=n,this._additionsTail=n)}_addToChanges(n){this._changesHead===null?this._changesHead=this._changesTail=n:(this._changesTail._nextChanged=n,this._changesTail=n)}_forEach(n,e){n instanceof Map?n.forEach(e):Object.keys(n).forEach(r=>e(n[r],r))}},Mm=class{key;previousValue=null;currentValue=null;_nextPrevious=null;_next=null;_prev=null;_nextAdded=null;_nextRemoved=null;_nextChanged=null;constructor(n){this.key=n}};function Xw(){return new Rm([new Im])}var Rm=(()=>{class t{static \u0275prov=_({token:t,providedIn:"root",factory:Xw});factories;constructor(e){this.factories=e}static create(e,r){if(r){let i=r.factories.slice();e=e.concat(i)}return new t(e)}static extend(e){return{provide:t,useFactory:()=>{let r=u(t,{optional:!0,skipSelf:!0});return t.create(e,r||Xw())}}}find(e){let r=this.factories.find(i=>i.supports(e));if(r)return r;throw new C(901,!1)}}return t})();function oD(t){let{rootComponent:n,appProviders:e,platformProviders:r,platformRef:i}=t;De(me.BootstrapApplicationStart);try{let o=i?.injector??hR(r),s=[Yw(),pb,...e||[]],a=new Us({providers:s,parent:o,debugName:"",runEnvironmentInitializers:!1});return cR({r3Injector:a.injector,platformInjector:o,rootComponent:n})}catch(o){return Promise.reject(o)}finally{De(me.BootstrapApplicationEnd)}}function ie(t){return typeof t=="boolean"?t:t!=null&&t!=="false"}function bi(t,n=NaN){return!isNaN(parseFloat(t))&&!isNaN(Number(t))?Number(t):n}var Em=Symbol("NOT_SET"),sD=new Set,yR=U(m({},cs),{kind:"afterRenderEffectPhase",consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,value:Em,cleanup:null,consumerMarkedDirty(){if(this.sequence.impl.executing){if(this.sequence.lastPhase===null||this.sequence.lastPhase<this.phase)return;this.sequence.erroredOrDestroyed=!0}this.sequence.scheduler.notify(7)},phaseFn(t){if(this.sequence.lastPhase=this.phase,!this.dirty)return this.signal;if(this.dirty=!1,this.value!==Em&&!ji(this))return this.signal;try{for(let i of this.cleanup??sD)i()}finally{this.cleanup?.clear()}let n=[];t!==void 0&&n.push(t),n.push(this.registerCleanupFn);let e=ar(this),r;try{r=this.userFn.apply(null,n)}finally{jr(this,e)}return(this.value===Em||!this.equal(this.value,r))&&(this.value=r,this.version++),this.signal}}),Tm=class extends Vs{scheduler;lastPhase=null;nodes=[void 0,void 0,void 0,void 0];onDestroyFns=null;constructor(n,e,r,i,o,s=null){super(n,[void 0,void 0,void 0,void 0],r,!1,o.get(nt),s),this.scheduler=i;for(let a of Jp){let l=e[a];if(l===void 0)continue;let c=Object.create(yR);c.sequence=this,c.phase=a,c.userFn=l,c.dirty=!0,c.signal=()=>(Lr(c),c.value),c.signal[Ge]=c,c.registerCleanupFn=d=>(c.cleanup??=new Set).add(d),this.nodes[a]=c,this.hooks[a]=d=>c.phaseFn(d)}}afterRun(){super.afterRun(),this.lastPhase=null}destroy(){if(this.onDestroyFns!==null)for(let n of this.onDestroyFns)n();super.destroy();for(let n of this.nodes)if(n)try{for(let e of n.cleanup??sD)e()}finally{lr(n)}}};function aD(t,n){let e=n?.injector??u(z),r=e.get(vn),i=e.get(td),o=e.get(un,null,{optional:!0});i.impl??=e.get(em);let s=t;typeof s=="function"&&(s={mixedReadWrite:t});let a=e.get(no,null,{optional:!0}),l=new Tm(i.impl,[s.earlyRead,s.write,s.mixedReadWrite,s.read],a?.view,r,e,o?.snapshot(null));return i.impl.register(l),l}function Dd(t,n){let e=Fn(t),r=n.elementInjector||Ki();return new pi(e).create(r,n.projectableNodes,n.hostElement,n.environmentInjector,n.directives,n.bindings)}var lD=null;function Qn(){return lD}function km(t){lD??=t}var ia=class{},mo=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:()=>u(cD),providedIn:"platform"})}return t})();var cD=(()=>{class t extends mo{_location;_history;_doc=u(B);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Qn().getBaseHref(this._doc)}onPopState(e){let r=Qn().getGlobalEventTarget(this._doc,"window");return r.addEventListener("popstate",e,!1),()=>r.removeEventListener("popstate",e)}onHashChange(e){let r=Qn().getGlobalEventTarget(this._doc,"window");return r.addEventListener("hashchange",e,!1),()=>r.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,r,i){this._history.pushState(e,r,i)}replaceState(e,r,i){this._history.replaceState(e,r,i)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function fD(t,n){return t?n?t.endsWith("/")?n.startsWith("/")?t+n.slice(1):t+n:n.startsWith("/")?t+n:`${t}/${n}`:t:n}function dD(t){let n=t.search(/#|\?|$/);return t[n-1]==="/"?t.slice(0,n-1)+t.slice(n):t}function xr(t){return t&&t[0]!=="?"?`?${t}`:t}var Cd=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:()=>u(_R),providedIn:"root"})}return t})(),bR=new g(""),_R=(()=>{class t extends Cd{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,r){super(),this._platformLocation=e,this._baseHref=r??this._platformLocation.getBaseHrefFromDOM()??u(B).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return fD(this._baseHref,e)}path(e=!1){let r=this._platformLocation.pathname+xr(this._platformLocation.search),i=this._platformLocation.hash;return i&&e?`${r}${i}`:r}pushState(e,r,i,o){let s=this.prepareExternalUrl(i+xr(o));this._platformLocation.pushState(e,r,s)}replaceState(e,r,i,o){let s=this.prepareExternalUrl(i+xr(o));this._platformLocation.replaceState(e,r,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(r){return new(r||t)(M(mo),M(bR,8))};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ir=(()=>{class t{_subject=new D;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let r=this._locationStrategy.getBaseHref();this._basePath=CR(dD(uD(r))),this._locationStrategy.onPopState(i=>{this._subject.next({url:this.path(!0),pop:!0,state:i.state,type:i.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,r=""){return this.path()==this.normalize(e+xr(r))}normalize(e){return t.stripTrailingSlash(DR(this._basePath,uD(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,r="",i=null){this._locationStrategy.pushState(i,"",e,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+xr(r)),i)}replaceState(e,r="",i=null){this._locationStrategy.replaceState(i,"",e,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+xr(r)),i)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(r=>{this._notifyUrlChangeListeners(r.url,r.state)}),()=>{let r=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(r,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",r){this._urlChangeListeners.forEach(i=>i(e,r))}subscribe(e,r,i){return this._subject.subscribe({next:e,error:r??void 0,complete:i??void 0})}static normalizeQueryParams=xr;static joinWithSlash=fD;static stripTrailingSlash=dD;static \u0275fac=function(r){return new(r||t)(M(Cd))};static \u0275prov=_({token:t,factory:()=>wR(),providedIn:"root"})}return t})();function wR(){return new Ir(M(Cd))}function DR(t,n){if(!t||!n.startsWith(t))return n;let e=n.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:n}function uD(t){return t.replace(/\/index\.html$/,"")}function CR(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var Nm=/\s+/,hD=[],Om=(()=>{class t{_ngEl;_renderer;initialClasses=hD;rawClass;stateMap=new Map;constructor(e,r){this._ngEl=e,this._renderer=r}set klass(e){this.initialClasses=e!=null?e.trim().split(Nm):hD}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split(Nm):e}ngDoCheck(){for(let r of this.initialClasses)this._updateState(r,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let r of e)this._updateState(r,!0);else if(e!=null)for(let r of Object.keys(e))this._updateState(r,!!e[r]);this._applyStateDiff()}_updateState(e,r){let i=this.stateMap.get(e);i!==void 0?(i.enabled!==r&&(i.changed=!0,i.enabled=r),i.touched=!0):this.stateMap.set(e,{enabled:r,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let r=e[0],i=e[1];i.changed?(this._toggleClass(r,i.enabled),i.changed=!1):i.touched||(i.enabled&&this._toggleClass(r,!1),this.stateMap.delete(r)),i.touched=!1}}_toggleClass(e,r){e=e.trim(),e.length>0&&e.split(Nm).forEach(i=>{r?this._renderer.addClass(this._ngEl.nativeElement,i):this._renderer.removeClass(this._ngEl.nativeElement,i)})}static \u0275fac=function(r){return new(r||t)(Ne(P),Ne(Ue))};static \u0275dir=q({type:t,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return t})();var Fm=(()=>{class t{_ngEl;_differs;_renderer;_ngStyle=null;_differ=null;constructor(e,r,i){this._ngEl=e,this._differs=r,this._renderer=i}set ngStyle(e){this._ngStyle=e,!this._differ&&e&&(this._differ=this._differs.find(e).create())}ngDoCheck(){if(this._differ){let e=this._differ.diff(this._ngStyle);e&&this._applyChanges(e)}}_setStyle(e,r){let[i,o]=e.split("."),s=i.indexOf("-")===-1?void 0:ln.DashCase;r!=null?this._renderer.setStyle(this._ngEl.nativeElement,i,o?`${r}${o}`:r,s):this._renderer.removeStyle(this._ngEl.nativeElement,i,s)}_applyChanges(e){e.forEachRemovedItem(r=>this._setStyle(r.key,null)),e.forEachAddedItem(r=>this._setStyle(r.key,r.currentValue)),e.forEachChangedItem(r=>this._setStyle(r.key,r.currentValue))}static \u0275fac=function(r){return new(r||t)(Ne(P),Ne(Rm),Ne(Ue))};static \u0275dir=q({type:t,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}})}return t})(),Pm=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=u(z);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let r=this._viewContainerRef;if(this._viewRef&&r.remove(r.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let i=this._createContextForwardProxy();this._viewRef=r.createEmbeddedView(this.ngTemplateOutlet,i,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,r,i)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,r,i):!1,get:(e,r,i)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,r,i)}})}static \u0275fac=function(r){return new(r||t)(Ne(ft))};static \u0275dir=q({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[ut]})}return t})();var Sr=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=L({type:t});static \u0275inj=F({})}return t})();function oa(t,n){n=encodeURIComponent(n);for(let e of t.split(";")){let r=e.indexOf("="),[i,o]=r==-1?[e,""]:[e.slice(0,r),e.slice(r+1)];if(i.trim()===n)return decodeURIComponent(o)}return null}var _i=class{};var Lm="browser";function pD(t){return t===Lm}var sa=class{_doc;constructor(n){this._doc=n}manager},Ed=(()=>{class t extends sa{constructor(e){super(e)}supports(e){return!0}addEventListener(e,r,i,o){return e.addEventListener(r,i,o),()=>this.removeEventListener(e,r,i,o)}removeEventListener(e,r,i,o){return e.removeEventListener(r,i,o)}static \u0275fac=function(r){return new(r||t)(M(B))};static \u0275prov=_({token:t,factory:t.\u0275fac})}return t})(),Sd=new g(""),Hm=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,r){this._zone=r,e.forEach(s=>{s.manager=this});let i=e.filter(s=>!(s instanceof Ed));this._plugins=i.slice().reverse();let o=e.find(s=>s instanceof Ed);o&&this._plugins.push(o)}addEventListener(e,r,i,o){return this._findPluginFor(r).addEventListener(e,r,i,o)}getZone(){return this._zone}_findPluginFor(e){let r=this._eventNameToPlugin.get(e);if(r)return r;if(r=this._plugins.find(o=>o.supports(e)),!r)throw new C(5101,!1);return this._eventNameToPlugin.set(e,r),r}static \u0275fac=function(r){return new(r||t)(M(Sd),M(O))};static \u0275prov=_({token:t,factory:t.\u0275fac})}return t})(),jm="ng-app-id";function mD(t){for(let n of t)n.remove()}function gD(t,n){let e=n.createElement("style");return e.textContent=t,e}function SR(t,n,e,r){let i=t.head?.querySelectorAll(`style[${jm}="${n}"],link[${jm}="${n}"]`);if(i)for(let o of i)o.removeAttribute(jm),o instanceof HTMLLinkElement?r.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function Bm(t,n){let e=n.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var Um=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,r,i,o={}){this.doc=e,this.appId=r,this.nonce=i,SR(e,r,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,r){for(let i of e)this.addUsage(i,this.inline,gD);r?.forEach(i=>this.addUsage(i,this.external,Bm))}removeStyles(e,r){for(let i of e)this.removeUsage(i,this.inline);r?.forEach(i=>this.removeUsage(i,this.external))}addUsage(e,r,i){let o=r.get(e);o?o.usage++:r.set(e,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,i(e,this.doc)))})}removeUsage(e,r){let i=r.get(e);i&&(i.usage--,i.usage<=0&&(mD(i.elements),r.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])mD(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[r,{elements:i}]of this.inline)i.push(this.addElement(e,gD(r,this.doc)));for(let[r,{elements:i}]of this.external)i.push(this.addElement(e,Bm(r,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,r){return this.nonce&&r.setAttribute("nonce",this.nonce),e.appendChild(r)}static \u0275fac=function(r){return new(r||t)(M(B),M(ho),M(vi,8),M(gi))};static \u0275prov=_({token:t,factory:t.\u0275fac})}return t})(),Vm={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},$m=/%COMP%/g;var yD="%COMP%",MR=`_nghost-${yD}`,TR=`_ngcontent-${yD}`,AR=!0,RR=new g("",{factory:()=>AR});function kR(t){return TR.replace($m,t)}function NR(t){return MR.replace($m,t)}function bD(t,n){return n.map(e=>e.replace($m,t))}var zm=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,r,i,o,s,a,l=null,c=null){this.eventManager=e,this.sharedStylesHost=r,this.appId=i,this.removeStylesOnCompDestroy=o,this.doc=s,this.ngZone=a,this.nonce=l,this.tracingService=c,this.defaultRenderer=new aa(e,s,a,this.tracingService)}createRenderer(e,r){if(!e||!r)return this.defaultRenderer;let i=this.getOrCreateRenderer(e,r);return i instanceof Id?i.applyToHost(e):i instanceof la&&i.applyStyles(),i}getOrCreateRenderer(e,r){let i=this.rendererByCompId,o=i.get(r.id);if(!o){let s=this.doc,a=this.ngZone,l=this.eventManager,c=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,f=this.tracingService;switch(r.encapsulation){case an.Emulated:o=new Id(l,c,r,this.appId,d,s,a,f);break;case an.ShadowDom:return new xd(l,e,r,s,a,this.nonce,f,c);case an.ExperimentalIsolatedShadowDom:return new xd(l,e,r,s,a,this.nonce,f);default:o=new la(l,c,r,d,s,a,f);break}i.set(r.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(r){return new(r||t)(M(Hm),M(Um),M(ho),M(RR),M(B),M(O),M(vi),M(un,8))};static \u0275prov=_({token:t,factory:t.\u0275fac})}return t})(),aa=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,e,r,i){this.eventManager=n,this.doc=e,this.ngZone=r,this.tracingService=i}destroy(){}destroyNode=null;createElement(n,e){return e?this.doc.createElementNS(Vm[e]||e,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,e){(vD(n)?n.content:n).appendChild(e)}insertBefore(n,e,r){n&&(vD(n)?n.content:n).insertBefore(e,r)}removeChild(n,e){e.remove()}selectRootElement(n,e){let r=typeof n=="string"?this.doc.querySelector(n):n;if(!r)throw new C(-5104,!1);return e||(r.textContent=""),r}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,e,r,i){if(i){e=i+":"+e;let o=Vm[i];o?n.setAttributeNS(o,e,r):n.setAttribute(e,r)}else n.setAttribute(e,r)}removeAttribute(n,e,r){if(r){let i=Vm[r];i?n.removeAttributeNS(i,e):n.removeAttribute(`${r}:${e}`)}else n.removeAttribute(e)}addClass(n,e){n.classList.add(e)}removeClass(n,e){n.classList.remove(e)}setStyle(n,e,r,i){i&(ln.DashCase|ln.Important)?n.style.setProperty(e,r,i&ln.Important?"important":""):n.style[e]=r}removeStyle(n,e,r){r&ln.DashCase?n.style.removeProperty(e):n.style[e]=""}setProperty(n,e,r){n!=null&&(n[e]=r)}setValue(n,e){n.nodeValue=e}listen(n,e,r,i){if(typeof n=="string"&&(n=Qn().getGlobalEventTarget(this.doc,n),!n))throw new C(5102,!1);let o=this.decoratePreventDefault(r);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(n,e,o)),this.eventManager.addEventListener(n,e,o,i)}decoratePreventDefault(n){return e=>{if(e==="__ngUnwrap__")return n;n(e)===!1&&e.preventDefault()}}};function vD(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var xd=class extends aa{hostEl;sharedStylesHost;shadowRoot;constructor(n,e,r,i,o,s,a,l){super(n,i,o,a),this.hostEl=e,this.sharedStylesHost=l,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let c=r.styles;c=bD(r.id,c);for(let f of c){let h=document.createElement("style");s&&h.setAttribute("nonce",s),h.textContent=f,this.shadowRoot.appendChild(h)}let d=r.getExternalStyles?.();if(d)for(let f of d){let h=Bm(f,i);s&&h.setAttribute("nonce",s),this.shadowRoot.appendChild(h)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,e){return super.appendChild(this.nodeOrShadowRoot(n),e)}insertBefore(n,e,r){return super.insertBefore(this.nodeOrShadowRoot(n),e,r)}removeChild(n,e){return super.removeChild(null,e)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},la=class extends aa{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,e,r,i,o,s,a,l){super(n,o,s,a),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=i;let c=r.styles;this.styles=l?bD(l,c):c,this.styleUrls=r.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&hi.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Id=class extends la{contentAttr;hostAttr;constructor(n,e,r,i,o,s,a,l){let c=i+"-"+r.id;super(n,e,r,o,s,a,l,c),this.contentAttr=kR(c),this.hostAttr=NR(c)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,e){let r=super.createElement(n,e);return super.setAttribute(r,this.contentAttr,""),r}};var Md=class t extends ia{supportsDOMEvents=!0;static makeCurrent(){km(new t)}onAndCancel(n,e,r,i){return n.addEventListener(e,r,i),()=>{n.removeEventListener(e,r,i)}}dispatchEvent(n,e){n.dispatchEvent(e)}remove(n){n.remove()}createElement(n,e){return e=e||this.getDefaultDocument(),e.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,e){return e==="window"?window:e==="document"?n:e==="body"?n.body:null}getBaseHref(n){let e=OR();return e==null?null:FR(e)}resetBaseElement(){ca=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return oa(document.cookie,n)}},ca=null;function OR(){return ca=ca||document.head.querySelector("base"),ca?ca.getAttribute("href"):null}function FR(t){return new URL(t,document.baseURI).pathname}var PR=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:t.\u0275fac})}return t})(),_D=["alt","control","meta","shift"],LR={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},jR={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},wD=(()=>{class t extends sa{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,r,i,o){let s=t.parseEventName(r),a=t.eventCallback(s.fullKey,i,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Qn().onAndCancel(e,s.domEventName,a,o))}static parseEventName(e){let r=e.toLowerCase().split("."),i=r.shift();if(r.length===0||!(i==="keydown"||i==="keyup"))return null;let o=t._normalizeKey(r.pop()),s="",a=r.indexOf("code");if(a>-1&&(r.splice(a,1),s="code."),_D.forEach(c=>{let d=r.indexOf(c);d>-1&&(r.splice(d,1),s+=c+".")}),s+=o,r.length!=0||o.length===0)return null;let l={};return l.domEventName=i,l.fullKey=s,l}static matchEventFullKeyCode(e,r){let i=LR[e.key]||e.key,o="";return r.indexOf("code.")>-1&&(i=e.code,o="code."),i==null||!i?!1:(i=i.toLowerCase(),i===" "?i="space":i==="."&&(i="dot"),_D.forEach(s=>{if(s!==i){let a=jR[s];a(e)&&(o+=s+".")}}),o+=i,o===r)}static eventCallback(e,r,i){return o=>{t.matchEventFullKeyCode(o,e)&&i.runGuarded(()=>r(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(r){return new(r||t)(M(B))};static \u0275prov=_({token:t,factory:t.\u0275fac})}return t})();async function Gm(t,n,e){let r=m({rootComponent:t},VR(n,e));return oD(r)}function VR(t,n){return{platformRef:n?.platformRef,appProviders:[...zR,...t?.providers??[]],platformProviders:$R}}function BR(){Md.makeCurrent()}function HR(){return new At}function UR(){return Vp(document),document}var $R=[{provide:gi,useValue:Lm},{provide:Zc,useValue:BR,multi:!0},{provide:B,useFactory:UR}];var zR=[{provide:Ts,useValue:"root"},{provide:At,useFactory:HR},{provide:Sd,useClass:Ed,multi:!0},{provide:Sd,useClass:wD,multi:!0},zm,Um,Hm,{provide:rt,useExisting:zm},{provide:_i,useClass:PR},[]];var Mr=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(e=>{let r=e.indexOf(":");if(r>0){let i=e.slice(0,r),o=e.slice(r+1).trim();this.addHeaderEntry(i,o)}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((e,r)=>{this.addHeaderEntry(r,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([e,r])=>{this.setHeaderEntries(e,r)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let e=this.headers.get(n.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,e){return this.clone({name:n,value:e,op:"a"})}set(n,e){return this.clone({name:n,value:e,op:"s"})}delete(n,e){return this.clone({name:n,value:e,op:"d"})}maybeSetNormalizedName(n,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,n)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(e=>{this.headers.set(e,n.headers.get(e)),this.normalizedNames.set(e,n.normalizedNames.get(e))})}clone(n){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([n]),e}applyUpdate(n){let e=n.name.toLowerCase();switch(n.op){case"a":case"s":let r=n.value;if(typeof r=="string"&&(r=[r]),r.length===0)return;this.maybeSetNormalizedName(n.name,e);let i=(n.op==="a"?this.headers.get(e):void 0)||[];i.push(...r),this.headers.set(e,i);break;case"d":let o=n.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let s=this.headers.get(e);if(!s)return;s=s.filter(a=>o.indexOf(a)===-1),s.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,s)}break}}addHeaderEntry(n,e){let r=n.toLowerCase();this.maybeSetNormalizedName(n,r),this.headers.has(r)?this.headers.get(r).push(e):this.headers.set(r,[e])}setHeaderEntries(n,e){let r=(Array.isArray(e)?e:[e]).map(o=>o.toString()),i=n.toLowerCase();this.headers.set(i,r),this.maybeSetNormalizedName(n,i)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>n(this.normalizedNames.get(e),this.headers.get(e)))}};var Ad=class{map=new Map;set(n,e){return this.map.set(n,e),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}},Rd=class{encodeKey(n){return DD(n)}encodeValue(n){return DD(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function GR(t,n){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(i=>{let o=i.indexOf("="),[s,a]=o==-1?[n.decodeKey(i),""]:[n.decodeKey(i.slice(0,o)),n.decodeValue(i.slice(o+1))],l=e.get(s)||[];l.push(a),e.set(s,l)}),e}var WR=/%(\d[a-f0-9])/gi,qR={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function DD(t){return encodeURIComponent(t).replace(WR,(n,e)=>qR[e]??n)}function Td(t){return`${t}`}var Xn=class t{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new Rd,n.fromString){if(n.fromObject)throw new C(2805,!1);this.map=GR(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(e=>{let r=n.fromObject[e],i=Array.isArray(r)?r.map(Td):[Td(r)];this.map.set(e,i)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let e=this.map.get(n);return e?e[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,e){return this.clone({param:n,value:e,op:"a"})}appendAll(n){let e=[];return Object.keys(n).forEach(r=>{let i=n[r];Array.isArray(i)?i.forEach(o=>{e.push({param:r,value:o,op:"a"})}):e.push({param:r,value:i,op:"a"})}),this.clone(e)}set(n,e){return this.clone({param:n,value:e,op:"s"})}delete(n,e){return this.clone({param:n,value:e,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let e=this.encoder.encodeKey(n);return this.map.get(n).map(r=>e+"="+this.encoder.encodeValue(r)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(n),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":let e=(n.op==="a"?this.map.get(n.param):void 0)||[];e.push(Td(n.value)),this.map.set(n.param,e);break;case"d":if(n.value!==void 0){let r=this.map.get(n.param)||[],i=r.indexOf(Td(n.value));i!==-1&&r.splice(i,1),r.length>0?this.map.set(n.param,r):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null)}};function YR(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function CD(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function ED(t){return typeof Blob<"u"&&t instanceof Blob}function xD(t){return typeof FormData<"u"&&t instanceof FormData}function ZR(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var ID="Content-Type",SD="Accept",TD="text/plain",AD="application/json",KR=`${AD}, ${TD}, */*`,go=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(n,e,r,i){this.url=e,this.method=n.toUpperCase();let o;if(YR(this.method)||i?(this.body=r!==void 0?r:null,o=i):o=r,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new C(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer!==void 0&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new Mr,this.context??=new Ad,!this.params)this.params=new Xn,this.urlWithParams=e;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=e;else{let a=e.indexOf("?"),l=a===-1?"?":a<e.length-1?"&":"";this.urlWithParams=e+l+s}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||CD(this.body)||ED(this.body)||xD(this.body)||ZR(this.body)?this.body:this.body instanceof Xn?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||xD(this.body)?null:ED(this.body)?this.body.type||null:CD(this.body)?null:typeof this.body=="string"?TD:this.body instanceof Xn?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?AD:null}clone(n={}){let e=n.method||this.method,r=n.url||this.url,i=n.responseType||this.responseType,o=n.keepalive??this.keepalive,s=n.priority||this.priority,a=n.cache||this.cache,l=n.mode||this.mode,c=n.redirect||this.redirect,d=n.credentials||this.credentials,f=n.referrer??this.referrer,h=n.integrity||this.integrity,p=n.referrerPolicy||this.referrerPolicy,y=n.transferCache??this.transferCache,E=n.timeout??this.timeout,I=n.body!==void 0?n.body:this.body,A=n.withCredentials??this.withCredentials,ye=n.reportProgress??this.reportProgress,Je=n.headers||this.headers,et=n.params||this.params,os=n.context??this.context;return n.setHeaders!==void 0&&(Je=Object.keys(n.setHeaders).reduce((ss,Fr)=>ss.set(Fr,n.setHeaders[Fr]),Je)),n.setParams&&(et=Object.keys(n.setParams).reduce((ss,Fr)=>ss.set(Fr,n.setParams[Fr]),et)),new t(e,r,I,{params:et,headers:Je,context:os,reportProgress:ye,responseType:i,withCredentials:A,transferCache:y,keepalive:o,cache:a,priority:s,timeout:E,mode:l,redirect:c,credentials:d,referrer:f,integrity:h,referrerPolicy:p})}},wi=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(wi||{}),yo=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(n,e=200,r="OK"){this.headers=n.headers||new Mr,this.status=n.status!==void 0?n.status:e,this.statusText=n.statusText||r,this.url=n.url||null,this.redirected=n.redirected,this.responseType=n.responseType,this.ok=this.status>=200&&this.status<300}},kd=class t extends yo{constructor(n={}){super(n)}type=wi.ResponseHeader;clone(n={}){return new t({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},da=class t extends yo{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=wi.Response;clone(n={}){return new t({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0,redirected:n.redirected??this.redirected,responseType:n.responseType??this.responseType})}},vo=class extends yo{name="HttpErrorResponse";message;error;ok=!1;constructor(n){super(n,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},QR=200,XR=204;var JR=new g("");var ek=/^\)\]\}',?\n/;var qm=(()=>{class t{xhrFactory;tracingService=u(un,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new C(-2800,!1);let r=this.xhrFactory;return N(null).pipe(ve(()=>new G(o=>{let s=r.build();if(s.open(e.method,e.urlWithParams),e.withCredentials&&(s.withCredentials=!0),e.headers.forEach((I,A)=>s.setRequestHeader(I,A.join(","))),e.headers.has(SD)||s.setRequestHeader(SD,KR),!e.headers.has(ID)){let I=e.detectContentTypeHeader();I!==null&&s.setRequestHeader(ID,I)}if(e.timeout&&(s.timeout=e.timeout),e.responseType){let I=e.responseType.toLowerCase();s.responseType=I!=="json"?I:"text"}let a=e.serializeBody(),l=null,c=()=>{if(l!==null)return l;let I=s.statusText||"OK",A=new Mr(s.getAllResponseHeaders()),ye=s.responseURL||e.url;return l=new kd({headers:A,status:s.status,statusText:I,url:ye}),l},d=this.maybePropagateTrace(()=>{let{headers:I,status:A,statusText:ye,url:Je}=c(),et=null;A!==XR&&(et=typeof s.response>"u"?s.responseText:s.response),A===0&&(A=et?QR:0);let os=A>=200&&A<300;if(e.responseType==="json"&&typeof et=="string"){let ss=et;et=et.replace(ek,"");try{et=et!==""?JSON.parse(et):null}catch(Fr){et=ss,os&&(os=!1,et={error:Fr,text:et})}}os?(o.next(new da({body:et,headers:I,status:A,statusText:ye,url:Je||void 0})),o.complete()):o.error(new vo({error:et,headers:I,status:A,statusText:ye,url:Je||void 0}))}),f=this.maybePropagateTrace(I=>{let{url:A}=c(),ye=new vo({error:I,status:s.status||0,statusText:s.statusText||"Unknown Error",url:A||void 0});o.error(ye)}),h=f;e.timeout&&(h=this.maybePropagateTrace(I=>{let{url:A}=c(),ye=new vo({error:new DOMException("Request timed out","TimeoutError"),status:s.status||0,statusText:s.statusText||"Request timeout",url:A||void 0});o.error(ye)}));let p=!1,y=this.maybePropagateTrace(I=>{p||(o.next(c()),p=!0);let A={type:wi.DownloadProgress,loaded:I.loaded};I.lengthComputable&&(A.total=I.total),e.responseType==="text"&&s.responseText&&(A.partialText=s.responseText),o.next(A)}),E=this.maybePropagateTrace(I=>{let A={type:wi.UploadProgress,loaded:I.loaded};I.lengthComputable&&(A.total=I.total),o.next(A)});return s.addEventListener("load",d),s.addEventListener("error",f),s.addEventListener("timeout",h),s.addEventListener("abort",f),e.reportProgress&&(s.addEventListener("progress",y),a!==null&&s.upload&&s.upload.addEventListener("progress",E)),s.send(a),o.next({type:wi.Sent}),()=>{s.removeEventListener("error",f),s.removeEventListener("abort",f),s.removeEventListener("load",d),s.removeEventListener("timeout",h),e.reportProgress&&(s.removeEventListener("progress",y),a!==null&&s.upload&&s.upload.removeEventListener("progress",E)),s.readyState!==s.DONE&&s.abort()}})))}static \u0275fac=function(r){return new(r||t)(M(_i))};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function RD(t,n){return n(t)}function tk(t,n){return(e,r)=>n.intercept(e,{handle:i=>t(i,r)})}function nk(t,n,e){return(r,i)=>qe(e,()=>n(r,o=>t(o,i)))}var kD=new g(""),Ym=new g("",{factory:()=>[]}),ND=new g(""),Zm=new g("",{factory:()=>!0});function rk(){let t=null;return(n,e)=>{t===null&&(t=(u(kD,{optional:!0})??[]).reduceRight(tk,RD));let r=u(ro);if(u(Zm)){let o=r.add();return t(n,e).pipe(dr(o))}else return t(n,e)}}var Km=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:function(r){let i=null;return r?i=new(r||t):i=M(qm),i},providedIn:"root"})}return t})();var Nd=(()=>{class t{backend;injector;chain=null;pendingTasks=u(ro);contributeToStability=u(Zm);constructor(e,r){this.backend=e,this.injector=r}handle(e){if(this.chain===null){let r=Array.from(new Set([...this.injector.get(Ym),...this.injector.get(ND,[])]));this.chain=r.reduceRight((i,o)=>nk(i,o,this.injector),RD)}if(this.contributeToStability){let r=this.pendingTasks.add();return this.chain(e,i=>this.backend.handle(i)).pipe(dr(r))}else return this.chain(e,r=>this.backend.handle(r))}static \u0275fac=function(r){return new(r||t)(M(Km),M(Ie))};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Qm=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:function(r){let i=null;return r?i=new(r||t):i=M(Nd),i},providedIn:"root"})}return t})();function Wm(t,n){return{body:n,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,credentials:t.credentials,transferCache:t.transferCache,timeout:t.timeout,keepalive:t.keepalive,priority:t.priority,cache:t.cache,mode:t.mode,redirect:t.redirect,integrity:t.integrity,referrer:t.referrer,referrerPolicy:t.referrerPolicy}}var bo=(()=>{class t{handler;constructor(e){this.handler=e}request(e,r,i={}){let o;if(e instanceof go)o=e;else{let l;i.headers instanceof Mr?l=i.headers:l=new Mr(i.headers);let c;i.params&&(i.params instanceof Xn?c=i.params:c=new Xn({fromObject:i.params})),o=new go(e,r,i.body!==void 0?i.body:null,{headers:l,context:i.context,params:c,reportProgress:i.reportProgress,responseType:i.responseType||"json",withCredentials:i.withCredentials,transferCache:i.transferCache,keepalive:i.keepalive,priority:i.priority,cache:i.cache,mode:i.mode,redirect:i.redirect,credentials:i.credentials,referrer:i.referrer,referrerPolicy:i.referrerPolicy,integrity:i.integrity,timeout:i.timeout})}let s=N(o).pipe(Wi(l=>this.handler.handle(l)));if(e instanceof go||i.observe==="events")return s;let a=s.pipe(ae(l=>l instanceof da));switch(i.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return a.pipe(T(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new C(2806,!1);return l.body}));case"blob":return a.pipe(T(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new C(2807,!1);return l.body}));case"text":return a.pipe(T(l=>{if(l.body!==null&&typeof l.body!="string")throw new C(2808,!1);return l.body}));default:return a.pipe(T(l=>l.body))}case"response":return a;default:throw new C(2809,!1)}}delete(e,r={}){return this.request("DELETE",e,r)}get(e,r={}){return this.request("GET",e,r)}head(e,r={}){return this.request("HEAD",e,r)}jsonp(e,r){return this.request("JSONP",e,{params:new Xn().append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,r={}){return this.request("OPTIONS",e,r)}patch(e,r,i={}){return this.request("PATCH",e,Wm(i,r))}post(e,r,i={}){return this.request("POST",e,Wm(i,r))}put(e,r,i={}){return this.request("PUT",e,Wm(i,r))}static \u0275fac=function(r){return new(r||t)(M(Qm))};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ik=new g("",{factory:()=>!0}),ok="XSRF-TOKEN",sk=new g("",{factory:()=>ok}),ak="X-XSRF-TOKEN",lk=new g("",{factory:()=>ak}),ck=(()=>{class t{cookieName=u(sk);doc=u(B);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=oa(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),OD=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:function(r){let i=null;return r?i=new(r||t):i=M(ck),i},providedIn:"root"})}return t})();function dk(t,n){if(!u(ik)||t.method==="GET"||t.method==="HEAD")return n(t);try{let i=u(mo).href,{origin:o}=new URL(i),{origin:s}=new URL(t.url,o);if(o!==s)return n(t)}catch{return n(t)}let e=u(OD).getToken(),r=u(lk);return e!=null&&!t.headers.has(r)&&(t=t.clone({headers:t.headers.set(r,e)})),n(t)}var Xm=(function(t){return t[t.Interceptors=0]="Interceptors",t[t.LegacyInterceptors=1]="LegacyInterceptors",t[t.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",t[t.NoXsrfProtection=3]="NoXsrfProtection",t[t.JsonpSupport=4]="JsonpSupport",t[t.RequestsMadeViaParent=5]="RequestsMadeViaParent",t[t.Fetch=6]="Fetch",t})(Xm||{});function uk(t,n){return{\u0275kind:t,\u0275providers:n}}function Jm(...t){let n=[bo,Nd,{provide:Qm,useExisting:Nd},{provide:Km,useFactory:()=>u(JR,{optional:!0})??u(qm)},{provide:Ym,useValue:dk,multi:!0}];for(let e of t)n.push(...e.\u0275providers);return ct(n)}var MD=new g("");function eg(){return uk(Xm.LegacyInterceptors,[{provide:MD,useFactory:rk},{provide:Ym,useExisting:MD,multi:!0}])}var FD=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(r){return new(r||t)(M(B))};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ua=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:function(r){let i=null;return r?i=new(r||t):i=M(hk),i},providedIn:"root"})}return t})(),hk=(()=>{class t extends ua{_doc;constructor(e){super(),this._doc=e}sanitize(e,r){if(r==null)return null;switch(e){case Ke.NONE:return r;case Ke.HTML:return Un(r,"HTML")?dn(r):Xc(this._doc,String(r)).toString();case Ke.STYLE:return Un(r,"Style")?dn(r):r;case Ke.SCRIPT:if(Un(r,"Script"))return dn(r);throw new C(5200,!1);case Ke.URL:return Un(r,"URL")?dn(r):Ws(String(r));case Ke.RESOURCE_URL:if(Un(r,"ResourceURL"))return dn(r);throw new C(5201,!1);default:throw new C(5202,!1)}}bypassSecurityTrustHtml(e){return Hp(e)}bypassSecurityTrustStyle(e){return Up(e)}bypassSecurityTrustScript(e){return $p(e)}bypassSecurityTrustUrl(e){return zp(e)}bypassSecurityTrustResourceUrl(e){return Gp(e)}static \u0275fac=function(r){return new(r||t)(M(B))};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ne="primary",xa=Symbol("RouteTitle"),og=class{params;constructor(n){this.params=n||{}}has(n){return Object.prototype.hasOwnProperty.call(this.params,n)}get(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e[0]:e}return null}getAll(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function Ci(t){return new og(t)}function tg(t,n,e){for(let r=0;r<t.length;r++){let i=t[r],o=n[r];if(i[0]===":")e[i.substring(1)]=o;else if(i!==o.path)return!1}return!0}function zD(t,n,e){let r=e.path.split("/"),i=r.indexOf("**");if(i===-1){if(r.length>t.length||e.pathMatch==="full"&&(n.hasChildren()||r.length<t.length))return null;let l={},c=t.slice(0,r.length);return tg(r,c,l)?{consumed:c,posParams:l}:null}if(i!==r.lastIndexOf("**"))return null;let o=r.slice(0,i),s=r.slice(i+1);if(o.length+s.length>t.length||e.pathMatch==="full"&&n.hasChildren()&&e.path!=="**")return null;let a={};return!tg(o,t.slice(0,o.length),a)||!tg(s,t.slice(t.length-s.length),a)?null:{consumed:t,posParams:a}}function Vd(t){return new Promise((n,e)=>{t.pipe(Nn()).subscribe({next:r=>n(r),error:r=>e(r)})})}function pk(t,n){if(t.length!==n.length)return!1;for(let e=0;e<t.length;++e)if(!xn(t[e],n[e]))return!1;return!0}function xn(t,n){let e=t?sg(t):void 0,r=n?sg(n):void 0;if(!e||!r||e.length!=r.length)return!1;let i;for(let o=0;o<e.length;o++)if(i=e[o],!GD(t[i],n[i]))return!1;return!0}function sg(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function GD(t,n){if(Array.isArray(t)&&Array.isArray(n)){if(t.length!==n.length)return!1;let e=[...t].sort(),r=[...n].sort();return e.every((i,o)=>r[o]===i)}else return t===n}function mk(t){return t.length>0?t[t.length-1]:null}function Ii(t){return ms(t)?t:Er(t)?Me(Promise.resolve(t)):N(t)}function WD(t){return ms(t)?Vd(t):Promise.resolve(t)}var gk={exact:ZD,subset:KD},qD={exact:vk,subset:yk,ignored:()=>!0},YD={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},ag={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function LD(t,n,e){return gk[e.paths](t.root,n.root,e.matrixParams)&&qD[e.queryParams](t.queryParams,n.queryParams)&&!(e.fragment==="exact"&&t.fragment!==n.fragment)}function vk(t,n){return xn(t,n)}function ZD(t,n,e){if(!Di(t.segments,n.segments)||!Pd(t.segments,n.segments,e)||t.numberOfChildren!==n.numberOfChildren)return!1;for(let r in n.children)if(!t.children[r]||!ZD(t.children[r],n.children[r],e))return!1;return!0}function yk(t,n){return Object.keys(n).length<=Object.keys(t).length&&Object.keys(n).every(e=>GD(t[e],n[e]))}function KD(t,n,e){return QD(t,n,n.segments,e)}function QD(t,n,e,r){if(t.segments.length>e.length){let i=t.segments.slice(0,e.length);return!(!Di(i,e)||n.hasChildren()||!Pd(i,e,r))}else if(t.segments.length===e.length){if(!Di(t.segments,e)||!Pd(t.segments,e,r))return!1;for(let i in n.children)if(!t.children[i]||!KD(t.children[i],n.children[i],r))return!1;return!0}else{let i=e.slice(0,t.segments.length),o=e.slice(t.segments.length);return!Di(t.segments,i)||!Pd(t.segments,i,r)||!t.children[ne]?!1:QD(t.children[ne],n,o,r)}}function Pd(t,n,e){return n.every((r,i)=>qD[e](t[i].parameters,r.parameters))}var Yt=class{root;queryParams;fragment;_queryParamMap;constructor(n=new be([],{}),e={},r=null){this.root=n,this.queryParams=e,this.fragment=r}get queryParamMap(){return this._queryParamMap??=Ci(this.queryParams),this._queryParamMap}toString(){return wk.serialize(this)}},be=class{segments;children;parent=null;constructor(n,e){this.segments=n,this.children=e,Object.values(e).forEach(r=>r.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Ld(this)}},Tr=class{path;parameters;_parameterMap;constructor(n,e){this.path=n,this.parameters=e}get parameterMap(){return this._parameterMap??=Ci(this.parameters),this._parameterMap}toString(){return JD(this)}};function bk(t,n){return Di(t,n)&&t.every((e,r)=>xn(e.parameters,n[r].parameters))}function Di(t,n){return t.length!==n.length?!1:t.every((e,r)=>e.path===n[r].path)}function _k(t,n){let e=[];return Object.entries(t.children).forEach(([r,i])=>{r===ne&&(e=e.concat(n(i,r)))}),Object.entries(t.children).forEach(([r,i])=>{r!==ne&&(e=e.concat(n(i,r)))}),e}var Ia=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:()=>new Ar,providedIn:"root"})}return t})(),Ar=class{parse(n){let e=new cg(n);return new Yt(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(n){let e=`/${fa(n.root,!0)}`,r=Ek(n.queryParams),i=typeof n.fragment=="string"?`#${Dk(n.fragment)}`:"";return`${e}${r}${i}`}},wk=new Ar;function Ld(t){return t.segments.map(n=>JD(n)).join("/")}function fa(t,n){if(!t.hasChildren())return Ld(t);if(n){let e=t.children[ne]?fa(t.children[ne],!1):"",r=[];return Object.entries(t.children).forEach(([i,o])=>{i!==ne&&r.push(`${i}:${fa(o,!1)}`)}),r.length>0?`${e}(${r.join("//")})`:e}else{let e=_k(t,(r,i)=>i===ne?[fa(t.children[ne],!1)]:[`${i}:${fa(r,!1)}`]);return Object.keys(t.children).length===1&&t.children[ne]!=null?`${Ld(t)}/${e[0]}`:`${Ld(t)}/(${e.join("//")})`}}function XD(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Od(t){return XD(t).replace(/%3B/gi,";")}function Dk(t){return encodeURI(t)}function lg(t){return XD(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function jd(t){return decodeURIComponent(t)}function jD(t){return jd(t.replace(/\+/g,"%20"))}function JD(t){return`${lg(t.path)}${Ck(t.parameters)}`}function Ck(t){return Object.entries(t).map(([n,e])=>`;${lg(n)}=${lg(e)}`).join("")}function Ek(t){let n=Object.entries(t).map(([e,r])=>Array.isArray(r)?r.map(i=>`${Od(e)}=${Od(i)}`).join("&"):`${Od(e)}=${Od(r)}`).filter(e=>e);return n.length?`?${n.join("&")}`:""}var xk=/^[^\/()?;#]+/;function ng(t){let n=t.match(xk);return n?n[0]:""}var Ik=/^[^\/()?;=#]+/;function Sk(t){let n=t.match(Ik);return n?n[0]:""}var Mk=/^[^=?&#]+/;function Tk(t){let n=t.match(Mk);return n?n[0]:""}var Ak=/^[^&#]+/;function Rk(t){let n=t.match(Ak);return n?n[0]:""}var cg=class{url;remaining;constructor(n){this.url=n,this.remaining=n}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new be([],{}):new be([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional("?"))do this.parseQueryParam(n);while(this.consumeOptional("&"));return n}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(n=0){if(n>50)throw new C(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let r={};this.peekStartsWith("/(")&&(this.capture("/"),r=this.parseParens(!0,n));let i={};return this.peekStartsWith("(")&&(i=this.parseParens(!1,n)),(e.length>0||Object.keys(r).length>0)&&(i[ne]=new be(e,r)),i}parseSegment(){let n=ng(this.remaining);if(n===""&&this.peekStartsWith(";"))throw new C(4009,!1);return this.capture(n),new Tr(jd(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(";");)this.parseParam(n);return n}parseParam(n){let e=Sk(this.remaining);if(!e)return;this.capture(e);let r="";if(this.consumeOptional("=")){let i=ng(this.remaining);i&&(r=i,this.capture(r))}n[jd(e)]=jd(r)}parseQueryParam(n){let e=Tk(this.remaining);if(!e)return;this.capture(e);let r="";if(this.consumeOptional("=")){let s=Rk(this.remaining);s&&(r=s,this.capture(r))}let i=jD(e),o=jD(r);if(n.hasOwnProperty(i)){let s=n[i];Array.isArray(s)||(s=[s],n[i]=s),s.push(o)}else n[i]=o}parseParens(n,e){let r={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let i=ng(this.remaining),o=this.remaining[i.length];if(o!=="/"&&o!==")"&&o!==";")throw new C(4010,!1);let s;i.indexOf(":")>-1?(s=i.slice(0,i.indexOf(":")),this.capture(s),this.capture(":")):n&&(s=ne);let a=this.parseChildren(e+1);r[s??ne]=Object.keys(a).length===1&&a[ne]?a[ne]:new be([],a),this.consumeOptional("//")}return r}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new C(4011,!1)}};function eC(t){return t.segments.length>0?new be([],{[ne]:t}):t}function tC(t){let n={};for(let[r,i]of Object.entries(t.children)){let o=tC(i);if(r===ne&&o.segments.length===0&&o.hasChildren())for(let[s,a]of Object.entries(o.children))n[s]=a;else(o.segments.length>0||o.hasChildren())&&(n[r]=o)}let e=new be(t.segments,n);return kk(e)}function kk(t){if(t.numberOfChildren===1&&t.children[ne]){let n=t.children[ne];return new be(t.segments.concat(n.segments),n.children)}return t}function Co(t){return t instanceof Yt}function nC(t,n,e=null,r=null,i=new Ar){let o=rC(t);return iC(o,n,e,r,i)}function rC(t){let n;function e(o){let s={};for(let l of o.children){let c=e(l);s[l.outlet]=c}let a=new be(o.url,s);return o===t&&(n=a),a}let r=e(t.root),i=eC(r);return n??i}function iC(t,n,e,r,i){let o=t;for(;o.parent;)o=o.parent;if(n.length===0)return rg(o,o,o,e,r,i);let s=Nk(n);if(s.toRoot())return rg(o,o,new be([],{}),e,r,i);let a=Ok(s,o,t),l=a.processChildren?pa(a.segmentGroup,a.index,s.commands):sC(a.segmentGroup,a.index,s.commands);return rg(o,a.segmentGroup,l,e,r,i)}function Bd(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function va(t){return typeof t=="object"&&t!=null&&t.outlets}function VD(t,n,e){t||="\u0275";let r=new Yt;return r.queryParams={[t]:n},e.parse(e.serialize(r)).queryParams[t]}function rg(t,n,e,r,i,o){let s={};for(let[c,d]of Object.entries(r??{}))s[c]=Array.isArray(d)?d.map(f=>VD(c,f,o)):VD(c,d,o);let a;t===n?a=e:a=oC(t,n,e);let l=eC(tC(a));return new Yt(l,s,i)}function oC(t,n,e){let r={};return Object.entries(t.children).forEach(([i,o])=>{o===n?r[i]=e:r[i]=oC(o,n,e)}),new be(t.segments,r)}var Hd=class{isAbsolute;numberOfDoubleDots;commands;constructor(n,e,r){if(this.isAbsolute=n,this.numberOfDoubleDots=e,this.commands=r,n&&r.length>0&&Bd(r[0]))throw new C(4003,!1);let i=r.find(va);if(i&&i!==mk(r))throw new C(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function Nk(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new Hd(!0,0,t);let n=0,e=!1,r=t.reduce((i,o,s)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let a={};return Object.entries(o.outlets).forEach(([l,c])=>{a[l]=typeof c=="string"?c.split("/"):c}),[...i,{outlets:a}]}if(o.segmentPath)return[...i,o.segmentPath]}return typeof o!="string"?[...i,o]:s===0?(o.split("/").forEach((a,l)=>{l==0&&a==="."||(l==0&&a===""?e=!0:a===".."?n++:a!=""&&i.push(a))}),i):[...i,o]},[]);return new Hd(e,n,r)}var wo=class{segmentGroup;processChildren;index;constructor(n,e,r){this.segmentGroup=n,this.processChildren=e,this.index=r}};function Ok(t,n,e){if(t.isAbsolute)return new wo(n,!0,0);if(!e)return new wo(n,!1,NaN);if(e.parent===null)return new wo(e,!0,0);let r=Bd(t.commands[0])?0:1,i=e.segments.length-1+r;return Fk(e,i,t.numberOfDoubleDots)}function Fk(t,n,e){let r=t,i=n,o=e;for(;o>i;){if(o-=i,r=r.parent,!r)throw new C(4005,!1);i=r.segments.length}return new wo(r,!1,i-o)}function Pk(t){return va(t[0])?t[0].outlets:{[ne]:t}}function sC(t,n,e){if(t??=new be([],{}),t.segments.length===0&&t.hasChildren())return pa(t,n,e);let r=Lk(t,n,e),i=e.slice(r.commandIndex);if(r.match&&r.pathIndex<t.segments.length){let o=new be(t.segments.slice(0,r.pathIndex),{});return o.children[ne]=new be(t.segments.slice(r.pathIndex),t.children),pa(o,0,i)}else return r.match&&i.length===0?new be(t.segments,{}):r.match&&!t.hasChildren()?dg(t,n,e):r.match?pa(t,0,i):dg(t,n,e)}function pa(t,n,e){if(e.length===0)return new be(t.segments,{});{let r=Pk(e),i={};if(Object.keys(r).some(o=>o!==ne)&&t.children[ne]&&t.numberOfChildren===1&&t.children[ne].segments.length===0){let o=pa(t.children[ne],n,e);return new be(t.segments,o.children)}return Object.entries(r).forEach(([o,s])=>{typeof s=="string"&&(s=[s]),s!==null&&(i[o]=sC(t.children[o],n,s))}),Object.entries(t.children).forEach(([o,s])=>{r[o]===void 0&&(i[o]=s)}),new be(t.segments,i)}}function Lk(t,n,e){let r=0,i=n,o={match:!1,pathIndex:0,commandIndex:0};for(;i<t.segments.length;){if(r>=e.length)return o;let s=t.segments[i],a=e[r];if(va(a))break;let l=`${a}`,c=r<e.length-1?e[r+1]:null;if(i>0&&l===void 0)break;if(l&&c&&typeof c=="object"&&c.outlets===void 0){if(!HD(l,c,s))return o;r+=2}else{if(!HD(l,{},s))return o;r++}i++}return{match:!0,pathIndex:i,commandIndex:r}}function dg(t,n,e){let r=t.segments.slice(0,n),i=0;for(;i<e.length;){let o=e[i];if(va(o)){let l=jk(o.outlets);return new be(r,l)}if(i===0&&Bd(e[0])){let l=t.segments[n];r.push(new Tr(l.path,BD(e[0]))),i++;continue}let s=va(o)?o.outlets[ne]:`${o}`,a=i<e.length-1?e[i+1]:null;s&&a&&Bd(a)?(r.push(new Tr(s,BD(a))),i+=2):(r.push(new Tr(s,{})),i++)}return new be(r,{})}function jk(t){let n={};return Object.entries(t).forEach(([e,r])=>{typeof r=="string"&&(r=[r]),r!==null&&(n[e]=dg(new be([],{}),0,r))}),n}function BD(t){let n={};return Object.entries(t).forEach(([e,r])=>n[e]=`${r}`),n}function HD(t,n,e){return t==e.path&&xn(n,e.parameters)}var ma="imperative",st=(function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t})(st||{}),Bt=class{id;url;constructor(n,e){this.id=n,this.url=e}},Ei=class extends Bt{type=st.NavigationStart;navigationTrigger;restoredState;constructor(n,e,r="imperative",i=null){super(n,e),this.navigationTrigger=r,this.restoredState=i}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},er=class extends Bt{urlAfterRedirects;type=st.NavigationEnd;constructor(n,e,r){super(n,e),this.urlAfterRedirects=r}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},bt=(function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t[t.Aborted=4]="Aborted",t})(bt||{}),ya=(function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t})(ya||{}),qt=class extends Bt{reason;code;type=st.NavigationCancel;constructor(n,e,r,i){super(n,e),this.reason=r,this.code=i}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function aC(t){return t instanceof qt&&(t.code===bt.Redirect||t.code===bt.SupersededByNewNavigation)}var tr=class extends Bt{reason;code;type=st.NavigationSkipped;constructor(n,e,r,i){super(n,e),this.reason=r,this.code=i}},xi=class extends Bt{error;target;type=st.NavigationError;constructor(n,e,r,i){super(n,e),this.error=r,this.target=i}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},ba=class extends Bt{urlAfterRedirects;state;type=st.RoutesRecognized;constructor(n,e,r,i){super(n,e),this.urlAfterRedirects=r,this.state=i}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ud=class extends Bt{urlAfterRedirects;state;type=st.GuardsCheckStart;constructor(n,e,r,i){super(n,e),this.urlAfterRedirects=r,this.state=i}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},$d=class extends Bt{urlAfterRedirects;state;shouldActivate;type=st.GuardsCheckEnd;constructor(n,e,r,i,o){super(n,e),this.urlAfterRedirects=r,this.state=i,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},zd=class extends Bt{urlAfterRedirects;state;type=st.ResolveStart;constructor(n,e,r,i){super(n,e),this.urlAfterRedirects=r,this.state=i}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Gd=class extends Bt{urlAfterRedirects;state;type=st.ResolveEnd;constructor(n,e,r,i){super(n,e),this.urlAfterRedirects=r,this.state=i}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Wd=class{route;type=st.RouteConfigLoadStart;constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},qd=class{route;type=st.RouteConfigLoadEnd;constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Yd=class{snapshot;type=st.ChildActivationStart;constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Zd=class{snapshot;type=st.ChildActivationEnd;constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Kd=class{snapshot;type=st.ActivationStart;constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Qd=class{snapshot;type=st.ActivationEnd;constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var Eo=class{},_a=class{},xo=class{url;navigationBehaviorOptions;constructor(n,e){this.url=n,this.navigationBehaviorOptions=e}};function Vk(t){return!(t instanceof Eo)&&!(t instanceof xo)&&!(t instanceof _a)}var Xd=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(n){this.rootInjector=n,this.children=new To(this.rootInjector)}},To=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,r){let i=this.getOrCreateContext(e);i.outlet=r,this.contexts.set(e,i)}onChildOutletDestroyed(e){let r=this.getContext(e);r&&(r.outlet=null,r.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let r=this.getContext(e);return r||(r=new Xd(this.rootInjector),this.contexts.set(e,r)),r}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(r){return new(r||t)(M(Ie))};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Jd=class{_root;constructor(n){this._root=n}get root(){return this._root.value}parent(n){let e=this.pathFromRoot(n);return e.length>1?e[e.length-2]:null}children(n){let e=ug(n,this._root);return e?e.children.map(r=>r.value):[]}firstChild(n){let e=ug(n,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(n){let e=fg(n,this._root);return e.length<2?[]:e[e.length-2].children.map(i=>i.value).filter(i=>i!==n)}pathFromRoot(n){return fg(n,this._root).map(e=>e.value)}};function ug(t,n){if(t===n.value)return n;for(let e of n.children){let r=ug(t,e);if(r)return r}return null}function fg(t,n){if(t===n.value)return[n];for(let e of n.children){let r=fg(t,e);if(r.length)return r.unshift(n),r}return[]}var Vt=class{value;children;constructor(n,e){this.value=n,this.children=e}toString(){return`TreeNode(${this.value})`}};function _o(t){let n={};return t&&t.children.forEach(e=>n[e.value.outlet]=e),n}var wa=class extends Jd{snapshot;constructor(n,e){super(n),this.snapshot=e,wg(this,n)}toString(){return this.snapshot.toString()}};function lC(t,n){let e=Bk(t,n),r=new je([new Tr("",{})]),i=new je({}),o=new je({}),s=new je({}),a=new je(""),l=new Rr(r,i,s,a,o,ne,t,e.root);return l.snapshot=e.root,new wa(new Vt(l,[]),e)}function Bk(t,n){let e={},r={},i={},s=new Io([],e,i,"",r,ne,t,null,{},n);return new Da("",new Vt(s,[]))}var Rr=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(n,e,r,i,o,s,a,l){this.urlSubject=n,this.paramsSubject=e,this.queryParamsSubject=r,this.fragmentSubject=i,this.dataSubject=o,this.outlet=s,this.component=a,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(T(c=>c[xa]))??N(void 0),this.url=n,this.params=e,this.queryParams=r,this.fragment=i,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(T(n=>Ci(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(T(n=>Ci(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function _g(t,n,e="emptyOnly"){let r,{routeConfig:i}=t;return n!==null&&(e==="always"||i?.path===""||!n.component&&!n.routeConfig?.loadComponent)?r={params:m(m({},n.params),t.params),data:m(m({},n.data),t.data),resolve:m(m(m(m({},t.data),n.data),i?.data),t._resolvedData)}:r={params:m({},t.params),data:m({},t.data),resolve:m(m({},t.data),t._resolvedData??{})},i&&dC(i)&&(r.resolve[xa]=i.title),r}var Io=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[xa]}constructor(n,e,r,i,o,s,a,l,c,d){this.url=n,this.params=e,this.queryParams=r,this.fragment=i,this.data=o,this.outlet=s,this.component=a,this.routeConfig=l,this._resolve=c,this._environmentInjector=d}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Ci(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Ci(this.queryParams),this._queryParamMap}toString(){let n=this.url.map(r=>r.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${n}', path:'${e}')`}},Da=class extends Jd{url;constructor(n,e){super(e),this.url=n,wg(this,e)}toString(){return cC(this._root)}};function wg(t,n){n.value._routerState=t,n.children.forEach(e=>wg(t,e))}function cC(t){let n=t.children.length>0?` { ${t.children.map(cC).join(", ")} } `:"";return`${t.value}${n}`}function ig(t){if(t.snapshot){let n=t.snapshot,e=t._futureSnapshot;t.snapshot=e,xn(n.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),n.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),xn(n.params,e.params)||t.paramsSubject.next(e.params),pk(n.url,e.url)||t.urlSubject.next(e.url),xn(n.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function hg(t,n){let e=xn(t.params,n.params)&&bk(t.url,n.url),r=!t.parent!=!n.parent;return e&&!r&&(!t.parent||hg(t.parent,n.parent))}function dC(t){return typeof t.title=="string"||t.title===null}var uC=new g(""),Sa=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=ne;activateEvents=new W;deactivateEvents=new W;attachEvents=new W;detachEvents=new W;routerOutletData=rD();parentContexts=u(To);location=u(ft);changeDetector=u(Te);inputBinder=u(ru,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:r,previousValue:i}=e.name;if(r)return;this.isTrackedInParentContexts(i)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(i)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new C(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new C(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new C(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,r){this.activated=e,this._activatedRoute=r,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,r){if(this.isActivated)throw new C(4013,!1);this._activatedRoute=e;let i=this.location,s=e.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,l=new pg(e,a,i.injector,this.routerOutletData);this.activated=i.createComponent(s,{index:i.length,injector:l,environmentInjector:r}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(r){return new(r||t)};static \u0275dir=q({type:t,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[ut]})}return t})(),pg=class{route;childContexts;parent;outletData;constructor(n,e,r,i){this.route=n,this.childContexts=e,this.parent=r,this.outletData=i}get(n,e){return n===Rr?this.route:n===To?this.childContexts:n===uC?this.outletData:this.parent.get(n,e)}},ru=new g("");var Dg=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275cmp=S({type:t,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(r,i){r&1&&he(0,"router-outlet")},dependencies:[Sa],encapsulation:2})}return t})();function Cg(t){let n=t.children&&t.children.map(Cg),e=n?U(m({},t),{children:n}):m({},t);return!e.component&&!e.loadComponent&&(n||e.loadChildren)&&e.outlet&&e.outlet!==ne&&(e.component=Dg),e}function Hk(t,n,e){let r=Ca(t,n._root,e?e._root:void 0);return new wa(r,n)}function Ca(t,n,e){if(e&&t.shouldReuseRoute(n.value,e.value.snapshot)){let r=e.value;r._futureSnapshot=n.value;let i=Uk(t,n,e);return new Vt(r,i)}else{if(t.shouldAttach(n.value)){let o=t.retrieve(n.value);if(o!==null){let s=o.route;return s.value._futureSnapshot=n.value,s.children=n.children.map(a=>Ca(t,a)),s}}let r=$k(n.value),i=n.children.map(o=>Ca(t,o));return new Vt(r,i)}}function Uk(t,n,e){return n.children.map(r=>{for(let i of e.children)if(t.shouldReuseRoute(r.value,i.value.snapshot))return Ca(t,r,i);return Ca(t,r)})}function $k(t){return new Rr(new je(t.url),new je(t.params),new je(t.queryParams),new je(t.fragment),new je(t.data),t.outlet,t.component,t)}var So=class{redirectTo;navigationBehaviorOptions;constructor(n,e){this.redirectTo=n,this.navigationBehaviorOptions=e}},fC="ngNavigationCancelingError";function eu(t,n){let{redirectTo:e,navigationBehaviorOptions:r}=Co(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,i=hC(!1,bt.Redirect);return i.url=e,i.navigationBehaviorOptions=r,i}function hC(t,n){let e=new Error(`NavigationCancelingError: ${t||""}`);return e[fC]=!0,e.cancellationCode=n,e}function zk(t){return pC(t)&&Co(t.url)}function pC(t){return!!t&&t[fC]}var mg=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(n,e,r,i,o){this.routeReuseStrategy=n,this.futureState=e,this.currState=r,this.forwardEvent=i,this.inputBindingEnabled=o}activate(n){let e=this.futureState._root,r=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,r,n),ig(this.futureState.root),this.activateChildRoutes(e,r,n)}deactivateChildRoutes(n,e,r){let i=_o(e);n.children.forEach(o=>{let s=o.value.outlet;this.deactivateRoutes(o,i[s],r),delete i[s]}),Object.values(i).forEach(o=>{this.deactivateRouteAndItsChildren(o,r)})}deactivateRoutes(n,e,r){let i=n.value,o=e?e.value:null;if(i===o)if(i.component){let s=r.getContext(i.outlet);s&&this.deactivateChildRoutes(n,e,s.children)}else this.deactivateChildRoutes(n,e,r);else o&&this.deactivateRouteAndItsChildren(e,r)}deactivateRouteAndItsChildren(n,e){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,e):this.deactivateRouteAndOutlet(n,e)}detachAndStoreRouteSubtree(n,e){let r=e.getContext(n.value.outlet),i=r&&n.value.component?r.children:e,o=_o(n);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,i);if(r&&r.outlet){let s=r.outlet.detach(),a=r.children.onOutletDeactivated();this.routeReuseStrategy.store(n.value.snapshot,{componentRef:s,route:n,contexts:a})}}deactivateRouteAndOutlet(n,e){let r=e.getContext(n.value.outlet),i=r&&n.value.component?r.children:e,o=_o(n);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,i);r&&(r.outlet&&(r.outlet.deactivate(),r.children.onOutletDeactivated()),r.attachRef=null,r.route=null)}activateChildRoutes(n,e,r){let i=_o(e);n.children.forEach(o=>{this.activateRoutes(o,i[o.value.outlet],r),this.forwardEvent(new Qd(o.value.snapshot))}),n.children.length&&this.forwardEvent(new Zd(n.value.snapshot))}activateRoutes(n,e,r){let i=n.value,o=e?e.value:null;if(ig(i),i===o)if(i.component){let s=r.getOrCreateContext(i.outlet);this.activateChildRoutes(n,e,s.children)}else this.activateChildRoutes(n,e,r);else if(i.component){let s=r.getOrCreateContext(i.outlet);if(this.routeReuseStrategy.shouldAttach(i.snapshot)){let a=this.routeReuseStrategy.retrieve(i.snapshot);this.routeReuseStrategy.store(i.snapshot,null),s.children.onOutletReAttached(a.contexts),s.attachRef=a.componentRef,s.route=a.route.value,s.outlet&&s.outlet.attach(a.componentRef,a.route.value),ig(a.route.value),this.activateChildRoutes(n,null,s.children)}else s.attachRef=null,s.route=i,s.outlet&&s.outlet.activateWith(i,s.injector),this.activateChildRoutes(n,null,s.children)}else this.activateChildRoutes(n,null,r)}},tu=class{path;route;constructor(n){this.path=n,this.route=this.path[this.path.length-1]}},Do=class{component;route;constructor(n,e){this.component=n,this.route=e}};function Gk(t,n,e){let r=t._root,i=n?n._root:null;return ha(r,i,e,[r.value])}function Wk(t){let n=t.routeConfig?t.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:t,guards:n}}function Ao(t,n){let e=Symbol(),r=n.get(t,e);return r===e?typeof t=="function"&&!Jf(t)?t:n.get(t):r}function ha(t,n,e,r,i={canDeactivateChecks:[],canActivateChecks:[]}){let o=_o(n);return t.children.forEach(s=>{qk(s,o[s.value.outlet],e,r.concat([s.value]),i),delete o[s.value.outlet]}),Object.entries(o).forEach(([s,a])=>ga(a,e.getContext(s),i)),i}function qk(t,n,e,r,i={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,s=n?n.value:null,a=e?e.getContext(t.value.outlet):null;if(s&&o.routeConfig===s.routeConfig){let l=Yk(s,o,o.routeConfig.runGuardsAndResolvers);l?i.canActivateChecks.push(new tu(r)):(o.data=s.data,o._resolvedData=s._resolvedData),o.component?ha(t,n,a?a.children:null,r,i):ha(t,n,e,r,i),l&&a&&a.outlet&&a.outlet.isActivated&&i.canDeactivateChecks.push(new Do(a.outlet.component,s))}else s&&ga(n,a,i),i.canActivateChecks.push(new tu(r)),o.component?ha(t,null,a?a.children:null,r,i):ha(t,null,e,r,i);return i}function Yk(t,n,e){if(typeof e=="function")return qe(n._environmentInjector,()=>e(t,n));switch(e){case"pathParamsChange":return!Di(t.url,n.url);case"pathParamsOrQueryParamsChange":return!Di(t.url,n.url)||!xn(t.queryParams,n.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!hg(t,n)||!xn(t.queryParams,n.queryParams);default:return!hg(t,n)}}function ga(t,n,e){let r=_o(t),i=t.value;Object.entries(r).forEach(([o,s])=>{i.component?n?ga(s,n.children.getContext(o),e):ga(s,null,e):ga(s,n,e)}),i.component?n&&n.outlet&&n.outlet.isActivated?e.canDeactivateChecks.push(new Do(n.outlet.component,i)):e.canDeactivateChecks.push(new Do(null,i)):e.canDeactivateChecks.push(new Do(null,i))}function Ma(t){return typeof t=="function"}function Zk(t){return typeof t=="boolean"}function Kk(t){return t&&Ma(t.canLoad)}function Qk(t){return t&&Ma(t.canActivate)}function Xk(t){return t&&Ma(t.canActivateChild)}function Jk(t){return t&&Ma(t.canDeactivate)}function eN(t){return t&&Ma(t.canMatch)}function mC(t){return t instanceof zr||t?.name==="EmptyError"}var Fd=Symbol("INITIAL_VALUE");function Mo(){return ve(t=>Gr(t.map(n=>n.pipe(xe(1),ze(Fd)))).pipe(T(n=>{for(let e of n)if(e!==!0){if(e===Fd)return Fd;if(e===!1||tN(e))return e}return!0}),ae(n=>n!==Fd),xe(1)))}function tN(t){return Co(t)||t instanceof So}function gC(t){return t.aborted?N(void 0).pipe(xe(1)):new G(n=>{let e=()=>{n.next(),n.complete()};return t.addEventListener("abort",e),()=>t.removeEventListener("abort",e)})}function vC(t){return de(gC(t))}function nN(t){return Ct(n=>{let{targetSnapshot:e,currentSnapshot:r,guards:{canActivateChecks:i,canDeactivateChecks:o}}=n;return o.length===0&&i.length===0?N(U(m({},n),{guardsResult:!0})):rN(o,e,r).pipe(Ct(s=>s&&Zk(s)?iN(e,i,t):N(s)),T(s=>U(m({},n),{guardsResult:s})))})}function rN(t,n,e){return Me(t).pipe(Ct(r=>cN(r.component,r.route,e,n)),Nn(r=>r!==!0,!0))}function iN(t,n,e){return Me(n).pipe(Wi(r=>cr(sN(r.route.parent,e),oN(r.route,e),lN(t,r.path),aN(t,r.route))),Nn(r=>r!==!0,!0))}function oN(t,n){return t!==null&&n&&n(new Kd(t)),N(!0)}function sN(t,n){return t!==null&&n&&n(new Yd(t)),N(!0)}function aN(t,n){let e=n.routeConfig?n.routeConfig.canActivate:null;if(!e||e.length===0)return N(!0);let r=e.map(i=>Wr(()=>{let o=n._environmentInjector,s=Ao(i,o),a=Qk(s)?s.canActivate(n,t):qe(o,()=>s(n,t));return Ii(a).pipe(Nn())}));return N(r).pipe(Mo())}function lN(t,n){let e=n[n.length-1],i=n.slice(0,n.length-1).reverse().map(o=>Wk(o)).filter(o=>o!==null).map(o=>Wr(()=>{let s=o.guards.map(a=>{let l=o.node._environmentInjector,c=Ao(a,l),d=Xk(c)?c.canActivateChild(e,t):qe(l,()=>c(e,t));return Ii(d).pipe(Nn())});return N(s).pipe(Mo())}));return N(i).pipe(Mo())}function cN(t,n,e,r){let i=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!i||i.length===0)return N(!0);let o=i.map(s=>{let a=n._environmentInjector,l=Ao(s,a),c=Jk(l)?l.canDeactivate(t,n,e,r):qe(a,()=>l(t,n,e,r));return Ii(c).pipe(Nn())});return N(o).pipe(Mo())}function dN(t,n,e,r,i){let o=n.canLoad;if(o===void 0||o.length===0)return N(!0);let s=o.map(a=>{let l=Ao(a,t),c=Kk(l)?l.canLoad(n,e):qe(t,()=>l(n,e)),d=Ii(c);return i?d.pipe(vC(i)):d});return N(s).pipe(Mo(),yC(r))}function yC(t){return kf(Be(n=>{if(typeof n!="boolean")throw eu(t,n)}),T(n=>n===!0))}function uN(t,n,e,r,i,o){let s=n.canMatch;if(!s||s.length===0)return N(!0);let a=s.map(l=>{let c=Ao(l,t),d=eN(c)?c.canMatch(n,e,i):qe(t,()=>c(n,e,i));return Ii(d).pipe(vC(o))});return N(a).pipe(Mo(),yC(r))}var Jn=class t extends Error{segmentGroup;constructor(n){super(),this.segmentGroup=n||null,Object.setPrototypeOf(this,t.prototype)}},Ea=class t extends Error{urlTree;constructor(n){super(),this.urlTree=n,Object.setPrototypeOf(this,t.prototype)}};function fN(t){throw new C(4e3,!1)}function hN(t){throw hC(!1,bt.GuardRejected)}var gg=class{urlSerializer;urlTree;constructor(n,e){this.urlSerializer=n,this.urlTree=e}async lineralizeSegments(n,e){let r=[],i=e.root;for(;;){if(r=r.concat(i.segments),i.numberOfChildren===0)return r;if(i.numberOfChildren>1||!i.children[ne])throw fN(`${n.redirectTo}`);i=i.children[ne]}}async applyRedirectCommands(n,e,r,i,o){let s=await pN(e,i,o);if(s instanceof Yt)throw new Ea(s);let a=this.applyRedirectCreateUrlTree(s,this.urlSerializer.parse(s),n,r);if(s[0]==="/")throw new Ea(a);return a}applyRedirectCreateUrlTree(n,e,r,i){let o=this.createSegmentGroup(n,e.root,r,i);return new Yt(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(n,e){let r={};return Object.entries(n).forEach(([i,o])=>{if(typeof o=="string"&&o[0]===":"){let a=o.substring(1);r[i]=e[a]}else r[i]=o}),r}createSegmentGroup(n,e,r,i){let o=this.createSegments(n,e.segments,r,i),s={};return Object.entries(e.children).forEach(([a,l])=>{s[a]=this.createSegmentGroup(n,l,r,i)}),new be(o,s)}createSegments(n,e,r,i){return e.map(o=>o.path[0]===":"?this.findPosParam(n,o,i):this.findOrReturn(o,r))}findPosParam(n,e,r){let i=r[e.path.substring(1)];if(!i)throw new C(4001,!1);return i}findOrReturn(n,e){let r=0;for(let i of e){if(i.path===n.path)return e.splice(r),i;r++}return n}};function pN(t,n,e){if(typeof t=="string")return Promise.resolve(t);let r=t;return Vd(Ii(qe(e,()=>r(n))))}function mN(t,n){return t.providers&&!t._injector&&(t._injector=Xs(t.providers,n,`Route: ${t.path}`)),t._injector??n}function fn(t){return t.outlet||ne}function gN(t,n){let e=t.filter(r=>fn(r)===n);return e.push(...t.filter(r=>fn(r)!==n)),e}var vg={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function bC(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function vN(t,n,e,r,i,o,s){let a=_C(t,n,e);if(!a.matched)return N(a);let l=bC(o(a));return r=mN(n,r),uN(r,n,e,i,l,s).pipe(T(c=>c===!0?a:m({},vg)))}function _C(t,n,e){if(n.path==="")return n.pathMatch==="full"&&(t.hasChildren()||e.length>0)?m({},vg):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let i=(n.matcher||zD)(e,t,n);if(!i)return m({},vg);let o={};Object.entries(i.posParams??{}).forEach(([a,l])=>{o[a]=l.path});let s=i.consumed.length>0?m(m({},o),i.consumed[i.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:i.consumed,remainingSegments:e.slice(i.consumed.length),parameters:s,positionalParamSegments:i.posParams??{}}}function UD(t,n,e,r,i){return e.length>0&&_N(t,e,r,i)?{segmentGroup:new be(n,bN(r,new be(e,t.children))),slicedSegments:[]}:e.length===0&&wN(t,e,r)?{segmentGroup:new be(t.segments,yN(t,e,r,t.children)),slicedSegments:e}:{segmentGroup:new be(t.segments,t.children),slicedSegments:e}}function yN(t,n,e,r){let i={};for(let o of e)if(iu(t,n,o)&&!r[fn(o)]){let s=new be([],{});i[fn(o)]=s}return m(m({},r),i)}function bN(t,n){let e={};e[ne]=n;for(let r of t)if(r.path===""&&fn(r)!==ne){let i=new be([],{});e[fn(r)]=i}return e}function _N(t,n,e,r){return e.some(i=>!iu(t,n,i)||!(fn(i)!==ne)?!1:!(r!==void 0&&fn(i)===r))}function wN(t,n,e){return e.some(r=>iu(t,n,r))}function iu(t,n,e){return(t.hasChildren()||n.length>0)&&e.pathMatch==="full"?!1:e.path===""}function DN(t,n,e){return n.length===0&&!t.children[e]}var yg=class{};async function CN(t,n,e,r,i,o,s="emptyOnly",a){return new bg(t,n,e,r,i,s,o,a).recognize()}var EN=31,bg=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(n,e,r,i,o,s,a,l){this.injector=n,this.configLoader=e,this.rootComponentType=r,this.config=i,this.urlTree=o,this.paramsInheritanceStrategy=s,this.urlSerializer=a,this.abortSignal=l,this.applyRedirects=new gg(this.urlSerializer,this.urlTree)}noMatchError(n){return new C(4002,`'${n.segmentGroup}'`)}async recognize(){let n=UD(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:r}=await this.match(n),i=new Vt(r,e),o=new Da("",i),s=nC(r,[],this.urlTree.queryParams,this.urlTree.fragment);return s.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(s),{state:o,tree:s}}async match(n){let e=new Io([],Object.freeze({}),Object.freeze(m({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),ne,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,n,ne,e),rootSnapshot:e}}catch(r){if(r instanceof Ea)return this.urlTree=r.urlTree,this.match(r.urlTree.root);throw r instanceof Jn?this.noMatchError(r):r}}async processSegmentGroup(n,e,r,i,o){if(r.segments.length===0&&r.hasChildren())return this.processChildren(n,e,r,o);let s=await this.processSegment(n,e,r,r.segments,i,!0,o);return s instanceof Vt?[s]:[]}async processChildren(n,e,r,i){let o=[];for(let l of Object.keys(r.children))l==="primary"?o.unshift(l):o.push(l);let s=[];for(let l of o){let c=r.children[l],d=gN(e,l),f=await this.processSegmentGroup(n,d,c,l,i);s.push(...f)}let a=wC(s);return xN(a),a}async processSegment(n,e,r,i,o,s,a){for(let l of e)try{return await this.processSegmentAgainstRoute(l._injector??n,e,l,r,i,o,s,a)}catch(c){if(c instanceof Jn||mC(c))continue;throw c}if(DN(r,i,o))return new yg;throw new Jn(r)}async processSegmentAgainstRoute(n,e,r,i,o,s,a,l){if(fn(r)!==s&&(s===ne||!iu(i,o,r)))throw new Jn(i);if(r.redirectTo===void 0)return this.matchSegmentAgainstRoute(n,i,r,o,s,l);if(this.allowRedirects&&a)return this.expandSegmentAgainstRouteUsingRedirect(n,i,e,r,o,s,l);throw new Jn(i)}async expandSegmentAgainstRouteUsingRedirect(n,e,r,i,o,s,a){let{matched:l,parameters:c,consumedSegments:d,positionalParamSegments:f,remainingSegments:h}=_C(e,i,o);if(!l)throw new Jn(e);typeof i.redirectTo=="string"&&i.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>EN&&(this.allowRedirects=!1));let p=this.createSnapshot(n,i,o,c,a);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let y=await this.applyRedirects.applyRedirectCommands(d,i.redirectTo,f,bC(p),n),E=await this.applyRedirects.lineralizeSegments(i,y);return this.processSegment(n,r,e,E.concat(h),s,!1,a)}createSnapshot(n,e,r,i,o){let s=new Io(r,i,Object.freeze(m({},this.urlTree.queryParams)),this.urlTree.fragment,SN(e),fn(e),e.component??e._loadedComponent??null,e,MN(e),n),a=_g(s,o,this.paramsInheritanceStrategy);return s.params=Object.freeze(a.params),s.data=Object.freeze(a.data),s}async matchSegmentAgainstRoute(n,e,r,i,o,s){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let a=Je=>this.createSnapshot(n,r,Je.consumedSegments,Je.parameters,s),l=await Vd(vN(e,r,i,n,this.urlSerializer,a,this.abortSignal));if(r.path==="**"&&(e.children={}),!l?.matched)throw new Jn(e);n=r._injector??n;let{routes:c}=await this.getChildConfig(n,r,i),d=r._loadedInjector??n,{parameters:f,consumedSegments:h,remainingSegments:p}=l,y=this.createSnapshot(n,r,h,f,s),{segmentGroup:E,slicedSegments:I}=UD(e,h,p,c,o);if(I.length===0&&E.hasChildren()){let Je=await this.processChildren(d,c,E,y);return new Vt(y,Je)}if(c.length===0&&I.length===0)return new Vt(y,[]);let A=fn(r)===o,ye=await this.processSegment(d,c,E,I,A?ne:o,!0,y);return new Vt(y,ye instanceof Vt?[ye]:[])}async getChildConfig(n,e,r){if(e.children)return{routes:e.children,injector:n};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(n).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await Vd(dN(n,e,r,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(n,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw hN(e)}return{routes:[],injector:n}}};function xN(t){t.sort((n,e)=>n.value.outlet===ne?-1:e.value.outlet===ne?1:n.value.outlet.localeCompare(e.value.outlet))}function IN(t){let n=t.value.routeConfig;return n&&n.path===""}function wC(t){let n=[],e=new Set;for(let r of t){if(!IN(r)){n.push(r);continue}let i=n.find(o=>r.value.routeConfig===o.value.routeConfig);i!==void 0?(i.children.push(...r.children),e.add(i)):n.push(r)}for(let r of e){let i=wC(r.children);n.push(new Vt(r.value,i))}return n.filter(r=>!e.has(r))}function SN(t){return t.data||{}}function MN(t){return t.resolve||{}}function TN(t,n,e,r,i,o,s){return Ct(async a=>{let{state:l,tree:c}=await CN(t,n,e,r,a.extractedUrl,i,o,s);return U(m({},a),{targetSnapshot:l,urlAfterRedirects:c})})}function AN(t){return Ct(n=>{let{targetSnapshot:e,guards:{canActivateChecks:r}}=n;if(!r.length)return N(n);let i=new Set(r.map(a=>a.route)),o=new Set;for(let a of i)if(!o.has(a))for(let l of DC(a))o.add(l);let s=0;return Me(o).pipe(Wi(a=>i.has(a)?RN(a,e,t):(a.data=_g(a,a.parent,t).resolve,N(void 0))),Be(()=>s++),Wl(1),Ct(a=>s===o.size?N(n):Ve))})}function DC(t){let n=t.children.map(e=>DC(e)).flat();return[t,...n]}function RN(t,n,e){let r=t.routeConfig,i=t._resolve;return r?.title!==void 0&&!dC(r)&&(i[xa]=r.title),Wr(()=>(t.data=_g(t,t.parent,e).resolve,kN(i,t,n).pipe(T(o=>(t._resolvedData=o,t.data=m(m({},t.data),o),null)))))}function kN(t,n,e){let r=sg(t);if(r.length===0)return N({});let i={};return Me(r).pipe(Ct(o=>NN(t[o],n,e).pipe(Nn(),Be(s=>{if(s instanceof So)throw eu(new Ar,s);i[o]=s}))),Wl(1),T(()=>i),mn(o=>mC(o)?Ve:ps(o)))}function NN(t,n,e){let r=n._environmentInjector,i=Ao(t,r),o=i.resolve?i.resolve(n,e):qe(r,()=>i(n,e));return Ii(o)}function $D(t){return ve(n=>{let e=t(n);return e?Me(e).pipe(T(()=>n)):N(n)})}var Eg=(()=>{class t{buildTitle(e){let r,i=e.root;for(;i!==void 0;)r=this.getResolvedTitleForRoute(i)??r,i=i.children.find(o=>o.outlet===ne);return r}getResolvedTitleForRoute(e){return e.data[xa]}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:()=>u(CC),providedIn:"root"})}return t})(),CC=(()=>{class t extends Eg{title;constructor(e){super(),this.title=e}updateTitle(e){let r=this.buildTitle(e);r!==void 0&&this.title.setTitle(r)}static \u0275fac=function(r){return new(r||t)(M(FD))};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ta=new g("",{factory:()=>({})}),Aa=new g(""),EC=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=u(Cm);async loadComponent(e,r){if(this.componentLoaders.get(r))return this.componentLoaders.get(r);if(r._loadedComponent)return Promise.resolve(r._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(r);let i=(async()=>{try{let o=await WD(qe(e,()=>r.loadComponent())),s=await SC(IC(o));return this.onLoadEndListener&&this.onLoadEndListener(r),r._loadedComponent=s,s}finally{this.componentLoaders.delete(r)}})();return this.componentLoaders.set(r,i),i}loadChildren(e,r){if(this.childrenLoaders.get(r))return this.childrenLoaders.get(r);if(r._loadedRoutes)return Promise.resolve({routes:r._loadedRoutes,injector:r._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(r);let i=(async()=>{try{let o=await xC(r,this.compiler,e,this.onLoadEndListener);return r._loadedRoutes=o.routes,r._loadedInjector=o.injector,r._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(r)}})();return this.childrenLoaders.set(r,i),i}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();async function xC(t,n,e,r){let i=await WD(qe(e,()=>t.loadChildren())),o=await SC(IC(i)),s;o instanceof ad||Array.isArray(o)?s=o:s=await n.compileModuleAsync(o),r&&r(t);let a,l,c=!1,d;return Array.isArray(s)?(l=s,c=!0):(a=s.create(e).injector,d=s,l=a.get(Aa,[],{optional:!0,self:!0}).flat()),{routes:l.map(Cg),injector:a,factory:d}}function ON(t){return t&&typeof t=="object"&&"default"in t}function IC(t){return ON(t)?t.default:t}async function SC(t){return t}var ou=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:()=>u(FN),providedIn:"root"})}return t})(),FN=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,r){return e}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),MC=new g("");var PN=()=>{},TC=new g(""),AC=(()=>{class t{currentNavigation=we(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=we(null);events=new D;transitionAbortWithErrorSubject=new D;configLoader=u(EC);environmentInjector=u(Ie);destroyRef=u(nt);urlSerializer=u(Ia);rootContexts=u(To);location=u(Ir);inputBindingEnabled=u(ru,{optional:!0})!==null;titleStrategy=u(Eg);options=u(Ta,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=u(ou);createViewTransition=u(MC,{optional:!0});navigationErrorHandler=u(TC,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>N(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=i=>this.events.next(new Wd(i)),r=i=>this.events.next(new qd(i));this.configLoader.onLoadEndListener=r,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let r=++this.navigationId;Xe(()=>{this.transitions?.next(U(m({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:r,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new je(null),this.transitions.pipe(ae(r=>r!==null),ve(r=>{let i=!1,o=new AbortController,s=()=>!i&&this.currentTransition?.id===r.id;return N(r).pipe(ve(a=>{if(this.navigationId>r.id)return this.cancelNavigationTransition(r,"",bt.SupersededByNewNavigation),Ve;this.currentTransition=r;let l=this.lastSuccessfulNavigation();this.currentNavigation.set({id:a.id,initialUrl:a.rawUrl,extractedUrl:a.extractedUrl,targetBrowserUrl:typeof a.extras.browserUrl=="string"?this.urlSerializer.parse(a.extras.browserUrl):a.extras.browserUrl,trigger:a.source,extras:a.extras,previousNavigation:l?U(m({},l),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:a.routesRecognizeHandler,beforeActivateHandler:a.beforeActivateHandler});let c=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),d=a.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!c&&d!=="reload")return this.events.next(new tr(a.id,this.urlSerializer.serialize(a.rawUrl),"",ya.IgnoredSameUrlNavigation)),a.resolve(!1),Ve;if(this.urlHandlingStrategy.shouldProcessUrl(a.rawUrl))return N(a).pipe(ve(f=>(this.events.next(new Ei(f.id,this.urlSerializer.serialize(f.extractedUrl),f.source,f.restoredState)),f.id!==this.navigationId?Ve:Promise.resolve(f))),TN(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),Be(f=>{r.targetSnapshot=f.targetSnapshot,r.urlAfterRedirects=f.urlAfterRedirects,this.currentNavigation.update(h=>(h.finalUrl=f.urlAfterRedirects,h)),this.events.next(new _a)}),ve(f=>Me(r.routesRecognizeHandler.deferredHandle??N(void 0)).pipe(T(()=>f))),Be(()=>{let f=new ba(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(f)}));if(c&&this.urlHandlingStrategy.shouldProcessUrl(a.currentRawUrl)){let{id:f,extractedUrl:h,source:p,restoredState:y,extras:E}=a,I=new Ei(f,this.urlSerializer.serialize(h),p,y);this.events.next(I);let A=lC(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=r=U(m({},a),{targetSnapshot:A,urlAfterRedirects:h,extras:U(m({},E),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(ye=>(ye.finalUrl=h,ye)),N(r)}else return this.events.next(new tr(a.id,this.urlSerializer.serialize(a.extractedUrl),"",ya.IgnoredByUrlHandlingStrategy)),a.resolve(!1),Ve}),T(a=>{let l=new Ud(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);return this.events.next(l),this.currentTransition=r=U(m({},a),{guards:Gk(a.targetSnapshot,a.currentSnapshot,this.rootContexts)}),r}),nN(a=>this.events.next(a)),ve(a=>{if(r.guardsResult=a.guardsResult,a.guardsResult&&typeof a.guardsResult!="boolean")throw eu(this.urlSerializer,a.guardsResult);let l=new $d(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot,!!a.guardsResult);if(this.events.next(l),!s())return Ve;if(!a.guardsResult)return this.cancelNavigationTransition(a,"",bt.GuardRejected),Ve;if(a.guards.canActivateChecks.length===0)return N(a);let c=new zd(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);if(this.events.next(c),!s())return Ve;let d=!1;return N(a).pipe(AN(this.paramsInheritanceStrategy),Be({next:()=>{d=!0;let f=new Gd(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(f)},complete:()=>{d||this.cancelNavigationTransition(a,"",bt.NoDataFromResolver)}}))}),$D(a=>{let l=d=>{let f=[];if(d.routeConfig?._loadedComponent)d.component=d.routeConfig?._loadedComponent;else if(d.routeConfig?.loadComponent){let h=d._environmentInjector;f.push(this.configLoader.loadComponent(h,d.routeConfig).then(p=>{d.component=p}))}for(let h of d.children)f.push(...l(h));return f},c=l(a.targetSnapshot.root);return c.length===0?N(a):Me(Promise.all(c).then(()=>a))}),$D(()=>this.afterPreactivation()),ve(()=>{let{currentSnapshot:a,targetSnapshot:l}=r,c=this.createViewTransition?.(this.environmentInjector,a.root,l.root);return c?Me(c).pipe(T(()=>r)):N(r)}),xe(1),ve(a=>{let l=Hk(e.routeReuseStrategy,a.targetSnapshot,a.currentRouterState);this.currentTransition=r=a=U(m({},a),{targetRouterState:l}),this.currentNavigation.update(d=>(d.targetRouterState=l,d)),this.events.next(new Eo);let c=r.beforeActivateHandler.deferredHandle;return c?Me(c.then(()=>a)):N(a)}),Be(a=>{new mg(e.routeReuseStrategy,r.targetRouterState,r.currentRouterState,l=>this.events.next(l),this.inputBindingEnabled).activate(this.rootContexts),s()&&(i=!0,this.currentNavigation.update(l=>(l.abort=PN,l)),this.lastSuccessfulNavigation.set(Xe(this.currentNavigation)),this.events.next(new er(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects))),this.titleStrategy?.updateTitle(a.targetRouterState.snapshot),a.resolve(!0))}),de(gC(o.signal).pipe(ae(()=>!i&&!r.targetRouterState),Be(()=>{this.cancelNavigationTransition(r,o.signal.reason+"",bt.Aborted)}))),Be({complete:()=>{i=!0}}),de(this.transitionAbortWithErrorSubject.pipe(Be(a=>{throw a}))),dr(()=>{o.abort(),i||this.cancelNavigationTransition(r,"",bt.SupersededByNewNavigation),this.currentTransition?.id===r.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),mn(a=>{if(i=!0,this.destroyed)return r.resolve(!1),Ve;if(pC(a))this.events.next(new qt(r.id,this.urlSerializer.serialize(r.extractedUrl),a.message,a.cancellationCode)),zk(a)?this.events.next(new xo(a.url,a.navigationBehaviorOptions)):r.resolve(!1);else{let l=new xi(r.id,this.urlSerializer.serialize(r.extractedUrl),a,r.targetSnapshot??void 0);try{let c=qe(this.environmentInjector,()=>this.navigationErrorHandler?.(l));if(c instanceof So){let{message:d,cancellationCode:f}=eu(this.urlSerializer,c);this.events.next(new qt(r.id,this.urlSerializer.serialize(r.extractedUrl),d,f)),this.events.next(new xo(c.redirectTo,c.navigationBehaviorOptions))}else throw this.events.next(l),a}catch(c){this.options.resolveNavigationPromiseOnError?r.resolve(!1):r.reject(c)}}return Ve}))}))}cancelNavigationTransition(e,r,i){let o=new qt(e.id,this.urlSerializer.serialize(e.extractedUrl),r,i);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),r=Xe(this.currentNavigation),i=r?.targetBrowserUrl??r?.extractedUrl;return e.toString()!==i?.toString()&&!r?.extras.skipLocationChange}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function LN(t){return t!==ma}var RC=new g("");var kC=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:()=>u(jN),providedIn:"root"})}return t})(),nu=class{shouldDetach(n){return!1}store(n,e){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,e){return n.routeConfig===e.routeConfig}shouldDestroyInjector(n){return!0}},jN=(()=>{class t extends nu{static \u0275fac=(()=>{let e;return function(i){return(e||(e=St(t)))(i||t)}})();static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),xg=(()=>{class t{urlSerializer=u(Ia);options=u(Ta,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=u(Ir);urlHandlingStrategy=u(ou);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Yt;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:r,targetBrowserUrl:i}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,r):r,s=i??o;return s instanceof Yt?this.urlSerializer.serialize(s):s}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:r,initialUrl:i}){r&&e?(this.currentUrlTree=r,this.rawUrlTree=this.urlHandlingStrategy.merge(r,i),this.routerState=e):this.rawUrlTree=i}routerState=lC(null,u(Ie));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:()=>u(VN),providedIn:"root"})}return t})(),VN=(()=>{class t extends xg{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(r=>{r.type==="popstate"&&setTimeout(()=>{e(r.url,r.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,r){e instanceof Ei?this.updateStateMemento():e instanceof tr?this.commitTransition(r):e instanceof ba?this.urlUpdateStrategy==="eager"&&(r.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(r),r)):e instanceof Eo?(this.commitTransition(r),this.urlUpdateStrategy==="deferred"&&!r.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(r),r)):e instanceof qt&&!aC(e)?this.restoreHistory(r):e instanceof xi?this.restoreHistory(r,!0):e instanceof er&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,r){let{extras:i,id:o}=r,{replaceUrl:s,state:a}=i;if(this.location.isCurrentPathEqualTo(e)||s){let l=this.browserPageId,c=m(m({},a),this.generateNgRouterState(o,l,r));this.location.replaceState(e,"",c)}else{let l=m(m({},a),this.generateNgRouterState(o,this.browserPageId+1,r));this.location.go(e,"",l)}}restoreHistory(e,r=!1){if(this.canceledNavigationResolution==="computed"){let i=this.browserPageId,o=this.currentPageId-i;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(r&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,r,i){return this.canceledNavigationResolution==="computed"?m({navigationId:e,\u0275routerPageId:r},this.routerUrlState(i)):m({navigationId:e},this.routerUrlState(i))}static \u0275fac=(()=>{let e;return function(i){return(e||(e=St(t)))(i||t)}})();static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Ig(t,n){t.events.pipe(ae(e=>e instanceof er||e instanceof qt||e instanceof xi||e instanceof tr),T(e=>e instanceof er||e instanceof tr?0:(e instanceof qt?e.code===bt.Redirect||e.code===bt.SupersededByNewNavigation:!1)?2:1),ae(e=>e!==2),xe(1)).subscribe(()=>{n()})}var su=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=u(dd);stateManager=u(xg);options=u(Ta,{optional:!0})||{};pendingTasks=u(Bn);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=u(AC);urlSerializer=u(Ia);location=u(Ir);urlHandlingStrategy=u(ou);injector=u(Ie);_events=new D;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=u(kC);injectorCleanup=u(RC,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=u(Aa,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!u(ru,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new ce;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(r=>{try{let i=this.navigationTransitions.currentTransition,o=Xe(this.navigationTransitions.currentNavigation);if(i!==null&&o!==null){if(this.stateManager.handleRouterEvent(r,o),r instanceof qt&&r.code!==bt.Redirect&&r.code!==bt.SupersededByNewNavigation)this.navigated=!0;else if(r instanceof er)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(r instanceof xo){let s=r.navigationBehaviorOptions,a=this.urlHandlingStrategy.merge(r.url,i.currentRawUrl),l=m({scroll:i.extras.scroll,browserUrl:i.extras.browserUrl,info:i.extras.info,skipLocationChange:i.extras.skipLocationChange,replaceUrl:i.extras.replaceUrl||this.urlUpdateStrategy==="eager"||LN(i.source)},s);this.scheduleNavigation(a,ma,null,l,{resolve:i.resolve,reject:i.reject,promise:i.promise})}}Vk(r)&&this._events.next(r)}catch(i){this.navigationTransitions.transitionAbortWithErrorSubject.next(i)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),ma,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,r,i,o)=>{this.navigateToSyncWithBrowser(e,i,r,o)})}navigateToSyncWithBrowser(e,r,i,o){let s=i?.navigationId?i:null,a=i?.\u0275routerUrl??e;if(i?.\u0275routerUrl&&(o=U(m({},o),{browserUrl:e})),i){let c=m({},i);delete c.navigationId,delete c.\u0275routerPageId,delete c.\u0275routerUrl,Object.keys(c).length!==0&&(o.state=c)}let l=this.parseUrl(a);this.scheduleNavigation(l,r,s,o).catch(c=>{this.disposed||this.injector.get(nn)(c)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return Xe(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(Cg),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,r={}){let{relativeTo:i,queryParams:o,fragment:s,queryParamsHandling:a,preserveFragment:l}=r,c=l?this.currentUrlTree.fragment:s,d=null;switch(a??this.options.defaultQueryParamsHandling){case"merge":d=m(m({},this.currentUrlTree.queryParams),o);break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=o||null}d!==null&&(d=this.removeEmptyProps(d));let f;try{let h=i?i.snapshot:this.routerState.snapshot.root;f=rC(h)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),f=this.currentUrlTree.root}return iC(f,e,d,c??null,this.urlSerializer)}navigateByUrl(e,r={skipLocationChange:!1}){let i=Co(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(i,this.rawUrlTree);return this.scheduleNavigation(o,ma,null,r)}navigate(e,r={skipLocationChange:!1}){return BN(e),this.navigateByUrl(this.createUrlTree(e,r),r)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(yn(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,r){let i;if(r===!0?i=m({},YD):r===!1?i=m({},ag):i=m(m({},ag),r),Co(e))return LD(this.currentUrlTree,e,i);let o=this.parseUrl(e);return LD(this.currentUrlTree,o,i)}removeEmptyProps(e){return Object.entries(e).reduce((r,[i,o])=>(o!=null&&(r[i]=o),r),{})}scheduleNavigation(e,r,i,o,s){if(this.disposed)return Promise.resolve(!1);let a,l,c;s?(a=s.resolve,l=s.reject,c=s.promise):c=new Promise((f,h)=>{a=f,l=h});let d=this.pendingTasks.add();return Ig(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(d))}),this.navigationTransitions.handleNavigationRequest({source:r,restoredState:i,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:a,reject:l,promise:c,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),c.catch(Promise.reject.bind(Promise))}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function BN(t){for(let n=0;n<t.length;n++)if(t[n]==null)throw new C(4008,!1)}var $N=new g("");function Sg(t,...n){return ct([{provide:Aa,multi:!0,useValue:t},[],{provide:Rr,useFactory:zN},{provide:hd,multi:!0,useFactory:GN},n.map(e=>e.\u0275providers)])}function zN(){return u(su).routerState.root}function GN(){let t=u(z);return n=>{let e=t.get(ht);if(n!==e.components[0])return;let r=t.get(su),i=t.get(WN);t.get(qN)===1&&r.initialNavigation(),t.get(YN,null,{optional:!0})?.setUpPreloading(),t.get($N,null,{optional:!0})?.init(),r.resetRootComponentType(e.componentTypes[0]),i.closed||(i.next(),i.complete(),i.unsubscribe())}}var WN=new g("",{factory:()=>new D}),qN=new g("",{factory:()=>1});var YN=new g("");var Mg="Service workers are disabled or not supported by this browser",Ro=class{serviceWorker;worker;registration;events;constructor(n,e){if(this.serviceWorker=n,!n)this.worker=this.events=this.registration=new G(r=>r.error(new C(5601,!1)));else{let r=null,i=new D;this.worker=new G(c=>(r!==null&&c.next(r),i.subscribe(d=>c.next(d))));let o=()=>{let{controller:c}=n;c!==null&&(r=c,i.next(r))};n.addEventListener("controllerchange",o),o(),this.registration=this.worker.pipe(ve(()=>n.getRegistration().then(c=>{if(!c)throw new C(5601,!1);return c})));let s=new D;this.events=s.asObservable();let a=c=>{let{data:d}=c;d?.type&&s.next(d)};n.addEventListener("message",a),e?.get(ht,null,{optional:!0})?.onDestroy(()=>{n.removeEventListener("controllerchange",o),n.removeEventListener("message",a)})}}postMessage(n,e){return new Promise(r=>{this.worker.pipe(xe(1)).subscribe(i=>{i.postMessage(m({action:n},e)),r()})})}postMessageWithOperation(n,e,r){let i=this.waitForOperationCompleted(r),o=this.postMessage(n,e);return Promise.all([o,i]).then(([,s])=>s)}generateNonce(){return Math.round(Math.random()*1e7)}eventsOfType(n){let e;return typeof n=="string"?e=r=>r.type===n:e=r=>n.includes(r.type),this.events.pipe(ae(e))}nextEventOfType(n){return this.eventsOfType(n).pipe(xe(1))}waitForOperationCompleted(n){return new Promise((e,r)=>{this.eventsOfType("OPERATION_COMPLETED").pipe(ae(i=>i.nonce===n),xe(1),T(i=>{if(i.result!==void 0)return i.result;throw new Error(i.error)})).subscribe({next:e,error:r})})}get isEnabled(){return!!this.serviceWorker}},OC=(()=>{class t{sw;messages;notificationClicks;notificationCloses;pushSubscriptionChanges;subscription;get isEnabled(){return this.sw.isEnabled}pushManager=null;subscriptionChanges=new D;constructor(e){if(this.sw=e,!e.isEnabled){this.messages=kn,this.notificationClicks=kn,this.notificationCloses=kn,this.pushSubscriptionChanges=kn,this.subscription=kn;return}this.messages=this.sw.eventsOfType("PUSH").pipe(T(i=>i.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(T(i=>i.data)),this.notificationCloses=this.sw.eventsOfType("NOTIFICATION_CLOSE").pipe(T(i=>i.data)),this.pushSubscriptionChanges=this.sw.eventsOfType("PUSH_SUBSCRIPTION_CHANGE").pipe(T(i=>i.data)),this.pushManager=this.sw.registration.pipe(T(i=>i.pushManager));let r=this.pushManager.pipe(ve(i=>i.getSubscription()));this.subscription=new G(i=>{let o=r.subscribe(i),s=this.subscriptionChanges.subscribe(i);return()=>{o.unsubscribe(),s.unsubscribe()}})}requestSubscription(e){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(Mg));let r={userVisibleOnly:!0},i=this.decodeBase64(e.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),o=new Uint8Array(new ArrayBuffer(i.length));for(let s=0;s<i.length;s++)o[s]=i.charCodeAt(s);return r.applicationServerKey=o,new Promise((s,a)=>{this.pushManager.pipe(ve(l=>l.subscribe(r)),xe(1)).subscribe({next:l=>{this.subscriptionChanges.next(l),s(l)},error:a})})}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(Mg));let e=r=>{if(r===null)throw new C(5602,!1);return r.unsubscribe().then(i=>{if(!i)throw new C(5603,!1);this.subscriptionChanges.next(null)})};return new Promise((r,i)=>{this.subscription.pipe(xe(1),ve(e)).subscribe({next:r,error:i})})}decodeBase64(e){return atob(e)}static \u0275fac=function(r){return new(r||t)(M(Ro))};static \u0275prov=_({token:t,factory:t.\u0275fac})}return t})(),au=(()=>{class t{sw;versionUpdates;unrecoverable;get isEnabled(){return this.sw.isEnabled}ongoingCheckForUpdate=null;constructor(e){if(this.sw=e,!e.isEnabled){this.versionUpdates=kn,this.unrecoverable=kn;return}this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE")}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(Mg));if(this.ongoingCheckForUpdate)return this.ongoingCheckForUpdate;let e=this.sw.generateNonce();return this.ongoingCheckForUpdate=this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:e},e).finally(()=>{this.ongoingCheckForUpdate=null}),this.ongoingCheckForUpdate}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new C(5601,!1));let e=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:e},e)}static \u0275fac=function(r){return new(r||t)(M(Ro))};static \u0275prov=_({token:t,factory:t.\u0275fac})}return t})(),FC=new g("");function KN(){let t=u(Ra);if(!("serviceWorker"in navigator&&t.enabled!==!1))return;let n=u(FC),e=u(O),r=u(ht);e.runOutsideAngular(()=>{let i=navigator.serviceWorker,o=()=>i.controller?.postMessage({action:"INITIALIZE"});i.addEventListener("controllerchange",o),r.onDestroy(()=>{i.removeEventListener("controllerchange",o)})}),e.runOutsideAngular(()=>{let i,{registrationStrategy:o}=t;if(typeof o=="function")i=new Promise(s=>o().subscribe(()=>s()));else{let[s,...a]=(o||"registerWhenStable:30000").split(":");switch(s){case"registerImmediately":i=Promise.resolve();break;case"registerWithDelay":i=NC(+a[0]||0);break;case"registerWhenStable":i=Promise.race([r.whenStable(),NC(+a[0])]);break;default:throw new C(5600,!1)}}i.then(()=>{r.destroyed||navigator.serviceWorker.register(n,{scope:t.scope,updateViaCache:t.updateViaCache,type:t.type}).catch(s=>console.error(yn(5604,!1)))})})}function NC(t){return new Promise(n=>setTimeout(n,t))}function QN(){let t=u(Ra),n=u(z),e=!0;return new Ro(e&&t.enabled!==!1?navigator.serviceWorker:void 0,n)}var Ra=class{enabled;updateViaCache;type;scope;registrationStrategy};function XN(t,n={}){return ct([OC,au,{provide:FC,useValue:t},{provide:Ra,useValue:n},{provide:Ro,useFactory:QN},fd(KN)])}var PC=(()=>{class t{static register(e,r={}){return{ngModule:t,providers:[XN(e,r)]}}static \u0275fac=function(r){return new(r||t)};static \u0275mod=L({type:t});static \u0275inj=F({providers:[OC,au]})}return t})();function Si(t){return t.buttons===0||t.detail===0}function Mi(t){let n=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var Tg;function LC(){if(Tg==null){let t=typeof document<"u"?document.head:null;Tg=!!(t&&(t.createShadowRoot||t.attachShadow))}return Tg}function Ag(t){if(LC()){let n=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function mt(t){return t.composedPath?t.composedPath()[0]:t.target}var Rg;try{Rg=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Rg=!1}var Ee=(()=>{class t{_platformId=u(gi);isBrowser=this._platformId?pD(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Rg)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ka;function jC(){if(ka==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>ka=!0}))}finally{ka=ka||!1}return ka}function ko(t){return jC()?t:!!t.capture}function nr(t,n=0){return VC(t)?Number(t):arguments.length===2?n:0}function VC(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function In(t){return t instanceof P?t.nativeElement:t}var BC=new g("cdk-input-modality-detector-options"),HC={ignoreKeys:[18,17,224,91,16]},UC=650,kg={passive:!0,capture:!0},$C=(()=>{class t{_platform=u(Ee);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new je(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(r=>r===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=mt(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<UC||(this._modality.next(Si(e)?"keyboard":"mouse"),this._mostRecentTarget=mt(e))};_onTouchstart=e=>{if(Mi(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=mt(e)};constructor(){let e=u(O),r=u(B),i=u(BC,{optional:!0});if(this._options=m(m({},HC),i),this.modalityDetected=this._modality.pipe(vs(1)),this.modalityChanged=this.modalityDetected.pipe(Gl()),this._platform.isBrowser){let o=u(rt).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(r,"keydown",this._onKeydown,kg),o.listen(r,"mousedown",this._onMousedown,kg),o.listen(r,"touchstart",this._onTouchstart,kg)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Na=(function(t){return t[t.IMMEDIATE=0]="IMMEDIATE",t[t.EVENTUAL=1]="EVENTUAL",t})(Na||{}),zC=new g("cdk-focus-monitor-default-options"),lu=ko({passive:!0,capture:!0}),Sn=(()=>{class t{_ngZone=u(O);_platform=u(Ee);_inputModalityDetector=u($C);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=u(B);_stopInputModalityDetector=new D;constructor(){let e=u(zC,{optional:!0});this._detectionMode=e?.detectionMode||Na.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let r=mt(e);for(let i=r;i;i=i.parentElement)e.type==="focus"?this._onFocus(e,i):this._onBlur(e,i)};monitor(e,r=!1){let i=In(e);if(!this._platform.isBrowser||i.nodeType!==1)return N();let o=Ag(i)||this._document,s=this._elementInfo.get(i);if(s)return r&&(s.checkChildren=!0),s.subject;let a={checkChildren:r,subject:new D,rootNode:o};return this._elementInfo.set(i,a),this._registerGlobalListeners(a),a.subject}stopMonitoring(e){let r=In(e),i=this._elementInfo.get(r);i&&(i.subject.complete(),this._setClasses(r),this._elementInfo.delete(r),this._removeGlobalListeners(i))}focusVia(e,r,i){let o=In(e),s=this._document.activeElement;o===s?this._getClosestElementsInfo(o).forEach(([a,l])=>this._originChanged(a,r,l)):(this._setOrigin(r),typeof o.focus=="function"&&o.focus(i))}ngOnDestroy(){this._elementInfo.forEach((e,r)=>this.stopMonitoring(r))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===Na.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,r){e.classList.toggle("cdk-focused",!!r),e.classList.toggle("cdk-touch-focused",r==="touch"),e.classList.toggle("cdk-keyboard-focused",r==="keyboard"),e.classList.toggle("cdk-mouse-focused",r==="mouse"),e.classList.toggle("cdk-program-focused",r==="program")}_setOrigin(e,r=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&r,this._detectionMode===Na.IMMEDIATE){clearTimeout(this._originTimeoutId);let i=this._originFromTouchInteraction?UC:1;this._originTimeoutId=setTimeout(()=>this._origin=null,i)}})}_onFocus(e,r){let i=this._elementInfo.get(r),o=mt(e);!i||!i.checkChildren&&r!==o||this._originChanged(r,this._getFocusOrigin(o),i)}_onBlur(e,r){let i=this._elementInfo.get(r);!i||i.checkChildren&&e.relatedTarget instanceof Node&&r.contains(e.relatedTarget)||(this._setClasses(r),this._emitOrigin(i,null))}_emitOrigin(e,r){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(r))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let r=e.rootNode,i=this._rootNodeFocusListenerCount.get(r)||0;i||this._ngZone.runOutsideAngular(()=>{r.addEventListener("focus",this._rootNodeFocusAndBlurListener,lu),r.addEventListener("blur",this._rootNodeFocusAndBlurListener,lu)}),this._rootNodeFocusListenerCount.set(r,i+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(de(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let r=e.rootNode;if(this._rootNodeFocusListenerCount.has(r)){let i=this._rootNodeFocusListenerCount.get(r);i>1?this._rootNodeFocusListenerCount.set(r,i-1):(r.removeEventListener("focus",this._rootNodeFocusAndBlurListener,lu),r.removeEventListener("blur",this._rootNodeFocusAndBlurListener,lu),this._rootNodeFocusListenerCount.delete(r))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,r,i){this._setClasses(e,r),this._emitOrigin(i,r),this._lastFocusOrigin=r}_getClosestElementsInfo(e){let r=[];return this._elementInfo.forEach((i,o)=>{(o===e||i.checkChildren&&o.contains(e))&&r.push([o,i])}),r}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:r,mostRecentModality:i}=this._inputModalityDetector;if(i!=="mouse"||!r||r===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let s=0;s<o.length;s++)if(o[s].contains(r))return!0}return!1}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var cu=new WeakMap,_t=(()=>{class t{_appRef;_injector=u(z);_environmentInjector=u(Ie);load(e){let r=this._appRef=this._appRef||this._injector.get(ht),i=cu.get(r);i||(i={loaders:new Set,refs:[]},cu.set(r,i),r.onDestroy(()=>{cu.get(r)?.refs.forEach(o=>o.destroy()),cu.delete(r)})),i.loaders.has(e)||(i.loaders.add(e),i.refs.push(Dd(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var uu=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275cmp=S({type:t,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(r,i){},styles:[`.cdk-visually-hidden {
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
`],encapsulation:2,changeDetection:0})}return t})(),du;function JN(){if(du===void 0&&(du=null,typeof window<"u")){let t=window;t.trustedTypes!==void 0&&(du=t.trustedTypes.createPolicy("angular#components",{createHTML:n=>n}))}return du}function Ti(t){return JN()?.createHTML(t)||t}function GC(t,n,e){let r=e.sanitize(Ke.HTML,n);t.innerHTML=Ti(r||"")}function No(t){return Array.isArray(t)?t:[t]}var WC=new Set,Ai,fu=(()=>{class t{_platform=u(Ee);_nonce=u(vi,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):tO}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&eO(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function eO(t,n){if(!WC.has(t))try{Ai||(Ai=document.createElement("style"),n&&Ai.setAttribute("nonce",n),Ai.setAttribute("type","text/css"),document.head.appendChild(Ai)),Ai.sheet&&(Ai.sheet.insertRule(`@media ${t} {body{ }}`,0),WC.add(t))}catch(e){console.error(e)}}function tO(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}var Ri=(()=>{class t{_mediaMatcher=u(fu);_zone=u(O);_queries=new Map;_destroySubject=new D;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return qC(No(e)).some(i=>this._registerQuery(i).mql.matches)}observe(e){let i=qC(No(e)).map(s=>this._registerQuery(s).observable),o=Gr(i);return o=cr(o.pipe(xe(1)),o.pipe(vs(1),qr(0))),o.pipe(T(s=>{let a={matches:!1,breakpoints:{}};return s.forEach(({matches:l,query:c})=>{a.matches=a.matches||l,a.breakpoints[c]=l}),a}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let r=this._mediaMatcher.matchMedia(e),o={observable:new G(s=>{let a=l=>this._zone.run(()=>s.next(l));return r.addListener(a),()=>{r.removeListener(a)}}).pipe(ze(r),T(({matches:s})=>({query:e,matches:s})),de(this._destroySubject)),mql:r};return this._queries.set(e,o),o}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function qC(t){return t.map(n=>n.split(",")).reduce((n,e)=>n.concat(e)).map(n=>n.trim())}var nO=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var YC=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=L({type:t});static \u0275inj=F({providers:[nO]})}return t})();var pu=(()=>{class t{_platform=u(Ee);constructor(){}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return iO(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let r=rO(fO(e));if(r&&(ZC(r)===-1||!this.isVisible(r)))return!1;let i=e.nodeName.toLowerCase(),o=ZC(e);return e.hasAttribute("contenteditable")?o!==-1:i==="iframe"||i==="object"||this._platform.WEBKIT&&this._platform.IOS&&!dO(e)?!1:i==="audio"?e.hasAttribute("controls")?o!==-1:!1:i==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,r){return uO(e)&&!this.isDisabled(e)&&(r?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function rO(t){try{return t.frameElement}catch{return null}}function iO(t){return!!(t.offsetWidth||t.offsetHeight||typeof t.getClientRects=="function"&&t.getClientRects().length)}function oO(t){let n=t.nodeName.toLowerCase();return n==="input"||n==="select"||n==="button"||n==="textarea"}function sO(t){return lO(t)&&t.type=="hidden"}function aO(t){return cO(t)&&t.hasAttribute("href")}function lO(t){return t.nodeName.toLowerCase()=="input"}function cO(t){return t.nodeName.toLowerCase()=="a"}function KC(t){if(!t.hasAttribute("tabindex")||t.tabIndex===void 0)return!1;let n=t.getAttribute("tabindex");return!!(n&&!isNaN(parseInt(n,10)))}function ZC(t){if(!KC(t))return null;let n=parseInt(t.getAttribute("tabindex")||"",10);return isNaN(n)?-1:n}function dO(t){let n=t.nodeName.toLowerCase(),e=n==="input"&&t.type;return e==="text"||e==="password"||n==="select"||n==="textarea"}function uO(t){return sO(t)?!1:oO(t)||aO(t)||t.hasAttribute("contenteditable")||KC(t)}function fO(t){return t.ownerDocument&&t.ownerDocument.defaultView||window}var hu=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(n){this._enabled=n,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_enabled=!0;constructor(n,e,r,i,o=!1,s){this._element=n,this._checker=e,this._ngZone=r,this._document=i,this._injector=s,o||this.attachAnchors()}destroy(){let n=this._startAnchor,e=this._endAnchor;n&&(n.removeEventListener("focus",this.startAnchorListener),n.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(n)))})}focusFirstTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(n)))})}focusLastTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(n)))})}_getRegionBoundary(n){let e=this._element.querySelectorAll(`[cdk-focus-region-${n}], [cdkFocusRegion${n}], [cdk-focus-${n}]`);return n=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(n){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let r=this._getFirstTabbableElement(e);return r?.focus(n),!!r}return e.focus(n),!0}return this.focusFirstTabbableElement(n)}focusFirstTabbableElement(n){let e=this._getRegionBoundary("start");return e&&e.focus(n),!!e}focusLastTabbableElement(n){let e=this._getRegionBoundary("end");return e&&e.focus(n),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let r=0;r<e.length;r++){let i=e[r].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[r]):null;if(i)return i}return null}_getLastTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let r=e.length-1;r>=0;r--){let i=e[r].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[r]):null;if(i)return i}return null}_createAnchor(){let n=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,n),n.classList.add("cdk-visually-hidden"),n.classList.add("cdk-focus-trap-anchor"),n.setAttribute("aria-hidden","true"),n}_toggleAnchorTabIndex(n,e){n?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(n){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_executeOnStable(n){this._injector?it(n,{injector:this._injector}):setTimeout(n)}},Ng=(()=>{class t{_checker=u(pu);_ngZone=u(O);_document=u(B);_injector=u(z);constructor(){u(_t).load(uu)}create(e,r=!1){return new hu(e,this._checker,this._ngZone,this._document,r,this._injector)}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var QC=new g("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),XC=new g("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),hO=0,Oa=(()=>{class t{_ngZone=u(O);_defaultOptions=u(XC,{optional:!0});_liveElement;_document=u(B);_sanitizer=u(ua);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=u(QC,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...r){let i=this._defaultOptions,o,s;return r.length===1&&typeof r[0]=="number"?s=r[0]:[o,s]=r,this.clear(),clearTimeout(this._previousTimeout),o||(o=i&&i.politeness?i.politeness:"polite"),s==null&&i&&(s=i.duration),this._liveElement.setAttribute("aria-live",o),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(a=>this._currentResolve=a)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:GC(this._liveElement,e,this._sanitizer),typeof s=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),s)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",r=this._document.getElementsByClassName(e),i=this._document.createElement("div");for(let o=0;o<r.length;o++)r[o].remove();return i.classList.add(e),i.classList.add("cdk-visually-hidden"),i.setAttribute("aria-atomic","true"),i.setAttribute("aria-live","polite"),i.id=`cdk-live-announcer-${hO++}`,this._document.body.appendChild(i),i}_exposeAnnouncerToModals(e){let r=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let i=0;i<r.length;i++){let o=r[i],s=o.getAttribute("aria-owns");s?s.indexOf(e)===-1&&o.setAttribute("aria-owns",s+" "+e):o.setAttribute("aria-owns",e)}}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var pO=200,mu=class{_letterKeyStream=new D;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new D;selectedItem=this._selectedItem;constructor(n,e){let r=typeof e?.debounceInterval=="number"?e.debounceInterval:pO;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(n),this._setupKeyHandler(r)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(n){this._selectedItemIndex=n}setItems(n){this._items=n}handleKey(n){let e=n.keyCode;n.key&&n.key.length===1?this._letterKeyStream.next(n.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(n){this._letterKeyStream.pipe(Be(e=>this._pressedLetters.push(e)),qr(n),ae(()=>this._pressedLetters.length>0),T(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let r=1;r<this._items.length+1;r++){let i=(this._selectedItemIndex+r)%this._items.length,o=this._items[i];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function Ft(t,...n){return n.length?n.some(e=>t[e]):t.altKey||t.shiftKey||t.ctrlKey||t.metaKey}var Oo=class{_items;_activeItemIndex=we(-1);_activeItem=we(null);_wrap=!1;_typeaheadSubscription=ce.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=n=>n.disabled;constructor(n,e){this._items=n,n instanceof sn?this._itemChangesSubscription=n.changes.subscribe(r=>this._itemsChanged(r.toArray())):Cr(n)&&(this._effectRef=di(()=>this._itemsChanged(n()),{injector:e}))}tabOut=new D;change=new D;skipPredicate(n){return this._skipPredicateFn=n,this}withWrap(n=!0){return this._wrap=n,this}withVerticalOrientation(n=!0){return this._vertical=n,this}withHorizontalOrientation(n){return this._horizontal=n,this}withAllowedModifierKeys(n){return this._allowedModifierKeys=n,this}withTypeAhead(n=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new mu(e,{debounceInterval:typeof n=="number"?n:void 0,skipPredicate:r=>this._skipPredicateFn(r)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(r=>{this.setActiveItem(r)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(n=!0){return this._homeAndEnd=n,this}withPageUpDown(n=!0,e=10){return this._pageUpAndDown={enabled:n,delta:e},this}setActiveItem(n){let e=this._activeItem();this.updateActiveItem(n),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(n){let e=n.keyCode,i=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!n[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&i){this.setNextItemActive();break}else return;case 38:if(this._vertical&&i){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&i){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&i){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&i){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&i){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&i){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&i){let o=this._activeItemIndex()+this._pageUpAndDown.delta,s=this._getItemsArray().length;this._setActiveItemByIndex(o<s?o:s-1,-1);break}else return;default:(i||Ft(n,"shiftKey"))&&this._typeahead?.handleKey(n);return}this._typeahead?.reset(),n.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(n){let e=this._getItemsArray(),r=typeof n=="number"?n:e.indexOf(n),i=e[r];this._activeItem.set(i??null),this._activeItemIndex.set(r),this._typeahead?.setCurrentSelectedItemIndex(r)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(n){this._wrap?this._setActiveInWrapMode(n):this._setActiveInDefaultMode(n)}_setActiveInWrapMode(n){let e=this._getItemsArray();for(let r=1;r<=e.length;r++){let i=(this._activeItemIndex()+n*r+e.length)%e.length,o=e[i];if(!this._skipPredicateFn(o)){this.setActiveItem(i);return}}}_setActiveInDefaultMode(n){this._setActiveItemByIndex(this._activeItemIndex()+n,n)}_setActiveItemByIndex(n,e){let r=this._getItemsArray();if(r[n]){for(;this._skipPredicateFn(r[n]);)if(n+=e,!r[n])return;this.setActiveItem(n)}}_getItemsArray(){return Cr(this._items)?this._items():this._items instanceof sn?this._items.toArray():this._items}_itemsChanged(n){this._typeahead?.setItems(n);let e=this._activeItem();if(e){let r=n.indexOf(e);r>-1&&r!==this._activeItemIndex()&&(this._activeItemIndex.set(r),this._typeahead?.setCurrentSelectedItemIndex(r))}}};var Va=class extends Oo{setActiveItem(n){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(n),this.activeItem&&this.activeItem.setActiveStyles()}};var Ba=class extends Oo{_origin="program";setFocusOrigin(n){return this._origin=n,this}setActiveItem(n){super.setActiveItem(n),this.activeItem&&this.activeItem.focus(this._origin)}};var Og={},at=class t{_appId=u(ho);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,e=!1){return this._appId!=="ng"&&(n+=this._appId),Og.hasOwnProperty(n)||(Og[n]=0),`${n}${e?t._infix+"-":""}${Og[n]++}`}static \u0275fac=function(e){return new(e||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})};var e0=" ";function t0(t,n,e){let r=n0(t,n);e=e.trim(),!r.some(i=>i.trim()===e)&&(r.push(e),t.setAttribute(n,r.join(e0)))}function Fg(t,n,e){let r=n0(t,n);e=e.trim();let i=r.filter(o=>o!==e);i.length?t.setAttribute(n,i.join(e0)):t.removeAttribute(n)}function n0(t,n){return t.getAttribute(n)?.match(/\S+/g)??[]}var Fo={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};function Pg(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}function $e(t){return t==null?"":typeof t=="string"?t:`${t}px`}var mO=new g("cdk-dir-doc",{providedIn:"root",factory:()=>u(B)}),gO=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function r0(t){let n=t?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?gO.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr"}var wt=(()=>{class t{get value(){return this.valueSignal()}valueSignal=we("ltr");change=new W;constructor(){let e=u(mO,{optional:!0});if(e){let r=e.body?e.body.dir:null,i=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(r0(r||i||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var hn=(function(t){return t[t.NORMAL=0]="NORMAL",t[t.NEGATED=1]="NEGATED",t[t.INVERTED=2]="INVERTED",t})(hn||{}),gu,ki;function vu(){if(ki==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return ki=!1,ki;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)ki=!0;else{let t=Element.prototype.scrollTo;t?ki=!/\{\s*\[native code\]\s*\}/.test(t.toString()):ki=!1}}return ki}function Po(){if(typeof document!="object"||!document)return hn.NORMAL;if(gu==null){let t=document.createElement("div"),n=t.style;t.dir="rtl",n.width="1px",n.overflow="auto",n.visibility="hidden",n.pointerEvents="none",n.position="absolute";let e=document.createElement("div"),r=e.style;r.width="2px",r.height="1px",t.appendChild(e),document.body.appendChild(t),gu=hn.NORMAL,t.scrollLeft===0&&(t.scrollLeft=1,gu=t.scrollLeft===0?hn.NEGATED:hn.INVERTED),t.remove()}return gu}var pe=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=L({type:t});static \u0275inj=F({})}return t})();var vO=20,Ni=(()=>{class t{_ngZone=u(O);_platform=u(Ee);_renderer=u(rt).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new D;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let r=this.scrollContainers.get(e);r&&(r.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=vO){return this._platform.isBrowser?new G(r=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let i=e>0?this._scrolled.pipe($l(e)).subscribe(r):this._scrolled.subscribe(r);return this._scrolledCount++,()=>{i.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):N()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,r)=>this.deregister(r)),this._scrolled.complete()}ancestorScrolled(e,r){let i=this.getAncestorScrollContainers(e);return this.scrolled(r).pipe(ae(o=>!o||i.indexOf(o)>-1))}getAncestorScrollContainers(e){let r=[];return this.scrollContainers.forEach((i,o)=>{this._scrollableContainsElement(o,e)&&r.push(o)}),r}_scrollableContainsElement(e,r){let i=In(r),o=e.getElementRef().nativeElement;do if(i==o)return!0;while(i=i.parentElement);return!1}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Lo=(()=>{class t{elementRef=u(P);scrollDispatcher=u(Ni);ngZone=u(O);dir=u(wt,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new D;_renderer=u(Ue);_cleanupScroll;_elementScrolled=new D;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let r=this.elementRef.nativeElement,i=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=i?e.end:e.start),e.right==null&&(e.right=i?e.start:e.end),e.bottom!=null&&(e.top=r.scrollHeight-r.clientHeight-e.bottom),i&&Po()!=hn.NORMAL?(e.left!=null&&(e.right=r.scrollWidth-r.clientWidth-e.left),Po()==hn.INVERTED?e.left=e.right:Po()==hn.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=r.scrollWidth-r.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let r=this.elementRef.nativeElement;vu()?r.scrollTo(e):(e.top!=null&&(r.scrollTop=e.top),e.left!=null&&(r.scrollLeft=e.left))}measureScrollOffset(e){let r="left",i="right",o=this.elementRef.nativeElement;if(e=="top")return o.scrollTop;if(e=="bottom")return o.scrollHeight-o.clientHeight-o.scrollTop;let s=this.dir&&this.dir.value=="rtl";return e=="start"?e=s?i:r:e=="end"&&(e=s?r:i),s&&Po()==hn.INVERTED?e==r?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:s&&Po()==hn.NEGATED?e==r?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==r?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static \u0275fac=function(r){return new(r||t)};static \u0275dir=q({type:t,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return t})(),yO=20,Mn=(()=>{class t{_platform=u(Ee);_listeners;_viewportSize=null;_change=new D;_document=u(B);constructor(){let e=u(O),r=u(rt).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let i=o=>this._change.next(o);this._listeners=[r.listen("window","resize",i),r.listen("window","orientationchange",i)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:r,height:i}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+i,right:e.left+r,height:i,width:r}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,r=this._getWindow(),i=e.documentElement,o=i.getBoundingClientRect(),s=-o.top||e.body?.scrollTop||r.scrollY||i.scrollTop||0,a=-o.left||e.body?.scrollLeft||r.scrollX||i.scrollLeft||0;return{top:s,left:a}}change(e=yO){return e>0?this._change.pipe($l(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var rr=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=L({type:t});static \u0275inj=F({})}return t})(),Lg=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=L({type:t});static \u0275inj=F({imports:[pe,rr,pe,rr]})}return t})();var Ha=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}},jo=class extends Ha{component;viewContainerRef;injector;projectableNodes;bindings;constructor(n,e,r,i,o){super(),this.component=n,this.viewContainerRef=e,this.injector=r,this.projectableNodes=i,this.bindings=o||null}},ir=class extends Ha{templateRef;viewContainerRef;context;injector;constructor(n,e,r,i){super(),this.templateRef=n,this.viewContainerRef=e,this.context=r,this.injector=i}get origin(){return this.templateRef.elementRef}attach(n,e=this.context){return this.context=e,super.attach(n)}detach(){return this.context=void 0,super.detach()}},jg=class extends Ha{element;constructor(n){super(),this.element=n instanceof P?n.nativeElement:n}},Vo=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof jo)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof ir)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof jg)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},Ua=class extends Vo{outletElement;_appRef;_defaultInjector;constructor(n,e,r){super(),this.outletElement=n,this._appRef=e,this._defaultInjector=r}attachComponentPortal(n){let e;if(n.viewContainerRef){let r=n.injector||n.viewContainerRef.injector,i=r.get(En,null,{optional:!0})||void 0;e=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:r,ngModuleRef:i,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let r=this._appRef,i=n.injector||this._defaultInjector||z.NULL,o=i.get(Ie,r.injector);e=Dd(n.component,{elementInjector:i,environmentInjector:o,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),r.attachView(e.hostView),this.setDisposeFn(()=>{r.viewCount>0&&r.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=n,e}attachTemplatePortal(n){let e=n.viewContainerRef,r=e.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return r.rootNodes.forEach(i=>this.outletElement.appendChild(i)),r.detectChanges(),this.setDisposeFn(()=>{let i=e.indexOf(r);i!==-1&&e.remove(i)}),this._attachedPortal=n,r}attachDomPortal=n=>{let e=n.element;e.parentNode;let r=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(r,e),this.outletElement.appendChild(e),this._attachedPortal=n,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(e,r)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}};var Vg=(()=>{class t extends Vo{_moduleRef=u(En,{optional:!0});_document=u(B);_viewContainerRef=u(ft);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new W;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let r=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,i=r.createComponent(e.component,{index:r.length,injector:e.injector||r.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return r!==this._viewContainerRef&&this._getRootNode().appendChild(i.hostView.rootNodes[0]),super.setDisposeFn(()=>i.destroy()),this._attachedPortal=e,this._attachedRef=i,this.attached.emit(i),i}attachTemplatePortal(e){e.setAttachedHost(this);let r=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}attachDomPortal=e=>{let r=e.element;r.parentNode;let i=this._document.createComment("dom-portal");e.setAttachedHost(this),r.parentNode.insertBefore(i,r),this._getRootNode().appendChild(r),this._attachedPortal=e,super.setDisposeFn(()=>{i.parentNode&&i.parentNode.replaceChild(r,i)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(r){return new(r||t)};static \u0275dir=q({type:t,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[Pe]})}return t})(),Bg=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=L({type:t});static \u0275inj=F({})}return t})();var i0=vu();function u0(t){return new yu(t.get(Mn),t.get(B))}var yu=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(n,e){this._viewportRuler=n,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||"",this._previousHTMLStyles.top=n.style.top||"",n.style.left=$e(-this._previousScrollPosition.left),n.style.top=$e(-this._previousScrollPosition.top),n.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let n=this._document.documentElement,e=this._document.body,r=n.style,i=e.style,o=r.scrollBehavior||"",s=i.scrollBehavior||"";this._isEnabled=!1,r.left=this._previousHTMLStyles.left,r.top=this._previousHTMLStyles.top,n.classList.remove("cdk-global-scrollblock"),i0&&(r.scrollBehavior=i.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),i0&&(r.scrollBehavior=o,i.scrollBehavior=s)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,r=this._viewportRuler.getViewportSize();return e.scrollHeight>r.height||e.scrollWidth>r.width}};function f0(t,n){return new bu(t.get(Ni),t.get(O),t.get(Mn),n)}var bu=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(n,e,r,i){this._scrollDispatcher=n,this._ngZone=e,this._viewportRuler=r,this._config=i}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(this._scrollSubscription)return;let n=this._scrollDispatcher.scrolled(0).pipe(ae(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=n.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=n.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var $a=class{enable(){}disable(){}attach(){}};function Hg(t,n){return n.some(e=>{let r=t.bottom<e.top,i=t.top>e.bottom,o=t.right<e.left,s=t.left>e.right;return r||i||o||s})}function o0(t,n){return n.some(e=>{let r=t.top<e.top,i=t.bottom>e.bottom,o=t.left<e.left,s=t.right>e.right;return r||i||o||s})}function Fi(t,n){return new _u(t.get(Ni),t.get(Mn),t.get(O),n)}var _u=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,e,r,i){this._scrollDispatcher=n,this._viewportRuler=e,this._ngZone=r,this._config=i}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:r,height:i}=this._viewportRuler.getViewportSize();Hg(e,[{width:r,height:i,bottom:i,right:r,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},h0=(()=>{class t{_injector=u(z);constructor(){}noop=()=>new $a;close=e=>f0(this._injector,e);block=()=>u0(this._injector);reposition=e=>Fi(this._injector,e);static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),or=class{positionStrategy;scrollStrategy=new $a;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let e=Object.keys(n);for(let r of e)n[r]!==void 0&&(this[r]=n[r])}}};var wu=class{connectionPair;scrollableViewProperties;constructor(n,e){this.connectionPair=n,this.scrollableViewProperties=e}};var p0=(()=>{class t{_attachedOverlays=[];_document=u(B);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let r=this._attachedOverlays.indexOf(e);r>-1&&this._attachedOverlays.splice(r,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,r,i){return i.observers.length<1?!1:e.eventPredicate?e.eventPredicate(r):!0}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),m0=(()=>{class t extends p0{_ngZone=u(O);_renderer=u(rt).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let r=this._attachedOverlays;for(let i=r.length-1;i>-1;i--){let o=r[i];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(i){return(e||(e=St(t)))(i||t)}})();static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),g0=(()=>{class t extends p0{_platform=u(Ee);_ngZone=u(O);_renderer=u(rt).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let r=this._document.body,i={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(r,"pointerdown",this._pointerDownListener,i),o.listen(r,"click",this._clickListener,i),o.listen(r,"auxclick",this._clickListener,i),o.listen(r,"contextmenu",this._clickListener,i)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=r.style.cursor,r.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=mt(e)};_clickListener=e=>{let r=mt(e),i=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:r;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let s=o.length-1;s>-1;s--){let a=o[s],l=a._outsidePointerEvents;if(!(!a.hasAttached()||!this.canReceiveEvent(a,e,l))){if(s0(a.overlayElement,r)||s0(a.overlayElement,i))break;this._ngZone?this._ngZone.run(()=>l.next(e)):l.next(e)}}};static \u0275fac=(()=>{let e;return function(i){return(e||(e=St(t)))(i||t)}})();static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function s0(t,n){let e=typeof ShadowRoot<"u"&&ShadowRoot,r=n;for(;r;){if(r===t)return!0;r=e&&r instanceof ShadowRoot?r.host:r.parentNode}return!1}var v0=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275cmp=S({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(r,i){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
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
`],encapsulation:2,changeDetection:0})}return t})(),y0=(()=>{class t{_platform=u(Ee);_containerElement;_document=u(B);_styleLoader=u(_t);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||Pg()){let i=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<i.length;o++)i[o].remove()}let r=this._document.createElement("div");r.classList.add(e),Pg()?r.setAttribute("platform","test"):this._platform.isBrowser||r.setAttribute("platform","server"),this._document.body.appendChild(r),this._containerElement=r}_loadStyles(){this._styleLoader.load(v0)}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ug=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,e,r,i){this._renderer=e,this._ngZone=r,this.element=n.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",i)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents="none",n.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function $g(t){return t&&t.nodeType===1}var Du=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new D;_attachments=new D;_detachments=new D;_positionStrategy;_scrollStrategy;_locationChanges=ce.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new D;_outsidePointerEvents=new D;_afterNextRenderRef;constructor(n,e,r,i,o,s,a,l,c,d=!1,f,h){this._portalOutlet=n,this._host=e,this._pane=r,this._config=i,this._ngZone=o,this._keyboardDispatcher=s,this._document=a,this._location=l,this._outsideClickDispatcher=c,this._animationsDisabled=d,this._injector=f,this._renderer=h,i.scrollStrategy&&(this._scrollStrategy=i.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=i.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(n);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=it(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=m(m({},this._config),n),this._updateElementSize()}setDirection(n){this._config=U(m({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n=="string"?n:n.value:"ltr"}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=$e(this._config.width),n.height=$e(this._config.height),n.minWidth=$e(this._config.minWidth),n.minHeight=$e(this._config.minHeight),n.maxWidth=$e(this._config.maxWidth),n.maxHeight=$e(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?"":"none"}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;$g(n)?n.after(this._host):n?.type==="parent"?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let n="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new Ug(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,e,r){let i=No(e||[]).filter(o=>!!o);i.length&&(r?n.classList.add(...i):n.classList.remove(...i))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=it(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(e){if(n)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}},a0="cdk-overlay-connected-position-bounding-box",bO=/([A-Za-z%]+)$/;function za(t,n){return new Cu(n,t.get(Mn),t.get(B),t.get(Ee),t.get(y0))}var Cu=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new D;_resizeSubscription=ce.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,e,r,i,o){this._viewportRuler=e,this._document=r,this._platform=i,this._overlayContainer=o,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(a0),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,e=this._overlayRect,r=this._viewportRect,i=this._containerRect,o=[],s;for(let a of this._preferredPositions){let l=this._getOriginPoint(n,i,a),c=this._getOverlayPoint(l,e,a),d=this._getOverlayFit(c,e,r,a);if(d.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(a,l);return}if(this._canFitWithFlexibleDimensions(d,c,r)){o.push({position:a,origin:l,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(l,a)});continue}(!s||s.overlayFit.visibleArea<d.visibleArea)&&(s={overlayFit:d,overlayPoint:c,originPoint:l,position:a,overlayRect:e})}if(o.length){let a=null,l=-1;for(let c of o){let d=c.boundingBoxRect.width*c.boundingBoxRect.height*(c.position.weight||1);d>l&&(l=d,a=c)}this._isPushed=!1,this._applyPosition(a.position,a.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(s.position,s.originPoint);return}this._applyPosition(s.position,s.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Oi(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(a0),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof P?this._origin.nativeElement:$g(this._origin)?this._origin:null}_getOriginPoint(n,e,r){let i;if(r.originX=="center")i=n.left+n.width/2;else{let s=this._isRtl()?n.right:n.left,a=this._isRtl()?n.left:n.right;i=r.originX=="start"?s:a}e.left<0&&(i-=e.left);let o;return r.originY=="center"?o=n.top+n.height/2:o=r.originY=="top"?n.top:n.bottom,e.top<0&&(o-=e.top),{x:i,y:o}}_getOverlayPoint(n,e,r){let i;r.overlayX=="center"?i=-e.width/2:r.overlayX==="start"?i=this._isRtl()?-e.width:0:i=this._isRtl()?0:-e.width;let o;return r.overlayY=="center"?o=-e.height/2:o=r.overlayY=="top"?0:-e.height,{x:n.x+i,y:n.y+o}}_getOverlayFit(n,e,r,i){let o=c0(e),{x:s,y:a}=n,l=this._getOffset(i,"x"),c=this._getOffset(i,"y");l&&(s+=l),c&&(a+=c);let d=0-s,f=s+o.width-r.width,h=0-a,p=a+o.height-r.height,y=this._subtractOverflows(o.width,d,f),E=this._subtractOverflows(o.height,h,p),I=y*E;return{visibleArea:I,isCompletelyWithinViewport:o.width*o.height===I,fitsInViewportVertically:E===o.height,fitsInViewportHorizontally:y==o.width}}_canFitWithFlexibleDimensions(n,e,r){if(this._hasFlexibleDimensions){let i=r.bottom-e.y,o=r.right-e.x,s=l0(this._overlayRef.getConfig().minHeight),a=l0(this._overlayRef.getConfig().minWidth),l=n.fitsInViewportVertically||s!=null&&s<=i,c=n.fitsInViewportHorizontally||a!=null&&a<=o;return l&&c}return!1}_pushOverlayOnScreen(n,e,r){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let i=c0(e),o=this._viewportRect,s=Math.max(n.x+i.width-o.width,0),a=Math.max(n.y+i.height-o.height,0),l=Math.max(o.top-r.top-n.y,0),c=Math.max(o.left-r.left-n.x,0),d=0,f=0;return i.width<=o.width?d=c||-s:d=n.x<this._getViewportMarginStart()?o.left-r.left-n.x:0,i.height<=o.height?f=l||-a:f=n.y<this._getViewportMarginTop()?o.top-r.top-n.y:0,this._previousPushAmount={x:d,y:f},{x:n.x+d,y:n.y+f}}_applyPosition(n,e){if(this._setTransformOrigin(n),this._setOverlayElementStyles(e,n),this._setBoundingBoxStyles(e,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let r=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!_O(this._lastScrollVisibility,r)){let i=new wu(n,r);this._positionChanges.next(i)}this._lastScrollVisibility=r}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),r,i=n.overlayY;n.overlayX==="center"?r="center":this._isRtl()?r=n.overlayX==="start"?"right":"left":r=n.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${r} ${i}`}_calculateBoundingBoxRect(n,e){let r=this._viewportRect,i=this._isRtl(),o,s,a;if(e.overlayY==="top")s=n.y,o=r.height-s+this._getViewportMarginBottom();else if(e.overlayY==="bottom")a=r.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=r.height-a+this._getViewportMarginTop();else{let p=Math.min(r.bottom-n.y+r.top,n.y),y=this._lastBoundingBoxSize.height;o=p*2,s=n.y-p,o>y&&!this._isInitialRender&&!this._growAfterOpen&&(s=n.y-y/2)}let l=e.overlayX==="start"&&!i||e.overlayX==="end"&&i,c=e.overlayX==="end"&&!i||e.overlayX==="start"&&i,d,f,h;if(c)h=r.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),d=n.x-this._getViewportMarginStart();else if(l)f=n.x,d=r.right-n.x-this._getViewportMarginEnd();else{let p=Math.min(r.right-n.x+r.left,n.x),y=this._lastBoundingBoxSize.width;d=p*2,f=n.x-p,d>y&&!this._isInitialRender&&!this._growAfterOpen&&(f=n.x-y/2)}return{top:s,left:f,bottom:a,right:h,width:d,height:o}}_setBoundingBoxStyles(n,e){let r=this._calculateBoundingBoxRect(n,e);!this._isInitialRender&&!this._growAfterOpen&&(r.height=Math.min(r.height,this._lastBoundingBoxSize.height),r.width=Math.min(r.width,this._lastBoundingBoxSize.width));let i={};if(this._hasExactPosition())i.top=i.left="0",i.bottom=i.right="auto",i.maxHeight=i.maxWidth="",i.width=i.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,s=this._overlayRef.getConfig().maxWidth;i.width=$e(r.width),i.height=$e(r.height),i.top=$e(r.top)||"auto",i.bottom=$e(r.bottom)||"auto",i.left=$e(r.left)||"auto",i.right=$e(r.right)||"auto",e.overlayX==="center"?i.alignItems="center":i.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?i.justifyContent="center":i.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(i.maxHeight=$e(o)),s&&(i.maxWidth=$e(s))}this._lastBoundingBoxSize=r,Oi(this._boundingBox.style,i)}_resetBoundingBoxStyles(){Oi(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){Oi(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(n,e){let r={},i=this._hasExactPosition(),o=this._hasFlexibleDimensions,s=this._overlayRef.getConfig();if(i){let d=this._viewportRuler.getViewportScrollPosition();Oi(r,this._getExactOverlayY(e,n,d)),Oi(r,this._getExactOverlayX(e,n,d))}else r.position="static";let a="",l=this._getOffset(e,"x"),c=this._getOffset(e,"y");l&&(a+=`translateX(${l}px) `),c&&(a+=`translateY(${c}px)`),r.transform=a.trim(),s.maxHeight&&(i?r.maxHeight=$e(s.maxHeight):o&&(r.maxHeight="")),s.maxWidth&&(i?r.maxWidth=$e(s.maxWidth):o&&(r.maxWidth="")),Oi(this._pane.style,r)}_getExactOverlayY(n,e,r){let i={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,n);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,r)),n.overlayY==="bottom"){let s=this._document.documentElement.clientHeight;i.bottom=`${s-(o.y+this._overlayRect.height)}px`}else i.top=$e(o.y);return i}_getExactOverlayX(n,e,r){let i={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,n);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,r));let s;if(this._isRtl()?s=n.overlayX==="end"?"left":"right":s=n.overlayX==="end"?"right":"left",s==="right"){let a=this._document.documentElement.clientWidth;i.right=`${a-(o.x+this._overlayRect.width)}px`}else i.left=$e(o.x);return i}_getScrollVisibility(){let n=this._getOriginRect(),e=this._pane.getBoundingClientRect(),r=this._scrollables.map(i=>i.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:o0(n,r),isOriginOutsideView:Hg(n,r),isOverlayClipped:o0(e,r),isOverlayOutsideView:Hg(e,r)}}_subtractOverflows(n,...e){return e.reduce((r,i)=>r-Math.max(i,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,r=this._viewportRuler.getViewportScrollPosition();return{top:r.top+this._getViewportMarginTop(),left:r.left+this._getViewportMarginStart(),right:r.left+n-this._getViewportMarginEnd(),bottom:r.top+e-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,e){return e==="x"?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&No(n).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof P)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let e=n.width||0,r=n.height||0;return{top:n.y,bottom:n.y+r,left:n.x,right:n.x+e,height:r,width:e}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();n&&(e.style.display="block");let r=e.getBoundingClientRect();return n&&(e.style.display=""),r}};function Oi(t,n){for(let e in n)n.hasOwnProperty(e)&&(t[e]=n[e]);return t}function l0(t){if(typeof t!="number"&&t!=null){let[n,e]=t.split(bO);return!e||e==="px"?parseFloat(n):null}return t||null}function c0(t){return{top:Math.floor(t.top),right:Math.floor(t.right),bottom:Math.floor(t.bottom),left:Math.floor(t.left),width:Math.floor(t.width),height:Math.floor(t.height)}}function _O(t,n){return t===n?!0:t.isOriginClipped===n.isOriginClipped&&t.isOriginOutsideView===n.isOriginOutsideView&&t.isOverlayClipped===n.isOverlayClipped&&t.isOverlayOutsideView===n.isOverlayOutsideView}var d0="cdk-global-overlay-wrapper";function xu(t){return new Eu}var Eu=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(n){let e=n.getConfig();this._overlayRef=n,this._width&&!e.width&&n.updateSize({width:this._width}),this._height&&!e.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(d0),this._isDisposed=!1}top(n=""){return this._bottomOffset="",this._topOffset=n,this._alignItems="flex-start",this}left(n=""){return this._xOffset=n,this._xPosition="left",this}bottom(n=""){return this._topOffset="",this._bottomOffset=n,this._alignItems="flex-end",this}right(n=""){return this._xOffset=n,this._xPosition="right",this}start(n=""){return this._xOffset=n,this._xPosition="start",this}end(n=""){return this._xOffset=n,this._xPosition="end",this}width(n=""){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this}height(n=""){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this}centerHorizontally(n=""){return this.left(n),this._xPosition="center",this}centerVertically(n=""){return this.top(n),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,r=this._overlayRef.getConfig(),{width:i,height:o,maxWidth:s,maxHeight:a}=r,l=(i==="100%"||i==="100vw")&&(!s||s==="100%"||s==="100vw"),c=(o==="100%"||o==="100vh")&&(!a||a==="100%"||a==="100vh"),d=this._xPosition,f=this._xOffset,h=this._overlayRef.getConfig().direction==="rtl",p="",y="",E="";l?E="flex-start":d==="center"?(E="center",h?y=f:p=f):h?d==="left"||d==="end"?(E="flex-end",p=f):(d==="right"||d==="start")&&(E="flex-start",y=f):d==="left"||d==="start"?(E="flex-start",p=f):(d==="right"||d==="end")&&(E="flex-end",y=f),n.position=this._cssPosition,n.marginLeft=l?"0":p,n.marginTop=c?"0":this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=l?"0":y,e.justifyContent=E,e.alignItems=c?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,r=e.style;e.classList.remove(d0),r.justifyContent=r.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position="",this._overlayRef=null,this._isDisposed=!0}},b0=(()=>{class t{_injector=u(z);constructor(){}global(){return xu()}flexibleConnectedTo(e){return za(this._injector,e)}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ga=new g("OVERLAY_DEFAULT_CONFIG");function Pi(t,n){t.get(_t).load(v0);let e=t.get(y0),r=t.get(B),i=t.get(at),o=t.get(ht),s=t.get(wt),a=t.get(Ue,null,{optional:!0})||t.get(rt).createRenderer(null,null),l=new or(n),c=t.get(Ga,null,{optional:!0})?.usePopover??!0;l.direction=l.direction||s.value,"showPopover"in r.body?l.usePopover=n?.usePopover??c:l.usePopover=!1;let d=r.createElement("div"),f=r.createElement("div");d.id=i.getId("cdk-overlay-"),d.classList.add("cdk-overlay-pane"),f.appendChild(d),l.usePopover&&(f.setAttribute("popover","manual"),f.classList.add("cdk-overlay-popover"));let h=l.usePopover?l.positionStrategy?.getPopoverInsertionPoint?.():null;return $g(h)?h.after(f):h?.type==="parent"?h.element.appendChild(f):e.getContainerElement().appendChild(f),new Du(new Ua(d,o,t),f,d,l,t.get(O),t.get(m0),r,t.get(Ir),t.get(g0),n?.disableAnimations??t.get(Gs,null,{optional:!0})==="NoopAnimations",t.get(Ie),a)}var _0=(()=>{class t{scrollStrategies=u(h0);_positionBuilder=u(b0);_injector=u(z);constructor(){}create(e){return Pi(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),wO=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],DO=new g("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let t=u(z);return()=>Fi(t)}}),Bo=(()=>{class t{elementRef=u(P);constructor(){}static \u0275fac=function(r){return new(r||t)};static \u0275dir=q({type:t,selectors:[["","cdk-overlay-origin",""],["","overlay-origin",""],["","cdkOverlayOrigin",""]],exportAs:["cdkOverlayOrigin"]})}return t})(),w0=new g("cdk-connected-overlay-default-config"),Iu=(()=>{class t{_dir=u(wt,{optional:!0});_injector=u(z);_overlayRef;_templatePortal;_backdropSubscription=ce.EMPTY;_attachSubscription=ce.EMPTY;_detachSubscription=ce.EMPTY;_positionSubscription=ce.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=u(DO);_ngZone=u(O);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!="string"&&this._assignConfig(e)}backdropClick=new W;positionChange=new W;attach=new W;detach=new W;overlayKeydown=new W;overlayOutsideClick=new W;constructor(){let e=u(dt),r=u(ft),i=u(w0,{optional:!0}),o=u(Ga,{optional:!0});this.usePopover=o?.usePopover===!1?null:"global",this._templatePortal=new ir(e,r),this.scrollStrategy=this._scrollStrategyFactory(),i&&this._assignConfig(i)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:"ltr"}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=wO);let e=this._overlayRef=Pi(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(r=>{this.overlayKeydown.next(r),r.keyCode===27&&!this.disableClose&&!Ft(r)&&(r.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(r=>{let i=this._getOriginElement(),o=mt(r);(!i||i!==o&&!i.contains(o))&&this.overlayOutsideClick.next(r)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),r=new or({direction:this._dir||"ltr",positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(r.height=this.height),(this.minWidth||this.minWidth===0)&&(r.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(r.minHeight=this.minHeight),this.backdropClass&&(r.backdropClass=this.backdropClass),this.panelClass&&(r.panelClass=this.panelClass),r}_updatePositionStrategy(e){let r=this.positions.map(i=>({originX:i.originX,originY:i.originY,overlayX:i.overlayX,overlayY:i.overlayY,offsetX:i.offsetX||this.offsetX,offsetY:i.offsetY||this.offsetY,panelClass:i.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(r).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?"global":this.usePopover)}_createPositionStrategy(){let e=za(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof Bo?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof Bo?this.origin.elementRef.nativeElement:this.origin instanceof P?this.origin.nativeElement:typeof Element<"u"&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(r=>this.backdropClick.emit(r)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(jf(()=>this.positionChange.observers.length>0)).subscribe(r=>{this._ngZone.run(()=>this.positionChange.emit(r)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth}static \u0275fac=function(r){return new(r||t)};static \u0275dir=q({type:t,selectors:[["","cdk-connected-overlay",""],["","connected-overlay",""],["","cdkConnectedOverlay",""]],inputs:{origin:[0,"cdkConnectedOverlayOrigin","origin"],positions:[0,"cdkConnectedOverlayPositions","positions"],positionStrategy:[0,"cdkConnectedOverlayPositionStrategy","positionStrategy"],offsetX:[0,"cdkConnectedOverlayOffsetX","offsetX"],offsetY:[0,"cdkConnectedOverlayOffsetY","offsetY"],width:[0,"cdkConnectedOverlayWidth","width"],height:[0,"cdkConnectedOverlayHeight","height"],minWidth:[0,"cdkConnectedOverlayMinWidth","minWidth"],minHeight:[0,"cdkConnectedOverlayMinHeight","minHeight"],backdropClass:[0,"cdkConnectedOverlayBackdropClass","backdropClass"],panelClass:[0,"cdkConnectedOverlayPanelClass","panelClass"],viewportMargin:[0,"cdkConnectedOverlayViewportMargin","viewportMargin"],scrollStrategy:[0,"cdkConnectedOverlayScrollStrategy","scrollStrategy"],open:[0,"cdkConnectedOverlayOpen","open"],disableClose:[0,"cdkConnectedOverlayDisableClose","disableClose"],transformOriginSelector:[0,"cdkConnectedOverlayTransformOriginOn","transformOriginSelector"],hasBackdrop:[2,"cdkConnectedOverlayHasBackdrop","hasBackdrop",ie],lockPosition:[2,"cdkConnectedOverlayLockPosition","lockPosition",ie],flexibleDimensions:[2,"cdkConnectedOverlayFlexibleDimensions","flexibleDimensions",ie],growAfterOpen:[2,"cdkConnectedOverlayGrowAfterOpen","growAfterOpen",ie],push:[2,"cdkConnectedOverlayPush","push",ie],disposeOnNavigation:[2,"cdkConnectedOverlayDisposeOnNavigation","disposeOnNavigation",ie],usePopover:[0,"cdkConnectedOverlayUsePopover","usePopover"],matchWidth:[2,"cdkConnectedOverlayMatchWidth","matchWidth",ie],_config:[0,"cdkConnectedOverlay","_config"]},outputs:{backdropClick:"backdropClick",positionChange:"positionChange",attach:"attach",detach:"detach",overlayKeydown:"overlayKeydown",overlayOutsideClick:"overlayOutsideClick"},exportAs:["cdkConnectedOverlay"],features:[ut]})}return t})(),Uo=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=L({type:t});static \u0275inj=F({providers:[_0],imports:[pe,Bg,Lg,Lg]})}return t})();var CO=new g("MATERIAL_ANIMATIONS"),D0=null;function EO(){return u(CO,{optional:!0})?.animationsDisabled||u(Gs,{optional:!0})==="NoopAnimations"?"di-disabled":(D0??=u(fu).matchMedia("(prefers-reduced-motion)").matches,D0?"reduced-motion":"enabled")}function Le(){return EO()!=="enabled"}function Zt(t){return t!=null&&`${t}`!="false"}var Kt=(function(t){return t[t.FADING_IN=0]="FADING_IN",t[t.VISIBLE=1]="VISIBLE",t[t.FADING_OUT=2]="FADING_OUT",t[t.HIDDEN=3]="HIDDEN",t})(Kt||{}),zg=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=Kt.HIDDEN;constructor(n,e,r,i=!1){this._renderer=n,this.element=e,this.config=r,this._animationForciblyDisabledThroughCss=i}fadeOut(){this._renderer.fadeOutRipple(this)}},C0=ko({passive:!0,capture:!0}),Gg=class{_events=new Map;addHandler(n,e,r,i){let o=this._events.get(e);if(o){let s=o.get(r);s?s.add(i):o.set(r,new Set([i]))}else this._events.set(e,new Map([[r,new Set([i])]])),n.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,C0)})}removeHandler(n,e,r){let i=this._events.get(n);if(!i)return;let o=i.get(e);o&&(o.delete(r),o.size===0&&i.delete(e),i.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,C0)))}_delegateEventHandler=n=>{let e=mt(n);e&&this._events.get(n.type)?.forEach((r,i)=>{(i===e||i.contains(e))&&r.forEach(o=>o.handleEvent(n))})}},Wa={enterDuration:225,exitDuration:150},xO=800,E0=ko({passive:!0,capture:!0}),x0=["mousedown","touchstart"],I0=["mouseup","mouseleave","touchend","touchcancel"],IO=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275cmp=S({type:t,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(r,i){},styles:[`.mat-ripple {
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
`],encapsulation:2,changeDetection:0})}return t})(),qa=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Gg;constructor(n,e,r,i,o){this._target=n,this._ngZone=e,this._platform=i,i.isBrowser&&(this._containerElement=In(r)),o&&o.get(_t).load(IO)}fadeInRipple(n,e,r={}){let i=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=m(m({},Wa),r.animation);r.centered&&(n=i.left+i.width/2,e=i.top+i.height/2);let s=r.radius||SO(n,e,i),a=n-i.left,l=e-i.top,c=o.enterDuration,d=document.createElement("div");d.classList.add("mat-ripple-element"),d.style.left=`${a-s}px`,d.style.top=`${l-s}px`,d.style.height=`${s*2}px`,d.style.width=`${s*2}px`,r.color!=null&&(d.style.backgroundColor=r.color),d.style.transitionDuration=`${c}ms`,this._containerElement.appendChild(d);let f=window.getComputedStyle(d),h=f.transitionProperty,p=f.transitionDuration,y=h==="none"||p==="0s"||p==="0s, 0s"||i.width===0&&i.height===0,E=new zg(this,d,r,y);d.style.transform="scale3d(1, 1, 1)",E.state=Kt.FADING_IN,r.persistent||(this._mostRecentTransientRipple=E);let I=null;return!y&&(c||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let A=()=>{I&&(I.fallbackTimer=null),clearTimeout(Je),this._finishRippleTransition(E)},ye=()=>this._destroyRipple(E),Je=setTimeout(ye,c+100);d.addEventListener("transitionend",A),d.addEventListener("transitioncancel",ye),I={onTransitionEnd:A,onTransitionCancel:ye,fallbackTimer:Je}}),this._activeRipples.set(E,I),(y||!c)&&this._finishRippleTransition(E),E}fadeOutRipple(n){if(n.state===Kt.FADING_OUT||n.state===Kt.HIDDEN)return;let e=n.element,r=m(m({},Wa),n.config.animation);e.style.transitionDuration=`${r.exitDuration}ms`,e.style.opacity="0",n.state=Kt.FADING_OUT,(n._animationForciblyDisabledThroughCss||!r.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let e=In(n);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,x0.forEach(r=>{t._eventManager.addHandler(this._ngZone,r,e,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{I0.forEach(e=>{this._triggerElement.addEventListener(e,this,E0)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===Kt.FADING_IN?this._startFadeOutTransition(n):n.state===Kt.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let e=n===this._mostRecentTransientRipple,{persistent:r}=n.config;n.state=Kt.VISIBLE,!r&&(!e||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let e=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=Kt.HIDDEN,e!==null&&(n.element.removeEventListener("transitionend",e.onTransitionEnd),n.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),n.element.remove()}_onMousedown(n){let e=Si(n),r=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+xO;!this._target.rippleDisabled&&!e&&!r&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!Mi(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=n.changedTouches;if(e)for(let r=0;r<e.length;r++)this.fadeInRipple(e[r].clientX,e[r].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let e=n.state===Kt.VISIBLE||n.config.terminateOnPointerUp&&n.state===Kt.FADING_IN;!n.config.persistent&&e&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(x0.forEach(e=>t._eventManager.removeHandler(e,n,this)),this._pointerUpEventsRegistered&&(I0.forEach(e=>n.removeEventListener(e,this,E0)),this._pointerUpEventsRegistered=!1))}};function SO(t,n,e){let r=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),i=Math.max(Math.abs(n-e.top),Math.abs(n-e.bottom));return Math.sqrt(r*r+i*i)}var Wg=new g("mat-ripple-global-options"),$o=(()=>{class t{_elementRef=u(P);_animationsDisabled=Le();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=u(O),r=u(Ee),i=u(Wg,{optional:!0}),o=u(z);this._globalOptions=i||{},this._rippleRenderer=new qa(this,e,this._elementRef,r,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:m(m(m({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,r=0,i){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,r,m(m({},this.rippleConfig),i)):this._rippleRenderer.fadeInRipple(0,0,m(m({},this.rippleConfig),e))}static \u0275fac=function(r){return new(r||t)};static \u0275dir=q({type:t,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(r,i){r&2&&j("mat-ripple-unbounded",i.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return t})();var MO={capture:!0},TO=["focus","mousedown","mouseenter","touchstart"],qg="mat-ripple-loader-uninitialized",Yg="mat-ripple-loader-class-name",S0="mat-ripple-loader-centered",Su="mat-ripple-loader-disabled",M0=(()=>{class t{_document=u(B);_animationsDisabled=Le();_globalRippleOptions=u(Wg,{optional:!0});_platform=u(Ee);_ngZone=u(O);_injector=u(z);_eventCleanups;_hosts=new Map;constructor(){let e=u(rt).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>TO.map(r=>e.listen(this._document,r,this._onInteraction,MO)))}ngOnDestroy(){let e=this._hosts.keys();for(let r of e)this.destroyRipple(r);this._eventCleanups.forEach(r=>r())}configureRipple(e,r){e.setAttribute(qg,this._globalRippleOptions?.namespace??""),(r.className||!e.hasAttribute(Yg))&&e.setAttribute(Yg,r.className||""),r.centered&&e.setAttribute(S0,""),r.disabled&&e.setAttribute(Su,"")}setDisabled(e,r){let i=this._hosts.get(e);i?(i.target.rippleDisabled=r,!r&&!i.hasSetUpEvents&&(i.hasSetUpEvents=!0,i.renderer.setupTriggerEvents(e))):r?e.setAttribute(Su,""):e.removeAttribute(Su)}_onInteraction=e=>{let r=mt(e);if(r instanceof HTMLElement){let i=r.closest(`[${qg}="${this._globalRippleOptions?.namespace??""}"]`);i&&this._createRipple(i)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let r=this._document.createElement("span");r.classList.add("mat-ripple",e.getAttribute(Yg)),e.append(r);let i=this._globalRippleOptions,o=this._animationsDisabled?0:i?.animation?.enterDuration??Wa.enterDuration,s=this._animationsDisabled?0:i?.animation?.exitDuration??Wa.exitDuration,a={rippleDisabled:this._animationsDisabled||i?.disabled||e.hasAttribute(Su),rippleConfig:{centered:e.hasAttribute(S0),terminateOnPointerUp:i?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:s}}},l=new qa(a,this._ngZone,r,this._platform,this._injector),c=!a.rippleDisabled;c&&l.setupTriggerEvents(e),this._hosts.set(e,{target:a,renderer:l,hasSetUpEvents:c}),e.removeAttribute(qg)}destroyRipple(e){let r=this._hosts.get(e);r&&(r.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var kr=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275cmp=S({type:t,selectors:[["structural-styles"]],decls:0,vars:0,template:function(r,i){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2,changeDetection:0})}return t})();var AO=["mat-icon-button",""],RO=["*"],kO=new g("MAT_BUTTON_CONFIG");function T0(t){return t==null?void 0:bi(t)}var Zg=(()=>{class t{_elementRef=u(P);_ngZone=u(O);_animationsDisabled=Le();_config=u(kO,{optional:!0});_focusMonitor=u(Sn);_cleanupClick;_renderer=u(Ue);_rippleLoader=u(M0);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){u(_t).load(kr);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",r){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,r):this._elementRef.nativeElement.focus(r)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(r){return new(r||t)};static \u0275dir=q({type:t,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(r,i){r&2&&(ue("disabled",i._getDisabledAttribute())("aria-disabled",i._getAriaDisabled())("tabindex",i._getTabIndex()),Mt(i.color?"mat-"+i.color:""),j("mat-mdc-button-disabled",i.disabled)("mat-mdc-button-disabled-interactive",i.disabledInteractive)("mat-unthemed",!i.color)("_mat-animation-noopable",i._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",ie],disabled:[2,"disabled","disabled",ie],ariaDisabled:[2,"aria-disabled","ariaDisabled",ie],disabledInteractive:[2,"disabledInteractive","disabledInteractive",ie],tabIndex:[2,"tabIndex","tabIndex",T0],_tabindex:[2,"tabindex","_tabindex",T0]}})}return t})(),Kg=(()=>{class t extends Zg{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=S({type:t,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[Pe],attrs:AO,ngContentSelectors:RO,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(r,i){r&1&&(le(),kt(0,"span",0),R(1),kt(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
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
`],encapsulation:2,changeDetection:0})}return t})();var zo=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=L({type:t});static \u0275inj=F({imports:[pe]})}return t})();var NO=["matButton",""],OO=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],FO=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var A0=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Mu=(()=>{class t extends Zg{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=PO(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let r=this._elementRef.nativeElement.classList,i=this._appearance?A0.get(this._appearance):null,o=A0.get(e);i&&r.remove(...i),r.add(...o),this._appearance=e}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=S({type:t,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[Pe],attrs:NO,ngContentSelectors:FO,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(r,i){r&1&&(le(OO),kt(0,"span",0),R(1),ot(2,"span",1),R(3,1),pt(),R(4,2),kt(5,"span",2)(6,"span",3)),r&2&&j("mdc-button__ripple",!i._isFab)("mdc-fab__ripple",i._isFab)},styles:[`.mat-mdc-button-base {
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
`],encapsulation:2,changeDetection:0})}return t})();function PO(t){return t.hasAttribute("mat-raised-button")?"elevated":t.hasAttribute("mat-stroked-button")?"outlined":t.hasAttribute("mat-flat-button")?"filled":t.hasAttribute("mat-button")?"text":null}var Ya=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=L({type:t});static \u0275inj=F({imports:[zo,pe]})}return t})();function LO(t,n){if(t&1){let e=Nt();b(0,"div",1)(1,"button",2),ge("click",function(){Ye(e);let i=H();return Ze(i.action())}),x(2),w()()}if(t&2){let e=H();v(2),se(" ",e.data.action," ")}}var jO=["label"];function VO(t,n){}var BO=Math.pow(2,31)-1,Za=class{_overlayRef;instance;containerInstance;_afterDismissed=new D;_afterOpened=new D;_onAction=new D;_durationTimeoutId;_dismissedByAction=!1;constructor(n,e){this._overlayRef=e,this.containerInstance=n,n._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(n){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(n,BO))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},k0=new g("MatSnackBarData"),Go=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},HO=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275dir=q({type:t,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return t})(),UO=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275dir=q({type:t,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return t})(),$O=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275dir=q({type:t,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return t})(),zO=(()=>{class t{snackBarRef=u(Za);data=u(k0);constructor(){}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=S({type:t,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(r,i){r&1&&(b(0,"div",0),x(1),w(),X(2,LO,3,1,"div",1)),r&2&&(v(),se(" ",i.data.message,`
`),v(),J(i.hasAction?2:-1))},dependencies:[Mu,HO,UO,$O],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2,changeDetection:0})}return t})(),Qg="_mat-snack-bar-enter",Xg="_mat-snack-bar-exit",GO=(()=>{class t extends Vo{_ngZone=u(O);_elementRef=u(P);_changeDetectorRef=u(Te);_platform=u(Ee);_animationsDisabled=Le();snackBarConfig=u(Go);_document=u(B);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=u(z);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new D;_onExit=new D;_onEnter=new D;_animationState="void";_live;_label;_role;_liveElementId=u(at).getId("mat-snack-bar-container-live-");constructor(){super();let e=this.snackBarConfig;e.politeness==="assertive"&&!e.announcementMessage?this._live="assertive":e.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(e){this._assertNotAttached();let r=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),r}attachTemplatePortal(e){this._assertNotAttached();let r=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),r}attachDomPortal=e=>{this._assertNotAttached();let r=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),r};onAnimationEnd(e){e===Xg?this._completeExit():e===Qg&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?it(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Qg)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(Qg)},200)))}exit(){return this._destroyed?N(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?it(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Xg)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(Xg),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,r=this.snackBarConfig.panelClass;r&&(Array.isArray(r)?r.forEach(s=>e.classList.add(s)):e.classList.add(r)),this._exposeToModals();let i=this._label.nativeElement,o="mdc-snackbar__label";i.classList.toggle(o,!i.querySelector(`.${o}`))}_exposeToModals(){let e=this._liveElementId,r=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let i=0;i<r.length;i++){let o=r[i],s=o.getAttribute("aria-owns");this._trackedModals.add(o),s?s.indexOf(e)===-1&&o.setAttribute("aria-owns",s+" "+e):o.setAttribute("aria-owns",e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let r=e.getAttribute("aria-owns");if(r){let i=r.replace(this._liveElementId,"").trim();i.length>0?e.setAttribute("aria-owns",i):e.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,r=e.querySelector("[aria-hidden]"),i=e.querySelector("[aria-live]");if(r&&i){let o=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&r.contains(document.activeElement)&&(o=document.activeElement),r.removeAttribute("aria-hidden"),i.appendChild(r),o?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=S({type:t,selectors:[["mat-snack-bar-container"]],viewQuery:function(r,i){if(r&1&&Qe(Vg,7)(jO,7),r&2){let o;Z(o=K())&&(i._portalOutlet=o.first),Z(o=K())&&(i._label=o.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(r,i){r&1&&ge("animationend",function(s){return i.onAnimationEnd(s.animationName)})("animationcancel",function(s){return i.onAnimationEnd(s.animationName)}),r&2&&j("mat-snack-bar-container-enter",i._animationState==="visible")("mat-snack-bar-container-exit",i._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!i._animationsDisabled)},features:[Pe],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(r,i){r&1&&(b(0,"div",1)(1,"div",2,0)(3,"div",3),zt(4,VO,0,0,"ng-template",4),w(),he(5,"div"),w()()),r&2&&(v(5),ue("aria-live",i._live)("role",i._role)("id",i._liveElementId))},dependencies:[Vg],styles:[`@keyframes _mat-snack-bar-enter {
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
`],encapsulation:2})}return t})(),WO=new g("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new Go}),N0=(()=>{class t{_live=u(Oa);_injector=u(z);_breakpointObserver=u(Ri);_parentSnackBar=u(t,{optional:!0,skipSelf:!0});_defaultConfig=u(WO);_animationsDisabled=Le();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=zO;snackBarContainerComponent=GO;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}constructor(){}openFromComponent(e,r){return this._attach(e,r)}openFromTemplate(e,r){return this._attach(e,r)}open(e,r="",i){let o=m(m({},this._defaultConfig),i);return o.data={message:e,action:r},o.announcementMessage===e&&(o.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,o)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,r){let i=r&&r.viewContainerRef&&r.viewContainerRef.injector,o=z.create({parent:i||this._injector,providers:[{provide:Go,useValue:r}]}),s=new jo(this.snackBarContainerComponent,r.viewContainerRef,o),a=e.attach(s);return a.instance.snackBarConfig=r,a.instance}_attach(e,r){let i=m(m(m({},new Go),this._defaultConfig),r),o=this._createOverlay(i),s=this._attachSnackBarContainer(o,i),a=new Za(s,o);if(e instanceof dt){let l=new ir(e,null,{$implicit:i.data,snackBarRef:a});a.instance=s.attachTemplatePortal(l)}else{let l=this._createInjector(i,a),c=new jo(e,void 0,l),d=s.attachComponentPortal(c);a.instance=d.instance}return this._breakpointObserver.observe(Fo.HandsetPortrait).pipe(de(o.detachments())).subscribe(l=>{o.overlayElement.classList.toggle(this.handsetCssClass,l.matches)}),i.announcementMessage&&s._onAnnounce.subscribe(()=>{this._live.announce(i.announcementMessage,i.politeness)}),this._animateSnackBar(a,i),this._openedSnackBarRef=a,this._openedSnackBarRef}_animateSnackBar(e,r){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),r.announcementMessage&&this._live.clear()}),r.duration&&r.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(r.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let r=new or;r.direction=e.direction;let i=xu(this._injector),o=e.direction==="rtl",s=e.horizontalPosition==="left"||e.horizontalPosition==="start"&&!o||e.horizontalPosition==="end"&&o,a=!s&&e.horizontalPosition!=="center";return s?i.left("0"):a?i.right("0"):i.centerHorizontally(),e.verticalPosition==="top"?i.top("0"):i.bottom("0"),r.positionStrategy=i,r.disableAnimations=this._animationsDisabled,Pi(this._injector,r)}_createInjector(e,r){let i=e&&e.viewContainerRef&&e.viewContainerRef.injector;return z.create({parent:i||this._injector,providers:[{provide:Za,useValue:r},{provide:k0,useValue:e.data}]})}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Jg(t){t||(t=u(nt));let n=new G(e=>{if(t.destroyed){e.next();return}return t.onDestroy(e.next.bind(e))});return e=>e.pipe(de(n))}var nv=class{translations;constructor(n){this.translations=n}getTranslation(n){return N(this.translations.get(n)||{})}},P0=new g("");function ev(t,n){return t&&(Object.prototype.hasOwnProperty.call(t,n)?t[n]:n.split(".").reduce((e,r)=>e?.[r],t))}function qO(t,n,e){t=m({},t);let r=n.split("."),i=r.length-1;return r.reduce((o,s,a)=>(a===i?o[s]=e:o[s]=Array.isArray(o[s])?o[s].slice():m({},o[s]),o&&o[s]),t),t}function L0(t){return t?Array.isArray(t)?t.length:Ru(t)?Object.keys(t).length:t?t.length:0:0}function YO(t){return L0(t)===0}function ZO(t){return typeof t=="function"}function qo(t){return typeof t=="string"}function Ru(t){return!!t&&typeof t=="object"&&!Array.isArray(t)}function j0(t){return t.replace(/(?:^\w|[A-Z]|\b\w)/g,(n,e)=>e==0?n.toLowerCase():n.toUpperCase()).replace(/\s+|_|-|\//g,"")}function V0(){return typeof window<"u"}function rv(t){return t==null}function O0(t){return rv(t)===!1}function B0(t){return t&&typeof t.scope=="string"}function KO(t){return t&&Ru(t.loader)}function F0(t){let n={};function e(r,i){if(r===null)n[i]=null;else if(Ru(r))for(let[o,s]of Object.entries(r))e(s,i?`${i}.${o}`:o);else n[i]=r}return e(t,""),n}function QO(t){let n={};for(let[e,r]of Object.entries(t)){let i=e.split("."),o=n;i.forEach((s,a)=>{a===i.length-1?o[s]=r:(o[s]??={},o=o[s])})}return n}var Yo=new g("",{providedIn:"root",factory:()=>Wo}),Wo={defaultLang:"en",reRenderOnLangChange:!1,prodMode:!1,failedRetries:2,fallbackLang:[],availableLangs:[],missingHandler:{logMissingKey:!0,useFallbackTranslation:!1,allowEmpty:!1},flatten:{aot:!1},interpolation:["{{","}}"],scopes:{keepCasing:!1}};function XO(t={}){return U(m(m({},Wo),t),{missingHandler:m(m({},Wo.missingHandler),t.missingHandler),flatten:m(m({},Wo.flatten),t.flatten),scopes:m(m({},Wo.scopes),t.scopes)})}var H0=new g(""),JO=(()=>{class t{config=u(Yo,{optional:!0})??Wo;get interpolationMatcher(){return eF(this.config)}transpile({value:e,params:r={},translation:i,key:o}){if(qo(e)){let s,a=e;for(;(s=this.interpolationMatcher.exec(a))!==null;){let[l,c]=s;a=a.replace(l,()=>{let d=c.trim(),f=ev(r,d);return O0(f)?f:O0(i[d])?this.transpile({params:r,translation:i,key:o,value:i[d]}):""})}return a}else r&&(Ru(e)?e=this.handleObject({value:e,params:r,translation:i,key:o}):Array.isArray(e)&&(e=this.handleArray({value:e,params:r,translation:i,key:o})));return e}handleObject({value:e,params:r={},translation:i,key:o}){let s=e;return Object.keys(r).forEach(a=>{let l=this.transpile({value:ev(s,a),params:ev(r,a),translation:i,key:o});s=qO(s,a,l)}),s}handleArray(i){var o=i,{value:e}=o,r=vf(o,["value"]);return e.map(s=>this.transpile(m({value:s},r)))}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:t.\u0275fac})}return t})();function eF(t){let[n,e]=t.interpolation;return new RegExp(`${n}([^${n}${e}]*?)${e}`,"g")}var U0=new g(""),tF=(()=>{class t{handle(e,r){if(r.missingHandler.logMissingKey&&!r.prodMode){let i=`Missing translation for '${e}'`;console.warn(`%c ${i}`,"font-size: 12px; color: red")}return e}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:t.\u0275fac})}return t})(),$0=new g(""),nF=(()=>{class t{preSaveTranslation(e){return e}preSaveTranslationKey(e,r){return r}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:t.\u0275fac})}return t})(),z0=new g(""),rF=(()=>{class t{userConfig;constructor(e){this.userConfig=e}getNextLangs(){let e=this.userConfig.fallbackLang;if(!e)throw new Error("When using the default fallback, a fallback language must be provided in the config!");return Array.isArray(e)?e:[e]}static \u0275fac=function(r){return new(r||t)(M(Yo))};static \u0275prov=_({token:t,factory:t.\u0275fac})}return t})();function Ka(t){if(!t)return"";let n=t.split("/");return n.pop(),n.join("/")}function Nr(t){return t?t.split("/").pop():""}function iv(t,n,e="|"){if(qo(t)){let r=t.split(e),i=r.pop();return i===n?[!0,r.toString()]:[!1,i]}return[!1,""]}function G0(t,n){let[e]=iv(n,"static");return e?!1:!!t.config.reRenderOnLangChange}function W0(t){return t?n=>n:xe(1)}function iF(t,n){return Object.keys(t).reduce((e,r)=>(e[`${n}/${r}`]=t[r],e),{})}function sv(t,n){return KO(t)?iF(t.loader,n):void 0}function tv(t){return{scope:Ka(t)||null,langName:Nr(t)}}function q0(t){let{path:n,inlineLoader:e,mainLoader:r,data:i}=t;if(e){let o=e[n];if(ZO(o)===!1)throw`You're using an inline loader but didn't provide a loader for ${n}`;return e[n]().then(s=>s.default?s.default:s)}return r.getTranslation(n,i)}function oF({mainLoader:t,path:n,data:e,fallbackPath:r,inlineLoader:i}){return(r?[n,r]:[n]).map(s=>{let a=q0({path:s,mainLoader:t,inlineLoader:i,data:e});return Me(a).pipe(T(l=>({translation:l,lang:s})))})}var sF;var Zo=(()=>{class t{loader;parser;missingHandler;interceptor;fallbackStrategy;langChanges$;translations=new Map;cache=new Map;firstFallbackLang;defaultLang="";availableLangs=[];isResolvedMissingOnce=!1;lang;failedLangs=new Set;events=new D;events$=this.events.asObservable();config;destroyRef=u(nt);constructor(e,r,i,o,s,a){this.loader=e,this.parser=r,this.missingHandler=i,this.interceptor=o,this.fallbackStrategy=a,this.loader||(this.loader=new nv(this.translations)),sF=this,this.config=JSON.parse(JSON.stringify(s)),this.setAvailableLangs(this.config.availableLangs||[]),this.setFallbackLangForMissingTranslation(this.config),this.setDefaultLang(this.config.defaultLang),this.lang=new je(this.getDefaultLang()),this.langChanges$=this.lang.asObservable(),this.events$.subscribe(l=>{l.type==="translationLoadSuccess"&&l.wasFailure&&this.setActiveLang(l.payload.langName)}),this.destroyRef.onDestroy(()=>{this.lang.complete(),this.events.complete(),this.cache.clear()})}getDefaultLang(){return this.defaultLang}setDefaultLang(e){this.defaultLang=e}getActiveLang(){return this.lang.getValue()}setActiveLang(e){return this.parser.onLangChanged?.(e),this.lang.next(e),this.events.next({type:"langChanged",payload:tv(e)}),this}setAvailableLangs(e){this.availableLangs=e}getAvailableLangs(){return this.availableLangs}load(e,r={}){let i=this.cache.get(e);if(i)return i;let o,s=this._isLangScoped(e),a;s&&(a=Ka(e));let l={path:e,mainLoader:this.loader,inlineLoader:r.inlineLoader,data:s?{scope:a}:void 0};if(this.useFallbackTranslation(e)){let d=s?`${a}/${this.firstFallbackLang}`:this.firstFallbackLang,f=oF(U(m({},l),{fallbackPath:d}));o=Rn(f)}else{let d=q0(l);o=Me(d)}let c=o.pipe(Pf(this.config.failedRetries),Be(d=>{if(Array.isArray(d)){d.forEach(f=>{this.handleSuccess(f.lang,f.translation),f.lang!==e&&this.cache.set(f.lang,N({}))});return}this.handleSuccess(e,d)}),mn(d=>(this.config.prodMode||console.error(`Error while trying to load "${e}"`,d),this.handleFailure(e,r))),Yr(1),Jg(this.destroyRef));return this.cache.set(e,c),c}translate(e,r={},i=this.getActiveLang()){if(!e)return e;let{scope:o,resolveLang:s}=this.resolveLangAndScope(i);if(Array.isArray(e))return e.map(c=>this.translate(o?`${o}.${c}`:c,r,s));e=o?`${o}.${e}`:e;let a=this.getTranslation(s),l=a[e];return l?this.parser.transpile({value:l,params:r,translation:a,key:e}):this._handleMissingKey(e,l,r)}selectTranslate(e,r,i,o=!1){let s,a=(c,d)=>this.load(c,d).pipe(T(()=>o?this.translateObject(e,r,c):this.translate(e,r,c)));if(rv(i))return this.langChanges$.pipe(ve(c=>a(c)));if(i=Array.isArray(i)?i[0]:i,B0(i)){let c=i;i=c.scope,s=sv(c,c.scope)}if(i=i,this.isLang(i)||this.isScopeWithLang(i))return a(i);let l=i;return this.langChanges$.pipe(ve(c=>a(`${l}/${c}`,{inlineLoader:s})))}isScopeWithLang(e){return this.isLang(Nr(e))}translateObject(e,r={},i=this.getActiveLang()){if(qo(e)||Array.isArray(e)){let{resolveLang:s,scope:a}=this.resolveLangAndScope(i);if(Array.isArray(e))return e.map(d=>this.translateObject(a?`${a}.${d}`:d,r,s));let l=this.getTranslation(s);e=a?`${a}.${e}`:e;let c=QO(this.getObjectByKey(l,e));return YO(c)?this.translate(e,r,i):this.parser.transpile({value:c,params:r,translation:l,key:e})}let o=[];for(let[s,a]of this.getEntries(e))o.push(this.translateObject(s,a,i));return o}selectTranslateObject(e,r,i){if(qo(e)||Array.isArray(e))return this.selectTranslate(e,r,i,!0);let[[o,s],...a]=this.getEntries(e);return this.selectTranslateObject(o,s,i).pipe(T(l=>{let c=[l];for(let[d,f]of a)c.push(this.translateObject(d,f,i));return c}))}getTranslation(e){if(e){if(this.isLang(e))return this.translations.get(e)||{};{let{scope:r,resolveLang:i}=this.resolveLangAndScope(e),o=this.translations.get(i)||{};return this.getObjectByKey(o,r)}}return this.translations}selectTranslation(e){let r=this.langChanges$;if(e){let i=Nr(e)!==e;this.isLang(e)||i?r=N(e):r=this.langChanges$.pipe(T(o=>`${e}/${o}`))}return r.pipe(ve(i=>this.load(i).pipe(T(()=>this.getTranslation(i)))))}setTranslation(e,r=this.getActiveLang(),i={}){let s=m(m({},{merge:!0,emitChange:!0}),i),a=Ka(r),l=e;if(a){let p=this.getMappedScope(a);l=F0({[p]:e})}let c=a?Nr(r):r,d=m(m({},s.merge&&this.getTranslation(c)),l),f=this.config.flatten.aot?d:F0(d),h=this.interceptor.preSaveTranslation(f,c);this.translations.set(c,h),s.emitChange&&this.setActiveLang(this.getActiveLang())}setTranslationKey(e,r,i={}){let o=i.lang||this.getActiveLang(),s=this.interceptor.preSaveTranslationKey(e,r,o),a={[e]:s};this.setTranslation(a,o,U(m({},i),{merge:!0}))}setFallbackLangForMissingTranslation({fallbackLang:e}){let r=Array.isArray(e)?e[0]:e;e&&this.useFallbackTranslation(r)&&(this.firstFallbackLang=r)}_handleMissingKey(e,r,i){if(this.config.missingHandler.allowEmpty&&r==="")return"";if(!this.isResolvedMissingOnce&&this.useFallbackTranslation()){this.isResolvedMissingOnce=!0;let o=this.translate(e,i,this.firstFallbackLang);return this.isResolvedMissingOnce=!1,o}return this.missingHandler.handle(e,this.getMissingHandlerData(),i)}_isLangScoped(e){return this.getAvailableLangsIds().indexOf(e)===-1}isLang(e){return this.getAvailableLangsIds().indexOf(e)!==-1}_loadDependencies(e,r){let i=Nr(e);return this._isLangScoped(e)&&!this.isLoadedTranslation(i)?Gr([this.load(i),this.load(e,{inlineLoader:r})]):this.load(e,{inlineLoader:r})}_completeScopeWithLang(e){return this._isLangScoped(e)&&!this.isLang(Nr(e))?`${e}/${this.getActiveLang()}`:e}_setScopeAlias(e,r){this.config.scopeMapping||(this.config.scopeMapping={}),this.config.scopeMapping[e]=r}isLoadedTranslation(e){return L0(this.getTranslation(e))}getAvailableLangsIds(){let e=this.getAvailableLangs()[0];return qo(e)?this.getAvailableLangs():this.getAvailableLangs().map(r=>r.id)}getMissingHandlerData(){return U(m({},this.config),{activeLang:this.getActiveLang(),availableLangs:this.availableLangs,defaultLang:this.defaultLang})}useFallbackTranslation(e){return this.config.missingHandler.useFallbackTranslation&&e!==this.firstFallbackLang}handleSuccess(e,r){this.setTranslation(r,e,{emitChange:!1}),this.events.next({wasFailure:!!this.failedLangs.size,type:"translationLoadSuccess",payload:tv(e)}),this.failedLangs.forEach(i=>this.cache.delete(i)),this.failedLangs.clear()}handleFailure(e,r){rv(r.failedCounter)&&(r.failedCounter=0,r.fallbackLangs||(r.fallbackLangs=this.fallbackStrategy.getNextLangs(e)));let i=e.split("/"),s=r.fallbackLangs[r.failedCounter];if(this.failedLangs.add(e),this.cache.has(s))return this.handleSuccess(s,this.getTranslation(s)),Ve;let a=s===i[i.length-1];if(!s||a){let c="Unable to load translation and all the fallback languages";throw i.length>1&&(c+=", did you misspelled the scope name?"),new Error(c)}let l=s;return i.length>1&&(i[i.length-1]=s,l=i.join("/")),r.failedCounter++,this.events.next({type:"translationLoadFailure",payload:tv(e)}),this.load(l,r)}getMappedScope(e){let{scopeMapping:r={},scopes:i={keepCasing:!1}}=this.config;return r[e]||(i.keepCasing?e:j0(e))}resolveLangAndScope(e){let r=e,i;if(this._isLangScoped(e)){let o=Nr(e),s=this.isLang(o);r=s?o:this.getActiveLang(),i=this.getMappedScope(s?Ka(e):e)}return{scope:i,resolveLang:r}}getObjectByKey(e,r){let i={},o=`${r}.`;for(let s in e)s.startsWith(o)&&(i[s.replace(o,"")]=e[s]);return i}getEntries(e){return e instanceof Map?e.entries():Object.entries(e)}static \u0275fac=function(r){return new(r||t)(M(P0,8),M(H0),M(U0),M($0),M(Yo),M(z0))};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),aF=(()=>{class t{html;static \u0275fac=function(r){return new(r||t)};static \u0275cmp=S({type:t,selectors:[["ng-component"]],inputs:{html:"html"},decls:1,vars:1,consts:[[1,"transloco-loader-template",3,"innerHTML"]],template:function(r,i){r&1&&kt(0,"div",0),r&2&&Gt("innerHTML",i.html,Wp)},encapsulation:2})}return t})(),ov=class{view;vcr;constructor(n,e){this.view=n,this.vcr=e}attachView(){if(this.view instanceof dt)this.vcr.createEmbeddedView(this.view);else if(qo(this.view)){let n=this.vcr.createComponent(aF);n.instance.html=this.view,n.hostView.detectChanges()}else this.vcr.createComponent(this.view)}detachView(){this.vcr.clear()}},Y0=new g(""),lF=new g(""),Z0=new g(""),Tu=class{initialized=!1;resolve({inline:n,provider:e,active:r}){let i=r;if(this.initialized)return i=r,i;if(e){let[,o]=iv(e,"static");i=o}if(n){let[,o]=iv(n,"static");i=o}return this.initialized=!0,i}resolveLangBasedOnScope(n){return Ka(n)?Nr(n):n}resolveLangPath(n,e){return e?`${e}/${n}`:n}},Au=class{service;constructor(n){this.service=n}resolve(n){let{inline:e,provider:r}=n;if(e)return e;if(r){if(B0(r)){let{scope:i,alias:o=this.service.config.scopes.keepCasing?i:j0(i)}=r;return this.service._setScopeAlias(i,o),i}return r}}},K0=(()=>{class t{destroyRef=u(nt);service=u(Zo);tpl=u(dt,{optional:!0});providerLang=u(Y0,{optional:!0});providerScope=u(Z0,{optional:!0});providedLoadingTpl=u(lF,{optional:!0});cdr=u(Te);host=u(P);vcr=u(ft);renderer=u(Ue);view;memo=new Map;key;params={};inlineScope;inlineRead;prefix;inlineLang;inlineTpl;currentLang;loaderTplHandler;initialized=!1;path;langResolver=new Tu;scopeResolver=new Au(this.service);strategy=this.tpl===null?"attribute":"structural";static ngTemplateContextGuard(e,r){return!0}ngOnInit(){let e=G0(this.service,this.providerLang||this.inlineLang);if(this.service.langChanges$.pipe(ve(r=>{let i=this.langResolver.resolve({inline:this.inlineLang,provider:this.providerLang,active:r});return Array.isArray(this.providerScope)?Rn(this.providerScope.map(o=>this.resolveScope(i,o))):this.resolveScope(i,this.providerScope)}),W0(e),Jg(this.destroyRef)).subscribe(()=>{this.currentLang=this.langResolver.resolveLangBasedOnScope(this.path),this.strategy==="attribute"?this.attributeStrategy():this.structuralStrategy(this.currentLang,this.prefix||this.inlineRead),this.cdr.markForCheck(),this.initialized=!0}),!this.initialized){let r=this.resolveLoadingContent();r&&(this.loaderTplHandler=new ov(r,this.vcr),this.loaderTplHandler.attachView())}}ngOnChanges(e){this.strategy==="attribute"&&Object.keys(e).some(i=>!e[i].firstChange)&&this.attributeStrategy()}attributeStrategy(){this.detachLoader(),this.renderer.setProperty(this.host.nativeElement,"innerText",this.service.translate(this.key,this.params,this.currentLang))}structuralStrategy(e,r){this.memo.clear();let i=this.getTranslateFn(e,r);this.view?(this.view.context.$implicit=i,this.view.context.currentLang=this.currentLang):(this.detachLoader(),this.view=this.vcr.createEmbeddedView(this.tpl,{$implicit:i,currentLang:this.currentLang}))}getTranslateFn(e,r){return(i,o)=>{let s=r?`${r}.${i}`:i,a=o?`${s}${JSON.stringify(o)}`:s;return this.memo.has(a)||this.memo.set(a,this.service.translate(s,o,e)),this.memo.get(a)}}resolveLoadingContent(){return this.inlineTpl||this.providedLoadingTpl}ngOnDestroy(){this.memo.clear()}detachLoader(){this.loaderTplHandler?.detachView()}resolveScope(e,r){let i=this.scopeResolver.resolve({inline:this.inlineScope,provider:r});this.path=this.langResolver.resolveLangPath(e,i);let o=sv(r,i);return this.service._loadDependencies(this.path,o)}static \u0275fac=function(r){return new(r||t)};static \u0275dir=q({type:t,selectors:[["","transloco",""]],inputs:{key:[0,"transloco","key"],params:[0,"translocoParams","params"],inlineScope:[0,"translocoScope","inlineScope"],inlineRead:[0,"translocoRead","inlineRead"],prefix:[0,"translocoPrefix","prefix"],inlineLang:[0,"translocoLang","inlineLang"],inlineTpl:[0,"translocoLoadingTpl","inlineTpl"]},features:[ut]})}return t})(),Ko=(()=>{class t{service;providerScope;providerLang;cdr;subscription=null;lastValue="";lastKey;path;langResolver=new Tu;scopeResolver;constructor(e,r,i,o){this.service=e,this.providerScope=r,this.providerLang=i,this.cdr=o,this.scopeResolver=new Au(this.service)}transform(e,r,i){if(!e)return e;let o=r?`${e}${JSON.stringify(r)}`:e;if(o===this.lastKey)return this.lastValue;this.lastKey=o,this.subscription?.unsubscribe();let s=G0(this.service,this.providerLang||i);return this.subscription=this.service.langChanges$.pipe(ve(a=>{let l=this.langResolver.resolve({inline:i,provider:this.providerLang,active:a});return Array.isArray(this.providerScope)?Rn(this.providerScope.map(c=>this.resolveScope(l,c))):this.resolveScope(l,this.providerScope)}),W0(s)).subscribe(()=>this.updateValue(e,r)),this.lastValue}ngOnDestroy(){this.subscription?.unsubscribe(),this.subscription=null}updateValue(e,r){let i=this.langResolver.resolveLangBasedOnScope(this.path);this.lastValue=this.service.translate(e,r,i),this.cdr.markForCheck()}resolveScope(e,r){let i=this.scopeResolver.resolve({inline:void 0,provider:r});this.path=this.langResolver.resolveLangPath(e,i);let o=sv(r,i);return this.service._loadDependencies(this.path,o)}static \u0275fac=function(r){return new(r||t)(Ne(Zo,16),Ne(Z0,24),Ne(Y0,24),Ne(Te,16))};static \u0275pipe=ld({name:"transloco",type:t,pure:!1})}return t})();var Tn=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=L({type:t});static \u0275inj=F({})}return t})();function Q0(t){let n=[uF(JO),hF(tF),pF(nF),fF(rF)];return t.config&&n.push(cF(t.config)),t.loader&&n.push(dF(t.loader)),n}function cF(t){return ct([{provide:Yo,useValue:XO(t)}])}function dF(t){return ct([{provide:P0,useClass:t}])}function uF(t){return ct([{provide:H0,useClass:t,deps:[Yo]}])}function fF(t){return ct([{provide:z0,useClass:t,deps:[Yo]}])}function hF(t){return ct([{provide:U0,useClass:t}])}function pF(t){return ct([{provide:$0,useClass:t}])}function av(){let t=mF();if(!(!t||!V0()))return t.indexOf("-")!==-1&&(t=t.split("-")[0]),t.indexOf("_")!==-1&&(t=t.split("_")[0]),t}function mF(){if(!V0())return"";let t=window.navigator;return t.languages?.[0]??t.language}var Nu=class t{title="gwt-arg_randomizer";swUpdate=u(au);snackbar=u(N0);translocoService=u(Zo);ngOnInit(){this.swUpdate.unrecoverable.subscribe(n=>{this.snackbar.open(`An error occurred that we cannot recover from:
`+n.reason+`

Please reload the page.`,"Reload").onAction().subscribe(()=>{window.location.reload()}),console.debug(`An error occurred that we cannot recover from:
`+n.reason+`

Please reload the page.`)}),this.swUpdate.versionUpdates.pipe(ae(n=>n.type==="VERSION_DETECTED")).subscribe(()=>{this.snackbar.open(this.translocoService.translate("messages.update-available"),"Reload").onAction().subscribe(()=>{window.location.reload()})})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=S({type:t,selectors:[["app-root"]],decls:1,vars:0,template:function(e,r){e&1&&he(0,"router-outlet")},dependencies:[Sa,Tn],encapsulation:2})};var Ou=class t{http=u(bo);getTranslation(n){return this.http.get(`i18n/${n}.json`)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})};var iE=new g("");function dv(t){return t==null||uv(t)===0}function uv(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var qu=new g(""),oE=new g(""),gF=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Pu=class{static min(n){return vF(n)}static max(n){return yF(n)}static required(n){return bF(n)}static requiredTrue(n){return _F(n)}static email(n){return wF(n)}static minLength(n){return DF(n)}static maxLength(n){return CF(n)}static pattern(n){return EF(n)}static nullValidator(n){return sE()}static compose(n){return fE(n)}static composeAsync(n){return hE(n)}};function vF(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e<t?{min:{min:t,actual:n.value}}:null}}function yF(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e>t?{max:{max:t,actual:n.value}}:null}}function bF(t){return dv(t.value)?{required:!0}:null}function _F(t){return t.value===!0?null:{required:!0}}function wF(t){return dv(t.value)||gF.test(t.value)?null:{email:!0}}function DF(t){return n=>{let e=n.value?.length??uv(n.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function CF(t){return n=>{let e=n.value?.length??uv(n.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function EF(t){if(!t)return sE;let n,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),n=new RegExp(e)):(e=t.toString(),n=t),r=>{if(dv(r.value))return null;let i=r.value;return n.test(i)?null:{pattern:{requiredPattern:e,actualValue:i}}}}function sE(t){return null}function aE(t){return t!=null}function lE(t){return Er(t)?Me(t):t}function cE(t){let n={};return t.forEach(e=>{n=e!=null?m(m({},n),e):n}),Object.keys(n).length===0?null:n}function dE(t,n){return n.map(e=>e(t))}function xF(t){return!t.validate}function uE(t){return t.map(n=>xF(n)?n:e=>n.validate(e))}function fE(t){if(!t)return null;let n=t.filter(aE);return n.length==0?null:function(e){return cE(dE(e,n))}}function fv(t){return t!=null?fE(uE(t)):null}function hE(t){if(!t)return null;let n=t.filter(aE);return n.length==0?null:function(e){let r=dE(e,n).map(lE);return Rn(r).pipe(T(cE))}}function hv(t){return t!=null?hE(uE(t)):null}function X0(t,n){return t===null?[n]:Array.isArray(t)?[...t,n]:[t,n]}function pE(t){return t._rawValidators}function mE(t){return t._rawAsyncValidators}function lv(t){return t?Array.isArray(t)?t:[t]:[]}function Lu(t,n){return Array.isArray(t)?t.includes(n):t===n}function J0(t,n){let e=lv(n);return lv(t).forEach(i=>{Lu(e,i)||e.push(i)}),e}function eE(t,n){return lv(n).filter(e=>!Lu(t,e))}var ju=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=fv(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=hv(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control?.reset(n)}hasError(n,e){return this.control?this.control.hasError(n,e):!1}getError(n,e){return this.control?this.control.getError(n,e):null}},Jo=class extends ju{name;get formDirective(){return null}get path(){return null}},Vu=class extends ju{_parent=null;name=null;valueAccessor=null};var Qa="VALID",Fu="INVALID",Qo="PENDING",Xa="DISABLED",Or=class{},Bu=class extends Or{value;source;constructor(n,e){super(),this.value=n,this.source=e}},el=class extends Or{pristine;source;constructor(n,e){super(),this.pristine=n,this.source=e}},tl=class extends Or{touched;source;constructor(n,e){super(),this.touched=n,this.source=e}},Xo=class extends Or{status;source;constructor(n,e){super(),this.status=n,this.source=e}},Hu=class extends Or{source;constructor(n){super(),this.source=n}},Uu=class extends Or{source;constructor(n){super(),this.source=n}};function gE(t){return(Yu(t)?t.validators:t)||null}function IF(t){return Array.isArray(t)?fv(t):t||null}function vE(t,n){return(Yu(n)?n.asyncValidators:t)||null}function SF(t){return Array.isArray(t)?hv(t):t||null}function Yu(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function MF(t,n,e){let r=t.controls;if(!(n?Object.keys(r):r).length)throw new C(1e3,"");if(!r[e])throw new C(1001,"")}function TF(t,n,e){t._forEachChild((r,i)=>{if(e[i]===void 0)throw new C(-1002,"")})}var $u=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,e){this._assignValidators(n),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return Xe(this.statusReactive)}set status(n){Xe(()=>this.statusReactive.set(n))}_status=Ot(()=>this.statusReactive());statusReactive=we(void 0);get valid(){return this.status===Qa}get invalid(){return this.status===Fu}get pending(){return this.status===Qo}get disabled(){return this.status===Xa}get enabled(){return this.status!==Xa}errors;get pristine(){return Xe(this.pristineReactive)}set pristine(n){Xe(()=>this.pristineReactive.set(n))}_pristine=Ot(()=>this.pristineReactive());pristineReactive=we(!0);get dirty(){return!this.pristine}get touched(){return Xe(this.touchedReactive)}set touched(n){Xe(()=>this.touchedReactive.set(n))}_touched=Ot(()=>this.touchedReactive());touchedReactive=we(!1);get untouched(){return!this.touched}_events=new D;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(J0(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(J0(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(eE(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(eE(n,this._rawAsyncValidators))}hasValidator(n){return Lu(this._rawValidators,n)}hasAsyncValidator(n){return Lu(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let e=this.touched===!1;this.touched=!0;let r=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched(U(m({},n),{sourceControl:r})),e&&n.emitEvent!==!1&&this._events.next(new tl(!0,r))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(n))}markAsUntouched(n={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let r=n.sourceControl??this;this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:r})}),n.onlySelf||this._parent?._updateTouched(n,r),e&&n.emitEvent!==!1&&this._events.next(new tl(!1,r))}markAsDirty(n={}){let e=this.pristine===!0;this.pristine=!1;let r=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty(U(m({},n),{sourceControl:r})),e&&n.emitEvent!==!1&&this._events.next(new el(!1,r))}markAsPristine(n={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let r=n.sourceControl??this;this._forEachChild(i=>{i.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),n.onlySelf||this._parent?._updatePristine(n,r),e&&n.emitEvent!==!1&&this._events.next(new el(!0,r))}markAsPending(n={}){this.status=Qo;let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Xo(this.status,e)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending(U(m({},n),{sourceControl:e}))}disable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Xa,this.errors=null,this._forEachChild(i=>{i.disable(U(m({},n),{onlySelf:!0}))}),this._updateValue();let r=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Bu(this.value,r)),this._events.next(new Xo(this.status,r)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(U(m({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!0))}enable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Qa,this._forEachChild(r=>{r.enable(U(m({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(U(m({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(n,e){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let r=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Qa||this.status===Qo)&&this._runAsyncValidator(r,n.emitEvent)}let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Bu(this.value,e)),this._events.next(new Xo(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity(U(m({},n),{sourceControl:e}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Xa:Qa}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,e){if(this.asyncValidator){this.status=Qo,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:n!==!1};let r=lE(this.asyncValidator(this));this._asyncValidationSubscription=r.subscribe(i=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(i,{emitEvent:e,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(n){let e=n;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((r,i)=>r&&r._find(i),this)}getError(n,e){let r=e?this.get(e):this;return r?.errors?r.errors[n]:null}hasError(n,e){return!!this.getError(n,e)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,e,r){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||r)&&this._events.next(new Xo(this.status,e)),this._parent&&this._parent._updateControlsErrors(n,e,r)}_initObservables(){this.valueChanges=new W,this.statusChanges=new W}_calculateStatus(){return this._allControlsDisabled()?Xa:this.errors?Fu:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Qo)?Qo:this._anyControlsHaveStatus(Fu)?Fu:Qa}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,e){let r=!this._anyControlsDirty(),i=this.pristine!==r;this.pristine=r,n.onlySelf||this._parent?._updatePristine(n,e),i&&this._events.next(new el(this.pristine,e))}_updateTouched(n={},e){this.touched=this._anyControlsTouched(),this._events.next(new tl(this.touched,e)),n.onlySelf||this._parent?._updateTouched(n,e)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){Yu(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=IF(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=SF(this._rawAsyncValidators)}},zu=class extends $u{constructor(n,e,r){super(gE(e),vE(r,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,e){return this.controls[n]?this.controls[n]:(this.controls[n]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(n,e,r={}){this.registerControl(n,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}removeControl(n,e={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(n,e,r={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],e&&this.registerControl(n,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,e={}){TF(this,!0,n),Object.keys(n).forEach(r=>{MF(this,!0,r),this.controls[r].setValue(n[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(n,e={}){n!=null&&(Object.keys(n).forEach(r=>{let i=this.controls[r];i&&i.patchValue(n[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n={},e={}){this._forEachChild((r,i)=>{r.reset(n?n[i]:null,U(m({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Uu(this))}getRawValue(){return this._reduceChildren({},(n,e,r)=>(n[r]=e.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(e,r)=>r._syncPendingControls()?!0:e);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(e=>{let r=this.controls[e];r&&n(r,e)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[e,r]of Object.entries(this.controls))if(this.contains(e)&&n(r))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(e,r,i)=>((r.enabled||this.disabled)&&(e[i]=r.value),e))}_reduceChildren(n,e){let r=n;return this._forEachChild((i,o)=>{r=e(r,i,o)}),r}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}};var pv=new g("",{factory:()=>mv}),mv="always";function cv(t,n,e=mv){gv(t,n),n.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&n.valueAccessor.setDisabledState?.(t.disabled),RF(t,n),NF(t,n),kF(t,n),AF(t,n)}function tE(t,n,e=!0){let r=()=>{};n?.valueAccessor?.registerOnChange(r),n?.valueAccessor?.registerOnTouched(r),Wu(t,n),t&&(n._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function Gu(t,n){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n)})}function AF(t,n){if(n.valueAccessor.setDisabledState){let e=r=>{n.valueAccessor.setDisabledState(r)};t.registerOnDisabledChange(e),n._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function gv(t,n){let e=pE(t);n.validator!==null?t.setValidators(X0(e,n.validator)):typeof e=="function"&&t.setValidators([e]);let r=mE(t);n.asyncValidator!==null?t.setAsyncValidators(X0(r,n.asyncValidator)):typeof r=="function"&&t.setAsyncValidators([r]);let i=()=>t.updateValueAndValidity();Gu(n._rawValidators,i),Gu(n._rawAsyncValidators,i)}function Wu(t,n){let e=!1;if(t!==null){if(n.validator!==null){let i=pE(t);if(Array.isArray(i)&&i.length>0){let o=i.filter(s=>s!==n.validator);o.length!==i.length&&(e=!0,t.setValidators(o))}}if(n.asyncValidator!==null){let i=mE(t);if(Array.isArray(i)&&i.length>0){let o=i.filter(s=>s!==n.asyncValidator);o.length!==i.length&&(e=!0,t.setAsyncValidators(o))}}}let r=()=>{};return Gu(n._rawValidators,r),Gu(n._rawAsyncValidators,r),e}function RF(t,n){n.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&yE(t,n)})}function kF(t,n){n.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&yE(t,n),t.updateOn!=="submit"&&t.markAsTouched()})}function yE(t,n){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function NF(t,n){let e=(r,i)=>{n.valueAccessor.writeValue(r),i&&n.viewToModelUpdate(r)};t.registerOnChange(e),n._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function bE(t,n){t==null,gv(t,n)}function OF(t,n){return Wu(t,n)}function _E(t,n){t._syncPendingControls(),n.forEach(e=>{let r=e.control;r.updateOn==="submit"&&r._pendingChange&&(e.viewToModelUpdate(r._pendingValue),r._pendingChange=!1)})}function FF(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}var PF={provide:Jo,useExisting:bn(()=>vv)},Ja=Promise.resolve(),vv=(()=>{class t extends Jo{callSetDisabledState;get submitted(){return Xe(this.submittedReactive)}_submitted=Ot(()=>this.submittedReactive());submittedReactive=we(!1);_directives=new Set;form;ngSubmit=new W;options;constructor(e,r,i){super(),this.callSetDisabledState=i,this.form=new zu({},fv(e),hv(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){Ja.then(()=>{let r=this._findContainer(e.path);e.control=r.registerControl(e.name,e.control),cv(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){Ja.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){Ja.then(()=>{let r=this._findContainer(e.path),i=new zu({});bE(i,e),r.registerControl(e.name,i),i.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){Ja.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,r){Ja.then(()=>{this.form.get(e.path).setValue(r)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),_E(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new Hu(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(r){return new(r||t)(Ne(qu,10),Ne(oE,10),Ne(pv,8))};static \u0275dir=q({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(r,i){r&1&&ge("submit",function(s){return i.onSubmit(s)})("reset",function(){return i.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Oe([PF]),Pe]})}return t})();function nE(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function rE(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var LF=class extends $u{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,e,r){super(gE(e),vE(r,e)),this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Yu(e)&&(e.nonNullable||e.initialValueIsDefault)&&(rE(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,e={}){this.value=this._pendingValue=n,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(r=>r(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(n,e={}){this.setValue(n,e)}reset(n=this.defaultValue,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new Uu(this))}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){nE(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){nE(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){rE(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var jF=t=>t instanceof LF;var VF=(()=>{class t extends Jo{callSetDisabledState;get submitted(){return Xe(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=Ot(()=>this._submittedReactive());_submittedReactive=we(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,r,i){super(),this.callSetDisabledState=i,this._setValidators(e),this._setAsyncValidators(r)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(Wu(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let r=this.form.get(e.path);return cv(r,e,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),r}getControl(e){return this.form.get(e.path)}removeControl(e){tE(e.control||null,e,!1),FF(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,r){this.form.get(e.path).setValue(r)}onReset(){this.resetForm()}resetForm(e=void 0,r={}){this.form.reset(e,r),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,_E(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new Hu(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let r=e.control,i=this.form.get(e.path);r!==i&&(tE(r||null,e),jF(i)&&(cv(i,e,this.callSetDisabledState),e.control=i))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let r=this.form.get(e.path);bE(r,e),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let r=this.form?.get(e.path);r&&OF(r,e)&&r.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){gv(this.form,this),this._oldForm&&Wu(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(r){return new(r||t)(Ne(qu,10),Ne(oE,10),Ne(pv,8))};static \u0275dir=q({type:t,features:[Pe,ut]})}return t})();var BF={provide:Jo,useExisting:bn(()=>yv)},yv=(()=>{class t extends VF{form=null;ngSubmit=new W;get control(){return this.form}static \u0275fac=(()=>{let e;return function(i){return(e||(e=St(t)))(i||t)}})();static \u0275dir=q({type:t,selectors:[["","formGroup",""]],hostBindings:function(r,i){r&1&&ge("submit",function(s){return i.onSubmit(s)})("reset",function(){return i.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Oe([BF]),Pe]})}return t})();var HF=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=L({type:t});static \u0275inj=F({})}return t})();var wE=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:pv,useValue:e.callSetDisabledState??mv}]}}static \u0275fac=function(r){return new(r||t)};static \u0275mod=L({type:t});static \u0275inj=F({imports:[HF]})}return t})();var UF=["*"];var $F=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],zF=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],GF=new g("MAT_CARD_CONFIG"),DE=(()=>{class t{appearance;constructor(){let e=u(GF,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=S({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(r,i){r&2&&j("mat-mdc-card-outlined",i.appearance==="outlined")("mdc-card--outlined",i.appearance==="outlined")("mat-mdc-card-filled",i.appearance==="filled")("mdc-card--filled",i.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:UF,decls:1,vars:0,template:function(r,i){r&1&&(le(),R(0))},styles:[`.mat-mdc-card {
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
`],encapsulation:2,changeDetection:0})}return t})();var CE=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275dir=q({type:t,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return t})();var EE=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275cmp=S({type:t,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:zF,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(r,i){r&1&&(le($F),R(0),ot(1,"div",0),R(2,1),pt(),R(3,2))},encapsulation:2,changeDetection:0})}return t})();var xE=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=L({type:t});static \u0275inj=F({imports:[pe]})}return t})();var IE=(()=>{class t{get vertical(){return this._vertical}set vertical(e){this._vertical=Zt(e)}_vertical=!1;get inset(){return this._inset}set inset(e){this._inset=Zt(e)}_inset=!1;static \u0275fac=function(r){return new(r||t)};static \u0275cmp=S({type:t,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(r,i){r&2&&(ue("aria-orientation",i.vertical?"vertical":"horizontal"),j("mat-divider-vertical",i.vertical)("mat-divider-horizontal",!i.vertical)("mat-divider-inset",i.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(r,i){},styles:[`.mat-divider {
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
`],encapsulation:2,changeDetection:0})}return t})(),SE=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=L({type:t});static \u0275inj=F({imports:[pe]})}return t})();var bv=class{_box;_destroyed=new D;_resizeSubject=new D;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new G(e=>{let r=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),r.unsubscribe(),this._elementObservables.delete(n)}}).pipe(ae(e=>e.some(r=>r.target===n)),Yr({bufferSize:1,refCount:!0}),de(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},ME=(()=>{class t{_cleanupErrorListener;_observers=new Map;_ngZone=u(O);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,r){let i=r?.box||"content-box";return this._observers.has(i)||this._observers.set(i,new bv(i)),this._observers.get(i).observe(e)}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var YF=["notch"],ZF=["matFormFieldNotchedOutline",""],KF=["*"],TE=["iconPrefixContainer"],AE=["textPrefixContainer"],RE=["iconSuffixContainer"],kE=["textSuffixContainer"],QF=["textField"],XF=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],JF=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function eP(t,n){t&1&&he(0,"span",21)}function tP(t,n){if(t&1&&(b(0,"label",20),R(1,1),X(2,eP,1,0,"span",21),w()),t&2){let e=H(2);fe("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),ue("for",e._control.disableAutomaticLabeling?null:e._control.id),v(2),J(!e.hideRequiredMarker&&e._control.required?2:-1)}}function nP(t,n){if(t&1&&X(0,tP,3,5,"label",20),t&2){let e=H();J(e._hasFloatingLabel()?0:-1)}}function rP(t,n){t&1&&he(0,"div",7)}function iP(t,n){}function oP(t,n){if(t&1&&zt(0,iP,0,0,"ng-template",13),t&2){H(2);let e=Wt(1);fe("ngTemplateOutlet",e)}}function sP(t,n){if(t&1&&(b(0,"div",9),X(1,oP,1,1,null,13),w()),t&2){let e=H();fe("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),v(),J(e._forceDisplayInfixLabel()?-1:1)}}function aP(t,n){t&1&&(b(0,"div",10,2),R(2,2),w())}function lP(t,n){t&1&&(b(0,"div",11,3),R(2,3),w())}function cP(t,n){}function dP(t,n){if(t&1&&zt(0,cP,0,0,"ng-template",13),t&2){H();let e=Wt(1);fe("ngTemplateOutlet",e)}}function uP(t,n){t&1&&(b(0,"div",14,4),R(2,4),w())}function fP(t,n){t&1&&(b(0,"div",15,5),R(2,5),w())}function hP(t,n){t&1&&he(0,"div",16)}function pP(t,n){t&1&&(b(0,"div",18),R(1,6),w())}function mP(t,n){if(t&1&&(b(0,"mat-hint",22),x(1),w()),t&2){let e=H(2);fe("id",e._hintLabelId),v(),Se(e.hintLabel)}}function gP(t,n){if(t&1&&(b(0,"div",19),X(1,mP,2,2,"mat-hint",22),R(2,7),he(3,"div",23),R(4,8),w()),t&2){let e=H();v(),J(e.hintLabel?1:-1)}}var nl=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275dir=q({type:t,selectors:[["mat-label"]]})}return t})(),vP=new g("MatError");var _v=(()=>{class t{align="start";id=u(at).getId("mat-mdc-hint-");static \u0275fac=function(r){return new(r||t)};static \u0275dir=q({type:t,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(r,i){r&2&&(Gt("id",i.id),ue("align",null),j("mat-mdc-form-field-hint-end",i.align==="end"))},inputs:{align:"align",id:"id"}})}return t})(),yP=new g("MatPrefix");var bP=new g("MatSuffix");var VE=new g("FloatingLabelParent"),NE=(()=>{class t{_elementRef=u(P);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=u(ME);_ngZone=u(O);_parent=u(VE);_resizeSubscription=new ce;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return _P(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(r){return new(r||t)};static \u0275dir=q({type:t,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(r,i){r&2&&j("mdc-floating-label--float-above",i.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return t})();function _P(t){let n=t;if(n.offsetParent!==null)return n.scrollWidth;let e=n.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let r=e.scrollWidth;return e.remove(),r}var OE="mdc-line-ripple--active",Zu="mdc-line-ripple--deactivating",FE=(()=>{class t{_elementRef=u(P);_cleanupTransitionEnd;constructor(){let e=u(O),r=u(Ue);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=r.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Zu),e.add(OE)}deactivate(){this._elementRef.nativeElement.classList.add(Zu)}_handleTransitionEnd=e=>{let r=this._elementRef.nativeElement.classList,i=r.contains(Zu);e.propertyName==="opacity"&&i&&r.remove(OE,Zu)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(r){return new(r||t)};static \u0275dir=q({type:t,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return t})(),PE=(()=>{class t{_elementRef=u(P);_ngZone=u(O);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,r=e.querySelector(".mdc-floating-label");r?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(r.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>r.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let r=this._notch.nativeElement;!this.open||!e?r.style.width="":r.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=S({type:t,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(r,i){if(r&1&&Qe(YF,5),r&2){let o;Z(o=K())&&(i._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(r,i){r&2&&j("mdc-notched-outline--notched",i.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:ZF,ngContentSelectors:KF,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(r,i){r&1&&(le(),kt(0,"div",1),ot(1,"div",2,0),R(3),pt(),kt(4,"div",3))},encapsulation:2,changeDetection:0})}return t})(),wv=(()=>{class t{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(r){return new(r||t)};static \u0275dir=q({type:t})}return t})();var Dv=new g("MatFormField"),wP=new g("MAT_FORM_FIELD_DEFAULT_OPTIONS"),LE="fill",DP="auto",jE="fixed",CP="translateY(-50%)",Ku=(()=>{class t{_elementRef=u(P);_changeDetectorRef=u(Te);_platform=u(Ee);_idGenerator=u(at);_ngZone=u(O);_defaults=u(wP,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=ra("iconPrefixContainer");_textPrefixContainerSignal=ra("textPrefixContainer");_iconSuffixContainerSignal=ra("iconSuffixContainer");_textSuffixContainerSignal=ra("textSuffixContainer");_prefixSuffixContainers=Ot(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=iD(nl);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=Zt(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||DP}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let r=e||this._defaults?.appearance||LE;this._appearanceSignal.set(r)}_appearanceSignal=we(LE);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||jE}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||jE}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new D;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=Le();constructor(){let e=this._defaults,r=u(wt);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),di(()=>this._currentDirection=r.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=Ot(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let r=this._control,i="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(i+e.controlType),r.controlType&&this._elementRef.nativeElement.classList.add(i+r.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=r.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=r.stateChanges.pipe(ze([void 0,void 0]),T(()=>[r.errorState,r.userAriaDescribedBy]),ql(),ae(([[o,s],[a,l]])=>o!==a||s!==l)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),r.ngControl&&r.ngControl.valueChanges&&(this._valueChanges=r.ngControl.valueChanges.pipe(de(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Pt(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){aD({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=Ot(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let r=this._control?this._control.ngControl:null;return r&&r[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(a=>a.align==="start"):null,s=this._hintChildren?this._hintChildren.find(a=>a.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),s&&e.push(s.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let r=this._control.describedByIds,i;if(r){let o=this._describedByIds||e;i=e.concat(r.filter(s=>s&&!o.includes(s)))}else i=e;this._control.setDescribedByIds(i),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,r=this._textPrefixContainer?.nativeElement,i=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,s=e?.getBoundingClientRect().width??0,a=r?.getBoundingClientRect().width??0,l=i?.getBoundingClientRect().width??0,c=o?.getBoundingClientRect().width??0,d=this._currentDirection==="rtl"?"-1":"1",f=`${s+a}px`,p=`calc(${d} * (${f} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,y=`var(--mat-mdc-form-field-label-transform, ${CP} translateX(${p}))`,E=s+a+l+c;return[y,E]}_writeOutlinedLabelStyles(e){if(e!==null){let[r,i]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=r),i!==null&&this._notchedOutline?._setMaxWidth(i)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let r=e.getRootNode();return r&&r!==e}return document.documentElement.contains(e)}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=S({type:t,selectors:[["mat-form-field"]],contentQueries:function(r,i,o){if(r&1&&(vd(o,i._labelChild,nl,5),yt(o,wv,5)(o,yP,5)(o,bP,5)(o,vP,5)(o,_v,5)),r&2){bd();let s;Z(s=K())&&(i._formFieldControl=s.first),Z(s=K())&&(i._prefixChildren=s),Z(s=K())&&(i._suffixChildren=s),Z(s=K())&&(i._errorChildren=s),Z(s=K())&&(i._hintChildren=s)}},viewQuery:function(r,i){if(r&1&&(yd(i._iconPrefixContainerSignal,TE,5)(i._textPrefixContainerSignal,AE,5)(i._iconSuffixContainerSignal,RE,5)(i._textSuffixContainerSignal,kE,5),Qe(QF,5)(TE,5)(AE,5)(RE,5)(kE,5)(NE,5)(PE,5)(FE,5)),r&2){bd(4);let o;Z(o=K())&&(i._textField=o.first),Z(o=K())&&(i._iconPrefixContainer=o.first),Z(o=K())&&(i._textPrefixContainer=o.first),Z(o=K())&&(i._iconSuffixContainer=o.first),Z(o=K())&&(i._textSuffixContainer=o.first),Z(o=K())&&(i._floatingLabel=o.first),Z(o=K())&&(i._notchedOutline=o.first),Z(o=K())&&(i._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(r,i){r&2&&j("mat-mdc-form-field-label-always-float",i._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",i._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",i._hasIconSuffix)("mat-form-field-invalid",i._control.errorState)("mat-form-field-disabled",i._control.disabled)("mat-form-field-autofilled",i._control.autofilled)("mat-form-field-appearance-fill",i.appearance=="fill")("mat-form-field-appearance-outline",i.appearance=="outline")("mat-form-field-hide-placeholder",i._hasFloatingLabel()&&!i._shouldLabelFloat())("mat-primary",i.color!=="accent"&&i.color!=="warn")("mat-accent",i.color==="accent")("mat-warn",i.color==="warn")("ng-untouched",i._shouldForward("untouched"))("ng-touched",i._shouldForward("touched"))("ng-pristine",i._shouldForward("pristine"))("ng-dirty",i._shouldForward("dirty"))("ng-valid",i._shouldForward("valid"))("ng-invalid",i._shouldForward("invalid"))("ng-pending",i._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[Oe([{provide:Dv,useExisting:t},{provide:VE,useExisting:t}])],ngContentSelectors:JF,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(r,i){if(r&1&&(le(XF),zt(0,nP,1,1,"ng-template",null,0,Dm),b(2,"div",6,1),ge("click",function(s){return i._control.onContainerClick(s)}),X(4,rP,1,0,"div",7),b(5,"div",8),X(6,sP,2,2,"div",9),X(7,aP,3,0,"div",10),X(8,lP,3,0,"div",11),b(9,"div",12),X(10,dP,1,1,null,13),R(11),w(),X(12,uP,3,0,"div",14),X(13,fP,3,0,"div",15),w(),X(14,hP,1,0,"div",16),w(),b(15,"div",17),X(16,pP,2,0,"div",18)(17,gP,5,1,"div",19),w()),r&2){let o;v(2),j("mdc-text-field--filled",!i._hasOutline())("mdc-text-field--outlined",i._hasOutline())("mdc-text-field--no-label",!i._hasFloatingLabel())("mdc-text-field--disabled",i._control.disabled)("mdc-text-field--invalid",i._control.errorState),v(2),J(!i._hasOutline()&&!i._control.disabled?4:-1),v(2),J(i._hasOutline()?6:-1),v(),J(i._hasIconPrefix?7:-1),v(),J(i._hasTextPrefix?8:-1),v(2),J(!i._hasOutline()||i._forceDisplayInfixLabel()?10:-1),v(2),J(i._hasTextSuffix?12:-1),v(),J(i._hasIconSuffix?13:-1),v(),J(i._hasOutline()?-1:14),v(),j("mat-mdc-form-field-subscript-dynamic-size",i.subscriptSizing==="dynamic");let s=i._getSubscriptMessageType();v(),J((o=s)==="error"?16:o==="hint"?17:-1)}},dependencies:[NE,PE,Pm,FE,_v],styles:[`.mdc-text-field {
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
`],encapsulation:2,changeDetection:0})}return t})();var Qu=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=L({type:t});static \u0275inj=F({imports:[YC,Ku,pe]})}return t})();var Xu=class{tracker;columnIndex=0;rowIndex=0;get rowCount(){return this.rowIndex+1}get rowspan(){let n=Math.max(...this.tracker);return n>1?this.rowCount+n-1:this.rowCount}positions;update(n,e){this.columnIndex=0,this.rowIndex=0,this.tracker=new Array(n),this.tracker.fill(0,0,this.tracker.length),this.positions=e.map(r=>this._trackTile(r))}_trackTile(n){let e=this._findMatchingGap(n.colspan);return this._markTilePosition(e,n),this.columnIndex=e+n.colspan,new Cv(this.rowIndex,e)}_findMatchingGap(n){n>this.tracker.length;let e=-1,r=-1;do{if(this.columnIndex+n>this.tracker.length){this._nextRow(),e=this.tracker.indexOf(0,this.columnIndex),r=this._findGapEndIndex(e);continue}if(e=this.tracker.indexOf(0,this.columnIndex),e==-1){this._nextRow(),e=this.tracker.indexOf(0,this.columnIndex),r=this._findGapEndIndex(e);continue}r=this._findGapEndIndex(e),this.columnIndex=e+1}while(r-e<n||r==0);return Math.max(e,0)}_nextRow(){this.columnIndex=0,this.rowIndex++;for(let n=0;n<this.tracker.length;n++)this.tracker[n]=Math.max(0,this.tracker[n]-1)}_findGapEndIndex(n){for(let e=n+1;e<this.tracker.length;e++)if(this.tracker[e]!=0)return e;return this.tracker.length}_markTilePosition(n,e){for(let r=0;r<e.colspan;r++)this.tracker[n+r]=e.rowspan}},Cv=class{row;col;constructor(n,e){this.row=n,this.col=e}};var BE=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275dir=q({type:t,selectors:[["","mat-line",""],["","matLine",""]],hostAttrs:[1,"mat-line"]})}return t})();function HE(t,n,e="mat"){t.changes.pipe(ze(t)).subscribe(({length:r})=>{rl(n,`${e}-2-line`,!1),rl(n,`${e}-3-line`,!1),rl(n,`${e}-multi-line`,!1),r===2||r===3?rl(n,`${e}-${r}-line`,!0):r>3&&rl(n,`${e}-multi-line`,!0)})}function rl(t,n,e){t.nativeElement.classList.toggle(n,e)}var Ev=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=L({type:t});static \u0275inj=F({imports:[pe]})}return t})();var UE=["*"],xP=[[["","mat-grid-avatar",""],["","matGridAvatar",""]],[["","mat-line",""],["","matLine",""]],"*"],IP=["[mat-grid-avatar], [matGridAvatar]","[mat-line], [matLine]","*"],SP=`.mat-grid-list {
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
`,$E=new g("MAT_GRID_LIST"),Mv=(()=>{class t{_element=u(P);_gridList=u($E,{optional:!0});_rowspan=1;_colspan=1;constructor(){}get rowspan(){return this._rowspan}set rowspan(e){this._rowspan=Math.round(nr(e))}get colspan(){return this._colspan}set colspan(e){this._colspan=Math.round(nr(e))}_setStyle(e,r){this._element.nativeElement.style[e]=r}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=S({type:t,selectors:[["mat-grid-tile"]],hostAttrs:[1,"mat-grid-tile"],hostVars:2,hostBindings:function(r,i){r&2&&ue("rowspan",i.rowspan)("colspan",i.colspan)},inputs:{rowspan:"rowspan",colspan:"colspan"},exportAs:["matGridTile"],ngContentSelectors:UE,decls:2,vars:0,consts:[[1,"mat-grid-tile-content"]],template:function(r,i){r&1&&(le(),ot(0,"div",0),R(1),pt())},styles:[`.mat-grid-list {
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
`],encapsulation:2,changeDetection:0})}return t})(),zE=(()=>{class t{_element=u(P);_lines;constructor(){}ngAfterContentInit(){HE(this._lines,this._element)}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=S({type:t,selectors:[["mat-grid-tile-header"],["mat-grid-tile-footer"]],contentQueries:function(r,i,o){if(r&1&&yt(o,BE,5),r&2){let s;Z(s=K())&&(i._lines=s)}},ngContentSelectors:IP,decls:4,vars:0,consts:[[1,"mat-grid-list-text"]],template:function(r,i){r&1&&(le(xP),R(0),ot(1,"div",0),R(2,1),pt(),R(3,2))},encapsulation:2,changeDetection:0})}return t})();var GE=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275dir=q({type:t,selectors:[["mat-grid-tile-header"]],hostAttrs:[1,"mat-grid-tile-header"]})}return t})();var MP=/^-?\d+((\.\d+)?[A-Za-z%$]?)+$/,il=class{_gutterSize;_rows=0;_rowspan=0;_cols;_direction;init(n,e,r,i){this._gutterSize=WE(n),this._rows=e.rowCount,this._rowspan=e.rowspan,this._cols=r,this._direction=i}getBaseTileSize(n,e){return`(${n}% - (${this._gutterSize} * ${e}))`}getTilePosition(n,e){return e===0?"0":Li(`(${n} + ${this._gutterSize}) * ${e}`)}getTileSize(n,e){return`(${n} * ${e}) + (${e-1} * ${this._gutterSize})`}setStyle(n,e,r){let i=100/this._cols,o=(this._cols-1)/this._cols;this.setColStyles(n,r,i,o),this.setRowStyles(n,e,i,o)}setColStyles(n,e,r,i){let o=this.getBaseTileSize(r,i),s=this._direction==="rtl"?"right":"left";n._setStyle(s,this.getTilePosition(o,e)),n._setStyle("width",Li(this.getTileSize(o,n.colspan)))}getGutterSpan(){return`${this._gutterSize} * (${this._rowspan} - 1)`}getTileSpan(n){return`${this._rowspan} * ${this.getTileSize(n,1)}`}getComputedHeight(){return null}},xv=class extends il{fixedRowHeight;constructor(n){super(),this.fixedRowHeight=n}init(n,e,r,i){super.init(n,e,r,i),this.fixedRowHeight=WE(this.fixedRowHeight),MP.test(this.fixedRowHeight)}setRowStyles(n,e){n._setStyle("top",this.getTilePosition(this.fixedRowHeight,e)),n._setStyle("height",Li(this.getTileSize(this.fixedRowHeight,n.rowspan)))}getComputedHeight(){return["height",Li(`${this.getTileSpan(this.fixedRowHeight)} + ${this.getGutterSpan()}`)]}reset(n){n._setListStyle(["height",null]),n._tiles&&n._tiles.forEach(e=>{e._setStyle("top",null),e._setStyle("height",null)})}},Iv=class extends il{rowHeightRatio;baseTileHeight;constructor(n){super(),this._parseRatio(n)}setRowStyles(n,e,r,i){let o=r/this.rowHeightRatio;this.baseTileHeight=this.getBaseTileSize(o,i),n._setStyle("marginTop",this.getTilePosition(this.baseTileHeight,e)),n._setStyle("paddingTop",Li(this.getTileSize(this.baseTileHeight,n.rowspan)))}getComputedHeight(){return["paddingBottom",Li(`${this.getTileSpan(this.baseTileHeight)} + ${this.getGutterSpan()}`)]}reset(n){n._setListStyle(["paddingBottom",null]),n._tiles.forEach(e=>{e._setStyle("marginTop",null),e._setStyle("paddingTop",null)})}_parseRatio(n){let e=n.split(":");e.length,this.rowHeightRatio=parseFloat(e[0])/parseFloat(e[1])}},Sv=class extends il{setRowStyles(n,e){let r=100/this._rowspan,i=(this._rows-1)/this._rows,o=this.getBaseTileSize(r,i);n._setStyle("top",this.getTilePosition(o,e)),n._setStyle("height",Li(this.getTileSize(o,n.rowspan)))}reset(n){n._tiles&&n._tiles.forEach(e=>{e._setStyle("top",null),e._setStyle("height",null)})}};function Li(t){return`calc(${t})`}function WE(t){return t.match(/([A-Za-z%]+)$/)?t:`${t}px`}var TP="fit",qE=(()=>{class t{_element=u(P);_dir=u(wt,{optional:!0});_cols;_tileCoordinator;_rowHeight;_gutter="1px";_tileStyler;_tiles;constructor(){}get cols(){return this._cols}set cols(e){this._cols=Math.max(1,Math.round(nr(e)))}get gutterSize(){return this._gutter}set gutterSize(e){this._gutter=`${e??""}`}get rowHeight(){return this._rowHeight}set rowHeight(e){let r=`${e??""}`;r!==this._rowHeight&&(this._rowHeight=r,this._setTileStyler(this._rowHeight))}ngOnInit(){this._checkCols(),this._checkRowHeight()}ngAfterContentChecked(){this._layoutTiles()}_checkCols(){this.cols}_checkRowHeight(){this._rowHeight||this._setTileStyler("1:1")}_setTileStyler(e){this._tileStyler&&this._tileStyler.reset(this),e===TP?this._tileStyler=new Sv:e&&e.indexOf(":")>-1?this._tileStyler=new Iv(e):this._tileStyler=new xv(e)}_layoutTiles(){this._tileCoordinator||(this._tileCoordinator=new Xu);let e=this._tileCoordinator,r=this._tiles.filter(o=>!o._gridList||o._gridList===this),i=this._dir?this._dir.value:"ltr";this._tileCoordinator.update(this.cols,r),this._tileStyler.init(this.gutterSize,e,this.cols,i),r.forEach((o,s)=>{let a=e.positions[s];this._tileStyler.setStyle(o,a.row,a.col)}),this._setListStyle(this._tileStyler.getComputedHeight())}_setListStyle(e){e&&(this._element.nativeElement.style[e[0]]=e[1])}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=S({type:t,selectors:[["mat-grid-list"]],contentQueries:function(r,i,o){if(r&1&&yt(o,Mv,5),r&2){let s;Z(s=K())&&(i._tiles=s)}},hostAttrs:[1,"mat-grid-list"],hostVars:1,hostBindings:function(r,i){r&2&&ue("cols",i.cols)},inputs:{cols:"cols",gutterSize:"gutterSize",rowHeight:"rowHeight"},exportAs:["matGridList"],features:[Oe([{provide:$E,useExisting:t}])],ngContentSelectors:UE,decls:2,vars:0,template:function(r,i){r&1&&(le(),ot(0,"div"),R(1),pt())},styles:[SP],encapsulation:2,changeDetection:0})}return t})(),YE=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=L({type:t});static \u0275inj=F({imports:[Ev,pe,Ev]})}return t})();var ol=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new D;constructor(n=!1,e,r=!0,i){this._multiple=n,this._emitChanges=r,this.compareWith=i,e&&e.length&&(n?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...n){this._verifyValueAssignment(n),n.forEach(r=>this._markSelected(r));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...n){this._verifyValueAssignment(n),n.forEach(r=>this._unmarkSelected(r));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...n){this._verifyValueAssignment(n);let e=this.selected,r=new Set(n.map(o=>this._getConcreteValue(o)));n.forEach(o=>this._markSelected(o)),e.filter(o=>!r.has(this._getConcreteValue(o,r))).forEach(o=>this._unmarkSelected(o));let i=this._hasQueuedChanges();return this._emitChangeEvent(),i}toggle(n){return this.isSelected(n)?this.deselect(n):this.select(n)}clear(n=!0){this._unmarkAll();let e=this._hasQueuedChanges();return n&&this._emitChangeEvent(),e}isSelected(n){return this._selection.has(this._getConcreteValue(n))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(n){this._multiple&&this.selected&&this._selected.sort(n)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(n){n=this._getConcreteValue(n),this.isSelected(n)||(this._multiple||this._unmarkAll(),this.isSelected(n)||this._selection.add(n),this._emitChanges&&this._selectedToEmit.push(n))}_unmarkSelected(n){n=this._getConcreteValue(n),this.isSelected(n)&&(this._selection.delete(n),this._emitChanges&&this._deselectedToEmit.push(n))}_unmarkAll(){this.isEmpty()||this._selection.forEach(n=>this._unmarkSelected(n))}_verifyValueAssignment(n){n.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(n,e){if(this.compareWith){e=e??this._selection;for(let r of e)if(this.compareWith(n,r))return r;return n}else return n}};var ZE=(()=>{class t{_animationsDisabled=Le();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=S({type:t,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(r,i){r&2&&j("mat-pseudo-checkbox-indeterminate",i.state==="indeterminate")("mat-pseudo-checkbox-checked",i.state==="checked")("mat-pseudo-checkbox-disabled",i.disabled)("mat-pseudo-checkbox-minimal",i.appearance==="minimal")("mat-pseudo-checkbox-full",i.appearance==="full")("_mat-animation-noopable",i._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(r,i){},styles:[`.mat-pseudo-checkbox {
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
`],encapsulation:2,changeDetection:0})}return t})();var RP=["text"],kP=[[["mat-icon"]],"*"],NP=["mat-icon","*"];function OP(t,n){if(t&1&&he(0,"mat-pseudo-checkbox",1),t&2){let e=H();fe("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function FP(t,n){if(t&1&&he(0,"mat-pseudo-checkbox",3),t&2){let e=H();fe("disabled",e.disabled)}}function PP(t,n){if(t&1&&(b(0,"span",4),x(1),w()),t&2){let e=H();v(),se("(",e.group.label,")")}}var Av=new g("MAT_OPTION_PARENT_COMPONENT"),Rv=new g("MatOptgroup");var Tv=class{source;isUserInput;constructor(n,e=!1){this.source=n,this.isUserInput=e}},ns=(()=>{class t{_element=u(P);_changeDetectorRef=u(Te);_parent=u(Av,{optional:!0});group=u(Rv,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=u(at).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=we(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new W;_text;_stateChanges=new D;constructor(){let e=u(_t);e.load(kr),e.load(uu),this._signalDisableRipple=!!this._parent&&Cr(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,r){let i=this._getHostElement();typeof i.focus=="function"&&i.focus(r)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!Ft(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new Tv(this,e))}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=S({type:t,selectors:[["mat-option"]],viewQuery:function(r,i){if(r&1&&Qe(RP,7),r&2){let o;Z(o=K())&&(i._text=o.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(r,i){r&1&&ge("click",function(){return i._selectViaInteraction()})("keydown",function(s){return i._handleKeydown(s)}),r&2&&(Gt("id",i.id),ue("aria-selected",i.selected)("aria-disabled",i.disabled.toString()),j("mdc-list-item--selected",i.selected)("mat-mdc-option-multiple",i.multiple)("mat-mdc-option-active",i.active)("mdc-list-item--disabled",i.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",ie]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:NP,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(r,i){r&1&&(le(kP),X(0,OP,1,2,"mat-pseudo-checkbox",1),R(1),b(2,"span",2,0),R(4,1),w(),X(5,FP,1,1,"mat-pseudo-checkbox",3),X(6,PP,2,1,"span",4),he(7,"div",5)),r&2&&(J(i.multiple?0:-1),v(5),J(!i.multiple&&i.selected&&!i.hideSingleSelectionIndicator?5:-1),v(),J(i.group&&i.group._inert?6:-1),v(),fe("matRippleTrigger",i._getHostElement())("matRippleDisabled",i.disabled||i.disableRipple))},dependencies:[ZE,$o],styles:[`.mat-mdc-option {
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
`],encapsulation:2,changeDetection:0})}return t})();function KE(t,n,e){if(e.length){let r=n.toArray(),i=e.toArray(),o=0;for(let s=0;s<t+1;s++)r[s].group&&r[s].group===i[o]&&o++;return o}return 0}function QE(t,n,e,r){return t<e?t:t+n>e+r?Math.max(0,t-r+n):e}var XE=(()=>{class t{isErrorState(e,r){return!!(e&&e.invalid&&(e.touched||r&&r.submitted))}static \u0275fac=function(r){return new(r||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ju=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(n,e,r,i,o){this._defaultMatcher=n,this.ngControl=e,this._parentFormGroup=r,this._parentForm=i,this._stateChanges=o}updateErrorState(){let n=this.errorState,e=this._parentFormGroup||this._parentForm,r=this.matcher||this._defaultMatcher,i=this.ngControl?this.ngControl.control:null,o=r?.isErrorState(i,e)??!1;o!==n&&(this.errorState=o,this._stateChanges.next())}};var JE=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=L({type:t});static \u0275inj=F({imports:[pe]})}return t})();var kv=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=L({type:t});static \u0275inj=F({imports:[zo,JE,ns,pe]})}return t})();var LP=["trigger"],jP=["panel"],VP=[[["mat-select-trigger"]],"*"],BP=["mat-select-trigger","*"];function HP(t,n){if(t&1&&(b(0,"span",4),x(1),w()),t&2){let e=H();v(),Se(e.placeholder)}}function UP(t,n){t&1&&R(0)}function $P(t,n){if(t&1&&(b(0,"span",11),x(1),w()),t&2){let e=H(2);v(),Se(e.triggerValue)}}function zP(t,n){if(t&1&&(b(0,"span",5),X(1,UP,1,0)(2,$P,2,1,"span",11),w()),t&2){let e=H();v(),J(e.customTrigger?1:2)}}function GP(t,n){if(t&1){let e=Nt();b(0,"div",12,1),ge("keydown",function(i){Ye(e);let o=H();return Ze(o._handleKeydown(i))}),R(2,1),w()}if(t&2){let e=H();Mt(e.panelClass),j("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",(e._parentFormField==null?null:e._parentFormField.color)==="primary")("mat-accent",(e._parentFormField==null?null:e._parentFormField.color)==="accent")("mat-warn",(e._parentFormField==null?null:e._parentFormField.color)==="warn")("mat-undefined",!(e._parentFormField!=null&&e._parentFormField.color)),ue("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var WP=new g("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let t=u(z);return()=>Fi(t)}}),qP=new g("MAT_SELECT_CONFIG"),YP=new g("MatSelectTrigger"),Nv=class{source;value;constructor(n,e){this.source=n,this.value=e}},ex=(()=>{class t{_viewportRuler=u(Mn);_changeDetectorRef=u(Te);_elementRef=u(P);_dir=u(wt,{optional:!0});_idGenerator=u(at);_renderer=u(Ue);_parentFormField=u(Dv,{optional:!0});ngControl=u(Vu,{self:!0,optional:!0});_liveAnnouncer=u(Oa);_defaultOptions=u(qP,{optional:!0});_animationsDisabled=Le();_popoverLocation;_initialized=new D;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let r=this.options.toArray()[e];if(r){let i=this.panel.nativeElement,o=KE(e,this.options,this.optionGroups),s=r._getHostElement();e===0&&o===1?i.scrollTop=0:i.scrollTop=QE(s.offsetTop,s.offsetHeight,i.scrollTop,i.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new Nv(this,e)}_scrollStrategyFactory=u(WP);_panelOpen=!1;_compareWith=(e,r)=>e===r;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new D;_errorStateTracker;stateChanges=new D;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=we(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(Pu.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=Wr(()=>{let e=this.options;return e?e.changes.pipe(ze(e),ve(()=>Pt(...e.map(r=>r.onSelectionChange)))):this._initialized.pipe(ve(()=>this.optionSelectionChanges))});openedChange=new W;_openedStream=this.openedChange.pipe(ae(e=>e),T(()=>{}));_closedStream=this.openedChange.pipe(ae(e=>!e),T(()=>{}));selectionChange=new W;valueChange=new W;constructor(){let e=u(XE),r=u(vv,{optional:!0}),i=u(yv,{optional:!0}),o=u(new Kn("tabindex"),{optional:!0}),s=u(Ga,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new Ju(e,this.ngControl,i,r,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=o==null?0:parseInt(o)||0,this._popoverLocation=s?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new ol(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(de(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(de(this._destroy)).subscribe(e=>{e.added.forEach(r=>r.select()),e.removed.forEach(r=>r.deselect())}),this.options.changes.pipe(ze(null),de(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),r=this.ngControl;if(e!==this._triggerAriaLabelledBy){let i=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?i.setAttribute("aria-labelledby",e):i.removeAttribute("aria-labelledby")}r&&(this._previousControl!==r.control&&(this._previousControl!==void 0&&r.disabled!==null&&r.disabled!==this.disabled&&(this.disabled=r.disabled),this._previousControl=r.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe(xe(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}_trackedModal=null;_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let r=`${this.id}-panel`;this._trackedModal&&Fg(this._trackedModal,"aria-owns",r),t0(e,"aria-owns",r),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;Fg(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{r(),clearTimeout(i),this._cleanupDetach=void 0};let e=this.panel.nativeElement,r=this._renderer.listen(e,"animationend",o=>{o.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),i=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(r=>r.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let r=e.keyCode,i=r===40||r===38||r===37||r===39,o=r===13||r===32,s=this._keyManager;if(!s.isTyping()&&o&&!Ft(e)||(this.multiple||e.altKey)&&i)e.preventDefault(),this.open();else if(!this.multiple){let a=this.selected;s.onKeydown(e);let l=this.selected;l&&a!==l&&this._liveAnnouncer.announce(l.viewValue,1e4)}}_handleOpenKeydown(e){let r=this._keyManager,i=e.keyCode,o=i===40||i===38,s=r.isTyping();if(o&&e.altKey)e.preventDefault(),this.close();else if(!s&&(i===13||i===32)&&r.activeItem&&!Ft(e))e.preventDefault(),r.activeItem._selectViaInteraction();else if(!s&&this._multiple&&i===65&&e.ctrlKey){e.preventDefault();let a=this.options.some(l=>!l.disabled&&!l.selected);this.options.forEach(l=>{l.disabled||(a?l.select():l.deselect())})}else{let a=r.activeItemIndex;r.onKeydown(e),this._multiple&&o&&e.shiftKey&&r.activeItem&&r.activeItemIndex!==a&&r.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!Ft(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(r=>r.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(r=>this._selectOptionByValue(r)),this._sortValues();else{let r=this._selectOptionByValue(e);r?this._keyManager.updateActiveItem(r):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let r=this.options.find(i=>{if(this._selectionModel.isSelected(i))return!1;try{return(i.value!=null||this.canSelectNullableOptions)&&this._compareWith(i.value,e)}catch{return!1}});return r&&this._selectionModel.select(r),r}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof Bo?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new Va(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=Pt(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(de(e)).subscribe(r=>{this._onSelect(r.source,r.isUserInput),r.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),Pt(...this.options.map(r=>r._stateChanges)).pipe(de(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,r){let i=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(i!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),r&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),r&&this.focus())),i!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((r,i)=>this.sortComparator?this.sortComparator(r,i,e):e.indexOf(r)-e.indexOf(i)),this.stateChanges.next()}}_propagateChanges(e){let r;this.multiple?r=this.selected.map(i=>i.value):r=this.selected?this.selected.value:e,this._value=r,this.valueChange.emit(r),this._onChange(r),this.selectionChange.emit(this._getChangeEvent(r)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let r=0;r<this.options.length;r++)if(!this.options.get(r).disabled){e=r;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,r=e?e+" ":"";return this.ariaLabelledby?r+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let r=this._elementRef.nativeElement;e.length?r.setAttribute("aria-describedby",e.join(" ")):r.removeAttribute("aria-describedby")}onContainerClick(e){let r=mt(e);r&&(r.tagName==="MAT-OPTION"||r.classList.contains("cdk-overlay-backdrop")||r.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=S({type:t,selectors:[["mat-select"]],contentQueries:function(r,i,o){if(r&1&&yt(o,YP,5)(o,ns,5)(o,Rv,5),r&2){let s;Z(s=K())&&(i.customTrigger=s.first),Z(s=K())&&(i.options=s),Z(s=K())&&(i.optionGroups=s)}},viewQuery:function(r,i){if(r&1&&Qe(LP,5)(jP,5)(Iu,5),r&2){let o;Z(o=K())&&(i.trigger=o.first),Z(o=K())&&(i.panel=o.first),Z(o=K())&&(i._overlayDir=o.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(r,i){r&1&&ge("keydown",function(s){return i._handleKeydown(s)})("focus",function(){return i._onFocus()})("blur",function(){return i._onBlur()}),r&2&&(ue("id",i.id)("tabindex",i.disabled?-1:i.tabIndex)("aria-controls",i.panelOpen?i.id+"-panel":null)("aria-expanded",i.panelOpen)("aria-label",i.ariaLabel||null)("aria-required",i.required.toString())("aria-disabled",i.disabled.toString())("aria-invalid",i.errorState)("aria-activedescendant",i._getAriaActiveDescendant()),j("mat-mdc-select-disabled",i.disabled)("mat-mdc-select-invalid",i.errorState)("mat-mdc-select-required",i.required)("mat-mdc-select-empty",i.empty)("mat-mdc-select-multiple",i.multiple)("mat-select-open",i.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",ie],disableRipple:[2,"disableRipple","disableRipple",ie],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:bi(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",ie],placeholder:"placeholder",required:[2,"required","required",ie],multiple:[2,"multiple","multiple",ie],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",ie],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",bi],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",ie]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[Oe([{provide:wv,useExisting:t},{provide:Av,useExisting:t}]),ut],ngContentSelectors:BP,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(r,i){if(r&1&&(le(VP),b(0,"div",2,0),ge("click",function(){return i.open()}),b(3,"div",3),X(4,HP,2,1,"span",4)(5,zP,3,1,"span",5),w(),b(6,"div",6)(7,"div",7),_r(),b(8,"svg",8),he(9,"path",9),w()()()(),zt(10,GP,3,16,"ng-template",10),ge("detach",function(){return i.close()})("backdropClick",function(){return i.close()})("overlayKeydown",function(s){return i._handleOverlayKeydown(s)})),r&2){let o=Wt(1);v(3),ue("id",i._valueId),v(),J(i.empty?4:5),v(6),fe("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",i._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",i._scrollStrategy)("cdkConnectedOverlayOrigin",i._preferredOverlayOrigin||o)("cdkConnectedOverlayPositions",i._positions)("cdkConnectedOverlayWidth",i._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",i._popoverLocation)}},dependencies:[Bo,Iu],styles:[`@keyframes _mat-select-enter {
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
`],encapsulation:2,changeDetection:0})}return t})();var tx=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=L({type:t});static \u0275inj=F({imports:[Uo,kv,pe,rr,Qu,kv]})}return t})();var nf=["*"],KP=["content"],QP=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],XP=["mat-drawer","mat-drawer-content","*"];function JP(t,n){if(t&1){let e=Nt();b(0,"div",1),ge("click",function(){Ye(e);let i=H();return Ze(i._onBackdropClicked())}),w()}if(t&2){let e=H();j("mat-drawer-shown",e._isShowingBackdrop())}}function e1(t,n){t&1&&(b(0,"mat-drawer-content"),R(1,2),w())}var t1=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],n1=["mat-sidenav","mat-sidenav-content","*"];function r1(t,n){if(t&1){let e=Nt();b(0,"div",1),ge("click",function(){Ye(e);let i=H();return Ze(i._onBackdropClicked())}),w()}if(t&2){let e=H();j("mat-drawer-shown",e._isShowingBackdrop())}}function i1(t,n){t&1&&(b(0,"mat-sidenav-content"),R(1,2),w())}var o1=`.mat-drawer-container {
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
`;var s1=new g("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),Pv=new g("MAT_DRAWER_CONTAINER"),ef=(()=>{class t extends Lo{_platform=u(Ee);_changeDetectorRef=u(Te);_container=u(Fv);constructor(){let e=u(P),r=u(Ni),i=u(O);super(e,r,i)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:r}=this._container;return e!=null&&e.mode!=="over"&&e.opened||r!=null&&r.mode!=="over"&&r.opened}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=S({type:t,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(r,i){r&2&&(qn("margin-left",i._container._contentMargins.left,"px")("margin-right",i._container._contentMargins.right,"px"),j("mat-drawer-content-hidden",i._shouldBeHidden()))},features:[Oe([{provide:Lo,useExisting:t}]),Pe],ngContentSelectors:nf,decls:1,vars:0,template:function(r,i){r&1&&(le(),R(0))},encapsulation:2,changeDetection:0})}return t})(),Ov=(()=>{class t{_elementRef=u(P);_focusTrapFactory=u(Ng);_focusMonitor=u(Sn);_platform=u(Ee);_ngZone=u(O);_renderer=u(Ue);_interactivityChecker=u(pu);_doc=u(B);_container=u(Pv,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=Zt(e)}_disableClose=!1;get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=Zt(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(Zt(e))}_opened=we(!1);_openedVia=null;_animationStarted=new D;_animationEnd=new D;openedChange=new W(!0);_openedStream=this.openedChange.pipe(ae(e=>e),T(()=>{}));openedStart=this._animationStarted.pipe(ae(()=>this.opened),zl(void 0));_closedStream=this.openedChange.pipe(ae(e=>!e),T(()=>{}));closedStart=this._animationStarted.pipe(ae(()=>!this.opened),zl(void 0));_destroyed=new D;onPositionChanged=new W;_content;_modeChanged=new D;_injector=u(z);_changeDetectorRef=u(Te);constructor(){this.openedChange.pipe(de(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,r=this._elementRef.nativeElement;return[e.listen(r,"keydown",i=>{i.keyCode===27&&!this.disableClose&&!Ft(i)&&this._ngZone.run(()=>{this.close(),i.stopPropagation(),i.preventDefault()})}),e.listen(r,"transitionend",this._handleTransitionEvent),e.listen(r,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(e,r){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let i=()=>{o(),s(),e.removeAttribute("tabindex")},o=this._renderer.listen(e,"blur",i),s=this._renderer.listen(e,"mousedown",i)})),e.focus(r)}_focusByCssSelector(e,r){let i=this._elementRef.nativeElement.querySelector(e);i&&this._forceFocus(i,r)}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":it(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus=="function"&&e.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(e=!this.opened,r){e&&r&&(this._openedVia=r);let i=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),i}_setOpen(e,r,i){return e===this.opened?Promise.resolve(e?"open":"close"):(this._opened.set(e),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",e),!e&&r&&this._restoreFocus(i),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(o=>{this.openedChange.pipe(xe(1)).subscribe(s=>o(s?"open":"close"))}))}_setIsAnimating(e){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",e)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let r=this._elementRef.nativeElement,i=r.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),i.insertBefore(this._anchor,r)),i.appendChild(r)):this._anchor&&this._anchor.parentNode.insertBefore(r,this._anchor)}_handleTransitionEvent=e=>{let r=this._elementRef.nativeElement;e.target===r&&this._ngZone.run(()=>{e.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static \u0275fac=function(r){return new(r||t)};static \u0275cmp=S({type:t,selectors:[["mat-drawer"]],viewQuery:function(r,i){if(r&1&&Qe(KP,5),r&2){let o;Z(o=K())&&(i._content=o.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(r,i){r&2&&(ue("align",null)("tabIndex",i.mode!=="side"?"-1":null),qn("visibility",!i._container&&!i.opened?"hidden":null),j("mat-drawer-end",i.position==="end")("mat-drawer-over",i.mode==="over")("mat-drawer-push",i.mode==="push")("mat-drawer-side",i.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:nf,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(r,i){r&1&&(le(),b(0,"div",1,0),R(2),w())},dependencies:[Lo],encapsulation:2,changeDetection:0})}return t})(),Fv=(()=>{class t{_dir=u(wt,{optional:!0});_element=u(P);_ngZone=u(O);_changeDetectorRef=u(Te);_animationDisabled=Le();_transitionsEnabled=!1;_allDrawers;_drawers=new sn;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=Zt(e)}_autosize=u(s1);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:Zt(e)}_backdropOverride=null;backdropClick=new W;_start=null;_end=null;_left=null;_right=null;_destroyed=new D;_doCheckSubject=new D;_contentMargins={left:null,right:null};_contentMarginChanges=new D;get scrollable(){return this._userContent||this._content}_injector=u(z);constructor(){let e=u(Ee),r=u(Mn);this._dir?.change.pipe(de(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),r.change().pipe(de(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(ze(this._allDrawers),de(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(r=>!r._container||r._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(ze(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(qr(10),de(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,r=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let i=this._left._getWidth();e+=i,r-=i}}if(this._right&&this._right.opened){if(this._right.mode=="side")r+=this._right._getWidth();else if(this._right.mode=="push"){let i=this._right._getWidth();r+=i,e-=i}}e=e||null,r=r||null,(e!==this._contentMargins.left||r!==this._contentMargins.right)&&(this._contentMargins={left:e,right:r},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(de(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!=="side"&&e.openedChange.pipe(de(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(de(this._drawers.changes)).subscribe(()=>{it({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(de(Pt(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let r=this._element.nativeElement.classList,i="mat-drawer-container-has-open";e?r.add(i):r.remove(i)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=S({type:t,selectors:[["mat-drawer-container"]],contentQueries:function(r,i,o){if(r&1&&yt(o,ef,5)(o,Ov,5),r&2){let s;Z(s=K())&&(i._content=s.first),Z(s=K())&&(i._allDrawers=s)}},viewQuery:function(r,i){if(r&1&&Qe(ef,5),r&2){let o;Z(o=K())&&(i._userContent=o.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(r,i){r&2&&j("mat-drawer-container-explicit-backdrop",i._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[Oe([{provide:Pv,useExisting:t}])],ngContentSelectors:XP,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(r,i){r&1&&(le(QP),X(0,JP,1,2,"div",0),R(1),R(2,1),X(3,e1,2,0,"mat-drawer-content")),r&2&&(J(i.hasBackdrop?0:-1),v(3),J(i._content?-1:3))},dependencies:[ef],styles:[`.mat-drawer-container {
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
`],encapsulation:2,changeDetection:0})}return t})(),tf=(()=>{class t extends ef{static \u0275fac=(()=>{let e;return function(i){return(e||(e=St(t)))(i||t)}})();static \u0275cmp=S({type:t,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[Oe([{provide:Lo,useExisting:t}]),Pe],ngContentSelectors:nf,decls:1,vars:0,template:function(r,i){r&1&&(le(),R(0))},encapsulation:2,changeDetection:0})}return t})(),Lv=(()=>{class t extends Ov{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=Zt(e)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=nr(e)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=nr(e)}_fixedBottomGap=0;static \u0275fac=(()=>{let e;return function(i){return(e||(e=St(t)))(i||t)}})();static \u0275cmp=S({type:t,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(r,i){r&2&&(ue("tabIndex",i.mode!=="side"?"-1":null)("align",null),qn("top",i.fixedInViewport?i.fixedTopGap:null,"px")("bottom",i.fixedInViewport?i.fixedBottomGap:null,"px"),j("mat-drawer-end",i.position==="end")("mat-drawer-over",i.mode==="over")("mat-drawer-push",i.mode==="push")("mat-drawer-side",i.mode==="side")("mat-sidenav-fixed",i.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[Oe([{provide:Ov,useExisting:t}]),Pe],ngContentSelectors:nf,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(r,i){r&1&&(le(),b(0,"div",1,0),R(2),w())},dependencies:[Lo],encapsulation:2,changeDetection:0})}return t})(),nx=(()=>{class t extends Fv{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let e;return function(i){return(e||(e=St(t)))(i||t)}})();static \u0275cmp=S({type:t,selectors:[["mat-sidenav-container"]],contentQueries:function(r,i,o){if(r&1&&yt(o,tf,5)(o,Lv,5),r&2){let s;Z(s=K())&&(i._content=s.first),Z(s=K())&&(i._allDrawers=s)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(r,i){r&2&&j("mat-drawer-container-explicit-backdrop",i._backdropOverride)},exportAs:["matSidenavContainer"],features:[Oe([{provide:Pv,useExisting:t},{provide:Fv,useExisting:t}]),Pe],ngContentSelectors:n1,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(r,i){r&1&&(le(t1),X(0,r1,1,2,"div",0),R(1),R(2,1),X(3,i1,2,0,"mat-sidenav-content")),r&2&&(J(i.hasBackdrop?0:-1),v(3),J(i._content?-1:3))},dependencies:[tf],styles:[o1],encapsulation:2,changeDetection:0})}return t})(),rx=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=L({type:t});static \u0275inj=F({imports:[rr,pe,rr]})}return t})();var l1=["mat-internal-form-field",""],c1=["*"],ix=(()=>{class t{labelPosition="after";static \u0275fac=function(r){return new(r||t)};static \u0275cmp=S({type:t,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(r,i){r&2&&j("mdc-form-field--align-end",i.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:l1,ngContentSelectors:c1,decls:1,vars:0,template:function(r,i){r&1&&(le(),R(0))},styles:[`.mat-internal-form-field {
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
`],encapsulation:2,changeDetection:0})}return t})();var d1=["switch"],u1=["*"];function f1(t,n){t&1&&(b(0,"span",11),_r(),b(1,"svg",13),he(2,"path",14),w(),b(3,"svg",15),he(4,"path",16),w()())}var h1=new g("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})}),rf=class{source;checked;constructor(n,e){this.source=n,this.checked=e}},p1=(()=>{class t{_elementRef=u(P);_focusMonitor=u(Sn);_changeDetectorRef=u(Te);defaults=u(h1);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new rf(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=Le();_focused=!1;name=null;id;labelPosition="after";ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new W;toggleChange=new W;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){u(_t).load(kr);let e=u(new Kn("tabindex"),{optional:!0}),r=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=r.color||"accent",this.id=this._uniqueId=u(at).getId("mat-mdc-slide-toggle-"),this.hideIcon=r.hideIcon??!1,this.disabledInteractive=r.disabledInteractive??!1,this._labelId=this._uniqueId+"-label"}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e==="keyboard"||e==="program"?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new rf(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=S({type:t,selectors:[["mat-slide-toggle"]],viewQuery:function(r,i){if(r&1&&Qe(d1,5),r&2){let o;Z(o=K())&&(i._switchElement=o.first)}},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:13,hostBindings:function(r,i){r&2&&(Gt("id",i.id),ue("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),Mt(i.color?"mat-"+i.color:""),j("mat-mdc-slide-toggle-focused",i._focused)("mat-mdc-slide-toggle-checked",i.checked)("_mat-animation-noopable",i._noopAnimations))},inputs:{name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],required:[2,"required","required",ie],color:"color",disabled:[2,"disabled","disabled",ie],disableRipple:[2,"disableRipple","disableRipple",ie],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:bi(e)],checked:[2,"checked","checked",ie],hideIcon:[2,"hideIcon","hideIcon",ie],disabledInteractive:[2,"disabledInteractive","disabledInteractive",ie]},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[Oe([{provide:iE,useExisting:bn(()=>t),multi:!0},{provide:qu,useExisting:t,multi:!0}]),ut],ngContentSelectors:u1,decls:14,vars:27,consts:[["switch",""],["mat-internal-form-field","",3,"labelPosition"],["role","switch","type","button",1,"mdc-switch",3,"click","tabIndex","disabled"],[1,"mat-mdc-slide-toggle-touch-target"],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-switch__icons"],[1,"mdc-label",3,"click","for"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"]],template:function(r,i){if(r&1&&(le(),b(0,"div",1)(1,"button",2,0),ge("click",function(){return i._handleClick()}),he(3,"div",3)(4,"span",4),b(5,"span",5)(6,"span",6)(7,"span",7),he(8,"span",8),w(),b(9,"span",9),he(10,"span",10),w(),X(11,f1,5,0,"span",11),w()()(),b(12,"label",12),ge("click",function(s){return s.stopPropagation()}),R(13),w()()),r&2){let o=Wt(2);fe("labelPosition",i.labelPosition),v(),j("mdc-switch--selected",i.checked)("mdc-switch--unselected",!i.checked)("mdc-switch--checked",i.checked)("mdc-switch--disabled",i.disabled)("mat-mdc-slide-toggle-disabled-interactive",i.disabledInteractive),fe("tabIndex",i.disabled&&!i.disabledInteractive?-1:i.tabIndex)("disabled",i.disabled&&!i.disabledInteractive),ue("id",i.buttonId)("name",i.name)("aria-label",i.ariaLabel)("aria-labelledby",i._getAriaLabelledBy())("aria-describedby",i.ariaDescribedby)("aria-required",i.required||null)("aria-checked",i.checked)("aria-disabled",i.disabled&&i.disabledInteractive?"true":null),v(9),fe("matRippleTrigger",o)("matRippleDisabled",i.disableRipple||i.disabled)("matRippleCentered",!0),v(),J(i.hideIcon?-1:11),v(),fe("for",i.buttonId),ue("id",i._labelId)}},dependencies:[$o,ix],styles:[`.mdc-switch {
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
`],encapsulation:2,changeDetection:0})}return t})(),ox=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=L({type:t});static \u0275inj=F({imports:[p1,pe]})}return t})();var of=class t{playerCount=new W;neutralBuildings=[{title:"A",sides:[{title:"front"}]},{title:"B",sides:[{title:"front"}]},{title:"C",sides:[{title:"front"}]},{title:"D",sides:[{title:"front"}]},{title:"E",sides:[{title:"front"}]},{title:"F",sides:[{title:"front"}]},{title:"G",sides:[{title:"front"}]},{title:"H",sides:[{title:"front"}]}];playerBuildings=[{title:"1",sides:[{title:"a"},{title:"b"}]},{title:"2",sides:[{title:"a"},{title:"b"}]},{title:"3",sides:[{title:"a"},{title:"b"}]},{title:"4",sides:[{title:"a"},{title:"b"}]},{title:"5",sides:[{title:"a"},{title:"b"}]},{title:"6",sides:[{title:"a"},{title:"b"}]},{title:"7",sides:[{title:"a"},{title:"b"}]},{title:"8",sides:[{title:"a"},{title:"b"}]},{title:"9",sides:[{title:"a"},{title:"b"}]},{title:"10",sides:[{title:"a"},{title:"b"}]}];stationMasters=[{title:"1",sides:[{title:"front",image:"img/station-master-01.png"}]},{title:"2",sides:[{title:"front",image:"img/station-master-02.png"}]},{title:"3",sides:[{title:"front",image:"img/station-master-03.png"}]},{title:"4",sides:[{title:"front",image:"img/station-master-04.png"}]},{title:"5",sides:[{title:"front",image:"img/station-master-05.png"}]},{title:"6",sides:[{title:"front",image:"img/station-master-06.png"}]},{title:"7",sides:[{title:"front",image:"img/station-master-07.png"}]},{title:"8",sides:[{title:"front",image:"img/station-master-08.png"}]}];cities=[{title:"Le Havre",sides:[{title:"a"},{title:"b"}]},{title:"Rotterdam",sides:[{title:"a"},{title:"b"}]},{title:"Liverpool",sides:[{title:"a"},{title:"b"}]}];getRandomNeutralBuildingOrder(){return this.shuffleArray(this.neutralBuildings)}getRandomStationMasters(){let n=[],e=this.shuffleArray(this.stationMasters);for(let r=0;r<5;r++)n.push(e.pop());return n}getRandomPlayerBuildings(){let n=JSON.parse(JSON.stringify(this.playerBuildings));return n.forEach(e=>{e.sides.splice(Math.floor(Math.random()*e.sides.length),1)}),n}getRandomCities(){let n=JSON.parse(JSON.stringify(this.cities));return n.forEach(e=>{e.sides.splice(Math.floor(Math.random()*e.sides.length),1)}),n}shuffleArray(n){let e=n.slice();for(let r,i,o=e.length;o;r=Math.floor(Math.random()*o),i=e[--o],e[o]=e[r],e[r]=i);return e}static \u0275fac=function(e){return new(e||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})};var sf=class t{getNumber(n){let e=this.getString(n);if(e===null)return null;let r=Number(e);return Number.isFinite(r)?r:null}setNumber(n,e){this.setString(n,String(e))}getString(n){return this.isStorageAvailable()?localStorage.getItem(n):null}setString(n,e){this.isStorageAvailable()&&localStorage.setItem(n,e)}isStorageAvailable(){return typeof window<"u"&&typeof localStorage<"u"}static \u0275fac=function(e){return new(e||t)};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})};var m1=["*",[["mat-toolbar-row"]]],g1=["*","mat-toolbar-row"],v1=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275dir=q({type:t,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return t})(),af=(()=>{class t{_elementRef=u(P);_platform=u(Ee);_document=u(B);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=S({type:t,selectors:[["mat-toolbar"]],contentQueries:function(r,i,o){if(r&1&&yt(o,v1,5),r&2){let s;Z(s=K())&&(i._toolbarRows=s)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(r,i){r&2&&(Mt(i.color?"mat-"+i.color:""),j("mat-toolbar-multiple-rows",i._toolbarRows.length>0)("mat-toolbar-single-row",i._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:g1,decls:2,vars:0,template:function(r,i){r&1&&(le(m1),R(0),R(1,1))},styles:[`.mat-toolbar {
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
`],encapsulation:2,changeDetection:0})}return t})();var lf=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=L({type:t});static \u0275inj=F({imports:[pe]})}return t})();function ax(t){return Error(`Unable to find icon with the name "${t}"`)}function y1(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function lx(t){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${t}".`)}function cx(t){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${t}".`)}var sr=class{url;svgText;options;svgElement=null;constructor(n,e,r){this.url=n,this.svgText=e,this.options=r}},ux=(()=>{class t{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,r,i,o){this._httpClient=e,this._sanitizer=r,this._errorHandler=o,this._document=i}addSvgIcon(e,r,i){return this.addSvgIconInNamespace("",e,r,i)}addSvgIconLiteral(e,r,i){return this.addSvgIconLiteralInNamespace("",e,r,i)}addSvgIconInNamespace(e,r,i,o){return this._addSvgIconConfig(e,r,new sr(i,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,r,i,o){let s=this._sanitizer.sanitize(Ke.HTML,i);if(!s)throw cx(i);let a=Ti(s);return this._addSvgIconConfig(e,r,new sr("",a,o))}addSvgIconSet(e,r){return this.addSvgIconSetInNamespace("",e,r)}addSvgIconSetLiteral(e,r){return this.addSvgIconSetLiteralInNamespace("",e,r)}addSvgIconSetInNamespace(e,r,i){return this._addSvgIconSetConfig(e,new sr(r,null,i))}addSvgIconSetLiteralInNamespace(e,r,i){let o=this._sanitizer.sanitize(Ke.HTML,r);if(!o)throw cx(r);let s=Ti(o);return this._addSvgIconSetConfig(e,new sr("",s,i))}registerFontClassAlias(e,r=e){return this._fontCssClassesByAlias.set(e,r),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let r=this._sanitizer.sanitize(Ke.RESOURCE_URL,e);if(!r)throw lx(e);let i=this._cachedIconsByUrl.get(r);return i?N(cf(i)):this._loadSvgIconFromConfig(new sr(e,null)).pipe(Be(o=>this._cachedIconsByUrl.set(r,o)),T(o=>cf(o)))}getNamedSvgIcon(e,r=""){let i=dx(r,e),o=this._svgIconConfigs.get(i);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(r,e),o)return this._svgIconConfigs.set(i,o),this._getSvgFromConfig(o);let s=this._iconSetConfigs.get(r);return s?this._getSvgFromIconSetConfigs(e,s):ps(ax(i))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?N(cf(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(T(r=>cf(r)))}_getSvgFromIconSetConfigs(e,r){let i=this._extractIconWithNameFromAnySet(e,r);if(i)return N(i);let o=r.filter(s=>!s.svgText).map(s=>this._loadSvgIconSetFromConfig(s).pipe(mn(a=>{let c=`Loading icon set URL: ${this._sanitizer.sanitize(Ke.RESOURCE_URL,s.url)} failed: ${a.message}`;return this._errorHandler.handleError(new Error(c)),N(null)})));return Rn(o).pipe(T(()=>{let s=this._extractIconWithNameFromAnySet(e,r);if(!s)throw ax(e);return s}))}_extractIconWithNameFromAnySet(e,r){for(let i=r.length-1;i>=0;i--){let o=r[i];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let s=this._svgElementFromConfig(o),a=this._extractSvgIconFromSet(s,e,o.options);if(a)return a}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(Be(r=>e.svgText=r),T(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?N(null):this._fetchIcon(e).pipe(Be(r=>e.svgText=r))}_extractSvgIconFromSet(e,r,i){let o=e.querySelector(`[id="${r}"]`);if(!o)return null;let s=o.cloneNode(!0);if(s.removeAttribute("id"),s.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(s,i);if(s.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(s),i);let a=this._svgElementFromString(Ti("<svg></svg>"));return a.appendChild(s),this._setSvgAttributes(a,i)}_svgElementFromString(e){let r=this._document.createElement("DIV");r.innerHTML=e;let i=r.querySelector("svg");if(!i)throw Error("<svg> tag not found");return i}_toSvgElement(e){let r=this._svgElementFromString(Ti("<svg></svg>")),i=e.attributes;for(let o=0;o<i.length;o++){let{name:s,value:a}=i[o];s!=="id"&&r.setAttribute(s,a)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&r.appendChild(e.childNodes[o].cloneNode(!0));return r}_setSvgAttributes(e,r){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),r&&r.viewBox&&e.setAttribute("viewBox",r.viewBox),e}_fetchIcon(e){let{url:r,options:i}=e,o=i?.withCredentials??!1;if(!this._httpClient)throw y1();if(r==null)throw Error(`Cannot fetch icon from URL "${r}".`);let s=this._sanitizer.sanitize(Ke.RESOURCE_URL,r);if(!s)throw lx(r);let a=this._inProgressUrlFetches.get(s);if(a)return a;let l=this._httpClient.get(s,{responseType:"text",withCredentials:o}).pipe(T(c=>Ti(c)),dr(()=>this._inProgressUrlFetches.delete(s)),gs());return this._inProgressUrlFetches.set(s,l),l}_addSvgIconConfig(e,r,i){return this._svgIconConfigs.set(dx(e,r),i),this}_addSvgIconSetConfig(e,r){let i=this._iconSetConfigs.get(e);return i?i.push(r):this._iconSetConfigs.set(e,[r]),this}_svgElementFromConfig(e){if(!e.svgElement){let r=this._svgElementFromString(e.svgText);this._setSvgAttributes(r,e.options),e.svgElement=r}return e.svgElement}_getIconConfigFromResolvers(e,r){for(let i=0;i<this._resolvers.length;i++){let o=this._resolvers[i](r,e);if(o)return b1(o)?new sr(o.url,null,o.options):new sr(o,null)}}static \u0275fac=function(r){return new(r||t)(M(bo,8),M(ua),M(B,8),M(At))};static \u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function cf(t){return t.cloneNode(!0)}function dx(t,n){return t+":"+n}function b1(t){return!!(t.url&&t.options)}var _1=["*"],w1=new g("MAT_ICON_DEFAULT_OPTIONS"),D1=new g("mat-icon-location",{providedIn:"root",factory:()=>{let t=u(B),n=t?t.location:null;return{getPathname:()=>n?n.pathname+n.search:""}}}),fx=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],C1=fx.map(t=>`[${t}]`).join(", "),E1=/^url\(['"]?#(.*?)['"]?\)$/,df=(()=>{class t{_elementRef=u(P);_iconRegistry=u(ux);_location=u(D1);_errorHandler=u(At);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let r=this._cleanupFontValue(e);r!==this._fontSet&&(this._fontSet=r,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let r=this._cleanupFontValue(e);r!==this._fontIcon&&(this._fontIcon=r,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=ce.EMPTY;constructor(){let e=u(new Kn("aria-hidden"),{optional:!0}),r=u(w1,{optional:!0});r&&(r.color&&(this.color=this._defaultColor=r.color),r.fontSet&&(this.fontSet=r.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let r=e.split(":");switch(r.length){case 1:return["",r[0]];case 2:return r;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let r=this._location.getPathname();r!==this._previousPath&&(this._previousPath=r,this._prependPathToReferences(r))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let r=this._location.getPathname();this._previousPath=r,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(r),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,r=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();r--;){let i=e.childNodes[r];(i.nodeType!==1||i.nodeName.toLowerCase()==="svg")&&i.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,r=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(i=>i.length>0);this._previousFontSetClass.forEach(i=>e.classList.remove(i)),r.forEach(i=>e.classList.add(i)),this._previousFontSetClass=r,this.fontIcon!==this._previousFontIconClass&&!r.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let r=this._elementsWithExternalReferences;r&&r.forEach((i,o)=>{i.forEach(s=>{o.setAttribute(s.name,`url('${e}#${s.value}')`)})})}_cacheChildrenWithExternalReferences(e){let r=e.querySelectorAll(C1),i=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<r.length;o++)fx.forEach(s=>{let a=r[o],l=a.getAttribute(s),c=l?l.match(E1):null;if(c){let d=i.get(a);d||(d=[],i.set(a,d)),d.push({name:s,value:c[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[r,i]=this._splitIconName(e);r&&(this._svgNamespace=r),i&&(this._svgName=i),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(i,r).pipe(xe(1)).subscribe(o=>this._setSvgElement(o),o=>{let s=`Error retrieving icon ${r}:${i}! ${o.message}`;this._errorHandler.handleError(new Error(s))})}}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=S({type:t,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(r,i){r&2&&(ue("data-mat-icon-type",i._usingFontIcon()?"font":"svg")("data-mat-icon-name",i._svgName||i.fontIcon)("data-mat-icon-namespace",i._svgNamespace||i.fontSet)("fontIcon",i._usingFontIcon()?i.fontIcon:null),Mt(i.color?"mat-"+i.color:""),j("mat-icon-inline",i.inline)("mat-icon-no-color",i.color!=="primary"&&i.color!=="accent"&&i.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",ie],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:_1,decls:1,vars:0,template:function(r,i){r&1&&(le(),R(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
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
`],encapsulation:2,changeDetection:0})}return t})(),uf=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=L({type:t});static \u0275inj=F({imports:[pe]})}return t})();var x1=["mat-menu-item",""],I1=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],S1=["mat-icon, [matMenuItemIcon]","*"];function M1(t,n){t&1&&(_r(),b(0,"svg",2),he(1,"polygon",3),w())}var T1=["*"];function A1(t,n){if(t&1){let e=Nt();ot(0,"div",0),gd("click",function(){Ye(e);let i=H();return Ze(i.closed.emit("click"))})("animationstart",function(i){Ye(e);let o=H();return Ze(o._onAnimationStart(i.animationName))})("animationend",function(i){Ye(e);let o=H();return Ze(o._onAnimationDone(i.animationName))})("animationcancel",function(i){Ye(e);let o=H();return Ze(o._onAnimationDone(i.animationName))}),ot(1,"div",1),R(2),pt()()}if(t&2){let e=H();Mt(e._classList),j("mat-menu-panel-animations-disabled",e._animationsDisabled)("mat-menu-panel-exit-animation",e._panelAnimationState==="void")("mat-menu-panel-animating",e._isAnimating()),Gt("id",e.panelId),ue("aria-label",e.ariaLabel||null)("aria-labelledby",e.ariaLabelledby||null)("aria-describedby",e.ariaDescribedby||null)}}var Vv=new g("MAT_MENU_PANEL"),sl=(()=>{class t{_elementRef=u(P);_document=u(B);_focusMonitor=u(Sn);_parentMenu=u(Vv,{optional:!0});_changeDetectorRef=u(Te);role="menuitem";disabled=!1;disableRipple=!1;_hovered=new D;_focused=new D;_highlighted=!1;_triggersSubmenu=!1;constructor(){u(_t).load(kr),this._parentMenu?.addItem?.(this)}focus(e,r){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,r):this._getHostElement().focus(r),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),r=e.querySelectorAll("mat-icon, .material-icons");for(let i=0;i<r.length;i++)r[i].remove();return e.textContent?.trim()||""}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=S({type:t,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(r,i){r&1&&ge("click",function(s){return i._checkDisabled(s)})("mouseenter",function(){return i._handleMouseEnter()}),r&2&&(ue("role",i.role)("tabindex",i._getTabIndex())("aria-disabled",i.disabled)("disabled",i.disabled||null),j("mat-mdc-menu-item-highlighted",i._highlighted)("mat-mdc-menu-item-submenu-trigger",i._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",ie],disableRipple:[2,"disableRipple","disableRipple",ie]},exportAs:["matMenuItem"],attrs:x1,ngContentSelectors:S1,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(r,i){r&1&&(le(I1),R(0),b(1,"span",0),R(2,1),w(),he(3,"div",1),X(4,M1,2,0,":svg:svg",2)),r&2&&(v(3),fe("matRippleDisabled",i.disableRipple||i.disabled)("matRippleTrigger",i._getHostElement()),v(),J(i._triggersSubmenu?4:-1))},dependencies:[$o],encapsulation:2,changeDetection:0})}return t})();var R1=new g("MatMenuContent");var k1=new g("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),jv="_mat-menu-enter",ff="_mat-menu-exit",is=(()=>{class t{_elementRef=u(P);_changeDetectorRef=u(Te);_injector=u(z);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=Le();_allItems;_directDescendantItems=new sn;_classList={};_panelAnimationState="void";_animationDone=new D;_isAnimating=we(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;set panelClass(e){let r=this._previousPanelClass,i=m({},this._classList);r&&r.length&&r.split(" ").forEach(o=>{i[o]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(o=>{i[o]=!0}),this._elementRef.nativeElement.className=""),this._classList=i}_previousPanelClass;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new W;close=this.closed;panelId=u(at).getId("mat-menu-panel-");constructor(){let e=u(k1);this.overlayPanelClass=e.overlayPanelClass||"",this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new Ba(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(ze(this._directDescendantItems),ve(e=>Pt(...e.map(r=>r._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let r=this._keyManager;if(this._panelAnimationState==="enter"&&r.activeItem?._hasFocus()){let i=e.toArray(),o=Math.max(0,Math.min(i.length-1,r.activeItemIndex||0));i[o]&&!i[o].disabled?r.setActiveItem(o):r.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(ze(this._directDescendantItems),ve(r=>Pt(...r.map(i=>i._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let r=e.keyCode,i=this._keyManager;switch(r){case 27:Ft(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(r===38||r===40)&&i.setFocusOrigin("keyboard"),i.onKeydown(e);return}}focusFirstItem(e="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=it(()=>{let r=this._resolvePanel();if(!r||!r.contains(document.activeElement)){let i=this._keyManager;i.setFocusOrigin(e).setFirstItemActive(),!i.activeItem&&r&&r.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,r=this.yPosition){this._classList=U(m({},this._classList),{"mat-menu-before":e==="before","mat-menu-after":e==="after","mat-menu-above":r==="above","mat-menu-below":r==="below"}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let r=e===ff;(r||e===jv)&&(r&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(r?"void":"enter"),this._isAnimating.set(!1))}_onAnimationStart(e){(e===jv||e===ff)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?"enter":"void",e){if(this._keyManager.activeItemIndex===0){let r=this._resolvePanel();r&&(r.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(ff),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?jv:ff)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(ze(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(r=>r._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),e}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=S({type:t,selectors:[["mat-menu"]],contentQueries:function(r,i,o){if(r&1&&yt(o,R1,5)(o,sl,5)(o,sl,4),r&2){let s;Z(s=K())&&(i.lazyContent=s.first),Z(s=K())&&(i._allItems=s),Z(s=K())&&(i.items=s)}},viewQuery:function(r,i){if(r&1&&Qe(dt,5),r&2){let o;Z(o=K())&&(i.templateRef=o.first)}},hostVars:3,hostBindings:function(r,i){r&2&&ue("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",ie],hasBackdrop:[2,"hasBackdrop","hasBackdrop",e=>e==null?null:ie(e)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[Oe([{provide:Vv,useExisting:t}])],ngContentSelectors:T1,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(r,i){r&1&&(le(),cd(0,A1,3,12,"ng-template"))},styles:[`mat-menu {
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
`],encapsulation:2,changeDetection:0})}return t})(),N1=new g("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let t=u(z);return()=>Fi(t)}});var rs=new WeakMap,O1=(()=>{class t{_canHaveBackdrop;_element=u(P);_viewContainerRef=u(ft);_menuItemInstance=u(sl,{optional:!0,self:!0});_dir=u(wt,{optional:!0});_focusMonitor=u(Sn);_ngZone=u(O);_injector=u(z);_scrollStrategy=u(N1);_changeDetectorRef=u(Te);_animationsDisabled=Le();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=ce.EMPTY;_menuCloseSubscription=ce.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e&&(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(r=>{this._destroyMenu(r),(r==="click"||r==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(r)})),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let r=u(Vv,{optional:!0});this._parentMaterialMenu=r instanceof is?r:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&rs.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let r=this._menu;if(this._menuOpen||!r)return;this._pendingRemoval?.unsubscribe();let i=rs.get(r);rs.set(r,this),i&&i!==this&&i._closeMenu();let o=this._createOverlay(r),s=o.getConfig(),a=s.positionStrategy;this._setPosition(r,a),this._canHaveBackdrop?s.hasBackdrop=r.hasBackdrop==null?!this._triggersSubmenu():r.hasBackdrop:s.hasBackdrop=r.hasBackdrop??!1,o.hasAttached()||(o.attach(this._getPortal(r)),r.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),r.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,r.direction=this.dir,e&&r.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0),r instanceof is&&(r._setIsOpen(!0),r._directDescendantItems.changes.pipe(de(r.close)).subscribe(()=>{a.withLockedPosition(!1).reapplyLastPosition(),a.withLockedPosition(!0)}))}focus(e,r){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,r):this._element.nativeElement.focus(r)}_destroyMenu(e){let r=this._overlayRef,i=this._menu;!r||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),i instanceof is&&this._ownsMenu(i)?(this._pendingRemoval=i._animationDone.pipe(xe(1)).subscribe(()=>{r.detach(),rs.has(i)||i.lazyContent?.detach()}),i._setIsOpen(!1)):(r.detach(),i?.lazyContent?.detach()),i&&this._ownsMenu(i)&&rs.delete(i),this.restoreFocus&&(e==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let r=this._getOverlayConfig(e);this._subscribeToPositions(e,r.positionStrategy),this._overlayRef=Pi(this._injector,r),this._overlayRef.keydownEvents().subscribe(i=>{this._menu instanceof is&&this._menu._handleKeydown(i)})}return this._overlayRef}_getOverlayConfig(e){return new or({positionStrategy:za(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:e.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,r){e.setPositionClasses&&r.positionChanges.subscribe(i=>{this._ngZone.run(()=>{let o=i.connectionPair.overlayX==="start"?"after":"before",s=i.connectionPair.overlayY==="top"?"below":"above";e.setPositionClasses(o,s)})})}_setPosition(e,r){let[i,o]=e.xPosition==="before"?["end","start"]:["start","end"],[s,a]=e.yPosition==="above"?["bottom","top"]:["top","bottom"],[l,c]=[s,a],[d,f]=[i,o],h=0;if(this._triggersSubmenu()){if(f=i=e.xPosition==="before"?"start":"end",o=d=i==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let p=this._parentMaterialMenu.items.first;this._parentInnerPadding=p?p._getHostElement().offsetTop:0}h=s==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(l=s==="top"?"bottom":"top",c=a==="top"?"bottom":"top");r.withPositions([{originX:i,originY:l,overlayX:d,overlayY:s,offsetY:h},{originX:o,originY:l,overlayX:f,overlayY:s,offsetY:h},{originX:i,originY:c,overlayX:d,overlayY:a,offsetY:-h},{originX:o,originY:c,overlayX:f,overlayY:a,offsetY:-h}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),r=this._overlayRef.detachments(),i=this._parentMaterialMenu?this._parentMaterialMenu.closed:N(),o=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(ae(s=>this._menuOpen&&s!==this._menuItemInstance)):N();return Pt(e,i,o,r)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new ir(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return rs.get(e)===this}_triggerIsAriaDisabled(){return ie(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(r){dm()};static \u0275dir=q({type:t})}return t})(),px=(()=>{class t extends O1{_cleanupTouchstart;_hoverSubscription=ce.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new W;onMenuOpen=this.menuOpened;menuClosed=new W;onMenuClose=this.menuClosed;constructor(){super(!0);let e=u(Ue);this._cleanupTouchstart=e.listen(this._element.nativeElement,"touchstart",r=>{Mi(r)||(this._openedBy="touch")},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){Si(e)||(this._openedBy=e.button===0?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let r=e.keyCode;(r===13||r===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(r===39&&this.dir==="ltr"||r===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(!1))}))}static \u0275fac=function(r){return new(r||t)};static \u0275dir=q({type:t,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(r,i){r&1&&ge("click",function(s){return i._handleClick(s)})("mousedown",function(s){return i._handleMousedown(s)})("keydown",function(s){return i._handleKeydown(s)}),r&2&&ue("aria-haspopup",i.menu?"menu":null)("aria-expanded",i.menuOpen)("aria-controls",i.menuOpen?i.menu==null?null:i.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[Pe]})}return t})();var mx=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=L({type:t});static \u0275inj=F({imports:[zo,Uo,pe,rr]})}return t})();var P1=t=>({active:t}),gx=t=>({color:t});function L1(t,n){if(t&1){let e=Nt();b(0,"button",3),ge("click",function(){let i=Ye(e).$implicit,o=H();return Ze(o.changeLanguage(i))}),b(1,"mat-icon",4),x(2," language "),w(),b(3,"span",4),x(4),Yn(5,"transloco"),w()()}if(t&2){let e=n.$implicit,r=H();fe("ngClass",yi(6,P1,r.activeLang===e)),v(),fe("ngStyle",yi(8,gx,r.activeLang===e?"rgb(255 143 0)":"")),v(2),fe("ngStyle",yi(10,gx,r.activeLang===e?"rgb(255 143 0)":"")),v(),se(" ",Zn(5,4,e+"-language-label")," ")}}var hf=class t{activeLang;availableLangs;translocoService=u(Zo);ngOnInit(){let n=`${av()}`;this.availableLangs=this.translocoService.getAvailableLangs(),this.translocoService.isLang(n)?(this.activeLang=av(),this.translocoService.setActiveLang(this.activeLang)):this.activeLang=this.translocoService.getDefaultLang()}changeLanguage(n){this.translocoService.setActiveLang(n),this.activeLang=this.translocoService.getActiveLang()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=S({type:t,selectors:[["app-language-selector"]],decls:10,vars:4,consts:[["menu","matMenu"],["mat-icon-button","","aria-label","Language Selection",1,"example-icon","favorite-icon",3,"matMenuTriggerFor"],["mat-menu-item","",3,"ngClass"],["mat-menu-item","",3,"click","ngClass"],[3,"ngStyle"]],template:function(e,r){if(e&1&&(b(0,"button",1)(1,"mat-icon"),x(2,"translate"),w()(),b(3,"span"),x(4),Yn(5,"transloco"),w(),b(6,"mat-menu",null,0),Gn(8,L1,6,12,"button",2,zn),w()),e&2){let i=Wt(7);fe("matMenuTriggerFor",i),v(4),Se(Zn(5,2,r.activeLang+"-language-label")),v(4),Wn(r.availableLangs)}},dependencies:[Sr,Om,Fm,Ya,Kg,uf,df,mx,is,sl,px,Tn,Ko],encapsulation:2})};function j1(t,n){t&1&&(b(0,"span"),x(1),Yn(2,"transloco"),w()),t&2&&(v(),Se(Zn(2,1,"app-title")))}function V1(t,n){t&1&&(b(0,"span",4),x(1),Yn(2,"transloco"),w()),t&2&&(v(),Se(Zn(2,1,"app-title-short")))}var pf=class t{sidebarHandle;isXSmall;responsive=u(Ri);ngOnInit(){this.responsive.observe(Fo.XSmall).subscribe(n=>{n.matches?this.isXSmall=!0:this.isXSmall=!1})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=S({type:t,selectors:[["app-page-header"]],inputs:{sidebarHandle:"sidebarHandle"},decls:10,vars:4,consts:[[1,"page-header"],[1,"main-toolbar","toolbar"],["type","button","mat-icon-button","",3,"click","hidden"],[1,"app-name","text-xl"],[1,"text-xl"],[1,"spacer"]],template:function(e,r){e&1&&(b(0,"div",0)(1,"mat-toolbar",1)(2,"button",2),ge("click",function(){return r.sidebarHandle.toggle()}),b(3,"mat-icon"),x(4,"menu"),w()(),b(5,"span",3),X(6,j1,3,3,"span")(7,V1,3,3,"span",4),w(),he(8,"span",5)(9,"app-language-selector"),w()()),e&2&&(v(),j("is-mobile",r.isXSmall),v(),fe("hidden",!r.isXSmall),v(4),J(r.isXSmall?7:6))},dependencies:[Sr,lf,af,uf,df,Tn,hf,Ko],styles:[".is-mobile[_ngcontent-%COMP%]{position:fixed;z-index:2}.app-name[_ngcontent-%COMP%]{margin:0 0 0 8px}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}.mat-toolbar[_ngcontent-%COMP%]{color:var(--mat-sys-primary);background:var(--bg-color)}"]})};var mf=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=S({type:t,selectors:[["app-page-footer"]],decls:7,vars:3,consts:[[1,"page-footer","text-xs","flex","items-center","flex-row","flex-wrap"],["color","primary",1,"page-footer"],[1,"flex","flex-1","justify-end","text-xl"],["href","https://boardgamegeek.com/user/Vortilion","target","_blank",1,"text-blue-700"]],template:function(e,r){e&1&&(b(0,"div",0)(1,"mat-toolbar",1)(2,"div",2),x(3),Yn(4,"transloco"),b(5,"a",3),x(6,"Vortilion"),w()()()()),e&2&&(v(3),se(" ",Zn(4,1,"creator-prefix"),"\xA0"))},dependencies:[lf,af,Tn,Ko],styles:[".page-footer[_ngcontent-%COMP%]{color:var(--mat-sys-primary);background:var(--bg-color)}"]})};var B1=t=>({"w-full":t});function H1(t,n){if(t&1&&(b(0,"mat-option",10),x(1),b(2,"span"),x(3),w()()),t&2){let e=n.$implicit,r=H().$implicit;fe("value",e.value),v(),se(" ",e.label," "),v(2),Se(r("players-label"))}}function U1(t,n){if(t&1&&(b(0,"li",21)(1,"span"),x(2),w()()),t&2){let e=n.$implicit;v(2),Se(e.title)}}function $1(t,n){if(t&1&&(b(0,"mat-grid-tile")(1,"mat-grid-tile-header")(2,"h3")(3,"span"),x(4),w(),x(5,": "),w()(),b(6,"ul",20),Gn(7,U1,3,1,"li",21,zn),w()()),t&2){let e=H().$implicit,r=H();v(4),Se(e("neutral-buildings-label")),v(3),Wn(r.randomNeutralBuildings)}}function z1(t,n){if(t&1&&(b(0,"div"),he(1,"img",22),w()),t&2){let e=n.$implicit;v(),fe("src",e.sides[0].image,qp)}}function G1(t,n){if(t&1&&(b(0,"mat-grid-tile")(1,"mat-grid-tile-header")(2,"h3")(3,"span"),x(4),w(),x(5,": "),w()(),b(6,"div",20),Gn(7,z1,2,1,"div",null,zn),w()()),t&2){let e=H().$implicit,r=H();v(4),Se(e("station-masters-label")),v(3),Wn(r.randomStationMasters)}}function W1(t,n){if(t&1&&(b(0,"span",17)(1,"span",23),x(2),w()()),t&2){let e=n.$implicit;v(2),ea("",e.title,"",e.sides[0].title," ")}}function q1(t,n){if(t&1&&(b(0,"span",17)(1,"span",23),x(2),w()()),t&2){let e=n.$implicit;v(2),ea("",e.title,": ",e.sides[0].title," ")}}function Y1(t,n){if(t&1&&(b(0,"li"),x(1),w()),t&2){let e=H().$implicit;v(),se(" ",e("further-steps-step41")," ")}}function Z1(t,n){if(t&1&&(b(0,"li"),x(1),w()),t&2){let e=H().$implicit;v(),se(" ",e("further-steps-step42")," ")}}function K1(t,n){if(t&1&&(b(0,"li"),x(1),w()),t&2){let e=H().$implicit;v(),se(" ",e("further-steps-step43")," ")}}function Q1(t,n){if(t&1&&(b(0,"li"),x(1),w()),t&2){let e=H().$implicit;v(),se(" ",e("further-steps-step71")," ")}}function X1(t,n){if(t&1&&(b(0,"li"),x(1),w()),t&2){let e=H().$implicit;v(),se(" ",e("further-steps-step72")," ")}}function J1(t,n){if(t&1&&(b(0,"li"),x(1),w()),t&2){let e=H().$implicit;v(),se(" ",e("further-steps-step73")," ")}}function eL(t,n){if(t&1&&(b(0,"li"),x(1),w()),t&2){let e=H().$implicit;v(),se(" ",e("further-steps-step83")," ")}}function tL(t,n){if(t&1&&(b(0,"li"),x(1),w()),t&2){let e=H().$implicit;v(),se(" ",e("further-steps-step84")," ")}}function nL(t,n){if(t&1){let e=Nt();pd(0),b(1,"div",2),he(2,"app-page-header",3),b(3,"mat-sidenav-container",4)(4,"mat-sidenav",5,0)(6,"div",6)(7,"h2"),x(8),w(),he(9,"mat-divider",7),b(10,"h3"),x(11),w(),b(12,"mat-form-field",8)(13,"mat-label"),x(14),w(),b(15,"mat-select",9),ge("selectionChange",function(i){Ye(e);let o=H();return Ze(o.onPlayerCountChange(i))}),Gn(16,H1,4,3,"mat-option",10,zn),w()()()(),b(18,"mat-sidenav-content")(19,"div",11)(20,"div",12)(21,"div",13)(22,"button",14),ge("click",function(){Ye(e);let i=H();return Ze(i.randomizeSetup())}),b(23,"span"),x(24),w()()(),b(25,"mat-grid-list",15),X(26,$1,9,1,"mat-grid-tile"),X(27,G1,9,1,"mat-grid-tile"),b(28,"mat-grid-tile")(29,"mat-grid-tile-header")(30,"h3")(31,"span"),x(32),w(),x(33,": "),w()(),b(34,"div",16),Gn(35,W1,3,2,"span",17,zn),w()(),b(37,"mat-grid-tile")(38,"mat-grid-tile-header")(39,"h3")(40,"span"),x(41),w(),x(42,": "),w()(),b(43,"div",16),Gn(44,q1,3,2,"span",17,zn),w()()(),b(46,"mat-card")(47,"mat-card-header")(48,"h3")(49,"span"),x(50),w()()(),b(51,"mat-card-content")(52,"ol",18)(53,"li"),x(54),b(55,"ul",19)(56,"li"),x(57),w(),b(58,"li"),x(59),w(),b(60,"li"),x(61),w()()(),b(62,"li"),x(63),b(64,"ul",19)(65,"li"),x(66),w(),b(67,"li"),x(68),w(),b(69,"li"),x(70),w()()(),b(71,"li"),x(72),b(73,"ul",19)(74,"li"),x(75),w(),b(76,"li"),x(77),w(),b(78,"li"),x(79),w()()(),b(80,"li"),x(81),b(82,"ul",19),X(83,Y1,2,1,"li"),X(84,Z1,2,1,"li"),X(85,K1,2,1,"li"),b(86,"li"),x(87),w()()(),b(88,"li"),x(89),w(),b(90,"li")(91,"p"),x(92),w(),b(93,"p"),x(94),w(),b(95,"p"),x(96),w()(),b(97,"li"),x(98),b(99,"ul",19),X(100,Q1,2,1,"li"),X(101,X1,2,1,"li"),X(102,J1,2,1,"li"),w()(),b(103,"li"),x(104),b(105,"ul",19)(106,"li"),x(107),w(),b(108,"li"),x(109),w(),X(110,eL,2,1,"li"),X(111,tL,2,1,"li"),w()()()()()()()()(),he(112,"app-page-footer"),w(),md()}if(t&2){let e=n.$implicit,r=Wt(5),i=H();v(),j("is-mobile",i.isXSmall),v(),fe("sidebarHandle",r),v(),qn("padding-top",i.isXSmall?56:0,"px"),v(),fe("mode",i.isXSmall?"over":"side")("fixedInViewport",i.isXSmall)("opened",i.isXSmall?"false":"opened"),v(4),se("",e("options-label"),":"),v(3),se("",e("player-count-label"),":"),v(3),Se(e("player-count-select-label")),v(),fe("value",i.playerCount),v(),Wn(i.playerCountList),v(6),Mt(yi(51,B1,i.isXSmall)),v(2),Se(e("btn-setup-label")),v(),fe("cols",i.isMax1280?1:2),v(),J(i.randomNeutralBuildings.length>0?26:-1),v(),J(i.randomStationMasters&&i.randomStationMasters.length>0?27:-1),v(5),Se(e("player-buildings-label")),v(3),Wn(i.randomPlayerBuildings),v(6),Se(e("cities-label")),v(3),Wn(i.randomCities),v(6),Se(e("further-setup-steps-label")),v(4),se(" ",e("further-steps-step1")," "),v(3),se(" ",e("further-steps-step1a")," "),v(2),se(" ",e("further-steps-step1b")," "),v(2),se(" ",e("further-steps-step-1c")," "),v(2),se(" ",e("further-steps-step2")," "),v(3),se(" ",e("further-steps-step21")," "),v(2),se(" ",e("further-steps-step22")," "),v(2),se(" ",e("further-steps-step23")," "),v(2),se(" ",e("further-steps-step3")," "),v(3),se(" ",e("further-steps-step31")," "),v(2),se(" ",e("further-steps-step32")," "),v(2),se(" ",e("further-steps-step33")," "),v(2),se(" ",e("further-steps-step4")," "),v(2),J(i.playerCount===2?83:-1),v(),J(i.playerCount===3?84:-1),v(),J(i.playerCount===4?85:-1),v(2),se(" ",e("further-steps-step4b")," "),v(2),Se(e("further-steps-step5")),v(3),Se(e("further-steps-step6")),v(2),Se(e("further-steps-step6a")),v(2),Se(e("further-steps-step6b")),v(2),se(" ",e("further-steps-step7")," "),v(2),J(i.playerCount===2?100:-1),v(),J(i.playerCount===3?101:-1),v(),J(i.playerCount===4?102:-1),v(2),se(" ",e("further-steps-step8")," "),v(3),Se(e("further-steps-step81")),v(2),Se(e("further-steps-step82")),v(),J(i.playerCount>=3?110:-1),v(),J(i.playerCount>3?111:-1)}}var gf=class t{applicationConfigService=u(of);responsive=u(Ri);storageService=u(sf);randomNeutralBuildings;randomPlayerBuildings;randomStationMasters;randomCities;playerCount;playerCountList;isXSmall;isMax1280;ngOnInit(){this.playerCount=2,this.playerCountList=[{label:"2",value:2},{label:"3",value:3},{label:"4",value:4}],this.responsive.observe(Fo.XSmall).subscribe(e=>{e.matches?this.isXSmall=!0:this.isXSmall=!1}),this.responsive.observe("(max-width: 1280px)").subscribe(e=>{e.matches?this.isMax1280=!0:this.isMax1280=!1});let n=this.storageService.getNumber("rar-playerCount");n!==null?this.emitPlayerCount(n):this.storageService.setNumber("rar-playerCount",2),this.applicationConfigService.playerCount.subscribe(e=>{this.playerCount=e}),this.randomizeSetup()}emitPlayerCount(n){this.applicationConfigService.playerCount.emit(n)}onPlayerCountChange(n){let e=Number(n.value);this.storageService.setNumber("rar-playerCount",e),this.emitPlayerCount(e)}randomizeSetup(){this.randomNeutralBuildings=this.applicationConfigService.getRandomNeutralBuildingOrder(),this.randomStationMasters=this.applicationConfigService.getRandomStationMasters(),this.randomPlayerBuildings=this.applicationConfigService.getRandomPlayerBuildings(),this.randomCities=this.applicationConfigService.getRandomCities()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=S({type:t,selectors:[["app-home"]],decls:1,vars:0,consts:[["sidenav",""],[4,"transloco"],[1,"home-component","flex","flex-col"],[3,"sidebarHandle"],[1,"sidenav-container","flex-1"],["fixedTopGap","56",1,"sidenav",3,"mode","fixedInViewport","opened"],[1,"sidenav__inner","p-4"],[1,"divider","mb-4"],["appearance","fill"],[3,"selectionChange","value"],[3,"value"],[1,"sidenav-content","flex","flex-col","min-h-full"],[1,"flex-1","px-2","xSmall:px-10","py-5"],[1,"mb-4"],["mat-flat-button","","color","primary",3,"click"],["rowHeight","180px","gutterSize","5px",3,"cols"],[1,"flex","flex-wrap"],[1,"px-2","text-2xl","xSmall:text-xl","flex-1"],[1,"pl-4","list-decimal"],[1,"list-disc","pl-8","text-gray-400"],[1,"flex"],[1,"px-2","text-2xl","xSmall:text-xl"],["alt","Station Master","width","100",1,"px-1","xSmall:px-2","md:px-4",3,"src"],[1,"whitespace-nowrap"]],template:function(e,r){e&1&&zt(0,nL,113,53,"ng-container",1)},dependencies:[Sr,wE,Ya,Mu,xE,DE,CE,EE,SE,IE,Qu,Ku,nl,YE,qE,Mv,zE,GE,tx,ex,ns,rx,Lv,nx,tf,ox,Tn,K0,pf,mf],styles:[`.is-mobile[_ngcontent-%COMP%]   .sidenav-container[_ngcontent-%COMP%]{flex-shrink:0;flex-grow:1;flex-basis:auto}.divider[_ngcontent-%COMP%]{margin-bottom:16px!important}
`]})};var vx=[{path:"home",component:gf},{path:"**",redirectTo:"home",pathMatch:"full"}];var yx={providers:[Sg(vx),Jm(eg()),Q0({config:{availableLangs:["de","en","pl"],defaultLang:"en",fallbackLang:"en",missingHandler:{useFallbackTranslation:!0},reRenderOnLangChange:!0,prodMode:!Am()},loader:Ou}),cc(PC.register("ngsw-worker.js",{enabled:!Am(),registrationStrategy:"registerWhenStable:30000"}))]};Gm(Nu,yx).catch(t=>console.error(t));
