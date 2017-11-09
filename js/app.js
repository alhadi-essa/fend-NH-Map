var data = [
    {name: "TSC",latlng:{ lat: 24.68324,lng: 46.697613}},
    {name: "Java Time",latlng:{ lat: 24.682537,lng: 46.697332}},
    {name: "Qomra",latlng:{ lat: 24.6824346,lng: 46.6967795}},
    {name: "Baskin Robbins",latlng:{ lat:24.6823444,lng: 46.6984757}},
    {name: "Yamal Asham",latlng:{ lat: 24.6888323,lng: 46.6994317}},
    {name: "Sheikh Al-Mandi Restaurant",latlng:{ lat: 24.6932808,lng:46.7018367 }},
    {name: "Yummy Wok",latlng:{ lat: 24.6963063,lng: 46.7029627}},
    {name: "Tamimi Markets",latlng:{ lat: 24.6971191,lng: 46.7026082}}
    ];

var columns = [{
    value: 'name'
}];

var Filtering = function () {
    var self = this;

    self.items = ko.observableArray(data);
    self.columns = ko.observableArray(columns);
    self.filter = ko.observable();

    self.filteredItems = ko.computed(function () {
        var filter = self.filter();
        console.log(filter);
        if (!filter) {
            return self.items();
        } else {
            return ko.utils.arrayFilter(self.items(), function (item) {
                console.log('Filtering on Item');
                var matching = -1;
                var val = item.name;
                matching+= val.toLowerCase().indexOf(filter.toLowerCase())+1;
                 console.log(matching);
                return matching>=0;
            });
        }
    });
};

ko.applyBindings(new Filtering(data));