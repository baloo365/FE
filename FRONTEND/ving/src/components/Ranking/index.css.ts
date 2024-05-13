import { style } from '@vanilla-extract/css'
import { vars } from '../../styles/vars.css'
import { columnWrapper, rowWrapper } from '@/styles/wrapper.css'

export const rankingList = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  overflowY: 'auto',
  zIndex: 100,
  selectors: {
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
})

export const openRankingListItem = style([
  rowWrapper, 
  {
    margin: `${vars.space['0.5x']} 0`,
    width: 184,
  }
])

export const closeRankingListItem = style([
  rowWrapper,
  {
    margin: `${vars.space['0.5x']} 0`,
    width: '100%'
  }
])

export const rankingUserName = style({
  overflow: 'hidden', 
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  flex: '1',
  margin: `0 0 0 ${vars.space['1x']}`,
})