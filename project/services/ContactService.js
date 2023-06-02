import { request } from "../base/HTTP";
import HttpMethod from "../constants/HttpMethod";

export async function submitContactUsForm(data) {
    return await request(`wp-json/contact-form-7/v1/contact-forms/5/feedback`, data, HttpMethod.POST);
}