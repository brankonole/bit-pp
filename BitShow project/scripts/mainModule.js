const mainModule = (function (uim, dm) {
    const url = 'http://api.tvmaze.com/shows';

    function addSearchHandler() {
        $('.js-search-input').on('keyup', function (event) {
            const request = $.ajax({
                url: url,
                method: "GET"
            });

            request.done(function (response) {
                uim.showSearchList(response);
            })

            request.fail(function (jqXHR, textStatus) {
                alert("Request failed: " + textStatus);
            });
        });

        $(document).on('click', '.js-search-list-item', function() {
            const id = $(this).data('id');
            localStorage.setItem('id', id);
        })
    }

    function initShowList() {
        const tvShow = dm.createTVShow();

        addSearchHandler();
        uim.addShowListHandler();

        tvShow.fetchShows((response) => {
            tvShow.populateShows(response);
            uim.displayShows(tvShow.shows);
        }, (error) => {
            alert("Request failed: " + error);
        });
    }

    function initShowDetails() {
        const idShow = localStorage.getItem('id');

        addSearchHandler();

        dm.fetchShowData(idShow, (r) => {
            const show = dm.createShow(r.name, r.image.original, r.id, r.summary);

            show.fetchAndPopulateAdditionalData(() => {
                uim.displayShow(show);
            });            
        }, (error) => {
            alert("Request failed: " + error);
        })
    }

    return {
        initShowList,
        initShowDetails
    }
})(UIModule, dataModule);