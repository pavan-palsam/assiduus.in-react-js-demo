import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { Grid } from '@mui/material';
import { select } from 'd3-selection';
import { useRandomData } from '../../../context.ts';

const LineChart: React.FC = () => {
    const svgRef = useRef<SVGSVGElement>(null);
    const { buttonClicked,setButtonClicked } = useRandomData();
    
    const changeRandomData = ()=>{
        setButtonClicked(!buttonClicked)
    }

    useEffect(() => {
        const labels = ["09", "10", "11", "12", "13", "14", "15", "16", "17", "18"];
        const randomData = Array.from({ length: 4 }, () => ({
            x: Math.floor(Math.random() * 8) + 1,
            y: Math.floor(Math.random() * 8) + 1,
        }));
    
        const svg = select(svgRef.current);
        const width = 400;
        const height = 200;
    
        const xScale = d3.scaleLinear()
            .domain([1, 10])
            .range([0, width]);
    
        const yScale = d3.scaleLinear()
            .domain([0, 10])
            .range([height, 0]);
    
        const line = d3.line()
            .x(d => xScale(d.x))
            .y(d => yScale(d.y))
            .curve(d3.curveCardinal);
    
        svg.selectAll("*").remove();
    
        svg.append('line')
            .attr('x1', 0)
            .attr('y1', height)
            .attr('x2', width)
            .attr('y2', height)
            .attr('stroke', 'none');
    
        labels.forEach((label, i) => {
            svg.append('text')
                .attr('x', xScale(i + 1)) 
                .attr('y', height + 20)
                .attr('text-anchor', 'middle')
                .text(label)
                .attr('fill', '#D3D3D3')
                .attr('font-size', '12px');
        });
    
        svg.append('path')
            .datum(randomData)
            .attr('d', line)
            .attr('fill', 'none')
            .attr('stroke', 'green');
    
    }, [buttonClicked]);
    
    
    
    

    return (
        <Grid container style={{ padding: '15px',marginLeft:'10px', display: 'flex', flexDirection: 'column' }}>
            <Grid container style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1 style={{ fontWeight: 'normal', fontSize: '25px' }}>Checking Account</h1>
                <Grid item style={{ display: 'flex', flexDirection: 'row' }}>
                    <Grid item style={{ marginRight: '25px' }}>
                        <select onChange={changeRandomData} id="dropdown1">
                            <option value="">Manage</option>
                            <option  value="option1">Option 1</option>
                            <option  value="option2">Option 2</option>
                            <option  value="option3">Option 3</option>
                            <option  value="option4">Option 4</option>
                        </select>
                    </Grid>
                    <Grid item>
                        <select onChange={changeRandomData}  id="dropdown2">
                            <option  value="">January</option>
                            <option  value="option1">February</option>
                            <option  value="option2">March</option>
                            <option  value="option3">April</option>
                            <option  value="option4">May</option>
                        </select>
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

export default LineChart;
