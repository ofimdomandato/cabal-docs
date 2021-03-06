import React from 'react'
import Layout from '../components/Layout'
import Button from 'antd/lib/button'
import 'antd/lib/button/style/css'
import { Link } from "gatsby"
import '../styles/home.css'

const IndexPage = () => {
  return (
    <Layout>
      <div style={{display: 'flex', height: '70vh', justifyContent: 'center'}}>
        <div align="center" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <h1 style={{color: "#099", fontSize: 50, fontWeight: 'bold'}}>
            Metodologia de Gestão de Projetos
          </h1>
          <h2>Gestão da Tecnologia da Informação</h2>
          <br/>
          <Link to="/docs/apresentacao/01-conceitos">
            <Button type="primary" size="large" style={{marginRight: 10}}>Ir para Documentação</Button>
          </Link>
          <p style={{color: "#ccc", fontSize: 11, marginTop: '1rem', letterSpacing: 1}}>ÚLTIMA ATUALIZAÇÃO: ABRIL 2019</p>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
