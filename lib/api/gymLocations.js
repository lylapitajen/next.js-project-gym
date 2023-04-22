import { stringify } from "qs";
import straxios from "../axios";
import { catchAsync } from "../utils";

export const getGymLocations = async (params = { populate: "*" }) =>
  await catchAsync(async () => {
    const { data } = await straxios.get("/gym-locations", { params });
    return data.data;
  }, []);
export const findGymBranch = async (locationParams) =>
  await catchAsync(async () => {
    const { data } = await straxios.get(`/gym-locations`, {
      params: {
        populate: "*",
        filters: {
          slug: {
            $eq: locationParams,
          },
        },
      },
    });
    return data.data;
  }, null);
