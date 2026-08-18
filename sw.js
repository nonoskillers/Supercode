/* Supercode — service worker
   Met l'application en cache pour qu'elle fonctionne sans connexion.
   Stratégie : on sert immédiatement la version en cache, et on télécharge
   la nouvelle en arrière-plan pour la fois suivante.
   ⚠️ Ne fonctionne qu'en https (GitHub Pages), pas en ouvrant le fichier
      directement depuis le disque. */

const VERSION = 'supercode-v1';
const FICHIERS = ['./', './index.html', './manifest.json', './icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(VERSION)
      .then(c => c.addAll(FICHIERS))
      .then(() => self.skipWaiting())
      .catch(() => {})               // un fichier absent ne doit pas tout bloquer
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(noms => Promise.all(noms.filter(n => n !== VERSION).map(n => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;

  e.respondWith(
    caches.match(e.request).then(cache => {
      const reseau = fetch(e.request).then(rep => {
        if (rep && rep.status === 200 && rep.type === 'basic') {
          const copie = rep.clone();
          caches.open(VERSION).then(c => c.put(e.request, copie));
        }
        return rep;
      }).catch(() => cache);         // hors ligne : on garde le cache

      return cache || reseau;
    })
  );
});
