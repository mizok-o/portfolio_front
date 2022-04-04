import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './slide.module.sass'

// data of products
const data = [
  { image: "slide001.png", number: "001", link: "https://wataridorimedia.com/", title: "一人旅メディア「ワタリドリ」" },
  { image: "slide002.png", number: "002", link: "https://shindan-4f59d.web.app/", title: "あなたの海外旅行診断" },
  { image: "slide003.png", number: "003", link: "https://dribbble.com/iemon", title: "WEBデザイン(仮想)" }
]

// react-slick arrow customize
function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <button
      className={`${className} ${styles.slick__next}`}
      onClick={onClick}
    ></button>
  );
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return(
    <button
      className={`${className} ${styles.slick__prev}`}
      onClick={onClick}
    ></button>
  )
}

export default function Product() {
  const settings = {
    dots: false,
    speed: 500,
    centerMode: true,
    centerPadding: '11%',
    slidesToShow: 1,
    fade: true,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          centerPadding: 0
        }
      }
    ]
  };
  return (
    <Slider {...settings}>
      {data.map((item, index) => (
        <div className={styles.slide__content} key={index}>
          <div className={styles.slide__textarea}>
            <span className={styles.slide__number}>{item.number}</span>
            <h3 className={styles.slide__title}>{item.title}</h3>
          </div>
          <div className={styles.slide__image__content}>
            <a className={styles.slide__image__link} href={item.link}>
              <img className={styles.slide__image} src={'/' + item.image} />
            </a>
          </div>
        </div>
      ))}
    </Slider>
  )
}
