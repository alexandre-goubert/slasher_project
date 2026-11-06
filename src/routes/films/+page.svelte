<script>
    import films from '#lib/data/films.json';
    import FilmCard from '#lib/components/FilmCard.svelte';
    let searchInput = $state('');
    let search = $state('');
    let decade = $state('tous');
    let currentPage = $state(1);
    const perPage = 8;
    const decades = ['tous', '1960', '1970', '1980', '1990', '2000', '2010', '2020'];
    let filtered = $derived(films.filter(film => film.title.toLocaleLowerCase('fr').includes(search) && (decade === 'tous' || Math.floor(film.year / 10) * 10 === Number(decade))));
    let numberOfPages = $derived(Math.ceil(filtered.length / perPage));
    let visible = $derived(filtered.slice((currentPage - 1) * perPage, currentPage * perPage));
</script>

<svelte:head><title>Les films | Dernière Séance</title><meta name="description" content="Explorez 20 films d’horreur : recherche par titre, filtres par décennie et fiches détaillées." /></svelte:head>
<main class="catalog-page">
    <div class="presentation">
        <p><span>Le rendez-vous des fans de slashers</span></p>
        <h1>Les films</h1>
        <p>Classiques du genre ou nouvelles frayeurs : trouvez votre prochain film préféré</p>
    </div>
    <form class="search-bar" onsubmit={(event) => { event.preventDefault(); search = searchInput.trim().toLocaleLowerCase('fr'); currentPage = 1; }}>
        <label class="sr-only" for="search">Rechercher un film</label>
        <input id="search" type="search" bind:value={searchInput} placeholder="Rechercher un film…" />
        <button type="submit">Rechercher</button>
    </form>
    <div class="filters" role="group" aria-label="Filtrer par décennie">
        {#each decades as value}
            <button type="button" class="btn-filters" aria-pressed={decade === value} onclick={() => { decade = value; currentPage = 1; }}>{value === 'tous' ? 'Tous' : `Années ${value}`}</button>
        {/each}
    </div>
    <p class="result-count" aria-live="polite">{filtered.length} film{filtered.length > 1 ? 's' : ''}</p>
    <div class="movies-grid">
        {#each visible as film (film.slug)}<FilmCard {film} />{/each}
    </div>
    {#if filtered.length === 0}<p class="empty-state">Aucun film ne correspond à cette recherche.</p>{/if}
    {#if numberOfPages > 1}
        <nav class="pagination" aria-label="Pages du catalogue">
            {#each Array.from({length: numberOfPages}, (_, i) => i + 1) as number}
                <button type="button" aria-label={`Page ${number}`} aria-current={currentPage === number ? 'page' : undefined} onclick={() => currentPage = number}>{number}</button>
            {/each}
        </nav>
    {/if}
</main>
