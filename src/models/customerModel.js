import { Schema, model, models } from "mongoose";

const customerSchema = new Schema({
  name: {
    type: String,
    minLength: 2,
    required: true,
  },
  lastName: {
    type: String,
    minLength: 2,
    required: true,
  },
  email: {
    type: String,
    minLength: 8,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    minLength: 11,
    maxLength: 11,
    required: true,
    unique: true,
  },
  address: String,
  date: Date,
  products: {
    type: Array,
    default: [],
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
});

const Customer = models.Customer || model("Customer", customerSchema);

export default Customer;
