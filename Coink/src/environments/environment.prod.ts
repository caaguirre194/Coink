export const environment = {
  production: true,
};

const domain = "https://api.bancoink.biz/qa";

export const coinkConfig = {
  login: domain + "Login/verifyDirectLogin?apiKey=441252",
  signup: domain + "signup/cifin?apiKey=441252",
  signupv2: domain + "Signup/v2?apiKey=441252",
};
