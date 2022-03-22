import Image from 'next/image'
import profStyles from '../../css/profile.module.sass'

export default function Profile() {
  return (
    <div className={profStyles.profile__container}>
      <div className={profStyles.profile__main}>
        <div className={profStyles.profile__textarea}>
          <h2 className={profStyles.profile__title}>溝口耕太郎</h2>
          <p className={profStyles.profile__desc}>フロントエンドエンジニア<br />サイト制作 / SEO対策 / Google App Script</p>
        </div>
        <div className={profStyles.profile__image__container}>
          <Image
            className={profStyles.profile__image}
            src="/index__profile.jpg"
            width={640}
            height={400}
          />
        </div>
      </div>
    </div>
  )
}
