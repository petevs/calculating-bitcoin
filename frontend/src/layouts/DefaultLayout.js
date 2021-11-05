import MainModal from 'components/MainModal'
import Nav from 'components/nav/Nav'
import Content from 'components/content/Content'
import React from 'react'
import { Container } from '@mui/material'

const DefaultLayout = ({modal, children}) => {
    return (
        <>
            <Nav />
            <MainModal {...modal}/>
            <Content>
                <Container maxWidth={'lg'}>
                    {children}
                </Container>
            </Content>
        </>
    )
}

export default DefaultLayout
