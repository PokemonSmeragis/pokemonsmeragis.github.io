var Pokedex = Panels.App.extend({
    topbarView: Topbar,
    backButtonPrefix: '<i class="fa fa-chevron-left"></i> ',
    states2: {
        // Detail panels
        'pokemon/:pokemon': PokedexPokemonPanel,
        'moves/:move': PokedexMovePanel,
        'abilities/:ability': PokedexAbilityPanel,
        'ability/:ability': PokedexAbilityPanel,
        'encounters/:location': PokedexEncountersPanel,

        // Main search tabs
        '': PokedexSearchPanel,
        'pokemon/': PokedexSearchPanel,
        'moves/': PokedexSearchPanel,
        'encounters/': PokedexSearchPanel,
        ':q': PokedexSearchPanel
    },

    initialize: function () {
        // NOTE: Panels.App.routePanel uses Backbone.history.route(), which prepends routes.
        // That means later registrations have higher priority.
        // So we register LOW priority routes first, and HIGH priority routes last.

        // Lowest priority fallbacks
        this.routePanel('*path', PokedexSearchPanel);
        this.routePanel(':q', PokedexSearchPanel);

        // Main tabs (accept both with and without trailing slash)
        this.routePanel('', PokedexSearchPanel);

        this.routePanel('pokemon', PokedexSearchPanel);
        this.routePanel('pokemon/', PokedexSearchPanel);

        this.routePanel('moves', PokedexSearchPanel);
        this.routePanel('moves/', PokedexSearchPanel);

        this.routePanel('encounters', PokedexEncountersMainPanel);
        this.routePanel('encounters/', PokedexEncountersMainPanel);

        // Detail panels (highest priority)
        this.routePanel('pokemon/:pokemon', PokedexPokemonPanel);
        this.routePanel('moves/:move', PokedexMovePanel);
        this.routePanel('abilities/:ability', PokedexAbilityPanel);
        this.routePanel('ability/:ability', PokedexAbilityPanel);
        this.routePanel('encounters/:location', PokedexEncountersPanel);
    }
});

var pokedex = new Pokedex();
