function SexGraphElem(props)
{
    return (
        <div>
            <br/>
            <div className="card lg-6">
                <div className="card-header">
                {props.title}
                </div>
                <div className="card-body">
                    {props.graphs}
                </div>
            </div>
            <br/>
        </div>
    );
}

export default SexGraphElem;