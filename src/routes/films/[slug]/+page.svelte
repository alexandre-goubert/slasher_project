<script>
    import { asset, resolve } from '$app/paths';
    let { data } = $props();
</script>
<svelte:head>
    <title>{data.film.fullTitle} ({data.film.year}) | Dernière Séance</title>
    <meta name="description" content={data.film.synopsis[0]} />
</svelte:head>
<main class="film-page">
    <a class="back-link" href={resolve('/films')}>← Retour aux films</a>
    <section class="film-section" aria-labelledby="film-title">
        <div class="img-container"><img src={asset(/** @type {Parameters<typeof asset>[0]} */ (data.film.image))} alt={`Illustration de ${data.film.title}`} width="1060" height="1480" /></div>
        <div class="description-container">
            <h1 id="film-title">{data.film.fullTitle}</h1>
            <p class="film-meta">{data.film.year} · {data.film.duration}</p>
            <h2>{data.film.director}</h2>
            {#each data.film.synopsis as paragraph}<p>{paragraph}</p>{/each}
        </div>
    </section>
    <section class="actors-container" aria-labelledby="cast-title">
        <h2 id="cast-title">Distribution</h2>
        <div class="cast-grid">
            {#each data.film.cast as group}
                <div class="cast-table">
                    <table>
                        <caption>{group.title}</caption>
                        <thead><tr><th scope="col">Acteur</th><th scope="col">Rôle</th></tr></thead>
                        <tbody>{#each group.people as person}<tr><td>{person.name}</td><td>{person.role}</td></tr>{/each}</tbody>
                    </table>
                </div>
            {/each}
        </div>
    </section>
</main>
