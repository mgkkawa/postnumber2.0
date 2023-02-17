import { getAddressObject } from '../GetAddressObject'

export const getAllAddress = async (zipcode: string) => {
  const response = await getAddressObject(zipcode)
  return response ? response.address : ''
}
