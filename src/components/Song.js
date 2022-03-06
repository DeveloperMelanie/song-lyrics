export default function Song({ lyric }) {
    if (lyric.length === 0) return null

    return (
        <>
            <h2>Letra de la canción</h2>
            <p className='lyric'>{lyric}</p>
        </>
    )
}
