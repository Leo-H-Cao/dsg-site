import React from 'react';
import './css/History.css';
import {Chrono} from 'react-chrono';


const History = ()=>{

    const items = [
        {
            title: "Date",
            cardTitle: "Beginnings",
            cardSubtitle: "Native Americans",
            cardDetailedText: "The area that is now Durham was \
            originally inhabited by the Eno and the Occaneechi tribes. \
            What is now called the Eno \
            River State park was where the Eno tribe lived. \
            The ancient Native American village of Adshusheer was \
            supposedly located in the Durham area.  \
            Later, Europeans named the Carolinas after King Charles I \
            of England. In the mid-1700s European colonists began \
            to settle in the area and farm the land.",
            media: {
                type: "IMAGE",
                source: {
                    url: "./eno-river.jpg"
                },
            }
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