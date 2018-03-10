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
        $('h2').on('click', function() {
            uim.showSearchList();
        })
    }

    return {
        init: function () {
            getData();
            addHandler();
        }
    }
})(UIModule, dataModule);

mainModule.init();