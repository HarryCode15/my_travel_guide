export default function Cards(props) {
  return (
    <>
    <div className="card">
      <img src={props.coverImg} alt="Japan" className="card-image" />
      <div className="card-internal">
        <div className="card-location">
          <img src="/images/location_icon.png" alt="Location logo" />
          <span>{props.location.city}</span>
          <a href={props.location.locUrl}>
            View on Google Maps
          </a>
        </div>

        <h1 className="card-title">{props.title}</h1>

        <span className="card-internal-date">{props.date}</span>

        <p>
          {props.description}
        </p>
      </div>
    </div>
    <hr/>
    </>
  );
}
