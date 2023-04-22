import straxios from "../axios";
import { catchAsync } from "../utils";

export const getHeadOfficeData = async () =>
  await catchAsync(async () => {
    const { data } = await straxios.get("/head-office", {
      params: {
        populate: "*",
      },
    });
    return data.data;
  }, {});
