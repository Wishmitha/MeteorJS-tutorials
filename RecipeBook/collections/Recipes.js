Recipes = new Mongo.Collection('recipes');

Recipes.allow({
    insert:function (userID,doc) {
        return !!userID;
    }
});

Ingridient = new SimpleSchema({

    name:{
        type:String
    },

    amount:{
        type:String
    }
});

RecipeSchema = new SimpleSchema({
    name: {
        type:String,
        label:"Name"
    },

    desc: {
        type:String,
        label:"Description"
    },

    ingridients:{
        type : [Ingridient]
    },

    inMenu:{
        type: Boolean,
        defaultValue : false,
        optional: true,
        autoform:{
            type:"hidden"
        }
    },

    author: {
        type:String,
        label:"Author",
        autoValue : function () {
            return this.userId;
        },
        autoform:{
            type:"hidden"
        }

    },

    createdAt: {
        type:Date,
        label:"Created At",
        autoValue : function () {
            return new Date();
        },autoform:{
            type:"hidden"
        }

    }

});

Recipes.attachSchema(RecipeSchema);