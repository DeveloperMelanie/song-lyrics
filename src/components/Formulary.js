import { useState } from 'react'

export default function Formulary({ setLyricsSearch }) {
    const [search, setSearch] = useState({
        artist: '',
        song: '',
    })
    const [error, setError] = useState(false)

    const { artist, song } = search

    const updateState = e => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        if (artist.trim() === '' || song.trim() === '') {
            setError(true)
            return
        }
        setError(false)

        setLyricsSearch(search)
    }

    return (
        <div className='bg-info'>
            {error && (
                <p className='alert alert-danger text-center p-2'>
                    Todos los campos son obligatorios
                </p>
            )}
            <div className='container'>
                <div className='row'>
                    <form
                        className='col card text-white bg-transparent mb-5 pt-5 pb-2'
                        onSubmit={handleSubmit}
                    >
                        <fieldset>
                            <legend className='text-center'>
                                Buscador de letras de canciones
                            </legend>

                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className='form-group'>
                                        <label htmlFor='artist'>Artista</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            name='artist'
                                            id='artist'
                                            placeholder='Nombre del artista'
                                            value={artist}
                                            onChange={updateState}
                                        />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='form-group'>
                                        <label htmlFor='song'>Canción</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            name='song'
                                            id='song'
                                            placeholder='Nombre de la canción'
                                            value={song}
                                            onChange={updateState}
                                        />
                                    </div>
                                </div>
                            </div>

                            <button
                                type='submit'
                                className='btn btn-primary float-right'
                            >
                                Buscar
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    )
}
