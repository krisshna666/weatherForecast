"use strict";(self.webpackChunkng_app=self.webpackChunkng_app||[]).push([[592],{1460:(v,p,c)=>{c.d(p,{H:()=>h});var d=c(7574),o=c(6465);const t=new(c(6102).v)(o.o);var s=c(9796);function i(e){return!(0,s.k)(e)&&e-parseFloat(e)+1>=0}var l=c(4869);function h(e=0,r,f){let b=-1;return i(r)?b=Number(r)<1?1:Number(r):(0,l.K)(r)&&(f=r),(0,l.K)(f)||(f=t),new d.y(y=>{const g=i(e)?e:+e-f.now();return f.schedule(n,g,{index:0,period:b,subscriber:y})})}function n(e){const{index:r,period:f,subscriber:b}=e;if(b.next(r),!b.closed){if(-1===f)return b.complete();e.index=r+1,this.schedule(e,f)}}},6465:(v,p,c)=>{c.d(p,{o:()=>a});var d=c(5319);class o extends d.w{constructor(t,s){super()}schedule(t,s=0){return this}}class a extends o{constructor(t,s){super(t,s),this.scheduler=t,this.work=s,this.pending=!1}schedule(t,s=0){if(this.closed)return this;this.state=t;const i=this.id,l=this.scheduler;return null!=i&&(this.id=this.recycleAsyncId(l,i,s)),this.pending=!0,this.delay=s,this.id=this.id||this.requestAsyncId(l,this.id,s),this}requestAsyncId(t,s,i=0){return setInterval(t.flush.bind(t,this),i)}recycleAsyncId(t,s,i=0){if(null!==i&&this.delay===i&&!1===this.pending)return s;clearInterval(s)}execute(t,s){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const i=this._execute(t,s);if(i)return i;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(t,s){let l,i=!1;try{this.work(t)}catch(h){i=!0,l=!!h&&h||new Error(h)}if(i)return this.unsubscribe(),l}_unsubscribe(){const t=this.id,s=this.scheduler,i=s.actions,l=i.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==l&&i.splice(l,1),null!=t&&(this.id=this.recycleAsyncId(s,t,null)),this.delay=null}}},6102:(v,p,c)=>{c.d(p,{v:()=>o});let d=(()=>{class a{constructor(t,s=a.now){this.SchedulerAction=t,this.now=s}schedule(t,s=0,i){return new this.SchedulerAction(this,t).schedule(i,s)}}return a.now=()=>Date.now(),a})();class o extends d{constructor(u,t=d.now){super(u,()=>o.delegate&&o.delegate!==this?o.delegate.now():t()),this.actions=[],this.active=!1,this.scheduled=void 0}schedule(u,t=0,s){return o.delegate&&o.delegate!==this?o.delegate.schedule(u,t,s):super.schedule(u,t,s)}flush(u){const{actions:t}=this;if(this.active)return void t.push(u);let s;this.active=!0;do{if(s=u.execute(u.state,u.delay))break}while(u=t.shift());if(this.active=!1,s){for(;u=t.shift();)u.unsubscribe();throw s}}}},2729:(v,p,c)=>{c.d(p,{g:()=>l});var d=c(1460),o=c(5345);class u{constructor(n){this.durationSelector=n}call(n,e){return e.subscribe(new t(n,this.durationSelector))}}class t extends o.Ds{constructor(n,e){super(n),this.durationSelector=e,this.hasValue=!1}_next(n){try{const e=this.durationSelector.call(this,n);e&&this._tryNext(n,e)}catch(e){this.destination.error(e)}}_complete(){this.emitValue(),this.destination.complete()}_tryNext(n,e){let r=this.durationSubscription;this.value=n,this.hasValue=!0,r&&(r.unsubscribe(),this.remove(r)),r=(0,o.ft)(e,new o.IY(this)),r&&!r.closed&&this.add(this.durationSubscription=r)}notifyNext(){this.emitValue()}notifyComplete(){this.emitValue()}emitValue(){if(this.hasValue){const n=this.value,e=this.durationSubscription;e&&(this.durationSubscription=void 0,e.unsubscribe(),this.remove(e)),this.value=void 0,this.hasValue=!1,super._next(n)}}}var s=c(3018),i=c(1841);let l=(()=>{class h{constructor(e){this.http=e}getCoords(e){return this.http.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${e}.json?proximity=ip&types=country&access_token=pk.eyJ1IjoibXVrdWwwNTk2IiwiYSI6ImNqdzF4empkczBvczkzenBzOWxpZTJrdzAifQ.skvI3yfkPhyRI9upXgU5tA`).pipe(function(h){return n=>n.lift(new u(h))}(()=>(0,d.H)(1e4)))}getCountriesAndStates(){return this.http.get("../../assets/countriesList.json")}getWeatherDetails(e){return this.http.get(`http://api.weatherapi.com/v1/current.json?key=58e9336973e94619bc1100938220912&q=${e}&aqi=no`)}getDailyWeatherForecast(e,r){return this.http.get(`https://api.weatherapi.com/v1/forecast.json?key=58e9336973e94619bc1100938220912&q=${e}`,{params:r})}}return h.\u0275fac=function(e){return new(e||h)(s.LFG(i.eN))},h.\u0275prov=s.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),h})()}}]);