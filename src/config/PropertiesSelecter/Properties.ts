export const DROPDOWN_PROPS: {
  住所: 'address'
  都道府県: 'address1'
  市区町村: 'address2'
  町名番地: 'address3'
  住所かな: 'hira'
  都道府県かな: 'hira1'
  市区町村かな: 'hira2'
  町名番地かな: 'hira3'
  都道府県ｶﾅ: 'kana1'
  市区町村ｶﾅ: 'kana2'
  町名番地ｶﾅ: 'kana3'
  住所カナ: 'zenkana'
  都道府県カナ: 'zenkana1'
  市区町村カナ: 'zenkana2'
  町名番地カナ: 'zenkana3'
} = {
  住所: 'address',
  都道府県: 'address1',
  市区町村: 'address2',
  町名番地: 'address3',
  住所かな: 'hira',
  都道府県かな: 'hira1',
  市区町村かな: 'hira2',
  町名番地かな: 'hira3',
  都道府県ｶﾅ: 'kana1',
  市区町村ｶﾅ: 'kana2',
  町名番地ｶﾅ: 'kana3',
  住所カナ: 'zenkana',
  都道府県カナ: 'zenkana1',
  市区町村カナ: 'zenkana2',
  町名番地カナ: 'zenkana3',
}

export const PROPS_KEYS: [
  '住所',
  '都道府県',
  '市区町村',
  '町名番地',
  '住所かな',
  '都道府県かな',
  '市区町村かな',
  '町名番地かな',
  '住所カナ',
  '都道府県カナ',
  '市区町村カナ',
  '町名番地カナ',
  '都道府県ｶﾅ',
  '市区町村ｶﾅ',
  '町名番地ｶﾅ',
] = [
  '住所',
  '都道府県',
  '市区町村',
  '町名番地',
  '住所かな',
  '都道府県かな',
  '市区町村かな',
  '町名番地かな',
  '住所カナ',
  '都道府県カナ',
  '市区町村カナ',
  '町名番地カナ',
  '都道府県ｶﾅ',
  '市区町村ｶﾅ',
  '町名番地ｶﾅ',
]

export function PropertyItems() {
  return PROPS_KEYS.map(key => {
    return { value: DROPDOWN_PROPS[key], label: key }
  })
}
