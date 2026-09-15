'use strict';
const fs=require('node:fs');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const destinations=require('../docs/public-destinations.json');
const escaped=value=>value.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;');
function render(entry){
 const fr=entry.language==='fr',target='https://openproof.net'+entry.targets[entry.language];
 const script=`const destinations=${JSON.stringify(entry.targets)},anchors=${JSON.stringify(entry.anchors)};
const source=new URLSearchParams(location.search);
const languages=source.getAll('lang');
const language=languages.length===1&&['en','fr'].includes(languages[0])?languages[0]:${JSON.stringify(entry.language)};
const target=new URL(destinations[language],'https://openproof.net');
let invalid=false;
for(const key of ['interest','intent','offer','catalog','utm_source','utm_medium','utm_campaign','utm_content','utm_term']){
 const values=source.getAll(key);
 if(values.length===1&&values[0].length<=160&&!/[\\x00-\\x1f\\x7f]/.test(values[0]))target.searchParams.set(key,values[0]);
 else if(values.length&&['intent','offer','catalog'].includes(key))invalid=true;
}
if(invalid||source.getAll('selection_invalid').includes('1'))target.searchParams.set('selection_invalid','1');
if(anchors[language].includes(location.hash.slice(1)))target.hash=location.hash;
location.replace(target.href);`;
 return `<!doctype html><html lang="${entry.language}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex,follow"><title>${fr?'Documentation OpenProof — nouvelle adresse':'OpenProof documentation — new address'}</title><link rel="canonical" href="${target}"><noscript><meta http-equiv="refresh" content="0;url=${target}"></noscript><script>${script}</script><style>body{margin:0;background:#071015;color:#f0ede5;font:18px/1.7 Arial,sans-serif}main{max-width:680px;margin:15vh auto;padding:30px;border-top:1px solid #c3a06c}a{color:#d3b078;overflow-wrap:anywhere}small{color:#a7b4b4}</style></head><body><main><small>OPENPROOF · BY TRUTHX</small><h1>${fr?'La documentation a rejoint OpenProof.':'The documentation has moved to OpenProof.'}</h1><p>${fr?'Cette ancienne adresse mène désormais à la page de référence correspondante.':'This historical address now leads to its corresponding reference page.'}</p><a href="${escaped(target)}">${fr?'Continuer vers OpenProof':'Continue to OpenProof'} →</a></main></body></html>\n`;
}
if(require.main===module){
 let stale=false;
 for(const entry of destinations){const file=path.join(root,entry.file),html=render(entry);
  if(process.argv.includes('--check')){if(fs.readFileSync(file,'utf8')!==html){console.error('Stale redirect:',entry.file);stale=true;}}
  else fs.writeFileSync(file,html);
 }
 if(stale)process.exitCode=1;
}
module.exports={render,destinations};
