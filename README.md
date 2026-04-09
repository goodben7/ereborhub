# EreborHub

Site vitrine bilingue d’EreborHub construit avec Next.js App Router, Tailwind CSS et Framer Motion.

## Aperçu

Le projet présente les services, projets et informations de contact d’EreborHub avec :

- une navigation localisée en anglais et en français
- des traductions centralisées dans des fichiers JSON
- des métadonnées SEO localisées
- un routage i18n géré par `src/proxy.ts`
- un build prêt pour le déploiement Docker

## Stack technique

- **Framework** : [Next.js 16](https://nextjs.org/) avec App Router
- **Langage** : TypeScript
- **Styling** : [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations** : [Framer Motion](https://www.framer.com/motion/)
- **Icônes** : [Lucide React](https://lucide.dev/)
- **i18n** : dictionnaires JSON typés + routage localisé
- **Déploiement** : Docker + Caddy en reverse proxy

## Scripts disponibles

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Lancer le projet en local

Installe les dépendances :

```bash
npm install
```

Lance le serveur de développement :

```bash
npm run dev
```

Le site est ensuite accessible sur :

- `http://localhost:3000/en`
- `http://localhost:3000/fr`

## Tester le build de production en local

```bash
npm run build
npm run start
```

Tu peux ensuite vérifier le comportement de production sur `http://localhost:3000`.

## Déploiement Docker en local

Le projet est configuré pour produire un build standalone via `next.config.ts`.

Construire et lancer le conteneur :

```bash
docker compose up --build
```

Vérifier qu’il répond :

```bash
curl -I http://127.0.0.1:3001
```

Consulter les logs :

```bash
docker compose logs -f
```

Arrêter le conteneur :

```bash
docker compose down
```

## Déploiement sur un VPS avec Caddy externe

Le setup prévu est :

- **Next.js** dans Docker
- **Caddy** installé sur le VPS hors Docker
- **reverse proxy** Caddy vers `127.0.0.1:3001`

Lancer l’application sur le VPS :

```bash
docker compose up -d --build
```

Exemple de bloc Caddy :

```caddy
ton-domaine.com, www.ton-domaine.com {
    encode zstd gzip
    reverse_proxy 127.0.0.1:3001
}
```

Recharger Caddy :

```bash
sudo systemctl reload caddy
```

## Structure du projet

- `src/app/[locale]` : pages localisées
- `src/components` : composants UI du site
- `src/lib/data` : données des services et projets
- `src/lib/dictionaries` : traductions JSON
- `src/lib/get-dictionary.ts` : chargement serveur des dictionnaires
- `src/lib/client-dictionaries.ts` : chargement client des dictionnaires
- `src/proxy.ts` : redirection i18n des routes sans locale
- `public` : assets statiques

## Notes utiles

- Le port applicatif Docker est exposé uniquement sur `127.0.0.1:3001` pour être servi proprement par Caddy.

---

EreborHub — Engineering Digital Excellence.
