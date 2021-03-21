import React from 'react'
import { v4 as uuid } from 'uuid';
import Button from '@material-ui/core/Button';
import SynthDisplay from './components/SynthDisplay/SynthDisplay'
import { Container, Paper, TextField } from '@material-ui/core';
import MenuAppBar from './components/AppBar/AppBar';

export function App() {

    const [synths, setSynths] = React.useState<any[]>([])
    const [synth] = React.useState<any>([])

    React.useEffect(() => {
        const json = localStorage.getItem("synths") || '{}';
        const loadedSynths = JSON.parse(json);
        if (loadedSynths){
            setSynths(loadedSynths)
        }
    }, [])

    React.useEffect(() => {
        const json = JSON.stringify(synths)
        localStorage.setItem("synths", json)
    }, [synths])

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const newSynth = {
            id: uuid(),
            name: synth,
            contributions: 100
        }

        setSynths([...synths].concat(newSynth))
    }

    function deleteSynth(id: typeof uuid) {
        const updatedSynths = [...synths].filter((synth) => synth.id !== id)

        setSynths(updatedSynths)
    }

    function voteForSynth(id: typeof uuid){
        const updatedSynths = [...synths].map((synth) => {
            if (synth.id === id){
                synth.contributions += 1
            }
            return synth
        })

        setSynths(updatedSynths)
    }
          
    return ( 
    <div>
        <MenuAppBar/>
        <Container>
            <Paper elevation={3} >
                <div className="section">
                        <div className="subTitle">
                            Proposed Synths
                        </div>
                        <div>
                            {synths.map((synth): JSX.Element => 
                                <div key={synth.id}>
                                    <SynthDisplay synth={synth}/>
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
                                <TextField id="outlined-basic" label="Outlined" variant="outlined" type="text" value={synth}/>
                            </div>
                            <div>
                                <Button variant="contained" color="primary" type="submit">Add New Synth</Button>
                            </div>
                        </form>
                    </div>            

            </Paper>
        </Container>
    </div>
        
    );
}

export default App;
