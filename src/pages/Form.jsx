import React, { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';

const Form = () => {

    const [data, setData] = useState('');
    const [options, setOptions] = useState([]);

    const textData = (e) => {
        setData(e.target.value);
    }

    const handleClick = () => {
        if (data.trim().length > 0) {
            let buttonData = [...options, data]
            setOptions(buttonData)
            setData('');
        }

    }

    return (
        <div className="container-fluid bg-violet-200 w-full text-center justify-between">
            <div className="row gap-5 w-full bg-white">
                <div className="col-md-6 flex flex-col gap-4">
                    <input className='border border-black p-3' type="text" />
                    <input className='border border-black p-3' type="text" />
                </div>
            </div>
            <div className="row w-full mt-5">
                <div className="col-md-6 flex flex-row gap-5">
                    <input className='border border-black p-3' type="text" />
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Select
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">TextBox</Dropdown.Item>
                            <Dropdown.Item href="#/action-1">Radio Button</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">CheckBox</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Dropdown</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
            <div className="row">

                <div className="col-md-6">
                    <input value={data} onChange={textData} type="text" />

                    <button className='' onClick={handleClick} >Add</button>
                </div>
            </div>
            {options.length > 0 && options.map((value) => (
                <div>
                    <h1>
                        {value}
                    </h1>
                </div>
            )
            )}
            <div className="row">
                <div className="col-md-6">
                    <button className='btn btn-success'>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Form;