const dataModule = (function () {

    class TVShows {
        constructor(show, limit) {
            this.show = show;
            this.limit = limit;
        }
    }

    class Season {
        constructor(startDate, endDate) {
            this.startDate = startDate;
            this.endDate = endDate;
        }
    }

    class Cast {
        constructor(fullName) {
            this.fullName = fullName;
        }
    }

    
    class Show {
        constructor(name, img, id, details) {
            this.name = name;
            this.img = img;
            this.id = id;
            this.seasons = [];
            this.cast = [];
            this.details = details;
        }
        addSeason(season){
            this.seasons.push(season);
        }
        addCast(actor){
            this.cast.push(actor);
        }
    }

    return {
        createTVShow: function(show, limit) {
            return new TVShows(show, limit);
        },
        createSeason: function(startDate, endDate) {
            return new Season(startDate, endDate);
        },
        createCast: function(fullName) {
            return new Cast(fullName);
        },
        createShow: function(name, img, id, details) {
            return new Show(name, img, id, details);
        }
    }
})();