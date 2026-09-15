const test=require('node:test'),assert=require('node:assert/strict'),vm=require('node:vm'),fs=require('node:fs'),path=require('node:path');
const {destinations}=require('../tools/build-public-redirects.cjs');
const root=path.resolve(__dirname,'..');
function follow(entry,query='',hash=''){
 const html=fs.readFileSync(path.join(root,entry.file),'utf8');let url;
 vm.runInNewContext(html.match(/<script>([\s\S]*?)<\/script>/)[1],{URL,URLSearchParams,location:{search:query,hash,replace:value=>{url=new URL(value);}}});
 return {url,html};
}
test('every historical entry goes directly to a canonical public page in its own language',()=>{
 assert.equal(destinations.length,29);
 for(const entry of destinations){const {url,html}=follow(entry);
  assert.equal(url.origin,'https://openproof.net');assert.equal(url.pathname,entry.targets[entry.language]);
  assert.ok(html.includes('<html lang="'+entry.language+'"'));assert.ok(html.includes('rel="canonical" href="'+url.href+'"'));
  assert.ok(html.includes('name="robots" content="noindex,follow"'));
  assert.ok(html.includes('<noscript><meta http-equiv="refresh"'));assert.ok(html.includes('<a href="'+url.href+'"'));
  assert.doesNotMatch(url.pathname,/gersende-de-parcey|contexts|overview|how-it-works|cockpit|simulator|demo-|\/legal\//);
 }
});
test('French intent and chosen annual offer survive the historical entry without transferring personal fields',()=>{
 for(const entry of destinations){const {url}=follow(entry,'?lang=fr&intent=portfolio&offer=professional-annual&catalog=2026-09-11-v1&utm_source=archive&email=private@example.invalid&token=secret','#obsolete');
  assert.equal(url.pathname,entry.targets.fr);assert.equal(url.searchParams.get('intent'),'portfolio');assert.equal(url.searchParams.get('offer'),'professional-annual');
  assert.equal(url.searchParams.get('catalog'),'2026-09-11-v1');assert.equal(url.searchParams.get('utm_source'),'archive');
  assert.equal(url.searchParams.get('email'),null);assert.equal(url.searchParams.get('token'),null);assert.equal(url.hash,'');
 }
});
test('ambiguous selections require confirmation and only actual successor anchors survive',()=>{
 const entry=destinations.find(x=>x.file==='docs/walkthrough.html');
 const bad=follow(entry,'?offer=essential&offer=plus&selection_invalid=0&catalog='+('x'.repeat(161))).url;
 assert.equal(bad.searchParams.get('offer'),null);assert.equal(bad.searchParams.get('catalog'),null);assert.equal(bad.searchParams.get('selection_invalid'),'1');
 assert.ok(entry.anchors.en.length>0);const hash='#'+entry.anchors.en[0];assert.equal(follow(entry,'',hash).url.hash,hash);
 assert.equal(follow(entry,'?lang=fr&lang=en').url.pathname,entry.targets.en);
});
