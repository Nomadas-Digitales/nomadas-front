import "./cityDetail.scss";

const CityDetail = () => {
  return (
    <section>
      <div className="detailCity">
        <div className="detailCityLeft">
          <div className="detail">
            <div className="icon">
              <span className="icon-TipoClima"></span>
            </div>
            <div>
              <p>Soleado</p>
              <p>19º</p>
            </div>
          </div>
          <div className="detail">
            <div className="icon">
              <span className="icon-TipoSeguridad"></span>
            </div>
            <div>
              <p>Seguridad</p>
              <p>4/5</p>
            </div>
          </div>
          <div className="detail">
            <div className="icon">
              <span className="icon-TipoPrecio"></span>
            </div>
            <div>
              <p>Coste medio</p>
              <p>2.138€/mes</p>
            </div>
          </div>
        </div>
        <div className="detailCityRight">
          <div className="detail">
            <div className="icon">
              <span className="icon-TipoTransporte"></span>
            </div>
            <div>
              <p>Transporte</p>
              <p>Público</p>
            </div>
          </div>
          <div className="detail">
            <div className="icon">
              <span className="icon-TipoCarSharing"></span>
            </div>
            <div>
              <p>Vehículos</p>
              <p>Sharing</p>
            </div>
          </div>
          <div className="detail">
            <div className="icon">
              <span className="icon-TipoWIFI"></span>
            </div>
            <div>
              <p>Velocidad medio</p>
              <p>(150Mbps)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CityDetail;
