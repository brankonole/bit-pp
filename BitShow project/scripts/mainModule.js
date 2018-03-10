const mainModule = (function (uim, dm) {
    const url = 'http://api.tvmaze.com/shows';
    let castArr = [];
    let seasons = [];
    let showArr = [];

    function getData() {
        $(document).ready(() => {
            const request = $.ajax({
                url: url,
                method: "GET"
            });

            request.done(function (response) {
                // console.log(response);

                console.log(uim.displayShows(response));
            })

            request.fail(function (jqXHR, textStatus) {
                alert("Request failed: " + textStatus);
            });
        });
    }

    function getCastData() {
        let idCast = localStorage.getItem('id');

        $(document).ready(() => {
            const request = $.ajax({
                url: `${url}/${idCast}/cast`,
                method: "GET"
            });

            request.done(function (response) {
                // console.log(response);

                response.forEach(e => {
                    const actor = dm.createCast(e.person.name);
                    castArr.push(actor);
                });
                console.log(castArr);


            })

            request.fail(function (jqXHR, textStatus) {
                alert("Request failed: " + textStatus);
            });
        })
    }
    ///
    function getSeasonData() {
        let idSeasons = localStorage.getItem('id');

        $(document).ready(() => {
            const request = $.ajax({
                url: `${url}/${idSeasons}/seasons`,
                method: "GET"
            });

            request.done(function (response) {
                console.log(response);

                response.forEach(e => {
                    const seasonDate = dm.createSeason(e.premiereDate, e.endDate);
                    // const endDate = dm.createSeason(e.endDate);

                    seasons.push(seasonDate);
                });
                console.log(seasons);


            })

            request.fail(function (jqXHR, textStatus) {
                alert("Request failed: " + textStatus);
            });
        })
    }
    ///

    function getShowData() {
        let idShow = localStorage.getItem('id');

        $(document).ready(() => {
            const request = $.ajax({
                url: `${url}/${idShow}`,
                method: "GET"
            });

            request.done(function (response) {
                // console.log(response);

                const show = dm.createShow(response.name, response.image.medium, response.id, response.summary);

                showArr.push(show);
                castArr.forEach(function (e, i) {
                    showArr[0].addCast(e.fullName);
                })
                seasons.forEach(function (e, i) {
                    showArr[0].addSeason(e);
                })
                console.log(showArr);
            })

            request.fail(function (jqXHR, textStatus) {
                alert("Request failed: " + textStatus);
            });
        })
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
                    console.log(response);

                })

                request.fail(function (jqXHR, textStatus) {
                    alert("Request failed: " + textStatus);
                });
            });
        })

    }


    function showInfo() {
        $('body').on('click', '.box', function (e) {
            uim.bla(e);
        })
    }

    function rRrrrr() {
        getSeasonData()
        console.log(seasons);
    }


    return {
        getData,
        addHandler,
        showInfo,
        getShowData,
        getCastData,
        getSeasonData,
        rRrrrr
    }
})(UIModule, dataModule);