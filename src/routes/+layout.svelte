<script>
    import Header from '#lib/components/Header.svelte';
    import Footer from '#lib/components/Footer.svelte';
    import '#lib/home.css';
    import '#lib/app.css';
    let { children } = $props();
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
    <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
    <script src="https://kit.fontawesome.com/f6a2136e94.js" crossorigin="anonymous"></script>
</svelte:head>

<Header />
{@render children()}
<Footer />
