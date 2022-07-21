import React from 'react'
import "./topbar.css"
import {NotificationsNone, Language, Settings} from '@material-ui/icons';

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">lamaadmin</span>
        </div>
         <div className="topRigth">
   <div className="topbarIconcontainer">
    <NotificationsNone/>
    <span className="topIconBag">2</span>
    </div>
     <div className="topbarIconcontainer">
     <Language/>
     <span className="topIconBag">2</span>
  </div>
 <div className="topbarIconcontainer">
   <Settings/>
      </div>
      <img src="https://avatars.githubusercontent.com/u/86491173?s=96&v=4" alt="" className="topAvatar" />
         </div>
        </div>
      </div>
  )
}
