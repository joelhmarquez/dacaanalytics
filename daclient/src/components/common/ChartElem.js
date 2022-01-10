function ChartElem(props)
{
    return (
        <div>
            <br/>
            <div className="card lg-12">
                <div className="card-header">
                {props.title}
                </div>
                <div className="card-body">
                    {props.content}
                </div>
            </div>
            <br/>
        </div>
    );
}

export default ChartElem;