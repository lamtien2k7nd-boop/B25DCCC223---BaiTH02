const cities = [
  {
    "id": "hn",
    "name": "Hà Nội",
    "type": "thanh_pho_truc_thuoc_trung_uong",
    "latitude": 21.0285,
    "longitude": 105.8542
  },
  {
    "id": "hp",
    "name": "Hải Phòng",
    "type": "thanh_pho_truc_thuoc_trung_uong",
    "latitude": 20.8449,
    "longitude": 106.6881
  },
  {
    "id": "hue",
    "name": "Huế",
    "type": "thanh_pho_truc_thuoc_trung_uong",
    "latitude": 16.4637,
    "longitude": 107.5909
  },
  {
    "id": "db",
    "name": "Đà Nẵng",
    "type": "thanh_pho_truc_thuoc_trung_uong",
    "latitude": 16.0544,
    "longitude": 108.2022
  },
  {
    "id": "hcm",
    "name": "Thành phố Hồ Chí Minh",
    "type": "thanh_pho_truc_thuoc_trung_uong",
    "latitude": 10.8231,
    "longitude": 106.6297
  },
  {
    "id": "ct",
    "name": "Cần Thơ",
    "type": "thanh_pho_truc_thuoc_trung_uong",
    "latitude": 10.0452,
    "longitude": 105.7469
  },
  {
    "id": "tq",
    "name": "Tuyên Quang",
    "type": "tinh",
    "latitude": 21.8236,
    "longitude": 105.2142
  },
  {
    "id": "cb",
    "name": "Cao Bằng",
    "type": "tinh",
    "latitude": 22.6657,
    "longitude": 106.257
  },
  {
    "id": "lc",
    "name": "Lào Cai",
    "type": "tinh",
    "latitude": 22.4856,
    "longitude": 103.9707
  },
  {
    "id": "lch",
    "name": "Lai Châu",
    "type": "tinh",
    "latitude": 22.3964,
    "longitude": 103.4582
  },
  {
    "id": "dn",
    "name": "Điện Biên",
    "type": "tinh",
    "latitude": 21.386,
    "longitude": 103.023
  },
  {
    "id": "sl",
    "name": "Sơn La",
    "type": "tinh",
    "latitude": 21.327,
    "longitude": 103.914
  },
  {
    "id": "ls",
    "name": "Lạng Sơn",
    "type": "tinh",
    "latitude": 21.8537,
    "longitude": 106.761
  },
  {
    "id": "tn",
    "name": "Thái Nguyên",
    "type": "tinh",
    "latitude": 21.5944,
    "longitude": 105.8482
  },
  {
    "id": "pt",
    "name": "Phú Thọ",
    "type": "tinh",
    "latitude": 21.3089,
    "longitude": 105.6049
  },
  {
    "id": "bn",
    "name": "Bắc Ninh",
    "type": "tinh",
    "latitude": 21.1861,
    "longitude": 106.0763
  },
  {
    "id": "qn",
    "name": "Quảng Ninh",
    "type": "tinh",
    "latitude": 20.95,
    "longitude": 107.073
  },
  {
    "id": "hy",
    "name": "Hưng Yên",
    "type": "tinh",
    "latitude": 20.6464,
    "longitude": 106.0511
  },
  {
    "id": "nb",
    "name": "Ninh Bình",
    "type": "tinh",
    "latitude": 20.2506,
    "longitude": 105.9745
  },
  {
    "id": "th",
    "name": "Thanh Hóa",
    "type": "tinh",
    "latitude": 19.8067,
    "longitude": 105.7852
  },
  {
    "id": "na",
    "name": "Nghệ An",
    "type": "tinh",
    "latitude": 18.6796,
    "longitude": 105.6813
  },
  {
    "id": "ht",
    "name": "Hà Tĩnh",
    "type": "tinh",
    "latitude": 18.3428,
    "longitude": 105.9057
  },
  {
    "id": "qt",
    "name": "Quảng Trị",
    "type": "tinh",
    "latitude": 16.8163,
    "longitude": 107.1003
  },
  {
    "id": "qng",
    "name": "Quảng Ngãi",
    "type": "tinh",
    "latitude": 15.1205,
    "longitude": 108.7923
  },
  {
    "id": "gl",
    "name": "Gia Lai",
    "type": "tinh",
    "latitude": 13.9833,
    "longitude": 108.0
  },
  {
    "id": "dl",
    "name": "Đắk Lắk",
    "type": "tinh",
    "latitude": 12.6667,
    "longitude": 108.05
  },
  {
    "id": "kh",
    "name": "Khánh Hòa",
    "type": "tinh",
    "latitude": 12.2388,
    "longitude": 109.1967
  },
  {
    "id": "ld",
    "name": "Lâm Đồng",
    "type": "tinh",
    "latitude": 11.9404,
    "longitude": 108.4583
  },
  {
    "id": "dnai",
    "name": "Đồng Nai",
    "type": "tinh",
    "latitude": 10.9453,
    "longitude": 106.8243
  },
  {
    "id": "tninh",
    "name": "Tây Ninh",
    "type": "tinh",
    "latitude": 11.31,
    "longitude": 106.098
  },
  {
    "id": "dt",
    "name": "Đồng Tháp",
    "type": "tinh",
    "latitude": 10.36,
    "longitude": 106.36
  },
  {
    "id": "vl",
    "name": "Vĩnh Long",
    "type": "tinh",
    "latitude": 10.2537,
    "longitude": 105.9722
  },
  {
    "id": "ag",
    "name": "An Giang",
    "type": "tinh",
    "latitude": 10.3864,
    "longitude": 105.4352
  },
  {
    "id": "cm",
    "name": "Cà Mau",
    "type": "tinh",
    "latitude": 9.1769,
    "longitude": 105.1524
  }
]
export default cities;