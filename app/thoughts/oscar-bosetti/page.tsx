import type { Metadata } from "next";
import Image from "next/image";

const title = "Oscar Bosetti — Santiago Ruberto";
const description =
  "Un recuerdo de Oscar Bosetti, con textos de sus amigos, colegas y alumnos.";
const url = "https://www.santiagoruberto.com/thoughts/oscar-bosetti";
const imageUrl = "https://www.santiagoruberto.com/images/oscar-bosetti.png";
const imageAlt =
  "Ilustración de Oscar Bosetti con un micrófono y una radio, junto a Osvaldo Soriano y Diego Maradona.";

export const metadata: Metadata = {
  title,
  description,
  authors: [{ name: "Santiago Ruberto" }],
  alternates: { canonical: url },
  openGraph: {
    type: "article",
    title,
    description,
    url,
    siteName: "Santiago Ruberto",
    locale: "es_AR",
    images: [{ url: imageUrl, width: 1720, height: 1000, alt: imageAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [imageUrl],
  },
};

export default function OscarBosettiPage() {
  return (
    <main className="post-page" lang="es">
      <article>
        <h1>Oscar Bosetti</h1>
        <Image
          className="post-image"
          src="/images/oscar-bosetti.png"
          alt={imageAlt}
          width={1720}
          height={1000}
          sizes="(max-width: 555px) calc(100vw - 48px), 507px"
          preload
        />
        <h2 className="post-date">Jueves 24 de septiembre de 2026.</h2>

        <p>{"Son las 18:00 en Buenos Aires, 16:00 en Panamá."}</p>

        <p>{"Ayer a la tarde, a eso de las 11 de la mañana (PST), mi mamá me mandó el siguiente mensaje:"}</p>

        <blockquote>
          <p>{"Hola Santi. Se agravó la situación de Oscar. Lo están trasladando a un lugar de más complejidad, el ICBA. Parece que no hay muchas chances. Me estoy yendo a BA. Me lleva Valen."}</p>
        </blockquote>

        <p>{"Quedé congelado. Me dije a mí mismo, no debe ser tan grave."}<br />{"Mi mamá ha acompañado a Oscar en decenas de estas situaciones, y nunca me había mandado un mensaje así. Ahí me preocupé en serio."}</p>

        <p>{"No podía trabajar. Me fui a duchar para tratar de despejar. Cómo que “no hay muchas chances”? Cómo se va a morir Oscar? Si ayer estaba bien! Decidí, ante la duda, sacar el primer avión que saliera a Buenos Aires. Con la esperanza de que esto va a ser solo un susto y vamos a tener Oscar para rato. Por eso estoy escribiendo esto desde el aire."}</p>

        <p>{"Mientras armaba la valija, se me vino a la cabeza el poema Límites, de Borges:"}</p>

        <blockquote className="post-poem">
          <p>
            {"De estas calles que ahondan el poniente,"}
            <br />
            {"una habrá (no sé cuál) que he recorrido"}
            <br />
            {"ya por última vez, indiferente"}
            <br />
            {"y sin adivinarlo, sometido"}
          </p>

          <p>
            {"a Quién prefija omnipotentes normas"}
            <br />
            {"y una secreta y rígida medida"}
            <br />
            {"a las sombras, los sueños y las formas"}
            <br />
            {"que destejen y tejen esta vida."}
          </p>

          <p>
            {"Si para todo hay término y hay tasa"}
            <br />
            {"y última vez y nunca más y olvido"}
            <br />
            {"¿quién nos dirá de quién, en esta casa,"}
            <br />
            {"sin saberlo nos hemos despedido?"}
          </p>

          <p>
            {"Tras el cristal ya gris la noche cesa"}
            <br />
            {"y del alto de libros que una trunca"}
            <br />
            {"sombra dilata por la vaga mesa,"}
            <br />
            {"alguno habrá que no leeremos nunca."}
          </p>

          <p>
            {"Hay en el Sur más de un portón gastado"}
            <br />
            {"con sus jarrones de mampostería"}
            <br />
            {"y tunas, que a mi paso está vedado"}
            <br />
            {"como si fuera una litografía."}
          </p>

          <p>
            {"Para siempre cerraste alguna puerta"}
            <br />
            {"y hay un espejo que te aguarda en vano;"}
            <br />
            {"la encrucijada te parece abierta"}
            <br />
            {"y la vigila, cuadrifronte, Jano."}
          </p>

          <p>
            {"Hay, entre todas tus memorias, una"}
            <br />
            {"que se ha perdido irreparablemente;"}
            <br />
            {"no te verán bajar a aquella fuente"}
            <br />
            {"ni el blanco sol ni la amarilla luna."}
          </p>

          <p>
            {"No volverá tu voz a lo que el persa"}
            <br />
            {"dijo en su lengua de aves y de rosas,"}
            <br />
            {"cuando el ocaso, ante la luz dispersa,"}
            <br />
            {"quieras decir inolvidables cosas."}
          </p>

          <p>
            {"¿Y el incesante Ródano y el lago,"}
            <br />
            {"todo ese ayer sobre el cual hoy me inclino?"}
            <br />
            {"Tan perdido estará como Cartago"}
            <br />
            {"que con fuego y con sal borró el latino."}
          </p>

          <p>
            {"Creo en el alba oír un atareado"}
            <br />
            {"rumor de multitudes que se alejan;"}
            <br />
            {"son los que me han querido y olvidado;"}
            <br />
            {"espacio y tiempo y Borges ya me dejan."}
          </p>
          <cite>{"Jorge Luis Borges, 1960"}</cite>
        </blockquote>

        <p>{"Cuando lo leí por primera vez, se quedó conmigo la primera parte:"}</p>

        <blockquote className="post-verse">
          <p>
            {"De estas calles que ahondan el poniente,"}
            <br />
            {"una habrá (no sé cuál) que he recorrido"}
            <br />
            {"ya por última vez, indiferente"}
            <br />
            {"y sin adivinarlo, sometido"}
          </p>

          <p>
            {"a Quién prefija omnipotentes normas"}
            <br />
            {"y una secreta y rígida medida"}
            <br />
            {"a las sombras, los sueños y las formas"}
            <br />
            {"que destejen y tejen esta vida."}
          </p>
        </blockquote>

        <p>{"Me lo había compartido un amigo cuando me estaba yendo del país. Estábamos reflexionando sobre qué lindo fue vivir en avenida Melián y preguntándonos si alguna vez me mudaría de nuevo ahí. Ahora, un poco menos alegre, la parte que resonaba conmigo era:"}</p>

        <blockquote className="post-verse">
          <p>
            {"Si para todo hay término y hay tasa"}
            <br />
            {"y última vez y nunca más y olvido"}
            <br />
            {"¿quién nos dirá de quién, en esta casa,"}
            <br />
            {"sin saberlo nos hemos despedido?"}
          </p>
        </blockquote>

        <p>{"Quiero creer que este no es el final de mi relación con Oscar. Quiero creer que esa última vez que nos vimos, en mi casa, no me despedí de él sin saberlo. En el fondo, todavía creo que va a salir de esta, aunque los médicos nos vienen diciendo que las chances son muy bajas."}</p>

        <p>{"Mi mamá y él están juntos desde antes de que yo tuviera conciencia."}</p>

        <p>{"Naturalmente, no recuerdo cuando fue que nos conocimos."}<br />{"Lo que sí recuerdo muy bien es que, cuando lo conocí, no lo quería ni un poquito."}<br />{"No por él."}<br />{"Oscar no tenía nada que ver."}<br />{"Había dos razones."}</p>

        <p>{"La primera era que todos mis amiguitos de la primaria tenían a sus padres juntos. Yo no. Me torturaban a preguntas sobre cómo era esa anomalía, qué se sentía, con quién pasaba la Navidad, si se llevaban bien, cómo había pasado. Todo sin filtro ni suavizante, con esa curiosidad de los chicos a la que ninguna respuesta le alcanza."}</p>

        <p>{"Cada vez que lo veía a Oscar, me acordaba de todas esas preguntas incómodas. De que mi familia no era como la de mis amigos."}</p>

        <p>{"La segunda razón era que a mí me gustaba dormir con mi mamá, en la misma cama, porque me daba miedo dormir solo."}</p>

        <p>{"Cuando Oscar venía de Buenos Aires, mi lugar dejaba de ser mío. Me mandaban a mi pieza, a dormir solo con mis miedos."}</p>

        <p>{"De nuevo, no era nada contra Oscar Bosetti."}</p>

        <p>{"Me molestaba que mi mamá tuviera novio. Que mis amigos pensaran que ese novio era mi papá. Y que, cuando les aclaraba que no, me preguntaran si era mi padrastro, cuál era su rol en mi vida, dónde estaba mi papá real. Yo no sabía qué decirles ni cómo frenar la catarata de preguntas."}</p>

        <p>{"Todo esto, sumado a que cuando él venía de Buenos Aires, yo me veía forzado a dormir solo, hizo que, en la mente del Santiago de 6 años, Oscar se convirtiera en mi máximo enemigo."}</p>

        <p>{"El Enemigo."}</p>

        <p>{"Yo le repetía a mi mamá que no lo quería ni un poquito. Un tipo que habla así de raro, con esa voz tan grave! No se le entiende nada. Usa palabras complicadas, habla todo formal y, cuando se queda trabajando hasta tarde con Sabina de fondo, canta todas las canciones con una vocecita muy aguda que no se parece ni un poco a la original!"}</p>

        <p>{"No había forma de que aceptara a Oscar en mi vida. No quería que viniera a casa. No lo quería ver. No me caía bien. No quería tener que responder preguntas de mis amigos. No quería dormir solo. No quería que mi mamá tuviera ningún novio. Y mucho menos este tipo que habla así!"}</p>

        <p>{"No sé si mi mamá le comentaba mis protestas, nunca le pregunté. Lo que sí recuerdo es que el máximo Enemigo, a medida que yo crecía, empezaba a venir de Buenos Aires siempre con regalos."}</p>

        <p>{"Al principio, por un tema de valores y moral, no me interesaban ni un poquito los regalos que tenía para ofrecerme."}</p>

        <p>{"El problema es que, como buen periodista, el Enemigo siempre me hacía muy buenas preguntas sobre qué me gustaba. Por eso sus regalos eran tan acertados."}<br />{"Pasaporte de Mundo Gaturro, álbum del Mundial, los paquetes de figuritas, cartas de Dragon Ball Z y más cosas porteñas que no eran tan comunes en Paraná (o que mi mamá no me quería comprar)."}</p>

        <p>{"No sé si fueron los regalos, siempre tan bien elegidos; las visitas a Buenos Aires, cuando nos mostraba la ciudad y yo descubría que todos los porteños parecían hablar así de raro; las incontables veces que nos llevaba a comer a lugares nuevos, donde veía cómo todos los mozos lo querían; sus ganas de hablar, de las que nunca podían escapar los taxistas; o las charlas en las que siempre me preguntaba por mis pasiones, como si a él también le interesaran. No sé cuál de esas cosas me fue ablandando, o si fue la suma de todas y de alguna más. Sé que, poco a poco, el Enemigo dejó de serlo y empezó a tener otros nombres. Oscar, Oscarcito, Osqui, Wancosqui, Rulo."}</p>

        <p>{"A medida que crecía, me iba amigando con la idea de que mi familia no era como las demás, pero que así me gustaba. Me gustaba más mi familia con Oscar siendo parte de ella."}</p>

        <h2 className="post-date">Viernes 25 de septiembre de 2026.</h2>

        <p>{"Llegué a Buenos Aires a las 00:15. A la Buenos Aires que conocimos junto a él. Fui directamente para Colpayo 609. Su departamento en Caballito."}</p>

        <p>{"Bajó mi mamá a abrirme y nos abrazamos. El abrazo duró más de lo normal. Le faltaba la alegría de siempre. La sentí triste, con miedo, asustada de lo que podía pasar. Subimos al 3ro B. Comí un alfajor de los que siempre tiene Oscar en la heladera, me duché y guardé mis cosas."}</p>

        <p>{"Mi mamá me preguntó si quería dormir en el sillón o con ella en la cama de Oscar. Dormí con ella, como cuando tenía 6 años. A diferencia de cuando era chico, que lloraba cuando Oscar venía porque no me quería ir a dormir solo, esa noche lloré pidiendo todo lo contrario. Pidiendo que viniera. Yo ya afronté mis miedos. Ya aprendí a dormir solo. Ya no le tengo miedo a los monstruos. Lloré pidiendo por favor que salgas de esta, Oscar, que quiero que me corrijas este texto. Que quiero seguir recorriendo Buenos Aires con vos, conociendo restaurantes, hablando con taxistas. Volvé, Oscarcito, que quiero seguir teniendo a mi familia completa."}</p>

        <h2 className="post-date">Domingo 27 de septiembre de 2026.</h2>

        <p>{"Oscar murió el domingo 27 de septiembre."}</p>

        <p>{"Ese día a la mañana llovió, a la tarde salió el sol. Su Ferro que tanto quería ganó."}</p>

        <p>{"Te voy a extrañar, Oscar. Te quise mucho."}</p>

        <div className="post-photo-pair">
          <Image
            src="/images/oscar-bosetti-family.jpg"
            alt="Oscar Bosetti junto a su familia."
            width={2648}
            height={2359}
            sizes="(max-width: 555px) calc((100vw - 64px) / 2), 246px"
          />
          <Image
            src="/images/oscar-bosetti-restaurant.jpg"
            alt="Oscar Bosetti compartiendo una mesa en un restaurante."
            width={4320}
            height={2432}
            sizes="(max-width: 555px) calc((100vw - 64px) / 2), 246px"
          />
        </div>

        <hr className="post-tributes-divider" />

        <p className="post-tributes-intro">{"Copio acá los mejores textos que escribieron sus colegas, alumnos, amigos y la gente que lo quería. Escriben mucho mejor que yo. Los guardo para no perderlos en el futuro, porque sé que voy a querer volver a leerlos y va a ser muy difícil encontrarlos."}</p>

        <h2 className="post-tribute-title">{"ETER (@escuelaeter) 27 de septiembre de 2026."}</h2>

        <p>{"En estas horas se nos fue Oscar Bosetti."}</p>

        <p>{"Fue y seguirá siendo el más grande investigador de la radiofonía argentina. El más imponente y profundo de los biógrafos de un medio al que dedicó su vida."}</p>

        <p>{"Sus libros tienen precisión quirúrgica y hondura sentimental en cada recorrido por los 106 años de historia de su amor. Sin melancolías, porque si algo lo destacó fue haber analizado a la Radio con sentido de proyección permanente."}</p>

        <p>{"Nunca permitió que el terremoto tecnológico lo hiciera dudar del futuro del medio. Justificó con una estatura académica descomunal que la Radio es imperecedera. Le contestó a cada presagio sobre sus muertes y, acaso, la suya es hoy una semblanza perfecta de la razón que tenía al defenderla."}</p>

        <p>{"Las clases de Bosetti fueron, durante décadas, un alma sagrada de las carreras de Comunicación y del mundo radiofónico, en cualquiera de las sedes de esa Universidad pública a la que amaba con igual intensidad. Y fue, también, como idealista y docente co-fundador, el sabio que dotó a ETER del espíritu que nos impregna respecto de todo marco conceptual imprescindible."}</p>

        <p>{"No sería justo decir que eran teóricas esas clases suyas. Una en particular, sobre La Guerra de los Mundos de Orson Welles en 1938, fue durante años una exposición probablemente inigualable. Ningún estudiante podía salir de esa clase sin las piernas aflojadas ante semejante ejemplificación del poder ficcional."}</p>

        <p>{"La congoja que hay en tantos ámbitos pedagógicos por su muerte es de las más impactantes que se haya registrado, porque no existe quien no lo quisiera, admirara y respetase."}</p>

        <p>{"A veces se trata de rendirse al dolor, sin rebusques."}</p>

        <p>{"En medio de la selva mediática, cada vez que se piense en cómo mejorar la calidad de la comunicación, el nombre de Oscar Bosetti es una referencia ineludible. Para la Radio en particular, porque hay amores y sabidurías que son invencibles."}</p>

        <p>{"— Eduardo Aliverti"}</p>

        <hr />

        <h2 className="post-tribute-title">{"Rengos - 27 de Septiembre de 2026"}</h2>

        <p>{"Andaremos rengos, con las charlas agujereadas y los vasos de vino un poco insulsos. Pero ahí va a estar Oscar, como siempre, hasta que las velas no ardan, en conversaciones interminables. Eternas como —decía— era la radio."}</p>

        <p>{"Hoy nos dejó el más porteño de los amigos. El que conocimos —y admiramos— como profesor en la carrera de Comunicación, allá arrancando los '90; el compañero de nuestra amiga Aixa; el que se volvió amigo indispensable, dispuesto a la charla y a los planes (varias fotos aquí son de Puerto Ruiz y Gualeguay, en una escapada que hicimos buscando huellas de Emma y Juan L)."}</p>

        <p>{"Sin darnos cuenta, hace más de 30 años que lo escuchamos. Y siempre ha sido un placer. Supongo que porque su amor por la radio era el mismo que tenía por la palabra. Y le rendía culto. Si era con amigos, brasas y copas, mejor."}</p>

        <p>{"La radio. Sabina. La Facu. Ferro."}<br />{"La Facu. La radio. Ferro. Sabina."}<br />{"¿Ferro primero?"}<br />{"No sé cómo ordenaría él sus pasiones (si es que las pasiones pueden ordenarse), pero por ahí iban."}<br />{"Que nada de eso te falte Oscar. Amigos tenés y, como sabés, son para siempre."}</p>

        <p>{"- Violeta Meyer"}</p>

        <hr />

        <h2 className="post-tribute-title">{"Silencio de Radio - El Telégrafo de Entre Ríos (@eltelegrafoer), 27 de septiembre 2026."}</h2>

        <p>{"Oscar Bosetti, dedicado profesor de la Facultad de Ciencias de la Educación (UNER), dejó nuestro plano existencial para unirse al éter. A partir de ahora un lector de El Telégrafo de Entre Ríos ya no leerá las crónicas y notas que con tanto empeño escribimos."}</p>

        <p>{"Cuando éramos estudiantes, el profe no dudaba un solo segundo en ayudarnos con una rifa o una colaboración para poder viajar y charlar un rato de lo mal que estaba el mundo, era ese con quien se podía hablar en clases y el que guiaba a sus alumnos para que pudieran realizar sus trabajos de la mejor manera, tuvieran 20 o 78 años."}</p>

        <p>{"Bosetti era de esos que hacían paro activo, \"quedarse sentado sin hacer nada no tiene sentido\" me dijo en la última jornada de paro nacional. Fue el único que valoró el trabajo de quienes nadie valora. Nos faltará un seguidor, un guía, un compañero de trabajo, un investigador de nuestra querida radio, nos faltará un profesor, pero nos quedan sus enseñanzas y su recuerdo para siempre. Desde aquí, un abrazo grande para sus familiares y amigos."}</p>

        <p>{"- César Penna"}</p>

        <hr />

        <h2 className="post-tribute-title">{"Abrazote — Río Bravo - 28 de septiembre de 2026"}</h2>

        <p>{"Hoy despedimos a Oscar. No hablaremos de las lágrimas ni de la congoja, no hace falta, todos quienes lo conocieron de cerca o de lejos las estamos compartiendo en las redes o en los mensajes que nos enviamos. Nos preguntamos cómo recordarlo, ¿como hincha verdolaga, como docente, como comunicador, como luchador social comprometido, como intelectual al servicio del pueblo? Es todo eso, todo a la vez, en un mismo hombre."}</p>

        <p>{"Ayer ganó Ferro Carril Oeste. Ganó en el Bajo Núñez y se alejó tres puntos más en la punta. Tal vez a unos cuantos no les importen mucho estos datos, a Oscar Bosetti sí le importaban. \"Nos quedan seis finales\", respondía hace una semana a los amigos que le enviaban mensajes celebrando la victoria de Ferro el sábado anterior. Ahora, a Ferro le quedan cinco finales. Ahora, los hinchas de Ferro ven muy cerca el ascenso que por 26 años les fue negado."}</p>

        <p>{"\"Ferro es una metáfora de la clase media argentina\" había dicho Bosetti, para analizar el descenso del club de sus amores, en una entrevista a comienzos del siglo. Hablara de fútbol, de radio, de la universidad o del barrio, Oscar siempre lo haría con referencias a la situación social y política. En la universidad fue alumno de Aníbal Ford, de Jorge Rivera, de Eduardo Romano. Pero al que nunca dejó de referenciar como maestro es Timoteo Griguol."}</p>

        <p>{"Todos los que integramos Río Bravo fuimos alumnos de Oscar en alguna de sus cátedras en la carrera de Comunicación Social. Nunca lo manifestamos, pero intentamos hacer Río Bravo poniendo todo lo que aprendimos con él, de él. O sea, todo lo conceptual, lo que tenga que ver con lograr que esto sea lo más comunicable posible, jamás perder de vista la democratización de la comunicación, los tips para la escritura, la dosificación de la información, esas cosas que hacen al oficio del periodista. Y la decencia y el respeto, aspectos sobre los que dio cátedra con el testimonio diario de su vida."}</p>

        <p>{"El Guillo Kendziur, cómplice suyo en unos cuantos proyectos dijo una vez: \"el Oscarcito con su voz cándida\". Hablaba de la voz de Oscar, la que conocimos en sus clases, en la charla de amigos y a través del aparato de radio. Hablaba de su voz, y a la vez hablaba de Oscar, un hombre \"en el buen sentido de la palabra, bueno\", a lo Machado. Oscar Bosetti es la mayor referencia para quien necesite indagar sobre la historia de la radio argentina, ahí están sus libros y sus investigaciones. Y están sus clases y sus producciones en radio abierta y en streaming. Y no decimos más, porque a él le daría vergüenza. Si estamos seguros de que la radio \"no morirá mientras exista la palabra\" es porque él nos lo enseñó ya a mediados de los 90, cuando muchos creían cerca el apocalipsis."}</p>

        <p>{"Estamos compungidos y sorprendidos. En contra de lo que nos decían los partes médicos, decíamos que su corazón verdolaga era capaz de seguir resistiendo indefinidamente, si le sobraba entrenamiento. Diremos que en todo caso, el que no resistió fue el músculo, ese que hace sístole y diástole. Porque al verdadero corazón de Oscar, ese que sobrevivió dictaduras y persecuciones; el que enfrentó todas las crisis y ajustes; el que en el peor de los contextos viene remontando cuarto siglo en el descenso, ese corazón no se apaga nunca. Si cuando salió a la cancha recibió la recordada palmada del viejo Timoteo y jugó todos los partidos que le tocó con la dignidad y frente alta que corresponde."}</p>

        <p>{"La lucha continúa, nos quedan muchas movilizaciones todavía. Hay que seguir llenando aulas, calles y tribunas. Oscar estará allí, siempre. Y al terminar la jornada nos diremos una vez más, \"abrazote, querido verdolaga\"."}</p>

        <p>{"- Claudio Puntel"}</p>

        <hr />

        <h2 className="post-tribute-title">{"Una tristeza"}</h2>

        <p>{"Falleció este domingo Oscar Bosetti, mi amigo. Una queridísima persona que conocí a instancias de su compañera Aixa y que el último tiempo se convirtió indispensable en esta cosa que no hay que abandonar nunca, que es hablar de las cosas que nos gustan. Así fue mi relación con Oscar. Charlas interminables sobre libros, música, política, cine, medios. Siempre me impresionó que esa voz radiofónica que había escuchado en el aula cuando lo tuve de profesor sea la misma en un asado. Una forma de hablar redonda. Un tipo culto con un humor delicadísimo y ocurrente, un interlocutor extraordinario que ya extraño a horrores."}</p>

        <p>{"Los últimos años hicieron que no pasaran 15 días que no nos juntáramos para ese encuentro bello, placentero, agradable y trasnochado."}</p>

        <p>{"A Oscar lo conocí como alumno, ejerciendo la docencia en la facultad de Comunicación que lo tuvo como protagonista y docente inclaudicable. Unos años después la vida nos encontró en la misma cuadra y caminamos juntos. Un tipo genial, de otra época. Una rara avis. Un porteño de ley que encontró en Paraná vaya a saber qué calidez. Un jefe de Caballito. Con Jorge Riani y Juan Cruz Varela inventamos en los últimos años una especie de viaje de estudios, que consistía en ir a Caballito a pasar unos días y que el \"el jefe\" disponga. No había bar, bodegón o café que el mozo no se acercara a saludar a Oscar. Hace 10 días emprendimos una de esas iniciativas locas. Nos fuimos con Luz y Aixa a la isla Martín García. Paramos en su departamento de calle Colpayo, pateamos Caballito, calle Corrientes, fuimos al teatro y terminamos como corresponde: tomando un vino. Cuando nos despedimos ese domingo, para emprender la vuelta a Paraná, nos dimos un abrazo apretado. Me dijo al oído \"qué bien que la pasamos, Fede\", sólo atiné a contestarle \"como siempre\". Oscar querido, todo estuvo buenísimo. Te recordaré como una persona hermosa que tuviste una tenacidad inagotable para que todo se trate de pasar buenos momentos."}</p>

        <p>{"- Federico Malvasio"}</p>

        <hr />

        <h2 className="post-tribute-title">{"Oscar Bosetti (1955-2026) Universidad Nacional de Quilmes"}</h2>

        <p>{"Con profunda tristeza, la comunidad universitaria de la Universidad Nacional de Quilmes despide a Oscar Bosetti, quien falleció el 27 de septiembre de 2026 a sus 71 años. Doctor en Comunicación, locutor y docente-investigador, Bosetti fue una figura imprescindible para comprender la historia de la radiofonía argentina, pionero en la sistematización del lenguaje sonoro, y gran arquitecto de la “escuela radial” en nuestra casa de altos estudios."}</p>

        <p>{"Entre 1996 y 2021, Bosetti desplegó una labor docente ininterrumpida en el Departamento de Ciencias Sociales y en la Escuela Universitaria de Artes. A través de asignaturas emblemáticas como "}<em>{"Seminario y taller de radio"}</em>{", "}<em>{"Historia de los medios y sistemas de comunicación"}</em>{" y el"}<em>{" Taller permanente de periodismo radiofónico"}</em>{", formó a generaciones de estudiantes de la Licenciatura en Comunicación Social, la Tecnicatura en Producción Digital y la Licenciatura en Composición con Medios Electroacústicos. Además, fue un actor clave al asesorar a las autoridades cuando se impulsó la creación de la emisora propia —hoy "}<a href={"https://radio.web.unq.edu.ar/"}><em>{"UNQRadio"}</em></a>{"—, promovió el histórico ciclo “La cocina de los medios” y retransmitió por el dial institucional su reconocido programa "}<em>{"Tramas"}</em>{"."}</p>

        <p>{"Su pensamiento sobre la vigencia del medio quedó reflejado en la "}<a href={"https://www.unq.edu.ar/noticias/3271-la-radio-sigue-vigente-por-la-pasion-de-quienes-la-construyen-a-diario/"}>{"entrevista"}</a>{" concedida al portal institucional de la UNQ en 2018, donde remarcaba la resiliencia del lenguaje sonoro frente a los entornos digitales:"}<em>{" “La radio tiene para ofrecer el mismo discurso que construye desde hace 98 años. Ocupa el lugar de la palabra articulada que, pese a un escenario de abrumadoras pantallas, tiene la virtud de reformularse y actualizar sus potencialidades de manera constante”. "}</em>{"En aquella oportunidad, afirmaba también que "}<em>{"“ante las diversas amenazas, y pese a las transformaciones que ha atravesado el ecosistema de medios (…) aún demuestra absoluta vigencia”, "}</em>{"basándose en el hecho de que las nuevas tecnologías"}<em>{" “continúan dependiendo de un mismo insumo: el sonido”."}</em></p>

        <p>{"A lo largo de su carrera, legó una obra bibliográfica indispensable para la comunicología de nuestro país. Entre sus libros más destacados se encuentran Radiofonías: Palabras y sonidos de largo alcance (1994), Las tres frecuencias didácticas del dial radiofónico (1997), Las charlas radiofónicas de Discepolín (1999) y Radioteatro, estas particulares maneras de seguir estando (2008). Su vínculo con la producción editorial de nuestra institución quedó plasmado en "}<a href={"https://unidaddepublicaciones.web.unq.edu.ar/libros/la-radio-1920-2020-la-obstinada-vigencia-de-un-medio-invisible/"}><em>{"La radio (1920-2020), La obstinada vigencia de un medio invisible"}</em></a>{", obra que coautoró junto a Agustín Espada y que fue publicada por la "}<a href={"https://unidaddepublicaciones.web.unq.edu.ar/"}>{"Unidad de Publicaciones"}</a>{" del Departamento de Ciencias Sociales de la Editorial UNQ."}</p>

        <h3 className="post-tribute-title">{"El recuerdo de sus colegas"}</h3>

        <p>{"El afecto y la admiración cosechados a lo largo de décadas de trabajo quedan manifestados en las palabras de quienes compartieron el aula y la gestión con él. Daniel Badenes destaca la generosidad que lo caracterizaba al recordar que “"}<em>{"Oscar era un tipazo, muy generoso; su impulso al ciclo ‘La cocina de los medios’ que duró muchos años y permitió a los estudiantes de la carrera con referentes de la profesión que venían por su invitación"}</em>{"”. En esa misma línea, Martín Iglesias subraya la impronta pedagógica que dejó en las aulas al señalar que “"}<em>{"Oscar fue quien estructuró la ‘escuela radial’, la manera en que aprendemos y enseñamos a hacer radio en UNQ. Aconsejó y asesoró a las autoridades cuando se tomó la iniciativa de gestionar una emisora propia, hoy UNQRadio”."}</em></p>

        <p>{"Su calidez humana y la escucha atenta fueron marcas registradas en cada pasillo transitado. Rodolfo Brardinelli evoca con emoción esa entrega personal: "}<em>{"“Cuando le hablabas, no importa en que circunstancias lo abordaras, te transmitía la sensación de que lo único que tenía que hacer en la vida era escucharte. Tenía la rara y extraordinaria virtud de hacerte sentir que había suspendido por tiempo indefinido todas sus preocupaciones, sus ocupaciones y sus urgencias y que lo único que tenía, y quería!, hacer en ese momento era escucharte"}</em>{"”. Por su parte, Martín Becerra lo sintetiza como “"}<em>{"un muy dedicado profesor de radio, un muy buen tipo, cordial y atento, lo recuerdo siempre con una sonrisa y dispuesto a colaborar con las actividades de la universidad”"}</em>{". La docencia vivida con vocación y mística diaria es otra de las facetas que sus pares eligen recordar. Para Diego Restucci Oscar permanecerá en el recuerdo como “"}<em>{"un tipo que no sólo me marcó desde la docencia, sino que además reconoció en mí el amor por la radio y me alentó tanto como estudiante como profesional. Fue el más cálido de mis profes, eso seguro”."}</em></p>

        <p>{"Omar Suárez, su compañero en el aula, reflexiona sobre los años compartidos: "}<em>{"“Él no solo era un apasionado por la Radio también sabía cómo transmitir esa pasión a través de la enseñanza. Tarea que compartimos durante muchos años y de la que guardo grandes recuerdos: su paciencia y serenidad, su prolijidad al escribir en el pizarrón y al tomar notas en su cuaderno, como los que se usan en la escuela."}</em>{" "}<em>{"Despedimos a Oscar, con gran tristeza pero también con el reconocimiento y el cariño que supo construir en tantos años de trabajo. Quienes tuvimos la suerte de recorrer el camino de la enseñanza y la pasión por la radio, lo recordaremos como el buen compañero y amigo fiel que fue"}</em>{"”."}</p>

        <p>{"Claudia Villamayor también destacó su trayectoria junto a Bosetti: “"}<em>{"Oscar fue una excelente persona, profesor de radio de muchas de nosotras desde mediados de la década de los años ochenta. Querido Profesor de Producción Radiofónica de la Facultad de Ciencias Sociales de la Universidad Nacional de Lomas de Zamora. Una persona que sembró saberes de la comunicación radiofónica, y que por sobre todo lo hizo con mucha generosidad y compañerismo. Su memoria queda en mi desde aquellos primeros años de las pasantías que hice de su mano en la querida Radio Belgrano de Buenos Aires. Me lo reencontré en muchos lugares, ya que a lo largo de los años hemos compartido muchos espacios de formación y producción, también aquí en la Universidad Nacional de Quilmes. Una amistad imborrable, nos guardamos mucho cariño"}</em>{".”"}</p>

        <p>{"Soledad López, actual directora de la Licenciatura en Comunicación Social de nuestra universidad, resalta su legado: “"}<em>{"Radio en UNQ se dice con las consonantes y las vocales que forman el apellido Bosetti. Una escuela de escucha y práctica, con el compromiso y la seriedad imprescindibles para abordar la experiencia de aprendizaje y juego con el lenguaje de ese medio que, como nos enseñó Oscar, no para de nacer. Como profe y colega lo recuerdo respetuoso, memorioso y motivador. Aunque a fines de 2021, con el sentido de responsabilidad y la generosidad que lo caracterizaban, Oscar decidió dejar su cargo docente en UNQ, nunca nos acostumbramos del todo a no tenerlos en nuestras aulas. En cada emisión de “Con Cierto Sentido”, el programa semanal de les estudiantes de la Lic. en Comunicación Social, la impronta de su legado se hace presente”."}</em></p>

        <p>{"Por su parte Agustín Espada resaltó: “"}<em>{"me gustaría recordar la cercanía y generosidad de Oscar, con él organizamos codo a codo las Jornadas de Radio del Nuevo Siglo en 2018 que se hicieron en la universidad y luego editamos un libro con las ponencias de aquellas jornadas (editorial unq) y durante todo el proceso me trató como un igual y trabajó con mucha pasión y dedicación, ahí encontré el secreto que lo llevó, junto a Ricardo Haye, a sostener un espacio de encuentro, estudio y amor por la radio que en los últimos años extrañamos mucho. Oscar fue un maestro pero por sobre todas las cosas una grandísima persona.”"}</em></p>

        <h3 className="post-tribute-title">{"Trayectoria en el sistema universitario"}</h3>

        <p>{"Su destacada labor profesional se extendió además por todo el sistema universitario nacional. Dictó clases de grado en las carreras de Comunicación Social de las universidades nacionales de Buenos Aires (UBA) y Entre Ríos (UNER), así como en trayectos de posgrado en la Universidad Nacional de San Martín (UNSAM). Asimismo, dejó una marca insoslayable en la gestión pública y la creación de medios institucionales: se desempeñó como Subsecretario de Medios de Comunicación de la UBA entre 2002 y 2006, fue el fundador de la radio universitaria de esa casa de estudios (por ese entonces en el "}<a href={"https://www.uba.ar/ubaradio"}>{"90.5"}</a>{") y creó la Agencia Radiofónica de Comunicación de la UNER, consolidándose como un referente indispensable en la gestión y difusión del conocimiento sonoro."}</p>

        <p>{"La Universidad Nacional de Quilmes abraza a sus familiares, amigos, colegas y graduados en este doloroso momento. La memoria y el legado de Bosetti representan un orgullo invalorable para nuestra comunidad universitaria, jerarquizan la educación pública y nos consolidan como un faro permanente en el estudio de las "}<em>{"tramas"}</em>{" y narrativas sonoras."}</p>

        <div className="post-video-pair">
          <video
            className="post-video"
            controls
            playsInline
            preload="metadata"
            poster="/images/oscar-bosetti-video.jpg"
            width={608}
            height={1080}
            aria-label="Oscar Bosetti en el estudio de radio"
          >
            <source src="/videos/oscar-bosetti.mp4" type="video/mp4" />
            <a href="/videos/oscar-bosetti.mp4">Descargar el video de Oscar Bosetti</a>
          </video>

          <video
            className="post-video"
            controls
            playsInline
            preload="metadata"
            poster="/images/oscar-bosetti-homenaje.jpg"
            width={576}
            height={1024}
            aria-label="Homenaje a Oscar Bosetti"
          >
            <source src="/videos/oscar-bosetti-homenaje.mp4" type="video/mp4" />
            <a href="/videos/oscar-bosetti-homenaje.mp4">Descargar el homenaje a Oscar Bosetti</a>
          </video>
        </div>
      </article>
    </main>
  );
}
