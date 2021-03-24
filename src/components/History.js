import React from 'react';
import './css/History.css';
import {Chrono} from 'react-chrono';

import enoRiver from './history-data/eno-river.jpg';
import civilWar from './history-data/civil-war.jpg';
import jbDuke from './history-data/jbduke.jpg';
import mlk from './history-data/mlk.png';
import tobacco from './history-data/tobacco.png';

const History = () =>{
    const items = [
        {
            title: "1600s-1700s",
            cardTitle: "Beginnings",
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
                  url: enoRiver
                }
            },

        },
        {
            title: "1800s-1860s",
            cardTitle: "Slavery and Civil War",
            media: {
                type: "IMAGE",
                source: {
                  url: civilWar
                }
            },
            cardDetailedText: "After the Revolutionary War, multiple \
            plantations and farms were established; these establishments\
             relied on slave labor provided by the Atlantic slave trade. \
             In 1849 Bartlett Durham gave land for a railroad station and \
             the area got named Durham after him. During the Civil War, North \
             Carolina was the last state to secede from the Union. A few weeks\
              after Robert E. Lee lost at Appomattox,  General Sherman (from the\
                 Union) and General Johnston (from the Confederacy) negotiated \
                 the South’s surrender in Durham."
        },
        {
            title: "1870s-1880s",
            cardTitle: "Rise of the Tobacco Trail",
            media: {
                type: "IMAGE",
                source: {
                  url: tobacco
                }
            },
            cardDetailedText: "Troops from both the North and South \
            who spent time in Durham soon learned of and developed a \
            fondness for Brightleaf tobacco, owned by Washington Duke.\
             The popularity of this tobacco led to the financial success \
             of the Duke family. The success of the tobacco industry led \
             to the development of more businesses in Durham."
        },
        {
            title: "1890s-1920s",
            cardTitle: "Development of Duke",
            media: {
                type: "IMAGE",
                source: {
                    url: jbDuke
                }
            },
            cardDetailedText: "In 1892, Trinity College moved to Durham \
            and was renamed Duke University in 1924 after James Buchanan \
            Duke made a 40 million dollar donation to the institution. "
        },
        {
            title: "1890s-1950s",
            cardTitle: "Durham and Civil Rights",
            media: {
                type: "IMAGE",
                source: {
                    url: mlk
                }
            },
            cardDetailedText: "Durham became a hub for African American \
            economy. John Merrick founded the North Carolina Mutual Life \
            Insurance Company in 1898, and this company is still the oldest \
            and largest life insurance company owned by an African American \
            in the United States. The area around NC Mutual Life became known \
            as “Black Wall Street” due to the number of African American owned \
            businesses in the area. Durham played an active role during the Civil\
             Right Movement, with Dr. Martin Luther King Jr. visiting the city in \
             the late 1950s. "
        }
    ];


    return(
        <div>
            <h1 className="history-header">HISTORY</h1>
            <div style={{width: "70%", height:"100%", margin: "auto"}}>
                <Chrono 
                    items={items}
                    mode="VERTICAL_ALTERNATING"
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