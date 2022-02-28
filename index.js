const express = require("express");
const app = express();
const PORT = 6969;
const UserData = require("./EmployeeData.json");
const graphql,{ GraphQLObjectType,GraphQLSchema,GraphQLInt,GraphQLFloat,GraphQLBoolean,GraphQLList,GraphQLString, GraphQLObjectType} = require('graphql');
const { graphqlHTTP } = require("express-graphql");

const UserType = new GraphQLObjectType({
    name : "User",
    fields : () => ({
         id : { type : GraphQLInt},
         name:{ type : GraphQLString}|{ type : null},
         email:{ type : GraphQLString}|{ type : null},
         password:{ type : GraphQLString}|{ type : null},
         about:{ type : GraphQLString }|{ type : null},
         token:{ type : GraphQLString}|{ type : null},
         country:{ type : GraphQLString}|{ type : null},
         location:{ type : GraphQLString}|{ type : null},
         lng:{ type : GraphQLInt}|{ type : null},
         lat:{ type : GraphQLInt}|{ type : null},
         dob :{ type : GraphQLString}|{ type : null},
         gender:{ type : GraphQLInt}|{ type : null},
         userType:{ type : GraphQLInt}|{ type : null},
         userStatus:{ type : GraphQLInt}|{ type : null},
         profilePicture : { type : GraphQLString}|{ type : null},
         coverPicture : { type : GraphQLString|{ type : null},
         enablefollowme: { type : GraphQLBoolean}|{ type : null},
         sendmenotifications: { type : GraphQLBoolean}|{ type : null},
         sendTextmessages: { type : GraphQLBoolean}|{ type : null},
         enabletagging:{ type : GraphQLBoolean}|{ type : null},
         createdAt:{ type : GraphQLString}|{ type : null},
         updatedAt:{ type : GraphQLString}|{ type : null},
         livelng: { type : GraphQLFloat}|{ type : null},
         livelat:{ type : GraphQLFloat}|{ type : null},
         liveLocation:{ type : GraphQLString}|{ type : null},
         creditBalance:{ type : GraphQLInt}|{ type : null},
         myCash :{ type : GraphQLInt}|{ type : null},
         })
})

const RootQuery = new GraphQLObjectType({
    name : "RootQueryType",
    fields:{

    }
})
const Mutation = "mutation";

const schema = new GraphQLSchema({query :RootQuery , mutation : Mutation})

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql = true
}))

app.listen(PORT,() => {
    console.log("Server Running");
});