import MainModal from 'components/MainModal'
import Nav from 'components/nav/Nav'
import Content from 'components/content/Content'
import React from 'react'

const DefaultLayout = ({modal, children}) => {
    return (
        <>
            <Nav />
            <MainModal {...modal}/>
            <Content>
                {children}
            </Content>
        </>
    )
}

export default DefaultLayout
