const UIModule = (function () {

    function displayShows(data) {
        let arrTitles = [];
        let arrImgs = [];

        data.forEach((e, i) => {
            if (i < 50) {
                arrTitles.push(data[i].name);
                arrImgs.push(data[i].image.medium);
            }
        });

        for (let i = 0; i <50; i++ ) {
            arrTitles
        }
        return [arrTitles, arrImgs];

    }


    return {
        displayShows
    }
})();