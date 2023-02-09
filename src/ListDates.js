import React from 'react'
// import { useState } from 'react';
import Radios from './Radios';
const ListDates = props => {

    const { list, setList } = props;
    // const [isRadio, setIsRadio] = useState('');

    const onChangeStatus = () => {
        const updateList = list.map(item => ({
            ...item
        }));
        setList(updateList);
    };

    // const onCheckChange = (e) => {
    //     setIsRadio(e.target.value);
    // }


    return (
        <>
            {list.length ?
                list.map((item, i) => {
                    const onClickRemoveItem = () => {
                        setList(list => list.filter((date) => date !== item));
                    };
                    return (
                        <div className='list-dates'>
                            <table className="table">
                                <tbody>
                                    {/* <div className="input-cont" id={i}> */}
                                    <tr>
                                        <th>
                                            <span className='date-text' onChange={onChangeStatus} >{item.dateFinal}</span>
                                        </th>
                                        {/* <input type="radio" onChange={onCheckChange} value={1} checked={isRadio === '1'} />
                                    Guardia
                                    <input type="radio" onChange={onCheckChange} value={2} checked={isRadio === '2'} />
                                    Dia de permiso */}
                                        <td>
                                            <Radios />
                                        </td>
                                        <td>
                                            <button type="button" className="btn btn-danger" onClick={onClickRemoveItem}> Remove </button>
                                        </td>
                                    </tr>
                                    {/* </div> */}
                                </tbody>
                            </table>
                        </div>
                    )
                })
                : <div className='no-data'>{"No Dates Assigned"}</div>}
        </>
    )
}

export default ListDates;