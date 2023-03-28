import { rest } from "msw";

const baseURL = "https://ck-fsd-console-geeks.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 1,
        username: "Chris_Kelleher",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 1,
        profile_image:
        "https://res.cloudinary.com/dcummh4le/image/upload/v1/media/images/78067505_2920803431277932_2358919708251521024_n_r2he2c"
        })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];