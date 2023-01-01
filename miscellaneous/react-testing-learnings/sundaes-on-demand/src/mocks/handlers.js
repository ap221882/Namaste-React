import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:3030/scoops", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          name: "Chocolates",
          imagepath: "/images/chocolates.png",
        },
        {
          name: "Vanilla",
          imagepath: "/images/vanilla.png",
        },
      ])
    );
  }),
];
