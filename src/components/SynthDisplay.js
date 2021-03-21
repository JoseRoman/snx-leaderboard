import React from 'react'

class SynthDisplay extends React.Component {
    render() {
        return  <div className="section">
                    <div> 
                        Synth Name: {this.props.synth.name}
                    </div>
                    <div> 
                        Contributions: {this.props.synth.contributions}
                    </div>
                    <button onClick={() => this.props.voteForSynth(this.props.synth.id)}>Vote</button>
                    <button onClick={() => this.props.deleteSynth(this.props.synth.id)}>Delete</button>
                </div>
    }
}

export default SynthDisplay