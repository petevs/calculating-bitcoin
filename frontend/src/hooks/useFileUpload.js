import { useState, useContext } from 'react'
import { storage } from 'firebase'
import GlobalContext from 'state/GlobalContext'

const useFileUpload = () => {

    const { state } = useContext(GlobalContext)
    

    const [file, setFile] = useState('')
    const [pending, setPending] = useState()
    const [url, setUrl] = useState('')

    const handleFileChange = (e) => setFile(e.target.files[0])

    const uploadFileToStorage = async (newFile, path) => {
        const fileRef = storage.ref(`${state.auth.uid}/${path}`)
        await fileRef.put(newFile || file)

        return await fileRef.getDownloadURL()
    }

    const handleFileUpload = async (e, path, callback) => {
        
        e.preventDefault()
        setPending(true)
        const downloadURL = await uploadFileToStorage(path)
        setPending(false)
        setUrl(downloadURL)

        return downloadURL
    }

    const handleFileUploadOneStep = async (e, path, callback) => {
        e.preventDefault()
        setPending(true)
        const downloadURL = await uploadFileToStorage(e.target.files[0], path)
        setPending(false)
        setUrl(downloadURL)

        return downloadURL
    }


    return {file, pending, url, handleFileChange, handleFileUpload, handleFileUploadOneStep}
}

export default useFileUpload
