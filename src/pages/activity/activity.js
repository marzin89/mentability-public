import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Quote from '../../components/quotes/quote';

function Activity() {
    const activity = useSelector((state) => state.activity.activity);
    const text = useSelector((state) => state.activity.text);
    console.log(Array.isArray(text));

    useEffect(() => {
        document.title = activity.title;
    })

    return (
        <main className="main-subpage">
            <Quote />
            <div className="gray-section">
                <h1>{activity.title}</h1>
                <div className="article">
                    {activity.endDate ? 
                    <div>
                        <p className="date">{activity.startDate.slice(0, 10) + ' –'}</p>
                        <p className="date">{activity.endDate.slice(0, 10)}</p>
                    </div> 
                    : 
                    <p className="date">{activity.startDate.slice(0, 10)}</p>}
                    {Array.isArray(text) ? text.map((paragraph) => {
                        return (
                            <p>{paragraph}</p>
                        );
                    }) : <p>{text}</p>}
                </div>
            </div>
        </main>
    );
}

export default Activity;