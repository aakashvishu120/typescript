function printValue(value: unknown) {
  // Error: Object is of type 'unknown'
  //  cannot directly convert into uppercase either check type or typecast them
  // console.log(value.toUpperCase());

  // Option 1: Type Check
  if (typeof value === "string") {
    console.log(value.toUpperCase()); // Works fine
  }

  // Option 2: Type Cast
  const str = value as string;
  console.log(str.toUpperCase()); // Works fine (but you must be sure it's a string)
}


printValue("aakash")