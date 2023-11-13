import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { Grid, Typography } from '@mui/material';
import { useRandomData } from '../../../context.ts';

const SecondBarChart: React.FC = () => {
    const svgRef = useRef<SVGSVGElement>(null);
    const { buttonClicked } = useRandomData();

    const getRandomData = () => {
        return Array.from({ length: 6 }, () => Math.floor(Math.random() * 50) + 1);
    };

    useEffect(() => {
        const data = getRandomData();
        const labels =['August', 'September', 'October','November','December','January']
    
        const svg = d3.select(svgRef.current);
        const width = 400;
        const height = 200;
    
        const x = d3.scaleBand()
            .domain(labels) // Using the labels as the domain
            .range([0, width])
            .padding(0.8);
    
        const y = d3.scaleLinear()
            .domain([0, d3.max(data) as number])
            .range([height, 0]);
    
        svg.selectAll("rect").remove();
    
        svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d, i) => x(labels[i])) // Update the x position
            .attr("y", d => y(d))
            .attr("width", 20)
            .attr("height", d => height - y(d))
            .attr("fill", "#13d66b")
            .attr("ry", 4);
    
        // Adding labels at the bottom
        svg.selectAll("text")
            .data(data)
            .enter()
            .append("text")
            .text((d, i) => labels[i])
            .attr("x", (d, i) => x(labels[i]) + x.bandwidth() / 2)
            .attr("y", height + 15) // Below the bars
            .attr("fill", "#D3D3D3")
            .attr("font-size", "12px")
            .attr("text-anchor", "middle");
    }, [buttonClicked]);
    



    return (
        <Grid container style={{ padding: '15px',marginLeft:'10px', display: 'flex', flexDirection: 'column' }}>
            <Grid container style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1 style={{ fontWeight: 'normal', fontSize: '25px' }}>Total cash flow</h1>
                <Grid item style={{ display: 'flex', flexDirection: 'row' }}>
                    <Grid container style={{ marginRight: '25px',display:'flex',flexDirection:'row',alignItems:'center'}}>
                        <Grid item style={{backgroundColor:'#13f094',marginRight:'8px',height:'15px',width:'15px',borderRadius:'5px'}}></Grid>
                        <Typography>In</Typography>
                    </Grid>
                    <Grid item>
                    <Grid container style={{ marginRight: '25px',display:'flex',flexDirection:'row',alignItems:'center'}}>
                        <Grid item style={{backgroundColor:'#13f094',marginRight:'8px',height:'15px',width:'15px',borderRadius:'5px'}}></Grid>
                        <Typography>Out</Typography>
                    </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <hr style={{ width: '100%', borderBottom: '0px solid grey' }} />

            <svg ref={svgRef} width={400} height={500}>
                <g />
            </svg>

        </Grid>
    );
};

export default SecondBarChart;
