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

    // function addHandler() {
    //     $(document).ready('click', function() {

    //     })
    // }

    return {
        init: function () {
            getData();
        }
    }
})(UIModule, dataModule);

mainModule.init();