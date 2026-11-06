<script>
    import { asset, resolve } from '$app/paths';
</script>
<svelte:head><title>Dernière Séance — Films d’horreur et slashers</title><meta name="description" content="Découvrez les classiques du slasher, leurs histoires et leurs acteurs." /></svelte:head>
<main class="home-page">
        <div class="presentation">
            
            <p><span>Le rendez-vous des fans de slashers</span></p>
            <h1>Une dernière séance ?</h1>
            <p>Explorez les classiques du genre et composez votre prochaine soirée cinéma</p>
            <div class="explore"><a href={resolve("/films")}><p>Explorer les films</p></a></div>

        </div>

        <div class="container">

            <h2>A l'affiche ce soir</h2>
        </div>

        <div class="container-description"> 

            <p>Trois classiques pour entrer dans l'univers du slasher</p>

        </div>


    <section class="container-pictures">

        <div class="halloween-pic"><img src={asset("images/halloween-pic.png")} alt="Halloween" width="400">
        
            <h3>Halloween</h3>
            <p>Il traque sa prochaine victime (toi) 🔪</p>
            <p><span><a href={resolve('/films/[slug]', { slug: "halloween" })}>Voir la fiche -&gt;</a></span></p>
        <div class="badge-halloween"><p>Culte</p></div>
        
        </div>
        
        <div class="friday-pic"><img src={asset("images/friday13-pic.png")} alt="Vendredi 13" width="400">
        
            <h3>Vendredi 13</h3>
            <p>Bienvenue au camp de <strong>vacances</strong> 🏕️</p>
            <p><span><a href={resolve('/films/[slug]', { slug: "friday" })}>Voir la fiche -&gt;</a></span></p>
        <div class="badge-friday"><p>Culte</p></div>

        </div>
        
        <div class="scream-pic"><img src={asset("images/scream-pic.png")} alt="Scream" width="400">
        
            <h3>Scream</h3>
            <p>Quel est ton film préféré ? 📞</p>
            <p><span><a href={resolve('/films/[slug]', { slug: "scream" })}>Voir la fiche -&gt;</a></span></p>
        <div class="badge-scream"><p>Culte</p></div>

        </div>

    </section>

    <section class="list-container">
        
        <div class="presentation-list">

            <h3>Ta prochaine soirée commence ici</h3>
            <p>Garde une trace des films que tu veux découvrir</p>

        </div>

        <div class="list">Ma liste · bientôt</div>

    </section>

</main>

