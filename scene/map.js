const MAP4 = {
  '00': { t: 'start', n: ['01'], name: '碼頭起點' },
  '01': { t: 'mat', m: 'tai', sup: 1, n: ['02'] }, '02': { t: 'shop', n: ['03'] }, '03': { t: 'mat', m: 'tai', sup: 1, n: ['04'] },
  '04': { t: 'lucky', n: ['05A', '05B'], name: '高嶺岔口' },
  '05A': { t: 'mat', m: 'tai', sup: 2, n: ['06A'], name: '礦洞' }, '06A': { t: 'prank', n: ['07'], name: '落石' },
  '05B': { t: 'lucky', n: ['06B'], name: '官道' }, '06B': { t: 'shop', n: ['07'] },
  '07': { t: 'market', n: ['08'] },
  '08': { t: 'mat', m: 'you', sup: 1, n: ['09'] }, '09': { t: 'shrine', n: ['10'] }, '10': { t: 'mat', m: 'you', sup: 1, n: ['11'] },
  '11': { t: 'shop', n: ['12'] }, '12': { t: 'fortune', n: ['13A', '13B'], name: '釉坊岔口' },
  '13A': { t: 'shrine', n: ['14A'], name: '窯坡' }, '14A': { t: 'mat', m: 'you', sup: 1, n: ['15'] },
  '13B': { t: 'dock', n: ['14B'], name: '昌江渡口' }, '14B': { t: 'lucky', n: ['15'] },
  '15': { t: 'prank', n: ['16'] },
  '16': { t: 'mat', m: 'wen', sup: 1, n: ['17'] }, '17': { t: 'shop', n: ['18'] }, '18': { t: 'mat', m: 'wen', sup: 1, n: ['19'] },
  '19': { t: 'market', n: ['20'] }, '20': { t: 'shop', n: ['21A', '21B'], name: '畫坊岔口' },
  '21A': { t: 'mat', m: 'wen', sup: 1, n: ['22A'], name: '畫坊巷' }, '22A': { t: 'any', sup: 1, n: ['23'], name: '百料攤' },
  '21B': { t: 'market', n: ['23'], name: '長街（捷徑）' },
  '23': { t: 'shrine', n: ['00'] },
};
export { MAP4 };
