import { useState } from "react";

export default function useFetch() {
  const [value, setValue] = useState();
  return [value, setValue];
}
