import axios from "axios"

const imageBBApiKey = process.env.NEXT_PUBLIC_IMAGEBB_API_KEY

const uploadImageToImageBB = async (file) => {
    const formData = new FormData()
    formData.append('image', file)

    console.log(imageBBApiKey);

    const res = await axios.post(`https://api.imgbb.com/1/upload?key=${imageBBApiKey}`, formData)
    return res

}

export { uploadImageToImageBB }