import straxios from "../axios";
import { catchAsync } from "../utils";

export const getGymClasses = async () =>
  await catchAsync(async () => {
    const { data } = await straxios.get("/gym-classes", {
      params: {
        populate: "*",
      },
    });
    return data.data;
  }, []);
