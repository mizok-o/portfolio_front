import styles from './product.module.sass'
import Swiper from './slide'

export default function Product() {
  return (
    <div className={styles.product__container}>
      <div className={styles.product__title__container}>
        <div className={styles.product__title__pc}>
          <img
            className={styles.product__title__image}
            src='/product-slide.svg'
            width={5180}
            height={160}
          />
        </div>
        <div className={styles.product__title__sp}>
          <img
            className={styles.product__title__image}
            src='/product-slide--sp.svg'
            // width={1302}
            // height={40}
          />
        </div>
      </div>
      <div className={styles.product__slide__container}>
        <Swiper />
      </div>
    </div>
  )
}
