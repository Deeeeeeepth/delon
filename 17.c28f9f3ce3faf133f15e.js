(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{MKz1:function(t,n,e){"use strict";e.r(n),e.d(n,"DevLazyModule",function(){return d});var o=e("tyNb"),c=e("PCNd"),s=e("sWYD"),i=e("fXoL"),a=e("ByMC"),p=e("ofXK");let r=(()=>{class t{constructor(){this.now=Object(s.a)(new Date,"yyyy-MM-dd HH:mm:ss")}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=i.Mb({type:t,selectors:[["dev-lazy-layout"]],decls:6,vars:3,consts:[[1,"p-lg"]],template:function(t,n){1&t&&(i.Tb(0,"page-header"),i.Yb(1,"h2"),i.Qc(2),i.kc(3,"json"),i.Xb(),i.Yb(4,"div",0),i.Tb(5,"router-outlet"),i.Xb()),2&t&&(i.Eb(2),i.Sc("Lazy Module, ",i.lc(3,1,n.now),""))},directives:[a.a,o.o],pipes:[p.i],encapsulation:2}),t})(),l=(()=>{class t{constructor(t){this.route=t,this.first=Object(s.a)(new Date,"yyyy-MM-dd HH:mm:ss"),this.now=Object(s.a)(new Date,"yyyy-MM-dd HH:mm:ss"),this.id=0}ngOnInit(){console.log("ngoninit"),this.route.params.subscribe(t=>this.id=+t.id)}_onReuseInit(){this.now=Object(s.a)(new Date,"yyyy-MM-dd HH:mm:ss"),console.log("by _onReuseInit",this.route.snapshot.url.toString())}}return t.\u0275fac=function(n){return new(n||t)(i.Sb(o.a))},t.\u0275cmp=i.Mb({type:t,selectors:[["dev-page"]],decls:11,vars:12,template:function(t,n){1&t&&(i.Yb(0,"h3"),i.Qc(1,"Lazy child component"),i.Xb(),i.Yb(2,"p"),i.Qc(3),i.kc(4,"json"),i.kc(5,"json"),i.Xb(),i.Yb(6,"p"),i.Qc(7),i.kc(8,"json"),i.Xb(),i.Qc(9),i.kc(10,"json")),2&t&&(i.Eb(3),i.Tc("first: ",i.lc(4,4,n.first),"\uff0cnow: ",i.lc(5,6,n.now),""),i.Eb(4),i.Sc("id: ",i.lc(8,8,n.id),""),i.Eb(2),i.Sc(" page: ",i.lc(10,10,n.route.url)," "))},pipes:[p.i],encapsulation:2}),t})();const u=[{path:"",component:r,children:[{path:"",pathMatch:"full",redirectTo:"p1"},{path:"p1",component:l},{path:"p2",component:l},{path:"p3",component:l},{path:"p4",component:l},{path:"p5",component:l},{path:":id/view",component:l}]}];let d=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=i.Qb({type:t}),t.\u0275inj=i.Pb({imports:[[c.a,o.n.forChild(u)]]}),t})()}}]);