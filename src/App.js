import React from 'react'
import uuid from 'react-uuid'
import './App.css';
import SynthDisplay from './components/SynthDisplay'

function App() {
    const [synths, setSynths] = React.useState([])
    const [synth, setSynth] = React.useState("")

    React.useEffect(() => {
        const json = localStorage.getItem("synths")
        const loadedSynths = JSON.parse(json)
        if (loadedSynths){
            setSynths(loadedSynths)
        }
    }, [])

    React.useEffect(() => {
        const json = JSON.stringify(synths)
        localStorage.setItem("synths", json)
    }, [synths])

    function handleSubmit(e) {
        e.preventDefault()

        const newSynth = {
            id: uuid(),
            name: synth,
            contributions: 100
        }

        setSynths([...synths].concat(newSynth))
        setSynth("")
    }

    function deleteSynth(id) {
        const updatedSynths = [...synths].filter((synth) => synth.id !== id)

        setSynths(updatedSynths)
    }

    function voteForSynth(id){
        const updatedSynths = [...synths].map((synth) => {
            if (synth.id === id){
                synth.contributions += 1
            }
            return synth
        })

        setSynths(updatedSynths)
    }


          
    return ( 
        <div className = "App">
            <div className="title">
                SNX Leaderboard
            </div>

            <div className="section">
                <div className="subTitle">
                    Proposed Synths
                </div>
                <div>
                    {synths.map((synth) => 
                        <div key={synth.id}>
                            <SynthDisplay synth={synth} voteForSynth={voteForSynth} deleteSynth={deleteSynth}/>
                        </div>
                    )}
                </div>
            </div>
            
            <div className="section">
                <form onSubmit={handleSubmit}>
                    <div className="subTitle">
                        Propose New Synth
                    </div>
                    <div>
                        <label>Synth Name</label>
                        <input 
                        type="text" 
                        onChange={(e) => setSynth(e.target.value)} 
                        value={synth}/>
                    </div>
                    <div>
                        <button type="submit">Add New Synth</button>
                    </div>
                </form>
            </div>            
        </div>
    );
}

export default App;