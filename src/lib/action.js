"use server";
import { revalidatePath } from "next/cache";
import { connectToDb } from "./utils";
import ShortUniqueId from "short-unique-id";

const { User, ShortUrl } = require("./models");

export const addUrl = async (e) => {
  "use server";
  const full = e.get("myInput");
  const uid = new ShortUniqueId({ length: 10 });
  // console.log(full);
  try {
    connectToDb();
    const newShortUrl = new ShortUrl({
      full,
      short: uid.rnd(),
    });
    // console.log(newShortUrl)
    await newShortUrl.save();
    // console.log("saved url to db");
    revalidatePath("/", "page");
  } catch (err) {
    //console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const getFullUrl = async (short) => {
  "use server";
  try {
    connectToDb();
    const url = await ShortUrl.findOneAndUpdate(
      { short: short },
      { $push: { visitHistory: { timestamp: Date.now() } } }
    );
    if (url == null) {
      return { notFound: true };
    }
    url.clicks++;
    url.save();
    revalidatePath("/");
    return JSON.stringify(url);
  } catch (error) {
    // console.log(error);
    throw new Error("failed to fetch URL !!");
  }
};

export const getAllUrl = async () => {
  "use server";
  try {
    connectToDb();
    const url = await ShortUrl.find();
    return JSON.stringify(url);
  } catch (error) {
    // console.log(error);
    throw new Error("failed to fetch URL !!");
  }
};

export const deleteUrl = async (id) => {
  "use server";
  try {
    connectToDb();
    await ShortUrl.findByIdAndDelete(id);
    // console.log("deleted from db");
    revalidatePath("/", "page");
    return true;
  } catch (err) {
    // console.log(err);
    return { error: "Something went wrong!" };
  }
};
