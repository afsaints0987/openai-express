const { Configuration, OpenAIApi} = require('openai');

const config = new Configuration({
    apiKey: process.env.OPENAI_APP_KEY,
});
const openai = new OpenAIApi(config);

const generateImage = async (req, res) => {
    const {prompt} = req.body;

    try {
        const response = await openai.createImage({
            prompt,
            n: 1,
            size: "512x512"
        })

        const imageUrl = response.data.data[0].url;
        
        res.status(200).json({
            prompt,
            success: true,
            data: imageUrl,
            message: "Generate Image Successful"
        })

    } catch(error) {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
        } else {
            console.log(error.message);
        }
        res.status(400).json({
            success: false,
            error: 'Generate Image Failed'
        })

    }
}

module.exports = {
    generateImage
}