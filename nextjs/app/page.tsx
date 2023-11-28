"use client";

import styles from './page.module.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Content from '@/components/content';

export default function Home() {
  return (
    <main className={styles.container}>
      <Header />
      <Content />
      <Footer />
    </main >
  )
}
