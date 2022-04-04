import Image from 'next/image'
import eyeStyles from './eyecatch.module.sass'

export default function Eyecatch() {
  return (
    <div className={eyeStyles.eyecatch__container}>
      <div className={eyeStyles.eyecatch__main}>
        <div className={eyeStyles.eyecatch__names__container}>
          <div className={eyeStyles['eyecatch__box--k']}>
            <Image
              className={eyeStyles['eyecatch__image--k']}
              src="/eyecatch-nameK.svg"
              width={604}
              height={156}
            />
          </div>
          <div className={eyeStyles['eyecatch__box--m']}>
            <Image
              className={eyeStyles['eyecatch__image--m']}
              src="/eyecatch-nameM.svg"
              width={1004}
              height={248}
            />
          </div>
        </div>
        <div className={eyeStyles['eyecatch__names__container--sp']}>
          <Image
            className={eyeStyles['eyecatch__image--sp']}
            src="/Group 14.png"
            width={280}
            height={822}
          />
        </div>
      </div>
      <div className={eyeStyles.eyecatch__scroll__container}>
        <div className={eyeStyles.eyecatch__scroll__bar}></div>
      </div>
    </div>
  )
}
