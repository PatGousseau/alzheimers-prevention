import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import InfoIcon from '@mui/icons-material/Info';
import { FC, ReactNode } from 'react';


const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#343739',
    color: '#FDFEFE',
     maxWidth: 442,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
  },
}));
interface ToolTipProps {
  text: ReactNode;
}

export const EvidenceToolTip: FC<ToolTipProps> = ({ text }) => {

  return (
    <div>
      <HtmlTooltip title={text}>
        <InfoIcon color="primary" />
      </HtmlTooltip>
    </div>
  );
}