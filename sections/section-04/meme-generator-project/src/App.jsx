import { useEffect, useState } from "react"
import Header from "./components/header"

export default function App() {
    const [memes, setMemes] = useState([])
    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })
    
    function handleChange(event) {
        const {value, name} = event.currentTarget
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    function handleGetNewMeme() {
        const randomMemeIdx = Math.floor(Math.random() * memes.length)
        const randomUrl = memes[randomMemeIdx].url

        setMeme((prevMeme) => ({
            ...prevMeme,
            imageUrl: randomUrl
        }))
    }

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes", {
            method: "GET",
        })
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            return setMemes(data.data.memes)
        })
    }, [])

    return (
      <>
      <Header />
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </label>
                <button onClick={() => handleGetNewMeme()}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
        <pre>{JSON.stringify(memes, null, 2)}</pre>
      </>
      
    )
}