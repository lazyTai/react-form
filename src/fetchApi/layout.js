import axios from 'axios'
import {DOMAIN} from '../constants.js'
export function  fetch_get_menu(params){
    return axios.post(`${DOMAIN}/DYApi/get_menu`);
}