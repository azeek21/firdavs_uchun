import axios from "axios";

const API = "https://fakestoreapi.com/"

export async function getAllCategories() {
    const res = axios.get(API + 'products/categories')
    return res.then(result => result.data)
}


export async function getFromCategory(category: string, limit: number) {

    const res = axios.get(API + 'products/category/' + category, limit ? {
        params : {
            limit: limit
        }
    } : {})

    return res.then(result => result.data)
}


export async function getProducts(limit:number) {
    const res = axios.get(API + 'products', limit ? {params: {limit: limit}} : {})

    return res.then(result => result.data)
}