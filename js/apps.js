var map;

var markers = [];
var locations=[
    {name: "TSC",latlng:{ lat: 24.68324,lng: 46.697613},desc:'<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14500.40213696555!2d46.691291801461304!3d24.689070544837772!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9f0f6c8b8c5c874d!2sThe+Sandwich+Company!5e0!3m2!1sar!2ssa!4v1509469629425" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>',marker: null},
    {name: "Java Time",latlng:{ lat: 24.682537,lng: 46.697332},desc:'<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3625.252922819189!2d46.69608759106371!3d24.683830836223084!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbb8fdb9b47dc0205!2z2KzYp9mB2Kcg2KrYp9mK2YU!5e0!3m2!1sar!2ssa!4v1509470104279" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>' ,marker: null},
    {name: "Choclate World",latlng:{ lat: 24.6808967,lng: 46.6949598},desc:'<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d381.0669157876354!2d46.69528132188605!3d24.68083974412148!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03641bdeab5b%3A0xcb7f30950a453888!2z2LTZiNmD2YTYqiDZiNix2YTYrw!5e0!3m2!1sar!2ssa!4v1509470361976" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>' ,marker: null},
    {name: "Baskin Robbins",latlng:{ lat:24.680993,lng: 46.6949189},desc:'<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d381.0669157876354!2d46.69528132188605!3d24.68083974412148!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x966ca1cacda42a37!2z2KjYp9iz2YPZhiDYsdmI2KjZhtiy!5e0!3m2!1sar!2ssa!4v1509470433634" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>' ,marker: null},
    {name: "Yamal Asham",latlng:{ lat: 24.6888323,lng: 46.6994317},desc:'<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1812.556909749409!2d46.70015614697689!3d24.688613787786426!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x631571787e486ed1!2sYamal+Asham!5e0!3m2!1sar!2ssa!4v1509470475851" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>',marker: null},
    {name: "Sheikh Al-Mandi Restaurant",latlng:{ lat: 24.6932808,lng:46.7018367 },desc:'<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1812.4912676561514!2d46.7021087951397!3d24.693127088418827!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb51b33756e959471!2z2YXYt9i52YUg2LTZitiuINin2YTZhdmG2K_Zig!5e0!3m2!1sar!2ssa!4v1509470512586" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>',marker: null},
    {name: "Yummy Wok",latlng:{ lat: 24.6963063,lng: 46.7029627},desc:'<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1812.4532677483749!2d46.70353036591762!3d24.695739464200845!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd97334a5bbe79380!2z2YrZhdmKINmI2YjZgw!5e0!3m2!1sar!2ssa!4v1509470549331" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>',marker: null},
    {name: "Tamimi Markets",latlng:{ lat: 24.6971191,lng: 46.7026082},desc:'<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1812.4260421071501!2d46.70391660401576!3d24.697610983323926!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5f7edba44f22ce16!2sTamimi+Markets+136!5e0!3m2!1sar!2ssa!4v1509470589113" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>',marker: null}
];

function initMap() {
    var bounds = new google.maps.LatLngBounds();
         map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: {lat: 24.6953817, lng: 46.711567},
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });
         //Create and open InfoWindow.
        var infoWindow = new google.maps.InfoWindow();

        for (var i = 0; i < locations.length; i++) {
            var data = locations[i];
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(data.latlng),
                map: map,
                title: data.name,
                animation: google.maps.Animation.DROP
            });

            //Attach click event to the marker.
            (function (marker, data) {
                google.maps.event.addListener(marker, "click", function (e) {
                    //Wrap the content inside an HTML DIV in order to set height and width of InfoWindow.
                    infoWindow.setContent("<div style = 'width:150px;min-height:40px'>" + data.name + "</div>"+"<dev>" + data.desc+ "</dev>");
                    infoWindow.open(map, marker);
                });
            })(marker, data);
            this.markers = ko.observableArray("");
            markers.push(marker);
            locations[i].marker = marker;
        }
    }

    function locationos(name, latlng, desc ,marker) {
    this.name = ko.observable(name);
    this.latlng = ko.observable(latlng);
    this.desc = ko.observable(desc);
    this.marker = ko.observable(marker);
}

    var viewModel = function () {
    var self = this;

    self.locationos = ko.observableArray("");
    self.filter = ko.observable();
    self.filteredItems = ko.computed(function () {
        var filter = self.filter();
        console.log(filter);
        if (!filter) {
            return self.locationos();
        } else {
            return ko.utils.arrayFilter(self.locationos(), function (item) {
                var val = item.name();
               var isMatching = val.toLowerCase().indexOf(filter) !== -1;
                        if (isMatching) {
                      var infowindow = new google.maps.InfoWindow();
                      var slectedMarker =item.marker();
                      slectedMarker.setAnimation(google.maps.Animation.BOUNCE);
                            console.log(item);
                        } else {
                            // hide marker here
                            console.log(item);
                        }
                        return isMatching;
            });
        }
    });
};

//ko.applyBindings(new viewModel(locations));

function mapError() {
    alert("Request Failed try again");
}


var mymodel = new viewModel();
$(document).ready(function() {
    loaddata();
    ko.applyBindings(mymodel);
});

function loaddata() {
    for (var i = 0; i < locations.length; i++) {
        var latlng = locations[i].latlng;
        var name = locations[i].name;
        var desc = locations[i].desc;
        var marker =locations[i].marker;
        mymodel.locationos.push(new locationos(name, latlng, desc,marker));
}
    }