import { FunctionComponent, ReactNode } from "react";
import { If } from "react-haiku";

type PropsMolModalSuccess = {
  show: boolean;
  onClickYes?: any;
  showNo?: boolean;
  showYes?: boolean;
  title: string;
  description?: string | ReactNode;
  descNo?: string;
  descYes?: string;
  onClickNo?: any;
  submitting?: boolean;
  onClickClose?: any;
  isHtml?: boolean;
  width?: string;
};

const MolModalSuccess: FunctionComponent<PropsMolModalSuccess> = (props) => {
  const {
    show,
    onClickYes = () => {},
    onClickNo = () => {
      onClickClose();
    },
    showYes = true,
    showNo = true,
    descNo = "Tutup",
    descYes = "Konfirm",
    submitting = false,
    title,
    description = "",
    onClickClose = () => {},
    isHtml = false,
    width = "lg:w-1/4"
  } = props;
  return (
    <If isTrue={show}>
      <div className="modal-alert">
        <div className={`modal-alert-box ${width} relative lg:mx-0 mx-4`}>
          <div className="flex flex-row space-x-4 mt-2 w-full">
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="-ml-2"
            >
              <rect x="4" y="4" width="48" height="48" rx="24" fill="#D1FADF" />
              <path
                d="M23.5 28L26.5 31L32.5 25M38 28C38 33.5228 33.5228 38 28 38C22.4772 38 18 33.5228 18 28C18 22.4772 22.4772 18 28 18C33.5228 18 38 22.4772 38 28Z"
                stroke="#039855"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect x="4" y="4" width="48" height="48" rx="24" stroke="#ECFDF3" strokeWidth="8" />
            </svg>
            <button
              className="btn btn-sm btn-ghost absolute right-4 top-4 hover:bg-gray-300"
              type="button"
              onClick={onClickClose}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 1L1 13M1 1L13 13"
                  stroke="#667085"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col mt-2 space-y-2">
            <span className="text-gray-900 font-semibold">{title}</span>
            <If isTrue={!isHtml}>
              <span className="text-gray-600 font-thin">{description}</span>
            </If>
            <If isTrue={isHtml}>{description}</If>
          </div>
          <div className="flex w-full lg:flex-row flex-col-reverse lg:space-x-4 mt-8">
            <If isTrue={showNo}>
              <button
                type="button"
                className="btn flex-1 bg-gray-25 hover:bg-gray-300 border border-gray-300 font-bold  normal-case text-gray-700 mt-4 lg:mt-0"
                onClick={onClickNo}
              >
                {descNo}
              </button>
            </If>
            <If isTrue={showYes}>
              <button
                type="button"
                className={`btn flex-1 bg-primary-600 hover:bg-primary-700 border-none text-gray-25 font-bold  normal-case lg:ml-auto`}
                onClick={onClickYes}
              >
                <If isTrue={submitting}>
                  <span className="loading loading-spinner"></span>
                </If>
                {!submitting ? descYes : ""}
              </button>
            </If>
          </div>
        </div>
      </div>
    </If>
  );
};

export default MolModalSuccess;
