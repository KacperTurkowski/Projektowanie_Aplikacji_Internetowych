import Plot from 'react-plotly.js';

const StatePlot = (props)=>{
    const{
        X,
        Y
    } = props;
    return (<Plot
        data={[
            {
                x: X,
                y: Y,
                type: 'scatter',
                mode: 'lines+markers',
                marker: {color: 'red'},
            },
        ]}
    />)
}
export default StatePlot;
