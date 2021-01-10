import React, { lazy, Suspense } from 'react'
import Section from '@components/Section/Section'
import css from './Home.scss'
import Image from '@assets/img/developer.svg'
import Skeleton from '@components/Skeleton/Skeleton'

const Info = lazy(() => {
  return import('./Info')
})

const Loader = () => (
  <>
    <Skeleton type="H1" width="30%" />
    <Skeleton type="H2" width="50%" />
    <br />
    <Skeleton type="line" width="20%" />
    <br />
    <Skeleton count={11} />
    <br />
    <Skeleton width="160px" height="50px" />
  </>
)

const Home = () => (
  <Section className={css.home}>
    <div className={css.content}>
      <Suspense fallback={Loader()}>
        <Info />
      </Suspense>
    </div>

    <Image className={css.image} />
  </Section>
)

export default Home
