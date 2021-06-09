import React, { useState } from "react";


export const UseInput = (initial_value: any) =>
{
    const [value, set_value] = useState(initial_value);

    const on_change = (e: React.ChangeEvent<HTMLInputElement>) =>
    {
        set_value(e.target.value);
    }

    return { value, on_change }
}