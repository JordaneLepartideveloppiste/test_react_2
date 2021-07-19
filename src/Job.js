import "./Job.css"

function Job(props) {
        if (props.className === "red" || props.className === "green")
          {
    return (
      <div className="job">
        <div className={props.className} id="card_job">
          <span>
            {props.title} - {props.city}
          </span>

          <p>
            {props.contractType} - {props.country} - {props.city}
          </p>
        </div>
      </div>
    ); } else {
        return (
          <div className="job">
            <div className={props.className} id="card_job">
              <span>{props.title}</span>

              <p>
                {props.contractType} - {props.country} - {props.city}
              </p>
            </div>
          </div>
        );
    }
}

export default Job
