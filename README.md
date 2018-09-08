# TS-API
Typescript api

## This is a typescript API with base model, controller and Model
This is a modified API made by YO 

`npm install -g yo generator-ts-api`

To initialize the API, use the command ` yo ts-api`.

## 1)How To Create a new Schema
On the file `schemas/userSchema`

```typescript
import * as mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
	name: { type: String },
	age: { type: String }
});

export default UserSchema;
```
After you create the schema, on the interfaces folder create a interface with the same objects from your schema.
You will use this interface to pass to the methods and generyc types.
Create a Schema any way you like. You don't have any problem.

## 2)How To Configure Models

In this structure, you can add every Schema in one place, so if you change you don't have any problem.

```typescript
import * as Mongoose from "mongoose";
import UserSchema from "../schemas/userSchema";
import { IModels } from '../interfaces/IModels';
import { IUser } from "../interfaces/IUser";

class Models implements IModels{
    public User = Mongoose.model<IUser>("User", UserSchema);
    ...
}

export default new Models;
```

This way, you will use the models easier on your API.

## 3)How To Create a new Repository
To Create a new Repository is as easy as

``` typescript
import { BaseRepository } from '../abstract/repository/baseReposytory';
import Models from '../models/models';
import { IUser } from '../interfaces/IUser';

class UserRepository extends BaseRepository<IUser>{

	constructor() { super(Models.User); }

}

export default new UserRepository;
```
**OBS: You need the model to create a repository.**

## 4)How To Create a new Controller
To create a new controller it's as easy as creating a repository.
```typescript
import UserRepository from '../repositories/userRepository';
import { BaseController } from '../abstract/controller/baseController';
import { IUser } from '../interfaces/IUser';

class UserController extends BaseController<IUser> {
	
	constructor() {
		super(UserRepository); 
	}
	
}
export default new UserController();
```
On the type of the Basecontronller, you put th
**OBS: You need a Repository to create a repository.**
## How to Configurate Routes

After Created all the objects mentioned before, you can add the routes to access the controller.
To do that you go into app.ts and add a new line like this
`this.addRoutes<IUser>( <Controller>, <Url that will be on the Requests>);`
`EX: this.addRoutes<IUser>(UserController, "users");`

And it's done. You created a new object with repository and a controller.
