import { Link, useParams } from "react-router-dom";
import Nav from "Components/Nav";
import HouseCard from "Components/HouseCard";
import useFetchOneHouse from "hooks/useFetchOneHouse";
import FavoriteHeart from "Components/FavHeart";
import img1 from "../../static/1.jpg";
import img2 from "../../static/2.jpg";
import img3 from "../../static/3.jpg";
import img4 from "../../static/4.jpg";
import img5 from "../../static/5.JPG";
import img6 from "../../static/6.jpg";
import "./detail.scss";

const Detail = (props) => {
  const { propertycode } = useParams();

  const { house, similars } = useFetchOneHouse(propertycode);

  const distanceKm = Math.round(house.distance / 1000);
  const distanceBeachKm = Math.round(house.distancebeach / 1000);

  const goBackUrl = () => {
    const locationState = props.location.state;
    return locationState ? locationState.goBackPath : "/cities/valencia/houses";
  };

  return (
    <div className="detailPage">
      <div className="detailHeader">
        <img src={house.thumbnail} className="principalImg" />
        <Nav>
          <Link className="icon-TipoFlechaAtras" to={goBackUrl()} />
          <Link className="icon-TipoMenuHamb"></Link>
        </Nav>
      </div>

      <div className="detailPageTitleContaines">
        <h2 className="detailPageTitle">{house.address}</h2>
      </div>
      <div className="detailDetail">
        <div className="detailCityLeft">
          <div className="detail">
            <div className="icon">
              <span className="icon-TipoPrecio"></span>
            </div>
            <div>
              <p>{house.price}€/mes</p>
            </div>
          </div>
          <div className="detail">
            <div className="icon">
              <span className="icon-TipoCity"></span>
            </div>
            <div>
              <p>Distancia al </p>
              <p>centro({distanceKm}km)</p>
            </div>
          </div>
        </div>
        <div className="detailCityRight">
          <div className="detail">
            <div className="icon">
              <span className="icon-TipoPlaya"></span>
            </div>
            <div>
              <p>Distancia a la </p>
              <p>playa({distanceBeachKm}km)</p>
            </div>
          </div>
          <div className="detail">
            <div className="icon">
              <span className="icon-TipoWIFI"></span>
            </div>
            <div>
              <p>Velocidad de </p>
              <p>internet({house.internet}Mbps)</p>
            </div>
          </div>
        </div>
      </div>
      <div className="detailPageDescription">
        <h2 className="detailPageSectionTitle">Descripción</h2>
        <p>Piso para corta estancia. </p>
        <p>
          Este reformado piso a estrenar de {house.size}m2, está disponible para
          corta estancia, ubicado en {house.address}. La vivienda está compuesta
          por {house.rooms} dormitorio/s doble/s, {house.bathrooms} baño/s
          completo/s y salón-comedor con una terraza interior. También dispone
          de una cocina reformada y equipada con todos los electrodomésticos.
          Vivienda totalmente amueblada y para entrar y vivir. Las
          comunicaciones por transporte público son óptimas ya que se encuentra
          junto a diversas paradas de autobús y metro. Rodeado de parques y
          áreas verdes. Además en el área encontramos restaurantes exclusivos,
          centros comerciales, sitios de ocio, colegios, hospitales, parques,...
          Una zona maravillosa para alojarse.
        </p>
        <p>Llámenos para verla, estaremos encantados de atenderle.</p>
      </div>
      <div>
        <h2 className="detailPageSectionTitle">¿Qué hay en esa vivienda?</h2>
        <div className="extraInfo">
          <div className="detailCityLeft">
            <div className="detail">
              <div className="icon">
                <span className="icon-TipoTranquilidad"></span>
              </div>
              <div>
                <p>Zona tranquila 4/5</p>
              </div>
            </div>
            <div className="detail">
              <div className="icon">
                <span className="icon-TipoClima"></span>
              </div>
              <div>
                <p>Temperaturas</p>
                <p>medias(19ºC)</p>
              </div>
            </div>
            <div className="detail">
              <div className="icon">
                <span className="icon-TipoGaraje"></span>
              </div>
              <div>
                <p>Garaje</p>
              </div>
            </div>
            <div className="detail">
              <div className="icon">
                <span className="icon-TipoPiscina"></span>
              </div>
              <div>
                <p>Piscina</p>
              </div>
            </div>
            <div className="detail">
              <div className="icon">
                <span className="icon-TipoMetros"></span>
              </div>
              <div>
                <p>{house.size}m2</p>
              </div>
            </div>
          </div>
          <div className="detailCityRight">
            <div className="detail">
              <div className="icon">
                <span className="icon-TipoRuido"></span>
              </div>
              <div>
                <p>Ruido 3/5</p>
              </div>
            </div>
            <div className="detail">
              <div className="icon">
                <span className="icon-TipoAire-condicionado"></span>
              </div>
              <div>
                <p>Aire</p>
                <p>acondicionado</p>
              </div>
            </div>
            <div className="detail">
              <div className="icon">
                <span className="icon-TipoRadiador"></span>
              </div>
              <div>
                <p>Calefacción</p>
              </div>
            </div>
            <div className="detail">
              <div className="icon">
                <span className="icon-TipoAmoblado"></span>
              </div>
              <div>
                <p>Amueblado</p>
              </div>
            </div>
            <div className="detail">
              <div className="icon">
                <span className="icon-TipoDormitorio"></span>
              </div>
              <div>
                <p>{house.rooms} dormitorio/s</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="detailPageSectionTitle">Galería</h2>
        <div className="imgGaleryWraper">
          <div className="galeryLine">
            <div className="imgGalery">
              <img src={img1} alt="imágen 1" className="staticImg" />
            </div>
            <div className="imgGalery">
              <img src={img2} alt="imágen 2" className="staticImg" />
            </div>
          </div>
          <div className="galeryLine">
            <div className="imgGalery">
              <img src={img3} alt="imágen 3" className="staticImg" />
            </div>
            <div className="imgGalery">
              <img src={img4} alt="imágen 4" className="staticImg" />
            </div>
          </div>
          <div className="galeryLine">
            <div className="imgGalery">
              <img src={img5} alt="imágen 5" className="staticImg" />
            </div>

            <div className="imgGalery">
              <img src={img6} alt="imágen 6" className="staticImg" />
            </div>
          </div>
        </div>
      </div>
      <div className="similarHousesFrame">
        <h2 className="detailPageSectionTitle">Viviendas similares</h2>
        {similars !== undefined ? (
          <section className="catalogueContainer">
            {similars
              .filter((home) => home.propertycode !== house.propertycode)
              .map((house, i) => {
                return <HouseCard key={i} {...house} />;
              })}
          </section>
        ) : (
          <p className="notFoundMessage">
            No se han encontrado viviendas similares
          </p>
        )}
      </div>
      <div className="footer">
        <div className="footerIconContainer">
          <FavoriteHeart propertycode={propertycode} />
        </div>
        <div className="footerIconContainer">
          <span className="icon-TipoMapaBlanco"></span>
        </div>
        <div className="footerContantContainer">
          <span className="icon-TipoTelefono"></span>
          <p className="contact">Contactar</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
