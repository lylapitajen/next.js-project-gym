import straxios from "../axios";
import { catchAsync } from "../utils";

export const getReviews = async () =>
  await catchAsync(async () => {
    const { data } = await straxios.get("/reviews", {
      params: {
        populate: "*",
      },
    });
    return data.data;
  }, []);

//Add write review
