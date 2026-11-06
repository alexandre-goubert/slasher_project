<script>
    import { resolve } from '$app/paths';
    import { page } from '$app/state';
    import { onMount } from 'svelte';
    let halloween = $state(false);
    function applyTheme() {
        document.body.classList.toggle('halloween-mode', halloween);
    }
    function toggleTheme() {
        halloween = !halloween;
        applyTheme();
        try { localStorage.setItem('seance-halloween', String(halloween)); } catch {}
    }
    onMount(() => {
        try { halloween = localStorage.getItem('seance-halloween') === 'true'; } catch {}
        applyTheme();
    });
</script>

<header>
    <a class="header-title" href={resolve('/')} aria-label="Dernière Séance — Accueil"><p>Dernière <span>séance</span></p></a>
    <button class="theme-toggle" type="button" aria-pressed={halloween} onclick={toggleTheme}>
        <i class="fas fa-ghost" aria-hidden="true"></i> {halloween ? 'Mode classique' : 'Halloween Mode'}
    </button>
    <nav class="header-menu" aria-label="Navigation principale">
        <a href={resolve('/')} aria-current={page.url.pathname === resolve('/') ? 'page' : undefined}><i class="fas fa-home" aria-hidden="true"></i> Accueil</a>
        <a href={resolve('/films')} aria-current={page.url.pathname.startsWith(resolve('/films')) ? 'page' : undefined}><i class="fas fa-film" aria-hidden="true"></i> Les films</a>
        <a href={resolve('/sagas')} aria-current={page.url.pathname.startsWith(resolve('/sagas')) ? 'page' : undefined}><i class="fas fa-clapperboard" aria-hidden="true"></i> Les sagas</a>
        <span title="Fonctionnalité à venir"><i class="fas fa-list" aria-hidden="true"></i> Ma liste · bientôt</span>
    </nav>
</header>
