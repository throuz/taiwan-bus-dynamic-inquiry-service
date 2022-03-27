const cities = [
  { en: 'Taipei', tw: '台北市' },
  { en: 'NewTaipei', tw: '新北市' },
  { en: 'Keelung', tw: '基隆市' },
  { en: 'Taoyuan', tw: '桃園市' },
  { en: 'Hsinchu', tw: '新竹市' },
  { en: 'HsinchuCounty', tw: '新竹縣' },
  { en: 'MiaoliCounty', tw: '苗栗縣' },
  { en: 'Taichung', tw: '台中市' },
  { en: 'NantouCounty', tw: '南投縣' },
  { en: 'ChanghuaCounty', tw: '彰化縣' },
  { en: 'YunlinCounty', tw: '雲林縣' },
  { en: 'Chiayi', tw: '嘉義市' },
  { en: 'ChiayiCounty', tw: '嘉義縣' },
  { en: 'Tainan', tw: '台南市' },
  { en: 'Kaohsiung', tw: '高雄市' },
  { en: 'PingtungCounty', tw: '屏東縣' },
  { en: 'TaitungCounty', tw: '台東縣' },
  { en: 'HualienCounty', tw: '花蓮縣' },
  { en: 'YilanCounty', tw: '宜蘭縣' },
  { en: 'PenghuCounty', tw: '澎湖縣' },
  { en: 'KinmenCounty', tw: '金門縣' },
  { en: 'LienchiangCounty', tw: '連江縣' }
]

const ENtoTW = city => {
  const index = cities.findIndex(({ en }) => en === city);
  return cities[index].tw;
};

export { cities, ENtoTW };