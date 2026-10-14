const C='am-accounting-v4',F=['./','./index.html','./manifest.json','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(F))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x))))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{
  if(/fonts\.(googleapis|gstatic)\.com/.test(e.request.url)){const c=res.clone();caches.open(C).then(x=>x.put(e.request,c))}
  return res}).catch(()=>new Response('',{status:504})))));
