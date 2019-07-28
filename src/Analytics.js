import React, {Component,PureComponent, Fragment} from 'react';
import * as d3 from "d3";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';
import {
    PieChart, Pie, Sector, Cell,
  } from 'recharts';  
const piedata = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  
  const data = [
    {
      name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
    },
    {
      name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
    },
    {
      name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
    },
    {
      name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
    },
    {
      name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
    },
    {
      name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
    },
    {
      name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
    },
  ];
  




const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

class Analytics extends PureComponent {
    state = {
        data:[
            {
                pairName:"USDC/DAI",
                pair:"USDC/DAI Available",
                points:"18406",
                price:"18406",
                priceRatio:"0.99337057 DAI",
                hrChange:"-0.70%",
                volChange:"106476.71 DAI"

            },
            {
                pairName:"WETH / DAI",
                pair:"WETH / DAI Available",
                points:"153079.8",
                price:"153079.8",
                priceRatio:"0.99337057 DAI",
                hrChange:"0%",
                volChange:"106381.93 DAI"
            },
            {
                pairName:"USDC / WETH",
                pair:"USDC / WETH Available",
                points:"535.6123",
                price:"535.6123",
                priceRatio:"0.00385215 WETH",
                hrChange:"0%",
                volChange:"294.43 WETH"
            },
            {
                pairName:"ZRX / WETH", 
                pair:"ZRX / WETH Available",
                points:"550.7532",
                price:"550.7532",
                priceRatio:"0.00108050 WETH",
                hrChange:"-9.96%",
                volChange:"1.14 WETH"
            },
            {
                pairName:"LPT / WETH", 
                pair:"LPT / WETH Available",
                points:"165.4725",
                price:"34431.52",
                priceRatio:"0.02845040 WETH",
                hrChange:"-11.64%",
                volChange:"5.59 WETH"
            },
            {
                pairName:"BAT / WETH",
                pair:"BAT / WETH Available",
                points:"57.00000",
                price:"11860.56",
                priceRatio:"0.00123212 WETH",
                hrChange:"-2.52%",
                volChange:"26.41 WETH"
            }
        ]
    }
    
    componentDidMount() {
        // this.drawChart();
    }
    getData=()=>{
        fetch('')
        .then(response => response.json())
        .then(data => this.setState({ data }));
    }
    getJsxforSidePanel=()=>{
        return (
            <Fragment>
                
                {
                    this.state.data.map((d,i)=>(
                        <Fragment>
                            <Grid style={{padding: "5px"}} item xs={6}>
                                <Typography noWrap>
                                    <Box fontWeight="fontWeightLight" style={{fontSize: "12px",margin:"0px"}} fontSize="8"  m={1}>
                                        {d.pairName} 
                                    </Box>
                                    
                                </Typography>
                            </Grid>
                            <Grid style={{padding: "5px"}} item xs={6}>
                                <Typography noWrap>
                                    <Box fontWeight="fontWeightLight" style={{fontSize: "12px" ,margin:"0px"}} fontSize="8"  m={1}>
                                        {d.volChange}
                                    </Box>
                                </Typography>
                            </Grid>
                        </Fragment>
                    ))
                }
                
                
            </Fragment>
        );
    }
    getDivJsx=()=>{
        return (
            <Grid container  spacing={2}>
               
                <Grid item xs={2} sm={2}>
                    <Paper style={{backgroundColor:"#eeeeee",height: "100%",width: "100%"}}>
                        <Grid style ={{paddingTop: "15px",opacity: ".5"}} item xs={12} zeroMinWidth>
                            <Typography noWrap>
                                Aggregate Volume
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography style={{fontSize: "16px",margin:"0px"}} fontWeight="fontWeightBold"  m={1}>
                               1508.3 WETH
                            </Typography>
                        </Grid>
                        <Divider /> 
                        <Grid  item xs={12}>
                            <Typography noWrap>
                                Individual Volume
                            </Typography> 
                            
                            <PieChart width={201} height={250} onMouseEnter={this.onPieEnter}>
                                <Pie
                                    data={piedata}
                                    cx={100}
                                    cy={100}
                                    innerRadius={50}
                                    outerRadius={90}
                                    fill="#8884d8"
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                {
                                    piedata.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                                }
                                </Pie>
                            </PieChart>   
                               
                        </Grid>
                        <Divider /> 
                        <Grid  item container xs={12}>
                            <Grid style={{padding: "5px"}} item xs={6}>
                                <Typography noWrap>
                                    <Box fontWeight="fontWeightLight" style={{fontSize: "14px",margin:"0px"}} fontSize="8"  m={1}>
                                        Market 
                                    </Box>
                                    
                                </Typography>
                            </Grid>
                            <Grid style={{padding: "5px"}} item xs={6}>
                                <Typography noWrap>
                                    <Box fontWeight="fontWeightLight" style={{fontSize: "14px" ,margin:"0px"}} fontSize="8"  m={1}>
                                        Volume
                                    </Box>
                                </Typography>
                            </Grid>
                            {
                                this.getJsxforSidePanel()
                            }
                            
                        </Grid>
                    </Paper>
                
                </Grid>
                <Grid  item xs={10}>
                    <Grid container spacing={2}>
                        {this.state.data.map((d,i)=>(
                                <Grid item xs={6} sm={3}>
                                    <Paper style={{backgroundColor:"#eeeeee",width: "243px",height: "307px"}}>
                                        <div >
                                            <div style={{height: "98px"}}>
                                                
                                                <Grid item xs={12} zeroMinWidth>
                                                    <div style={{padding: "15px"}}>
                                                        <Typography noWrap>
                                                           
                                                            <Box style={{margin:"0px",textAlign: "left"}} fontSize="16" fontWeight="fontWeightMedium" m={1}>
                                                               {d.pair}
                                                            </Box>
                                                            <Box style={{fontSize: "16px",margin:"0px",textAlign: "left"}} fontWeight="fontWeightBold"  m={1}>
                                                                {d.price}
                                                            </Box>
                                                            <Box style={{fontSize: "12px",margin:"0px",textAlign: "left"}} fontWeight="fontWeightLight" fontSize="10" m={1}>
                                                                {"$"+d.price}
                                                            </Box>
                                                        </Typography>
                                                    </div>    
                                                </Grid>
                                            </div> 
                                            <Divider />   
                                            <Grid style={{height: "71px"}} container item xs={12}>
                                                <div style={{padding: "15px"}}>
                                                    <Typography noWrap>
                                                        
                                                        <Box fontWeight="fontWeightLight" style={{margin:"0px",textAlign: "left"}} fontSize="16"  m={1}>
                                                            Price
                                                        </Box>
                                                        <Box style={{fontSize: "16px",margin:"0px",textAlign: "left"}} fontWeight="fontWeightBold"  m={1}>
                                                            {d.priceRatio}
                                                        </Box>
                                                    </Typography>
                                                </div>
                                                
                                            </Grid>
                                            <Divider />   
                                            <Grid style={{height: "67px"}} container item xs={12}>
                                                <Grid style={{padding: "5px"}} item xs={6}>
                                                    <Typography noWrap>
                                                        <Box fontWeight="fontWeightLight" style={{fontSize: "14px",margin:"0px",textAlign: "left"}} fontSize="8"  m={1}>
                                                           24HR Change
                                                        </Box>
                                                        <Box style={{fontSize: "12px",margin:"0px",textAlign: "left"}} fontWeight="fontWeightBold"  m={1}>
                                                            {d.hrChange}
                                                        </Box>
                                                    </Typography>
                                                </Grid>
                                                <Grid style={{padding: "5px"}} item xs={6}>
                                                    <Typography noWrap>
                                                        <Box fontWeight="fontWeightLight" style={{fontSize: "14px" ,margin:"0px",textAlign: "left"}} fontSize="8"  m={1}>
                                                           24HR Volume
                                                        </Box>
                                                        <Box style={{fontSize: "12px",margin:"0px",textAlign: "left"}} fontWeight="fontWeightBold"  m={1}>
                                                            {d.volChange}
                                                        </Box>
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                            <Divider /> 
                                            <Grid style={{height: "67px"}} container item xs={12}>
                                                <LineChart width={243} height={67} data={data}>
                                                    <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
                                                </LineChart>
                                            </Grid>
                                        </div>
                                    </Paper>
                                
                                </Grid>
                        )
                        )}
                        
                    </Grid>    
                </Grid>
            
            </Grid>
                    
        )
    }
    

    render(){
        return (
            <div style={{border:1}}>
                {this.getDivJsx()}
                <Grid container spacing={1}>
                    
                </Grid>
            </div>
        )
    }

}

export default Analytics;