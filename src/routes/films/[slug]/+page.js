import films from '#lib/data/films.json';
import { error } from '@sveltejs/kit';

export function entries() {
    return films.map(film => ({ slug: film.slug }));
}

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    const film = films.find(film => film.slug === params.slug);
    if (!film) error(404, 'Film introuvable');
    return { film };
}
