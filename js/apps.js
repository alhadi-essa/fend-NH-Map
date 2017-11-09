var map;
var marker;
var markers = [];
var infoWindow;


var locations=[
    {name: "TSC",latlng:{ lat: 24.6831653,lng:46.6979271},icon :'img/pin.png',desc:'<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14500.40213696555!2d46.691291801461304!3d24.689070544837772!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9f0f6c8b8c5c874d!2sThe+Sandwich+Company!5e0!3m2!1sar!2ssa!4v1509469629425" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>',marker: null},
    {name: "Java Time",latlng:{ lat: 24.682828,lng: 46.697218},icon :'img/pin.png',desc:'<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3625.252922819189!2d46.69608759106371!3d24.683830836223084!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbb8fdb9b47dc0205!2z2KzYp9mB2Kcg2KrYp9mK2YU!5e0!3m2!1sar!2ssa!4v1509470104279" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>' ,marker: null},
    {name: "Choclate World",latlng:{ lat: 24.6808967,lng: 46.6949598},icon :'img/placeholder.png',desc:'<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d381.0669157876354!2d46.69528132188605!3d24.68083974412148!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03641bdeab5b%3A0xcb7f30950a453888!2z2LTZiNmD2YTYqiDZiNix2YTYrw!5e0!3m2!1sar!2ssa!4v1509470361976" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>' ,marker: null},
    {name: "Baskin Robbins",latlng:{ lat:24.680993,lng: 46.6949189},icon :'img/placeholder.png',desc:'<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d381.0669157876354!2d46.69528132188605!3d24.68083974412148!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x966ca1cacda42a37!2z2KjYp9iz2YPZhiDYsdmI2KjZhtiy!5e0!3m2!1sar!2ssa!4v1509470433634" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>' ,marker: null},
    {name: "Yamal Asham",latlng:{ lat: 24.688846,lng: 46.6994317},icon :'img/placeholder.png',desc:'<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1812.556909749409!2d46.70015614697689!3d24.688613787786426!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x631571787e486ed1!2sYamal+Asham!5e0!3m2!1sar!2ssa!4v1509470475851" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>',marker: null},
    {name: "Sheikh Al-Mandi Restaurant",latlng:{ lat: 24.6932808,lng:46.7018367 },icon :'img/placeholder.png',desc:'<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1812.4912676561514!2d46.7021087951397!3d24.693127088418827!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb51b33756e959471!2z2YXYt9i52YUg2LTZitiuINin2YTZhdmG2K_Zig!5e0!3m2!1sar!2ssa!4v1509470512586" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>',marker: null},
    {name: "Yummy Wok",latlng:{ lat: 24.6963063,lng: 46.7029627},icon :'img/placeholder.png',desc:'<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1812.4532677483749!2d46.70353036591762!3d24.695739464200845!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd97334a5bbe79380!2z2YrZhdmKINmI2YjZgw!5e0!3m2!1sar!2ssa!4v1509470549331" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>',marker: null},
    {name: "Tamimi Markets",latlng:{ lat: 24.6971191,lng: 46.7026082},icon :'img/pin.png',desc:'<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1812.4260421071501!2d46.70391660401576!3d24.697610983323926!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5f7edba44f22ce16!2sTamimi+Markets+136!5e0!3m2!1sar!2ssa!4v1509470589113" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>',marker: null}
];

function initMap() {
    var bounds = new google.maps.LatLngBounds();
         map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: {lat: 24.6953817, lng: 46.711567},
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });
         //Create and open InfoWindow.
        infoWindow = new google.maps.InfoWindow();

        for (var i = 0; i < locations.length; i++) {
            var data = locations[i];
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(data.latlng),
                map: map,
                title: data.name,
                icon: data.icon,
                content:data.desc
            });
        locations[i].marker = marker;
        // Push the marker to our array of markers.
        markers.push(marker);
        // Create an onclick event to open an infowindow at each marker.
        addListeners(marker, infoWindow);
        bounds.extend(marker.position);
        }
        map.fitBounds(bounds);
    }

function addListeners(marker, largeInfowindow) {
    marker.addListener('click', function() {
        populateInfoWindow(marker, infoWindow);
    });
}

function populateInfoWindow(marker, infowindow) {
    // Check to make sure the infowindow is not already opened on this marker.
    marker.setAnimation(google.maps.Animation.BOUNCE);
    setTimeout(function() {
        marker.setAnimation(null);
    }, 2100);
    if (infowindow.marker != marker) {
        infowindow.marker = marker;
        infoWindow.setContent("<div style = 'width:150px;min-height:40px'>" + marker.title + "</div>"+"<dev>" + marker.content+ "</dev>");
        infowindow.open(map, marker);
        infowindow.addListener('closeclick', function() {
            infowindow.marker = null;
        });
    }
}

var viewModel = function () {
    var self = this;

    self.items = ko.observableArray(locations);
    self.filter = ko.observable('');

    self.filteredItems = ko.computed(function () {
    var filter = self.filter();
    return ko.utils.arrayFilter(self.items(), function(item) {
        var match = item.name.toLowerCase().indexOf(filter) !== -1;
        if (item.marker) {
            item.marker.setVisible(match);
        }
        return match;
    });
    }, this);
};

ko.applyBindings(new viewModel(locations));

function mapError() {
    alert("Request Failed try again");
}
