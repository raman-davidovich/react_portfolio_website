import ImageMinimizerPlugin, {
  imageminMinify,
  imageminGenerate,
} from "image-minimizer-webpack-plugin";

export const optimization = {
  minimizer: [
    "...",
    new ImageMinimizerPlugin({
      minimizer: {
        implementation: imageminMinify,
        options: {
          plugins: [
            "imagemin-gifsicle",
            "imagemin-mozjpeg",
            "imagemin-pngquant",
            "imagemin-svgo",
          ],
        },
      },
      generator: [
        {
          // You can apply generator using `?as=webp`, you can use any name and provide more options
          preset: "webp",
          implementation: imageminGenerate,
          options: {
            plugins: ["imagemin-webp"],
          },
        },
      ],
    }),
  ],
};
