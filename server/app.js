const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());

mongoose.connect('mongodb://daniel:Password1234@ds233198.mlab.com:33198/apollo-prototype', { useUnifiedTopology: true, useNewUrlParser: true })
mongoose.connection.once('open', () => {
    console.log('connected to database');
});

// bind express with graphql
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});
