import "./featuredInfo.css"
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'

export default function FeaturedInf() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,415</span>
          <span className="featuredMoneyRate">-11.4 <ArrowDownward className="featuredIcon negative"/></span>
        </div>
        <span className="featuredSub">Comparado com o mês passado</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Vendas</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$4,415</span>
          <span className="featuredMoneyRate">-1.4 <ArrowDownward className="featuredIcon negative"/></span>
        </div>
        <span className="featuredSub">Comparado com o mês passado</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Custus</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,555</span>
          <span className="featuredMoneyRate">+2.4 <ArrowUpward className="featuredIcon"/></span>
        </div>
        <span className="featuredSub">Comparado com o mês passado</span>
      </div>
    </div>
  )
}
