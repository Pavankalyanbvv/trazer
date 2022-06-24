import "./dashboard.css"
import Looks5OutlinedIcon from '@mui/icons-material/Looks5Outlined';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import ViewCompactOutlinedIcon from '@mui/icons-material/ViewCompactOutlined';
export default function Dashboard(_){
    return (
        <div className="dashboard">
           <div className="dashboardWrapper">
           <h3 className="dashboardTitle">Dashboard</h3>
           <ul className="dashboardList">
                <li className="dashboardListItem active"><Looks5OutlinedIcon className="icon"/><a href="/count">count analysis</a></li>
                <li className="dashboardListItem"><SpeedOutlinedIcon className="icon" />speed analysis</li>
                <li className="dashboardListItem"><ViewCompactOutlinedIcon className="icon" />congestion level</li>
            </ul>

        </div>
        </div>
    )
}