import { useState } from "react";
export default function FavoriteCollege() {
  const [text, setCollege] = useState("universal");

  return (
    <>
      <h1>My favorite college is {text}!</h1>
      <button
        type="button"
        onClick={() => setCollege("UESC")}
      >Choose</button>
    </>
  )
}