import { useState, useContext } from 'react'
import { storage } from 'firebase'
import GlobalContext from 'state/GlobalContext'

const useFileUpload = () => {

    const { state } = useContext(GlobalContext)
    

    const [file, setFile] = useState('')
    const [pending, setPending] = useState(false)
    const [url, setUrl] = useState('')

    const handleFileChange = (e) => setFile(e.target.files[0])

    const uploadFileToStorage = async (newFile, path) => {
        const fileRef = storage.ref(`${state.auth.uid}/${path}/${newFile.name || file.name}`)
        await fileRef.put(newFile || file)

        return await fileRef.getDownloadURL()
    }

    const handleFileUpload = async (e, path, callback) => {
        
        e.preventDefault()
        handleFileChange(e)
        setPending(true)
        const downloadURL = await uploadFileToStorage(path)
        setUrl(downloadURL)
        if(callback){
            callback()
        }
        setPending(false)

        return downloadURL
    }

    const handleFileUploadOneStep = async (e, path, callback) => {
        e.preventDefault()
        setPending(true)
        handleFileChange(e)
        const downloadURL = await uploadFileToStorage(e.target.files[0], path)
        setUrl(downloadURL)
        if(callback){
            callback(downloadURL)
        }
        setPending(false)

        return downloadURL
    }


    return {file, pending, url, handleFileChange, handleFileUpload, handleFileUploadOneStep}
}

export default useFileUpload
