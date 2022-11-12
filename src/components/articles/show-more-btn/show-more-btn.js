function ShowMoreBtn(props) {
    function handleLinkClick(e) {
        e.preventDefault();
        props.function();
    }

    return (
        <div className="show-more">
            <a className="show-more-link" href="" onClick={(e) => 
                handleLinkClick(e)}>Visa fler</a>
        </div>
    );
}

export default ShowMoreBtn;