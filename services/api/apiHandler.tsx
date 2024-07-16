import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { FormDataHandler } from "@/services/helpers/FormDataHandler";
import { statusCodeHandler } from "@/services/api/statusCodeHandler";

const methodList = ["POST", "GET", "PUT", "DELETE"] as const;

type typeMethod = (typeof methodList)[number];
type typeRequestOptions = {
  method: typeMethod;
  headers: any;
  body: any;
};

function handleResponse(response: any) {
  return response.text().then((text: any) => {
    if (response.status === 429) {
      toast.error("Terjadi kesalahan pada server! Mohon tunggu beberapa saat dan coba lagi!", {
        position: "top-right",
        theme: "colored",
        hideProgressBar: false,
        autoClose: 3000
      });
      return Promise.reject(`${response.status}`);
    }
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (Object.keys(statusCodeHandler(data)).includes(String(response.status))) {
        const { showToast, handle } = statusCodeHandler(data)[response.status];
        showToast();
        if (handle) {
          handle();
        }
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}

export function submitHandle(url: string, method: typeMethod, body?: any, formData?: boolean) {
  const urlReq = process.env.NEXT_PUBLIC_BASE_URL + url;
  let bodyData: FormData | null = null;
  let header = null;
  if (formData) {
    bodyData = FormDataHandler(body);
    header = {
      "X-Content-Type-Options": "nosniff",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      authorization: `Bearer ${Cookies.get("token")}`
    };
  } else {
    header = {
      "Content-Type": "application/json",
      "X-Content-Type-Options": "nosniff",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      authorization: `Bearer ${Cookies.get("token")}`
    };
  }
  const requestOptions: typeRequestOptions = {
    method,
    headers: header,
    body: formData ? bodyData : JSON.stringify(body)
  };

  return fetch(urlReq, requestOptions).then(handleResponse);
}

export default submitHandle;
