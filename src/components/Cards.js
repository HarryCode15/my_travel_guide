export default function Cards() {
  return (
    <>
    <div className="card">
      <img src="/images/japan.jpg" alt="Japan" className="card-image" />
      <div className="card-internal">
        <div className="card-location">
          <img src="/images/location_icon.png" alt="Location logo" />
          <span>JAPAN</span>
          <a href="https://earth.google.com/web/search/mt+fuji/@35.3702535,138.72330454,3299.36727948a,35789.07334182d,35y,39.06397929h,0.17340632t,0r/data=CigiJgokCdRcPmLjoEJAEQFRoLIiNkFAGVyoudUhtWFAIbfgJPDevWBAOgMKATA">
            View on Google Maps
          </a>
        </div>

        <h1 className="card-title">Mount Fuji</h1>

        <span className="card-internal-date">12 Jan, 2021 - 24 Jan, 2021</span>

        <p>
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists.
        </p>
      </div>
    </div>
    <hr/>
    </>
  );
}
