<script>
    import { asset, resolve } from '$app/paths';
    /** @type {{ film: (typeof import('../data/films.json'))[number] }} */
    let { film } = $props();
</script>

<article class="film-card">
    <a class="film-card-image" href={resolve('/films/[slug]', { slug: film.slug })} aria-label={`Voir la fiche de ${film.title}`}>
        <img src={asset(/** @type {Parameters<typeof asset>[0]} */ (film.image))} alt={`Illustration de ${film.title}`} width="1060" height="1480" loading="lazy" />
        <span class="film-year">{film.year}</span>
    </a>
    <div class="film-card-content">
        <h3>{film.title}</h3>
        <p>{film.tagline}</p>
        <a href={resolve('/films/[slug]', { slug: film.slug })}>Voir la fiche →</a>
    </div>
</article>
