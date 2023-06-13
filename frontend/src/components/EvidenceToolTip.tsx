import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import InfoIcon from '@mui/icons-material/Info';


const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#343739',
    color: '#FDFEFE',
     maxWidth: 2000,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
  },
}));

export default function EvidenceToolTip() {
  return (
    <div>
      <HtmlTooltip
        title={
            <React.Fragment>
            <Typography variant='body1'>1 star: Genome Wide Significance (p) {'>'} 5 × 10−8</Typography>
            <Typography variant='body1'>2 stars: p {'>'} 5 × 10−8</Typography>
            <Typography variant='body1'>3 stars: p {'>'} 5 × 10−15</Typography>
            <Typography variant='body1'>4 stars: p {'>'} 5 × 10−20</Typography>
            <Typography variant='body1'>5 stars: p {'>'} 5 × 10−30</Typography>
          </React.Fragment>
        }
      >
        {/* <Button>HTML</Button> */}
        <InfoIcon color="primary"/>
      </HtmlTooltip>
    </div>
  );
}


// 2 stars: p < 5 × 10−8
// 3 stars: p < 5 × 10−15
// 4 stars: p < 5 × 10−20
// 5 stars: p < 5 × 10−30