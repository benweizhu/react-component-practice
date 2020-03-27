import React, { useState } from "react";
import Input from "../../components/Form/Input";

import "./index.css"

export default function InputPage() {
  const [value, setValue] = useState('')
  return (
    <div>
      <Input value={value} onChange={(e) => { setValue(e.target.value) }} />
    </div>
  )
}
