const app = require ('./app');
const dotenv = require('dotenv')

dotenv.config();
const porta = process.env.PORTA || 3000


app.listen(porta,(code)=>{
    console.log(`Server estutando na porta ${porta}`)
    console.log(code)
})