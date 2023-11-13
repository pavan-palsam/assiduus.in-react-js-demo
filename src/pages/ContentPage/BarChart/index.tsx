import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { Grid, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { useRandomData } from '../../../context.ts';

const BarChart: React.FC = () => {
    const svgRef = useRef<SVGSVGElement>(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const { buttonClicked } = useRandomData();


    const getRandomData = () => {
        return Array.from({ length: 6 }, () => Math.floor(Math.random() * 50) + 1);
    };

    useEffect(() => {
        const data = getRandomData();
        const labels = ["Older", "Jan 01-08", "Jan 09-16", "Jan 17-24", "Jan 25-31", "Future"];
    
        const svg = d3.select(svgRef.current);
        const width = 400;
        const height = 200;
    
        const x = d3.scaleBand()
            .domain(data.map((d, i) => i.toString()))
            .range([0, width])
            .padding(0.6);
    
        const y = d3.scaleLinear()
            .domain([0, d3.max(data) as number])
            .range([height, 0]);
    
        svg.selectAll("rect").remove();
    
        svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d, i) => x(i.toString()))
            .attr("y", d => y(d))
            .attr("width", x.bandwidth())
            .attr("height", d => height - y(d))
            .attr("fill", "#13d66b")
            .attr("ry", 4);
    
        svg.selectAll("text")
            .data(data)
            .enter()
            .append("text")
            .text((d, i) => labels[i])
            .attr("x", (d, i) => x(i.toString()) + x.bandwidth() / 2)
            .attr("y", height + 15)
            .attr("fill", "#D3D3D3")
            .attr("font-size", "11px")
            .attr("text-anchor", "middle");
    }, [buttonClicked]);
    
    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <Grid container style={{ padding: '15px',marginLeft:'10px', display: 'flex', flexDirection: 'column' }}>
            <Grid container style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1 style={{ fontWeight: 'normal', fontSize: '25px' }}>Invoices Owned by you</h1>
                <Grid item style={{ display: 'flex', flexDirection: 'row' }}>
                    <Grid item style={{ marginRight: '25px' }}>
                        <Button
                            variant="contained"
                            style={{ color: 'green', backgroundColor: '#F0F8FF', borderRadius: '5px', cursor: 'pointer' }}
                            onClick={openPopup}
                        >
                            New Sales Invoice
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <hr style={{ width: '100%', borderBottom: '0px solid grey' }} />

            <svg ref={svgRef} width={400} height={500}>
                <g />
            </svg>

            <Dialog open={isPopupOpen} onClose={closePopup}>
                <DialogTitle>New Sales Invoice</DialogTitle>
                <DialogContent>
                    <p>This is your File uploader</p>
                </DialogContent>
                <DialogActions>
                    <Button onClick={closePopup} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </Grid>
    );
};

export default BarChart;
