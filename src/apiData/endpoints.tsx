const baseURL = process.env.NEXT_PUBLIC_API_URL;

export function loginApiUrl() {
  return `${baseURL}/login`;
}

export function registerApiUrl() {
  return `${baseURL}/register`;
}

export function getDocumentsNameUrl(mobile: any) {
  return `${baseURL}/documents/${mobile}`;
}

export function addDocumentsApiUrl() {
  return `${baseURL}/documents/add`;
}

export function removeDocumetApiUrl(
  mobile: string,
  docName: string,
  adminMobile: any
) {
  return `${baseURL}/documents/remove/${adminMobile}/${mobile}/${docName}`;
}
