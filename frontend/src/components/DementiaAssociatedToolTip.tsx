import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import LaunchIcon from '@mui/icons-material/Launch';
import { Button, ClickAwayListener, Stack } from '@mui/material';
import { useState } from 'react';
import { GeneGrid } from './GeneGrid';
import { RiskFactor } from '../context/geneContext';
import { FC } from "react";

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#FDFEFE',
    color: '#000000',
    maxWidth: 'none', // Remove the maxWidth restriction
    width: 900, // Set the width to 900px
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)', 
  },
}));

interface tooltipProps {
  RiskFactorList: RiskFactor[];
}
  export const DementiaAssociatedToolTip: FC<tooltipProps> = ({
    RiskFactorList
  }) => {
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <Stack width="100%">
        <HtmlTooltip
          onClose={handleTooltipClose}
          open={open}
          disableFocusListener
          disableHoverListener
          disableTouchListener
          title={
            <Stack>
              <GeneGrid boxShadow={0} fullInfo={false} RiskFactorList={RiskFactorList} />
            </Stack>
          }
        >
          <Button onClick={handleTooltipOpen}>
            <LaunchIcon color="primary" />
          </Button>
        </HtmlTooltip>
      </Stack>
    </ClickAwayListener>
  );
}
