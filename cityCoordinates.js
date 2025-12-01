const cityCoordinates = {
  "Abidjan": {
    "lat": 6.944149,
    "lng": -2.785978,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Abu Dhabi": {
    "lat": 24.453835,
    "lng": 54.377401,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Nagoya": {
    "lat": 35.185105,
    "lng": 136.899844,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Konan",
        "distance": 17.98
      },
      {
        "name": "Gifu",
        "distance": 29.24
      },
      {
        "name": "Kakamigahara",
        "distance": 24.3
      }
    ]
  },
  "Konan": {
    "lat": 35.344508,
    "lng": 136.866742,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Nagoya",
        "distance": 17.98
      },
      {
        "name": "Gifu",
        "distance": 12.85
      },
      {
        "name": "Kakamigahara",
        "distance": 6.34
      }
    ]
  },
  "Decatur": {
    "lat": 34.599188,
    "lng": -86.961176,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Hartselle",
        "distance": 16.15
      }
    ]
  },
  "Fultondale": {
    "lat": 33.605463,
    "lng": -86.802449,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Hartselle": {
    "lat": 34.454364,
    "lng": -86.947498,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Decatur",
        "distance": 16.15
      }
    ]
  },
  "Anchorage": {
    "lat": 61.17539,
    "lng": -149.966924,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Edmonton": {
    "lat": 53.546205,
    "lng": -113.491241,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Stony Plain",
        "distance": 34.0
      }
    ]
  },
  "Calgary": {
    "lat": 51.045606,
    "lng": -114.057541,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Banff": {
    "lat": 51.175076,
    "lng": -115.572077,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Lloydminster": {
    "lat": 53.279995,
    "lng": -110.00885,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Stony Plain": {
    "lat": 53.528986,
    "lng": -114.004873,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Edmonton",
        "distance": 34.0
      }
    ]
  },
  "Amman": {
    "lat": 16.816384,
    "lng": 44.540852,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "malaga": {
    "lat": 36.721303,
    "lng": -4.421637,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "seville": {
    "lat": 37.38863,
    "lng": -5.99534,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "mairena-del-aljarafe",
        "distance": 7.58
      }
    ]
  },
  "mairena-del-aljarafe": {
    "lat": 37.344491,
    "lng": -6.060677,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "seville",
        "distance": 7.58
      }
    ]
  },
  "ankara": {
    "lat": 39.920776,
    "lng": 32.85405,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "gravina-in-puglia": {
    "lat": 40.82069,
    "lng": 16.427384,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "zaragoza": {
    "lat": 41.652134,
    "lng": -0.880943,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Ararat Province": {
    "lat": 42.068158,
    "lng": -70.153359,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "holywood": {
    "lat": 54.646842,
    "lng": -5.793606,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "belfast",
        "distance": 10.43
      }
    ]
  },
  "Phoenix": {
    "lat": 33.665805,
    "lng": -111.973625,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Tempe",
        "distance": 27.09
      },
      {
        "name": "Arizona",
        "distance": 0.0
      },
      {
        "name": "Guadalupe",
        "distance": 34.44
      },
      {
        "name": "Mesa",
        "distance": 30.42
      }
    ]
  },
  "Tucson": {
    "lat": 32.235927,
    "lng": -110.885917,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Vail",
        "distance": 30.75
      }
    ]
  },
  "Tempe": {
    "lat": 33.422212,
    "lng": -111.968054,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Phoenix",
        "distance": 27.09
      },
      {
        "name": "Arizona",
        "distance": 27.09
      },
      {
        "name": "Chandler",
        "distance": 14.06
      },
      {
        "name": "Gilbert",
        "distance": 27.0
      },
      {
        "name": "Guadalupe",
        "distance": 9.55
      },
      {
        "name": "Mesa",
        "distance": 11.63
      },
      {
        "name": "Queen Creek",
        "distance": 37.91
      }
    ]
  },
  "Arizona": {
    "lat": 33.665805,
    "lng": -111.973625,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Phoenix",
        "distance": 0.0
      },
      {
        "name": "Tempe",
        "distance": 27.09
      },
      {
        "name": "Guadalupe",
        "distance": 34.44
      },
      {
        "name": "Mesa",
        "distance": 30.42
      }
    ]
  },
  "Chandler": {
    "lat": 33.304788,
    "lng": -111.9119,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Tempe",
        "distance": 14.06
      },
      {
        "name": "Gilbert",
        "distance": 21.45
      },
      {
        "name": "Guadalupe",
        "distance": 6.76
      },
      {
        "name": "Mesa",
        "distance": 13.8
      },
      {
        "name": "Queen Creek",
        "distance": 27.19
      }
    ]
  },
  "Gilbert": {
    "lat": 33.354489,
    "lng": -111.688766,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Tempe",
        "distance": 27.0
      },
      {
        "name": "Chandler",
        "distance": 21.45
      },
      {
        "name": "Guadalupe",
        "distance": 19.0
      },
      {
        "name": "Mesa",
        "distance": 15.82
      },
      {
        "name": "Queen Creek",
        "distance": 15.26
      }
    ]
  },
  "Buckeye": {
    "lat": 33.37032,
    "lng": -112.583776,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Flagstaff": {
    "lat": 35.198752,
    "lng": -111.651822,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Sedona",
        "distance": 38.02
      }
    ]
  },
  "Guadalupe": {
    "lat": 33.363471,
    "lng": -111.89307,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Phoenix",
        "distance": 34.44
      },
      {
        "name": "Tempe",
        "distance": 9.55
      },
      {
        "name": "Arizona",
        "distance": 34.44
      },
      {
        "name": "Chandler",
        "distance": 6.76
      },
      {
        "name": "Gilbert",
        "distance": 19.0
      },
      {
        "name": "Mesa",
        "distance": 7.35
      },
      {
        "name": "Queen Creek",
        "distance": 28.48
      }
    ]
  },
  "Mesa": {
    "lat": 33.414788,
    "lng": -111.843105,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Phoenix",
        "distance": 30.42
      },
      {
        "name": "Tempe",
        "distance": 11.63
      },
      {
        "name": "Arizona",
        "distance": 30.42
      },
      {
        "name": "Chandler",
        "distance": 13.8
      },
      {
        "name": "Gilbert",
        "distance": 15.82
      },
      {
        "name": "Guadalupe",
        "distance": 7.35
      },
      {
        "name": "Queen Creek",
        "distance": 28.62
      }
    ]
  },
  "Queen Creek": {
    "lat": 33.224646,
    "lng": -111.635565,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Tempe",
        "distance": 37.91
      },
      {
        "name": "Chandler",
        "distance": 27.19
      },
      {
        "name": "Gilbert",
        "distance": 15.26
      },
      {
        "name": "Guadalupe",
        "distance": 28.48
      },
      {
        "name": "Mesa",
        "distance": 28.62
      }
    ]
  },
  "Sedona": {
    "lat": 34.868861,
    "lng": -111.761439,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Flagstaff",
        "distance": 38.02
      }
    ]
  },
  "Vail": {
    "lat": 32.01007,
    "lng": -110.697528,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Tucson",
        "distance": 30.75
      }
    ]
  },
  "Fayetteville": {
    "lat": 35.468427,
    "lng": -94.355335,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "gijon": {
    "lat": 43.544942,
    "lng": -5.66275,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "oviedo",
        "distance": 25.28
      }
    ]
  },
  "oviedo": {
    "lat": 43.361863,
    "lng": -5.848358,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "gijon",
        "distance": 25.28
      }
    ]
  },
  "auckland": {
    "lat": -36.852095,
    "lng": 174.76318,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Watson": {
    "lat": -35.234823,
    "lng": 149.159446,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Canberra",
        "distance": 8.75
      }
    ]
  },
  "Canberra": {
    "lat": -35.297591,
    "lng": 149.101268,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Watson",
        "distance": 8.75
      }
    ]
  },
  "lyon": {
    "lat": 45.757814,
    "lng": 4.832011,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "villeurbanne",
        "distance": 4.59
      }
    ]
  },
  "villeurbanne": {
    "lat": 45.773357,
    "lng": 4.886845,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "lyon",
        "distance": 4.59
      }
    ]
  },
  "annecy": {
    "lat": 45.899235,
    "lng": 6.128885,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "genissieux": {
    "lat": 45.0848,
    "lng": 5.08622,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "meylan": {
    "lat": 45.209737,
    "lng": 5.778361,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "montbonnot-saint-martin",
        "distance": 2.66
      }
    ]
  },
  "montbonnot-saint-martin": {
    "lat": 45.22645,
    "lng": 5.80266,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "meylan",
        "distance": 2.66
      }
    ]
  },
  "karlsruhe": {
    "lat": 49.00687,
    "lng": 8.40342,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "ettlingen",
        "distance": 7.28
      },
      {
        "name": "sankt-leon-rot",
        "distance": 32.27
      }
    ]
  },
  "ludwigsburg": {
    "lat": 48.895394,
    "lng": 9.189515,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "stuttgart",
        "distance": 13.02
      }
    ]
  },
  "alpirsbach": {
    "lat": 48.345602,
    "lng": 8.403308,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "offenburg",
        "distance": 36.67
      }
    ]
  },
  "eningen": {
    "lat": 48.486379,
    "lng": 9.258426,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "stuttgart",
        "distance": 32.98
      },
      {
        "name": "tubingen",
        "distance": 15.56
      }
    ]
  },
  "ettlingen": {
    "lat": 48.941419,
    "lng": 8.407635,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "karlsruhe",
        "distance": 7.28
      },
      {
        "name": "sankt-leon-rot",
        "distance": 38.82
      }
    ]
  },
  "heidelberg": {
    "lat": 49.409358,
    "lng": 8.694724,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "mannheim",
        "distance": 18.69
      },
      {
        "name": "sankt-leon-rot",
        "distance": 17.25
      },
      {
        "name": "worms",
        "distance": 34.35
      }
    ]
  },
  "mannheim": {
    "lat": 49.489291,
    "lng": 8.46731,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "heidelberg",
        "distance": 18.69
      },
      {
        "name": "sankt-leon-rot",
        "distance": 26.51
      },
      {
        "name": "worms",
        "distance": 17.42
      }
    ]
  },
  "offenburg": {
    "lat": 48.469598,
    "lng": 7.942924,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "alpirsbach",
        "distance": 36.67
      },
      {
        "name": "strasbourg",
        "distance": 19.08
      }
    ]
  },
  "sankt-leon-rot": {
    "lat": 49.26708,
    "lng": 8.599923,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "karlsruhe",
        "distance": 32.27
      },
      {
        "name": "ettlingen",
        "distance": 38.82
      },
      {
        "name": "heidelberg",
        "distance": 17.25
      },
      {
        "name": "mannheim",
        "distance": 26.51
      }
    ]
  },
  "stuttgart": {
    "lat": 48.778449,
    "lng": 9.180013,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "ludwigsburg",
        "distance": 13.02
      },
      {
        "name": "eningen",
        "distance": 32.98
      },
      {
        "name": "tubingen",
        "distance": 30.17
      }
    ]
  },
  "tubingen": {
    "lat": 48.520326,
    "lng": 9.053596,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "eningen",
        "distance": 15.56
      },
      {
        "name": "stuttgart",
        "distance": 30.17
      }
    ]
  },
  "ummendorf": {
    "lat": 48.062665,
    "lng": 9.830392,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Mexicali": {
    "lat": 32.640525,
    "lng": -115.474899,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Bangkok": {
    "lat": 13.752494,
    "lng": 100.493509,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Pak Kret",
        "distance": 17.21
      }
    ]
  },
  "banskobystricky-kraj": {
    "lat": 48.738389,
    "lng": 19.15858,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Banten": {
    "lat": -6.44538,
    "lng": 106.137559,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "donostia-san-sebastian": {
    "lat": 43.322422,
    "lng": -1.983889,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "bath": {
    "lat": 51.381386,
    "lng": -2.359696,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "corston",
        "distance": 5.53
      },
      {
        "name": "bristol",
        "distance": 18.34
      },
      {
        "name": "avon",
        "distance": 26.7
      },
      {
        "name": "trowbridge",
        "distance": 13.11
      },
      {
        "name": "winsley",
        "distance": 5.7
      }
    ]
  },
  "corston": {
    "lat": 51.374858,
    "lng": -2.438715,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "bath",
        "distance": 5.53
      },
      {
        "name": "bristol",
        "distance": 14.07
      },
      {
        "name": "avon",
        "distance": 22.52
      },
      {
        "name": "trowbridge",
        "distance": 17.66
      },
      {
        "name": "winsley",
        "distance": 10.58
      }
    ]
  },
  "munich": {
    "lat": 48.137108,
    "lng": 11.575382,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "hohenkirchen-siegertsbrunn",
        "distance": 16.93
      },
      {
        "name": "oberhaching",
        "distance": 12.43
      },
      {
        "name": "planegg",
        "distance": 11.97
      },
      {
        "name": "zorneding",
        "distance": 19.61
      },
      {
        "name": "munchen",
        "distance": 0.0
      }
    ]
  },
  "bamberg": {
    "lat": 49.891604,
    "lng": 10.886848,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "erlangen",
        "distance": 34.31
      }
    ]
  },
  "burgthann": {
    "lat": 49.357036,
    "lng": 11.31696,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "erlangen",
        "distance": 35.42
      },
      {
        "name": "furth",
        "distance": 29.75
      }
    ]
  },
  "erlangen": {
    "lat": 49.589157,
    "lng": 10.981207,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "bamberg",
        "distance": 34.31
      },
      {
        "name": "burgthann",
        "distance": 35.42
      },
      {
        "name": "furth",
        "distance": 11.3
      }
    ]
  },
  "furth": {
    "lat": 49.488571,
    "lng": 10.95872,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "burgthann",
        "distance": 29.75
      },
      {
        "name": "erlangen",
        "distance": 11.3
      }
    ]
  },
  "hohenkirchen-siegertsbrunn": {
    "lat": 48.019794,
    "lng": 11.72058,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "munich",
        "distance": 16.93
      },
      {
        "name": "oberhaching",
        "distance": 9.27
      },
      {
        "name": "planegg",
        "distance": 24.07
      },
      {
        "name": "zorneding",
        "distance": 10.76
      },
      {
        "name": "munchen",
        "distance": 16.93
      }
    ]
  },
  "munnerstadt": {
    "lat": 50.249044,
    "lng": 10.194263,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "oberhaching": {
    "lat": 48.026185,
    "lng": 11.596249,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "munich",
        "distance": 12.43
      },
      {
        "name": "hohenkirchen-siegertsbrunn",
        "distance": 9.27
      },
      {
        "name": "planegg",
        "distance": 15.56
      },
      {
        "name": "zorneding",
        "distance": 18.4
      },
      {
        "name": "munchen",
        "distance": 12.43
      }
    ]
  },
  "planegg": {
    "lat": 48.103742,
    "lng": 11.422003,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "munich",
        "distance": 11.97
      },
      {
        "name": "hohenkirchen-siegertsbrunn",
        "distance": 24.07
      },
      {
        "name": "oberhaching",
        "distance": 15.56
      },
      {
        "name": "zorneding",
        "distance": 30.2
      },
      {
        "name": "munchen",
        "distance": 11.97
      }
    ]
  },
  "regensburg": {
    "lat": 49.019533,
    "lng": 12.097487,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "zorneding": {
    "lat": 48.084881,
    "lng": 11.827673,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "munich",
        "distance": 19.61
      },
      {
        "name": "hohenkirchen-siegertsbrunn",
        "distance": 10.76
      },
      {
        "name": "oberhaching",
        "distance": 18.4
      },
      {
        "name": "planegg",
        "distance": 30.2
      },
      {
        "name": "munchen",
        "distance": 19.61
      }
    ]
  },
  "munchen": {
    "lat": 48.137108,
    "lng": 11.575382,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "munich",
        "distance": 0.0
      },
      {
        "name": "hohenkirchen-siegertsbrunn",
        "distance": 16.93
      },
      {
        "name": "oberhaching",
        "distance": 12.43
      },
      {
        "name": "planegg",
        "distance": 11.97
      },
      {
        "name": "zorneding",
        "distance": 19.61
      }
    ]
  },
  "Beijing": {
    "lat": 39.905714,
    "lng": 116.391297,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "belfast": {
    "lat": 54.596391,
    "lng": -5.930183,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "holywood",
        "distance": 10.43
      }
    ]
  },
  "slough": {
    "lat": 51.521649,
    "lng": -0.618329,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "windsor",
        "distance": 12.69
      },
      {
        "name": "runcorn",
        "distance": 14.8
      },
      {
        "name": "marlow",
        "distance": 12.31
      },
      {
        "name": "london",
        "distance": 33.02
      },
      {
        "name": "croydon",
        "distance": 38.35
      },
      {
        "name": "brentford",
        "distance": 20.9
      },
      {
        "name": "bromley",
        "distance": 33.02
      },
      {
        "name": "twickenham",
        "distance": 21.75
      },
      {
        "name": "uxbridge",
        "distance": 9.8
      },
      {
        "name": "wembley",
        "distance": 23.74
      },
      {
        "name": "aldershot",
        "distance": 31.89
      },
      {
        "name": "farnborough",
        "distance": 27.23
      },
      {
        "name": "hook",
        "distance": 34.92
      },
      {
        "name": "watford",
        "distance": 21.39
      },
      {
        "name": "guildford",
        "distance": 31.96
      },
      {
        "name": "godalming",
        "distance": 37.35
      },
      {
        "name": "surrey-research-park",
        "distance": 31.22
      },
      {
        "name": "woking",
        "distance": 22.81
      },
      {
        "name": "epsom",
        "distance": 32.13
      },
      {
        "name": "farnham",
        "distance": 36.3
      },
      {
        "name": "walton-on-thames",
        "distance": 20.44
      }
    ]
  },
  "windsor": {
    "lat": 51.530396,
    "lng": -0.801166,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "slough",
        "distance": 12.69
      },
      {
        "name": "runcorn",
        "distance": 27.08
      },
      {
        "name": "marlow",
        "distance": 4.91
      },
      {
        "name": "brentford",
        "distance": 33.54
      },
      {
        "name": "twickenham",
        "distance": 34.04
      },
      {
        "name": "uxbridge",
        "distance": 22.16
      },
      {
        "name": "wembley",
        "distance": 36.18
      },
      {
        "name": "aldershot",
        "distance": 31.36
      },
      {
        "name": "farnborough",
        "distance": 26.72
      },
      {
        "name": "hook",
        "distance": 29.08
      },
      {
        "name": "tadley",
        "distance": 31.76
      },
      {
        "name": "watford",
        "distance": 31.27
      },
      {
        "name": "guildford",
        "distance": 36.4
      },
      {
        "name": "surrey-research-park",
        "distance": 34.69
      },
      {
        "name": "woking",
        "distance": 28.88
      },
      {
        "name": "farnham",
        "distance": 35.05
      },
      {
        "name": "walton-on-thames",
        "distance": 30.94
      }
    ]
  },
  "berlin": {
    "lat": 52.517389,
    "lng": 13.395131,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "spreenhagen",
        "distance": 38.28
      }
    ]
  },
  "concepcion": {
    "lat": -36.82707,
    "lng": -73.050206,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "karlshamn": {
    "lat": 56.170172,
    "lng": 14.863128,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "ronneby",
        "distance": 25.93
      },
      {
        "name": "bromolla",
        "distance": 20.29
      }
    ]
  },
  "karlskrona": {
    "lat": 56.162107,
    "lng": 15.586642,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "ronneby",
        "distance": 19.95
      }
    ]
  },
  "ronneby": {
    "lat": 56.210042,
    "lng": 15.276036,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "karlshamn",
        "distance": 25.93
      },
      {
        "name": "karlskrona",
        "distance": 19.95
      }
    ]
  },
  "Bogota": {
    "lat": 4.653382,
    "lng": -74.083633,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Cundinamarca",
        "distance": 39.63
      }
    ]
  },
  "runcorn": {
    "lat": 51.466484,
    "lng": -0.423695,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "slough",
        "distance": 14.8
      },
      {
        "name": "windsor",
        "distance": 27.08
      },
      {
        "name": "marlow",
        "distance": 27.11
      },
      {
        "name": "london",
        "distance": 19.53
      },
      {
        "name": "croydon",
        "distance": 23.55
      },
      {
        "name": "brentford",
        "distance": 7.41
      },
      {
        "name": "bromley",
        "distance": 19.53
      },
      {
        "name": "twickenham",
        "distance": 6.97
      },
      {
        "name": "uxbridge",
        "distance": 9.6
      },
      {
        "name": "wembley",
        "distance": 14.09
      },
      {
        "name": "aldershot",
        "distance": 33.73
      },
      {
        "name": "farnborough",
        "distance": 30.04
      },
      {
        "name": "watford",
        "distance": 21.09
      },
      {
        "name": "guildford",
        "distance": 27.69
      },
      {
        "name": "godalming",
        "distance": 33.92
      },
      {
        "name": "surrey-research-park",
        "distance": 28.38
      },
      {
        "name": "woking",
        "distance": 18.69
      },
      {
        "name": "caterham",
        "distance": 31.59
      },
      {
        "name": "epsom",
        "distance": 18.4
      },
      {
        "name": "farnham",
        "distance": 38.19
      },
      {
        "name": "walton-on-thames",
        "distance": 8.99
      }
    ]
  },
  "malyi": {
    "lat": 48.01451,
    "lng": 20.827613,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "besancon": {
    "lat": 47.238022,
    "lng": 6.024362,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "spreenhagen": {
    "lat": 52.341236,
    "lng": 13.880304,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "berlin",
        "distance": 38.28
      }
    ]
  },
  "brasov-county": {
    "lat": 45.642297,
    "lng": 25.588939,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "bratislava": {
    "lat": 48.151699,
    "lng": 17.109306,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "bratislavsky-kraj",
        "distance": 1.7
      }
    ]
  },
  "bratislavsky-kraj": {
    "lat": 48.155918,
    "lng": 17.131354,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "bratislava",
        "distance": 1.7
      }
    ]
  },
  "bremen": {
    "lat": 53.07582,
    "lng": 8.807165,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "pencoed": {
    "lat": 51.525612,
    "lng": -3.506453,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "caerphilly",
        "distance": 27.92
      },
      {
        "name": "cardiff",
        "distance": 23.17
      },
      {
        "name": "abercynon",
        "distance": 18.81
      },
      {
        "name": "swansea",
        "distance": 32.12
      }
    ]
  },
  "brighton": {
    "lat": 50.821463,
    "lng": -0.140056,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "hove",
        "distance": 2.74
      },
      {
        "name": "brighton-and-hove",
        "distance": 2.74
      },
      {
        "name": "eastbourne",
        "distance": 30.03
      },
      {
        "name": "falmer",
        "distance": 6.3
      },
      {
        "name": "hailsham",
        "distance": 29.37
      },
      {
        "name": "horsham",
        "distance": 29.96
      },
      {
        "name": "shoreham-by-sea",
        "distance": 9.53
      }
    ]
  },
  "hove": {
    "lat": 50.845317,
    "lng": -0.149747,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "brighton",
        "distance": 2.74
      },
      {
        "name": "brighton-and-hove",
        "distance": 0.0
      },
      {
        "name": "eastbourne",
        "distance": 31.32
      },
      {
        "name": "falmer",
        "distance": 5.0
      },
      {
        "name": "hailsham",
        "distance": 29.74
      },
      {
        "name": "horsham",
        "distance": 27.29
      },
      {
        "name": "shoreham-by-sea",
        "distance": 8.89
      }
    ]
  },
  "brighton-and-hove": {
    "lat": 50.845317,
    "lng": -0.149747,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "brighton",
        "distance": 2.74
      },
      {
        "name": "hove",
        "distance": 0.0
      },
      {
        "name": "eastbourne",
        "distance": 31.32
      },
      {
        "name": "falmer",
        "distance": 5.0
      },
      {
        "name": "hailsham",
        "distance": 29.74
      },
      {
        "name": "horsham",
        "distance": 27.29
      },
      {
        "name": "shoreham-by-sea",
        "distance": 8.89
      }
    ]
  },
  "bristol": {
    "lat": 51.453802,
    "lng": -2.597298,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "bath",
        "distance": 18.34
      },
      {
        "name": "corston",
        "distance": 14.07
      },
      {
        "name": "avon",
        "distance": 8.45
      },
      {
        "name": "trowbridge",
        "distance": 31.39
      },
      {
        "name": "winsley",
        "distance": 24.02
      }
    ]
  },
  "avon": {
    "lat": 51.498926,
    "lng": -2.695544,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "bath",
        "distance": 26.7
      },
      {
        "name": "corston",
        "distance": 22.52
      },
      {
        "name": "bristol",
        "distance": 8.45
      },
      {
        "name": "caerphilly",
        "distance": 38.53
      },
      {
        "name": "cardiff",
        "distance": 33.54
      },
      {
        "name": "trowbridge",
        "distance": 39.78
      },
      {
        "name": "winsley",
        "distance": 32.39
      }
    ]
  },
  "Vancouver": {
    "lat": 45.669329,
    "lng": -122.553628,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Portland",
        "distance": 19.27
      },
      {
        "name": "Beaverton",
        "distance": 28.24
      },
      {
        "name": "Gresham",
        "distance": 21.25
      },
      {
        "name": "Oregon",
        "distance": 31.19
      },
      {
        "name": "Oregon City",
        "distance": 34.94
      }
    ]
  },
  "Burnaby": {
    "lat": 49.24338,
    "lng": -122.972545,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "New Westminster",
        "distance": 6.05
      },
      {
        "name": "Coquitlam",
        "distance": 13.78
      },
      {
        "name": "Langley",
        "distance": 27.69
      },
      {
        "name": "Port Moody",
        "distance": 11.25
      },
      {
        "name": "White Rock",
        "distance": 27.55
      }
    ]
  },
  "Victoria": {
    "lat": -36.59861,
    "lng": 144.678005,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Kelowna": {
    "lat": 49.887918,
    "lng": -119.495902,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "British Columbia": {
    "lat": 55.001251,
    "lng": -125.002441,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "New Westminster": {
    "lat": 49.206773,
    "lng": -122.910882,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Burnaby",
        "distance": 6.05
      },
      {
        "name": "Coquitlam",
        "distance": 12.13
      },
      {
        "name": "Langley",
        "distance": 21.71
      },
      {
        "name": "Port Moody",
        "distance": 10.26
      },
      {
        "name": "White Rock",
        "distance": 21.97
      }
    ]
  },
  "Coquitlam": {
    "lat": 49.284296,
    "lng": -122.793281,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Burnaby",
        "distance": 13.78
      },
      {
        "name": "New Westminster",
        "distance": 12.13
      },
      {
        "name": "Langley",
        "distance": 22.37
      },
      {
        "name": "Port Moody",
        "distance": 2.63
      },
      {
        "name": "White Rock",
        "distance": 29.0
      }
    ]
  },
  "Langley": {
    "lat": 49.103929,
    "lng": -122.657047,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Burnaby",
        "distance": 27.69
      },
      {
        "name": "New Westminster",
        "distance": 21.71
      },
      {
        "name": "Coquitlam",
        "distance": 22.37
      },
      {
        "name": "Port Moody",
        "distance": 23.45
      },
      {
        "name": "White Rock",
        "distance": 13.61
      }
    ]
  },
  "Port Moody": {
    "lat": 49.282198,
    "lng": -122.829355,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Burnaby",
        "distance": 11.25
      },
      {
        "name": "New Westminster",
        "distance": 10.26
      },
      {
        "name": "Coquitlam",
        "distance": 2.63
      },
      {
        "name": "Langley",
        "distance": 23.45
      },
      {
        "name": "White Rock",
        "distance": 28.85
      }
    ]
  },
  "White Rock": {
    "lat": 49.023536,
    "lng": -122.797924,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Burnaby",
        "distance": 27.55
      },
      {
        "name": "New Westminster",
        "distance": 21.97
      },
      {
        "name": "Coquitlam",
        "distance": 29.0
      },
      {
        "name": "Langley",
        "distance": 13.61
      },
      {
        "name": "Port Moody",
        "distance": 28.85
      }
    ]
  },
  "rennes": {
    "lat": 48.111339,
    "lng": -1.68002,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "brussels": {
    "lat": 50.846557,
    "lng": 4.351697,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "dilbeek",
        "distance": 6.05
      },
      {
        "name": "mechelen",
        "distance": 22.11
      }
    ]
  },
  "bucharest": {
    "lat": 44.436141,
    "lng": 26.10272,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "pantelimon",
        "distance": 8.19
      }
    ]
  },
  "marlow": {
    "lat": 51.571871,
    "lng": -0.776965,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "slough",
        "distance": 12.31
      },
      {
        "name": "windsor",
        "distance": 4.91
      },
      {
        "name": "runcorn",
        "distance": 27.11
      },
      {
        "name": "brentford",
        "distance": 32.9
      },
      {
        "name": "twickenham",
        "distance": 34.03
      },
      {
        "name": "uxbridge",
        "distance": 20.63
      },
      {
        "name": "wembley",
        "distance": 34.42
      },
      {
        "name": "aldershot",
        "distance": 35.87
      },
      {
        "name": "farnborough",
        "distance": 31.18
      },
      {
        "name": "hook",
        "distance": 33.99
      },
      {
        "name": "tadley",
        "distance": 36.13
      },
      {
        "name": "watford",
        "distance": 27.91
      },
      {
        "name": "guildford",
        "distance": 39.97
      },
      {
        "name": "surrey-research-park",
        "distance": 38.49
      },
      {
        "name": "woking",
        "distance": 31.89
      },
      {
        "name": "farnham",
        "distance": 39.69
      },
      {
        "name": "walton-on-thames",
        "distance": 32.25
      }
    ]
  },
  "padbury": {
    "lat": 51.969886,
    "lng": -0.950058,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "milton-keynes",
        "distance": 15.24
      },
      {
        "name": "oxford",
        "distance": 25.57
      },
      {
        "name": "banbury",
        "distance": 28.53
      },
      {
        "name": "charlbury",
        "distance": 37.9
      }
    ]
  },
  "budapest": {
    "lat": 47.497879,
    "lng": 19.040238,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Mar del Plata": {
    "lat": -37.997617,
    "lng": -57.548208,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Buenos Aires": {
    "lat": -34.609558,
    "lng": -58.38879,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "BMS",
        "distance": 0.0
      }
    ]
  },
  "AAS": {
    "lat": -27.506508,
    "lng": -58.544252,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "BMS": {
    "lat": -34.609558,
    "lng": -58.38879,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Buenos Aires",
        "distance": 0.0
      }
    ]
  },
  "Busan": {
    "lat": 35.179953,
    "lng": 129.075236,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "caerphilly": {
    "lat": 51.672381,
    "lng": -3.178394,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "pencoed",
        "distance": 27.92
      },
      {
        "name": "avon",
        "distance": 38.53
      },
      {
        "name": "cardiff",
        "distance": 21.21
      },
      {
        "name": "abercynon",
        "distance": 10.0
      }
    ]
  },
  "Calabarzon": {
    "lat": 14.165831,
    "lng": 121.353558,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "San Francisco": {
    "lat": 37.809749,
    "lng": -122.410449,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "San Mateo",
        "distance": 28.03
      },
      {
        "name": "Oakland",
        "distance": 11.79
      },
      {
        "name": "Redwood City",
        "distance": 39.23
      },
      {
        "name": "Berkeley",
        "distance": 14.09
      },
      {
        "name": "Burlingame",
        "distance": 23.97
      },
      {
        "name": "Foster City",
        "distance": 30.43
      },
      {
        "name": "San Rafael",
        "distance": 24.54
      },
      {
        "name": "Alameda",
        "distance": 14.09
      },
      {
        "name": "El Cerrito",
        "distance": 15.15
      },
      {
        "name": "Walnut Creek",
        "distance": 32.28
      },
      {
        "name": "Sausalito",
        "distance": 9.61
      },
      {
        "name": "South San Francisco",
        "distance": 18.19
      }
    ]
  },
  "Los Angeles": {
    "lat": 34.627475,
    "lng": -118.093976,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Irvine": {
    "lat": 33.679845,
    "lng": -117.85641,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Lake Forest",
        "distance": 15.3
      },
      {
        "name": "Long Beach",
        "distance": 31.8
      },
      {
        "name": "Santa Ana",
        "distance": 9.51
      },
      {
        "name": "City of Industry",
        "distance": 39.73
      },
      {
        "name": "Huntington Beach",
        "distance": 17.97
      },
      {
        "name": "San Clemente",
        "distance": 36.08
      },
      {
        "name": "Aliso Viejo",
        "distance": 16.71
      },
      {
        "name": "Buena Park",
        "distance": 24.01
      },
      {
        "name": "Corona",
        "distance": 36.1
      },
      {
        "name": "Cypress",
        "distance": 20.56
      },
      {
        "name": "Downey",
        "distance": 38.49
      },
      {
        "name": "Garden Grove",
        "distance": 13.43
      },
      {
        "name": "Lakewood",
        "distance": 35.09
      },
      {
        "name": "Rancho Santa Margarita",
        "distance": 23.86
      }
    ]
  },
  "San Diego": {
    "lat": 32.997616,
    "lng": -117.039972,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Carlsbad",
        "distance": 29.13
      },
      {
        "name": "Encinitas",
        "distance": 24.01
      },
      {
        "name": "Newport Beach",
        "distance": 34.12
      },
      {
        "name": "Chula Vista",
        "distance": 39.97
      }
    ]
  },
  "San Mateo": {
    "lat": 37.567731,
    "lng": -122.321504,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "San Francisco",
        "distance": 28.03
      },
      {
        "name": "Oakland",
        "distance": 31.3
      },
      {
        "name": "Redwood City",
        "distance": 11.98
      },
      {
        "name": "Berkeley",
        "distance": 35.04
      },
      {
        "name": "Mountain View",
        "distance": 28.9
      },
      {
        "name": "Burlingame",
        "distance": 5.77
      },
      {
        "name": "Foster City",
        "distance": 4.72
      },
      {
        "name": "Menlo Park",
        "distance": 18.35
      },
      {
        "name": "Santa Clara",
        "distance": 38.12
      },
      {
        "name": "Alameda",
        "distance": 35.04
      },
      {
        "name": "El Cerrito",
        "distance": 38.7
      },
      {
        "name": "Sunnyvale",
        "distance": 35.26
      },
      {
        "name": "Los Altos",
        "distance": 27.7
      },
      {
        "name": "Sausalito",
        "distance": 36.35
      },
      {
        "name": "South San Francisco",
        "distance": 11.3
      }
    ]
  },
  "Santa Monica": {
    "lat": 34.046496,
    "lng": -118.447809,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Burbank",
        "distance": 16.5
      },
      {
        "name": "El Segundo",
        "distance": 18.24
      },
      {
        "name": "Culver City",
        "distance": 5.57
      },
      {
        "name": "Glendale",
        "distance": 28.17
      },
      {
        "name": "Manhattan Beach",
        "distance": 18.04
      },
      {
        "name": "Torrance",
        "distance": 28.51
      },
      {
        "name": "Long Beach",
        "distance": 38.94
      },
      {
        "name": "Beverly Hills",
        "distance": 5.1
      },
      {
        "name": "Calabasas",
        "distance": 26.3
      },
      {
        "name": "Redondo Beach",
        "distance": 23.71
      },
      {
        "name": "West Hollywood",
        "distance": 8.85
      },
      {
        "name": "Agoura Hills",
        "distance": 31.37
      },
      {
        "name": "Downey",
        "distance": 30.52
      },
      {
        "name": "Hawthorne",
        "distance": 18.08
      },
      {
        "name": "Lakewood",
        "distance": 33.24
      },
      {
        "name": "Marina del Rey",
        "distance": 7.65
      },
      {
        "name": "San Fernando",
        "distance": 19.78
      },
      {
        "name": "South Pasadena",
        "distance": 28.61
      },
      {
        "name": "Universal City",
        "distance": 13.43
      }
    ]
  },
  "Burbank": {
    "lat": 34.159442,
    "lng": -118.331595,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Santa Monica",
        "distance": 16.5
      },
      {
        "name": "El Segundo",
        "distance": 27.0
      },
      {
        "name": "Culver City",
        "distance": 17.51
      },
      {
        "name": "Glendale",
        "distance": 11.68
      },
      {
        "name": "Manhattan Beach",
        "distance": 31.12
      },
      {
        "name": "Torrance",
        "distance": 39.55
      },
      {
        "name": "Beverly Hills",
        "distance": 11.84
      },
      {
        "name": "Calabasas",
        "distance": 34.94
      },
      {
        "name": "City of Industry",
        "distance": 37.14
      },
      {
        "name": "Redondo Beach",
        "distance": 35.87
      },
      {
        "name": "West Hollywood",
        "distance": 8.23
      },
      {
        "name": "Agoura Hills",
        "distance": 39.95
      },
      {
        "name": "Downey",
        "distance": 30.98
      },
      {
        "name": "Hawthorne",
        "distance": 26.81
      },
      {
        "name": "Lakewood",
        "distance": 34.95
      },
      {
        "name": "Marina del Rey",
        "distance": 22.91
      },
      {
        "name": "San Fernando",
        "distance": 8.19
      },
      {
        "name": "South Pasadena",
        "distance": 17.67
      },
      {
        "name": "Universal City",
        "distance": 3.07
      }
    ]
  },
  "California": {
    "lat": 39.803764,
    "lng": -123.8453,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Novato",
        "distance": 0.0
      },
      {
        "name": "Anaheim",
        "distance": 0.0
      },
      {
        "name": "Oceanside",
        "distance": 0.0
      },
      {
        "name": "Emeryville",
        "distance": 0.0
      },
      {
        "name": "Larkspur",
        "distance": 0.0
      },
      {
        "name": "San Carlos",
        "distance": 0.0
      },
      {
        "name": "Altadena",
        "distance": 0.0
      },
      {
        "name": "Benicia",
        "distance": 0.0
      },
      {
        "name": "Claremont",
        "distance": 0.0
      },
      {
        "name": "El Macero",
        "distance": 0.0
      },
      {
        "name": "Fallbrook",
        "distance": 0.0
      },
      {
        "name": "Gardena",
        "distance": 0.0
      },
      {
        "name": "La Puente",
        "distance": 0.0
      },
      {
        "name": "Laguna Beach",
        "distance": 0.0
      },
      {
        "name": "Malibu",
        "distance": 0.0
      },
      {
        "name": "Norco",
        "distance": 0.0
      },
      {
        "name": "Piedmont",
        "distance": 0.0
      },
      {
        "name": "Rocklin",
        "distance": 0.0
      },
      {
        "name": "San Leandro",
        "distance": 0.0
      },
      {
        "name": "Walnut",
        "distance": 0.0
      }
    ]
  },
  "Carlsbad": {
    "lat": 33.127777,
    "lng": -117.311274,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "San Diego",
        "distance": 29.13
      },
      {
        "name": "Encinitas",
        "distance": 8.91
      }
    ]
  },
  "El Segundo": {
    "lat": 33.916678,
    "lng": -118.32688,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Santa Monica",
        "distance": 18.24
      },
      {
        "name": "Burbank",
        "distance": 27.0
      },
      {
        "name": "Culver City",
        "distance": 12.81
      },
      {
        "name": "Glendale",
        "distance": 36.85
      },
      {
        "name": "Manhattan Beach",
        "distance": 8.38
      },
      {
        "name": "Torrance",
        "distance": 12.67
      },
      {
        "name": "Long Beach",
        "distance": 20.71
      },
      {
        "name": "Beverly Hills",
        "distance": 18.22
      },
      {
        "name": "City of Industry",
        "distance": 35.81
      },
      {
        "name": "Huntington Beach",
        "distance": 33.12
      },
      {
        "name": "Redondo Beach",
        "distance": 10.07
      },
      {
        "name": "West Hollywood",
        "distance": 19.92
      },
      {
        "name": "Buena Park",
        "distance": 30.67
      },
      {
        "name": "Cypress",
        "distance": 30.71
      },
      {
        "name": "Downey",
        "distance": 16.21
      },
      {
        "name": "Garden Grove",
        "distance": 38.53
      },
      {
        "name": "Hawthorne",
        "distance": 0.19
      },
      {
        "name": "Lakewood",
        "distance": 17.28
      },
      {
        "name": "Marina del Rey",
        "distance": 13.12
      },
      {
        "name": "San Fernando",
        "distance": 23.93
      },
      {
        "name": "South Pasadena",
        "distance": 27.39
      },
      {
        "name": "Universal City",
        "distance": 24.88
      }
    ]
  },
  "Novato": {
    "lat": 39.803764,
    "lng": -123.8453,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "California",
        "distance": 0.0
      },
      {
        "name": "Anaheim",
        "distance": 0.0
      },
      {
        "name": "Oceanside",
        "distance": 0.0
      },
      {
        "name": "Emeryville",
        "distance": 0.0
      },
      {
        "name": "Larkspur",
        "distance": 0.0
      },
      {
        "name": "San Carlos",
        "distance": 0.0
      },
      {
        "name": "Altadena",
        "distance": 0.0
      },
      {
        "name": "Benicia",
        "distance": 0.0
      },
      {
        "name": "Claremont",
        "distance": 0.0
      },
      {
        "name": "El Macero",
        "distance": 0.0
      },
      {
        "name": "Fallbrook",
        "distance": 0.0
      },
      {
        "name": "Gardena",
        "distance": 0.0
      },
      {
        "name": "La Puente",
        "distance": 0.0
      },
      {
        "name": "Laguna Beach",
        "distance": 0.0
      },
      {
        "name": "Malibu",
        "distance": 0.0
      },
      {
        "name": "Norco",
        "distance": 0.0
      },
      {
        "name": "Piedmont",
        "distance": 0.0
      },
      {
        "name": "Rocklin",
        "distance": 0.0
      },
      {
        "name": "San Leandro",
        "distance": 0.0
      },
      {
        "name": "Walnut",
        "distance": 0.0
      }
    ]
  },
  "Oakland": {
    "lat": 37.84772,
    "lng": -122.285077,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "San Francisco",
        "distance": 11.79
      },
      {
        "name": "San Mateo",
        "distance": 31.3
      },
      {
        "name": "Berkeley",
        "distance": 3.75
      },
      {
        "name": "Burlingame",
        "distance": 29.14
      },
      {
        "name": "Foster City",
        "distance": 32.02
      },
      {
        "name": "San Rafael",
        "distance": 28.33
      },
      {
        "name": "Alameda",
        "distance": 3.75
      },
      {
        "name": "El Cerrito",
        "distance": 7.66
      },
      {
        "name": "Walnut Creek",
        "distance": 20.5
      },
      {
        "name": "Sausalito",
        "distance": 18.53
      },
      {
        "name": "South San Francisco",
        "distance": 24.67
      }
    ]
  },
  "Culver City": {
    "lat": 34.01333,
    "lng": -118.402481,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Santa Monica",
        "distance": 5.57
      },
      {
        "name": "Burbank",
        "distance": 17.51
      },
      {
        "name": "El Segundo",
        "distance": 12.81
      },
      {
        "name": "Glendale",
        "distance": 28.92
      },
      {
        "name": "Manhattan Beach",
        "distance": 14.04
      },
      {
        "name": "Torrance",
        "distance": 23.83
      },
      {
        "name": "Long Beach",
        "distance": 33.45
      },
      {
        "name": "Beverly Hills",
        "distance": 6.2
      },
      {
        "name": "Calabasas",
        "distance": 31.64
      },
      {
        "name": "Redondo Beach",
        "distance": 19.36
      },
      {
        "name": "West Hollywood",
        "distance": 9.3
      },
      {
        "name": "Agoura Hills",
        "distance": 36.64
      },
      {
        "name": "Downey",
        "distance": 25.18
      },
      {
        "name": "Hawthorne",
        "distance": 12.65
      },
      {
        "name": "Lakewood",
        "distance": 27.76
      },
      {
        "name": "Marina del Rey",
        "distance": 5.82
      },
      {
        "name": "San Fernando",
        "distance": 18.33
      },
      {
        "name": "South Pasadena",
        "distance": 25.96
      },
      {
        "name": "Universal City",
        "distance": 14.68
      }
    ]
  },
  "Pasadena": {
    "lat": 29.711733,
    "lng": -95.210309,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Houston",
        "distance": 36.43
      },
      {
        "name": "Rowlett",
        "distance": 9.33
      }
    ]
  },
  "Redwood City": {
    "lat": 37.486324,
    "lng": -122.232523,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "San Francisco",
        "distance": 39.23
      },
      {
        "name": "San Mateo",
        "distance": 11.98
      },
      {
        "name": "Mountain View",
        "distance": 17.03
      },
      {
        "name": "Burlingame",
        "distance": 17.59
      },
      {
        "name": "San Jose",
        "distance": 32.06
      },
      {
        "name": "Foster City",
        "distance": 8.8
      },
      {
        "name": "Menlo Park",
        "distance": 7.66
      },
      {
        "name": "Santa Clara",
        "distance": 26.15
      },
      {
        "name": "Sunnyvale",
        "distance": 23.45
      },
      {
        "name": "Boulder Creek",
        "distance": 39.96
      },
      {
        "name": "Los Altos",
        "distance": 15.72
      },
      {
        "name": "Los Gatos",
        "distance": 36.79
      },
      {
        "name": "South San Francisco",
        "distance": 23.27
      }
    ]
  },
  "Berkeley": {
    "lat": 37.880942,
    "lng": -122.277739,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "San Francisco",
        "distance": 14.09
      },
      {
        "name": "San Mateo",
        "distance": 35.04
      },
      {
        "name": "Oakland",
        "distance": 3.75
      },
      {
        "name": "Burlingame",
        "distance": 32.87
      },
      {
        "name": "Foster City",
        "distance": 35.69
      },
      {
        "name": "San Rafael",
        "distance": 26.74
      },
      {
        "name": "Alameda",
        "distance": 0.0
      },
      {
        "name": "El Cerrito",
        "distance": 4.36
      },
      {
        "name": "Walnut Creek",
        "distance": 19.09
      },
      {
        "name": "Sausalito",
        "distance": 19.17
      },
      {
        "name": "South San Francisco",
        "distance": 28.31
      }
    ]
  },
  "Mountain View": {
    "lat": 37.389389,
    "lng": -122.08321,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "San Mateo",
        "distance": 28.9
      },
      {
        "name": "Redwood City",
        "distance": 17.03
      },
      {
        "name": "Burlingame",
        "distance": 34.59
      },
      {
        "name": "San Jose",
        "distance": 16.68
      },
      {
        "name": "Foster City",
        "distance": 25.07
      },
      {
        "name": "Menlo Park",
        "distance": 11.4
      },
      {
        "name": "Santa Clara",
        "distance": 9.58
      },
      {
        "name": "Sunnyvale",
        "distance": 6.46
      },
      {
        "name": "Boulder Creek",
        "distance": 28.18
      },
      {
        "name": "Los Altos",
        "distance": 3.16
      },
      {
        "name": "Los Gatos",
        "distance": 20.49
      }
    ]
  },
  "Burlingame": {
    "lat": 37.595828,
    "lng": -122.376572,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "San Francisco",
        "distance": 23.97
      },
      {
        "name": "San Mateo",
        "distance": 5.77
      },
      {
        "name": "Oakland",
        "distance": 29.14
      },
      {
        "name": "Redwood City",
        "distance": 17.59
      },
      {
        "name": "Berkeley",
        "distance": 32.87
      },
      {
        "name": "Mountain View",
        "distance": 34.59
      },
      {
        "name": "Foster City",
        "distance": 10.29
      },
      {
        "name": "Menlo Park",
        "distance": 24.12
      },
      {
        "name": "Alameda",
        "distance": 32.87
      },
      {
        "name": "El Cerrito",
        "distance": 36.14
      },
      {
        "name": "Los Altos",
        "distance": 33.27
      },
      {
        "name": "Sausalito",
        "distance": 31.63
      },
      {
        "name": "South San Francisco",
        "distance": 6.07
      }
    ]
  },
  "San Jose": {
    "lat": 37.380507,
    "lng": -121.89477,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Redwood City",
        "distance": 32.06
      },
      {
        "name": "Mountain View",
        "distance": 16.68
      },
      {
        "name": "Foster City",
        "distance": 38.58
      },
      {
        "name": "Menlo Park",
        "distance": 24.75
      },
      {
        "name": "Santa Clara",
        "distance": 14.18
      },
      {
        "name": "Sunnyvale",
        "distance": 11.47
      },
      {
        "name": "Boulder Creek",
        "distance": 33.64
      },
      {
        "name": "Los Altos",
        "distance": 19.6
      },
      {
        "name": "Los Gatos",
        "distance": 18.51
      }
    ]
  },
  "Foster City": {
    "lat": 37.560034,
    "lng": -122.268852,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "San Francisco",
        "distance": 30.43
      },
      {
        "name": "San Mateo",
        "distance": 4.72
      },
      {
        "name": "Oakland",
        "distance": 32.02
      },
      {
        "name": "Redwood City",
        "distance": 8.8
      },
      {
        "name": "Berkeley",
        "distance": 35.69
      },
      {
        "name": "Mountain View",
        "distance": 25.07
      },
      {
        "name": "Burlingame",
        "distance": 10.29
      },
      {
        "name": "San Jose",
        "distance": 38.58
      },
      {
        "name": "Menlo Park",
        "distance": 14.09
      },
      {
        "name": "Santa Clara",
        "distance": 34.49
      },
      {
        "name": "Alameda",
        "distance": 35.69
      },
      {
        "name": "El Cerrito",
        "distance": 39.62
      },
      {
        "name": "Sunnyvale",
        "distance": 31.3
      },
      {
        "name": "Los Altos",
        "distance": 24.2
      },
      {
        "name": "Sausalito",
        "distance": 39.27
      },
      {
        "name": "South San Francisco",
        "distance": 15.21
      }
    ]
  },
  "Glendale": {
    "lat": 34.242489,
    "lng": -118.253859,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Santa Monica",
        "distance": 28.17
      },
      {
        "name": "Burbank",
        "distance": 11.68
      },
      {
        "name": "El Segundo",
        "distance": 36.85
      },
      {
        "name": "Culver City",
        "distance": 28.92
      },
      {
        "name": "Beverly Hills",
        "distance": 23.49
      },
      {
        "name": "City of Industry",
        "distance": 36.07
      },
      {
        "name": "West Hollywood",
        "distance": 19.79
      },
      {
        "name": "Downey",
        "distance": 36.63
      },
      {
        "name": "Hawthorne",
        "distance": 36.66
      },
      {
        "name": "Marina del Rey",
        "distance": 34.48
      },
      {
        "name": "San Fernando",
        "distance": 13.26
      },
      {
        "name": "South Pasadena",
        "distance": 17.36
      },
      {
        "name": "Universal City",
        "distance": 14.74
      }
    ]
  },
  "Lake Forest": {
    "lat": 33.627694,
    "lng": -117.703435,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Irvine",
        "distance": 15.3
      },
      {
        "name": "Santa Ana",
        "distance": 22.74
      },
      {
        "name": "Huntington Beach",
        "distance": 33.27
      },
      {
        "name": "San Clemente",
        "distance": 23.85
      },
      {
        "name": "Aliso Viejo",
        "distance": 6.1
      },
      {
        "name": "Buena Park",
        "distance": 37.71
      },
      {
        "name": "Corona",
        "distance": 25.33
      },
      {
        "name": "Cypress",
        "distance": 35.41
      },
      {
        "name": "Garden Grove",
        "distance": 27.78
      },
      {
        "name": "Rancho Santa Margarita",
        "distance": 9.42
      }
    ]
  },
  "Manhattan Beach": {
    "lat": 33.887278,
    "lng": -118.410432,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Santa Monica",
        "distance": 18.04
      },
      {
        "name": "Burbank",
        "distance": 31.12
      },
      {
        "name": "El Segundo",
        "distance": 8.38
      },
      {
        "name": "Culver City",
        "distance": 14.04
      },
      {
        "name": "Torrance",
        "distance": 10.95
      },
      {
        "name": "Long Beach",
        "distance": 24.61
      },
      {
        "name": "Beverly Hills",
        "distance": 20.23
      },
      {
        "name": "Calabasas",
        "distance": 39.38
      },
      {
        "name": "Huntington Beach",
        "distance": 38.19
      },
      {
        "name": "Redondo Beach",
        "distance": 5.79
      },
      {
        "name": "West Hollywood",
        "distance": 23.11
      },
      {
        "name": "Buena Park",
        "distance": 37.83
      },
      {
        "name": "Cypress",
        "distance": 36.86
      },
      {
        "name": "Downey",
        "distance": 24.25
      },
      {
        "name": "Hawthorne",
        "distance": 8.45
      },
      {
        "name": "Lakewood",
        "distance": 24.68
      },
      {
        "name": "Marina del Rey",
        "distance": 10.65
      },
      {
        "name": "San Fernando",
        "distance": 29.93
      },
      {
        "name": "South Pasadena",
        "distance": 34.9
      },
      {
        "name": "Universal City",
        "distance": 28.49
      }
    ]
  },
  "Palo Alto": {
    "lat": 32.539661,
    "lng": -116.888266,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Chula Vista",
        "distance": 21.48
      }
    ]
  },
  "Torrance": {
    "lat": 33.80403,
    "lng": -118.347178,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Santa Monica",
        "distance": 28.51
      },
      {
        "name": "Burbank",
        "distance": 39.55
      },
      {
        "name": "El Segundo",
        "distance": 12.67
      },
      {
        "name": "Culver City",
        "distance": 23.83
      },
      {
        "name": "Manhattan Beach",
        "distance": 10.95
      },
      {
        "name": "Long Beach",
        "distance": 15.73
      },
      {
        "name": "Beverly Hills",
        "distance": 29.86
      },
      {
        "name": "Huntington Beach",
        "distance": 29.64
      },
      {
        "name": "Redondo Beach",
        "distance": 5.27
      },
      {
        "name": "West Hollywood",
        "distance": 32.12
      },
      {
        "name": "Buena Park",
        "distance": 32.45
      },
      {
        "name": "Cypress",
        "distance": 29.74
      },
      {
        "name": "Downey",
        "distance": 22.47
      },
      {
        "name": "Garden Grove",
        "distance": 37.18
      },
      {
        "name": "Hawthorne",
        "distance": 12.85
      },
      {
        "name": "Lakewood",
        "distance": 20.97
      },
      {
        "name": "Marina del Rey",
        "distance": 21.46
      },
      {
        "name": "San Fernando",
        "distance": 36.52
      },
      {
        "name": "South Pasadena",
        "distance": 39.0
      },
      {
        "name": "Universal City",
        "distance": 37.28
      }
    ]
  },
  "Anaheim": {
    "lat": 39.803764,
    "lng": -123.8453,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "California",
        "distance": 0.0
      },
      {
        "name": "Novato",
        "distance": 0.0
      },
      {
        "name": "Oceanside",
        "distance": 0.0
      },
      {
        "name": "Emeryville",
        "distance": 0.0
      },
      {
        "name": "Larkspur",
        "distance": 0.0
      },
      {
        "name": "San Carlos",
        "distance": 0.0
      },
      {
        "name": "Altadena",
        "distance": 0.0
      },
      {
        "name": "Benicia",
        "distance": 0.0
      },
      {
        "name": "Claremont",
        "distance": 0.0
      },
      {
        "name": "El Macero",
        "distance": 0.0
      },
      {
        "name": "Fallbrook",
        "distance": 0.0
      },
      {
        "name": "Gardena",
        "distance": 0.0
      },
      {
        "name": "La Puente",
        "distance": 0.0
      },
      {
        "name": "Laguna Beach",
        "distance": 0.0
      },
      {
        "name": "Malibu",
        "distance": 0.0
      },
      {
        "name": "Norco",
        "distance": 0.0
      },
      {
        "name": "Piedmont",
        "distance": 0.0
      },
      {
        "name": "Rocklin",
        "distance": 0.0
      },
      {
        "name": "San Leandro",
        "distance": 0.0
      },
      {
        "name": "Walnut",
        "distance": 0.0
      }
    ]
  },
  "Long Beach": {
    "lat": 33.77559,
    "lng": -118.180422,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Irvine",
        "distance": 31.8
      },
      {
        "name": "Santa Monica",
        "distance": 38.94
      },
      {
        "name": "El Segundo",
        "distance": 20.71
      },
      {
        "name": "Culver City",
        "distance": 33.45
      },
      {
        "name": "Manhattan Beach",
        "distance": 24.61
      },
      {
        "name": "Torrance",
        "distance": 15.73
      },
      {
        "name": "Santa Ana",
        "distance": 26.88
      },
      {
        "name": "Beverly Hills",
        "distance": 38.39
      },
      {
        "name": "City of Industry",
        "distance": 34.41
      },
      {
        "name": "Huntington Beach",
        "distance": 13.91
      },
      {
        "name": "Redondo Beach",
        "distance": 20.17
      },
      {
        "name": "West Hollywood",
        "distance": 39.29
      },
      {
        "name": "Buena Park",
        "distance": 18.89
      },
      {
        "name": "Cypress",
        "distance": 14.59
      },
      {
        "name": "Downey",
        "distance": 16.74
      },
      {
        "name": "Garden Grove",
        "distance": 21.63
      },
      {
        "name": "Hawthorne",
        "distance": 20.86
      },
      {
        "name": "Lakewood",
        "distance": 12.83
      },
      {
        "name": "Marina del Rey",
        "distance": 33.44
      },
      {
        "name": "San Fernando",
        "distance": 39.25
      },
      {
        "name": "South Pasadena",
        "distance": 37.67
      }
    ]
  },
  "Menlo Park": {
    "lat": 37.478897,
    "lng": -122.146167,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "San Mateo",
        "distance": 18.35
      },
      {
        "name": "Redwood City",
        "distance": 7.66
      },
      {
        "name": "Mountain View",
        "distance": 11.4
      },
      {
        "name": "Burlingame",
        "distance": 24.12
      },
      {
        "name": "San Jose",
        "distance": 24.75
      },
      {
        "name": "Foster City",
        "distance": 14.09
      },
      {
        "name": "Santa Clara",
        "distance": 20.98
      },
      {
        "name": "Sunnyvale",
        "distance": 17.35
      },
      {
        "name": "Boulder Creek",
        "distance": 37.98
      },
      {
        "name": "Los Altos",
        "distance": 11.4
      },
      {
        "name": "Los Gatos",
        "distance": 31.89
      },
      {
        "name": "South San Francisco",
        "distance": 29.29
      }
    ]
  },
  "Oceanside": {
    "lat": 39.803764,
    "lng": -123.8453,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "California",
        "distance": 0.0
      },
      {
        "name": "Novato",
        "distance": 0.0
      },
      {
        "name": "Anaheim",
        "distance": 0.0
      },
      {
        "name": "Emeryville",
        "distance": 0.0
      },
      {
        "name": "Larkspur",
        "distance": 0.0
      },
      {
        "name": "San Carlos",
        "distance": 0.0
      },
      {
        "name": "Altadena",
        "distance": 0.0
      },
      {
        "name": "Benicia",
        "distance": 0.0
      },
      {
        "name": "Claremont",
        "distance": 0.0
      },
      {
        "name": "El Macero",
        "distance": 0.0
      },
      {
        "name": "Fallbrook",
        "distance": 0.0
      },
      {
        "name": "Gardena",
        "distance": 0.0
      },
      {
        "name": "La Puente",
        "distance": 0.0
      },
      {
        "name": "Laguna Beach",
        "distance": 0.0
      },
      {
        "name": "Malibu",
        "distance": 0.0
      },
      {
        "name": "Norco",
        "distance": 0.0
      },
      {
        "name": "Piedmont",
        "distance": 0.0
      },
      {
        "name": "Rocklin",
        "distance": 0.0
      },
      {
        "name": "San Leandro",
        "distance": 0.0
      },
      {
        "name": "Walnut",
        "distance": 0.0
      }
    ]
  },
  "San Rafael": {
    "lat": 38.006094,
    "lng": -122.538078,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "San Francisco",
        "distance": 24.54
      },
      {
        "name": "Oakland",
        "distance": 28.33
      },
      {
        "name": "Berkeley",
        "distance": 26.74
      },
      {
        "name": "Alameda",
        "distance": 26.74
      },
      {
        "name": "El Cerrito",
        "distance": 23.07
      },
      {
        "name": "Rohnert Park",
        "distance": 39.73
      },
      {
        "name": "Sausalito",
        "distance": 16.2
      }
    ]
  },
  "Santa Ana": {
    "lat": 33.760614,
    "lng": -117.890208,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Irvine",
        "distance": 9.51
      },
      {
        "name": "Lake Forest",
        "distance": 22.74
      },
      {
        "name": "Long Beach",
        "distance": 26.88
      },
      {
        "name": "City of Industry",
        "distance": 30.27
      },
      {
        "name": "Huntington Beach",
        "distance": 13.49
      },
      {
        "name": "Aliso Viejo",
        "distance": 25.54
      },
      {
        "name": "Buena Park",
        "distance": 15.02
      },
      {
        "name": "Corona",
        "distance": 38.22
      },
      {
        "name": "Cypress",
        "distance": 13.24
      },
      {
        "name": "Downey",
        "distance": 30.21
      },
      {
        "name": "Garden Grove",
        "distance": 5.42
      },
      {
        "name": "Lakewood",
        "distance": 27.25
      },
      {
        "name": "Rancho Santa Margarita",
        "distance": 29.72
      }
    ]
  },
  "Santa Clara": {
    "lat": 37.313732,
    "lng": -122.031446,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "San Mateo",
        "distance": 38.12
      },
      {
        "name": "Redwood City",
        "distance": 26.15
      },
      {
        "name": "Mountain View",
        "distance": 9.58
      },
      {
        "name": "San Jose",
        "distance": 14.18
      },
      {
        "name": "Foster City",
        "distance": 34.49
      },
      {
        "name": "Menlo Park",
        "distance": 20.98
      },
      {
        "name": "Santa Cruz",
        "distance": 38.58
      },
      {
        "name": "Sunnyvale",
        "distance": 5.03
      },
      {
        "name": "Boulder Creek",
        "distance": 21.13
      },
      {
        "name": "Los Altos",
        "distance": 10.46
      },
      {
        "name": "Los Gatos",
        "distance": 10.91
      }
    ]
  },
  "Alameda": {
    "lat": 37.880942,
    "lng": -122.277739,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "San Francisco",
        "distance": 14.09
      },
      {
        "name": "San Mateo",
        "distance": 35.04
      },
      {
        "name": "Oakland",
        "distance": 3.75
      },
      {
        "name": "Berkeley",
        "distance": 0.0
      },
      {
        "name": "Burlingame",
        "distance": 32.87
      },
      {
        "name": "Foster City",
        "distance": 35.69
      },
      {
        "name": "San Rafael",
        "distance": 26.74
      },
      {
        "name": "El Cerrito",
        "distance": 4.36
      },
      {
        "name": "Walnut Creek",
        "distance": 19.09
      },
      {
        "name": "Sausalito",
        "distance": 19.17
      },
      {
        "name": "South San Francisco",
        "distance": 28.31
      }
    ]
  },
  "Beverly Hills": {
    "lat": 34.06901,
    "lng": -118.399584,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Santa Monica",
        "distance": 5.1
      },
      {
        "name": "Burbank",
        "distance": 11.84
      },
      {
        "name": "El Segundo",
        "distance": 18.22
      },
      {
        "name": "Culver City",
        "distance": 6.2
      },
      {
        "name": "Glendale",
        "distance": 23.49
      },
      {
        "name": "Manhattan Beach",
        "distance": 20.23
      },
      {
        "name": "Torrance",
        "distance": 29.86
      },
      {
        "name": "Long Beach",
        "distance": 38.39
      },
      {
        "name": "Calabasas",
        "distance": 29.67
      },
      {
        "name": "Redondo Beach",
        "distance": 25.52
      },
      {
        "name": "West Hollywood",
        "distance": 3.81
      },
      {
        "name": "Agoura Hills",
        "distance": 34.82
      },
      {
        "name": "Downey",
        "distance": 27.98
      },
      {
        "name": "Hawthorne",
        "distance": 18.04
      },
      {
        "name": "Lakewood",
        "distance": 31.15
      },
      {
        "name": "Marina del Rey",
        "distance": 11.12
      },
      {
        "name": "San Fernando",
        "distance": 14.69
      },
      {
        "name": "South Pasadena",
        "distance": 23.7
      },
      {
        "name": "Universal City",
        "distance": 8.85
      }
    ]
  },
  "Calabasas": {
    "lat": 34.139357,
    "lng": -118.710475,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Santa Monica",
        "distance": 26.3
      },
      {
        "name": "Burbank",
        "distance": 34.94
      },
      {
        "name": "Culver City",
        "distance": 31.64
      },
      {
        "name": "Manhattan Beach",
        "distance": 39.38
      },
      {
        "name": "Beverly Hills",
        "distance": 29.67
      },
      {
        "name": "West Hollywood",
        "distance": 31.84
      },
      {
        "name": "Agoura Hills",
        "distance": 5.16
      },
      {
        "name": "Marina del Rey",
        "distance": 30.08
      },
      {
        "name": "Moorpark",
        "distance": 15.98
      },
      {
        "name": "Universal City",
        "distance": 32.77
      }
    ]
  },
  "City of Industry": {
    "lat": 34.026271,
    "lng": -117.961767,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Irvine",
        "distance": 39.73
      },
      {
        "name": "Burbank",
        "distance": 37.14
      },
      {
        "name": "El Segundo",
        "distance": 35.81
      },
      {
        "name": "Glendale",
        "distance": 36.07
      },
      {
        "name": "Long Beach",
        "distance": 34.41
      },
      {
        "name": "Santa Ana",
        "distance": 30.27
      },
      {
        "name": "Huntington Beach",
        "distance": 32.11
      },
      {
        "name": "West Hollywood",
        "distance": 38.25
      },
      {
        "name": "Buena Park",
        "distance": 19.01
      },
      {
        "name": "Cypress",
        "distance": 25.82
      },
      {
        "name": "Downey",
        "distance": 20.85
      },
      {
        "name": "Garden Grove",
        "distance": 28.02
      },
      {
        "name": "Hawthorne",
        "distance": 35.75
      },
      {
        "name": "Lakewood",
        "distance": 22.81
      },
      {
        "name": "Rancho Cucamonga",
        "distance": 39.86
      },
      {
        "name": "San Fernando",
        "distance": 29.0
      },
      {
        "name": "South Pasadena",
        "distance": 19.68
      },
      {
        "name": "Universal City",
        "distance": 38.28
      },
      {
        "name": "Upland",
        "distance": 31.96
      }
    ]
  },
  "El Cerrito": {
    "lat": 37.915406,
    "lng": -122.301411,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "San Francisco",
        "distance": 15.15
      },
      {
        "name": "San Mateo",
        "distance": 38.7
      },
      {
        "name": "Oakland",
        "distance": 7.66
      },
      {
        "name": "Berkeley",
        "distance": 4.36
      },
      {
        "name": "Burlingame",
        "distance": 36.14
      },
      {
        "name": "Foster City",
        "distance": 39.62
      },
      {
        "name": "San Rafael",
        "distance": 23.07
      },
      {
        "name": "Alameda",
        "distance": 4.36
      },
      {
        "name": "Walnut Creek",
        "distance": 21.07
      },
      {
        "name": "Sausalito",
        "distance": 17.92
      },
      {
        "name": "South San Francisco",
        "distance": 31.22
      }
    ]
  },
  "Emeryville": {
    "lat": 39.803764,
    "lng": -123.8453,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "California",
        "distance": 0.0
      },
      {
        "name": "Novato",
        "distance": 0.0
      },
      {
        "name": "Anaheim",
        "distance": 0.0
      },
      {
        "name": "Oceanside",
        "distance": 0.0
      },
      {
        "name": "Larkspur",
        "distance": 0.0
      },
      {
        "name": "San Carlos",
        "distance": 0.0
      },
      {
        "name": "Altadena",
        "distance": 0.0
      },
      {
        "name": "Benicia",
        "distance": 0.0
      },
      {
        "name": "Claremont",
        "distance": 0.0
      },
      {
        "name": "El Macero",
        "distance": 0.0
      },
      {
        "name": "Fallbrook",
        "distance": 0.0
      },
      {
        "name": "Gardena",
        "distance": 0.0
      },
      {
        "name": "La Puente",
        "distance": 0.0
      },
      {
        "name": "Laguna Beach",
        "distance": 0.0
      },
      {
        "name": "Malibu",
        "distance": 0.0
      },
      {
        "name": "Norco",
        "distance": 0.0
      },
      {
        "name": "Piedmont",
        "distance": 0.0
      },
      {
        "name": "Rocklin",
        "distance": 0.0
      },
      {
        "name": "San Leandro",
        "distance": 0.0
      },
      {
        "name": "Walnut",
        "distance": 0.0
      }
    ]
  },
  "Encinitas": {
    "lat": 33.049685,
    "lng": -117.289914,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "San Diego",
        "distance": 24.01
      },
      {
        "name": "Carlsbad",
        "distance": 8.91
      },
      {
        "name": "Newport Beach",
        "distance": 34.09
      }
    ]
  },
  "Fremont": {
    "lat": 34.108982,
    "lng": -117.511745,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Corona",
        "distance": 39.43
      },
      {
        "name": "Lake Arrowhead",
        "distance": 33.33
      },
      {
        "name": "Rancho Cucamonga",
        "distance": 3.79
      },
      {
        "name": "Redlands",
        "distance": 30.74
      },
      {
        "name": "Upland",
        "distance": 10.8
      }
    ]
  },
  "Huntington Beach": {
    "lat": 33.74395,
    "lng": -118.034791,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Irvine",
        "distance": 17.97
      },
      {
        "name": "El Segundo",
        "distance": 33.12
      },
      {
        "name": "Lake Forest",
        "distance": 33.27
      },
      {
        "name": "Manhattan Beach",
        "distance": 38.19
      },
      {
        "name": "Torrance",
        "distance": 29.64
      },
      {
        "name": "Long Beach",
        "distance": 13.91
      },
      {
        "name": "Santa Ana",
        "distance": 13.49
      },
      {
        "name": "City of Industry",
        "distance": 32.11
      },
      {
        "name": "Redondo Beach",
        "distance": 34.04
      },
      {
        "name": "Aliso Viejo",
        "distance": 34.15
      },
      {
        "name": "Buena Park",
        "distance": 13.1
      },
      {
        "name": "Cypress",
        "distance": 6.3
      },
      {
        "name": "Downey",
        "distance": 22.75
      },
      {
        "name": "Garden Grove",
        "distance": 8.86
      },
      {
        "name": "Hawthorne",
        "distance": 33.23
      },
      {
        "name": "Lakewood",
        "distance": 18.77
      }
    ]
  },
  "Larkspur": {
    "lat": 39.803764,
    "lng": -123.8453,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "California",
        "distance": 0.0
      },
      {
        "name": "Novato",
        "distance": 0.0
      },
      {
        "name": "Anaheim",
        "distance": 0.0
      },
      {
        "name": "Oceanside",
        "distance": 0.0
      },
      {
        "name": "Emeryville",
        "distance": 0.0
      },
      {
        "name": "San Carlos",
        "distance": 0.0
      },
      {
        "name": "Altadena",
        "distance": 0.0
      },
      {
        "name": "Benicia",
        "distance": 0.0
      },
      {
        "name": "Claremont",
        "distance": 0.0
      },
      {
        "name": "El Macero",
        "distance": 0.0
      },
      {
        "name": "Fallbrook",
        "distance": 0.0
      },
      {
        "name": "Gardena",
        "distance": 0.0
      },
      {
        "name": "La Puente",
        "distance": 0.0
      },
      {
        "name": "Laguna Beach",
        "distance": 0.0
      },
      {
        "name": "Malibu",
        "distance": 0.0
      },
      {
        "name": "Norco",
        "distance": 0.0
      },
      {
        "name": "Piedmont",
        "distance": 0.0
      },
      {
        "name": "Rocklin",
        "distance": 0.0
      },
      {
        "name": "San Leandro",
        "distance": 0.0
      },
      {
        "name": "Walnut",
        "distance": 0.0
      }
    ]
  },
  "Newport Beach": {
    "lat": 32.745182,
    "lng": -117.247719,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "San Diego",
        "distance": 34.12
      },
      {
        "name": "Encinitas",
        "distance": 34.09
      },
      {
        "name": "Chula Vista",
        "distance": 19.26
      }
    ]
  },
  "Redondo Beach": {
    "lat": 33.839829,
    "lng": -118.384594,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Santa Monica",
        "distance": 23.71
      },
      {
        "name": "Burbank",
        "distance": 35.87
      },
      {
        "name": "El Segundo",
        "distance": 10.07
      },
      {
        "name": "Culver City",
        "distance": 19.36
      },
      {
        "name": "Manhattan Beach",
        "distance": 5.79
      },
      {
        "name": "Torrance",
        "distance": 5.27
      },
      {
        "name": "Long Beach",
        "distance": 20.17
      },
      {
        "name": "Beverly Hills",
        "distance": 25.52
      },
      {
        "name": "Huntington Beach",
        "distance": 34.04
      },
      {
        "name": "West Hollywood",
        "distance": 28.11
      },
      {
        "name": "Buena Park",
        "distance": 35.39
      },
      {
        "name": "Cypress",
        "distance": 33.48
      },
      {
        "name": "Downey",
        "distance": 23.48
      },
      {
        "name": "Hawthorne",
        "distance": 10.23
      },
      {
        "name": "Lakewood",
        "distance": 22.9
      },
      {
        "name": "Marina del Rey",
        "distance": 16.43
      },
      {
        "name": "San Fernando",
        "distance": 33.73
      },
      {
        "name": "South Pasadena",
        "distance": 37.43
      },
      {
        "name": "Universal City",
        "distance": 33.41
      }
    ]
  },
  "Sacramento": {
    "lat": 38.514464,
    "lng": -121.395895,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "San Bernardino": {
    "lat": 34.477492,
    "lng": -117.111335,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Big Bear Lake",
        "distance": 31.85
      },
      {
        "name": "Lake Arrowhead",
        "distance": 26.45
      }
    ]
  },
  "San Carlos": {
    "lat": 39.803764,
    "lng": -123.8453,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "California",
        "distance": 0.0
      },
      {
        "name": "Novato",
        "distance": 0.0
      },
      {
        "name": "Anaheim",
        "distance": 0.0
      },
      {
        "name": "Oceanside",
        "distance": 0.0
      },
      {
        "name": "Emeryville",
        "distance": 0.0
      },
      {
        "name": "Larkspur",
        "distance": 0.0
      },
      {
        "name": "Altadena",
        "distance": 0.0
      },
      {
        "name": "Benicia",
        "distance": 0.0
      },
      {
        "name": "Claremont",
        "distance": 0.0
      },
      {
        "name": "El Macero",
        "distance": 0.0
      },
      {
        "name": "Fallbrook",
        "distance": 0.0
      },
      {
        "name": "Gardena",
        "distance": 0.0
      },
      {
        "name": "La Puente",
        "distance": 0.0
      },
      {
        "name": "Laguna Beach",
        "distance": 0.0
      },
      {
        "name": "Malibu",
        "distance": 0.0
      },
      {
        "name": "Norco",
        "distance": 0.0
      },
      {
        "name": "Piedmont",
        "distance": 0.0
      },
      {
        "name": "Rocklin",
        "distance": 0.0
      },
      {
        "name": "San Leandro",
        "distance": 0.0
      },
      {
        "name": "Walnut",
        "distance": 0.0
      }
    ]
  },
  "San Clemente": {
    "lat": 33.427028,
    "lng": -117.612418,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Irvine",
        "distance": 36.08
      },
      {
        "name": "Lake Forest",
        "distance": 23.85
      },
      {
        "name": "Aliso Viejo",
        "distance": 19.63
      },
      {
        "name": "Corona",
        "distance": 38.63
      },
      {
        "name": "Rancho Santa Margarita",
        "distance": 23.8
      }
    ]
  },
  "Santa Cruz": {
    "lat": 36.967468,
    "lng": -122.003911,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Santa Clara",
        "distance": 38.58
      },
      {
        "name": "Boulder Creek",
        "distance": 21.64
      },
      {
        "name": "Los Gatos",
        "distance": 28.93
      }
    ]
  },
  "Sunnyvale": {
    "lat": 37.358275,
    "lng": -122.021523,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "San Mateo",
        "distance": 35.26
      },
      {
        "name": "Redwood City",
        "distance": 23.45
      },
      {
        "name": "Mountain View",
        "distance": 6.46
      },
      {
        "name": "San Jose",
        "distance": 11.47
      },
      {
        "name": "Foster City",
        "distance": 31.3
      },
      {
        "name": "Menlo Park",
        "distance": 17.35
      },
      {
        "name": "Santa Clara",
        "distance": 5.03
      },
      {
        "name": "Boulder Creek",
        "distance": 26.07
      },
      {
        "name": "Los Altos",
        "distance": 8.71
      },
      {
        "name": "Los Gatos",
        "distance": 15.22
      }
    ]
  },
  "Walnut Creek": {
    "lat": 37.902073,
    "lng": -122.06187,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "San Francisco",
        "distance": 32.28
      },
      {
        "name": "Oakland",
        "distance": 20.5
      },
      {
        "name": "Berkeley",
        "distance": 19.09
      },
      {
        "name": "Alameda",
        "distance": 19.09
      },
      {
        "name": "El Cerrito",
        "distance": 21.07
      },
      {
        "name": "Sausalito",
        "distance": 38.25
      }
    ]
  },
  "West Hollywood": {
    "lat": 34.092301,
    "lng": -118.369289,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Santa Monica",
        "distance": 8.85
      },
      {
        "name": "Burbank",
        "distance": 8.23
      },
      {
        "name": "El Segundo",
        "distance": 19.92
      },
      {
        "name": "Culver City",
        "distance": 9.3
      },
      {
        "name": "Glendale",
        "distance": 19.79
      },
      {
        "name": "Manhattan Beach",
        "distance": 23.11
      },
      {
        "name": "Torrance",
        "distance": 32.12
      },
      {
        "name": "Long Beach",
        "distance": 39.29
      },
      {
        "name": "Beverly Hills",
        "distance": 3.81
      },
      {
        "name": "Calabasas",
        "distance": 31.84
      },
      {
        "name": "City of Industry",
        "distance": 38.25
      },
      {
        "name": "Redondo Beach",
        "distance": 28.11
      },
      {
        "name": "Agoura Hills",
        "distance": 37.0
      },
      {
        "name": "Downey",
        "distance": 27.44
      },
      {
        "name": "Hawthorne",
        "distance": 19.73
      },
      {
        "name": "Lakewood",
        "distance": 30.94
      },
      {
        "name": "Marina del Rey",
        "distance": 14.69
      },
      {
        "name": "San Fernando",
        "distance": 11.15
      },
      {
        "name": "South Pasadena",
        "distance": 20.52
      },
      {
        "name": "Universal City",
        "distance": 5.4
      }
    ]
  },
  "Agoura Hills": {
    "lat": 34.148169,
    "lng": -118.765546,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Santa Monica",
        "distance": 31.37
      },
      {
        "name": "Burbank",
        "distance": 39.95
      },
      {
        "name": "Culver City",
        "distance": 36.64
      },
      {
        "name": "Beverly Hills",
        "distance": 34.82
      },
      {
        "name": "Calabasas",
        "distance": 5.16
      },
      {
        "name": "West Hollywood",
        "distance": 37.0
      },
      {
        "name": "Marina del Rey",
        "distance": 34.81
      },
      {
        "name": "Moorpark",
        "distance": 11.05
      },
      {
        "name": "Universal City",
        "distance": 37.85
      }
    ]
  },
  "Albany": {
    "lat": 44.636053,
    "lng": -123.111569,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Aliso Viejo": {
    "lat": 33.576138,
    "lng": -117.725812,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Irvine",
        "distance": 16.71
      },
      {
        "name": "Lake Forest",
        "distance": 6.1
      },
      {
        "name": "Santa Ana",
        "distance": 25.54
      },
      {
        "name": "Huntington Beach",
        "distance": 34.15
      },
      {
        "name": "San Clemente",
        "distance": 19.63
      },
      {
        "name": "Corona",
        "distance": 30.48
      },
      {
        "name": "Cypress",
        "distance": 37.26
      },
      {
        "name": "Garden Grove",
        "distance": 30.06
      },
      {
        "name": "Rancho Santa Margarita",
        "distance": 13.47
      }
    ]
  },
  "Altadena": {
    "lat": 39.803764,
    "lng": -123.8453,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "California",
        "distance": 0.0
      },
      {
        "name": "Novato",
        "distance": 0.0
      },
      {
        "name": "Anaheim",
        "distance": 0.0
      },
      {
        "name": "Oceanside",
        "distance": 0.0
      },
      {
        "name": "Emeryville",
        "distance": 0.0
      },
      {
        "name": "Larkspur",
        "distance": 0.0
      },
      {
        "name": "San Carlos",
        "distance": 0.0
      },
      {
        "name": "Benicia",
        "distance": 0.0
      },
      {
        "name": "Claremont",
        "distance": 0.0
      },
      {
        "name": "El Macero",
        "distance": 0.0
      },
      {
        "name": "Fallbrook",
        "distance": 0.0
      },
      {
        "name": "Gardena",
        "distance": 0.0
      },
      {
        "name": "La Puente",
        "distance": 0.0
      },
      {
        "name": "Laguna Beach",
        "distance": 0.0
      },
      {
        "name": "Malibu",
        "distance": 0.0
      },
      {
        "name": "Norco",
        "distance": 0.0
      },
      {
        "name": "Piedmont",
        "distance": 0.0
      },
      {
        "name": "Rocklin",
        "distance": 0.0
      },
      {
        "name": "San Leandro",
        "distance": 0.0
      },
      {
        "name": "Walnut",
        "distance": 0.0
      }
    ]
  },
  "Benicia": {
    "lat": 39.803764,
    "lng": -123.8453,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "California",
        "distance": 0.0
      },
      {
        "name": "Novato",
        "distance": 0.0
      },
      {
        "name": "Anaheim",
        "distance": 0.0
      },
      {
        "name": "Oceanside",
        "distance": 0.0
      },
      {
        "name": "Emeryville",
        "distance": 0.0
      },
      {
        "name": "Larkspur",
        "distance": 0.0
      },
      {
        "name": "San Carlos",
        "distance": 0.0
      },
      {
        "name": "Altadena",
        "distance": 0.0
      },
      {
        "name": "Claremont",
        "distance": 0.0
      },
      {
        "name": "El Macero",
        "distance": 0.0
      },
      {
        "name": "Fallbrook",
        "distance": 0.0
      },
      {
        "name": "Gardena",
        "distance": 0.0
      },
      {
        "name": "La Puente",
        "distance": 0.0
      },
      {
        "name": "Laguna Beach",
        "distance": 0.0
      },
      {
        "name": "Malibu",
        "distance": 0.0
      },
      {
        "name": "Norco",
        "distance": 0.0
      },
      {
        "name": "Piedmont",
        "distance": 0.0
      },
      {
        "name": "Rocklin",
        "distance": 0.0
      },
      {
        "name": "San Leandro",
        "distance": 0.0
      },
      {
        "name": "Walnut",
        "distance": 0.0
      }
    ]
  },
  "Big Bear Lake": {
    "lat": 34.244059,
    "lng": -116.91018,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "San Bernardino",
        "distance": 31.85
      },
      {
        "name": "Lake Arrowhead",
        "distance": 25.85
      },
      {
        "name": "Redlands",
        "distance": 32.04
      }
    ]
  },
  "Boulder Creek": {
    "lat": 37.13786,
    "lng": -122.121832,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Redwood City",
        "distance": 39.96
      },
      {
        "name": "Mountain View",
        "distance": 28.18
      },
      {
        "name": "San Jose",
        "distance": 33.64
      },
      {
        "name": "Menlo Park",
        "distance": 37.98
      },
      {
        "name": "Santa Clara",
        "distance": 21.13
      },
      {
        "name": "Santa Cruz",
        "distance": 21.64
      },
      {
        "name": "Sunnyvale",
        "distance": 26.07
      },
      {
        "name": "Los Altos",
        "distance": 26.82
      },
      {
        "name": "Los Gatos",
        "distance": 16.35
      }
    ]
  },
  "Buena Park": {
    "lat": 33.858627,
    "lng": -118.00209,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Irvine",
        "distance": 24.01
      },
      {
        "name": "El Segundo",
        "distance": 30.67
      },
      {
        "name": "Lake Forest",
        "distance": 37.71
      },
      {
        "name": "Manhattan Beach",
        "distance": 37.83
      },
      {
        "name": "Torrance",
        "distance": 32.45
      },
      {
        "name": "Long Beach",
        "distance": 18.89
      },
      {
        "name": "Santa Ana",
        "distance": 15.02
      },
      {
        "name": "City of Industry",
        "distance": 19.01
      },
      {
        "name": "Huntington Beach",
        "distance": 13.1
      },
      {
        "name": "Redondo Beach",
        "distance": 35.39
      },
      {
        "name": "Cypress",
        "distance": 6.85
      },
      {
        "name": "Downey",
        "distance": 15.59
      },
      {
        "name": "Garden Grove",
        "distance": 10.66
      },
      {
        "name": "Hawthorne",
        "distance": 30.71
      },
      {
        "name": "Lakewood",
        "distance": 13.39
      },
      {
        "name": "San Fernando",
        "distance": 37.49
      },
      {
        "name": "South Pasadena",
        "distance": 31.35
      }
    ]
  },
  "Chula Vista": {
    "lat": 32.640054,
    "lng": -117.084195,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "San Diego",
        "distance": 39.97
      },
      {
        "name": "Palo Alto",
        "distance": 21.48
      },
      {
        "name": "Newport Beach",
        "distance": 19.26
      }
    ]
  },
  "Claremont": {
    "lat": 39.803764,
    "lng": -123.8453,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "California",
        "distance": 0.0
      },
      {
        "name": "Novato",
        "distance": 0.0
      },
      {
        "name": "Anaheim",
        "distance": 0.0
      },
      {
        "name": "Oceanside",
        "distance": 0.0
      },
      {
        "name": "Emeryville",
        "distance": 0.0
      },
      {
        "name": "Larkspur",
        "distance": 0.0
      },
      {
        "name": "San Carlos",
        "distance": 0.0
      },
      {
        "name": "Altadena",
        "distance": 0.0
      },
      {
        "name": "Benicia",
        "distance": 0.0
      },
      {
        "name": "El Macero",
        "distance": 0.0
      },
      {
        "name": "Fallbrook",
        "distance": 0.0
      },
      {
        "name": "Gardena",
        "distance": 0.0
      },
      {
        "name": "La Puente",
        "distance": 0.0
      },
      {
        "name": "Laguna Beach",
        "distance": 0.0
      },
      {
        "name": "Malibu",
        "distance": 0.0
      },
      {
        "name": "Norco",
        "distance": 0.0
      },
      {
        "name": "Piedmont",
        "distance": 0.0
      },
      {
        "name": "Rocklin",
        "distance": 0.0
      },
      {
        "name": "San Leandro",
        "distance": 0.0
      },
      {
        "name": "Walnut",
        "distance": 0.0
      }
    ]
  },
  "Concord": {
    "lat": 43.207178,
    "lng": -71.537476,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Manchester",
        "distance": 29.28
      }
    ]
  },
  "Corona": {
    "lat": 33.755554,
    "lng": -117.476818,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Irvine",
        "distance": 36.1
      },
      {
        "name": "Lake Forest",
        "distance": 25.33
      },
      {
        "name": "Santa Ana",
        "distance": 38.22
      },
      {
        "name": "Fremont",
        "distance": 39.43
      },
      {
        "name": "San Clemente",
        "distance": 38.63
      },
      {
        "name": "Aliso Viejo",
        "distance": 30.48
      },
      {
        "name": "Murrieta",
        "distance": 32.84
      },
      {
        "name": "Rancho Cucamonga",
        "distance": 36.5
      },
      {
        "name": "Rancho Santa Margarita",
        "distance": 17.28
      }
    ]
  },
  "Cypress": {
    "lat": 33.800106,
    "lng": -118.025358,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Irvine",
        "distance": 20.56
      },
      {
        "name": "El Segundo",
        "distance": 30.71
      },
      {
        "name": "Lake Forest",
        "distance": 35.41
      },
      {
        "name": "Manhattan Beach",
        "distance": 36.86
      },
      {
        "name": "Torrance",
        "distance": 29.74
      },
      {
        "name": "Long Beach",
        "distance": 14.59
      },
      {
        "name": "Santa Ana",
        "distance": 13.24
      },
      {
        "name": "City of Industry",
        "distance": 25.82
      },
      {
        "name": "Huntington Beach",
        "distance": 6.3
      },
      {
        "name": "Redondo Beach",
        "distance": 33.48
      },
      {
        "name": "Aliso Viejo",
        "distance": 37.26
      },
      {
        "name": "Buena Park",
        "distance": 6.85
      },
      {
        "name": "Downey",
        "distance": 18.05
      },
      {
        "name": "Garden Grove",
        "distance": 7.83
      },
      {
        "name": "Hawthorne",
        "distance": 30.8
      },
      {
        "name": "Lakewood",
        "distance": 14.53
      },
      {
        "name": "South Pasadena",
        "distance": 36.61
      }
    ]
  },
  "Downey": {
    "lat": 33.924166,
    "lng": -118.151459,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Irvine",
        "distance": 38.49
      },
      {
        "name": "Santa Monica",
        "distance": 30.52
      },
      {
        "name": "Burbank",
        "distance": 30.98
      },
      {
        "name": "El Segundo",
        "distance": 16.21
      },
      {
        "name": "Culver City",
        "distance": 25.18
      },
      {
        "name": "Glendale",
        "distance": 36.63
      },
      {
        "name": "Manhattan Beach",
        "distance": 24.25
      },
      {
        "name": "Torrance",
        "distance": 22.47
      },
      {
        "name": "Long Beach",
        "distance": 16.74
      },
      {
        "name": "Santa Ana",
        "distance": 30.21
      },
      {
        "name": "Beverly Hills",
        "distance": 27.98
      },
      {
        "name": "City of Industry",
        "distance": 20.85
      },
      {
        "name": "Huntington Beach",
        "distance": 22.75
      },
      {
        "name": "Redondo Beach",
        "distance": 23.48
      },
      {
        "name": "West Hollywood",
        "distance": 27.44
      },
      {
        "name": "Buena Park",
        "distance": 15.59
      },
      {
        "name": "Cypress",
        "distance": 18.05
      },
      {
        "name": "Garden Grove",
        "distance": 25.2
      },
      {
        "name": "Hawthorne",
        "distance": 16.21
      },
      {
        "name": "Lakewood",
        "distance": 4.23
      },
      {
        "name": "Marina del Rey",
        "distance": 28.05
      },
      {
        "name": "San Fernando",
        "distance": 24.07
      },
      {
        "name": "South Pasadena",
        "distance": 21.03
      },
      {
        "name": "Universal City",
        "distance": 30.36
      }
    ]
  },
  "El Macero": {
    "lat": 39.803764,
    "lng": -123.8453,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "California",
        "distance": 0.0
      },
      {
        "name": "Novato",
        "distance": 0.0
      },
      {
        "name": "Anaheim",
        "distance": 0.0
      },
      {
        "name": "Oceanside",
        "distance": 0.0
      },
      {
        "name": "Emeryville",
        "distance": 0.0
      },
      {
        "name": "Larkspur",
        "distance": 0.0
      },
      {
        "name": "San Carlos",
        "distance": 0.0
      },
      {
        "name": "Altadena",
        "distance": 0.0
      },
      {
        "name": "Benicia",
        "distance": 0.0
      },
      {
        "name": "Claremont",
        "distance": 0.0
      },
      {
        "name": "Fallbrook",
        "distance": 0.0
      },
      {
        "name": "Gardena",
        "distance": 0.0
      },
      {
        "name": "La Puente",
        "distance": 0.0
      },
      {
        "name": "Laguna Beach",
        "distance": 0.0
      },
      {
        "name": "Malibu",
        "distance": 0.0
      },
      {
        "name": "Norco",
        "distance": 0.0
      },
      {
        "name": "Piedmont",
        "distance": 0.0
      },
      {
        "name": "Rocklin",
        "distance": 0.0
      },
      {
        "name": "San Leandro",
        "distance": 0.0
      },
      {
        "name": "Walnut",
        "distance": 0.0
      }
    ]
  },
  "Fallbrook": {
    "lat": 39.803764,
    "lng": -123.8453,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "California",
        "distance": 0.0
      },
      {
        "name": "Novato",
        "distance": 0.0
      },
      {
        "name": "Anaheim",
        "distance": 0.0
      },
      {
        "name": "Oceanside",
        "distance": 0.0
      },
      {
        "name": "Emeryville",
        "distance": 0.0
      },
      {
        "name": "Larkspur",
        "distance": 0.0
      },
      {
        "name": "San Carlos",
        "distance": 0.0
      },
      {
        "name": "Altadena",
        "distance": 0.0
      },
      {
        "name": "Benicia",
        "distance": 0.0
      },
      {
        "name": "Claremont",
        "distance": 0.0
      },
      {
        "name": "El Macero",
        "distance": 0.0
      },
      {
        "name": "Gardena",
        "distance": 0.0
      },
      {
        "name": "La Puente",
        "distance": 0.0
      },
      {
        "name": "Laguna Beach",
        "distance": 0.0
      },
      {
        "name": "Malibu",
        "distance": 0.0
      },
      {
        "name": "Norco",
        "distance": 0.0
      },
      {
        "name": "Piedmont",
        "distance": 0.0
      },
      {
        "name": "Rocklin",
        "distance": 0.0
      },
      {
        "name": "San Leandro",
        "distance": 0.0
      },
      {
        "name": "Walnut",
        "distance": 0.0
      }
    ]
  },
  "Garden Grove": {
    "lat": 33.774629,
    "lng": -117.946372,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Irvine",
        "distance": 13.43
      },
      {
        "name": "El Segundo",
        "distance": 38.53
      },
      {
        "name": "Lake Forest",
        "distance": 27.78
      },
      {
        "name": "Torrance",
        "distance": 37.18
      },
      {
        "name": "Long Beach",
        "distance": 21.63
      },
      {
        "name": "Santa Ana",
        "distance": 5.42
      },
      {
        "name": "City of Industry",
        "distance": 28.02
      },
      {
        "name": "Huntington Beach",
        "distance": 8.86
      },
      {
        "name": "Aliso Viejo",
        "distance": 30.06
      },
      {
        "name": "Buena Park",
        "distance": 10.66
      },
      {
        "name": "Cypress",
        "distance": 7.83
      },
      {
        "name": "Downey",
        "distance": 25.2
      },
      {
        "name": "Hawthorne",
        "distance": 38.61
      },
      {
        "name": "Lakewood",
        "distance": 22.04
      },
      {
        "name": "Rancho Santa Margarita",
        "distance": 35.08
      }
    ]
  },
  "Gardena": {
    "lat": 39.803764,
    "lng": -123.8453,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "California",
        "distance": 0.0
      },
      {
        "name": "Novato",
        "distance": 0.0
      },
      {
        "name": "Anaheim",
        "distance": 0.0
      },
      {
        "name": "Oceanside",
        "distance": 0.0
      },
      {
        "name": "Emeryville",
        "distance": 0.0
      },
      {
        "name": "Larkspur",
        "distance": 0.0
      },
      {
        "name": "San Carlos",
        "distance": 0.0
      },
      {
        "name": "Altadena",
        "distance": 0.0
      },
      {
        "name": "Benicia",
        "distance": 0.0
      },
      {
        "name": "Claremont",
        "distance": 0.0
      },
      {
        "name": "El Macero",
        "distance": 0.0
      },
      {
        "name": "Fallbrook",
        "distance": 0.0
      },
      {
        "name": "La Puente",
        "distance": 0.0
      },
      {
        "name": "Laguna Beach",
        "distance": 0.0
      },
      {
        "name": "Malibu",
        "distance": 0.0
      },
      {
        "name": "Norco",
        "distance": 0.0
      },
      {
        "name": "Piedmont",
        "distance": 0.0
      },
      {
        "name": "Rocklin",
        "distance": 0.0
      },
      {
        "name": "San Leandro",
        "distance": 0.0
      },
      {
        "name": "Walnut",
        "distance": 0.0
      }
    ]
  },
  "Hawthorne": {
    "lat": 33.918397,
    "lng": -118.326957,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Santa Monica",
        "distance": 18.08
      },
      {
        "name": "Burbank",
        "distance": 26.81
      },
      {
        "name": "El Segundo",
        "distance": 0.19
      },
      {
        "name": "Culver City",
        "distance": 12.65
      },
      {
        "name": "Glendale",
        "distance": 36.66
      },
      {
        "name": "Manhattan Beach",
        "distance": 8.45
      },
      {
        "name": "Torrance",
        "distance": 12.85
      },
      {
        "name": "Long Beach",
        "distance": 20.86
      },
      {
        "name": "Beverly Hills",
        "distance": 18.04
      },
      {
        "name": "City of Industry",
        "distance": 35.75
      },
      {
        "name": "Huntington Beach",
        "distance": 33.23
      },
      {
        "name": "Redondo Beach",
        "distance": 10.23
      },
      {
        "name": "West Hollywood",
        "distance": 19.73
      },
      {
        "name": "Buena Park",
        "distance": 30.71
      },
      {
        "name": "Cypress",
        "distance": 30.8
      },
      {
        "name": "Downey",
        "distance": 16.21
      },
      {
        "name": "Garden Grove",
        "distance": 38.61
      },
      {
        "name": "Lakewood",
        "distance": 17.33
      },
      {
        "name": "Marina del Rey",
        "distance": 13.02
      },
      {
        "name": "San Fernando",
        "distance": 23.74
      },
      {
        "name": "South Pasadena",
        "distance": 27.24
      },
      {
        "name": "Universal City",
        "distance": 24.69
      }
    ]
  },
  "La Puente": {
    "lat": 39.803764,
    "lng": -123.8453,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "California",
        "distance": 0.0
      },
      {
        "name": "Novato",
        "distance": 0.0
      },
      {
        "name": "Anaheim",
        "distance": 0.0
      },
      {
        "name": "Oceanside",
        "distance": 0.0
      },
      {
        "name": "Emeryville",
        "distance": 0.0
      },
      {
        "name": "Larkspur",
        "distance": 0.0
      },
      {
        "name": "San Carlos",
        "distance": 0.0
      },
      {
        "name": "Altadena",
        "distance": 0.0
      },
      {
        "name": "Benicia",
        "distance": 0.0
      },
      {
        "name": "Claremont",
        "distance": 0.0
      },
      {
        "name": "El Macero",
        "distance": 0.0
      },
      {
        "name": "Fallbrook",
        "distance": 0.0
      },
      {
        "name": "Gardena",
        "distance": 0.0
      },
      {
        "name": "Laguna Beach",
        "distance": 0.0
      },
      {
        "name": "Malibu",
        "distance": 0.0
      },
      {
        "name": "Norco",
        "distance": 0.0
      },
      {
        "name": "Piedmont",
        "distance": 0.0
      },
      {
        "name": "Rocklin",
        "distance": 0.0
      },
      {
        "name": "San Leandro",
        "distance": 0.0
      },
      {
        "name": "Walnut",
        "distance": 0.0
      }
    ]
  },
  "Laguna Beach": {
    "lat": 39.803764,
    "lng": -123.8453,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "California",
        "distance": 0.0
      },
      {
        "name": "Novato",
        "distance": 0.0
      },
      {
        "name": "Anaheim",
        "distance": 0.0
      },
      {
        "name": "Oceanside",
        "distance": 0.0
      },
      {
        "name": "Emeryville",
        "distance": 0.0
      },
      {
        "name": "Larkspur",
        "distance": 0.0
      },
      {
        "name": "San Carlos",
        "distance": 0.0
      },
      {
        "name": "Altadena",
        "distance": 0.0
      },
      {
        "name": "Benicia",
        "distance": 0.0
      },
      {
        "name": "Claremont",
        "distance": 0.0
      },
      {
        "name": "El Macero",
        "distance": 0.0
      },
      {
        "name": "Fallbrook",
        "distance": 0.0
      },
      {
        "name": "Gardena",
        "distance": 0.0
      },
      {
        "name": "La Puente",
        "distance": 0.0
      },
      {
        "name": "Malibu",
        "distance": 0.0
      },
      {
        "name": "Norco",
        "distance": 0.0
      },
      {
        "name": "Piedmont",
        "distance": 0.0
      },
      {
        "name": "Rocklin",
        "distance": 0.0
      },
      {
        "name": "San Leandro",
        "distance": 0.0
      },
      {
        "name": "Walnut",
        "distance": 0.0
      }
    ]
  },
  "Lake Arrowhead": {
    "lat": 34.248968,
    "lng": -117.191332,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Fremont",
        "distance": 33.33
      },
      {
        "name": "San Bernardino",
        "distance": 26.45
      },
      {
        "name": "Big Bear Lake",
        "distance": 25.85
      },
      {
        "name": "Rancho Cucamonga",
        "distance": 36.68
      },
      {
        "name": "Redlands",
        "distance": 20.55
      }
    ]
  },
  "Lakewood": {
    "lat": 33.886757,
    "lng": -118.143097,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Irvine",
        "distance": 35.09
      },
      {
        "name": "Santa Monica",
        "distance": 33.24
      },
      {
        "name": "Burbank",
        "distance": 34.95
      },
      {
        "name": "El Segundo",
        "distance": 17.28
      },
      {
        "name": "Culver City",
        "distance": 27.76
      },
      {
        "name": "Manhattan Beach",
        "distance": 24.68
      },
      {
        "name": "Torrance",
        "distance": 20.97
      },
      {
        "name": "Long Beach",
        "distance": 12.83
      },
      {
        "name": "Santa Ana",
        "distance": 27.25
      },
      {
        "name": "Beverly Hills",
        "distance": 31.15
      },
      {
        "name": "City of Industry",
        "distance": 22.81
      },
      {
        "name": "Huntington Beach",
        "distance": 18.77
      },
      {
        "name": "Redondo Beach",
        "distance": 22.9
      },
      {
        "name": "West Hollywood",
        "distance": 30.94
      },
      {
        "name": "Buena Park",
        "distance": 13.39
      },
      {
        "name": "Cypress",
        "distance": 14.53
      },
      {
        "name": "Downey",
        "distance": 4.23
      },
      {
        "name": "Garden Grove",
        "distance": 22.04
      },
      {
        "name": "Hawthorne",
        "distance": 17.33
      },
      {
        "name": "Marina del Rey",
        "distance": 29.95
      },
      {
        "name": "San Fernando",
        "distance": 28.21
      },
      {
        "name": "South Pasadena",
        "distance": 25.19
      },
      {
        "name": "Universal City",
        "distance": 34.17
      }
    ]
  },
  "Los Altos": {
    "lat": 37.379063,
    "lng": -122.116578,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "San Mateo",
        "distance": 27.7
      },
      {
        "name": "Redwood City",
        "distance": 15.72
      },
      {
        "name": "Mountain View",
        "distance": 3.16
      },
      {
        "name": "Burlingame",
        "distance": 33.27
      },
      {
        "name": "San Jose",
        "distance": 19.6
      },
      {
        "name": "Foster City",
        "distance": 24.2
      },
      {
        "name": "Menlo Park",
        "distance": 11.4
      },
      {
        "name": "Santa Clara",
        "distance": 10.46
      },
      {
        "name": "Sunnyvale",
        "distance": 8.71
      },
      {
        "name": "Boulder Creek",
        "distance": 26.82
      },
      {
        "name": "Los Gatos",
        "distance": 21.09
      },
      {
        "name": "South San Francisco",
        "distance": 38.99
      }
    ]
  },
  "Los Gatos": {
    "lat": 37.226611,
    "lng": -121.97468,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Redwood City",
        "distance": 36.79
      },
      {
        "name": "Mountain View",
        "distance": 20.49
      },
      {
        "name": "San Jose",
        "distance": 18.51
      },
      {
        "name": "Menlo Park",
        "distance": 31.89
      },
      {
        "name": "Santa Clara",
        "distance": 10.91
      },
      {
        "name": "Santa Cruz",
        "distance": 28.93
      },
      {
        "name": "Sunnyvale",
        "distance": 15.22
      },
      {
        "name": "Boulder Creek",
        "distance": 16.35
      },
      {
        "name": "Los Altos",
        "distance": 21.09
      }
    ]
  },
  "Malibu": {
    "lat": 39.803764,
    "lng": -123.8453,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "California",
        "distance": 0.0
      },
      {
        "name": "Novato",
        "distance": 0.0
      },
      {
        "name": "Anaheim",
        "distance": 0.0
      },
      {
        "name": "Oceanside",
        "distance": 0.0
      },
      {
        "name": "Emeryville",
        "distance": 0.0
      },
      {
        "name": "Larkspur",
        "distance": 0.0
      },
      {
        "name": "San Carlos",
        "distance": 0.0
      },
      {
        "name": "Altadena",
        "distance": 0.0
      },
      {
        "name": "Benicia",
        "distance": 0.0
      },
      {
        "name": "Claremont",
        "distance": 0.0
      },
      {
        "name": "El Macero",
        "distance": 0.0
      },
      {
        "name": "Fallbrook",
        "distance": 0.0
      },
      {
        "name": "Gardena",
        "distance": 0.0
      },
      {
        "name": "La Puente",
        "distance": 0.0
      },
      {
        "name": "Laguna Beach",
        "distance": 0.0
      },
      {
        "name": "Norco",
        "distance": 0.0
      },
      {
        "name": "Piedmont",
        "distance": 0.0
      },
      {
        "name": "Rocklin",
        "distance": 0.0
      },
      {
        "name": "San Leandro",
        "distance": 0.0
      },
      {
        "name": "Walnut",
        "distance": 0.0
      }
    ]
  },
  "Marina del Rey": {
    "lat": 33.977685,
    "lng": -118.448647,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Santa Monica",
        "distance": 7.65
      },
      {
        "name": "Burbank",
        "distance": 22.91
      },
      {
        "name": "El Segundo",
        "distance": 13.12
      },
      {
        "name": "Culver City",
        "distance": 5.82
      },
      {
        "name": "Glendale",
        "distance": 34.48
      },
      {
        "name": "Manhattan Beach",
        "distance": 10.65
      },
      {
        "name": "Torrance",
        "distance": 21.46
      },
      {
        "name": "Long Beach",
        "distance": 33.44
      },
      {
        "name": "Beverly Hills",
        "distance": 11.12
      },
      {
        "name": "Calabasas",
        "distance": 30.08
      },
      {
        "name": "Redondo Beach",
        "distance": 16.43
      },
      {
        "name": "West Hollywood",
        "distance": 14.69
      },
      {
        "name": "Agoura Hills",
        "distance": 34.81
      },
      {
        "name": "Downey",
        "distance": 28.05
      },
      {
        "name": "Hawthorne",
        "distance": 13.02
      },
      {
        "name": "Lakewood",
        "distance": 29.95
      },
      {
        "name": "San Fernando",
        "distance": 24.15
      },
      {
        "name": "South Pasadena",
        "distance": 31.55
      },
      {
        "name": "Universal City",
        "distance": 19.95
      }
    ]
  },
  "Moorpark": {
    "lat": 34.19998,
    "lng": -118.867982,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Calabasas",
        "distance": 15.98
      },
      {
        "name": "Agoura Hills",
        "distance": 11.05
      }
    ]
  },
  "Murrieta": {
    "lat": 33.566243,
    "lng": -117.204449,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Corona",
        "distance": 32.84
      },
      {
        "name": "Rancho Santa Margarita",
        "distance": 37.83
      }
    ]
  },
  "Norco": {
    "lat": 39.803764,
    "lng": -123.8453,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "California",
        "distance": 0.0
      },
      {
        "name": "Novato",
        "distance": 0.0
      },
      {
        "name": "Anaheim",
        "distance": 0.0
      },
      {
        "name": "Oceanside",
        "distance": 0.0
      },
      {
        "name": "Emeryville",
        "distance": 0.0
      },
      {
        "name": "Larkspur",
        "distance": 0.0
      },
      {
        "name": "San Carlos",
        "distance": 0.0
      },
      {
        "name": "Altadena",
        "distance": 0.0
      },
      {
        "name": "Benicia",
        "distance": 0.0
      },
      {
        "name": "Claremont",
        "distance": 0.0
      },
      {
        "name": "El Macero",
        "distance": 0.0
      },
      {
        "name": "Fallbrook",
        "distance": 0.0
      },
      {
        "name": "Gardena",
        "distance": 0.0
      },
      {
        "name": "La Puente",
        "distance": 0.0
      },
      {
        "name": "Laguna Beach",
        "distance": 0.0
      },
      {
        "name": "Malibu",
        "distance": 0.0
      },
      {
        "name": "Piedmont",
        "distance": 0.0
      },
      {
        "name": "Rocklin",
        "distance": 0.0
      },
      {
        "name": "San Leandro",
        "distance": 0.0
      },
      {
        "name": "Walnut",
        "distance": 0.0
      }
    ]
  },
  "Piedmont": {
    "lat": 39.803764,
    "lng": -123.8453,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "California",
        "distance": 0.0
      },
      {
        "name": "Novato",
        "distance": 0.0
      },
      {
        "name": "Anaheim",
        "distance": 0.0
      },
      {
        "name": "Oceanside",
        "distance": 0.0
      },
      {
        "name": "Emeryville",
        "distance": 0.0
      },
      {
        "name": "Larkspur",
        "distance": 0.0
      },
      {
        "name": "San Carlos",
        "distance": 0.0
      },
      {
        "name": "Altadena",
        "distance": 0.0
      },
      {
        "name": "Benicia",
        "distance": 0.0
      },
      {
        "name": "Claremont",
        "distance": 0.0
      },
      {
        "name": "El Macero",
        "distance": 0.0
      },
      {
        "name": "Fallbrook",
        "distance": 0.0
      },
      {
        "name": "Gardena",
        "distance": 0.0
      },
      {
        "name": "La Puente",
        "distance": 0.0
      },
      {
        "name": "Laguna Beach",
        "distance": 0.0
      },
      {
        "name": "Malibu",
        "distance": 0.0
      },
      {
        "name": "Norco",
        "distance": 0.0
      },
      {
        "name": "Rocklin",
        "distance": 0.0
      },
      {
        "name": "San Leandro",
        "distance": 0.0
      },
      {
        "name": "Walnut",
        "distance": 0.0
      }
    ]
  },
  "Rancho Cucamonga": {
    "lat": 34.080357,
    "lng": -117.534015,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "City of Industry",
        "distance": 39.86
      },
      {
        "name": "Fremont",
        "distance": 3.79
      },
      {
        "name": "Corona",
        "distance": 36.5
      },
      {
        "name": "Lake Arrowhead",
        "distance": 36.68
      },
      {
        "name": "Redlands",
        "distance": 32.44
      },
      {
        "name": "Upland",
        "distance": 9.28
      }
    ]
  },
  "Rancho Santa Margarita": {
    "lat": 33.640884,
    "lng": -117.602934,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Irvine",
        "distance": 23.86
      },
      {
        "name": "Lake Forest",
        "distance": 9.42
      },
      {
        "name": "Santa Ana",
        "distance": 29.72
      },
      {
        "name": "San Clemente",
        "distance": 23.8
      },
      {
        "name": "Aliso Viejo",
        "distance": 13.47
      },
      {
        "name": "Corona",
        "distance": 17.28
      },
      {
        "name": "Garden Grove",
        "distance": 35.08
      },
      {
        "name": "Murrieta",
        "distance": 37.83
      }
    ]
  },
  "Redlands": {
    "lat": 34.06429,
    "lng": -117.182294,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Fremont",
        "distance": 30.74
      },
      {
        "name": "Big Bear Lake",
        "distance": 32.04
      },
      {
        "name": "Lake Arrowhead",
        "distance": 20.55
      },
      {
        "name": "Rancho Cucamonga",
        "distance": 32.44
      }
    ]
  },
  "Rocklin": {
    "lat": 39.803764,
    "lng": -123.8453,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "California",
        "distance": 0.0
      },
      {
        "name": "Novato",
        "distance": 0.0
      },
      {
        "name": "Anaheim",
        "distance": 0.0
      },
      {
        "name": "Oceanside",
        "distance": 0.0
      },
      {
        "name": "Emeryville",
        "distance": 0.0
      },
      {
        "name": "Larkspur",
        "distance": 0.0
      },
      {
        "name": "San Carlos",
        "distance": 0.0
      },
      {
        "name": "Altadena",
        "distance": 0.0
      },
      {
        "name": "Benicia",
        "distance": 0.0
      },
      {
        "name": "Claremont",
        "distance": 0.0
      },
      {
        "name": "El Macero",
        "distance": 0.0
      },
      {
        "name": "Fallbrook",
        "distance": 0.0
      },
      {
        "name": "Gardena",
        "distance": 0.0
      },
      {
        "name": "La Puente",
        "distance": 0.0
      },
      {
        "name": "Laguna Beach",
        "distance": 0.0
      },
      {
        "name": "Malibu",
        "distance": 0.0
      },
      {
        "name": "Norco",
        "distance": 0.0
      },
      {
        "name": "Piedmont",
        "distance": 0.0
      },
      {
        "name": "San Leandro",
        "distance": 0.0
      },
      {
        "name": "Walnut",
        "distance": 0.0
      }
    ]
  },
  "Rohnert Park": {
    "lat": 38.339637,
    "lng": -122.701098,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "San Rafael",
        "distance": 39.73
      }
    ]
  },
  "San Fernando": {
    "lat": 34.123207,
    "lng": -118.254062,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Santa Monica",
        "distance": 19.78
      },
      {
        "name": "Burbank",
        "distance": 8.19
      },
      {
        "name": "El Segundo",
        "distance": 23.93
      },
      {
        "name": "Culver City",
        "distance": 18.33
      },
      {
        "name": "Glendale",
        "distance": 13.26
      },
      {
        "name": "Manhattan Beach",
        "distance": 29.93
      },
      {
        "name": "Torrance",
        "distance": 36.52
      },
      {
        "name": "Long Beach",
        "distance": 39.25
      },
      {
        "name": "Beverly Hills",
        "distance": 14.69
      },
      {
        "name": "City of Industry",
        "distance": 29.0
      },
      {
        "name": "Redondo Beach",
        "distance": 33.73
      },
      {
        "name": "West Hollywood",
        "distance": 11.15
      },
      {
        "name": "Buena Park",
        "distance": 37.49
      },
      {
        "name": "Downey",
        "distance": 24.07
      },
      {
        "name": "Hawthorne",
        "distance": 23.74
      },
      {
        "name": "Lakewood",
        "distance": 28.21
      },
      {
        "name": "Marina del Rey",
        "distance": 24.15
      },
      {
        "name": "South Pasadena",
        "distance": 9.84
      },
      {
        "name": "Universal City",
        "distance": 9.4
      }
    ]
  },
  "San Leandro": {
    "lat": 39.803764,
    "lng": -123.8453,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "California",
        "distance": 0.0
      },
      {
        "name": "Novato",
        "distance": 0.0
      },
      {
        "name": "Anaheim",
        "distance": 0.0
      },
      {
        "name": "Oceanside",
        "distance": 0.0
      },
      {
        "name": "Emeryville",
        "distance": 0.0
      },
      {
        "name": "Larkspur",
        "distance": 0.0
      },
      {
        "name": "San Carlos",
        "distance": 0.0
      },
      {
        "name": "Altadena",
        "distance": 0.0
      },
      {
        "name": "Benicia",
        "distance": 0.0
      },
      {
        "name": "Claremont",
        "distance": 0.0
      },
      {
        "name": "El Macero",
        "distance": 0.0
      },
      {
        "name": "Fallbrook",
        "distance": 0.0
      },
      {
        "name": "Gardena",
        "distance": 0.0
      },
      {
        "name": "La Puente",
        "distance": 0.0
      },
      {
        "name": "Laguna Beach",
        "distance": 0.0
      },
      {
        "name": "Malibu",
        "distance": 0.0
      },
      {
        "name": "Norco",
        "distance": 0.0
      },
      {
        "name": "Piedmont",
        "distance": 0.0
      },
      {
        "name": "Rocklin",
        "distance": 0.0
      },
      {
        "name": "Walnut",
        "distance": 0.0
      }
    ]
  },
  "Sausalito": {
    "lat": 37.864425,
    "lng": -122.495132,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "San Francisco",
        "distance": 9.61
      },
      {
        "name": "San Mateo",
        "distance": 36.35
      },
      {
        "name": "Oakland",
        "distance": 18.53
      },
      {
        "name": "Berkeley",
        "distance": 19.17
      },
      {
        "name": "Burlingame",
        "distance": 31.63
      },
      {
        "name": "Foster City",
        "distance": 39.27
      },
      {
        "name": "San Rafael",
        "distance": 16.2
      },
      {
        "name": "Alameda",
        "distance": 19.17
      },
      {
        "name": "El Cerrito",
        "distance": 17.92
      },
      {
        "name": "Walnut Creek",
        "distance": 38.25
      },
      {
        "name": "South San Francisco",
        "distance": 25.58
      }
    ]
  },
  "South Pasadena": {
    "lat": 34.113306,
    "lng": -118.147829,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Santa Monica",
        "distance": 28.61
      },
      {
        "name": "Burbank",
        "distance": 17.67
      },
      {
        "name": "El Segundo",
        "distance": 27.39
      },
      {
        "name": "Culver City",
        "distance": 25.96
      },
      {
        "name": "Glendale",
        "distance": 17.36
      },
      {
        "name": "Manhattan Beach",
        "distance": 34.9
      },
      {
        "name": "Torrance",
        "distance": 39.0
      },
      {
        "name": "Long Beach",
        "distance": 37.67
      },
      {
        "name": "Beverly Hills",
        "distance": 23.7
      },
      {
        "name": "City of Industry",
        "distance": 19.68
      },
      {
        "name": "Redondo Beach",
        "distance": 37.43
      },
      {
        "name": "West Hollywood",
        "distance": 20.52
      },
      {
        "name": "Buena Park",
        "distance": 31.35
      },
      {
        "name": "Cypress",
        "distance": 36.61
      },
      {
        "name": "Downey",
        "distance": 21.03
      },
      {
        "name": "Hawthorne",
        "distance": 27.24
      },
      {
        "name": "Lakewood",
        "distance": 25.19
      },
      {
        "name": "Marina del Rey",
        "distance": 31.55
      },
      {
        "name": "San Fernando",
        "distance": 9.84
      },
      {
        "name": "Universal City",
        "distance": 19.23
      }
    ]
  },
  "South San Francisco": {
    "lat": 37.646303,
    "lng": -122.402775,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "San Francisco",
        "distance": 18.19
      },
      {
        "name": "San Mateo",
        "distance": 11.3
      },
      {
        "name": "Oakland",
        "distance": 24.67
      },
      {
        "name": "Redwood City",
        "distance": 23.27
      },
      {
        "name": "Berkeley",
        "distance": 28.31
      },
      {
        "name": "Burlingame",
        "distance": 6.07
      },
      {
        "name": "Foster City",
        "distance": 15.21
      },
      {
        "name": "Menlo Park",
        "distance": 29.29
      },
      {
        "name": "Alameda",
        "distance": 28.31
      },
      {
        "name": "El Cerrito",
        "distance": 31.22
      },
      {
        "name": "Los Altos",
        "distance": 38.99
      },
      {
        "name": "Sausalito",
        "distance": 25.58
      }
    ]
  },
  "Twain Harte": {
    "lat": 38.033735,
    "lng": -120.238494,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Universal City": {
    "lat": 34.139232,
    "lng": -118.354383,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Santa Monica",
        "distance": 13.43
      },
      {
        "name": "Burbank",
        "distance": 3.07
      },
      {
        "name": "El Segundo",
        "distance": 24.88
      },
      {
        "name": "Culver City",
        "distance": 14.68
      },
      {
        "name": "Glendale",
        "distance": 14.74
      },
      {
        "name": "Manhattan Beach",
        "distance": 28.49
      },
      {
        "name": "Torrance",
        "distance": 37.28
      },
      {
        "name": "Beverly Hills",
        "distance": 8.85
      },
      {
        "name": "Calabasas",
        "distance": 32.77
      },
      {
        "name": "City of Industry",
        "distance": 38.28
      },
      {
        "name": "Redondo Beach",
        "distance": 33.41
      },
      {
        "name": "West Hollywood",
        "distance": 5.4
      },
      {
        "name": "Agoura Hills",
        "distance": 37.85
      },
      {
        "name": "Downey",
        "distance": 30.36
      },
      {
        "name": "Hawthorne",
        "distance": 24.69
      },
      {
        "name": "Lakewood",
        "distance": 34.17
      },
      {
        "name": "Marina del Rey",
        "distance": 19.95
      },
      {
        "name": "San Fernando",
        "distance": 9.4
      },
      {
        "name": "South Pasadena",
        "distance": 19.23
      }
    ]
  },
  "Upland": {
    "lat": 34.108047,
    "lng": -117.629089,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "City of Industry",
        "distance": 31.96
      },
      {
        "name": "Fremont",
        "distance": 10.8
      },
      {
        "name": "Rancho Cucamonga",
        "distance": 9.28
      }
    ]
  },
  "Visalia": {
    "lat": 36.328089,
    "lng": -119.386796,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Walnut": {
    "lat": 39.803764,
    "lng": -123.8453,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "California",
        "distance": 0.0
      },
      {
        "name": "Novato",
        "distance": 0.0
      },
      {
        "name": "Anaheim",
        "distance": 0.0
      },
      {
        "name": "Oceanside",
        "distance": 0.0
      },
      {
        "name": "Emeryville",
        "distance": 0.0
      },
      {
        "name": "Larkspur",
        "distance": 0.0
      },
      {
        "name": "San Carlos",
        "distance": 0.0
      },
      {
        "name": "Altadena",
        "distance": 0.0
      },
      {
        "name": "Benicia",
        "distance": 0.0
      },
      {
        "name": "Claremont",
        "distance": 0.0
      },
      {
        "name": "El Macero",
        "distance": 0.0
      },
      {
        "name": "Fallbrook",
        "distance": 0.0
      },
      {
        "name": "Gardena",
        "distance": 0.0
      },
      {
        "name": "La Puente",
        "distance": 0.0
      },
      {
        "name": "Laguna Beach",
        "distance": 0.0
      },
      {
        "name": "Malibu",
        "distance": 0.0
      },
      {
        "name": "Norco",
        "distance": 0.0
      },
      {
        "name": "Piedmont",
        "distance": 0.0
      },
      {
        "name": "Rocklin",
        "distance": 0.0
      },
      {
        "name": "San Leandro",
        "distance": 0.0
      }
    ]
  },
  "cambridge": {
    "lat": 52.333333,
    "lng": 0.083333,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "ely",
        "distance": 14.16
      },
      {
        "name": "huntingdon",
        "distance": 18.19
      },
      {
        "name": "milton",
        "distance": 11.4
      }
    ]
  },
  "ely": {
    "lat": 52.39902,
    "lng": 0.262039,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "cambridge",
        "distance": 14.16
      },
      {
        "name": "huntingdon",
        "distance": 31.25
      },
      {
        "name": "milton",
        "distance": 18.74
      }
    ]
  },
  "huntingdon": {
    "lat": 52.330509,
    "lng": -0.184351,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "cambridge",
        "distance": 18.19
      },
      {
        "name": "ely",
        "distance": 31.25
      },
      {
        "name": "milton",
        "distance": 25.42
      },
      {
        "name": "letchworth-garden-city",
        "distance": 39.05
      }
    ]
  },
  "milton": {
    "lat": 52.242296,
    "lng": 0.160473,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "cambridge",
        "distance": 11.4
      },
      {
        "name": "ely",
        "distance": 18.74
      },
      {
        "name": "huntingdon",
        "distance": 25.42
      },
      {
        "name": "letchworth-garden-city",
        "distance": 39.44
      }
    ]
  },
  "los-cristianos": {
    "lat": 28.05263,
    "lng": -16.717,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "san-cristobal-de-la-laguna": {
    "lat": 28.485771,
    "lng": -16.315942,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "bern": {
    "lat": 46.943801,
    "lng": 7.433448,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "copenhagen": {
    "lat": 55.686724,
    "lng": 12.570072,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "frederiksberg",
        "distance": 2.54
      },
      {
        "name": "malmo",
        "distance": 28.47
      },
      {
        "name": "lund",
        "distance": 39.08
      }
    ]
  },
  "frederiksberg": {
    "lat": 55.678016,
    "lng": 12.532619,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "copenhagen",
        "distance": 2.54
      },
      {
        "name": "malmo",
        "distance": 30.43
      }
    ]
  },
  "reykjavik": {
    "lat": 64.145981,
    "lng": -21.942237,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "seltjarnarnes",
        "distance": 2.34
      }
    ]
  },
  "seltjarnarnes": {
    "lat": 64.152655,
    "lng": -21.987956,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "reykjavik",
        "distance": 2.34
      }
    ]
  },
  "cardiff": {
    "lat": 51.481655,
    "lng": -3.179193,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "pencoed",
        "distance": 23.17
      },
      {
        "name": "avon",
        "distance": 33.54
      },
      {
        "name": "caerphilly",
        "distance": 21.21
      },
      {
        "name": "abercynon",
        "distance": 20.79
      }
    ]
  },
  "castilla-y-leon": {
    "lat": 41.55005,
    "lng": -5.13874,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "barcelona": {
    "lat": 41.38258,
    "lng": 2.177073,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "granollers",
        "distance": 26.7
      },
      {
        "name": "sant-cugat-del-valles",
        "distance": 12.8
      }
    ]
  },
  "granollers": {
    "lat": 41.607956,
    "lng": 2.287601,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "barcelona",
        "distance": 26.7
      },
      {
        "name": "sant-cugat-del-valles",
        "distance": 22.78
      }
    ]
  },
  "lleida": {
    "lat": 41.614761,
    "lng": 0.626784,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "sant-cugat-del-valles": {
    "lat": 41.472843,
    "lng": 2.081781,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "barcelona",
        "distance": 12.8
      },
      {
        "name": "granollers",
        "distance": 22.78
      }
    ]
  },
  "hb004318": {
    "lat": 41.852309,
    "lng": 1.574504,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "mnisek-pod-brdy": {
    "lat": 49.866414,
    "lng": 14.260949,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "prague",
        "distance": 25.25
      }
    ]
  },
  "central-denmark-region": {
    "lat": 56.235648,
    "lng": 9.234625,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "viborg",
        "distance": 25.75
      }
    ]
  },
  "viborg": {
    "lat": 56.446913,
    "lng": 9.405935,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "central-denmark-region",
        "distance": 25.75
      }
    ]
  },
  "aarhus": {
    "lat": 56.149628,
    "lng": 10.213405,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "grenaa": {
    "lat": 56.413442,
    "lng": 10.879314,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "jyvaskyla": {
    "lat": 62.241672,
    "lng": 25.749581,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "downtown-core": {
    "lat": 1.286242,
    "lng": 103.853776,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "queenstown",
        "distance": 6.15
      },
      {
        "name": "kallang",
        "distance": 3.06
      },
      {
        "name": "bukit-merah",
        "distance": 5.2
      },
      {
        "name": "geylang",
        "distance": 4.41
      },
      {
        "name": "marina-south",
        "distance": 1.68
      },
      {
        "name": "newton",
        "distance": 3.02
      },
      {
        "name": "outram",
        "distance": 1.55
      },
      {
        "name": "ang-mo-kio",
        "distance": 7.7
      },
      {
        "name": "central-water-catchment",
        "distance": 10.87
      }
    ]
  },
  "queenstown": {
    "lat": 1.299437,
    "lng": 103.800088,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "downtown-core",
        "distance": 6.15
      },
      {
        "name": "kallang",
        "distance": 7.46
      },
      {
        "name": "bukit-merah",
        "distance": 1.69
      },
      {
        "name": "geylang",
        "distance": 8.35
      },
      {
        "name": "marina-south",
        "distance": 7.72
      },
      {
        "name": "newton",
        "distance": 4.41
      },
      {
        "name": "outram",
        "distance": 4.92
      },
      {
        "name": "ang-mo-kio",
        "distance": 8.87
      },
      {
        "name": "central-water-catchment",
        "distance": 7.86
      }
    ]
  },
  "kallang": {
    "lat": 1.310759,
    "lng": 103.866262,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "downtown-core",
        "distance": 3.06
      },
      {
        "name": "queenstown",
        "distance": 7.46
      },
      {
        "name": "bukit-merah",
        "distance": 7.14
      },
      {
        "name": "geylang",
        "distance": 1.35
      },
      {
        "name": "marina-south",
        "distance": 3.72
      },
      {
        "name": "newton",
        "distance": 3.08
      },
      {
        "name": "outram",
        "distance": 4.31
      },
      {
        "name": "ang-mo-kio",
        "distance": 5.08
      },
      {
        "name": "central-water-catchment",
        "distance": 9.6
      }
    ]
  },
  "bukit-merah": {
    "lat": 1.285933,
    "lng": 103.807016,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "downtown-core",
        "distance": 5.2
      },
      {
        "name": "queenstown",
        "distance": 1.69
      },
      {
        "name": "kallang",
        "distance": 7.14
      },
      {
        "name": "geylang",
        "distance": 8.23
      },
      {
        "name": "marina-south",
        "distance": 6.61
      },
      {
        "name": "newton",
        "distance": 4.34
      },
      {
        "name": "outram",
        "distance": 3.77
      },
      {
        "name": "ang-mo-kio",
        "distance": 9.52
      },
      {
        "name": "central-water-catchment",
        "distance": 9.36
      }
    ]
  },
  "geylang": {
    "lat": 1.321484,
    "lng": 103.871902,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "downtown-core",
        "distance": 4.41
      },
      {
        "name": "queenstown",
        "distance": 8.35
      },
      {
        "name": "kallang",
        "distance": 1.35
      },
      {
        "name": "bukit-merah",
        "distance": 8.23
      },
      {
        "name": "marina-south",
        "distance": 4.96
      },
      {
        "name": "newton",
        "distance": 3.96
      },
      {
        "name": "outram",
        "distance": 5.63
      },
      {
        "name": "ang-mo-kio",
        "distance": 4.13
      },
      {
        "name": "central-water-catchment",
        "distance": 9.33
      }
    ]
  },
  "marina-south": {
    "lat": 1.277267,
    "lng": 103.865879,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "downtown-core",
        "distance": 1.68
      },
      {
        "name": "queenstown",
        "distance": 7.72
      },
      {
        "name": "kallang",
        "distance": 3.72
      },
      {
        "name": "bukit-merah",
        "distance": 6.61
      },
      {
        "name": "geylang",
        "distance": 4.96
      },
      {
        "name": "newton",
        "distance": 4.64
      },
      {
        "name": "outram",
        "distance": 2.85
      },
      {
        "name": "ang-mo-kio",
        "distance": 8.75
      },
      {
        "name": "central-water-catchment",
        "distance": 12.43
      }
    ]
  },
  "newton": {
    "lat": 1.308804,
    "lng": 103.838611,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "downtown-core",
        "distance": 3.02
      },
      {
        "name": "queenstown",
        "distance": 4.41
      },
      {
        "name": "kallang",
        "distance": 3.08
      },
      {
        "name": "bukit-merah",
        "distance": 4.34
      },
      {
        "name": "geylang",
        "distance": 3.96
      },
      {
        "name": "marina-south",
        "distance": 4.64
      },
      {
        "name": "outram",
        "distance": 3.03
      },
      {
        "name": "ang-mo-kio",
        "distance": 5.57
      },
      {
        "name": "central-water-catchment",
        "distance": 7.85
      }
    ]
  },
  "outram": {
    "lat": 1.281664,
    "lng": 103.840653,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "downtown-core",
        "distance": 1.55
      },
      {
        "name": "queenstown",
        "distance": 4.92
      },
      {
        "name": "kallang",
        "distance": 4.31
      },
      {
        "name": "bukit-merah",
        "distance": 3.77
      },
      {
        "name": "geylang",
        "distance": 5.63
      },
      {
        "name": "marina-south",
        "distance": 2.85
      },
      {
        "name": "newton",
        "distance": 3.03
      },
      {
        "name": "ang-mo-kio",
        "distance": 8.4
      },
      {
        "name": "central-water-catchment",
        "distance": 10.66
      }
    ]
  },
  "tours": {
    "lat": 47.390047,
    "lng": 0.688927,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "aberystwyth": {
    "lat": 52.414311,
    "lng": -4.081685,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Pak Kret": {
    "lat": 13.903552,
    "lng": 100.528202,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Bangkok",
        "distance": 17.21
      }
    ]
  },
  "wilmslow": {
    "lat": 53.326129,
    "lng": -2.232751,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "knutsford",
        "distance": 9.5
      },
      {
        "name": "macclesfield",
        "distance": 10.19
      },
      {
        "name": "salford",
        "distance": 18.36
      },
      {
        "name": "stretford",
        "distance": 14.8
      },
      {
        "name": "manchester",
        "distance": 17.07
      },
      {
        "name": "warrington",
        "distance": 25.02
      }
    ]
  },
  "knutsford": {
    "lat": 53.303349,
    "lng": -2.370575,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "wilmslow",
        "distance": 9.5
      },
      {
        "name": "macclesfield",
        "distance": 16.97
      },
      {
        "name": "salford",
        "distance": 21.2
      },
      {
        "name": "stretford",
        "distance": 16.35
      },
      {
        "name": "manchester",
        "distance": 21.28
      },
      {
        "name": "warrington",
        "distance": 17.7
      }
    ]
  },
  "macclesfield": {
    "lat": 53.260663,
    "lng": -2.125516,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "wilmslow",
        "distance": 10.19
      },
      {
        "name": "knutsford",
        "distance": 16.97
      },
      {
        "name": "salford",
        "distance": 27.49
      },
      {
        "name": "stretford",
        "distance": 24.6
      },
      {
        "name": "manchester",
        "distance": 25.59
      },
      {
        "name": "warrington",
        "distance": 34.29
      }
    ]
  },
  "Abiko": {
    "lat": 35.863999,
    "lng": 140.028065,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Chiba",
        "distance": 29.43
      },
      {
        "name": "Ichikawa",
        "distance": 18.09
      },
      {
        "name": "Minato City",
        "distance": 34.9
      },
      {
        "name": "Chiyoda City",
        "distance": 31.14
      },
      {
        "name": "Shinagawa City",
        "distance": 39.06
      },
      {
        "name": "Shibuya City",
        "distance": 37.51
      },
      {
        "name": "Shinjuku City",
        "distance": 34.86
      },
      {
        "name": "Chuo City",
        "distance": 29.67
      },
      {
        "name": "Tokyo",
        "distance": 31.64
      },
      {
        "name": "Taito City",
        "distance": 28.02
      },
      {
        "name": "Koto City",
        "distance": 34.96
      },
      {
        "name": "Meguro City",
        "distance": 38.71
      },
      {
        "name": "Nakano City",
        "distance": 37.14
      },
      {
        "name": "Toshima City",
        "distance": 34.54
      },
      {
        "name": "Katsushika City",
        "distance": 20.74
      },
      {
        "name": "Kita City",
        "distance": 29.51
      },
      {
        "name": "Bunkyo City",
        "distance": 30.46
      },
      {
        "name": "Itabashi City",
        "distance": 31.37
      }
    ]
  },
  "Chiba": {
    "lat": 35.607063,
    "lng": 140.106265,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Abiko",
        "distance": 29.43
      },
      {
        "name": "Ichikawa",
        "distance": 20.33
      },
      {
        "name": "Kawasaki",
        "distance": 37.38
      },
      {
        "name": "Minato City",
        "distance": 30.17
      },
      {
        "name": "Chiyoda City",
        "distance": 33.31
      },
      {
        "name": "Shinagawa City",
        "distance": 34.0
      },
      {
        "name": "Shibuya City",
        "distance": 37.28
      },
      {
        "name": "Shinjuku City",
        "distance": 37.65
      },
      {
        "name": "Chuo City",
        "distance": 29.98
      },
      {
        "name": "Tokyo",
        "distance": 31.9
      },
      {
        "name": "Taito City",
        "distance": 31.75
      },
      {
        "name": "Koto City",
        "distance": 29.93
      },
      {
        "name": "Meguro City",
        "distance": 37.07
      },
      {
        "name": "Katsushika City",
        "distance": 28.75
      },
      {
        "name": "Kita City",
        "distance": 37.9
      },
      {
        "name": "Bunkyo City",
        "distance": 33.53
      },
      {
        "name": "Itabashi City",
        "distance": 39.26
      }
    ]
  },
  "Ichikawa": {
    "lat": 35.721634,
    "lng": 139.930944,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Abiko",
        "distance": 18.09
      },
      {
        "name": "Chiba",
        "distance": 20.33
      },
      {
        "name": "Kawasaki",
        "distance": 29.54
      },
      {
        "name": "Niiza",
        "distance": 33.9
      },
      {
        "name": "Minato City",
        "distance": 17.64
      },
      {
        "name": "Chiyoda City",
        "distance": 16.3
      },
      {
        "name": "Shinagawa City",
        "distance": 22.03
      },
      {
        "name": "Shibuya City",
        "distance": 22.13
      },
      {
        "name": "Shinjuku City",
        "distance": 20.77
      },
      {
        "name": "Chuo City",
        "distance": 13.68
      },
      {
        "name": "Tokyo",
        "distance": 15.88
      },
      {
        "name": "Taito City",
        "distance": 13.68
      },
      {
        "name": "Suginami City",
        "distance": 26.99
      },
      {
        "name": "Koto City",
        "distance": 17.63
      },
      {
        "name": "Musashino",
        "distance": 32.95
      },
      {
        "name": "Setagaya City",
        "distance": 28.87
      },
      {
        "name": "Meguro City",
        "distance": 22.83
      },
      {
        "name": "Nakano City",
        "distance": 24.21
      },
      {
        "name": "Toshima City",
        "distance": 22.11
      },
      {
        "name": "Katsushika City",
        "distance": 8.63
      },
      {
        "name": "Kita City",
        "distance": 18.63
      },
      {
        "name": "Bunkyo City",
        "distance": 16.05
      },
      {
        "name": "Itabashi City",
        "distance": 20.27
      },
      {
        "name": "Mitaka",
        "distance": 33.83
      }
    ]
  },
  "Chihuahua": {
    "lat": 28.5,
    "lng": -106.0,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "chisinau": {
    "lat": 47.024512,
    "lng": 28.832292,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Chongqing": {
    "lat": 30.05518,
    "lng": 107.874871,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Bishkek": {
    "lat": 42.842325,
    "lng": 73.977554,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "cluj-napoca": {
    "lat": 46.770853,
    "lng": 23.59805,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Boulder": {
    "lat": 38.841017,
    "lng": -104.795223,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Colorado Springs",
        "distance": 12.84
      }
    ]
  },
  "Denver": {
    "lat": 39.73929,
    "lng": -104.997172,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Centennial",
        "distance": 20.02
      },
      {
        "name": "Golden",
        "distance": 17.22
      },
      {
        "name": "Westminster",
        "distance": 15.35
      }
    ]
  },
  "Carbondale": {
    "lat": 39.400565,
    "lng": -107.211241,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Centennial": {
    "lat": 39.593122,
    "lng": -104.860598,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Denver",
        "distance": 20.02
      },
      {
        "name": "Golden",
        "distance": 31.86
      },
      {
        "name": "Westminster",
        "distance": 35.28
      }
    ]
  },
  "Colorado Springs": {
    "lat": 38.956474,
    "lng": -104.793356,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Boulder",
        "distance": 12.84
      }
    ]
  },
  "Golden": {
    "lat": 39.716718,
    "lng": -105.196372,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Denver",
        "distance": 17.22
      },
      {
        "name": "Centennial",
        "distance": 31.86
      },
      {
        "name": "Westminster",
        "distance": 18.93
      }
    ]
  },
  "Longmont": {
    "lat": 40.145556,
    "lng": -105.139081,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Westminster",
        "distance": 31.96
      }
    ]
  },
  "Louisville": {
    "lat": 38.12756,
    "lng": -85.77883,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Sellersburg",
        "distance": 30.14
      }
    ]
  },
  "Pueblo": {
    "lat": 38.263995,
    "lng": -104.614187,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Westminster": {
    "lat": 39.861725,
    "lng": -105.080249,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Denver",
        "distance": 15.35
      },
      {
        "name": "Centennial",
        "distance": 35.28
      },
      {
        "name": "Golden",
        "distance": 18.93
      },
      {
        "name": "Longmont",
        "distance": 31.96
      }
    ]
  },
  "madrid": {
    "lat": 40.416782,
    "lng": -3.703507,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "community-of-madrid",
        "distance": 0.0
      },
      {
        "name": "san-sebastian-de-los-reyes",
        "distance": 15.93
      },
      {
        "name": "alcobendas",
        "distance": 14.85
      },
      {
        "name": "las-rozas-de-madrid",
        "distance": 16.88
      },
      {
        "name": "rivas-vaciamadrid",
        "distance": 16.21
      }
    ]
  },
  "community-of-madrid": {
    "lat": 40.416782,
    "lng": -3.703507,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "madrid",
        "distance": 0.0
      },
      {
        "name": "san-sebastian-de-los-reyes",
        "distance": 15.93
      },
      {
        "name": "alcobendas",
        "distance": 14.85
      },
      {
        "name": "las-rozas-de-madrid",
        "distance": 16.88
      },
      {
        "name": "rivas-vaciamadrid",
        "distance": 16.21
      }
    ]
  },
  "san-sebastian-de-los-reyes": {
    "lat": 40.54737,
    "lng": -3.626059,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "madrid",
        "distance": 15.93
      },
      {
        "name": "community-of-madrid",
        "distance": 15.93
      },
      {
        "name": "alcobendas",
        "distance": 1.16
      },
      {
        "name": "las-rozas-de-madrid",
        "distance": 21.95
      },
      {
        "name": "rivas-vaciamadrid",
        "distance": 23.0
      }
    ]
  },
  "alcobendas": {
    "lat": 40.540008,
    "lng": -3.635849,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "madrid",
        "distance": 14.85
      },
      {
        "name": "community-of-madrid",
        "distance": 14.85
      },
      {
        "name": "san-sebastian-de-los-reyes",
        "distance": 1.16
      },
      {
        "name": "las-rozas-de-madrid",
        "distance": 20.94
      },
      {
        "name": "rivas-vaciamadrid",
        "distance": 22.54
      }
    ]
  },
  "las-rozas-de-madrid": {
    "lat": 40.49331,
    "lng": -3.87584,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "madrid",
        "distance": 16.88
      },
      {
        "name": "community-of-madrid",
        "distance": 16.88
      },
      {
        "name": "san-sebastian-de-los-reyes",
        "distance": 21.95
      },
      {
        "name": "alcobendas",
        "distance": 20.94
      },
      {
        "name": "rivas-vaciamadrid",
        "distance": 33.06
      }
    ]
  },
  "rivas-vaciamadrid": {
    "lat": 40.353605,
    "lng": -3.531088,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "madrid",
        "distance": 16.21
      },
      {
        "name": "community-of-madrid",
        "distance": 16.21
      },
      {
        "name": "san-sebastian-de-los-reyes",
        "distance": 23.0
      },
      {
        "name": "alcobendas",
        "distance": 22.54
      },
      {
        "name": "las-rozas-de-madrid",
        "distance": 33.06
      }
    ]
  },
  "Hartford": {
    "lat": 41.764582,
    "lng": -72.690855,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Ridgefield": {
    "lat": 41.281484,
    "lng": -73.498179,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "penryn": {
    "lat": 50.168546,
    "lng": -5.103406,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "falmouth",
        "distance": 2.87
      },
      {
        "name": "penzance",
        "distance": 31.25
      },
      {
        "name": "st-ives",
        "distance": 27.27
      }
    ]
  },
  "falmouth": {
    "lat": 50.15522,
    "lng": -5.068826,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "penryn",
        "distance": 2.87
      },
      {
        "name": "penzance",
        "distance": 33.48
      },
      {
        "name": "st-ives",
        "distance": 29.98
      }
    ]
  },
  "bude": {
    "lat": 50.828525,
    "lng": -4.546936,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "penzance": {
    "lat": 50.119479,
    "lng": -5.535246,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "penryn",
        "distance": 31.25
      },
      {
        "name": "falmouth",
        "distance": 33.48
      },
      {
        "name": "st-ives",
        "distance": 11.33
      }
    ]
  },
  "st-ives": {
    "lat": 50.214906,
    "lng": -5.479508,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "penryn",
        "distance": 27.27
      },
      {
        "name": "falmouth",
        "distance": 29.98
      },
      {
        "name": "penzance",
        "distance": 11.33
      }
    ]
  },
  "dublin": {
    "lat": 53.428292,
    "lng": -6.247274,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "county-dublin",
        "distance": 0.0
      }
    ]
  },
  "county-dublin": {
    "lat": 53.428292,
    "lng": -6.247274,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "dublin",
        "distance": 0.0
      }
    ]
  },
  "galway": {
    "lat": 53.274412,
    "lng": -9.04906,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "oranmore",
        "distance": 1.32
      }
    ]
  },
  "oranmore": {
    "lat": 53.284151,
    "lng": -9.037836,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "galway",
        "distance": 1.32
      }
    ]
  },
  "Cundinamarca": {
    "lat": 5.000009,
    "lng": -74.166676,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Bogota",
        "distance": 39.63
      }
    ]
  },
  "Da Nang": {
    "lat": 16.068,
    "lng": 108.212,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "falun": {
    "lat": 60.607007,
    "lng": 15.632306,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "borlange",
        "distance": 17.68
      },
      {
        "name": "sater",
        "distance": 29.61
      }
    ]
  },
  "borlange": {
    "lat": 60.485643,
    "lng": 15.423456,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "falun",
        "distance": 17.68
      },
      {
        "name": "hedemora",
        "distance": 38.59
      },
      {
        "name": "sater",
        "distance": 23.59
      }
    ]
  },
  "hedemora": {
    "lat": 60.2786,
    "lng": 15.987029,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "borlange",
        "distance": 38.59
      },
      {
        "name": "sater",
        "distance": 15.17
      }
    ]
  },
  "sater": {
    "lat": 60.346972,
    "lng": 15.748689,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "falun",
        "distance": 29.61
      },
      {
        "name": "borlange",
        "distance": 23.59
      },
      {
        "name": "hedemora",
        "distance": 15.17
      }
    ]
  },
  "marousi": {
    "lat": 38.054665,
    "lng": 23.808153,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "polichni": {
    "lat": 40.663301,
    "lng": 22.971483,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Delaware": {
    "lat": 40.158483,
    "lng": -83.015393,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Columbus",
        "distance": 10.54
      },
      {
        "name": "Waldo",
        "distance": 33.75
      },
      {
        "name": "Westerville",
        "distance": 8.14
      }
    ]
  },
  "Greenville": {
    "lat": 34.844078,
    "lng": -82.406417,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Wilmington": {
    "lat": 39.745947,
    "lng": -75.546589,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Woodbury",
        "distance": 35.18
      }
    ]
  },
  "New Delhi": {
    "lat": 28.613895,
    "lng": 77.209006,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Gurugram",
        "distance": 21.74
      },
      {
        "name": "Noida",
        "distance": 12.5
      }
    ]
  },
  "derby": {
    "lat": 52.914223,
    "lng": -1.471989,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "leicester",
        "distance": 38.41
      },
      {
        "name": "nottingham",
        "distance": 22.04
      },
      {
        "name": "rugeley",
        "distance": 35.64
      },
      {
        "name": "tamworth",
        "distance": 34.52
      }
    ]
  },
  "londonderry": {
    "lat": 54.993112,
    "lng": -7.323577,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Dhaka": {
    "lat": 23.764386,
    "lng": 90.389014,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "dnipro": {
    "lat": 48.662589,
    "lng": 34.950172,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "kamianske",
        "distance": 30.01
      }
    ]
  },
  "kamianske": {
    "lat": 48.516775,
    "lng": 34.60688,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "dnipro",
        "distance": 30.01
      }
    ]
  },
  "craiova": {
    "lat": 44.319016,
    "lng": 23.796561,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "bournemouth": {
    "lat": 50.829061,
    "lng": -2.13316,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "sherborne",
        "distance": 30.17
      },
      {
        "name": "salisbury",
        "distance": 35.67
      }
    ]
  },
  "bridport": {
    "lat": 50.733785,
    "lng": -2.758901,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "sherborne",
        "distance": 29.42
      }
    ]
  },
  "sherborne": {
    "lat": 50.950265,
    "lng": -2.517924,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "bournemouth",
        "distance": 30.17
      },
      {
        "name": "bridport",
        "distance": 29.42
      }
    ]
  },
  "assen": {
    "lat": 52.995227,
    "lng": 6.560498,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "haren",
        "distance": 19.78
      }
    ]
  },
  "Dubai": {
    "lat": 25.229634,
    "lng": 55.289585,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "mlini": {
    "lat": 42.623687,
    "lng": 18.208272,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "wanlockhead": {
    "lat": 55.397467,
    "lng": -3.779775,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "scotland",
        "distance": 35.09
      }
    ]
  },
  "scotland": {
    "lat": 55.083333,
    "lng": -3.833333,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "wanlockhead",
        "distance": 35.09
      }
    ]
  },
  "dundee": {
    "lat": 56.460653,
    "lng": -2.968658,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "collace",
        "distance": 20.18
      }
    ]
  },
  "musselburgh": {
    "lat": 55.943202,
    "lng": -3.051104,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "edinburgh",
        "distance": 8.62
      },
      {
        "name": "dunfermline",
        "distance": 29.23
      }
    ]
  },
  "eastbourne": {
    "lat": 50.766437,
    "lng": 0.278155,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "brighton",
        "distance": 30.03
      },
      {
        "name": "hove",
        "distance": 31.32
      },
      {
        "name": "brighton-and-hove",
        "distance": 31.32
      },
      {
        "name": "falmer",
        "distance": 28.05
      },
      {
        "name": "hailsham",
        "distance": 10.72
      },
      {
        "name": "shoreham-by-sea",
        "distance": 39.54
      }
    ]
  },
  "falmer": {
    "lat": 50.867438,
    "lng": -0.087726,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "brighton",
        "distance": 6.3
      },
      {
        "name": "hove",
        "distance": 5.0
      },
      {
        "name": "brighton-and-hove",
        "distance": 5.0
      },
      {
        "name": "eastbourne",
        "distance": 28.05
      },
      {
        "name": "hailsham",
        "distance": 25.33
      },
      {
        "name": "horsham",
        "distance": 27.56
      },
      {
        "name": "shoreham-by-sea",
        "distance": 13.7
      }
    ]
  },
  "hailsham": {
    "lat": 50.862823,
    "lng": 0.273061,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "brighton",
        "distance": 29.37
      },
      {
        "name": "hove",
        "distance": 29.74
      },
      {
        "name": "brighton-and-hove",
        "distance": 29.74
      },
      {
        "name": "eastbourne",
        "distance": 10.72
      },
      {
        "name": "falmer",
        "distance": 25.33
      },
      {
        "name": "shoreham-by-sea",
        "distance": 38.6
      }
    ]
  },
  "edinburgh": {
    "lat": 55.953346,
    "lng": -3.188375,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "musselburgh",
        "distance": 8.62
      },
      {
        "name": "dunfermline",
        "distance": 21.46
      }
    ]
  },
  "bologna": {
    "lat": 44.49382,
    "lng": 11.342633,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "emilia-romagna",
        "distance": 24.3
      }
    ]
  },
  "emilia-romagna": {
    "lat": 44.525696,
    "lng": 11.039437,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "bologna",
        "distance": 24.3
      }
    ]
  },
  "chelmsford": {
    "lat": 51.734533,
    "lng": 0.473053,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "great-notley",
        "distance": 14.36
      },
      {
        "name": "braintree",
        "distance": 16.9
      }
    ]
  },
  "great-notley": {
    "lat": 51.859901,
    "lng": 0.523015,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "chelmsford",
        "distance": 14.36
      },
      {
        "name": "braintree",
        "distance": 2.92
      }
    ]
  },
  "braintree": {
    "lat": 51.878064,
    "lng": 0.553716,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "chelmsford",
        "distance": 16.9
      },
      {
        "name": "great-notley",
        "distance": 2.92
      }
    ]
  },
  "kirby-cross": {
    "lat": 51.841507,
    "lng": 1.213797,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "distrito-federal": {
    "lat": -15.775446,
    "lng": -47.797089,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Kuala Lumpur": {
    "lat": 3.151696,
    "lng": 101.694237,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Cyberjaya",
        "distance": 24.81
      },
      {
        "name": "Petaling Jaya",
        "distance": 7.99
      }
    ]
  },
  "dunfermline": {
    "lat": 56.071372,
    "lng": -3.461618,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "musselburgh",
        "distance": 29.23
      },
      {
        "name": "edinburgh",
        "distance": 21.46
      },
      {
        "name": "stirling",
        "distance": 29.88
      }
    ]
  },
  "kortrijk": {
    "lat": 50.827643,
    "lng": 3.265988,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "oudenaarde",
        "distance": 23.81
      },
      {
        "name": "tourcoing",
        "distance": 13.75
      },
      {
        "name": "lesquin",
        "distance": 28.74
      },
      {
        "name": "lille",
        "distance": 25.58
      }
    ]
  },
  "antwerp": {
    "lat": 51.22111,
    "lng": 4.399708,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "mechelen",
        "distance": 22.18
      }
    ]
  },
  "dilbeek": {
    "lat": 50.844155,
    "lng": 4.265675,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "brussels",
        "distance": 6.05
      },
      {
        "name": "mechelen",
        "distance": 25.39
      }
    ]
  },
  "mechelen": {
    "lat": 51.028138,
    "lng": 4.480345,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "brussels",
        "distance": 22.11
      },
      {
        "name": "antwerp",
        "distance": 22.18
      },
      {
        "name": "dilbeek",
        "distance": 25.39
      }
    ]
  },
  "oudenaarde": {
    "lat": 50.84337,
    "lng": 3.604144,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "kortrijk",
        "distance": 23.81
      },
      {
        "name": "tourcoing",
        "distance": 33.91
      }
    ]
  },
  "mold": {
    "lat": 53.166627,
    "lng": -3.141423,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "liverpool",
        "distance": 38.21
      },
      {
        "name": "wrexham",
        "distance": 16.81
      }
    ]
  },
  "Orlando": {
    "lat": 28.514346,
    "lng": -81.461029,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Apopka",
        "distance": 18.35
      },
      {
        "name": "Mount Dora",
        "distance": 36.52
      }
    ]
  },
  "Gainesville": {
    "lat": 29.648015,
    "lng": -82.337167,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Miami": {
    "lat": 25.833798,
    "lng": -80.332801,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Aventura",
        "distance": 23.69
      },
      {
        "name": "Coral Gables",
        "distance": 13.44
      },
      {
        "name": "Doral",
        "distance": 1.06
      },
      {
        "name": "Key Biscayne",
        "distance": 22.79
      }
    ]
  },
  "Aventura": {
    "lat": 25.956481,
    "lng": -80.139212,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Miami",
        "distance": 23.69
      },
      {
        "name": "Coral Gables",
        "distance": 27.56
      },
      {
        "name": "Doral",
        "distance": 24.19
      },
      {
        "name": "Fort Lauderdale",
        "distance": 20.29
      },
      {
        "name": "Key Biscayne",
        "distance": 28.97
      },
      {
        "name": "Sunrise",
        "distance": 20.29
      }
    ]
  },
  "Boca Raton": {
    "lat": 26.358688,
    "lng": -80.083098,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Fort Lauderdale",
        "distance": 24.8
      },
      {
        "name": "Sunrise",
        "distance": 24.8
      }
    ]
  },
  "Apopka": {
    "lat": 28.673281,
    "lng": -81.511647,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Orlando",
        "distance": 18.35
      },
      {
        "name": "Mount Dora",
        "distance": 19.19
      }
    ]
  },
  "Coral Gables": {
    "lat": 25.73311,
    "lng": -80.258511,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Miami",
        "distance": 13.44
      },
      {
        "name": "Aventura",
        "distance": 27.56
      },
      {
        "name": "Doral",
        "distance": 12.5
      },
      {
        "name": "Key Biscayne",
        "distance": 10.34
      }
    ]
  },
  "Doral": {
    "lat": 25.82437,
    "lng": -80.331366,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Miami",
        "distance": 1.06
      },
      {
        "name": "Aventura",
        "distance": 24.19
      },
      {
        "name": "Coral Gables",
        "distance": 12.5
      },
      {
        "name": "Key Biscayne",
        "distance": 21.99
      }
    ]
  },
  "Fort Lauderdale": {
    "lat": 26.13801,
    "lng": -80.119073,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Aventura",
        "distance": 20.29
      },
      {
        "name": "Boca Raton",
        "distance": 24.8
      },
      {
        "name": "Sunrise",
        "distance": 0.0
      }
    ]
  },
  "Key Biscayne": {
    "lat": 25.696835,
    "lng": -80.163526,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Miami",
        "distance": 22.79
      },
      {
        "name": "Aventura",
        "distance": 28.97
      },
      {
        "name": "Coral Gables",
        "distance": 10.34
      },
      {
        "name": "Doral",
        "distance": 21.99
      }
    ]
  },
  "Lutz": {
    "lat": 28.151124,
    "lng": -82.461483,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "New Port Richey",
        "distance": 27.3
      },
      {
        "name": "Tampa",
        "distance": 18.67
      }
    ]
  },
  "Merritt Island": {
    "lat": 28.358119,
    "lng": -80.696838,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Mount Dora": {
    "lat": 28.800496,
    "lng": -81.644696,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Orlando",
        "distance": 36.52
      },
      {
        "name": "Apopka",
        "distance": 19.19
      }
    ]
  },
  "New Port Richey": {
    "lat": 28.244177,
    "lng": -82.719267,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Lutz",
        "distance": 27.3
      },
      {
        "name": "Tampa",
        "distance": 34.09
      }
    ]
  },
  "Stuart": {
    "lat": 27.197983,
    "lng": -80.251918,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Sunrise": {
    "lat": 26.13801,
    "lng": -80.119073,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Aventura",
        "distance": 20.29
      },
      {
        "name": "Boca Raton",
        "distance": 24.8
      },
      {
        "name": "Fort Lauderdale",
        "distance": 0.0
      }
    ]
  },
  "Tampa": {
    "lat": 27.991896,
    "lng": -82.521809,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Lutz",
        "distance": 18.67
      },
      {
        "name": "New Port Richey",
        "distance": 34.09
      }
    ]
  },
  "leeuwarden": {
    "lat": 53.200594,
    "lng": 5.791855,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Xiamen": {
    "lat": 24.543873,
    "lng": 118.076807,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Fuzhou": {
    "lat": 26.077495,
    "lng": 119.291821,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Fukuoka": {
    "lat": 33.589899,
    "lng": 130.401751,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Fukushima": {
    "lat": 37.760777,
    "lng": 140.474581,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Gabes": {
    "lat": 33.887808,
    "lng": 10.10044,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Gansu": {
    "lat": 38.0,
    "lng": 102.0,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Alberton": {
    "lat": -26.266989,
    "lng": 28.122055,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Randburg",
        "distance": 22.89
      },
      {
        "name": "Sandton",
        "distance": 23.3
      }
    ]
  },
  "Randburg": {
    "lat": -26.091585,
    "lng": 28.002028,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Alberton",
        "distance": 22.89
      },
      {
        "name": "Sandton",
        "distance": 5.27
      }
    ]
  },
  "Sandton": {
    "lat": -26.068241,
    "lng": 28.047984,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Alberton",
        "distance": 23.3
      },
      {
        "name": "Randburg",
        "distance": 5.27
      }
    ]
  },
  "doetinchem": {
    "lat": 51.965519,
    "lng": 6.289109,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Atlanta": {
    "lat": 33.738743,
    "lng": -84.358989,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Norcross",
        "distance": 26.22
      },
      {
        "name": "Roswell",
        "distance": 28.13
      }
    ]
  },
  "Alpharetta": {
    "lat": 34.095732,
    "lng": -84.234128,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Cumming",
        "distance": 15.12
      },
      {
        "name": "Norcross",
        "distance": 17.29
      },
      {
        "name": "Roswell",
        "distance": 21.38
      }
    ]
  },
  "Cumming": {
    "lat": 34.20732,
    "lng": -84.140193,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Alpharetta",
        "distance": 15.12
      },
      {
        "name": "Norcross",
        "distance": 30.35
      },
      {
        "name": "Roswell",
        "distance": 35.94
      }
    ]
  },
  "Savannah": {
    "lat": 32.079007,
    "lng": -81.092134,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Norcross": {
    "lat": 33.941213,
    "lng": -84.213531,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Atlanta",
        "distance": 26.22
      },
      {
        "name": "Alpharetta",
        "distance": 17.29
      },
      {
        "name": "Cumming",
        "distance": 30.35
      },
      {
        "name": "Roswell",
        "distance": 20.08
      }
    ]
  },
  "Roswell": {
    "lat": 33.985793,
    "lng": -84.424472,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Atlanta",
        "distance": 28.13
      },
      {
        "name": "Alpharetta",
        "distance": 21.38
      },
      {
        "name": "Cumming",
        "distance": 35.94
      },
      {
        "name": "Norcross",
        "distance": 20.08
      }
    ]
  },
  "Gifu": {
    "lat": 35.423095,
    "lng": 136.762753,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Nagoya",
        "distance": 29.24
      },
      {
        "name": "Konan",
        "distance": 12.85
      },
      {
        "name": "Kakamigahara",
        "distance": 8.2
      }
    ]
  },
  "Kakamigahara": {
    "lat": 35.399583,
    "lng": 136.848565,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Nagoya",
        "distance": 24.3
      },
      {
        "name": "Konan",
        "distance": 6.34
      },
      {
        "name": "Gifu",
        "distance": 8.2
      }
    ]
  },
  "glasgow": {
    "lat": 55.861155,
    "lng": -4.250169,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "stirling",
        "distance": 34.62
      }
    ]
  },
  "visby": {
    "lat": 57.637936,
    "lng": 18.297982,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "belgrade": {
    "lat": 44.828885,
    "lng": 20.458146,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "zagreb": {
    "lat": 45.810658,
    "lng": 15.96991,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "samobor",
        "distance": 19.55
      },
      {
        "name": "zapresic",
        "distance": 13.77
      }
    ]
  },
  "strasbourg": {
    "lat": 48.584614,
    "lng": 7.750713,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "offenburg",
        "distance": 19.08
      }
    ]
  },
  "thionville": {
    "lat": 49.357927,
    "lng": 6.167587,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "london": {
    "lat": 51.489334,
    "lng": -0.144055,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "slough",
        "distance": 33.02
      },
      {
        "name": "runcorn",
        "distance": 19.53
      },
      {
        "name": "croydon",
        "distance": 11.81
      },
      {
        "name": "brentford",
        "distance": 12.3
      },
      {
        "name": "bromley",
        "distance": 0.0
      },
      {
        "name": "twickenham",
        "distance": 13.61
      },
      {
        "name": "uxbridge",
        "distance": 24.17
      },
      {
        "name": "wembley",
        "distance": 11.96
      },
      {
        "name": "watford",
        "distance": 25.37
      },
      {
        "name": "welwyn-garden-city",
        "distance": 35.16
      },
      {
        "name": "woking",
        "distance": 34.24
      },
      {
        "name": "caterham",
        "distance": 23.49
      },
      {
        "name": "epsom",
        "distance": 19.43
      },
      {
        "name": "walton-on-thames",
        "distance": 22.32
      }
    ]
  },
  "croydon": {
    "lat": 51.385295,
    "lng": -0.109948,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "slough",
        "distance": 38.35
      },
      {
        "name": "runcorn",
        "distance": 23.55
      },
      {
        "name": "london",
        "distance": 11.81
      },
      {
        "name": "brentford",
        "distance": 18.49
      },
      {
        "name": "bromley",
        "distance": 11.81
      },
      {
        "name": "twickenham",
        "distance": 16.61
      },
      {
        "name": "uxbridge",
        "distance": 31.28
      },
      {
        "name": "wembley",
        "distance": 22.33
      },
      {
        "name": "watford",
        "distance": 35.96
      },
      {
        "name": "guildford",
        "distance": 36.25
      },
      {
        "name": "surrey-research-park",
        "distance": 38.59
      },
      {
        "name": "woking",
        "distance": 31.84
      },
      {
        "name": "caterham",
        "distance": 11.69
      },
      {
        "name": "epsom",
        "distance": 12.43
      },
      {
        "name": "walton-on-thames",
        "distance": 21.5
      },
      {
        "name": "horsham",
        "distance": 38.96
      }
    ]
  },
  "brentford": {
    "lat": 51.486396,
    "lng": -0.321662,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "slough",
        "distance": 20.9
      },
      {
        "name": "windsor",
        "distance": 33.54
      },
      {
        "name": "runcorn",
        "distance": 7.41
      },
      {
        "name": "marlow",
        "distance": 32.9
      },
      {
        "name": "london",
        "distance": 12.3
      },
      {
        "name": "croydon",
        "distance": 18.49
      },
      {
        "name": "bromley",
        "distance": 12.3
      },
      {
        "name": "twickenham",
        "distance": 4.43
      },
      {
        "name": "uxbridge",
        "distance": 12.84
      },
      {
        "name": "wembley",
        "distance": 8.28
      },
      {
        "name": "farnborough",
        "distance": 36.98
      },
      {
        "name": "watford",
        "distance": 19.48
      },
      {
        "name": "welwyn-garden-city",
        "distance": 36.1
      },
      {
        "name": "guildford",
        "distance": 32.9
      },
      {
        "name": "godalming",
        "distance": 39.14
      },
      {
        "name": "surrey-research-park",
        "distance": 34.06
      },
      {
        "name": "woking",
        "distance": 24.63
      },
      {
        "name": "caterham",
        "distance": 28.34
      },
      {
        "name": "epsom",
        "distance": 17.5
      },
      {
        "name": "walton-on-thames",
        "distance": 13.1
      }
    ]
  },
  "bromley": {
    "lat": 51.489334,
    "lng": -0.144055,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "slough",
        "distance": 33.02
      },
      {
        "name": "runcorn",
        "distance": 19.53
      },
      {
        "name": "london",
        "distance": 0.0
      },
      {
        "name": "croydon",
        "distance": 11.81
      },
      {
        "name": "brentford",
        "distance": 12.3
      },
      {
        "name": "twickenham",
        "distance": 13.61
      },
      {
        "name": "uxbridge",
        "distance": 24.17
      },
      {
        "name": "wembley",
        "distance": 11.96
      },
      {
        "name": "watford",
        "distance": 25.37
      },
      {
        "name": "welwyn-garden-city",
        "distance": 35.16
      },
      {
        "name": "woking",
        "distance": 34.24
      },
      {
        "name": "caterham",
        "distance": 23.49
      },
      {
        "name": "epsom",
        "distance": 19.43
      },
      {
        "name": "walton-on-thames",
        "distance": 22.32
      }
    ]
  },
  "road": {
    "lat": 52.624183,
    "lng": -1.114644,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "leicester",
        "distance": 1.83
      },
      {
        "name": "nottingham",
        "distance": 36.68
      },
      {
        "name": "tamworth",
        "distance": 39.18
      }
    ]
  },
  "twickenham": {
    "lat": 51.446744,
    "lng": -0.328189,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "slough",
        "distance": 21.75
      },
      {
        "name": "windsor",
        "distance": 34.04
      },
      {
        "name": "runcorn",
        "distance": 6.97
      },
      {
        "name": "marlow",
        "distance": 34.03
      },
      {
        "name": "london",
        "distance": 13.61
      },
      {
        "name": "croydon",
        "distance": 16.61
      },
      {
        "name": "brentford",
        "distance": 4.43
      },
      {
        "name": "bromley",
        "distance": 13.61
      },
      {
        "name": "uxbridge",
        "distance": 15.24
      },
      {
        "name": "wembley",
        "distance": 12.61
      },
      {
        "name": "aldershot",
        "distance": 37.33
      },
      {
        "name": "farnborough",
        "distance": 34.21
      },
      {
        "name": "watford",
        "distance": 23.67
      },
      {
        "name": "guildford",
        "distance": 29.0
      },
      {
        "name": "godalming",
        "distance": 35.2
      },
      {
        "name": "surrey-research-park",
        "distance": 30.34
      },
      {
        "name": "woking",
        "distance": 21.19
      },
      {
        "name": "caterham",
        "distance": 25.26
      },
      {
        "name": "epsom",
        "distance": 13.36
      },
      {
        "name": "walton-on-thames",
        "distance": 9.3
      }
    ]
  },
  "uxbridge": {
    "lat": 51.544951,
    "lng": -0.481667,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "slough",
        "distance": 9.8
      },
      {
        "name": "windsor",
        "distance": 22.16
      },
      {
        "name": "runcorn",
        "distance": 9.6
      },
      {
        "name": "marlow",
        "distance": 20.63
      },
      {
        "name": "london",
        "distance": 24.17
      },
      {
        "name": "croydon",
        "distance": 31.28
      },
      {
        "name": "brentford",
        "distance": 12.84
      },
      {
        "name": "bromley",
        "distance": 24.17
      },
      {
        "name": "twickenham",
        "distance": 15.24
      },
      {
        "name": "wembley",
        "distance": 14.03
      },
      {
        "name": "aldershot",
        "distance": 38.22
      },
      {
        "name": "farnborough",
        "distance": 33.89
      },
      {
        "name": "watford",
        "distance": 13.64
      },
      {
        "name": "welwyn-garden-city",
        "distance": 34.4
      },
      {
        "name": "guildford",
        "distance": 34.98
      },
      {
        "name": "surrey-research-park",
        "distance": 35.05
      },
      {
        "name": "woking",
        "distance": 25.52
      },
      {
        "name": "epsom",
        "distance": 27.88
      },
      {
        "name": "walton-on-thames",
        "distance": 18.22
      }
    ]
  },
  "wembley": {
    "lat": 51.556069,
    "lng": -0.279603,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "slough",
        "distance": 23.74
      },
      {
        "name": "windsor",
        "distance": 36.18
      },
      {
        "name": "runcorn",
        "distance": 14.09
      },
      {
        "name": "marlow",
        "distance": 34.42
      },
      {
        "name": "london",
        "distance": 11.96
      },
      {
        "name": "croydon",
        "distance": 22.33
      },
      {
        "name": "brentford",
        "distance": 8.28
      },
      {
        "name": "bromley",
        "distance": 11.96
      },
      {
        "name": "twickenham",
        "distance": 12.61
      },
      {
        "name": "uxbridge",
        "distance": 14.03
      },
      {
        "name": "watford",
        "distance": 13.65
      },
      {
        "name": "welwyn-garden-city",
        "distance": 27.92
      },
      {
        "name": "woking",
        "distance": 32.5
      },
      {
        "name": "caterham",
        "distance": 33.53
      },
      {
        "name": "epsom",
        "distance": 24.86
      },
      {
        "name": "walton-on-thames",
        "distance": 21.29
      }
    ]
  },
  "salford": {
    "lat": 53.487746,
    "lng": -2.289192,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "wilmslow",
        "distance": 18.36
      },
      {
        "name": "knutsford",
        "distance": 21.2
      },
      {
        "name": "macclesfield",
        "distance": 27.49
      },
      {
        "name": "stretford",
        "distance": 5.0
      },
      {
        "name": "manchester",
        "distance": 3.06
      },
      {
        "name": "warrington",
        "distance": 22.95
      }
    ]
  },
  "stretford": {
    "lat": 53.447706,
    "lng": -2.32344,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "wilmslow",
        "distance": 14.8
      },
      {
        "name": "knutsford",
        "distance": 16.35
      },
      {
        "name": "macclesfield",
        "distance": 24.6
      },
      {
        "name": "salford",
        "distance": 5.0
      },
      {
        "name": "manchester",
        "distance": 6.27
      },
      {
        "name": "warrington",
        "distance": 19.06
      }
    ]
  },
  "manchester": {
    "lat": 53.479489,
    "lng": -2.245115,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "wilmslow",
        "distance": 17.07
      },
      {
        "name": "knutsford",
        "distance": 21.28
      },
      {
        "name": "macclesfield",
        "distance": 25.59
      },
      {
        "name": "salford",
        "distance": 3.06
      },
      {
        "name": "stretford",
        "distance": 6.27
      },
      {
        "name": "warrington",
        "distance": 25.18
      }
    ]
  },
  "poznan": {
    "lat": 52.408266,
    "lng": 16.93352,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "skopje": {
    "lat": 52.176671,
    "lng": 18.701848,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "haren": {
    "lat": 53.170984,
    "lng": 6.606141,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "assen",
        "distance": 19.78
      }
    ]
  },
  "Shenzhen": {
    "lat": 22.544574,
    "lng": 114.054543,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Hong Kong Island",
        "distance": 29.4
      },
      {
        "name": "Kowloon",
        "distance": 27.61
      },
      {
        "name": "New Territories",
        "distance": 12.86
      }
    ]
  },
  "Guangzhou": {
    "lat": 23.130196,
    "lng": 113.259294,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Ahmedabad": {
    "lat": 23.021537,
    "lng": 72.580057,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Seongnam-si": {
    "lat": 37.441003,
    "lng": 127.147664,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Seoul",
        "distance": 20.46
      }
    ]
  },
  "debrecen": {
    "lat": 47.531399,
    "lng": 21.625978,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "kungsbacka": {
    "lat": 57.488856,
    "lng": 12.078753,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "onsala",
        "distance": 13.38
      },
      {
        "name": "gothenburg",
        "distance": 25.18
      },
      {
        "name": "molndal",
        "distance": 19.02
      }
    ]
  },
  "onsala": {
    "lat": 57.398855,
    "lng": 11.930291,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "kungsbacka",
        "distance": 13.38
      },
      {
        "name": "gothenburg",
        "distance": 34.36
      },
      {
        "name": "molndal",
        "distance": 29.09
      }
    ]
  },
  "hamburg": {
    "lat": 53.550341,
    "lng": 10.000654,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "aldershot": {
    "lat": 51.249417,
    "lng": -0.763015,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "slough",
        "distance": 31.89
      },
      {
        "name": "windsor",
        "distance": 31.36
      },
      {
        "name": "runcorn",
        "distance": 33.73
      },
      {
        "name": "marlow",
        "distance": 35.87
      },
      {
        "name": "twickenham",
        "distance": 37.33
      },
      {
        "name": "uxbridge",
        "distance": 38.22
      },
      {
        "name": "farnborough",
        "distance": 4.76
      },
      {
        "name": "hook",
        "distance": 13.76
      },
      {
        "name": "petersfield",
        "distance": 30.08
      },
      {
        "name": "tadley",
        "distance": 28.44
      },
      {
        "name": "guildford",
        "distance": 13.3
      },
      {
        "name": "godalming",
        "distance": 12.51
      },
      {
        "name": "surrey-research-park",
        "distance": 10.36
      },
      {
        "name": "woking",
        "distance": 16.38
      },
      {
        "name": "epsom",
        "distance": 35.66
      },
      {
        "name": "farnham",
        "distance": 4.54
      },
      {
        "name": "walton-on-thames",
        "distance": 28.26
      },
      {
        "name": "horsham",
        "distance": 36.66
      }
    ]
  },
  "farnborough": {
    "lat": 51.291869,
    "lng": -0.753984,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "slough",
        "distance": 27.23
      },
      {
        "name": "windsor",
        "distance": 26.72
      },
      {
        "name": "runcorn",
        "distance": 30.04
      },
      {
        "name": "marlow",
        "distance": 31.18
      },
      {
        "name": "brentford",
        "distance": 36.98
      },
      {
        "name": "twickenham",
        "distance": 34.21
      },
      {
        "name": "uxbridge",
        "distance": 33.89
      },
      {
        "name": "aldershot",
        "distance": 4.76
      },
      {
        "name": "hook",
        "distance": 13.77
      },
      {
        "name": "petersfield",
        "distance": 34.67
      },
      {
        "name": "tadley",
        "distance": 27.71
      },
      {
        "name": "guildford",
        "distance": 14.05
      },
      {
        "name": "godalming",
        "distance": 15.26
      },
      {
        "name": "surrey-research-park",
        "distance": 11.22
      },
      {
        "name": "woking",
        "distance": 14.09
      },
      {
        "name": "epsom",
        "distance": 34.09
      },
      {
        "name": "farnham",
        "distance": 9.07
      },
      {
        "name": "walton-on-thames",
        "distance": 25.45
      },
      {
        "name": "horsham",
        "distance": 39.03
      }
    ]
  },
  "hook": {
    "lat": 51.286321,
    "lng": -0.951746,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "slough",
        "distance": 34.92
      },
      {
        "name": "windsor",
        "distance": 29.08
      },
      {
        "name": "marlow",
        "distance": 33.99
      },
      {
        "name": "aldershot",
        "distance": 13.76
      },
      {
        "name": "farnborough",
        "distance": 13.77
      },
      {
        "name": "petersfield",
        "distance": 31.57
      },
      {
        "name": "tadley",
        "distance": 14.74
      },
      {
        "name": "guildford",
        "distance": 26.94
      },
      {
        "name": "godalming",
        "distance": 25.98
      },
      {
        "name": "surrey-research-park",
        "distance": 23.98
      },
      {
        "name": "woking",
        "distance": 27.74
      },
      {
        "name": "farnham",
        "distance": 13.28
      },
      {
        "name": "walton-on-thames",
        "distance": 38.57
      }
    ]
  },
  "petersfield": {
    "lat": 51.002494,
    "lng": -0.939203,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "aldershot",
        "distance": 30.08
      },
      {
        "name": "farnborough",
        "distance": 34.67
      },
      {
        "name": "hook",
        "distance": 31.57
      },
      {
        "name": "portsmouth",
        "distance": 24.89
      },
      {
        "name": "southampton",
        "distance": 34.42
      },
      {
        "name": "guildford",
        "distance": 36.39
      },
      {
        "name": "godalming",
        "distance": 30.47
      },
      {
        "name": "surrey-research-park",
        "distance": 34.86
      },
      {
        "name": "farnham",
        "distance": 25.61
      }
    ]
  },
  "tadley": {
    "lat": 51.341447,
    "lng": -1.144678,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "windsor",
        "distance": 31.76
      },
      {
        "name": "marlow",
        "distance": 36.13
      },
      {
        "name": "aldershot",
        "distance": 28.44
      },
      {
        "name": "farnborough",
        "distance": 27.71
      },
      {
        "name": "hook",
        "distance": 14.74
      },
      {
        "name": "surrey-research-park",
        "distance": 38.5
      },
      {
        "name": "farnham",
        "distance": 27.87
      }
    ]
  },
  "Hanoi": {
    "lat": 21.028333,
    "lng": 105.854041,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Gurugram": {
    "lat": 28.459343,
    "lng": 77.072657,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "New Delhi",
        "distance": 21.74
      },
      {
        "name": "Noida",
        "distance": 27.78
      }
    ]
  },
  "tourcoing": {
    "lat": 50.723504,
    "lng": 3.160571,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "kortrijk",
        "distance": 13.75
      },
      {
        "name": "oudenaarde",
        "distance": 33.91
      },
      {
        "name": "lesquin",
        "distance": 15.4
      },
      {
        "name": "lille",
        "distance": 11.84
      }
    ]
  },
  "lesquin": {
    "lat": 50.5888,
    "lng": 3.10997,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "kortrijk",
        "distance": 28.74
      },
      {
        "name": "tourcoing",
        "distance": 15.4
      },
      {
        "name": "lille",
        "distance": 6.24
      },
      {
        "name": "valenciennes",
        "distance": 38.93
      }
    ]
  },
  "lille": {
    "lat": 50.636565,
    "lng": 3.063528,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "kortrijk",
        "distance": 25.58
      },
      {
        "name": "tourcoing",
        "distance": 11.84
      },
      {
        "name": "lesquin",
        "distance": 6.24
      }
    ]
  },
  "valenciennes": {
    "lat": 50.357932,
    "lng": 3.523485,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "lesquin",
        "distance": 38.93
      },
      {
        "name": "mons",
        "distance": 32.22
      }
    ]
  },
  "Honolulu": {
    "lat": 21.29207,
    "lng": -157.846227,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "hawkes-bay": {
    "lat": -39.941397,
    "lng": 176.569649,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Luoyang": {
    "lat": 34.619654,
    "lng": 112.447705,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "letchworth-garden-city": {
    "lat": 51.980354,
    "lng": -0.228906,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "huntingdon",
        "distance": 39.05
      },
      {
        "name": "milton",
        "distance": 39.44
      },
      {
        "name": "watford",
        "distance": 37.91
      },
      {
        "name": "welwyn-garden-city",
        "distance": 19.77
      },
      {
        "name": "milton-keynes",
        "distance": 36.92
      }
    ]
  },
  "watford": {
    "lat": 51.655388,
    "lng": -0.395742,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "slough",
        "distance": 21.39
      },
      {
        "name": "windsor",
        "distance": 31.27
      },
      {
        "name": "runcorn",
        "distance": 21.09
      },
      {
        "name": "marlow",
        "distance": 27.91
      },
      {
        "name": "london",
        "distance": 25.37
      },
      {
        "name": "croydon",
        "distance": 35.96
      },
      {
        "name": "brentford",
        "distance": 19.48
      },
      {
        "name": "bromley",
        "distance": 25.37
      },
      {
        "name": "twickenham",
        "distance": 23.67
      },
      {
        "name": "uxbridge",
        "distance": 13.64
      },
      {
        "name": "wembley",
        "distance": 13.65
      },
      {
        "name": "letchworth-garden-city",
        "distance": 37.91
      },
      {
        "name": "welwyn-garden-city",
        "distance": 20.95
      },
      {
        "name": "woking",
        "distance": 38.9
      },
      {
        "name": "epsom",
        "distance": 36.97
      },
      {
        "name": "walton-on-thames",
        "distance": 30.04
      }
    ]
  },
  "welwyn-garden-city": {
    "lat": 51.803108,
    "lng": -0.206887,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "london",
        "distance": 35.16
      },
      {
        "name": "brentford",
        "distance": 36.1
      },
      {
        "name": "bromley",
        "distance": 35.16
      },
      {
        "name": "uxbridge",
        "distance": 34.4
      },
      {
        "name": "wembley",
        "distance": 27.92
      },
      {
        "name": "letchworth-garden-city",
        "distance": 19.77
      },
      {
        "name": "watford",
        "distance": 20.95
      }
    ]
  },
  "frankfurt": {
    "lat": 50.110644,
    "lng": 8.682092,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "darmstadt",
        "distance": 26.54
      },
      {
        "name": "eschborn",
        "distance": 9.72
      },
      {
        "name": "bad-nauheim",
        "distance": 27.8
      },
      {
        "name": "langen",
        "distance": 13.29
      },
      {
        "name": "wiesbaden",
        "distance": 31.58
      },
      {
        "name": "mainz",
        "distance": 31.67
      }
    ]
  },
  "darmstadt": {
    "lat": 49.872775,
    "lng": 8.651177,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "frankfurt",
        "distance": 26.54
      },
      {
        "name": "eschborn",
        "distance": 31.55
      },
      {
        "name": "langen",
        "distance": 13.25
      },
      {
        "name": "wiesbaden",
        "distance": 37.4
      },
      {
        "name": "mainz",
        "distance": 30.48
      },
      {
        "name": "worms",
        "distance": 34.04
      }
    ]
  },
  "eschborn": {
    "lat": 50.150474,
    "lng": 8.560777,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "frankfurt",
        "distance": 9.72
      },
      {
        "name": "darmstadt",
        "distance": 31.55
      },
      {
        "name": "bad-nauheim",
        "distance": 26.57
      },
      {
        "name": "langen",
        "distance": 19.22
      },
      {
        "name": "wiesbaden",
        "distance": 23.99
      },
      {
        "name": "mainz",
        "distance": 26.49
      }
    ]
  },
  "bad-nauheim": {
    "lat": 50.356954,
    "lng": 8.748878,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "frankfurt",
        "distance": 27.8
      },
      {
        "name": "eschborn",
        "distance": 26.57
      }
    ]
  },
  "langen": {
    "lat": 49.991514,
    "lng": 8.666702,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "frankfurt",
        "distance": 13.29
      },
      {
        "name": "darmstadt",
        "distance": 13.25
      },
      {
        "name": "eschborn",
        "distance": 19.22
      },
      {
        "name": "wiesbaden",
        "distance": 31.98
      },
      {
        "name": "mainz",
        "distance": 28.11
      }
    ]
  },
  "wiesbaden": {
    "lat": 50.082038,
    "lng": 8.241656,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "frankfurt",
        "distance": 31.58
      },
      {
        "name": "darmstadt",
        "distance": 37.4
      },
      {
        "name": "eschborn",
        "distance": 23.99
      },
      {
        "name": "langen",
        "distance": 31.98
      },
      {
        "name": "mainz",
        "distance": 9.46
      }
    ]
  },
  "inverness": {
    "lat": 57.473578,
    "lng": -4.23292,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Hiroshima": {
    "lat": 34.391724,
    "lng": 132.451759,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Higashihiroshima",
        "distance": 26.87
      },
      {
        "name": "Kure",
        "distance": 19.04
      }
    ]
  },
  "Higashihiroshima": {
    "lat": 34.42683,
    "lng": 132.741552,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Hiroshima",
        "distance": 26.87
      },
      {
        "name": "Kure",
        "distance": 25.6
      }
    ]
  },
  "Kure": {
    "lat": 34.248449,
    "lng": 132.56525,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Hiroshima",
        "distance": 19.04
      },
      {
        "name": "Higashihiroshima",
        "distance": 25.6
      }
    ]
  },
  "Ho Chi Minh City": {
    "lat": 10.775525,
    "lng": 106.702105,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Sapporo": {
    "lat": 43.061936,
    "lng": 141.354292,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Hong Kong Island": {
    "lat": 22.312599,
    "lng": 113.9173,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Shenzhen",
        "distance": 29.4
      },
      {
        "name": "Kowloon",
        "distance": 28.11
      },
      {
        "name": "New Territories",
        "distance": 20.62
      },
      {
        "name": "South District",
        "distance": 33.34
      }
    ]
  },
  "Amagasaki": {
    "lat": 34.733978,
    "lng": 135.406401,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Kobe",
        "distance": 19.9
      },
      {
        "name": "Osaka",
        "distance": 9.77
      },
      {
        "name": "Sakai",
        "distance": 19.14
      },
      {
        "name": "Suita",
        "distance": 10.48
      }
    ]
  },
  "Kobe": {
    "lat": 34.693238,
    "lng": 135.194376,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Amagasaki",
        "distance": 19.9
      },
      {
        "name": "Osaka",
        "distance": 28.07
      },
      {
        "name": "Sakai",
        "distance": 29.55
      },
      {
        "name": "Suita",
        "distance": 30.37
      }
    ]
  },
  "iasi": {
    "lat": 47.183522,
    "lng": 27.568607,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Boise": {
    "lat": 43.616616,
    "lng": -116.200886,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Caldwell",
        "distance": 35.75
      },
      {
        "name": "Nampa",
        "distance": 29.28
      }
    ]
  },
  "Caldwell": {
    "lat": 43.632919,
    "lng": -116.644468,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Boise",
        "distance": 35.75
      },
      {
        "name": "Nampa",
        "distance": 9.49
      }
    ]
  },
  "Nampa": {
    "lat": 43.573736,
    "lng": -116.559631,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Boise",
        "distance": 29.28
      },
      {
        "name": "Caldwell",
        "distance": 9.49
      }
    ]
  },
  "Rexburg": {
    "lat": 43.825756,
    "lng": -111.782183,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "paris": {
    "lat": 48.853495,
    "lng": 2.348391,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "montreuil",
        "distance": 6.86
      },
      {
        "name": "boulogne-billancourt",
        "distance": 8.16
      },
      {
        "name": "cergy",
        "distance": 31.65
      },
      {
        "name": "choisy-le-roi",
        "distance": 11.01
      },
      {
        "name": "croissy-sur-seine",
        "distance": 15.08
      },
      {
        "name": "issy-les-moulineaux",
        "distance": 6.33
      },
      {
        "name": "levallois-perret",
        "distance": 6.22
      },
      {
        "name": "lognes",
        "distance": 20.87
      },
      {
        "name": "nanterre",
        "distance": 11.2
      },
      {
        "name": "saint-germain-en-laye",
        "distance": 20.86
      },
      {
        "name": "saint-mande",
        "distance": 5.07
      },
      {
        "name": "saint-ouen-sur-seine",
        "distance": 6.56
      },
      {
        "name": "torcy",
        "distance": 22.26
      },
      {
        "name": "versailles",
        "distance": 17.15
      },
      {
        "name": "ile-de-france",
        "distance": 37.74
      }
    ]
  },
  "montreuil": {
    "lat": 48.862336,
    "lng": 2.441218,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "paris",
        "distance": 6.86
      },
      {
        "name": "boulogne-billancourt",
        "distance": 15.0
      },
      {
        "name": "cergy",
        "distance": 36.21
      },
      {
        "name": "choisy-le-roi",
        "distance": 11.29
      },
      {
        "name": "croissy-sur-seine",
        "distance": 21.67
      },
      {
        "name": "issy-les-moulineaux",
        "distance": 12.96
      },
      {
        "name": "levallois-perret",
        "distance": 11.7
      },
      {
        "name": "lognes",
        "distance": 14.26
      },
      {
        "name": "nanterre",
        "distance": 17.44
      },
      {
        "name": "saint-germain-en-laye",
        "distance": 26.81
      },
      {
        "name": "saint-mande",
        "distance": 2.81
      },
      {
        "name": "saint-ouen-sur-seine",
        "distance": 9.56
      },
      {
        "name": "torcy",
        "distance": 15.52
      },
      {
        "name": "versailles",
        "distance": 23.93
      },
      {
        "name": "ile-de-france",
        "distance": 33.36
      }
    ]
  },
  "boulogne-billancourt": {
    "lat": 48.835665,
    "lng": 2.240206,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "paris",
        "distance": 8.16
      },
      {
        "name": "montreuil",
        "distance": 15.0
      },
      {
        "name": "cergy",
        "distance": 28.26
      },
      {
        "name": "choisy-le-roi",
        "distance": 14.79
      },
      {
        "name": "croissy-sur-seine",
        "distance": 8.43
      },
      {
        "name": "issy-les-moulineaux",
        "distance": 2.7
      },
      {
        "name": "levallois-perret",
        "distance": 7.27
      },
      {
        "name": "lognes",
        "distance": 28.73
      },
      {
        "name": "nanterre",
        "distance": 6.76
      },
      {
        "name": "saint-germain-en-laye",
        "distance": 15.53
      },
      {
        "name": "saint-mande",
        "distance": 12.89
      },
      {
        "name": "saint-ouen-sur-seine",
        "distance": 10.9
      },
      {
        "name": "torcy",
        "distance": 30.23
      },
      {
        "name": "versailles",
        "distance": 9.05
      }
    ]
  },
  "cergy": {
    "lat": 49.052753,
    "lng": 2.038874,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "paris",
        "distance": 31.65
      },
      {
        "name": "montreuil",
        "distance": 36.21
      },
      {
        "name": "boulogne-billancourt",
        "distance": 28.26
      },
      {
        "name": "croissy-sur-seine",
        "distance": 20.81
      },
      {
        "name": "issy-les-moulineaux",
        "distance": 30.57
      },
      {
        "name": "levallois-perret",
        "distance": 25.43
      },
      {
        "name": "nanterre",
        "distance": 21.65
      },
      {
        "name": "saint-germain-en-laye",
        "distance": 13.59
      },
      {
        "name": "saint-mande",
        "distance": 36.07
      },
      {
        "name": "saint-ouen-sur-seine",
        "distance": 26.66
      },
      {
        "name": "versailles",
        "distance": 28.44
      }
    ]
  },
  "choisy-le-roi": {
    "lat": 48.763024,
    "lng": 2.409366,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "paris",
        "distance": 11.01
      },
      {
        "name": "montreuil",
        "distance": 11.29
      },
      {
        "name": "boulogne-billancourt",
        "distance": 14.79
      },
      {
        "name": "croissy-sur-seine",
        "distance": 23.22
      },
      {
        "name": "issy-les-moulineaux",
        "distance": 12.11
      },
      {
        "name": "levallois-perret",
        "distance": 16.95
      },
      {
        "name": "lognes",
        "distance": 18.38
      },
      {
        "name": "nanterre",
        "distance": 20.64
      },
      {
        "name": "saint-germain-en-laye",
        "distance": 30.14
      },
      {
        "name": "saint-mande",
        "distance": 8.93
      },
      {
        "name": "saint-ouen-sur-seine",
        "distance": 17.42
      },
      {
        "name": "torcy",
        "distance": 20.35
      },
      {
        "name": "versailles",
        "distance": 21.2
      },
      {
        "name": "ile-de-france",
        "distance": 28.51
      }
    ]
  },
  "croissy-sur-seine": {
    "lat": 48.87936,
    "lng": 2.146007,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "paris",
        "distance": 15.08
      },
      {
        "name": "montreuil",
        "distance": 21.67
      },
      {
        "name": "boulogne-billancourt",
        "distance": 8.43
      },
      {
        "name": "cergy",
        "distance": 20.81
      },
      {
        "name": "choisy-le-roi",
        "distance": 23.22
      },
      {
        "name": "issy-les-moulineaux",
        "distance": 11.11
      },
      {
        "name": "levallois-perret",
        "distance": 10.5
      },
      {
        "name": "lognes",
        "distance": 35.9
      },
      {
        "name": "nanterre",
        "distance": 4.7
      },
      {
        "name": "saint-germain-en-laye",
        "distance": 7.4
      },
      {
        "name": "saint-mande",
        "distance": 20.15
      },
      {
        "name": "saint-ouen-sur-seine",
        "distance": 14.23
      },
      {
        "name": "torcy",
        "distance": 37.19
      },
      {
        "name": "versailles",
        "distance": 8.55
      }
    ]
  },
  "issy-les-moulineaux": {
    "lat": 48.825051,
    "lng": 2.273457,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "paris",
        "distance": 6.33
      },
      {
        "name": "montreuil",
        "distance": 12.96
      },
      {
        "name": "boulogne-billancourt",
        "distance": 2.7
      },
      {
        "name": "cergy",
        "distance": 30.57
      },
      {
        "name": "choisy-le-roi",
        "distance": 12.11
      },
      {
        "name": "croissy-sur-seine",
        "distance": 11.11
      },
      {
        "name": "levallois-perret",
        "distance": 7.63
      },
      {
        "name": "lognes",
        "distance": 26.34
      },
      {
        "name": "nanterre",
        "distance": 8.93
      },
      {
        "name": "saint-germain-en-laye",
        "distance": 18.1
      },
      {
        "name": "saint-mande",
        "distance": 10.63
      },
      {
        "name": "saint-ouen-sur-seine",
        "distance": 10.61
      },
      {
        "name": "torcy",
        "distance": 27.91
      },
      {
        "name": "versailles",
        "distance": 11.01
      }
    ]
  },
  "levallois-perret": {
    "lat": 48.892956,
    "lng": 2.288168,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "paris",
        "distance": 6.22
      },
      {
        "name": "montreuil",
        "distance": 11.7
      },
      {
        "name": "boulogne-billancourt",
        "distance": 7.27
      },
      {
        "name": "cergy",
        "distance": 25.43
      },
      {
        "name": "choisy-le-roi",
        "distance": 16.95
      },
      {
        "name": "croissy-sur-seine",
        "distance": 10.5
      },
      {
        "name": "issy-les-moulineaux",
        "distance": 7.63
      },
      {
        "name": "lognes",
        "distance": 25.92
      },
      {
        "name": "nanterre",
        "distance": 5.92
      },
      {
        "name": "saint-germain-en-laye",
        "distance": 15.11
      },
      {
        "name": "saint-mande",
        "distance": 10.86
      },
      {
        "name": "saint-ouen-sur-seine",
        "distance": 3.96
      },
      {
        "name": "torcy",
        "distance": 27.05
      },
      {
        "name": "versailles",
        "distance": 15.44
      }
    ]
  },
  "lognes": {
    "lat": 48.838416,
    "lng": 2.632722,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "paris",
        "distance": 20.87
      },
      {
        "name": "montreuil",
        "distance": 14.26
      },
      {
        "name": "boulogne-billancourt",
        "distance": 28.73
      },
      {
        "name": "choisy-le-roi",
        "distance": 18.38
      },
      {
        "name": "croissy-sur-seine",
        "distance": 35.9
      },
      {
        "name": "issy-les-moulineaux",
        "distance": 26.34
      },
      {
        "name": "levallois-perret",
        "distance": 25.92
      },
      {
        "name": "nanterre",
        "distance": 31.71
      },
      {
        "name": "saint-mande",
        "distance": 15.87
      },
      {
        "name": "saint-ouen-sur-seine",
        "distance": 23.3
      },
      {
        "name": "torcy",
        "distance": 2.06
      },
      {
        "name": "versailles",
        "distance": 37.25
      },
      {
        "name": "ile-de-france",
        "distance": 23.34
      }
    ]
  },
  "nanterre": {
    "lat": 48.892427,
    "lng": 2.207127,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "paris",
        "distance": 11.2
      },
      {
        "name": "montreuil",
        "distance": 17.44
      },
      {
        "name": "boulogne-billancourt",
        "distance": 6.76
      },
      {
        "name": "cergy",
        "distance": 21.65
      },
      {
        "name": "choisy-le-roi",
        "distance": 20.64
      },
      {
        "name": "croissy-sur-seine",
        "distance": 4.7
      },
      {
        "name": "issy-les-moulineaux",
        "distance": 8.93
      },
      {
        "name": "levallois-perret",
        "distance": 5.92
      },
      {
        "name": "lognes",
        "distance": 31.71
      },
      {
        "name": "saint-germain-en-laye",
        "distance": 9.7
      },
      {
        "name": "saint-mande",
        "distance": 16.23
      },
      {
        "name": "saint-ouen-sur-seine",
        "distance": 9.54
      },
      {
        "name": "torcy",
        "distance": 32.9
      },
      {
        "name": "versailles",
        "distance": 11.5
      }
    ]
  },
  "saint-germain-en-laye": {
    "lat": 48.935605,
    "lng": 2.091774,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "paris",
        "distance": 20.86
      },
      {
        "name": "montreuil",
        "distance": 26.81
      },
      {
        "name": "boulogne-billancourt",
        "distance": 15.53
      },
      {
        "name": "cergy",
        "distance": 13.59
      },
      {
        "name": "choisy-le-roi",
        "distance": 30.14
      },
      {
        "name": "croissy-sur-seine",
        "distance": 7.4
      },
      {
        "name": "issy-les-moulineaux",
        "distance": 18.1
      },
      {
        "name": "levallois-perret",
        "distance": 15.11
      },
      {
        "name": "nanterre",
        "distance": 9.7
      },
      {
        "name": "saint-mande",
        "distance": 25.83
      },
      {
        "name": "saint-ouen-sur-seine",
        "distance": 17.91
      },
      {
        "name": "versailles",
        "distance": 14.91
      }
    ]
  },
  "saint-mande": {
    "lat": 48.843243,
    "lng": 2.415974,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "paris",
        "distance": 5.07
      },
      {
        "name": "montreuil",
        "distance": 2.81
      },
      {
        "name": "boulogne-billancourt",
        "distance": 12.89
      },
      {
        "name": "cergy",
        "distance": 36.07
      },
      {
        "name": "choisy-le-roi",
        "distance": 8.93
      },
      {
        "name": "croissy-sur-seine",
        "distance": 20.15
      },
      {
        "name": "issy-les-moulineaux",
        "distance": 10.63
      },
      {
        "name": "levallois-perret",
        "distance": 10.86
      },
      {
        "name": "lognes",
        "distance": 15.87
      },
      {
        "name": "nanterre",
        "distance": 16.23
      },
      {
        "name": "saint-germain-en-laye",
        "distance": 25.83
      },
      {
        "name": "saint-ouen-sur-seine",
        "distance": 9.68
      },
      {
        "name": "torcy",
        "distance": 17.34
      },
      {
        "name": "versailles",
        "distance": 21.63
      },
      {
        "name": "ile-de-france",
        "distance": 33.21
      }
    ]
  },
  "saint-ouen-sur-seine": {
    "lat": 48.911729,
    "lng": 2.334267,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "paris",
        "distance": 6.56
      },
      {
        "name": "montreuil",
        "distance": 9.56
      },
      {
        "name": "boulogne-billancourt",
        "distance": 10.9
      },
      {
        "name": "cergy",
        "distance": 26.66
      },
      {
        "name": "choisy-le-roi",
        "distance": 17.42
      },
      {
        "name": "croissy-sur-seine",
        "distance": 14.23
      },
      {
        "name": "issy-les-moulineaux",
        "distance": 10.61
      },
      {
        "name": "levallois-perret",
        "distance": 3.96
      },
      {
        "name": "lognes",
        "distance": 23.3
      },
      {
        "name": "nanterre",
        "distance": 9.54
      },
      {
        "name": "saint-germain-en-laye",
        "distance": 17.91
      },
      {
        "name": "saint-mande",
        "distance": 9.68
      },
      {
        "name": "torcy",
        "distance": 24.23
      },
      {
        "name": "versailles",
        "distance": 19.37
      }
    ]
  },
  "torcy": {
    "lat": 48.8515,
    "lng": 2.65265,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "paris",
        "distance": 22.26
      },
      {
        "name": "montreuil",
        "distance": 15.52
      },
      {
        "name": "boulogne-billancourt",
        "distance": 30.23
      },
      {
        "name": "choisy-le-roi",
        "distance": 20.35
      },
      {
        "name": "croissy-sur-seine",
        "distance": 37.19
      },
      {
        "name": "issy-les-moulineaux",
        "distance": 27.91
      },
      {
        "name": "levallois-perret",
        "distance": 27.05
      },
      {
        "name": "lognes",
        "distance": 2.06
      },
      {
        "name": "nanterre",
        "distance": 32.9
      },
      {
        "name": "saint-mande",
        "distance": 17.34
      },
      {
        "name": "saint-ouen-sur-seine",
        "distance": 24.23
      },
      {
        "name": "versailles",
        "distance": 38.87
      },
      {
        "name": "ile-de-france",
        "distance": 24.2
      }
    ]
  },
  "versailles": {
    "lat": 48.80354,
    "lng": 2.126689,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "paris",
        "distance": 17.15
      },
      {
        "name": "montreuil",
        "distance": 23.93
      },
      {
        "name": "boulogne-billancourt",
        "distance": 9.05
      },
      {
        "name": "cergy",
        "distance": 28.44
      },
      {
        "name": "choisy-le-roi",
        "distance": 21.2
      },
      {
        "name": "croissy-sur-seine",
        "distance": 8.55
      },
      {
        "name": "issy-les-moulineaux",
        "distance": 11.01
      },
      {
        "name": "levallois-perret",
        "distance": 15.44
      },
      {
        "name": "lognes",
        "distance": 37.25
      },
      {
        "name": "nanterre",
        "distance": 11.5
      },
      {
        "name": "saint-germain-en-laye",
        "distance": 14.91
      },
      {
        "name": "saint-mande",
        "distance": 21.63
      },
      {
        "name": "saint-ouen-sur-seine",
        "distance": 19.37
      },
      {
        "name": "torcy",
        "distance": 38.87
      }
    ]
  },
  "ile-de-france": {
    "lat": 48.644306,
    "lng": 2.753786,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "paris",
        "distance": 37.74
      },
      {
        "name": "montreuil",
        "distance": 33.36
      },
      {
        "name": "choisy-le-roi",
        "distance": 28.51
      },
      {
        "name": "lognes",
        "distance": 23.34
      },
      {
        "name": "saint-mande",
        "distance": 33.21
      },
      {
        "name": "torcy",
        "distance": 24.2
      }
    ]
  },
  "pantelimon": {
    "lat": 44.451879,
    "lng": 26.203556,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "bucharest",
        "distance": 8.19
      }
    ]
  },
  "Chicago": {
    "lat": 41.90305,
    "lng": -87.666251,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Elk Grove Village",
        "distance": 25.62
      },
      {
        "name": "Evanston",
        "distance": 16.08
      },
      {
        "name": "Forest Park",
        "distance": 11.77
      },
      {
        "name": "Glen Ellyn",
        "distance": 33.69
      },
      {
        "name": "Hoffman Estates",
        "distance": 37.51
      },
      {
        "name": "Lemont",
        "distance": 37.73
      },
      {
        "name": "Lincolnshire",
        "distance": 38.24
      },
      {
        "name": "Melrose Park",
        "distance": 15.79
      },
      {
        "name": "Morton Grove",
        "distance": 18.07
      },
      {
        "name": "Palatine",
        "distance": 38.78
      },
      {
        "name": "Skokie",
        "distance": 15.66
      }
    ]
  },
  "Champaign": {
    "lat": 40.116329,
    "lng": -88.276124,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "pest-county",
        "distance": 22.42
      }
    ]
  },
  "Aurora": {
    "lat": 41.793517,
    "lng": -88.354508,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Glen Ellyn",
        "distance": 26.68
      },
      {
        "name": "Hoffman Estates",
        "distance": 35.87
      },
      {
        "name": "Lemont",
        "distance": 32.17
      },
      {
        "name": "Warrenville",
        "distance": 15.2
      }
    ]
  },
  "Elk Grove Village": {
    "lat": 42.008798,
    "lng": -87.941461,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Chicago",
        "distance": 25.62
      },
      {
        "name": "Evanston",
        "distance": 21.64
      },
      {
        "name": "Forest Park",
        "distance": 18.29
      },
      {
        "name": "Glen Ellyn",
        "distance": 15.44
      },
      {
        "name": "Hoffman Estates",
        "distance": 11.99
      },
      {
        "name": "Lemont",
        "distance": 37.59
      },
      {
        "name": "Lincolnshire",
        "distance": 19.58
      },
      {
        "name": "Melrose Park",
        "distance": 13.94
      },
      {
        "name": "Morton Grove",
        "distance": 13.59
      },
      {
        "name": "Palatine",
        "distance": 14.1
      },
      {
        "name": "Skokie",
        "distance": 15.9
      },
      {
        "name": "Vernon Hills",
        "distance": 25.48
      },
      {
        "name": "Warrenville",
        "distance": 28.65
      }
    ]
  },
  "Evanston": {
    "lat": 42.047004,
    "lng": -87.684605,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Chicago",
        "distance": 16.08
      },
      {
        "name": "Elk Grove Village",
        "distance": 21.64
      },
      {
        "name": "Forest Park",
        "distance": 21.12
      },
      {
        "name": "Glen Ellyn",
        "distance": 35.54
      },
      {
        "name": "Hoffman Estates",
        "distance": 32.59
      },
      {
        "name": "Lincolnshire",
        "distance": 25.51
      },
      {
        "name": "Melrose Park",
        "distance": 21.66
      },
      {
        "name": "Morton Grove",
        "distance": 8.12
      },
      {
        "name": "Palatine",
        "distance": 30.45
      },
      {
        "name": "Skokie",
        "distance": 5.83
      },
      {
        "name": "Vernon Hills",
        "distance": 31.34
      }
    ]
  },
  "Forest Park": {
    "lat": 41.879462,
    "lng": -87.804922,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Chicago",
        "distance": 11.77
      },
      {
        "name": "Elk Grove Village",
        "distance": 18.29
      },
      {
        "name": "Evanston",
        "distance": 21.12
      },
      {
        "name": "Glen Ellyn",
        "distance": 22.48
      },
      {
        "name": "Hoffman Estates",
        "distance": 29.05
      },
      {
        "name": "Lemont",
        "distance": 28.1
      },
      {
        "name": "Lincolnshire",
        "distance": 35.53
      },
      {
        "name": "Melrose Park",
        "distance": 4.89
      },
      {
        "name": "Morton Grove",
        "distance": 18.01
      },
      {
        "name": "Palatine",
        "distance": 32.38
      },
      {
        "name": "Skokie",
        "distance": 17.22
      },
      {
        "name": "Warrenville",
        "distance": 31.33
      }
    ]
  },
  "Glen Carbon": {
    "lat": 38.748381,
    "lng": -89.983158,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Clayton",
        "distance": 32.52
      },
      {
        "name": "Maplewood",
        "distance": 33.26
      }
    ]
  },
  "Glen Ellyn": {
    "lat": 41.910435,
    "lng": -88.073279,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Chicago",
        "distance": 33.69
      },
      {
        "name": "Aurora",
        "distance": 26.68
      },
      {
        "name": "Elk Grove Village",
        "distance": 15.44
      },
      {
        "name": "Evanston",
        "distance": 35.54
      },
      {
        "name": "Forest Park",
        "distance": 22.48
      },
      {
        "name": "Hoffman Estates",
        "distance": 14.72
      },
      {
        "name": "Lemont",
        "distance": 26.98
      },
      {
        "name": "Lincolnshire",
        "distance": 32.66
      },
      {
        "name": "Melrose Park",
        "distance": 17.94
      },
      {
        "name": "Morton Grove",
        "distance": 28.05
      },
      {
        "name": "Palatine",
        "distance": 22.39
      },
      {
        "name": "Skokie",
        "distance": 29.73
      },
      {
        "name": "Vernon Hills",
        "distance": 37.43
      },
      {
        "name": "Warrenville",
        "distance": 13.25
      }
    ]
  },
  "Hoffman Estates": {
    "lat": 42.042726,
    "lng": -88.079278,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Chicago",
        "distance": 37.51
      },
      {
        "name": "Aurora",
        "distance": 35.87
      },
      {
        "name": "Elk Grove Village",
        "distance": 11.99
      },
      {
        "name": "Evanston",
        "distance": 32.59
      },
      {
        "name": "Forest Park",
        "distance": 29.05
      },
      {
        "name": "Glen Ellyn",
        "distance": 14.72
      },
      {
        "name": "Lincolnshire",
        "distance": 19.93
      },
      {
        "name": "Melrose Park",
        "distance": 24.26
      },
      {
        "name": "Morton Grove",
        "distance": 24.5
      },
      {
        "name": "Palatine",
        "distance": 8.1
      },
      {
        "name": "Skokie",
        "distance": 27.16
      },
      {
        "name": "Vernon Hills",
        "distance": 23.6
      },
      {
        "name": "Warrenville",
        "distance": 26.2
      }
    ]
  },
  "Lemont": {
    "lat": 41.673715,
    "lng": -88.001626,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Chicago",
        "distance": 37.73
      },
      {
        "name": "Aurora",
        "distance": 32.17
      },
      {
        "name": "Elk Grove Village",
        "distance": 37.59
      },
      {
        "name": "Forest Park",
        "distance": 28.1
      },
      {
        "name": "Glen Ellyn",
        "distance": 26.98
      },
      {
        "name": "Melrose Park",
        "distance": 27.9
      },
      {
        "name": "Warrenville",
        "distance": 21.49
      }
    ]
  },
  "Lincolnshire": {
    "lat": 42.184753,
    "lng": -87.931877,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Chicago",
        "distance": 38.24
      },
      {
        "name": "Elk Grove Village",
        "distance": 19.58
      },
      {
        "name": "Evanston",
        "distance": 25.51
      },
      {
        "name": "Forest Park",
        "distance": 35.53
      },
      {
        "name": "Glen Ellyn",
        "distance": 32.66
      },
      {
        "name": "Hoffman Estates",
        "distance": 19.93
      },
      {
        "name": "Melrose Park",
        "distance": 32.23
      },
      {
        "name": "Morton Grove",
        "distance": 20.22
      },
      {
        "name": "Palatine",
        "distance": 12.36
      },
      {
        "name": "Skokie",
        "distance": 22.87
      },
      {
        "name": "Vernon Hills",
        "distance": 6.45
      }
    ]
  },
  "Melrose Park": {
    "lat": 41.900299,
    "lng": -87.856975,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Chicago",
        "distance": 15.79
      },
      {
        "name": "Elk Grove Village",
        "distance": 13.94
      },
      {
        "name": "Evanston",
        "distance": 21.66
      },
      {
        "name": "Forest Park",
        "distance": 4.89
      },
      {
        "name": "Glen Ellyn",
        "distance": 17.94
      },
      {
        "name": "Hoffman Estates",
        "distance": 24.26
      },
      {
        "name": "Lemont",
        "distance": 27.9
      },
      {
        "name": "Lincolnshire",
        "distance": 32.23
      },
      {
        "name": "Morton Grove",
        "distance": 16.77
      },
      {
        "name": "Palatine",
        "distance": 28.0
      },
      {
        "name": "Skokie",
        "distance": 16.78
      },
      {
        "name": "Vernon Hills",
        "distance": 38.52
      },
      {
        "name": "Warrenville",
        "distance": 27.81
      }
    ]
  },
  "Morton Grove": {
    "lat": 42.040586,
    "lng": -87.78257,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Chicago",
        "distance": 18.07
      },
      {
        "name": "Elk Grove Village",
        "distance": 13.59
      },
      {
        "name": "Evanston",
        "distance": 8.12
      },
      {
        "name": "Forest Park",
        "distance": 18.01
      },
      {
        "name": "Glen Ellyn",
        "distance": 28.05
      },
      {
        "name": "Hoffman Estates",
        "distance": 24.5
      },
      {
        "name": "Lincolnshire",
        "distance": 20.22
      },
      {
        "name": "Melrose Park",
        "distance": 16.77
      },
      {
        "name": "Palatine",
        "distance": 22.89
      },
      {
        "name": "Skokie",
        "distance": 2.92
      },
      {
        "name": "Vernon Hills",
        "distance": 26.55
      }
    ]
  },
  "Palatine": {
    "lat": 42.11055,
    "lng": -88.04343,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Chicago",
        "distance": 38.78
      },
      {
        "name": "Elk Grove Village",
        "distance": 14.1
      },
      {
        "name": "Evanston",
        "distance": 30.45
      },
      {
        "name": "Forest Park",
        "distance": 32.38
      },
      {
        "name": "Glen Ellyn",
        "distance": 22.39
      },
      {
        "name": "Hoffman Estates",
        "distance": 8.1
      },
      {
        "name": "Lincolnshire",
        "distance": 12.36
      },
      {
        "name": "Melrose Park",
        "distance": 28.0
      },
      {
        "name": "Morton Grove",
        "distance": 22.89
      },
      {
        "name": "Skokie",
        "distance": 25.79
      },
      {
        "name": "Vernon Hills",
        "distance": 15.51
      },
      {
        "name": "Warrenville",
        "distance": 34.28
      }
    ]
  },
  "Skokie": {
    "lat": 42.02899,
    "lng": -87.750899,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Chicago",
        "distance": 15.66
      },
      {
        "name": "Elk Grove Village",
        "distance": 15.9
      },
      {
        "name": "Evanston",
        "distance": 5.83
      },
      {
        "name": "Forest Park",
        "distance": 17.22
      },
      {
        "name": "Glen Ellyn",
        "distance": 29.73
      },
      {
        "name": "Hoffman Estates",
        "distance": 27.16
      },
      {
        "name": "Lincolnshire",
        "distance": 22.87
      },
      {
        "name": "Melrose Park",
        "distance": 16.78
      },
      {
        "name": "Morton Grove",
        "distance": 2.92
      },
      {
        "name": "Palatine",
        "distance": 25.79
      },
      {
        "name": "Vernon Hills",
        "distance": 29.12
      }
    ]
  },
  "Vernon Hills": {
    "lat": 42.237315,
    "lng": -87.964949,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Elk Grove Village",
        "distance": 25.48
      },
      {
        "name": "Evanston",
        "distance": 31.34
      },
      {
        "name": "Glen Ellyn",
        "distance": 37.43
      },
      {
        "name": "Hoffman Estates",
        "distance": 23.6
      },
      {
        "name": "Lincolnshire",
        "distance": 6.45
      },
      {
        "name": "Melrose Park",
        "distance": 38.52
      },
      {
        "name": "Morton Grove",
        "distance": 26.55
      },
      {
        "name": "Palatine",
        "distance": 15.51
      },
      {
        "name": "Skokie",
        "distance": 29.12
      }
    ]
  },
  "Warrenville": {
    "lat": 41.81793,
    "lng": -88.174097,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Aurora",
        "distance": 15.2
      },
      {
        "name": "Elk Grove Village",
        "distance": 28.65
      },
      {
        "name": "Forest Park",
        "distance": 31.33
      },
      {
        "name": "Glen Ellyn",
        "distance": 13.25
      },
      {
        "name": "Hoffman Estates",
        "distance": 26.2
      },
      {
        "name": "Lemont",
        "distance": 21.49
      },
      {
        "name": "Melrose Park",
        "distance": 27.81
      },
      {
        "name": "Palatine",
        "distance": 34.28
      }
    ]
  },
  "Indianapolis": {
    "lat": 39.76622,
    "lng": -86.233847,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Bloomington": {
    "lat": 39.143529,
    "lng": -86.579095,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Fort Wayne": {
    "lat": 41.015828,
    "lng": -85.119833,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "New Pekin": {
    "lat": 38.50506,
    "lng": -86.016919,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Sellersburg",
        "distance": 25.72
      }
    ]
  },
  "Sellersburg": {
    "lat": 38.397972,
    "lng": -85.755073,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Louisville",
        "distance": 30.14
      },
      {
        "name": "New Pekin",
        "distance": 25.72
      }
    ]
  },
  "Walkerton": {
    "lat": 41.466711,
    "lng": -86.483068,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Calmar": {
    "lat": 43.182802,
    "lng": -91.86481,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Decorah",
        "distance": 14.93
      }
    ]
  },
  "Decorah": {
    "lat": 43.304161,
    "lng": -91.78591,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Calmar",
        "distance": 14.93
      }
    ]
  },
  "Des Moines": {
    "lat": 41.587841,
    "lng": -93.585869,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Monticello": {
    "lat": 42.238275,
    "lng": -91.186943,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Peosta",
        "distance": 36.55
      }
    ]
  },
  "Peosta": {
    "lat": 42.446953,
    "lng": -90.84338,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Monticello",
        "distance": 36.55
      }
    ]
  },
  "Kaga": {
    "lat": 36.302762,
    "lng": 136.315116,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Nonoichi",
        "distance": 35.74
      }
    ]
  },
  "Kanazawa": {
    "lat": 36.561627,
    "lng": 136.656882,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Nonoichi",
        "distance": 6.28
      }
    ]
  },
  "Nonoichi": {
    "lat": 36.519721,
    "lng": 136.609811,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Kaga",
        "distance": 35.74
      },
      {
        "name": "Kanazawa",
        "distance": 6.28
      }
    ]
  },
  "istanbul": {
    "lat": 41.006381,
    "lng": 28.975872,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "bukovel": {
    "lat": 48.353783,
    "lng": 24.41283,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Jakarta": {
    "lat": -6.175405,
    "lng": 106.827168,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Guadalajara": {
    "lat": 20.672037,
    "lng": -103.338396,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Zapopan",
        "distance": 7.76
      }
    ]
  },
  "Zapopan": {
    "lat": 20.72112,
    "lng": -103.391367,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Guadalajara",
        "distance": 7.76
      }
    ]
  },
  "Jeollabuk-do": {
    "lat": 35.816827,
    "lng": 127.147102,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Nanjing": {
    "lat": 32.043828,
    "lng": 118.778863,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Suzhou": {
    "lat": 31.311123,
    "lng": 120.621288,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "jonkoping": {
    "lat": 57.782563,
    "lng": 14.165719,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "kajaani": {
    "lat": 64.224686,
    "lng": 27.733928,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Yokohama": {
    "lat": 35.450338,
    "lng": 139.63438,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Fujisawa",
        "distance": 17.96
      },
      {
        "name": "Kawasaki",
        "distance": 10.92
      },
      {
        "name": "Niiza",
        "distance": 38.62
      },
      {
        "name": "Minato City",
        "distance": 23.4
      },
      {
        "name": "Chiyoda City",
        "distance": 29.18
      },
      {
        "name": "Shinagawa City",
        "distance": 19.68
      },
      {
        "name": "Shibuya City",
        "distance": 23.84
      },
      {
        "name": "Shinjuku City",
        "distance": 27.79
      },
      {
        "name": "Chuo City",
        "distance": 29.25
      },
      {
        "name": "Tokyo",
        "distance": 27.78
      },
      {
        "name": "Taito City",
        "distance": 31.99
      },
      {
        "name": "Suginami City",
        "distance": 27.37
      },
      {
        "name": "Koto City",
        "distance": 23.29
      },
      {
        "name": "Musashino",
        "distance": 30.37
      },
      {
        "name": "Setagaya City",
        "distance": 16.17
      },
      {
        "name": "Meguro City",
        "distance": 22.02
      },
      {
        "name": "Nakano City",
        "distance": 28.91
      },
      {
        "name": "Toshima City",
        "distance": 30.82
      },
      {
        "name": "Katsushika City",
        "distance": 38.59
      },
      {
        "name": "Kita City",
        "distance": 35.08
      },
      {
        "name": "Bunkyo City",
        "distance": 30.16
      },
      {
        "name": "Hachioji",
        "distance": 37.48
      },
      {
        "name": "Hino",
        "distance": 32.75
      },
      {
        "name": "Itabashi City",
        "distance": 34.11
      },
      {
        "name": "Mitaka",
        "distance": 26.79
      },
      {
        "name": "Tachikawa",
        "distance": 35.76
      }
    ]
  },
  "Fujisawa": {
    "lat": 35.338862,
    "lng": 139.490934,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Yokohama",
        "distance": 17.96
      },
      {
        "name": "Kawasaki",
        "distance": 28.75
      },
      {
        "name": "Shinagawa City",
        "distance": 37.06
      },
      {
        "name": "Setagaya City",
        "distance": 32.01
      },
      {
        "name": "Meguro City",
        "distance": 38.52
      },
      {
        "name": "Hachioji",
        "distance": 39.7
      },
      {
        "name": "Hino",
        "distance": 37.98
      },
      {
        "name": "Mitaka",
        "distance": 38.81
      }
    ]
  },
  "Kawasaki": {
    "lat": 35.530664,
    "lng": 139.703767,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Chiba",
        "distance": 37.38
      },
      {
        "name": "Ichikawa",
        "distance": 29.54
      },
      {
        "name": "Yokohama",
        "distance": 10.92
      },
      {
        "name": "Fujisawa",
        "distance": 28.75
      },
      {
        "name": "Niiza",
        "distance": 31.74
      },
      {
        "name": "Minato City",
        "distance": 12.5
      },
      {
        "name": "Chiyoda City",
        "distance": 18.73
      },
      {
        "name": "Shinagawa City",
        "distance": 9.06
      },
      {
        "name": "Shibuya City",
        "distance": 14.2
      },
      {
        "name": "Shinjuku City",
        "distance": 18.15
      },
      {
        "name": "Chuo City",
        "distance": 18.45
      },
      {
        "name": "Tokyo",
        "distance": 17.14
      },
      {
        "name": "Taito City",
        "distance": 21.37
      },
      {
        "name": "Suginami City",
        "distance": 19.49
      },
      {
        "name": "Koto City",
        "distance": 12.38
      },
      {
        "name": "Musashino",
        "distance": 24.24
      },
      {
        "name": "Setagaya City",
        "distance": 8.56
      },
      {
        "name": "Meguro City",
        "distance": 12.32
      },
      {
        "name": "Nakano City",
        "distance": 20.19
      },
      {
        "name": "Toshima City",
        "distance": 21.59
      },
      {
        "name": "Katsushika City",
        "distance": 27.74
      },
      {
        "name": "Kita City",
        "distance": 25.19
      },
      {
        "name": "Bunkyo City",
        "distance": 19.74
      },
      {
        "name": "Hachioji",
        "distance": 38.14
      },
      {
        "name": "Hino",
        "distance": 32.0
      },
      {
        "name": "Itabashi City",
        "distance": 24.5
      },
      {
        "name": "Mitaka",
        "distance": 21.43
      },
      {
        "name": "Tachikawa",
        "distance": 33.63
      }
    ]
  },
  "Kansas City": {
    "lat": 39.045039,
    "lng": -94.441171,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Overland Park",
        "distance": 26.27
      },
      {
        "name": "University City",
        "distance": 11.59
      }
    ]
  },
  "Lawrence": {
    "lat": 38.971914,
    "lng": -95.23594,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Overland Park": {
    "lat": 38.890484,
    "lng": -94.670927,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Kansas City",
        "distance": 26.27
      },
      {
        "name": "University City",
        "distance": 17.75
      }
    ]
  },
  "Topeka": {
    "lat": 39.038537,
    "lng": -95.762425,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Bengaluru": {
    "lat": 12.976794,
    "lng": 77.590082,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "kaunas": {
    "lat": 54.898214,
    "lng": 23.904482,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Lexington": {
    "lat": 38.097832,
    "lng": -84.519229,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Bowling Green": {
    "lat": 36.924627,
    "lng": -86.501851,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Richmond": {
    "lat": 37.747857,
    "lng": -84.294654,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Kakkanad": {
    "lat": 10.01657,
    "lng": 76.34275,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "kharkiv": {
    "lat": 49.992318,
    "lng": 36.231015,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "kirovohrad-oblast": {
    "lat": 48.191677,
    "lng": 31.690295,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "kosicky-kraj": {
    "lat": 48.676291,
    "lng": 21.289817,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Kowloon": {
    "lat": 22.33016,
    "lng": 114.189937,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Shenzhen",
        "distance": 27.61
      },
      {
        "name": "Hong Kong Island",
        "distance": 28.11
      },
      {
        "name": "New Territories",
        "distance": 16.41
      },
      {
        "name": "South District",
        "distance": 12.85
      }
    ]
  },
  "vislanda": {
    "lat": 56.787226,
    "lng": 14.451583,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "aryd",
        "distance": 32.44
      }
    ]
  },
  "aryd": {
    "lat": 56.827259,
    "lng": 14.979362,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "vislanda",
        "distance": 32.44
      }
    ]
  },
  "Kumamoto": {
    "lat": 32.803391,
    "lng": 130.708274,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "bydgoszcz": {
    "lat": 53.121965,
    "lng": 18.000253,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "inowroclaw": {
    "lat": 52.795241,
    "lng": 18.259562,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "kyiv": {
    "lat": 50.446247,
    "lng": 30.520873,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Kyoto": {
    "lat": 35.011575,
    "lng": 135.768144,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Suita",
        "distance": 36.22
      }
    ]
  },
  "La Pampa": {
    "lat": -37.178962,
    "lng": -65.704912,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "rome": {
    "lat": 41.89332,
    "lng": 12.482932,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "lazio",
        "distance": 25.37
      }
    ]
  },
  "lazio": {
    "lat": 41.980804,
    "lng": 12.766231,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "rome",
        "distance": 25.37
      }
    ]
  },
  "leicester": {
    "lat": 52.6362,
    "lng": -1.133197,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "derby",
        "distance": 38.41
      },
      {
        "name": "road",
        "distance": 1.83
      },
      {
        "name": "nottingham",
        "distance": 35.29
      },
      {
        "name": "tamworth",
        "distance": 37.9
      }
    ]
  },
  "krakow": {
    "lat": 50.061947,
    "lng": 19.936856,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "tymbark": {
    "lat": 49.729361,
    "lng": 20.324897,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Limassol": {
    "lat": 34.68529,
    "lng": 33.033266,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Germasogeia",
        "distance": 5.88
      },
      {
        "name": "Pissouri",
        "distance": 30.43
      }
    ]
  },
  "Germasogeia": {
    "lat": 34.713084,
    "lng": 33.087943,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Limassol",
        "distance": 5.88
      },
      {
        "name": "Pissouri",
        "distance": 35.71
      }
    ]
  },
  "Pissouri": {
    "lat": 34.668905,
    "lng": 32.701048,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Limassol",
        "distance": 30.43
      },
      {
        "name": "Germasogeia",
        "distance": 35.71
      },
      {
        "name": "Paphos",
        "distance": 27.98
      }
    ]
  },
  "lincoln": {
    "lat": 53.182303,
    "lng": -0.203121,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "north-hykeham",
        "distance": 25.63
      }
    ]
  },
  "north-hykeham": {
    "lat": 53.187011,
    "lng": -0.58775,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "lincoln",
        "distance": 25.63
      }
    ]
  },
  "cascais": {
    "lat": 38.696892,
    "lng": -9.42045,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "lisbon",
        "distance": 24.66
      }
    ]
  },
  "lisbon": {
    "lat": 38.707751,
    "lng": -9.136592,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "cascais",
        "distance": 24.66
      }
    ]
  },
  "ljubljana": {
    "lat": 46.050027,
    "lng": 14.506929,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "ljubljana-dobrunje",
        "distance": 6.12
      },
      {
        "name": "zagorje-ob-savi",
        "distance": 38.8
      }
    ]
  },
  "ljubljana-dobrunje": {
    "lat": 46.037897,
    "lng": 14.584292,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "ljubljana",
        "distance": 6.12
      },
      {
        "name": "zagorje-ob-savi",
        "distance": 33.46
      }
    ]
  },
  "lodz": {
    "lat": 51.472168,
    "lng": 19.346064,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "milan": {
    "lat": 45.464194,
    "lng": 9.189635,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "rho",
        "distance": 13.6
      },
      {
        "name": "assago",
        "distance": 7.98
      },
      {
        "name": "cinisello-balsamo",
        "distance": 10.68
      }
    ]
  },
  "rho": {
    "lat": 45.528878,
    "lng": 9.04156,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "milan",
        "distance": 13.6
      },
      {
        "name": "assago",
        "distance": 15.43
      },
      {
        "name": "cinisello-balsamo",
        "distance": 13.85
      }
    ]
  },
  "assago": {
    "lat": 45.405207,
    "lng": 9.131335,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "milan",
        "distance": 7.98
      },
      {
        "name": "rho",
        "distance": 15.43
      },
      {
        "name": "cinisello-balsamo",
        "distance": 18.24
      }
    ]
  },
  "cinisello-balsamo": {
    "lat": 45.558645,
    "lng": 9.214196,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "milan",
        "distance": 10.68
      },
      {
        "name": "rho",
        "distance": 13.85
      },
      {
        "name": "assago",
        "distance": 18.24
      }
    ]
  },
  "Baton Rouge": {
    "lat": 30.437052,
    "lng": -91.007103,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "New Orleans": {
    "lat": 29.912675,
    "lng": -90.018393,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Lafayette": {
    "lat": 30.18706,
    "lng": -92.075656,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Monroe": {
    "lat": 31.367586,
    "lng": -92.40914,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Louisiana",
        "distance": 34.93
      }
    ]
  },
  "Louisiana": {
    "lat": 31.524226,
    "lng": -92.728262,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Monroe",
        "distance": 34.93
      }
    ]
  },
  "hanover": {
    "lat": 52.374478,
    "lng": 9.738553,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "wroclaw": {
    "lat": 51.108978,
    "lng": 17.032669,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "lucerne": {
    "lat": 47.050545,
    "lng": 8.305468,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "schlieren",
        "distance": 39.88
      }
    ]
  },
  "lviv": {
    "lat": 49.841952,
    "lng": 24.031592,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Mumbai": {
    "lat": 19.054999,
    "lng": 72.869203,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Pune": {
    "lat": 18.521374,
    "lng": 73.854507,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Maharashtra": {
    "lat": 18.906836,
    "lng": 75.674158,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Portland": {
    "lat": 45.497025,
    "lng": -122.579957,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Vancouver",
        "distance": 19.27
      },
      {
        "name": "Beaverton",
        "distance": 17.79
      },
      {
        "name": "Gresham",
        "distance": 11.46
      },
      {
        "name": "Newberg",
        "distance": 37.67
      },
      {
        "name": "Oregon",
        "distance": 27.49
      },
      {
        "name": "Oregon City",
        "distance": 15.67
      }
    ]
  },
  "Augusta": {
    "lat": 44.315885,
    "lng": -69.773899,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Bangor": {
    "lat": 44.801626,
    "lng": -68.771329,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Winnipeg": {
    "lat": 49.895537,
    "lng": -97.138458,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Baltimore": {
    "lat": 39.309961,
    "lng": -76.638009,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Lutherville-Timonium",
        "distance": 13.26
      },
      {
        "name": "Cockeysville",
        "distance": 19.12
      },
      {
        "name": "Crofton",
        "distance": 32.93
      },
      {
        "name": "Pikesville",
        "distance": 12.17
      },
      {
        "name": "Sparks Glencoe",
        "distance": 24.03
      }
    ]
  },
  "Lutherville-Timonium": {
    "lat": 39.428947,
    "lng": -76.62714,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Baltimore",
        "distance": 13.26
      },
      {
        "name": "Cockeysville",
        "distance": 6.06
      },
      {
        "name": "Pikesville",
        "distance": 10.38
      },
      {
        "name": "Sparks Glencoe",
        "distance": 11.02
      }
    ]
  },
  "Rockville": {
    "lat": 39.081798,
    "lng": -77.151684,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Bethesda",
        "distance": 12.02
      },
      {
        "name": "Forest Heights",
        "distance": 32.46
      },
      {
        "name": "Maryland",
        "distance": 34.86
      },
      {
        "name": "Fairfax",
        "distance": 23.07
      },
      {
        "name": "Herndon",
        "distance": 23.78
      },
      {
        "name": "Centreville",
        "distance": 36.55
      }
    ]
  },
  "Cockeysville": {
    "lat": 39.481861,
    "lng": -76.644182,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Baltimore",
        "distance": 19.12
      },
      {
        "name": "Lutherville-Timonium",
        "distance": 6.06
      },
      {
        "name": "Pikesville",
        "distance": 13.02
      },
      {
        "name": "Sparks Glencoe",
        "distance": 4.96
      }
    ]
  },
  "Bethesda": {
    "lat": 38.982538,
    "lng": -77.096652,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Rockville",
        "distance": 12.02
      },
      {
        "name": "Crofton",
        "distance": 35.83
      },
      {
        "name": "Forest Heights",
        "distance": 20.45
      },
      {
        "name": "Fort Washington",
        "distance": 28.34
      },
      {
        "name": "Fairfax",
        "distance": 13.01
      },
      {
        "name": "Herndon",
        "distance": 25.05
      },
      {
        "name": "Centreville",
        "distance": 33.4
      }
    ]
  },
  "Crofton": {
    "lat": 39.015955,
    "lng": -76.684206,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Baltimore",
        "distance": 32.93
      },
      {
        "name": "Bethesda",
        "distance": 35.83
      },
      {
        "name": "Forest Heights",
        "distance": 35.18
      }
    ]
  },
  "Forest Heights": {
    "lat": 38.815232,
    "lng": -76.998591,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Rockville",
        "distance": 32.46
      },
      {
        "name": "Bethesda",
        "distance": 20.45
      },
      {
        "name": "Crofton",
        "distance": 35.18
      },
      {
        "name": "Fort Washington",
        "distance": 8.6
      },
      {
        "name": "Fairfax",
        "distance": 14.97
      },
      {
        "name": "Herndon",
        "distance": 37.66
      },
      {
        "name": "Centreville",
        "distance": 37.86
      }
    ]
  },
  "Fort Washington": {
    "lat": 38.737995,
    "lng": -77.004314,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Bethesda",
        "distance": 28.34
      },
      {
        "name": "Forest Heights",
        "distance": 8.6
      },
      {
        "name": "Fairfax",
        "distance": 19.94
      },
      {
        "name": "Centreville",
        "distance": 38.92
      }
    ]
  },
  "Maryland": {
    "lat": 39.379645,
    "lng": -77.278142,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Rockville",
        "distance": 34.86
      }
    ]
  },
  "Pikesville": {
    "lat": 39.388804,
    "lng": -76.736202,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Baltimore",
        "distance": 12.17
      },
      {
        "name": "Lutherville-Timonium",
        "distance": 10.38
      },
      {
        "name": "Cockeysville",
        "distance": 13.02
      },
      {
        "name": "Sparks Glencoe",
        "distance": 16.75
      }
    ]
  },
  "Sparks Glencoe": {
    "lat": 39.525703,
    "lng": -76.65489,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Baltimore",
        "distance": 24.03
      },
      {
        "name": "Lutherville-Timonium",
        "distance": 11.02
      },
      {
        "name": "Cockeysville",
        "distance": 4.96
      },
      {
        "name": "Pikesville",
        "distance": 16.75
      },
      {
        "name": "Penn Valley",
        "distance": 37.95
      }
    ]
  },
  "warsaw": {
    "lat": 52.231958,
    "lng": 21.006725,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "grodzisk-mazowiecki",
        "distance": 29.15
      },
      {
        "name": "hornowek",
        "distance": 14.9
      },
      {
        "name": "warszawa",
        "distance": 0.0
      }
    ]
  },
  "grodzisk-mazowiecki": {
    "lat": 52.106622,
    "lng": 20.631344,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "warsaw",
        "distance": 29.15
      },
      {
        "name": "hornowek",
        "distance": 23.5
      },
      {
        "name": "warszawa",
        "distance": 29.15
      }
    ]
  },
  "hornowek": {
    "lat": 52.288149,
    "lng": 20.807984,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "warsaw",
        "distance": 14.9
      },
      {
        "name": "grodzisk-mazowiecki",
        "distance": 23.5
      },
      {
        "name": "warszawa",
        "distance": 14.9
      }
    ]
  },
  "Boston": {
    "lat": 42.355433,
    "lng": -71.060511,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Needham",
        "distance": 16.68
      },
      {
        "name": "Newton",
        "distance": 11.91
      },
      {
        "name": "Andover",
        "distance": 34.19
      },
      {
        "name": "Beverly",
        "distance": 26.21
      },
      {
        "name": "Lowell",
        "distance": 37.75
      },
      {
        "name": "Revere",
        "distance": 7.11
      },
      {
        "name": "Salem",
        "distance": 22.66
      },
      {
        "name": "Watertown",
        "distance": 10.23
      }
    ]
  },
  "Cambridge": {
    "lat": 43.360054,
    "lng": -80.312302,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Hamilton",
        "distance": 37.39
      },
      {
        "name": "Kitchener",
        "distance": 17.76
      }
    ]
  },
  "Needham": {
    "lat": 42.280265,
    "lng": -71.236062,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Boston",
        "distance": 16.68
      },
      {
        "name": "Newton",
        "distance": 9.14
      },
      {
        "name": "Revere",
        "distance": 23.29
      },
      {
        "name": "Salem",
        "distance": 38.53
      },
      {
        "name": "Watertown",
        "distance": 10.36
      },
      {
        "name": "Worcester",
        "distance": 29.54
      }
    ]
  },
  "Newton": {
    "lat": 42.35925,
    "lng": -71.205367,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Boston",
        "distance": 11.91
      },
      {
        "name": "Needham",
        "distance": 9.14
      },
      {
        "name": "Andover",
        "distance": 33.55
      },
      {
        "name": "Beverly",
        "distance": 34.14
      },
      {
        "name": "Lowell",
        "distance": 32.5
      },
      {
        "name": "Revere",
        "distance": 16.8
      },
      {
        "name": "Salem",
        "distance": 30.97
      },
      {
        "name": "Watertown",
        "distance": 1.85
      },
      {
        "name": "Worcester",
        "distance": 33.04
      }
    ]
  },
  "Andover": {
    "lat": 42.65717,
    "lng": -71.140878,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Boston",
        "distance": 34.19
      },
      {
        "name": "Newton",
        "distance": 33.55
      },
      {
        "name": "Beverly",
        "distance": 24.64
      },
      {
        "name": "Lowell",
        "distance": 13.82
      },
      {
        "name": "Methuen",
        "distance": 8.7
      },
      {
        "name": "Revere",
        "distance": 29.61
      },
      {
        "name": "Salem",
        "distance": 25.17
      },
      {
        "name": "Watertown",
        "distance": 32.65
      }
    ]
  },
  "Beverly": {
    "lat": 42.548974,
    "lng": -70.878188,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Boston",
        "distance": 26.21
      },
      {
        "name": "Newton",
        "distance": 34.14
      },
      {
        "name": "Andover",
        "distance": 24.64
      },
      {
        "name": "Lowell",
        "distance": 36.7
      },
      {
        "name": "Methuen",
        "distance": 32.29
      },
      {
        "name": "Revere",
        "distance": 19.1
      },
      {
        "name": "Salem",
        "distance": 3.61
      },
      {
        "name": "Watertown",
        "distance": 32.37
      }
    ]
  },
  "Burlington": {
    "lat": 44.479649,
    "lng": -73.212554,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Winooski",
        "distance": 2.45
      }
    ]
  },
  "Conway": {
    "lat": 42.507856,
    "lng": -72.696159,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Greenfield",
        "distance": 11.85
      },
      {
        "name": "Shelburne Falls",
        "distance": 11.22
      }
    ]
  },
  "Dartmouth": {
    "lat": 41.62959,
    "lng": -71.006186,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Greenfield": {
    "lat": 42.587634,
    "lng": -72.600207,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Conway",
        "distance": 11.85
      },
      {
        "name": "Shelburne Falls",
        "distance": 11.54
      }
    ]
  },
  "Lowell": {
    "lat": 42.641444,
    "lng": -71.308533,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Boston",
        "distance": 37.75
      },
      {
        "name": "Newton",
        "distance": 32.5
      },
      {
        "name": "Andover",
        "distance": 13.82
      },
      {
        "name": "Beverly",
        "distance": 36.7
      },
      {
        "name": "Methuen",
        "distance": 13.46
      },
      {
        "name": "Revere",
        "distance": 35.52
      },
      {
        "name": "Salem",
        "distance": 36.34
      },
      {
        "name": "Watertown",
        "distance": 32.35
      },
      {
        "name": "Manchester",
        "distance": 36.33
      }
    ]
  },
  "Methuen": {
    "lat": 42.726202,
    "lng": -71.190892,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Andover",
        "distance": 8.7
      },
      {
        "name": "Beverly",
        "distance": 32.29
      },
      {
        "name": "Lowell",
        "distance": 13.46
      },
      {
        "name": "Revere",
        "distance": 38.25
      },
      {
        "name": "Salem",
        "distance": 33.28
      },
      {
        "name": "Manchester",
        "distance": 32.45
      },
      {
        "name": "Portsmouth",
        "distance": 37.1
      }
    ]
  },
  "Revere": {
    "lat": 42.40843,
    "lng": -71.011995,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Boston",
        "distance": 7.11
      },
      {
        "name": "Needham",
        "distance": 23.29
      },
      {
        "name": "Newton",
        "distance": 16.8
      },
      {
        "name": "Andover",
        "distance": 29.61
      },
      {
        "name": "Beverly",
        "distance": 19.1
      },
      {
        "name": "Lowell",
        "distance": 35.52
      },
      {
        "name": "Methuen",
        "distance": 38.25
      },
      {
        "name": "Salem",
        "distance": 15.56
      },
      {
        "name": "Watertown",
        "distance": 14.95
      }
    ]
  },
  "Salem": {
    "lat": 42.519529,
    "lng": -70.896723,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Boston",
        "distance": 22.66
      },
      {
        "name": "Needham",
        "distance": 38.53
      },
      {
        "name": "Newton",
        "distance": 30.97
      },
      {
        "name": "Andover",
        "distance": 25.17
      },
      {
        "name": "Beverly",
        "distance": 3.61
      },
      {
        "name": "Lowell",
        "distance": 36.34
      },
      {
        "name": "Methuen",
        "distance": 33.28
      },
      {
        "name": "Revere",
        "distance": 15.56
      },
      {
        "name": "Watertown",
        "distance": 29.18
      }
    ]
  },
  "Shelburne Falls": {
    "lat": 42.603559,
    "lng": -72.739462,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Conway",
        "distance": 11.22
      },
      {
        "name": "Greenfield",
        "distance": 11.54
      }
    ]
  },
  "Watertown": {
    "lat": 42.365258,
    "lng": -71.184323,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Boston",
        "distance": 10.23
      },
      {
        "name": "Needham",
        "distance": 10.36
      },
      {
        "name": "Newton",
        "distance": 1.85
      },
      {
        "name": "Andover",
        "distance": 32.65
      },
      {
        "name": "Beverly",
        "distance": 32.37
      },
      {
        "name": "Lowell",
        "distance": 32.35
      },
      {
        "name": "Revere",
        "distance": 14.95
      },
      {
        "name": "Salem",
        "distance": 29.18
      },
      {
        "name": "Worcester",
        "distance": 34.89
      }
    ]
  },
  "Worcester": {
    "lat": 42.286353,
    "lng": -71.595027,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Needham",
        "distance": 29.54
      },
      {
        "name": "Newton",
        "distance": 33.04
      },
      {
        "name": "Watertown",
        "distance": 34.89
      }
    ]
  },
  "warszawa": {
    "lat": 52.231958,
    "lng": 21.006725,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "warsaw",
        "distance": 0.0
      },
      {
        "name": "grodzisk-mazowiecki",
        "distance": 29.15
      },
      {
        "name": "hornowek",
        "distance": 14.9
      }
    ]
  },
  "liverpool": {
    "lat": 53.49536,
    "lng": -2.973938,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "mold",
        "distance": 38.21
      },
      {
        "name": "warrington",
        "distance": 27.74
      }
    ]
  },
  "Makati": {
    "lat": 14.556795,
    "lng": 121.021123,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Pasig",
        "distance": 5.97
      },
      {
        "name": "Manila",
        "distance": 5.77
      },
      {
        "name": "Pasay",
        "distance": 3.2
      },
      {
        "name": "Taguig",
        "distance": 6.63
      }
    ]
  },
  "Pasig": {
    "lat": 14.560517,
    "lng": 121.076434,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Makati",
        "distance": 5.97
      },
      {
        "name": "Manila",
        "distance": 10.86
      },
      {
        "name": "Pasay",
        "distance": 9.0
      },
      {
        "name": "Taguig",
        "distance": 3.73
      }
    ]
  },
  "Manila": {
    "lat": 14.590449,
    "lng": 120.980362,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Makati",
        "distance": 5.77
      },
      {
        "name": "Pasig",
        "distance": 10.86
      },
      {
        "name": "Pasay",
        "distance": 5.42
      },
      {
        "name": "Taguig",
        "distance": 12.34
      }
    ]
  },
  "Pasay": {
    "lat": 14.5437,
    "lng": 120.99465,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Makati",
        "distance": 3.2
      },
      {
        "name": "Pasig",
        "distance": 9.0
      },
      {
        "name": "Manila",
        "distance": 5.42
      },
      {
        "name": "Taguig",
        "distance": 8.79
      }
    ]
  },
  "Taguig": {
    "lat": 14.527054,
    "lng": 121.074494,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Makati",
        "distance": 6.63
      },
      {
        "name": "Pasig",
        "distance": 3.73
      },
      {
        "name": "Manila",
        "distance": 12.34
      },
      {
        "name": "Pasay",
        "distance": 8.79
      }
    ]
  },
  "Miraflores": {
    "lat": -12.12176,
    "lng": -77.029211,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "San Isidro",
        "distance": 2.68
      }
    ]
  },
  "Mexico City": {
    "lat": 19.43263,
    "lng": -99.133178,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "santa-catarina",
        "distance": 38.26
      },
      {
        "name": "amazonas",
        "distance": 20.75
      },
      {
        "name": "parana",
        "distance": 24.58
      }
    ]
  },
  "Ann Arbor": {
    "lat": 42.291948,
    "lng": -83.676347,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Farmington",
        "distance": 30.28
      },
      {
        "name": "Michigan",
        "distance": 17.68
      },
      {
        "name": "Plymouth",
        "distance": 17.68
      },
      {
        "name": "Saline",
        "distance": 22.92
      }
    ]
  },
  "Grand Rapids": {
    "lat": 42.963242,
    "lng": -85.667864,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Kentwood",
        "distance": 10.6
      }
    ]
  },
  "Detroit": {
    "lat": 42.304512,
    "lng": -83.122385,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Farmington",
        "distance": 33.77
      },
      {
        "name": "Michigan",
        "distance": 32.94
      },
      {
        "name": "Plymouth",
        "distance": 32.94
      },
      {
        "name": "Royal Oak",
        "distance": 20.65
      }
    ]
  },
  "Kalamazoo": {
    "lat": 42.253628,
    "lng": -85.579056,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Caledonia": {
    "lat": 42.998235,
    "lng": -84.140047,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Farmington": {
    "lat": 42.499512,
    "lng": -83.437654,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Ann Arbor",
        "distance": 30.28
      },
      {
        "name": "Detroit",
        "distance": 33.77
      },
      {
        "name": "Michigan",
        "distance": 13.48
      },
      {
        "name": "Plymouth",
        "distance": 13.48
      },
      {
        "name": "Royal Oak",
        "distance": 24.05
      }
    ]
  },
  "Fraser": {
    "lat": 43.781983,
    "lng": -83.986804,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Kentwood": {
    "lat": 42.869473,
    "lng": -85.644749,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Grand Rapids",
        "distance": 10.6
      }
    ]
  },
  "Lansing": {
    "lat": 42.662342,
    "lng": -84.590325,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Leland": {
    "lat": 45.022875,
    "lng": -85.760116,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Michigan": {
    "lat": 42.389375,
    "lng": -83.506379,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Ann Arbor",
        "distance": 17.68
      },
      {
        "name": "Detroit",
        "distance": 32.94
      },
      {
        "name": "Farmington",
        "distance": 13.48
      },
      {
        "name": "Plymouth",
        "distance": 0.0
      },
      {
        "name": "Royal Oak",
        "distance": 31.7
      }
    ]
  },
  "Plymouth": {
    "lat": 42.389375,
    "lng": -83.506379,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Ann Arbor",
        "distance": 17.68
      },
      {
        "name": "Detroit",
        "distance": 32.94
      },
      {
        "name": "Farmington",
        "distance": 13.48
      },
      {
        "name": "Michigan",
        "distance": 0.0
      },
      {
        "name": "Royal Oak",
        "distance": 31.7
      }
    ]
  },
  "Royal Oak": {
    "lat": 42.48948,
    "lng": -83.144649,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Detroit",
        "distance": 20.65
      },
      {
        "name": "Farmington",
        "distance": 24.05
      },
      {
        "name": "Michigan",
        "distance": 31.7
      },
      {
        "name": "Plymouth",
        "distance": 31.7
      }
    ]
  },
  "Saline": {
    "lat": 42.124515,
    "lng": -83.838574,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Ann Arbor",
        "distance": 22.92
      }
    ]
  },
  "middlesbrough": {
    "lat": 54.576042,
    "lng": -1.234405,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "milton-keynes": {
    "lat": 52.04065,
    "lng": -0.759409,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "padbury",
        "distance": 15.24
      },
      {
        "name": "letchworth-garden-city",
        "distance": 36.92
      },
      {
        "name": "banbury",
        "distance": 39.78
      }
    ]
  },
  "minas-gerais": {
    "lat": -18.526484,
    "lng": -44.158865,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Minneapolis": {
    "lat": 44.894183,
    "lng": -93.214691,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Saint Paul",
        "distance": 16.38
      },
      {
        "name": "Roseville",
        "distance": 13.25
      },
      {
        "name": "Edina",
        "distance": 11.26
      }
    ]
  },
  "Saint Paul": {
    "lat": 45.040879,
    "lng": -93.196406,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Minneapolis",
        "distance": 16.38
      },
      {
        "name": "Roseville",
        "distance": 4.98
      },
      {
        "name": "Edina",
        "distance": 19.34
      }
    ]
  },
  "Roseville": {
    "lat": 45.006077,
    "lng": -93.156611,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Minneapolis",
        "distance": 13.25
      },
      {
        "name": "Saint Paul",
        "distance": 4.98
      },
      {
        "name": "Edina",
        "distance": 19.07
      }
    ]
  },
  "Edina": {
    "lat": 44.90871,
    "lng": -93.356189,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Minneapolis",
        "distance": 11.26
      },
      {
        "name": "Saint Paul",
        "distance": 19.34
      },
      {
        "name": "Roseville",
        "distance": 19.07
      }
    ]
  },
  "Northfield": {
    "lat": 44.458204,
    "lng": -93.161159,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "minsk": {
    "lat": 53.609904,
    "lng": 27.591021,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "St. Louis": {
    "lat": 38.701385,
    "lng": -90.446164,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Clayton",
        "distance": 11.1
      },
      {
        "name": "Maplewood",
        "distance": 14.46
      },
      {
        "name": "O'Fallon",
        "distance": 26.2
      }
    ]
  },
  "Springfield": {
    "lat": 36.961645,
    "lng": -92.67674,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Clayton": {
    "lat": 38.650435,
    "lng": -90.336247,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Glen Carbon",
        "distance": 32.52
      },
      {
        "name": "St. Louis",
        "distance": 11.1
      },
      {
        "name": "Maplewood",
        "distance": 4.33
      },
      {
        "name": "O'Fallon",
        "distance": 37.26
      }
    ]
  },
  "Maplewood": {
    "lat": 38.612552,
    "lng": -90.32456,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Glen Carbon",
        "distance": 33.26
      },
      {
        "name": "St. Louis",
        "distance": 14.46
      },
      {
        "name": "Clayton",
        "distance": 4.33
      }
    ]
  },
  "O'Fallon": {
    "lat": 38.801878,
    "lng": -90.719412,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "St. Louis",
        "distance": 26.2
      },
      {
        "name": "Clayton",
        "distance": 37.26
      }
    ]
  },
  "University City": {
    "lat": 39.031323,
    "lng": -94.574191,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Kansas City",
        "distance": 11.59
      },
      {
        "name": "Overland Park",
        "distance": 17.75
      }
    ]
  },
  "Sendai": {
    "lat": 38.267755,
    "lng": 140.86915,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Kalispell": {
    "lat": 48.202158,
    "lng": -114.315321,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "elgin": {
    "lat": 57.648789,
    "lng": -3.314846,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "San Isidro": {
    "lat": -12.097736,
    "lng": -77.027392,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Miraflores",
        "distance": 2.68
      }
    ]
  },
  "Nagano": {
    "lat": 36.648585,
    "lng": 138.194766,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Ueda",
        "distance": 27.83
      }
    ]
  },
  "Ueda": {
    "lat": 36.402119,
    "lng": 138.249051,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Nagano",
        "distance": 27.83
      }
    ]
  },
  "Omaha": {
    "lat": 41.219031,
    "lng": -96.118732,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Nebraska City": {
    "lat": 42.453653,
    "lng": -96.414643,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Las Vegas": {
    "lat": 36.143912,
    "lng": -115.241856,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Reno": {
    "lat": 39.529954,
    "lng": -119.809601,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Moncton": {
    "lat": 46.098568,
    "lng": -64.800427,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Dover": {
    "lat": 43.198112,
    "lng": -70.873976,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Portsmouth",
        "distance": 22.83
      }
    ]
  },
  "Hanover": {
    "lat": 39.968604,
    "lng": -74.684299,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Trenton",
        "distance": 29.35
      },
      {
        "name": "Mount Olive Township",
        "distance": 9.21
      },
      {
        "name": "Southampton Township",
        "distance": 4.34
      },
      {
        "name": "Newtown",
        "distance": 36.07
      }
    ]
  },
  "Manchester": {
    "lat": 42.953555,
    "lng": -71.440406,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Concord",
        "distance": 29.28
      },
      {
        "name": "Lowell",
        "distance": 36.33
      },
      {
        "name": "Methuen",
        "distance": 32.45
      }
    ]
  },
  "Portsmouth": {
    "lat": 42.995921,
    "lng": -70.923012,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Methuen",
        "distance": 37.1
      },
      {
        "name": "Dover",
        "distance": 22.83
      }
    ]
  },
  "Rindge": {
    "lat": 42.751196,
    "lng": -72.009802,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "South Plainfield": {
    "lat": 40.57927,
    "lng": -74.41154,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Edison",
        "distance": 6.8
      },
      {
        "name": "Hoboken",
        "distance": 36.82
      },
      {
        "name": "Holmdel",
        "distance": 32.38
      },
      {
        "name": "Lyndhurst",
        "distance": 35.44
      },
      {
        "name": "Marlboro Township",
        "distance": 32.51
      },
      {
        "name": "Sayreville",
        "distance": 13.54
      }
    ]
  },
  "Trenton": {
    "lat": 40.22356,
    "lng": -74.773547,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Hanover",
        "distance": 29.35
      },
      {
        "name": "Mount Olive Township",
        "distance": 25.68
      },
      {
        "name": "Southampton Township",
        "distance": 28.47
      },
      {
        "name": "Newtown",
        "distance": 13.85
      }
    ]
  },
  "Asbury Park": {
    "lat": 40.220391,
    "lng": -74.012082,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Eatontown",
        "distance": 8.49
      },
      {
        "name": "Holmdel",
        "distance": 20.13
      },
      {
        "name": "Marlboro Township",
        "distance": 22.5
      }
    ]
  },
  "Eatontown": {
    "lat": 40.29516,
    "lng": -74.032161,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Asbury Park",
        "distance": 8.49
      },
      {
        "name": "Holmdel",
        "distance": 14.02
      },
      {
        "name": "Marlboro Township",
        "distance": 18.29
      },
      {
        "name": "Sayreville",
        "distance": 33.62
      }
    ]
  },
  "Edison": {
    "lat": 40.518157,
    "lng": -74.411393,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "South Plainfield",
        "distance": 6.8
      },
      {
        "name": "Holmdel",
        "distance": 27.21
      },
      {
        "name": "Marlboro Township",
        "distance": 26.53
      },
      {
        "name": "Sayreville",
        "distance": 7.38
      }
    ]
  },
  "Hoboken": {
    "lat": 40.743307,
    "lng": -74.032375,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "South Plainfield",
        "distance": 36.82
      },
      {
        "name": "Lyndhurst",
        "distance": 10.88
      },
      {
        "name": "Ridgewood",
        "distance": 30.22
      }
    ]
  },
  "Holmdel": {
    "lat": 40.345109,
    "lng": -74.184032,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "South Plainfield",
        "distance": 32.38
      },
      {
        "name": "Asbury Park",
        "distance": 20.13
      },
      {
        "name": "Eatontown",
        "distance": 14.02
      },
      {
        "name": "Edison",
        "distance": 27.21
      },
      {
        "name": "Marlboro Township",
        "distance": 6.22
      },
      {
        "name": "Sayreville",
        "distance": 20.0
      }
    ]
  },
  "Lyndhurst": {
    "lat": 40.812025,
    "lng": -74.124282,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "South Plainfield",
        "distance": 35.44
      },
      {
        "name": "Hoboken",
        "distance": 10.88
      },
      {
        "name": "Ridgewood",
        "distance": 21.49
      }
    ]
  },
  "Marlboro Township": {
    "lat": 40.315388,
    "lng": -74.246256,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "South Plainfield",
        "distance": 32.51
      },
      {
        "name": "Asbury Park",
        "distance": 22.5
      },
      {
        "name": "Eatontown",
        "distance": 18.29
      },
      {
        "name": "Edison",
        "distance": 26.53
      },
      {
        "name": "Holmdel",
        "distance": 6.22
      },
      {
        "name": "Sayreville",
        "distance": 19.16
      }
    ]
  },
  "Mount Olive Township": {
    "lat": 39.99289,
    "lng": -74.787662,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Hanover",
        "distance": 9.21
      },
      {
        "name": "Trenton",
        "distance": 25.68
      },
      {
        "name": "Southampton Township",
        "distance": 5.19
      },
      {
        "name": "Woodbury",
        "distance": 35.57
      },
      {
        "name": "Philadelphia",
        "distance": 32.96
      },
      {
        "name": "Newtown",
        "distance": 29.19
      }
    ]
  },
  "Ridgewood": {
    "lat": 41.00529,
    "lng": -74.128119,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Hoboken",
        "distance": 30.22
      },
      {
        "name": "Lyndhurst",
        "distance": 21.49
      },
      {
        "name": "Warwick",
        "distance": 34.01
      }
    ]
  },
  "Sayreville": {
    "lat": 40.463536,
    "lng": -74.36185,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "South Plainfield",
        "distance": 13.54
      },
      {
        "name": "Eatontown",
        "distance": 33.62
      },
      {
        "name": "Edison",
        "distance": 7.38
      },
      {
        "name": "Holmdel",
        "distance": 20.0
      },
      {
        "name": "Marlboro Township",
        "distance": 19.16
      }
    ]
  },
  "Southampton Township": {
    "lat": 39.969196,
    "lng": -74.73519,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Hanover",
        "distance": 4.34
      },
      {
        "name": "Trenton",
        "distance": 28.47
      },
      {
        "name": "Mount Olive Township",
        "distance": 5.19
      },
      {
        "name": "Woodbury",
        "distance": 38.48
      },
      {
        "name": "Philadelphia",
        "distance": 37.4
      },
      {
        "name": "Newtown",
        "distance": 33.62
      }
    ]
  },
  "Woodbury": {
    "lat": 39.838169,
    "lng": -75.152677,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Wilmington",
        "distance": 35.18
      },
      {
        "name": "Mount Olive Township",
        "distance": 35.57
      },
      {
        "name": "Southampton Township",
        "distance": 38.48
      },
      {
        "name": "Philadelphia",
        "distance": 15.62
      }
    ]
  },
  "Albuquerque": {
    "lat": 35.10143,
    "lng": -106.670283,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Santa Fe": {
    "lat": 35.65259,
    "lng": -105.997152,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "New South Wales": {
    "lat": -31.875984,
    "lng": 147.286949,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Sydney": {
    "lat": -33.869844,
    "lng": 151.208285,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Erskineville",
        "distance": 4.14
      },
      {
        "name": "Eveleigh",
        "distance": 3.2
      },
      {
        "name": "Glebe",
        "distance": 2.22
      },
      {
        "name": "Macquarie Links",
        "distance": 33.31
      },
      {
        "name": "North Ryde",
        "distance": 10.98
      },
      {
        "name": "North Sydney",
        "distance": 3.95
      },
      {
        "name": "Pyrmont",
        "distance": 1.47
      },
      {
        "name": "Surry Hills",
        "distance": 1.64
      },
      {
        "name": "Ultimo",
        "distance": 1.4
      }
    ]
  },
  "Erskineville": {
    "lat": -33.902172,
    "lng": 151.185988,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Sydney",
        "distance": 4.14
      },
      {
        "name": "Eveleigh",
        "distance": 0.94
      },
      {
        "name": "Glebe",
        "distance": 2.71
      },
      {
        "name": "Macquarie Links",
        "distance": 30.17
      },
      {
        "name": "North Ryde",
        "distance": 12.83
      },
      {
        "name": "North Sydney",
        "distance": 7.84
      },
      {
        "name": "Pyrmont",
        "distance": 3.71
      },
      {
        "name": "Surry Hills",
        "distance": 2.96
      },
      {
        "name": "Ultimo",
        "distance": 2.77
      }
    ]
  },
  "Eveleigh": {
    "lat": -33.895,
    "lng": 151.191389,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Sydney",
        "distance": 3.2
      },
      {
        "name": "Erskineville",
        "distance": 0.94
      },
      {
        "name": "Glebe",
        "distance": 1.97
      },
      {
        "name": "Macquarie Links",
        "distance": 30.88
      },
      {
        "name": "North Ryde",
        "distance": 12.35
      },
      {
        "name": "North Sydney",
        "distance": 6.95
      },
      {
        "name": "Pyrmont",
        "distance": 2.87
      },
      {
        "name": "Surry Hills",
        "distance": 2.08
      },
      {
        "name": "Ultimo",
        "distance": 1.84
      }
    ]
  },
  "Glebe": {
    "lat": -33.877778,
    "lng": 151.186238,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Sydney",
        "distance": 2.22
      },
      {
        "name": "Erskineville",
        "distance": 2.71
      },
      {
        "name": "Eveleigh",
        "distance": 1.97
      },
      {
        "name": "Macquarie Links",
        "distance": 31.09
      },
      {
        "name": "North Ryde",
        "distance": 10.45
      },
      {
        "name": "North Sydney",
        "distance": 5.28
      },
      {
        "name": "Pyrmont",
        "distance": 1.11
      },
      {
        "name": "Surry Hills",
        "distance": 2.32
      },
      {
        "name": "Ultimo",
        "distance": 1.14
      }
    ]
  },
  "Macquarie Links": {
    "lat": -33.981667,
    "lng": 150.873333,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Sydney",
        "distance": 33.31
      },
      {
        "name": "Erskineville",
        "distance": 30.17
      },
      {
        "name": "Eveleigh",
        "distance": 30.88
      },
      {
        "name": "Glebe",
        "distance": 31.09
      },
      {
        "name": "North Ryde",
        "distance": 31.12
      },
      {
        "name": "North Sydney",
        "distance": 35.06
      },
      {
        "name": "Pyrmont",
        "distance": 31.98
      },
      {
        "name": "Surry Hills",
        "distance": 32.89
      },
      {
        "name": "Ultimo",
        "distance": 32.07
      }
    ]
  },
  "North Ryde": {
    "lat": -33.797547,
    "lng": 151.127306,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Sydney",
        "distance": 10.98
      },
      {
        "name": "Erskineville",
        "distance": 12.83
      },
      {
        "name": "Eveleigh",
        "distance": 12.35
      },
      {
        "name": "Glebe",
        "distance": 10.45
      },
      {
        "name": "Macquarie Links",
        "distance": 31.12
      },
      {
        "name": "North Sydney",
        "distance": 8.6
      },
      {
        "name": "Pyrmont",
        "distance": 9.98
      },
      {
        "name": "Surry Hills",
        "distance": 12.32
      },
      {
        "name": "Ultimo",
        "distance": 11.23
      }
    ]
  },
  "North Sydney": {
    "lat": -33.834316,
    "lng": 151.209197,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Sydney",
        "distance": 3.95
      },
      {
        "name": "Erskineville",
        "distance": 7.84
      },
      {
        "name": "Eveleigh",
        "distance": 6.95
      },
      {
        "name": "Glebe",
        "distance": 5.28
      },
      {
        "name": "Macquarie Links",
        "distance": 35.06
      },
      {
        "name": "North Ryde",
        "distance": 8.6
      },
      {
        "name": "Pyrmont",
        "distance": 4.18
      },
      {
        "name": "Surry Hills",
        "distance": 5.58
      },
      {
        "name": "Ultimo",
        "distance": 5.12
      }
    ]
  },
  "Pyrmont": {
    "lat": -33.869214,
    "lng": 151.192363,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Sydney",
        "distance": 1.47
      },
      {
        "name": "Erskineville",
        "distance": 3.71
      },
      {
        "name": "Eveleigh",
        "distance": 2.87
      },
      {
        "name": "Glebe",
        "distance": 1.11
      },
      {
        "name": "Macquarie Links",
        "distance": 31.98
      },
      {
        "name": "North Ryde",
        "distance": 9.98
      },
      {
        "name": "North Sydney",
        "distance": 4.18
      },
      {
        "name": "Surry Hills",
        "distance": 2.36
      },
      {
        "name": "Ultimo",
        "distance": 1.27
      }
    ]
  },
  "Surry Hills": {
    "lat": -33.884512,
    "lng": 151.21003,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Sydney",
        "distance": 1.64
      },
      {
        "name": "Erskineville",
        "distance": 2.96
      },
      {
        "name": "Eveleigh",
        "distance": 2.08
      },
      {
        "name": "Glebe",
        "distance": 2.32
      },
      {
        "name": "Macquarie Links",
        "distance": 32.89
      },
      {
        "name": "North Ryde",
        "distance": 12.32
      },
      {
        "name": "North Sydney",
        "distance": 5.58
      },
      {
        "name": "Pyrmont",
        "distance": 2.36
      },
      {
        "name": "Ultimo",
        "distance": 1.21
      }
    ]
  },
  "Taylors Beach": {
    "lat": -32.7385,
    "lng": 152.058089,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Ultimo": {
    "lat": -33.879473,
    "lng": 151.198435,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Sydney",
        "distance": 1.4
      },
      {
        "name": "Erskineville",
        "distance": 2.77
      },
      {
        "name": "Eveleigh",
        "distance": 1.84
      },
      {
        "name": "Glebe",
        "distance": 1.14
      },
      {
        "name": "Macquarie Links",
        "distance": 32.07
      },
      {
        "name": "North Ryde",
        "distance": 11.23
      },
      {
        "name": "North Sydney",
        "distance": 5.12
      },
      {
        "name": "Pyrmont",
        "distance": 1.27
      },
      {
        "name": "Surry Hills",
        "distance": 1.21
      }
    ]
  },
  "New Taipei City": {
    "lat": 25.02679,
    "lng": 121.471078,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Taipei",
        "distance": 9.71
      },
      {
        "name": "Taipei City",
        "distance": 9.71
      }
    ]
  },
  "New Territories": {
    "lat": 22.430072,
    "lng": 114.07242,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Shenzhen",
        "distance": 12.86
      },
      {
        "name": "Hong Kong Island",
        "distance": 20.62
      },
      {
        "name": "Kowloon",
        "distance": 16.41
      },
      {
        "name": "South District",
        "distance": 28.22
      }
    ]
  },
  "New Valley Governorate": {
    "lat": 23.980276,
    "lng": 27.726997,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "New York": {
    "lat": 43.069226,
    "lng": -76.172489,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Syracuse",
        "distance": 0.0
      },
      {
        "name": "Liverpool",
        "distance": 10.1
      },
      {
        "name": "North Syracuse",
        "distance": 8.07
      }
    ]
  },
  "Buffalo": {
    "lat": 42.932739,
    "lng": -78.901746,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "St. Catharines",
        "distance": 37.43
      }
    ]
  },
  "Rochester": {
    "lat": 43.142903,
    "lng": -77.713702,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Syracuse": {
    "lat": 43.069226,
    "lng": -76.172489,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "New York",
        "distance": 0.0
      },
      {
        "name": "Liverpool",
        "distance": 10.1
      },
      {
        "name": "North Syracuse",
        "distance": 8.07
      }
    ]
  },
  "Troy": {
    "lat": 42.728412,
    "lng": -73.691788,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Ballston",
        "distance": 31.65
      },
      {
        "name": "Delmar",
        "distance": 16.58
      },
      {
        "name": "Slingerlands",
        "distance": 17.92
      }
    ]
  },
  "Ballston": {
    "lat": 42.987465,
    "lng": -73.852664,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Troy",
        "distance": 31.65
      },
      {
        "name": "Slingerlands",
        "distance": 39.84
      }
    ]
  },
  "Bohemia": {
    "lat": 40.770609,
    "lng": -73.12007,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Nesconset",
        "distance": 8.72
      }
    ]
  },
  "Delmar": {
    "lat": 42.625124,
    "lng": -73.838135,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Troy",
        "distance": 16.58
      },
      {
        "name": "Slingerlands",
        "distance": 2.21
      }
    ]
  },
  "Little Falls": {
    "lat": 43.021169,
    "lng": -74.890271,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Liverpool": {
    "lat": 43.15021,
    "lng": -76.228884,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "New York",
        "distance": 10.1
      },
      {
        "name": "Syracuse",
        "distance": 10.1
      },
      {
        "name": "North Syracuse",
        "distance": 8.21
      }
    ]
  },
  "Nesconset": {
    "lat": 40.845094,
    "lng": -73.152312,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Bohemia",
        "distance": 8.72
      }
    ]
  },
  "North Syracuse": {
    "lat": 43.13479,
    "lng": -76.129924,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "New York",
        "distance": 8.07
      },
      {
        "name": "Syracuse",
        "distance": 8.07
      },
      {
        "name": "Liverpool",
        "distance": 8.21
      }
    ]
  },
  "Slingerlands": {
    "lat": 42.629246,
    "lng": -73.864569,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Troy",
        "distance": 17.92
      },
      {
        "name": "Ballston",
        "distance": 39.84
      },
      {
        "name": "Delmar",
        "distance": 2.21
      }
    ]
  },
  "Warwick": {
    "lat": 41.256483,
    "lng": -74.359876,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Ridgewood",
        "distance": 34.01
      }
    ]
  },
  "St. John's": {
    "lat": 47.564679,
    "lng": -52.706696,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Nicosia": {
    "lat": 35.17465,
    "lng": 33.363878,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Strovolos",
        "distance": 4.93
      }
    ]
  },
  "Strovolos": {
    "lat": 35.132899,
    "lng": 33.345497,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Nicosia",
        "distance": 4.93
      }
    ]
  },
  "nis": {
    "lat": 43.381955,
    "lng": 22.225664,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "caen": {
    "lat": 49.18134,
    "lng": -0.363561,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "boden": {
    "lat": 65.8275,
    "lng": 21.69641,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "breda": {
    "lat": 51.588785,
    "lng": 4.776024,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "eindhoven": {
    "lat": 51.439265,
    "lng": 5.478633,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "valkenswaard",
        "distance": 13.31
      }
    ]
  },
  "valkenswaard": {
    "lat": 51.320241,
    "lng": 5.458182,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "eindhoven",
        "distance": 13.31
      }
    ]
  },
  "Raleigh": {
    "lat": 35.799673,
    "lng": -78.562085,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Durham",
        "distance": 27.28
      },
      {
        "name": "Cary",
        "distance": 29.8
      },
      {
        "name": "Apex",
        "distance": 27.08
      },
      {
        "name": "Morrisville",
        "distance": 24.32
      }
    ]
  },
  "Durham": {
    "lat": 35.876171,
    "lng": -78.849592,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Raleigh",
        "distance": 27.28
      },
      {
        "name": "Cary",
        "distance": 9.64
      },
      {
        "name": "Apex",
        "distance": 15.97
      },
      {
        "name": "Morrisville",
        "distance": 6.03
      }
    ]
  },
  "Cary": {
    "lat": 35.796727,
    "lng": -78.892516,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Raleigh",
        "distance": 29.8
      },
      {
        "name": "Durham",
        "distance": 9.64
      },
      {
        "name": "Apex",
        "distance": 8.08
      },
      {
        "name": "Morrisville",
        "distance": 6.42
      }
    ]
  },
  "Apex": {
    "lat": 35.732535,
    "lng": -78.850552,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Raleigh",
        "distance": 27.08
      },
      {
        "name": "Durham",
        "distance": 15.97
      },
      {
        "name": "Cary",
        "distance": 8.08
      },
      {
        "name": "Morrisville",
        "distance": 10.37
      }
    ]
  },
  "Charlotte": {
    "lat": 35.157412,
    "lng": -80.942918,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "South Carolina",
        "distance": 11.22
      }
    ]
  },
  "Greensboro": {
    "lat": 36.048517,
    "lng": -79.836164,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Lewisville": {
    "lat": 33.003056,
    "lng": -96.990412,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Bedford",
        "distance": 22.1
      },
      {
        "name": "Dallas",
        "distance": 27.69
      },
      {
        "name": "Plano",
        "distance": 25.66
      },
      {
        "name": "Richardson",
        "distance": 25.07
      },
      {
        "name": "Flower Mound",
        "distance": 8.54
      },
      {
        "name": "Frisco",
        "distance": 22.5
      },
      {
        "name": "Irving",
        "distance": 9.32
      },
      {
        "name": "Addison",
        "distance": 16.16
      },
      {
        "name": "Arlington",
        "distance": 34.86
      },
      {
        "name": "Grapevine",
        "distance": 11.29
      },
      {
        "name": "McKinney",
        "distance": 33.75
      },
      {
        "name": "Southlake",
        "distance": 13.81
      }
    ]
  },
  "Marshall": {
    "lat": 35.797481,
    "lng": -82.683931,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Morrisville": {
    "lat": 35.824341,
    "lng": -78.830032,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Raleigh",
        "distance": 24.32
      },
      {
        "name": "Durham",
        "distance": 6.03
      },
      {
        "name": "Cary",
        "distance": 6.42
      },
      {
        "name": "Apex",
        "distance": 10.37
      }
    ]
  },
  "Southern Pines": {
    "lat": 35.174047,
    "lng": -79.392254,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Fargo": {
    "lat": 46.875829,
    "lng": -96.928129,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Jamestown": {
    "lat": 46.910544,
    "lng": -98.708436,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "aalborg": {
    "lat": 57.046263,
    "lng": 9.921526,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "ang-mo-kio": {
    "lat": 1.355448,
    "lng": 103.856962,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "downtown-core",
        "distance": 7.7
      },
      {
        "name": "queenstown",
        "distance": 8.87
      },
      {
        "name": "kallang",
        "distance": 5.08
      },
      {
        "name": "bukit-merah",
        "distance": 9.52
      },
      {
        "name": "geylang",
        "distance": 4.13
      },
      {
        "name": "marina-south",
        "distance": 8.75
      },
      {
        "name": "newton",
        "distance": 5.57
      },
      {
        "name": "outram",
        "distance": 8.4
      },
      {
        "name": "central-water-catchment",
        "distance": 6.17
      }
    ]
  },
  "amsterdam": {
    "lat": 52.37308,
    "lng": 4.892453,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "hilversum",
        "distance": 25.21
      },
      {
        "name": "alkmaar",
        "distance": 30.28
      },
      {
        "name": "amstelveen",
        "distance": 10.03
      },
      {
        "name": "haarlem",
        "distance": 17.3
      },
      {
        "name": "hoofddorp",
        "distance": 15.51
      },
      {
        "name": "schiphol-rijk",
        "distance": 13.55
      },
      {
        "name": "sassenheim",
        "distance": 30.24
      },
      {
        "name": "utrecht",
        "distance": 35.06
      }
    ]
  },
  "hilversum": {
    "lat": 52.224137,
    "lng": 5.17194,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "amsterdam",
        "distance": 25.21
      },
      {
        "name": "amstelveen",
        "distance": 22.8
      },
      {
        "name": "hoofddorp",
        "distance": 33.85
      },
      {
        "name": "schiphol-rijk",
        "distance": 28.57
      },
      {
        "name": "utrecht",
        "distance": 15.23
      },
      {
        "name": "amersfoort",
        "distance": 16.65
      }
    ]
  },
  "alkmaar": {
    "lat": 52.631259,
    "lng": 4.75038,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "amsterdam",
        "distance": 30.28
      },
      {
        "name": "amstelveen",
        "distance": 38.99
      },
      {
        "name": "haarlem",
        "distance": 28.03
      },
      {
        "name": "hoofddorp",
        "distance": 36.43
      },
      {
        "name": "schiphol-rijk",
        "distance": 38.99
      }
    ]
  },
  "amstelveen": {
    "lat": 52.286218,
    "lng": 4.852649,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "amsterdam",
        "distance": 10.03
      },
      {
        "name": "hilversum",
        "distance": 22.8
      },
      {
        "name": "alkmaar",
        "distance": 38.99
      },
      {
        "name": "haarlem",
        "distance": 18.45
      },
      {
        "name": "hoofddorp",
        "distance": 11.09
      },
      {
        "name": "schiphol-rijk",
        "distance": 6.16
      },
      {
        "name": "sassenheim",
        "distance": 23.66
      },
      {
        "name": "utrecht",
        "distance": 28.44
      },
      {
        "name": "amersfoort",
        "distance": 39.33
      }
    ]
  },
  "haarlem": {
    "lat": 52.388532,
    "lng": 4.638805,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "amsterdam",
        "distance": 17.3
      },
      {
        "name": "alkmaar",
        "distance": 28.03
      },
      {
        "name": "amstelveen",
        "distance": 18.45
      },
      {
        "name": "hoofddorp",
        "distance": 9.93
      },
      {
        "name": "schiphol-rijk",
        "distance": 14.64
      },
      {
        "name": "sassenheim",
        "distance": 19.94
      }
    ]
  },
  "hoofddorp": {
    "lat": 52.305554,
    "lng": 4.692664,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "amsterdam",
        "distance": 15.51
      },
      {
        "name": "hilversum",
        "distance": 33.85
      },
      {
        "name": "alkmaar",
        "distance": 36.43
      },
      {
        "name": "amstelveen",
        "distance": 11.09
      },
      {
        "name": "haarlem",
        "distance": 9.93
      },
      {
        "name": "schiphol-rijk",
        "distance": 5.49
      },
      {
        "name": "sassenheim",
        "distance": 14.8
      },
      {
        "name": "utrecht",
        "distance": 37.75
      },
      {
        "name": "den-haag",
        "distance": 36.12
      }
    ]
  },
  "schiphol-rijk": {
    "lat": 52.280732,
    "lng": 4.762471,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "amsterdam",
        "distance": 13.55
      },
      {
        "name": "hilversum",
        "distance": 28.57
      },
      {
        "name": "alkmaar",
        "distance": 38.99
      },
      {
        "name": "amstelveen",
        "distance": 6.16
      },
      {
        "name": "haarlem",
        "distance": 14.64
      },
      {
        "name": "hoofddorp",
        "distance": 5.49
      },
      {
        "name": "sassenheim",
        "distance": 17.65
      },
      {
        "name": "utrecht",
        "distance": 32.34
      },
      {
        "name": "den-haag",
        "distance": 38.0
      }
    ]
  },
  "oulu": {
    "lat": 65.017766,
    "lng": 25.475341,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "central-water-catchment": {
    "lat": 1.370059,
    "lng": 103.803448,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "downtown-core",
        "distance": 10.87
      },
      {
        "name": "queenstown",
        "distance": 7.86
      },
      {
        "name": "kallang",
        "distance": 9.6
      },
      {
        "name": "bukit-merah",
        "distance": 9.36
      },
      {
        "name": "geylang",
        "distance": 9.33
      },
      {
        "name": "marina-south",
        "distance": 12.43
      },
      {
        "name": "newton",
        "distance": 7.85
      },
      {
        "name": "outram",
        "distance": 10.66
      },
      {
        "name": "ang-mo-kio",
        "distance": 6.17
      }
    ]
  },
  "cologne": {
    "lat": 50.938361,
    "lng": 6.959974,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "dusseldorf",
        "distance": 34.4
      },
      {
        "name": "duren",
        "distance": 36.75
      },
      {
        "name": "wuppertal",
        "distance": 39.28
      }
    ]
  },
  "dusseldorf": {
    "lat": 51.225402,
    "lng": 6.776314,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "cologne",
        "distance": 34.4
      },
      {
        "name": "essen",
        "distance": 30.77
      },
      {
        "name": "krefeld",
        "distance": 19.1
      },
      {
        "name": "wuppertal",
        "distance": 28.29
      }
    ]
  },
  "bielefeld": {
    "lat": 52.019101,
    "lng": 8.531007,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "gutersloh",
        "distance": 16.33
      }
    ]
  },
  "buren": {
    "lat": 51.549745,
    "lng": 8.573475,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "dortmund": {
    "lat": 51.514227,
    "lng": 7.465279,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "essen",
        "distance": 31.74
      },
      {
        "name": "gladbeck",
        "distance": 33.64
      },
      {
        "name": "wuppertal",
        "distance": 34.22
      }
    ]
  },
  "duren": {
    "lat": 50.803168,
    "lng": 6.482081,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "cologne",
        "distance": 36.75
      },
      {
        "name": "wurselen",
        "distance": 24.5
      }
    ]
  },
  "essen": {
    "lat": 51.458224,
    "lng": 7.015817,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "dusseldorf",
        "distance": 30.77
      },
      {
        "name": "dortmund",
        "distance": 31.74
      },
      {
        "name": "gladbeck",
        "distance": 12.78
      },
      {
        "name": "krefeld",
        "distance": 34.4
      },
      {
        "name": "schermbeck",
        "distance": 27.94
      },
      {
        "name": "wuppertal",
        "distance": 24.36
      }
    ]
  },
  "gladbeck": {
    "lat": 51.571866,
    "lng": 6.987734,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "dortmund",
        "distance": 33.64
      },
      {
        "name": "essen",
        "distance": 12.78
      },
      {
        "name": "krefeld",
        "distance": 39.67
      },
      {
        "name": "schermbeck",
        "distance": 15.69
      },
      {
        "name": "wuppertal",
        "distance": 36.69
      }
    ]
  },
  "gutersloh": {
    "lat": 51.9064,
    "lng": 8.378208,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "bielefeld",
        "distance": 16.33
      }
    ]
  },
  "krefeld": {
    "lat": 51.33312,
    "lng": 6.562334,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "dusseldorf",
        "distance": 19.1
      },
      {
        "name": "essen",
        "distance": 34.4
      },
      {
        "name": "gladbeck",
        "distance": 39.67
      }
    ]
  },
  "schermbeck": {
    "lat": 51.692615,
    "lng": 6.870219,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "essen",
        "distance": 27.94
      },
      {
        "name": "gladbeck",
        "distance": 15.69
      }
    ]
  },
  "wuppertal": {
    "lat": 51.264018,
    "lng": 7.178037,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "cologne",
        "distance": 39.28
      },
      {
        "name": "dusseldorf",
        "distance": 28.29
      },
      {
        "name": "dortmund",
        "distance": 34.22
      },
      {
        "name": "essen",
        "distance": 24.36
      },
      {
        "name": "gladbeck",
        "distance": 36.69
      }
    ]
  },
  "wurselen": {
    "lat": 50.817868,
    "lng": 6.134111,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "duren",
        "distance": 24.5
      }
    ]
  },
  "suonenjoki": {
    "lat": 62.624193,
    "lng": 27.124561,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Northern Territory": {
    "lat": -19.85161,
    "lng": 133.230337,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "nottingham": {
    "lat": 52.953419,
    "lng": -1.149646,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "derby",
        "distance": 22.04
      },
      {
        "name": "road",
        "distance": 36.68
      },
      {
        "name": "leicester",
        "distance": 35.29
      }
    ]
  },
  "bordeaux": {
    "lat": 44.841225,
    "lng": -0.580036,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "nouvelle-aquitaine": {
    "lat": 45.403937,
    "lng": 0.37562,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "angouleme",
        "distance": 32.12
      }
    ]
  },
  "angouleme": {
    "lat": 45.648451,
    "lng": 0.156195,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "nouvelle-aquitaine",
        "distance": 32.12
      }
    ]
  },
  "Halifax": {
    "lat": 44.648618,
    "lng": -63.585949,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Nova Scotia": {
    "lat": 45.19604,
    "lng": -63.165379,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Truro",
        "distance": 21.11
      }
    ]
  },
  "Bedford": {
    "lat": 32.844231,
    "lng": -97.132696,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Lewisville",
        "distance": 22.1
      },
      {
        "name": "Dallas",
        "distance": 25.79
      },
      {
        "name": "Richardson",
        "distance": 39.36
      },
      {
        "name": "Flower Mound",
        "distance": 22.45
      },
      {
        "name": "Irving",
        "distance": 15.93
      },
      {
        "name": "Addison",
        "distance": 31.66
      },
      {
        "name": "Arlington",
        "distance": 15.21
      },
      {
        "name": "DeSoto",
        "distance": 38.28
      },
      {
        "name": "Fort Worth",
        "distance": 31.95
      },
      {
        "name": "Grapevine",
        "distance": 11.15
      },
      {
        "name": "Mansfield",
        "distance": 29.6
      },
      {
        "name": "Southlake",
        "distance": 10.89
      }
    ]
  },
  "Lunenburg": {
    "lat": 44.377495,
    "lng": -64.315482,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Mahone Bay",
        "distance": 9.77
      }
    ]
  },
  "Mahone Bay": {
    "lat": 44.448893,
    "lng": -64.387173,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Lunenburg",
        "distance": 9.77
      }
    ]
  },
  "Truro": {
    "lat": 45.365697,
    "lng": -63.286497,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Nova Scotia",
        "distance": 21.11
      }
    ]
  },
  "montpellier": {
    "lat": 43.611242,
    "lng": 3.876734,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "toulouse": {
    "lat": 43.604464,
    "lng": 1.444243,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "odesa": {
    "lat": 46.484302,
    "lng": 30.732288,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Cleveland": {
    "lat": 41.541644,
    "lng": -81.599625,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Ohio",
        "distance": 15.16
      },
      {
        "name": "Berea",
        "distance": 28.83
      },
      {
        "name": "University Heights",
        "distance": 7.11
      }
    ]
  },
  "Columbus": {
    "lat": 40.063783,
    "lng": -83.019833,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Delaware",
        "distance": 10.54
      },
      {
        "name": "Westerville",
        "distance": 10.35
      }
    ]
  },
  "Ohio": {
    "lat": 41.414935,
    "lng": -81.532338,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Cleveland",
        "distance": 15.16
      },
      {
        "name": "Akron",
        "distance": 36.92
      },
      {
        "name": "Berea",
        "distance": 27.4
      },
      {
        "name": "University Heights",
        "distance": 9.23
      }
    ]
  },
  "Akron": {
    "lat": 41.083064,
    "lng": -81.518485,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Ohio",
        "distance": 36.92
      }
    ]
  },
  "Berea": {
    "lat": 41.366161,
    "lng": -81.854303,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Cleveland",
        "distance": 28.83
      },
      {
        "name": "Ohio",
        "distance": 27.4
      },
      {
        "name": "University Heights",
        "distance": 30.21
      }
    ]
  },
  "Cincinnati": {
    "lat": 39.0998,
    "lng": -84.511936,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Dayton": {
    "lat": 39.76391,
    "lng": -84.180908,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Hamilton": {
    "lat": 43.25608,
    "lng": -79.872858,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Cambridge",
        "distance": 37.39
      },
      {
        "name": "Oakville",
        "distance": 27.03
      }
    ]
  },
  "Newark": {
    "lat": 40.085654,
    "lng": -82.428086,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "University Heights": {
    "lat": 41.497831,
    "lng": -81.537346,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Cleveland",
        "distance": 7.11
      },
      {
        "name": "Ohio",
        "distance": 9.23
      },
      {
        "name": "Berea",
        "distance": 30.21
      }
    ]
  },
  "Waldo": {
    "lat": 40.45837,
    "lng": -83.076543,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Delaware",
        "distance": 33.75
      },
      {
        "name": "Westerville",
        "distance": 38.99
      }
    ]
  },
  "Westerville": {
    "lat": 40.126139,
    "lng": -82.929529,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Delaware",
        "distance": 8.14
      },
      {
        "name": "Columbus",
        "distance": 10.35
      },
      {
        "name": "Waldo",
        "distance": 38.99
      }
    ]
  },
  "Youngstown": {
    "lat": 41.089191,
    "lng": -80.66027,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Toronto": {
    "lat": 43.653482,
    "lng": -79.383935,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Oakville",
        "distance": 32.31
      },
      {
        "name": "Mississauga",
        "distance": 22.14
      },
      {
        "name": "Richmond Hill",
        "distance": 25.59
      },
      {
        "name": "Shang Hai Shi",
        "distance": 1.21
      }
    ]
  },
  "Ottawa": {
    "lat": 45.420878,
    "lng": -75.690111,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "London": {
    "lat": 42.983675,
    "lng": -81.249607,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "St. Catharines": {
    "lat": 43.157981,
    "lng": -79.2441,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Buffalo",
        "distance": 37.43
      }
    ]
  },
  "Kitchener": {
    "lat": 43.451291,
    "lng": -80.492782,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Cambridge",
        "distance": 17.76
      }
    ]
  },
  "Oakville": {
    "lat": 43.447436,
    "lng": -79.666672,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Hamilton",
        "distance": 27.03
      },
      {
        "name": "Toronto",
        "distance": 32.31
      },
      {
        "name": "Mississauga",
        "distance": 15.91
      },
      {
        "name": "Shang Hai Shi",
        "distance": 31.42
      }
    ]
  },
  "Peterborough": {
    "lat": 44.304801,
    "lng": -78.31995,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Mississauga": {
    "lat": 43.589623,
    "lng": -79.644388,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Toronto",
        "distance": 22.14
      },
      {
        "name": "Oakville",
        "distance": 15.91
      },
      {
        "name": "Richmond Hill",
        "distance": 36.26
      },
      {
        "name": "Shang Hai Shi",
        "distance": 20.97
      }
    ]
  },
  "Richmond Hill": {
    "lat": 43.880117,
    "lng": -79.439292,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Toronto",
        "distance": 25.59
      },
      {
        "name": "Mississauga",
        "distance": 36.26
      },
      {
        "name": "Uxbridge",
        "distance": 35.89
      },
      {
        "name": "Shang Hai Shi",
        "distance": 25.48
      }
    ]
  },
  "Uxbridge": {
    "lat": 44.10885,
    "lng": -79.122677,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Richmond Hill",
        "distance": 35.89
      }
    ]
  },
  "strzelce-opolskie": {
    "lat": 50.510903,
    "lng": 18.300455,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "gliwice",
        "distance": 35.37
      }
    ]
  },
  "orebro": {
    "lat": 59.274729,
    "lng": 15.215118,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Beaverton": {
    "lat": 45.488157,
    "lng": -122.807836,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Vancouver",
        "distance": 28.24
      },
      {
        "name": "Portland",
        "distance": 17.79
      },
      {
        "name": "Gresham",
        "distance": 29.24
      },
      {
        "name": "Newberg",
        "distance": 24.53
      },
      {
        "name": "Oregon",
        "distance": 11.82
      },
      {
        "name": "Oregon City",
        "distance": 21.4
      }
    ]
  },
  "Eugene": {
    "lat": 44.095318,
    "lng": -123.1275,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Bend": {
    "lat": 44.058173,
    "lng": -121.31531,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Gresham": {
    "lat": 45.497862,
    "lng": -122.432988,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Vancouver",
        "distance": 21.25
      },
      {
        "name": "Portland",
        "distance": 11.46
      },
      {
        "name": "Beaverton",
        "distance": 29.24
      },
      {
        "name": "Oregon",
        "distance": 38.67
      },
      {
        "name": "Oregon City",
        "distance": 20.69
      }
    ]
  },
  "Medford": {
    "lat": 42.332668,
    "lng": -122.8669,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Newberg": {
    "lat": 45.300347,
    "lng": -122.972751,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Portland",
        "distance": 37.67
      },
      {
        "name": "Beaverton",
        "distance": 24.53
      },
      {
        "name": "Oregon",
        "distance": 28.96
      },
      {
        "name": "Oregon City",
        "distance": 29.3
      }
    ]
  },
  "Oregon": {
    "lat": 45.558317,
    "lng": -122.921844,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Vancouver",
        "distance": 31.19
      },
      {
        "name": "Portland",
        "distance": 27.49
      },
      {
        "name": "Beaverton",
        "distance": 11.82
      },
      {
        "name": "Gresham",
        "distance": 38.67
      },
      {
        "name": "Newberg",
        "distance": 28.96
      },
      {
        "name": "Oregon City",
        "distance": 33.22
      }
    ]
  },
  "Oregon City": {
    "lat": 45.357343,
    "lng": -122.606758,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Vancouver",
        "distance": 34.94
      },
      {
        "name": "Portland",
        "distance": 15.67
      },
      {
        "name": "Beaverton",
        "distance": 21.4
      },
      {
        "name": "Gresham",
        "distance": 20.69
      },
      {
        "name": "Newberg",
        "distance": 29.3
      },
      {
        "name": "Oregon",
        "distance": 33.22
      }
    ]
  },
  "Osaka": {
    "lat": 34.693757,
    "lng": 135.501454,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Amagasaki",
        "distance": 9.77
      },
      {
        "name": "Kobe",
        "distance": 28.07
      },
      {
        "name": "Sakai",
        "distance": 13.45
      },
      {
        "name": "Suita",
        "distance": 7.44
      }
    ]
  },
  "Sakai": {
    "lat": 34.573736,
    "lng": 135.482887,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Amagasaki",
        "distance": 19.14
      },
      {
        "name": "Kobe",
        "distance": 29.55
      },
      {
        "name": "Osaka",
        "distance": 13.45
      },
      {
        "name": "Suita",
        "distance": 20.88
      }
    ]
  },
  "Suita": {
    "lat": 34.759419,
    "lng": 135.516835,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Amagasaki",
        "distance": 10.48
      },
      {
        "name": "Kobe",
        "distance": 30.37
      },
      {
        "name": "Kyoto",
        "distance": 36.22
      },
      {
        "name": "Osaka",
        "distance": 7.44
      },
      {
        "name": "Sakai",
        "distance": 20.88
      }
    ]
  },
  "linkoping": {
    "lat": 58.409813,
    "lng": 15.624525,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "norrkoping",
        "distance": 38.55
      },
      {
        "name": "motala",
        "distance": 36.96
      },
      {
        "name": "atvidaberg",
        "distance": 32.02
      }
    ]
  },
  "norrkoping": {
    "lat": 58.590912,
    "lng": 16.190351,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "linkoping",
        "distance": 38.55
      }
    ]
  },
  "motala": {
    "lat": 58.54204,
    "lng": 15.041261,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "linkoping",
        "distance": 36.96
      }
    ]
  },
  "atvidaberg": {
    "lat": 58.200988,
    "lng": 16.001898,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "linkoping",
        "distance": 32.02
      }
    ]
  },
  "zwolle": {
    "lat": 52.508976,
    "lng": 6.094377,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "oxford": {
    "lat": 51.833333,
    "lng": -1.25,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "padbury",
        "distance": 25.57
      },
      {
        "name": "witney",
        "distance": 17.09
      },
      {
        "name": "banbury",
        "distance": 25.97
      },
      {
        "name": "charlbury",
        "distance": 16.5
      }
    ]
  },
  "witney": {
    "lat": 51.783885,
    "lng": -1.485286,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "oxford",
        "distance": 17.09
      },
      {
        "name": "banbury",
        "distance": 32.29
      },
      {
        "name": "charlbury",
        "distance": 10.1
      }
    ]
  },
  "banbury": {
    "lat": 52.060181,
    "lng": -1.34028,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "padbury",
        "distance": 28.53
      },
      {
        "name": "milton-keynes",
        "distance": 39.78
      },
      {
        "name": "oxford",
        "distance": 25.97
      },
      {
        "name": "witney",
        "distance": 32.29
      },
      {
        "name": "charlbury",
        "distance": 22.76
      },
      {
        "name": "royal-leamington-spa",
        "distance": 28.97
      },
      {
        "name": "warwick",
        "distance": 32.48
      },
      {
        "name": "atherstone-on-stour",
        "distance": 26.86
      },
      {
        "name": "barford",
        "distance": 27.44
      },
      {
        "name": "southam",
        "distance": 21.7
      }
    ]
  },
  "charlbury": {
    "lat": 51.874697,
    "lng": -1.480661,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "padbury",
        "distance": 37.9
      },
      {
        "name": "oxford",
        "distance": 16.5
      },
      {
        "name": "witney",
        "distance": 10.1
      },
      {
        "name": "banbury",
        "distance": 22.76
      },
      {
        "name": "atherstone-on-stour",
        "distance": 34.81
      }
    ]
  },
  "Panama City": {
    "lat": 8.971449,
    "lng": -79.53418,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Paphos": {
    "lat": 34.774399,
    "lng": 32.423159,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Pissouri",
        "distance": 27.98
      }
    ]
  },
  "lawrenny": {
    "lat": 51.72595,
    "lng": -4.872149,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Philadelphia": {
    "lat": 39.977654,
    "lng": -75.173962,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Mount Olive Township",
        "distance": 32.96
      },
      {
        "name": "Southampton Township",
        "distance": 37.4
      },
      {
        "name": "Woodbury",
        "distance": 15.62
      },
      {
        "name": "Newtown",
        "distance": 34.52
      }
    ]
  },
  "Pittsburgh": {
    "lat": 40.450736,
    "lng": -80.024822,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Canonsburg",
        "distance": 25.37
      },
      {
        "name": "Carnegie",
        "distance": 6.99
      },
      {
        "name": "Evans City",
        "distance": 35.57
      },
      {
        "name": "New Kensington",
        "distance": 25.66
      },
      {
        "name": "Rillton",
        "distance": 30.68
      },
      {
        "name": "Sewickley",
        "distance": 16.51
      }
    ]
  },
  "Allentown": {
    "lat": 40.602255,
    "lng": -75.471611,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Canonsburg": {
    "lat": 40.258843,
    "lng": -80.186732,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Pittsburgh",
        "distance": 25.37
      },
      {
        "name": "Carnegie",
        "distance": 29.19
      },
      {
        "name": "Rillton",
        "distance": 38.8
      },
      {
        "name": "Sewickley",
        "distance": 31.31
      }
    ]
  },
  "Carnegie": {
    "lat": 40.44419,
    "lng": -79.942719,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Pittsburgh",
        "distance": 6.99
      },
      {
        "name": "Canonsburg",
        "distance": 29.19
      },
      {
        "name": "Evans City",
        "distance": 37.5
      },
      {
        "name": "New Kensington",
        "distance": 20.53
      },
      {
        "name": "Rillton",
        "distance": 24.86
      },
      {
        "name": "Sewickley",
        "distance": 22.78
      }
    ]
  },
  "Erie": {
    "lat": 42.088985,
    "lng": -80.133847,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Evans City": {
    "lat": 40.769558,
    "lng": -80.059499,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Pittsburgh",
        "distance": 35.57
      },
      {
        "name": "Carnegie",
        "distance": 37.5
      },
      {
        "name": "New Kensington",
        "distance": 33.34
      },
      {
        "name": "Sewickley",
        "distance": 27.46
      }
    ]
  },
  "MIDDLE CITY EAST": {
    "lat": 40.811158,
    "lng": -76.136619,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "New Kensington": {
    "lat": 40.569789,
    "lng": -79.76477,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Pittsburgh",
        "distance": 25.66
      },
      {
        "name": "Carnegie",
        "distance": 20.53
      },
      {
        "name": "Evans City",
        "distance": 33.34
      },
      {
        "name": "Rillton",
        "distance": 31.33
      },
      {
        "name": "Sewickley",
        "distance": 35.28
      }
    ]
  },
  "Newtown": {
    "lat": 40.229405,
    "lng": -74.936533,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Hanover",
        "distance": 36.07
      },
      {
        "name": "Trenton",
        "distance": 13.85
      },
      {
        "name": "Mount Olive Township",
        "distance": 29.19
      },
      {
        "name": "Southampton Township",
        "distance": 33.62
      },
      {
        "name": "Philadelphia",
        "distance": 34.52
      }
    ]
  },
  "Penn Valley": {
    "lat": 39.855605,
    "lng": -76.768486,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Sparks Glencoe",
        "distance": 37.95
      }
    ]
  },
  "Rillton": {
    "lat": 40.289237,
    "lng": -79.731155,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Pittsburgh",
        "distance": 30.68
      },
      {
        "name": "Canonsburg",
        "distance": 38.8
      },
      {
        "name": "Carnegie",
        "distance": 24.86
      },
      {
        "name": "New Kensington",
        "distance": 31.33
      }
    ]
  },
  "Sewickley": {
    "lat": 40.540342,
    "lng": -80.180527,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Pittsburgh",
        "distance": 16.51
      },
      {
        "name": "Canonsburg",
        "distance": 31.31
      },
      {
        "name": "Carnegie",
        "distance": 22.78
      },
      {
        "name": "Evans City",
        "distance": 27.46
      },
      {
        "name": "New Kensington",
        "distance": 35.28
      }
    ]
  },
  "Wilkes-Barre": {
    "lat": 41.22685,
    "lng": -75.931735,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "collace": {
    "lat": 56.477404,
    "lng": -3.295761,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "dundee",
        "distance": 20.18
      }
    ]
  },
  "pest-county": {
    "lat": 39.914753,
    "lng": -88.273383,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Champaign",
        "distance": 22.42
      }
    ]
  },
  "Pa Tong": {
    "lat": 7.896632,
    "lng": 98.295429,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "torino": {
    "lat": 45.067755,
    "lng": 7.682489,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "tampere": {
    "lat": 61.497793,
    "lng": 23.761637,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "rzeszow": {
    "lat": 50.037453,
    "lng": 22.004717,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "poltava": {
    "lat": 49.860781,
    "lng": 33.749879,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "gdansk": {
    "lat": 54.370686,
    "lng": 18.612983,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "gdynia",
        "distance": 16.88
      }
    ]
  },
  "gdynia": {
    "lat": 54.516498,
    "lng": 18.540274,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "gdansk",
        "distance": 16.88
      }
    ]
  },
  "vila-nova-de-gaia": {
    "lat": 41.129226,
    "lng": -8.60574,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "porto": {
    "lat": -30.030678,
    "lng": -51.223573,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "rio-grande-do-sul",
        "distance": 12.03
      },
      {
        "name": "porto-alegre",
        "distance": 12.03
      }
    ]
  },
  "portsmouth": {
    "lat": 50.800031,
    "lng": -1.090602,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "petersfield",
        "distance": 24.89
      },
      {
        "name": "southampton",
        "distance": 24.79
      }
    ]
  },
  "prague": {
    "lat": 50.059629,
    "lng": 14.446459,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "mnisek-pod-brdy",
        "distance": 25.25
      }
    ]
  },
  "Charlottetown": {
    "lat": 46.235419,
    "lng": -63.126539,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Prince Edward Island",
        "distance": 11.24
      }
    ]
  },
  "Prince Edward Island": {
    "lat": 46.335551,
    "lng": -63.146668,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Charlottetown",
        "distance": 11.24
      }
    ]
  },
  "cannes": {
    "lat": 43.55152,
    "lng": 7.013442,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "nice",
        "distance": 25.83
      }
    ]
  },
  "hyeres": {
    "lat": 43.120257,
    "lng": 6.130161,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "marseille": {
    "lat": 43.296174,
    "lng": 5.369953,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "nice": {
    "lat": 43.695392,
    "lng": 7.265463,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "cannes",
        "distance": 25.83
      }
    ]
  },
  "Lahore": {
    "lat": 31.565682,
    "lng": 74.314183,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Montreal": {
    "lat": 45.503182,
    "lng": -73.569806,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Laval",
        "distance": 13.23
      },
      {
        "name": "Saint-Lambert",
        "distance": 4.64
      },
      {
        "name": "Terrebonne",
        "distance": 21.94
      },
      {
        "name": "Varennes",
        "distance": 22.58
      }
    ]
  },
  "Quebec City": {
    "lat": 46.79297,
    "lng": -71.384599,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Laval": {
    "lat": 45.557113,
    "lng": -73.721178,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Montreal",
        "distance": 13.23
      },
      {
        "name": "Saint-Lambert",
        "distance": 17.55
      },
      {
        "name": "Terrebonne",
        "distance": 16.75
      },
      {
        "name": "Varennes",
        "distance": 26.24
      }
    ]
  },
  "Saguenay": {
    "lat": 48.405959,
    "lng": -71.069183,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Saint-Hyacinthe": {
    "lat": 45.627484,
    "lng": -72.940636,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Varennes",
        "distance": 39.02
      }
    ]
  },
  "Saint-Lambert": {
    "lat": 45.50162,
    "lng": -73.510298,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Montreal",
        "distance": 4.64
      },
      {
        "name": "Laval",
        "distance": 17.55
      },
      {
        "name": "Terrebonne",
        "distance": 23.61
      },
      {
        "name": "Varennes",
        "distance": 21.03
      }
    ]
  },
  "Sherbrooke": {
    "lat": 45.403271,
    "lng": -71.889038,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Terrebonne": {
    "lat": 45.695153,
    "lng": -73.635015,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Montreal",
        "distance": 21.94
      },
      {
        "name": "Laval",
        "distance": 16.75
      },
      {
        "name": "Saint-Lambert",
        "distance": 23.61
      },
      {
        "name": "Varennes",
        "distance": 15.49
      }
    ]
  },
  "Varennes": {
    "lat": 45.683469,
    "lng": -73.436274,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Montreal",
        "distance": 22.58
      },
      {
        "name": "Laval",
        "distance": 26.24
      },
      {
        "name": "Saint-Hyacinthe",
        "distance": 39.02
      },
      {
        "name": "Saint-Lambert",
        "distance": 21.03
      },
      {
        "name": "Terrebonne",
        "distance": 15.49
      }
    ]
  },
  "Fortitude Valley": {
    "lat": -27.455896,
    "lng": 153.033938,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Brisbane City",
        "distance": 1.78
      },
      {
        "name": "Bulimba",
        "distance": 2.72
      },
      {
        "name": "Indooroopilly",
        "distance": 7.6
      },
      {
        "name": "Kelvin Grove",
        "distance": 2.19
      },
      {
        "name": "West End",
        "distance": 4.01
      }
    ]
  },
  "Brisbane City": {
    "lat": -27.468974,
    "lng": 153.023488,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Fortitude Valley",
        "distance": 1.78
      },
      {
        "name": "Bulimba",
        "distance": 4.26
      },
      {
        "name": "Indooroopilly",
        "distance": 5.83
      },
      {
        "name": "Kelvin Grove",
        "distance": 2.35
      },
      {
        "name": "West End",
        "distance": 2.24
      }
    ]
  },
  "Bulimba": {
    "lat": -27.449186,
    "lng": 153.060487,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Fortitude Valley",
        "distance": 2.72
      },
      {
        "name": "Brisbane City",
        "distance": 4.26
      },
      {
        "name": "Indooroopilly",
        "distance": 10.01
      },
      {
        "name": "Kelvin Grove",
        "distance": 4.72
      },
      {
        "name": "West End",
        "distance": 6.46
      }
    ]
  },
  "Helensvale": {
    "lat": -27.925425,
    "lng": 153.33899,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Indooroopilly": {
    "lat": -27.506561,
    "lng": 152.982278,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Fortitude Valley",
        "distance": 7.6
      },
      {
        "name": "Brisbane City",
        "distance": 5.83
      },
      {
        "name": "Bulimba",
        "distance": 10.01
      },
      {
        "name": "Kelvin Grove",
        "distance": 6.95
      },
      {
        "name": "West End",
        "distance": 3.59
      }
    ]
  },
  "Kelvin Grove": {
    "lat": -27.450162,
    "lng": 153.01267,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Fortitude Valley",
        "distance": 2.19
      },
      {
        "name": "Brisbane City",
        "distance": 2.35
      },
      {
        "name": "Bulimba",
        "distance": 4.72
      },
      {
        "name": "Indooroopilly",
        "distance": 6.95
      },
      {
        "name": "West End",
        "distance": 3.72
      }
    ]
  },
  "Queensland": {
    "lat": -22.164678,
    "lng": 144.58449,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "West End": {
    "lat": -27.483299,
    "lng": 153.007502,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Fortitude Valley",
        "distance": 4.01
      },
      {
        "name": "Brisbane City",
        "distance": 2.24
      },
      {
        "name": "Bulimba",
        "distance": 6.46
      },
      {
        "name": "Indooroopilly",
        "distance": 3.59
      },
      {
        "name": "Kelvin Grove",
        "distance": 3.72
      }
    ]
  },
  "Jaipur": {
    "lat": 26.915458,
    "lng": 75.818982,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Jodhpur": {
    "lat": 26.296772,
    "lng": 73.035143,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "mainz": {
    "lat": 49.999521,
    "lng": 8.273625,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "frankfurt",
        "distance": 31.67
      },
      {
        "name": "darmstadt",
        "distance": 30.48
      },
      {
        "name": "eschborn",
        "distance": 26.49
      },
      {
        "name": "langen",
        "distance": 28.11
      },
      {
        "name": "wiesbaden",
        "distance": 9.46
      }
    ]
  },
  "worms": {
    "lat": 49.630262,
    "lng": 8.36209,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "heidelberg",
        "distance": 34.35
      },
      {
        "name": "mannheim",
        "distance": 17.42
      },
      {
        "name": "darmstadt",
        "distance": 34.04
      }
    ]
  },
  "Providence": {
    "lat": 41.823989,
    "lng": -71.412834,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "abercynon": {
    "lat": 51.647593,
    "lng": -3.317828,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "pencoed",
        "distance": 18.81
      },
      {
        "name": "caerphilly",
        "distance": 10.0
      },
      {
        "name": "cardiff",
        "distance": 20.79
      }
    ]
  },
  "riga": {
    "lat": 56.949398,
    "lng": 24.105185,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Pereira": {
    "lat": 4.814316,
    "lng": -75.694678,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Niiza": {
    "lat": 35.793119,
    "lng": 139.565726,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Ichikawa",
        "distance": 33.9
      },
      {
        "name": "Yokohama",
        "distance": 38.62
      },
      {
        "name": "Kawasaki",
        "distance": 31.74
      },
      {
        "name": "Minato City",
        "distance": 26.27
      },
      {
        "name": "Chiyoda City",
        "distance": 20.21
      },
      {
        "name": "Shinagawa City",
        "distance": 25.27
      },
      {
        "name": "Shibuya City",
        "distance": 19.21
      },
      {
        "name": "Shinjuku City",
        "distance": 16.62
      },
      {
        "name": "Chuo City",
        "distance": 23.52
      },
      {
        "name": "Tokyo",
        "distance": 22.07
      },
      {
        "name": "Taito City",
        "distance": 21.29
      },
      {
        "name": "Suginami City",
        "distance": 12.37
      },
      {
        "name": "Koto City",
        "distance": 26.61
      },
      {
        "name": "Musashino",
        "distance": 8.38
      },
      {
        "name": "Setagaya City",
        "distance": 23.35
      },
      {
        "name": "Meguro City",
        "distance": 20.68
      },
      {
        "name": "Nakano City",
        "distance": 12.82
      },
      {
        "name": "Toshima City",
        "distance": 13.28
      },
      {
        "name": "Katsushika City",
        "distance": 25.44
      },
      {
        "name": "Kita City",
        "distance": 15.29
      },
      {
        "name": "Bunkyo City",
        "distance": 19.75
      },
      {
        "name": "Hachioji",
        "distance": 26.56
      },
      {
        "name": "Hino",
        "distance": 20.52
      },
      {
        "name": "Itabashi City",
        "distance": 13.77
      },
      {
        "name": "Mitaka",
        "distance": 12.22
      },
      {
        "name": "Tachikawa",
        "distance": 16.76
      }
    ]
  },
  "salzburg": {
    "lat": 47.798135,
    "lng": 13.046481,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "santa-catarina": {
    "lat": 19.399559,
    "lng": -99.496306,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Mexico City",
        "distance": 38.26
      },
      {
        "name": "rio-de-janeiro",
        "distance": 11.11
      }
    ]
  },
  "las-condes": {
    "lat": -33.408455,
    "lng": -70.567149,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "santiago-metropolitan-region",
        "distance": 19.06
      }
    ]
  },
  "santiago-metropolitan-region": {
    "lat": -33.573934,
    "lng": -70.620552,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "las-condes",
        "distance": 19.06
      }
    ]
  },
  "Regina": {
    "lat": 50.447973,
    "lng": -104.615876,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Saskatchewan": {
    "lat": 55.532126,
    "lng": -106.141224,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Saskatoon": {
    "lat": 52.131802,
    "lng": -106.660767,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "magdeburg": {
    "lat": 52.131478,
    "lng": 11.640079,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "leipzig": {
    "lat": 51.340632,
    "lng": 12.374733,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "bautzen": {
    "lat": 51.180913,
    "lng": 14.4276,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "wilsdruff": {
    "lat": 51.052413,
    "lng": 13.536276,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "kiel": {
    "lat": 54.322708,
    "lng": 10.135555,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Cyberjaya": {
    "lat": 2.933891,
    "lng": 101.645559,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Kuala Lumpur",
        "distance": 24.81
      },
      {
        "name": "Petaling Jaya",
        "distance": 18.35
      }
    ]
  },
  "Petaling Jaya": {
    "lat": 3.098879,
    "lng": 101.64542,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Kuala Lumpur",
        "distance": 7.99
      },
      {
        "name": "Cyberjaya",
        "distance": 18.35
      }
    ]
  },
  "Seoul": {
    "lat": 37.566679,
    "lng": 126.978291,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Seongnam-si",
        "distance": 20.46
      }
    ]
  },
  "Xi'an": {
    "lat": 34.261004,
    "lng": 108.942336,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Shanghai": {
    "lat": 31.232344,
    "lng": 121.469102,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Shang Hai Shi": {
    "lat": 43.652837,
    "lng": -79.398965,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Toronto",
        "distance": 1.21
      },
      {
        "name": "Oakville",
        "distance": 31.42
      },
      {
        "name": "Mississauga",
        "distance": 20.97
      },
      {
        "name": "Richmond Hill",
        "distance": 25.48
      }
    ]
  },
  "Izu": {
    "lat": 34.976455,
    "lng": 138.946708,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Chengdu": {
    "lat": 30.659867,
    "lng": 104.063315,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "messina": {
    "lat": 38.193757,
    "lng": 15.554208,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "katowice": {
    "lat": 50.259899,
    "lng": 19.021585,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "gliwice",
        "distance": 25.57
      },
      {
        "name": "zabrze",
        "distance": 18.09
      }
    ]
  },
  "gliwice": {
    "lat": 50.294113,
    "lng": 18.665731,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "strzelce-opolskie",
        "distance": 35.37
      },
      {
        "name": "katowice",
        "distance": 25.57
      },
      {
        "name": "zabrze",
        "distance": 8.53
      }
    ]
  },
  "bielsko-biala": {
    "lat": 49.822118,
    "lng": 19.044894,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "zabrze": {
    "lat": 50.314281,
    "lng": 18.781576,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "katowice",
        "distance": 18.09
      },
      {
        "name": "gliwice",
        "distance": 8.53
      }
    ]
  },
  "malmo": {
    "lat": 55.605293,
    "lng": 13.000157,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "copenhagen",
        "distance": 28.47
      },
      {
        "name": "frederiksberg",
        "distance": 30.43
      },
      {
        "name": "lund",
        "distance": 16.25
      }
    ]
  },
  "helsingborg": {
    "lat": 56.04421,
    "lng": 12.703706,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "lund": {
    "lat": 55.70293,
    "lng": 13.192945,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "copenhagen",
        "distance": 39.08
      },
      {
        "name": "malmo",
        "distance": 16.25
      }
    ]
  },
  "bromolla": {
    "lat": 56.116667,
    "lng": 14.55,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "karlshamn",
        "distance": 20.29
      }
    ]
  },
  "nykoping": {
    "lat": 58.754541,
    "lng": 17.012066,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "sofia": {
    "lat": 42.697703,
    "lng": 23.321736,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Adelaide": {
    "lat": -34.928181,
    "lng": 138.599931,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Collinswood",
        "distance": 4.68
      }
    ]
  },
  "Collinswood": {
    "lat": -34.887287,
    "lng": 138.612236,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Adelaide",
        "distance": 4.68
      }
    ]
  },
  "South Australia": {
    "lat": -30.534367,
    "lng": 135.630121,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "South Carolina": {
    "lat": 35.060084,
    "lng": -80.910337,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Charlotte",
        "distance": 11.22
      }
    ]
  },
  "South District": {
    "lat": 22.219269,
    "lng": 114.225223,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Hong Kong Island",
        "distance": 33.34
      },
      {
        "name": "Kowloon",
        "distance": 12.85
      },
      {
        "name": "New Territories",
        "distance": 28.22
      }
    ]
  },
  "floriana": {
    "lat": -25.097441,
    "lng": -54.246782,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "kalkara": {
    "lat": 35.892507,
    "lng": 14.458491,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "valletta",
        "distance": 2.34
      }
    ]
  },
  "valletta": {
    "lat": 35.90521,
    "lng": 14.437737,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "kalkara",
        "distance": 2.34
      }
    ]
  },
  "rotterdam": {
    "lat": 51.924442,
    "lng": 4.47775,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "capelle-aan-den-ijssel",
        "distance": 7.62
      },
      {
        "name": "delft",
        "distance": 11.48
      },
      {
        "name": "hoogvliet-rotterdam",
        "distance": 10.2
      },
      {
        "name": "sassenheim",
        "distance": 33.5
      },
      {
        "name": "den-haag",
        "distance": 20.71
      }
    ]
  },
  "capelle-aan-den-ijssel": {
    "lat": 51.931255,
    "lng": 4.58836,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "rotterdam",
        "distance": 7.62
      },
      {
        "name": "delft",
        "distance": 17.22
      },
      {
        "name": "hoogvliet-rotterdam",
        "distance": 17.05
      },
      {
        "name": "sassenheim",
        "distance": 32.96
      },
      {
        "name": "den-haag",
        "distance": 25.16
      }
    ]
  },
  "delft": {
    "lat": 51.999457,
    "lng": 4.362725,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "rotterdam",
        "distance": 11.48
      },
      {
        "name": "capelle-aan-den-ijssel",
        "distance": 17.22
      },
      {
        "name": "hoogvliet-rotterdam",
        "distance": 14.92
      },
      {
        "name": "sassenheim",
        "distance": 27.24
      },
      {
        "name": "den-haag",
        "distance": 9.62
      }
    ]
  },
  "hoogvliet-rotterdam": {
    "lat": 51.865285,
    "lng": 4.364111,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "rotterdam",
        "distance": 10.2
      },
      {
        "name": "capelle-aan-den-ijssel",
        "distance": 17.05
      },
      {
        "name": "delft",
        "distance": 14.92
      },
      {
        "name": "den-haag",
        "distance": 24.15
      }
    ]
  },
  "sassenheim": {
    "lat": 52.224636,
    "lng": 4.519922,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "amsterdam",
        "distance": 30.24
      },
      {
        "name": "amstelveen",
        "distance": 23.66
      },
      {
        "name": "haarlem",
        "distance": 19.94
      },
      {
        "name": "hoofddorp",
        "distance": 14.8
      },
      {
        "name": "schiphol-rijk",
        "distance": 17.65
      },
      {
        "name": "rotterdam",
        "distance": 33.5
      },
      {
        "name": "capelle-aan-den-ijssel",
        "distance": 32.96
      },
      {
        "name": "delft",
        "distance": 27.24
      },
      {
        "name": "den-haag",
        "distance": 21.48
      }
    ]
  },
  "jihomoravsky-kraj": {
    "lat": 49.124918,
    "lng": 16.682772,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "brno",
        "distance": 8.08
      }
    ]
  },
  "brno": {
    "lat": 49.146887,
    "lng": 16.576892,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "jihomoravsky-kraj",
        "distance": 8.08
      }
    ]
  },
  "sheffield": {
    "lat": 53.380663,
    "lng": -1.470228,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "doncaster",
        "distance": 27.33
      },
      {
        "name": "castleford",
        "distance": 39.21
      },
      {
        "name": "methley",
        "distance": 39.67
      },
      {
        "name": "ossett",
        "distance": 33.81
      },
      {
        "name": "wakefield",
        "distance": 33.66
      }
    ]
  },
  "doncaster": {
    "lat": 53.522768,
    "lng": -1.133531,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "sheffield",
        "distance": 27.33
      },
      {
        "name": "castleford",
        "distance": 26.81
      },
      {
        "name": "methley",
        "distance": 29.87
      },
      {
        "name": "ossett",
        "distance": 33.95
      },
      {
        "name": "wakefield",
        "distance": 29.86
      }
    ]
  },
  "southampton": {
    "lat": 50.902535,
    "lng": -1.404189,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "petersfield",
        "distance": 34.42
      },
      {
        "name": "portsmouth",
        "distance": 24.79
      },
      {
        "name": "salisbury",
        "distance": 33.06
      }
    ]
  },
  "Daerah Istimewa Yogyakarta": {
    "lat": -7.977838,
    "lng": 110.367226,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Yogyakarta",
        "distance": 19.64
      }
    ]
  },
  "Yogyakarta": {
    "lat": -7.801265,
    "lng": 110.364686,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Daerah Istimewa Yogyakarta",
        "distance": 19.64
      }
    ]
  },
  "st-gallen": {
    "lat": 47.425618,
    "lng": 9.37624,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "perton": {
    "lat": 52.59572,
    "lng": -2.20338,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "rugeley",
        "distance": 25.57
      },
      {
        "name": "tamworth",
        "distance": 34.6
      },
      {
        "name": "birmingham",
        "distance": 24.08
      },
      {
        "name": "marston-green",
        "distance": 33.54
      },
      {
        "name": "wolverhampton",
        "distance": 5.26
      },
      {
        "name": "the-royal-town-of-sutton-coldfield",
        "distance": 25.76
      },
      {
        "name": "walsall",
        "distance": 14.99
      }
    ]
  },
  "rugeley": {
    "lat": 52.75894,
    "lng": -1.936204,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "derby",
        "distance": 35.64
      },
      {
        "name": "perton",
        "distance": 25.57
      },
      {
        "name": "tamworth",
        "distance": 21.35
      },
      {
        "name": "birmingham",
        "distance": 31.13
      },
      {
        "name": "marston-green",
        "distance": 34.7
      },
      {
        "name": "wolverhampton",
        "distance": 23.27
      },
      {
        "name": "the-royal-town-of-sutton-coldfield",
        "distance": 22.69
      },
      {
        "name": "walsall",
        "distance": 19.61
      }
    ]
  },
  "tamworth": {
    "lat": 52.634582,
    "lng": -1.694844,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "derby",
        "distance": 34.52
      },
      {
        "name": "road",
        "distance": 39.18
      },
      {
        "name": "leicester",
        "distance": 37.9
      },
      {
        "name": "perton",
        "distance": 34.6
      },
      {
        "name": "rugeley",
        "distance": 21.35
      },
      {
        "name": "royal-leamington-spa",
        "distance": 39.65
      },
      {
        "name": "warwick",
        "distance": 36.12
      },
      {
        "name": "birmingham",
        "distance": 22.23
      },
      {
        "name": "marston-green",
        "distance": 19.09
      },
      {
        "name": "wolverhampton",
        "distance": 29.74
      },
      {
        "name": "the-royal-town-of-sutton-coldfield",
        "distance": 11.62
      },
      {
        "name": "walsall",
        "distance": 20.18
      }
    ]
  },
  "amazonas": {
    "lat": 19.390636,
    "lng": -98.940395,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Mexico City",
        "distance": 20.75
      },
      {
        "name": "parana",
        "distance": 12.09
      }
    ]
  },
  "parana": {
    "lat": 19.283495,
    "lng": -98.960178,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Mexico City",
        "distance": 24.58
      },
      {
        "name": "amazonas",
        "distance": 12.09
      }
    ]
  },
  "rio-de-janeiro": {
    "lat": 19.300108,
    "lng": -99.506039,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "santa-catarina",
        "distance": 11.11
      }
    ]
  },
  "rio-grande-do-sul": {
    "lat": -29.981424,
    "lng": -51.112359,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "porto",
        "distance": 12.03
      },
      {
        "name": "porto-alegre",
        "distance": 0.0
      }
    ]
  },
  "porto-alegre": {
    "lat": -29.981424,
    "lng": -51.112359,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "porto",
        "distance": 12.03
      },
      {
        "name": "rio-grande-do-sul",
        "distance": 0.0
      }
    ]
  },
  "sao-paulo": {
    "lat": -23.534274,
    "lng": -46.633916,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "stirling": {
    "lat": 56.118124,
    "lng": -3.936001,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "dunfermline",
        "distance": 29.88
      },
      {
        "name": "glasgow",
        "distance": 34.62
      }
    ]
  },
  "stockholm": {
    "lat": 59.325117,
    "lng": 18.071093,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "nacka",
        "distance": 5.74
      },
      {
        "name": "danderyd",
        "distance": 9.04
      },
      {
        "name": "huddinge",
        "distance": 11.97
      },
      {
        "name": "lidingo",
        "distance": 5.55
      },
      {
        "name": "sollentuna",
        "distance": 13.46
      },
      {
        "name": "solna",
        "distance": 5.56
      },
      {
        "name": "tyreso",
        "distance": 19.17
      },
      {
        "name": "taby",
        "distance": 12.44
      },
      {
        "name": "upplands-vasby",
        "distance": 23.08
      },
      {
        "name": "akersberga",
        "distance": 21.57
      }
    ]
  },
  "nacka": {
    "lat": 59.309948,
    "lng": 18.167705,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "stockholm",
        "distance": 5.74
      },
      {
        "name": "danderyd",
        "distance": 12.89
      },
      {
        "name": "huddinge",
        "distance": 14.15
      },
      {
        "name": "lidingo",
        "distance": 6.38
      },
      {
        "name": "sollentuna",
        "distance": 18.12
      },
      {
        "name": "solna",
        "distance": 10.64
      },
      {
        "name": "tyreso",
        "distance": 14.01
      },
      {
        "name": "taby",
        "distance": 15.45
      },
      {
        "name": "upplands-vasby",
        "distance": 27.07
      },
      {
        "name": "akersberga",
        "distance": 20.47
      }
    ]
  },
  "danderyd": {
    "lat": 59.404365,
    "lng": 18.03585,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "stockholm",
        "distance": 9.04
      },
      {
        "name": "nacka",
        "distance": 12.89
      },
      {
        "name": "huddinge",
        "distance": 19.76
      },
      {
        "name": "lidingo",
        "distance": 7.02
      },
      {
        "name": "sollentuna",
        "distance": 5.59
      },
      {
        "name": "solna",
        "distance": 4.33
      },
      {
        "name": "tyreso",
        "distance": 26.84
      },
      {
        "name": "taby",
        "distance": 3.78
      },
      {
        "name": "upplands-vasby",
        "distance": 14.24
      },
      {
        "name": "akersberga",
        "distance": 16.99
      }
    ]
  },
  "huddinge": {
    "lat": 59.229383,
    "lng": 17.974881,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "stockholm",
        "distance": 11.97
      },
      {
        "name": "nacka",
        "distance": 14.15
      },
      {
        "name": "danderyd",
        "distance": 19.76
      },
      {
        "name": "lidingo",
        "distance": 17.45
      },
      {
        "name": "sollentuna",
        "distance": 22.28
      },
      {
        "name": "solna",
        "distance": 15.45
      },
      {
        "name": "tyreso",
        "distance": 20.44
      },
      {
        "name": "taby",
        "distance": 23.51
      },
      {
        "name": "upplands-vasby",
        "distance": 32.17
      },
      {
        "name": "akersberga",
        "distance": 33.45
      }
    ]
  },
  "lidingo": {
    "lat": 59.364338,
    "lng": 18.131726,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "stockholm",
        "distance": 5.55
      },
      {
        "name": "nacka",
        "distance": 6.38
      },
      {
        "name": "danderyd",
        "distance": 7.02
      },
      {
        "name": "huddinge",
        "distance": 17.45
      },
      {
        "name": "sollentuna",
        "distance": 12.57
      },
      {
        "name": "solna",
        "distance": 6.52
      },
      {
        "name": "tyreso",
        "distance": 20.02
      },
      {
        "name": "taby",
        "distance": 9.12
      },
      {
        "name": "upplands-vasby",
        "distance": 20.9
      },
      {
        "name": "akersberga",
        "distance": 16.03
      }
    ]
  },
  "norrtalje": {
    "lat": 59.759174,
    "lng": 18.703748,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "akersberga",
        "distance": 38.44
      },
      {
        "name": "almunge",
        "distance": 39.08
      }
    ]
  },
  "sollentuna": {
    "lat": 59.429316,
    "lng": 17.950056,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "stockholm",
        "distance": 13.46
      },
      {
        "name": "nacka",
        "distance": 18.12
      },
      {
        "name": "danderyd",
        "distance": 5.59
      },
      {
        "name": "huddinge",
        "distance": 22.28
      },
      {
        "name": "lidingo",
        "distance": 12.57
      },
      {
        "name": "solna",
        "distance": 7.92
      },
      {
        "name": "tyreso",
        "distance": 32.12
      },
      {
        "name": "taby",
        "distance": 6.06
      },
      {
        "name": "upplands-vasby",
        "distance": 9.95
      },
      {
        "name": "akersberga",
        "distance": 20.33
      }
    ]
  },
  "solna": {
    "lat": 59.366667,
    "lng": 18.016667,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "stockholm",
        "distance": 5.56
      },
      {
        "name": "nacka",
        "distance": 10.64
      },
      {
        "name": "danderyd",
        "distance": 4.33
      },
      {
        "name": "huddinge",
        "distance": 15.45
      },
      {
        "name": "lidingo",
        "distance": 6.52
      },
      {
        "name": "sollentuna",
        "distance": 7.92
      },
      {
        "name": "tyreso",
        "distance": 24.53
      },
      {
        "name": "taby",
        "distance": 8.11
      },
      {
        "name": "upplands-vasby",
        "distance": 17.67
      },
      {
        "name": "akersberga",
        "distance": 20.3
      }
    ]
  },
  "tyreso": {
    "lat": 59.216667,
    "lng": 18.333333,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "stockholm",
        "distance": 19.17
      },
      {
        "name": "nacka",
        "distance": 14.01
      },
      {
        "name": "danderyd",
        "distance": 26.84
      },
      {
        "name": "huddinge",
        "distance": 20.44
      },
      {
        "name": "lidingo",
        "distance": 20.02
      },
      {
        "name": "sollentuna",
        "distance": 32.12
      },
      {
        "name": "solna",
        "distance": 24.53
      },
      {
        "name": "taby",
        "distance": 29.09
      },
      {
        "name": "akersberga",
        "distance": 29.63
      }
    ]
  },
  "taby": {
    "lat": 59.43674,
    "lng": 18.05614,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "stockholm",
        "distance": 12.44
      },
      {
        "name": "nacka",
        "distance": 15.45
      },
      {
        "name": "danderyd",
        "distance": 3.78
      },
      {
        "name": "huddinge",
        "distance": 23.51
      },
      {
        "name": "lidingo",
        "distance": 9.12
      },
      {
        "name": "sollentuna",
        "distance": 6.06
      },
      {
        "name": "solna",
        "distance": 8.11
      },
      {
        "name": "tyreso",
        "distance": 29.09
      },
      {
        "name": "upplands-vasby",
        "distance": 11.93
      },
      {
        "name": "akersberga",
        "distance": 14.39
      }
    ]
  },
  "upplands-vasby": {
    "lat": 59.517164,
    "lng": 17.916419,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "stockholm",
        "distance": 23.08
      },
      {
        "name": "nacka",
        "distance": 27.07
      },
      {
        "name": "danderyd",
        "distance": 14.24
      },
      {
        "name": "huddinge",
        "distance": 32.17
      },
      {
        "name": "lidingo",
        "distance": 20.9
      },
      {
        "name": "sollentuna",
        "distance": 9.95
      },
      {
        "name": "solna",
        "distance": 17.67
      },
      {
        "name": "taby",
        "distance": 11.93
      },
      {
        "name": "akersberga",
        "distance": 21.68
      }
    ]
  },
  "akersberga": {
    "lat": 59.482352,
    "lng": 18.294398,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "stockholm",
        "distance": 21.57
      },
      {
        "name": "nacka",
        "distance": 20.47
      },
      {
        "name": "danderyd",
        "distance": 16.99
      },
      {
        "name": "huddinge",
        "distance": 33.45
      },
      {
        "name": "lidingo",
        "distance": 16.03
      },
      {
        "name": "norrtalje",
        "distance": 38.44
      },
      {
        "name": "sollentuna",
        "distance": 20.33
      },
      {
        "name": "solna",
        "distance": 20.3
      },
      {
        "name": "tyreso",
        "distance": 29.63
      },
      {
        "name": "taby",
        "distance": 14.39
      },
      {
        "name": "upplands-vasby",
        "distance": 21.68
      }
    ]
  },
  "liezen": {
    "lat": 47.567685,
    "lng": 14.242051,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "guildford": {
    "lat": 51.235607,
    "lng": -0.573206,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "slough",
        "distance": 31.96
      },
      {
        "name": "windsor",
        "distance": 36.4
      },
      {
        "name": "runcorn",
        "distance": 27.69
      },
      {
        "name": "marlow",
        "distance": 39.97
      },
      {
        "name": "croydon",
        "distance": 36.25
      },
      {
        "name": "brentford",
        "distance": 32.9
      },
      {
        "name": "twickenham",
        "distance": 29.0
      },
      {
        "name": "uxbridge",
        "distance": 34.98
      },
      {
        "name": "aldershot",
        "distance": 13.3
      },
      {
        "name": "farnborough",
        "distance": 14.05
      },
      {
        "name": "hook",
        "distance": 26.94
      },
      {
        "name": "petersfield",
        "distance": 36.39
      },
      {
        "name": "godalming",
        "distance": 6.25
      },
      {
        "name": "surrey-research-park",
        "distance": 2.96
      },
      {
        "name": "woking",
        "distance": 9.48
      },
      {
        "name": "caterham",
        "distance": 34.9
      },
      {
        "name": "epsom",
        "distance": 23.82
      },
      {
        "name": "farnham",
        "distance": 15.85
      },
      {
        "name": "walton-on-thames",
        "distance": 19.8
      },
      {
        "name": "horsham",
        "distance": 25.64
      }
    ]
  },
  "godalming": {
    "lat": 51.185789,
    "lng": -0.614907,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "slough",
        "distance": 37.35
      },
      {
        "name": "runcorn",
        "distance": 33.92
      },
      {
        "name": "brentford",
        "distance": 39.14
      },
      {
        "name": "twickenham",
        "distance": 35.2
      },
      {
        "name": "aldershot",
        "distance": 12.51
      },
      {
        "name": "farnborough",
        "distance": 15.26
      },
      {
        "name": "hook",
        "distance": 25.98
      },
      {
        "name": "petersfield",
        "distance": 30.47
      },
      {
        "name": "guildford",
        "distance": 6.25
      },
      {
        "name": "surrey-research-park",
        "distance": 6.12
      },
      {
        "name": "woking",
        "distance": 15.49
      },
      {
        "name": "caterham",
        "distance": 38.94
      },
      {
        "name": "epsom",
        "distance": 29.15
      },
      {
        "name": "farnham",
        "distance": 13.2
      },
      {
        "name": "walton-on-thames",
        "distance": 26.04
      },
      {
        "name": "horsham",
        "distance": 24.15
      }
    ]
  },
  "surrey-research-park": {
    "lat": 51.240855,
    "lng": -0.61485,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "slough",
        "distance": 31.22
      },
      {
        "name": "windsor",
        "distance": 34.69
      },
      {
        "name": "runcorn",
        "distance": 28.38
      },
      {
        "name": "marlow",
        "distance": 38.49
      },
      {
        "name": "croydon",
        "distance": 38.59
      },
      {
        "name": "brentford",
        "distance": 34.06
      },
      {
        "name": "twickenham",
        "distance": 30.34
      },
      {
        "name": "uxbridge",
        "distance": 35.05
      },
      {
        "name": "aldershot",
        "distance": 10.36
      },
      {
        "name": "farnborough",
        "distance": 11.22
      },
      {
        "name": "hook",
        "distance": 23.98
      },
      {
        "name": "petersfield",
        "distance": 34.86
      },
      {
        "name": "tadley",
        "distance": 38.5
      },
      {
        "name": "guildford",
        "distance": 2.96
      },
      {
        "name": "godalming",
        "distance": 6.12
      },
      {
        "name": "woking",
        "distance": 9.71
      },
      {
        "name": "caterham",
        "distance": 37.69
      },
      {
        "name": "epsom",
        "distance": 26.2
      },
      {
        "name": "farnham",
        "distance": 13.1
      },
      {
        "name": "walton-on-thames",
        "distance": 21.05
      },
      {
        "name": "horsham",
        "distance": 28.06
      }
    ]
  },
  "woking": {
    "lat": 51.320189,
    "lng": -0.556473,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "slough",
        "distance": 22.81
      },
      {
        "name": "windsor",
        "distance": 28.88
      },
      {
        "name": "runcorn",
        "distance": 18.69
      },
      {
        "name": "marlow",
        "distance": 31.89
      },
      {
        "name": "london",
        "distance": 34.24
      },
      {
        "name": "croydon",
        "distance": 31.84
      },
      {
        "name": "brentford",
        "distance": 24.63
      },
      {
        "name": "bromley",
        "distance": 34.24
      },
      {
        "name": "twickenham",
        "distance": 21.19
      },
      {
        "name": "uxbridge",
        "distance": 25.52
      },
      {
        "name": "wembley",
        "distance": 32.5
      },
      {
        "name": "aldershot",
        "distance": 16.38
      },
      {
        "name": "farnborough",
        "distance": 14.09
      },
      {
        "name": "hook",
        "distance": 27.74
      },
      {
        "name": "watford",
        "distance": 38.9
      },
      {
        "name": "guildford",
        "distance": 9.48
      },
      {
        "name": "godalming",
        "distance": 15.49
      },
      {
        "name": "surrey-research-park",
        "distance": 9.71
      },
      {
        "name": "caterham",
        "distance": 33.58
      },
      {
        "name": "epsom",
        "distance": 20.1
      },
      {
        "name": "farnham",
        "distance": 20.49
      },
      {
        "name": "walton-on-thames",
        "distance": 11.96
      },
      {
        "name": "horsham",
        "distance": 32.68
      }
    ]
  },
  "caterham": {
    "lat": 51.2822,
    "lng": -0.077248,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "runcorn",
        "distance": 31.59
      },
      {
        "name": "london",
        "distance": 23.49
      },
      {
        "name": "croydon",
        "distance": 11.69
      },
      {
        "name": "brentford",
        "distance": 28.34
      },
      {
        "name": "bromley",
        "distance": 23.49
      },
      {
        "name": "twickenham",
        "distance": 25.26
      },
      {
        "name": "wembley",
        "distance": 33.53
      },
      {
        "name": "guildford",
        "distance": 34.9
      },
      {
        "name": "godalming",
        "distance": 38.94
      },
      {
        "name": "surrey-research-park",
        "distance": 37.69
      },
      {
        "name": "woking",
        "distance": 33.58
      },
      {
        "name": "epsom",
        "distance": 14.38
      },
      {
        "name": "walton-on-thames",
        "distance": 26.43
      },
      {
        "name": "horsham",
        "distance": 30.05
      }
    ]
  },
  "epsom": {
    "lat": 51.33261,
    "lng": -0.267821,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "slough",
        "distance": 32.13
      },
      {
        "name": "runcorn",
        "distance": 18.4
      },
      {
        "name": "london",
        "distance": 19.43
      },
      {
        "name": "croydon",
        "distance": 12.43
      },
      {
        "name": "brentford",
        "distance": 17.5
      },
      {
        "name": "bromley",
        "distance": 19.43
      },
      {
        "name": "twickenham",
        "distance": 13.36
      },
      {
        "name": "uxbridge",
        "distance": 27.88
      },
      {
        "name": "wembley",
        "distance": 24.86
      },
      {
        "name": "aldershot",
        "distance": 35.66
      },
      {
        "name": "farnborough",
        "distance": 34.09
      },
      {
        "name": "watford",
        "distance": 36.97
      },
      {
        "name": "guildford",
        "distance": 23.82
      },
      {
        "name": "godalming",
        "distance": 29.15
      },
      {
        "name": "surrey-research-park",
        "distance": 26.2
      },
      {
        "name": "woking",
        "distance": 20.1
      },
      {
        "name": "caterham",
        "distance": 14.38
      },
      {
        "name": "farnham",
        "distance": 39.16
      },
      {
        "name": "walton-on-thames",
        "distance": 12.09
      },
      {
        "name": "horsham",
        "distance": 30.28
      }
    ]
  },
  "farnham": {
    "lat": 51.215175,
    "lng": -0.798485,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "slough",
        "distance": 36.3
      },
      {
        "name": "windsor",
        "distance": 35.05
      },
      {
        "name": "runcorn",
        "distance": 38.19
      },
      {
        "name": "marlow",
        "distance": 39.69
      },
      {
        "name": "aldershot",
        "distance": 4.54
      },
      {
        "name": "farnborough",
        "distance": 9.07
      },
      {
        "name": "hook",
        "distance": 13.28
      },
      {
        "name": "petersfield",
        "distance": 25.61
      },
      {
        "name": "tadley",
        "distance": 27.87
      },
      {
        "name": "guildford",
        "distance": 15.85
      },
      {
        "name": "godalming",
        "distance": 13.2
      },
      {
        "name": "surrey-research-park",
        "distance": 13.1
      },
      {
        "name": "woking",
        "distance": 20.49
      },
      {
        "name": "epsom",
        "distance": 39.16
      },
      {
        "name": "walton-on-thames",
        "distance": 32.44
      },
      {
        "name": "horsham",
        "distance": 36.83
      }
    ]
  },
  "walton-on-thames": {
    "lat": 51.385684,
    "lng": -0.419814,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "slough",
        "distance": 20.44
      },
      {
        "name": "windsor",
        "distance": 30.94
      },
      {
        "name": "runcorn",
        "distance": 8.99
      },
      {
        "name": "marlow",
        "distance": 32.25
      },
      {
        "name": "london",
        "distance": 22.32
      },
      {
        "name": "croydon",
        "distance": 21.5
      },
      {
        "name": "brentford",
        "distance": 13.1
      },
      {
        "name": "bromley",
        "distance": 22.32
      },
      {
        "name": "twickenham",
        "distance": 9.3
      },
      {
        "name": "uxbridge",
        "distance": 18.22
      },
      {
        "name": "wembley",
        "distance": 21.29
      },
      {
        "name": "aldershot",
        "distance": 28.26
      },
      {
        "name": "farnborough",
        "distance": 25.45
      },
      {
        "name": "hook",
        "distance": 38.57
      },
      {
        "name": "watford",
        "distance": 30.04
      },
      {
        "name": "guildford",
        "distance": 19.8
      },
      {
        "name": "godalming",
        "distance": 26.04
      },
      {
        "name": "surrey-research-park",
        "distance": 21.05
      },
      {
        "name": "woking",
        "distance": 11.96
      },
      {
        "name": "caterham",
        "distance": 26.43
      },
      {
        "name": "epsom",
        "distance": 12.09
      },
      {
        "name": "farnham",
        "distance": 32.44
      },
      {
        "name": "horsham",
        "distance": 36.42
      }
    ]
  },
  "swansea": {
    "lat": 51.619596,
    "lng": -3.945925,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "pencoed",
        "distance": 32.12
      }
    ]
  },
  "Taichung City": {
    "lat": 24.158624,
    "lng": 120.644867,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Taipei": {
    "lat": 25.041208,
    "lng": 121.566106,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "New Taipei City",
        "distance": 9.71
      },
      {
        "name": "Taipei City",
        "distance": 0.0
      }
    ]
  },
  "Taipei City": {
    "lat": 25.041208,
    "lng": 121.566106,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "New Taipei City",
        "distance": 9.71
      },
      {
        "name": "Taipei",
        "distance": 0.0
      }
    ]
  },
  "Herzliya": {
    "lat": 32.167684,
    "lng": 34.830828,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Bnei Brak",
        "distance": 8.93
      },
      {
        "name": "Ramat Gan",
        "distance": 11.02
      },
      {
        "name": "Tel Aviv-Yafo",
        "distance": 10.66
      }
    ]
  },
  "Bnei Brak": {
    "lat": 32.08739,
    "lng": 34.832438,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Herzliya",
        "distance": 8.93
      },
      {
        "name": "Ramat Gan",
        "distance": 2.2
      },
      {
        "name": "Tel Aviv-Yafo",
        "distance": 4.92
      }
    ]
  },
  "Ramat Gan": {
    "lat": 32.068687,
    "lng": 34.824681,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Herzliya",
        "distance": 11.02
      },
      {
        "name": "Bnei Brak",
        "distance": 2.2
      },
      {
        "name": "Tel Aviv-Yafo",
        "distance": 4.4
      }
    ]
  },
  "Tel Aviv-Yafo": {
    "lat": 32.081816,
    "lng": 34.780583,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Herzliya",
        "distance": 10.66
      },
      {
        "name": "Bnei Brak",
        "distance": 4.92
      },
      {
        "name": "Ramat Gan",
        "distance": 4.4
      }
    ]
  },
  "Hyderabad": {
    "lat": 17.360589,
    "lng": 78.474061,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Kothaguda": {
    "lat": 17.939963,
    "lng": 80.093532,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Knoxville": {
    "lat": 35.943614,
    "lng": -83.930811,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Memphis": {
    "lat": 35.03824,
    "lng": -89.882025,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Nashville": {
    "lat": 36.062505,
    "lng": -86.62971,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Austin": {
    "lat": 29.756908,
    "lng": -96.151131,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Dallas": {
    "lat": 32.775801,
    "lng": -96.869038,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Lewisville",
        "distance": 27.69
      },
      {
        "name": "Bedford",
        "distance": 25.79
      },
      {
        "name": "Plano",
        "distance": 36.11
      },
      {
        "name": "Richardson",
        "distance": 23.17
      },
      {
        "name": "Flower Mound",
        "distance": 34.86
      },
      {
        "name": "Frisco",
        "distance": 39.8
      },
      {
        "name": "Irving",
        "distance": 19.41
      },
      {
        "name": "Addison",
        "distance": 21.16
      },
      {
        "name": "Arlington",
        "distance": 24.37
      },
      {
        "name": "DeSoto",
        "distance": 20.71
      },
      {
        "name": "Grapevine",
        "distance": 26.32
      },
      {
        "name": "Mansfield",
        "distance": 33.02
      },
      {
        "name": "Southlake",
        "distance": 29.74
      }
    ]
  },
  "San Antonio": {
    "lat": 29.533981,
    "lng": -98.570837,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Plano": {
    "lat": 33.079005,
    "lng": -96.730516,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Lewisville",
        "distance": 25.66
      },
      {
        "name": "Dallas",
        "distance": 36.11
      },
      {
        "name": "Richardson",
        "distance": 14.55
      },
      {
        "name": "Flower Mound",
        "distance": 32.05
      },
      {
        "name": "Frisco",
        "distance": 8.67
      },
      {
        "name": "Irving",
        "distance": 29.82
      },
      {
        "name": "Addison",
        "distance": 15.64
      },
      {
        "name": "Grapevine",
        "distance": 36.28
      },
      {
        "name": "McKinney",
        "distance": 15.45
      },
      {
        "name": "Southlake",
        "distance": 39.32
      }
    ]
  },
  "Allen": {
    "lat": 26.266445,
    "lng": -98.202306,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Richardson": {
    "lat": 32.948179,
    "lng": -96.729721,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Lewisville",
        "distance": 25.07
      },
      {
        "name": "Bedford",
        "distance": 39.36
      },
      {
        "name": "Dallas",
        "distance": 23.17
      },
      {
        "name": "Plano",
        "distance": 14.55
      },
      {
        "name": "Flower Mound",
        "distance": 33.42
      },
      {
        "name": "Frisco",
        "distance": 21.22
      },
      {
        "name": "Irving",
        "distance": 24.26
      },
      {
        "name": "Addison",
        "distance": 8.95
      },
      {
        "name": "Grapevine",
        "distance": 32.62
      },
      {
        "name": "McKinney",
        "distance": 30.0
      },
      {
        "name": "Southlake",
        "distance": 36.33
      }
    ]
  },
  "El Paso": {
    "lat": 31.783362,
    "lng": -106.4113,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Flower Mound": {
    "lat": 33.039374,
    "lng": -97.071133,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Lewisville",
        "distance": 8.54
      },
      {
        "name": "Bedford",
        "distance": 22.45
      },
      {
        "name": "Dallas",
        "distance": 34.86
      },
      {
        "name": "Plano",
        "distance": 32.05
      },
      {
        "name": "Richardson",
        "distance": 33.42
      },
      {
        "name": "Frisco",
        "distance": 27.02
      },
      {
        "name": "Irving",
        "distance": 15.47
      },
      {
        "name": "Addison",
        "distance": 24.58
      },
      {
        "name": "Arlington",
        "distance": 37.08
      },
      {
        "name": "Grapevine",
        "distance": 11.77
      },
      {
        "name": "McKinney",
        "distance": 37.1
      },
      {
        "name": "Southlake",
        "distance": 11.77
      }
    ]
  },
  "Frisco": {
    "lat": 33.129213,
    "lng": -96.801696,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Lewisville",
        "distance": 22.5
      },
      {
        "name": "Dallas",
        "distance": 39.8
      },
      {
        "name": "Plano",
        "distance": 8.67
      },
      {
        "name": "Richardson",
        "distance": 21.22
      },
      {
        "name": "Flower Mound",
        "distance": 27.02
      },
      {
        "name": "Irving",
        "distance": 29.06
      },
      {
        "name": "Addison",
        "distance": 18.68
      },
      {
        "name": "Grapevine",
        "distance": 33.77
      },
      {
        "name": "McKinney",
        "distance": 11.68
      },
      {
        "name": "Southlake",
        "distance": 36.2
      }
    ]
  },
  "Irving": {
    "lat": 32.919281,
    "lng": -96.987345,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Lewisville",
        "distance": 9.32
      },
      {
        "name": "Bedford",
        "distance": 15.93
      },
      {
        "name": "Dallas",
        "distance": 19.41
      },
      {
        "name": "Plano",
        "distance": 29.82
      },
      {
        "name": "Richardson",
        "distance": 24.26
      },
      {
        "name": "Flower Mound",
        "distance": 15.47
      },
      {
        "name": "Frisco",
        "distance": 29.06
      },
      {
        "name": "Addison",
        "distance": 15.97
      },
      {
        "name": "Arlington",
        "distance": 26.42
      },
      {
        "name": "DeSoto",
        "distance": 38.61
      },
      {
        "name": "Grapevine",
        "distance": 8.69
      },
      {
        "name": "Southlake",
        "distance": 12.53
      }
    ]
  },
  "Texas": {
    "lat": 33.487042,
    "lng": -102.616309,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Addison": {
    "lat": 32.962317,
    "lng": -96.824112,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Lewisville",
        "distance": 16.16
      },
      {
        "name": "Bedford",
        "distance": 31.66
      },
      {
        "name": "Dallas",
        "distance": 21.16
      },
      {
        "name": "Plano",
        "distance": 15.64
      },
      {
        "name": "Richardson",
        "distance": 8.95
      },
      {
        "name": "Flower Mound",
        "distance": 24.58
      },
      {
        "name": "Frisco",
        "distance": 18.68
      },
      {
        "name": "Irving",
        "distance": 15.97
      },
      {
        "name": "Arlington",
        "distance": 39.34
      },
      {
        "name": "Grapevine",
        "distance": 23.98
      },
      {
        "name": "McKinney",
        "distance": 29.62
      },
      {
        "name": "Southlake",
        "distance": 27.61
      }
    ]
  },
  "Arlington": {
    "lat": 32.70809,
    "lng": -97.116905,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Lewisville",
        "distance": 34.86
      },
      {
        "name": "Bedford",
        "distance": 15.21
      },
      {
        "name": "Dallas",
        "distance": 24.37
      },
      {
        "name": "Flower Mound",
        "distance": 37.08
      },
      {
        "name": "Irving",
        "distance": 26.42
      },
      {
        "name": "Addison",
        "distance": 39.34
      },
      {
        "name": "DeSoto",
        "distance": 27.66
      },
      {
        "name": "Fort Worth",
        "distance": 30.42
      },
      {
        "name": "Grapevine",
        "distance": 25.34
      },
      {
        "name": "Mansfield",
        "distance": 14.53
      },
      {
        "name": "Southlake",
        "distance": 25.95
      }
    ]
  },
  "Bee Cave": {
    "lat": 30.274768,
    "lng": -97.799282,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Cedar Park",
        "distance": 27.6
      },
      {
        "name": "Round Rock",
        "distance": 28.12
      },
      {
        "name": "West Lake Hills",
        "distance": 0.0
      }
    ]
  },
  "Cedar Park": {
    "lat": 30.521207,
    "lng": -97.83338,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Bee Cave",
        "distance": 27.6
      },
      {
        "name": "Round Rock",
        "distance": 12.61
      },
      {
        "name": "West Lake Hills",
        "distance": 27.6
      }
    ]
  },
  "DeSoto": {
    "lat": 32.589783,
    "lng": -96.857018,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Bedford",
        "distance": 38.28
      },
      {
        "name": "Dallas",
        "distance": 20.71
      },
      {
        "name": "Irving",
        "distance": 38.61
      },
      {
        "name": "Arlington",
        "distance": 27.66
      },
      {
        "name": "Mansfield",
        "distance": 25.81
      }
    ]
  },
  "Fort Worth": {
    "lat": 32.721553,
    "lng": -97.441697,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Bedford",
        "distance": 31.95
      },
      {
        "name": "Arlington",
        "distance": 30.42
      },
      {
        "name": "Mansfield",
        "distance": 33.09
      },
      {
        "name": "Southlake",
        "distance": 38.82
      }
    ]
  },
  "Grapevine": {
    "lat": 32.933738,
    "lng": -97.078875,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Lewisville",
        "distance": 11.29
      },
      {
        "name": "Bedford",
        "distance": 11.15
      },
      {
        "name": "Dallas",
        "distance": 26.32
      },
      {
        "name": "Plano",
        "distance": 36.28
      },
      {
        "name": "Richardson",
        "distance": 32.62
      },
      {
        "name": "Flower Mound",
        "distance": 11.77
      },
      {
        "name": "Frisco",
        "distance": 33.77
      },
      {
        "name": "Irving",
        "distance": 8.69
      },
      {
        "name": "Addison",
        "distance": 23.98
      },
      {
        "name": "Arlington",
        "distance": 25.34
      },
      {
        "name": "Mansfield",
        "distance": 39.87
      },
      {
        "name": "Southlake",
        "distance": 3.84
      }
    ]
  },
  "Houston": {
    "lat": 29.99464,
    "lng": -95.400887,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Pasadena",
        "distance": 36.43
      }
    ]
  },
  "Mansfield": {
    "lat": 32.578008,
    "lng": -97.132135,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Bedford",
        "distance": 29.6
      },
      {
        "name": "Dallas",
        "distance": 33.02
      },
      {
        "name": "Arlington",
        "distance": 14.53
      },
      {
        "name": "DeSoto",
        "distance": 25.81
      },
      {
        "name": "Fort Worth",
        "distance": 33.09
      },
      {
        "name": "Grapevine",
        "distance": 39.87
      }
    ]
  },
  "McKinney": {
    "lat": 33.217949,
    "lng": -96.734549,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Lewisville",
        "distance": 33.75
      },
      {
        "name": "Plano",
        "distance": 15.45
      },
      {
        "name": "Richardson",
        "distance": 30.0
      },
      {
        "name": "Flower Mound",
        "distance": 37.1
      },
      {
        "name": "Frisco",
        "distance": 11.68
      },
      {
        "name": "Addison",
        "distance": 29.62
      }
    ]
  },
  "Odessa": {
    "lat": 31.892678,
    "lng": -102.341402,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Round Rock": {
    "lat": 30.513318,
    "lng": -97.702059,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Bee Cave",
        "distance": 28.12
      },
      {
        "name": "Cedar Park",
        "distance": 12.61
      },
      {
        "name": "West Lake Hills",
        "distance": 28.12
      }
    ]
  },
  "Rowlett": {
    "lat": 29.630509,
    "lng": -95.234655,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Pasadena",
        "distance": 9.33
      },
      {
        "name": "Sugar Land",
        "distance": 37.64
      }
    ]
  },
  "Southlake": {
    "lat": 32.941462,
    "lng": -97.118983,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Lewisville",
        "distance": 13.81
      },
      {
        "name": "Bedford",
        "distance": 10.89
      },
      {
        "name": "Dallas",
        "distance": 29.74
      },
      {
        "name": "Plano",
        "distance": 39.32
      },
      {
        "name": "Richardson",
        "distance": 36.33
      },
      {
        "name": "Flower Mound",
        "distance": 11.77
      },
      {
        "name": "Frisco",
        "distance": 36.2
      },
      {
        "name": "Irving",
        "distance": 12.53
      },
      {
        "name": "Addison",
        "distance": 27.61
      },
      {
        "name": "Arlington",
        "distance": 25.95
      },
      {
        "name": "Fort Worth",
        "distance": 38.82
      },
      {
        "name": "Grapevine",
        "distance": 3.84
      }
    ]
  },
  "Sugar Land": {
    "lat": 29.600707,
    "lng": -95.622493,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Rowlett",
        "distance": 37.64
      }
    ]
  },
  "West Lake Hills": {
    "lat": 30.274768,
    "lng": -97.799282,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Bee Cave",
        "distance": 0.0
      },
      {
        "name": "Cedar Park",
        "distance": 27.6
      },
      {
        "name": "Round Rock",
        "distance": 28.12
      }
    ]
  },
  "thuringia": {
    "lat": 50.901472,
    "lng": 11.037784,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "erfurt",
        "distance": 8.51
      }
    ]
  },
  "erfurt": {
    "lat": 50.977797,
    "lng": 11.028736,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "thuringia",
        "distance": 8.51
      }
    ]
  },
  "Ashikaga": {
    "lat": 36.340036,
    "lng": 139.44884,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Minato City": {
    "lat": 35.627763,
    "lng": 139.773504,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Abiko",
        "distance": 34.9
      },
      {
        "name": "Chiba",
        "distance": 30.17
      },
      {
        "name": "Ichikawa",
        "distance": 17.64
      },
      {
        "name": "Yokohama",
        "distance": 23.4
      },
      {
        "name": "Kawasaki",
        "distance": 12.5
      },
      {
        "name": "Niiza",
        "distance": 26.27
      },
      {
        "name": "Chiyoda City",
        "distance": 7.6
      },
      {
        "name": "Shinagawa City",
        "distance": 4.42
      },
      {
        "name": "Shibuya City",
        "distance": 7.57
      },
      {
        "name": "Shinjuku City",
        "distance": 9.7
      },
      {
        "name": "Chuo City",
        "distance": 6.16
      },
      {
        "name": "Tokyo",
        "distance": 5.53
      },
      {
        "name": "Taito City",
        "distance": 9.45
      },
      {
        "name": "Suginami City",
        "distance": 14.76
      },
      {
        "name": "Koto City",
        "distance": 0.35
      },
      {
        "name": "Musashino",
        "distance": 21.25
      },
      {
        "name": "Setagaya City",
        "distance": 11.58
      },
      {
        "name": "Meguro City",
        "distance": 6.97
      },
      {
        "name": "Nakano City",
        "distance": 13.47
      },
      {
        "name": "Toshima City",
        "distance": 13.33
      },
      {
        "name": "Katsushika City",
        "distance": 15.28
      },
      {
        "name": "Kita City",
        "distance": 14.85
      },
      {
        "name": "Bunkyo City",
        "distance": 8.57
      },
      {
        "name": "Hino",
        "distance": 34.54
      },
      {
        "name": "Itabashi City",
        "distance": 14.88
      },
      {
        "name": "Mitaka",
        "distance": 20.32
      },
      {
        "name": "Tachikawa",
        "distance": 34.4
      }
    ]
  },
  "Chiyoda City": {
    "lat": 35.694163,
    "lng": 139.753562,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Abiko",
        "distance": 31.14
      },
      {
        "name": "Chiba",
        "distance": 33.31
      },
      {
        "name": "Ichikawa",
        "distance": 16.3
      },
      {
        "name": "Yokohama",
        "distance": 29.18
      },
      {
        "name": "Kawasaki",
        "distance": 18.73
      },
      {
        "name": "Niiza",
        "distance": 20.21
      },
      {
        "name": "Minato City",
        "distance": 7.6
      },
      {
        "name": "Shinagawa City",
        "distance": 9.68
      },
      {
        "name": "Shibuya City",
        "distance": 6.37
      },
      {
        "name": "Shinjuku City",
        "distance": 4.53
      },
      {
        "name": "Chuo City",
        "distance": 3.35
      },
      {
        "name": "Tokyo",
        "distance": 2.14
      },
      {
        "name": "Taito City",
        "distance": 3.13
      },
      {
        "name": "Suginami City",
        "distance": 10.83
      },
      {
        "name": "Koto City",
        "distance": 7.92
      },
      {
        "name": "Musashino",
        "distance": 17.14
      },
      {
        "name": "Setagaya City",
        "distance": 14.34
      },
      {
        "name": "Meguro City",
        "distance": 7.7
      },
      {
        "name": "Nakano City",
        "distance": 8.33
      },
      {
        "name": "Toshima City",
        "distance": 6.96
      },
      {
        "name": "Katsushika City",
        "distance": 10.41
      },
      {
        "name": "Kita City",
        "distance": 7.26
      },
      {
        "name": "Bunkyo City",
        "distance": 1.02
      },
      {
        "name": "Hachioji",
        "distance": 39.61
      },
      {
        "name": "Hino",
        "distance": 32.49
      },
      {
        "name": "Itabashi City",
        "distance": 7.48
      },
      {
        "name": "Mitaka",
        "distance": 17.59
      },
      {
        "name": "Tachikawa",
        "distance": 31.3
      }
    ]
  },
  "Shinagawa City": {
    "lat": 35.609211,
    "lng": 139.730198,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Abiko",
        "distance": 39.06
      },
      {
        "name": "Chiba",
        "distance": 34.0
      },
      {
        "name": "Ichikawa",
        "distance": 22.03
      },
      {
        "name": "Yokohama",
        "distance": 19.68
      },
      {
        "name": "Fujisawa",
        "distance": 37.06
      },
      {
        "name": "Kawasaki",
        "distance": 9.06
      },
      {
        "name": "Niiza",
        "distance": 25.27
      },
      {
        "name": "Minato City",
        "distance": 4.42
      },
      {
        "name": "Chiyoda City",
        "distance": 9.68
      },
      {
        "name": "Shibuya City",
        "distance": 6.15
      },
      {
        "name": "Shinjuku City",
        "distance": 9.72
      },
      {
        "name": "Chuo City",
        "distance": 9.61
      },
      {
        "name": "Tokyo",
        "distance": 8.12
      },
      {
        "name": "Taito City",
        "distance": 12.34
      },
      {
        "name": "Suginami City",
        "distance": 13.05
      },
      {
        "name": "Koto City",
        "distance": 4.5
      },
      {
        "name": "Musashino",
        "distance": 19.12
      },
      {
        "name": "Setagaya City",
        "distance": 7.25
      },
      {
        "name": "Meguro City",
        "distance": 4.6
      },
      {
        "name": "Nakano City",
        "distance": 12.66
      },
      {
        "name": "Toshima City",
        "distance": 13.4
      },
      {
        "name": "Katsushika City",
        "distance": 18.97
      },
      {
        "name": "Kita City",
        "distance": 16.36
      },
      {
        "name": "Bunkyo City",
        "distance": 10.69
      },
      {
        "name": "Hachioji",
        "distance": 37.93
      },
      {
        "name": "Hino",
        "distance": 31.07
      },
      {
        "name": "Itabashi City",
        "distance": 15.88
      },
      {
        "name": "Mitaka",
        "distance": 17.51
      },
      {
        "name": "Tachikawa",
        "distance": 31.37
      }
    ]
  },
  "Shibuya City": {
    "lat": 35.658258,
    "lng": 139.69864,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Abiko",
        "distance": 37.51
      },
      {
        "name": "Chiba",
        "distance": 37.28
      },
      {
        "name": "Ichikawa",
        "distance": 22.13
      },
      {
        "name": "Yokohama",
        "distance": 23.84
      },
      {
        "name": "Kawasaki",
        "distance": 14.2
      },
      {
        "name": "Niiza",
        "distance": 19.21
      },
      {
        "name": "Minato City",
        "distance": 7.57
      },
      {
        "name": "Chiyoda City",
        "distance": 6.37
      },
      {
        "name": "Shinagawa City",
        "distance": 6.15
      },
      {
        "name": "Shinjuku City",
        "distance": 3.98
      },
      {
        "name": "Chuo City",
        "distance": 8.45
      },
      {
        "name": "Tokyo",
        "distance": 6.25
      },
      {
        "name": "Taito City",
        "distance": 9.5
      },
      {
        "name": "Suginami City",
        "distance": 7.25
      },
      {
        "name": "Koto City",
        "distance": 7.88
      },
      {
        "name": "Musashino",
        "distance": 13.68
      },
      {
        "name": "Setagaya City",
        "distance": 8.2
      },
      {
        "name": "Meguro City",
        "distance": 1.87
      },
      {
        "name": "Nakano City",
        "distance": 6.51
      },
      {
        "name": "Toshima City",
        "distance": 7.43
      },
      {
        "name": "Katsushika City",
        "distance": 16.78
      },
      {
        "name": "Kita City",
        "distance": 11.24
      },
      {
        "name": "Bunkyo City",
        "distance": 7.12
      },
      {
        "name": "Hachioji",
        "distance": 34.55
      },
      {
        "name": "Hino",
        "distance": 27.47
      },
      {
        "name": "Itabashi City",
        "distance": 10.35
      },
      {
        "name": "Mitaka",
        "distance": 12.9
      },
      {
        "name": "Tachikawa",
        "distance": 26.99
      }
    ]
  },
  "Shinjuku City": {
    "lat": 35.69386,
    "lng": 139.703447,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Abiko",
        "distance": 34.86
      },
      {
        "name": "Chiba",
        "distance": 37.65
      },
      {
        "name": "Ichikawa",
        "distance": 20.77
      },
      {
        "name": "Yokohama",
        "distance": 27.79
      },
      {
        "name": "Kawasaki",
        "distance": 18.15
      },
      {
        "name": "Niiza",
        "distance": 16.62
      },
      {
        "name": "Minato City",
        "distance": 9.7
      },
      {
        "name": "Chiyoda City",
        "distance": 4.53
      },
      {
        "name": "Shinagawa City",
        "distance": 9.72
      },
      {
        "name": "Shibuya City",
        "distance": 3.98
      },
      {
        "name": "Chuo City",
        "distance": 7.71
      },
      {
        "name": "Tokyo",
        "distance": 5.78
      },
      {
        "name": "Taito City",
        "distance": 7.2
      },
      {
        "name": "Suginami City",
        "distance": 6.31
      },
      {
        "name": "Koto City",
        "distance": 10.05
      },
      {
        "name": "Musashino",
        "distance": 12.69
      },
      {
        "name": "Setagaya City",
        "distance": 11.93
      },
      {
        "name": "Meguro City",
        "distance": 5.85
      },
      {
        "name": "Nakano City",
        "distance": 4.02
      },
      {
        "name": "Toshima City",
        "distance": 3.73
      },
      {
        "name": "Katsushika City",
        "distance": 14.24
      },
      {
        "name": "Kita City",
        "distance": 7.31
      },
      {
        "name": "Bunkyo City",
        "distance": 4.74
      },
      {
        "name": "Hachioji",
        "distance": 35.1
      },
      {
        "name": "Hino",
        "distance": 27.97
      },
      {
        "name": "Itabashi City",
        "distance": 6.37
      },
      {
        "name": "Mitaka",
        "distance": 13.08
      },
      {
        "name": "Tachikawa",
        "distance": 26.79
      }
    ]
  },
  "Chuo City": {
    "lat": 35.682013,
    "lng": 139.787532,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Abiko",
        "distance": 29.67
      },
      {
        "name": "Chiba",
        "distance": 29.98
      },
      {
        "name": "Ichikawa",
        "distance": 13.68
      },
      {
        "name": "Yokohama",
        "distance": 29.25
      },
      {
        "name": "Kawasaki",
        "distance": 18.45
      },
      {
        "name": "Niiza",
        "distance": 23.52
      },
      {
        "name": "Minato City",
        "distance": 6.16
      },
      {
        "name": "Chiyoda City",
        "distance": 3.35
      },
      {
        "name": "Shinagawa City",
        "distance": 9.61
      },
      {
        "name": "Shibuya City",
        "distance": 8.45
      },
      {
        "name": "Shinjuku City",
        "distance": 7.71
      },
      {
        "name": "Tokyo",
        "distance": 2.21
      },
      {
        "name": "Taito City",
        "distance": 3.48
      },
      {
        "name": "Suginami City",
        "distance": 13.99
      },
      {
        "name": "Koto City",
        "distance": 6.39
      },
      {
        "name": "Musashino",
        "distance": 20.4
      },
      {
        "name": "Setagaya City",
        "distance": 15.61
      },
      {
        "name": "Meguro City",
        "distance": 9.24
      },
      {
        "name": "Nakano City",
        "distance": 11.63
      },
      {
        "name": "Toshima City",
        "distance": 10.3
      },
      {
        "name": "Katsushika City",
        "distance": 9.36
      },
      {
        "name": "Kita City",
        "distance": 9.81
      },
      {
        "name": "Bunkyo City",
        "distance": 3.8
      },
      {
        "name": "Hino",
        "distance": 35.48
      },
      {
        "name": "Itabashi City",
        "distance": 10.43
      },
      {
        "name": "Mitaka",
        "distance": 20.62
      },
      {
        "name": "Tachikawa",
        "distance": 34.48
      }
    ]
  },
  "Tokyo": {
    "lat": 35.67686,
    "lng": 139.763895,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Abiko",
        "distance": 31.64
      },
      {
        "name": "Chiba",
        "distance": 31.9
      },
      {
        "name": "Ichikawa",
        "distance": 15.88
      },
      {
        "name": "Yokohama",
        "distance": 27.78
      },
      {
        "name": "Kawasaki",
        "distance": 17.14
      },
      {
        "name": "Niiza",
        "distance": 22.07
      },
      {
        "name": "Minato City",
        "distance": 5.53
      },
      {
        "name": "Chiyoda City",
        "distance": 2.14
      },
      {
        "name": "Shinagawa City",
        "distance": 8.12
      },
      {
        "name": "Shibuya City",
        "distance": 6.25
      },
      {
        "name": "Shinjuku City",
        "distance": 5.78
      },
      {
        "name": "Chuo City",
        "distance": 2.21
      },
      {
        "name": "Taito City",
        "distance": 4.23
      },
      {
        "name": "Suginami City",
        "distance": 11.96
      },
      {
        "name": "Koto City",
        "distance": 5.83
      },
      {
        "name": "Musashino",
        "distance": 18.44
      },
      {
        "name": "Setagaya City",
        "distance": 13.6
      },
      {
        "name": "Meguro City",
        "distance": 7.12
      },
      {
        "name": "Nakano City",
        "distance": 9.78
      },
      {
        "name": "Toshima City",
        "distance": 8.79
      },
      {
        "name": "Katsushika City",
        "distance": 11.09
      },
      {
        "name": "Kita City",
        "distance": 9.38
      },
      {
        "name": "Bunkyo City",
        "distance": 3.06
      },
      {
        "name": "Hino",
        "distance": 33.33
      },
      {
        "name": "Itabashi City",
        "distance": 9.6
      },
      {
        "name": "Mitaka",
        "distance": 18.5
      },
      {
        "name": "Tachikawa",
        "distance": 32.42
      }
    ]
  },
  "Taito City": {
    "lat": 35.712631,
    "lng": 139.779774,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Abiko",
        "distance": 28.02
      },
      {
        "name": "Chiba",
        "distance": 31.75
      },
      {
        "name": "Ichikawa",
        "distance": 13.68
      },
      {
        "name": "Yokohama",
        "distance": 31.99
      },
      {
        "name": "Kawasaki",
        "distance": 21.37
      },
      {
        "name": "Niiza",
        "distance": 21.29
      },
      {
        "name": "Minato City",
        "distance": 9.45
      },
      {
        "name": "Chiyoda City",
        "distance": 3.13
      },
      {
        "name": "Shinagawa City",
        "distance": 12.34
      },
      {
        "name": "Shibuya City",
        "distance": 9.5
      },
      {
        "name": "Shinjuku City",
        "distance": 7.2
      },
      {
        "name": "Chuo City",
        "distance": 3.48
      },
      {
        "name": "Tokyo",
        "distance": 4.23
      },
      {
        "name": "Suginami City",
        "distance": 13.32
      },
      {
        "name": "Koto City",
        "distance": 9.72
      },
      {
        "name": "Musashino",
        "distance": 19.31
      },
      {
        "name": "Setagaya City",
        "distance": 17.44
      },
      {
        "name": "Meguro City",
        "distance": 10.81
      },
      {
        "name": "Nakano City",
        "distance": 10.53
      },
      {
        "name": "Toshima City",
        "distance": 8.56
      },
      {
        "name": "Katsushika City",
        "distance": 7.28
      },
      {
        "name": "Kita City",
        "distance": 6.68
      },
      {
        "name": "Bunkyo City",
        "distance": 2.5
      },
      {
        "name": "Hino",
        "distance": 35.05
      },
      {
        "name": "Itabashi City",
        "distance": 7.66
      },
      {
        "name": "Mitaka",
        "distance": 20.18
      },
      {
        "name": "Tachikawa",
        "distance": 33.59
      }
    ]
  },
  "Suginami City": {
    "lat": 35.696439,
    "lng": 139.633636,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Ichikawa",
        "distance": 26.99
      },
      {
        "name": "Yokohama",
        "distance": 27.37
      },
      {
        "name": "Kawasaki",
        "distance": 19.49
      },
      {
        "name": "Niiza",
        "distance": 12.37
      },
      {
        "name": "Minato City",
        "distance": 14.76
      },
      {
        "name": "Chiyoda City",
        "distance": 10.83
      },
      {
        "name": "Shinagawa City",
        "distance": 13.05
      },
      {
        "name": "Shibuya City",
        "distance": 7.25
      },
      {
        "name": "Shinjuku City",
        "distance": 6.31
      },
      {
        "name": "Chuo City",
        "distance": 13.99
      },
      {
        "name": "Tokyo",
        "distance": 11.96
      },
      {
        "name": "Taito City",
        "distance": 13.32
      },
      {
        "name": "Koto City",
        "distance": 15.09
      },
      {
        "name": "Musashino",
        "distance": 6.55
      },
      {
        "name": "Setagaya City",
        "distance": 11.39
      },
      {
        "name": "Meguro City",
        "distance": 8.46
      },
      {
        "name": "Nakano City",
        "distance": 3.02
      },
      {
        "name": "Toshima City",
        "distance": 5.65
      },
      {
        "name": "Katsushika City",
        "distance": 19.95
      },
      {
        "name": "Kita City",
        "distance": 10.88
      },
      {
        "name": "Bunkyo City",
        "distance": 10.95
      },
      {
        "name": "Hachioji",
        "distance": 28.85
      },
      {
        "name": "Hino",
        "distance": 21.73
      },
      {
        "name": "Itabashi City",
        "distance": 9.13
      },
      {
        "name": "Mitaka",
        "distance": 6.87
      },
      {
        "name": "Tachikawa",
        "distance": 20.49
      }
    ]
  },
  "Koto City": {
    "lat": 35.625316,
    "lng": 139.77588,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Abiko",
        "distance": 34.96
      },
      {
        "name": "Chiba",
        "distance": 29.93
      },
      {
        "name": "Ichikawa",
        "distance": 17.63
      },
      {
        "name": "Yokohama",
        "distance": 23.29
      },
      {
        "name": "Kawasaki",
        "distance": 12.38
      },
      {
        "name": "Niiza",
        "distance": 26.61
      },
      {
        "name": "Minato City",
        "distance": 0.35
      },
      {
        "name": "Chiyoda City",
        "distance": 7.92
      },
      {
        "name": "Shinagawa City",
        "distance": 4.5
      },
      {
        "name": "Shibuya City",
        "distance": 7.88
      },
      {
        "name": "Shinjuku City",
        "distance": 10.05
      },
      {
        "name": "Chuo City",
        "distance": 6.39
      },
      {
        "name": "Tokyo",
        "distance": 5.83
      },
      {
        "name": "Taito City",
        "distance": 9.72
      },
      {
        "name": "Suginami City",
        "distance": 15.09
      },
      {
        "name": "Musashino",
        "distance": 21.57
      },
      {
        "name": "Setagaya City",
        "distance": 11.7
      },
      {
        "name": "Meguro City",
        "distance": 7.24
      },
      {
        "name": "Nakano City",
        "distance": 13.81
      },
      {
        "name": "Toshima City",
        "distance": 13.67
      },
      {
        "name": "Katsushika City",
        "distance": 15.44
      },
      {
        "name": "Kita City",
        "distance": 15.17
      },
      {
        "name": "Bunkyo City",
        "distance": 8.88
      },
      {
        "name": "Hino",
        "distance": 34.8
      },
      {
        "name": "Itabashi City",
        "distance": 15.21
      },
      {
        "name": "Mitaka",
        "distance": 20.61
      },
      {
        "name": "Tachikawa",
        "distance": 34.68
      }
    ]
  },
  "Musashino": {
    "lat": 35.717724,
    "lng": 139.56598,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Ichikawa",
        "distance": 32.95
      },
      {
        "name": "Yokohama",
        "distance": 30.37
      },
      {
        "name": "Kawasaki",
        "distance": 24.24
      },
      {
        "name": "Niiza",
        "distance": 8.38
      },
      {
        "name": "Minato City",
        "distance": 21.25
      },
      {
        "name": "Chiyoda City",
        "distance": 17.14
      },
      {
        "name": "Shinagawa City",
        "distance": 19.12
      },
      {
        "name": "Shibuya City",
        "distance": 13.68
      },
      {
        "name": "Shinjuku City",
        "distance": 12.69
      },
      {
        "name": "Chuo City",
        "distance": 20.4
      },
      {
        "name": "Tokyo",
        "distance": 18.44
      },
      {
        "name": "Taito City",
        "distance": 19.31
      },
      {
        "name": "Suginami City",
        "distance": 6.55
      },
      {
        "name": "Koto City",
        "distance": 21.57
      },
      {
        "name": "Setagaya City",
        "distance": 15.69
      },
      {
        "name": "Meguro City",
        "distance": 14.66
      },
      {
        "name": "Nakano City",
        "distance": 8.83
      },
      {
        "name": "Toshima City",
        "distance": 10.86
      },
      {
        "name": "Katsushika City",
        "distance": 25.34
      },
      {
        "name": "Kita City",
        "distance": 15.32
      },
      {
        "name": "Bunkyo City",
        "distance": 17.1
      },
      {
        "name": "Hachioji",
        "distance": 23.25
      },
      {
        "name": "Hino",
        "distance": 16.28
      },
      {
        "name": "Itabashi City",
        "distance": 13.45
      },
      {
        "name": "Mitaka",
        "distance": 3.87
      },
      {
        "name": "Tachikawa",
        "distance": 14.29
      }
    ]
  },
  "Setagaya City": {
    "lat": 35.595102,
    "lng": 139.651898,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Ichikawa",
        "distance": 28.87
      },
      {
        "name": "Yokohama",
        "distance": 16.17
      },
      {
        "name": "Fujisawa",
        "distance": 32.01
      },
      {
        "name": "Kawasaki",
        "distance": 8.56
      },
      {
        "name": "Niiza",
        "distance": 23.35
      },
      {
        "name": "Minato City",
        "distance": 11.58
      },
      {
        "name": "Chiyoda City",
        "distance": 14.34
      },
      {
        "name": "Shinagawa City",
        "distance": 7.25
      },
      {
        "name": "Shibuya City",
        "distance": 8.2
      },
      {
        "name": "Shinjuku City",
        "distance": 11.93
      },
      {
        "name": "Chuo City",
        "distance": 15.61
      },
      {
        "name": "Tokyo",
        "distance": 13.6
      },
      {
        "name": "Taito City",
        "distance": 17.44
      },
      {
        "name": "Suginami City",
        "distance": 11.39
      },
      {
        "name": "Koto City",
        "distance": 11.7
      },
      {
        "name": "Musashino",
        "distance": 15.69
      },
      {
        "name": "Meguro City",
        "distance": 6.64
      },
      {
        "name": "Nakano City",
        "distance": 12.73
      },
      {
        "name": "Toshima City",
        "distance": 14.69
      },
      {
        "name": "Katsushika City",
        "distance": 24.64
      },
      {
        "name": "Kita City",
        "distance": 19.23
      },
      {
        "name": "Bunkyo City",
        "distance": 15.19
      },
      {
        "name": "Hachioji",
        "distance": 31.34
      },
      {
        "name": "Hino",
        "distance": 24.72
      },
      {
        "name": "Itabashi City",
        "distance": 18.09
      },
      {
        "name": "Mitaka",
        "distance": 12.9
      },
      {
        "name": "Tachikawa",
        "distance": 25.71
      }
    ]
  },
  "Meguro City": {
    "lat": 35.641407,
    "lng": 139.698274,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Abiko",
        "distance": 38.71
      },
      {
        "name": "Chiba",
        "distance": 37.07
      },
      {
        "name": "Ichikawa",
        "distance": 22.83
      },
      {
        "name": "Yokohama",
        "distance": 22.02
      },
      {
        "name": "Fujisawa",
        "distance": 38.52
      },
      {
        "name": "Kawasaki",
        "distance": 12.32
      },
      {
        "name": "Niiza",
        "distance": 20.68
      },
      {
        "name": "Minato City",
        "distance": 6.97
      },
      {
        "name": "Chiyoda City",
        "distance": 7.7
      },
      {
        "name": "Shinagawa City",
        "distance": 4.6
      },
      {
        "name": "Shibuya City",
        "distance": 1.87
      },
      {
        "name": "Shinjuku City",
        "distance": 5.85
      },
      {
        "name": "Chuo City",
        "distance": 9.24
      },
      {
        "name": "Tokyo",
        "distance": 7.12
      },
      {
        "name": "Taito City",
        "distance": 10.81
      },
      {
        "name": "Suginami City",
        "distance": 8.46
      },
      {
        "name": "Koto City",
        "distance": 7.24
      },
      {
        "name": "Musashino",
        "distance": 14.66
      },
      {
        "name": "Setagaya City",
        "distance": 6.64
      },
      {
        "name": "Nakano City",
        "distance": 8.18
      },
      {
        "name": "Toshima City",
        "distance": 9.28
      },
      {
        "name": "Katsushika City",
        "distance": 18.04
      },
      {
        "name": "Kita City",
        "distance": 13.07
      },
      {
        "name": "Bunkyo City",
        "distance": 8.56
      },
      {
        "name": "Hachioji",
        "distance": 34.62
      },
      {
        "name": "Hino",
        "distance": 27.6
      },
      {
        "name": "Itabashi City",
        "distance": 12.22
      },
      {
        "name": "Mitaka",
        "distance": 13.4
      },
      {
        "name": "Tachikawa",
        "distance": 27.45
      }
    ]
  },
  "Nakano City": {
    "lat": 35.709242,
    "lng": 139.663184,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Abiko",
        "distance": 37.14
      },
      {
        "name": "Ichikawa",
        "distance": 24.21
      },
      {
        "name": "Yokohama",
        "distance": 28.91
      },
      {
        "name": "Kawasaki",
        "distance": 20.19
      },
      {
        "name": "Niiza",
        "distance": 12.82
      },
      {
        "name": "Minato City",
        "distance": 13.47
      },
      {
        "name": "Chiyoda City",
        "distance": 8.33
      },
      {
        "name": "Shinagawa City",
        "distance": 12.66
      },
      {
        "name": "Shibuya City",
        "distance": 6.51
      },
      {
        "name": "Shinjuku City",
        "distance": 4.02
      },
      {
        "name": "Chuo City",
        "distance": 11.63
      },
      {
        "name": "Tokyo",
        "distance": 9.78
      },
      {
        "name": "Taito City",
        "distance": 10.53
      },
      {
        "name": "Suginami City",
        "distance": 3.02
      },
      {
        "name": "Koto City",
        "distance": 13.81
      },
      {
        "name": "Musashino",
        "distance": 8.83
      },
      {
        "name": "Setagaya City",
        "distance": 12.73
      },
      {
        "name": "Meguro City",
        "distance": 8.18
      },
      {
        "name": "Toshima City",
        "distance": 2.66
      },
      {
        "name": "Katsushika City",
        "distance": 16.97
      },
      {
        "name": "Kita City",
        "distance": 7.91
      },
      {
        "name": "Bunkyo City",
        "distance": 8.28
      },
      {
        "name": "Hachioji",
        "distance": 31.68
      },
      {
        "name": "Hino",
        "distance": 24.59
      },
      {
        "name": "Itabashi City",
        "distance": 6.23
      },
      {
        "name": "Mitaka",
        "distance": 9.82
      },
      {
        "name": "Tachikawa",
        "distance": 23.07
      }
    ]
  },
  "Toshima City": {
    "lat": 35.724274,
    "lng": 139.686043,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Abiko",
        "distance": 34.54
      },
      {
        "name": "Ichikawa",
        "distance": 22.11
      },
      {
        "name": "Yokohama",
        "distance": 30.82
      },
      {
        "name": "Kawasaki",
        "distance": 21.59
      },
      {
        "name": "Niiza",
        "distance": 13.28
      },
      {
        "name": "Minato City",
        "distance": 13.33
      },
      {
        "name": "Chiyoda City",
        "distance": 6.96
      },
      {
        "name": "Shinagawa City",
        "distance": 13.4
      },
      {
        "name": "Shibuya City",
        "distance": 7.43
      },
      {
        "name": "Shinjuku City",
        "distance": 3.73
      },
      {
        "name": "Chuo City",
        "distance": 10.3
      },
      {
        "name": "Tokyo",
        "distance": 8.79
      },
      {
        "name": "Taito City",
        "distance": 8.56
      },
      {
        "name": "Suginami City",
        "distance": 5.65
      },
      {
        "name": "Koto City",
        "distance": 13.67
      },
      {
        "name": "Musashino",
        "distance": 10.86
      },
      {
        "name": "Setagaya City",
        "distance": 14.69
      },
      {
        "name": "Meguro City",
        "distance": 9.28
      },
      {
        "name": "Nakano City",
        "distance": 2.66
      },
      {
        "name": "Katsushika City",
        "distance": 14.55
      },
      {
        "name": "Kita City",
        "distance": 5.26
      },
      {
        "name": "Bunkyo City",
        "distance": 6.61
      },
      {
        "name": "Hachioji",
        "distance": 34.0
      },
      {
        "name": "Hino",
        "distance": 26.93
      },
      {
        "name": "Itabashi City",
        "distance": 3.64
      },
      {
        "name": "Mitaka",
        "distance": 12.32
      },
      {
        "name": "Tachikawa",
        "distance": 25.15
      }
    ]
  },
  "Katsushika City": {
    "lat": 35.752891,
    "lng": 139.843376,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Abiko",
        "distance": 20.74
      },
      {
        "name": "Chiba",
        "distance": 28.75
      },
      {
        "name": "Ichikawa",
        "distance": 8.63
      },
      {
        "name": "Yokohama",
        "distance": 38.59
      },
      {
        "name": "Kawasaki",
        "distance": 27.74
      },
      {
        "name": "Niiza",
        "distance": 25.44
      },
      {
        "name": "Minato City",
        "distance": 15.28
      },
      {
        "name": "Chiyoda City",
        "distance": 10.41
      },
      {
        "name": "Shinagawa City",
        "distance": 18.97
      },
      {
        "name": "Shibuya City",
        "distance": 16.78
      },
      {
        "name": "Shinjuku City",
        "distance": 14.24
      },
      {
        "name": "Chuo City",
        "distance": 9.36
      },
      {
        "name": "Tokyo",
        "distance": 11.09
      },
      {
        "name": "Taito City",
        "distance": 7.28
      },
      {
        "name": "Suginami City",
        "distance": 19.95
      },
      {
        "name": "Koto City",
        "distance": 15.44
      },
      {
        "name": "Musashino",
        "distance": 25.34
      },
      {
        "name": "Setagaya City",
        "distance": 24.64
      },
      {
        "name": "Meguro City",
        "distance": 18.04
      },
      {
        "name": "Nakano City",
        "distance": 16.97
      },
      {
        "name": "Toshima City",
        "distance": 14.55
      },
      {
        "name": "Kita City",
        "distance": 10.33
      },
      {
        "name": "Bunkyo City",
        "distance": 9.73
      },
      {
        "name": "Itabashi City",
        "distance": 12.1
      },
      {
        "name": "Mitaka",
        "distance": 26.79
      },
      {
        "name": "Tachikawa",
        "distance": 39.56
      }
    ]
  },
  "Kita City": {
    "lat": 35.756294,
    "lng": 139.728965,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Abiko",
        "distance": 29.51
      },
      {
        "name": "Chiba",
        "distance": 37.9
      },
      {
        "name": "Ichikawa",
        "distance": 18.63
      },
      {
        "name": "Yokohama",
        "distance": 35.08
      },
      {
        "name": "Kawasaki",
        "distance": 25.19
      },
      {
        "name": "Niiza",
        "distance": 15.29
      },
      {
        "name": "Minato City",
        "distance": 14.85
      },
      {
        "name": "Chiyoda City",
        "distance": 7.26
      },
      {
        "name": "Shinagawa City",
        "distance": 16.36
      },
      {
        "name": "Shibuya City",
        "distance": 11.24
      },
      {
        "name": "Shinjuku City",
        "distance": 7.31
      },
      {
        "name": "Chuo City",
        "distance": 9.81
      },
      {
        "name": "Tokyo",
        "distance": 9.38
      },
      {
        "name": "Taito City",
        "distance": 6.68
      },
      {
        "name": "Suginami City",
        "distance": 10.88
      },
      {
        "name": "Koto City",
        "distance": 15.17
      },
      {
        "name": "Musashino",
        "distance": 15.32
      },
      {
        "name": "Setagaya City",
        "distance": 19.23
      },
      {
        "name": "Meguro City",
        "distance": 13.07
      },
      {
        "name": "Nakano City",
        "distance": 7.91
      },
      {
        "name": "Toshima City",
        "distance": 5.26
      },
      {
        "name": "Katsushika City",
        "distance": 10.33
      },
      {
        "name": "Bunkyo City",
        "distance": 6.33
      },
      {
        "name": "Hachioji",
        "distance": 38.57
      },
      {
        "name": "Hino",
        "distance": 31.6
      },
      {
        "name": "Itabashi City",
        "distance": 1.87
      },
      {
        "name": "Mitaka",
        "distance": 17.33
      },
      {
        "name": "Tachikawa",
        "distance": 29.37
      }
    ]
  },
  "Bunkyo City": {
    "lat": 35.703322,
    "lng": 139.754579,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Abiko",
        "distance": 30.46
      },
      {
        "name": "Chiba",
        "distance": 33.53
      },
      {
        "name": "Ichikawa",
        "distance": 16.05
      },
      {
        "name": "Yokohama",
        "distance": 30.16
      },
      {
        "name": "Kawasaki",
        "distance": 19.74
      },
      {
        "name": "Niiza",
        "distance": 19.75
      },
      {
        "name": "Minato City",
        "distance": 8.57
      },
      {
        "name": "Chiyoda City",
        "distance": 1.02
      },
      {
        "name": "Shinagawa City",
        "distance": 10.69
      },
      {
        "name": "Shibuya City",
        "distance": 7.12
      },
      {
        "name": "Shinjuku City",
        "distance": 4.74
      },
      {
        "name": "Chuo City",
        "distance": 3.8
      },
      {
        "name": "Tokyo",
        "distance": 3.06
      },
      {
        "name": "Taito City",
        "distance": 2.5
      },
      {
        "name": "Suginami City",
        "distance": 10.95
      },
      {
        "name": "Koto City",
        "distance": 8.88
      },
      {
        "name": "Musashino",
        "distance": 17.1
      },
      {
        "name": "Setagaya City",
        "distance": 15.19
      },
      {
        "name": "Meguro City",
        "distance": 8.56
      },
      {
        "name": "Nakano City",
        "distance": 8.28
      },
      {
        "name": "Toshima City",
        "distance": 6.61
      },
      {
        "name": "Katsushika City",
        "distance": 9.73
      },
      {
        "name": "Kita City",
        "distance": 6.33
      },
      {
        "name": "Hachioji",
        "distance": 39.79
      },
      {
        "name": "Hino",
        "distance": 32.67
      },
      {
        "name": "Itabashi City",
        "distance": 6.69
      },
      {
        "name": "Mitaka",
        "distance": 17.78
      },
      {
        "name": "Tachikawa",
        "distance": 31.34
      }
    ]
  },
  "Hachioji": {
    "lat": 35.666359,
    "lng": 139.316365,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Yokohama",
        "distance": 37.48
      },
      {
        "name": "Fujisawa",
        "distance": 39.7
      },
      {
        "name": "Kawasaki",
        "distance": 38.14
      },
      {
        "name": "Niiza",
        "distance": 26.56
      },
      {
        "name": "Chiyoda City",
        "distance": 39.61
      },
      {
        "name": "Shinagawa City",
        "distance": 37.93
      },
      {
        "name": "Shibuya City",
        "distance": 34.55
      },
      {
        "name": "Shinjuku City",
        "distance": 35.1
      },
      {
        "name": "Suginami City",
        "distance": 28.85
      },
      {
        "name": "Musashino",
        "distance": 23.25
      },
      {
        "name": "Setagaya City",
        "distance": 31.34
      },
      {
        "name": "Meguro City",
        "distance": 34.62
      },
      {
        "name": "Nakano City",
        "distance": 31.68
      },
      {
        "name": "Toshima City",
        "distance": 34.0
      },
      {
        "name": "Kita City",
        "distance": 38.57
      },
      {
        "name": "Bunkyo City",
        "distance": 39.79
      },
      {
        "name": "Hino",
        "distance": 7.12
      },
      {
        "name": "Itabashi City",
        "distance": 36.7
      },
      {
        "name": "Mitaka",
        "distance": 22.02
      },
      {
        "name": "Tachikawa",
        "distance": 9.8
      }
    ]
  },
  "Hino": {
    "lat": 35.671339,
    "lng": 139.39498,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Yokohama",
        "distance": 32.75
      },
      {
        "name": "Fujisawa",
        "distance": 37.98
      },
      {
        "name": "Kawasaki",
        "distance": 32.0
      },
      {
        "name": "Niiza",
        "distance": 20.52
      },
      {
        "name": "Minato City",
        "distance": 34.54
      },
      {
        "name": "Chiyoda City",
        "distance": 32.49
      },
      {
        "name": "Shinagawa City",
        "distance": 31.07
      },
      {
        "name": "Shibuya City",
        "distance": 27.47
      },
      {
        "name": "Shinjuku City",
        "distance": 27.97
      },
      {
        "name": "Chuo City",
        "distance": 35.48
      },
      {
        "name": "Tokyo",
        "distance": 33.33
      },
      {
        "name": "Taito City",
        "distance": 35.05
      },
      {
        "name": "Suginami City",
        "distance": 21.73
      },
      {
        "name": "Koto City",
        "distance": 34.8
      },
      {
        "name": "Musashino",
        "distance": 16.28
      },
      {
        "name": "Setagaya City",
        "distance": 24.72
      },
      {
        "name": "Meguro City",
        "distance": 27.6
      },
      {
        "name": "Nakano City",
        "distance": 24.59
      },
      {
        "name": "Toshima City",
        "distance": 26.93
      },
      {
        "name": "Kita City",
        "distance": 31.6
      },
      {
        "name": "Bunkyo City",
        "distance": 32.67
      },
      {
        "name": "Hachioji",
        "distance": 7.12
      },
      {
        "name": "Itabashi City",
        "distance": 29.73
      },
      {
        "name": "Mitaka",
        "distance": 14.9
      },
      {
        "name": "Tachikawa",
        "distance": 4.87
      }
    ]
  },
  "Itabashi City": {
    "lat": 35.750978,
    "lng": 139.709296,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Abiko",
        "distance": 31.37
      },
      {
        "name": "Chiba",
        "distance": 39.26
      },
      {
        "name": "Ichikawa",
        "distance": 20.27
      },
      {
        "name": "Yokohama",
        "distance": 34.11
      },
      {
        "name": "Kawasaki",
        "distance": 24.5
      },
      {
        "name": "Niiza",
        "distance": 13.77
      },
      {
        "name": "Minato City",
        "distance": 14.88
      },
      {
        "name": "Chiyoda City",
        "distance": 7.48
      },
      {
        "name": "Shinagawa City",
        "distance": 15.88
      },
      {
        "name": "Shibuya City",
        "distance": 10.35
      },
      {
        "name": "Shinjuku City",
        "distance": 6.37
      },
      {
        "name": "Chuo City",
        "distance": 10.43
      },
      {
        "name": "Tokyo",
        "distance": 9.6
      },
      {
        "name": "Taito City",
        "distance": 7.66
      },
      {
        "name": "Suginami City",
        "distance": 9.13
      },
      {
        "name": "Koto City",
        "distance": 15.21
      },
      {
        "name": "Musashino",
        "distance": 13.45
      },
      {
        "name": "Setagaya City",
        "distance": 18.09
      },
      {
        "name": "Meguro City",
        "distance": 12.22
      },
      {
        "name": "Nakano City",
        "distance": 6.23
      },
      {
        "name": "Toshima City",
        "distance": 3.64
      },
      {
        "name": "Katsushika City",
        "distance": 12.1
      },
      {
        "name": "Kita City",
        "distance": 1.87
      },
      {
        "name": "Bunkyo City",
        "distance": 6.69
      },
      {
        "name": "Hachioji",
        "distance": 36.7
      },
      {
        "name": "Hino",
        "distance": 29.73
      },
      {
        "name": "Mitaka",
        "distance": 15.49
      },
      {
        "name": "Tachikawa",
        "distance": 27.53
      }
    ]
  },
  "Mitaka": {
    "lat": 35.683393,
    "lng": 139.559242,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Ichikawa",
        "distance": 33.83
      },
      {
        "name": "Yokohama",
        "distance": 26.79
      },
      {
        "name": "Fujisawa",
        "distance": 38.81
      },
      {
        "name": "Kawasaki",
        "distance": 21.43
      },
      {
        "name": "Niiza",
        "distance": 12.22
      },
      {
        "name": "Minato City",
        "distance": 20.32
      },
      {
        "name": "Chiyoda City",
        "distance": 17.59
      },
      {
        "name": "Shinagawa City",
        "distance": 17.51
      },
      {
        "name": "Shibuya City",
        "distance": 12.9
      },
      {
        "name": "Shinjuku City",
        "distance": 13.08
      },
      {
        "name": "Chuo City",
        "distance": 20.62
      },
      {
        "name": "Tokyo",
        "distance": 18.5
      },
      {
        "name": "Taito City",
        "distance": 20.18
      },
      {
        "name": "Suginami City",
        "distance": 6.87
      },
      {
        "name": "Koto City",
        "distance": 20.61
      },
      {
        "name": "Musashino",
        "distance": 3.87
      },
      {
        "name": "Setagaya City",
        "distance": 12.9
      },
      {
        "name": "Meguro City",
        "distance": 13.4
      },
      {
        "name": "Nakano City",
        "distance": 9.82
      },
      {
        "name": "Toshima City",
        "distance": 12.32
      },
      {
        "name": "Katsushika City",
        "distance": 26.79
      },
      {
        "name": "Kita City",
        "distance": 17.33
      },
      {
        "name": "Bunkyo City",
        "distance": 17.78
      },
      {
        "name": "Hachioji",
        "distance": 22.02
      },
      {
        "name": "Hino",
        "distance": 14.9
      },
      {
        "name": "Itabashi City",
        "distance": 15.49
      },
      {
        "name": "Tachikawa",
        "distance": 14.09
      }
    ]
  },
  "Tachikawa": {
    "lat": 35.713906,
    "lng": 139.40777,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Yokohama",
        "distance": 35.76
      },
      {
        "name": "Kawasaki",
        "distance": 33.63
      },
      {
        "name": "Niiza",
        "distance": 16.76
      },
      {
        "name": "Minato City",
        "distance": 34.4
      },
      {
        "name": "Chiyoda City",
        "distance": 31.3
      },
      {
        "name": "Shinagawa City",
        "distance": 31.37
      },
      {
        "name": "Shibuya City",
        "distance": 26.99
      },
      {
        "name": "Shinjuku City",
        "distance": 26.79
      },
      {
        "name": "Chuo City",
        "distance": 34.48
      },
      {
        "name": "Tokyo",
        "distance": 32.42
      },
      {
        "name": "Taito City",
        "distance": 33.59
      },
      {
        "name": "Suginami City",
        "distance": 20.49
      },
      {
        "name": "Koto City",
        "distance": 34.68
      },
      {
        "name": "Musashino",
        "distance": 14.29
      },
      {
        "name": "Setagaya City",
        "distance": 25.71
      },
      {
        "name": "Meguro City",
        "distance": 27.45
      },
      {
        "name": "Nakano City",
        "distance": 23.07
      },
      {
        "name": "Toshima City",
        "distance": 25.15
      },
      {
        "name": "Katsushika City",
        "distance": 39.56
      },
      {
        "name": "Kita City",
        "distance": 29.37
      },
      {
        "name": "Bunkyo City",
        "distance": 31.34
      },
      {
        "name": "Hachioji",
        "distance": 9.8
      },
      {
        "name": "Hino",
        "distance": 4.87
      },
      {
        "name": "Itabashi City",
        "distance": 27.53
      },
      {
        "name": "Mitaka",
        "distance": 14.09
      }
    ]
  },
  "gateshead": {
    "lat": 54.962579,
    "lng": -1.601929,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "newcastle-upon-tyne",
        "distance": 1.44
      },
      {
        "name": "abbotts-hill",
        "distance": 11.55
      },
      {
        "name": "sunderland",
        "distance": 12.58
      }
    ]
  },
  "newcastle-upon-tyne": {
    "lat": 54.973847,
    "lng": -1.613157,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "gateshead",
        "distance": 1.44
      },
      {
        "name": "abbotts-hill",
        "distance": 11.87
      },
      {
        "name": "sunderland",
        "distance": 13.58
      }
    ]
  },
  "abbotts-hill": {
    "lat": 54.998741,
    "lng": -1.432185,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "gateshead",
        "distance": 11.55
      },
      {
        "name": "newcastle-upon-tyne",
        "distance": 11.87
      },
      {
        "name": "sunderland",
        "distance": 6.75
      }
    ]
  },
  "sunderland": {
    "lat": 54.939466,
    "lng": -1.409016,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "gateshead",
        "distance": 12.58
      },
      {
        "name": "newcastle-upon-tyne",
        "distance": 13.58
      },
      {
        "name": "abbotts-hill",
        "distance": 6.75
      }
    ]
  },
  "hofen": {
    "lat": 47.472557,
    "lng": 10.686998,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "innsbruck": {
    "lat": 47.26543,
    "lng": 11.392769,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Ulsan": {
    "lat": 35.53917,
    "lng": 129.311914,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "uppsala": {
    "lat": 59.858613,
    "lng": 17.638744,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "almunge",
        "distance": 22.73
      }
    ]
  },
  "almunge": {
    "lat": 59.875971,
    "lng": 18.044494,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "norrtalje",
        "distance": 39.08
      },
      {
        "name": "uppsala",
        "distance": 22.73
      }
    ]
  },
  "Salt Lake City": {
    "lat": 40.733705,
    "lng": -111.895848,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Lehi",
        "distance": 38.64
      }
    ]
  },
  "Orem": {
    "lat": 40.275141,
    "lng": -111.716332,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Provo",
        "distance": 6.72
      },
      {
        "name": "Lehi",
        "distance": 16.84
      }
    ]
  },
  "Provo": {
    "lat": 40.233729,
    "lng": -111.658709,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Orem",
        "distance": 6.72
      },
      {
        "name": "Lehi",
        "distance": 23.54
      }
    ]
  },
  "Lehi": {
    "lat": 40.388111,
    "lng": -111.848602,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Salt Lake City",
        "distance": 38.64
      },
      {
        "name": "Orem",
        "distance": 16.84
      },
      {
        "name": "Provo",
        "distance": 23.54
      }
    ]
  },
  "Logan": {
    "lat": 41.784236,
    "lng": -111.835455,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "South Ogden": {
    "lat": 41.162446,
    "lng": -111.938225,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "utrecht": {
    "lat": 52.090701,
    "lng": 5.121563,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "amsterdam",
        "distance": 35.06
      },
      {
        "name": "hilversum",
        "distance": 15.23
      },
      {
        "name": "amstelveen",
        "distance": 28.44
      },
      {
        "name": "hoofddorp",
        "distance": 37.75
      },
      {
        "name": "schiphol-rijk",
        "distance": 32.34
      },
      {
        "name": "amersfoort",
        "distance": 19.7
      }
    ]
  },
  "amersfoort": {
    "lat": 52.15625,
    "lng": 5.389694,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "hilversum",
        "distance": 16.65
      },
      {
        "name": "amstelveen",
        "distance": 39.33
      },
      {
        "name": "utrecht",
        "distance": 19.7
      }
    ]
  },
  "Noida": {
    "lat": 28.570633,
    "lng": 77.327215,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "New Delhi",
        "distance": 12.5
      },
      {
        "name": "Gurugram",
        "distance": 27.78
      }
    ]
  },
  "helsinki": {
    "lat": 60.16662,
    "lng": 24.943541,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "espoo",
        "distance": 16.46
      },
      {
        "name": "vantaa",
        "distance": 15.1
      }
    ]
  },
  "espoo": {
    "lat": 60.204965,
    "lng": 24.655981,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "helsinki",
        "distance": 16.46
      },
      {
        "name": "vantaa",
        "distance": 23.52
      }
    ]
  },
  "vantaa": {
    "lat": 60.292997,
    "lng": 25.043525,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "helsinki",
        "distance": 15.1
      },
      {
        "name": "espoo",
        "distance": 23.52
      }
    ]
  },
  "valencia": {
    "lat": 39.681959,
    "lng": -0.765441,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "alicante": {
    "lat": 38.343637,
    "lng": -0.488171,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "catarroja": {
    "lat": 39.403375,
    "lng": -0.402876,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "karlstad": {
    "lat": 59.380915,
    "lng": 13.502763,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "umea": {
    "lat": 63.825657,
    "lng": 20.263074,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "skelleftea": {
    "lat": 64.752019,
    "lng": 20.959339,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "jorn": {
    "lat": 65.053918,
    "lng": 20.029946,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "sundsvall": {
    "lat": 62.390755,
    "lng": 17.307102,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "alno",
        "distance": 8.38
      }
    ]
  },
  "alno": {
    "lat": 62.416669,
    "lng": 17.459858,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "sundsvall",
        "distance": 8.38
      }
    ]
  },
  "vasteras": {
    "lat": 59.611099,
    "lng": 16.546368,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "gothenburg": {
    "lat": 57.707233,
    "lng": 11.967017,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "kungsbacka",
        "distance": 25.18
      },
      {
        "name": "onsala",
        "distance": 34.36
      },
      {
        "name": "molndal",
        "distance": 6.33
      }
    ]
  },
  "skovde": {
    "lat": 58.389633,
    "lng": 13.845634,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "lundsbrunn",
        "distance": 25.03
      }
    ]
  },
  "trollhattan": {
    "lat": 58.282793,
    "lng": 12.290861,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "uddevalla",
        "distance": 21.87
      }
    ]
  },
  "lidkoping": {
    "lat": 58.50372,
    "lng": 13.157643,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "lundsbrunn",
        "distance": 17.09
      }
    ]
  },
  "lundsbrunn": {
    "lat": 58.471591,
    "lng": 13.445263,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "skovde",
        "distance": 25.03
      },
      {
        "name": "lidkoping",
        "distance": 17.09
      }
    ]
  },
  "mellerud": {
    "lat": 58.716667,
    "lng": 12.466667,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "molndal": {
    "lat": 57.656492,
    "lng": 12.015308,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "kungsbacka",
        "distance": 19.02
      },
      {
        "name": "onsala",
        "distance": 29.09
      },
      {
        "name": "gothenburg",
        "distance": 6.33
      }
    ]
  },
  "uddevalla": {
    "lat": 58.349055,
    "lng": 11.938285,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "trollhattan",
        "distance": 21.87
      }
    ]
  },
  "lausanne": {
    "lat": 46.521827,
    "lng": 6.632702,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "padua": {
    "lat": 45.407717,
    "lng": 11.873446,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Essex": {
    "lat": 44.680852,
    "lng": -71.735233,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Winooski": {
    "lat": 44.49104,
    "lng": -73.186106,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Burlington",
        "distance": 2.45
      }
    ]
  },
  "South Wharf": {
    "lat": -37.825328,
    "lng": 144.949343,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Melbourne",
        "distance": 1.73
      },
      {
        "name": "South Melbourne",
        "distance": 1.72
      },
      {
        "name": "Abbotsford",
        "distance": 4.92
      },
      {
        "name": "Ascot Vale",
        "distance": 6.06
      },
      {
        "name": "Bayswater",
        "distance": 28.05
      },
      {
        "name": "Brighton",
        "distance": 10.08
      },
      {
        "name": "Collingwood",
        "distance": 4.28
      },
      {
        "name": "Docklands",
        "distance": 1.22
      },
      {
        "name": "Fitzroy",
        "distance": 3.77
      },
      {
        "name": "Mitcham",
        "distance": 21.4
      },
      {
        "name": "Scoresby",
        "distance": 25.13
      },
      {
        "name": "Southbank",
        "distance": 1.29
      }
    ]
  },
  "Melbourne": {
    "lat": -37.814245,
    "lng": 144.963173,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "South Wharf",
        "distance": 1.73
      },
      {
        "name": "South Melbourne",
        "distance": 1.08
      },
      {
        "name": "Abbotsford",
        "distance": 3.31
      },
      {
        "name": "Ascot Vale",
        "distance": 5.65
      },
      {
        "name": "Bayswater",
        "distance": 26.96
      },
      {
        "name": "Brighton",
        "distance": 10.83
      },
      {
        "name": "Collingwood",
        "distance": 2.58
      },
      {
        "name": "Docklands",
        "distance": 2.11
      },
      {
        "name": "Fitzroy",
        "distance": 2.04
      },
      {
        "name": "Mitcham",
        "distance": 20.18
      },
      {
        "name": "Scoresby",
        "distance": 24.46
      },
      {
        "name": "Southbank",
        "distance": 1.24
      }
    ]
  },
  "South Melbourne": {
    "lat": -37.822926,
    "lng": 144.968656,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "South Wharf",
        "distance": 1.72
      },
      {
        "name": "Melbourne",
        "distance": 1.08
      },
      {
        "name": "Abbotsford",
        "distance": 3.35
      },
      {
        "name": "Ascot Vale",
        "distance": 6.7
      },
      {
        "name": "Bayswater",
        "distance": 26.38
      },
      {
        "name": "Brighton",
        "distance": 9.78
      },
      {
        "name": "Collingwood",
        "distance": 2.88
      },
      {
        "name": "Docklands",
        "distance": 2.63
      },
      {
        "name": "Fitzroy",
        "distance": 2.61
      },
      {
        "name": "Mitcham",
        "distance": 19.7
      },
      {
        "name": "Scoresby",
        "distance": 23.64
      },
      {
        "name": "Southbank",
        "distance": 0.49
      }
    ]
  },
  "Abbotsford": {
    "lat": -37.804551,
    "lng": 144.998854,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "South Wharf",
        "distance": 4.92
      },
      {
        "name": "Melbourne",
        "distance": 3.31
      },
      {
        "name": "South Melbourne",
        "distance": 3.35
      },
      {
        "name": "Ascot Vale",
        "distance": 7.51
      },
      {
        "name": "Bayswater",
        "distance": 24.01
      },
      {
        "name": "Brighton",
        "distance": 11.53
      },
      {
        "name": "Collingwood",
        "distance": 0.98
      },
      {
        "name": "Docklands",
        "distance": 5.41
      },
      {
        "name": "Fitzroy",
        "distance": 1.77
      },
      {
        "name": "Mitcham",
        "distance": 17.1
      },
      {
        "name": "Scoresby",
        "distance": 22.14
      },
      {
        "name": "Southbank",
        "distance": 3.84
      }
    ]
  },
  "Ascot Vale": {
    "lat": -37.775325,
    "lng": 144.921825,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "South Wharf",
        "distance": 6.06
      },
      {
        "name": "Melbourne",
        "distance": 5.65
      },
      {
        "name": "South Melbourne",
        "distance": 6.7
      },
      {
        "name": "Abbotsford",
        "distance": 7.51
      },
      {
        "name": "Bayswater",
        "distance": 31.31
      },
      {
        "name": "Brighton",
        "distance": 16.14
      },
      {
        "name": "Collingwood",
        "distance": 6.54
      },
      {
        "name": "Docklands",
        "distance": 4.94
      },
      {
        "name": "Fitzroy",
        "distance": 5.8
      },
      {
        "name": "Mitcham",
        "distance": 24.28
      },
      {
        "name": "Scoresby",
        "distance": 29.63
      },
      {
        "name": "Southbank",
        "distance": 6.69
      }
    ]
  },
  "Bayswater": {
    "lat": -37.841739,
    "lng": 145.268121,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "South Wharf",
        "distance": 28.05
      },
      {
        "name": "Melbourne",
        "distance": 26.96
      },
      {
        "name": "South Melbourne",
        "distance": 26.38
      },
      {
        "name": "Abbotsford",
        "distance": 24.01
      },
      {
        "name": "Ascot Vale",
        "distance": 31.31
      },
      {
        "name": "Brighton",
        "distance": 25.02
      },
      {
        "name": "Collingwood",
        "distance": 24.98
      },
      {
        "name": "Docklands",
        "distance": 28.99
      },
      {
        "name": "Fitzroy",
        "distance": 25.77
      },
      {
        "name": "Mitcham",
        "distance": 7.12
      },
      {
        "name": "Scoresby",
        "distance": 8.06
      },
      {
        "name": "Southbank",
        "distance": 26.77
      }
    ]
  },
  "Brighton": {
    "lat": -37.908196,
    "lng": 144.995799,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "South Wharf",
        "distance": 10.08
      },
      {
        "name": "Melbourne",
        "distance": 10.83
      },
      {
        "name": "South Melbourne",
        "distance": 9.78
      },
      {
        "name": "Abbotsford",
        "distance": 11.53
      },
      {
        "name": "Ascot Vale",
        "distance": 16.14
      },
      {
        "name": "Bayswater",
        "distance": 25.02
      },
      {
        "name": "Collingwood",
        "distance": 11.82
      },
      {
        "name": "Docklands",
        "distance": 11.23
      },
      {
        "name": "Fitzroy",
        "distance": 12.0
      },
      {
        "name": "Mitcham",
        "distance": 19.99
      },
      {
        "name": "Scoresby",
        "distance": 19.53
      },
      {
        "name": "Southbank",
        "distance": 9.62
      }
    ]
  },
  "Collingwood": {
    "lat": -37.802104,
    "lng": 144.988139,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "South Wharf",
        "distance": 4.28
      },
      {
        "name": "Melbourne",
        "distance": 2.58
      },
      {
        "name": "South Melbourne",
        "distance": 2.88
      },
      {
        "name": "Abbotsford",
        "distance": 0.98
      },
      {
        "name": "Ascot Vale",
        "distance": 6.54
      },
      {
        "name": "Bayswater",
        "distance": 24.98
      },
      {
        "name": "Brighton",
        "distance": 11.82
      },
      {
        "name": "Docklands",
        "distance": 4.61
      },
      {
        "name": "Fitzroy",
        "distance": 0.79
      },
      {
        "name": "Mitcham",
        "distance": 18.07
      },
      {
        "name": "Scoresby",
        "distance": 23.09
      },
      {
        "name": "Southbank",
        "distance": 3.34
      }
    ]
  },
  "Docklands": {
    "lat": -37.817542,
    "lng": 144.939492,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "South Wharf",
        "distance": 1.22
      },
      {
        "name": "Melbourne",
        "distance": 2.11
      },
      {
        "name": "South Melbourne",
        "distance": 2.63
      },
      {
        "name": "Abbotsford",
        "distance": 5.41
      },
      {
        "name": "Ascot Vale",
        "distance": 4.94
      },
      {
        "name": "Bayswater",
        "distance": 28.99
      },
      {
        "name": "Brighton",
        "distance": 11.23
      },
      {
        "name": "Collingwood",
        "distance": 4.61
      },
      {
        "name": "Fitzroy",
        "distance": 3.95
      },
      {
        "name": "Mitcham",
        "distance": 22.25
      },
      {
        "name": "Scoresby",
        "distance": 26.24
      },
      {
        "name": "Southbank",
        "distance": 2.32
      }
    ]
  },
  "Fitzroy": {
    "lat": -37.801038,
    "lng": 144.979261,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "South Wharf",
        "distance": 3.77
      },
      {
        "name": "Melbourne",
        "distance": 2.04
      },
      {
        "name": "South Melbourne",
        "distance": 2.61
      },
      {
        "name": "Abbotsford",
        "distance": 1.77
      },
      {
        "name": "Ascot Vale",
        "distance": 5.8
      },
      {
        "name": "Bayswater",
        "distance": 25.77
      },
      {
        "name": "Brighton",
        "distance": 12.0
      },
      {
        "name": "Collingwood",
        "distance": 0.79
      },
      {
        "name": "Docklands",
        "distance": 3.95
      },
      {
        "name": "Mitcham",
        "distance": 18.85
      },
      {
        "name": "Scoresby",
        "distance": 23.83
      },
      {
        "name": "Southbank",
        "distance": 3.02
      }
    ]
  },
  "Mitcham": {
    "lat": -37.818093,
    "lng": 145.1928,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "South Wharf",
        "distance": 21.4
      },
      {
        "name": "Melbourne",
        "distance": 20.18
      },
      {
        "name": "South Melbourne",
        "distance": 19.7
      },
      {
        "name": "Abbotsford",
        "distance": 17.1
      },
      {
        "name": "Ascot Vale",
        "distance": 24.28
      },
      {
        "name": "Bayswater",
        "distance": 7.12
      },
      {
        "name": "Brighton",
        "distance": 19.99
      },
      {
        "name": "Collingwood",
        "distance": 18.07
      },
      {
        "name": "Docklands",
        "distance": 22.25
      },
      {
        "name": "Fitzroy",
        "distance": 18.85
      },
      {
        "name": "Scoresby",
        "distance": 9.66
      },
      {
        "name": "Southbank",
        "distance": 20.11
      }
    ]
  },
  "Scoresby": {
    "lat": -37.902579,
    "lng": 145.218307,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "South Wharf",
        "distance": 25.13
      },
      {
        "name": "Melbourne",
        "distance": 24.46
      },
      {
        "name": "South Melbourne",
        "distance": 23.64
      },
      {
        "name": "Abbotsford",
        "distance": 22.14
      },
      {
        "name": "Ascot Vale",
        "distance": 29.63
      },
      {
        "name": "Bayswater",
        "distance": 8.06
      },
      {
        "name": "Brighton",
        "distance": 19.53
      },
      {
        "name": "Collingwood",
        "distance": 23.09
      },
      {
        "name": "Docklands",
        "distance": 26.24
      },
      {
        "name": "Fitzroy",
        "distance": 23.83
      },
      {
        "name": "Mitcham",
        "distance": 9.66
      },
      {
        "name": "Southbank",
        "distance": 23.92
      }
    ]
  },
  "Southbank": {
    "lat": -37.825362,
    "lng": 144.96402,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "South Wharf",
        "distance": 1.29
      },
      {
        "name": "Melbourne",
        "distance": 1.24
      },
      {
        "name": "South Melbourne",
        "distance": 0.49
      },
      {
        "name": "Abbotsford",
        "distance": 3.84
      },
      {
        "name": "Ascot Vale",
        "distance": 6.69
      },
      {
        "name": "Bayswater",
        "distance": 26.77
      },
      {
        "name": "Brighton",
        "distance": 9.62
      },
      {
        "name": "Collingwood",
        "distance": 3.34
      },
      {
        "name": "Docklands",
        "distance": 2.32
      },
      {
        "name": "Fitzroy",
        "distance": 3.02
      },
      {
        "name": "Mitcham",
        "distance": 20.11
      },
      {
        "name": "Scoresby",
        "distance": 23.92
      }
    ]
  },
  "vienna": {
    "lat": 48.208354,
    "lng": 16.372504,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "vilnius": {
    "lat": 54.687046,
    "lng": 25.282911,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Fairfax": {
    "lat": 38.87434,
    "lng": -77.153868,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Rockville",
        "distance": 23.07
      },
      {
        "name": "Bethesda",
        "distance": 13.01
      },
      {
        "name": "Forest Heights",
        "distance": 14.97
      },
      {
        "name": "Fort Washington",
        "distance": 19.94
      },
      {
        "name": "Herndon",
        "distance": 22.7
      },
      {
        "name": "Centreville",
        "distance": 24.66
      },
      {
        "name": "Manassas",
        "distance": 32.57
      }
    ]
  },
  "Herndon": {
    "lat": 38.969532,
    "lng": -77.385948,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Rockville",
        "distance": 23.78
      },
      {
        "name": "Bethesda",
        "distance": 25.05
      },
      {
        "name": "Forest Heights",
        "distance": 37.66
      },
      {
        "name": "Fairfax",
        "distance": 22.7
      },
      {
        "name": "Centreville",
        "distance": 15.26
      },
      {
        "name": "Manassas",
        "distance": 24.32
      }
    ]
  },
  "Alexandria": {
    "lat": 38.717423,
    "lng": -77.793159,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Centreville",
        "distance": 33.82
      },
      {
        "name": "Manassas",
        "distance": 25.62
      }
    ]
  },
  "Centreville": {
    "lat": 38.837613,
    "lng": -77.434728,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Rockville",
        "distance": 36.55
      },
      {
        "name": "Bethesda",
        "distance": 33.4
      },
      {
        "name": "Forest Heights",
        "distance": 37.86
      },
      {
        "name": "Fort Washington",
        "distance": 38.92
      },
      {
        "name": "Fairfax",
        "distance": 24.66
      },
      {
        "name": "Herndon",
        "distance": 15.26
      },
      {
        "name": "Alexandria",
        "distance": 33.82
      },
      {
        "name": "Manassas",
        "distance": 9.58
      }
    ]
  },
  "Charlottesville": {
    "lat": 38.029306,
    "lng": -78.476678,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Harrisonburg": {
    "lat": 38.473717,
    "lng": -78.860786,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Manassas": {
    "lat": 38.771871,
    "lng": -77.506094,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Fairfax",
        "distance": 32.57
      },
      {
        "name": "Herndon",
        "distance": 24.32
      },
      {
        "name": "Alexandria",
        "distance": 25.62
      },
      {
        "name": "Centreville",
        "distance": 9.58
      }
    ]
  },
  "Radford": {
    "lat": 37.134315,
    "lng": -80.574917,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Roanoke": {
    "lat": 37.25432,
    "lng": -79.956243,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "novi-sad": {
    "lat": 45.255134,
    "lng": 19.845176,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "vysocina-region": {
    "lat": 49.39941,
    "lng": 15.570468,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "waikato": {
    "lat": -37.779227,
    "lng": 175.201032,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "wallonia": {
    "lat": 50.154552,
    "lng": 5.399212,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "fleurus": {
    "lat": 50.482944,
    "lng": 4.549699,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "liege": {
    "lat": 50.645094,
    "lng": 5.573611,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "mons": {
    "lat": 50.454957,
    "lng": 3.951958,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "valenciennes",
        "distance": 32.22
      }
    ]
  },
  "olsztyn": {
    "lat": 53.58342,
    "lng": 20.28162,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "warrington": {
    "lat": 53.38995,
    "lng": -2.594318,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "wilmslow",
        "distance": 25.02
      },
      {
        "name": "knutsford",
        "distance": 17.7
      },
      {
        "name": "macclesfield",
        "distance": 34.29
      },
      {
        "name": "salford",
        "distance": 22.95
      },
      {
        "name": "stretford",
        "distance": 19.06
      },
      {
        "name": "manchester",
        "distance": 25.18
      },
      {
        "name": "liverpool",
        "distance": 27.74
      }
    ]
  },
  "royal-leamington-spa": {
    "lat": 52.291339,
    "lng": -1.536404,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "banbury",
        "distance": 28.97
      },
      {
        "name": "tamworth",
        "distance": 39.65
      },
      {
        "name": "warwick",
        "distance": 3.53
      },
      {
        "name": "atherstone-on-stour",
        "distance": 18.67
      },
      {
        "name": "barford",
        "distance": 6.97
      },
      {
        "name": "southam",
        "distance": 10.93
      },
      {
        "name": "birmingham",
        "distance": 32.51
      },
      {
        "name": "marston-green",
        "distance": 24.52
      },
      {
        "name": "the-royal-town-of-sutton-coldfield",
        "distance": 36.31
      }
    ]
  },
  "warwick": {
    "lat": 52.321306,
    "lng": -1.553691,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "banbury",
        "distance": 32.48
      },
      {
        "name": "tamworth",
        "distance": 36.12
      },
      {
        "name": "royal-leamington-spa",
        "distance": 3.53
      },
      {
        "name": "atherstone-on-stour",
        "distance": 20.83
      },
      {
        "name": "barford",
        "distance": 9.16
      },
      {
        "name": "southam",
        "distance": 13.56
      },
      {
        "name": "birmingham",
        "distance": 29.51
      },
      {
        "name": "marston-green",
        "distance": 21.18
      },
      {
        "name": "the-royal-town-of-sutton-coldfield",
        "distance": 32.88
      }
    ]
  },
  "atherstone-on-stour": {
    "lat": 52.15698,
    "lng": -1.70066,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "banbury",
        "distance": 26.86
      },
      {
        "name": "charlbury",
        "distance": 34.81
      },
      {
        "name": "royal-leamington-spa",
        "distance": 18.67
      },
      {
        "name": "warwick",
        "distance": 20.83
      },
      {
        "name": "barford",
        "distance": 11.76
      },
      {
        "name": "southam",
        "distance": 23.81
      },
      {
        "name": "birmingham",
        "distance": 38.42
      },
      {
        "name": "marston-green",
        "distance": 34.66
      }
    ]
  },
  "barford": {
    "lat": 52.245425,
    "lng": -1.606049,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "banbury",
        "distance": 27.44
      },
      {
        "name": "royal-leamington-spa",
        "distance": 6.97
      },
      {
        "name": "warwick",
        "distance": 9.16
      },
      {
        "name": "atherstone-on-stour",
        "distance": 11.76
      },
      {
        "name": "southam",
        "distance": 14.84
      },
      {
        "name": "birmingham",
        "distance": 32.93
      },
      {
        "name": "marston-green",
        "distance": 26.62
      },
      {
        "name": "the-royal-town-of-sutton-coldfield",
        "distance": 38.65
      }
    ]
  },
  "southam": {
    "lat": 52.253094,
    "lng": -1.388412,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "banbury",
        "distance": 21.7
      },
      {
        "name": "royal-leamington-spa",
        "distance": 10.93
      },
      {
        "name": "warwick",
        "distance": 13.56
      },
      {
        "name": "atherstone-on-stour",
        "distance": 23.81
      },
      {
        "name": "barford",
        "distance": 14.84
      },
      {
        "name": "marston-green",
        "distance": 34.43
      }
    ]
  },
  "Seattle": {
    "lat": 47.580138,
    "lng": -122.327304,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Bellevue",
        "distance": 14.59
      },
      {
        "name": "Redmond",
        "distance": 0.0
      },
      {
        "name": "Kirkland",
        "distance": 18.18
      },
      {
        "name": "Bothell",
        "distance": 17.81
      },
      {
        "name": "Woodinville",
        "distance": 23.53
      },
      {
        "name": "Renton",
        "distance": 16.09
      },
      {
        "name": "Issaquah",
        "distance": 0.0
      },
      {
        "name": "Lynnwood",
        "distance": 26.32
      },
      {
        "name": "Port Orchard",
        "distance": 23.96
      },
      {
        "name": "Bremerton",
        "distance": 0.0
      },
      {
        "name": "Kingston",
        "distance": 0.0
      },
      {
        "name": "Mead",
        "distance": 0.0
      },
      {
        "name": "Mercer Island",
        "distance": 8.34
      },
      {
        "name": "Mill Creek",
        "distance": 31.47
      },
      {
        "name": "Montesano",
        "distance": 0.0
      },
      {
        "name": "Silverdale",
        "distance": 0.0
      },
      {
        "name": "Washington",
        "distance": 0.0
      }
    ]
  },
  "Bellevue": {
    "lat": 47.626876,
    "lng": -122.145416,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Seattle",
        "distance": 14.59
      },
      {
        "name": "Redmond",
        "distance": 14.59
      },
      {
        "name": "Kirkland",
        "distance": 9.77
      },
      {
        "name": "Bothell",
        "distance": 16.51
      },
      {
        "name": "Woodinville",
        "distance": 14.3
      },
      {
        "name": "Renton",
        "distance": 15.41
      },
      {
        "name": "Issaquah",
        "distance": 14.59
      },
      {
        "name": "Lynnwood",
        "distance": 24.76
      },
      {
        "name": "Port Orchard",
        "distance": 38.47
      },
      {
        "name": "Bremerton",
        "distance": 14.59
      },
      {
        "name": "Everett",
        "distance": 35.73
      },
      {
        "name": "Kingston",
        "distance": 14.59
      },
      {
        "name": "Mead",
        "distance": 14.59
      },
      {
        "name": "Mercer Island",
        "distance": 9.29
      },
      {
        "name": "Mill Creek",
        "distance": 25.88
      },
      {
        "name": "Montesano",
        "distance": 14.59
      },
      {
        "name": "Silverdale",
        "distance": 14.59
      },
      {
        "name": "Washington",
        "distance": 14.59
      }
    ]
  },
  "Redmond": {
    "lat": 47.580138,
    "lng": -122.327304,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Seattle",
        "distance": 0.0
      },
      {
        "name": "Bellevue",
        "distance": 14.59
      },
      {
        "name": "Kirkland",
        "distance": 18.18
      },
      {
        "name": "Bothell",
        "distance": 17.81
      },
      {
        "name": "Woodinville",
        "distance": 23.53
      },
      {
        "name": "Renton",
        "distance": 16.09
      },
      {
        "name": "Issaquah",
        "distance": 0.0
      },
      {
        "name": "Lynnwood",
        "distance": 26.32
      },
      {
        "name": "Port Orchard",
        "distance": 23.96
      },
      {
        "name": "Bremerton",
        "distance": 0.0
      },
      {
        "name": "Kingston",
        "distance": 0.0
      },
      {
        "name": "Mead",
        "distance": 0.0
      },
      {
        "name": "Mercer Island",
        "distance": 8.34
      },
      {
        "name": "Mill Creek",
        "distance": 31.47
      },
      {
        "name": "Montesano",
        "distance": 0.0
      },
      {
        "name": "Silverdale",
        "distance": 0.0
      },
      {
        "name": "Washington",
        "distance": 0.0
      }
    ]
  },
  "Kirkland": {
    "lat": 47.71117,
    "lng": -122.182127,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Seattle",
        "distance": 18.18
      },
      {
        "name": "Bellevue",
        "distance": 9.77
      },
      {
        "name": "Redmond",
        "distance": 18.18
      },
      {
        "name": "Bothell",
        "distance": 8.69
      },
      {
        "name": "Woodinville",
        "distance": 5.43
      },
      {
        "name": "Renton",
        "distance": 24.79
      },
      {
        "name": "Issaquah",
        "distance": 18.18
      },
      {
        "name": "Lynnwood",
        "distance": 15.54
      },
      {
        "name": "Port Orchard",
        "distance": 39.6
      },
      {
        "name": "Bremerton",
        "distance": 18.18
      },
      {
        "name": "Everett",
        "distance": 25.97
      },
      {
        "name": "Kingston",
        "distance": 18.18
      },
      {
        "name": "Mead",
        "distance": 18.18
      },
      {
        "name": "Mercer Island",
        "distance": 17.03
      },
      {
        "name": "Mill Creek",
        "distance": 16.15
      },
      {
        "name": "Montesano",
        "distance": 18.18
      },
      {
        "name": "Silverdale",
        "distance": 18.18
      },
      {
        "name": "Washington",
        "distance": 18.18
      }
    ]
  },
  "Bothell": {
    "lat": 47.738445,
    "lng": -122.291001,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Seattle",
        "distance": 17.81
      },
      {
        "name": "Bellevue",
        "distance": 16.51
      },
      {
        "name": "Redmond",
        "distance": 17.81
      },
      {
        "name": "Kirkland",
        "distance": 8.69
      },
      {
        "name": "Woodinville",
        "distance": 10.61
      },
      {
        "name": "Renton",
        "distance": 29.43
      },
      {
        "name": "Issaquah",
        "distance": 17.81
      },
      {
        "name": "Lynnwood",
        "distance": 8.94
      },
      {
        "name": "Port Orchard",
        "distance": 34.74
      },
      {
        "name": "Bremerton",
        "distance": 17.81
      },
      {
        "name": "Everett",
        "distance": 22.22
      },
      {
        "name": "Kingston",
        "distance": 17.81
      },
      {
        "name": "Mead",
        "distance": 17.81
      },
      {
        "name": "Mercer Island",
        "distance": 20.52
      },
      {
        "name": "Mill Creek",
        "distance": 13.87
      },
      {
        "name": "Montesano",
        "distance": 17.81
      },
      {
        "name": "Silverdale",
        "distance": 17.81
      },
      {
        "name": "Washington",
        "distance": 17.81
      }
    ]
  },
  "Woodinville": {
    "lat": 47.755427,
    "lng": -122.151308,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Seattle",
        "distance": 23.53
      },
      {
        "name": "Bellevue",
        "distance": 14.3
      },
      {
        "name": "Redmond",
        "distance": 23.53
      },
      {
        "name": "Kirkland",
        "distance": 5.43
      },
      {
        "name": "Bothell",
        "distance": 10.61
      },
      {
        "name": "Renton",
        "distance": 29.67
      },
      {
        "name": "Issaquah",
        "distance": 23.53
      },
      {
        "name": "Lynnwood",
        "distance": 14.22
      },
      {
        "name": "Bremerton",
        "distance": 23.53
      },
      {
        "name": "Everett",
        "distance": 22.03
      },
      {
        "name": "Kingston",
        "distance": 23.53
      },
      {
        "name": "Mead",
        "distance": 23.53
      },
      {
        "name": "Mercer Island",
        "distance": 22.31
      },
      {
        "name": "Mill Creek",
        "distance": 12.14
      },
      {
        "name": "Montesano",
        "distance": 23.53
      },
      {
        "name": "Silverdale",
        "distance": 23.53
      },
      {
        "name": "Washington",
        "distance": 23.53
      }
    ]
  },
  "Renton": {
    "lat": 47.488709,
    "lng": -122.1611,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Seattle",
        "distance": 16.09
      },
      {
        "name": "Bellevue",
        "distance": 15.41
      },
      {
        "name": "Redmond",
        "distance": 16.09
      },
      {
        "name": "Kirkland",
        "distance": 24.79
      },
      {
        "name": "Bothell",
        "distance": 29.43
      },
      {
        "name": "Woodinville",
        "distance": 29.67
      },
      {
        "name": "Issaquah",
        "distance": 16.09
      },
      {
        "name": "Lynnwood",
        "distance": 38.33
      },
      {
        "name": "Port Orchard",
        "distance": 36.16
      },
      {
        "name": "Tacoma",
        "distance": 37.61
      },
      {
        "name": "Bremerton",
        "distance": 16.09
      },
      {
        "name": "Kingston",
        "distance": 16.09
      },
      {
        "name": "Mead",
        "distance": 16.09
      },
      {
        "name": "Mercer Island",
        "distance": 9.1
      },
      {
        "name": "Montesano",
        "distance": 16.09
      },
      {
        "name": "Silverdale",
        "distance": 16.09
      },
      {
        "name": "Washington",
        "distance": 16.09
      }
    ]
  },
  "Issaquah": {
    "lat": 47.580138,
    "lng": -122.327304,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Seattle",
        "distance": 0.0
      },
      {
        "name": "Bellevue",
        "distance": 14.59
      },
      {
        "name": "Redmond",
        "distance": 0.0
      },
      {
        "name": "Kirkland",
        "distance": 18.18
      },
      {
        "name": "Bothell",
        "distance": 17.81
      },
      {
        "name": "Woodinville",
        "distance": 23.53
      },
      {
        "name": "Renton",
        "distance": 16.09
      },
      {
        "name": "Lynnwood",
        "distance": 26.32
      },
      {
        "name": "Port Orchard",
        "distance": 23.96
      },
      {
        "name": "Bremerton",
        "distance": 0.0
      },
      {
        "name": "Kingston",
        "distance": 0.0
      },
      {
        "name": "Mead",
        "distance": 0.0
      },
      {
        "name": "Mercer Island",
        "distance": 8.34
      },
      {
        "name": "Mill Creek",
        "distance": 31.47
      },
      {
        "name": "Montesano",
        "distance": 0.0
      },
      {
        "name": "Silverdale",
        "distance": 0.0
      },
      {
        "name": "Washington",
        "distance": 0.0
      }
    ]
  },
  "Lynnwood": {
    "lat": 47.816751,
    "lng": -122.31835,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Seattle",
        "distance": 26.32
      },
      {
        "name": "Bellevue",
        "distance": 24.76
      },
      {
        "name": "Redmond",
        "distance": 26.32
      },
      {
        "name": "Kirkland",
        "distance": 15.54
      },
      {
        "name": "Bothell",
        "distance": 8.94
      },
      {
        "name": "Woodinville",
        "distance": 14.22
      },
      {
        "name": "Renton",
        "distance": 38.33
      },
      {
        "name": "Issaquah",
        "distance": 26.32
      },
      {
        "name": "Port Orchard",
        "distance": 39.75
      },
      {
        "name": "Bremerton",
        "distance": 26.32
      },
      {
        "name": "Everett",
        "distance": 13.98
      },
      {
        "name": "Kingston",
        "distance": 26.32
      },
      {
        "name": "Mead",
        "distance": 26.32
      },
      {
        "name": "Mercer Island",
        "distance": 29.46
      },
      {
        "name": "Mill Creek",
        "distance": 8.35
      },
      {
        "name": "Montesano",
        "distance": 26.32
      },
      {
        "name": "Silverdale",
        "distance": 26.32
      },
      {
        "name": "Washington",
        "distance": 26.32
      }
    ]
  },
  "Port Orchard": {
    "lat": 47.531562,
    "lng": -122.638406,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Seattle",
        "distance": 23.96
      },
      {
        "name": "Bellevue",
        "distance": 38.47
      },
      {
        "name": "Redmond",
        "distance": 23.96
      },
      {
        "name": "Kirkland",
        "distance": 39.6
      },
      {
        "name": "Bothell",
        "distance": 34.74
      },
      {
        "name": "Renton",
        "distance": 36.16
      },
      {
        "name": "Issaquah",
        "distance": 23.96
      },
      {
        "name": "Lynnwood",
        "distance": 39.75
      },
      {
        "name": "Tacoma",
        "distance": 36.73
      },
      {
        "name": "Bremerton",
        "distance": 23.96
      },
      {
        "name": "Kingston",
        "distance": 23.96
      },
      {
        "name": "Mead",
        "distance": 23.96
      },
      {
        "name": "Mercer Island",
        "distance": 31.55
      },
      {
        "name": "Montesano",
        "distance": 23.96
      },
      {
        "name": "Silverdale",
        "distance": 23.96
      },
      {
        "name": "Washington",
        "distance": 23.96
      }
    ]
  },
  "Tacoma": {
    "lat": 47.221994,
    "lng": -122.46805,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Renton",
        "distance": 37.61
      },
      {
        "name": "Port Orchard",
        "distance": 36.73
      },
      {
        "name": "Olympia",
        "distance": 31.13
      }
    ]
  },
  "Bellingham": {
    "lat": 48.733009,
    "lng": -122.466372,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Bremerton": {
    "lat": 47.580138,
    "lng": -122.327304,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Seattle",
        "distance": 0.0
      },
      {
        "name": "Bellevue",
        "distance": 14.59
      },
      {
        "name": "Redmond",
        "distance": 0.0
      },
      {
        "name": "Kirkland",
        "distance": 18.18
      },
      {
        "name": "Bothell",
        "distance": 17.81
      },
      {
        "name": "Woodinville",
        "distance": 23.53
      },
      {
        "name": "Renton",
        "distance": 16.09
      },
      {
        "name": "Issaquah",
        "distance": 0.0
      },
      {
        "name": "Lynnwood",
        "distance": 26.32
      },
      {
        "name": "Port Orchard",
        "distance": 23.96
      },
      {
        "name": "Kingston",
        "distance": 0.0
      },
      {
        "name": "Mead",
        "distance": 0.0
      },
      {
        "name": "Mercer Island",
        "distance": 8.34
      },
      {
        "name": "Mill Creek",
        "distance": 31.47
      },
      {
        "name": "Montesano",
        "distance": 0.0
      },
      {
        "name": "Silverdale",
        "distance": 0.0
      },
      {
        "name": "Washington",
        "distance": 0.0
      }
    ]
  },
  "Everett": {
    "lat": 47.937666,
    "lng": -122.26696,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Bellevue",
        "distance": 35.73
      },
      {
        "name": "Kirkland",
        "distance": 25.97
      },
      {
        "name": "Bothell",
        "distance": 22.22
      },
      {
        "name": "Woodinville",
        "distance": 22.03
      },
      {
        "name": "Lynnwood",
        "distance": 13.98
      },
      {
        "name": "Mill Creek",
        "distance": 9.91
      },
      {
        "name": "Port Hadlock-Irondale",
        "distance": 39.38
      }
    ]
  },
  "Kingston": {
    "lat": 47.580138,
    "lng": -122.327304,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Seattle",
        "distance": 0.0
      },
      {
        "name": "Bellevue",
        "distance": 14.59
      },
      {
        "name": "Redmond",
        "distance": 0.0
      },
      {
        "name": "Kirkland",
        "distance": 18.18
      },
      {
        "name": "Bothell",
        "distance": 17.81
      },
      {
        "name": "Woodinville",
        "distance": 23.53
      },
      {
        "name": "Renton",
        "distance": 16.09
      },
      {
        "name": "Issaquah",
        "distance": 0.0
      },
      {
        "name": "Lynnwood",
        "distance": 26.32
      },
      {
        "name": "Port Orchard",
        "distance": 23.96
      },
      {
        "name": "Bremerton",
        "distance": 0.0
      },
      {
        "name": "Mead",
        "distance": 0.0
      },
      {
        "name": "Mercer Island",
        "distance": 8.34
      },
      {
        "name": "Mill Creek",
        "distance": 31.47
      },
      {
        "name": "Montesano",
        "distance": 0.0
      },
      {
        "name": "Silverdale",
        "distance": 0.0
      },
      {
        "name": "Washington",
        "distance": 0.0
      }
    ]
  },
  "Mead": {
    "lat": 47.580138,
    "lng": -122.327304,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Seattle",
        "distance": 0.0
      },
      {
        "name": "Bellevue",
        "distance": 14.59
      },
      {
        "name": "Redmond",
        "distance": 0.0
      },
      {
        "name": "Kirkland",
        "distance": 18.18
      },
      {
        "name": "Bothell",
        "distance": 17.81
      },
      {
        "name": "Woodinville",
        "distance": 23.53
      },
      {
        "name": "Renton",
        "distance": 16.09
      },
      {
        "name": "Issaquah",
        "distance": 0.0
      },
      {
        "name": "Lynnwood",
        "distance": 26.32
      },
      {
        "name": "Port Orchard",
        "distance": 23.96
      },
      {
        "name": "Bremerton",
        "distance": 0.0
      },
      {
        "name": "Kingston",
        "distance": 0.0
      },
      {
        "name": "Mercer Island",
        "distance": 8.34
      },
      {
        "name": "Mill Creek",
        "distance": 31.47
      },
      {
        "name": "Montesano",
        "distance": 0.0
      },
      {
        "name": "Silverdale",
        "distance": 0.0
      },
      {
        "name": "Washington",
        "distance": 0.0
      }
    ]
  },
  "Mercer Island": {
    "lat": 47.560207,
    "lng": -122.220142,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Seattle",
        "distance": 8.34
      },
      {
        "name": "Bellevue",
        "distance": 9.29
      },
      {
        "name": "Redmond",
        "distance": 8.34
      },
      {
        "name": "Kirkland",
        "distance": 17.03
      },
      {
        "name": "Bothell",
        "distance": 20.52
      },
      {
        "name": "Woodinville",
        "distance": 22.31
      },
      {
        "name": "Renton",
        "distance": 9.1
      },
      {
        "name": "Issaquah",
        "distance": 8.34
      },
      {
        "name": "Lynnwood",
        "distance": 29.46
      },
      {
        "name": "Port Orchard",
        "distance": 31.55
      },
      {
        "name": "Bremerton",
        "distance": 8.34
      },
      {
        "name": "Kingston",
        "distance": 8.34
      },
      {
        "name": "Mead",
        "distance": 8.34
      },
      {
        "name": "Mill Creek",
        "distance": 32.67
      },
      {
        "name": "Montesano",
        "distance": 8.34
      },
      {
        "name": "Silverdale",
        "distance": 8.34
      },
      {
        "name": "Washington",
        "distance": 8.34
      }
    ]
  },
  "Mill Creek": {
    "lat": 47.854,
    "lng": -122.22118,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Seattle",
        "distance": 31.47
      },
      {
        "name": "Bellevue",
        "distance": 25.88
      },
      {
        "name": "Redmond",
        "distance": 31.47
      },
      {
        "name": "Kirkland",
        "distance": 16.15
      },
      {
        "name": "Bothell",
        "distance": 13.87
      },
      {
        "name": "Woodinville",
        "distance": 12.14
      },
      {
        "name": "Issaquah",
        "distance": 31.47
      },
      {
        "name": "Lynnwood",
        "distance": 8.35
      },
      {
        "name": "Bremerton",
        "distance": 31.47
      },
      {
        "name": "Everett",
        "distance": 9.91
      },
      {
        "name": "Kingston",
        "distance": 31.47
      },
      {
        "name": "Mead",
        "distance": 31.47
      },
      {
        "name": "Mercer Island",
        "distance": 32.67
      },
      {
        "name": "Montesano",
        "distance": 31.47
      },
      {
        "name": "Silverdale",
        "distance": 31.47
      },
      {
        "name": "Washington",
        "distance": 31.47
      }
    ]
  },
  "Montesano": {
    "lat": 47.580138,
    "lng": -122.327304,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Seattle",
        "distance": 0.0
      },
      {
        "name": "Bellevue",
        "distance": 14.59
      },
      {
        "name": "Redmond",
        "distance": 0.0
      },
      {
        "name": "Kirkland",
        "distance": 18.18
      },
      {
        "name": "Bothell",
        "distance": 17.81
      },
      {
        "name": "Woodinville",
        "distance": 23.53
      },
      {
        "name": "Renton",
        "distance": 16.09
      },
      {
        "name": "Issaquah",
        "distance": 0.0
      },
      {
        "name": "Lynnwood",
        "distance": 26.32
      },
      {
        "name": "Port Orchard",
        "distance": 23.96
      },
      {
        "name": "Bremerton",
        "distance": 0.0
      },
      {
        "name": "Kingston",
        "distance": 0.0
      },
      {
        "name": "Mead",
        "distance": 0.0
      },
      {
        "name": "Mercer Island",
        "distance": 8.34
      },
      {
        "name": "Mill Creek",
        "distance": 31.47
      },
      {
        "name": "Silverdale",
        "distance": 0.0
      },
      {
        "name": "Washington",
        "distance": 0.0
      }
    ]
  },
  "Olympia": {
    "lat": 47.051258,
    "lng": -122.794133,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Tacoma",
        "distance": 31.13
      }
    ]
  },
  "Pasco": {
    "lat": 46.241765,
    "lng": -119.124871,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Port Hadlock-Irondale": {
    "lat": 48.03324,
    "lng": -122.776478,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Everett",
        "distance": 39.38
      }
    ]
  },
  "Silverdale": {
    "lat": 47.580138,
    "lng": -122.327304,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Seattle",
        "distance": 0.0
      },
      {
        "name": "Bellevue",
        "distance": 14.59
      },
      {
        "name": "Redmond",
        "distance": 0.0
      },
      {
        "name": "Kirkland",
        "distance": 18.18
      },
      {
        "name": "Bothell",
        "distance": 17.81
      },
      {
        "name": "Woodinville",
        "distance": 23.53
      },
      {
        "name": "Renton",
        "distance": 16.09
      },
      {
        "name": "Issaquah",
        "distance": 0.0
      },
      {
        "name": "Lynnwood",
        "distance": 26.32
      },
      {
        "name": "Port Orchard",
        "distance": 23.96
      },
      {
        "name": "Bremerton",
        "distance": 0.0
      },
      {
        "name": "Kingston",
        "distance": 0.0
      },
      {
        "name": "Mead",
        "distance": 0.0
      },
      {
        "name": "Mercer Island",
        "distance": 8.34
      },
      {
        "name": "Mill Creek",
        "distance": 31.47
      },
      {
        "name": "Montesano",
        "distance": 0.0
      },
      {
        "name": "Washington",
        "distance": 0.0
      }
    ]
  },
  "Touchet": {
    "lat": 46.038214,
    "lng": -118.676107,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Washington": {
    "lat": 47.580138,
    "lng": -122.327304,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Seattle",
        "distance": 0.0
      },
      {
        "name": "Bellevue",
        "distance": 14.59
      },
      {
        "name": "Redmond",
        "distance": 0.0
      },
      {
        "name": "Kirkland",
        "distance": 18.18
      },
      {
        "name": "Bothell",
        "distance": 17.81
      },
      {
        "name": "Woodinville",
        "distance": 23.53
      },
      {
        "name": "Renton",
        "distance": 16.09
      },
      {
        "name": "Issaquah",
        "distance": 0.0
      },
      {
        "name": "Lynnwood",
        "distance": 26.32
      },
      {
        "name": "Port Orchard",
        "distance": 23.96
      },
      {
        "name": "Bremerton",
        "distance": 0.0
      },
      {
        "name": "Kingston",
        "distance": 0.0
      },
      {
        "name": "Mead",
        "distance": 0.0
      },
      {
        "name": "Mercer Island",
        "distance": 8.34
      },
      {
        "name": "Mill Creek",
        "distance": 31.47
      },
      {
        "name": "Montesano",
        "distance": 0.0
      },
      {
        "name": "Silverdale",
        "distance": 0.0
      }
    ]
  },
  "wellington": {
    "lat": -41.288795,
    "lng": 174.777211,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Kolkata": {
    "lat": 22.572646,
    "lng": 88.363895,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Jawa Barat": {
    "lat": -6.88919,
    "lng": 107.640472,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "birmingham": {
    "lat": 52.479699,
    "lng": -1.902691,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "perton",
        "distance": 24.08
      },
      {
        "name": "rugeley",
        "distance": 31.13
      },
      {
        "name": "tamworth",
        "distance": 22.23
      },
      {
        "name": "royal-leamington-spa",
        "distance": 32.51
      },
      {
        "name": "warwick",
        "distance": 29.51
      },
      {
        "name": "atherstone-on-stour",
        "distance": 38.42
      },
      {
        "name": "barford",
        "distance": 32.93
      },
      {
        "name": "marston-green",
        "distance": 10.1
      },
      {
        "name": "wolverhampton",
        "distance": 19.18
      },
      {
        "name": "the-royal-town-of-sutton-coldfield",
        "distance": 10.97
      },
      {
        "name": "walsall",
        "distance": 12.87
      }
    ]
  },
  "marston-green": {
    "lat": 52.466881,
    "lng": -1.755095,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "perton",
        "distance": 33.54
      },
      {
        "name": "rugeley",
        "distance": 34.7
      },
      {
        "name": "tamworth",
        "distance": 19.09
      },
      {
        "name": "royal-leamington-spa",
        "distance": 24.52
      },
      {
        "name": "warwick",
        "distance": 21.18
      },
      {
        "name": "atherstone-on-stour",
        "distance": 34.66
      },
      {
        "name": "barford",
        "distance": 26.62
      },
      {
        "name": "southam",
        "distance": 34.43
      },
      {
        "name": "birmingham",
        "distance": 10.1
      },
      {
        "name": "wolverhampton",
        "distance": 28.4
      },
      {
        "name": "the-royal-town-of-sutton-coldfield",
        "distance": 12.03
      },
      {
        "name": "walsall",
        "distance": 20.2
      }
    ]
  },
  "wolverhampton": {
    "lat": 52.584765,
    "lng": -2.127567,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "perton",
        "distance": 5.26
      },
      {
        "name": "rugeley",
        "distance": 23.27
      },
      {
        "name": "tamworth",
        "distance": 29.74
      },
      {
        "name": "birmingham",
        "distance": 19.18
      },
      {
        "name": "marston-green",
        "distance": 28.4
      },
      {
        "name": "the-royal-town-of-sutton-coldfield",
        "distance": 20.54
      },
      {
        "name": "walsall",
        "distance": 9.82
      }
    ]
  },
  "the-royal-town-of-sutton-coldfield": {
    "lat": 52.566324,
    "lng": -1.825186,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "perton",
        "distance": 25.76
      },
      {
        "name": "rugeley",
        "distance": 22.69
      },
      {
        "name": "tamworth",
        "distance": 11.62
      },
      {
        "name": "royal-leamington-spa",
        "distance": 36.31
      },
      {
        "name": "warwick",
        "distance": 32.88
      },
      {
        "name": "barford",
        "distance": 38.65
      },
      {
        "name": "birmingham",
        "distance": 10.97
      },
      {
        "name": "marston-green",
        "distance": 12.03
      },
      {
        "name": "wolverhampton",
        "distance": 20.54
      },
      {
        "name": "walsall",
        "distance": 10.81
      }
    ]
  },
  "walsall": {
    "lat": 52.584795,
    "lng": -1.982269,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "perton",
        "distance": 14.99
      },
      {
        "name": "rugeley",
        "distance": 19.61
      },
      {
        "name": "tamworth",
        "distance": 20.18
      },
      {
        "name": "birmingham",
        "distance": 12.87
      },
      {
        "name": "marston-green",
        "distance": 20.2
      },
      {
        "name": "wolverhampton",
        "distance": 9.82
      },
      {
        "name": "the-royal-town-of-sutton-coldfield",
        "distance": 10.81
      }
    ]
  },
  "szczecin": {
    "lat": 53.430182,
    "lng": 14.550962,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "horsham": {
    "lat": 51.063027,
    "lng": -0.329503,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "brighton",
        "distance": 29.96
      },
      {
        "name": "hove",
        "distance": 27.29
      },
      {
        "name": "brighton-and-hove",
        "distance": 27.29
      },
      {
        "name": "falmer",
        "distance": 27.56
      },
      {
        "name": "croydon",
        "distance": 38.96
      },
      {
        "name": "aldershot",
        "distance": 36.66
      },
      {
        "name": "farnborough",
        "distance": 39.03
      },
      {
        "name": "guildford",
        "distance": 25.64
      },
      {
        "name": "godalming",
        "distance": 24.15
      },
      {
        "name": "surrey-research-park",
        "distance": 28.06
      },
      {
        "name": "woking",
        "distance": 32.68
      },
      {
        "name": "caterham",
        "distance": 30.05
      },
      {
        "name": "epsom",
        "distance": 30.28
      },
      {
        "name": "farnham",
        "distance": 36.83
      },
      {
        "name": "walton-on-thames",
        "distance": 36.42
      },
      {
        "name": "shoreham-by-sea",
        "distance": 25.95
      }
    ]
  },
  "shoreham-by-sea": {
    "lat": 50.832231,
    "lng": -0.274672,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "brighton",
        "distance": 9.53
      },
      {
        "name": "hove",
        "distance": 8.89
      },
      {
        "name": "brighton-and-hove",
        "distance": 8.89
      },
      {
        "name": "eastbourne",
        "distance": 39.54
      },
      {
        "name": "falmer",
        "distance": 13.7
      },
      {
        "name": "hailsham",
        "distance": 38.6
      },
      {
        "name": "horsham",
        "distance": 25.95
      }
    ]
  },
  "Huntington": {
    "lat": 38.420743,
    "lng": -82.44874,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "leeds": {
    "lat": 53.797418,
    "lng": -1.543794,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "bradford",
        "distance": 13.67
      },
      {
        "name": "castleford",
        "distance": 14.9
      },
      {
        "name": "methley",
        "distance": 11.17
      },
      {
        "name": "ossett",
        "distance": 13.45
      },
      {
        "name": "wakefield",
        "distance": 13.1
      }
    ]
  },
  "bradford": {
    "lat": 53.794423,
    "lng": -1.751919,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "leeds",
        "distance": 13.67
      },
      {
        "name": "castleford",
        "distance": 27.38
      },
      {
        "name": "methley",
        "distance": 23.42
      },
      {
        "name": "ossett",
        "distance": 17.33
      },
      {
        "name": "wakefield",
        "distance": 20.86
      }
    ]
  },
  "castleford": {
    "lat": 53.72623,
    "lng": -1.351722,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "sheffield",
        "distance": 39.21
      },
      {
        "name": "doncaster",
        "distance": 26.81
      },
      {
        "name": "leeds",
        "distance": 14.9
      },
      {
        "name": "bradford",
        "distance": 27.38
      },
      {
        "name": "methley",
        "distance": 3.96
      },
      {
        "name": "ossett",
        "distance": 15.74
      },
      {
        "name": "wakefield",
        "distance": 10.69
      }
    ]
  },
  "methley": {
    "lat": 53.735581,
    "lng": -1.409851,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "sheffield",
        "distance": 39.67
      },
      {
        "name": "doncaster",
        "distance": 29.87
      },
      {
        "name": "leeds",
        "distance": 11.17
      },
      {
        "name": "bradford",
        "distance": 23.42
      },
      {
        "name": "castleford",
        "distance": 3.96
      },
      {
        "name": "ossett",
        "distance": 12.7
      },
      {
        "name": "wakefield",
        "distance": 8.18
      }
    ]
  },
  "ossett": {
    "lat": 53.678054,
    "lng": -1.576595,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "sheffield",
        "distance": 33.81
      },
      {
        "name": "doncaster",
        "distance": 33.95
      },
      {
        "name": "leeds",
        "distance": 13.45
      },
      {
        "name": "bradford",
        "distance": 17.33
      },
      {
        "name": "castleford",
        "distance": 15.74
      },
      {
        "name": "methley",
        "distance": 12.7
      },
      {
        "name": "wakefield",
        "distance": 5.29
      }
    ]
  },
  "wakefield": {
    "lat": 53.682954,
    "lng": -1.496729,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "sheffield",
        "distance": 33.66
      },
      {
        "name": "doncaster",
        "distance": 29.86
      },
      {
        "name": "leeds",
        "distance": 13.1
      },
      {
        "name": "bradford",
        "distance": 20.86
      },
      {
        "name": "castleford",
        "distance": 10.69
      },
      {
        "name": "methley",
        "distance": 8.18
      },
      {
        "name": "ossett",
        "distance": 5.29
      }
    ]
  },
  "Leederville": {
    "lat": -31.935301,
    "lng": 115.843812,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Cape Town": {
    "lat": -33.92883,
    "lng": 18.41722,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Bacolod": {
    "lat": 10.876075,
    "lng": 122.306715,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "salisbury": {
    "lat": 51.069061,
    "lng": -1.795413,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "bournemouth",
        "distance": 35.67
      },
      {
        "name": "southampton",
        "distance": 33.06
      },
      {
        "name": "trowbridge",
        "distance": 39.49
      }
    ]
  },
  "trowbridge": {
    "lat": 51.316157,
    "lng": -2.202432,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "bath",
        "distance": 13.11
      },
      {
        "name": "corston",
        "distance": 17.66
      },
      {
        "name": "bristol",
        "distance": 31.39
      },
      {
        "name": "avon",
        "distance": 39.78
      },
      {
        "name": "salisbury",
        "distance": 39.49
      },
      {
        "name": "winsley",
        "distance": 7.41
      }
    ]
  },
  "winsley": {
    "lat": 51.354316,
    "lng": -2.289933,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "bath",
        "distance": 5.7
      },
      {
        "name": "corston",
        "distance": 10.58
      },
      {
        "name": "bristol",
        "distance": 24.02
      },
      {
        "name": "avon",
        "distance": 32.39
      },
      {
        "name": "trowbridge",
        "distance": 7.41
      }
    ]
  },
  "Madison": {
    "lat": 43.080274,
    "lng": -89.430959,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Middleton",
        "distance": 6.81
      },
      {
        "name": "Waunakee",
        "distance": 12.57
      }
    ]
  },
  "Benton": {
    "lat": 44.88506,
    "lng": -91.897147,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Middleton": {
    "lat": 43.096292,
    "lng": -89.511956,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Madison",
        "distance": 6.81
      },
      {
        "name": "Waunakee",
        "distance": 11.6
      }
    ]
  },
  "Waunakee": {
    "lat": 43.191962,
    "lng": -89.45484,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "Madison",
        "distance": 12.57
      },
      {
        "name": "Middleton",
        "distance": 11.6
      }
    ]
  },
  "Wisconsin": {
    "lat": 44.307136,
    "lng": -88.309362,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "wrexham": {
    "lat": 53.044898,
    "lng": -2.992159,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "mold",
        "distance": 16.81
      }
    ]
  },
  "Cheyenne": {
    "lat": 41.139981,
    "lng": -104.820246,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "Yerevan": {
    "lat": 40.177711,
    "lng": 44.512623,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "zagorje-ob-savi": {
    "lat": 46.134217,
    "lng": 14.995271,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "ljubljana",
        "distance": 38.8
      },
      {
        "name": "ljubljana-dobrunje",
        "distance": 33.46
      }
    ]
  },
  "samobor": {
    "lat": 45.803279,
    "lng": 15.717923,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "zagreb",
        "distance": 19.55
      },
      {
        "name": "zapresic",
        "distance": 9.36
      }
    ]
  },
  "zapresic": {
    "lat": 45.860119,
    "lng": 15.807008,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "zagreb",
        "distance": 13.77
      },
      {
        "name": "samobor",
        "distance": 9.36
      }
    ]
  },
  "Hangzhou": {
    "lat": 30.248963,
    "lng": 120.205234,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "turany": {
    "lat": 49.116398,
    "lng": 19.039154,
    "has_nearby_city": false,
    "nearby_cities": []
  },
  "den-haag": {
    "lat": 52.079984,
    "lng": 4.311346,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "hoofddorp",
        "distance": 36.12
      },
      {
        "name": "schiphol-rijk",
        "distance": 38.0
      },
      {
        "name": "rotterdam",
        "distance": 20.71
      },
      {
        "name": "capelle-aan-den-ijssel",
        "distance": 25.16
      },
      {
        "name": "delft",
        "distance": 9.62
      },
      {
        "name": "hoogvliet-rotterdam",
        "distance": 24.15
      },
      {
        "name": "sassenheim",
        "distance": 21.48
      }
    ]
  },
  "zurich": {
    "lat": 47.374449,
    "lng": 8.541042,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "schlieren",
        "distance": 7.67
      }
    ]
  },
  "schlieren": {
    "lat": 47.396515,
    "lng": 8.444486,
    "has_nearby_city": true,
    "nearby_cities": [
      {
        "name": "lucerne",
        "distance": 39.88
      },
      {
        "name": "zurich",
        "distance": 7.67
      }
    ]
  }
}
