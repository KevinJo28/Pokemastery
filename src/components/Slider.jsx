
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';







const PokemonSlider = () => {
    SwiperCore.use([Autoplay, EffectCoverflow]);
  return (
    <div className="swiper-container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        modules={[EffectCoverflow]}
      >
        <SwiperSlide id="kanto">
          <img src="/src/images/mapaKanto.png" alt="a" />
          <div className="kantoInfo">
            <h1>Kanto</h1>
            <p>
              Primera región en la que se desarrolla la saga de videojuegos de
              Pokémon. Es la región que aparece en los
            </p>
            <p>
              Juegos: Pokémon Rojo, Azul, Amarillo, Oro, Plata, Cristal, Rojo
              Fuego, Verde Hoja, Oro HeartGold y Plata SoulSilver.
            </p>
            <p>Iniciales</p>
            <p style={{fontSize:"20px"}}>Squirtle,Bulbasur,Charmander</p>
            <img
              style={{
                width: "200px",
                height: "190px",
                marginTop: "-80px",
                padding: "0",
              }}
              src="src/images/inicialesKanto.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide id="johto">
          <img src="/src/images/mapaJohto.png" alt="" />
          <div className="johtoInfo">
            <h1>Johto</h1>
            <p>
              Segunda región introducida en los juegos de Pokémon Oro, Plata y
              Cristal. Es conocida por su tradición y conexión con la región de
              Kanto.
            </p>
            <p>Iniciales</p>
            <p style={{fontSize:"20px"}}>Chikorita,Cyndaquil,Totodile</p>
            <img
              style={{
                width: "200px",
                height: "190px",
                marginTop: "-50px",
                padding: "0",
              }}
              src="src/images/inicialesJohto.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide id="hoenn">
          <img src="/src/images/mapaHoenn.png" alt="" />
          <div className="hoennInfo">
            <h1>Hoenn</h1>
            <p>
              Tercera región que aparece en Pokémon Rubí, Zafiro, Esmeralda,
              Rubí Omega y Zafiro Alfa. Destacada por su clima tropical y su
              variada geografía.
            </p>
            <p>Iniciales</p>
            <p style={{fontSize:"20px"}}>Treecko,Torchic,Mudkip</p>
            <img
              style={{
                width: "200px",
                height: "190px",
                marginTop: "-50px",
                padding: "0",
              }}
              src="src/images/inicialesHoenn.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide id="sinnoh">
          <img src="/src/images/mapaSinnoh.png" alt="" />
          <div className="sinnohInfo">
            <h1>Sinnoh</h1>
            <p>
              Región presentada en los juegos Pokémon Diamante, Perla y Platino,
              además de Diamante Brillante y Perla Reluciente. Conocida por sus
              montañas y su mitología antigua.
            </p>
            <p>Iniciales</p>
            <p style={{fontSize:"20px"}}>Snivy,Tepig,Oshawott</p>
            <img
              style={{
                width: "200px",
                height: "190px",
                marginTop: "-50px",
                padding: "0",
              }}
              src="src/images/inicialesSinnoh.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide id="unova">
          <img src="/src/images/mapaTeselia.png" alt="" />
          <div className="unovaInfo">
            <h1>Unova</h1>
            <p>
              Región inspirada en la ciudad de Nueva York, presentada en Pokémon
              Blanco y Negro, así como en Blanco 2 y Negro 2. Conocida por su
              diversidad cultural y urbana.
            </p>
            <p>Iniciales</p>
            <p style={{fontSize:"20px"}}>Turtwig,Chimchar,Piplup</p>
            <img
              style={{
                width: "200px",
                height: "190px",
                marginTop: "-50px",
                padding: "0",
              }}
              src="src/images/inicialesUnova.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide id="kalos">
          <img src="/src/images/mapaKalos.png" alt="" />
          <div className="kalosInfo">
            <h1>Kalos</h1>
            <p>
              Región basada en Francia, introducida en Pokémon X y Y. Famosa por
              su belleza y estilo elegante.
            </p>
            <p>Iniciales</p>
            <p style={{fontSize:"20px"}}>Chespin,Fennekin,Froakie</p>
            <img
              style={{
                width: "200px",
                height: "190px",
                marginTop: "-50px",
                padding: "0",
              }}
              src="src/images/inicialesKalos.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide id="alola">
          <img src="/src/images/mapaAlola.png" alt="" />
          <div className="alolaInfo">
            <h1>Alola</h1>
            <p>
              Región tropical inspirada en Hawái, presentada en Pokémon Sol,
              Luna, Ultrasol y Ultraluna. Conocida por su clima cálido y sus
              variaciones regionales de Pokémon.
            </p>
            <p>Iniciales</p>
            <p style={{fontSize:"20px"}}>Rowlet,Litten,Popplio</p>
            <img
              style={{
                width: "200px",
                height: "190px",
                marginTop: "-50px",
                padding: "0",
              }}
              src="src/images/inicialesAlola.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide id="galar">
          <img src="/src/images/mapaGalar.png" alt="" />
          <div className="galarInfo">
            <h1>Galar</h1>
            <p>
              Región basada en el Reino Unido, introducida en Pokémon Espada y
              Escudo. Famosa por sus eventos de tipo estadio y su industria.
            </p>
            <p>Iniciales</p>
            <p style={{fontSize:"20px"}}>Grookey,Scorbunny,Sobble</p>
            <img
              style={{
                width: "200px",
                height: "190px",
                marginTop: "-50px",
                padding: "0",
              }}
              src="src/images/inicialesGalar.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide id="paldea">
          <img src="/src/images/mapaPaldea.jpg" alt="a" />
          <div className="paldeaInfo">
            <h1>Paldea</h1>
            <p>
              Región inspirada en la península ibérica, presentada en Pokémon
              Escarlata y Púrpura. Conocida por su vibrante cultura y su variada
              geografía.
            </p>
            <p>Iniciales</p>
            <p style={{fontSize:"20px"}}>Sprigatito,Fuecoco,Quaxly</p>
            <img
              style={{
                width: "200px",
                height: "190px",
                marginTop: "-50px",
                padding: "0",
              }}
              src="src/images/inicialesPaldea.png"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PokemonSlider