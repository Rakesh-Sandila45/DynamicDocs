import axios from "axios";
import { getFormTypesUrl, getTrackDownloadsUrl, getUserIDUrl } from "./endpoints";


export async function getUserIDApi(payload:any) {
  const { data } = await axios.post(getUserIDUrl(),payload);
  return data;
}

export async function getFromTypesApi(payload:any) {
  const { data } = await axios.post(getFormTypesUrl(),payload);
  return data;
}

export async function getTrackDocumentsApi(payload:any) {
  const { data } = await axios.get(getTrackDownloadsUrl(),payload);
  return data;
}