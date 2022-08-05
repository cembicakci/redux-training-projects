import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { quotesSelector } from '../../redux/quotesSlice';

function QuoteDetail() {

    const { quote_id } = useParams();

    const items = useSelector(quotesSelector);

    const quote = items.find(item => item.quote_id === Number(quote_id))

    if(!quote){ // quote yoksa yönlendir
        return <Navigate to='/quotes' />
    }

    return (
        <div>
            <div>QuoteDetail</div>
            <pre>{JSON.stringify(quote, null, 2)}</pre>
        </div>
    )
}

export default QuoteDetail