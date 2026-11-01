# Mon Portfolio

Un site portfolio réalisé par Mengqi Chen avec Next.js.
Il est accessible via https://portfolio-mengqichenn.vercel.app/ .

## Stack technique

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [daisyUI](https://daisyui.com/)

## Prérequis

Installer [Node.js](https://nodejs.org/) et npm.

## Télécharger et lancer le projet

Cloner le dépôt et accéder à son dossier :

```bash
git clone <URL_DU_DEPOT>
cd <NOM_DU_DEPOT/mon-portfolio>
```

Installer les dépendances et démarrer le serveur de développement :

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans un navigateur. Le serveur se recharge automatiquement après chaque modification.


## Structure

- `src/app/` : pages et styles du site.
- `src/components/` : composants réutilisables.
- `public/` : fichiers statiques, comme les images, les vidéos et le CV.

Consulter `package.json` pour voir les dépendances du projet et `package-lock.json` pour retrouver leurs versions. 


## Déploiement

Le site est hébergé sur [Vercel](https://vercel.com/), connecté à ce dépôt GitHub. Chaque `push` sur la branche principale déclenche automatiquement un nouveau build et une nouvelle mise en ligne.