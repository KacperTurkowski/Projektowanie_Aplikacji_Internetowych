import Plot from 'react-plotly.js';

const Chart = (props)=>{
    const{
        X,
        Y
    } = props;
    return (<Plot
        data={[
            {
                x: X,
                y: Y,
                type: 'bar'
            },
        ]}
    />)
}
export default Chart;
