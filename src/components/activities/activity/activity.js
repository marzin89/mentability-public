import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { activityActions } from '../../../store/slices/activity-slice';

function Activity(props) {
    const dispatch = useDispatch();

    return (
        <article key={props.activity.id} id={props.activity.id} 
            className={`activity ${props.class}`}>
            <h3>{props.activity.title}</h3>
            {props.activity.endDate ?
            <div>
                <p className="date">{props.activity.startDate.slice(0, 10) + ' –'}</p>
                <p className="date">{props.activity.endDate.slice(0, 10)}</p>
            </div> 
            : 
            <p className="date">{props.activity.startDate.slice(0, 10)}</p>}
            <p>{props.activity.content.slice(0, 150) + ' ...'}</p>
            <Link className="find-out-more" to="/activity"onClick={(e) => 
                dispatch(activityActions.getActivity(e.currentTarget.parentElement.id))}>
                    Läs mer</Link>
        </article>
    );
}

export default Activity;