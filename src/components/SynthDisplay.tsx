
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
                <button onClick={() => synth.voteForSynth(synth.id)}>Vote</button>
                <button onClick={() => synth.deleteSynth(synth.id)}>Delete</button>
            </div>
        )
}

export default SynthDisplay