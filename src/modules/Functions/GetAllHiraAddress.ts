import { getAddressObject } from '../GetAddressObject'

export const getAllHiraAddress = async (zipcode: string) => {
  const response = await getAddressObject(zipcode)
  return response ? response.hira : ''
}
