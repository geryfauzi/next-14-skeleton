import { FunctionComponent } from "react";
import DOMPurify from "isomorphic-dompurify";
import { If } from "react-haiku";
type PropsMolModalConfirm = {
  show: boolean;
  onClickYes?: any;
  title: string;
  description?: string;
  descNo?: string;
  descYes?: string;
  onClickNo?: any;
  submitting?: boolean;
  onClickClose?: any;
  isHtml?: boolean;
};
const MolModalConfirm: FunctionComponent<PropsMolModalConfirm> = (props) => {
  const {
    show,
    onClickClose = () => {},
    onClickNo = onClickClose,
    onClickYes = () => {},
    descYes = "Ya",
    descNo = "Batal",
    title,
    description = "",
    submitting = false,
    isHtml = false
  } = props;
  return (
    <If isTrue={show}>
      <div className="modal-alert">
        <div className="modal-alert-box lg:w-1/4 relative lg:mx-0 mx-4">
          <div className="flex flex-row space-x-4 mt-2 w-full">
            <svg
              width="56"
              height="57"
              viewBox="0 0 56 57"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="4" y="4.5" width="48" height="48" rx="24" fill="#FEF0C7" />
              <path
                d="M28 32.5V28.5M28 24.5H28.01M38 28.5C38 34.0228 33.5228 38.5 28 38.5C22.4772 38.5 18 34.0228 18 28.5C18 22.9772 22.4772 18.5 28 18.5C33.5228 18.5 38 22.9772 38 28.5Z"
                stroke="#DC6803"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect x="4" y="4.5" width="48" height="48" rx="24" stroke="#FFFAEB" strokeWidth="8" />
            </svg>

            <button
              className="btn btn-sm btn-ghost absolute right-4 top-4 hover:bg-gray-300 border-none"
              type="button"
              onClick={onClickClose}
              disabled={submitting}
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
            <If isTrue={isHtml}>
              <div
                className="overflow-ellipsis overflow-clip whitespace-pre-line text-gray-600 text-justify"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(description, {
                    USE_PROFILES: { html: true }
                  })
                }}
              />
            </If>
            <If isTrue={!isHtml}>
              <span className="text-gray-600 font-light">{description}</span>
            </If>
          </div>
          <div className="flex w-full lg:flex-row flex-col-reverse lg:space-x-4 mt-8">
            <button
              type="button"
              className="btn flex-1 bg-gray-25 hover:bg-gray-300 border border-gray-300 font-bold  normal-case text-gray-700 mt-4 lg:mt-0"
              onClick={onClickNo}
              disabled={submitting}
            >
              {descNo}
            </button>
            <button
              type="button"
              className={`btn flex-1 bg-primary-600 hover:bg-primary-700 border-none text-gray-25 font-bold  normal-case lg:ml-auto`}
              onClick={onClickYes}
              disabled={submitting}
            >
              <If isTrue={submitting}>
                <span className="loading loading-spinner"></span>
              </If>
              {!submitting ? descYes : ""}
            </button>
          </div>
        </div>
      </div>
    </If>
  );
};

export default MolModalConfirm;
