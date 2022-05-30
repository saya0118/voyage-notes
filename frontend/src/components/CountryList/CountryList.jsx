import React, { useMemo, useState } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";

const CountryList = () => {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);
  const changeHandler = (value) => {
    setValue(value);
  };

  return (
    <div className="align-center">
      <Select
        className="w-80 mx-20"
        options={options}
        value={value}
        onChange={changeHandler}
      />
    </div>
  );
};

export default CountryList;
