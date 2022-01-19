import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faUtensils,
  faShoePrints,
  faPlane,
  faCar,
  faTshirt,
} from "@fortawesome/free-solid-svg-icons";

const Resources = () => {
  return (
    <div class="container py-5">
      <header class="text-center">
        <h1 class="display-4">Smart travel</h1>
      </header>

      {/* <div class="py-5">
        <h2 class="h4 font-italic mb-4">Big image caption</h2>
        <div class="row">
          <div class="col-lg-5">
            <img
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
              alt=""
              class="w-100 mb-4 border border-md border-white shadow-sm"
            ></img>
          </div>
          <div class="col-lg-7">
            <p class="font-italic text-muted">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
              ipsum quaerat, itaque sint odit id beatae, vero aliquam numquam
              placeat officiis fugiat, consequuntur est ut fugit amet illum
              obcaecati sed.
            </p>
            <p class="font-italic text-muted">
              {" "}
              div Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consectetur iure dolore dolorum eum ex, expedita voluptate est
              adipisci repudiandae. Minus tenetur ut veritatis non hic beatae
              velit? Eius, totam, officia?
            </p>
            <p class="font-italic text-muted">
              Enim numquam autem, suscipit repellat vero, voluptas adipisci
              provident ad quidem dolorum minus, architecto. Nostrum deleniti
              nesciunt consequatur tempora repudiandae quos quas, animi
              perspiciatis nam consectetur earum adipisci, repellendus
              laudantium.
            </p>
          </div>
        </div>
        <p class="font-italic text-muted mb-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat
        </p>
      </div>

      <div class="separator my-3"></div> */}

      <div class="row">
        <div class="col-lg-11 mx-auto">
          <div class="row py-5">
            <div class="col-lg-4">
              <figure class="rounded p-3 bg-white shadow-sm">
                <img
                  src="https://c1.wallpaperflare.com/preview/651/919/628/motel-sign-vintage-typography-travel-retro.jpg"
                  alt=""
                  class="w-100 card-img-top"
                ></img>
                <figcaption class="p-4 card-img-bottom">
                  <p class="mb-0 text-small text-muted font-italic">
                    Trivago’s hotel search allows users to compare hotel prices
                    in just a few clicks from more than 300 booking sites.
                  </p>
                  <button className="btn btn btn-outline-warning">
                    <a target="_blank" href="https://www.trivago.com/">
                      <FontAwesomeIcon icon={faBed} />
                    </a>
                  </button>
                </figcaption>
              </figure>
            </div>
            <div class="col-lg-4">
              <figure class="rounded p-3 bg-white shadow-sm">
                <img
                  src="https://www.lironboylston.com/wp-content/uploads/2020/12/WBC_7095.jpg"
                  alt=""
                  class="w-100 card-img-top"
                ></img>
                <figcaption class="p-4 card-img-bottom">
                  <p class="mb-0 text-small text-muted font-italic">
                    EatLocal is about celebrating culture and food, people and
                    nature.Browse the finest culinary events and find out more
                    about local gastronomy
                  </p>
                  <button className="btn btn btn-outline-warning">
                    <a
                      target="_blank"
                      href="https://booking.mytransylvania.ro/"
                    >
                      <FontAwesomeIcon icon={faUtensils} />
                    </a>
                  </button>
                </figcaption>
              </figure>
            </div>
            <div class="col-lg-4">
              <figure class="rounded p-3 bg-white shadow-sm">
                <img
                  src="https://w0.peakpx.com/wallpaper/186/69/HD-wallpaper-tourist-bicycle-hiking-camping.jpg"
                  alt=""
                  class="w-100 card-img-top"
                ></img>
                <figcaption class="p-4 card-img-bottom">
                  <p class="mb-0 text-small text-muted font-italic">
                    Looking for tours, events or attractions?We offer you access
                    to tours, events, attractions, cruises, transfers and other
                    activities.
                  </p>
                  <button className="btn  btn btn-outline-warning">
                    <a target="_blank" href="https://www.tripadvisor.com/">
                      <FontAwesomeIcon icon={faShoePrints} />
                    </a>
                  </button>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-11 mx-auto">
          <div class="row py-5">
            <div class="col-lg-4">
              <figure class="rounded p-3 bg-white shadow-sm">
                <img
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBcUFRUXGBcXGxobGxobGhobGxsYFxoaGhoaFyAgICwkGx0pIBcXJTYmKS4wMzMzGiI5PjkyPSwyMzABCwsLEA4QHRISHjQqJCkyMjIyMDQyMzIyMjIyMjIyMjIyMjQyOzIyMjIyMjIyMjQyMjIyMjIyMjIyMjIyMjIyMv/AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAAIEBQYBBwj/xAA/EAACAQIEBAMGAwUHBQEBAAABAhEAAwQSITEFQVFhBiJxEzKBkaGxQsHRBxRSkvAVFlNicuHxIzNDgsLisv/EABoBAAMBAQEBAAAAAAAAAAAAAAABAgMEBQb/xAAsEQACAgEDAwIFBQEBAAAAAAAAAQIRAxIhMQQTQVFhIjJxocEUgZGx8FIF/9oADAMBAAIRAxEAPwDzzLSy0YJXctfSaDxtYDLXclHCV3JRoDWR8ldyUfJXQlGgWsAEruWpASiHDECSInX4UaBayIEpZakZKWSjQGsjZa5lqTlppWloDURytILRylLJRoK1BLOLye6IPUdep61aYPjF15VmLDnmfKv6VTZa6ENJ40w1F+2NsAEOkmNAPMPnIqvwXBLuJYm2FA6bb0PhyqrZ3AbLrl6+varjG+JrrDJaW3an+AQR6GspQktolRmvJB4xwA4UD2gEnaGB19KojZ0Gsk8oq0VLjqzHzkblyOs6TqxqPjsOVCElZYTAO3qOVOMfD5Hq32K4qa4aMR1NdFqdqrQPURjSAoxSuZaO2PUMGlHNzyRsev5dqGaYwpaA5BuZphFEK1wrUOBomCIrkUXLXCKhwKsERTStTcFgbl5wlq29xz+FFLH1MbDudKn3+F2cOpOJxCG6AYw9ki6+fYLddTktgHcAs2+k1lPTHlmkU2UJFcK1YYXiOVlYWLEKwYK6u4McmzMZGlG8QYpL2IuXkmLpzlTujN7yTGoBmCOUc5FSvi8DexURSomWuUaQs0RWn2wAZKhh0M/lUkWD0NdXDMdgflXtUjxdZHcA7CO3L4U3LUprY7z6U3LRQtYAW6k4XAtcJCCY1PYdY3I9K4Eo2HdlMqxU9QYpNbbBr9QhtC2J0LcjII3g7aEVEuEnfv6CddOlGbWT8aHFLTXIarA5aPhsA1zaPnUiw6qDIVvXQ1GfEmfL5fQ1Db8FIubfhK4wmV+dd/uncXUpm9GqFh+L3l91z96mpx/EKfNB7FYrmksvho6FLHW6ZAx/DcmgUqeh1+tV5wFyJKmOvKtha47bb/uWlA+dSWwNq4M9kqOwM/MUlklHZoNKlumZTh/BWudPmKucJ4ZRZNxh6Vxb6Wn8yZSPxp+m1QuI8UL7H6RVtTm9tkRrjFb8neKcMt2jmS4o/wAusn8qpr2I1lQF+vx1p99yx1NR2St4Qpb7kOab2GNeYiKC8kydTRitMir0opSAFaRSjLoZ6dRI06jnUjEYh7gAJAVZKqNFWdSFHKelS0XZX5aaVqSU16ikbR3A05UbDUiMVppWuXb2W49sjVGZZBkEqxWfTSjW7ZYhVBZjsACST0AGprOM4SVpmrjKLpgCtcy1oj4cNtQ+Mu28IhEgOc11h1S0ssfjFQ7niDCWdMJhfauP/NioYDulpfKvIgsSa58vU447Xb9jWGKUvYDw/gN+8pdEy2x7124wt2lHUu0A+gk9qfducPw/vO+NuD8KZrWHB28zke0fn7oUHrVJxTi2IxTZ8Rde7GwJhV/0qPKo/wBIoViwdCNB/Xz+Ncjy5MrpbfTk30xhyWmN4/ir6eyBWxYP/isr7O2euYDzP/7E1XJZC7b9aOa5lPTeumGCMN+WZSyuQMimkUc2jzouFw4ZoYwPmT2Aq3EnUQctKtHffCqxVbcgbEsJPrXaz0hrLNXYToNRr7sfb7Uy7eZv9vzqXgbuXMZAHwk7wBPKor6kmvTS34PFvYCFp9u1JjanhKIikagxTYrAFKQWpBSfWupaPQ1LY1uBS2TMLMCT1jqOv1obnSIA7860FnDBl0VlPVQTrB0jlvvFM/dDlm7nCzzBMnrPpXO8ys6VDYzcdKuuGphFOS5axGMxGhOHw6sVQMAV9o4jcEe6SBMGdY2Hhrwjhr6i86l0JIVTKhipglgDqsiI56zW9s2EQQiqo3hQAJ+Fef1XWN/DDb1PQ6bpV80t/QwiNetXGS3wVAsDI+e2QzQCRcIUsg3AYg6gTAJI0nC7dvE2g93CeyY6NbuIuZSOhiGXaCPoZAtmvgMFg6gmeWkaeuv0rjXh1rz9Um+Tu0x4ooeJeE8JdAm1lOgBQssSY2Gkeoqhv+BBbINq+ATMK+kwJOqxsNfdrY38XlghWbWDlgkCN4nXYba60wXLd1PMkqCdHQruCpgMAdVZh3BIraGbJFcmMsGOXK/B5xxfw7jVBBtZx1Rg/wBDDfSsresMhyujIejAqfka9vGFUGEe4hgnRiy/g3DSDqg7nM/8RpXMO7DK3s7qnk6wYJeJ0ImDbnT8LaaiOrH/AOhKOzX4ObJ0MZfKzwwrXMgkTtXrOO8L4R9Xwr2j/FbPlHubhTH4z+H8Ddpp7vgNSD7DEAnSA6wQSTEkbGQR7o1UiuuPX45c7HNLoskeNzAth8oIZTrEH1jXvprE0z91lQw5mDpGvYc9K13EPDOJtWyBhvaTJzIc8bDQTmOgnbntpWWcsnluRbkgf9Q5IjkA0cuxIrSOaMldr+SHinF1TIi2YOs6HXTaKWTL5mUHN3Mjua1fDfDOIup7S0LTrEgq6nOGneQQRpudNOdATw6qe0bE4mxaFsS6g+0dFmJZFIKyYAid6l9Rj/6LWGb8GYaZGsch6VbcF4ZiLzobdtmtI4Z2MKnkIJlmhQdIoWP8YYOySMLhvbuP/LiTKzpqtpdDtuxmsvxnxFi8XrfvMyaQkhLY10y2xCmOoBOmtcuXrdqgjqxdI7uTLk8OwGFObFYs4m7Mm1hYK5pJ895gFjqFEig4vxveylMHat4O2RBNvW6R0a83mn/TlrKhal2sKWykyqnQFgQv/qdhXEtUtrOxuK3BXZZizM1xm1LEnUneSdW9dKlYbhdy5ACkA7aQPgOdaDD8AKFQ0Bj/AB/f/L96kXsRcEBCQBpmHbQ5W/OuvF0vqzln1PoUbcHa2Ro2bQyN/XtTSjTB39IrTYJoViQzzvpHmOgOgMjfSgY7Dqx8okxJGXKO+k5jueXIV1QiobJUYvI5cmdK0RXKwQdRt2q1u8NeM/soQbmf1M1UOvwrSw5OveY6k0EtTstcZCNxSbKVA6VOy0qzKNmVmuhKlmxrFGOH6aEeuv6V2vIkeIk2AwmCLsFG566fU6Vb3vDl0yVCtl0IEZgBzIGnyJqr9tcZxlBEaASfoKnYFLgeQ5QjuRMnUQNTXPOc+U0jeONLZq/3C4fgMS124LagTPvH4Dn8Ku+H4O9aSbQs3UJ5kTH2GnrvVcc1y2Ldt3csZZMui69dSak8O8P3EYMXKdYmTHI8iK5sk209Uv2o6cUaktMX9bLaxdsM0OrWrn+bVO+U7fapd0NbAFy2t9CYzKBKr3U+8aDcv2rY924zDXZmg/Uiqd+OXASVhfUa/OK5IwlN2uPf8HXLLHGqlz7fkZx3jNzAsGsMDh23UjW253BG6q245ST2oVrx8XA0H8xqIMUrFjeVrmY668ukbEVTcQ8JIwN3CXMo5o+gGnLmNdIgjXlWssOmrV+5EOo1cOvY16+LS3L60N/Ejbweemmu0f13rzdreJt+9bYgc1BYfMbfGKlcPxzXHW2CAxMAExJ5DU9fvUaYLwa65vhm+teIzzUiplnxCh3MetYziVq7h49qMsllHquhqDcxaOBm1hgwE81MjbvQoxkrQ9coumeoW+I22MhtexI+x1qwsYwR70+teSJj42NTrHHHWPPp+VJ4kxrM/J69YJImnPbB94DWOm4Mj5HWs7w/xPaeAHAPQ6ULxPiMV7FruFuqr2wzgMMytCMCI6wSR3AnSuZ45WdKnGrRf4n2dsG49z2aiWZiwVBJDHNm0Hun+ZutfO37SvavjHvO2e25i0wMgoirERoJVkfTSHB51X8ex+JvPOKuXXccnOg/0L7qj0FXvDcbfvYF7V3C+3sW8uW5LI1srOXzBGBgEqNB5dDIAhONbMFK3sWX7J/EIw0refLZa4FVjOVWuW3Zh/NbtDsW7167xfh+Exi+xxFtLhgkA++oBylkYarqRsRvXzzhcc1sgogAghVWSqhiMx5lmJUSx/hAEARVzY8c31fOzHORlJIjQGYAiBrqYArRY00rdEPJTdIH4+8DNw9lu239ph3aFLAZ0YAtlfSGBAJB5wZA548SxzFpPU/Y16HiL/EuKZMMlu5lLK5dkZLahQdWfLt5uUz0Neo4Xw5afDWreIweGlEylAqwrDQ+zcCQCZad9ddZqWlF1dlRuSuqPnOwgnatdwvHubKWd1DMIMZYJz6yOpnetxxr9lNhvPhHay38Dy6T0BnMvrLDtWD4jwPEYR2t3UiIIZTmRp5g/rBr0OnlCfwo5OojJKy7TxBlYC6ovhRCrOikHQhtSYipGI40j2wy2ckmJzFUB5+6QD8tulZS+uQTddbfZvePLRACxHeIquucTWYtoznq+g/lUyfXMPStJdqPnf0RjCOSS9vc1S44ezyqASOWhMTm2mWE/c1U4ziahFBvEvsURZgbASDBMaan51VizcuaXXKp/CgGXrsvl6amTT7GHRTAmOw1I6dqFrlwqXvuy6hHl3/QQXAwkFlAmA0A/CCZPwpl8MYzHTTlA29BNEPvbhQTA2JA2G+1CxNxmaS5eNMxJOg23rdKuSPOwy8kafmD6baUNm0AgevOnBgNYBPfb5UFm70mykKlTJpVnqRdHs+CxVjK3/RByx0Gh5/1pU23kIj93fLoQQhOnckR8arMFbVcsWlLyR5iTHqNI+NaPAviGEwigSAI1juBp8RrWGWluvuzkwNy2f2Q23w2wRmZCuxlhC69RAAoz4TCsAhdeWkHft3o95nK5SVzHfVoH1/Ko+HwRJ1eT276b1y23u2ztarZRQW1weyplSZ+INTv3NyPK3z1+9OSxkEZ2npJ+86fGoeI4uU0HmPSdfjWVyk9nZtUYLdV9Aj8JZh5mBHbSgDgdse9bLfGnrxnSWR103Gsk+tFuBrqhrdwgdyAflGlV8a5dIm8cuFb+4B8BYAy5FA7jX5ioV7hlidGQdmP571b4bAsBDy3cRSvcEtsZihZKfzMHi1L5UZnEqlseVlKzqPK4Pzg9KzXF8DZuEPbQ27iSZTKQ4I8ylWjQx1kff0nF27VpC9z2aou5eAB8TFZ7jbW3wty/g7QuuqOylIZZUcwGzHSYAB1EVazRapojsSTtMzmOtWr1i3bui6WXzHM2Vka4FbSQQQQVOoO5rNYjgJB/wClcMdH3+aj8hUzgHFFe9de/df2TmFugxYyLbUwQYyuPJoNSSRrEh/EfFmF/wC3hwyrPmuFfOx7ZvdHwn0NXjcEqoWSE3K72M5cV15qfQyPgdj8DUd8a2xnWn4jH2RoimDyk6k9O9V37+rEwCNOev8Az8qJTS8goN+CVbx1xdmNWmG8TX0BUOcpEFTqINVaIrbMp9CR9Gg0790YbiO5n9KE2DSJt/i4f/uIDPKJ/wBhVhY8SFLJs2wttGUqwCgZhuMw2JHWs44AMb/Wi2MFcuHyKTG+VSdKJLVs1Y4vTumMHDHu3QouWxm0m48IonYzMASdPlWxwmCtcLxOFe3ft3rbuVdh+FmUAZRLQB5oM89dprG3cOUPmDKf8wK/Q1X4vGOrwGMDb4gg/dh8aiVQ3NINy2PozAeJLN3N7O4jlTDZWBg9DG3Opb8XQfiFfO3hu9cw+ImDlhg0bMsSI66gRWsfxFOskdoIPoBzNVjhGat7BPI4ulueoYnxJbQScxE65QWIGusDUj061gPG/ir21y5ZsYn2eRVmIUMwDZwH94MAyjQ/hYbxWexfEsTdUraVk/zP5TBicoPoNe2lVFrwtcLEMwEDMd9p1gmJ9aein8KE52vidEfh3D0cOzXBmU+5BlhzM9e1WIsqggKB9/jU+zwdUdLSrlYmGY+YiTp3+Aq2474bW0dGHLTNrJHU+nTnXXhUYJWt2cuWTm272Rm1RSNTHbv3FIWl0WGDH5QdoG9aW94dCWVuBm2VpYQIO2WJkz1YelS8Pw637Ms0Q29xvMVCQYA5OdT7y6Vq8q5RmosyIwBIldQGgmCDPoYneplngDusoQzTGQaPPM5WiV7ir/F4ZLaZbiXHYkMjBsqm2cszbnMd+s1Uy91iEAS2knfKVGp8ssYNTrk1aL2umUOOwFy02S4jo3RhHy6juKAmELDSZ+kdZ5+lXnFcdcuW1jPlAAOaGmNNNKpnBK+XlvrtPY/lUttrc0XsRWtClTsvcUqks99w9u2QGMDsRrPoYqW+NPuq6KOkGfppUDEYu3p9ln6gmBQF4gg2tz6sfyrn0OW7Rzd2MNk0XWGR2B8o/wBUj8pP0qVat5AQrKpO20z8NTWdfjFxtAVXso1ri+2bWWA5liFH1qHhl5aRouqjwk2Xbe0nzMD6R+unypWlhpbJ3AEnSqVboT3rqnqFDP8AUwD86KvELU6B266Ko+kmh434/oceoj5/uy1xOJUiFRSe4k/IULB2ipnMqz2/3oLYu3HlJU9Bmn5wO/OoNxQxBL8/xEk/QH70owdVwOWVXqVP96Li/wASX3RcE9VU0H+03hRbBZj1M6ek6VXnD2xGVyxnkv21/KqXi3iyzZJt22e/cH4EY5V7XH2Gu4GY+lGiPgcZ5Jc7fRlH+125irioWEWrShnAMjNcYqpPYZQD3de1UH7LONthrz5ny2TkL5jCqTcS3mJOg8txif8ASDyqWPGuIFy4uItWrlq4pAtjygK0ggNBZlaAGzT7oIgqKg4C0bjFrOHzooE20DXJ0IBukgF4BMAqBqTrvWei2dOvTE9ve1hLlv2bW7L2rhkKVQo5K58yjYmATI10mvF/2heDFwbm5hyTZYZsjEsVjRhJ1MEg66wdzFW+H4tiAyH2V4G3oo9m4C+XLoMu8SPnTOLY3GYu21tLV1iwZRmUIonytJbKOtNYq3sO8ntRicL4dxl22LtvD3XQjcKYI3leu/KhcW4TdsPkuIVaPgTlk5TsfhX0V4bw9vDYWxh2uIzWkVWIOmYCWjqJJA7VR/tBx/DlwrpeZczybSgGTdQSrDKNACQCTpDRzrO/VFbXs0Z1v2b2rcMLjXBAOoyBpjaNR6E0fBcKt2WynDkK34tZGnLrsf1qr4R+1DK9mxftWzZVUtvdUtnmABdg6ADSVOu+vKvVECKwQ2mII949tjG9aQytKmrM54t7Tow6cENtywS045BrYJM7EkKdfjUleFG5AyFQGJP4FbMsLMa+8PT0rYuVUkLkVRpDCJ+PL461y0sZoEsoB0ICmZ93/eh5ZcgsUeDApwO4Ytt5BqFM+UmdM0/HUGgYvwOrZJCG4pkjKuo5RpDCOs1vrzBQtzTKIZlA1E6SDqKo8ReW3ce8CpQCELaqSdxod4J1+9Wpynt/rIkow3/1FOnhezlmLcrIaFRfkCJnQ8qOvh5QS+YELpCKMsRJkRqRoarOI8ZJZioCEk66Fte/w2qE3ECpljJI31J15A7a/SulYZ1dnM88LpIvMPwW1muFVBgSAATnUx5lM6EU92W3LoMxyCAxENJIgr+IR1J+FZy5xG4FILMZ3EyRtHpsK4nEruWAzQNo0iRG45ctetN4n5YLInwi0wF/M7K1sezYlmWMlsETlMiWX3fSqZ8cwzLMKS0gkONdCROsxpI1pmIZiYZXOhJ3+m0DXamYTCM+ULbbXnDHQbntVxaW7JcW9kETiL+zKEzbn3TJTsY5axTl4qLeQJOZTmIzkIeUR8PXvUzC+F3ckEldNJGsk0QeCXkB2323J+UcuhNDz4+GEcMyk4nx5rgLC3bTNoSN9DMjmOVV9rH3FcvndCfeKmGI6Hrvzr0BPCthQM4Gg8zSEAaNPLqYqT/Y1sD37KLpGZVBJHdjtWffjwkbdt+Wecguxzurm1MbAEzroQInWZqRbwFxUe2bBZjqP4gu8kjU8tK2mIs2kA9pibWUbLbVBlnXy857ioOJ4jgeZu3Tt5i5/QU9UpcRD4VyzGf2LdbWLYnkXAI9daVaX+18KNBh9BtvSqtM/QnXH1N7icMreVXN1uS20CqPVjIoVvg91RJVB6y5HyBFHv4m47yuZgNIEBZ7rrQruJuzlL+zPwX6gT8zXOnOqtGbjjbbp/73J1nBMEm45WeS5UGm0ZVJ+1Rhw63cghnYmdgdI/izajXqBUvDK7Hzlbmmh96PUqdOdHt3GE5URFHMfrIisNck3TOlYotK1t78lTd4Dcg5Vkeon7xQk4ZcUQSIG+s/81aXHec2hPUE/fc1XYniLwM0kfE1pHJN7WjKeDFHemBuYYzCK533WNvjUa5buKdUOvLUT2mKl/vLmGKsB1kA6dqtcM4ugB1J7xr85inLM4rcUOljJ7Wjzi8mJxBuW71xbSK0G0haGQgEM7SGuAydCY8u1SsLwa3bUFbZYciR5Z5aRlnvE16O3A7QIygDptmn1NFs8KgyWJG8ZiazXURXCOl9M3y9vYxVvg1u/la7bttknKXMxO478tKvPD3hRLGZrZZVcglCWgETBUkZufUitG9ogeVFP+rWo12xfYzmy+hIH01rN5XP2LjhUF5YNcC685HQwRM86i4nh7GZVRrOaSPmSIqWq302bMOROs+ms0G5isSJJAA6kafanFyvZomajVNMgNgnH4VPQyDv96zH7QPB13E4e21rIbttmKrIBdXAzLO0+VSJMb9a2H9pXBvcQegUn5VJHFBGrI3YgCfrTlraojF24u0/5PHsB+zoFF/eGK3QSXVWUggmQpOwPcSK397E3CBmugBQI82w2/CCSdPpWhOJsNqy2u8vP2Brpv4VdQbemuh/IDWqjLTxHcWSCm957Gd/drjZnN4ZNyS5MxtI3361BfiNzUC6+p2Gc5uWkDX51qhxnCrMDffyb1Hvccw4IZQ5PQAD5k/kauMsj5iZOOFcT+5WWMLee2EyiDzPIEzEHQ6knUc96BjfDV95JJYKALak6adRtEbRVqfE1sbW2+Y/WgP4p0IFr0l5/KhRzN2lQ+70yVOV/wAlNb8DuTJbL2zDc/8ANWFnwSmYZiWjSNYmot/xBfbZ8o/yAL9d6g3uJXW953b1Zj+dbdnNLlmL6vBH5Ytmi/ufZVSpAAMa5iP65U27wWyNM0+XLoSfWAOtZq3xC4vu5QTzyIT8yDXL3Fb7CDceOgYqPkIFH6XJe8g/XY62iaG5Ytqutt2GghUcHy+7qcsVEfG2kHlw6A66veEj4A5vtWbuXCdzPrrUdq2h0iXLMpda3wqNBc44w925bQdLdst//S/nUa5xwmc1++TyyZUE9+1Uj0JhXRHp4LwZfqJvlknE4lWYnNc1/ign4kHWod4LEksSfTb1k1xqEwrdRS4I1XyDamZ42A+QP3p7ChNQy4jc5rtNpVJR6dw/g9w6vp2q2sWchBSBHMiTp66CrhEJXRCfWnDBkiCv1r5yXUSnye1HpoQ4RBtX36785/SgYgMTGYE9D7vyq0bAqeYnpNc/s1JkiO8H+jUqW5o4pqir9hcYQWWOi7/I1ZYPB8tNOUD60f2lq3+ICfjQbnFEAgOJ7KY+NOpSE5Qhyw7WLY1Yr6aUNsRZXYj0ANV2IxGbUXfjJn4c/hFAt41lG6H1WZ7kmrWG0Yz6lJln/aNomPN67f71zEAvAW4AN4hp+HMmoP8Aaz8lT1y7emtCu8Sun8RHpp9qpYmnsZvqYtbu/oqJd3CECfaXCOcKfrMfeqrEXiT7zEDad/pXbuIdveYn1JqO1dGOLXJyZc2r5VQ5cU67MR8ad++t+IB/9RY//QqPXSKukc/cn6klOJFdVS2P/Uf8/Wh3eJuZgIs8woB+YqOaEziqUI80J5Z1VnHcnUkmhMaIwobCtEzBpgmNMNEYUNhWiZFDc000inGmMxqrCjow7HZfsKDctEb/AHFdZj1obGmmx0hjChtTiaY1WmKhjUNqK1DNOykgbCgsKO1CYVSZSQFhQmo7CgsKeotRBNQmo5FCapci0gVKu0qjUXR701wIpUvM99QemkGoWJuJl0Wd9RJPxJj7GqccQmP+mk9SGJPrrTMZxggeZlRTyAifzO9eNHE0z0p9QpIlNitdJHxphxDdTVfYxaXDCuGPSakhDW1JHLc2FNw9TQzXcuwJEnYfpRVtUakhPFKQJUp4SiBB1+3610Zf4h8xScxrp/UYENO9maKroPxD6/pRFvW/4voah5GarAvUj+wNNbDmpf71bHU/D/emvjrf8J+n60u5Iv8ATx9SC1k0xrZ6VKbHJ/CaE2Kt9D9P1q1kl6GcsEfDI7IelCKdqme1U7Ix9Ipl98oJa3cUDckQAOpMRVLIZPpkQzTDXMRxS0i52ML1zDX001qr/vZhiwVc7FjAgHn6irU36EPB7lkwoLCjfvKn8J/m/wBqY2IH8P1q1kZm8KAFaYwojYgfw/WhNf7D61ayMntA2FDYURr3YfX9aE93sKfcDsjCtNK0DG8RS2MzkDtEk+gqhxPihicttR6kD7U+7RUenb4NHkrht1UcOx1yP+oxzHYaaDroKsDdPU0d0fZoeUpjIaGXPU1CxXEURsrMZieZo7pSwk1rZoTJQBiFJADCTqBOpmnMD0NLuldo4696E8V1zAJJAA3JqIuLRjAYE/0KTylLGG0pU2KVT3Su2bN8czaLA7jcGqjigL3NyWIE7AAdvlWf4ZjghYljrzMx8RVvZ4irDNME6SYrG6NNBI4JhclwsW1XSBOhPc71a4zjNyHS3mzgAAnQSeZ5QKyeJ4o9p4tnQamQDmJ6np8qAvF7jZgzSGme0nlzjtQ1e49JqcFYcOLj3S7sN+x6dqubFzm1xj2yiPnNY5ceLSmG1gRzMaQNfj86gYjxBc2Dx3FS7Y6PQ3xSj8R7SAPzob8StLvcj5fXXSvMn4tcJzFyTtqZj0qM+Id+ZM96NPuUkejL4otHMQGhTAkgZvTTSpOD8Q2rhy5HDf6gR2/CDXneAwxdgCwXv0rWYDAW0WCcxmS39cqznpRpCLZr0xFsjZ/5gP8A5oV3EKBzHqR+lVl3iARJ+A9eVZvjPHJXJpmkTlmBvz58qzjbZpKKSNNd4naDBC4zHYVHxvFrdv3mg8hzNY+xilJlZzEbgbdh+tQMTavXHkKYOxO0d61Wxi42bDFeILaLoZaJyjX0mspxDjl67KnRZ90CPn1rljh1wah1zfbvU3DcOCsGZsxHKBFXqSJ0FWmGvXeRIGmvToKvuEcH9mAzN5u3KpSXFGwiqziTXXMKQF/rU0awcWaX24GhNR7/ABW2hys4B+f/ABWROBusfNcPrNOucK6OT1mjUToRf3+PotwINR+Jp0AjcRvRU41aYkBpgTMGIrKDhRn39K6TatSNWePh8aeoO2jUXOMWgoYmAduvyFQ7vHbeuXNpz01rH3cQSdT/ALelNXNRqH2kWPEMQbz5o7ATyomHwYXzOQBp0P0qsLkCKYcx1NGorTtRqcJxK2SQPLHM8wOdPxfE1SI807gHUDr61lAY2pB4p6hdtG0W4pEh9KreKWrbIbmdcw2M6tGwHXf6VnHvE6SSOVdtgtpMetLUxqCRJwi3GuL7MFnBDD1XX8qt+M+Krr5FQ5CvvEAattG2oFU9m4yK0MZIG3rOvyqEbRNQ9zRBb/EbjyGcmd+9Ct3cpB5ipGGwqT5307VOY2DG+nb/AGpamVpRA9pcOvm1pVMzoNp/r4UqWoWkio5qSt3SoOalnq7IonM/eu2zJqD7Sl7SnqFpJ929rvNRmIqOXrmalqHpJIcV0XKihqdNFjompiiKs7PHrgYEnQchVBTqTp8jVrgvb/iO6SMrBRzAEg+s13h2LktcuMvx69RVFAoovgW8mUSWktz0EAdhv8+1Q0qpFqTu2XeI46o0tr8Tp9KCnFy3vDT8+tUTmui5QopCcmy5uYsAyNO4inJxPtPcmqU3K4LlVsTuX/8AaI601uIiapPaVw3KKQbly3EOlNbHd4qnD072lPYRYDFRsTUW66kHckmaB7SmM3eiwoRjpUhbukQKigxSzUWFEh7omYFAuXZ1prGaGRSsdHS1cmuZa5FKx0GRhXTcA5UEUqLCgweacYoOalmosBF42rv7wYimGm6UrKo77Q9TSptKkPYPSmlSqiBTXc1KlQAs1LNXKVAHc1LNXKVIZ3NXc1KlQB3NSJrtKkANmpualSoA7npTSpUALPSz0qVACz0s9KlQIWeuZqVKgZwtSzUqVAHM1cmlSoA5NKaVKgDk0fB4Y3biWlIBdgoJ2EmJNKlSKRpf7k3P8VP5T+tcPgi7/iL/AC//AKpUqmyqG/3Luf4y/wAp/Wl/cq5/jL/Kf1rtKi2B3+41z/GT+Vv1pUqVLUxn/9k="
                  alt=""
                  class="w-100 card-img-top"
                ></img>
                <figcaption class="p-4 card-img-bottom">
                  <p class="mb-0 text-small text-muted font-italic">
                    Find cheap flights, UK travel deals, hotels & car hire from
                    over 1200 travel providers. Compare flexible tickets &
                    hotels with free cancellation..
                  </p>
                  <button className="btn btn btn-outline-warning">
                    <a target="_blank" href="https://www.skyscanner.ro/">
                      <FontAwesomeIcon icon={faPlane} />
                    </a>
                  </button>
                </figcaption>
              </figure>
            </div>
            <div class="col-lg-4">
              <figure class="rounded p-3 bg-white shadow-sm">
                <img
                  src="https://www.kindpng.com/picc/m/739-7395806_car-rental-marrakech-delivery-new-car-key-hd.png"
                  alt=""
                  class="w-100 card-img-top"
                ></img>
                <figcaption class="p-4 card-img-bottom">
                  <p class="mb-0 text-small text-muted font-italic">
                    Find It Cheaper And We'll Beat It. No Cancellation or
                    Amendment Fees! We Speak Your Language. No Credit Card Fees.
                    Unbeatable Prices..
                  </p>
                  <button className="btn btn btn-outline-warning">
                    <a target="_blank" href="https://www.rentalcars.com/">
                      <FontAwesomeIcon icon={faCar} />
                    </a>
                  </button>
                </figcaption>
              </figure>
            </div>
            <div class="col-lg-4">
              <figure class="rounded p-3 bg-white shadow-sm">
                <img
                  src="https://cdn.traveltripper.io/site-assets/192_680_9235/media/2017-11-10-161748/mts-what-to-pack-for-new-york-city-trip.jpg"
                  alt=""
                  class="w-100 card-img-top"
                ></img>
                <figcaption class="p-4 card-img-bottom">
                  <p class="mb-0 text-small text-muted font-italic">
                    SmarterTravel deliver expert travel tips, inspiring
                    destination stories, and timely travel news to feed your
                    passion for seeing the world.
                  </p>
                  <button className="btn  btn btn-outline-warning">
                    <a target="_blank" href="https://www.smartertravel.com/">
                      <FontAwesomeIcon icon={faTshirt} />
                    </a>
                  </button>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Resources;
