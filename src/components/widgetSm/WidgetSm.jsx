import "./widgetSm.css"
import {Visibility} from "@material-ui/icons"

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Aderir a Novos 
      Membros</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src="https://avatars.githubusercontent.com/u/86491173?s=96&v=4" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Renaldo Alvaro</span>
            <span className="widgetSmUserTitle">Engenheiro de software</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetsmIcon"/>
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="https://avatars.githubusercontent.com/u/86491173?s=96&v=4" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Renaldo Alvaro</span>
            <span className="widgetSmUserTitle">Engenheiro de software</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetsmIcon"/>
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="https://avatars.githubusercontent.com/u/86491173?s=96&v=4" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Renaldo Alvaro</span>
            <span className="widgetSmUserTitle">Engenheiro de software</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetsmIcon"/>
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="https://avatars.githubusercontent.com/u/86491173?s=96&v=4" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Renaldo Alvaro</span>
            <span className="widgetSmUserTitle">Engenheiro de software</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetsmIcon"/>
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="https://avatars.githubusercontent.com/u/86491173?s=96&v=4" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Renaldo Alvaro</span>
            <span className="widgetSmUserTitle">Engenheiro de software</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetsmIcon"/>
            Exposição
          </button>
        </li>
      </ul>
    </div>
  )
}
