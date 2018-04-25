import axios from 'axios'
import {
	DOMAIN
} from '../constants.js'
export function fetch_select_list() {
	return axios.get(`${DOMAIN}/DYApi/shops/select-list`)
}
//上传设计图 (取得供应商 upload token)
export function fetch_file_upload() {
	return axios.get(`${DOMAIN}/DYApi/designs/file-upload`)
}

/*原产品类别选项列表*/
export function fetch_categories() {
	return axios.get(`${DOMAIN}/DYApi/categories?endnode=true`)
}

//上传设计图 (提交档案到供应商)
export function fetch_file_to_supplier({
	upload_token,
	fileUrl
}) {
	return axios.post(`${DOMAIN}/DYApi/file-to-supplier`, {
		upload_token,
		fileUrl
	})
}
// 提交到下一步 (新增)
export function fetch_designs_add({
	title,
	shopId,
	categoryFilterId,
	designImage: {
		designSourceImage,
		width,
		height,
		fileSize,
		imageStorageId,
	}

}) {
	return axios.post(`${DOMAIN}/DYApi/designs?customizer=true`, {
		title,
		shopId,
		categoryFilterId,
		designImage: {
			designSourceImage,
			width,
			height,
			fileSize,
			imageStorageId,
		}
	})
}
//提交到下一步 (修改)
export function fetch_designs_edit({title,
	shopId,
	categoryFilterId,
	designImage: {
		designSourceImage,
		width,
		height,
		fileSize,
		imageStorageId
	}}) {
	return axios.put(`${DOMAIN}/DYApi/designs/{id}?customizer=true`, {
		title,
		shopId,
		categoryFilterId,
		designImage: {
			designSourceImage,
			width,
			height,
			fileSize,
			imageStorageId
		}
	})

}