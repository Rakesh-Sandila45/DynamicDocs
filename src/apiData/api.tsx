import axios from "axios";
import {
  addDocumentsApiUrl,
  getDocumentsNameUrl,
  loginApiUrl,
  registerApiUrl,
  removeDocumetApiUrl,
} from "./endpoints";

export async function loginApi(payload: any) {
  const { data } = await axios.post(loginApiUrl(), payload);
  return data;
}

export async function registerApi(payload: any) {
  const { data } = await axios.post(registerApiUrl(), payload);
  return data;
}

export async function getDocumentsNameApi(mobile: any) {
  const { data } = await axios.get(getDocumentsNameUrl(mobile));
  return data;
}

export async function addDocumentsApi(payload: any) {
  const { data } = await axios.post(addDocumentsApiUrl(), payload);
  return data;
}
export async function removeDocumentApi(
  mobile: string,
  docName: string,
  adminMobile: any
) {
  const { data } = await axios.post(
    removeDocumetApiUrl(mobile, docName, adminMobile)
  );
  return data;
}
