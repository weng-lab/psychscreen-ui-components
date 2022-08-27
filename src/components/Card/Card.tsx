import * as React from 'react';
import Card from '@mui/material/Card';
import { CardProps as MUICardProps } from '@mui/material/Card';
import Stack from "@mui/material/Stack";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';

const useStyles = makeStyles({
    card: {
      background: "#FFFFFF",
      '&:hover': {
         background: "#E5E4E2",
      },
    }
  });


export type HorizontalCardProps = MUICardProps & { width?: number, cardSpacing?: number, cardDetails:  {cardLabel: string, val?: string, cardDesc: string}[], onCardClick?: (val?: string) => void };
const HorizontalCard = (props: HorizontalCardProps) =>{
    const classes = useStyles();
    return (
        
        <Stack spacing={props.cardSpacing || 2}>      
            {props.cardDetails.map(c=>{
                return (<Card key={c.cardLabel}
                        className={classes.card} sx={{ maxWidth: props.width || 500 }} variant="outlined" 
                        style={{ flex:"none", order:1, flexGrow:0, cursor: "pointer",
                        boxSizing:"border-box", width: "651px",  border: "1px solid", borderColor: "#828282",
                        borderRadius: "12px", boxShadow: "none" }}>  
                            <CardActionArea
                                onClick={(_) => {
                                        props.onCardClick && props.onCardClick(c.val)
                                }}
                            >    
                                <CardContent>
                                    <Typography fontFamily={"Helvetica Neue"} gutterBottom variant="h5" component="div">
                                    {c.cardLabel}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    {c.cardDesc}
                                    </Typography>
                                </CardContent>   
                            </CardActionArea>    
                        </Card>)
                    })
            }        
        </Stack>
    );
  }
  
  export default HorizontalCard;