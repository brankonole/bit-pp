const UIModule = (function () {
    const wrapperDiv = $('.js-wrapper');
    const searchInput = $('.js-search-input');
    const searchUl = $('#searchUl');

    function displayShows(data) {
        let arrTitles = [];
        let arrImgs = [];
        let idOfShow;

        data.forEach((e, i) => {
            if (i < 50) {
                arrTitles.push(data[i].name);
                arrImgs.push(data[i].image.medium);
            }
        });

        for (let i = 0; i < 50; i++) {
            idOfShow = data[i].id;

            const div = $(`<div data-id-show="${idOfShow}" class="box col-4"><a href="show-info.html" target="_blank"><img src="${arrImgs[i]}" /><p class="box-title">${arrTitles[i]}</p></a></div>`);
            wrapperDiv.append(div);
        }

        return [arrTitles, arrImgs];


    }

    function showSearchList(data) {
        let searchList;
        let searchInputVal = searchInput.val();
        let filter = searchInputVal.toUpperCase();

        searchUl.html('');

        data.forEach(function (e, i) {
            if (e.name.toUpperCase().includes(filter) && searchUl.find('li').length < 10) {
                searchList = searchUl.append($(`<li class="list-item"><a href="#">${e.name}</a></li>`));
            }
        })

        if (searchInputVal == '') {
            searchUl.html('');
        }

        return searchList;
    }

    function bla(e) {
        let dataIdShow = e.currentTarget.attributes[0].value;

        localStorage.setItem('id', dataIdShow);
    }

    function castThing(e) {
        let idCast = e.person.name;
        localStorage.setItem('cast', idCast);
        
    }

    return {
        displayShows,
        showSearchList,
        bla
        // castThing
    }
})();