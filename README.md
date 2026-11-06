# Dernière Séance — SvelteKit

Migration du projet `slasher_project`. Le dossier HTML/CSS/JS original est conservé à côté et n’a pas été modifié.

## Démarrer

Ouvrir ce dossier dans VS Code, puis dans le terminal :

```powershell
npm.cmd install
npm.cmd run dev -- --open
```

Vérifications : `npm.cmd run check` et `npm.cmd run build`.
Prévisualisation du site construit : `npm.cmd run preview`.

## Où modifier le site ?

- `src/routes/+page.svelte` : accueil.
- `src/routes/films/+page.svelte` : catalogue, recherche, filtres, pagination de 8 films.
- `src/routes/films/[slug]/+page.svelte` : modèle commun aux 20 fiches films.
- `src/lib/data/films.json` : titres, années, résumés et distributions repris du projet original.
- `src/routes/sagas/+page.svelte` et `src/lib/data/sagas.json` : les trois sagas présentes dans le site original.
- `src/lib/components/FilmCard.svelte` : carte commune au catalogue et aux sagas.
- `src/lib/components/Header.svelte` et `Footer.svelte` : éléments communs.
- `src/lib/home.css` : styles de l’accueil repris du projet original.
- `src/lib/app.css` : styles partagés, catalogue, sagas et fiches films.
- `static/images` : illustrations originales, accessibles avec `asset()`.

Le mode Halloween est commun aux pages et mémorisé dans le navigateur. « Ma liste » reste une fonctionnalité à venir, comme dans le projet d’origine. Les informations des films ont été transférées, pas actualisées ni revérifiées.

## Publication

Le site est précompilé en HTML avec l’adaptateur statique. Rien n’a été publié automatiquement et le dépôt original reste inchangé.
Pour préparer une publication sur le dépôt GitHub Pages existant, construire avec le bon préfixe :

```powershell
$env:BASE_PATH='/slasher_project'
npm.cmd run build
Remove-Item Env:BASE_PATH
```

Un workflow de publication SvelteKit devra remplacer la publication actuelle au moment de la migration du dépôt. Les anciennes URL `html/*.html` devront alors être redirigées vers les nouvelles routes pour préserver les liens existants.

## Crédits

Projet pédagogique d’Alexandre Goubert. Illustrations générées par IA, non officielles. Les textes et distributions proviennent des fichiers du projet original, préparés notamment à partir de Wikipédia. Site indépendant, sans affiliation avec les studios.
