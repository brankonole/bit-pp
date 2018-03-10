const mainModule = (function (uim, dm) {

    const url = 'http://api.tvmaze.com/shows';

    function getData() {
        $(document).ready(() => {
            const request = $.ajax({
                url: url,
                method: "GET"
            });

            request.done(function (response) {
                console.log(response);

                console.log(uim.displayShows(response));
            })

            request.fail(function (jqXHR, textStatus) {
                alert("Request failed: " + textStatus);
            });
        });
    }

    function addHandler() {
        $('.js-search-input').on('keyup', function (event) {
            $(document).ready(() => {
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
        })

    }

    function showInfo() {
        $('body').on('click', '.box', function() {
            let dataIdShow = $(this).getAttribute('data-id-show');
        })
    }

    return {
        getData,
        addHandler
    }
})(UIModule, dataModule);