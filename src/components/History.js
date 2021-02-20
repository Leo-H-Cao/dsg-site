import React from 'react';
import './css/History.css';
import {Chrono} from 'react-chrono';

const items = [
    {
        title: "Date",
        cardTitle: "Title",
        cardSubtitle: "Subtitle",
        cardDetailedText: "Description",
    },
    {
        title: "Date",
        cardTitle: "Title",
        cardSubtitle: "Subtitle",
        cardDetailedText: "Description"
    },
    {
        title: "Date",
        cardTitle: "Title",
        cardSubtitle: "Subtitle",
        cardDetailedText: "Description"
    },
    {
        title: "Date",
        cardTitle: "Title",
        cardSubtitle: "Subtitle",
        cardDetailedText: "Description"
    },
    {
        title: "Date",
        cardTitle: "Title",
        cardSubtitle: "Subtitle",
        cardDetailedText: "Description"
    }
];

function History(){
    return(
        <div>
            <h1 className="history-header">HISTORY</h1>
            <div style={{width: "80%", height:"100%", margin: "auto"}}>
                <Chrono 
                    items={items}
                    mode="VERTICAL_ALTERNATING"
                    scrollable
                    theme={{
                        primary: "rgb(0,83,155)", 
                        secondary: "rgb(243, 242, 241)", 
                        cardBgColor: "rgb(226, 230, 237)", 
                        cardForeColor: "rgb( 1, 33, 105)" 
                    }}
                />
            </div>
        </div>
    );
}

export default History;