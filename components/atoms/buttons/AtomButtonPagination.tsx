import { FunctionComponent } from "react";

type PropsAtomButtonPagination = {
  active: boolean;
  onClick?: any;
  label: any;
};

const AtomButtonPagination: FunctionComponent<PropsAtomButtonPagination> = (
  props
) => {
  const { active, onClick, label } = props;
  return (
    <button
      className={`px-2 rounded-full btn btn-sm h-8 w-8 normal-case font-bold hover:bg-gray-50 ${
        active
          ? "bg-gray-50 shadow-md border-gray-50 text-gray-800"
          : "btn-ghost text-gray-600"
      }`}
      type="button"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default AtomButtonPagination;
