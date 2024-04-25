import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/vars.css'

export const container = style({
  position: 'fixed',
  width: '100%',
  backgroundColor: vars.colors.white,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  height: 50,
  padding: `0 ${vars.space['1x']} 0 ${vars.space['1x']}`,
  boxShadow: vars.boxShadow['1x'],
  zIndex: 3001,
  // overflow: 'visible'
})

export const logo = style({
  width: 'auto',
  height: 32,
})