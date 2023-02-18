import React, { useState } from "react";

export function AddCategory({ onNewCategory }: any) {
  const [value, setvalue] = useState("");

  const onchangeHandler = ({ target }: any) => {
    console.log(target.value);

    setvalue(target.value);
  };

  const onSubmitHandler = (event: any) => {
    console.log(event);

    event.preventDefault();

    if (value.trim().length <= 1) return;

    // onNewCategory(1(c) => [...c, value]);

    onNewCategory(value.trim())

    setvalue("");
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type="text"
        placeholder="buscar gift"
        value={value}
        onChange={onchangeHandler}
      />
    </form>
  );
}
