import { FunctionComponent } from "react";
import DOMPurify from "isomorphic-dompurify";
import { If } from "react-haiku";

type PropsMolModalSuccess = {
  show: boolean;
  onClickYes: any;
  descYes?: string;
  title: string;
  description?: string;
  onClickClose?: any;
  isHtml?: boolean;
};

const MolModalError: FunctionComponent<PropsMolModalSuccess> = (props) => {
  const {
    show,
    onClickYes = () => {},
    descYes = "Tutup",
    title,
    description = "",
    onClickClose = onClickYes,
    isHtml = false
  } = props;
  return (
    <If isTrue={show}>
      <div className="modal-alert">
        <div className="modal-alert-box lg:w-1/4 relative lg:mx-0 mx-4">
          <div className="flex flex-row space-x-4 mt-2 w-full">
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="4" y="4" width="48" height="48" rx="24" fill="#FEE4E2" />
              <path
                d="M28 24V28M28 32H28.01M38 28C38 33.5228 33.5228 38 28 38C22.4772 38 18 33.5228 18 28C18 22.4772 22.4772 18 28 18C33.5228 18 38 22.4772 38 28Z"
                stroke="#D92D20"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect x="4" y="4" width="48" height="48" rx="24" stroke="#FEF3F2" strokeWidth="8" />
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
          </div>
          <div className="flex w-full lg:flex-row mt-8">
            <button
              type="button"
              className={`btn flex-1 bg-error-600 hover:bg-error-700 border-none text-gray-25 font-bold  normal-case`}
              onClick={onClickYes}
            >
              {descYes}
            </button>
          </div>
        </div>
      </div>
    </If>
  );
};

export default MolModalError;
