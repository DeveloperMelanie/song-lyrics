import { useState, useEffect } from 'react'
import axios from 'axios'

import Formulary from './components/Formulary'
import Song from './components/Song'
import Band from './components/Band'
import Spinner from './components/Spinner'

export default function App() {
    const [lyricsSearch, setLyricsSearch] = useState({})
    const [lyric, setLyric] = useState('')
    const [band, setBand] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (Object.keys(lyricsSearch).length === 0) return

        const fetchLyricsAPI = async () => {
            setLoading(true)

            const { artist, song } = lyricsSearch

            const lyricsUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`
            const bandUrl = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`

            const [lyric, band] = await Promise.all([
                axios(lyricsUrl),
                axios(bandUrl),
            ])

            setLyric(lyric.data.lyrics)
            setBand(band.data.artists[0])

            setLoading(false)
        }
        fetchLyricsAPI()
    }, [lyricsSearch])

    return (
        <>
            <Formulary setLyricsSearch={setLyricsSearch} />

            <div className='container mt-5 mb-5'>
                {loading ? (
                    <Spinner />
                ) : (
                    <div className='row'>
                        <div className='col-md-6'>
                            <Band band={band} />
                        </div>
                        <div className='col-md-6'>
                            <Song lyric={lyric} />
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
