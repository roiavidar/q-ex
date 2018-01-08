angular.module("myApp").component('myApp', {
    templateUrl: "myApp.template.html",
    controller: myAppController
})

function myAppController() {
    // this.images = [
    //     "http://www.guinnessworldrecords.com/images/superlative/superheroes/GWR-Superheroes-SUPERMAN.svg",
    //     "http://vignette.wikia.nocookie.net/p__/images/8/89/Wonder_Woman_%28DC_Super_Hero_Girls%29.png/revision/latest?cb=20160314203149&path-prefix=protagonist",
    //     "http://i.ebayimg.com/images/a/(KGrHqMOKm4E55zp2Wk+BOi4cQWRbw~~/s-l300.jpg",
    //     "http://i.pinimg.com/originals/64/b3/b0/64b3b046f8740bb9a0b7403599889fed.jpg",
    //     "http://imgc.allpostersimages.com/img/print/posters/marvel-super-hero-squad-thor-charging_a-G-9448845-4985866.jpg",
    //     "http://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher_170w/public/product-images/csm-tv/batmanbravebold-small.jpg?itok=LZbNENFq"
    // ];

    this.images = [
        "GWR-Superheroes-SUPERMAN.svg",
        "Wonder_Woman_(DC_Super_Hero_Girls).png",
        "GWR-Superheroes-SUPERMAN.svg",
        "Wonder_Woman_(DC_Super_Hero_Girls).png",
        "GWR-Superheroes-SUPERMAN.svg",
        "Wonder_Woman_(DC_Super_Hero_Girls).png"
    ];
}
