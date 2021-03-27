# Simple Digimon API
This is a simple API project built using Node.js and Express. Deployed in a server-less way to AWS Lambda. With functions to display Digimon data and download Digimon data in the form of a .json file

## Requirements

[NodeJS](https://nodejs.org/en/)

AWS Secret Key and Access Key

[AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html)

[NPM](https://www.npmjs.com/get-npm)


## Getting Started

```sh
# clone it
git clone https://github.com/Tanzilu/express-serverless-lambda.git
cd express-serverless-lambda

# Install dependencies
npm install

# Start development serverless in AWS Lambda
sls deploy

```

## List Endpoints

API to read data digimon

```bash
https://8jq3hjpdve.execute-api.us-east-1.amazonaws.com/dev/read

```

API to download data digimon as .json file

```bash
https://8jq3hjpdve.execute-api.us-east-1.amazonaws.com/dev/download

```
## License

MIT © [Aulia Tanzilu Akmal](https://github.com/Tanzilu)



