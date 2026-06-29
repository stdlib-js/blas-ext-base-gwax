"use strict";var x=function(u,e){return function(){try{return e||u((e={exports:{}}).exports,e),e.exports}catch(a){throw (e=0, a)}};};var j=x(function(K,P){
function B(u,e,a,i,t,r,s,y){var o,v,f,q,n,c,b;for(o=a.data,v=r.data,f=a.accessors[0],q=r.accessors[1],n=t,c=y,b=0;b<u;b++)q(v,c,e*f(o,n)),n+=i,c+=s;return r}P.exports=B
});var m=x(function(L,M){
var k=require('@stdlib/array-base-arraylike2object/dist'),C=require('@stdlib/blas-base-gcopy/dist').ndarray,D=j(),g=5;function E(u,e,a,i,t,r,s,y){var o,v,f,q,n,c;if(u<=0)return r;if(e===1)return C(u,a,i,t,r,s,y);if(f=k(a),q=k(r),f.accessorProtocol||q.accessorProtocol)return D(u,e,f,i,t,q,s,y),r;if(o=t,v=y,i===1&&s===1){if(n=u%g,n>0)for(c=0;c<n;c++)r[v]=e*a[o],o+=i,v+=s;if(u<g)return r;for(c=n;c<u;c+=g)r[v]=e*a[o],r[v+1]=e*a[o+1],r[v+2]=e*a[o+2],r[v+3]=e*a[o+3],r[v+4]=e*a[o+4],o+=g,v+=g;return r}for(c=0;c<u;c++)r[v]=e*a[o],o+=i,v+=s;return r}M.exports=E
});var z=x(function(Q,R){
var O=require('@stdlib/strided-base-stride2offset/dist'),F=m();function G(u,e,a,i,t,r){return F(u,e,a,i,O(u,i),t,r,O(u,r))}R.exports=G
});var H=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),A=z(),I=m();H(A,"ndarray",I);module.exports=A;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
