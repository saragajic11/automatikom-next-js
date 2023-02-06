import { request } from "../base/HTTP";
import HttpMethod from "../constants/HttpMethod";

export async function submitContactUsForm(data) {
    return await request('contact-us/submit', data, HttpMethod.POST);
}