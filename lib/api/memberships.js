import straxios from "../axios";
import { catchAsync } from "../utils";

export const getMemberships = async () =>
  await catchAsync(async () => {
    const { data } = await straxios.get("/memberships", {
      params: {
        populate: "*",
      },
    });
    return data.data;
  }, []);
