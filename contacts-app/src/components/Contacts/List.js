import React from 'react'
import Item from './Item'

import { contactSelectors } from '../../redux/contactSlice'
import { useSelector } from 'react-redux'

function List() {

    const contacts = useSelector(contactSelectors.selectAll)
    const total = useSelector(contactSelectors.selectTotal)

    return (
        <ul className='list'>
            {
                contacts.map(contact => (<Item key={contact.id} item={contact}/>))
            }
        </ul>
    )
}

export default List