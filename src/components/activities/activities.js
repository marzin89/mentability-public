import Activity from './activity/activity';
import ShowMoreBtn from './buttons/show-more-btn';
import { useState } from 'react';
import { useSelector } from 'react-redux';

function Activities() {
    const activities = useSelector((state) => state.activity.activities);
    const [numberOfActivities, setNumberOfActivities] = useState(3);

    function showMore() {
        setNumberOfActivities((prev) => prev + 3);
    }

    return (
        <section id="activities">
            <h2 className="h2-home">Aktiviteter</h2>
            <div className="row">
                {activities.length ? activities.map((activity, index) => {
                    return (
                        <Activity activity={activity} class={index < numberOfActivities ?
                            '' : 'hide'} />
                    );
                }) :
                <p className="error" role="alert">Ett serverfel har uppstått. 
                    Innehållet kan inte visas för tillfället. Försök igen lite senare.</p>}
            </div>
            {activities.length ? <div>{numberOfActivities < activities.length ? 
                <ShowMoreBtn function={showMore} />: null} </div> : null }
        </section>
    );
}

export default Activities;