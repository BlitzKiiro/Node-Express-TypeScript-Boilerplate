import { Schema, model, Document, Model } from "mongoose";
import Joi from "joi";

interface IModel extends Document {}

const Schema = new Schema(
  {},

  {
    timestamps: true,
  }
);

const Employee: Model<IModel> = model("Employee", Schema);

export { Employee, IModel };
