export type Machine = {
  model: string
  count: number
  year: number
  description?: string
}

export type MeasurementDevice = {
  model: string
  count: number
  description: string
  year: number
}

export const cncMachines: Machine[] = [
  { model: 'STAR SB-20R', count: 4, year: 2016 },
  { model: 'STAR SB-20R', count: 1, year: 2018 },
  { model: 'STAR SR-20J', count: 1, year: 2016 },
  { model: 'STAR SR20J',  count: 1, year: 2020 },
  { model: 'STAR SR20-IV',count: 1, year: 2017 },
  { model: 'STAR SB-20R', count: 3, year: 2023 },
  { model: 'VAN MR20-V7', count: 6, year: 2022 },
  { model: 'TSUGAMI S206E-II',  count: 6, year: 2022 },
  { model: 'TSUGAMI B205E-III', count: 1, year: 2021 },
  { model: 'NOMURA NN-20JXB',   count: 1, year: 2019 },
  { model: 'NOMURA NN-32YBB',   count: 1, year: 2019 },
  { model: 'VAN MR38-V8',  count: 1, year: 2025 },
  { model: 'TSUGAMI SS32', count: 1, year: 2025 },
  { model: 'TCM 38H',      count: 1, year: 2025 },
]

export const additiveMachines = [
  {
    model: 'HBO Metal 3D Yazıcı (SLM)',
    description: 'Metal SLM, yüksek yoğunluklu kompleks parçalar',
    descriptionEn: 'Metal SLM, high-density complex parts',
    year: 2019,
  },
  {
    model: 'FORMLABS Polimer SLA',
    description: 'Yüksek yüzey kaliteli hassas prototip',
    descriptionEn: 'High surface quality precision prototype',
    year: 2019,
  },
]

export const measurementDevices: MeasurementDevice[] = [
  {
    model: 'RATIONAL WANHAO Video Ölçüm',
    count: 2,
    description: 'Temassız, yüksek doğruluklu ölçüm',
    year: 2023,
  },
  {
    model: 'VICIVISION Optik Ölçüm',
    count: 2,
    description: 'Hızlı, tekrarlanabilir optik ölçüm',
    year: 2023,
  },
  {
    model: 'QUICK SCOPE Optik Ölçüm',
    count: 1,
    description: 'Yüksek hassasiyetli kalite kontrol',
    year: 2015,
  },
]

export const toolGrindingMachines = [
  {
    model: 'META 5',
    count: 2,
    description: '5 eksen, kesici takım üretimi ve bileme',
    descriptionEn: '5-axis, cutting tool production and sharpening',
    year: 2022,
  },
]
