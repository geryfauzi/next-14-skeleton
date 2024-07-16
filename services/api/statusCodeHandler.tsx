import { toast } from "react-toastify";

export function statusCodeHandler(data: any): any {
  return {
    422: {
      showToast: () =>
        toast.warning(data?.data?.[0]?.value || "Unprocessable Content", {
          theme: "colored",
          hideProgressBar: false,
          autoClose: 3000
        })
    },
    409: {
      showToast: () =>
        toast.warning(data?.message || "Data Already Exist!", {
          theme: "colored",
          hideProgressBar: false,
          autoClose: 3000
        })
    },
    401: {
      showToast: () =>
        toast.warning(data.message || "Unauthorized!", {
          theme: "colored",
          hideProgressBar: false,
          autoClose: 3000
        }),
      handle: () => {
        sessionStorage.clear();
        localStorage.clear();
        window.location.replace(`${process.env.NEXT_PUBLIC_APP_URL}/auth/login`);
      }
    },
    400: {
      showToast: () =>
        toast.warning(data.message || "submit failed", {
          theme: "colored",
          hideProgressBar: false,
          autoClose: 3000
        })
    },
    500: {
      showToast: () =>
        toast.warning(data?.message || "Terjadi Kesalahan Pada Server", {
          theme: "colored",
          hideProgressBar: false,
          autoClose: 3000
        })
    },
    503: {
      showToast: () =>
        toast.warning(data?.message || "Terjadi Kesalahan Pada Server", {
          theme: "colored",
          hideProgressBar: false,
          autoClose: 3000
        })
    },
    408: {
      showToast: () =>
        toast.warning(data.message || "Request Time Out!", {
          theme: "colored",
          hideProgressBar: false,
          autoClose: 3000
        })
    },
    403: {
      showToast: () =>
        toast.warning(data.message || "Unauthorized!", {
          theme: "colored",
          hideProgressBar: false,
          autoClose: 3000
        })
      // handle: () => {
      //   sessionStorage.clear();
      //   localStorage.clear();
      //   window.location.replace("/auth/login");
      // }
    }
  };
}
