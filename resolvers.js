const Item = require("./models/Item");

const resolvers = {
  Query: {
    getAllItems: async () => {
      return await Item.find();
    },
    getSingleItem: async (parent, args, context, info) => {
      const { id } = args;
      console.log(args);
      return await Item.findById(id);
    },
  },
  Mutation: {
    createItem: async (parent, args, context, info) => {
      const { name, details } = args.item;
      const item = new Item({ name, details });
      await item.save();
      return item;
    },
    deleteItem: async (parent, args, context, info) => {
      const { id } = args;
      await Item.findByIdAndDelete(id);
      return "Item deleted!";
    },
    updateItem: async (parent, args, context, info) => {
      const inputObject = {};
      const { id } = args;
      const { name, details } = args.item;
      if (name !== "undefined") {
        inputObject.name = name;
      }
      if (details !== "undefined") {
        inputObject.details = details;
      }
      const item = await Item.findByIdAndUpdate(id, inputObject, { new: true });
      return item;
    },
  },
};

module.exports = resolvers;
