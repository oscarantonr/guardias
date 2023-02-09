import React from 'react'
import { useState } from 'react';

const Radios = () => {

    const [isRadio, setIsRadio] = useState("option1");

    const handleOptionChange = (event) => {
        setIsRadio(event.target.value);
    }

    // render() {
    const options = [{ value: 'option1', label: 'Guardia' },
    { value: 'option2', label: 'Dia libre' }];

    return (
        <>
            {options.map((option, index) => (
                <div class="form-check">
                    <div className='input-compo' key={index}>
                        <input
                            className='form-check-input'
                            type="radio"
                            value={option.value}
                            checked={isRadio === option.value}
                            onChange={e => handleOptionChange(e)}
                        />
                        <label className="form-check-label">
                            {option.label}
                        </label>
                    </div>
                </div>
            ))}
        </>
    );
    // }
}

export default Radios;