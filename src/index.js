const app = require("./App");
const { PORT } = process.env;


const startApp = () => {
    app.listen(PORT, () => {
        console.log(`2fa_verification Backend running on port ${PORT}`);
    });
};

startApp();