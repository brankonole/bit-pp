const UIModule = (function () {
    const wrapperDiv = $('.js-wrapper');

    function displayShows(data) {
        let arrTitles = [];
        let arrImgs = [];

        data.forEach((e, i) => {
            if (i < 50) {
                arrTitles.push(data[i].name);
                arrImgs.push(data[i].image.medium);
            }
        });

        for (let i = 0; i < 50; i++) {
            const div = $(`<div class="box col-4"><a href="#"><img src="${arrImgs[i]}" /><p class="box-title">${arrTitles[i]}</p></a></div>`);

            wrapperDiv.append(div);
        }
        return [arrTitles, arrImgs];

    }

    function showSearchList() {
        let  filter, li, a, i;
        const searchInput = $('.js-search-input');
        const searchUl = $('#searchUl');

        filter = searchInput.val().toUpperCase();
        li = searchUl.find("li");
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";

            }
        }
    }

    return {
        displayShows,
        showSearchList
    }
})();