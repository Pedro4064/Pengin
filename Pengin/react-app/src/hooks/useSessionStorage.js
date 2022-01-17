import { useState } from 'react'

function useSessionStorage(key, initial_state) {
    const [value, setValue] = useState(sessionStorage.getItem(key) || initial_state);
    const setSessionValue = (new_value) => {
        setValue(new_value);
        sessionStorage.setItem(key, new_value);
    }

    return [value, setSessionValue];
}

export default useSessionStorage
