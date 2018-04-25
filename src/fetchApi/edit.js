import axios from 'axios'
import {DOMAIN} from '../constants.js'
export function fetch_design_templates(){
    return axios.post(`${DOMAIN}/DYApi/template_items`)
}