import dotEnv from 'dotenv';
dotEnv.config({ path: './config/config.env' });
require('./config/dbConfig');

import app from './app';

const port = process.env.PORT || 3000;
app.listen(port , () => {
  console.log(`App run on ${port}`);
});