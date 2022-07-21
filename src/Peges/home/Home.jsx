import "./home.css"
import FeaturedInf from "../../components/featuredInfo/FeaturedInf"
import Chart from "../../components/chart/Chart"
import { userData } from "../../dummyData"

import WidgetLg from "../../components/widgetLg/WidgetLg"
import WidgetSm from "../../components/widgetSm/WidgetSm"

export default function Home() {
  return (
    <div className="home">
    <FeaturedInf />
    <Chart data={userData} title="Análise de Usuários" grid dataKey="Active User"/>
    <div className="homeWidget">
      <WidgetSm/>
      <WidgetLg/>
    </div>
    </div>
  )
}
