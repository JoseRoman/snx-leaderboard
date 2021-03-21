import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import React from 'react';

export function SynthDisplay(props : { synth: any }) {
    const { synth } = props;
        return  (
            <div className="section">
                <Typography variant="h6" gutterBottom>
                    Synth Name: {synth.name}
                </Typography>
                <div> 
                    Contributions: {synth.contributions}
                </div>
                <Button variant="contained" color="primary" onClick={() => synth.voteForSynth(synth.id)}>Vote</Button>
                <Button variant="contained" color="primary" onClick={() => synth.deleteSynth(synth.id)}>Delete</Button>
            </div>
        )
}

export default SynthDisplay