import Image from 'next/image'
import styles from '../../css/profile.module.sass'

export default function Profile() {
  return (
    <div className={styles.profile__container}>
      <div className={styles.profile__main}>
        <div className={styles.profile__textarea}>
          <h2 className={styles.profile__title}>溝口耕太郎</h2>
          <p className={styles.profile__desc}>フロントエンドエンジニア<br />サイト制作 / SEO対策 / 機械学習</p>
        </div>
        <div className={styles.profile__image__container}>
          <Image
            className={styles.profile__image}
            src="/index__profile.jpg"
            width={640}
            height={400}
          />
        </div>
      </div>
    </div>
  )
}
