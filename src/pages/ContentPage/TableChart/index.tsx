import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import { Grid } from '@mui/material';
import { useRandomData } from '../../../context.ts';

const TableChart: React.FC = () => {
    const svgRef = useRef<SVGSVGElement>(null);
    const { buttonClicked } = useRandomData();
    console.log(buttonClicked)

    useEffect(() => {
        const generateRandomData = () => {
            return [
                { account: 'Sales', thisMonth: Math.random() * 100, ytd: Math.random() * 500 },
                { account: 'Advertising', thisMonth: Math.random() * 100, ytd: Math.random() * 500 },
                { account: 'Inventory', thisMonth: Math.random() * 100, ytd: Math.random() * 500 },
                { account: 'Product', thisMonth: Math.random() * 100, ytd: Math.random() * 500 },
            ];
        };
    
        const data = generateRandomData();

        const svg = d3.select(svgRef.current);
        const width = 400;
        const height = 200;

        const cellWidth = width / 3;
        const cellHeight = height / (data.length + 1); 

        const headerData = ['Account', 'This Month', 'YTD'];
        svg.selectAll('*').remove();

        svg.selectAll('.headers')
            .data(headerData)
            .enter()
            .append('text')
            .text(d => d)
            .attr('x', (d, i) => i * cellWidth+cellWidth/2 )
            .attr('y', cellHeight)
            .attr('text-anchor', 'middle')
            .attr('font-weight', 'bold');

        const cells = svg.selectAll('.cell')
        .data(data) 
        .enter()
        .append('g') 
        .attr('class', 'cell');

    cells.append('text')
        .text(d => d.account)
        .attr('x', cellWidth/2.8)
        .attr('y', (d, i) => (i + 1) * cellHeight + cellHeight / 2)
        .attr('text-anchor', 'start');

    cells.append('text') 
        .text(d => d.thisMonth.toFixed(2))
        .attr('x', cellWidth*1.5)
        .attr('y', (d, i) => (i + 1) * cellHeight + cellHeight / 2)
        .attr('text-anchor', 'middle');

    cells.append('text') 
        .text(d => d.ytd.toFixed(2))
        .attr('x', cellWidth * 2.5)
        .attr('y', (d, i) => (i + 1) * cellHeight + cellHeight / 2)
        .attr('text-anchor', 'middle');
    }, [buttonClicked]);

    return (
        <Grid container style={{ padding: '15px',marginLeft:'10px', display: 'flex', flexDirection: 'column' }}>
            <Grid container style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1 style={{ fontWeight: 'normal', fontSize: '25px' }}>Account watchlist</h1>
            </Grid>
            <hr style={{ width: '100%', borderBottom: '0px solid grey' }} />

            <svg ref={svgRef} width={450} height={250}>
                <g />
            </svg>
        </Grid>
    );
};

export default TableChart;
