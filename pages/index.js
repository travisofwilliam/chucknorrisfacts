import { useState } from 'react'
import Head from 'next/head'
const axios = require('axios')

const Index = () => {

  const [resObj, setResObj] = useState({})

  const handleClick = (e) => {
    e.preventDefault()

    axios.get('https://api.chucknorris.io/jokes/random')
      .then(res => {
        setResObj(res)
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='container text-center mt-3'>
      <Head>
        <link rel="stylesheet" href="https://bootswatch.com/4/materia/bootstrap.min.css" />
      </Head>

      <div className="jumbotron">
        <h1>
          Chuck Norris
        <p><small className="text-muted">Fact Generator</small></p>
        </h1>
        <button className='mt-1 btn btn-primary' onClick={handleClick}>Generate Chuck Norris Fact</button>
      </div>
      {
        Object.keys(resObj).length >= 1 ?
          <div className="card">
            <div className="card-header">
              <h2>Fact</h2>
            </div>
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                <p className='mt-3 lead'>{resObj.data.value}</p>
                {/* <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer> */}
              </blockquote>
            </div>
          </div>
          : ''
      }

    </div>
  )
}

export default Index