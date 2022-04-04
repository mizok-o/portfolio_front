import styles from '../components/about/about.module.sass'

export default function Home() {
  return (
    <div className={styles.about__container}>
      <div className={styles.about__eyecatch}>
        <div className={styles.about__}>
          <div className={styles.about__eyecatch__content}>
            <img src='/about-me.jpg' className={styles.about__eyecatch__img} alt="プロフィール画像" />
          </div>
        </div>
        <h1 className={styles.about__title}>About me</h1>
      </div>
      <div className={styles.about__profile}>
        <h2 className={styles.about__profile__name}>溝口耕太郎</h2>
        <p className={styles.about__profile__sub}>フロントエンドエンジニア</p>
        <div className={styles.about__desc}>
          <p>独学でプログラミングを始め、2019年にWeb制作会社でインターン開始。webサイト制作を中心に記事の作成やSEO対策など、エンジニア以外の業務にも触れるなど迷走期に入る。その後就職活動中に、webのフロントエンジニアとして仕事をしていくことを決意。<br />「時間がない」「めんどくさい」をプログラムの力で解決したい。現在はwebアプリケーション開発ができる企業を探して絶賛就活中です！
          </p>
        </div>
        <ul className={styles.about__desc__sns}>
          <li>
            <p> -&nbsp;Github&nbsp;
              <a href='https://github.com/mizok-o'>https://github.com/mizok-o</a>
            </p>
          </li>
          <li>
            <p> -&nbsp;Qiita&nbsp;
              <a href='https://qiita.com/mizoko31258'>https://qiita.com/mizoko31258</a>
            </p>
          </li>
          <li>
            <p> -&nbsp;Twitter&nbsp;
              <a href='https://twitter.com/Moon15497933'>https://twitter.com/Moon15497933</a>
            </p>
          </li>
          <li>
            <p> -&nbsp;Gmail&nbsp;mizoko320@gmail.com</p>
          </li>
        </ul>
        <img className={styles.about__desc__skills} src='/icon-skills.png' />

      </div>
    </div>
  )
}
