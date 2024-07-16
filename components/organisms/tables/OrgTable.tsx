import { ReactNode, isValidElement, FunctionComponent } from "react";
import MolPagination from "@/components/molecules/paginations/MolPagination";
import dynamic from "next/dynamic";
import { If } from "react-haiku";
const PenaIcon = dynamic(() => import("@unpad/penaui-icons"));

function objectKeys<T extends {}>(obj: T) {
  return Object.keys(obj).map((objKey) => objKey as keyof T);
}

export type getType = string | Symbol | number | boolean | ReactNode | any;

function isSetType(value: any): value is getType {
  return (
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean" ||
    typeof value === "symbol"
  );
}

interface TableProps {
  items: any;
  headers: any;
  pagination: boolean;
  limitPage: number;
  totalData?: number;
  currentPage?: number;
  onClickPrevPage?: any;
  onClickNextPage?: any;
  onPageChange?: any;
  noDataMessage?: string;
  costumHeader?: any;
  costumItemHeader?: any;
  rounded?: boolean;
}

export function renderRow(item: getType, index: number) {
  return (
    <tr key={index}>
      {objectKeys(item).map((itemProperty, index) => {
        if (isValidElement(item[itemProperty])) {
          return <td key={`body${index + item}`}>{item[itemProperty]}</td>;
        }
        return (
          <td key={`body${index + item}`} className={"text-left text-sm"}>
            {isSetType(item[itemProperty]) ? item[itemProperty] : ""}
          </td>
        );
      })}
    </tr>
  );
}

const OrgTable: FunctionComponent<TableProps> = (props) => {
  const {
    headers,
    items = [],
    pagination,
    limitPage = 10,
    totalData = 100,
    currentPage = 1,
    onClickPrevPage = null,
    onClickNextPage = null,
    onPageChange = null,
    noDataMessage = "No data records found",
    costumHeader = null,
    rounded = true,
    costumItemHeader = null
  } = props;

  return (
    <div className="flex flex-col relative">
      <div
        className={`${rounded ? "Tables" : "Tables-Not-Rounded"} ${
          items.length === 0 ? "table-fixed" : ""
        }`}
      >
        <If isTrue={costumItemHeader}>{costumItemHeader}</If>
        <div className="overflow-auto w-full h-full">
          <table>
            <thead>
              <If isTrue={!costumHeader}>
                <tr>
                  {Object.keys(headers).map((headerValue) => {
                    return (
                      <th className={"text-gray-600 text-sm"} key={`header${headerValue}`}>
                        {headers[headerValue]}
                      </th>
                    );
                  })}
                </tr>
              </If>
              <If isTrue={!!costumHeader}>{costumHeader}</If>
            </thead>
            <tbody>
              <If isTrue={items.length !== 0}>
                {items.map((item: any, index: number) => {
                  if (index < limitPage) {
                    return renderRow(item, index);
                  }
                })}
              </If>
            </tbody>
          </table>
        </div>
        <If isTrue={items.length === 0}>
          <div className="flex flex-col space-y-4 w-full border-t-1 border-b-0 border-r-0 border-l-0 border py-8 justify-center items-center">
            <div className="rounded-full bg-primary-50 p-2">
              <div className="rounded-full bg-primary-100 p-2">
                <i className="stroke-2 stroke-primary-600">
                  <PenaIcon name={"AlertCircle"} width={30} />
                </i>
              </div>
            </div>
            <p className="mx-2 text-gray-900 font-semibold text-sm">{noDataMessage}</p>
          </div>
        </If>
        <If isTrue={pagination}>
          <div className="pagination bottom-0 left-0">
            <MolPagination
              currentPage={currentPage}
              dataPerPage={limitPage}
              onClickNextPage={onClickNextPage}
              onClickPrevPage={onClickPrevPage}
              onPageChange={onPageChange}
              totalData={totalData}
            />
          </div>
        </If>
      </div>
    </div>
  );
};

export default OrgTable;
