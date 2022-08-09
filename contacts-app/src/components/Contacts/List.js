import React from 'react'
import Item from './Item'

import { contactSelectors, removeAllContact } from '../../redux/contactSlice'
import { useSelector, useDispatch } from 'react-redux'

function List() {

    const dispatch = useDispatch();

    const contacts = useSelector(contactSelectors.selectAll)
    const total = useSelector(contactSelectors.selectTotal)

    const handleDeleteAll = () => {
        if (window.confirm("Are you sure")) {
            dispatch(removeAllContact())
        }
    }

    return (
        <div>
            {
                total > 0 &&
                <div className='deleteBtnAll' onClick={handleDeleteAll}>
                    Delete All
                </div>
            }

            <ul className='list'>
                {
                    contacts.map(contact => (<Item key={contact.id} item={contact} />))
                }
            </ul>
        </div>
    )
}

export default List