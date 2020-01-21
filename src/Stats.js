import React from "react"
import jan from "./resources/stats/Janurary.png"
import feb from "./resources/stats/February.png"
import mar from "./resources/stats/March.png"
import apl from "./resources/stats/April.png"
import may from "./resources/stats/May.png"
import jun from "./resources/stats/June.png"
import jul from "./resources/stats/July.png"
import aug from "./resources/stats/August.png"
import sep from "./resources/stats/September.png"
import oct from "./resources/stats/October.png"
import nov from "./resources/stats/November.png"
import dec from "./resources/stats/December.png"

class Stats extends React.Component {
    month = oct;

    changeMonth(newMonth) {
        if (this.month == newMonth) return;
        this.month = newMonth;
        console.log(this.month)
        this.render();
    }

    render() {
        return (
            <div>
            <img className="statImage" id="statImage" src={this.month} />
            <form>
            <select name="month" onchange={this.changeMonth("selected")}>
                <option value="jan">January</option>
                <option value="feb">February</option>
                <option value="mar">March</option>
                <option value="apr">April</option>
                <option value="may">May</option>
                <option value="jun">June</option>
                <option value="jul">July</option>
                <option value="aug">August</option>
                <option value="oct" selected="selected">October</option>
                <option value="sep">September</option>
                <option value="nov">November</option>
                <option value="dec">December</option>
            </select>
            </form>
            </div>
        )

    }
}

export default Stats
