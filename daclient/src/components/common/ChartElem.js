function SexGraphElem(props)
{
    return (
        <div className="card mb-3">
            <div className="card-header text-center">
            {props.title}
            </div>
            <div className="card-body">
                {props.graphs}
            </div>
        </div>
    );
}

export default SexGraphElem;