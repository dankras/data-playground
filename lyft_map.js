function initialize() {
  var data = [{"start": [37.781798, -122.411802], "end": [37.770946, -122.453888]}, {"start": [37.768747, -122.453066], "end": [37.752117, -122.419216]}, {"start": [37.792753, -122.40383], "end": [37.775006, -122.410084]}, {"start": [37.776306, -122.408412], "end": [37.774031, -122.398]}, {"start": [37.775855, -122.409645], "end": [37.790334, -122.405302]}, {"start": [37.770265, -122.45344], "end": [37.764933, -122.421485]}, {"start": [37.752819, -122.418271], "end": [37.770616, -122.45383]}, {"start": [37.769896, -122.453076], "end": [37.808459, -122.414171]}, {"start": [37.797262, -122.407124], "end": [37.770616, -122.45383]}, {"start": [37.770479, -122.453001], "end": [37.796202, -122.408615]}, {"start": [37.74792, -122.417618], "end": [37.775441, -122.409506]}, {"start": [37.748524, -122.418969], "end": [37.776725, -122.408198]}, {"start": [37.770616, -122.45383], "end": [37.748988, -122.418721]}, {"start": [37.748438, -122.418144], "end": [37.781551, -122.401797]}, {"start": [37.749138, -122.419253], "end": [37.774886, -122.410268]}, {"start": [37.776168, -122.422824], "end": [37.762226, -122.412806]}, {"start": [37.748241, -122.417818], "end": [37.781868, -122.401398]}, {"start": [37.749102, -122.419495], "end": [37.774715, -122.410437]}, {"start": [37.749344, -122.419589], "end": [37.774901, -122.409978]}, {"start": [37.748526, -122.419242], "end": [37.77522, -122.409785]}, {"start": [37.748984, -122.418789], "end": [37.798944, -122.407246]}, {"start": [37.747815, -122.418491], "end": [37.77522, -122.409785]}, {"start": [37.747895, -122.416925], "end": [37.774822, -122.4103]}, {"start": [37.74898, -122.418857], "end": [37.766151, -122.401705]}, {"start": [37.748212, -122.41906], "end": [37.781902, -122.401356]}, {"start": [37.748743, -122.418107], "end": [37.775, -122.410065]}, {"start": [37.789264, -122.408495], "end": [37.615223, -122.389979]}, {"start": [37.748509, -122.419203], "end": [37.789295, -122.408474]}, {"start": [37.7751, -122.409035], "end": [37.756946, -122.409845]}, {"start": [37.7752, -122.410039], "end": [37.749069, -122.41799]}, {"start": [37.748245, -122.417571], "end": [37.775, -122.410065]}, {"start": [37.780853, -122.408864], "end": [37.75053, -122.420376]}, {"start": [37.77547, -122.409866], "end": [37.748511, -122.419204]}, {"start": [37.748613, -122.419489], "end": [37.775, -122.410065]}, {"start": [37.748488, -122.419202], "end": [37.790168, -122.40887]}, {"start": [37.748978, -122.418891], "end": [37.795721, -122.405045]}, {"start": [37.782509, -122.400562], "end": [37.766108, -122.40196]}, {"start": [37.748932, -122.419693], "end": [37.790897, -122.418503]}, {"start": [37.74953, -122.419607], "end": [37.777055, -122.421324]}, {"start": [37.777084, -122.421557], "end": [37.748988, -122.419217]}, {"start": [37.758112, -122.42789], "end": [37.748613, -122.419489]}, {"start": [37.801969, -122.416262], "end": [37.748762, -122.419503]}, {"start": [37.74574, -122.42192], "end": [37.781955, -122.401341]}, {"start": [37.748495, -122.419203], "end": [37.77522, -122.409785]}, {"start": [37.77548, -122.409508], "end": [37.765019, -122.420502]}, {"start": [37.748315, -122.418005], "end": [37.615223, -122.389979]}, {"start": [37.747668, -122.418582], "end": [37.781868, -122.401398]}, {"start": [37.781206, -122.406683], "end": [37.748326, -122.447342]}, {"start": [37.748935, -122.419646], "end": [37.781968, -122.401273]}, {"start": [37.752381, -122.415827], "end": [37.73577, -122.416108]}, {"start": [37.77545, -122.409495], "end": [37.788439, -122.401778]}, {"start": [37.748493, -122.419202], "end": [37.77522, -122.409785]}, {"start": [37.782656, -122.400373], "end": [37.765413, -122.419855]}, {"start": [37.775651, -122.409241], "end": [37.748991, -122.419166]}, {"start": [37.787365, -122.40824], "end": [37.77525, -122.410366]}, {"start": [37.747837, -122.418436], "end": [37.615223, -122.389979]}, {"start": [37.748995, -122.419096], "end": [37.781922, -122.401383]}, {"start": [37.782466, -122.400619], "end": [37.748726, -122.419256]}, {"start": [37.775461, -122.409493], "end": [37.748827, -122.419263]}, {"start": [37.774833, -122.409892], "end": [37.748991, -122.419166]}, {"start": [37.74793, -122.418837], "end": [37.773659, -122.411824]}, {"start": [37.74898, -122.418857], "end": [37.775, -122.410065]}, {"start": [37.775394, -122.40993], "end": [37.77648, -122.395768]}, {"start": [37.745209, -122.420659], "end": [37.76806, -122.42916]}, {"start": [37.783774, -122.403309], "end": [37.777893, -122.437744]}, {"start": [37.767715, -122.429525], "end": [37.783305, -122.402718]}, {"start": [37.777599, -122.437642], "end": [37.752968, -122.418539]}, {"start": [37.748966, -122.419102], "end": [37.77522, -122.409785]}, {"start": [37.776626, -122.408057], "end": [37.748974, -122.419474]}, {"start": [37.745925, -122.420754], "end": [37.782422, -122.400675]}, {"start": [37.748995, -122.419097], "end": [37.77522, -122.409785]}, {"start": [37.765652, -122.41015], "end": [37.753876, -122.418351]}, {"start": [37.780982, -122.399792], "end": [37.748256, -122.419222]}, {"start": [37.748944, -122.419982], "end": [37.781955, -122.401341]}, {"start": [37.748966, -122.419102], "end": [37.77522, -122.409785]}, {"start": [37.748316, -122.41797], "end": [37.77522, -122.409785]}, {"start": [37.783028, -122.40614], "end": [37.756941, -122.420694]}, {"start": [37.748703, -122.419217], "end": [37.802152, -122.418018]}, {"start": [37.736479, -122.415421], "end": [37.749023, -122.418237]}, {"start": [37.748524, -122.418969], "end": [37.781496, -122.407596]}, {"start": [37.748995, -122.419095], "end": [37.615223, -122.389979]}, {"start": [37.748762, -122.419503], "end": [37.781208, -122.408411]}, {"start": [37.777611, -122.437547], "end": [37.798165, -122.40451]}, {"start": [37.781842, -122.407623], "end": [37.776688, -122.395555]}, {"start": [37.768087, -122.428997], "end": [37.748961, -122.419694]}, {"start": [37.801023, -122.421899], "end": [37.748988, -122.419217]}, {"start": [37.748526, -122.419242], "end": [37.781417, -122.4082]}, {"start": [37.781616, -122.407897], "end": [37.781616, -122.407897]}, {"start": [37.749648, -122.419002], "end": [37.781524, -122.408013]}, {"start": [37.793352, -122.412061], "end": [37.748988, -122.419217]}, {"start": [37.74896, -122.419718], "end": [37.798182, -122.404379]}, {"start": [37.798323, -122.403919], "end": [37.772181, -122.437582]}, {"start": [37.780952, -122.399755], "end": [37.748994, -122.419115]}, {"start": [37.781697, -122.407949], "end": [37.757501, -122.416802]}, {"start": [37.748987, -122.419234], "end": [37.615223, -122.389979]}, {"start": [37.781172, -122.408932], "end": [37.748999, -122.418562]}, {"start": [37.783435, -122.403519], "end": [37.749194, -122.419112]}, {"start": [37.782268, -122.407653], "end": [37.748798, -122.418996]}, {"start": [37.780461, -122.404506], "end": [37.749123, -122.419701]}, {"start": [37.768818, -122.420348], "end": [37.749194, -122.419112]}, {"start": [37.781496, -122.407596], "end": [37.79067, -122.41878]}, {"start": [37.784696, -122.417642], "end": [37.748613, -122.419489]}, {"start": [37.794984, -122.400341], "end": [37.784572, -122.417926]}, {"start": [37.790132, -122.405528], "end": [37.783137, -122.43098]}, {"start": [37.793926, -122.406037], "end": [37.749194, -122.419112]}, {"start": [37.790461, -122.400246], "end": [37.748771, -122.419392]}, {"start": [37.749123, -122.419701], "end": [37.786606, -122.399099]}, {"start": [37.749234, -122.419913], "end": [37.779675, -122.394425]}, {"start": [37.780821, -122.394421], "end": [37.794424, -122.392945]}, {"start": [37.749072, -122.419374], "end": [37.795784, -122.394278]}, {"start": [37.748524, -122.418969], "end": [37.789455, -122.407302]}, {"start": [37.748771, -122.419392], "end": [37.781105, -122.408371]}, {"start": [37.748794, -122.419083], "end": [37.771909, -122.414039]}, {"start": [37.776306, -122.408412], "end": [37.749082, -122.419106]}, {"start": [37.749123, -122.419701], "end": [37.791745, -122.399958]}, {"start": [37.749123, -122.419701], "end": [37.758232, -122.425896]}, {"start": [37.749123, -122.419701], "end": [37.781496, -122.407596]}, {"start": [37.748365, -122.418477], "end": [37.781534, -122.407838]}, {"start": [37.782414, -122.406617], "end": [37.748794, -122.419083]}, {"start": [37.748528, -122.419524], "end": [37.615223, -122.389979]}, {"start": [47.444532, -122.30035], "end": [47.61054, -122.334694]}, {"start": [47.610151, -122.333583], "end": [47.610739, -122.187574]}, {"start": [47.610778, -122.343879], "end": [47.621984, -122.348559]}, {"start": [47.620633, -122.361207], "end": [47.674236, -122.406375]}, {"start": [47.673444, -122.407459], "end": [47.622654, -122.348333]}, {"start": [47.610151, -122.333583], "end": [47.619439, -122.320882]}, {"start": [47.615256, -122.316873], "end": [47.611721, -122.336088]}, {"start": [37.749072, -122.419374], "end": [37.781802, -122.407048]}, {"start": [37.748524, -122.418969], "end": [37.759034, -122.43579]}, {"start": [37.781802, -122.407048], "end": [37.766617, -122.401921]}, {"start": [37.788099, -122.412388], "end": [37.752424, -122.418616]}, {"start": [37.748031, -122.417067], "end": [37.78141, -122.407548]}, {"start": [37.782732, -122.406492], "end": [37.79479, -122.400313]}, {"start": [37.749082, -122.419106], "end": [37.782732, -122.406492]}, {"start": [37.749202, -122.418984], "end": [37.781534, -122.407838]}, {"start": [37.781615, -122.408123], "end": [37.749072, -122.419374]}, {"start": [37.748771, -122.419392], "end": [37.711521, -122.386953]}, {"start": [37.781666, -122.407652], "end": [37.750774, -122.419704]}, {"start": [37.748528, -122.419524], "end": [37.757613, -122.432641]}, {"start": [37.78286, -122.406104], "end": [37.765725, -122.402024]}, {"start": [37.749072, -122.419374], "end": [37.78126, -122.408232]}, {"start": [37.748592, -122.418976], "end": [37.781534, -122.407838]}, {"start": [37.781802, -122.407048], "end": [37.749194, -122.419112]}, {"start": [37.74891, -122.419024], "end": [37.764302, -122.421707]}, {"start": [37.752622, -122.414364], "end": [37.76612, -122.401733]}, {"start": [37.772425, -122.490096], "end": [37.79483, -122.404677]}, {"start": [37.80753, -122.41784], "end": [37.749211, -122.418832]}, {"start": [37.765322, -122.469507], "end": [37.780958, -122.408632]}, {"start": [37.778443, -122.405164], "end": [37.757291, -122.41704]}, {"start": [37.783944, -122.408035], "end": [37.749082, -122.419106]}, {"start": [37.749082, -122.419106], "end": [37.784974, -122.427964]}, {"start": [37.785503, -122.42825], "end": [37.78176, -122.407933]}, {"start": [37.781692, -122.406729], "end": [37.759511, -122.434346]}, {"start": [37.749123, -122.419701], "end": [37.615223, -122.389979]}, {"start": [37.749123, -122.419701], "end": [37.781615, -122.408123]}, {"start": [37.800605, -122.414089], "end": [37.75935, -122.435598]}, {"start": [37.78352, -122.407513], "end": [37.800605, -122.414089]}, {"start": [37.74793, -122.418837], "end": [37.781434, -122.408099]}, {"start": [37.800389, -122.414487], "end": [37.782732, -122.406492]}, {"start": [37.744693, -122.421794], "end": [37.800911, -122.414505]}, {"start": [37.784091, -122.404081], "end": [37.779577, -122.398103]}, {"start": [37.748944, -122.419982], "end": [37.759647, -122.433733]}, {"start": [37.758245, -122.428382], "end": [37.802337, -122.400353]}, {"start": [37.748528, -122.419524], "end": [37.777893, -122.437744]}, {"start": [37.781228, -122.408605], "end": [37.752513, -122.418599]}, {"start": [37.748284, -122.419224], "end": [37.789667, -122.403881]}, {"start": [37.749123, -122.419701], "end": [37.735879, -122.416268]}, {"start": [37.749082, -122.419106], "end": [37.781105, -122.408371]}, {"start": [37.800753, -122.407461], "end": [37.778905, -122.398163]}, {"start": [37.748492, -122.419324], "end": [37.800649, -122.40761]}, {"start": [37.780903, -122.39947], "end": [37.748762, -122.419503]}, {"start": [37.775852, -122.408987], "end": [37.782439, -122.392779]}, {"start": [37.777114, -122.394984], "end": [37.748762, -122.419503]}, {"start": [37.776648, -122.394421], "end": [37.782732, -122.406492]}, {"start": [37.748771, -122.419392], "end": [37.781382, -122.408403]}, {"start": [37.782732, -122.406492], "end": [37.749123, -122.419701]}, {"start": [37.74891, -122.419024], "end": [37.615223, -122.389979]}, {"start": [37.784586, -122.407324], "end": [37.752513, -122.418599]}, {"start": [37.748771, -122.419392], "end": [37.781697, -122.407949]}, {"start": [37.781689, -122.407598], "end": [37.744972, -122.420473]}, {"start": [37.752251, -122.414447], "end": [37.767467, -122.428727]}, {"start": [37.766354, -122.429085], "end": [37.749194, -122.419112]}, {"start": [37.781666, -122.407652], "end": [37.75718, -122.419074]}, {"start": [37.777037, -122.443189], "end": [37.748794, -122.419083]}, {"start": [37.777873, -122.405614], "end": [37.77725, -122.443467]}, {"start": [37.780859, -122.408376], "end": [37.749082, -122.419106]}, {"start": [37.749123, -122.419701], "end": [37.784109, -122.410599]}, {"start": [37.784109, -122.410599], "end": [37.748794, -122.419083]}, {"start": [37.768361, -122.424215], "end": [37.749197, -122.418367]}, {"start": [37.748991, -122.419166], "end": [37.771586, -122.422618]}, {"start": [37.748762, -122.419503], "end": [37.781666, -122.407652]}, {"start": [37.781775, -122.407749], "end": [37.798026, -122.456275]}, {"start": [37.750816, -122.417641], "end": [37.761614, -122.404353]}, {"start": [37.749135, -122.418589], "end": [37.763351, -122.436089]}, {"start": [37.763536, -122.436599], "end": [37.750066, -122.418265]}, {"start": [37.748994, -122.419115], "end": [37.776244, -122.396123]}, {"start": [37.748762, -122.419503], "end": [37.756797, -122.420769]}, {"start": [37.777755, -122.394808], "end": [37.749082, -122.419106]}, {"start": [37.781227, -122.408611], "end": [37.749082, -122.419106]}, {"start": [37.749381, -122.418977], "end": [37.781364, -122.40802]}, {"start": [37.763536, -122.436599], "end": [37.749123, -122.419701]}, {"start": [37.795202, -122.393784], "end": [37.795916, -122.405079]}, {"start": [37.750362, -122.418764], "end": [37.760507, -122.412534]}, {"start": [37.74891, -122.419024], "end": [37.781534, -122.407838]}, {"start": [37.749194, -122.419112], "end": [37.781615, -122.408123]}, {"start": [37.753533, -122.418597], "end": [37.790252, -122.437496]}, {"start": [37.800118, -122.437853], "end": [37.748974, -122.419474]}]

  // style map
  var styles = [
    {
      stylers: [
        { visibility: 'simplified' },
        { gamma: 0.5 },
        { saturation: -100 },
        { weight: 0.5 }
      ]
    },
    {
      featureType: 'road',
      elementType: 'labels',
      stylers: [
        { visibility: 'on' }
      ]
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        { lightness: 100 },
        { visibility: "simplified" }
      ]
    }
  ];

  // set options
  var mapOptions = {
    zoom: 13,
    center: new google.maps.LatLng(37.748974, -122.419474),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: styles 
  };

  // construct map
  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  // current house
  var iconA = './images/icon_a.png';
  var myLatLngA = new google.maps.LatLng(37.748912, -122.419232);
  var beachMarkerA = new google.maps.Marker({
      position: myLatLngA,
      map: map,
      icon: iconA
  });

  // indiegogo office
  var iconB = './images/icon_b.png';
  var myLatLngB = new google.maps.LatLng(37.781534, -122.407838);
  var beachMarkerB = new google.maps.Marker({
      position: myLatLngB,
      map: map,
      icon: iconB
  });

  // old indiegogo office
  var iconC = './images/icon_c.png';
  var myLatLngC = new google.maps.LatLng(37.77486, -122.409637);
  var beachMarkerC = new google.maps.Marker({
      position: myLatLngC,
      map: map,
      icon: iconC
  });

  // old house
  var iconD = './images/icon_d.png';
  var myLatLngD = new google.maps.LatLng(37.770228, -122.453709);
  var beachMarkerD = new google.maps.Marker({
      position: myLatLngD,
      map: map,
      icon: iconD
  });

  // SFO
  var iconE = './images/icon_e.png';
  var myLatLngE = new google.maps.LatLng(37.615223, -122.389979);
  var beachMarkerE = new google.maps.Marker({
      position: myLatLngE,
      map: map,
      icon: iconE
  });
  
  // plot coordinates and lines
  for (var i = 0; i < data.length; i++) {
    var rideCoordinates = [
      new google.maps.LatLng(data[i]['start'][0], data[i]['start'][1]),
      new google.maps.LatLng(data[i]['end'][0], data[i]['end'][1])
    ];

    var ridePath = new google.maps.Polyline({
      path: rideCoordinates,
      geodesic: true,
      strokeColor: '#0066FF',
      strokeOpacity: 0.5,
      strokeWeight: 0.5
    });

    ridePath.setMap(map);
  }
}

google.maps.event.addDomListener(window, 'load', initialize);