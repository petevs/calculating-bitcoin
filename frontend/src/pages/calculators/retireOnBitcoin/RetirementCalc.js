import Page from 'components/Page'
import PageHeader from 'components/PageHeader'
import RetirementForm from './RetirementForm'

const RetirementCalc = () => {
    return (
        <Page sx={{justifyContent: 'stretch', alignContent: 'start', gap: '1rem'}}>
            <PageHeader title='Retire on Bitcoin Calculator' />
            <RetirementForm />
        </Page>
    )
}

export default RetirementCalc
