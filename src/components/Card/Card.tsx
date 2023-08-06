import * as React from 'react';
import Card from '@mui/material/Card';
import { CardProps as MUICardProps } from '@mui/material/Card';
import Stack from "@mui/material/Stack";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import { styled } from "@mui/material/styles"
import ArrowForward from '@mui/icons-material/ArrowForward'

export type HorizontalCardProps = MUICardProps & { width?: number, cardSpacing?: number, cardContentText: {cardLabel: string, val?: string, cardDesc: string}[], onCardClick?: (val?: string) => void, onArrowClick?: (val?: string) => void };

const StyledCard = styled(Card)<MUICardProps>(() => ({
    background: "#FFFFFF",
    '&:hover': {
         background: "#F5F5F5",
    },
    flex: "none",
    order:1, 
    flexGrow:0, 
    cursor: "pointer",
    boxSizing:"border-box", 
    width: "651px",  
    border: "1px solid", 
    borderColor: "#828282",
    borderRadius: "12px", 
    boxShadow: "none"

}));

const HorizontalCard: React.FC<HorizontalCardProps> = (props) =>{
    
    return (
        
        <Stack spacing={props.cardSpacing || 2}>      
            {props.cardContentText.map(c=>{
                return (<StyledCard key={c.cardLabel}
                       sx={{ maxWidth: props.width || 500 }} variant="outlined" 
                        style={{ flex:"none", order:1, flexGrow:0, cursor: "pointer",
                        boxSizing:"border-box", width: "651px",  border: "1px solid", borderColor: "#828282",
                        borderRadius: "12px", boxShadow: "none" }}>  
                            <CardActionArea
                                onClick={(_) => {
                                        props.onCardClick && props.onCardClick(c.val)
                                }}
                            >    
                                <CardContent>
                                    <Grid container>
                                        <Grid item sm={10}>
                                            <Typography fontFamily={"Helvetica Neue"} gutterBottom variant="h5" component="div">
                                            {c.cardLabel}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                            {c.cardDesc}
                                            </Typography>
                                        </Grid>
                                        <Grid item sm={2}>
                                            <ArrowForward onClick={(_) => {
                                                props.onArrowClick && props.onArrowClick(c.val)
                                            }} style={{ width: "50px", height: "50px", color: "#E0E0E0" }}/>
                                        </Grid>
                                    </Grid>
                                </CardContent>   
                            </CardActionArea>    
                        </StyledCard>)
                    })
            }        
        </Stack>
    );
  }
  
  export default HorizontalCard;