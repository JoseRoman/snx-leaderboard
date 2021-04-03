import App from 'next/app'
import Head from 'next/head'
import React from 'react'

import '../styles.css'

export default class Root extends App {
  render() {
    const { Component } = this.props

    return (
      <>
        <Head>
          <title>SNX Leaderboard</title>
          <link rel="shortcut icon" href="/static/favicon.ico" />
        </Head>
        <Component />
      </>
    )
  }
}
