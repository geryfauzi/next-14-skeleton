import AtomButtonPagination from "@/components/atoms/buttons/AtomButtonPagination";
import { FunctionComponent } from "react";
import { For, If } from "react-haiku";

type PropsMolaPagination = {
  totalData: number;
  dataPerPage: number;
  currentPage: number;
  onClickPrevPage: any;
  onClickNextPage: any;
  onPageChange: any;
};

const MolPagination: FunctionComponent<PropsMolaPagination> = (props) => {
  const { totalData, dataPerPage, currentPage, onClickPrevPage, onClickNextPage, onPageChange } =
    props;
  const totalPages = Math.ceil(totalData / dataPerPage);
  //Cast Total Pages  to Int
  const arrayTotalPages: Array<any> = Array.apply(0, Array(totalPages || 0)).map((_item, index) => {
    return index + 1;
  });
  return (
    <div className="flex flex-row">
      <button
        className="flex-2 btn-sm btn-ghost normal-case btn gap-4 bg-transparent text-gray-600 lg:flex hidden font-semibold hover:bg-gray-50"
        type="button"
        onClick={() => {
          if (currentPage !== 1) onClickPrevPage();
        }}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.8334 7.00008H1.16669M1.16669 7.00008L7.00002 12.8334M1.16669 7.00008L7.00002 1.16675"
            stroke="#475467"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Previous
      </button>
      <button
        className="btn bg-gray-25 border border-gray-300 text-gray-600 lg:hidden flex rounded-xl shadow-md"
        type="button"
        onClick={() => {
          if (currentPage !== 1) onClickPrevPage();
        }}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.8333 7.00008H1.16666M1.16666 7.00008L6.99999 12.8334M1.16666 7.00008L6.99999 1.16675"
            stroke="#344054"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div className="lg:flex flex-row items-center justify-center justify-items-center flex-1 hidden">
        <If isTrue={totalPages <= 5}>
          <For
            each={arrayTotalPages}
            render={(item) => (
              <AtomButtonPagination
                label={item}
                onClick={() => {
                  if (currentPage !== item) {
                    onPageChange(item);
                  }
                }}
                active={currentPage === item}
              />
            )}
          />
        </If>
        <If isTrue={currentPage % 5 >= 0 && currentPage > 4 && currentPage + 2 < totalPages}>
          <div className="space-x-2">
            <AtomButtonPagination
              label={"1"}
              active={false}
              onClick={() => {
                onPageChange(1);
              }}
            />
            <AtomButtonPagination label={"..."} active={false} />
            <AtomButtonPagination
              label={currentPage - 1}
              active={false}
              onClick={() => {
                onPageChange(currentPage - 1);
              }}
            />
            <AtomButtonPagination
              label={currentPage}
              active={true}
              onClick={() => {
                onPageChange(currentPage);
              }}
            />
            <AtomButtonPagination
              label={currentPage + 1}
              active={false}
              onClick={() => {
                onPageChange(currentPage + 1);
              }}
            />
            <AtomButtonPagination label={"..."} active={false} />
            <AtomButtonPagination
              label={totalPages}
              active={false}
              onClick={() => {
                onPageChange(totalPages);
              }}
            />
          </div>
        </If>
        <If
          isTrue={
            currentPage % 5 >= 0 &&
            currentPage > 4 &&
            currentPage + 2 >= totalPages &&
            totalPages > 5
          }
        >
          <div className="space-x-2">
            <AtomButtonPagination
              label={"1"}
              active={false}
              onClick={() => {
                onPageChange(1);
              }}
            />
            <AtomButtonPagination label={"..."} active={false} />
            <AtomButtonPagination
              label={totalPages - 3}
              active={currentPage === totalPages - 3}
              onClick={() => {
                onPageChange(totalPages - 3);
              }}
            />
            <AtomButtonPagination
              label={totalPages - 2}
              active={currentPage === totalPages - 2}
              onClick={() => {
                onPageChange(totalPages - 2);
              }}
            />
            <AtomButtonPagination
              label={totalPages - 1}
              active={currentPage === totalPages - 1}
              onClick={() => {
                onPageChange(totalPages - 1);
              }}
            />
            <AtomButtonPagination
              label={totalPages}
              active={currentPage === totalPages}
              onClick={() => {
                onPageChange(totalPages);
              }}
            />
          </div>
        </If>
        <If isTrue={currentPage <= 4 && totalPages > 5}>
          <div className="space-x-2">
            <For
              each={arrayTotalPages}
              render={(item, index) => (
                <If isTrue={index < 5}>
                  <AtomButtonPagination
                    label={item}
                    active={currentPage === item}
                    onClick={() => {
                      onPageChange(item);
                    }}
                    key={item + 1}
                  />
                </If>
              )}
            />
            <AtomButtonPagination label={"..."} active={false} />
            <AtomButtonPagination
              label={totalPages}
              active={currentPage === totalPages}
              onClick={() => {
                onPageChange(totalPages);
              }}
            />
          </div>
        </If>
      </div>
      <span className="ml-auto my-auto text-gray-700 lg:hidden flex">
        Page {currentPage} of {totalPages}
      </span>
      <button
        className="flex-2 btn-sm btn-ghost normal-case btn gap-4 bg-transparent text-gray-600 lg:flex hidden font-semibold hover:bg-gray-50"
        type="button"
        onClick={() => {
          if (currentPage !== totalPages) onClickNextPage();
        }}
      >
        Next
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.16666 7.00008H12.8333M12.8333 7.00008L6.99999 1.16675M12.8333 7.00008L6.99999 12.8334"
            stroke="#475467"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button
        className="ml-auto btn bg-gray-25 border border-gray-300 text-gray-600 lg:hidden flex rounded-xl font-s shadow-md"
        type="button"
        onClick={() => {
          if (currentPage !== totalPages) onClickNextPage();
        }}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.16669 7.00008H12.8334M12.8334 7.00008L7.00002 1.16675M12.8334 7.00008L7.00002 12.8334"
            stroke="#344054"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default MolPagination;
