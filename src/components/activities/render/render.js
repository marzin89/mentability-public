// Importerar React och Link från React Router
import React from 'react';
import { Link } from 'react-router-dom';

/* Komponent som renderar en rad med aktiviteter. 
    Textinnehållet skrivs ut i avkortad form. För slutdatum 
    görs en kontroll eftersom detta är en frivillig uppgift.
    Inläggets id lagras i localStorage så att det kan 
    hämtas från undersidan för aktiviteter */
function Render(props) {
    return (
        <div className="row">
            {props.activities.map((activity) => {
                return (
                    <article key={activity.id} className="activity">
                        <h3>{activity.title}</h3>
                        {activity.endDate ? 
                        <div>
                            <p className="date">{activity.startDate.slice(0, 10) + ' –'}</p>
                            <p className="date">{activity.endDate.slice(0, 10)}</p>
                        </div> 
                        : 
                        <p className="date">{activity.startDate.slice(0, 10)}</p>}
                        <p>{activity.content.slice(0, 150) + ' ...'}</p>
                        <Link id={`activity${activity.id}`} className="find-out-more" to="/activity"
                            onClick={() => {localStorage.setItem('activityId', activity.id)}}>
                            Läs mer</Link>
                    </article>
                )
            })}
        </div>
    )
}

// Exporterar komponenten
export default Render;