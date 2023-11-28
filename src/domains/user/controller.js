const User = require("./modal");
const createToken = require("./../../utills/createToken");

const authenticateUser = async (data) => {
    console.log(data)
    try {
        const {email, password} = data;
        const fetchedUser = await User.find((user) => user.userEmail === email);

        if(!fetchedUser) {
            throw Error("Invalid Email");
        }

        const passwordMatch = await User.find((user) => user.password === password);
        if(!passwordMatch) {
            throw Error("Invalid Password");
        }

        const tokenData = { userId: fetchedUser.id, email};
        const token = await createToken(tokenData)

        // fetchedUser.token = token;
        // return fetchedUser;

        return {token};

    } catch (error) {
        throw error;
    };
};

module.exports = {authenticateUser}