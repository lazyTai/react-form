import axios from 'axios'
import {DOMAIN} from '../constants.js'
import {message} from 'antd'

export function fetch_check_shop_name_repeat({shopName}) {
  return axios.get(`${DOMAIN}/DYApi/shops/name-check`,
  {
    params:{shopName}
  })
}

export function fetch_check_shop_url_repeat({shopUrlPath}) {
  return axios.get( `${DOMAIN}/DYApi/shops/url-check`,
  {
    params:{shopUrlPath:encodeURIComponent(shopUrlPath)}
  })
}

export function fetch_open_a_shop({shopName, shopUrlPath, currencyId, description}) {
  return axios.post(`${DOMAIN}/DYApi/shops/`, {shopName, shopUrlPath, currencyId, description})
}

export function fetch_update_store_desciption({
  edit_shop: {
    id,
    currencyId,
    description,
    isDefault
  }
}) {

  return axios.put(`${DOMAIN}/DYApi/shops/${id}`,
  {
    currencyId, description, isDefault
  })
}

export function fetch_shop_list({offset, limit}) {
  return axios.get(`${DOMAIN}/DYApi/shops?offset=${offset}&limit=${limit}`).catch(function (error) {
    if (error.response) {
            // console.log(error.response.data);
            // console.log(error.response.status);
            // console.log(error.response.headers);
            message.error(error.response.status)
            return false;
          }
        })
}

export function fetch_shop_get_one({shopId}) {
  return axios.get(`${DOMAIN}/DYApi/shops/${shopId}`)
}