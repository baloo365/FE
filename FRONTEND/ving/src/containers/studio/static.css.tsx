import { vars } from '@/styles/vars.css'
import { style } from '@vanilla-extract/css'

export const container = style({
  display: 'flex',
})

export const sidebar = style({
  minWidth: 200,
  background: vars.colors.lightGray,
  height: '100vh',
  padding: '20px',
  boxSizing: 'border-box',
})

export const content = style({
  flex: 1,
  padding: '20px',
})

export const card = style({
  background: '#FFFFFF',
  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
  transition: '0.3s',
  borderRadius: vars.borderRadius['0.5x'],
  padding: '16px',
  margin: '16px 0',
})

export const stats = style({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0 16px',
  alignItems: 'center',
})

export const statItem = style({
  textAlign: 'center',
})

export const navItem = style({
  marginBottom: '1rem',
  cursor: 'pointer',
  ':hover': {
    color: vars.colors.darkGray,
  },
})