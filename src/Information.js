import './Information.css';





function Information (props){
    return(
    <div id="overall">
    <span id="hisName">{props.title}</span>
        <span class="know">
        <span id="intro">
        Mahendra Singh Dhoni, born 7 July 1981, is an Indian professional cricketer. He was captain of the Indian national team in limited-overs formats from 2007 to 2017 and in Test cricket from 2008 to 2014. Dhoni is widely considered one of the greatest cricket captains, wicket-keeper-batsman and finishers in the history of cricket. He plays as a right-handed wicket-keeper-batsman and is known for his calm captaincy and his ability to finish matches in tight situations. He is also the current captain of Chennai Super Kings in the Indian Premier League.
        </span>
        <span id="stats">
            <span id="statsTitle">
                Career Stats
            </span>
            <table>
                
                    <tr>
                    <td>Competitions</td>
                    <td>Test</td>
                    <td>ODI</td>
                    <td>T20I</td>
                    <td>T20</td>
                    </tr>
                    <tr>
                    <td>Matches</td>
                    <td>90</td>
                    <td>350</td>
                    <td>98</td>
                    <td>361</td>
                    </tr>
                    <tr>
                    <td>Runs Scored</td>
                    <td>4,876</td>
                    <td>10,773</td>
                    <td>1,617</td>
                    <td>7,167</td>
                    </tr>
                    <tr>
                    <td>Batting Average</td>
                    <td>38.09</td>
                    <td>50.53</td>
                    <td>37.60</td>
                    <td>38.12</td>
                    </tr>
                
            </table>
        </span>
        </span>
    </div>
    )
}

export default Information;