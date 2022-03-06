import { useState, useEffect } from 'react'
import translate from 'translate'

export default function Band({ band }) {
    if (Object.keys(band).length === 0) return null

    const [biography, setBiography] = useState('')

    const {
        strArtist,
        strArtistThumb,
        strGenre,
        strBiographyES,
        strBiographyEN,
        strFacebook,
        strTwitter,
        strLastFMChart,
    } = band

    useEffect(() => {
        const translateText = async () => {
            const spanish = await translate(strBiographyEN, { to: 'es' })
            setBiography(spanish)
        }
        !strBiographyES && translateText()
    }, [band])

    return (
        <div className='card border-light'>
            <div className='card-header bg-primary text-light font-weight-bold'>
                Información del artista
            </div>
            <div className='card-body'>
                <img src={strArtistThumb} alt={strArtist} />
                <p className='card-text'>
                    <span className='text-primary'>Género:</span> {strGenre}
                </p>
                <h2 className='card-text'>Biografía:</h2>
                <p className='card-text'>{strBiographyES || biography}</p>
                <p className='card-text'>
                    {strFacebook && (
                        <a
                            href={`https://${strFacebook}`}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <i className='fab fa-facebook'></i>
                        </a>
                    )}
                    {strTwitter !== '1' && (
                        <a
                            href={`https://${strTwitter}`}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <i className='fab fa-twitter'></i>
                        </a>
                    )}
                    {strLastFMChart && (
                        <a
                            href={`${strLastFMChart}`}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <i className='fab fa-lastfm'></i>
                        </a>
                    )}
                </p>
            </div>
        </div>
    )
}
