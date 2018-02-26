function WebApp(name, url, technologies, licence, stars) {
    this.name = name;
    this.url = url;
    this.technologies = technologies || [];
    this.licence = licence;
    this.stars = stars;
}

WebApp.prototype.getData = function () {
    console.log(this.name, this.url, this.technologies, this.licence, this.stars);
}

WebApp.prototype.reactBased = function () {
    for (var i = 0; i < this.technologies.length; i++) {
        if (this.technologies[i].toLowerCase() == 'react') {
            return true;
        }
    }
    return false;
}

function MobileApp(name, platforms, licence, stars) {
    this.name = name;
    this.platforms = platforms;
    this.licence = licence;
    this.stars = stars;
}

MobileApp.prototype.getData = function () {
    console.log(this.name, this.platforms, this.licence, this.stars);
}

MobileApp.prototype.forAndroid = function () {
    for (var i = 0; i < this.platforms.length; i++) {
        if (this.platforms[i].toLowerCase() == 'android') {
            return true;
        }
    }
    return false;
}

var w1 = new WebApp('viber', 'www.viber.com', ['angular', 'react', 'php'], 'cc', 5)

// console.log(w1.reactBased() == true ? "Yes" : "No");

var m1 = new MobileApp('samsung galaxy S7', ['android', 'windows', 'iphone'], 'cc', 5);
// console.log(m1.forAndroid() == true ? "Yes" : "No");

var sharedMethods = {
    isCCLicence: function () {
        if (this.licence == 'cc') {
            return true;
        } else {
            return false;
        }
    },
    like: function () {
        this.stars++;
    },
    showStars: function () {
        console.log(this.stars);
    }
}

WebApp.prototype.__proto__ = sharedMethods;
MobileApp.prototype.__proto__ = sharedMethods;

console.log(m1.isCCLicence() == true ? "Yes" : "No");