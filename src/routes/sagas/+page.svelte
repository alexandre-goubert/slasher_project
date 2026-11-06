<script>
    import films from '#lib/data/films.json';
    import sagas from '#lib/data/sagas.json';
    import FilmCard from '#lib/components/FilmCard.svelte';
</script>
<svelte:head><title>Les sagas | Dernière Séance</title><meta name="description" content="Retrouvez les films de chaque saga d’horreur dans le catalogue Dernière Séance." /></svelte:head>
<main class="sagas-page">
    <div class="presentation"><p><span>Le rendez-vous des fans de slashers</span></p><h1>Les sagas</h1><p>Découvrez les sagas incontournables version slasher</p></div>
    {#each sagas as saga}
        <section class="saga-section" aria-label={saga.title}>
            <h2>{saga.title}</h2>
            <div class="movies-grid">
                {#each saga.slugs as slug}
                    {@const film = films.find(film => film.slug === slug)}
                    {#if film}<FilmCard {film} />{/if}
                {/each}
            </div>
        </section>
    {/each}
</main>
