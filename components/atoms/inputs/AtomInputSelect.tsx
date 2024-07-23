import { FunctionComponent } from "react";
import { If } from "react-haiku";
import Select from "react-select";
import { Controller, Control } from "react-hook-form";

type OptionType = { label: string; value: string };

type PropsAtomInputSelect = {
  id: any;
  label?: string;
  data: OptionType[];
  control: Control<any>;
  placeholder?: string;
  footerNote?: string;
  labelClass?: string;
  readonly?: boolean;
  loading?: boolean;
  required?: boolean;
  dropdownMode?: boolean;
  formatOptionLabel?: any;
  isClearable?: boolean;
  noOptionsMessage?: any;
  rules?: any;
  onInputChange?: any;
};

const AtomInputSelect: FunctionComponent<PropsAtomInputSelect> = (props) => {
  const {
    id,
    label = "",
    data,
    control,
    placeholder = "Select a value",
    footerNote = "",
    labelClass = "text-sm text-gray-700 font-semibold",
    readonly = false,
    loading = false,
    required = false,
    dropdownMode = false,
    formatOptionLabel = null,
    isClearable = false,
    noOptionsMessage = () => {
      return <span>no options</span>;
    },
    onInputChange = () => {},
    rules
  } = props;

  return (
    <div>
      <If isTrue={!!label}>
        <div className="flex flex-row space-x-1">
          <label className={`${labelClass}`} htmlFor={id}>
            {label}
          </label>
          <If isTrue={required}>
            <span className="text-red-500 -mt-1">*</span>
          </If>
        </div>
      </If>
      <div className={`h-12 w-full ${label ? "mt-2" : ""} shadow-sm cursor-pointer`}>
        <Controller
          name={id}
          control={control}
          rules={rules}
          render={({ field, fieldState: { error } }) => (
            <>
              <Select
                {...field}
                inputId={id}
                options={data}
                placeholder={placeholder}
                isLoading={loading}
                isDisabled={readonly}
                menuPosition={"fixed"}
                formatOptionLabel={formatOptionLabel}
                isClearable={isClearable}
                noOptionsMessage={noOptionsMessage}
                value={data.find((option) => option.value === field.value) || null}
                onChange={(option: { value: any }) => field.onChange(option?.value ?? "")}
                className={`w-full hover:border-primary border border-gray-300 font-light ${
                  dropdownMode ? "reactSelectDropdown" : "reactSelectToolTip"
                } ${error ? "border-red-500" : ""} ${dropdownMode ? "rounded-lg" : "rounded-md"}`}
                classNamePrefix=""
                onInputChange={onInputChange}
              />
              {error && <p className="text-red-500 text-xs mt-2">{error.message}</p>}
            </>
          )}
        />
      </div>
      <If isTrue={!!footerNote}>
        <p className="text-xs my-2"> {footerNote}</p>
      </If>
    </div>
  );
};

export default AtomInputSelect;
