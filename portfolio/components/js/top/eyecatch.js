import Image from 'next/image'
import styles from '../../css/eyecatch.module.sass'

export default function Eyecatch() {
  return (
    <div className={styles.eyecatch__container}>
      <div className={styles.eyecatch__main}>
        <div className={styles.eyecatch__names__container}>
          <div className={styles['eyecatch__box--k']}>
            <Image
              className={styles['eyecatch__image--k']}
              src="/eyecatch-nameK.svg"
              width={624}
              height={168}
            />
          </div>
          <div className={styles['eyecatch__box--m']}>
            <Image
              className={styles['eyecatch__image--m']}
              src="/eyecatch-nameM.svg"
              width={1004}
              height={248}
            />
          </div>
        </div>
      </div>
      <div className={styles.eyecatch__names}></div>
    </div>
  )
}
