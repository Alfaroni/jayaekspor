# JayaEskpor

## It’s tiny — never ship unused CSS again.
Tailwind automatically removes all unused CSS when building for production, which means your final CSS bundle is the smallest it could possibly be. In fact, most Tailwind projects ship less than 10kB of CSS to the client.
```
npx tailwindcss -i ./assets/sass/libs/tailwind.css -o ./assets/sass/libs/tailwind.min.css --watch
```
