// JavaScript Document
var hotelInfo = [   {
    "name":"Southern Serenade",
    "description":"This elegant suite is highlighted with dramatic colors and a queen cherry rice bed. An antique couch sits in a bay window overlooking the sweeping lawn and the town of Rangford across the river. Adjoining the sitting-bedroom is the original family bathroom.",
    "cost":{"weekend":"$129.00", "weekday":"$99.00"},
    "details":["Big Screen TV","Free WIFI","Jetted Tub","Blue Ray Player"],
    "photo":"images/serenade.jpg"
    },
    {
    "name":"Enchanted Escape",
    "description":"This large but cozy room, warmly decorated in taupe and sea green, features a king bed and a pair of wing-backed chairs for relaxing. It is named for another early developer of Rangford who also resided in the home.",
    "cost":{"weekend":"$179.00", "weekday":"$159.00"},
    "details":["Wine and Roses","Jetted Tub","King Sized Bed"],
    "photo":"images/escape.jpg"
    },
    {
    "name":"Sandy Suite",
    "description":"A favorite of guests, this bright and spacious room is delightfully decorated in sand and bamboo. It has four windows, three of which form a large bay embracing the luxurious cherry queen bed. Snuggle into this elegant four-poster or curl up on the sofa to read.",
    "cost":{"weekend":"$299.00", "weekday":"$259.00"},
    "details":["Large Fan","Sky Light","Swimming Pool","Complimentary Sun Screen"],
    "photo":"images/sandy.jpg"
    }
];

display(0);

function display(hotelIdx) {
    document.getElementById('desc').innerHTML = hotelInfo[hotelIdx].description;
    document.getElementById('photo').src = hotelInfo[hotelIdx].photo;
    document.getElementById('weekend').innerHTML = hotelInfo[hotelIdx].cost['weekend'];
    document.getElementById('weekday').innerHTML = hotelInfo[hotelIdx].cost['weekday'];
    var items='';
    for(var i=0; i<hotelInfo[hotelIdx].details.length; i++){
        items += '<p>'+hotelInfo[hotelIdx].details[i]+'<p>';
    }
    document.getElementById('details').innerHTML = items;
    
}
