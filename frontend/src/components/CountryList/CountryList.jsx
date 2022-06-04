import React, { useMemo, useState } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";

const CountryList = () => {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const changeHandler = (value) => {
    setValue(value);
    console.log(value.label);
  };

  return (
    <div>
      <div className="align-center">
        <Select
          className="w-80 mx-20"
          options={options}
          value={value}
          onChange={changeHandler}
        />
      </div>
      <div>

      </div>
      <div>
        <p></p>
      </div>
    </div>
  );
};

export default CountryList;
