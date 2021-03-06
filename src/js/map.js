var map = null;

function initMap() {

    var STUDENT_UNION = {
        lat: 28.601660,
        lng: -81.200788
    }

    // Create a map object and specify the DOM element for display.
        map = new google.maps.Map(document.getElementById('map'), {
            center: STUDENT_UNION,
            zoom: 15,
            maxZoom: 18,
            minZoom: 15,
            mapTypeControl: false,
            streetViewControl: false,
            zoomControl: true,
            backGroundColor: 'white',
        });

    // Find a way to import this...
    var geoJson = {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "properties": {
                    "Name": "Student Union"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -81.20043396949768,
                        28.602034127392947
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "Name": "College of Sciences"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -81.20009064674377,
                        28.60100739109247
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "Name": "Business Administration I"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -81.19916260242462,
                        28.601096877682878
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "Name": "Engineering II"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -81.1985296010971,
                        28.601784508940156
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "Name": "Health and Public Affairs"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -81.19841158390045,
                        28.603117370412168
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "Name": "Global UCF"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -81.19788587093353,
                        28.604615053236156
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "Name": "Psychology Building"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -81.19947910308838,
                        28.6047092464109
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "Name": "Classroom Building II"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -81.19992971420288,
                        28.604181763544638
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "Name": "Memory Mall"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -81.1988353729248,
                        28.604591504929253
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "Name": "Classroom Building I"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -81.20042324066162,
                        28.603654278030245
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "Name": "Visual Arts Building"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -81.20306253433228,
                        28.602792398678965
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "Name": "Burnett Honors College"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -81.2023276090622,
                        28.602279035487314
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "Name": "John T. Washington Center"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -81.20178043842316,
                        28.601115716955352
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "Name": "John C. Hitt LIbrary"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -81.20157122612,
                        28.600202008349655
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "Name": "Colbourn Hall"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -81.20270848274231,
                        28.60121933289361
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "Name": "Performing Arts Center Music"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -81.20426952838896,
                        28.602015288285127
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "Name": "Performing Arts Center Theatre"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -81.2042909860611,
                        28.60263697705998
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "Name": "Nicholson School of Communication"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -81.20297133922577,
                        28.60374376236651
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "Name": "Tech Commons"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -81.20037496089935,
                        28.600583506207787
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "Name": "Theatre"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -81.19974732398987,
                        28.60042808132166
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "Name": "Math and Physics Building"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -81.20041787624359,
                        28.59960856448419
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "Name": "Chemistry Building"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -81.19965076446533,
                        28.599919416450724
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "Name": "Howard Phillips Hall"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -81.20270848274231,
                        28.600258526638232
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "Name": "Millican Hall"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -81.202295422554,
                        28.59905279655551
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "Name": "Teaching Academy"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -81.2040388584137,
                        28.599203513572387
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "Name": "Ferrell Commons"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -81.19970440864563,
                        28.597894152270527
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "Name": "Biological Sciences Building"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -81.19861543178558,
                        28.600098391408277
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "Name": "Physical Sciences Building"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -81.19806289672852,
                        28.599815799230704
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "Name": "Harris Engineering Corp"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -81.19746208190918,
                        28.600644734130114
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "Name": "Recreation and Wellness Center"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -81.19932889938354,
                        28.595887689271592
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "Name": "Barbara Ying Center"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -81.202472448349,
                        28.59496922511903
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "Name": "Health Center and Pharamacy"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -81.19937717914581,
                        28.599415459011652
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "Name": "CFE Arena"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -81.1974835395813,
                        28.607054629232294
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "Name": "Tower I"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -81.19819700717926,
                        28.607968278248542
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "Name": "Tower II"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -81.1972850561142,
                        28.609536533549928
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "Name": "Jay Bergman Field"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -81.19592249393463,
                        28.60953182410961
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "Name": "Tower III"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -81.19634628295898,
                        28.606541286865664
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "Name": "Tower IV"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -81.19577765464783,
                        28.60568414080963
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "Name": "Fairwinds Alumni Center"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -81.19871735572815,
                        28.605820719495703
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "Name": "Brighthouse Networks Stadium"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -81.19275748729706,
                        28.608246139002492
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "Name": "CREOL"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -81.19727164506912,
                        28.60117458966007
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "Name": "Parking Garage B"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -81.20035886764526,
                        28.596909765585636
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "Name": "Parking Garage A"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -81.20553016662598,
                        28.599787539971164
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "Name": "Parking Garage I"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -81.2047415971756,
                        28.601096877682878
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "Name": "Parking Garage H"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -81.20102941989899,
                        28.60474221400212
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "Name": "Parking Garage D"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -81.19720458984375,
                        28.605015373645646
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "Name": "Parking Garage C"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -81.19588494300842,
                        28.60222958293734
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "Name": "Libra Garage"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -81.1966949701309,
                        28.595977180221446
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "Name": "Parking Garage E"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -81.1952143907547,
                        28.606498900686596
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "Name": "Nicholson Fieldhouse"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -81.19425415992737,
                        28.60739842592858
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "Name": "Wayne Densch Sports Center"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -81.19423270225525,
                        28.60640941869682
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "Name": "Parking Garage G"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -81.19772493839264,
                        28.608707668800097
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "Name": "Parking Garage F"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -81.19648575782776,
                        28.608632317134926
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "Name": "Nike"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -81.19749426841736,
                        28.594552381048146
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "Name": "Neptune"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -81.19855642318726,
                        28.593900028534645
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "Name": "Hercules"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -81.19940936565399,
                        28.594286259392582
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "Name": "Libra"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -81.19830429553986,
                        28.598558254825686
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "marker-color": "#7e7e7e",
                    "marker-size": "medium",
                    "marker-symbol": "",
                    "Name": "Knights Pantry"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -81.19900971651077,
                        28.597613909153086
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "Name": "Apollo"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -81.2011206150055,
                        28.59820736428217
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "Name": "College of Arts and Humanities"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -81.20254755020142,
                        28.604407827954436
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "marker-color": "#7e7e7e",
                    "marker-size": "medium",
                    "marker-symbol": "",
                    "Name": "UCF LEAD Scholars Academy"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -81.19944155216217,
                        28.59777169318509
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "marker-color": "#7e7e7e",
                    "marker-size": "medium",
                    "marker-symbol": "",
                    "Name": "UCF Track and Soccer Field"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -81.19520902633667,
                        28.60752558332575
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "marker-color": "#7e7e7e",
                    "marker-size": "medium",
                    "marker-symbol": "",
                    "Name": "Lake Claire Recreational Area"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -81.20310008525847,
                        28.607238301579887
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "marker-color": "#7e7e7e",
                    "marker-size": "medium",
                    "marker-symbol": "",
                    "Name": "Lake Claire"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -81.20392620563506,
                        28.604308924835014
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "marker-color": "#7e7e7e",
                    "marker-size": "medium",
                    "marker-symbol": "",
                    "Name": "Intramural Fields"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -81.20266556739807,
                        28.592011244997607
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "marker-color": "#7e7e7e",
                    "marker-size": "medium",
                    "marker-symbol": "",
                    "Name": "Leisure Pool"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -81.1984196305275,
                        28.59545200855878
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "marker-color": "#7e7e7e",
                    "marker-size": "medium",
                    "marker-symbol": "",
                    "Name": "Reflection Pond"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -81.2019494175911,
                        28.599617984254262
                    ]
                }
            }
        ]
    }

    /*for(var i=0; i<geoJson.features.length; i++) {
        console.log(geoJson.features[i].geometry.coordinates[0]);

        var latLng = {
            lat: geoJson.features[i].geometry.coordinates[0],
            lng: geoJson.features[i].geometry.coordinates[1]
        }

        /*var marker = new google.maps.Marker({
            position: latLng,
            map: map,
            title: 'test',
            visible: true
        });

        console.log(marker);
    }*/
    // Load preset markers onto the map.
    map.data.addGeoJson(geoJson);

    // On the center of the map changing, check if the user
    // is still in bounds.
    google.maps.event.addListener(map,'center_changed',function() { checkBounds(); });
}

function checkBounds() { 

    var NORTHEAST_BOUND = {
        lat: 28.610801,
        lng: -81.187634
    }

    var SOUTHWEST_BOUND = {
        lat: 28.592263,
        lng: -81.207118
    }

    var allowedBounds = new google.maps.LatLngBounds(SOUTHWEST_BOUND, NORTHEAST_BOUND);

    // If the center of the map is no longer on the screen.
    if(! allowedBounds.contains(map.getCenter())) {
        var mapCenter = map.getCenter();
        var X = mapCenter.lng();
        var Y = mapCenter.lat();

        var AmaxX = allowedBounds.getNorthEast().lng();
        var AmaxY = allowedBounds.getNorthEast().lat();
        var AminX = allowedBounds.getSouthWest().lng();
        var AminY = allowedBounds.getSouthWest().lat();

        if (X < AminX) {X = AminX;}
        if (X > AmaxX) {X = AmaxX;}
        if (Y < AminY) {Y = AminY;}
        if (Y > AmaxY) {Y = AmaxY;}

        // Snap the map back to the allowed bounds.
        map.setCenter(new google.maps.LatLng(Y,X));
    }
}

