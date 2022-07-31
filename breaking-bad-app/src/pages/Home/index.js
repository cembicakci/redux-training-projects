import React, { useEffect } from 'react'
import Masonry from 'react-masonry-css'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCharacters } from '../../redux/charactersSlice'
import './styles.css'
import Loading from '../../components/Loading'
import Error from '../../components/Error'
import { Link } from 'react-router-dom'

function Home() {
    const characters = useSelector(state => state.characters.items);
    const page = useSelector(state => state.characters.page);
    const hasNextPage = useSelector(state => state.characters.hasNextPage);
    const status = useSelector(state => state.characters.status);
    const error = useSelector(state => state.characters.error);
    const dispatch = useDispatch();

    useEffect(() => {
        //sadece component ilk kez çağrıldında çalışması için slice içerisinde 'status = idle' tanımı yapıldı. Aksi halde, sayfalar arası geçiş yaparken de useEffeft çalışmaya devam ediyor ve aynı verileri alt alta yüklüyor. Bu da key hatası almamıza sebep oluyor.
        if (status === 'idle') {
            dispatch(fetchCharacters())
        }
    }, [dispatch, status])

    if (status === 'failed') return <Error message={error} />

    return (
        <div>

            <Masonry
                breakpointCols={4}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {
                    characters.map(character => (
                        <div key={character.char_id}>
                            <Link to={`/char/${character.char_id}`}>
                                <img alt={character.name} src={character.img} className='character' />
                                <div className='char_name'>{character.name}</div>
                            </Link>
                        </div>
                    ))
                }
            </Masonry>

            {status === 'loading' && <Loading />}
            {hasNextPage && status !== 'loading' &&
                (<button className='btn' onClick={() => dispatch(fetchCharacters(page))}>Load More ({page})</button>)
            }

            {!hasNextPage &&
                <div>There is nothing to be shown.</div>
            }


        </div>
    )
}

export default Home