import Waveform from "react-audio-waveform"
import './WaveForm.css'

function WaveForm({audio}){


    return(
        <Waveform
        barWidth={4}
        // peaks={this.props.peaks}
        height={200}
        // pos={this.props.pos}
        duration={210}
        // onClick={this.handleClick}
        source={audio}
        color="#676767"
        progressGradientColors={[[0, "#888"], [1, "#aaa"]]}
        />
    )
}

export default WaveForm
