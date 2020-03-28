import house_0 from './../images/houses/house-0.jpg';
import house_1 from './../images/houses/house-1.jpg';
import house_2 from './../images/houses/house-2.jpg';
import house_3 from './../images/houses/house-3.jpg';
import house_4 from './../images/houses/house-4.jpg';
import house_5 from './../images/houses/house-5.jpg';
import house_6 from './../images/houses/house-6.jpg';
import house_7 from './../images/houses/house-7.jpg';
import house_8 from './../images/houses/house-8.jpg';
import house_9 from './../images/houses/house-9.jpg';

import int_1 from './../images/house_inside/int_1.jpg';
import int_2 from './../images/house_inside/int_2.jpg';
import int_3 from './../images/house_inside/int_3.jpg';




const DemoHouse = [{
    "_id": "5e26d7a28a8bcf97a3689147",
    "index": 0,
    "latitude": -64.44756,
    "longitude": 100.526474,
    "bed_room": 2,
    "area": 592,
    "bathroom": 2,
    "price": 2665,
    image: house_0
  },
  {
    "_id": "5e26d7a28cbafa54c1281c9c",
    "index": 1,
    "latitude": -71.557641,
    "longitude": -20.146796,
    "bed_room": 4,
    "area": 298,
    "bathroom": 3,
    "price": 2594,
    image: house_1
  },
  {
    "_id": "5e26d7a2a94aa5574cf3d78b",
    "index": 2,
    "latitude": -42.68385,
    "longitude": 89.360317,
    "bed_room": 3,
    "area": 559,
    "bathroom": 1,
    "price": 4350,
    image: house_2
  },
  {
    "_id": "5e26d7a25c24c222b1613afc",
    "index": 3,
    "latitude": -40.204801,
    "longitude": -7.223212,
    "bed_room": 5,
    "area": 399,
    "bathroom": 1,
    "price": 1223,
    image: house_3
  },
  {
    "_id": "5e26d7a23e3233fdb1cbc543",
    "index": 4,
    "latitude": -44.67663,
    "longitude": -65.067468,
    "bed_room": 4,
    "area": 746,
    "bathroom": 1,
    "price": 2059,
    image: house_4
  },
  {
    "_id": "5e26d7a28260e8a8514aa9bd",
    "index": 5,
    "latitude": 79.360355,
    "longitude": 169.912827,
    "bed_room": 5,
    "area": 299,
    "bathroom": 4,
    "price": 4188,
    image: house_5
  },
  {
    "_id": "5e26d7a25bcb4ca3ac7741af",
    "index": 6,
    "latitude": -18.23906,
    "longitude": 57.96954,
    "bed_room": 4,
    "area": 457,
    "bathroom": 3,
    "price": 4318,
    image: house_6
  },
  {
    "_id": "5e26d7a24887f9838453e14d",
    "index": 7,
    "latitude": 5.359077,
    "longitude": 177.621273,
    "bed_room": 2,
    "area": 934,
    "bathroom": 1,
    "price": 1661,
    image: house_7
  },
  {
    "_id": "5e26d7a260d350f61b45f08d",
    "index": 8,
    "latitude": -47.16535,
    "longitude": -23.032943,
    "bed_room": 4,
    "area": 116,
    "bathroom": 1,
    "price": 4292,
    image: house_8
  },
  {
    "_id": "5e26d7a2251dd0007f77bccc",
    "index": 9,
    "latitude": 62.197506,
    "longitude": 164.065872,
    "bed_room": 2,
    "area": 541,
    "bathroom": 1,
    "price": 2719,
    image: house_9
  }
]

const Real_House_Data = [{
    "_id": "5e27cd82cd7b6657945af34b",
    "index": 0,
    "email": "dominiquedonovan@daisu.com",
    "phone": "+91 (903) 574-2430",
    "address": "640 Waldorf Court, Vowinckel, Vermont, 5263",
    "latitude": -58.058707,
    "longitude": -94.223876,
    large_img: house_0,
    small_img:[int_1, int_2, int_3],
    dogs: 'allowed',
    cats: 'allowed',
    bathroom:2,
    deposit: 400,
    area:300,

  },
  {
    "_id": "5e27cd829d17088fb158d4e6",
    "index": 1,
    "email": "dominiquedonovan@daisu.com",
    "phone": "+91 (947) 557-3086",
    "address": "249 Amber Street, Oley, Virgin Islands, 8633",
    "latitude": -27.650729,
    "longitude": 4.636703,
    large_img: house_1,
    small_img:[int_1, int_2, int_3],
    dogs: 'allowed',
    cats: 'allowed',
    bathroom:2,
    deposit: 400,
    area:300
  },
  {
    "_id": "5e27cd8267ac017cdf5205c6",
    "index": 2,
    "email": "dominiquedonovan@daisu.com",
    "phone": "+91 (938) 559-3665",
    "address": "298 Hicks Street, Omar, New Hampshire, 586",
    "latitude": -65.356549,
    "longitude": -161.290236,
    large_img: house_2,
    small_img:[int_1, int_2, int_3],
    dogs: 'allowed',
    cats: 'allowed',
    bathroom:2,
    deposit: 400,
    area:300
  },
  {
    "_id": "5e27cd827c3d82d41acfcc39",
    "index": 3,
    "email": "dominiquedonovan@daisu.com",
    "phone": "+91 (980) 411-3485",
    "address": "689 Onderdonk Avenue, Floriston, South Carolina, 8447",
    "latitude": -60.465546,
    "longitude": 53.800193,
    large_img: house_3,
    small_img:[int_1, int_2, int_3],
    dogs: 'allowed',
    cats: 'allowed',
    bathroom:2,
    deposit: 400,
    area:300
  },
  {
    "_id": "5e27cd82a556e98c2a50a14b",
    "index": 4,
    "email": "dominiquedonovan@daisu.com",
    "phone": "+91 (844) 438-2164",
    "address": "301 Aviation Road, Greenfields, Virginia, 1997",
    "latitude": -50.833865,
    "longitude": -103.814013,
    large_img: house_4,
    small_img:[int_1, int_2, int_3],
    dogs: 'allowed',
    cats: 'allowed',
    bathroom:2,
    deposit: 400,
    area:300
  },
  {
    "_id": "5e27cd82b8969791b4e5a1e5",
    "index": 5,
    "email": "dominiquedonovan@daisu.com",
    "phone": "+91 (917) 448-3241",
    "address": "986 Linwood Street, Kirk, Maine, 5521",
    "latitude": -31.085298,
    "longitude": -90.734374,
    large_img: house_5,
    small_img:[int_1, int_2, int_3],
    dogs: 'allowed',
    cats: 'allowed',
    bathroom:2,
    deposit: 400,
    area:300
  },
  {
    "_id": "5e27cd820052167b00a4117b",
    "index": 6,
    "email": "dominiquedonovan@daisu.com",
    "phone": "+91 (995) 402-2405",
    "address": "761 Railroad Avenue, Berwind, Connecticut, 1313",
    "latitude": 27.374518,
    "longitude": 109.002119,
    large_img: house_6,
    small_img:[int_1, int_2, int_3],
    dogs: 'allowed',
    cats: 'allowed',
    bathroom:2,
    deposit: 400,
    area:300
  },
  {
    "_id": "5e27cd82ffd6dec24cf57fb9",
    "index": 7,
    "email": "dominiquedonovan@daisu.com",
    "phone": "+91 (802) 596-2024",
    "address": "727 Louisa Street, Kipp, Pennsylvania, 286",
    "latitude": -35.811526,
    "longitude": -114.838312,
    large_img: house_7,
    small_img:[int_1, int_2, int_3],
    dogs: 'allowed',
    cats: 'allowed',
    bathroom:2,
    deposit: 400,
    area:300
  },
  {
    "_id": "5e27cd82f41dfc3303d12715",
    "index": 8,
    "email": "dominiquedonovan@daisu.com",
    "phone": "+91 (966) 551-3539",
    "address": "544 Dodworth Street, Celeryville, Alaska, 5663",
    "latitude": 47.594215,
    "longitude": -138.062126,
    large_img: house_8,
    small_img:[int_1, int_2, int_3],
    dogs: 'allowed',
    cats: 'allowed',
    bathroom:2,
    deposit: 400,
    area:300
  },
  {
    "_id": "5e27cd82b771f4f8d4e32b5c",
    "index": 9,
    "email": "dominiquedonovan@daisu.com",
    "phone": "+91 (812) 512-2671",
    "address": "471 Suydam Street, Westmoreland, New York, 9261",
    "latitude": -32.813334,
    "longitude": -116.446086,
    large_img: house_9,
    small_img:[int_1, int_2, int_3],
    dogs: 'allowed',
    cats: 'allowed',
    bathroom:2,
    deposit: 400,
    area:300
  }
]

export {
  DemoHouse,
  Real_House_Data
};