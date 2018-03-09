const mainModule = (function (UIModule, dataModule) {

    const url = 'http://api.tvmaze.com/shows';

    function getData() {
        $(document).ready(() => {
                const request = $.ajax({
                    url: url,
                    method: "GET"
                });

                request.done(function (response) {
                    console.log(response);
                })

                request.fail(function (jqXHR, textStatus) {
                    alert("Request failed: " + textStatus);
                });
            });
        }
    return {
        init: function () {
            getData();
        }
    }
})(UIModule, dataModule);

mainModule.init();