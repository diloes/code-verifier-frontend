// Material List Component
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'

// Material Icon Components
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PeopleIcon from '@mui/icons-material/People'
import BarChartIcon from '@mui/icons-material/BarChart'


export const MenuItem = (
  <>
    {/* Dashboard to Katas button */}
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary='Katas' />
    </ListItemButton>

    {/* Users */}
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary='Users' />
    </ListItemButton>

    {/* Users */}
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary='Ranking' />
    </ListItemButton>
  </>
)

