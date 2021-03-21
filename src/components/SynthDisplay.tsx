import Button from '@material-ui/core/Button';

export function SynthDisplay(props : { synth: any }) {
    const { synth } = props;
        return  (
            <div className="section">
                <div> 
                    Synth Name: {synth.name}
                </div>
                <div> 
                    Contributions: {synth.contributions}
                </div>
                <Button variant="contained" color="primary" onClick={() => synth.voteForSynth(synth.id)}>Vote</Button>
                <Button variant="contained" color="primary" onClick={() => synth.deleteSynth(synth.id)}>Delete</Button>
            </div>
        )
}

export default SynthDisplay