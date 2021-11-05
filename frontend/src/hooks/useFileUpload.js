import { useState } from 'react'
import { storage } from 'firebase'

const useFileUpload = () => {

    const [file, setFile] = useState('')
    const [pending, setPending] = useState()

    const handleFileChange = (e) => setFile(e.target.files[0])

    const uploadFileToStorage = async (path) => {
        const fileRef = storage.ref(path)
        await fileRef.put(file)

        return await fileRef.getDownloadURL()
    }


    const handleFileUpload = async (e, path) => {
        
        e.preventDefault()
        setPending(true)
        const downloadURL = await uploadFileToStorage(path)
        setPending(false)
        return downloadURL
    }

    return {file, pending, handleFileChange, handleFileUpload}
}

export default useFileUpload
