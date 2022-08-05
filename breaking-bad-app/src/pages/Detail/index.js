import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../../components/Loading';
import axios from 'axios';

function Detail() {

  const { char_id } = useParams();
  const [loading, setLoading] = useState(true);
  const [char, setChar] = useState();

  useEffect(() => {
    axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/characters/${char_id}`).then(res => res.data).then(data => setChar(data[0])).finally(() => setLoading(false));
  }, [char_id])

  console.log(char)
  return (
    <div>
      {
        loading && <Loading />
      }
      {
        char &&
        <div>
          <h1>{char.name}</h1>
          <img src={char.img} alt="" style={{ width: '50%' }}></img>
        </div>
      }
      {
        char &&
        (
          <pre>
            {JSON.stringify(char, null ,2)}
          </pre>
        )
      }
    </div>
  )
}

export default Detail